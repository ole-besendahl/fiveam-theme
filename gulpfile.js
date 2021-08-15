const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');




gulp.task('sass', function() {
    return gulp.src('styles/custom-styles.scss')
        .pipe(sass())
        .pipe(autoprefixer({
			cascade: false
        }))
        .pipe(gulp.dest('assets'))
});

gulp.task('watch', function() {
    gulp.watch('styles/**/*.scss', gulp.series('sass'))
});


