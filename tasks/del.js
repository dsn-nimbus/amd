import gulp from 'gulp';
import del from 'del';
import * as constantes from './constantes';

gulp.task('del-dist-bs-v3', () => {
  const DIST = constantes.bootstrap.v3.dist;

  return del([DIST]);
});
