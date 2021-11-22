var menuToggel = document.querySelector('.menuToggel')

var navigation = document.querySelector('.navigation')

menuToggel.onclick = function(){
    menuToggel.classList.toggle('active')
    navigation.classList.toggle('active')
}