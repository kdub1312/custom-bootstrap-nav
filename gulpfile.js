var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
    return gulp.src('scss/gulp-test.scss')
    .pipe(sass()) //using gulp-sass
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('imgSquash', imgSquash);

function imgSquash() {
    return gulp
    .src("img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img/"));
}