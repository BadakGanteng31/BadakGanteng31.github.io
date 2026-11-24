(() => {
  const root = document.documentElement;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const lang = () => (root.lang === "en" ? "en" : "id");
  const decode = s => String(s).replace(/&amp;/g, "&");
  const t = k => decode((lang() === "en" ? TEKS_EN : TEKS_ID_JS)[k] || "");

  /* ---------- bahasa ---------- */
  const textEls = [...document.querySelectorAll("[data-i18n]")].map(el => ({ el, key: el.dataset.i18n, id: el.innerHTML }));
  const attrEls = [];
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    el.dataset.i18nAttr.split(";").forEach(pair => {
      const [attr, key] = pair.split(":");
      attrEls.push({ el, attr, key, id: el.getAttribute(attr) });
    });
  });

  function applyLang() {
    const en = lang() === "en";
    textEls.forEach(({ el, key, id }) => { el.innerHTML = en && TEKS_EN[key] != null ? TEKS_EN[key] : id; });
    attrEls.forEach(({ el, attr, key, id }) => { el.setAttribute(attr, en && TEKS_EN[key] != null ? decode(TEKS_EN[key]) : id); });
    document.querySelectorAll(".lang-toggle [data-lang]").forEach(s => s.setAttribute("aria-current", s.dataset.lang === lang()));
    updateCounts();
  }

  document.querySelector(".lang-toggle").addEventListener("click", () => {
    root.lang = lang() === "en" ? "id" : "en";
    store.set("lang", root.lang);
    applyLang();
    restartTyper();
    if (dlg.open && current) current();
  });

  /* ---------- efek ketik ---------- */
  const typer = document.querySelector(".typer-text");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  let tw = 0, tc = 0, deleting = false, tTimer = null;
  function words() { return KATA_KETIK[lang()]; }
  function typeStep() {
    const w = words()[tw % words().length];
    if (reduce.matches) {
      typer.textContent = w; tw++; tTimer = setTimeout(typeStep, 2600); return;
    }
    if (!deleting) {
      tc++; typer.textContent = w.slice(0, tc);
      if (tc >= w.length) { deleting = true; tTimer = setTimeout(typeStep, 1700); return; }
      tTimer = setTimeout(typeStep, 70 + Math.random() * 50);
    } else {
      tc--; typer.textContent = w.slice(0, tc);
      if (tc <= 0) { deleting = false; tw++; tTimer = setTimeout(typeStep, 350); return; }
      tTimer = setTimeout(typeStep, 35);
    }
  }
  function restartTyper() { clearTimeout(tTimer); tw = 0; tc = 0; deleting = false; typer.textContent = ""; typeStep(); }
  restartTyper();

  /* ---------- filter pengalaman ---------- */
  const fButtons = document.querySelectorAll(".filter [data-filter]");
  const expItems = document.querySelectorAll("#exp-list li");
  fButtons.forEach(b => {
    const f = b.dataset.filter;
    b.querySelector(".fc").textContent = f === "all" ? expItems.length : [...expItems].filter(li => li.dataset.cat === f).length;
    b.addEventListener("click", () => {
      fButtons.forEach(x => x.setAttribute("aria-pressed", x === b));
      expItems.forEach(li => {
        const show = f === "all" || li.dataset.cat === f;
        li.hidden = !show;
        if (show) { li.classList.add("in"); li.classList.remove("pop"); void li.offsetWidth; li.classList.add("pop"); }
      });
    });
  });

  /* ---------- kartu ID 3D + profil singkat ---------- */
  const idcard = document.querySelector(".idcard");
  const abDlg = document.getElementById("about-dlg");
  let abRaf = 0, abTo = 0;
  function openAbout() {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const num = document.getElementById("ab-num"), fill = document.getElementById("ab-fill"), msg = document.getElementById("ab-msg");
    abDlg.classList.remove("ready");
    cancelAnimationFrame(abRaf); clearTimeout(abTo);
    num.textContent = "0"; fill.style.width = "0";
    if (!abDlg.open) abDlg.showModal();
    if (reduce) { abDlg.classList.add("ready"); return; }
    const msgs = ["ab.load1", "ab.load2", "ab.load3", "ab.load4"], dur = 1500;
    let start = null;
    const step = ts => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / dur, 1), v = Math.round((1 - Math.pow(1 - p, 3)) * 100);
      num.textContent = v; fill.style.width = v + "%";
      msg.textContent = t(msgs[Math.min(Math.floor(v / 34), 3)]);
      if (p < 1) abRaf = requestAnimationFrame(step);
      else abTo = setTimeout(() => abDlg.classList.add("ready"), 280);
    };
    abRaf = requestAnimationFrame(step);
  }
  if (idcard && abDlg) {
    const inner = idcard.querySelector(".idcard-inner");
    idcard.addEventListener("click", () => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) { openAbout(); return; }
      idcard.classList.add("spin");
      setTimeout(() => { idcard.classList.remove("spin"); openAbout(); }, 650);
    });
    abDlg.querySelector(".ab-close").onclick = () => abDlg.close();
    abDlg.addEventListener("click", e => { if (e.target === abDlg) abDlg.close(); });
    abDlg.querySelector(".ab-more").addEventListener("click", () => abDlg.close());
    abDlg.addEventListener("close", () => { cancelAnimationFrame(abRaf); clearTimeout(abTo); });
    if (matchMedia("(hover: hover) and (pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      idcard.addEventListener("pointermove", e => {
        const r = idcard.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        idcard.classList.add("tilting");
        inner.style.setProperty("--ry", (x * 22).toFixed(2) + "deg");
        inner.style.setProperty("--rx", (-y * 16).toFixed(2) + "deg");
        idcard.querySelectorAll(".id-face").forEach(f => f.style.setProperty("--shine", (x * 160).toFixed(0) + "%"));
      });
      idcard.addEventListener("pointerleave", () => {
        idcard.classList.remove("tilting");
        inner.style.removeProperty("--ry"); inner.style.removeProperty("--rx");
        idcard.querySelectorAll(".id-face").forEach(f => f.style.removeProperty("--shine"));
      });
    }
  }

  /* ---------- tema ---------- */
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    store.set("theme", root.dataset.theme);
  });

  /* ---------- tombol CV: muncul hanya kalau cv.pdf ada ---------- */
  const cvBtn = document.getElementById("cv-btn");
  if (cvBtn && location.protocol.startsWith("http")) {
    fetch(cvBtn.getAttribute("href"), { method: "HEAD" })
      .then(r => { if (r.ok) cvBtn.hidden = false; })
      .catch(() => {});
  }

  /* ---------- progres scroll & tombol kembali ke atas ---------- */
  const bar = document.querySelector(".scroll-progress span");
  const toTop = document.querySelector(".to-top");
  let ticking = false;
  function onScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    const y = scrollY;
    bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0) + ")";
    toTop.classList.toggle("show", y > innerHeight * 0.9);
    ticking = false;
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();

  /* ---------- animasi muncul saat scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(el => {
      const sibs = [...el.parentElement.children].filter(c => c.classList.contains("reveal"));
      el.style.transitionDelay = Math.min(sibs.indexOf(el), 5) * 70 + "ms";
      io.observe(el);
    });
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }

  /* ---------- jendela galeri & detail ---------- */
  const dlg = document.getElementById("gallery");
  const body = document.getElementById("g-body");
  const kicker = document.getElementById("g-kicker");
  const title = document.getElementById("g-title");
  let items = [], idx = 0, current = null;

  function el(tag, props = {}, kids = []) {
    const e = Object.assign(document.createElement(tag), props);
    kids.forEach(k => e.append(k));
    return e;
  }
  const cap = f => (lang() === "en" && f.en) || f.caption || "";

  function updateCounts() {
    document.querySelectorAll("[data-doc]").forEach(btn => {
      const d = DOKUMENTASI[btn.dataset.doc], c = btn.querySelector(".count");
      if (d && c) c.textContent = d.foto.length ? "(" + d.foto.length + ")" : "";
      if (d && btn.classList.contains("doc-btn")) btn.hidden = !d.foto.length && !d.deskripsi;
    });
  }

  function renderStage(list, lightBg) {
    items = list; idx = 0;
    const img = el("img", { id: "g-img", alt: "" });
    const stage = el("div", { className: "g-stage" + (lightBg ? " light-bg" : "") }, [img]);
    if (items.length > 1) {
      const prev = el("button", { className: "g-nav g-prev", type: "button", textContent: "←" });
      const next = el("button", { className: "g-nav g-next", type: "button", textContent: "→" });
      prev.setAttribute("aria-label", t("js.sebelum"));
      next.setAttribute("aria-label", t("js.berikut"));
      prev.onclick = () => show(idx - 1);
      next.onclick = () => show(idx + 1);
      stage.append(prev, next);
      let x0 = null;
      stage.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
      stage.addEventListener("touchend", e => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) show(idx + (dx < 0 ? 1 : -1));
        x0 = null;
      });
    }
    const frag = [stage, el("div", { className: "g-meta" }, [el("span", { id: "g-cap" }), el("span", { className: "mono", id: "g-count" })])];
    if (items.length > 1) {
      frag.push(el("div", { className: "g-thumbs", id: "g-thumbs" }, items.map((f, i) => {
        const b = el("button", { type: "button" }, [el("img", { src: f.src, alt: "", loading: "lazy" })]);
        b.setAttribute("aria-label", t("js.fotoKe") + " " + (i + 1));
        b.onclick = () => show(i);
        return b;
      })));
    }
    return frag;
  }

  function show(i) {
    if (!items.length) return;
    idx = (i + items.length) % items.length;
    const f = items[idx];
    const img = document.getElementById("g-img");
    img.src = f.src;
    img.alt = cap(f) || t("js.fotoKe") + " " + (idx + 1);
    document.getElementById("g-cap").textContent = cap(f);
    document.getElementById("g-count").textContent = items.length > 1 ? (idx + 1) + " / " + items.length : "";
    document.querySelectorAll("#g-thumbs button").forEach((b, j) => b.setAttribute("aria-current", j === idx));
  }

  function openDoc(key) {
    const d = DOKUMENTASI[key];
    if (!d) return;
    const L = (lang() === "en" && d.en) || {};
    kicker.textContent = L.acara || d.acara;
    title.textContent = L.judul || d.judul;
    body.replaceChildren();
    const desc = L.deskripsi || d.deskripsi;
    if (desc) body.append(el("p", { className: "g-desc", textContent: desc }));
    if (d.foto.length) {
      body.append(...renderStage(d.foto, false));
      show(0);
    } else {
      items = [];
      body.append(el("div", { className: "g-stage g-empty" }, [el("p", { className: "mono", textContent: t("js.kosong") })]));
    }
    if (d.link.length) {
      body.append(el("div", { className: "g-links" }, d.link.map(l =>
        el("a", { className: "link", href: l.url, target: "_blank", rel: "noopener", textContent: l.teks + " →" }))));
    }
    current = () => openDoc(key);
    if (!dlg.open) dlg.showModal();
  }

  function openProject(key) {
    const P = PROYEK[key];
    if (!P) return;
    const c = P[lang()];
    kicker.textContent = c.kicker;
    title.textContent = c.judul;
    body.replaceChildren();
    body.append(el("p", { className: "g-desc", textContent: c.ringkas }));
    if (c.stats.length) {
      body.append(el("div", { className: "d-stats" }, c.stats.map(s =>
        el("div", { className: "d-stat" }, [el("b", { textContent: s.v }), el("span", { textContent: s.l })]))));
    }
    c.bagian.forEach(b => {
      const content = b.list ? el("ul", {}, b.list.map(x => el("li", { textContent: x }))) : el("p", { textContent: b.p });
      body.append(el("div", { className: "d-sec" }, [el("h4", { textContent: b.h }), content]));
    });
    if (P.gambar.length) {
      const figs = el("div", { className: "d-figs" }, [el("h4", { className: "mono", textContent: t("js.grafik"), style: "margin:0 0 12px;color:var(--ember);font-weight:500;text-transform:uppercase" })]);
      figs.append(...renderStage(P.gambar, true));
      body.append(figs);
      show(0);
    } else {
      items = [];
    }
    if (c.catatan) body.append(el("p", { className: "d-note", textContent: c.catatan }));
    body.append(el("div", { className: "g-links" }, [P.repo
      ? el("a", { className: "link", href: P.repo, target: "_blank", rel: "noopener", textContent: t("js.repo") + " →" })
      : el("span", { className: "repo-private mono", textContent: "🔒 " + t("js.privat") })]));
    current = () => openProject(key);
    if (!dlg.open) dlg.showModal();
    dlg.scrollTop = 0;
  }

  document.querySelectorAll("[data-doc]").forEach(btn => btn.addEventListener("click", () => openDoc(btn.dataset.doc)));
  document.querySelectorAll("[data-project]").forEach(btn => btn.addEventListener("click", () => openProject(btn.dataset.project)));

  dlg.querySelector(".g-close").onclick = () => dlg.close();
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", () => { current = null; });
  dlg.addEventListener("keydown", e => {
    if (items.length > 1 && e.key === "ArrowLeft") show(idx - 1);
    if (items.length > 1 && e.key === "ArrowRight") show(idx + 1);
  });

  applyLang();
})();
