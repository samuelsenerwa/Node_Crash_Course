const { Console } = require("console");
const url = require("url");

const myUrl = new URL("https://www.howtoforge.com/mysql_database_replication");

// Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString);

// Host(root domain)

console.log(myUrl.host);
// Hostname(does not get port)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params objects
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop through parms
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
