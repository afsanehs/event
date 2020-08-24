//Lorsque l'utilisateur va cliquer sur le <footer>, le mot "clique" vas s'afficher en console.  


//lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.
//Rien de très compliqué par rapport à la version précédente : déclare une variable qui va servir de compteur et incrémente-la quand l'évènement a lieu !

console.log('hello');

const footer = document.querySelector('footer');

footer.addEventListener('click', event => {
    console.log('clique');
});
