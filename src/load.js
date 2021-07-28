const items = [];


window.onload = function load(){
  for(let i=0 ; i<localStorage.length ;i++){
    if(localStorage.getItem(i) !== null){
     items.push(localStorage.getItem(i));
    }
  }
 for(item of items){
   const li = document.createElement('li');
   const button = document.createElement('input');
   const label = document.createElement('label');
   
   button.id = item.id;
   label.textContent = item;
   button.type = 'button';
   button.value = "remove";
   button.addEventListener('click', () => {
     localStorage.removeItem(button.id);
     li.remove();
   })

   li.appendChild(label);
   li.appendChild(button);

   list.appendChild(li);
 }
 
}