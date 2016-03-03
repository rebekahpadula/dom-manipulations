
document.querySelector("#thanks button").addEventListener('click', function () {
    alert('yowch! don\'t click me so hard!');
});

document.querySelector("#double button").addEventListener('click', function () {
    var double = document.querySelector('#compoundInvestment');
    double.innerHTML = parseInt(double.innerHTML) * 2;
});


document.querySelector("#color-circle button").addEventListener('click', function () {
    var circle = document.querySelector('#circle-bw');
    if (circle.style.background === 'white') {
        circle.style.background = 'black';
    } else {
        circle.style.background = 'white';
    }
});

document.querySelector("#blow-up button").addEventListener('click', function () {
  var circleRed = document.getElementsByClassName('circle-red');
  if (parseInt(circleRed[0].style.height) < 320) {
    var result = parseInt(circleRed[0].style.height);
    result *= 2;
    result = result + 'px';
    circleRed[0].style.height = result;
    circleRed[0].style.width = result;
  } else {
    circleRed[0].style.width = '40px'
    circleRed[0].style.height = '40px'
  }
});

document.querySelector("#remove button").addEventListener('click',function() {
  var list = document.getElementById('userList');
  var inactive = document.getElementsByClassName('inactive');
  inactive = Array.prototype.slice.call(inactive);
  for (var i = 0; i < inactive.length; i++) {
      list.removeChild(inactive[i]);
  }
});

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  var box = document.querySelector('#reverse-squares .answer-box');
  var boxes = Array.prototype.slice.call(box.children);
  for (var i = boxes.length - 1; i >= 0; i--) {
    box.removeChild(boxes[i]);
    box.appendChild(boxes[i]);
  }
});

document.querySelector("#pig-latin button").addEventListener('click',function(){
  var ul = document.querySelector('#tasks');
  var ulArr = Array.prototype.slice.call(ul.children);
  for (var i = 0; i < ulArr.length; i++) {
    var text = ulArr[i].textContent;
    ulArr[i].textContent = text.split('').reverse().join('');
  }
});

var counter = 1;
document.querySelector("#cycle-image button").addEventListener('click',function(){
    var image = document.getElementById('#city-img');
    var pictures = image.src.split('/');

    if (counter++ === 10) {
        counter = 1;
    }
    Array.prototype.slice.image.src.split('/');
    console.log(image);
});

// source is a string that you can split

// pictures.pop();
// pictures.push(counter);
// pictures.join('/');
// this is for push pop method. Can also try using splice