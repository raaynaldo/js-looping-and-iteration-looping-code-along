// Code your solutions in this file
function writeCards(name, gift) {
    const newArr = [];
    for (let i = 0; i < name.length; i++) {
        newArr.push(`Thank you, ${name[i]}, for the wonderful ${gift} gift!`);
    }
    return newArr;
}

function countDown(count) {
  while (count != -1) {
        console.log(count);
        count--;
  }
}