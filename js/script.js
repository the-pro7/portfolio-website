console.log('ready to go')
// Let's select the hamburger menu
const hamMenu = document.getElementById('menu')
const navListPrimary = document.querySelector('.nav_list')

// Theme toggler button
 const themeTogglerLi = document.createElement("li");
 themeTogglerLi.classList.add("theme-li", "margin-auto-top");

//  themeTogglerLi.textContent = "Light";
// next create a button element
const themeTogglerBtn = document.createElement('button')
themeTogglerBtn.textContent = 'Light'
 themeTogglerBtn.classList.add("theme-btn");
//  Append the new button element to the newly created li element
themeTogglerLi.append(themeTogglerBtn)
// console.log(hamMenu.firstElementChild.offsetWidth)
hamMenu.addEventListener('click', () => {
      hamMenu.classList.toggle('active')
      navListPrimary.classList.toggle('show')
     

      // Append the newwly created li to the primary nav_list
      navListPrimary.append(themeTogglerLi)
})

// window.addEventListener('DOMContentLoaded', () => {
//       if (!navListPrimary.classList.contains('show')) {

//       }
// })