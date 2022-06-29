window.addEventListener('load',function(){
    let form = document.querySelector('form.loginform')
    let campoEmail = document.getElementById('oldemail')
    let error = document.querySelector('.error-mensagge')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        if(campoEmail.value === "") {
            error.classList.toggle('active')
        }    
    })

})