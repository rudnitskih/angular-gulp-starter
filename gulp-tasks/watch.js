let gulp = require('gulp');
let browserSync = require('browser-sync');
let watch = require('gulp-watch');


// watch files for changes and reload
gulp.task('watch', function() {
  browserSync({
    server: {
      baseDir: 'target'
    }
  });

  watch('src/**/*.scss', (cb) => {
    gulp.start('styles');
  });

  watch(['target/**/*'], browserSync.reload);
});