'use strict';
 
let gulp = require('gulp');
let watch = require('gulp-watch');
 
gulp.task('html', () => {
	return watch('src/**/*.html', { ignoreInitial: false })
 		.pipe(gulp.dest('target'));
});