import gulp from 'gulp';

gulp.task('default', () => {
    return gulp.src(['source/*.html'])
        .pipe(gulp.dest('public'));
})
