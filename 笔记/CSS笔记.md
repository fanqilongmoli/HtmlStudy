## 元素 ##
###块级元素###
- 典型代表 div，h1-h6，p，ul，li
- 特点：独占一行 可以设置宽高<br>
  嵌套(包含)下，子元素的宽度（没有定义的情况下）和父元素的宽度默认一致 

###行内元素###
- 典型代表 span，a，strong，em，del，ins
- 特点：在一行显示，不能直接设置宽高


###行内块元素（内联元素）###
- 典型代表 input img
- 特点：在一行上显示 可以设置宽高

## 元素转换 ##
### 块级元素转行内元素 ###
使用dispaly:inline;
### 行内元素转块级元素 ###
使用display:block;
### 行内元素 块级元素 转行内块元素 ###
使用display:inline-block;

# CSS三大特性 #
## 层叠性 ##
多个样式作用于同一个（同一类）标签时，样式发生了冲突，总是执行后边的代码（后边代码层叠前面的代码）。
## 继承性 ##
继承性发生的前提是包含（嵌套关系）<br>

- 文字的颜色可以继承
- 文字的大小可以继承
- 字体粗细可以继承
- 字体可以继承
- 字体的风格可以继承
- 行高可以继承<br>
 总结：文字的所有属性可以继承<br>
 特殊情况：h系列不能继承文字大小 a标签不能继承文字颜色
## 优先级 ##

- 默认样式<标签选择器<类选择器<id选择器<行内样式<!important
- !important 把选择器的优先级提升到最高

### 优先级的特点 


- 继承的权重为0

## 链接伪类 ##
a:link{属性：值；} a{属性：值} 效果都是一样的<br>
a:link{属性：值；} 链接的默认状态 <br>
a:visited{属性：值；} 链接的访问之后的状态 <br>
a:hover{属性：值；} 鼠标放在链接的链接上显示状态 <br>
a:active{属性：值；} 链接激活的状态 <br>
a:focus{属性：值；} 获取焦点 <br>

## 背景属性 ##
- background-color 背景颜色
- background-image 背景图片
	- background-repeat  repeat 背景平铺（默认）
	- background-repeat  no-repeat 背景不平铺
	- background-repeat  repeat-x 背景平铺 沿x
	- background-repeat  repeat-y 背景平铺 沿y
- background-position 背景定位 （只写一个值另一个值为居中）
	- left
	- right
	- center
	- top
	- bottom
	- background-position:20px 30px (写两个具体的值 第一个水平 第一个竖直)
- background-attachment 背景是都滚动
	- scroll 背景滚动
	- fixed  背景不滚动
- 背景属性连写 background: red url("1.png") no-repeat bottom fixed; 

## 行高的定义 ##
- 浏览器默认的字体大小是：16px
- 行高：是基线和基线之间的距离  行高=文字高度+上下边距
- 一行文字行高和父元素高度一致的时候，垂直居中显示

## 行高的单位 ##

单位 | 文字大小 | 值
---|--- |---
20px | 20px | 20px
2em | 20px | 40px
150% | 20px | 30px
2 | 20px | 40px

总结：单位除了像素意外，行高都是文字大小的乘积


## 盒子模型 ##

- 边框 border
- 内边距padding : top rigth bottom left 
    - 内边距会影响盒子的大小 
    - border 影响盒子的宽高
    - 盒子的宽度=定义的宽度+边框的宽度+左右内边距
- 继承的盒子一般不会被撑大，包含（嵌套）的盒子，如果子盒   子没有宽度，给盒子设置左右内边距，一般不会撑大盒子。
- 外边距margin top rigth bottom left

## 垂直方向外边距合并 ##

- 垂直方向的两个盒子，如果没有设置垂直方向的外边距，取的是设置比较大的值。

## 外边距的塌陷 ##

- 嵌套的盒子，直接给子盒子的垂直方向设置外边距的时候，会发生外边距塌陷
- 解决的方法：1.给父盒子设置边框 2.给父盒子设置 overflow：hidden    bfc 格式化上下文

## 文档流（标准流） ##

- 块元素，行内元素在一行上显示，碰到父元素的边框换行。

## 浮动布局 ##

- float：left | right   左浮动  右浮动
- 特点：
    - 元素浮动之后不占据原来的位置（脱标）
    - 浮动的盒子在一行上显示
    - 行内元素浮动之后转换为行内块元素 （这个不推荐使用 使用display：inline ）
- 浮动的作用
    - 文本绕图 
    - 制作导航
    - 网页布局

## 清除浮动 ##
- 清除浮动不是不用浮动，是清除浮动产生的不利影响
  - 当父盒子没有定义高度，嵌套的盒子浮动之后，下边的元素发生位置错误
