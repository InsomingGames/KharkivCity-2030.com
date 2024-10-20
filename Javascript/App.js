const select = document.querySelector('select');
select.addEventListener('change', changeURLLanguage);
const allLang = ['en', 'ru', 'ua', ];





function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#'+lang;
    location.reload();
}
function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['Title'][hash];
    document.querySelector('.text-wrapper-10').innerHTML = langArr['Home'][hash];
    document.querySelector('.text-wrapper-11').innerHTML = langArr['Game'][hash];
    document.querySelector('.text-wrapper-3').innerHTML = langArr['MOREDET'][hash];
    document.querySelector('.text-wrapper-12').innerHTML = langArr['Media'][hash];
    document.querySelector('.text-wrapper-16').innerHTML = langArr['Buy'][hash];
    document.querySelector('.text-wrapper-5').innerHTML = langArr['Buy'][hash];
    document.querySelector('.text-wrapper-15').innerHTML = langArr['More'][hash];
    document.querySelector('.text-wrapper-13').innerHTML = langArr['ABOUT'][hash];
    document.querySelector('.text-wrapper-8').innerHTML = langArr['REG'][hash];
    document.querySelector('.text-wrapper-4').innerHTML = langArr['TRAILER'][hash];
    document.querySelector('.text-wrapper-17').innerHTML = langArr['PREBUY'][hash];
    document.querySelector('.text-wrapper-6').innerHTML = langArr['DOW'][hash];

    
}
changeLanguage();
