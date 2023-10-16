const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

// Some and Every Checks
    // Array.prototype.some() // is at least one person 19?

const isAdult = people.some((person) => {
  const now = (new Date()).getFullYear();
  if (now - person.year >= 19) {
    return true;
  }
});

  // Is every person 19?
const allAdults = people.every(person => (new Date().getFullYear() - person.year >= 19))
console.log({isAdult});
console.log({allAdults});


// Array.prototype.find()
  // find the comment with the ID of 823423

const spId = comments.find(comment => comment.id === 823423);

console.log({spId});

// Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
   
const findIndex = comments.findIndex(comment => comment.id == 823423);
console.log({findIndex});

comments.splice(findIndex, 1);

console.log(comments);