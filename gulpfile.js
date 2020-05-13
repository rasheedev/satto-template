const gulp         = require('gulp'),
      pug          = require('gulp-pug'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      concat       = require('gulp-concat'),
      sourcemaps   = require('gulp-sourcemaps'),
      uglify       = require('gulp-uglify'),
      browserSync  = require('browser-sync').create(),
      imagemin     = require('gulp-imagemin'),
      changed      = require('gulp-changed');

function html() {
    return gulp.src('src/html/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
}

function css() {
    return gulp.src(["src/css/libs/*.css", "src/css/style.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
}

function js() {
    return gulp.src(['src/js/libs/*.js', "src/js/custom.js"])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

function img() {
    return gulp.src('src/img/**/*')
        .pipe(changed('dist/img/'))
        .pipe( imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('dist/img/'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch('src/html/**/*.pug', html);
    gulp.watch("src/css/**/*.scss", css);
    gulp.watch('src/js/**/*.js', js);
    gulp.watch('src/img/**/*', img);
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.watch = watch;

var build = gulp.parallel(watch);
gulp.task('default', build);