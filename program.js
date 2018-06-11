var fs = require('fs');
var readline = require('readline');
fs.readFile('words.txt', function(err, data) {
    if(err) throw err;
    sortedarray = data.toString().split(/\n|\r/ );
	console.log('Number of reference words inside:', sortedarray.length);
	readline.createInterface({
		input: fs.createReadStream('input.txt'),
		terminal: false
	}).on('line', function(line) {
	   console.log('Input Line: ' + line);
	   wordsInArray = line.toString().split(" ");
	   //console.log(wordsInArray);
		process.stdout.write('Output Line:');
	       for (i in wordsInArray){

		if(sortedarray.indexOf(wordsInArray[i].toLowerCase(), 0) != -1)
		   {
 				process.stdout.write(wordsInArray[i]);
				process.stdout.write(' ');
 		   }
	   }	   
	console.log("\n");

});


		
	
	
	});