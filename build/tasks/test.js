import gulp from 'gulp';
import cssLint from 'gulp-csslint';
import * as constantes from '../constantes';

gulp.task('test-bs-v3', () => {
  const CSS = constantes.bootstrap.v3.css;

  return gulp.src(CSS)
             .pipe(cssLint())
             .pipe(cssLint.reporter());
});
