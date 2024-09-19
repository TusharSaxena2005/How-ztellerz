let allOptions = document.getElementsByClassName('inner-sideBar2')
let home = document.getElementById('home-sideBar2')
let sports = document.getElementById('sports-sideBar2')
let club = document.getElementById('club-sideBar2')
let library = document.getElementById('library-sideBar2')
let gaming = document.getElementById('gaming-sideBar2')
let profile = document.getElementById('profile-sideBar2')
let post = document.getElementById('sidebar1-ele7-btn')
let profileLogo = document.getElementById('profile')
let navBtn = document.getElementById('nav-btn')


let homeBtn = document.getElementById('home-btn')
let sportsBtn = document.getElementById('sports-btn')
let clubBtn = document.getElementById('club-btn')
let libraryBtn = document.getElementById('library-btn')
let gamingBtn = document.getElementById('gaming-btn')
let profileBtn = document.getElementById('profile-btn')


let crossBtn = document.getElementById('cross-btn')


const viewportWidth = window.innerWidth;




homeBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    home.style.display = 'flex';
    if (viewportWidth < 440) {
        navOpenClose()
    }
})

sportsBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    sports.style.display = 'flex';
    if (viewportWidth < 440) {
        navOpenClose()
    }
})

clubBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    club.style.display = 'flex';
    if (viewportWidth < 440) {
        navOpenClose()
    }
})

libraryBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    library.style.display = 'flex';
    if (viewportWidth < 440) {
        navOpenClose()
    }
})

gamingBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    gaming.style.display = 'flex';
    if (viewportWidth < 440) {
        navOpenClose()
    }
})

profileBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    profile.style.display = 'flex';
    if (viewportWidth < 440) {
        navOpenClose()
    }
})

profileLogo.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    profile.style.display = 'flex';
})

post.addEventListener('click', function () {
    document.getElementById('outer-post-form').style.display = 'flex'
})

crossBtn.addEventListener('click', function () {
    document.getElementById('outer-post-form').style.display = 'none'
})

function navOpenClose() {
    let navEle = document.getElementsByClassName('sidebar1-ele')
    for (i = 0; i < navEle.length; i++) {
        if (navEle[i].style.display != 'flex') {
            navEle[i].style.display = 'flex'
            document.getElementById('page1').style.height = '180vh'
            document.getElementById('sideBar1').style.height = '45%'
        }
        else {
            navEle[i].style.display = 'none'
            document.getElementById('page1').style.height = '85vh'
            document.getElementById('sideBar1').style.height = '55px'
        }
    }
}

navBtn.addEventListener('click', navOpenClose)