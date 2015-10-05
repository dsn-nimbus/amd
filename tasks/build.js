const gulp = require('gulp');
const constantes = require('./utils/const');
const minCss = require('gulp-minify-css');

gulp.task('build-bs-v3', () => {
  const ARQUIVOS_SRC_BOOTSTRAP_CSS = constantes.bootstrap.v3.srcArquivosCss;
  const CAMINHO_DIST_BOOTSTRAP_3 = constantes.bootstrap.v3.dist;

  return gulp.src(ARQUIVOS_SRC_BOOTSTRAP_CSS)
             .pipe(minCss())
             .pipe(gulp.dest(CAMINHO_DIST_BOOTSTRAP_3));
});

gulp.task('build-bs-v4', ['del-dist-bs-v4'], () => {
  const ARQUIVOS_SRC_BOOTSTRAP_CSS = constantes.bootstrap.v4.srcArquivosCss;
  const CAMINHO_DIST_BOOTSTRAP_4 = constantes.bootstrap.v4.dist;

  return gulp.src(ARQUIVOS_SRC_BOOTSTRAP_CSS)
             .pipe(minCss())
             .pipe(gulp.dest(CAMINHO_DIST_BOOTSTRAP_4));
});
