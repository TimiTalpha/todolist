const input = document.getElementById('input');
const Add = document.getElementById('button');
const list = document.getElementById('todo-list');


function gen(len){
   const chars = '0123456789'+'abcdefghijklmnopqrstuvwxyg'+'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const name = [];
   for(let i=0; i<len ;i++){
     const num = Math.floor(chars.length * Math.random());
     name.push(chars[num]);
   }
   
   return name.join('');
 }






Add.addEventListener('click', () => {
   const li = document.createElement('li');
   const button = document.createElement('input');
   const label = document.createElement('label');
   const div = document.createElement('div');
   let id = gen(16);
   
   button.id = id;
   div.class = "buttons";
   label.textContent = input.value;

   button.type = 'button';
   button.value = "remove";

   button.addEventListener('click', () => {
     localStorage.removeItem(button.id);
     li.remove();
   })
   
   div.appendChild(button);
   li.appendChild(label);
   li.appendChild(div)
   

   list.appendChild(li);
   localStorage.setItem(id, input.value);
   
   input.value = "";
   
   console.log(localStorage);

})




