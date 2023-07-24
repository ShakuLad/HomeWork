let numbers = [3, 4, 5, 44, 55, 23, 34, 12, 26, 67, 77, 75, 98, 67]
let num = numbers.filter((i)=> i%2)
console.log(num)

function findBooks(...books){
    const bookWithU = []
    const bookWithoutU = []
    for (let i = 0; i < books.length; i++) {
        if (books[i].toLowerCase().includes('у')) {
            bookWithU.push(books[i]);
        } else {
            bookWithoutU.push(books[i]);
        }
    }
    console.log('Книги с у',bookWithU);
    console.log('Книги без у',bookWithoutU);
}
findBooks('Война и мир', 'унесенные призраками', 'Улисс', 'Управление в условиях кризиса. Как выжить и стать сильнее','римрвимроваимров','ууууууууууу');