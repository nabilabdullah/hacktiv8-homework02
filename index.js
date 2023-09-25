const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    const capitalizedArray = arr.map((element) => {
      if (typeof element === 'string') {
        return element.toUpperCase();
      }
      return reject('Error: Not all elements are strings!');
    });
    resolve(capitalizedArray);
  });
};

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.every((element) => typeof element === 'string')) {
      resolve(arr.sort());
    } else {
      reject('Error: Not all elements are strings!');
    }
  });
};

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })