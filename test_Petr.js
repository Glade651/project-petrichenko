'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели ?', '');

    while (!numberOfFilms) { // при === не работает  ('')
        alert('Ошибка !');
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели ?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gentres: [],
    privat: false
};
console.log(personalMovieDB);

function f() {

    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

f();


function showMyDB() {
    if (personalMovieDB.privat === false) {
        alert('Смотри кто хочет');
    } else {
        alert('Я жадина');
    }
}
showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // let k;
        // k = prompt(`Ваш любимый жанр под номером ${i}`, '');
        // while (k == '' || k == NaN || k.length <= 2 ) {
        //     k = prompt(`Ваш любимый жанр под номером ${i}`, '');
        // }
        personalMovieDB.gentres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if (personalMovieDB.gentres[i - 1] === '' ||
            personalMovieDB.gentres[i - 1] == null) {
            i--;
        }
    }
}
 writeYourGenres()


function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просм. фильмов :', ''),
            b = prompt('На сколько его оцените ?', '');

        if (a !== '' && b !== '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilm();







