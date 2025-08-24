const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('hidden').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 10);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target); {
            target.scrollIntoView({ behaviorsmooth });
        }
    });
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

const textArray = ["A Passionate Web developer"];
const typedText = document.querySelector(".typed-text");
let index = 0;
let charIndex = 0;
let typing = true;


function typeLoop() {
    if (!typedText) return;

    const currentText = textArray[index];

    if (typing) {
        typedText.textContent += currentText[charIndex];
        charIndex++;
        if (charIndex === currentText.length) {
            typing = false;
            setTimeout(typeLoop, 1500);
            return;
        }
    } else {
        typedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            typing = true;
            index = (index + 1) % textArray.length;
        }
    }
    setTimeout(typeLoop, typing ? 120 : 50);
}
window.addEventListener('DOMContentLoaded', typeLoop);
