export type CategoriaRecepta = 'Entrants' | 'Primers' | 'Segons' | 'Postres';

export const CATEGORIES_RECEPTA: CategoriaRecepta[] = [
  'Entrants',
  'Primers',
  'Segons',
  'Postres'
];

export interface Recepta {
  id: number;
  titol: string;
  descripcio: string;
  categoria: CategoriaRecepta;
  dataCreacio: string;
  tempsPreparacio: number;
  destacada?: boolean;
  ingredients: string[];
}