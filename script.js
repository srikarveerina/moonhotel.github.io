
function show(){
    var text=document.getElementById('demo');
    var displaySetting = text.style.display;
    var butto=document.getElementsByClassName('button');
    if(displaySetting == 'block'){
        text.style.display='none';
    }
    else{
        text.style.display='block';
    }
}