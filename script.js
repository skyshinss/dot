let currentIdx = 0;
const container = document.getElementById('container');
const navItems = document.querySelectorAll('#nav li');
const totalSlides = document.querySelectorAll('.slide').length;
let isScrolling = false;

function moveTo(idx) {
    if (idx < 0 || idx >= totalSlides) return;
    currentIdx = idx;
    
    // 화면 이동
    container.style.transform = `translateY(-${currentIdx * 100}vh)`;
    
    // 메뉴 상태 업데이트
    navItems.forEach((li, i) => {
        li.classList.toggle('active', i === currentIdx);
    });
}

// 휠 스크롤 제어
window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    
    isScrolling = true;
    if (e.deltaY > 0) {
        moveTo(currentIdx + 1);
    } else {
        moveTo(currentIdx - 1);
    }

    setTimeout(() => {
        isScrolling = false;
    }, 1000); // 슬라이드 전환 시간 동안 스크롤 중복 방지
}, { passive: false });

// 키보드 지원
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') moveTo(currentIdx + 1);
    if (e.key === 'ArrowUp') moveTo(currentIdx - 1);
});