window.addEventListener('load',function(){
    let form = document.querySelector('form.loginform')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        console.log(1)  
            return alert('Por favor, completá todos los campos del formulario') 
  
    })
    

})