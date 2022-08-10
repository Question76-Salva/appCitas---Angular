import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // ===================
  // === propiedades ===
  // ===================
  // - las propiedades de la clase
  // - son las que vamos a usar
  // - para visualizarlas dentro del HTML
  // - que esté asociado a esta clase
  listCitas: any[] = [];

  // ===================
  // === constructor ===
  // ===================
  // - sólo para inicializar variables/propiedades de la clase
  // - pasar parámetros

  // ===============
  // === métodos ===
  // ===============
  agregarCita(cita: any) {
    this.listCitas.push(cita);
    console.log(this.listCitas);
  }

  eliminarCitaListado(index: number) {
    this.listCitas.splice(index, 1);
  }
}
