console.log("contact-form.js carregou ✅");

document.addEventListener("submit", async (e) => {
  const form = e.target;

  if (!(form instanceof HTMLFormElement)) return;
  if (form.id !== "contactForm") return;

  e.preventDefault();
  console.log("Submit intercetado ✅");

  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn?.textContent;

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Sending...";
  }

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      alert("Email sent. I’ll get back to you shortly."); // depois trocamos pelo toast bonito
    } else {
      alert("Erro a enviar.");
    }
  } catch {
    alert("Sem ligação.");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  }
});
