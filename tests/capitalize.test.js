// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново

import { capitalize } from '../src/capitalize.js';

try {
  if (capitalize('hello') !== 'Hello') {
    throw new Error('Функция работает неверно!');
  }

  if (capitalize('') !== '') {
    throw new Error('Функция работает неверно!');
  }
} catch(error) {
  console.log('error: ', error);
}



console.log('Все тесты пройдены!');
