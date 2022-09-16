window.addEventListener('DOMContentLoaded', () => {

    var t = document.title ;
    let listTitle=[
        "♪♫¸（⊙‿⊙）✌","♪♫¸（◠▽◠）✌","♪♫¸（ ô‿ô ） ","♪♫¸（͡° ʖ ͡°）","♪♫¸（͡ Ö‿Ö ） ","♪♫¸（＾▽＾）","♪♫¸（ •◡• ）","♪♫¸（ ¬‿¬ ）","♪♫¸（◉◡◉）✌","♪♫¸（◔◡◔）✌","♪♫¸（ˇωˇ）✌","♪♫¸（ô ◡ ô）","♪♫¸（∩▽∩）✌","♪♫¸（ >‿◠）✌","♪♫¸（⊙△⊙）✌","♪♫¸（≧▽≦）✌","♪♫¸（ ^人^ ）","♪♫¸（°ω°）✌","♪♫¸（ˋωˊ）✌","♪♫¸（ˋ△ˊ）✌","♪♫¸（ˇ▽ˇ）✌","♪♫¸（°ο°）✌","♪♫¸（ˇ◡ˇ）✌","♪♫¸（ ⊙ʖ⊙）✌","♪♫¸（ˉ▽ˉ）✌","♪♫¸（￣□￣）✌",
    ];
    var myObj = {"title":[]};
    listTitle.forEach((i)=>{
        // console.log(i)
        myObj.title.push(t+i);
    });
        
    var i = 0 ;

   var time1 =  setInterval(title,2000); 
   function title(){
        document.getElementsByTagName("title")[0].innerText = myObj.title[i];i++;
        i==myObj.title.length?i=0:null;
  }
    title();



    ///////////////////
    (function() {
        var OriginTitile = document.title, titleTime;
        document.addEventListener('visibilitychange', function() {
          if (document.hidden) {
      document.title = '咦，去哪了？';
      //关闭定时器
clearInterval(time1);
      clearTimeout(titleTime);
          }else{
      document.title = '(つェ⊂)哇，回来啦！';
      //再次开启定时器
time1 = setInterval(title,3000);
      titleTime = setTimeout(function() {
      document.title = OriginTitile;
            },1000);
          }
        });
      })();

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


    const colora='#000';
    const colorb='#fff';
    var labelcont=document.querySelectorAll('.content-section_sec>.content-section_div');
    var ullabel= document.querySelectorAll('.ullabel>ul>li');
    // labelbar[0].style.display='none';
    labelcont[0].style.display='block';
    ullabel[0].style.background=colorb;
    ullabel[0].style.color=colora;
        for(let i=0;i<ullabel.length;i++){
            ullabel[i].onclick=()=>{
                labelcont.forEach((i)=>{i.style.display='none'});
                ullabel.forEach((i)=>{i.style.background='',i.style.color=colorb});
                labelcont[i].style.display='block';
                ullabel[i].style.background=colorb;
                ullabel[i].style.color=colora;
            }
        }
    console.log("\n %c WebSite 动漫导航 %c https://guess996.github.io/ACG/ \n",`color:#fff;background:#000; padding:5px 0;` , `background: ${colora}; padding:5px 0;`);

    let ip=null;
    axios({
        method:'get',
        url:'http://ip-api.com/json/?lang=zh-CN',
        contentType: "application/x-www-form-urlencoded",
        Headers:{
            header:'Access-Control-Allow-Origin: *'
        }
      })
        .then(function(response) {
            console.log(response.data.city);
      }).catch((e)=>console.log(e));
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
//   axios({
//     method:'get',
//     url:'https://bgmlist.com/api/v1/bangumi/onair',
//     contentType: "application/x-www-form-urlencoded",
//     Headers:{
//         header:'Access-Control-Allow-Origin: *'
//     }
//   })
//     .then(function(response) {
//         console.log(response.data);
        
//   }).catch((e)=>console.log(e));
  //https://api.bilibili.com/pgc/web/timeline?types=1&before=6&after=6
//
///////////////VUE///////////////////////////////
const  VueApp = {
    data() {
      return {
        message: 'Hello Vue!!',
        showdataul:false,dataul:[],
        day:'',
        daynum:0,
        dateul:[],
        uldate:[],

      weeks: [
'星期日',
'星期一',
'星期二',
'星期三',
'星期四',
'星期五',
'星期六'
],
      }
    },
    beforeMount() {
axios
      ({
method:'get',
url:'https://api.bgm.tv/calendar',
contentType: "application/x-www-form-urlencoded",
Headers:{
header:'Access-Control-Allow-Origin: *'
}
}).then((response)=>{
          this.showdataul= !this.showdataul;
          this.dataul =response.data
          
      })
      .catch(function (error) { // 请求失败处理
          console.log(error);
      });
var now = new Date()
this.daynum=now.getDay();
this.day =this.weeks[this.daynum];
console.log(this.daynum);
},
mounted () {
        


},
methods: {

butclick(i){
this.dateul=document.querySelectorAll('.dateul>li');
this.uldate=document.querySelectorAll('.uldata>ul');
// console.log(this.uldate);
this.$nextTick(()=>{
this.daynum=++i;
})
for(let i=0;i<this.dateul.length;i++){
this.dateul[i].onclick=()=>{
// this.uldate.forEach((i)=>{i.style.display='none'});
// this.uldate[i].style.display='block';
this.daynum=++i;
//  this.dateul[i].style.background='#fff';
// this.dateul.forEach((i)=>{i.style.background='',i.style.color='#000'});
      // labelcont[i].style.display='block';
     
      // ullabel[i].style.color=colora;
  }
}
}

},

  
  }
 
  Vue.createApp(VueApp).mount('#dmday')






//禁用控制台
//
    // const handler = setInterval(function() {
    //     console.clear();
    //     const before = new Date();
    //     debugger ;const after = new Date();
    //     const cost = after.getTime() - before.getTime();
    //     if (cost > 100) {}
    // }, 1);

    // document.oncontextmenu = function(event) {
    //     if (window.event) {
    //         event = window.event;
    //     }
    //     try {
    //         var the = event.srcElement;
    //         if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
    //             return false;
    //         }
    //         return true;
    //     } catch (e) {
    //         return false;
    //     }
    // }

    // document.onpaste = function(event) {
    //     if (window.event) {
    //         event = window.event;
    //     }
    //     try {
    //         var the = event.srcElement;
    //         if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
    //             return false;
    //         }
    //         return true;
    //     } catch (e) {
    //         return false;
    //     }
    // }

    // document.oncut = function(event) {
    //     if (window.event) {
    //         event = window.event;
    //     }
    //     try {
    //         var the = event.srcElement;
    //         if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
    //             return false;
    //         }
    //         return true;
    //     } catch (e) {
    //         return false;
    //     }
    // }

    // function fuckyou() {
    //     window.open("/", "_blank");
    //     window.close();
    //     window.location = "about:blank";
    // }

    // var arr = [123, 17, 18];
    // document.oncontextmenu = new Function("event.returnValue=false;"),

    // window.onkeydown = function(e) {
    //     var keyCode = e.keyCode || e.which || e.charCode;
    //     var ctrlKey = e.ctrlKey || e.metaKey;
    //     console.log(keyCode + "--" + keyCode);
    //     if (ctrlKey && keyCode == 85) {
    //         e.preventDefault();
    //     }
    //     if (arr.indexOf(keyCode) > -1) {
    //         e.preventDefault();
    //     }
    // }

    // function ck() {
    //     console.profile();
    //     console.profileEnd();

    //     if (console.clear) {
    //         console.clear()
    //     }
    //     ;if (typeof console.profiles == "object") {
    //         return console.profiles.length > 0;
    //     }
    // }

    // function hehe() {
    //     if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
    //         fuckyou();
    //     }
    //     if (typeof console.profiles == "object" && console.profiles.length > 0) {
    //         fuckyou();
    //     }
    // }
    // hehe();
    // window.onresize = function() {
    //     if ((window.outerHeight - window.innerHeight) > 100)

    //         fuckyou();
    // }

    // document.onkeydown = function(event) {
    //     if ((event.keyCode == 112) || (event.keyCode == 113) || (event.keyCode == 114) || (event.keyCode == 115) || // (event.keyCode == 116) || 
    //     (event.keyCode == 117) || (event.keyCode == 118) || (event.keyCode == 119) || (event.keyCode == 120) || (event.keyCode == 121) || (event.keyCode == 122) || (event.keyCode == 123)) {
    //         return false;
    //     }
    // }
    // window.onhelp = function() {
    //     return false;
    // }