var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var minifyCss = require('gulp-minify-css');

gulp.task('pages', function() {
    return gulp.src(['./src/**/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('styles', function () {
    return gulp.src('./css/styles.css')
    // Auto-prefix css styles for cross browser compatibility
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
    runSequence(
        'styles',
        'pages'
    );
});

gulp.task('watch', function(){
    gulp.watch('css/*.css', ['styles']);
    gulp.watch('*.html', ['pages']);
});
