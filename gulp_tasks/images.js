'use strict';

const gulp = require('gulp');

module.exports = function(opts) {
    opts = opts || {};
    opts.images = opts.images || {};
    opts.images.glob = opts.images.glob || [
        './app/images/**/*.{png,jpg,gif,svg}'
    ];
    opts.images.dist = opts.images.dist || './dist/images/';

    gulp.task('images', function() {
        return gulp.src(opts.images.glob)
            .pipe(gulp.dest(opts.images.dist));
    });

    gulp.task('images:watch', ['images'], function() {
        return gulp.watch(opts.images.glob, ['images']);
    });
};
