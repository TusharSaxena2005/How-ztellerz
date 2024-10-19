let addItemBtn = document.getElementById('inner-main-page1-ele6')
let addItemForm = document.getElementById('add-item-box')
let addItemFormClose = document.getElementById('add-item-box-close')
let addItemFormBtn = document.getElementById('add-item-form-btn')

let homeBtn = document.getElementById('inner-main-page1-ele1')
let chipBtn = document.getElementById('inner-main-page1-ele2')
let drinkBtn = document.getElementById('inner-main-page1-ele3')
let biscuitBtn = document.getElementById('inner-main-page1-ele4')
let otherBtn = document.getElementById('inner-main-page1-ele5')
let profileBtn = document.getElementById('inner-main-page1-ele7')

let filterBtn = document.getElementById('filterApply')
let filterBox = document.getElementById('filter-box')
let filterBtnOpen = document.getElementById('filter-btn')
let filterBtnClose = document.getElementById('filter-box-close')

let logout = document.getElementById('logout')



showAllItem()


// All functions start from here ----->

function showAllItem() {
    document.getElementById('inner-main2-page2').innerHTML = ''
    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        if (dataFetched.logined == 1) {
            loginedPerson = dataFetched.username
        }
        else {
            loginedPerson = 'none'
        }
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
                if (loginedPerson == sName) {
                    document.getElementById('inner-main2-page2').innerHTML += `
                <li id="outer-card1" class="outer-cars" data-name="${pName}" data-price="${pPrice}" data-floor="${sFloor}"
                data-room="${sRoom}" data-hostel-name="${sHostelName}" data-category="${pCategory}" data-seller="${sName}"
                        data-contact="${sContact}" data-imageURL="../images/${pImgURL}">
                        <img src="../images/${pImgURL}" alt="">
                        <p>${pName}</p>
                        <p>${pPrice} Rs.</p>
                        <div>
                            <button class="details-button">Details</button>
                            <button class="removeItemBtn">
                                <img src="../images/delete.svg" alt="">
                            </button>
                        </div>
                        </li>
                        `

                } else {
                    document.getElementById('inner-main2-page2').innerHTML += `
                <li id="outer-card1" class="outer-cars" data-name="${pName}" data-price="${pPrice}" data-floor="${sFloor}"
                data-room="${sRoom}" data-hostel-name="${sHostelName}" data-category="${pCategory}" data-seller="${sName}"
                        data-contact="${sContact}" data-imageURL="../images/${pImgURL}">
                        <img src="../images/${pImgURL}" alt="">
                        <p>${pName}</p>
                        <p>${pPrice} Rs.</p>
                        <div>
                            <button class="details-button">Details</button>
                        </div>
                        </li>
                        `
                }
            }
        }
    }
    document.getElementById('inner-main2-page2').innerHTML += `
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

function showItemByCategory(category) {
    document.getElementById('inner-main2-page2').innerHTML = ''
    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        if (dataFetched.logined == 1) {
            loginedPerson = dataFetched.username
        }
        else {
            loginedPerson = 'none'
        }
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
                if (pCategory == category) {
                    if (loginedPerson == sName) {
                        document.getElementById('inner-main2-page2').innerHTML += `
                        <li id="outer-card1" class="outer-cars" data-name="${pName}" data-price="${pPrice}" data-floor="${sFloor}"
                        data-room="${sRoom}" data-hostel-name="${sHostelName}" data-category="${pCategory}" data-seller="${sName}"
                        data-contact="${sContact}" data-imageURL="../images/${pImgURL}">
                        <img src="../images/${pImgURL}" alt="">
                        <p>${pName}</p>
                        <p>${pPrice} Rs.</p>
                        <div>
                            <button class="details-button">Details</button>
                            <button class="removeItemBtn">
                                <img src="../images/delete.svg" alt="">
                            </button>
                        </div>
                        </li>
                        `

                    } else {
                        document.getElementById('inner-main2-page2').innerHTML += `
                        <li id="outer-card1" class="outer-cars" data-name="${pName}" data-price="${pPrice}" data-floor="${sFloor}"
                        data-room="${sRoom}" data-hostel-name="${sHostelName}" data-category="${pCategory}" data-seller="${sName}"
                        data-contact="${sContact}" data-imageURL="../images/${pImgURL}">
                        <img src="../images/${pImgURL}" alt="">
                        <p>${pName}</p>
                        <p>${pPrice} Rs.</p>
                        <div>
                            <button class="details-button">Details</button>
                        </div>
                        </li>
                        `
                    }
                }
            }
        }
    }
    document.getElementById('inner-main2-page2').innerHTML += `
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

