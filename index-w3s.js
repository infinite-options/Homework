let el, i;
let data;
let panel = document.querySelector("#panel");

const api_url = 
      "https://iznfqs92n3.execute-api.us-west-1.amazonaws.com/dev/api/v2/movies";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    data = await response.json();
}
// Calling that async function
 
function show() {
  var myDiv = document.getElementById("actor");
  var Mymusic = document.getElementById("displayMusic");
  var weapon = document.getElementById("displayWeapon");
  var Director = document.getElementById("displayDirector");
  Director.style.display = "none";
  Mymusic.style.display = "none";
  myDiv.style.display = "block";
  weapon.style.display = "none";
  var displayActors = document.getElementById("displayActors");
  displayActors.innerHTML = "";
  var displayMovies = document.getElementById("displayMovies");
  displayMovies.innerHTML = "";
  getapi(api_url);
  console.log(data);
}
function display(key) {
  var actors = document.getElementById("displayActors");
  actors.innerHTML = "";
  actors.style.display = "block";
  actors.appendChild(document.createElement("br"));
  var displayMovies = document.getElementById("displayMovies");
  displayMovies.innerHTML = "";
  const M = new Set();
  for (var i = 0; i < data.length; i++) {
    if (!M.has(data[i][key])) {
      M.add(data[i][key])
      // var li = document.createElement("li");
      // li.appendChild(document.createTextNode(data[i].M));
      // actors.appendChild(li);  
      
      actors.appendChild(createButton(data[i][key],key));
    }
    
  }
}
function showMusic() {
  var myDiv = document.getElementById("actor");
  var Mymusic = document.getElementById("displayMusic");
  var weapon = document.getElementById("displayWeapon");
  var Director = document.getElementById("displayDirector");
  Director.style.display = "none";
  myDiv.style.display = "none";
  Mymusic.style.display = "block";
  weapon.style.display = "none";
  var displayActors = document.getElementById("displayActors");
  displayActors.innerHTML = "";
  var displayMovies = document.getElementById("displayMovies");
  displayMovies.innerHTML = "";
  getapi(api_url);
  console.log(data.length);
}
function showYear() {
  var myDiv = document.getElementById("actor");
  var Mymusic = document.getElementById("displayMusic");
  var weapon = document.getElementById("displayWeapon");
  var Director = document.getElementById("displayDirector");
  Director.style.display = "none";
  myDiv.style.display = "none";
  Mymusic.style.display = "none";
  weapon.style.display = "block";
  var displayActors = document.getElementById("displayActors");
  displayActors.innerHTML = "";
  var displayMovies = document.getElementById("displayMovies");
  displayMovies.innerHTML = "";
  getapi(api_url);
  console.log(data.length);
}
function showDirector() {
  var myDiv = document.getElementById("actor");
  var Mymusic = document.getElementById("displayMusic");
  var weapon = document.getElementById("displayWeapon");
  var Director = document.getElementById("displayDirector");
  Director.style.display = "block";
  myDiv.style.display = "none";
  Mymusic.style.display = "none";
  weapon.style.display = "none";
  var displayActors = document.getElementById("displayActors");
  displayActors.innerHTML = "";
  var displayMovies = document.getElementById("displayMovies");
  displayMovies.innerHTML = "";
  getapi(api_url);
  console.log(data.length);
  // var movie = document.getElementById("displayMovies");
  // movie.innerHTML = "";
  // movie.style.display = "block";
  // movie.appendChild(document.createElement("br"));
  // for (var i = 0; i < data.length; i++) {
  //   var li = document.createElement("li");
  //   li.appendChild(document.createTextNode(data[i].movie_title));
  //   // if(data[i][key] == actorName)
  //     movie.appendChild(li);  
    
  // }  
}
// function showM() {
//   var actors = document.getElementById("displayActors");
//   actors.innerHTML = "";
//   actors.style.display = "block";
//   actors.appendChild(document.createElement("br"));
//   const M = new Set();
//   for (var i = 0; i < data.length; i++) {
//     if (!M.has(data[i].M)) {

