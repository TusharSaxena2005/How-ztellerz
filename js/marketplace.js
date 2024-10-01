let detailsBtn = document.querySelectorAll('.details-btn');
detailsBtn.forEach(button => {
    button.addEventListener('click', function (e) {
        const product = e.target.closest('.outer-cars');
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        console.log(`${name} and ${price}`)
    })
})
