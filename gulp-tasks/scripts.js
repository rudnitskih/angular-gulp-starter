'use strict';

let gulp = require('gulp');
let concat = require('gulp-concat');
let angularFilesort = require('gulp-angular-filesort');
let ngAnnotate = require('gulp-ng-annotate');
let watch = require('gulp-watch');
 
gulp.task('scripts', () => {
	return watch('src/**/*.js', { ignoreInitial: false })
		.pipe(angularFilesort())
		.pipe(ngAnnotate())
		.pipe(concat('main.js'))
 		.pipe(gulp.dest('target/assets'));
});