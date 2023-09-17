// Initialize modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync');

// Use dart-sass for @use
sass.compiler = require('dart-sass');

// Sass Task
function scssTask() {
    return src('app/scss.style.scss', { sourcemaps: true})
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('dist', {sourcemaps : '-' }))
}

// JavaSript Task
function jsTask() {
    return src('app/js/script.js', {sourcemaps: true })
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '-' }))
}
