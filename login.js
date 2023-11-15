function tooglePassword() {
    let passwordelement = document.getElementById("pass");
    let showpassword = document.getElementById("show");
    if (passwordelement.type == 'text') {
        passwordelement.type = 'password';
        showpassword.innerText = 'show password';

    } else {
        passwordelement.type = 'text';
        showpassword.innerText = 'hide password';
    }

}

function Login() {
    let emailelement = document.getElementById("mail");
    let passwordelement = document.getElementById("pass");
    console.log(emailelement.value)
    console.log(passwordelement.value)
    if (emailelement.value === 'youssefhkima29@gmail.com' && passwordelement.value === '14789+') {
        alert('success')


    } else {
        alert('incorrect')
    }
}