function showItemByFilter(hostelName, floorNum = "none") {
    document.getElementById('inner-main2-page2').innerHTML = ''
    for (let i = 1; i < localStorage.length; i++) {
        let dataFetched = JSON.parse(localStorage[i])
        if (dataFetched.logined == 1) {
            loginedPerson = dataFetched.username
        }
        else {
            loginedPerson = 'none'
        }
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
                if (hostelName == sHostelName && floorNum == sFloor) {
                    if (loginedPerson == sName) {
                        document.getElementById('inner-main2-page2').innerHTML += `
                        <li id="outer-card1" class="outer-cars" data-name="${pName}" data-price="${pPrice}" data-floor="${sFloor}"
                        data-room="${sRoom}" data-hostel-name="${sHostelName}" data-category="${pCategory}" data-seller="${sName}"
                        data-contact="${sContact}" data-imageURL="../images/${pImgURL}">
                        <img src="../images/${pImgURL}" alt="">
                        <p>${pName}</p>
                        <p>${pPrice} Rs.</p>
                        <div>
                            <button class="details-button">Details</button>
                            <button class="removeItemBtn">
                                <img src="../images/delete.svg" alt="">
                            </button>
                        </div>
                        </li>
                        `

                    } else {
                        document.getElementById('inner-main2-page2').innerHTML += `
                        <li id="outer-card1" class="outer-cars" data-name="${pName}" data-price="${pPrice}" data-floor="${sFloor}"
                        data-room="${sRoom}" data-hostel-name="${sHostelName}" data-category="${pCategory}" data-seller="${sName}"
                        data-contact="${sContact}" data-imageURL="../images/${pImgURL}">
                        <img src="../images/${pImgURL}" alt="">
                        <p>${pName}</p>
                        <p>${pPrice} Rs.</p>
                        <div>
                            <button class="details-button">Details</button>
                        </div>
                        </li>
                        `
                    }
                }
                else if (hostelName == sHostelName && floorNum == "none") {
                    if (loginedPerson == sName) {
                        document.getElementById('inner-main2-page2').innerHTML += `
                        <li id="outer-card1" class="outer-cars" data-name="${pName}" data-price="${pPrice}" data-floor="${sFloor}"
                        data-room="${sRoom}" data-hostel-name="${sHostelName}" data-category="${pCategory}" data-seller="${sName}"
                        data-contact="${sContact}" data-imageURL="../images/${pImgURL}">
                        <img src="../images/${pImgURL}" alt="">
                        <p>${pName}</p>
                        <p>${pPrice} Rs.</p>
                        <div>
                            <button class="details-button">Details</button>
                            <button class="removeItemBtn">
                                <img src="../images/delete.svg" alt="">
                            </button>
                        </div>
                        </li>
                        `

                    } else {
                        document.getElementById('inner-main2-page2').innerHTML += `
                        <li id="outer-card1" class="outer-cars" data-name="${pName}" data-price="${pPrice}" data-floor="${sFloor}"
                        data-room="${sRoom}" data-hostel-name="${sHostelName}" data-category="${pCategory}" data-seller="${sName}"
                        data-contact="${sContact}" data-imageURL="../images/${pImgURL}">
                        <img src="../images/${pImgURL}" alt="">
                        <p>${pName}</p>
                        <p>${pPrice} Rs.</p>
                        <div>
                            <button class="details-button">Details</button>
                        </div>
                        </li>
                        `
                    }
                }
            }
        }
    }
    document.getElementById('inner-main2-page2').innerHTML += `
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
            document.getElementById('inner-posts').innerHTML = ''
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
                    if (dataFetched.username == sName) {
                        document.getElementById('inner-posts').innerHTML += `
                        <li id="outer-card1" class="profile-outer-cars" data-name="${pName}" data-price="${pPrice}" data-floor="${sFloor}"
                            data-room="${sRoom}" data-hostel-name="${sHostelName}" data-category="${pCategory}" data-seller="${sName}"
                            data-contact="${sContact}" data-imageURL="../images/${pImgURL}">
                            <img class="pImage" src="../images/${pImgURL}" alt="">
                            <p>${pName}</p>
                            <p>${pPrice} Rs.</p>
                            <div>
                                <button class="details-button">Details</button>
                                <button class="removeItemBtn profileremoveBtn">
                                    <img src="../images/delete.svg" alt="">
                                </button>
                            </div>
                        </li>
                        `
                    }
                }
            }
        }
    }
}

function homePage() {
    document.getElementById('profile-sideBar2').style.display = 'none'
    const outerCarsElements = document.querySelectorAll('.outer-cars');
    outerCarsElements.forEach((element) => {
        element.style.display = 'flex';
    });
    showAllItem()
}

function chipsPage() {
    document.getElementById('profile-sideBar2').style.display = 'none'
    const outerCarsElements = document.querySelectorAll('.outer-cars');
    outerCarsElements.forEach((element) => {
        element.style.display = 'flex';
    });
    showItemByCategory('chips')
}

function drinksPage() {
    document.getElementById('profile-sideBar2').style.display = 'none'
    const outerCarsElements = document.querySelectorAll('.outer-cars');
    outerCarsElements.forEach((element) => {
        element.style.display = 'flex';
    });
    showItemByCategory('drinks')
}

function biscuitsPage() {
    document.getElementById('profile-sideBar2').style.display = 'none'
    const outerCarsElements = document.querySelectorAll('.outer-cars');
    outerCarsElements.forEach((element) => {
        element.style.display = 'flex';
    });
    showItemByCategory('biscuits')
}

function otherPage() {
    document.getElementById('profile-sideBar2').style.display = 'none'
    const outerCarsElements = document.querySelectorAll('.outer-cars');
    outerCarsElements.forEach((element) => {
        element.style.display = 'flex';
    });
    showItemByCategory('other')
}

function logOut() {
    for (let i = 1; i < localStorage.length; i++) {
        let verifyRollNum = JSON.parse(localStorage[i])
        if (verifyRollNum.logined == 1) {
            verifyRollNum.logined = 0;
            localStorage.setItem(i, JSON.stringify(verifyRollNum));
            window.location = "../html/login.html"
        }
    }
}



// All Event listeners start from here ------>

logout.addEventListener('click', logOut)

homeBtn.addEventListener('click', homePage)

chipBtn.addEventListener('click', chipsPage)

drinkBtn.addEventListener('click', drinksPage)

biscuitBtn.addEventListener('click', biscuitsPage)

otherBtn.addEventListener('click', otherPage)

profileBtn.addEventListener('click', openProfilePage)

document.querySelectorAll('.inner-main-page1-ele').forEach((btn, index) => {
    btn.addEventListener('click', function (e) {
        document.querySelectorAll('.inner-main-page1-ele').forEach((btn, index) => {
            btn.style.border = 'none'
        })
        let button = e.target.closest('.inner-main-page1-ele')
        button.style.border = '2px solid white'
    })
})

addItemBtn.addEventListener('click', openAddItemForm)

addItemFormClose.addEventListener('click', closeAddItemForm)

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

filterBtnOpen.addEventListener('click', function () {
    filterBox.style.display = 'flex'
})

filterBtnClose.addEventListener('click', function () {
    filterBox.style.display = 'none'
})

filterBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let filterHostelName = document.getElementById('filterHostelName').value
    let filterFloorNum = document.getElementById('filterFloorNum').value

    if (filterFloorNum == "") {
        showItemByFilter(filterHostelName)
    }
    else if (filterHostelName == "") {
        alert('Enter hostel name')
    }
    else {
        showItemByFilter(filterHostelName, filterFloorNum)
    }
    document.getElementById('filterHostelName').value = ''
    document.getElementById('filterFloorNum').value = ''
})



// Event listener to remove items ----->

document.getElementById('inner-main2-page2').addEventListener('click', function (e) {
    if (e.target.closest('.removeItemBtn')) {
        if (document.getElementById('profile-sideBar2').style.display == 'flex') {
            product = e.target.closest('.profile-outer-cars');
        }
        else {
            product = e.target.closest('.outer-cars');
        }
        const productName = product.getAttribute('data-name');

        for (let i = 1; i < localStorage.length; i++) {
            let dataFetched = JSON.parse(localStorage[i]);
            if (dataFetched.logined == 1) {
                let myArray = dataFetched.marketPlace;
                const indexToRemove = myArray.findIndex(item => item.productName === productName);
                if (indexToRemove !== -1) {
                    myArray.splice(indexToRemove, 1);
                    dataFetched.marketPlace = myArray;
                    localStorage.setItem(i, JSON.stringify(dataFetched));
                    openProfilePage();
                    break;
                }
            }
        }
    }
});


// Event listener to fetch all details of product after clicking on details button -----> 

document.getElementById('inner-main2-page2').addEventListener('click', function (e) {
    if (e.target.closest('.details-button')) {
        let product;
        if (document.getElementById('profile-sideBar2').style.display == 'flex') {
            product = e.target.closest('.profile-outer-cars');
        }
        else {
            product = e.target.closest('.outer-cars');
        }
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

        document.getElementById('productName').innerText = name;
        document.getElementById('productPrice').innerText = price;
        document.getElementById('SellerName').innerText = sellerName;
        document.getElementById('SellerContact').innerText = contactNum;
        document.getElementById('hostel-Name').innerText = hostel;
        document.getElementById('floorNum').innerText = floor;
        document.getElementById('roomNum').innerText = room;
        document.getElementById('product-Img').src = `../images/${imageUrl}`;
    }
});


// Event listener to close detail box -----> 

document.getElementById('detail-box-close').addEventListener('click', function () {
    document.getElementById('details-box').style.display = 'none';
});