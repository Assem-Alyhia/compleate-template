const btn = document.getElementById('btn');
const pass = document.getElementById('password');
const icon = document.querySelector('.icon');
btn.addEventListener('click',function(){
    if (pass.type === 'password'){
    pass.type = 'text';
    icon.classList.add('fa-eye');
    icon.classList.remove('fa-eye-slash');
    
} else {
    pass.type = 'password';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
}
})


const btnn = document.getElementById('btnn');
const passs = document.getElementById('passwordd');
const iconn = document.querySelector('.iconn');
btnn.addEventListener('click',function(){
    if (passs.type === 'password'){
    passs.type = 'text';
    iconn.classList.add('fa-eye');
    iconn.classList.remove('fa-eye-slash');
    
} else {
    passs.type = 'password';
    iconn.classList.remove('fa-eye');
    iconn.classList.add('fa-eye-slash');
}
})