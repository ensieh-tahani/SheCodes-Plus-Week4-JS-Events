// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

function showTemp(event) {
    event.preventDefault();
    alert(`It is 18 degrees`);
    let showButton = document.querySelector("button");
    showButton.innerHTML = "18 degrees";
  }
  
  let button = document.querySelector("button");
  button.addEventListener("click", showTemp);