# grunt-[html2jade](https://github.com/donpark/html2jade) [ ![build-status](https://travis-ci.org/hemanth/grunt-html2jade.svg?branch=master) ](https://travis-ci.org/hemanth/grunt-html2jade)
> Convert HTML to JADE.


## How to use this?

```shell
npm install grunt-html2jade --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html2jade');
```

## The "html2jade" task

### Overview
In your project's Gruntfile, add a section named `html2jade` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html2jade: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

```
{
        double:true,
        numeric:false,
        scalate:true,
        nspaces:2,
        tabs:false,
        donotencode:false,
        bodyless:false,
}
```

[Read more](https://github.com/donpark/html2jade#command-line-options) about the options.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
