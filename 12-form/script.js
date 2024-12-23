let enquiryForm = document.getElementById('enquiryForm')
let userDeatils = document.querySelector('.userDetails');

enquiryForm.addEventListener('submit',(event)=>{
    event.preventDefault()

    let userValue = 
        {
            name: event.target.uname.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            message: event.target.message.value,
        };

    let getUserData = JSON.parse(localStorage.getItem('formData')) ?? [];
    getUserData.push(userValue);
    localStorage.setItem('formData', JSON.stringify(getUserData));
    showData()
    enquiryForm.reset()
    
})

function showData(){
    let showUserData = JSON.parse(localStorage.getItem('formData')) ?? [];
    let formDetails = ''
    showUserData.forEach((v,i) => {
        const {name,email,phone,message} = v;
        formDetails += `
        <div class="userItems">
            <button onclick="delData(${i})" class="delBtn">Delete</button>
            <div><b>Name: </b>${name}</div>
            <div><b>Email: </b>${email}</div>
            <div><b>Phone No: </b>${phone}</div>
            <div><b>Message: </b>${message}</div>
        </div>
        `
    });
    userDeatils.innerHTML = formDetails;
}
showData()

function delData(i){
    del = JSON.parse(localStorage.getItem('formData')) ?? [];
    del.splice(i,1)
    localStorage.setItem('formData', JSON.stringify(del));
    showData();
}