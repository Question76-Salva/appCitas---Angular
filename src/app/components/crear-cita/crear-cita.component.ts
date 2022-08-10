import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  // ===================
  // === propiedades ===
  // ===================
  // - las propiedades de la clase
  // - son las que vamos a usar
  // - para visualizarlas dentro del HTML
  // - que esté asociado a esta clase
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';

  formularioIncorrecto = false;

  // ===================
  // === decoradores ===
  // ===================
  // - enviar del hijo al padre
  @Output() nuevaCita = new EventEmitter<any>();

  // ===================
  // === constructor ===
  // ===================
  // - sólo para inicializar variables/propiedades de la clase
  // - pasar parámetros
  constructor() { }

  // ===============
  // === métodos ===
  // ===============
  ngOnInit(): void {
  }

  agregarCita() {
    // - validación | campos vacios
    if(this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

    // - crear objeto
    // - para enviarselo al padre | app.component
    const cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    // - comprobar | si guarda el objeto
    console.log(cita);

    // - enviar la cita
    // - al componente padre | app.component
    this.nuevaCita.emit(cita);

    // - resetear campos formulario
    this.resetCampos();
  }

  resetCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }

}
