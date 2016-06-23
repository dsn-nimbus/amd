import gulp from 'gulp';
import * as constantes from '../constantes';

gulp.task('copia-deps-b3', () => {
  const DEPS_ORIGEM = constantes.bootstrap.v3.deps;
  const DEPS_DESTINO = constantes.bootstrap.v3.deps;

  return gulp.src(DEPS)
             .pipe(gulp.dest(DEPS_DESTINO));
});

gulp.task('copia-css-b3', () => {
  const CSS = constantes.bootstrap.v3.css;
  const DOC_DEP = constantes.bootstrap.v3.documentacaoDepsCSS;

  return gulp.src(CSS)
             .pipe(gulp.dest(DOC_DEP));
});

gulp.task('copia-js-b3', () => {
  const JS = constantes.bootstrap.v3.srcArquivosJs;
  const DOC_DEP = constantes.bootstrap.v3.documentacaoDepsJS;

  return gulp.src(JS)
             .pipe(gulp.dest(DOC_DEP));
});

gulp.task('copia-para-documentacao-bs-v3', [
  'copia-css-b3',
  'copia-js-b3',
  'copia-deps-b3'
]);
