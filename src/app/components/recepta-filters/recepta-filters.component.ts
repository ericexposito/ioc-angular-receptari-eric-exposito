import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CATEGORIES_RECEPTA, CategoriaRecepta } from '../../models/recepta.model';
import { FiltresRecepta } from '../../models/filtres-recepta.model';

@Component({
  selector: 'app-recepta-filters',
  imports: [FormsModule],
  templateUrl: './recepta-filters.component.html',
  styleUrl: './recepta-filters.component.scss'
})
export class ReceptaFiltersComponent {
  categories = CATEGORIES_RECEPTA;
  text = '';
  categoria: CategoriaRecepta | '' = '';

  @Output() filtresAplicats = new EventEmitter<FiltresRecepta>();

  aplicar(): void {
    this.filtresAplicats.emit({ text: this.text.trim(), categoria: this.categoria });
  }
}