document.getElementById('submit-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let data =
    {
        "username": document.getElementById('username').value,
        "rollno": document.getElementById('rollno').value,
        "phoneNo": document.getElementById('phoneNo').value,
        "email": document.getElementById('email').value,
        "password": document.getElementById('password').value,
        "hostelName": document.getElementById('hostelName').value,
        "floorNum": document.getElementById('floorNum').value,
        "roomNum": document.getElementById('roomNum').value
    }
    let storageLength = localStorage.length
    localStorage.setItem(storageLength, JSON.stringify(data))
    window.location="../index.html"
})