const gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso');

gulp.task('default', _ => {
    return gulp.src('./src/flex.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/'))
});
