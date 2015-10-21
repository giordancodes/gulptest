var gulp = require('gulp'),
		sass = require('gulp-sass'),
		concat = require('gulp-concat');

//styles task

gulp.task('styles', function(){
	return gulp.src('styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('styles/'));
});