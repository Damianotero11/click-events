(() =>{
    let btnCambiarColorFondo = document.getElementById("btnCambiarColorFondo");

    btnCambiarColorFondo.addEventListener('click', ()=>{
        document.body.style.backgroundColor = 'blue';
    }, false);
})();