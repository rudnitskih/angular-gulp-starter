'use strict';
 
let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let reload = browserSync.reload;
 
gulp.task('styles', () => {
  return gulp.src('src/assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('target/assets/css'))
    //.pipe(reload({ stream:true }));
});