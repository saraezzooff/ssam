const items = document.querySelectorAll('.item-wrapper');


items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.childNodes[1].classList.add('img-darken');
    })
})


items.forEach(item => {
    item.addEventListener('mouseout', () => {
        item.childNodes[1].classList.remove('img-darken');
    })
})