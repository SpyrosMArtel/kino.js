let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require("gulp-rename");
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');

gulp.task('images', function () {
    gulp.src('app/assets/img/*.{png,gif,jpg,jpeg}')
        .pipe(gulp.dest('public/img/'));
});
gulp.task('svg', function () {
    gulp.src('app/assets/svg/*.svg')
        .pipe(gulp.dest('public/svg/'));
});

gulp.task('styles', function () {
    gulp.src('app/assets/stylesheets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename("style.css"))
        .pipe(gulp.dest('public/css/'));
});
gulp.task('copy_index', function () {
    gulp.src('app/src/index.html')
        .pipe(gulp.dest('public/'));
});
gulp.task('build', function () {
    return browserify({
        entries: './app/src/app.js',
        extensions: ['.js'],
        debug: true
    })
        .transform('babelify', {presets: ["@babel/preset-env", "@babel/preset-react"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./app/src/**/*.js', ['build']);
    gulp.watch('./app/assets/stylesheets/**/*.scss', ['styles']);
});

gulp.task('default', ['images', 'svg', 'styles', 'copy_index', 'watch']);
