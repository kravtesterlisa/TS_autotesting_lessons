// #### Task 1 💻 Зайти на 5 разных ссылок в https://the-internet.herokuapp.com/
// (можно с помощью клика, можно через url). С каждой страницы для 2-3 элементов
// вывести в консоль одно из: значение атрибута, value, текст. 



//--> 1 page:
'https://the-internet.herokuapp.com/dynamic_controls' 
//1. for button Enable:
document.querySelector('button[onclick="swapInput()"]').type 
//2. for checkbox:
document.querySelector('input[type="checkbox"]').value
// 3. for header h4:
document.querySelector('div.example > h4').textContent 


//--> 2 page:
//https://the-internet.herokuapp.com/upload 

//1. for button 'Upload':
document.querySelector('input#file-upload').name 
//2. for drag-drop upload area:
document.querySelector('#drag-drop-upload') 


//--> 3 page:
//https://the-internet.herokuapp.com/dynamic_loading 

//1. Example 1: Element on page
$('a[href="/dynamic_loading/1"]').text

//--> 4 page:
https://the-internet.herokuapp.com/login 
//1. for input 'Úsername'
document.querySelector('input#username').name
document.querySelector('button.radius').textContent 

//--> 5 page:
//https://the-internet.herokuapp.com/drag_and_drop 
//1. for drag-drop-a:
document.querySelector('div.column#column-a').draggable --> true

//--> 6 page:
https://the-internet.herokuapp.com/dynamic_loading/1
// 1. loading
document.querySelector('div#loading').textContent 





//#####task 2
https://store.steampowered.com/ вывести в консоль названия, жанры и цены для
// каждой из игр для #tab_newreleases_content элемента.


document.querySelector('.home_tab_content#tab_summersale_newreleases_content')

названия, жанры и цены price:
<div class="discount_final_price">Free to Play</div>

name: from link -->
href="https://store.steampowered.com/app/1402020/SCP_Labrat/?snr=1_4_661__145"
type: 1. найти div по селектору #tab_summersale_newreleases_content >
div.home_newupcoming_games_ctn 2. из его содержимого выбрать все теги 'a' и для
каждого перейти по ссылке в поле href 3. перейдя по сслке высосать данные
$$("div.home_newupcoming_games_ctn > a").forEach(div=>console.log(div.href)) -->
all links $$("div.home_newupcoming_games_ctn >
a").forEach(a=>fetch(a.href).then(doc => console.log(doc.body)))
