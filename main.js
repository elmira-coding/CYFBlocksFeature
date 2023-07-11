var item, urlholder, nameLink;

// Describe this function...
function creat_menue() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  nameLink.forEach((item) => {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_a.setAttribute("href", urlholder.shift());
    new_a.innerText = item;

    new_li.appendChild(new_a);

    element_list.appendChild(new_li);
    element_list.style.color = '#6633ff';
  });
}

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


urlholder = ['https://www.searchenginejournal.com/about-us-page-examples/250967/', 'https://www.volkswagen.co.uk/en/need-help/contact-me.html', 'https://h30434.www3.hp.com/t5/Desktop-Video-Display-and-Touch/Monitor-displaying-quot-Check-Video-Cable-quot-and-menu/td-p/6282657', 'https://corporate.homedepot.com/'];
nameLink = ['AboutUs', 'contactMe', 'CheckVideo', 'Home'];


document.getElementById('iconMenue').addEventListener('click', (event) => {
  creat_menue();

});

document.getElementById('iconMenue').addEventListener('click', (event) => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance('click on Hamburger menu to display the dropdown menue'));

});

document.getElementById('comment').addEventListener('click', (event) => {
  event.target.innerText = document.getElementById('comment').value;

});

document.getElementById('send').addEventListener('click', (event) => {
  let element_com = document.getElementById('com');
  element_com.innerText = document.getElementById('comment').value;

});