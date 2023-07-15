document.querySelector('.user_form_block').style.display = 'none'
let userList = document.querySelector('.user_list');
let userInfoPopUp = document.querySelector('.user_info_pop-up');
let userArr;
userArr = JSON.parse(localStorage.getItem('users'))
if (userArr === null) {
    localStorage.setItem('users', JSON.stringify(User_data))
}
const addUser = document.querySelector('#addNewUser')


function showUsers() {
    userList.innerHTML = ''
    for (let i = 0; i < userArr.length; i++) {
        let listItem = createElement('li', {className: i}, userArr[i].name, null, userList);
        addSpan(listItem, i);

    }
}

showUsers()


function viewFunc(event) {
   let infoForm=  document.querySelector('.user_info_pop-up').classList.toggle('hidden')
    const userId = event.target.parentElement.id
    console.log(userArr[userId].name)
    userInfoPopUp.innerHTML = `
     name :${userArr[userId].name}</br>
     Last name: ${userArr[userId].lastName} </br>
     age: ${userArr[userId].age}</br>
     email: ${userArr[userId].email}</br>
     phone: ${userArr[userId].phone}</br>
     Card: ${userArr[userId].bankCard}
    `
    createElement('button',{type:'button'},'OK',{click : closePopUp},userInfoPopUp)
}


addUser.addEventListener('click', addUserFunc)

function addUserFunc() {
    document.querySelector('.user_form_block').style.display = 'block'
    document.querySelector('.main_screen').style.display = 'none';
    addUser.style.display = 'none';
}

const formSave = document.querySelector('#form_save');

formSave.addEventListener('click', () => {
    const uName = document.forms.userForm.f_name.value;
    const lName = document.forms.userForm.l_name.value;
    const uAge = document.forms.userForm.age.value;
    const uEmail = document.forms.userForm.email.value;
    const uPhone = document.forms.userForm.phone.value;
    const uCard = document.forms.userForm.phone.value;
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
    console.log(userArr)
})


function removeFunc(event) {
    console.log(userArr)

    const userId = event.target.parentElement.id;
    userArr.splice(userId,1);
    localStorage.setItem('users',JSON.stringify(userArr));
    showUsers()
    console.log(userArr)
}