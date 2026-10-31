# Receptari

## Autor/a

Eric Expósito Torres

## Descripció

Aplicació Angular per consultar, filtrar i veure el detall de receptes de cuina. A la branca `ra2-components` (EAC2) s'ha ampliat el projecte base amb components standalone, comunicació amb `@Input` i `@Output`, un formulari de filtres amb validacions, estats d'interfície i una interfície accessible i responsive.

## Versions utilitzades

- Node.js: 24.21.0
- npm: 11.19.0
- Angular CLI: 22.2.1
- Angular: 22.2.1
- TypeScript: 6.0.3
- Git: 2.55.0

## Com instal·lar i executar el projecte

Instal·lar les dependències i executar el projecte en mode desenvolupament:

```
npm install
ng serve
```

L'aplicació queda disponible a http://localhost:4200

Altres comandes:

```
ng test --watch=false
ng build
```

## Branca de treball

`ra2-components` (EAC2). Parteix de l'estat final de `ra1-setup` (EAC1).

## Components creats

- `ReceptaListComponent` (`src/app/components/recepta-list`): mostra el llistat de receptes amb `@for` i `track`.
- `ReceptaCardComponent` (`src/app/components/recepta-card`): targeta amb el resum d'una recepta i botó per seleccionar-la.
- `CategoriaBadgeComponent` (`src/app/components/categoria-badge`): etiqueta amb la categoria de la recepta.
- `ReceptaFiltersComponent` (`src/app/components/recepta-filters`): formulari de filtres per text i categoria, amb validacions i botó de restabliment.

El component arrel `App` (`src/app/app.component.ts`) guarda les dades, aplica els filtres i mostra el comptador, l'estat sense resultats i el panell de detall.

## Model i dades

- `src/app/models/recepta.model.ts`: interfície `Recepta`, tipus `CategoriaRecepta` i llista de categories.
- `src/app/models/filtres-recepta.model.ts`: interfície `FiltresRecepta`.
- `src/app/models/receptes.mock.ts`: 12 receptes de prova.

## Estat de l'EAC2

EAC2 completat a la branca `ra2-components`: model i dades mock, components amb `@Input` i `@Output`, formulari de filtres amb `FormsModule`, control de flux amb `@if`, `@else` i `@for`, pipe de data, accessibilitat (enllaç de salt, focus visible, etiquetes i `aria-live`) i disseny responsive.

## Enllaç del repositori

https://github.com/ericexposito/ioc-angular-receptari-eric-exposito