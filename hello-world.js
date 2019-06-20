var _ = require ('lodash');

function message()
{
    console.log("Hello World!");
}

_.delay(message, 3000);
console.log("count to three");