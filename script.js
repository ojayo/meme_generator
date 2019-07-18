// select the main divs and assign them to variables
let formBox = document.querySelector(".form-container"); 
let form = document.querySelector("form");
// assign variables to selected form inputs
let imageURL = form.querySelector("#imageLink");
let upperLine = form.querySelector("#upperText");
let lowerLine = form.querySelector("#lowerText");
let button = form.querySelector("button[type=submit]");
// assign a name to the place where images go
let collection = document.querySelector(".imageBox .imageBoxScroll");

// Once upon a time, a form was submitted...
form.addEventListener("submit", function(event) { 
  // The form's Event Listener heard the "submit" and immediately executed a function...
  
  event.preventDefault(); 
  // Meanwhile, a Default Preventer made sure the function kept working 
  // unless killed by the Propagation Stopper
  
  // The Function gave birth to a new Image. And it was called "img".
  let img = new Image();
  // And img was given the value written inside the imageURL input box.
  img.src = imageURL.value;
  
  // But what if the image is not found?! Dear God, no! An Error must be called!
  if (img.src == false) {
    alert("You need an image! What kind of meme is invisible?"); // ask Richard Dawkins
  } else { 
  
    // ... create an Element. A Div Element. And it shall be named "meme".
    let meme = document.createElement("div");
    meme.classList.add("meme"); // Meme's classList now includes the "meme" class.
    
    // And what shall be done about those words?
    
    if (upperLine.value) { //... exists... then it should return true... and continue.
      
      let theUpperLine = document.createElement("span"); // create a span for the line
      theUpperLine.classList.add("upperText"); // and add the text from the input, and
      theUpperLine.textContent = upperLine.value; // write the Text Content as its value.
      meme.appendChild(theUpperLine); // Meme was then appended that UpperLine kid.
    }
    // Do the same for the lower line.
    if (lowerLine.value) { 
      
      let theLowerLine = document.createElement("span");
      theLowerLine.classList.add("lowerText");
      theLowerLine.textContent = lowerLine.value;
      meme.appendChild(theLowerLine); // Meme now has 2 children.
    }
    
    // And thus, the Function also gave Meme the child named "img".
    meme.appendChild(img);
    collection.appendChild(meme); // and Meme joined the collection.
    form.reset(); // and the Form reset to the way it was.
    
  } // and the OnLoad Function lived happily ever after.
});
  
  // But all good stories must end. How will the memes die?

// This is complicated and buggy.
let killMeme = event => {
  if (!event.target.closest('.meme')) return;
  event.target.remove();
}
// and so the dying code became eaten by bugs.

collection.addEventListener('click', function(event) {
    killMeme(event);
  },
  //false?
);

/* Next Steps:
    1. Simplify and fix the image deletion function
    2. Create an 'X' hover effect when mousing over any image
    3. Get rid of all those notes.
    4. Make it possible to save the file? 
    5. Refactor -- can more functionality be given to the CSS?
    6. Make it prettier. 

*/





