import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recepta } from '../../models/recepta.model';
import { CategoriaBadgeComponent } from '../categoria-badge/categoria-badge.component';

@Component({
  selector: 'app-recepta-card',
  imports: [CategoriaBadgeComponent],
  templateUrl: './recepta-card.component.html',
  styleUrl: './recepta-card.component.scss'
})
export class ReceptaCardComponent {
  @Input({ required: true }) recepta!: Recepta;
  @Input() seleccionada = false;
  @Output() seleccionar = new EventEmitter<Recepta>();

  onSeleccionar(): void {
    this.seleccionar.emit(this.recepta);
  }
}