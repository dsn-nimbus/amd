import gulp from 'gulp';
import minCss from 'gulp-minify-css';
import * as constantes from '../constantes';

gulp.task('build-bs-v3', ['del-dist-bs-v3'], () => {
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
