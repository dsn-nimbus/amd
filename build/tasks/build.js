import gulp from 'gulp';
import minCss from 'gulp-minify-css';
import runSequence from 'run-sequence';

gulp.task('build-v3', () => {
  runSequence(
    'del-dist-bs-v3',
    'min-css',
    'copia-deps-b3',
    'copia-dist-doc-b3'
  )
});
