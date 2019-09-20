var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function(){
    console.log("Horay - you just created a Gulp task");
});

gulp.task('html', function(){
    console.log("Imagine something useful been done here");
});

gulp.task('styles', function(){
    console.log("Imagine Sass or PostCSS task running here.");
});


gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
});

gulp.task('watch', function(){
    watch('./app/assets/styles/**/*.css', function(){

    });
});