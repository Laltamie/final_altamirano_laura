let container_login_registro = document.querySelector(".container_login_registro");
let formulario_login = document.querySelector(".formulario_login");
let formulario_registro = document.querySelector(".formulario_registro");
let caja_login = document.querySelector(".caja_login");
let caja_registro = document.querySelector(".caja_registro");


document.getElementById("btn_iniciar-sesion").addEventListener("click", inisiarSesion);
document.getElementById("btn_registrarse").addEventListener("click", registro);
window.addEventListener("resize", anchoPagina);


function anchoPagina (){
    if(window.innerWidth > 850){
        caja_login.style.display = "block";
        caja_registro.style.display = "block";
    }else{
        caja_registro.style.display = "block";
        caja_registro.style.opacity = "1";
        caja_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registro.style.display = "none";
        container_login_registro.style.left = "0px";
    }
}

anchoPagina();

function inisiarSesion (){
    if(window.innerWidth > 850){
        formulario_registro.style.display = "none";
        container_login_registro.style.left = "10px";
        formulario_login.style.display = "block";
        caja_registro.style.opacity = "1";
        caja_login.style.opacity = "0";
    }else{
        formulario_registro.style.display = "none";
        container_login_registro.style.left = "0px";
        formulario_login.style.display = "block";
        caja_registro.style.display = "block";
        caja_login.style.display = "none";
    }

}

function registro (){
    if(window.innerWidth > 850){
        formulario_registro.style.display = "block";
        container_login_registro.style.left = "410px";
        formulario_login.style.display = "none";
        caja_registro.style.opacity = "0";
        caja_login.style.opacity = "1";
    }else{
        formulario_registro.style.display = "block";
        container_login_registro.style.left = "0px";
        formulario_login.style.display = "none";
        caja_registro.style.display = "none";
        caja_login.style.display = "block";
        container_login_registro.style.opacity = "1";
    }

}


