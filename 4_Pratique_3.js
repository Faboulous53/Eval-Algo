"use strict"

// Pratique 3

// Complétez la fonction suivante afin qu'elle affiche un message de la manière suivante

// Titre : [titre]
// Object : [corps]

// Attention, si le [titre] est vide, il prend la valeur par défaut "Message sans titre"
// Si le message est urgent, il doit être présenté de la manière suivante :

// !!! URGENT !!!
// Titre : [titre]
// Object : [corps]

function afficheMessage(estUrgent, titre, corps) {
    if(titre === "" && estUrgent === true){
        console.log("!!!URGENT!!!\n","Message sans titre\n", corps);
    }else if(titre ==="")
    {console.log (estUrgent,"\nMessage sans titre\n",corps);
    }else{console.log (estUrgent +"\n",titre+"\n",corps);}
    }


// NE PAS MODIFIER APRES CETTE LIGNE

afficheMessage(false, "Salut !", "J'espère que tu vas bien.");
afficheMessage(true, "", "N'oublie pas d'acheter du pain !!!");
afficheMessage(false, "", "Ainsi font\nfont\nfont\nles petites marionnettes");



