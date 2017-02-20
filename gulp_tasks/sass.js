const gulp = require('gulp');
const sass = require('gulp-sass');

module.exports = function(opts) {
    opts = opts || {};
    opts.sass = Object.assign({
        src: {dir: './app/styles/'},
        dist: {dir: './dist/'},
    }, opts.sass);

    gulp.task('sass', function() {
        return gulp.src(opts.sass.src.dir + 'index.scss')
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(gulp.dest(opts.sass.dist.dir));
    });

    gulp.task('sass:watch', ['sass'], function() {
        gulp.watch(opts.sass.src.dir + '**/*.scss', ['sass']);
    });
};
