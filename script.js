// 1 - Lorsque l'utilisateur va cliquer sur le <footer>, le mot "clique" vas s'afficher en console.  
// 1Bis - lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

const footer = document.querySelector('footer');

footer.addEventListener('click', event => {
    console.log(`clique ${event.detail}`);
});


// 2 - clique sur le bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. 
// si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader


// function hamburger() {
//     var element = document.getElementById("myDIV");
//     element.classList.toggle("mystyle");
// };


// 3 - si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible 

const b_edit = document.getElementById('b_edit');

f_card = document.getElementById('f_card');

b_edit.addEventListener('click', event => {
    f_card.style.color = "red";
});


// 4 - si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant 

const c_edit = document.getElementById('c_edit');

s_card = document.getElementById('s_card');

c_edit.addEventListener('click', event => {
    s_card.style.color = "green";
});
