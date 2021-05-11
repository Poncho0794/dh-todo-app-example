const fs = require('fs')

const tareas = {
  path: 'tareas.json',
  leer: function() {
    const listado = fs.readFileSync(this.path, 'utf-8')
    return JSON.parse(listado)
  },
  agregar: function() {
    
  }
}

module.exports = tareas