// 中国
document.getElementById('cn').onclick = function() {
  document.title = '笑话生成器';
  document.getElementById('lbl-customname').textContent = '请输入自定义名字：';
  document.getElementById('lbl-cn').textContent = '中国';
  document.getElementById('lbl-us').textContent = '美国';
  document.getElementById('lbl-uk').textContent = '英国';
  document.getElementById('customname').placeholder = '李雷';
  document.querySelector('.random').textContent = '随机生成笑话';
}

// 美国 英国 
document.getElementById('us').onclick =
document.getElementById('uk').onclick = function() {
  document.title = 'Silly story generator';
  document.getElementById('lbl-customname').textContent = 'Enter custom name:';
  document.getElementById('lbl-cn').textContent = 'CN';
  document.getElementById('lbl-us').textContent = 'US';
  document.getElementById('lbl-uk').textContent = 'UK';
  document.getElementById('customname').placeholder = 'Bob';
  document.querySelector('.random').textContent = 'Generate random story';
}