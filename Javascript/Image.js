const PlayGames=document.querySelector('#PlayGames')
const buttonp =document.querySelector('#buttonp')




buttonp.addEventListener('click',() =>{
    if (PlayGames.classList.contains('disp') == true ){
        PlayGames.classList.remove('disp')
    } else {
        PlayGames.classList.add('disp')
    }
})