
let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length;

// 0 - Bajar repo, todos los ejercicios seran parte
// del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task
function createTaskComponent(task) {
  
  const listItem = document.createElement("li");
  listItem.classList.add("task-item");

  listItem.innerHTML = `
    <h4>${task.name} - ${task.owner}</h4>
    <p>${task.description}</p>
    <img src="${task.imgUrl}" alt="${task.name} Image" style="max-width: 100px; max-height: 100px;" />
  `;
  return listItem;
}

function loadTasks() {}
const taskList = document.querySelector(".main__section ul"); 

tasks.forEach(task => {
  const taskComponent = createTaskComponent(task);
  taskList.appendChild(taskComponent);
}); 

// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form
function addTaskAlert(newTask) {
  
}

// 2 - Funcion
// Agregar elemento en la lista al llenar el formulario
function addTaskHandler(event) {
  event.preventDefault();  //no deja recargar la pagina 

  //agarra los valores ingresados en el formulario
  const nameInput = document.getElementById("nameInput").value;
  const ownerInput = document.getElementById("ownerInput").value;
  const descriptionInput = document.getElementById("descriptionInput").value;
  const imgUrlInput = document.getElementById("imgUrlInput").value;

  // Crear un nuevo objeto de tarea
  const newTask = {
    id: currentIdNumber++,
    name: nameInput,
    owner: ownerInput,
    description: descriptionInput,
    imgUrl: imgUrlInput
  };

// añade las tareas al array
  tasks.push(newTask);

  // Crear un nuevo componente de tarea y añadirlo al DOM
  const taskList = document.querySelector("ul");
  const newTaskComponent = createTaskComponent(newTask);
  taskList.appendChild(newTaskComponent);
}

//Agrega clickeando el boton de submit
document.querySelector(".main__form").addEventListener("submit", addTaskHandler);


// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
function deleteTaskHandler(taskElement) {}

// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
function deleteAllTaskHandler() {}

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
function redirectWhenNoTask() {}
