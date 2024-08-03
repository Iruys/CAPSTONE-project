document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', function() {
      nav.classList.toggle('expanded');
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}


document.addEventListener("DOMContentLoaded", function() {
  const ddBtn = document.querySelector('.dropDown');
  const ddConts = document.querySelector('.DD-container');
 
  ddBtn.addEventListener('click', function() {
    ddConts.classList.toggle('ddactive');
  });
});



const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

function openModal() {
    overlay.style.display = 'block';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hide');
    modal.addEventListener('transitionend', () => {
        overlay.style.display = 'none';
        modal.classList.remove('show', 'hide');
        document.body.style.overflow = 'auto';
    }, { once: true });
}

overlay.addEventListener('click', closeModal);
document.querySelector('.close-button').addEventListener('click', closeModal);



document.getElementById('add-post-button').addEventListener('click', function() {
const userInput = document.getElementById('userInput').value;
if (userInput) {
const newDiv = document.createElement('div');
newDiv.className = 'outputDiv';

const span = document.createElement('span');
span.textContent = userInput;
newDiv.appendChild(span);

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.className = 'deleteBtn';
newDiv.appendChild(deleteBtn);

deleteBtn.addEventListener('click', function() {
  newDiv.remove();
});

document.getElementById('outputContainer').appendChild(newDiv);
document.getElementById('userInput').value = ''; // Clear the input field
}
});