// login start
const logInEmail = document.querySelector('#logInEmail')
const loginPassword = document.querySelector('#loginPassword')
const loginBtn = document.querySelector('#loginBtn')

// console.log(logInEmail,loginPassword,loginBtn);
let loginData = {}
let token = ''
let id = ''
loginBtn.addEventListener('click',function(e){
    e.preventDefault()
    loginData = {
        "email": logInEmail.value,
        "password": loginPassword.value
    }
    login(loginData)
})

function login(loginData){
    axios.post('http://localhost:3000/login',loginData)
    .then(res =>{
        token = res.data.accessToken
        id = res.data.user.id
        console.log(res.data)
        alert('登入成功')
        location.href = 'index.html'
    })
    .catch(err =>{
        console.log(err)
    })
}
// login end