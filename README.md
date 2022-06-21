# Employees project

Réalisé avec : 
- VueJS 3
- Element plus (librairie de composants)
- Icônes Material
- Tailwind

## Fonctionnel JS

J'ai utilisé le store en combinaison avec axios pour récupérer les résultats de l'API. On aurait pu imaginer découper le store un peu plus finement, avec un module pour gérer toute la recherche et les paramètres liés à la recherche, et un autre module pour gérer les employés.

## Stylisation CSS

L'écriture du CSS suit deux approches : 
- BEM (block element modifier) pour l'écriture de style dans un composant (ou tout style réutilisable)
- Utility first (classes utilitaires) avec l'utilisation de Tailwind, pour l'écriture de style non réutilisable, principalement tout ce qui est layout.

Pour une flexibilité dans le futur, les composants d'UI ajoutés ont un style générique (`style/components`) qui ont une thématisation prévue par défaut, de part l'utilisation de custom properties. On pourrait imaginer décliner toutes ces variables en plusieurs thèmes (dark mode par exemple), dans le même fichier afin d'aider à la lisibilité.

Le dossier (`style/global/`) de style contient toutes les variables de style globales, autrement appelés design tokens. On pourrait imaginer les récupérer dynamiquement depuis Figma, avec un outil tel que "Style Dictionary".

Inspiration design : dribble et https://www.figma.com/community/file/1017379818245262817 (design system de webpixels)

## Intégration HTML / Accessibilité

Au niveau de l'accessibilité peu de choses à dire, car l'application est trop petite pour avoir des besoins importants. Je n'ai pas eu l'utilité d'utiliser des balises `aria` ici, et les composants utilisés (card, badge), n'ont pas vraiment besoin d'apporter d'informations supplémentaires. (et sont assez pauvre en contenu également)

J'aurais pu ajouter un "skip to content" mais vu qu'il n'y a que du contenu dans cette page, je ne voyais pas le besoin non plus.

Je me suis quand même sourcée ici pour l'accessibilité des cards : https://inclusive-components.design/cards/

## Améliorations qui auraient pu être faites

- Dommage d'utiliser `vue-class-component` mais pas `vue-property-decorator`, je n'ai pas réussi à trouver rapidement comment l'ajouter (problème de build), donc je n'ai pas passé trop de temps dessus.
- Le fait d'avoir `vue-property-decorator` m'aurais permis de plus profiter du typage typescript également.
- Utiliser de vraies palettes de couleur avec des custom properties, et pas juste des couleurs en dur
- Utiliser des design tokens pour tous les espacements (padding, gap,...). J'ai quand même suivi la règle des multiple de 8 pour les espacements !
