import gulp from 'gulp';
import * as constantes from '../constantes';

gulp.task('copia-js-b3', () => {
  const SRC_BS_V3_ARQUIVOS_JS = constantes.bootstrap.v3.srcArquivosJs;
  const DEPENDENCIAS_BS_V3_PASTA_JS = constantes.bootstrap.v3.depJs;

  return gulp.src(SRC_BS_V3_ARQUIVOS_JS)
             .pipe(gulp.dest(DEPENDENCIAS_BS_V3_PASTA_JS));
});

gulp.task('copia-css-b3', () => {
  const SRC_BS_V3_ARQUIVOS_CSS = constantes.bootstrap.v3.srcArquivosCss;
  const DEPENDENCIAS_BS_V3_PASTA_CSS = constantes.bootstrap.v3.depCss;

  return gulp.src(SRC_BS_V3_ARQUIVOS_CSS)
             .pipe(gulp.dest(DEPENDENCIAS_BS_V3_PASTA_CSS));
});

gulp.task('copia-css-b4', () => {
  const SRC_BS_V4_ARQUIVOS_CSS = constantes.bootstrap.v4.srcArquivosCss;
  const DEPENDENCIAS_BS_V4_PASTA_CSS = constantes.bootstrap.v4.depCss;

  return gulp.src(SRC_BS_V4_ARQUIVOS_CSS)
             .pipe(gulp.dest(DEPENDENCIAS_BS_V4_PASTA_CSS));
});

gulp.task('copia-js-b4', () => {
  const SRC_BS_V4_ARQUIVOS_JS = constantes.bootstrap.v4.srcArquivosJs;
  const DEPENDENCIAS_BS_V4_PASTA_JS = constantes.bootstrap.v4.depJs;

  return gulp.src(SRC_BS_V4_ARQUIVOS_JS)
             .pipe(gulp.dest(DEPENDENCIAS_BS_V4_PASTA_JS));
});

gulp.task('copia-exemplo-bs-v3', ['copia-css-b3', 'copia-js-b3']);
gulp.task('copia-exemplo-bs-v4', ['copia-css-b4', 'copia-js-b4']);
