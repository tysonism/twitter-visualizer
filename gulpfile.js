'use strict';

let gulp = require('gulp');
let less = require('gulp-less');
let plumber = require('gulp-plumber');

gulp.task('less', function() {
  return gulp.src('src/client/less/*.less')
    .pipe(plumber(function (error) {
      console.log(error);
      this.emit('end');
      this.destroy();
    }))
    .pipe(less())
    .pipe(gulp.dest('src/client/'));
});

gulp.task('watch', function() {
  gulp.watch('src/client/less/**/*.less', ['less']);
});

gulp.task('default', ['watch']);