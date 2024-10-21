const input = document.querySelector('#texto')
const total = document.querySelector('.total')
const realizadas = document.querySelector('.realizadas')
const lista = document.querySelector('.lista')
const tareas = []
let contador = 1
const agregar = document.querySelector('#agregar')
const eliminar = document.querySelector('.eliminar')
// const realizado = checked

agregar.addEventListener('click', () => {  
    const tarea = input.value 
    tareas.push({id: contador, Tarea: tarea})
    contador++
    input.value = ''
    renderListado(tareas) 
})



function renderListado(arr) {
    let html = ''
    for(let tarea of arr){
         html += `<li>
         <span class="id">${tarea.id}</span>
         <span class="listaTarea">${tarea.Tarea}</span>
         <span class="check"><input type="checkbox" ${tarea.check ? checked : ''}></span>
         <span class="btn"><button class="eliminar" onclick="borrarElemento(${tarea.id})">X</button></span>
         </li>`
    }
    lista.innerHTML = html
    total.innerHTML = `Total: ${arr.length}`
    
}
function borrarElemento(id){
    const posicion = tareas.findIndex((elem)=> elem.id === id)
    tareas.splice(posicion, 1)
    renderListado(tareas)
}
