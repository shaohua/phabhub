var gulp = require('gulp');
var gReact = require('gulp-react');
var gReplace = require('gulp-replace');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');

var browserifyConfig = {
  entries: ['./index.js']
};

gulp.task('clean', function(cb) {
  del(['dist/', 'lib/'], cb);
});

gulp.task('lib', function() {
  return gulp.src('src/inject/*.js')
             .pipe(gReact({harmony: true}))
             .pipe(gReplace(/__DEV__/g, 'false'))
             .pipe(gulp.dest('lib'));
});

var filesToCopy = [
  './_locales/**/*.*',
  './icons/**/*.*',
  './src/**/*.*',
  'bower_components/**/*.*',
  './manifest.json'
];

gulp.task('copy', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToCopy, { base: './' })
      .pipe(gulp.dest('dist'));
});

gulp.task('browserify', function() {
  return browserify(browserifyConfig)
          .bundle()
          .pipe(source('index.js'))
          .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['lib', 'copy', 'browserify']);
