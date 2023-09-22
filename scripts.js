let firstClick = true;

function openClose(){
    let menuVisibility = document.getElementById('menu').style.visibility;
    if(firstClick || menuVisibility == 'hidden'){
        document.getElementById('menu').style.visibility  = 'visible';
    }else{
        document.getElementById('menu').style.visibility  = 'hidden';
    }
    firstClick = false;
}