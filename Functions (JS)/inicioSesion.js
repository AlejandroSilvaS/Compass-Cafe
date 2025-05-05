const formulario = document.getElementById('formulario');
const inputs= document.querySelectorAll('#formulario input');

/*Expresiones Regulares*/
const expresiones={
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
} 

const campos={
    correo: false,
    password:false
}

const validarFormulario = (e) => {
    console.log("adentros");
    switch(e.target.name){
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
        break;
    }
}

const validarCampo = (expresion,input,campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} .mensaje-error`).classList.remove('mensaje-error-activo');
        campos[campo]=true;
    }
    else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .mensaje-error`).classList.add('mensaje-error-activo');
        campos[campo]=false;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

formulario.addEventListener('submit',(e)=>{
    e.preventDefault(); //No se envían los datos a ningún lado

    if(campos.correo && campos.password)
    {
        formulario.reset();

        document.querySelectorAll('.formulario__grupo-correcto').forEach((input)=>{
            input.classList.remove('formulario__grupo-correcto');
        });

        document.getElementById('grupo__mensaje').classList.remove('grupo__mensaje-activo');
        window.location.href='../index.html'; 
    } 
    else {
        document.getElementById('grupo__mensaje').classList.add('grupo__mensaje-activo');
    }
});