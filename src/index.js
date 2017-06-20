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
  var welc = new Welcome('How are you');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello webpack !' + welc.getMessage();

  return element;
}

document.body.appendChild(component());