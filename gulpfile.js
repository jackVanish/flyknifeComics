/*!
 * Chris Burnell gulp Configuration
 */


// Define gulp objects
var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    concat       = require('gulp-concat'),
    plumber      = require('gulp-plumber'),
    postcss      = require('gulp-postcss'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    uglify       = require('gulp-uglify'),
    watch        = require('gulp-watch');

// Define external objects
var autoprefixer = require('autoprefixer'),
    cssnano      = require('cssnano'),
    reporter     = require('postcss-reporter');

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
gulp.task('css-compile', function() {
    return gulp.src([paths.src.css + '*.scss'])
        .pipe(plumber())
        .pipe(sass({
            errLogToConsole: true,
            style: 'expanded'
        }))
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 2 versions', '> 1%']
            })
        ]))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(postcss([
            cssnano()
        ]))
        .pipe(gulp.dest(paths.dist.css));
});

// Minify JS
gulp.task('js-compile', function() {
    return gulp.src([paths.src.js + '**/*.js'])
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.dist.js))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.dist.js));
});

// -----------------------------------------------------------------------------

// Default task
gulp.task('default', function() {
    gulp.start('css');
    gulp.start('js');
});

// CSS task
gulp.task('css', ['css-compile'], function() {
    // Nah we're good
});

// JS task
gulp.task('js', ['js-compile'], function() {
    // Nah we're good
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
