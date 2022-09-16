const hambuger = document.querySelector('.header .nav-bar .nav-list .hambuger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header .container');

hambuger.addEventListener('click',() =>{
          hambuger.classList.toggle('active');
          mobile_menu.classList.toggle('active');
})

// window.addEventListener('scroll', () =>{
//           header.style.backGroundColor = window.scrollY > 120 ? '#29323c':'transparent';
//           comsole.log( header.style.backGroundColor = window.scrollY > 120 ? '#29323c':'transparent');
        
//         })
          
          // if(scroll_position > 250){
          //           header.style.back_groundColor = '#29323c';
          // }else{
          //           header.style.back_groundColor = 'transparent';
          //           var scroll_position = window.scrollY;
          // }
menu_item.forEach((item) =>{
          item.addEventListener('click', () =>{
          hambuger.classList.toggle('active');
          mobile_menu.classList.toggle('active');
          });
});