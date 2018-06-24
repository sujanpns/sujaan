var fs = require('fs');
var readline = require('readline');
var http=require('http');

var server=http.createServer(function(req,res){
    res.end('test');
});
/*var debug = require('debug')('toto');
var app = require('app')
app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});*/

/*server.on('listening',function(){
    console.log('ok, server is running');
});
server.listen(3000);*/
/*var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('wordsInArray[i]')
})
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});*/ 

var port= process.env.PORT || 5000;
server.listen(port, function() {
    console.log("App is running on port " + port);
});
http.createServer(function(req, res){
    fs.readFile('new3.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(5000);
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
	console.log("/n");
	server.listen(process.env.PORT || port)

});

    });
/*app.get('/times', (req, res) => {
  let result = ''
  const times = process.env.TIMES || 5
  for (i = 0; i < times; i++) {
    result += i + ' '
  }
  res.send(result)
})
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM test_table');
    res.render('pages/db', result);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});*/


		
	
	
	