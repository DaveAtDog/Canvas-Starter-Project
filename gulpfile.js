var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	livereload = require('gulp-livereload'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer');

var paths = {
	styles: './css/demo.scss',
	scripts: './js/**/*.js',
	html: 'index.html'
};

gulp.task('watch', function()
{
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.html, ['html']);
	gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('html', function()
{
	var stream = gulp.src(paths.html)
		.pipe(livereload());

	return stream;
});

gulp.task('scripts', function()
{
	var stream = gulp.src(paths.scripts)
		.pipe(livereload());

	return stream;
});

gulp.task('styles', function()
{
	var dest = './css';

	var stream = gulp.src(paths.styles)
		.pipe(sass(
		{
			style: 'expanded'
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(rename(
		{
			suffix: '.min'
		}))
	// .pipe(minifycss())
	.pipe(gulp.dest(dest))
		.pipe(livereload());

	return stream;
});

// Default task
gulp.task('default', ['styles', 'scripts', 'html', 'watch']);