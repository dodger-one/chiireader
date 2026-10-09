import { Grabfold } from "grabfold";
import type { PageRef } from "grabfold";
import "./styles.css";

const asset = (name: string) => new URL(`${import.meta.env.BASE_URL}art/${name}`, document.baseURI).href;

const pageTemplates = [
  () => `
    <article class="manga-page page-intro" aria-label="Page 1: Introduction">
      <div class="panel panel--hero art-panel" role="img" aria-label="A translator working late at a desk, surrounded by manga pages" style="--art: url('${asset("translator-desk.svg")}')">
        <div class="narration top-right">Between two languages…</div>
        <div class="sfx sfx--vertical" aria-hidden="true">カリ</div>
        <p class="bubble bubble--normal bubble--intro">Every line has a voice.<br />My job is to let it travel.</p>
      </div>
      <div class="panel panel--strip">
        <div class="speed-lines" aria-hidden="true"></div>
        <div class="narration">Meet <strong>Gemma</strong></div>
        <p class="caption">Online as @Chii_reader · manga translator</p>
      </div>
      <span class="folio">1</span>
    </article>`,
  () => `
    <article class="manga-page page-languages" aria-label="Page 2: Language expertise">
      <div class="panel panel--language-source">
        <span class="panel-kicker">SOURCE</span>
        <strong class="language-display">[日本語]</strong>
        <p class="bubble bubble--thought">Tone, subtext, register, rhythm…</p>
      </div>
      <div class="panel panel--language-target">
        <span class="panel-kicker">TARGET</span>
        <strong class="language-display">[English]</strong>
        <p class="bubble bubble--normal">…rebuilt as dialogue that feels alive.</p>
      </div>
      <div class="panel panel--language-bottom">
        <div class="narration top-right">LANGUAGE PAIR</div>
        <p class="big-copy">[Source language]<span aria-hidden="true"> → </span><br />[Target language]</p>
        <p class="microcopy">Replace with verified languages and proficiency.</p>
      </div>
      <span class="folio">2</span>
    </article>`,
  () => `
    <article class="manga-page page-craft" aria-label="Page 3: Translation craft">
      <div class="panel panel--craft-main art-panel" role="img" aria-label="Close-up of manga panels and dialogue notes" style="--art: url('${asset("panel-notes.svg")}')">
        <p class="bubble bubble--shout">It has to fit the bubble!</p>
        <span class="sfx sfx--impact" aria-hidden="true">ドン!</span>
      </div>
      <div class="panel panel--craft-a"><strong>VOICE</strong><span>Character-first dialogue</span></div>
      <div class="panel panel--craft-b"><strong>SPACE</strong><span>Concise, letterable lines</span></div>
      <div class="panel panel--craft-c"><strong>CONTEXT</strong><span>Cultural research</span></div>
      <div class="narration craft-note">Translation is writing under visual pressure.</div>
      <span class="folio">3</span>
    </article>`,
  () => `
    <article class="manga-page page-experience" aria-label="Page 4: Professional experience">
      <div class="panel panel--experience-title">
        <p class="chapter-number">FILE 04</p>
        <h2>Professional<br />case file</h2>
      </div>
      <div class="panel panel--experience-list">
        <div class="case-row"><span>01</span><p><strong>[Role or project]</strong><br />[Client / publisher · dates]</p></div>
        <div class="case-row"><span>02</span><p><strong>[Role or project]</strong><br />[Client / publisher · dates]</p></div>
        <div class="case-row"><span>03</span><p><strong>[Specialty]</strong><br />[Verified result or responsibility]</p></div>
      </div>
      <div class="panel panel--experience-quote">
        <p class="bubble bubble--whisper">No invented credits. Only approved work goes here.</p>
      </div>
      <span class="folio">4</span>
    </article>`,
  () => `
    <article class="manga-page page-process" aria-label="Page 5: Translation process">
      <div class="narration top-right">THE FOUR-PASS METHOD</div>
      <ol class="process-grid">
        <li class="panel"><span class="process-no">1</span><strong>READ</strong><small>Story, voice, visual context</small></li>
        <li class="panel"><span class="process-no">2</span><strong>RESEARCH</strong><small>Terms, references, intent</small></li>
        <li class="panel"><span class="process-no">3</span><strong>TRANSLATE</strong><small>Natural, concise dialogue</small></li>
        <li class="panel"><span class="process-no">4</span><strong>REVIEW</strong><small>In-panel QA and polish</small></li>
      </ol>
      <div class="panel process-finish">
        <span class="sfx sfx--wide" aria-hidden="true">完成</span>
        <p class="bubble bubble--normal">Ready for lettering.</p>
      </div>
      <span class="folio">5</span>
    </article>`,
  () => `
    <article class="manga-page page-sample" aria-label="Page 6: From Chii reader's public feed">
      <figure class="panel sample-scene">
        <img src="https://pbs.twimg.com/media/HUImchgXkAAXlpI?format=webp&amp;name=small" srcset="https://pbs.twimg.com/media/HUImchgXkAAXlpI?format=webp&amp;name=small 493w, https://pbs.twimg.com/media/HUImchgXkAAXlpI?format=webp&amp;name=large 847w" sizes="(min-width: 760px) 42vw, 88vw" alt="A Spanish-lettered manga excerpt shared by @Chii_reader: two schoolgirls react to an unexpected close encounter" loading="lazy" referrerpolicy="no-referrer" />
        <figcaption class="narration">FROM @CHII_READER’S PUBLIC FEED</figcaption>
      </figure>
      <div class="panel sample-result">
        <span class="panel-kicker">WHY MANGA NEEDS A HUMAN VOICE</span>
        <blockquote>Timing. Tone. Space. Character.</blockquote>
        <p>A single bubble has to carry them all. This public-feed image illustrates the medium; no publication credit is claimed.</p>
      </div>
      <div class="panel sample-link">
        <strong>READ WITH CHII</strong>
        <a href="https://x.com/Chii_reader" target="_blank" rel="noreferrer">Follow @Chii_reader →</a>
      </div>
      <span class="folio">6</span>
    </article>`,
];

