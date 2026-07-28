let map = new Map();

//-> wrt dsa the key type is going to be same for every map so as for value

//key always be unique

map.set(1, "ajay"); //add key,value to map
map.set(2, "ajay");
map.set(3, "ajay");

map.delete(1); // pass key

map.get(2); //Retrieve a key's value by passing key

map.has(3); // check map have the particular key by passing its key output-true or false

map.size; // give size of map

//for printing keys
for (let key of map.keys()) {
  console.log(key);
}

//for printing values
for (let value of map.values()) {
  console.log(value);
}
