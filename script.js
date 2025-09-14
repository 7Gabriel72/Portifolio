const btnTopo = document.getElementById("btnTopo");
window.addEventListener("scroll", () => {
  btnTopo.style.display = window.scrollY > 200 ? "block" : "none";
});
btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(fader => {
  observer.observe(fader);
});

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  if (nome && email && mensagem && validateEmail(email)) {
    const formData = new FormData(form);
    try {
      const response = await fetch('submit_form.php', {
        method: 'POST',
        body: formData
      });
      const result = await response.text();
      alert(result);
      if (result.includes('sucesso')) {
        form.reset();
      }
    } catch (error) {
      alert('Erro ao enviar mensagem.');
    }
  } else {
    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
    } else if (!validateEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
    }
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

const typingText = "Sou um criador digital que transforma linhas de código em experiências encantadoras.";
const typingElement = document.getElementById("typing");
let typingIndex = 0;

function type() {
  if (typingIndex < typingText.length) {
    typingElement.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(type, 50);
  }
}
document.addEventListener("DOMContentLoaded", type);

const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "☀️";
  } else {
    themeToggleBtn.textContent = "🌙";
  }
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.getElementsByClassName("close")[0];

const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const titles = ["Quiz Interativo", "Experiência Interativa"];
    const descriptions = [
      "Um site experimental com animações fluidas e interações modernas. Tecnologias: HTML, CSS, JavaScript. Link: <a href=\"https://7gabriel72.github.io/Jogo_Escola/\" target=\"_blank\">Ver Projeto</a>",
      "E um jogo basico que une design e código em harmonia. Tecnologias: HTML, CSS, JavaScript. Link: <a href=\"https://jogo-basico.netlify.app/\" target=\"_blank\">Ver Projeto</a>"
    ];
    modalTitle.textContent = titles[index];
    modalText.innerHTML = descriptions[index];
    modal.style.display = "block";
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const skillBars = document.querySelectorAll('.skill-bar-fill');
const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.getAttribute('data-width');
      entry.target.style.width = width + '%';
    }
  });
}, {
  threshold: 0.5
});

skillBars.forEach(bar => {
  skillsObserver.observe(bar);
});