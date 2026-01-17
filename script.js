(() => {
  "use strict";

  // ========= CONFIG =========
  const HIRING_EMAIL = "sunpcorporation@gmail.com";

  // Put your real payment link here (Stripe/PayPal/etc).
  // Example: "https://buy.stripe.com/xxxxx"
  const HOUSING_PAYMENT_URL = "https://example.com/payment";

  const ROLE_ES = "Asociado de Almacén — Paneles Solares";
  const ROLE_EN = "Warehouse Associate — Solar Panels";
  const LOCATION = "Nashville, TN";

  // ========= i18n =========
  const I18N = {
    es: {
      skip: "Saltar al formulario",
      nowHiring: "Contratación activa",
      roleLabel: "Puesto",
      roleValue: ROLE_ES,
      heroTitle: "Aplica para trabajar en nuestro warehouse de paneles solares",
      heroSubtitle: "Trabajo físico, estable y con oportunidad de crecimiento.",
      locationLabel: "Ubicación",
      scheduleLabel: "Horario",
      scheduleValue: "Tiempo completo",
      scheduleSub: "Turnos disponibles",
      payLabel: "Pago",
      payValue: "Según experiencia",
      startLabel: "Inicio",
      startValue: "Inmediato",
      ctaApply: "Aplicar ahora",
      ctaReq: "Ver requisitos",
      trust1: "Proceso rápido",
      trust2: "Diseño móvil",
      trust3: "Sin cuentas",

      snapshotTitle: "Resumen del puesto",
      snap1: "Warehouse Associate",
      snap1b: "Warehouse Worker",
      snap2: "Materiales: paneles solares",
      snap2b: "Manejo de paneles solares y materiales relacionados",
      snap3: "Trabajo físico y en equipo",
      snap3b: "Trabajo físico con un equipo",
      snap4: "Seguridad primero",
      snap4b: "Ambiente enfocado en seguridad",
      hiringEmailLabel: "Email de contratación",
      contactMini: "Recibirás respuesta si tu perfil encaja.",

      benefitsTitle: "Beneficios",
      benefitsSub: "Lo que puedes esperar desde el primer día.",
      b1: "Trabajo estable",
      b2: "Posibilidad de horas extra",
      b3: "Entrenamiento pagado",
      b4: "Ambiente seguro",
      b5: "Oportunidad de crecimiento",

      reqTitle: "Requisitos",
      reqSub: "Para aplicar, necesitas cumplir lo siguiente.",
      r1: "Tener 18 años o más",
      r2: "Poder levantar hasta 50 lb",
      r3: "Estar de pie y moverse todo el turno",
      r4: "Puntualidad y responsabilidad",
      r5: "Experiencia en warehouse es un plus",

      respTitle: "Responsabilidades",
      respSub: "Tareas típicas durante el turno.",
      p1: "Cargar y descargar mercancía",
      p1b: "Movimiento seguro de materiales siguiendo procedimientos del almacén.",
      p2: "Preparar pedidos",
      p2b: "Seleccionar, empacar y etiquetar pedidos con precisión.",
      p3: "Organizar inventario",
      p3b: "Mantener ubicaciones claras y apoyar conteos básicos.",
      p4: "Mantener el área limpia y segura",
      p4b: "Orden, limpieza y enfoque en seguridad en todo momento.",

      formTitle: "Formulario de aplicación",
      formSub: "Completa esto para generar el email listo para enviar.",

      fName: "Nombre y Apellido",
      fNameH: "Como aparece en tu identificación.",
      fPhone: "Teléfono",
      fPhoneH: "Incluye código de área.",
      fEmail: "Email (opcional)",
      fEmailH: "Si prefieres contacto por email.",
      fAge: "Edad",
      fAgeH: "Debes tener 18+.",
      fCity: "Ciudad",
      fTransport: "¿Tienes transporte propio?",
      fLift: "¿Puedes levantar 50 lb?",
      fLiftH: "Requisito del puesto.",
      fWhExp: "¿Experiencia en warehouse?",
      fYears: "Años de experiencia (0–20)",
      fShift: "Turno",
      fWeekends: "¿Puedes trabajar fines de semana?",
      fStart: "Inicio",
      fNotes: "Notas (opcional)",
      notesH: "Máximo 400 caracteres.",

      optChoose: "Selecciona",
      opt18: "18+ (Cumplo)",
      optU18: "Menos de 18",
      optYes: "Sí",
      optNo: "No",

      shiftMorning: "Mañana",
      shiftEvening: "Tarde",
      shiftNight: "Noche",
      shiftAny: "Cualquiera",

      startNow: "Inmediato",
      start1w: "1 semana",
      start2w: "2 semanas",
      start1m: "1 mes",

      btnEmail: "Generar Email",
      btnCopy: "Copiar solicitud",
      btnReset: "Limpiar",
      requiredNote: "* Campos obligatorios.",

      sumTitle: "Resumen de tu solicitud",
      sumSub: "Revisa antes de enviar.",
      tipTitle: "Tip",
      tipText: "Si “Generar Email” no abre tu app, usa “Copiar solicitud” y pégala en un email.",

      payTitle: "Siguiente paso: pagar 1ª semana de hospedaje",
      payText: "Se habilita cuando la solicitud está completa y cumples requisitos (18+ y 50 lb).",
      payBtn: "Continuar a pago",
      payNote: "Configura la URL de pago en script.js.",

      privacy: "Tu información solo se usará para contactarte sobre esta vacante.",

      errMissing: "Faltan campos obligatorios. Revisa el formulario.",
      errMissingListPrefix: "Faltan: ",
      errHard: "Este puesto requiere cumplir estos requisitos: 18+ y poder levantar 50 lb.",
      copied: "Copiado",
      copyFail: "No se pudo copiar automáticamente. Copia el resumen manualmente.",
      summaryEmpty: "Completa el formulario para ver el resumen."
    },

    en: {
      skip: "Skip to application",
      nowHiring: "Now hiring",
      roleLabel: "Role",
      roleValue: ROLE_EN,
      heroTitle: "Apply to work at our solar panel warehouse",
      heroSubtitle: "Physical, stable work with opportunity to grow.",
      locationLabel: "Location",
      scheduleLabel: "Schedule",
      scheduleValue: "Full-time",
      scheduleSub: "Shifts available",
      payLabel: "Pay",
      payValue: "Based on experience",
      startLabel: "Start",
      startValue: "Immediate start",
      ctaApply: "Apply now",
      ctaReq: "View requirements",
      trust1: "Fast process",
      trust2: "Mobile-first",
      trust3: "No accounts",

      snapshotTitle: "Role snapshot",
      snap1: "Warehouse Associate",
      snap1b: "Warehouse Worker",
      snap2: "Materials: solar panels",
      snap2b: "Handling solar panels and related materials",
      snap3: "Physical, team-based work",
      snap3b: "Physical work with a team",
      snap4: "Safety-first",
      snap4b: "Safety-first environment",
      hiringEmailLabel: "Hiring email",
      contactMini: "We’ll respond if your profile matches.",

      benefitsTitle: "Benefits",
      benefitsSub: "What you can expect from day one.",
      b1: "Stable work",
      b2: "Overtime available",
      b3: "Paid training",
      b4: "Safe work environment",
      b5: "Growth opportunities",

      reqTitle: "Requirements",
      reqSub: "To apply, you must meet the following.",
      r1: "Must be 18+",
      r2: "Able to lift up to 50 lb",
      r3: "Stand and move full shift",
      r4: "Punctual and reliable",
      r5: "Warehouse experience is a plus",

      respTitle: "Responsibilities",
      respSub: "Typical tasks during the shift.",
      p1: "Load & unload materials",
      p1b: "Handle materials safely and follow warehouse procedures.",
      p2: "Order picking & packing",
      p2b: "Pick, pack, and label orders accurately.",
      p3: "Inventory organization",
      p3b: "Keep locations organized and support basic counts.",
      p4: "Keep area clean & safe",
      p4b: "Housekeeping and safety focus at all times.",

      formTitle: "Application form",
      formSub: "Fill this out to generate an email ready to send.",

      fName: "Full Name",
      fNameH: "As shown on your ID.",
      fPhone: "Phone number",
      fPhoneH: "Include area code.",
      fEmail: "Email (optional)",
      fEmailH: "If you prefer email contact.",
      fAge: "Age",
      fAgeH: "You must be 18+.",
      fCity: "City",
      fTransport: "Do you have transportation?",
      fLift: "Can you lift 50 lb?",
      fLiftH: "Required for the role.",
      fWhExp: "Warehouse experience?",
      fYears: "Years of experience (0–20)",
      fShift: "Shift",
      fWeekends: "Can you work weekends?",
      fStart: "Start availability",
      fNotes: "Notes (optional)",
      notesH: "Max 400 characters.",

      optChoose: "Choose",
      opt18: "18+ (I meet this)",
      optU18: "Under 18",
      optYes: "Yes",
      optNo: "No",

      shiftMorning: "Morning",
      shiftEvening: "Evening",
      shiftNight: "Night",
      shiftAny: "Any",

      startNow: "Immediate",
      start1w: "1 week",
      start2w: "2 weeks",
      start1m: "1 month",

      btnEmail: "Generate Email",
      btnCopy: "Copy application",
      btnReset: "Reset",
      requiredNote: "* Required fields.",

      sumTitle: "Application summary",
      sumSub: "Review before sending.",
      tipTitle: "Tip",
      tipText: "If “Generate Email” doesn’t open your mail app, use “Copy application” and paste it into an email.",

      payTitle: "Next step: pay housing (week 1)",
      payText: "Unlocks when your application is complete and you meet requirements (18+ and 50 lb).",
      payBtn: "Continue to payment",
      payNote: "Set the payment URL in script.js.",

      privacy: "Your information will only be used to contact you about this position.",

      errMissing: "Required fields are missing. Please review the form.",
      errMissingListPrefix: "Missing: ",
      errHard: "This role requires: 18+ and able to lift 50 lb.",
      copied: "Copied",
      copyFail: "Could not auto-copy. Please copy the summary manually.",
      summaryEmpty: "Fill out the form to see the summary."
    }
  };

  const $ = (id) => document.getElementById(id);

  const form = $("appForm");
  const alertBox = $("formAlert");
  const summaryEl = $("summaryText");
  const notesCounter = $("notesCounter");
  const expYearsWrap = $("expYearsWrap");
  const btnGenerate = $("btnGenerate");
  const btnCopy = $("btnCopy");
  const btnHousing = $("btnHousing");
  const housingNote = $("housingNote");
  const yearEl = $("year");

  const fields = {
    fullName: $("fullName"),
    phone: $("phone"),
    email: $("email"),
    age: $("age"),
    city: $("city"),
    transport: $("transport"),
    lift: $("lift"),
    whExp: $("whExp"),
    expYears: $("expYears"),
    shift: $("shift"),
    weekends: $("weekends"),
    start: $("start"),
    notes: $("notes")
  };

  yearEl.textContent = String(new Date().getFullYear());

  function setAlert(msg) {
    alertBox.hidden = !msg;
    alertBox.textContent = msg || "";
  }

  function clean(s){ return String(s || "").replace(/\s+/g, " ").trim(); }

  function isValidEmail(v){
    const s = clean(v);
    if (!s) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  }

  function toggleExpYears(){
    const yes = fields.whExp.value === (currentLang === "es" ? "Sí" : "Yes");
    // Note: our option values are ES ("Sí"/"No") always.
    // In EN mode, labels change but values stay the same.
    const yesByValue = fields.whExp.value === "Sí";
    expYearsWrap.hidden = !yesByValue;
    if (!yesByValue) fields.expYears.value = "";
  }

  function meetsHardRequirements(){
    return fields.age.value === "18+" && fields.lift.value === "Sí";
  }

  function missingRequired(){
    const missing = [];

    if (!clean(fields.fullName.value)) missing.push(currentLang === "es" ? "Nombre" : "Full name");
    if (!clean(fields.phone.value)) missing.push(currentLang === "es" ? "Teléfono" : "Phone");
    if (!fields.age.value) missing.push(currentLang === "es" ? "Edad" : "Age");
    if (!clean(fields.city.value)) missing.push(currentLang === "es" ? "Ciudad" : "City");
    if (!fields.transport.value) missing.push(currentLang === "es" ? "Transporte" : "Transportation");
    if (!fields.lift.value) missing.push(currentLang === "es" ? "Levantar 50 lb" : "Lift 50 lb");
    if (!fields.whExp.value) missing.push(currentLang === "es" ? "Experiencia" : "Experience");
    if (!fields.shift.value) missing.push(currentLang === "es" ? "Turno" : "Shift");
    if (!fields.weekends.value) missing.push(currentLang === "es" ? "Fines de semana" : "Weekends");
    if (!fields.start.value) missing.push(currentLang === "es" ? "Inicio" : "Start");

    if (fields.whExp.value === "Sí") {
      const v = clean(fields.expYears.value);
      if (!v) missing.push(currentLang === "es" ? "Años de experiencia" : "Years of experience");
      else {
        const n = Number(v);
        if (!Number.isFinite(n) || n < 0 || n > 20) {
          missing.push(currentLang === "es" ? "Años (0–20)" : "Years (0–20)");
        }
      }
    }

    if (!isValidEmail(fields.email.value)) missing.push(currentLang === "es" ? "Email válido" : "Valid email");

    return missing;
  }

  function labelYesNo(value){
    if (!value) return "—";
    if (currentLang === "es") return value;           // "Sí" / "No"
    return value === "Sí" ? "Yes" : "No";
  }

  function labelShift(v){
    if (!v) return "—";
    if (currentLang === "es") return v;
    const map = { "Mañana":"Morning", "Tarde":"Evening", "Noche":"Night", "Cualquiera":"Any" };
    return map[v] || v;
  }

  function labelStart(v){
    if (!v) return "—";
    if (currentLang === "es") return v;
    const map = { "Inmediato":"Immediate", "1 semana":"1 week", "2 semanas":"2 weeks", "1 mes":"1 month" };
    return map[v] || v;
  }

  function buildSummary(){
    const name = clean(fields.fullName.value) || "—";
    const phone = clean(fields.phone.value) || "—";
    const email = clean(fields.email.value) || "—";
    const city = clean(fields.city.value) || "—";
    const age = fields.age.value || "—";
    const transport = labelYesNo(fields.transport.value);
    const lift = labelYesNo(fields.lift.value);
    const whExp = labelYesNo(fields.whExp.value);
    const years = (fields.whExp.value === "Sí") ? (clean(fields.expYears.value) || "—") : "—";
    const shift = labelShift(fields.shift.value);
    const weekends = labelYesNo(fields.weekends.value);
    const start = labelStart(fields.start.value);
    const notes = clean(fields.notes.value) || "—";

    if (currentLang === "es") {
      return [
        "SOLICITUD",
        `Puesto: ${ROLE_ES}`,
        `Ubicación: ${LOCATION}`,
        "",
        `Nombre: ${name}`,
        `Teléfono: ${phone}`,
        `Email: ${email}`,
        `Edad: ${age}`,
        `Ciudad: ${city}`,
        "",
        `Transporte propio: ${transport}`,
        `Puede levantar 50 lb: ${lift}`,
        "",
        `Experiencia en warehouse: ${whExp}`,
        `Años de experiencia: ${years}`,
        "",
        `Turno: ${shift}`,
        `Fines de semana: ${weekends}`,
        `Inicio: ${start}`,
        "",
        `Notas: ${notes}`
      ].join("\n");
    }

    return [
      "APPLICATION",
      `Role: ${ROLE_EN}`,
      `Location: ${LOCATION}`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Age: ${age}`,
      `City: ${city}`,
      "",
      `Transportation: ${transport}`,
      `Can lift 50 lb: ${lift}`,
      "",
      `Warehouse experience: ${whExp}`,
      `Years of experience: ${years}`,
      "",
      `Shift: ${shift}`,
      `Weekends: ${weekends}`,
      `Start: ${start}`,
      "",
      `Notes: ${notes}`
    ].join("\n");
  }

  function updateSummary(){
    const any = Object.values(fields).some(el => clean(el.value));
    summaryEl.textContent = any ? buildSummary() : I18N[currentLang].summaryEmpty;
  }

  function encodeMailto(s){
    return encodeURIComponent(s).replace(/%20/g, "+");
  }

  function openMailto(summary){
    const subject = currentLang === "es"
      ? `Solicitud - Warehouse - ${LOCATION} - ${clean(fields.fullName.value) || "Candidato"}`
      : `Application - Warehouse - ${LOCATION} - ${clean(fields.fullName.value) || "Candidate"}`;

    const mailto = `mailto:${HIRING_EMAIL}?subject=${encodeMailto(subject)}&body=${encodeMailto(summary)}`;
    window.location.href = mailto;
  }

  async function copyText(text){
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }

  function setHousingState(enabled){
    if (enabled) {
      btnHousing.href = HOUSING_PAYMENT_URL;
      btnHousing.setAttribute("aria-disabled", "false");
      housingNote.textContent = "";
    } else {
      btnHousing.href = "#";
      btnHousing.setAttribute("aria-disabled", "true");
      housingNote.textContent = I18N[currentLang].payNote;
    }
  }

  function validateBeforeActions(){
    setAlert("");

    const missing = missingRequired();
    if (missing.length) {
      const msg = `${I18N[currentLang].errMissing}\n${I18N[currentLang].errMissingListPrefix}${missing.join(", ")}.`;
      setAlert(msg);
      return false;
    }

    if (!meetsHardRequirements()) {
      setAlert(I18N[currentLang].errHard);
      return false;
    }
    return true;
  }

  // ===== Language switching =====
  let currentLang = localStorage.getItem("lang") || "es";

  function applyLang(lang){
    currentLang = (lang === "en") ? "en" : "es";
    localStorage.setItem("lang", currentLang);

    document.documentElement.lang = currentLang;

    // toggle button states
    document.querySelectorAll(".lang-btn").forEach(btn => {
      const pressed = btn.dataset.lang === currentLang;
      btn.setAttribute("aria-pressed", pressed ? "true" : "false");
    });

    // Swap all i18n strings
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = I18N[currentLang][key];
      if (typeof val === "string") el.textContent = val;
    });

    // Update option labels (values remain ES for logic consistency)
    const yesText = I18N[currentLang].optYes;
    const noText = I18N[currentLang].optNo;
    document.querySelectorAll("option[value='Sí']").forEach(o => o.textContent = yesText);
    document.querySelectorAll("option[value='No']").forEach(o => o.textContent = noText);

    // Shift & start labels
    const shiftMap = {
      "Mañana": "shiftMorning",
      "Tarde": "shiftEvening",
      "Noche": "shiftNight",
      "Cualquiera": "shiftAny"
    };
    document.querySelectorAll("#shift option").forEach(o => {
      const v = o.getAttribute("value");
      if (shiftMap[v]) o.textContent = I18N[currentLang][shiftMap[v]];
    });

    const startMap = {
      "Inmediato": "startNow",
      "1 semana": "start1w",
      "2 semanas": "start2w",
      "1 mes": "start1m"
    };
    document.querySelectorAll("#start option").forEach(o => {
      const v = o.getAttribute("value");
      if (startMap[v]) o.textContent = I18N[currentLang][startMap[v]];
    });

    // age options labels
    document.querySelectorAll("#age option").forEach(o => {
      const v = o.getAttribute("value");
      if (v === "") o.textContent = I18N[currentLang].optChoose;
      if (v === "18+") o.textContent = I18N[currentLang].opt18;
      if (v === "under18") o.textContent = I18N[currentLang].optU18;
    });

    updateSummary();
    setHousingState(validateSoftForHousing());
  }

  function validateSoftForHousing(){
    // "soft" = form complete + hard requirements (same gating as actions) but without alert spam
    const missing = missingRequired();
    if (missing.length) return false;
    return meetsHardRequirements();
  }

  // ===== Events =====
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  Object.values(fields).forEach(el => {
    el.addEventListener("input", () => {
      if (el === fields.notes) notesCounter.textContent = `${fields.notes.value.length}/400`;
      updateSummary();
      setHousingState(validateSoftForHousing());
    });
    el.addEventListener("change", () => {
      if (el === fields.whExp) toggleExpYears();
      updateSummary();
      setHousingState(validateSoftForHousing());
    });
  });

  form.addEventListener("reset", () => {
    setAlert("");
    setTimeout(() => {
      notesCounter.textContent = "0/400";
      toggleExpYears();
      updateSummary();
      setHousingState(false);
    }, 0);
  });

  btnGenerate.addEventListener("click", () => {
    updateSummary();
    if (!validateBeforeActions()) return;
    openMailto(buildSummary());
  });

  btnCopy.addEventListener("click", async () => {
    updateSummary();
    if (!validateBeforeActions()) return;

    try {
      const ok = await copyText(buildSummary());
      if (!ok) throw new Error("copy failed");
      const original = btnCopy.textContent;
      btnCopy.textContent = I18N[currentLang].copied;
      btnCopy.disabled = true;
      setTimeout(() => {
        btnCopy.textContent = original;
        btnCopy.disabled = false;
      }, 1100);
    } catch {
      setAlert(I18N[currentLang].copyFail);
    }
  });

  // ===== Init =====
  notesCounter.textContent = "0/400";
  toggleExpYears();
  applyLang(currentLang);

  // Payment CTA initial state
  setHousingState(false);

  // Warn if payment URL not set
  if (!HOUSING_PAYMENT_URL || HOUSING_PAYMENT_URL.includes("example.com")) {
    // Keep note visible; button remains disabled until URL set.
    setHousingState(false);
  }
})();
