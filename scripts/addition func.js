function createElement(tagName, attributes, content, handlers, parent) {
    let elem = document.createElement(tagName);
    for (let key in attributes) {
        if (key === 'className') {
            elem.setAttribute('class', attributes[key])
        } else {
            elem.setAttribute(key, attributes[key])
        }
    }
    elem.textContent = content
    for (let key in handlers) {
        elem.addEventListener(key, handlers[key])
    }
    parent.appendChild(elem);
    return elem
}

function addSpan(listItem, i) {
    let spanDiv = createElement('div', {className: 'span_div', id: i}, '', null, listItem)
    let spanView = createElement('button', {type: 'button', className: 'view'}, 'View', {click: viewFunc}, spanDiv)
    let spanEdit = createElement('button', {type: 'button', className: 'edit'}, 'Edit', {click: editFunc}, spanDiv);
    let spanRemove = createElement('button', {
        type: 'button',
        className: 'remove'
    }, 'Remove', {click: removeFunc}, spanDiv)
}

function closePopUp() {
    document.querySelector('.user_info_pop-up').classList.toggle('hidden')
}

function formValidation(uName) {
    let fNameTest = /[A-Z][a-z]+/
    fNameTest.test(uName);
    if (!fNameTest.test(uName)) {
        formSave.disabled = true
    }
}

function saveFormFunc() {
    const uName = document.forms.userForm.f_name.value;
    const lName = document.forms.userForm.l_name.value;
    const uAge = document.forms.userForm.age.value;
    const uEmail = document.forms.userForm.email.value;
    const uPhone = document.forms.userForm.phone.value;
    const uCard = document.forms.userForm.bank_card.value;

    let fNameTest = /[A-Z][a-z]+/;
    fNameTest.test(uName);
    if (!fNameTest.test(uName)) {
        document.forms.userForm.f_name.classList.toggle('attention')
    } else {

        userArr.push(
            {
                name: uName,
                lastName: lName,
                age: uAge,
                email: uEmail,
                phone: uPhone,
                bankCard: uCard
            }
        )
        localStorage.setItem('users', JSON.stringify(userArr));
        document.querySelector('.user_form_block').style.display = 'none';
        document.querySelector('.main_screen').style.display = 'block';
        addUser.style.display = 'block';
        showUsers()
    }
}

function clearInputs() {
    document.forms.userForm.f_name.value = '';
    document.forms.userForm.l_name.value = '';
    document.forms.userForm.age.value = '';
    document.forms.userForm.email.value = '';
    document.forms.userForm.phone.value = '';
    document.forms.userForm.bank_card.value = '';
}


