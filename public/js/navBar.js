(function(){
  const listElements = document.querySelectorAll(".menuNav_item--show");
  const list = document.querySelector('.menuNav_links');
  const menu = document.querySelector('.menuNav_hamburguer');

  const addClick = () => {
    listElements.forEach(element =>{
      element.addEventListener('click', ()=>{
        
        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle('menuNav_item--active')

        if(subMenu.clientHeight == 0){
          height = subMenu.scrollHeight;
        }

        subMenu.style.height = `${height}px`;

      })
      
    })
  }

  const deleteStyleHeight = () => {
    listElements.forEach(element=>{

      if(element.children[1].getAttribute('style')){
        element.children[1].removeAttribute('style');
        element.classList.remove('menuNav_item--active');
      }

    })
  }

  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 768){
      deleteStyleHeight();
      if(list.classList.contains('menuNav_links--show'))
        list.classList.remove("menuNav_links--show");
    } else {
      addClick();
    }
  });

if(window.innerWidth <= 768){
  addClick();
}

menu.addEventListener('click', ()=> list.classList.toggle('menuNav_links--show'))


})();
