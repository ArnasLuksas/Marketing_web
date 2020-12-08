const mobNav = document.querySelector('.burger-menu img');
const mobList = document.querySelector('.list');
mobList.style.display = "none";

mobNav.addEventListener('click', showNav);


function showNav(){
// console.log(`${mobNav} is clicked`)
    if(mobList.style.display === 'none'){
        mobList.style.display = "block";
    }else{
        mobList.style.display = "none";

    }
};