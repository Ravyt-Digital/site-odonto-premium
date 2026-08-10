const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const testimonials = [
  { quote: '“Desde o primeiro atendimento, me senti segura. O resultado ficou ainda mais natural e bonito do que eu imaginava. Hoje sorrio sem pensar duas vezes.”', author: 'Mariana Costa', procedure: 'Lentes de contato dental', initials: 'MC' },
  { quote: '“A equipe me explicou cada etapa com muita clareza. O cuidado, o ambiente e o resultado superaram todas as minhas expectativas.”', author: 'Lucas Almeida', procedure: 'Implantes dentários', initials: 'LA' },
  { quote: '“Consegui alinhar meu sorriso sem mudar minha rotina. Foi leve, confortável e tive acompanhamento próximo durante todo o processo.”', author: 'Renata Oliveira', procedure: 'Invisalign®', initials: 'RO' }
];

let current = 0;
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const procedure = document.querySelector('#procedure');
const initials = document.querySelector('.quote-author > span');

function showTestimonial(index) {
  current = (index + testimonials.length) % testimonials.length;
  const item = testimonials[current];
  quote.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 350 });
  quote.textContent = item.quote;
  author.textContent = item.author;
  procedure.textContent = item.procedure;
  initials.textContent = item.initials;
}

document.querySelector('#prev').addEventListener('click', () => showTestimonial(current - 1));
document.querySelector('#next').addEventListener('click', () => showTestimonial(current + 1));

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const toast = document.querySelector('.toast');
  toast.classList.add('show');
  event.currentTarget.reset();
  setTimeout(() => toast.classList.remove('show'), 4000);
});
