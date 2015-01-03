var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    del = require('del');



gulp.task('sass', function() {
    return sass('sass/style.scss', {style: 'expanded'})
        .pipe(autoprefixer(['last 3 versions']))
        .pipe(gulp.dest('css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('css'))
        .pipe(notify({
            message: 'Styles task complete'
        }));
});

// Watch
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('sass/*.scss', ['sass']);

});

gulp.task('default', function() {
    gulp.start('sass');
});