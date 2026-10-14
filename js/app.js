/* ============================================================
   GLOBAL POLO DASHBOARD — Render layer
   Reads window.POLO_DATA (see data.js) and paints the page.
   ============================================================ */

(function () {
  "use strict";

  const D = window.POLO_DATA;
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));

  /* ---------- Meta / hero ---------- */
  function renderMeta() {
    $("#updated").textContent = D.meta.updated;
    $("#edition").textContent = D.meta.edition;
    $("#srcCount").textContent = D.sources.length;

    const s = $("#stats");
    D.meta.stats.forEach((st) => {
      const n = el("div", "stat");
      n.appendChild(el("div", "stat-n", esc(st.n)));
      n.appendChild(el("div", "stat-l", esc(st.l)));
      s.appendChild(n);
    });
  }

  /* ---------- Triple Crown tracker ---------- */
  function renderCrown() {
    const wrap = $("#crown");
    D.crown.legs.forEach((leg, i) => {
      const n = el("div", "leg " + leg.state);
      n.appendChild(el("div", "leg-n", `Leg ${i + 1} of ${D.crown.legs.length}`));
      n.appendChild(el("h3", null, esc(leg.name)));
      n.appendChild(el("div", "leg-date", esc(leg.dates)));
      n.appendChild(el("span", "leg-status", esc(leg.statusLabel)));

      if (leg.champion) {
        const c = el("div", "champ");
        c.appendChild(el("span", "label", "Champion"));
        c.appendChild(el("span", "name", esc(leg.champion)));
        n.appendChild(c);
      }
      if (leg.scoreline) {
        const sc = el("div", "score");
        leg.scoreline.forEach((r) => {
          const row = el("div", "score-row" + (r.win ? " win" : ""));
          row.appendChild(el("span", "t", esc(r.team)));
          row.appendChild(el("span", "v", esc(r.goals)));
          sc.appendChild(row);
        });
        n.appendChild(sc);
      }
      if (leg.note) n.appendChild(el("div", "leg-note", esc(leg.note)));
      if (leg.source) {
        const f = el("div", "card-foot");
        const a = el("a", "src", esc(leg.source.name));
        a.href = leg.source.url; a.target = "_blank"; a.rel = "noopener";
        f.appendChild(a);
        n.appendChild(f);
      }
      wrap.appendChild(n);
    });
  }

  /* ---------- Region filter + story cards ---------- */
  let activeRegion = "all";

  function renderFilters() {
    const wrap = $("#filters");
    const regions = [{ id: "all", label: "All regions" }].concat(D.regions);
    regions.forEach((r) => {
      const c = el("button", "chip" + (r.id === "all" ? " active" : ""), esc(r.label));
      c.dataset.region = r.id;
      c.addEventListener("click", () => {
        activeRegion = r.id;
        wrap.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
        c.classList.add("active");
        paintStories();
      });
      wrap.appendChild(c);
    });
  }

  function storyCard(s) {
    const card = el("article", "card");
    card.style.setProperty("--accent", s.accent || "var(--turf)");

    const top = el("div", "card-top");
    top.appendChild(el("span", "tag region", esc(s.regionLabel)));
    if (s.kind) top.appendChild(el("span", "tag " + (s.kindClass || ""), esc(s.kind)));
    top.appendChild(el("span", "card-date", esc(s.date)));
    card.appendChild(top);

    card.appendChild(el("h3", null, esc(s.title)));
    if (s.body) card.appendChild(el("p", null, esc(s.body)));

    if (s.score) {
      const sc = el("div", "score");
      s.score.forEach((r) => {
        const row = el("div", "score-row" + (r.win ? " win" : ""));
        row.appendChild(el("span", "t", esc(r.team)));
        row.appendChild(el("span", "v", esc(r.goals)));
        sc.appendChild(row);
      });
      card.appendChild(sc);
    }

    const foot = el("div", "card-foot");
    (s.sources || []).forEach((src) => {
      const a = el("a", "src", esc(src.name));
      a.href = src.url; a.target = "_blank"; a.rel = "noopener";
      foot.appendChild(a);
    });
    card.appendChild(foot);
    return card;
  }

  function paintStories() {
    const wrap = $("#stories");
    wrap.innerHTML = "";
    const list = D.stories.filter(
      (s) => activeRegion === "all" || s.region === activeRegion
    );
    if (!list.length) {
      wrap.appendChild(
        el("div", "note", "No stories filed for this region in the current edition.")
      );
      return;
    }
    list.forEach((s) => wrap.appendChild(storyCard(s)));
    $("#storyCount").textContent = list.length;
  }

  /* ---------- Results table ---------- */
  function renderResults() {
    const body = $("#resultsBody");
    D.results.forEach((r) => {
      const tr = el("tr");
      tr.appendChild(el("td", "when", esc(r.date)));
      tr.appendChild(el("td", null, `<strong>${esc(r.event)}</strong><br><span style="color:var(--txt-3);font-size:12px">${esc(r.region)}</span>`));
      tr.appendChild(el("td", null, `<strong style="color:var(--brass-soft)">${esc(r.winner)}</strong>`));
      tr.appendChild(el("td", "num", esc(r.score)));
      tr.appendChild(el("td", null, esc(r.runnerUp)));
      const srcTd = el("td");
      (r.sources || []).forEach((s) => {
        const a = el("a", "src", esc(s.name));
        a.href = s.url; a.target = "_blank"; a.rel = "noopener";
        a.style.display = "block";
        srcTd.appendChild(a);
      });
      tr.appendChild(srcTd);
      body.appendChild(tr);
    });
  }

  /* ---------- Calendar ---------- */
  function renderCalendar() {
    const wrap = $("#calendar");
    D.calendar.forEach((c) => {
      const n = el("div", "cal-item");
      n.appendChild(el("div", "cal-when", esc(c.when)));
      const b = el("div", "cal-body");
      b.appendChild(el("h4", null, esc(c.title)));
      b.appendChild(el("p", null, esc(c.detail)));
      n.appendChild(b);
      n.appendChild(el("div", "cal-where", esc(c.where)));
      wrap.appendChild(n);
    });
  }

  /* ---------- Sources ---------- */
  function renderSources() {
    const wrap = $("#sources");
    D.sources.forEach((s) => {
      const n = el("div", "srccard");
      const top = el("div", "srccard-top");
      top.appendChild(el("div", "srccard-ico", esc(s.initials)));
      const t = el("div");
      t.appendChild(el("h4", null, esc(s.name)));
      t.appendChild(el("div", "kind", esc(s.kind)));
      top.appendChild(t);
      n.appendChild(top);
      n.appendChild(el("p", null, esc(s.what)));

      const links = el("div", "srclinks");
      (s.links || []).forEach((l) => {
        const a = el("a", "srclink", esc(l.label));
        a.href = l.url; a.target = "_blank"; a.rel = "noopener";
        links.appendChild(a);
      });
      n.appendChild(links);
      wrap.appendChild(n);
    });
  }

  /* ---------- Watch ---------- */
  function renderWatch() {
    const wrap = $("#watch");
    D.watch.forEach((w) => {
      const n = el("div", "card");
      n.style.setProperty("--accent", "var(--sky)");
      const top = el("div", "card-top");
      top.appendChild(el("span", "tag", esc(w.region)));
      n.appendChild(top);
      n.appendChild(el("h3", null, esc(w.name)));
      n.appendChild(el("p", null, esc(w.detail)));
      const foot = el("div", "card-foot");
      const a = el("a", "src", esc(w.linkLabel || "Open"));
      a.href = w.url; a.target = "_blank"; a.rel = "noopener";
      foot.appendChild(a);
      n.appendChild(foot);
      wrap.appendChild(n);
    });
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderMeta();
    renderCrown();
    renderFilters();
    paintStories();
    renderResults();
    renderCalendar();
    renderWatch();
    renderSources();
  });
})();
