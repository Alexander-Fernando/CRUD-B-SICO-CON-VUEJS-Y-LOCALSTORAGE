const app =  new Vue({
    el: "#app",
    data: {
        titulo: "GYM ALEXANDER",
        tareas: [],
        nuevaTarea: '',

    },
    methods: {
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea, 
                estado: false
            })
            localStorage.setItem('tareasLS', JSON.stringify(this.tareas))
            this.nuevaTarea=''
        },

        cambiarEstado(index){
            this.tareas[index].estado = true
            localStorage.setItem('tareasLS', JSON.stringify(this.tareas))
        },

        eliminarTarea(index){
            this.tareas.splice(index, 1)
            localStorage.setItem('tareasLS', JSON.stringify(this.tareas))
        }
    },

    created(){
        let datosLS = JSON.parse(localStorage.getItem('tareasLS'))
        if(datosLS === null){
            this.tareas = [];
        }else{
            this.tareas = datosLS
        }
    }
})