const gulp = require('gulp');

//Plugin Imports
const imagemin = require('gulp-imagemin');
const htmlclean = require('gulp-htmlclean');
const stripdebug = require('gulp-strip-debug');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');

 
//Gulp Tasks Definitions

gulp.task('clean:html', ['comp:images'], () =>
    gulp.src('src/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
);
 
gulp.task('comp:images', () =>
    gulp.src('src/img/*')
        .pipe(imagemin([imagemin.jpegtran(), imagemin.optipng()], {verbose: true}))
        .pipe(gulp.dest('dist/img'))
);
gulp.task('comp:views:images', ['copy:views'] ,() =>
    gulp.src('src/views/images/*')
        .pipe(imagemin([imagemin.jpegtran(), imagemin.optipng()], {verbose: true}))
        .pipe(gulp.dest('dist/views/images'))
);

gulp.task('minify:js', () =>
    gulp.src('src/js/*')
        .pipe(stripdebug())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
);
 
gulp.task('minify:css', () =>
    gulp.src('src/css/*')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
);

gulp.task('copy:views', () =>
    gulp.src('src/views/**/*')
        .pipe(gulp.dest('dist/views'))
);

gulp.task('build', ['clean:html', 'minify:js', 'minify:css', 'comp:views:images']);
