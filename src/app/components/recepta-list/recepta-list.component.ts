import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recepta } from '../../models/recepta.model';
import { ReceptaCardComponent } from '../recepta-card/recepta-card.component';

@Component({
  selector: 'app-recepta-list',
  imports: [ReceptaCardComponent],
  templateUrl: './recepta-list.component.html',
  styleUrl: './recepta-list.component.scss'
})
export class ReceptaListComponent {
  @Input({ required: true }) receptes!: Recepta[];
  @Input() idSeleccionada: number | null = null;
  @Output() receptaSeleccionada = new EventEmitter<Recepta>();

  onSeleccionar(recepta: Recepta): void {
    this.receptaSeleccionada.emit(recepta);
  }
}