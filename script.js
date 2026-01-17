(() => {
  "use strict";

  const HIRING_EMAIL = "sunpcorporation@gmail.com";
  const POSITION_ES = "Asociado de Almacén – Paneles Solares";
  const POSITION_EN = "Warehouse Associate – Solar Panels";
  const LOCATION = "Nashville, TN";

  const form = document.getElementById("appForm");
  const alertBox = document.getElementById("formAlert");
  const summaryEl = document.getElementById("summaryText");

  const fullName = document.getElementById("fullName");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const age = document.getElementById("age");
  const city = document.getElementById("city");
  const transport = document.getElementById("transport");
  const lift = document.getElementById("lift");

  const whExp = document.getElementById("whExp");
  const expYearsWrap = document.getElementById("expYearsWrap");
  const expYears = document.getElementById("expYears");

  const shift = document.getElementById("shift");
  const weekends = document.getElementById("weekends");
  const start = document.getElementById("start");

  const notes = document.getElementById("notes");
  const notesCounter = document.getElementById("notesCounter");

  const btnGenerate = document.getElementById("btnGenerate");
  const btnCopy = document.getElementById("btnCopy");

  const yearEl = document.getElementById("year");
  yearEl.textContent = String(new Date().getFullYear());

  function setAlert(msg, tone = "danger") {
    // tone reserved for future; keep minimal
    alertBox.hidden = !msg;
    alertBox.textContent = msg || "";
  }

  function cleanSpaces(str) {
    return String(str || "").replace(/\s+/g, " ").trim();
  }

  function normalizePhone(raw) {
    // Keep digits and a few symbols; do not over-format aggressively.
    const s = cleanSpaces(raw);
    return s;
  }

  function isValidEmail(v) {
    const s = cleanSpaces(v);
    if (!s) return true; // optional
    // Simple and practical check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  }

  function getExpYearsValue() {
    if (whExp.value !== "Sí / Yes") return "N/A";
    const v = cleanSpaces(expYears.value);
    return v ? v : "";
  }

  function requiredMissing() {
    const missing = [];

    if (!cleanSpaces(fullName.value)) missing.push("Nombre y Apellido / Full Name");
    if (!cleanSpaces(phone.value)) missing.push("Teléfono / Phone number");
    if (!age.value) missing.push("Edad / Age");
    if (!cleanSpaces(city.value)) missing.push("Ciudad / City");
    if (!transport.value) missing.push("Transporte / Transportation");
    if (!lift.value) missing.push("Levantar 50 lb / Lift 50 lb");
    if (!whExp.value) missing.push("Experiencia / Experience");
    if (!shift.value) missing.push("Turno / Shift");
    if (!weekends.value) missing.push("Fines de semana / Weekends");
    if (!start.value) missing.push("Inicio / Start");

    if (whExp.value === "Sí / Yes") {
      const yrs = cleanSpaces(expYears.value);
      if (!yrs) missing.push("Años de experiencia / Years of experience");
      else {
        const n = Number(yrs);
        if (!Number.isFinite(n) || n < 0 || n > 20) missing.push("Años de experiencia (0–20) / Years (0–20)");
      }
    }

    if (!isValidEmail(email.value)) missing.push("Email válido (opcional) / Valid email (optional)");

    return missing;
  }

  function meetsHardRequirements() {
    return age.value === "18+" && lift.value === "Sí / Yes";
  }

  function buildSummaryText() {
    const nameV = cleanSpaces(fullName.value);
    const phoneV = normalizePhone(phone.value);
    const emailV = cleanSpaces(email.value) || "N/A";
    const ageV = age.value ? age.value : "—";
    const cityV = cleanSpaces(city.value);
    const transportV = transport.value || "—";
    const liftV = lift.value || "—";
    const whExpV = whExp.value || "—";
    const expYearsV = getExpYearsValue();
    const shiftV = shift.value || "—";
    const weekendsV = weekends.value || "—";
    const startV = start.value || "—";
    const notesV = cleanSpaces(notes.value) || "N/A";

    const lines = [
      `SOLICITUD / APPLICATION`,
      `Puesto / Role: ${POSITION_ES} / ${POSITION_EN}`,
      `Ubicación / Location: ${LOCATION}`,
      ``,
      `Nombre / Name: ${nameV || "—"}`,
      `Teléfono / Phone: ${phoneV || "—"}`,
      `Email: ${emailV}`,
      `Edad / Age: ${ageV}`,
      `Ciudad / City: ${cityV || "—"}`,
      ``,
      `Transporte propio / Transportation: ${transportV}`,
      `Puede levantar 50 lb / Can lift 50 lb: ${liftV}`,
      ``,
      `Experiencia en warehouse / Warehouse experience: ${whExpV}`,
      `Años de experiencia / Years: ${whExpV === "Sí / Yes" ? (expYearsV || "—") : "N/A"}`,
      ``,
      `Turno / Shift: ${shiftV}`,
      `Fines de semana / Weekends: ${weekendsV}`,
      `Inicio / Start: ${startV}`,
      ``,
      `Notas / Notes: ${notesV}`
    ];

    return lines.join("\n");
  }

  function updateSummary() {
    const text = buildSummaryText();
    summaryEl.textContent = text;
  }

  function toggleExpYears() {
    const yes = whExp.value === "Sí / Yes";
    expYearsWrap.hidden = !yes;

    if (!yes) {
      expYears.value = "";
      expYears.removeAttribute("required");
    } else {
      expYears.setAttribute("required", "required");
    }
  }

  function encodeMailto(text) {
    // Encode safely for mailto body/subject
    return encodeURIComponent(text).replace(/%20/g, "+");
  }

  function openMailto(summaryText) {
    const subject = `Application - Warehouse Associate - ${LOCATION} - ${cleanSpaces(fullName.value) || "Candidate"}`;
    const body = summaryText;

    const mailto = `mailto:${HIRING_EMAIL}?subject=${encodeMailto(subject)}&body=${encodeMailto(body)}`;
    window.location.href = mailto;
  }

  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.style.top = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }

  function validateBeforeActions() {
    setAlert("");

    const missing = requiredMissing();
    if (missing.length) {
      setAlert(`Faltan campos obligatorios: ${missing.join(" · ")}.`);
      return { ok: false, reason: "missing" };
    }

    if (!meetsHardRequirements()) {
      setAlert("Este puesto requiere cumplir estos requisitos. (18+ y poder levantar 50 lb).");
      return { ok: false, reason: "hard" };
    }

    return { ok: true };
  }

  function showCopyFeedback() {
    const original = btnCopy.innerHTML;
    btnCopy.innerHTML = `Copiado <span class="btn-en">Copied</span>`;
    btnCopy.disabled = true;
    setTimeout(() => {
      btnCopy.innerHTML = original;
      btnCopy.disabled = false;
    }, 1200);
  }

  // Events
  const watchIds = [
    "fullName","phone","email","age","city","transport","lift",
    "whExp","expYears","shift","weekends","start","notes"
  ];

  watchIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => {
      if (id === "notes") {
        notesCounter.textContent = `${notes.value.length}/400`;
      }
      updateSummary();
    });
    el.addEventListener("change", () => {
      if (id === "whExp") toggleExpYears();
      updateSummary();
    });
  });

  form.addEventListener("reset", () => {
    setAlert("");
    // Reset exp years visibility after reset tick
    setTimeout(() => {
      toggleExpYears();
      notesCounter.textContent = "0/400";
      updateSummary();
    }, 0);
  });

  btnGenerate.addEventListener("click", () => {
    updateSummary();
    const v = validateBeforeActions();
    if (!v.ok) return;

    const summaryText = buildSummaryText();
    openMailto(summaryText);
  });

  btnCopy.addEventListener("click", async () => {
    updateSummary();
    const v = validateBeforeActions();
    if (!v.ok) return;

    const summaryText = buildSummaryText();
    try {
      const ok = await copyToClipboard(summaryText);
      if (ok) {
        showCopyFeedback();
        setAlert(""); // clear any previous alert
      } else {
        setAlert("No se pudo copiar automáticamente. Selecciona el texto del resumen y copia manualmente. / Could not auto-copy. Select the summary text and copy manually.");
      }
    } catch {
      setAlert("No se pudo copiar automáticamente. Selecciona el texto del resumen y copia manualmente. / Could not auto-copy. Select the summary text and copy manually.");
    }
  });

  // Init
  toggleExpYears();
  notesCounter.textContent = "0/400";
  updateSummary();
})();
