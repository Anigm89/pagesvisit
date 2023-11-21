let contadorVisitas = document.getElementById('contadorVisitas');

let visitas = localStorage.getItem('contador');
  //  console.log(visitas)

if(!visitas){
    localStorage.setItem('contador', 0);
} 
else{
    visitas++;      
    localStorage.setItem('contador',visitas);
       //  console.log('v', visitas)

    contadorVisitas.innerHTML = `${visitas}`
}
  

//restablecer 
const boton = document.getElementById('btnReestablecer');

boton.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})