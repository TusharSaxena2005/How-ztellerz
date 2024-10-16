let addItemBtn = document.getElementById('inner-main-page1-ele6')
let addItemForm = document.getElementById('add-item-box')
let addItemFormClose = document.getElementById('add-item-box-close')

let homeBtn = document.getElementById('inner-main-page1-ele1')
let chipBtn = document.getElementById('inner-main-page1-ele2')
let drinkBtn = document.getElementById('inner-main-page1-ele3')
let biscuitBtn = document.getElementById('inner-main-page1-ele4')
let otherBtn = document.getElementById('inner-main-page1-ele5')
let profileBtn = document.getElementById('inner-main-page1-ele7')


function openAddItemForm() {
    addItemForm.style.display = 'flex'
}

function closeAddItemForm() {
    addItemForm.style.display = 'none'
}

function openProfilePage() {
    const outerCarsElements = document.querySelectorAll('.outer-cars');
    outerCarsElements.forEach((element) => {
        element.style.display = 'none';
    });
    document.getElementById('profile-sideBar2').style.display = 'flex'
    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        if (dataFetched.logined == 1) {
            document.getElementById('profile-username').innerHTML = dataFetched.username;
            document.getElementById('rollno').innerHTML = dataFetched.rollNum;
            document.getElementById('hostelName').innerHTML = dataFetched.hostelName;
        }
    }
}

function showAllData() {
    document.getElementById('profile-sideBar2').style.display = 'none'
    const outerCarsElements = document.querySelectorAll('.outer-cars');
    outerCarsElements.forEach((element) => {
        element.style.display = 'flex';
    });
}

document.getElementById('logout').addEventListener('click', function () {
    for (let i = 1; i < localStorage.length; i++) {
        let verifyRollNum = JSON.parse(localStorage[i])
        if (verifyRollNum.logined == 1) {
            verifyRollNum.logined = 0;
            localStorage.setItem(i, JSON.stringify(verifyRollNum));
            window.location = "../html/login.html"
        }
    }
})

showAllItem()

homeBtn.addEventListener('click', showAllData)

profileBtn.addEventListener('click', openProfilePage)

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

let detailsBtn = document.querySelectorAll('.details-button');
detailsBtn.forEach(button => {
    button.addEventListener('click', function (e) {
        const product = e.target.closest('.outer-cars');
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        const hostel = product.getAttribute('data-hostel-name');
        const floor = product.getAttribute('data-floor');
        const room = product.getAttribute('data-room');
        const category = product.getAttribute('data-category');
        const sellerName = product.getAttribute('data-seller');
        const contactNum = product.getAttribute('data-contact');
        const imageUrl = product.getAttribute('data-imageURL');

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
        document.getElementById('hostel-Name').innerText = hostel
        document.getElementById('floorNum').innerText = floor
        document.getElementById('roomNum').innerText = room
        document.getElementById('product-Img').src = `../images/${imageUrl}`
    })
})


let addItemFormBtn = document.getElementById('add-item-form-btn')

addItemFormBtn.addEventListener('click', function () {
    let productName = document.getElementById('product-name').value
    let productPrice = document.getElementById('product-price').value
    let productCategory = document.getElementById('product-category').value
    let productImg = document.getElementById('product-img').value
    let Oripath = ''
    let fakeImgPath = ''
    for (let i = 0; i <= productImg.length; i++) {
        if (productImg[i] == '\\' || i == productImg.length) {
            Oripath = fakeImgPath;
            fakeImgPath = ''
        }
        else {
            fakeImgPath += productImg[i];
        }
    }

    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        if (dataFetched.logined == 1) {
            let dataToEnter = {
                'productName': productName,
                'productPrice': productPrice,
                'productCategory': productCategory,
                'productImg': Oripath
            }
            dataFetched.marketPlace.push(dataToEnter)
            localStorage.setItem(i, JSON.stringify(dataFetched))
            break;
        }
    }
    showAllItem()
    closeAddItemForm();
})

function showAllItem() {
    document.getElementById('inner-main2-page2').innerHTML = ''
    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        if (dataFetched.marketPlace.length > 0) {
            for (let j = 0; j < dataFetched.marketPlace.length; j++) {
                let pName = dataFetched.marketPlace[j].productName
                let pPrice = dataFetched.marketPlace[j].productPrice
                let pCategory = dataFetched.marketPlace[j].productCategory
                let pImgURL = dataFetched.marketPlace[j].productImg
                let sName = dataFetched.username
                let sHostelName = dataFetched.hostelName
                let sFloor = dataFetched.floorNum
                let sRoom = dataFetched.roomNum
                let sContact = dataFetched.phoneNum
                document.getElementById('inner-main2-page2').innerHTML += `
                <li id="outer-card1" class="outer-cars" data-name="${pName}" data-price="${pPrice}" data-floor="${sFloor}"
                data-room="${sRoom}" data-hostel-name="${sHostelName}" data-category="${pCategory}" data-seller="${sName}"
                        data-contact="${sContact}" data-imageURL="../images/${pImgURL}">
                        <img src="../images/${pImgURL}" alt="">
                        <p>${pName}</p>
                        <p>${pPrice} Rs.</p>
                        <button class="details-button">Details</button>
                        </li>
                        `
            }
        }
    }
    document.getElementById('inner-main2-page2').innerHTML +=`
    <ul id="profile-sideBar2" class="inner-sideBar2">
                        <ul id="inner-profile-sideBar2-ele1" class="inner-profile-sideBar2-ele">
                            <li id="inner-profile-pic" class="inner-profile">
                                <img src="../images/profileIcon.svg" alt="">
                            </li>
                            <li id="inner-profile-username" class="inner-profile">
                                <h2>@<span id="profile-username">username</span></h2>
                                <p>
                                    <span id="rollno">roll no.</span> <span id="hostelName">hostel name</span>
                                </p>
                            </li>
                        </ul>
                        <ul id="inner-profile-sideBar2-ele2" class="inner-profile-sideBar2-ele">
                            <li id="posts-head">
                                <h2>Posts</h2>
                            </li>
                            <li id="posts">
                                <ul id="inner-posts">
                                    <!-- <li class="sidebar2-ele">
                                <div id="writer">
                                    <img src="../images/profileIcon.svg" alt="">
                                    <p>@username</p>
                                </div>
                                <div id="title">
                                    <p>Title / Event name</p>
                                </div>
                                <div id="destination">
                                    <p>Destination</p>
                                </div>
                                <div id="time">
                                    <p>Time</p>
                                    <div>
                                        <button id="interested">I'm Interested</button>
                                        <button class="delete">
                                            <img src="../images/delete.svg" alt="">
                                        </button>
                                    </div>
                                </div>
                            </li> -->
                                </ul>
                            </li>
                        </ul>
                    </ul>
    `

}

