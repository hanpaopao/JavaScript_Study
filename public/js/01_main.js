let myHeading = document.querySelector('h1');
myHeading.textContent = 'hello world';

// 事件
// document.querySelector('html').onclick = function() {
//   alert('别戳我，我疼');
// }

// 添加一个图像切换器
let myImage = document.querySelector('img');
myImage.onclick = function() {
  let myStr = myImage.getAttribute('src');
  if (myStr === './public/images/firefox2.png') {
    myImage.setAttribute('src', './public/images/firefox-icon.png');
  } else {
    myImage.setAttribute('src', './public/images/firefox2.png');
  }
}

// 切换用户
function setHeading(name) {
  myHeading.textContent = 'Mozilla 酷毙了，' + name + '!';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
}

let storedName = localStorage.getItem('name');
if ( storedName) {
  setHeading(storedName);
} else {
  setUserName();
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;