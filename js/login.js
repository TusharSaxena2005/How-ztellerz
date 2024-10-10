document.getElementById('submit-btn').addEventListener('click',function (event){
    event.preventDefault();
    let rollno = document.getElementById('rollno').value
    let password = document.getElementById('password').value
    if(localStorage.getItem(rollno)){
        let data = JSON.parse(localStorage.getItem(rollno))
        console.log(data)
        if(data.password==password){
            window.location = '../index.html'
        }
        else{
            alert('Invalid Password')
        }
    }
    else{
        alert("Roll no. does not exist")
    }
})
