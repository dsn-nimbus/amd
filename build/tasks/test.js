import gulp from 'gulp';
import cssLint from 'gulp-csslint';
import * as constantes from '../constantes';

gulp.task('test-bs-v3', () => {
  const ARQUIVOS_CSS_BS_V3 = constantes.bootstrap.v3.css;

  return gulp.src(ARQUIVOS_CSS_BS_V3)
             .pipe(cssLint())
             .pipe(cssLint.reporter());
});
