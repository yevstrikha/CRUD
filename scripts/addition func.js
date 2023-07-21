function createElement(tagName, attributes,content, handlers, parent) {
    let elem = document.createElement(tagName);
    for (let key in attributes) {
        if (key === 'className') {
            elem.setAttribute('class', attributes[key])
        } else {
            elem.setAttribute(key, attributes[key])
        }
    }
    elem.textContent = content
    for(let key in handlers){
        elem.addEventListener(key, handlers[key])
    }
    parent.appendChild(elem);
    return elem
}

function addSpan(listItem,i) {
    let spanDiv = createElement('div', {className: 'span_div',id: i}, '', null, listItem)
    let spanView = createElement('button', {type: 'button', className: 'view'}, 'View', {click : viewFunc}, spanDiv)
    let spanEdit = createElement('button', {type: 'button', className: 'edit'}, 'Edit', {click : editFunc}, spanDiv);
    let spanRemove = createElement('button', {type: 'button', className: 'remove'}, 'Remove', {click : removeFunc}, spanDiv)
}

function closePopUp() {
   document.querySelector('.user_info_pop-up').classList.toggle('hidden')
}


