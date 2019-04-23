const pressed = [];
const secretCode = 'agora';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);

  //start counting from the back and only allow the maximum length of the secret code
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if(pressed.join('').includes(secretCode)){
    console.log("You did it!");
    cornify_add();
  }

  console.log(pressed);
})

var typing=Typing("Perfect Blood Sugar")
typing();