var gulp = require('gulp');
var merge = require('merge-stream');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var jquery = require('gulp-jquery');


var config = {
  source: './src/',
  dist: './public/',
  static: '/node_modules/'
};
var paths = {
  assets: 'assets/',
  html: '**/*.html',
  sass: 'scss/**/*.scss',
  mainSass: 'scss/*.scss',
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
        outputStyle:"compressed",
        includePaths: "node_modules/bootstrap-sass/assets/stylesheets"
      }).on("error",sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest(config.dist + paths.assets +"css"));
});

gulp.task("js",function () {
      var js = gulp.src(sources.rootJs)
      .pipe(browserify())
      .pipe(concat("bundle.js"))
      .pipe(uglify())
      .pipe(gulp.dest(config.dist + paths.assets +"js"));

      var jquery = gulp.src('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js')
                        .pipe(gulp.dest(config.dist + paths.assets + 'vendor'));
      return merge(js, jquery);
});
gulp.task('js', function () {
        gulp.src(sources.rootJs)
        .pipe(babel())
        .pipe(gulp.dest(config.dist + paths.assets +"js"));
});

gulp.task("img", function(){
  gulp.src(sources.rootImg).pipe(gulp.dest(config.dist + paths.assets + 'img'));
});

// gulp.task('jquery', function(){
//   gulp.src('node_modules/jquery/src')
//       .pipe(jquery({
//         // flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
//       }))
//       .pipe(gulp.dest(config.dist + paths.assets + "vendor"));
// });

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
  gulp.watch("./src/assets/scss/*.scss",['sass-watch']);
  gulp.watch("./src/assets/js/*.js",['js-watch']);
});
