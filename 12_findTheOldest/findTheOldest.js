const findTheOldest = function (person) {
  const oldest = person.sort((a, b) => {
    if (a.yearOfDeath && b.yearOfDeath) {
      const lastPerson = a.yearOfDeath - a.yearOfBirth;
      const nextPerson = b.yearOfDeath - b.yearOfBirth;
      return lastPerson > nextPerson ? -1 : 1;
    } else if (!a.yearOfDeath) {
      const currentYear = new Date().getFullYear();
      const lastPerson = currentYear - a.yearOfBirth;
      const nextPerson = b.yearOfDeath - b.yearOfBirth;
      return lastPerson > nextPerson ? -1 : 1;
    } else if (!b.yearOfDeath) {
      const currentYear = new Date().getFullYear();
      const lastPerson = a.yearOfDeath - a.yearOfBirth;
      const nextPerson = currentYear - b.yearOfBirth;
      return lastPerson > nextPerson ? -1 : 1;
    }
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
