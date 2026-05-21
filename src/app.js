(function () {
  "use strict";

  const data = window.RUN_CARD_DATA;
  const storageKey = "runcard-builder-v10";

 const REWORK_SECTIONS = [
  {
    id: "rework-pfi-basic",
    title: "Rework (PFI38/PFI89, No Metal / No Oxide)",
    name: "Rework (PFI38/PFI89, No Metal / No Oxide)",
    tone: "",
    sourceSheet: "Rework",
    sourceRow: "",
    defaultRecipeId: "",
    steps: [
      {
        id: "rw-pfi-basic-r1",
        sourceRow: "",
        no: "1",
        name: "ACE strip",
        recipe: "",
        params: "ACE 10 min (room temp)",
        machine: "化學實驗室",
        condition: "No Metal / No Oxide",
        note: "無 Metal，可震盪輔助去膠；PFI38 / PFI89, no LOR",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-pfi-basic-r2",
        sourceRow: "",
        no: "2",
        name: "DI water rinse",
        recipe: "",
        params: "",
        machine: "化學實驗室",
        condition: "",
        note: "",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-pfi-basic-r3",
        sourceRow: "",
        no: "3",
        name: "O2 Plasma",
        recipe: "#13",
        params: "Recipe #13",
        machine: "",
        condition: "",
        note: "選擇設備；去除 PR residue",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-pfi-basic-r4",
        sourceRow: "",
        no: "4",
        name: "BOE clean",
        recipe: "",
        params: "Dilute BOE 1:10, 30 sec",
        machine: "C06-03",
        condition: "No Oxide",
        note: "無 Oxide 時可保留 BOE clean",
        type: "clean",
        enabled: true
      }
    ]
  },

  {
    id: "rework-pfi-metal",
    title: "Rework (PFI38/PFI89, Metal / No Oxide)",
    name: "Rework (PFI38/PFI89, Metal / No Oxide)",
    tone: "",
    sourceSheet: "Rework",
    sourceRow: "",
    defaultRecipeId: "",
    steps: [
      {
        id: "rw-pfi-metal-r1",
        sourceRow: "",
        no: "1",
        name: "ACE strip (heated, no ultrasonic)",
        recipe: "",
        params: "ACE 75℃, 5–10 min",
        machine: "化學實驗室",
        condition: "Metal exists / No Oxide",
        note: "有 Metal 時禁止震盪，只能加熱去膠，避免金屬剝落或 pad / ohmic damage",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-pfi-metal-r2",
        sourceRow: "",
        no: "2",
        name: "DI water rinse",
        recipe: "",
        params: "",
        machine: "化學實驗室",
        condition: "",
        note: "",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-pfi-metal-r3",
        sourceRow: "",
        no: "3",
        name: "O2 Plasma",
        recipe: "#13",
        params: "Recipe #13",
        machine: "",
        condition: "",
        note: "選擇設備；去除 PR residue",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-pfi-metal-r4",
        sourceRow: "",
        no: "4",
        name: "BOE clean",
        recipe: "",
        params: "Dilute BOE 1:10, 30 sec",
        machine: "C06-03",
        condition: "No Oxide",
        note: "無 Oxide 時可保留 BOE clean",
        type: "clean",
        enabled: true
      }
    ]
  },

  {
    id: "rework-pfi-oxide",
    title: "Rework (PFI38/PFI89, Oxide / No Metal)",
    name: "Rework (PFI38/PFI89, Oxide / No Metal)",
    tone: "",
    sourceSheet: "Rework",
    sourceRow: "",
    defaultRecipeId: "",
    steps: [
      {
        id: "rw-pfi-oxide-r1",
        sourceRow: "",
        no: "1",
        name: "ACE strip",
        recipe: "",
        params: "ACE 10 min (room temp)",
        machine: "化學實驗室",
        condition: "Oxide exists / No Metal",
        note: "無 Metal，可震盪輔助去膠；已有 Oxide，後續不接 BOE clean",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-pfi-oxide-r2",
        sourceRow: "",
        no: "2",
        name: "DI water rinse",
        recipe: "",
        params: "",
        machine: "化學實驗室",
        condition: "",
        note: "",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-pfi-oxide-r3",
        sourceRow: "",
        no: "3",
        name: "O2 Plasma",
        recipe: "#13",
        params: "Recipe #13",
        machine: "",
        condition: "Oxide exists",
        note: "已有 Oxide 時，O2 Plasma 後不可接 BOE clean；BOE clean 已刪除",
        type: "clean",
        enabled: true
      }
    ]
  },

  {
    id: "rework-pfi-metal-oxide",
    title: "Rework (PFI38/PFI89, Metal + Oxide)",
    name: "Rework (PFI38/PFI89, Metal + Oxide)",
    tone: "",
    sourceSheet: "Rework",
    sourceRow: "",
    defaultRecipeId: "",
    steps: [
      {
        id: "rw-pfi-mo-r1",
        sourceRow: "",
        no: "1",
        name: "ACE strip (heated, no ultrasonic)",
        recipe: "",
        params: "ACE 75℃, 5–10 min",
        machine: "化學實驗室",
        condition: "Metal + Oxide exist",
        note: "有 Metal 時禁止震盪，只能加熱去膠；已有 Oxide，後續不接 BOE clean",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-pfi-mo-r2",
        sourceRow: "",
        no: "2",
        name: "DI water rinse",
        recipe: "",
        params: "",
        machine: "化學實驗室",
        condition: "",
        note: "",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-pfi-mo-r3",
        sourceRow: "",
        no: "3",
        name: "O2 Plasma",
        recipe: "#13",
        params: "Recipe #13",
        machine: "",
        condition: "Oxide exists",
        note: "已有 Oxide 時，O2 Plasma 後不可接 BOE clean；BOE clean 已刪除",
        type: "clean",
        enabled: true
      }
    ]
  },

  {
    id: "rework-lor-basic",
    title: "Rework (LOR + PFI38, No Metal / No Oxide)",
    name: "Rework (LOR + PFI38, No Metal / No Oxide)",
    tone: "",
    sourceSheet: "Rework",
    sourceRow: "",
    defaultRecipeId: "",
    steps: [
      {
        id: "rw-lor-basic-r1",
        sourceRow: "",
        no: "1",
        name: "PG strip (heated)",
        recipe: "",
        params: "PG 75℃, 10–20 min",
        machine: "化學實驗室",
        condition: "LOR + PFI38 / No Metal / No Oxide",
        note: "無 Metal，可震盪輔助 lift-off / 去膠；LOR double-layer PR",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-lor-basic-r2",
        sourceRow: "",
        no: "2",
        name: "DI water rinse",
        recipe: "",
        params: "",
        machine: "化學實驗室",
        condition: "",
        note: "",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-lor-basic-r3",
        sourceRow: "",
        no: "3",
        name: "O2 Plasma",
        recipe: "#13",
        params: "Recipe #13",
        machine: "",
        condition: "",
        note: "選擇設備；去除 PR residue",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-lor-basic-r4",
        sourceRow: "",
        no: "4",
        name: "BOE clean",
        recipe: "",
        params: "Dilute BOE 1:10, 30 sec",
        machine: "C06-03",
        condition: "No Oxide",
        note: "無 Oxide 時可保留 BOE clean",
        type: "clean",
        enabled: true
      }
    ]
  },

  {
    id: "rework-lor-metal",
    title: "Rework (LOR + PFI38, Metal / No Oxide)",
    name: "Rework (LOR + PFI38, Metal / No Oxide)",
    tone: "",
    sourceSheet: "Rework",
    sourceRow: "",
    defaultRecipeId: "",
    steps: [
      {
        id: "rw-lor-metal-r1",
        sourceRow: "",
        no: "1",
        name: "PG strip (heated, no ultrasonic)",
        recipe: "",
        params: "PG 75℃, 10–20 min",
        machine: "化學實驗室",
        condition: "LOR + PFI38 / Metal exists / No Oxide",
        note: "有 Metal 時禁止震盪，只能加熱去膠，避免金屬剝落或 pad / ohmic damage",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-lor-metal-r2",
        sourceRow: "",
        no: "2",
        name: "DI water rinse",
        recipe: "",
        params: "",
        machine: "化學實驗室",
        condition: "",
        note: "",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-lor-metal-r3",
        sourceRow: "",
        no: "3",
        name: "O2 Plasma",
        recipe: "#13",
        params: "Recipe #13",
        machine: "",
        condition: "",
        note: "選擇設備；去除 PR residue",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-lor-metal-r4",
        sourceRow: "",
        no: "4",
        name: "BOE clean",
        recipe: "",
        params: "Dilute BOE 1:10, 30 sec",
        machine: "C06-03",
        condition: "No Oxide",
        note: "無 Oxide 時可保留 BOE clean",
        type: "clean",
        enabled: true
      }
    ]
  },

  {
    id: "rework-lor-metal-oxide",
    title: "Rework (LOR + PFI38, Metal + Oxide)",
    name: "Rework (LOR + PFI38, Metal + Oxide)",
    tone: "",
    sourceSheet: "Rework",
    sourceRow: "",
    defaultRecipeId: "",
    steps: [
      {
        id: "rw-lor-mo-r1",
        sourceRow: "",
        no: "1",
        name: "PG strip (heated, no ultrasonic)",
        recipe: "",
        params: "PG 75℃, 10–20 min",
        machine: "化學實驗室",
        condition: "LOR + PFI38 / Metal + Oxide exist",
        note: "有 Metal 時禁止震盪，只能加熱去膠；已有 Oxide，後續不接 BOE clean",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-lor-mo-r2",
        sourceRow: "",
        no: "2",
        name: "DI water rinse",
        recipe: "",
        params: "",
        machine: "化學實驗室",
        condition: "",
        note: "",
        type: "clean",
        enabled: true
      },
      {
        id: "rw-lor-mo-r3",
        sourceRow: "",
        no: "3",
        name: "O2 Plasma",
        recipe: "#13",
        params: "Recipe #13",
        machine: "",
        condition: "Oxide exists",
        note: "已有 Oxide 時，O2 Plasma 後不可接 BOE clean；BOE clean 已刪除",
        type: "clean",
        enabled: true
      }
    ]
  }
];
  const els = {
    sourceLabel: document.getElementById("sourceLabel"),
    runcardTitle: document.getElementById("runcardTitle"),
    ownerInput: document.getElementById("ownerInput"),
    resetBtn: document.getElementById("resetBtn"),
    exportBtn: document.getElementById("exportBtn"),
    clearBtn: document.getElementById("clearBtn"),
    templateSearch: document.getElementById("templateSearch"),
    templateList: document.getElementById("templateList"),
    templateCount: document.getElementById("templateCount"),
    selectedSummary: document.getElementById("selectedSummary"),
    dropZone: document.getElementById("dropZone"),
    cardBoard: document.getElementById("cardBoard"),
    emptyState: document.getElementById("emptyState"),
    cardTemplate: document.getElementById("cardTemplate"),
    recipePendingBanner: document.getElementById("recipePendingBanner"),
    recipePendingName: document.getElementById("recipePendingName"),
    recipeCancelBtn: document.getElementById("recipeCancelBtn"),
    recipeBrowserCards: document.getElementById("recipeBrowserCards"),
    cardPager: document.getElementById("cardPager"),
    cardPagerLabel: document.getElementById("cardPagerLabel"),
    prevCardBtn: document.getElementById("prevCardBtn"),
    nextCardBtn: document.getElementById("nextCardBtn")
  };

  let uid = 0;
  let state = createDefaultState();
  let pendingRecipeCardId = null;
  let activeRecipeTab = "cot-dev";
  let activeCardIndex = 0;

  // ── State ──────────────────────────────────────────────────────────────────

  function createDefaultState() {
    return {
      meta: { title: "Custom Runcard", owner: "", equipmentMode: "track" },
      cards: []
    };
  }

  function nextId(prefix) {
    uid += 1;
    return `${prefix}-${Date.now().toString(36)}-${uid.toString(36)}`;
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function sourceBaseName(path) {
    return String(path || "").split(/[\\/]/).pop();
  }

  function stripStepPrefix(title) {
    return String(title || "")
      .replace(/^Step\s*\d+\.?\s*/i, "")
      .replace(/\s*\((?:clear|dark|drak)\)\s*/gi, "")
      .replace(/[一-鿿　-〿＀-￯][\s\S]*$/u, "")
      .trim();
  }

  function classifyStep(step) {
    const text = `${step.name || ""} ${step.params || ""} ${step.machine || ""}`.toLowerCase();
    if (/coating|soft bake|exposure|post-exposure|development|hard bake|hmds/.test(text)) return "photo";
    if (/clean|remove pr|remove native oxide|o2 plasma|di clean|boe|hcl|ace|ipa/.test(text)) return "clean";
    if (/etch|etching/.test(text)) return "etch";
    if (/deposition|ald|growth|e-gun|metal/.test(text)) return "deposit";
    if (/adi|aei|check|measurement|aoei/.test(text)) return "inspection";
    return "process";
  }

  function normalizeStep(step, prefix) {
    const type = step.type || classifyStep(step);
    let name = step.name || "";
    let recipe = step.recipe || "";
    if (type === "photo") {
      if (/^#\d+$/.test(recipe)) recipe = "";
      name = name.replace(/\s*\([^)]*(?:track|manual|手動|手动|Track|Manual|默認)[^)]*\)/gi, "").trim();
    }
    return {
      id: nextId(prefix || "row"),
      sourceRow: step.sourceRow || "",
      no: step.no || "",
      name,
      recipe,
      params: step.params || "",
      machine: step.machine || "",
      condition: step.condition || "",
      note: step.note || "",
      type,
      enabled: step.enabled !== false
    };
  }

  function createCardFromSection(section) {
    return {
      id: nextId("card"),
      templateId: section.id,
      title: stripStepPrefix(section.name || section.title),
      tone: section.tone || "",
      sourceSheet: section.sourceSheet || "",
      sourceRow: section.sourceRow || "",
      selectedRecipeId: "",
      linkedEtchRecipes: [],
      linkedCleans: [],
      linkedReworks: [],
      steps: section.steps.map((step) => normalizeStep(step, "row"))
    };
  }

  function createCleanCard(cleanRecipe) {
    return {
      id: nextId("card"),
      templateId: "",
      title: `Clean — ${cleanRecipe.name}`,
      tone: "",
      sourceSheet: "Clean Recipe",
      sourceRow: "",
      selectedRecipeId: "",
      steps: [normalizeStep({ ...cleanRecipe.step, type: "clean" }, "row")]
    };
  }

  function saveState() {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); }
    catch (e) { console.warn("Unable to save state", e); }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.cards)) return;
      state = parsed;
    } catch (e) { console.warn("Unable to load state", e); }
  }

  // ── Lookups ────────────────────────────────────────────────────────────────

  function recipeById(id) {
    return data.photoRecipes.find((r) => r.id === id) || data.photoRecipes[0];
  }

  function sectionById(id) {
    const rework = REWORK_SECTIONS.find((s) => s.id === id);
    if (rework) return rework;
    return data.sections.find((s) => s.id === id);
  }

  function cleanById(id) {
    return data.cleanRecipes.find((r) => r.id === id);
  }

  function reworkById(id) {
    return REWORK_SECTIONS.find((r) => r.id === id);
  }

  function hasRecipeRecord(step) {
    return String(step.recipe || "").trim().length > 0;
  }

  function visibleStepParams(step) {
    return hasRecipeRecord(step) ? "" : (step.params || "");
  }

  function linkedEtchRecipes(card) {
    const recipes = Array.isArray(card.linkedEtchRecipes) ? card.linkedEtchRecipes : [];
    if (card.linkedEtchRecipe) recipes.push(card.linkedEtchRecipe);
    card.linkedEtchRecipes = recipes;
    card.linkedEtchRecipe = null;
    return recipes;
  }

  function cleanRecipeShortLabel(recipe) {
    return (recipe.shortLabel || "").replace(/手動|手动/g, "Manual");
  }

  function modeBadgeLabel(mode) {
    return mode === "track" ? "Track" : "Manual";
  }

  function compatibleRecipeId(currentId, mode) {
    if (!currentId) return mode === "manual" ? "manual-pfi38" : "track-pfi38";
    const mapToManual = { "track-pfi38": "manual-pfi38", "track-pfi89": "manual-pfi89", "track-lor-pfi38": "manual-lor-pfi38" };
    const mapToTrack  = { "manual-pfi38": "track-pfi38", "manual-pfi89": "track-pfi89", "manual-lor-pfi38": "track-lor-pfi38" };
    const mapped = mode === "manual" ? mapToManual[currentId] : mapToTrack[currentId];
    if (mapped) return mapped;
    const current = recipeById(currentId);
    if (current && current.mode === mode) return current.id;
    return mode === "manual" ? "manual-pfi38" : "track-pfi38";
  }

  // ── Photo process helpers ──────────────────────────────────────────────────

  function hasPhotoSteps(card) {
    return card.steps.some((step) => step.type === "photo" || isPhotoStep(step));
  }

  function isPhotoStep(step) {
    return /coating|soft bake|exposure|post-exposure|development|hard bake|hmds/i.test(step.name || "");
  }

  function isExposureStep(step) {
    return /exposure/i.test(step.name || "") && !/post-exposure/i.test(step.name || "");
  }

  function buildPhotoBlock(card, recipe) {
    const exposures = card.steps.filter(isExposureStep);
    const exposureSteps = exposures.length
      ? exposures.map((step) => normalizeStep({ ...step, type: "photo", enabled: true }, "row"))
      : [normalizeStep({ name: "Exposure Alignment key", recipe: "", params: "Dose：", machine: "L20", condition: "", note: card.title, type: "photo" }, "row")];
    const before = recipe.beforeExposure.map((step) => normalizeStep({ ...step, type: "photo" }, "row"));
    const after  = recipe.afterExposure.map((step) => normalizeStep({ ...step, type: "photo" }, "row"));
    return [...before, ...exposureSteps, ...after];
  }

  function applyPhotoRecipe(card, recipeId) {
    const recipe = recipeById(recipeId);
    if (!recipe) return;
    const photoBlock = buildPhotoBlock(card, recipe);
    const firstPhotoIndex = card.steps.findIndex(isPhotoStep);
    const rebuilt = [];
    let inserted = false;
    card.steps.forEach((step, index) => {
      if (index === firstPhotoIndex) { rebuilt.push(...photoBlock); inserted = true; }
      if (!isPhotoStep(step)) rebuilt.push(step);
    });
    if (!inserted) {
      const insertAt = Math.min(1, rebuilt.length);
      rebuilt.splice(insertAt, 0, ...photoBlock);
    }
    card.steps = rebuilt;
    card.selectedRecipeId = recipe.id;
  }

  function restoreCard(card) {
    const source = sectionById(card.templateId);
    if (!source) return;
    const restored = createCardFromSection(source);
    card.title = restored.title;
    card.tone = restored.tone;
    card.sourceSheet = restored.sourceSheet;
    card.sourceRow = restored.sourceRow;
    card.selectedRecipeId = restored.selectedRecipeId;
    card.linkedEtchRecipes = restored.linkedEtchRecipes;
    card.linkedEtchRecipe = null;
    card.linkedCleans = restored.linkedCleans;
    card.linkedReworks = restored.linkedReworks;
    card.steps = restored.steps;
  }

  // ── DOM helpers ────────────────────────────────────────────────────────────

  function setText(node, text) {
    node.textContent = text == null ? "" : String(text);
  }

  // ── Template list (left panel) ─────────────────────────────────────────────

  function renderTemplateList() {
    const search = els.templateSearch.value.trim().toLowerCase();
    const allSections = data.sections;
    const filtered = allSections.filter((section) => {
      const haystack = `${section.title} ${section.steps.map((s) => s.name).join(" ")}`.toLowerCase();
      return !search || haystack.includes(search);
    });

    els.templateList.innerHTML = "";
    setText(els.templateCount, `${filtered.length}/${allSections.length}`);

    filtered.forEach((section) => {
      const item = document.createElement("div");
      item.className = "template-item";
      item.draggable = true;
      item.dataset.templateId = section.id;
      item.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("application/x-runcard-template", section.id);
        event.dataTransfer.effectAllowed = "copy";
      });

      const content = document.createElement("div");
      const title = document.createElement("div");
      title.className = "template-title";
      setText(title, stripStepPrefix(section.name || section.title));
      const details = document.createElement("div");
      details.className = "template-details";
      setText(details, `${section.steps.length} rows`);

      const tags = document.createElement("div");
      tags.className = "template-tags";
      const tone = (section.tone || "").toLowerCase();
      if (tone === "clear") {
        const t = document.createElement("span");
        t.className = "template-tag tag-clear";
        setText(t, "Clear");
        tags.appendChild(t);
      } else if (tone === "dark" || tone === "drak") {
        const t = document.createElement("span");
        t.className = "template-tag tag-dark";
        setText(t, "Dark");
        tags.appendChild(t);
      }
      const hasPhoto = section.steps.some((s) => s.type === "photo");
      if (!hasPhoto && !tone) {
        const t = document.createElement("span");
        t.className = "template-tag tag-clean";
        setText(t, section.sourceSheet === "Rework" ? "Rework" : "Clean");
        tags.appendChild(t);
      }

      content.append(title, details, tags);

      const addBtn = document.createElement("button");
      addBtn.className = "small-button template-add";
      addBtn.type = "button";
      setText(addBtn, "+");
      addBtn.addEventListener("click", () => addCardFromTemplate(section.id));

      item.append(content, addBtn);
      els.templateList.appendChild(item);
    });
  }

  // ── Recipe browser (right panel) ──────────────────────────────────────────

  function renderPendingBanner() {
    const card = pendingRecipeCardId ? state.cards.find((c) => c.id === pendingRecipeCardId) : null;
    els.recipePendingBanner.classList.toggle("hidden", !card);
    if (card) setText(els.recipePendingName, card.title);
  }

  function setActiveRecipeTab(tab) {
    activeRecipeTab = tab;
    document.querySelectorAll(".recipe-tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tab);
    });
    renderRecipeBrowserCards();
  }

  function renderRecipeBrowserCards() {
    els.recipeBrowserCards.innerHTML = "";
    if (activeRecipeTab === "cot-dev") {
      ["track", "manual"].forEach((mode) => {
        const header = document.createElement("div");
        header.className = "recipe-mode-header";
        setText(header, mode === "track" ? "Track 正常" : "Manual");
        els.recipeBrowserCards.appendChild(header);
        data.photoRecipes
          .filter((r) => r.mode === mode)
          .forEach((recipe) => els.recipeBrowserCards.appendChild(buildPhotoRecipeCard(recipe)));
      });
    } else if (activeRecipeTab === "e17-etch") {
      const groups = parseEtchSheet("e17-etch-metal-receipe");
      if (!groups.length) {
        const empty = document.createElement("div");
        empty.className = "recipe-mode-header";
        setText(empty, "No E17 data found");
        els.recipeBrowserCards.appendChild(empty);
      } else {
        groups.forEach((g) => els.recipeBrowserCards.appendChild(buildEtchRecipeCard(g, "e17-etch")));
      }
    } else if (activeRecipeTab === "e16-etch") {
      const groups = parseEtchSheet("e16-etch-receipe");
      if (!groups.length) {
        const empty = document.createElement("div");
        empty.className = "recipe-mode-header";
        setText(empty, "No E16 data found");
        els.recipeBrowserCards.appendChild(empty);
      } else {
        groups.forEach((g) => els.recipeBrowserCards.appendChild(buildEtchRecipeCard(g, "e16-etch")));
      }
    } else if (activeRecipeTab === "clean") {
      data.cleanRecipes.forEach((clean) => els.recipeBrowserCards.appendChild(buildCleanRecipeCard(clean)));
    } else if (activeRecipeTab === "rework") {
      REWORK_SECTIONS.forEach((rework) => els.recipeBrowserCards.appendChild(buildReworkRecipeCard(rework)));
    }
  }

  function parseEtchSheet(sheetId) {
    const sheet = (data.referenceSheets || []).find((s) => s.id === sheetId);
    if (!sheet) return [];
    const groups = [];
    let currentGroups = null;
    for (const row of sheet.rows) {
      const cells = row.cells || [];
      if (!cells.length) continue;
      const first = String(cells[0] || "").trim();
      if (/^#\d+/.test(first)) {
        const newGroups = [];
        cells.forEach((cell, i) => {
          if (/^#\d+/.test(String(cell || "").trim())) {
            newGroups.push({ id: String(cell).trim(), name: String(cells[i + 1] || "").trim().replace(/\s{2,}/g, " "), colStart: i, colEnd: cells.length, params: [] });
          }
        });
        for (let g = 0; g < newGroups.length - 1; g++) newGroups[g].colEnd = newGroups[g + 1].colStart;
        currentGroups = newGroups;
        groups.push(...newGroups);
      } else if (first && !/^step\s*\d+$/i.test(first) && currentGroups) {
        for (const group of currentGroups) {
          const paramName = String(cells[group.colStart] || "").trim();
          if (!paramName || /^step\s*\d+$/i.test(paramName)) continue;
          const steps = [];
          for (let c = group.colStart + 1; c < group.colEnd; c++) {
            const val = String(cells[c] || "").trim();
            if (val) steps.push(val);
          }
          if (steps.length) group.params.push({ name: paramName, steps });
        }
      }
    }
    return groups;
  }

  function buildEtchRecipeCard(group, sheetId) {
    const card = document.createElement("div");
    card.className = "recipe-browser-card etch";

    const head = document.createElement("div");
    head.className = "recipe-browser-head";
    const titleEl = document.createElement("div");
    titleEl.className = "recipe-browser-title";
    setText(titleEl, group.name || group.id);
    const badge = document.createElement("span");
    badge.className = "recipe-browser-badge etch";
    setText(badge, group.id);
    head.append(titleEl, badge);

    const body = document.createElement("div");
    body.className = "recipe-browser-body";
    if (group.params.length) {
      const maxSteps = group.params.reduce((m, p) => Math.max(m, p.steps.length), 0);
      const headerRow = document.createElement("div");
      headerRow.className = "etch-param-row etch-param-header";
      headerRow.appendChild(document.createElement("span"));
      for (let i = 0; i < maxSteps; i++) {
        const cell = document.createElement("span");
        setText(cell, `Step ${i + 1}`);
        headerRow.appendChild(cell);
      }
      body.appendChild(headerRow);
      group.params.forEach((param) => {
        const row = document.createElement("div");
        row.className = "etch-param-row";
        const nameCell = document.createElement("span");
        nameCell.className = "etch-param-name";
        setText(nameCell, param.name);
        row.appendChild(nameCell);
        for (let i = 0; i < maxSteps; i++) {
          const valCell = document.createElement("span");
          valCell.className = "etch-param-val";
          setText(valCell, param.steps[i] !== undefined ? param.steps[i] : "—");
          row.appendChild(valCell);
        }
        body.appendChild(row);
      });
    }

    const footer = document.createElement("div");
    footer.className = "recipe-browser-footer";
    const applyBtn = document.createElement("button");
    applyBtn.type = "button";
    applyBtn.className = "small-button recipe-apply-btn";
    setText(applyBtn, pendingRecipeCardId ? "Add ↵" : "Add to Step");
    applyBtn.addEventListener("click", () => applyRecipeFromBrowser("etch", `${sheetId}::${group.id}::${group.name}`));
    footer.appendChild(applyBtn);

    card.append(head, body, footer);
    return card;
  }

  function buildPhotoRecipeCard(recipe) {
    const card = document.createElement("div");
    card.className = `recipe-browser-card ${recipe.mode}`;

    const head = document.createElement("div");
    head.className = "recipe-browser-head";
    const titleEl = document.createElement("div");
    titleEl.className = "recipe-browser-title";
    setText(titleEl, cleanRecipeShortLabel(recipe));
    const badge = document.createElement("span");
    badge.className = `recipe-browser-badge ${recipe.mode}`;
    setText(badge, modeBadgeLabel(recipe.mode));
    head.append(titleEl, badge);

    const body = document.createElement("div");
    body.className = "recipe-browser-body";

    if (recipe.beforeExposure.length) {
      const lbl = document.createElement("div");
      lbl.className = "recipe-section-label";
      setText(lbl, "Before Exposure");
      body.appendChild(lbl);
      recipe.beforeExposure.forEach((step) => body.appendChild(buildRecipeStepRow(step)));
    }
    if (recipe.afterExposure.length) {
      const lbl = document.createElement("div");
      lbl.className = "recipe-section-label";
      setText(lbl, "After Exposure");
      body.appendChild(lbl);
      recipe.afterExposure.forEach((step) => body.appendChild(buildRecipeStepRow(step)));
    }

    const footer = document.createElement("div");
    footer.className = "recipe-browser-footer";
    const applyBtn = document.createElement("button");
    applyBtn.type = "button";
    applyBtn.className = "small-button recipe-apply-btn";
    setText(applyBtn, pendingRecipeCardId ? "Apply ↵" : "Apply to Step");
    applyBtn.addEventListener("click", () => applyRecipeFromBrowser("photo", recipe.id));
    footer.appendChild(applyBtn);

    card.append(head, body, footer);
    return card;
  }

  function buildRecipeStepRow(step) {
    const row = document.createElement("div");
    row.className = "recipe-step-row";
    const cleanName = (step.name || "")
      .replace(/\s*\([^)]*(?:track|manual|手動|手动|Track|Manual)[^)]*\)/gi, "")
      .trim();
    const nameEl = document.createElement("span");
    nameEl.className = "recipe-step-name";
    setText(nameEl, cleanName);
    const paramParts = [step.params, step.machine].filter(Boolean);
    const paramsEl = document.createElement("span");
    paramsEl.className = "recipe-step-params";
    setText(paramsEl, paramParts.join(" · "));
    row.append(nameEl, paramsEl);
    return row;
  }

  function buildCleanRecipeCard(clean) {
    const card = document.createElement("div");
    card.className = "recipe-browser-card clean";

    const head = document.createElement("div");
    head.className = "recipe-browser-head";
    const titleEl = document.createElement("div");
    titleEl.className = "recipe-browser-title";
    setText(titleEl, clean.name);
    const badge = document.createElement("span");
    badge.className = "recipe-browser-badge clean";
    setText(badge, "Clean");
    head.append(titleEl, badge);

    const body = document.createElement("div");
    body.className = "recipe-browser-body";
    const temperature = String(clean.temperature || "").trim();
    const time = String(clean.time || "").trim();
    const temperatureLabel = temperature
      ? (/^\d+(?:\.\d+)?$/.test(temperature) ? `${temperature}°C` : temperature)
      : "";
    const timeLabel = time
      ? (/^\d+(?:\.\d+)?$/.test(time) ? `${time}s` : time)
      : "";
    [
      clean.chemicals && clean.ratio ? `${clean.chemicals}  (${clean.ratio})` : clean.chemicals,
      [temperatureLabel, timeLabel].filter(Boolean).join(" · "),
      clean.machine,
      clean.usage
    ]
      .filter(Boolean)
      .forEach((detail) => {
        const row = document.createElement("div");
        row.className = "recipe-detail-row";
        setText(row, detail);
        body.appendChild(row);
      });

    const footer = document.createElement("div");
    footer.className = "recipe-browser-footer";
    const applyBtn = document.createElement("button");
    applyBtn.type = "button";
    applyBtn.className = "small-button recipe-apply-btn";
    setText(applyBtn, pendingRecipeCardId ? "Add ↵" : "Add Clean");
    applyBtn.addEventListener("click", () => applyRecipeFromBrowser("clean", clean.id));
    footer.appendChild(applyBtn);

    card.append(head, body, footer);
    return card;
  }

  function buildReworkRecipeCard(rework) {
    const card = document.createElement("div");
    card.className = "recipe-browser-card rework";

    const head = document.createElement("div");
    head.className = "recipe-browser-head";
    const titleEl = document.createElement("div");
    titleEl.className = "recipe-browser-title";
    setText(titleEl, rework.name || rework.title);
    const badge = document.createElement("span");
    badge.className = "recipe-browser-badge rework";
    setText(badge, "Rework");
    head.append(titleEl, badge);

    const body = document.createElement("div");
    body.className = "recipe-browser-body";
    rework.steps.forEach((step) => body.appendChild(buildRecipeStepRow(step)));

    const footer = document.createElement("div");
    footer.className = "recipe-browser-footer";
    const applyBtn = document.createElement("button");
    applyBtn.type = "button";
    applyBtn.className = "small-button recipe-apply-btn";
    setText(applyBtn, pendingRecipeCardId ? "Add ↵" : "Add Rework");
    applyBtn.addEventListener("click", () => applyRecipeFromBrowser("rework", rework.id));
    footer.appendChild(applyBtn);

    card.append(head, body, footer);
    return card;
  }

  function applyRecipeFromBrowser(type, id) {
    let keepAdding = false;
    if (type === "photo") {
      if (pendingRecipeCardId) {
        const card = state.cards.find((c) => c.id === pendingRecipeCardId);
        if (card) { applyPhotoRecipe(card, id); saveState(); renderCards(); }
      }
    } else if (type === "etch") {
      if (pendingRecipeCardId) {
        const card = state.cards.find((c) => c.id === pendingRecipeCardId);
        if (card) {
          const [sheetId, groupId, groupName] = id.split("::");
          const recipes = linkedEtchRecipes(card);
          const alreadyAdded = recipes.some((r) => r.sheetId === sheetId && r.id === groupId && r.name === groupName);
          if (!alreadyAdded) recipes.push({ sheetId, id: groupId, name: groupName });
          keepAdding = true;
          saveState();
          renderCards();
        }
      }
    } else {
      if (type === "rework") {
        if (pendingRecipeCardId) {
          const card = state.cards.find((c) => c.id === pendingRecipeCardId);
          if (card) {
            if (!card.linkedReworks) card.linkedReworks = [];
            if (!card.linkedReworks.includes(id)) card.linkedReworks.push(id);
            keepAdding = true;
            saveState();
            renderCards();
          }
        }
        if (!keepAdding) pendingRecipeCardId = null;
        renderPendingBanner();
        renderRecipeBrowserCards();
        return;
      }
      if (pendingRecipeCardId) {
        const card = state.cards.find((c) => c.id === pendingRecipeCardId);
        if (card) {
          if (!card.linkedCleans) card.linkedCleans = [];
          if (!card.linkedCleans.includes(id)) card.linkedCleans.push(id);
          keepAdding = true;
          saveState();
          renderCards();
        }
      }
    }
    if (!keepAdding) pendingRecipeCardId = null;
    renderPendingBanner();
    renderRecipeBrowserCards();
  }

  // ── Cards ──────────────────────────────────────────────────────────────────

  function renderCards() {
    els.cardBoard.innerHTML = "";
    const isEmpty = state.cards.length === 0;
    els.dropZone.classList.toggle("is-empty", isEmpty);
    setText(els.selectedSummary, `${state.cards.length} steps · ${countEnabledRows()} rows`);

    // Clamp active index
    activeCardIndex = Math.max(0, Math.min(activeCardIndex, Math.max(0, state.cards.length - 1)));

    els.cardPager.style.display = isEmpty ? "none" : "";
    if (!isEmpty) {
      setText(els.cardPagerLabel, `Step ${activeCardIndex + 1} / ${state.cards.length}`);
      els.prevCardBtn.disabled = activeCardIndex === 0;
      els.nextCardBtn.disabled = activeCardIndex === state.cards.length - 1;
    }
    if (isEmpty) return;

    // Only render the single active card
    {
      const card = state.cards[activeCardIndex];
      const index = activeCardIndex;
      const node = els.cardTemplate.content.firstElementChild.cloneNode(true);
      node.dataset.cardId = card.id;
      node.draggable = false;

      const handle = node.querySelector(".handle-button");
      handle.draggable = true;
      handle.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("application/x-runcard-card", card.id);
        event.dataTransfer.effectAllowed = "move";
        node.classList.add("dragging");
      });
      handle.addEventListener("dragend", () => node.classList.remove("dragging"));

      node.addEventListener("dragover", (event) => {
        event.preventDefault();
        node.classList.add("drop-target");
      });
      node.addEventListener("dragleave", () => node.classList.remove("drop-target"));
      node.addEventListener("drop", (event) => {
        event.preventDefault();
        node.classList.remove("drop-target");
        handleDrop(event, index);
      });

      const titleInput = node.querySelector(".card-title-input");
      titleInput.value = card.title;
      titleInput.addEventListener("input", () => { card.title = titleInput.value; saveState(); });

      const selectedRows = card.steps.filter((s) => s.enabled).length;
      setText(node.querySelector(".order-badge"), `Step ${index + 1}`);
      setText(
        node.querySelector(".card-meta"),
        [card.sourceSheet || "Custom", card.sourceRow ? `row ${card.sourceRow}` : "", `${selectedRows}/${card.steps.length} rows`]
          .filter(Boolean).join(" · ")
      );

      const recipeRow = node.querySelector(".card-recipe-row");
      const cotDevBtn = node.querySelector(".add-cot-dev-to-step");
      const openCotDevPicker = () => {
        pendingRecipeCardId = card.id;
        setActiveRecipeTab("cot-dev");
        renderPendingBanner();
        els.recipeBrowserCards.closest(".panel-section").scrollIntoView({ behavior: "smooth", block: "start" });
      };
      if (hasPhotoSteps(card)) {
        if (card.selectedRecipeId) {
          const recipe = recipeById(card.selectedRecipeId);
          const badgeEl = node.querySelector(".recipe-badge-value");
          recipeRow.classList.remove("hidden");
          badgeEl.classList.toggle("track", recipe?.mode === "track");
          badgeEl.classList.toggle("manual", recipe?.mode === "manual");
          setText(badgeEl, recipe ? cleanRecipeShortLabel(recipe) : "—");
          node.querySelector(".change-recipe").addEventListener("click", openCotDevPicker);
        } else {
          cotDevBtn.classList.remove("hidden");
          setText(cotDevBtn, "+ COT-DEV Receipe(務必添加)");
        }
      }
      cotDevBtn.addEventListener("click", openCotDevPicker);

      renderLinkedRecipeBadges(node.querySelector(".linked-recipe-badges"), card);

      node.querySelector(".add-etch-to-step").addEventListener("click", () => {
        pendingRecipeCardId = card.id;
        setActiveRecipeTab("e17-etch");
        renderPendingBanner();
        els.recipeBrowserCards.closest(".panel-section").scrollIntoView({ behavior: "smooth", block: "start" });
      });

      node.querySelector(".add-clean-to-step").addEventListener("click", () => {
        pendingRecipeCardId = card.id;
        setActiveRecipeTab("clean");
        renderPendingBanner();
        els.recipeBrowserCards.closest(".panel-section").scrollIntoView({ behavior: "smooth", block: "start" });
      });

      node.querySelector(".add-rework-to-step").addEventListener("click", () => {
        pendingRecipeCardId = card.id;
        setActiveRecipeTab("rework");
        renderPendingBanner();
        els.recipeBrowserCards.closest(".panel-section").scrollIntoView({ behavior: "smooth", block: "start" });
      });

      node.querySelector(".add-row").addEventListener("click", () => {
        card.steps.push(normalizeStep({ name: "New substep", recipe: "", params: "", machine: "", condition: "", note: "", type: "process" }, "row"));
        saveState();
        renderCards();
      });

      node.querySelector(".restore-card").addEventListener("click", () => {
        restoreCard(card);
        saveState();
        renderCards();
      });

      node.querySelector(".duplicate-card").addEventListener("click", () => {
        const copy = clone(card);
        copy.id = nextId("card");
        copy.title = `${copy.title} Copy`;
        copy.steps = copy.steps.map((step) => ({ ...step, id: nextId("row") }));
        state.cards.splice(index + 1, 0, copy);
        activeCardIndex = index + 1;
        saveState();
        renderCards();
      });

      node.querySelector(".delete-card").addEventListener("click", () => {
        state.cards.splice(index, 1);
        // activeCardIndex clamp is handled inside renderCards
        saveState();
        renderCards();
      });

      node.querySelector(".move-up").disabled = index === 0;
      node.querySelector(".move-up").addEventListener("click", () => { activeCardIndex = index - 1; moveCard(index, index - 1); });
      node.querySelector(".move-down").disabled = index === state.cards.length - 1;
      node.querySelector(".move-down").addEventListener("click", () => { activeCardIndex = index + 1; moveCard(index, index + 1); });

      renderSubsteps(node.querySelector(".substep-table"), card);
      renderLinkedRecipes(node.querySelector(".linked-recipes"), card);
      els.cardBoard.appendChild(node);
    }
  }

  function removeLinkedEtchRecipe(card, idx) {
    linkedEtchRecipes(card).splice(idx, 1);
    saveState();
    renderCards();
  }

  function renderLinkedRecipeBadges(container, card) {
    container.innerHTML = "";
    const etchRecipes = linkedEtchRecipes(card);
    const cleanRecipes = (card.linkedCleans || [])
      .map((id, rawIndex) => ({ recipe: cleanById(id), rawIndex }))
      .filter((item) => item.recipe);
    const reworkRecipes = (card.linkedReworks || [])
      .map((id, rawIndex) => ({ recipe: reworkById(id), rawIndex }))
      .filter((item) => item.recipe);
    const hasAny = etchRecipes.length || cleanRecipes.length || reworkRecipes.length;
    container.classList.toggle("hidden", !hasAny);
    if (!hasAny) return;

    const makeGroup = (type, label, items, getText, onRemove) => {
      if (!items.length) return;
      const row = document.createElement("div");
      row.className = `linked-recipe-badge-row ${type}`;
      const labelEl = document.createElement("span");
      labelEl.className = "recipe-badge-label";
      setText(labelEl, label);
      row.appendChild(labelEl);
      items.forEach((item, idx) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = `linked-recipe-chip ${type}`;
        chip.title = "Click to remove";
        setText(chip, `${getText(item)}  ×`);
        chip.addEventListener("click", () => onRemove(idx));
        row.appendChild(chip);
      });
      container.appendChild(row);
    };

    makeGroup(
      "etch",
      "Etch",
      etchRecipes,
      (recipe) => `${recipe.id} — ${recipe.name}`,
      (idx) => removeLinkedEtchRecipe(card, idx)
    );
    makeGroup(
      "clean",
      "Clean",
      cleanRecipes,
      (item) => item.recipe.name,
      (idx) => {
        card.linkedCleans.splice(cleanRecipes[idx].rawIndex, 1);
        saveState();
        renderCards();
      }
    );
    makeGroup(
      "rework",
      "Rework",
      reworkRecipes,
      (item) => item.recipe.name || item.recipe.title,
      (idx) => {
        card.linkedReworks.splice(reworkRecipes[idx].rawIndex, 1);
        saveState();
        renderCards();
      }
    );
  }

  function renderLinkedRecipes(container, card) {
    container.innerHTML = "";

    linkedEtchRecipes(card).forEach((etchRecipe, idx) => {
      const { sheetId, id: groupId, name: groupName } = etchRecipe;
      const fullId = sheetId === "e17-etch" ? "e17-etch-metal-receipe" : "e16-etch-receipe";
      const groups = parseEtchSheet(fullId);
      const group = groups.find((g) => g.id === groupId && g.name === groupName) || groups.find((g) => g.id === groupId);

      const section = document.createElement("div");
      section.className = "linked-recipe-section etch";
      const hdr = document.createElement("div");
      hdr.className = "linked-recipe-header";
      const lbl = document.createElement("span");
      setText(lbl, `Etch Recipe  ${groupId} — ${groupName}`);
      const rmBtn = document.createElement("button");
      rmBtn.type = "button";
      rmBtn.className = "small-button danger-text";
      setText(rmBtn, "× Remove");
      rmBtn.addEventListener("click", () => removeLinkedEtchRecipe(card, idx));
      hdr.append(lbl, rmBtn);
      section.appendChild(hdr);

      if (group && group.params.length) {
        const maxSteps = group.params.reduce((m, p) => Math.max(m, p.steps.length), 0);
        const tbl = document.createElement("div");
        tbl.className = "etch-linked-table";
        const hdrRow = document.createElement("div");
        hdrRow.className = "etch-param-row etch-param-header";
        hdrRow.appendChild(document.createElement("span"));
        for (let i = 0; i < maxSteps; i++) {
          const c = document.createElement("span");
          setText(c, `Step ${i + 1}`);
          hdrRow.appendChild(c);
        }
        tbl.appendChild(hdrRow);
        group.params.forEach((param) => {
          const row = document.createElement("div");
          row.className = "etch-param-row";
          const nc = document.createElement("span");
          nc.className = "etch-param-name";
          setText(nc, param.name);
          row.appendChild(nc);
          for (let i = 0; i < maxSteps; i++) {
            const vc = document.createElement("span");
            vc.className = "etch-param-val";
            setText(vc, param.steps[i] !== undefined ? param.steps[i] : "—");
            row.appendChild(vc);
          }
          tbl.appendChild(row);
        });
        section.appendChild(tbl);
      }
      container.appendChild(section);
    });

    (card.linkedCleans || []).forEach((cleanId, idx) => {
      const clean = cleanById(cleanId);
      if (!clean) return;
      const section = document.createElement("div");
      section.className = "linked-recipe-section clean";
      const hdr = document.createElement("div");
      hdr.className = "linked-recipe-header";
      const lbl = document.createElement("span");
      setText(lbl, `Clean — ${clean.name}`);
      const rmBtn = document.createElement("button");
      rmBtn.type = "button";
      rmBtn.className = "small-button danger-text";
      setText(rmBtn, "× Remove");
      rmBtn.addEventListener("click", () => { card.linkedCleans.splice(idx, 1); saveState(); renderCards(); });
      hdr.append(lbl, rmBtn);
      const det = document.createElement("div");
      det.className = "linked-recipe-details";
      setText(det, [
        clean.chemicals && clean.ratio ? `${clean.chemicals} (${clean.ratio})` : clean.chemicals,
        [clean.temperature ? `${clean.temperature}℃` : null, clean.time ? `${clean.time} s` : null].filter(Boolean).join(" · "),
        clean.machine
      ].filter(Boolean).join("   "));
      section.append(hdr, det);
      container.appendChild(section);
    });

    (card.linkedReworks || []).forEach((reworkId, idx) => {
      const rework = reworkById(reworkId);
      if (!rework) return;
      const section = document.createElement("div");
      section.className = "linked-recipe-section rework";
      const hdr = document.createElement("div");
      hdr.className = "linked-recipe-header";
      const lbl = document.createElement("span");
      setText(lbl, `Rework — ${rework.name || rework.title}`);
      const rmBtn = document.createElement("button");
      rmBtn.type = "button";
      rmBtn.className = "small-button danger-text";
      setText(rmBtn, "× Remove");
      rmBtn.addEventListener("click", () => { card.linkedReworks.splice(idx, 1); saveState(); renderCards(); });
      hdr.append(lbl, rmBtn);

      const rows = document.createElement("div");
      rows.className = "rework-linked-steps";
      rework.steps.forEach((step) => rows.appendChild(buildRecipeStepRow(step)));
      section.append(hdr, rows);
      container.appendChild(section);
    });
  }

  function renderSubsteps(container, card) {
    container.innerHTML = "";
    const header = document.createElement("div");
    header.className = "substep-header";
    ["", "Substep", "Recipe", "Parameter", "Machine", "Note", ""].forEach((label) => {
      const cell = document.createElement("div");
      setText(cell, label);
      header.appendChild(cell);
    });
    container.appendChild(header);

    card.steps.forEach((step, index) => {
      const row = document.createElement("div");
      row.className = `substep-row ${step.enabled ? "" : "disabled"}`.trim();
      row.dataset.rowId = step.id;

      const checkWrap = document.createElement("div");
      checkWrap.className = "check-wrap";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = step.enabled;
      checkbox.addEventListener("change", () => { step.enabled = checkbox.checked; saveState(); renderCards(); });
      const mark = document.createElement("span");
      mark.className = `type-mark ${step.type || "process"}`;
      checkWrap.append(checkbox, mark);
      row.appendChild(checkWrap);

      row.appendChild(textInput(step, "name", "cell-name"));
      row.appendChild(textInput(step, "recipe", "cell-recipe"));
      row.appendChild(textInput(step, "params", "cell-params", { displayValue: visibleStepParams(step), disabled: hasRecipeRecord(step) }));
      row.appendChild(textInput(step, "machine", "cell-machine"));
      row.appendChild(textInput(step, "note", "cell-note"));

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "small-button row-remove danger-text";
      remove.title = "Remove row";
      setText(remove, "×");
      remove.addEventListener("click", () => { card.steps.splice(index, 1); saveState(); renderCards(); });
      row.appendChild(remove);
      container.appendChild(row);
    });
  }

  function textInput(step, key, className, options = {}) {
    const input = document.createElement("input");
    input.type = "text";
    input.className = className;
    input.value = Object.prototype.hasOwnProperty.call(options, "displayValue") ? options.displayValue : (step[key] || "");
    input.disabled = !!options.disabled;
    input.addEventListener("input", () => {
      step[key] = input.value;
      if (key === "name") step.type = classifyStep(step);
      saveState();
    });
    input.addEventListener("change", () => {
      if (key === "recipe") renderCards();
    });
    return input;
  }

  function countEnabledRows() {
    return state.cards.reduce((sum, card) => sum + card.steps.filter((s) => s.enabled).length, 0);
  }

  // ── Card mutations ─────────────────────────────────────────────────────────

  function addCardFromTemplate(templateId, index) {
    const section = sectionById(templateId);
    if (!section) return;
    const card = createCardFromSection(section);
    const insertAt = Number.isInteger(index) ? index : state.cards.length;
    state.cards.splice(insertAt, 0, card);
    activeCardIndex = insertAt;
    saveState();
    renderCards();
  }

  function addCleanCard(cleanId, index) {
    const clean = cleanById(cleanId);
    if (!clean) return;
    const card = createCleanCard(clean);
    const insertAt = Number.isInteger(index) ? index : state.cards.length;
    state.cards.splice(insertAt, 0, card);
    activeCardIndex = insertAt;
    saveState();
    renderCards();
  }

  function moveCard(from, to) {
    if (to < 0 || to >= state.cards.length) return;
    const [card] = state.cards.splice(from, 1);
    state.cards.splice(to, 0, card);
    saveState();
    renderCards();
  }

  function moveCardById(cardId, targetIndex) {
    const currentIndex = state.cards.findIndex((c) => c.id === cardId);
    if (currentIndex < 0) return;
    const [card] = state.cards.splice(currentIndex, 1);
    const adjusted = currentIndex < targetIndex ? targetIndex - 1 : targetIndex;
    state.cards.splice(Math.max(0, adjusted), 0, card);
    activeCardIndex = Math.max(0, adjusted);
    saveState();
    renderCards();
  }

  function handleDrop(event, targetIndex) {
    const templateId = event.dataTransfer.getData("application/x-runcard-template");
    const cardId = event.dataTransfer.getData("application/x-runcard-card");
    if (templateId) addCardFromTemplate(templateId, targetIndex);
    else if (cardId) moveCardById(cardId, targetIndex);
  }

  // ── Export ─────────────────────────────────────────────────────────────────

  function sanitizeFilename(value) {
    return String(value || "runcard").replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").trim().slice(0, 90);
  }

  function safeWorksheetName(value, usedNames) {
    const cleaned = String(value || "Sheet").replace(/[\\/?*:[\]]/g, " ").replace(/\s+/g, " ").trim().slice(0, 31) || "Sheet";
    let name = cleaned;
    let suffix = 2;
    while (usedNames.has(name)) {
      const tail = ` ${suffix}`;
      name = `${cleaned.slice(0, 31 - tail.length)}${tail}`;
      suffix += 1;
    }
    usedNames.add(name);
    return name;
  }

  function appendCoatingSpinSpeedTable(rows) {
    rows.push([]);
    const titleRow = rows.length;
    rows.push(["Coating 轉速表 #67", "", "", "", "", ""]);
    rows.push(["段速", "轉速設定", "加減速時間", "運轉時間", "", ""]);
    rows.push(["1\n（紅色有參數）", "300", "40", "20", "", ""]);
    rows.push(["2", "800", "40", "40", "", ""]);
    rows.push(["3", "主轉 spin coater", "40", "300", "", ""]);
    rows.push(["4", "800", "40", "40", "", ""]);
    rows.push(["5", "300", "40", "20", "", ""]);
    rows.push(["（藍色沒有參數）", "", "", "", "", ""]);
    return titleRow;
  }

  function excelCell(row, col) {
    return XLSX.utils.encode_cell({ r: row, c: col });
  }

  function excelStyle(fill, fontColor = "FF1F2937", bold = false, horizontal = "center") {
    return {
      font: { color: { rgb: fontColor }, bold },
      fill: { patternType: "solid", fgColor: { rgb: fill } },
      alignment: { horizontal, vertical: "center", wrapText: true },
      border: {
        top: { style: "thin", color: { rgb: "FFD9E2EC" } },
        right: { style: "thin", color: { rgb: "FFD9E2EC" } },
        bottom: { style: "thin", color: { rgb: "FFD9E2EC" } },
        left: { style: "thin", color: { rgb: "FFD9E2EC" } }
      }
    };
  }

  const excelStyles = {
    title: excelStyle("FF1F4E78", "FFFFFFFF", true, "left"),
    metaLabel: excelStyle("FFD9EAF7", "FF1F2937", true, "left"),
    metaValue: excelStyle("FFF3F8FC", "FF1F2937", false, "left"),
    indexHeader: excelStyle("FF70AD47", "FFFFFFFF", true),
    indexBody: excelStyle("FFE2F0D9", "FF1F2937", false, "left"),
    indexBodyAlt: excelStyle("FFF3FAEF", "FF1F2937", false, "left"),
    processTitle: excelStyle("FF385723", "FFFFFFFF", true, "left"),
    processHeader: excelStyle("FF548235", "FFFFFFFF", true),
    processBody: excelStyle("FFE2F0D9", "FF1F2937", false, "left"),
    cotDev: excelStyle("FFF4B183", "FF1F2937", true, "left"),
    etchTitle: excelStyle("FF7030A0", "FFFFFFFF", true, "left"),
    etchHeader: excelStyle("FFE4DFEC", "FF1F2937", true),
    etchBody: excelStyle("FFF4F0F8", "FF1F2937", false, "left"),
    cleanTitle: excelStyle("FF2F75B5", "FFFFFFFF", true, "left"),
    cleanHeader: excelStyle("FFDDEBF7", "FF1F2937", true),
    cleanBody: excelStyle("FFF2F8FC", "FF1F2937", false, "left"),
    reworkTitle: excelStyle("FFC00000", "FFFFFFFF", true, "left"),
    reworkHeader: excelStyle("FFFCE4D6", "FF1F2937", true),
    reworkBody: excelStyle("FFFFF2EE", "FF1F2937", false, "left"),
    coatingTitle: excelStyle("FFF8CBAD", "FF1F2937", true, "left"),
    coatingHeader: excelStyle("FFFFF2CC", "FF1F2937", true),
    coatingBody: excelStyle("FFFFF2CC"),
    coatingRed: excelStyle("FFFF0000", "FFFFFFFF", true),
    coatingBlue: excelStyle("FF4472C4", "FFFFFFFF", true)
  };

  function styleCell(ws, row, col, style) {
    const addr = excelCell(row, col);
    if (!ws[addr]) ws[addr] = { t: "s", v: "" };
    ws[addr].s = style;
  }

  function styleRow(ws, row, startCol, endCol, style) {
    for (let col = startCol; col <= endCol; col++) styleCell(ws, row, col, style);
  }

  function styleIndexSheet(ws, stepCount, coatingTableTitleRow) {
    styleRow(ws, 0, 0, 5, excelStyles.title);
    styleCell(ws, 1, 0, excelStyles.metaLabel);
    styleCell(ws, 1, 1, excelStyles.metaValue);
    styleCell(ws, 2, 0, excelStyles.metaLabel);
    styleCell(ws, 2, 1, excelStyles.metaValue);
    styleRow(ws, 4, 0, 5, excelStyles.indexHeader);
    for (let row = 5; row < 5 + stepCount; row++) {
      styleRow(ws, row, 0, 5, row % 2 ? excelStyles.indexBody : excelStyles.indexBodyAlt);
    }

    styleRow(ws, coatingTableTitleRow, 0, 3, excelStyles.coatingTitle);
    styleRow(ws, coatingTableTitleRow + 1, 0, 3, excelStyles.coatingHeader);
    for (let row = coatingTableTitleRow + 2; row <= coatingTableTitleRow + 6; row++) {
      styleCell(ws, row, 0, excelStyles.coatingRed);
      styleRow(ws, row, 1, 3, excelStyles.coatingBody);
    }
    styleCell(ws, coatingTableTitleRow + 7, 0, excelStyles.coatingBlue);
    styleRow(ws, coatingTableTitleRow + 7, 1, 3, excelStyles.coatingBody);

    ws["!rows"] = ws["!rows"] || [];
    ws["!rows"][coatingTableTitleRow + 2] = { hpt: 34 };
  }

  function styleCardSheet(ws, rows) {
    styleRow(ws, 0, 0, 6, excelStyles.processTitle);
    let section = "process";
    rows.forEach((row, idx) => {
      const first = String(row[0] || "");
      if (first === "COT-DEV Recipe") {
        styleRow(ws, idx, 0, 6, excelStyles.cotDev);
        return;
      }
      if (first === "No." && row[1] === "Substep") {
        styleRow(ws, idx, 0, 6, section === "rework" ? excelStyles.reworkHeader : excelStyles.processHeader);
        return;
      }
      if (/^\d+\.\d+$/.test(first)) {
        styleRow(ws, idx, 0, 6, section === "rework" ? excelStyles.reworkBody : excelStyles.processBody);
        return;
      }
      if (first.startsWith("Etch Recipe:")) {
        section = "etch";
        styleRow(ws, idx, 0, 6, excelStyles.etchTitle);
        return;
      }
      if (first === "Parameter") {
        styleRow(ws, idx, 0, Math.max(0, row.length - 1), excelStyles.etchHeader);
        return;
      }
      if (section === "etch" && first && !first.startsWith("Clean:") && !first.startsWith("Rework:")) {
        styleRow(ws, idx, 0, Math.max(0, row.length - 1), excelStyles.etchBody);
        return;
      }
      if (first.startsWith("Clean:")) {
        section = "clean";
        styleRow(ws, idx, 0, 6, excelStyles.cleanTitle);
        return;
      }
      if (first === "Machine" && row[1] === "Chemicals") {
        styleRow(ws, idx, 0, 5, excelStyles.cleanHeader);
        return;
      }
      if (section === "clean" && first) {
        styleRow(ws, idx, 0, 5, excelStyles.cleanBody);
        return;
      }
      if (first.startsWith("Rework:")) {
        section = "rework";
        styleRow(ws, idx, 0, 6, excelStyles.reworkTitle);
      }
    });
  }

  function exportExcel() {
    if (!window.XLSX) { alert("Excel export library is not loaded."); return; }
    const now = new Date();
    const title = state.meta.title || "Custom Runcard";
    const workbook = XLSX.utils.book_new();
    const usedSheetNames = new Set();

    // ── Cover sheet ────────────────────────────────────────────────────────────
    const coverRows = [
      ["Runcard", title],
      ["Owner", state.meta.owner || ""],
      ["Generated", now.toLocaleString()],
      [],
      ["Step", "Title", "COT-DEV Recipe", "Etch Recipes", "Clean Recipes", "Rework Recipes"]
    ];
    state.cards.forEach((card, idx) => {
      const recipe = card.selectedRecipeId ? recipeById(card.selectedRecipeId) : null;
      const etchLabel = linkedEtchRecipes(card).map((etch) => `${etch.id} – ${etch.name}`).join(", ");
      const cleanLabel = (card.linkedCleans || []).map((id) => cleanById(id)?.name || id).join(", ");
      const reworkLabel = (card.linkedReworks || []).map((id) => reworkById(id)?.name || id).join(", ");
      coverRows.push([idx + 1, card.title, recipe ? cleanRecipeShortLabel(recipe) : "—", etchLabel, cleanLabel, reworkLabel]);
    });
    const coatingTableTitleRow = appendCoatingSpinSpeedTable(coverRows);
    const coverSheet = XLSX.utils.aoa_to_sheet(coverRows);
    coverSheet["!cols"] = [{ wch: 16 }, { wch: 30 }, { wch: 22 }, { wch: 22 }, { wch: 28 }, { wch: 30 }];
    coverSheet["!merges"] = [
      { s: { r: coatingTableTitleRow, c: 0 }, e: { r: coatingTableTitleRow, c: 3 } }
    ];
    styleIndexSheet(coverSheet, state.cards.length, coatingTableTitleRow);
    XLSX.utils.book_append_sheet(workbook, coverSheet, safeWorksheetName("Index", usedSheetNames));

    // ── One sheet per card ─────────────────────────────────────────────────────
    state.cards.forEach((card, cardIndex) => {
      const rows = [];
      rows.push([`Step ${cardIndex + 1}`, card.title, "", "", "", "", ""]);
      const recipe = card.selectedRecipeId ? recipeById(card.selectedRecipeId) : null;
      if (recipe) rows.push(["COT-DEV Recipe", cleanRecipeShortLabel(recipe), modeBadgeLabel(recipe.mode), "", "", "", ""]);
      rows.push([]);
      rows.push(["No.", "Substep", "Recipe", "Parameter", "Machine", "Condition", "Note"]);

      let subIndex = 0;
      card.steps.filter((s) => s.enabled).forEach((step) => {
        subIndex++;
        rows.push([`${cardIndex + 1}.${subIndex}`, step.name || "", step.recipe || "", visibleStepParams(step), step.machine || "", step.condition || "", step.note || ""]);
      });

      linkedEtchRecipes(card).forEach((etchRecipe) => {
        const { sheetId, id: gId, name: gName } = etchRecipe;
        const fullId = sheetId === "e17-etch" ? "e17-etch-metal-receipe" : "e16-etch-receipe";
        const groups = parseEtchSheet(fullId);
        const group = groups.find((g) => g.id === gId && g.name === gName) || groups.find((g) => g.id === gId);
        rows.push([]);
        rows.push([`Etch Recipe: ${gId} – ${gName}`]);
        if (group && group.params.length) {
          const maxS = group.params.reduce((m, p) => Math.max(m, p.steps.length), 0);
          rows.push(["Parameter", ...Array.from({ length: maxS }, (_, i) => `Step ${i + 1}`)]);
          group.params.forEach((p) => rows.push([p.name, ...p.steps]));
        }
      });

      (card.linkedCleans || []).forEach((cleanId) => {
        const clean = cleanById(cleanId);
        if (!clean) return;
        rows.push([]);
        rows.push([`Clean: ${clean.name}`]);
        rows.push(["Machine", "Chemicals", "Ratio", "Temp (℃)", "Time (s)", "Usage"]);
        rows.push([clean.machine, clean.chemicals, clean.ratio, clean.temperature, clean.time, clean.usage]);
      });

      (card.linkedReworks || []).forEach((reworkId) => {
        const rework = reworkById(reworkId);
        if (!rework) return;
        rows.push([]);
        rows.push([`Rework: ${rework.name || rework.title}`]);
        rows.push(["No.", "Substep", "Recipe", "Parameter", "Machine", "Condition", "Note"]);
        rework.steps.forEach((step, idx) => {
          rows.push([idx + 1, step.name || "", step.recipe || "", visibleStepParams(step), step.machine || "", step.condition || "", step.note || ""]);
        });
      });

      const ws = XLSX.utils.aoa_to_sheet(rows);
      ws["!cols"] = [{ wch: 10 }, { wch: 34 }, { wch: 12 }, { wch: 40 }, { wch: 18 }, { wch: 20 }, { wch: 34 }];
      styleCardSheet(ws, rows);
      const sheetName = safeWorksheetName(`${cardIndex + 1}. ${card.title}`, usedSheetNames);
      XLSX.utils.book_append_sheet(workbook, ws, sheetName);
    });

    XLSX.writeFile(workbook, `${sanitizeFilename(title)}.xlsx`, { cellStyles: true });
  }

  // ── Events & Init ──────────────────────────────────────────────────────────

  function bindEvents() {
    els.templateSearch.addEventListener("input", renderTemplateList);
    els.runcardTitle.addEventListener("input", () => { state.meta.title = els.runcardTitle.value; saveState(); });
    els.ownerInput.addEventListener("input", () => { state.meta.owner = els.ownerInput.value; saveState(); });
    els.exportBtn.addEventListener("click", exportExcel);
    els.clearBtn.addEventListener("click", () => { state.cards = []; saveState(); renderCards(); });
    els.resetBtn.addEventListener("click", () => { state = createDefaultState(); saveState(); renderAll(); });
    els.recipeCancelBtn.addEventListener("click", () => {
      pendingRecipeCardId = null;
      renderPendingBanner();
      renderRecipeBrowserCards();
    });
    document.querySelectorAll(".recipe-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => setActiveRecipeTab(btn.dataset.tab));
    });
    els.prevCardBtn.addEventListener("click", () => { activeCardIndex--; renderCards(); });
    els.nextCardBtn.addEventListener("click", () => { activeCardIndex++; renderCards(); });
    document.addEventListener("keydown", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;
      if (e.key === "ArrowLeft" && activeCardIndex > 0) { activeCardIndex--; renderCards(); }
      if (e.key === "ArrowRight" && activeCardIndex < state.cards.length - 1) { activeCardIndex++; renderCards(); }
    });
    els.dropZone.addEventListener("dragover", (event) => {
      event.preventDefault();
      els.dropZone.classList.add("drag-over");
    });
    els.dropZone.addEventListener("dragleave", (event) => {
      if (!els.dropZone.contains(event.relatedTarget)) els.dropZone.classList.remove("drag-over");
    });
    els.dropZone.addEventListener("drop", (event) => {
      event.preventDefault();
      els.dropZone.classList.remove("drag-over");
      if (event.target.closest(".runcard-card")) return;
      handleDrop(event, state.cards.length);
    });
  }

  function renderAll() {
    els.runcardTitle.value = state.meta.title || "";
    els.ownerInput.value = state.meta.owner || "";
    setText(els.sourceLabel, "");
    renderTemplateList();
    renderPendingBanner();
    renderRecipeBrowserCards();
    renderCards();
  }

  loadState();
  bindEvents();
  renderAll();
})();
