const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

const a = prompt('Один из постедних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
const test = 0;
let sd = 1;

      console.log(personalMovieDB);

      const num1 = 140;
      if (num <49) {
        console.log('Error');
      }
      else if (num > 100) {
        console.log('Many');
      }
      else {
        console.log('Ok');
      }

      (num === 50) ? console.log('Ok') : console.log('Error');


      
      const num = 50;  

      switch (num) {      
        case 49:
            console.log('no');
            break;
        case 500:
            console.log('no');
            break;
        case 100:
            console.log('no');
            break;
        default:
            console.log('not a your day bro');
            break;
      }

      let johnReport, alexReport, samReport = 'done';

      console.log(johnReport || alexReport || samReport);

      alert (hello);

