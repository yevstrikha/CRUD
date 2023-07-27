document.querySelector('.user_form_block').style.display = 'none'
const userList = document.querySelector('.user_list');
let userInfoPopUp = document.querySelector('.user_info_pop-up');
const formSave = document.querySelector('#form_save');
const formCancel = document.querySelector('#form_cancel');
const addUser = document.querySelector('#addNewUser')
const main = document.querySelector('.main_screen');

let userArr =  JSON.parse(localStorage.getItem('users'))
if (userArr === null) {
    localStorage.setItem('users', JSON.stringify(User_data))
}


function showUsers() {
    userList.innerHTML = ''
    for (let i = 0; i < userArr.length; i++) {
        let listItem = createElement('li', {className: i}, userArr[i].name, null, userList);
        addSpan(listItem, i);
    }
}
showUsers()


function viewFunc(event) {
    main.classList.add('blur');
    addUser.style.display = 'none'
    document.querySelector('.user_info_pop-up').classList.toggle('hidden')
    const userId = event.target.parentElement.id
    userInfoPopUp.innerHTML = ''
    userInfoPopUp.innerHTML = `
     name :${userArr[userId].name}</br>
     Last name: ${userArr[userId].lastName} </br>
     age: ${userArr[userId].age}</br>
     email: ${userArr[userId].email}</br>
     phone: ${userArr[userId].phone}</br>
     Card: ${userArr[userId].bankCard}
    `
    createElement('button', {type: 'button'}, 'OK', {click: closePopUp}, userInfoPopUp);
}
addUser.addEventListener('click', addUserFunc)

function addUserFunc() {
    clearInputs()
    document.querySelector('.user_form_block').style.display = 'block'
    document.querySelector('.main_screen').style.display = 'none';
    addUser.style.display = 'none';
}

function editFunc(event) {
    main.style.display = 'none'
    main.classList.add('blur');
    document.querySelector('#addNewUser').style.display = 'none'
    document.querySelector('.user_form_block').style.display = 'block';
    const userId = event.target.parentElement.id;
    document.forms.userForm.f_name.value = userArr[userId].name
    document.forms.userForm.l_name.value = userArr[userId].lastName
    document.forms.userForm.age.value = userArr[userId].age
    document.forms.userForm.email.value = userArr[userId].email;
    document.forms.userForm.phone.value = userArr[userId].phone
    document.forms.userForm.bank_card.value = userArr[userId].bankCard


    userArr.splice(userId, 1);
}

formCancel.addEventListener('click', function editCancel(event) {
    main.style.display = 'block'
    main.classList.remove('blur');

    userArr = JSON.parse(localStorage.getItem('users'));
    document.querySelector('.user_form_block').style.display = 'none';
    document.querySelector('.main_screen').style.display = 'block';
    addUser.style.display = 'block';

})
function removeFunc(event) {
    main.classList.add('blur');
    document.querySelector('#addNewUser').style.display = 'none'
    document.querySelector('.user_info_pop-up').classList.toggle('hidden')
    const userId = event.target.parentElement.id;
    const userName = userArr[userId].name
    userInfoPopUp.innerHTML = `
    <h2>Are you sure want to remove ${userName} ?</h2> `
    createElement('button', {type: 'button'}, 'YES', {click: removeConfirm}, userInfoPopUp);
    createElement('button', {type: 'button'}, 'NO', {click: removeCancel}, userInfoPopUp)

    function removeCancel() {
        document.querySelector('.user_info_pop-up').classList.toggle('hidden');
        document.querySelector('#addNewUser').style.display = 'block'
        main.classList.remove('blur');

    }

    function removeConfirm() {
        main.classList.remove('blur');
        userArr.splice(userId, 1);
        localStorage.setItem('users', JSON.stringify(userArr));
        document.querySelector('.user_info_pop-up').classList.toggle('hidden');
        document.querySelector('#addNewUser').style.display = 'block'

        showUsers()
    }

}


formSave.addEventListener('click', saveFormFunc)

