import gulp from 'gulp';
import * as constantes from '../constantes';

gulp.task('copia-deps-b3', () => {
  const DEPS_ORIGEM = constantes.bootstrap.v3.deps;
  const DEPS_DESTINO = constantes.bootstrap.v3.material;

  return gulp.src(DEPS_ORIGEM)
             .pipe(gulp.dest(DEPS_DESTINO));
});

gulp.task('copia-para-documentacao-bs-v3', [
  'copia-deps-b3'
]);
