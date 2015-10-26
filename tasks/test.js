import gulp from 'gulp';
import cssLint from 'gulp-csslint';
import * as constantes from './utils/const';

gulp.task('test-bs-v3', () => {
  const ARQUIVOS_CSS_BS_V3 = constantes.bootstrap.v3.srcArquivosCss;

  return gulp.src(ARQUIVOS_CSS_BS_V3)
             .pipe(cssLint())
             .pipe(cssLint.reporter());
});

gulp.task('test-bs-v4', () => {
  const ARQUIVOS_CSS_BS_V4 = constantes.bootstrap.v4.srcArquivosCss;

  return gulp.src(ARQUIVOS_CSS_BS_V4)
             .pipe(cssLint())
             .pipe(cssLint.reporter());
});
