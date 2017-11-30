/**
 * 缓动动画封装
 * @param ele
 * @param target
 */
function animate(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        console.log(1);
        if (Math.abs(target - ele.offsetTop) < Math.abs(step)) {
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    }, 25);
}

/**
 * scroll封装
 * @returns {*}
 */
function scroll() {  // 开始封装自己的scrollTop
    if (window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

/**
 * 通过传递不同的参数获取不同的元素
 * @param str
 * @returns {*}
 */
function $(str) {
    var str1 = str.charAt(0);
    if (str1 === "#") {
        return document.getElementById(str.slice(1));
    } else if (str1 === ".") {
        return document.getElementsByClassName(str.slice(1));
    } else {
        return document.getElementsByTagName(str);
    }
}

/**
 * @param id
 * @returns {Element}
 */
function getEle(id) {
    return document.getElementById(id);
}

/**
 * 给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele) {
    return ele.firstElementChild || ele.firstChild;
}

/**
 * 给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {*|Node|Element}
 */
function getLastNode(ele) {
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele) {
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|Node|*}
 */
function getPrevNode(ele) {
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele
 * @param index
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele, index) {
    return ele.parentNode.children[index];
}

/**
 * 给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele) {
    var newArr = [];
    var arr = ele.parentNode.children;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== ele) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