function coverTemplate(side: "front" | "back", face: "inside" | "outside") {
  if (side === "front" && face === "outside") {
    return `
      <article class="manga-page cover cover--front" aria-label="Front cover">
        <p class="cover-kicker">A manga résumé</p>
        <h2><span>The Translator</span><strong>Between<br />Panels</strong></h2>
        <div class="cover-portrait" aria-hidden="true"><span></span></div>
        <p class="cover-byline">GEMMA<br /><small>@CHII_READER</small></p>
        <p class="cover-edition">PORTFOLIO EDITION · 01</p>
      </article>`;
  }

  if (side === "back" && face === "outside") {
    return `
      <article class="manga-page cover cover--back" aria-label="Back cover with contact information">
        <div class="back-mark" aria-hidden="true">終</div>
        <p class="eyebrow">Let’s make every voice land.</p>
        <h2>Gemma · @Chii_reader</h2>
        <p>Manga translator · reader · @Chii_reader</p>
        <a href="https://x.com/Chii_reader" target="_blank" rel="noreferrer">x.com/Chii_reader</a>
        <small>Add a professional email before final publication.</small>
      </article>`;
  }

  return `
    <article class="manga-page inside-cover" aria-label="${side === "front" ? "Inside front cover" : "Inside back cover"}">
      <div class="inside-pattern" aria-hidden="true"></div>
      <p>${side === "front" ? "Read from right to left" : "Thank you for reading"}</p>
      <span aria-hidden="true">${side === "front" ? "←" : "終"}</span>
    </article>`;
}

