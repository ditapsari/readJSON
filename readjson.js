var fs = require('fs');

fs.readFile(__dirname + '/read.json', function(err, data) {
    var jsonObj = JSON.parse(data);
    console.log("Name = " + jsonObj.firstName + " " + jsonObj.lastName);
    console.log("Born = " + jsonObj.born);
    console.log("Address" +jsonObj.address);

});
