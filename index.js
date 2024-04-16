const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(drivers, string) {
  return drivers.filter((driver) =>
    driver.toLowerCase().includes(string.toLowerCase()),
  );
}
console.log(findMatching(drivers, "Sa"));

function fuzzyMatch(drivers, string) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(string.toLowerCase()),
  );
}
console.log(fuzzyMatch(drivers, "Sa"));



// function matchName(drivers, string)

function matchName(drivers, string){
  const result = drivers.filter(word=>word.name === string)
  return result
}







