const btnGirar = document.getElementById('btn-girar');
const imagenMario = document.getElementById('imagen-mario');

btnGirar.addEventListener('click',function(){
    imagenMario.classList.toggle('active');
    if(imagenMario.classList.contains('active')){
        btnGirar.innerHTML = 'Dejar de girar a Mario';
        btnGirar.style.setProperty("background","red");
    }else{
        btnGirar.innerHTML = 'Girar a Mario';
        btnGirar.style.setProperty("background","rgba(26, 26, 197, 0.8)");
    }
});