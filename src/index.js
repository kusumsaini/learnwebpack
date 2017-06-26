class Welcome {
	constructor(message) {
		this.message = message;
		console.log('message',this.message)
	}
	getMessage (){
		return this.message;
	}
}

function component () {
  var element = document.createElement('div');
  var names = ['Kusum SP','Vipu'];
  const texti = {
  	foo:"hello",
  	bar: "test"
  }
  texti.bar = "fellow";
  var {foo,bar} = texti;
  const a = "test";
  var [n1,n2] = names;
  var text = `How are you ${n1} ${bar}`;
  var welc = new Welcome(text);

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello webpack !' + welc.getMessage();

  return element;
}

document.body.appendChild(component());
//http://es6-features.org/#StringInterpolation