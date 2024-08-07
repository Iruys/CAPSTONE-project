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

//Workout progress

// document.getElementById('add-post-button').addEventListener('click', function() {
// const userInput = document.getElementById('userInput').value;
// if (userInput) {

// const newDiv = document.createElement('div');
// newDiv.className = 'outputDiv';

// const span = document.createElement('span');
// span.textContent = userInput;
// newDiv.appendChild(span);

// const deleteBtn = document.createElement('button');
// deleteBtn.textContent = 'Delete';
// deleteBtn.className = 'deleteBtn';
// newDiv.appendChild(deleteBtn);

// deleteBtn.addEventListener('click', function() {
//   newDiv.remove();
// });

// document.getElementById('outputContainer').appendChild(newDiv);
// document.getElementById('userInput').value = ''; // Clear the input field
// }

// localStorage.setItem('activity', userInput);
//     const storages =  localStorage.getItem("activity");
//     console.log(storages);
// });


const addBTNWorkout = document.querySelector('.addWorkoutBtn');
const inputContWorkout = document.getElementById("input-workout-progress");

addBTNWorkout.addEventListener('click', function(){
  inputContWorkout.classList.add("showsWorkoutInput");
  
});

document.getElementById("xBtnProg").addEventListener('click', function(){
  inputContWorkout.classList.remove("showsWorkoutInput");
});


document.getElementById("addBtnExercises").addEventListener('click', function(){
  const firstInput = document.getElementById("done").value;
  const secondInput = document.getElementById("length").value;
  const percentage = (firstInput / secondInput  * 100).toFixed(2);
  const outputConts = document.getElementById("outCont");

  if(percentage){
    outputConts.innerHTML  = percentage + " %";

  } 
});


//Feedback function

const fbConts = document.getElementById("fb-conts");
const editBtn = document.getElementById("edit-btn-fb");
document.getElementById("submit-btn-fb").addEventListener('click', function (){
  const inputFb = document.getElementById("feedback-conts").value;

  if(inputFb){
    fbConts.classList.add("shows");
    editBtn.classList.add("shows-edit");
    fbConts.innerHTML = inputFb;
  } 
  editBtn.addEventListener('click', function(){
    fbConts.classList.remove("shows");
    editBtn.classList.remove("shows-edit");
  })
   
    //localStorage
    localStorage.setItem("Feedback", inputFb);
// Retrieve
    document.getElementById("feedback-conts").innerHTML = localStorage.getItem("feedback");

});