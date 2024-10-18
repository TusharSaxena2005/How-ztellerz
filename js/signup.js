document.getElementById('submit-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let data = {
        "username": document.getElementById('username').value,
        "rollNum": document.getElementById('rollno').value,
        "phoneNum": document.getElementById('phoneNo').value,
        "email": document.getElementById('email').value,
        "password": document.getElementById('password').value,
        "hostelName": document.getElementById('hostelName').value,
        "floorNum": document.getElementById('floorNum').value,
        "roomNum": document.getElementById('roomNum').value,
        "broadCast": [],
        "marketPlace": [],
        "logined": 1,
    }

    localStorage.setItem(localStorage.length, JSON.stringify(data))
    window.location = '../html/explore.html'
})

document.getElementById('logo').addEventListener('click', function () {
    window.location = "../index.html"
})
