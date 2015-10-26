import gulp from 'gulp';
import * as constantes from './utils/const';

gulp.task('copia-exemplo-bs-v3', () => {
  const SRC_BS_V3_ARQUIVOS_CSS = constantes.bootstrap.v3.srcArquivosCss;
  const DEPENDENCIAS_BS_V3_PASTA_CSS = constantes.bootstrap.v3.depCss;

  return gulp.src(SRC_BS_V3_ARQUIVOS_CSS)
             .pipe(gulp.dest(DEPENDENCIAS_BS_V3_PASTA_CSS));
});

gulp.task('copia-exemplo-bs-v4', () => {
  const SRC_BS_V4_ARQUIVOS_CSS = constantes.bootstrap.v4.srcArquivosCss;
  const DEPENDENCIAS_BS_V4_PASTA_CSS = constantes.bootstrap.v4.depCss;

  return gulp.src(SRC_BS_V4_ARQUIVOS_CSS)
             .pipe(gulp.dest(DEPENDENCIAS_BS_V4_PASTA_CSS));
});
