const input = document.getElementById('input');
const Add = document.getElementById('button');
const list = document.getElementById('todo-list');

Add.addEventListener('click', () => {
   const li = document.createElement('li');
   const button = document.createElement('input');
   const label = document.createElement('label');
   
   label.textContent = input.value;
   button.type = 'button';
   button.value = "remove";
   button.addEventListener('click', () => {
     li.remove();
   })

   li.appendChild(label);
   li.appendChild(button);

   list.appendChild(li);

   input.value = "";


})

