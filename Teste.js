function captureSyntaxError() {
  try {
  	eval('alert("Hello world)');
  } 
	catch(error) {
		if (error.name === 'SyntaxError') {
  		alert("caught a " + error.name + ": " + error.message);
			//handle that error type
		}
		else {
			alert("caught a " + error.name + ": " + error.message);
			//handle generic errors here
		}
	}
}
