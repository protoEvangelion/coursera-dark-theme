'use strict'

const gulp = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const safeImportant = require('postcss-safe-important')

gulp.task('default', ['sass'])

gulp.task('sass', () =>
	gulp
		.src('./src/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([safeImportant]))
		.pipe(gulp.dest('./dist'))
)

gulp.task('sass:watch', function() {
	gulp.start('sass')

	gulp.watch('./src/styles.scss', ['sass'])
})
