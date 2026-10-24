import { Recepta } from './recepta.model';

export const RECEPTES: Recepta[] = [
  {
    id: 1,
    titol: 'Pa amb tomàquet',
    descripcio: 'Entrant clàssic de la cuina catalana amb pa torrat, tomàquet i oli.',
    categoria: 'Entrants',
    dataCreacio: '2026-09-01',
    tempsPreparacio: 10,
    destacada: true,
    ingredients: ['Pa de pagès', 'Tomàquet de penjar', 'Oli d\'oliva', 'Sal']
  },
  {
    id: 2,
    titol: 'Escalivada',
    descripcio: 'Verdures rostides al forn amb oli d\'oliva i sal.',
    categoria: 'Entrants',
    dataCreacio: '2026-09-03',
    tempsPreparacio: 60,
    ingredients: ['Albergínia', 'Pebrot vermell', 'Ceba', 'Oli d\'oliva', 'Sal']
  },
  {
    id: 3,
    titol: 'Amanida de cigrons',
    descripcio: 'Amanida fresca amb cigrons, tomàquet i ceba tendra.',
    categoria: 'Entrants',
    dataCreacio: '2026-09-07',
    tempsPreparacio: 15,
    ingredients: ['Cigrons cuits', 'Tomàquet', 'Ceba tendra', 'Julivert', 'Vinagre', 'Oli d\'oliva']
  },
  {
    id: 4,
    titol: 'Escudella',
    descripcio: 'Sopa contundent d\'hivern amb carn, verdures i pasta.',
    categoria: 'Primers',
    dataCreacio: '2026-09-10',
    tempsPreparacio: 150,
    destacada: true,
    ingredients: ['Galets', 'Pastanaga', 'Api', 'Patata', 'Os de pernil', 'Botifarra']
  },
  {
    id: 5,
    titol: 'Canelons de carn',
    descripcio: 'Canelons farcits de carn rostida i gratinats amb beixamel.',
    categoria: 'Primers',
    dataCreacio: '2026-09-12',
    tempsPreparacio: 120,
    destacada: true,
    ingredients: ['Plaques de canelons', 'Carn picada', 'Beixamel', 'Formatge ratllat', 'Ceba']
  },
  {
    id: 6,
    titol: 'Fideuà',
    descripcio: 'Plat de fideus fins cuits amb brou de peix i marisc.',
    categoria: 'Primers',
    dataCreacio: '2026-09-15',
    tempsPreparacio: 45,
    ingredients: ['Fideus', 'Brou de peix', 'Gambes', 'Sípia', 'Allioli']
  },
  {
    id: 7,
    titol: 'Mongetes amb botifarra',
    descripcio: 'Mongetes del ganxet saltades amb botifarra a la planxa.',
    categoria: 'Segons',
    dataCreacio: '2026-09-18',
    tempsPreparacio: 30,
    ingredients: ['Mongetes del ganxet', 'Botifarra', 'All', 'Oli d\'oliva']
  },
  {
    id: 8,
    titol: 'Suquet de peix',
    descripcio: 'Guisat de peix i patates típic de la Costa Brava.',
    categoria: 'Segons',
    dataCreacio: '2026-09-20',
    tempsPreparacio: 50,
    destacada: true,
    ingredients: ['Rap', 'Patates', 'Sofregit', 'Picada d\'ametlles', 'Safrà']
  },
  {
    id: 9,
    titol: 'Pollastre amb samfaina',
    descripcio: 'Pollastre rostit acompanyat d\'una samfaina de verdures.',
    categoria: 'Segons',
    dataCreacio: '2026-09-22',
    tempsPreparacio: 75,
    ingredients: ['Pollastre', 'Albergínia', 'Carbassó', 'Pebrot', 'Tomàquet']
  },
  {
    id: 10,
    titol: 'Crema catalana',
    descripcio: 'Postres de crema d\'ou amb sucre cremat per sobre.',
    categoria: 'Postres',
    dataCreacio: '2026-09-25',
    tempsPreparacio: 40,
    destacada: true,
    ingredients: ['Llet', 'Rovells d\'ou', 'Sucre', 'Maizena', 'Canyella', 'Pell de llimona']
  },
  {
    id: 11,
    titol: 'Mel i mató',
    descripcio: 'Postres senzill de mató fresc amb mel i nous.',
    categoria: 'Postres',
    dataCreacio: '2026-09-28',
    tempsPreparacio: 5,
    ingredients: ['Mató', 'Mel', 'Nous']
  },
  {
    id: 12,
    titol: 'Coca de Sant Joan',
    descripcio: 'Coca dolça amb fruita confitada i pinyons.',
    categoria: 'Postres',
    dataCreacio: '2026-10-01',
    tempsPreparacio: 90,
    ingredients: ['Farina', 'Llet', 'Ous', 'Sucre', 'Fruita confitada', 'Pinyons']
  }
];