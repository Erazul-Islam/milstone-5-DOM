const verification = document.getElementById('verification').addEventListener('click',function(){
    const emailfield = document.getElementById('email-field');
    const email = emailfield.value;

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if(email === 'erazul89@gmail.com' && password === 'taosif510'){
        window.location.href = 'bank.html'
    }
    else{
        alert('This is Rab')
    }

    emailfield.value = '';
    passwordField.value = ''
})