import { CategoriaRecepta } from './recepta.model';

export interface FiltresRecepta {
  text: string;
  categoria: CategoriaRecepta | '';
}