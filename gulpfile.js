const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync")


gulp.task("scss", function(){	
  return gulp.src("source/sass/style.scss")  
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("source/css"))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "source/"
        }
    });
});


gulp.task("watch", function() {
  gulp.watch("source/sass/**/*.scss", gulp.parallel("scss"));
})

gulp.task("default", gulp.parallel('browser-sync', "watch" ));