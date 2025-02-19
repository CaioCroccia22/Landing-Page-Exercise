const gulp = require('gulp');
const {parallel, src, dest} = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass') (require('sass'));


// Compilação do SASS para CSS
function buildStyles(){
    return gulp.src('src/styles/*.scss')
        // Compila o Sass para CSS
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/styles'))
}

//Redução de espaço de imagem
function reduceImage() {
    return gulp.src('src/img/**/*.{png,jpg,jpeg,gif,svg}') // Busca todas as imagens
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img')) // Copia para dist/img
        .on('end', () => console.log('Imagens copiadas corretamente!'));
}
// Observação para desenvolvimento -> Comando definido no pack.json: npm run dev
function watchFiles(){
    gulp.watch('src/styles/*.scss', buildStyles)
}


module.exports.watch = watchFiles;
module.exports.buildStyles = buildStyles;
module.exports.reduceImage = reduceImage;
module.exports.default = parallel(watchFiles, buildStyles, reduceImage);