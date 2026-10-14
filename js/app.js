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

  /* ---------- Drills ---------- */
  let activeDrillCat = "all";

  function renderDrillIntro() {
    const wrap = $("#drillIntro");
    (D.drills.primer || []).forEach((f) => {
      const n = el("div", "drill-fact");
      n.appendChild(el("h4", null, esc(f.label)));
      n.appendChild(el("p", null, esc(f.text)));
      wrap.appendChild(n);
    });
    const note = $("#drillsNote");
    if (note && D.drills.note) note.innerHTML = D.drills.note;
  }

  function drillCard(d) {
    const n = el("article", "drill");
    n.style.setProperty("--accent", d.accent || "var(--turf)");

    const top = el("div", "drill-top");
    top.appendChild(el("span", "lvl " + (d.level || "all"), esc(d.levelLabel || d.level)));
    top.appendChild(el("span", "tag", esc(d.catLabel)));
    n.appendChild(top);

    n.appendChild(el("h3", null, esc(d.name)));

    const dev = el("div", "drill-develops");
    dev.appendChild(el("b", null, "Develops"));
    dev.appendChild(document.createTextNode(d.develops));
    n.appendChild(dev);

    if (d.steps && d.steps.length) {
      const ol = el("ol", "drill-steps");
      d.steps.forEach((s) => ol.appendChild(el("li", null, esc(s))));
      n.appendChild(ol);
    }

    if (d.fault) {
      const f = el("div", "fault");
      f.appendChild(el("b", null, "Common fault"));
      f.appendChild(document.createTextNode(d.fault));
      n.appendChild(f);
    }

    const foot = el("div", "card-foot");
    (d.sources || []).forEach((s) => {
      const a = el("a", "src", esc(s.name));
      a.href = s.url; a.target = "_blank"; a.rel = "noopener";
      foot.appendChild(a);
    });
    n.appendChild(foot);
    return n;
  }

  function paintDrills() {
    const wrap = $("#drills");
    wrap.innerHTML = "";
    const list = D.drills.items.filter(
      (d) => activeDrillCat === "all" || d.cat === activeDrillCat
    );
    if (!list.length) {
      wrap.appendChild(el("div", "note", "No drills in this category yet."));
      return;
    }
    list.forEach((d) => wrap.appendChild(drillCard(d)));
  }

  function renderDrillFilters() {
    const wrap = $("#drillFilters");
    const cats = [{ id: "all", label: "All drills" }].concat(D.drills.categories);
    cats.forEach((c) => {
      const b = el("button", "chip" + (c.id === "all" ? " active" : ""), esc(c.label));
      b.addEventListener("click", () => {
        activeDrillCat = c.id;
        wrap.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        paintDrills();
      });
      wrap.appendChild(b);
    });
  }

  function renderShots() {
    const body = $("#shotsBody");
    (D.drills.shots || []).forEach((s) => {
      const tr = el("tr");
      tr.appendChild(el("td", "shot-name", esc(s.shot)));
      tr.appendChild(el("td", null, esc(s.side)));
      tr.appendChild(el("td", null, esc(s.ball)));
      tr.appendChild(el("td", null, esc(s.key)));
      body.appendChild(tr);
    });
  }

  /* ---------- Forum ---------- */
  function renderForum() {
    const rules = $("#forumRules");
    (D.forum.rules || []).forEach((r) => {
      const n = el("div", "rule");
      n.appendChild(el("h4", null, esc(r.title)));
      n.appendChild(el("p", null, esc(r.text)));
      rules.appendChild(n);
    });

    const topics = $("#forumTopics");
    (D.forum.topics || []).forEach((t) => {
      const a = el("a", "topic-pill", esc(t.label));
      a.href = t.url; a.target = "_blank"; a.rel = "noopener";
      topics.appendChild(a);
    });

    mountGiscus();
  }

  function mountGiscus() {
    const cfg = D.forum.giscus;
    if (!cfg || !cfg.repoId || !cfg.categoryId) return;

    const mount = $("#giscusMount");
    const s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.async = true;
    s.crossOrigin = "anonymous";
    s.setAttribute("data-repo", cfg.repo);
    s.setAttribute("data-repo-id", cfg.repoId);
    s.setAttribute("data-category", cfg.category);
    s.setAttribute("data-category-id", cfg.categoryId);
    s.setAttribute("data-mapping", "specific");
    s.setAttribute("data-term", cfg.term || "Polo Dashboard Forum");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "top");
    s.setAttribute("data-theme", "transparent_dark");
    s.setAttribute("data-lang", "en");
    s.setAttribute("data-loading", "lazy");

    // Clear the fallback only once giscus actually renders.
    const observer = new MutationObserver(() => {
      if (mount.querySelector("iframe.giscus-frame")) {
        const fb = $("#giscusFallback");
        if (fb) fb.remove();
        observer.disconnect();
      }
    });
    observer.observe(mount, { childList: true, subtree: true });

    mount.appendChild(s);

    // If giscus has not rendered after 8s, keep the fallback and explain why.
    setTimeout(() => {
      if (!mount.querySelector("iframe.giscus-frame")) {
        const fb = $("#giscusFallback");
        if (fb) {
          fb.innerHTML =
            '<p style="margin-bottom:8px">The embedded board could not load.</p>' +
            '<p style="font-size:12.5px;color:var(--txt-3);margin-bottom:16px">' +
            "This usually means the giscus app is not yet installed on the repository.</p>";
          const a = el("a", "btn", "Open the forum on GitHub ↗");
          a.href = "https://github.com/" + cfg.repo + "/discussions";
          a.target = "_blank"; a.rel = "noopener";
          fb.appendChild(a);
        }
      }
    }, 8000);
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    // Each block is isolated so one missing data section cannot blank the page.
    const steps = [
      ["meta",     renderMeta],
      ["crown",    renderCrown],
      ["filters",  renderFilters],
      ["stories",  paintStories],
      ["results",  renderResults],
      ["calendar", renderCalendar],
      ["drills",   () => { renderDrillIntro(); renderDrillFilters(); paintDrills(); renderShots(); }],
      ["forum",    renderForum],
      ["watch",    renderWatch],
      ["sources",  renderSources]
    ];
    for (const [name, fn] of steps) {
      try { fn(); }
      catch (err) { console.error("[polo-dashboard] failed to render '" + name + "':", err); }
    }
  });
})();
