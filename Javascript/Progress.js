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

//chart
function generateWeeklyData() {
  const currentDate = new Date();
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const labels = [];
  const data = [];

  let weekStart = new Date(startOfMonth);
  while (weekStart <= endOfMonth && weekStart <= currentDate) {
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);

    if (weekEnd > endOfMonth) {
      weekEnd.setDate(endOfMonth.getDate());
    }
    if (weekEnd > currentDate) {
      weekEnd.setDate(currentDate.getDate());
    }

    labels.push(`Week ${Math.ceil((weekStart.getDate() + 1) / 7)}`);
    data.push({
      x: new Date(weekStart),
      y: Math.floor(Math.random() * 50) + 50,
      days: Array.from(
        {
          length: Math.min(
            7,
            weekEnd.getDate() - weekStart.getDate() + 1
          ),
        },
        (_, i) => {
          const day = new Date(weekStart);
          day.setDate(day.getDate() + i);
          return {
            day: day.getDate(),
            weight: Math.floor(Math.random() * 50) + 50,
          };
        }
      ),
    });

    weekStart.setDate(weekStart.getDate() + 7);
  }

  return { labels, data };
}

const { labels, data } = generateWeeklyData();

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Weekly Weight Progress',
        data: data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(75, 192, 192)',
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Week',
          color: '#333',
          font: {
            family: 'Poppins',
            size: 14,
            weight: '500',
          },
        },
        ticks: {
          color: '#555',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Weight (kg)',
          color: '#333',
          font: {
            family: 'Poppins',
            size: 14,
            weight: '500',
          },
        },
        ticks: {
          color: '#555',
        },
        grid: {
          color: '#eaeaea',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#333',
          font: {
            family: 'Poppins',
          },
        },
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            return `Week ${tooltipItems[0].label.split(' ')[1]}`;
          },
          label: function (tooltipItem) {
            const weekData = tooltipItem.raw;
            return weekData.days.map(
              (day) => `Day ${day.day}: ${day.weight} kg\n`
            );
          },
        },
      },
    },
  },
});



// input and outputweights
const addBtnWeight = document.getElementById("addBtnWeights");
const addBTNWeights = document.querySelector('#addBtnWeights');
const inputContWeights = document.getElementById("inputWeight");

addBTNWeights.addEventListener('click', function(){
  inputContWeights.classList.add("showsWeightInput");
  addBtnWeight.classList.add("hideAddBtnWeight");
});

document.getElementById("xBtnWeight").addEventListener('click', function(){
  inputContWeights.classList.remove("showsWeightInput");
  addBtnWeight.classList.remove("hideAddBtnWeight");
});


document.getElementById("addWeights").addEventListener('click', function(){
  const weightInput = document.getElementById("weights").value;
  const kilos = document.getElementById("kgs");
  const kgContainer= document.querySelector(".kgs");

  if (!isNaN(weightInput)) {
  if (weightInput) {
    // Create a new div element to contain the output
    const div = document.createElement('div');
    div.className = 'weightConts';

    // Set the inner HTML of the new div
    div.innerHTML = 
        `<div>${new Date().toLocaleDateString()}</div>` + 
        `<div>  </div>` +                                  // Empty div for spacing
        weightInput + " kg";     
        
    // Get the output container element
    const outWeightContainer = document.getElementById('outputWeight');

    // Check if there are already 4 or more child nodes in the output container
    if (outWeightContainer.childNodes.length >= 2) {
        // Remove the first child node to ensure the container has at most 4 children
        outWeightContainer.removeChild(outWeightContainer.firstChild);
    }

    // Append the new div to the output container
    outWeightContainer.appendChild(div);

    // Clear the input fields
    document.getElementById("weights").value = '';
   
    }
  }

  kgContainer.innerHTML = weightInput + " kg";

});




//Workout progress

const addBTNWorkout = document.querySelector('.addWorkoutBtn');
const inputContWorkout = document.getElementById("input-workout-progress");

addBTNWorkout.addEventListener('click', function(){
  inputContWorkout.classList.add("showsWorkoutInput");

  addBTNWorkout.classList.add("hideWorkoutBtn");
});

document.getElementById("xBtnProg").addEventListener('click', function(){
  inputContWorkout.classList.remove("showsWorkoutInput");
  addBTNWorkout.classList.remove("hideWorkoutBtn");
});


document.getElementById("addBtnExercises").addEventListener('click', function(){
  const firstInput = document.getElementById("done").value;
  const secondInput = document.getElementById("length").value;
  const percentage = (firstInput / secondInput  * 100).toFixed(0);
  const circleConts = document.getElementById("circleContainer");

  if (!isNaN(percentage)) {
  if (percentage) {
    // Create a new div element to contain the output
    const newDivs = document.createElement('div');
    newDivs.className = 'outConts';

    // Set the inner HTML of the new div
    newDivs.innerHTML = 
        `<div>${new Date().toLocaleDateString()}</div>` + // Current date
        firstInput + " Exercises" +                        // First input followed by " Exercises"
        `<div>  </div>` +                                  // Empty div for spacing
        percentage + " %";     
        
    // Get the output container element
    const outputContainer = document.getElementById('outCont');

    // Check if there are already 4 or more child nodes in the output container
    if (outputContainer.childNodes.length >= 4) {
        // Remove the first child node to ensure the container has at most 4 children
        outputContainer.removeChild(outputContainer.firstChild);
    }

    // Append the new div to the output container
    outputContainer.appendChild(newDivs);

    // Clear the input fields
    document.getElementById("done").value = '';
    document.getElementById("length").value = '';
    }
  }

  circleConts.innerHTML = percentage + " %";

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