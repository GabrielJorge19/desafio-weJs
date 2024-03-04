{   //  MENU
    let el = document.getElementsByClassName('btn-group-vertical')[0];
    el.classList.remove("btn-group-vertical");
    el.classList.add("btn-group-horizontal");
}

{   // HEADER
    let el = document.getElementsByClassName('jumbotron')[0];

    el.style.backgroundColor = "var(--secondary)";
    el.style.color = "white";
    el.style.textAlign = "right";

    let el2 = document.getElementsByClassName('btn-lg')[0];
    el2.style.backgroundColor = "var(--green)";

}

{   // CARDS

    let els = [...document.getElementsByClassName('col-lg-3')];

    els[0].style.order = 2;
    els[2].style.order = 3;
    els[1].style.order = 4;

    $(els[0]).find('a')[0].style.backgroundColor = 'var(--green)';
}

{   // LISTA
    document.getElementsByClassName('active')[0].classList.remove("active");

    const li4 = document.createElement('li');
    li4.className = 'list-group-item active';
    li4.innerHTML = 'Quarto item';

    const li5 = document.createElement('li');
    li5.className = 'list-group-item';
    li5.innerHTML = 'Quinto item';

    let el = document.getElementsByClassName('list-group')[0]

    el.appendChild(li4);
    el.appendChild(li5);
}