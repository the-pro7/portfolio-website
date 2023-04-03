console.log('ready to go')
// Let's select the hamburger menu
const hamMenuBtn = document.getElementById('menu')
// Select the navlist primary from the nav element
const navListPrimary = document.querySelector('.nav_list')
// Let's get the github Icon
const githubIcon = document.querySelector(".github-icon");

// Theme toggler button
 const themeTogglerLi = document.createElement("li");
 themeTogglerLi.classList.add("theme-li", "margin-auto-top");

// next create a button element
const themeTogglerBtn = document.createElement('button')
themeTogglerBtn.textContent = 'Light'
 themeTogglerBtn.classList.add("theme-btn");
//  Append the new button element to the newly created li element
themeTogglerLi.append(themeTogglerBtn)
// console.log(hamMenuBtn.firstElementChild.offsetWidth)
hamMenuBtn.addEventListener('click', () => {
      hamMenuBtn.classList.toggle('active')
      navListPrimary.classList.toggle('show')
     

      // Append the newwly created li to the primary nav_list
      navListPrimary.appendChild(themeTogglerLi)
      // Check window with with checkWindowWidth function
})

