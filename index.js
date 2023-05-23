const keyboard = document.querySelectorAll(".key");
let pad = document.querySelector(".writingPad");
const clearPad = document.querySelector(".clear");
const light = document.querySelector(".green");
console.log(light);
console.log(clearPad);
console.log(pad);
console.log(keyboard);
/*this is an example of a bubbling listener of click type 
document.addEventListener("click", (e) => {
  // if (e.target.matches('.key')) {

  // }

  // if (document.matches('.key')) {

  // }

  if (e.target.matches(".key")) {
    let readKeyLetter = key.innerText;
    if (key.matches(`.backspace`)) {
      HandleBackSpaceButton();
    } else if (readKeyLetter === "space") {
      HandleSpaceButton();
    } else if (key.dataset.special === "line down") {
      HandleLineDown();
    } else pad.innerHTML += readKeyLetter;
  }
});
*/
document.addEventListener("click", (e) => {
  if (e.target.matches(".clear")) {
    pad.innerText = "";
  }
});
let readKeyLetter = "";
let capsWasClicked = false; // state
/**
 *  clicked a / text is 'a'
 *  clicked b / text is 'ab'
 *  clicked capslock , capswasclicked = true  / text is 'ab'
 *  clicked c , /
 */
for (const key of keyboard) {
  key.addEventListener("click", () => {
    // handle key clicked
    readKeyLetter = key.innerText;
    // switch(readKeyLetter) {
    //   case 'space' :
    //     HandleSpaceButton();
    //     break;
    // }

    if (key.matches(`.backspace`)) {
      HandleBackSpaceButton();
      return;
    }

    if (readKeyLetter === "space") {
      HandleSpaceButton();
      return undefined;
    }

    if (key.dataset.special === "line down") {
      HandleLineDown();
      return;
    }

    if (key.matches(".capsLock")) {
      HandleCapsLock();
      return;
    }
    // if (capsWasClicked) {
    // console.log(light);
    // pad.innerHTML += readKeyLetter.toUpperCase();
    // } else {
    pushKeyboard(readKeyLetter);

    // }
    // }

    console.log(readKeyLetter);
  });
}
function HandleBackSpaceButton() {
  const text = pad.innerText;
  const arrayInCharacters = text.split("");
  console.log(arrayInCharacters);
  arrayInCharacters.splice(-1, 1);
  const modified = arrayInCharacters.join("");
  console.log(modified);
  pad.innerText = modified;
}
function HandleSpaceButton() {
  pad.innerText += `\xA0`;
}
function HandleLineDown() {
  pad.innerText += `\r\n`;
}
function HandleCapsLock() {
  capsWasClicked = !capsWasClicked;
  console.log("i was called even once");
  if (capsWasClicked) {
    light.classList.add("active");
  } else {
    light.classList.remove("active");
  }
}

function pushKeyboard(key) {
  pad.innerHTML += capsWasClicked ? key.toUpperCase() : key;
}
// if its equal to backspace
// split the string by string.split("")
// then slice correctly minus the last element
