/*!
 * Flyknife Comics gulp Configuration
 */


// Define gulp objects
var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    csslint      = require('gulp-csslint'),
    cssnano      = require('gulp-cssnano'),
    plumber      = require('gulp-plumber'),
    notify       = require('gulp-notify'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    uglify       = require('gulp-uglify'),
    watch        = require('gulp-watch');

// Define paths
var paths = {
    root: './',
    src: {
        css: 'src/css/',
        js: 'src/js/'
    },
    dist: {
        css: 'css/',
        js: 'js/'
    },
    includes: '_includes/'
};

// -----------------------------------------------------------------------------

// Compile main SCSS file
gulp.task('css-main', function() {
    return gulp.src([paths.src.css + '*.scss'])
        .pipe(plumber())
        .pipe(sass({
            errLogToConsole: true,
            style: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%']
        }))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano())
        .pipe(gulp.dest(paths.dist.css))
        .pipe(notify({
            title: 'gulp',
            message: 'CSS compiled.',
            onLast: true
        }));
});

// Minify JS
gulp.task('js-main', function() {
    return gulp.src([paths.src.js + '*.js'])
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.dist.js))
        .pipe(uglify({
            mangle: false,
            preserveComments: 'some'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.dist.js))
        .pipe(notify({
            title: 'gulp',
            message: 'JS compiled.',
            onLast: true
        }));
});

// -----------------------------------------------------------------------------

// Default task
gulp.task('default', function() {
    gulp.start('css');
    gulp.start('js');
});

// CSS task
gulp.task('css', function() {
    gulp.start('css-main');
});

// JS task
gulp.task('js', function() {
    gulp.start('js-main');
});

// -----------------------------------------------------------------------------

// Watch files and perform the appropriate tasks
gulp.task('watch', ['css', 'js'], function() {
    watch(paths.src.css + '**/*.scss', function() {
        gulp.start('css');
    });
    watch([paths.src.js + '**/*.js'], function() {
        gulp.start('js');
    });
});
