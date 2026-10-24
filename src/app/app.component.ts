import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FiltresRecepta } from './models/filtres-recepta.model';
import { Recepta } from './models/recepta.model';
import { RECEPTES } from './models/receptes.mock';
import { ReceptaFiltersComponent } from './components/recepta-filters/recepta-filters.component';
import { ReceptaListComponent } from './components/recepta-list/recepta-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReceptaFiltersComponent, ReceptaListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  public nomApp = 'Receptari';

  receptes: Recepta[] = RECEPTES;
  receptesFiltrades: Recepta[] = RECEPTES;
  receptaActual: Recepta | null = null;

  onFiltresAplicats(filtres: FiltresRecepta): void {
    const text = filtres.text.toLowerCase();

    this.receptesFiltrades = this.receptes.filter((recepta) => {
      const coincideixText =
        !text ||
        recepta.titol.toLowerCase().includes(text) ||
        recepta.descripcio.toLowerCase().includes(text);
      const coincideixCategoria = !filtres.categoria || recepta.categoria === filtres.categoria;
      return coincideixText && coincideixCategoria;
    });
  }

  onReceptaSeleccionada(recepta: Recepta): void {
    this.receptaActual = recepta;
  }
}