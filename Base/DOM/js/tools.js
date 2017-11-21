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
    return  ele.lastElementChild || ele.lastChild;
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