function renderPage(page: PageRef, mobile: boolean): string {
  if (page.kind === "cover") return coverTemplate(page.side, page.face);
  if (mobile && page.kind === "back") {
    return `<article class="manga-page page-verso" aria-hidden="true"><div class="inside-pattern"></div></article>`;
  }
  if (mobile) return pageTemplates[page.sheet]?.() ?? `<article class="manga-page" aria-label="Blank page"></article>`;
  const index = page.sheet * 2 + (page.kind === "back" ? 1 : 0);
  return pageTemplates[index]?.() ?? `<article class="manga-page" aria-label="Blank page"></article>`;
}

function requiredElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Required element not found: ${selector}`);
  return element;
}

const bookElement = requiredElement<HTMLElement>("#book");
const previousButton = requiredElement<HTMLButtonElement>("#previous-page");
const nextButton = requiredElement<HTMLButtonElement>("#next-page");
const status = requiredElement<HTMLElement>("#page-status");
const zoomButton = requiredElement<HTMLButtonElement>("#zoom-button");
const helpButton = requiredElement<HTMLButtonElement>("#help-button");
const readingHelp = requiredElement<HTMLElement>("#reading-help");

const spreadMedia = window.matchMedia("(min-width: 760px)");
let mobile = !spreadMedia.matches;
let book = createBook(mobile);

function createBook(singlePage: boolean, position = -2) {
  return new Grabfold(bookElement, {
    // Grabfold single-page mode displays sheet fronts only. On small screens we
    // therefore use one sheet per logical page; spreads use physical front/back faces.
    sheets: singlePage ? 6 : 3,
    covers: "hard",
    binding: "right",
    layout: singlePage ? "single" : "spread",
    pageRatio: 0.707,
    fit: "contain",
    position,
    duration: 760,
    thickness: 14,
    shadow: 0.58,
    gutter: 0.42,
    lift: 36,
    label: "Gemma, also known as Chii reader — an interactive manga résumé",
    reducedMotion: "auto",
    render(slot, page) {
      slot.innerHTML = renderPage(page, singlePage);
    },
    onTurn: updateControls,
  });
}

function updateControls() {
  previousButton.disabled = !book.canPrev();
  nextButton.disabled = !book.canNext();

  const position = book.position;
  if (position <= -2) status.textContent = "Front cover";
  else if (mobile && position >= 6 || !mobile && position >= 3) status.textContent = "Back cover";
  else if (mobile && position === 5 || !mobile && position === 2) status.textContent = "Inside back cover";
  else if (mobile) status.textContent = `Page ${position + 2} of 6`;
  else status.textContent = `Opening ${position + 2} of 3`;
}

previousButton.addEventListener("click", () => void book.prev());
nextButton.addEventListener("click", () => void book.next());

spreadMedia.addEventListener("change", ({ matches }) => {
  const oldPosition = book.position;
  const logicalPage = mobile
    ? Math.max(0, Math.min(5, oldPosition + 1))
    : Math.max(0, Math.min(5, oldPosition < 0 ? 0 : oldPosition * 2 + 1));
  const wasFrontCover = oldPosition <= -2;
  const wasBackCover = mobile ? oldPosition >= 6 : oldPosition >= 3;

  book.destroy();
  mobile = !matches;
  const newPosition = wasFrontCover
    ? -2
    : wasBackCover
      ? mobile ? 6 : 3
      : mobile ? logicalPage - 1 : Math.floor((logicalPage - 1) / 2);
  book = createBook(mobile, newPosition);
  updateControls();
});

helpButton.addEventListener("click", () => {
  const isOpen = helpButton.getAttribute("aria-expanded") === "true";
  helpButton.setAttribute("aria-expanded", String(!isOpen));
  readingHelp.hidden = isOpen;
});

zoomButton.addEventListener("click", () => {
  const zoomed = document.body.classList.toggle("is-zoomed");
  zoomButton.setAttribute("aria-pressed", String(zoomed));
  zoomButton.textContent = zoomed ? "Fit book" : "Enlarge";
});

updateControls();
