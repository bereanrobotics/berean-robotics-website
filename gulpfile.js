const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const bundledGemSpawn = require('bundled-gem-spawn');

const $ = require('gulp-load-plugins')();

const siteRoot = '_site';
const sassFiles = '_sass/**/*.?(s)css';

const jsFiles = '_javascript/**/*.js';

const sassPaths = [
  'node_modules/normalize.scss/sass',
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

const foundationJsFiles = [
  'node_modules/what-input/dist/what-input.js',
  'node_modules/foundation-sites/dist/js/foundation.js'
];

gulp.task('javascript', function() {
  gulp.src(jsFiles)
    .pipe(uglify())
    .pipe(gulp.dest('assets/javascript'));

  gulp.src('node_modules/jquery/dist/jquery.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/javascript'));

  return gulp.src(foundationJsFiles)
    .pipe(concat('foundation.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/javascript'));

});

gulp.task('sass', (done) => {
  gulp.src(sassFiles)
    .pipe(sass({
      includePaths: sassPaths,
      outputStyle: 'compressed'
    }).on('error', $.sass.logError))
    // .pipe(concat('all.css'))
    .pipe(gulp.dest('assets/css'));
  done();
});

gulp.task('jekyll', (done) => {
  const jekyll = bundledGemSpawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
  done();
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(sassFiles, gulp.series(['sass']));
  gulp.watch(jsFiles, gulp.series(['javascript']));
});

gulp.task('default', gulp.series(['sass', 'javascript', 'jekyll', 'serve']));
