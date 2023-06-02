const keywords = ['1. Casual', '2. Formal', '3. individual', '4. recommendation'];
let currentKeywordIndex = 0;

function showNextKeyword() {
  document.getElementById('keywords').textContent = keywords[currentKeywordIndex];
  currentKeywordIndex = (currentKeywordIndex + 1) % keywords.length;
}

showNextKeyword();
setInterval(showNextKeyword, 1500);


const image = document.querySelector('img');

// 타이틀 요소 선택
const title = document.querySelector('.title');

// window가 스크롤 될 때마다 실행되는 이벤트 리스너 추가
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY; // 현재 스크롤 위치
  var topMenu = document.getElementById('topMenu');

  if (scrollPosition >= 150) { // 스크롤 위치가 100px 이상이면
    topMenu.classList.add('scrolled'); // 클래스 추가
  } else {
    topMenu.classList.remove('scrolled'); // 클래스 제거
  }
});
