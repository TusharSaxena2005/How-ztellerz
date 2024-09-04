let allOptions = document.getElementsByClassName('inner-sideBar2')
let home = document.getElementById('home-sideBar2')
let sports = document.getElementById('sports-sideBar2')
let club = document.getElementById('club-sideBar2')
let library = document.getElementById('library-sideBar2')
let gaming = document.getElementById('gaming-sideBar2')
let profile = document.getElementById('profile-sideBar2')
let post = document.getElementById('sidebar1-ele7-btn')
let profileLogo = document.getElementById('profile')


let homeBtn = document.getElementById('home-btn')
let sportsBtn = document.getElementById('sports-btn')
let clubBtn = document.getElementById('club-btn')
let libraryBtn = document.getElementById('library-btn')
let gamingBtn = document.getElementById('gaming-btn')
let profileBtn = document.getElementById('profile-btn')


let crossBtn = document.getElementById('cross-btn')


homeBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    home.style.display = 'flex';
})

sportsBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    sports.style.display = 'flex';
})

clubBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    club.style.display = 'flex';
})

libraryBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    library.style.display = 'flex';
})

gamingBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    gaming.style.display = 'flex';
})

profileBtn.addEventListener('click', function () {
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.display = 'none'
    }
    profile.style.display = 'flex';
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