# QUESTIONS

## Définissez ce qu'est une variable

Il s'agit d'emplacement mémoire ou les données sont stockées. Elles sont stockées dans la mémoire physique de l'ordinateur.
Elles permettent d'être réutilisées selon notre besoin dans le code.
On ne met pas d'espace entre les mots si ils sont plusieurs à la dénominer mais on utilise des majuscules pour les séparer. 

## Quels sont les trois types principaux de variables
 il y a les chaines de caractère, les lettres sont  déclarées entre des délimiteurs.
 Il y a les nombres qui ne sont pas délimités par des délimiteurs, si ils le sont, ils seront alors considérés comme des chaines de caractères.
 Il y a les booléens qui ne sont pas déclarés entre délimiteurs. 

## Combien de valeurs différentes peut prendre une variable de type booléen ?

il y a deux valeurs différentes, soit le vrai, soit le faux.

## Que se passe-t-il si l'on execute le code suivant ? Comment cela s'appelle-t-il ?

```
let debut = 0;

while (debut > 0) {
    console.log("Je continue");
    debut += 1;
}

console.log("J'arrête");
```

En executant le code, la console affichera j'arrête. Il s'agit d'une boucle qui n'est pas infini puisqu'à la fin de l'exécution, la variable s'incrémente de +1 donc la condition s'arrète.

## Si je veux stocker une suite d'éléments dans une variable, que dois-je utiliser ?

il faut utiliser un tableau qui sera définit comme suit:
let monTableau =["élément1", "élément2", etc...];

## Qu'est ce que les paramètres d'une fonction ? Qu'est ce que le retour (return) d'une fonction ?
PARAMETRE FONCTION
Ce sont des arguments de la fonction, il peut y en avoir plusieurs mais doivent être séparés par une virgule.
Ils sont facultatifs mais si des paramètres sont déclarés, ils doivent obligatoirement être présents lors de chaque appel de la fonction.

RETOUR D UNE FONCTION:

Il s'agit d'une instruction qui arrête la fonction et retourne une valeur à cette même fonction. 