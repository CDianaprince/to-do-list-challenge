// Imports de nuestro modulos
import Items from "./modules/add-remove.js";
import ToDoItem from "./modules/item-constructor.js";

// Constantes iniciales
const main = document.getElementById('main');
const form = document.getElementById('form');

const inputDescription = document.getElementById('todo-item');

const itemsContainer = document.getElementById('todo-cont');



//Evento de escucha de la forma
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

//Evento de escucha main para ingresar elemntos
main.addEventListener('keypress', (e) => {
 //obtener valore
 const description = inputDescription.value;

 //mandar los valores
 if(e.key === 'Enter'&& description != '') {
  const item = new ToDoItem(false, description);

  //agregar un nuewvo toodo
  Items.addItem(item);

  //limpiar la input
  Items.clearInput();
  
 }


});


//evento de escuha para remover
itemsContainer.addEventListener('click', (e) => {
console.log(e.target);
  //remover elemento
  if(e.target.classList.contains('remove')){
    Items.removeItem(e.target);
  }
  
});