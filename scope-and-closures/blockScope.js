
//Blocks as Scopes

for (var i=0; i<10; i++) {
	console.log( i );
}

/----------------------------------------------------------/

var foo = true;

if (foo) {
	var bar = foo * 2;
	bar = something( bar );
	console.log( bar );
}

/----------------------------------------------------------/

try {
	undefined(); // illegal operation to force an exception!
}
catch (err) {
	console.log( err ); // works!
}

console.log( err ); // ReferenceError: `err` not found