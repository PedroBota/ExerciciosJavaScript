let testo=document.getElementById('testo')
let btn=document.getElementById('btn')

function manipular (){
    
    if (btn.innerHTML=='Ocultar'){
        testo.style.display='none'
        btn.innerHTML='Mostrar'
        console.log(btn.innerText)
    }
    else if(btn.innerHTML=='Mostrar'){
        testo.style.display='block' 
        btn.innerHTML='Ocultar'
        console.log(btn.value)
    }
}