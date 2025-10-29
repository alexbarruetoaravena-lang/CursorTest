document.addEventListener('DOMContentLoaded', () => {
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	const form = document.getElementById('contactForm');
	const msg = document.getElementById('formMsg');
	const btn = document.getElementById('sendBtn');

	// Replace with your Formspree endpoint
	const FORM_ENDPOINT = 'https://formspree.io/f/your_form_id';

	if (form) {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			if (!FORM_ENDPOINT || FORM_ENDPOINT.includes('your_form_id')) {
				msg.textContent = 'Configura tu endpoint de formulario.';
				return;
			}
			if (btn) {
				btn.disabled = true;
				btn.textContent = 'Enviando…';
			}
			msg.textContent = '';

			const formData = new FormData(form);
			// Honeypot basic check
			if (formData.get('company')) {
				return; // silently drop
			}
			try {
				const res = await fetch(FORM_ENDPOINT, {
					method: 'POST',
					headers: { 'Accept': 'application/json' },
					body: formData
				});
				if (res.ok) {
					form.reset();
					msg.textContent = '¡Gracias! Te contactaremos pronto.';
				} else {
					msg.textContent = 'No se pudo enviar. Intenta más tarde.';
				}
			} catch (err) {
				msg.textContent = 'Error de red. Verifica tu conexión.';
			} finally {
				if (btn) {
					btn.disabled = false;
					btn.textContent = 'Enviar';
				}
			}
		});
	}
});


