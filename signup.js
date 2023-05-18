// document.addEventListener('DOMContentLoaded', ()=> {
// const selectFlag = document.querySelector("#countrys");


// fetch('https://restcountries.com/v3.1/all').then(res => {
//     return res.json();
// }).then(data => {


//     let output = "";
    
//     data.forEach((country) => {
//        output += `
//        <option></option> `
//     })

    
//     selectFlag.innerHTML =  output;
// }).catch(err => {
//     console.log(err);
// })



// });



// let input = document.querySelector("#phone");
// window.intlTelInput(input, {
//   separateDialCode: true
// });



const last = document.getElementById('last');
const firstName = document.getElementById('first');
const hello = document.getElementById('form');
const password = document.getElementById('password')

const formInput = document.getElementById('forminput')

hello.addEventListener('submit', (e)=>{

    let messages = []
    if (last.vaule === '' || last.vaule == null) {
messages.push('Name is required')
    }

    if(password.vaule.length <= 6){
        messages.push('password must be longer than 6 charaters')
    }
    if (messages.length > 0){
        e.preventDefault()
        formInput.innerText = messages.join(', ')
    }

   

})