var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

var config = {
  source: './src/',
  dist: './public/'
};
var paths = {
  assets: 'assets/',
  html: '**/*.html',
  sass: 'scss/**/*.scss',
  mainSass: 'scss/main.scss',
  mainJs: 'js/*.js',
  img: 'img/*.*'
};
var sources = {
  assets:config.source + paths.assets,
  html:config.source + paths.html,
  sass:paths.assets + paths.sass,
  rootSass:config.source + paths.assets + paths.mainSass,
  rootJs: config.source + paths.assets + paths.mainJs,
  rootImg: config.source + paths.assets + paths.img
};
gulp.task('html',()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task("sass",function () {
      gulp.src(sources.rootSass)
      .pipe(sass({
        outputStyle:"compressed"
      }).on("error",sass.logError))
      .pipe(gulp.dest(config.dist + paths.assets +"css"));
});

gulp.task("js",function () {
      gulp.src(sources.rootJs)
      .pipe(browserify())
      .pipe(concat("bundle.js"))
      .pipe(uglify())
      .pipe(gulp.dest(config.dist + paths.assets +"js"));
});

gulp.task("img", function(){
  gulp.src(sources.rootImg).pipe(gulp.dest(config.dist + paths.assets + 'img'));
});

gulp.task("sass-watch",["sass"],function(done){
  browserSync.reload();
  done();
});
gulp.task("js-watch",["js"],function(done){
  browserSync.reload();
  done();
});
gulp.task("html-watch",["html"],function(done){
  browserSync.reload();
  done();
});
gulp.task("serve", function () {
  browserSync.init({
    server:{
      baseDir:config.dist
    }
  });
  gulp.watch(sources.html,['html-watch']);
  gulp.watch("./src/assets/scss/main.scss",['sass-watch']);
  gulp.watch("./src/assets/js/*.js",['js-watch']);
});
