var state = false;
function toggle(x){
    if(state){
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye");
        
        state=false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye");

        state=true;
    }
}