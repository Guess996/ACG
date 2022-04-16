/*!
* Start Bootstrap - Grayscale v7.0.3 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 
    window.addEventListener('DOMContentLoaded', () => {

    var t = document.title ;
    var t01 = t + "♪♫¸（ >‿◠）✌";
    var t02 = t + "♪♫¸（⊙‿⊙）✌";
    var t03 = t + "♪♫¸（◠▽◠）✌";
    var t04 = t + "♪♫¸（ ô‿ô ） ✌";
    var t05 = t + "♪♫¸（͡° ʖ ͡°）✌";
    var t06 = t + "♪♫¸（͡ Ö‿Ö ） ✌";
    var t07 = t + "♪♫¸（＾▽＾）✌";
    var t08 = t + "♪♫¸（ •◡• ）✌";
    var t09 = t + "♪♫¸（ ¬‿¬ ）✌";
    var t10 = t + "♪♫¸（◉◡◉）✌";
    var t11 = t + "♪♫¸（◔◡◔）✌";
    var t12 = t + "♪♫¸（ˇωˇ）✌";
    var t13 = t + "♪♫¸（ô ◡ ô）✌";
    var t14 = t + "♪♫¸（∩▽∩）✌";
    var t15 = t + "♪♫¸（⊙△⊙）✌";
    var t16 = t + "♪♫¸（≧▽≦）✌";
    var t17 = t + "♪♫¸（ ^人^ ）✌";
    var t18 = t + "♪♫¸（°ω°）✌";
    var t19 = t + "♪♫¸（ˋωˊ）✌";
    var t20 = t + "♪♫¸（ˋ△ˊ）✌";
    var t21 = t + "♪♫¸（ˇ▽ˇ）✌";
    var t22 = t + "♪♫¸（°ο°）✌";
    var t23 = t + "♪♫¸（ˇ◡ˇ）✌";
    var t24 = t + "♪♫¸（ ⊙ʖ⊙）✌";
    var t25 = t + "♪♫¸（ˉ▽ˉ）✌";
    var t26 = t + "♪♫¸（￣□￣）✌";
    var myObj = {"title":[ t01,t02,t03,t04,t05,t06,t07,t08,t09,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26 ]}
    var x = myObj.title.length;
    var i = 0 ;
    function tit(){document.getElementsByTagName("title")[0].innerText = myObj.title[i];i++;if( i == x ){ i = 0 ;}setTimeout(function (){tit()}, 1000);}
    tit()


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
     const textSearch=document.querySelector('#textSearch');
    const SearchButton=document.querySelector('#Button');
    SearchButton.onclick=()=>{
        if(textSearch.value==''){
            alert('请输入内容');
            console.log(document.body.scrollWidth);
        }else{
            if(document.body.scrollWidth<=800){
                location.replace('https://www.baidu.com/s?word='+textSearch.value+'&sa=tb&ts=7206220&t_kt=0&ie=utf-8&rsv_t=9588S0aIZpfQAnhoSE7MgRU5t4Zz0VU2LDEFf50%252Fvl5v71yW2eVHwFqiCg&ms=1&rsv_pq=10428263317001595691&ss=110&sugid=14743310232227904645&rqlang=zh&rsv_sug4=8077&inputT=6832&oq=a')
            }else{
                location.replace('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&ch=&tn=baidu&bar=&wd='+textSearch.value+'&rn=&fenlei=256&oq=&rsv_pq=aeedc18f0001200d&rsv_t=4c9ajItCpBIRzc%2FYcTjncIRpgEoyk0pNhN%2Fd6amXepNU2tAXWzLUhdkTRZQ&rqlang=cn&rsv_enter=0&rsv_btype=i&rsv_dl=ib&inputT=1622')
            }
            
        }
    }
    const social=document.querySelectorAll('#social>a')
    for(let i=0;i<3;i++ ){
        social[i].onclick=()=>{
            switch(i){
                //https://qm.qq.com/cgi-bin/qm/qr?k=DheR_SS89gXmeZizNGWcxpwfVMmLA1aY&jump_from=webapi
                case 2:location.replace('https://%72%65%73%2e%61%62%65%69%6d%2e%63%6e/%61%70%69/%71%71/?%71%71=10001')
                break;
                default:alert('没有')
            }
        }
    }



    var labelcont=document.querySelectorAll('.content-section_sec>.content-section_div');
    var ullabel= document.querySelectorAll('.ullabel>ul>li');
    // labelbar[0].style.display='none';
    labelcont[0].style.display='block';
    ullabel[0].style.background='#fff';
    ullabel[0].style.color='#64a19d';
        for(let i=0;i<ullabel.length;i++){
            ullabel[i].onclick=()=>{

                labelcont.forEach((i)=>{i.style.display='none'});
                ullabel.forEach((i)=>{i.style.background='',i.style.color='#fff'});
                labelcont[i].style.display='block';
                ullabel[i].style.background='#fff';
                ullabel[i].style.color='#64a19d';
            }
        }
    console.log("\n %c WebSite 动漫导航 %c https://guess996.github.io/ACG/ \n", "color: #ffffff; background:#64a19d; padding:5px 0;", "background: #64a19d; padding:5px 0;");
// https://data.zhai78.com/openOneGood.php

    // axios.get('https://api.qqsuu.cn/api/index',)
    // .then(function (response) {
    //   console.log(response.data.txt);
    //   document.querySelector('h2.at-item').innerHTML=response.data.txt;
    // })
    // .catch(function (error) {
    //   console.log(error);
    // }); 
   
axios({
    method:'get',
    url:'https://api.oick.cn/dutang/api.php',
    contentType: "application/x-www-form-urlencoded",
    Headers:{
        header:'Access-Control-Allow-Origin: *'
    }
  })
    .then(function(response) {
        console.log(response.data);
        document.querySelector('h2.at-item').innerHTML=response.data
  }).catch((e)=>console.log(e));
//DOMContentLoaded

// window.onload=()=>{
//     console.log(sss);
    
// }
  
    

    // 2 快速入门
    // 随机二次元图片
    
    // GET/POST /img?type=moe
    // 示例：https://api.yimian.xyz/img?type=moe
    // 随机Bing壁纸
    
    // GET/POST /img?type=wallpaper
    // 示例：https://api.yimian.xyz/img?type=wallpaper
    // 随机二次元头像
    
    // GET/POST /img?type=head
    // 示例：https://api.yimian.xyz/img?type=head
    // 随机图床图片
    
    // GET/POST /img?type=imgbed
    // 示例：https://api.yimian.xyz/img?type=imgbed
    // 随机1920x1080尺寸二次元图片
    
    // GET/POST /img?type=moe&size=1920x1080
    // 示例：https://api.yimian.xyz/img?type=moe&size=1920x1080