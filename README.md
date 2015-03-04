## YourProjectName Project @YourCompany

Below are the instructions for getting the project up and running for development, testing and generating the production ready version. The instructions are valid for Mac OSX computers.

### Technologies / Packages support

#### TODO

### Project setup instructions (new developer)

To setup the packages and libraries, run:

```
$ npm install & bower install
```

Make sure you have ruby 2.1+ installed. It is normally installed by default in OSX.
We recommend using rbenv for ruby management as explained in [article](http://robots.thoughtbot.com/using-rbenv-to-manage-rubies-and-gems). Run:

```
$ gem install bundler
$ bundle install
```

### Configuration

#### START TODO
You can find the configuration files (JSON) below **app/config** folder for each environment ("staging" grunt target uses production file). The configuration javascript file is generated for each specific environment when running the build process and it is located at **app/modules/config.js**. Those configurations are used, for example, to configure the AJAX endpoints for retrieve the data. 
#### END TODO

### Development Environment

To run a livereload development environment, run from command line:

```
$ gulp serve
```

That will refresh the browser and/or rerun the unit (TODO: and e2e tests), compass builds and configuration generation whenever any relevant source code has changed. To run the application, go to <http://localhost:8000/>.

#### START TODO
We simulate the backend in the development environment by serving local files from a ruby sinatra application. The local files are located at folder **app/data** and follow the convention of having the file name with same name as the url (with '/' converted to '.'). Normally files served will contain JSON data and will be prefixed by a .json extension.

We also have a proxy configured at the Gruntfile so that all requests to the http://localhost:8000/gateway path will be redirected to the backend local server located at http://localhost:4567/, thus not causing same domain policy restriction issues.

To run the backend server, run from command line:

```
$ ruby server.rb
```

That assumes you have already run once the bundle install command, thus having sinatra gem already installed.
#### END TODO

### Test Environment

To run once the unit and e2e tests, run from command line:

```
$ gulp test
```

The unit tests are located at **app/scripts** directory with extension .spec.(jsx,cjsx,js) and use Jasmine + [Jest](https://facebook.github.io/jest/) framework.

#### START TODO
The e2e tests are located at **test/e2e** directory and use Jasmine + [Protractor](https://github.com/angular/protractor) framework.
#### END TODO

### Production Environment

To create a production server build, run from command line

```
$ gulp
```

which is the same as calling

```
$ gulp build
```

The production build creates a special structure so that all files are minified, compressed and versioned. It also creates a specific package so that the application could be deployed to a specific server **[STILL TO DEFINE DEPLOYMENT STRUCTURE]**.

### UI Guide

We have created a UI guide to show the customizations done to the design. The idea is to be able to showcase all components and designs used in the project, that including React components and have a central place where all is documented.

To access the UI guide (running on livereload), run:
```
$ gulp server
```
and access <http://localhost:8000/styleguide.html>.

### List of things to support / supported

+ Sourcemaps with Compass+SASS
+ UI angular router (need?)
+ Integration with a cloud CI server (need and can be done with private project?)
+ [USE yepnode if needed] Modules loading by user role
+ [DONE] JS folder divided by scenarios
+ [DONE] Running e2e tests on build source
+ [WONT SUPPORT] Coffescript + sourcemaps support
+ [WONT SUPPORT] Use Mocha + Chai instead of Jasmine for tests

### Setting Sublime

* Setting up eslint with sublime <https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48>
* If you are using coffeescript + react (.csjx, use <https://github.com/reactjs/sublime-react> for syntax highlight)
* Unified editor settings for sublime from .editorconfig: <https://github.com/sindresorhus/editorconfig-sublime>

### Links

### Decisions
#### CSS
Use [SMACSS](https://smacss.com/) architecture for CSS. Did some experiementation with [CSStyle](http://csstyle.io), looks a nice things to enforce developers to couple with rules but it (1) requires to use ruby SASS implementation instead of libsass ([due to need of support SASS 3.4 syntax](https://github.com/geddski/csstyle/issues/28)), (2) Sourcemaps are messed up, (3) seems a bit of a hack from the original CSS syntax and (4) not really liked the parts concept.

> Written with [StackEdit](https://stackedit.io/).
