import gulp from 'gulp';
import * as constantes from '../constantes';

gulp.task('copia-dist-doc-b3', () => {
  const DIST = constantes.bootstrap.v3.dist;
  const DEPS_DESTINO = constantes.bootstrap.v3.material;

  return gulp.src(DIST + '*.css')
             .pipe(gulp.dest(DEPS_DESTINO + 'css/'));
});
