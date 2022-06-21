# Employees project

Made with VueJS 3, Element plus component library and Material icons.

L'écriture du CSS suit deux approches : 
- BEM (block element modifier) pour l'écriture de style dans un composant (ou tout style réutilisable)
- Utility first (classes utilitaires) avec l'utilisation de Tailwind, pour l'écriture de style non réutilisable, principalement tout ce qui est layout.

Pour une flexibilité dans le futur, les composants d'UI ajoutés ont un style générique `style/components` qui ont une thématisation prévue par défaut, de part l'utilisation de custom properties. On pourrait imaginer décliner toutes ces variables en plusieurs thèmes (dark mode par exemple), dans le même fichier afin d'aider à la lisibilité.

Le dossier `style/global/` de style contient toutes les variables de style globales, autrement appelés design tokens. On pourrait imaginer les récupérer dynamiquement depuis Figma, avec un outil tel que "Style Dictionary".

Inspiration design : dribble et https://www.figma.com/community/file/1017379818245262817 (design system de webpixels)
