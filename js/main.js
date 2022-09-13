var app = new Vue({
    el: '#app',
    data: {
      cedula: "",
      empleado:"",
      horasTrab:"",
      cargos: [
        {cargo: "Gerente", valorHora: 25000},
        {cargo: "Ingeniero", valorHora: 20000},
        {cargo: "Secretaria", valorHora: 10000}
    ],
      totalPagar: 0,
      empleados:[]
    },
    methods: {
        agregarInf(index, event) {
            // event.preventDefault()
            this.validaciones();
            this.empleados.push({
                cedulaEmp: this.cedula,
                nombreEmp: this.empleado,
                horasTrabEmp: this.horasTrab,
                cargoEmp: this.cargo,
                totalPagar: this.cargo * this.valorHora
            })
            console.log(this.empleados)
        },
        obtenerIndex(event){
            event.preventDefault()
            this.index = event.target.selectedIndex;
            console.log(this.index)
        },
        EliminarInf(){
            this.empleados.splice(this.index, 1)
        },
        validaciones() {
            if((this.cedula === "" || this.cedula === " ") && (this.nombre === "" || this.nombre === " ") && (this.horasTrab === ""  || this.horasTrab === " ") && (this.cargo === "" || this.cargo === " ")) {
                alert("Ingrese todos los campos nuevamente")
            }else if(this.cedula === 0 && this.nombre === 0 && this.horasTrab === 0  && this.cargo === 0) {
                alert("Ingrese campos validos por favor")
            }
        }
    }})