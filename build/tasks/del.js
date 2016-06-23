import gulp from 'gulp';
import del from 'del';
import * as constantes from '../constantes';

gulp.task('del-dist-bs-v3', () => {
  const CAMINHO_DIST_BOOTSTRAP_3 = constantes.bootstrap.v3.dist;

  return del([CAMINHO_DIST_BOOTSTRAP_3]);
});

gulp.task('del-dist-bs-v4', () => {
  const CAMINHO_DIST_BOOTSTRAP_4 = constantes.bootstrap.v4.dist;

  return del([CAMINHO_DIST_BOOTSTRAP_4]);
});
