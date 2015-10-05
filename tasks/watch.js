const gulp = require('gulp');
const constantes = require('./utils/const');

gulp.task('watch', () => {
  var SRC_BS_V3_ARQUIVOS_CSS = constantes.bootstrap.v3.srcArquivosCss;
  var SRC_BS_V4_ARQUIVOS_CSS = constantes.bootstrap.v4.srcArquivosCss;

  gulp.watch([SRC_BS_V3_ARQUIVOS_CSS], ['copia-exemplo-bs-v3']);
  gulp.watch([SRC_BS_V4_ARQUIVOS_CSS], ['copia-exemplo-bs-v4']);
});
