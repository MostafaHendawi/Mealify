// start access dark mode to my icon 
// // Get the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Add click event listener to toggle dark mode
darkModeToggle.addEventListener('click', function() {
    toggleDarkMode();
    // Toggle icon based on dark mode state
    const icon = document.querySelector('.icon');
    const icon2 = document.querySelector('.icon2');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    // icon.classList.toggle('fa-regular fa-sun');

});
// end access dark mode to my icon ----------------------------------------
// start active li 
const menuItem =document.querySelectorAll(".menu-item")
const changeActive = function (){
    menuItem.forEach(item => {
        item.classList.remove('active');
    })
}
// sidebar links 

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        changeActive();
        item.classList.add('active');
        
    })
})
// end active li 