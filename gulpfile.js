var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('scss/gulp-test.scss')
    .pipe(sass()) //using gulp-sass
    .pipe(gulp.dest('dist/css/'))
});