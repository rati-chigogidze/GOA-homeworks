//   let counter = 0; 

        
//         function increment() {
//             counter++;
//             updateCounter();
//         }

        
//         function decrement() {
//             counter--;
//             updateCounter();
//         }

        
//         function reset() {
//             counter = 0;
//             updateCounter();
//         }

      
//         function updateCounter() {
//             const counterElement = document.getElementById('counter');
//             counterElement.textContent = counter; 

            
//             if (counter < 0) {
//                 counterElement.style.color = 'red'; 
//             } else {
//                 counterElement.style.color = 'green'; 
//             }
//         }





let count = 0;
let history = [];
let historyIndex = -1;
let locked = false;

function updateCounter() {
  document.getElementById('counter').innerText = count;
  document.getElementById('undo-btn').disabled = historyIndex <= 0;
  document.getElementById('redo-btn').disabled = historyIndex >= history.length - 1;
}

function increment() {
  if (locked) {
    alert("Counter is locked! You cannot change it.");
    return;
  }
  history = history.slice(0, historyIndex + 1);
  history.push(count);
  historyIndex++;
  count++;
  updateCounter();
}

function decrement() {
  if (locked) {
    alert("Counter is locked! You cannot change it.");
    return;
  }
  history = history.slice(0, historyIndex + 1);
  history.push(count);
  historyIndex++;
  count--;
  updateCounter();
}

function undo() {
  if (historyIndex > 0) {
    historyIndex--;
    count = history[historyIndex];
    updateCounter();
  }
}

function redo() {
  if (historyIndex < history.length - 1) {
    historyIndex++;
    count = history[historyIndex];
    updateCounter();
  }
}

function toggleLock() {
  locked = document.getElementById('lock-checkbox').checked;
  if (locked) {
    alert("Counter is  locked.");
  } else {
    alert("Counter is  unlocked.");
  }
}

updateCounter();
