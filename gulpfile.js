var gulp = require('gulp');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var concat = require("gulp-concat"); //concatenar archivos
var merge = require('merge-stream'); //combinar varios archivos en secuencia
var uglify = require("gulp-uglify"); //minifica archivos
var util = require("gulp-util"); //funcionalidades de plugin gulp (log)
var babel = require('gulp-babel'); //interpreta de ecma6 a ecma5
var autoprefixer = require('gulp-autoprefixer'); //agrega los prefijos a propiedades que lo necesitan

var config = {
  source: './src/',
  dist: './public/',
};
var paths = {
  assets: 'assets/',
  html: '**/*.html',
  sass: 'scss/**/*.scss',
  mainSass: 'scss/*.scss',
  mainJs: 'js/',
  img: 'img/*.*',
  font: 'font/*.*'
};
var sources = {
  assets:config.source + paths.assets,
  html:config.source + paths.html,
  sass:paths.assets + paths.sass,
  rootSass:config.source + paths.assets + paths.mainSass,
  rootJs: config.source + paths.assets + paths.mainJs,
  rootImg: config.source + paths.assets + paths.img,
  rootFont: config.source + paths.assets + paths.font
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
      .pipe(gulp.dest(config.dist + paths.assets +"css"))
      .pipe(notify('gulp sass terminada'));
});


gulp.task("js",function () {
  var js = gulp.src([sources.rootJs+'get-json.js',
                    sources.rootJs+'nav-header.js',
                    sources.rootJs+'pintrestGrid.js',
                    sources.rootJs+'pintrestPin.js',
                    sources.rootJs+'save-modal.js',
                    sources.rootJs+'index.js'])
      .pipe(browserify())
      .pipe(sourcemaps.init())
      .pipe(babel({ presets: ['babel-preset-es2015'].map(require.resolve)}))
      .pipe(concat("bundle.js"))
      .pipe(sourcemaps.write())
      .pipe(uglify())
      .on('error', function (err) { util.log(util.colors.red('[Error]'), err.toString()); })
      .pipe(gulp.dest(config.dist + paths.assets +"js"))
      .pipe(notify('gulp js terminada'));
  var jquery = gulp.src('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js')
                    .pipe(gulp.dest(config.dist + paths.assets + 'vendor'));
      return merge(js, jquery);
});

gulp.task("img", function(){
  gulp.src(sources.rootImg).pipe(gulp.dest(config.dist + paths.assets + 'img'));
});

gulp.task("font", function(){
  gulp.src(sources.rootFont).pipe(gulp.dest(config.dist + paths.assets + 'font'));
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
  gulp.watch("./src/assets/scss/*.scss",['sass-watch']);
  gulp.watch("./src/assets/js/*.js",['js-watch']);
});
