var gulp = require('gulp'),
    ngann = require('gulp-ng-annotate'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');
gulp.task('default', function () {
  return gulp.src('./ion-enable-scroll.js')
    .pipe(ngann())
    .pipe(uglify())
    .pipe(rename('ion-enable-scroll.min.js'))
    .pipe(gulp.dest('./'));
});
