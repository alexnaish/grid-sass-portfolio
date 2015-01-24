var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('sass', function() {
    return sass('sass/style.scss', {style: 'expanded'})
        .pipe(autoprefixer(['last 3 versions']))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('css'));
});

// Watch
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('sass/*.scss', ['sass']);

});

gulp.task('default', function() {
    gulp.start('sass');
});