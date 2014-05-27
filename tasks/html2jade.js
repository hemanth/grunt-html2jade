/*
 * grunt-html2jade
 * https://github.com/hemanth/grunt-html2jade
 *
 * Copyright (c) 2014 hemanth.hm
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var html2jade = require('html2jade');

  grunt.registerMultiTask('html2jade', 'Convert HTML to JADE.', function() {
    var options = this.options({
        double:true,
        numeric:false,
        scalate:true,
        nspaces:2,
        tabs:false,
        donotencode:false,
        bodyless:false,
    });

    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        return grunt.file.read(filepath);
      });


      html2jade.convertHtml(src, options, function (err, jade) {
          grunt.file.write(f.dest, jade);
      });
      
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
