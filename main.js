const dialog = document.querySelector('.lead-dialog');
const intentField = document.querySelector('#intent-field');
const form = document.querySelector('#lead-form');
const success = document.querySelector('.form-success');

document.querySelectorAll('.js-open-lead').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    intentField.value = trigger.dataset.intent || 'Conversa com especialista';
    form.hidden = false;
    success.hidden = true;
    dialog.showModal();
    requestAnimationFrame(() => dialog.querySelector('input:not([readonly])')?.focus());
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-done').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Contato LIJT — ${data.get('assunto')}`);
  const body = encodeURIComponent(`Nome: ${data.get('nome')}\nWhatsApp: ${data.get('telefone')}\nE-mail: ${data.get('email')}\nAssunto: ${data.get('assunto')}\n\nDemanda:\n${data.get('mensagem')}`);
  form.hidden = true;
  success.hidden = false;
  window.location.href = `mailto:contato@lijtdocumentos.com.br?subject=${subject}&body=${body}`;
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
