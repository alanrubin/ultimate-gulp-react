Sublime

> Setting up eslint with sublime : https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48
> If you are using coffeescript + react (.csjx, use https://github.com/reactjs/sublime-react for syntax highlight)
> Unified editor settings for sublime from .editorconfig: https://github.com/sindresorhus/editorconfig-sublime
> SASS Guide

## Links

## Decisions
### CSS
Use [SMACSS](https://smacss.com/) architecture for CSS. Did some experiementation with [CSStyle](http://csstyle.io), looks a nice things to enforce developers to couple with rules but it (1) requires to use ruby SASS implementation instead of libsass ([due to need of support SASS 3.4 syntax](https://github.com/geddski/csstyle/issues/28)), (2) Sourcemaps are messed up, (3) seems a bit of a hack from the original CSS syntax and (4) not really liked the parts concept.
