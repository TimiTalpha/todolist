window.onload = function (){
  for(let i=0; i<localStorage.length ;i++){
    const li = document.createElement('li');
    const button = document.createElement('input');
    const label = document.createElement('label');
    
    button.id = localStorage.key(i);
    label.textContent = localStorage.getItem(localStorage.key(i));
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