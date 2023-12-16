'use strict'

const face = document.querySelector('.js_face');
const head = document.querySelector('.js_head');

head.addEventListener('click', handleClickHead );

function handleClickHead (event) {
    face.innerHTML = ';)'
};

head.addEventListener( 'mouseout', handleMouseoutHead );

function handleMouseoutHead (event) {
    face.innerHTML = ':)'
};


