const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container");

function addTask() {
  if(inputBox.value === "") {
    alert("You must write something!")
  } 
  else {
    let newElement = document.createElement('li');
    newElement.innerText = inputBox.value;
    listContainer.appendChild(newElement);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    newElement.appendChild(span);
    }
    inputBox.value = ""
    saveData();
}

listContainer.addEventListener('click', function(e) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  }
  else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
})

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data')
}

showTask();