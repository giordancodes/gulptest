var gulp = require('gulp'),
		sass = require('gulp-sass'),
		concat = require('gulp-concat'),
		jshint = require('gulp-jshint');

//styles task

gulp.task('styles', function(){
	return gulp.src('styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('styles/'));
});

gulp.task('js', function(){
	return gulp.src('scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

//watch task

gulp.task('watch', function (){
	gulp.watch('styles/*.scss', ['styles']);
	gulp.watch('scripts/*.js', ['js'])
});