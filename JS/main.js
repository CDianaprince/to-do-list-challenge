// Imports de nuestro modulos
import Items from "./modules/add-remove.js";
/*import ToDoItem from "./modules/item-constructor.js";*/

// Constantes iniciales
const main = document.getElementById('main');
const form = document.getElementById('form');

const inputDescription = document.getElementById('todo-item');

const itemsContainer = document.getElementById('todo-cont');

//consturctor en clase
class ToDoItem {
  constructor(completed, description, index){
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
});

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

itemsContainer.addEventListener('click', (e) => {
console.log(e.target);
  //remover elemento
  if(e.target.classList.contains('remove')){
    Items.removeItem(e.target);
  }
  
});