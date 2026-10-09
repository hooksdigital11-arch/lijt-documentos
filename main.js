const dialog = document.querySelector('.lead-dialog');
const intentField = document.querySelector('#intent-field');
const form = document.querySelector('#lead-form');

document.querySelectorAll('.js-open-lead').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    intentField.value = trigger.dataset.intent || 'Conversa com especialista';
    dialog.showModal();
    requestAnimationFrame(() => dialog.querySelector('input:not([readonly])')?.focus());
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = encodeURIComponent(`Olá, LIJT!\n\nNome: ${data.get('nome')}\nWhatsApp: ${data.get('telefone')}\nE-mail: ${data.get('email')}\nAssunto: ${data.get('assunto')}\n\nDemanda:\n${data.get('mensagem')}`);
  window.location.href = `https://wa.me/5531932641283?text=${message}`;
});

document.querySelectorAll('details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('details[open]').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  document.querySelector('.site-header nav').classList.toggle('is-open', !expanded);
});
