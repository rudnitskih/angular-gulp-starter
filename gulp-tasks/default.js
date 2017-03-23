var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['generate'], (cb) => {
	gulp.start('watch');
	cb();
})

gulp.task('prebuild', ['clean'], (cb) => cb());
gulp.task('generate', ['prebuild'], (cb) => {
	gulp.start('html');
	gulp.start('styles');
	gulp.start('scripts');
	cb();
});

// gulp.task('afterbuild', ['generate'], (cb) => {
	
// });