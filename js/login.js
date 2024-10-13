document.getElementById('submit-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let rollno = document.getElementById('rollno').value
    let password = document.getElementById('password').value
    for (i = 1; i < localStorage.length; i++) {
        let verifyRollNum = JSON.parse(localStorage[i])
        if (verifyRollNum.rollNum == rollno) {
            if (verifyRollNum.password == password) {
                verifyRollNum.logined = 1;
                localStorage.setItem(i, JSON.stringify(verifyRollNum));
                window.location = "../html/explore.html"
            }
            else {
                alert('Invalid Password')
            }
        }
    }
})

