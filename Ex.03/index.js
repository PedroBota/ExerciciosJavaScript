let bod=document.getElementById('bod')
seletor=document.getElementById('seletor')
function pegar (){
    if(seletor.value==0){
        bod.style.backgroundColor=''
    }
    if(seletor.value==1){
        bod.style.backgroundColor='red'
    }
    else if(seletor.value==2){
        bod.style.backgroundColor='yellow'
   }
    else if(seletor.value==3){
        bod.style.backgroundColor='blue'
}
    else if(seletor.value==4){
        bod.style.backgroundColor='green'
}
}