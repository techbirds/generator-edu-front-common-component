'use strict';

const gulp = require('gulp');
const istanbul = require('gulp-istanbul');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('coverage', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(istanbul({
      coverageVariable: '__coverage__'
    }))
    .pipe(gulp.dest('./test/src'));
});

// Static Server + watching scss/html/js files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: "./",
    index: 'tutorials/<%= component_name %>/demo.html'
  });
  gulp.watch("./src/**/*.scss", ['sass']);
  gulp.watch("./src/**/*.html").on('change', browserSync.reload);
  gulp.watch("./src/**/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("src/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      'outputStyle': 'compressed',
      'errLogToConsole': true,
      'includePaths': ['./lib', './lib/res-base', './lib/res-base/scss'],
    }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("src"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);