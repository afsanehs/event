// 1 - Lorsque l'utilisateur va cliquer sur le <footer>, le mot "clique" vas s'afficher en console.  
// 1Bis - lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

const footer = document.querySelector('footer');

let clic_count = 1;

footer.addEventListener('click', event => {
    console.log(`clique ${clic_count}`);
    clic_count = clic_count + 1;
});



// 2 - !!! - Clique sur le bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. 
// si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

let navToggler = document.querySelector("button.navbar-toggler");

let navHeader = document.querySelector("#navbarHeader");


navToggler.addEventListener("click", function(){
    navHeader.classList.toggle("collapse")
});


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
    if (s_card.style.color == "green") {
        s_card.style.color = "black"
    } else {
        s_card.style.color = "green"
    }
});

// 5 - !!! - si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN

let styles = document.styleSheets;

let nav_bar = document.querySelector(".navbar")

nav_bar.addEventListener('dblclick', function(){
    if (styles[0].disabled){
        styles[0].disabled = false;
    } else {
        styles[0].disabled = true;
    }
});

