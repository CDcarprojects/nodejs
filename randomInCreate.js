//binary random Integer
// save file as randomInCreate.js
// to run type "node randomInCreate.js"
var randomInteger = function(val) {
	var ival = Math.random()*256;
	//console.log(ival);
	ival = Math.floor(ival);
	return ival;
}
// main
var rInt ;
var i;
var dmd = 0;
for (i = 0; i < 65536; i++){
	rInt 	= randomInteger();
	if (rInt == 68)dmd++;
//console.log(rInt+",");
	process.stdout.write(rInt+",");

}
	console.log("\n\n Counting 13 = "+dmd);
