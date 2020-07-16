//Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/profile.jpg') {
      myImage.setAttribute ('src','images/cedar.jpg');
    } else {
      myImage.setAttribute ('src','images/profile.jpg');
    }
}