//npm i pkg -D
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		concat = require('gulp-concat'),
		babel = require('gulp-babel'),
		jshint = require('gulp-jshint'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload;

//styles task

gulp.task('styles', function(){
	return gulp.src('styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(autoprefixer('last 2 versions', 'ie8'))
		.pipe(gulp.dest('styles/'))
		.pipe(reload({ stream: true }));
});

gulp.task('js', function(){
	return gulp.src('app.js')
		.pipe(babel())
		.pipe(gulp.dest('scripts/'))
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(reload({ stream: true }));
});

gulp.task('bs-task', function(){
	browserSync.init({
		server:{
			baseDir: './'
		}
	});
});

//watch task

gulp.task('watch', function (){
	gulp.watch('styles/*.scss', ['styles']);
	gulp.watch('*.js', ['js']);
	gulp.watch('*.html', reload);
});

gulp.task('default', ['bs-task', 'styles', 'js', 'watch']);