import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {

  // ===================
  // === propiedades ===
  // ===================
  // - las propiedades de la clase
  // - son las que vamos a usar
  // - para visualizarlas dentro del HTML
  // - que esté asociado a esta clase

  // ===================
  // === decoradores ===
  // ===================
  // - enviar del padre al hijo
  @Input() listadoCitas: any;

  // - enviar del hijo al padre
  @Output() deleteCita = new EventEmitter<number>();

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

  eliminarCita(index: number) {
    this.deleteCita.emit(index);
  }

}
