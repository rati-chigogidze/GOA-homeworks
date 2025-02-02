function mergeObjects(...objects) {
  return Object.assign({}, ...objects);
}

const obj1 = { name: "John", age: 30 };
const obj2 = { job: "Developer", country: "USA" };
const obj3 = { hobby: "Reading", city: "New York" };

const mergedObj = mergeObjects(obj1, obj2, obj3);
console.log(mergedObj);
