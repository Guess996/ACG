/*!
* Start Bootstrap - Grayscale v7.0.3 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

   window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
    const textSearch=document.querySelector('#textSearch')
    const SearchButton=document.querySelector('#Button')
    SearchButton.onclick=()=>{
        if(textSearch.value==''){
            alert('请输入内容');
        }else{
            location.replace('https://www.baidu.com/s?word='+textSearch.value+'&sa=tb&ts=7206220&t_kt=0&ie=utf-8&rsv_t=9588S0aIZpfQAnhoSE7MgRU5t4Zz0VU2LDEFf50%252Fvl5v71yW2eVHwFqiCg&ms=1&rsv_pq=10428263317001595691&ss=110&sugid=14743310232227904645&rqlang=zh&rsv_sug4=8077&inputT=6832&oq=a')
        }
    }
    const social=document.querySelectorAll('#social>a')
    for(let i=0;i<3;i++ ){
        social[i].onclick=()=>{
            switch(i){
                case 2:location.replace('https://%72%65%73%2e%61%62%65%69%6d%2e%63%6e/%61%70%69/%71%71/?%71%71=10001')
                break;
                default:alert('没有')
            }
        }
    }