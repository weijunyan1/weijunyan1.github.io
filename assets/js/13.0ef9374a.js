(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{668:function(t,e,s){},734:function(t,e,s){"use strict";s(668)},769:function(t,e,s){"use strict";s.r(e);var i={name:"filterTemp",data:function(){return{blur:0,contrast:100,grayscale:0,hue_rotate:0,sepia:0,saturate:100,brightness:100,invert:0,opacity:100}}},a=(s(734),s(5)),r=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("div",{staticClass:"container"},[s("section",[s("figure",[t._m(0),t._v(" "),s("img",{style:{filter:"blur("+t.blur+"px)"},attrs:{src:"https://www.zpzpup.com/assets/image/example/bg1.jpg"}})]),t._v(" "),s("footer",[s("el-slider",{attrs:{min:0,max:40,"input-size":"mini","show-input":""},model:{value:t.blur,callback:function(e){t.blur=e},expression:"blur"}})],1)]),t._v(" "),s("section",[s("figure",[t._m(1),t._v(" "),s("img",{style:{filter:"contrast("+t.contrast+"%)"},attrs:{src:"https://www.zpzpup.com/assets/image/example/bg1.jpg"}})]),t._v(" "),s("footer",[s("el-slider",{attrs:{min:0,max:500,"input-size":"mini","show-input":""},model:{value:t.contrast,callback:function(e){t.contrast=e},expression:"contrast"}})],1)]),t._v(" "),s("section",[s("figure",[t._m(2),t._v(" "),s("img",{style:{filter:"grayscale("+t.grayscale+"%)"},attrs:{src:"https://www.zpzpup.com/assets/image/example/bg1.jpg"}})]),t._v(" "),s("footer",[s("el-slider",{attrs:{min:0,max:100,"input-size":"mini","show-input":""},model:{value:t.grayscale,callback:function(e){t.grayscale=e},expression:"grayscale"}})],1)]),t._v(" "),s("section",[s("figure",[t._m(3),t._v(" "),s("img",{style:{filter:"hue-rotate("+t.hue_rotate+"deg)"},attrs:{src:"https://www.zpzpup.com/assets/image/example/bg1.jpg"}})]),t._v(" "),s("footer",[s("el-slider",{attrs:{min:0,max:100,"input-size":"mini","show-input":""},model:{value:t.hue_rotate,callback:function(e){t.hue_rotate=e},expression:"hue_rotate"}})],1)]),t._v(" "),s("section",[s("figure",[t._m(4),t._v(" "),s("img",{style:{filter:"sepia("+t.sepia+"%)"},attrs:{src:"https://www.zpzpup.com/assets/image/example/bg1.jpg"}})]),t._v(" "),s("footer",[s("el-slider",{attrs:{min:0,max:100,"input-size":"mini","show-input":""},model:{value:t.sepia,callback:function(e){t.sepia=e},expression:"sepia"}})],1)]),t._v(" "),s("section",[s("figure",[t._m(5),t._v(" "),s("img",{style:{filter:"saturate("+t.saturate+"%)"},attrs:{src:"https://www.zpzpup.com/assets/image/example/bg1.jpg"}})]),t._v(" "),s("footer",[s("el-slider",{attrs:{min:0,max:200,"input-size":"mini","show-input":""},model:{value:t.saturate,callback:function(e){t.saturate=e},expression:"saturate"}})],1)]),t._v(" "),s("section",[s("figure",[t._m(6),t._v(" "),s("img",{style:{filter:"brightness("+t.brightness+"%)"},attrs:{src:"https://www.zpzpup.com/assets/image/example/bg1.jpg"}})]),t._v(" "),s("footer",[s("el-slider",{attrs:{min:0,max:400,"input-size":"mini","show-input":""},model:{value:t.brightness,callback:function(e){t.brightness=e},expression:"brightness"}})],1)]),t._v(" "),s("section",[s("figure",[t._m(7),t._v(" "),s("img",{style:{filter:"invert("+t.invert+"%)"},attrs:{src:"https://www.zpzpup.com/assets/image/example/bg1.jpg"}})]),t._v(" "),s("footer",[s("el-slider",{attrs:{min:0,max:100,"input-size":"mini","show-input":""},model:{value:t.invert,callback:function(e){t.invert=e},expression:"invert"}})],1)]),t._v(" "),s("section",[s("figure",[t._m(8),t._v(" "),s("img",{style:{filter:"opacity("+t.opacity+"%)"},attrs:{src:"https://www.zpzpup.com/assets/image/example/bg1.jpg"}})]),t._v(" "),s("footer",[s("el-slider",{attrs:{min:0,max:100,"input-size":"mini","show-input":""},model:{value:t.opacity,callback:function(e){t.opacity=e},expression:"opacity"}})],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("p",[this._v("blur(px)")]),this._v(" "),e("p",{staticClass:"note"},[this._v("给图像设置高斯模糊。“radius”一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("p",[this._v("contrast(%)")]),this._v(" "),e("p",{staticClass:"note"},[this._v("调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("p",[this._v("grayscale(%)")]),this._v(" "),e("p",{staticClass:"note"},[this._v("将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("p",[this._v("hue-rotate(deg)")]),this._v(" "),e("p",{staticClass:"note"},[this._v("给图像应用色相旋转。“angle”一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("p",[this._v("sepia(%)")]),this._v(" "),e("p",{staticClass:"note"},[this._v("将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("p",[this._v("saturate(%)")]),this._v(" "),e("p",{staticClass:"note"},[this._v("转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("p",[this._v("brightness(%)")]),this._v(" "),e("p",{staticClass:"note"},[this._v("给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("p",[this._v("invert(%)")]),this._v(" "),e("p",{staticClass:"note"},[this._v("反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("p",[this._v("opacity(%)")]),this._v(" "),e("p")])}],!1,null,"0d51c0e0",null);e.default=r.exports}}]);