(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{667:function(t,i,e){},733:function(t,i,e){"use strict";e(667)},768:function(t,i,e){"use strict";e.r(i);e(57);var s={name:"carousel",data:function(){return{carouselData:[{title:"背景1",src:"https://www.zpzpup.com/assets/image/example/bg7.jpeg"},{title:"背景2",src:"https://www.zpzpup.com/assets/image/example/bg8.jpeg"},{title:"背景3",src:"https://www.zpzpup.com/assets/image/example/bg9.jpeg"},{title:"背景4",src:"https://www.zpzpup.com/assets/image/example/bg10.jpeg"},{title:"背景5",src:"https://www.zpzpup.com/assets/image/example/bg7.jpeg"}],positionList:[{width:"172px",height:"500px",top:"-20px",left:"60px",right:"",bottom:""},{width:"172px",height:"500px",top:"",left:"300px",right:"",bottom:"100px"},{width:"172px",height:"500px",top:"",left:"-150px",right:"",bottom:"60px"},{width:"172px",height:"500px",top:"-130px",left:"",right:"140px",bottom:""},{width:"172px",height:"500px",top:"",left:"",right:"-50px",bottom:"10px"}],flag:!0,timer:null}},mounted:function(){var t=this;this.start(),this.timer=setInterval((function(){t.flag=!1,t.start()}),6e3)},destroyed:function(){clearInterval(this.timer)},methods:{start:function(){var t=this;this.flag=!0,requestAnimationFrame((function(){t.positionList=t.shuffle(t.positionList)}))},shuffle:function(t){for(var i=t.length;i;){var e=Math.floor(Math.random()*i--),s=[t[i],t[e]];t[e]=s[0],t[i]=s[1]}return t}}},o=(e(733),e(5)),p=Object(o.a)(s,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"carousel"},[e("ul",{staticClass:"carousel-ul"},t._l(t.carouselData,(function(i,s){return t.flag?e("li",{staticClass:"accordion-item",style:{backgroundImage:"url("+i.src+")",width:t.positionList[s].width,height:t.positionList[s].height,top:t.positionList[s].top,left:t.positionList[s].left,right:t.positionList[s].right,bottom:t.positionList[s].bottom}},[e("p",{staticClass:"accordion-title"},[t._v(t._s(i.title))])]):t._e()})),0)])}),[],!1,null,"474a3593",null);i.default=p.exports}}]);