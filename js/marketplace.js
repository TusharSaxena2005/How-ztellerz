let addItemBtn = document.getElementById('inner-main-page1-ele6')
let addItemForm = document.getElementById('add-item-box')
let addItemFormClose = document.getElementById('add-item-box-close')

function openAddItemForm() {
    addItemForm.style.display = 'flex'
}

function closeAddItemForm() {
    addItemForm.style.display = 'none'
}

addItemBtn.addEventListener('click', openAddItemForm)

addItemFormClose.addEventListener('click', closeAddItemForm)


let filterBox = document.getElementById('filter-box')
let filterBtnOpen = document.getElementById('filter-btn')
let filterBtnClose = document.getElementById('filter-box-close')

filterBtnOpen.addEventListener('click', function () {
    filterBox.style.display = 'flex'
})

filterBtnClose.addEventListener('click', function () {
    filterBox.style.display = 'none'
})




let detailsBtn = document.querySelectorAll('.details-btn');
detailsBtn.forEach(button => {
    button.addEventListener('click', function (e) {
        const product = e.target.closest('.outer-cars');
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        const floor = product.getAttribute('data-floor');
        const room = product.getAttribute('data-room');
        const hostel = product.getAttribute('data-hostel');
        const category = product.getAttribute('data-category');
        const sellerName = product.getAttribute('data-seller');
        const contactNum = product.getAttribute('data-contact');



        const detailBox = document.getElementById('details-box');
        detailBox.style.display = 'flex';
        const detailBoxClose = document.getElementById('detail-box-close');
        detailBoxClose.addEventListener('click', function () {
            detailBox.style.display = 'none';
        })

        document.getElementById('productName').innerText = name
        document.getElementById('productPrice').innerText = price
        document.getElementById('SellerName').innerText = sellerName
        document.getElementById('SellerContact').innerText = contactNum
        document.getElementById('hostelName').innerText = hostel
        document.getElementById('floorNum').innerText = floor
        document.getElementById('roomNum').innerText = room
    })
})


let addItemFormBtn = document.getElementById('add-item-form-btn')

addItemFormBtn.addEventListener('click', function () {
    let productName = document.getElementById('product-name')
    let productPrice = document.getElementById('product-price')
    let productCategory = document.getElementById('product-category')
    let productImg = document.getElementById('product-img')
})