const textElement = document.getElementById('welcome-paragraph');
const textToType = "I am excited to showcase my Freecodecamp and Odin projects here. Click on the links in the boxes to be directed to the corresponding CodePen or Github Page.";
let index = 0;

function typeText() {
  setTimeout(() => {
  textElement.textContent = textToType.slice(0, index);
  index++;
  
  if (index > textToType.length) {
setTimeout(() => {
      index = 0;
    }, 100); 
  }
                     }, 1000); 
}


const typingInterval = setInterval(typeText, 80);

const customCursor = document.querySelector('#cursor');

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = e.pageX + 'px';
  customCursor.style.top = e.pageY + 'px';
});

function redirectToLink(url) {
  window.open(url, '_blank');
}