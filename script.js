const text = document.querySelector('#email');
const submit = document.querySelector('#send');

const rev = document.querySelector('#rev');
const list = document.querySelector('#list');


const contact = document.querySelector('#contact');
const about = document.querySelector('#about');


let array = [100];



submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(text.value.includes('@') && text.value.includes('.com')){
        for(let i = 0; i < array.length; i++){
            alert('Success! Your email is: ' + text.value);
            array[i] = text.value;                 
            list.innerHTML = list.innerHTML + '<br>' + array[i];
            text.value = '';
        }

    }
    else{
        alert('Please, enter a valid email address!');
        text.value = '';
        return;
    }
});

rev.addEventListener('click', (e) => {
    e.preventDefault();

    if (list.style.display === "none") {
        list.style.display = "block";
        rev.value = 'Remove List';
      } else {
        list.style.display = "none";
        rev.value = 'Show List';
      }
});

contact.addEventListener('click', (e) => {
    alert("Our contacts: \n Telegram: @dodster228 \n Email: mizzatoto@mgail.com ");
});

about.addEventListener('click', (e) => {
    alert("We are beginner developers!");
});

function openFacebook() {
    window.open('//www.facebook.com','_blank');
}

function openInsta() {
    window.open('//www.instagram.com','_blank');
}

function openTwitter() {
    window.open('//www.twitter.com','_blank');
}