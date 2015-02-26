'use strict';

// FUTURE: Use gulpfile defined at https://gist.github.com/mitchelkuijpers/11281981/revisions, coming
//  from article http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
//  it has interesting features such as envify and uglify usage
// Interesting links as well: http://christianalfoni.github.io/javascript/2014/08/29/choosing-the-correct-packaging-tool-for-react-js.html
//  and http://christianalfoni.github.io/javascript/2014/10/30/react-js-workflow-part2.html

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var del         = require('del');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var watchify = require('watchify');
var runSequence = require('run-sequence');
var _ = require('lodash');

var env = 'dev';

gulp.task('clean:dev', function() {
  return del(['.tmp']);
});

gulp.task('clean:dist', function() {
  return del(['dist']);
});

function handleError(task) {
  return function(err) {
    $.util.log($.util.colors.red(err));
    $.notify.onError(task + ' failed, check the logs..')(err);
  };
}

var dependencies = [
    'react',
    'react/addons'
];

function scripts(watch) {
  var bundler, rebundle;
  bundler = browserify('./app/scripts/app.js', _.extend({
    extensions: ['.jsx'],
    debug: env === 'dev',
    transform: 'reactify'
  }, watchify.args));
    
  _.each(dependencies, function(dep) {
    bundler.external(dep);
  });

  if(watch) {
    bundler = watchify(bundler);
  }
 
  rebundle = function() {
    var stream = bundler.bundle();
    stream.on('error', handleError('Browserify Error'));
    stream = stream.pipe(source('app.js'));
    return (watch ? stream.pipe(gulp.dest('.tmp/scripts')).pipe($.connect.reload()) : stream.pipe(gulp.dest('.tmp/scripts')));
  };
 
  bundler.on('update', rebundle);
  bundler.on('log', function (msg) {
    $.util.log($.util.colors.cyan('[Watchify]') + ' Files recompiled: ' + msg);
  });
  return rebundle();
}

function vendorScripts() {
  var bundler, rebundle;
  bundler = browserify({
    require: dependencies,
    debug: env === 'dev'
  });

  bundler.transform('browserify-shim');
 
  rebundle = function() {
    var stream = bundler.bundle();
    stream.on('error', handleError('Browserify Vendor Error'));
    stream = stream.pipe(source('vendor.js'));
    return stream.pipe(gulp.dest('.tmp/scripts'));
  };
 
  return rebundle();
}

gulp.task('scripts', function() {
  return scripts(false);
});

gulp.task('vendor-scripts', function() {
  return vendorScripts();
});
 
gulp.task('watchScripts', function() {
  return scripts(true);
});

gulp.task('compass', function() {
  return gulp.src('app/styles/**/*.scss')
    .pipe($.plumber())
    .pipe($.compass({
      sourcemap: true,
      css: '.tmp/styles',
      sass: 'app/styles'
    }))
    .pipe($.connect.reload());
});

gulp.task('imagemin', function() {
  return gulp.src('app/images/*')
    .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('copy', function() {
  return gulp.src(['app/*.txt', 'app/*.ico'])
    .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() { 
    return gulp.src('./app/fonts/**.*') 
        .pipe(gulp.dest('dist/styles/')); 
});

gulp.task('bundle', function () {
  var assets = $.useref.assets({searchPath: '{.tmp,app}'});
  var jsFilter = $.filter(['**/*.js']);
  var cssFilter = $.filter(['**/*.css']);
  var htmlFilter = $.filter(['*.html']);

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(jsFilter)
    .pipe($.uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe($.minifyCss())
    .pipe(cssFilter.restore())
    .pipe(htmlFilter)
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(htmlFilter.restore())
    .pipe($.revAll({ ignore: [/^\/favicon.ico$/g, '.html', '.svg', '.jsx', '.jpg', '.png'] }))
    .pipe($.revReplace())
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('connect', function() {
  $.connect.server({
    root: ['.tmp', 'app', 'node_modules'],
    livereload: true,
    port: 8000,
    middleware: function(/*connect, o*/) {
        return [ (function() {
            var url = require('url');
            var proxy = require('proxy-middleware');
            var options = url.parse('http://127.0.0.1:4567/server');
            options.route = '/server';
            return proxy(options);
        })() ];
    }
  });
});

gulp.task('html', function () {
  gulp.src('app/*.html')
    .pipe($.connect.reload());
});

gulp.task('serve', ['connect', 'watch']);

gulp.task('watch', function() {
  runSequence('clean:dev', ['watchScripts', 'compass', 'vendor-scripts']);

  gulp.watch('app/*.html', ['html']);
  gulp.watch('app/styles/**/*.scss', ['compass']);
});

gulp.task('build', function() {
  env = 'prod';

  runSequence(['clean:dev', 'clean:dist'],
              ['scripts', 'vendor-scripts', 'compass', 'imagemin', 'copy'],
              'fonts',
              'bundle');
});
