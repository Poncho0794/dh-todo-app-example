// Requerir Modulo
const tareas = require('./tareas')
// Cargar tareas en memoria
const listado = tareas.leer()

let accion = process.argv[2];
console.log(action[0])
switch(accion) {
  case 'listar':
    for(let i = 0; i < listado.length; i++) {
      console.log(`titulo: ${listado[i].titulo} status: ${listado[i].status}`)
    }
    break;
  case 'agregar':
    //TODO: Crear funcionalidad para agregar una tarea al listado
    break;
  default:
    console.log('Accion no soportada')
}


