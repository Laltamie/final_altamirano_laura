function capturarDatosSesion(){
    
    let emailSesion = document.getElementById("email_sesion").value;
    let pass_Sesion = document.getElementById("pass_sesion").value;
    
    emailSesion = document.getElementById("email_sesion").value;
    pass_Sesion = document.getElementById("pass_sesion").value;
    
    localStorage.setItem("email_sesion", emailSesion);
    localStorage.setItem("pass_sesion", pass_Sesion);
}

function capturarDatosRegistro(){

    let nombreRegistro = document.getElementById("nombre_registro").value;
    let emailRegistro = document.getElementById("email_registro").value;
    let passRegistro = document.getElementById("pass_registro").value;

    nombreRegistro = document.getElementById("nombre_registro").value;
    emailRegistro = document.getElementById("email_registro").value;
    passRegistro = document.getElementById("pass_registro").value;
    
    localStorage.setItem("nombre_registro", nombreRegistro);
    localStorage.setItem("email_registro", emailRegistro);
    localStorage.setItem("pass_registro", passRegistro);
}







