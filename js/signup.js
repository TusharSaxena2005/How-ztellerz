
document.getElementById('submit-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let username = document.getElementById('username').value
    let rollNum = document.getElementById('rollno').value
    let phoneNum = document.getElementById('phoneNo').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let hostelName = document.getElementById('hostelName').value
    let floorNum = document.getElementById('floorNum').value
    let roomNum = document.getElementById('roomNum').value

    if (username.length < 4) {
        alert("Username can't be less than 4")
    }
    else if (rollNum.length != 10) {
        alert("Invalid roll number")
    }
    else if (phoneNum.length != 10) {
        alert("Invalid contact number")
    }
    else if (password.length < 4) {
        alert("Passoword can't be less than 4")
    }
    else if (floorNum.length != 1) { 
        alert("Floor number should contain only single character")
    }
    else if (roomNum.length != 3) {
        alert("Room number should contain only 3 characters")
     }
    else {
        let data = {
            "username": username,
            "rollNum": rollNum,
            "phoneNum": phoneNum,
            "email": email,
            "password": password,
            "hostelName": hostelName,
            "floorNum": floorNum,
            "roomNum": roomNum,
            "broadCast": [],
            "marketPlace": [],
            "logined": 1,
        }

        localStorage.setItem(localStorage.length, JSON.stringify(data))
        window.location = '../html/explore.html'
    }
})

document.getElementById('logo').addEventListener('click', function () {
    window.location = "../index.html"
})
