/* 햄버거 메뉴 */

const menuToggle=document.getElementById("menuToggle")
const navMenu=document.getElementById("navMenu")

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active")

})

}


/* 네트워크 애니메이션 */

const canvas=document.getElementById("network")

if(canvas){

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5),
vy:(Math.random()-0.5)

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x+=p.vx
p.y+=p.vy

ctx.beginPath()
ctx.arc(p.x,p.y,2,0,Math.PI*2)
ctx.fillStyle="#3b82f6"
ctx.fill()

particles.forEach(p2=>{

let dx=p.x-p2.x
let dy=p.y-p2.y
let dist=Math.sqrt(dx*dx+dy*dy)

if(dist<120){

ctx.beginPath()
ctx.moveTo(p.x,p.y)
ctx.lineTo(p2.x,p2.y)
ctx.strokeStyle="rgba(59,130,246,0.2)"
ctx.stroke()

}

})

})

requestAnimationFrame(draw)

}

draw()

}


/* AI 문제 생성 */

function generateProblem(){

const input=document.getElementById("questionInput").value
const result=document.getElementById("resultBox")

if(!input){

result.innerHTML="문제를 입력하세요."
return

}

let newProblem=input
.replace("두","세")
.replace("자연수","정수")
.replace("구하시오","구하여라")

result.innerHTML=

"<b>입력 문제</b><br>"+input+
"<br><br><b>AI 생성 문제</b><br>"+newProblem

}

/* 기존 코드 끝에 추가 */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    // 스크롤이 400px 이상 내려가면 버튼 노출
    if (window.pageYOffset > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    // 부드럽게 최상단으로 이동
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* 모바일 메뉴 개선: 메뉴 클릭시 닫히게 설정 */
const navLinks = document.querySelectorAll("#navMenu a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});