//       M.add(data[i].M)
//       // var li = document.createElement("li");
//       // li.appendChild(document.createTextNode(data[i].M));
//       // actors.appendChild(li);  
      
//       actors.appendChild(createButton(data[i].M,"M"));
//     }
    
//   }  
// }
function showQ() {
  var actors = document.getElementById("displayActors");
  actors.innerHTML = "";
  actors.style.display = "block";
  const Q = new Set();
  actors.appendChild(document.createElement("br"));
  for (var i = 0; i < data.length; i++) {
    if (!Q.has(data[i].Q)) {
      Q.add(data[i].Q)
      actors.appendChild(createButton(data[i].Q,"Q"));
    }
    
  }  
}
function showMovies(actorName,key) {
  var movie = document.getElementById("displayMovies");
  movie.innerHTML = "";
  movie.style.display = "block";
  movie.appendChild(document.createElement("br"));
  for (var i = 0; i < data.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(data[i].movie_title));
    if(data[i][key] == actorName)
      movie.appendChild(li);  
    
  }  
}
function showMoneypenny() {
  var actors = document.getElementById("displayActors");
  actors.innerHTML = "";
  actors.style.display = "block";
  const Moneypenny = new Set();
  actors.appendChild(document.createElement("br"));
  for (var i = 0; i < data.length; i++) {
    if (!Moneypenny.has(data[i].Moneypenny)) {
      Moneypenny.add(data[i].Moneypenny)
      actors.appendChild(createButton(data[i].Moneypenny,"Moneypenny"));
    }
    
  }  
}
function showbond_actor() {
  var actors = document.getElementById("displayActors");
  actors.innerHTML = "";
  actors.style.display = "block";
  const bond_actor = new Set();
  actors.appendChild(document.createElement("br"));
  for (var i = 0; i < data.length; i++) {
    if (!bond_actor.has(data[i].bond_actor)) {
      bond_actor.add(data[i].bond_actor)
      actors.appendChild(createButton(data[i].bond_actor,"bond_actor"));
    }
    
  }  
}
function showbond_girl() {
  var actors = document.getElementById("displayActors");
  actors.innerHTML = "";
  actors.style.display = "block";
  const bond_girl = new Set();
  actors.appendChild(document.createElement("br"));
  for (var i = 0; i < data.length; i++) {
    if (!bond_girl.has(data[i].bond_girl)) {
      bond_girl.add(data[i].bond_girl)
      actors.appendChild(createButton(data[i].bond_girl,"bond_girl"));
    }
    if (!bond_girl.has(data[i].bond_girl_actress)) {
      bond_girl.add(data[i].bond_girl_actress)
      actors.appendChild(createButton(data[i].bond_girl_actress,"bond_girl_actress"));
    }
  }  
}

function createButton(text,key) {
  let btn = document.createElement("button");
  btn.innerHTML = text;
  btn.className = "w3-button w3-round w3-blue"
  btn.style ="margin-left: 0.5%";
  btn.onclick = function () {
    // alert(text);
    showMovies(text,key)
  };
  return btn;
}
function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement; 
}

// var ul = document.getElementById('displayActors');
// ul.onclick = function(event) {
//     var target = getEventTarget(event);
//     alert(target.innerHTML);
// };
function clearForm() {
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
}

function renderItem() {
getapi(api_url);
 
  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.firstname}, ${x.lastname}`;
    panel.append(el);
  });
}

function create() {
  let fn = document.querySelector("#fname").value;
  let ln = document.querySelector("#lname").value;
  data = [...data, { firstname: fn, lastname: ln }];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#fname").value = data[i].firstname;
  document.querySelector("#lname").value = data[i].lastname;
}

function update() {
  data[i].firstname = document.querySelector("#fname").value;
  data[i].lastname = document.querySelector("#lname").value;
  renderItem();
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

 renderItem();