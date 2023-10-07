const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];



// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsIn1500 = inventors.filter(inventor => inventor.year > 1499 && inventor.year <= 1599);
console.log(inventorsIn1500);

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const firstAndLast = inventors.map(inventor => inventor.first + " " + inventor.last);
console.log(firstAndLast);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorted = inventors.sort((a, b) =>  a.year - b.year);
console.log(sorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// 5. Sort the inventors by years lived
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const age = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(age);

const invAge = inventors.sort((a, b) => {
    const firstInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return firstInventor > nextInventor ? -1 : 1;
});
console.log(invAge);

const boulevardsInFrance = [
    "Boulevard Saint-Germain",
    "Champs-Élysées",
    "Boulevard Haussmann",
    "Boulevard de Clichy",
    "Boulevard Montmartre",
    "Boulevard des Capucines",
    "Boulevard de la Madeleine",
    "Boulevard de Sébastopol",
    "Boulevard Saint-Michel",
    "Boulevard du Montparnasse",
    "Boulevard de l'Hôpital",
    "Boulevard de l'Indépendance",
    "Boulevard des Invalides",
    "Boulevard du Temple",
    "Boulevard de la Bastille",
];

const filtered = boulevardsInFrance.filter(boulevard => boulevard.includes(' de '));
console.log(filtered);
// To do this in the wikipedia page:
/*
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links.map(link => link.innerHTML);
const listF = de.filter(elem => elem.includes('de'));
console.log(listF);
*/


// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedByLast = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast  ? 1 : -1;
});

console.log(sortedByLast);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const reducedData = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(reducedData);


