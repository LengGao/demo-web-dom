/**
 * 老操作
 * document.getElementById
 * document.getElementsByClassName
 * document.getElementsByName
 * document.getElementsByTagName
 * document.getElementsByTagNameNS
 * document.getRootNode
 * document.getSelection
 * 新操作
 * document.querySelectorAll
 * document.querySelector
 * 去呗在于一个传参数名称，一个传选择器名称
 */
// console.log(document.querySelector('#root')) // <div id='root'> </div>
 var roots = document.querySelector('#root')
//  roots.textContent = '操作DOM'
 roots.appendChild(document.createElement('p'))
 roots.insertBefore(document.createElement('span'),document.getElementById('list'))  // 如果我们要把子节点插入到指定的位置怎么办？可以使用parentElement.insertBefore(newElement, referenceElement);，子节点会插入到referenceElement之前。
 roots.insertAdjacentElement('afterbegin',document.createElement('a')) // 指定roots的方向 
  //    insertAdjacentHTML(where: InsertPosition, html: string): void;
  //    insertAdjacentText(where: InsertPosition, text: string): void;
var ist = document.querySelector('#list')
console.log('child',list.child) // child 只读，而且 删除了的子节点被暂时保存再内存中，但是child 是实时更新的



