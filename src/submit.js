const input = document.getElementById('input');
const Add = document.getElementById('button');
const list = document.getElementById('todo-list');
let id = 0;

Add.addEventListener('click', () => {
   const li = document.createElement('li');
   const button = document.createElement('input');
   const label = document.createElement('label');
   
   button.id = String(id);
   label.textContent = input.value;
   button.type = 'button';
   button.value = "remove";
   button.addEventListener('click', () => {
         localStorage.removeItem(button.id);
     li.remove();
   })

   li.appendChild(label);
   li.appendChild(button);

   list.appendChild(li);
   localStorage.setItem(id, input.value);
   
   input.value = "";
   id++;
   
   console.log(localStorage);

})


