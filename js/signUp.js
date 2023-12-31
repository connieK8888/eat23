// signUp start
const signUpPassword = document.querySelector('#signUpPassword')
const signUpName = document.querySelector('#signUpName')
const signUpEmail = document.querySelector('#signUpEmail')
const signUpBtn = document.querySelector('#signUpBtn')

let signUpData = {}
signUpBtn.addEventListener('click',function(e){
    e.preventDefault()
    signUpData = {
        "email": signUpEmail.value,
        "password": signUpPassword.value,
        "nikename": signUpName.value
    }
    signUp(signUpData)
})
function signUp(signUpData){
    axios.post('https://json-server-vercel-one-kappa.vercel.app/users',signUpData)
    .then(res =>{
        console.log(res.data)
        alert('註冊成功')
        location.href = 'logIn.html'
    })
    .catch(err =>{
        console.log(err)
    })
}
// signUp end