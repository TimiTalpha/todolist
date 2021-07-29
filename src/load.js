window.onload = function (){
  for(let i=0; i<localStorage.length ;i++){
    const li = document.createElement('li');
    const button = document.createElement('input');
    const label = document.createElement('label');
    const div = document.createElement('div');
    
    label.id = localStorage.key(i);
    button.id = 'remove-btn';
    button.name = localStorage.key(i);
    label.textContent = localStorage.getItem(localStorage.key(i));
    button.type = 'button';
    button.value = "remove";

    div.class="buttons"

    button.addEventListener('click', () => {
      localStorage.removeItem(button.id);
      li.remove();
    })

    div.appendChild(button);
    li.appendChild(label);
    li.appendChild(div);
    
 
    list.appendChild(li);


  }
}