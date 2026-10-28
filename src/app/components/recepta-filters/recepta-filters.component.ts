import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  aplicar(formulari: NgForm): void {
    if (formulari.invalid) {
      return;
    }
    this.filtresAplicats.emit({ text: this.text.trim(), categoria: this.categoria });
  }

  restablir(formulari: NgForm): void {
    formulari.resetForm({ text: '', categoria: '' });
    this.text = '';
    this.categoria = '';
    this.filtresAplicats.emit({ text: '', categoria: '' });
  }
}