- 清除浮动的方法
  - clean：left | right | both（工作里面最多的是clean：both） 
    - 1.额外标签法 ---在最后一个浮动的元素后添加标签（不常用）
    - 2.给父级元素 使用overflow:hidden （如果内容出了盒子不能使用）
    - 3.伪元素清除浮动（推荐使用）
        ```
        .clearfix:after{
                    content: '.';
                    display: block;
                    height: 0;
                    line-height: 0;
                    visibility: hidden;
                    clear: both;
                }
                .clearfix{
                    /*兼容ie*/
                   zoom: 1;
                }
        ```
        
## CSS初始化 ##

```
腾讯：
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0} 
body{font:12px"宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;} 
a{color:#2d374b;text-decoration:none} 
a:hover{color:#cd0200;text-decoration:underline} 
em{font-style:normal} 
li{list-style:none} 
img{border:0;vertical-align:middle} 
table{border-collapse:collapse;border-spacing:0} 
p{word-wrap:break-word} 


新浪：
body,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div{margin:0;padding:0;border:0;} 
body{background:#fff;color:#333;font-size:12px; margin-top:5px;font-family:"SimSun","宋体","Arial Narrow";}
ul,ol{list-style-type:none;} 
select,input,img,select{vertical-align:middle;} 
a{text-decoration:none;} 
a:link{color:#009;} 
a:visited{color:#800080;} 
a:hover,a:active,a:focus{color:#c00;text-decoration:underline;} 
淘宝：
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; } 
body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; } 
h1, h2, h3, h4, h5, h6{ font-size:100%; } 
address, cite, dfn, em, var { font-style:normal; } 
code, kbd, pre, samp { font-family:couriernew, courier, monospace; } 
small{ font-size:12px; } 
ul, ol { list-style:none; } 
a { text-decoration:none; } 
a:hover { text-decoration:underline; } 
sup { vertical-align:text-top; } 
sub{ vertical-align:text-bottom; } 
legend { color:#000; } 
fieldset, img { border:0; }
button, input, select, textarea { font-size:100%; } 
table { border-collapse:collapse; border-spacing:0; } 

```

## overflow属性 ##

属性 | 解释
---|---
overflow：visible | 默认值，内容不会被修改，会呈现在元素的边框之外
overflow：hidden | 内容会被修剪，并且其余内容是不可见的
overflow：scroll | 内容会被修剪，但是浏览器会显示滚动条,以便查看其余的内容
overflow：auto | 如果内容被修剪，但是浏览器会显示滚动条,以便查看其余的内容


## 定位 position ##
- 定位的方向：left right top bottom
- **（静态定位）position：static** 。 默认值，就是文档流。
- **（绝度定位）position：absolute** 
  - 元素使用 绝度定位之后 不占据原来的位置（脱标）
  - 元素使用 绝度定位，位置是从浏览器出发的
  - 嵌套的盒子，父盒子没有使用定位，子盒子绝对定位，子盒子的位置是从浏览器出发的
  - 嵌套的盒子，父盒子使用定位，子盒子绝对定位，子盒子的位置是从父元素的位置出发的
  - 行内元素使用绝对定位之后，转换为行内块（不推荐使用）
- **（相对定位）position：relative**
  - 使用相对定位，位置从自身出发。
  - 还占据原来的位置 不脱标
  - ==**子绝父相（父元素相对定位，子元素绝对定位）**==
  - 行内使用相对定位是不能转换成行内块的

- **（固定定位）position：fix**
  - 固定定位之后 不占据原来的位置（脱标了） 
  - 元素使用固定位置之后，位置从浏览器出发的
  - 使用固定定位，会转换成行内块（不推荐使用）

## 定位的居中显示 ##
- margin：0 auto；只能让标准流的盒子居中对齐
- 定位的盒子脱标 margin：0 auto；无效，应该使用下面方法：先向右走父元素盒子的一半50%，在向左走盒子的一半（margin-left: 负值;）
    
    ```
    .nav{
                width: 960px;
                height: 60px;
                background: #666;
                position: absolute;
                bottom: 0;
                // 定位的盒子居中
                left: 50%;
                margin-left: -480px;
            }
    ```

## 标签的包含规范 ##
- div可以包含所有的标签
- p标签不能包含 div h1 等
- h系列标签可以包含p，div等标签
- 行内元素尽量包含行内元素，行内元素不要包含块元素。

## 规避脱标流 ##
- 尽量使用标准流
- 标准流解决不了的使用浮动
- 浮动解决不了的使用定位

## 图片和文字垂直居中对齐 ##
- vertical-align 对 inline-block 最敏感。默认属性是vertical-align：baseline

## CSS可见性 ##
- overflow：hidden 溢出隐藏
- visibility：hidden 隐藏元素--隐藏之后**还占据**原来的位置
- display：none 隐藏元素--隐藏之后**不占据**原来的位置
- display：block 元素可见
- display：none和display：bloc；常配合js使用

## CSS之内容移除（网页优化） ##
- 使用text-indent：-5000em
    ```
    a{
      display: inline-block;
      text-indent: -5000em;
    }
    ```
- 使用text-indent：-5000em
    ```
    a{
      width: 300px;
      height: 0;
      background：red；
      padding-top：100px；
      overflow：hidden；
    }
    ```
