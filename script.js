

var user = prompt('enter name')

document.getElementById('name').innerHTML = user;

document.getElementById('cvv1').innerHTML = Math.floor((Math.random() * 10));
document.getElementById('cvv2').innerHTML = Math.floor((Math.random() * 10));
document.getElementById('cvv3').innerHTML = Math.floor((Math.random() * 10));

document.getElementById('acc1').innerHTML = Math.floor((Math.random() + 8) * 1000) + '';

document.getElementById('acc2').innerHTML = Math.floor((Math.random() + 7) * 1000) + '';

document.getElementById('acc3').innerHTML = Math.floor((Math.random() + 3) * 1000) + '';

document.getElementById('acc4').innerHTML = Math.floor((Math.random() + 2) * 1000) 