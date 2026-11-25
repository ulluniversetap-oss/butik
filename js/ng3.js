/*
 * Новогодние интерактивы «А» Бутик (идеи из презентации «Новый год 2027»).
 *   "prediction" — кнопка «Предсказание на 2027»: встряхиваешь снежный шар и получаешь предсказание.
 *   "windows"    — блок «Дом, в котором празднуют»: в окнах загорается свет и оживают праздничные сцены,
 *                  по клику — короткая история и переход к подбору квартир.
 * Режим задаёт страница: <script>window.NG3="prediction"</script>; для проверки можно ?ng3=windows.
 */
(function () {
  'use strict';

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var TAU = Math.PI * 2;
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* Открыть подбор квартир: на сайте это каталог macrocrm, иначе — прокрутка к проектам */
  function openCatalog() {
    try {
      if (window.macrocrm && macrocrm.initCatalogAndShow) { macrocrm.initCatalogAndShow({ type: 'catalog' }); return; }
    } catch (e) {}
    var t = document.querySelector('.container-project') || document.querySelector('.project-list');
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* Модальное окно (общая обвязка) */
  function Modal(cls, label) {
    var self = this;
    this.root = el('div', 'ng3-modal ' + cls);
    this.root.setAttribute('role', 'dialog');
    this.root.setAttribute('aria-modal', 'true');
    this.root.setAttribute('aria-label', label);
    this.root.innerHTML = '<div class="ng3-modal__backdrop" data-close></div><div class="ng3-modal__card"><button type="button" class="ng3-modal__close" aria-label="Закрыть" data-close>×</button><div class="ng3-modal__body"></div></div>';
    this.body = this.root.querySelector('.ng3-modal__body');
    this.root.addEventListener('click', function (e) { if (e.target.hasAttribute('data-close')) self.close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && self.open_) self.close(); });
    document.body.appendChild(this.root);
  }
  Modal.prototype.show = function () {
    this.prevFocus = document.activeElement;
    this.open_ = true;
    this.root.classList.add('is-open');
    document.documentElement.classList.add('ng3-lock');
    var f = this.root.querySelector('[data-autofocus]') || this.root.querySelector('.ng3-modal__close');
    setTimeout(function () { f && f.focus(); }, 60);
  };
  Modal.prototype.close = function () {
    this.open_ = false;
    this.root.classList.remove('is-open');
    document.documentElement.classList.remove('ng3-lock');
    if (this.onclose) this.onclose();
    if (this.prevFocus && this.prevFocus.focus) this.prevFocus.focus();
  };

  /* =====================================================================
   * 1. Предсказание на 2027
   * ===================================================================== */
  var PREDICTIONS = [
    'В 2027 году тебя ждёт переезд. И это будет лучший переезд в твоей жизни.',
    'Скоро у тебя появится место, которое захочется называть своим.',
    'В новом году ты впервые повесишь шторы, которые выбрал сам.',
    'Этот год подарит тебе кухню, на которой поместятся все друзья.',
    'Твой следующий Новый год пройдёт в своей квартире. Ёлка уже выбирает угол.',
    'Звёзды советуют: присмотрись к квартире с видом. Скоро он станет твоим.',
    'В 2027-м ты узнаешь, как пахнет новый дом. Спойлер: счастьем.',
    'Год больших планов: ипотека одобрится быстрее, чем ты допьёшь какао.',
    'Тебя ждут новые соседи, с которыми захочется дружить семьями.',
    'В этом году у тебя появится свой подоконник для котика. Или для мечты.',
    'Предсказываем просторную гостиную и много гостей на новоселье.',
    'Ключи от новой квартиры — главный подарок, который ты получишь в 2027-м.',
    'Новый год — новая глава. Пусть она начнётся с новоселья.',
    'Скоро ты будешь выбирать не «где снять», а «какой цвет стен».',
    'В 2027-м ты наконец-то расставишь книги на своих полках.',
    'Звёзды сошлись: впереди квартира рядом со всем, что ты любишь.',
    'Этот год принесёт тебе детскую, в которой будет много смеха.',
    'Тебя ждёт балкон, с которого так красиво встречать рассветы.',
    'В новом году твой адрес изменится — а вместе с ним и настроение.',
    'Предсказание дня: самое время посмотреть планировки. Вдруг там твоя?',
    'В 2027-м у тебя будет своя ванная. И никакой очереди по утрам.',
    'Скоро ты сможешь сказать: «Приезжайте ко мне — я теперь живу здесь».',
    'Год уюта: тёплый пол, мягкий свет и своё пространство.',
    'Твоя удача в 2027 году живёт по адресу, который ты ещё не знаешь.'
  ];

  var prediction = {
    last: -1, busy: false,

    pick: function () {
      var i; do { i = (Math.random() * PREDICTIONS.length) | 0; } while (i === this.last && PREDICTIONS.length > 1);
      this.last = i; return PREDICTIONS[i];
    },

    build: function () {
      var self = this;
      // плавающая кнопка
      var btn = this.btn = el('button', 'ng3-fab',
        '<span class="ng3-fab__orb" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z"/><path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9z"/></svg></span>' +
        '<span class="ng3-fab__text">Предсказание<br><b>на 2027</b></span>');
      btn.type = 'button';
      btn.addEventListener('click', function () { self.open(); });
      document.body.appendChild(btn);

      // окно со снежным шаром
      var m = this.modal = new Modal('ng3-predict', 'Предсказание на 2027 год');
      m.body.innerHTML =
        '<div class="ng3-predict__eyebrow">Новогоднее предсказание</div>' +
        '<h2 class="ng3-predict__title">Что ждёт тебя в 2027?</h2>' +
        '<div class="ng3-globe" aria-hidden="true">' +
          '<div class="ng3-globe__glass"><canvas class="ng3-globe__snow"></canvas>' +
            '<svg class="ng3-globe__house" viewBox="0 0 160 110">' +
              '<defs><linearGradient id="ng3g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d9e3ec"/></linearGradient></defs>' +
              '<path d="M8 104c20-10 46-14 72-14s52 4 72 14z" fill="#f4f8fb"/>' +
              '<rect x="34" y="30" width="48" height="66" fill="url(#ng3g)"/><rect x="34" y="30" width="10" height="66" fill="#474a56"/>' +
              '<rect x="86" y="46" width="40" height="50" fill="url(#ng3g)"/><rect x="116" y="46" width="10" height="50" fill="#00a8f5"/>' +
              '<g class="ng3-globe__win" fill="#ffd27a">' +
                '<rect x="49" y="38" width="7" height="9"/><rect x="62" y="38" width="7" height="9"/><rect x="49" y="54" width="7" height="9"/><rect x="62" y="54" width="7" height="9"/>' +
                '<rect x="49" y="70" width="7" height="9"/><rect x="62" y="70" width="7" height="9"/><rect x="92" y="54" width="6" height="8"/><rect x="104" y="54" width="6" height="8"/>' +
                '<rect x="92" y="68" width="6" height="8"/><rect x="104" y="68" width="6" height="8"/>' +
              '</g>' +
              '<path d="M30 30h56M82 46h48" stroke="#fff" stroke-width="3" stroke-linecap="round"/>' +
              '<path d="M18 96l7-16 7 16zM20 88l5-11 5 11z" fill="#2f6b55"/><path d="M134 96l6-14 6 14zM136 89l4-9 4 9z" fill="#2f6b55"/>' +
            '</svg>' +
            '<div class="ng3-globe__shine"></div></div>' +
          '<div class="ng3-globe__base"><span>2027</span></div>' +
        '</div>' +
        '<div class="ng3-predict__paper" aria-live="polite"><p class="ng3-predict__text">Загадай желание и встряхни шар — он подскажет, что приготовил для тебя новый год.</p></div>' +
        '<div class="ng3-predict__actions">' +
          '<button type="button" class="ng3-btn ng3-btn_main" data-shake data-autofocus>Встряхнуть шар</button>' +
          '<button type="button" class="ng3-btn ng3-btn_ghost" data-catalog hidden>Подобрать квартиру</button>' +
          '<button type="button" class="ng3-btn ng3-btn_link" data-share hidden>Поделиться</button>' +
        '</div>';
      this.text = m.body.querySelector('.ng3-predict__text');
      this.paper = m.body.querySelector('.ng3-predict__paper');
      this.globe = m.body.querySelector('.ng3-globe');
      this.shakeBtn = m.body.querySelector('[data-shake]');
      this.catBtn = m.body.querySelector('[data-catalog]');
      this.shareBtn = m.body.querySelector('[data-share]');
      this.shakeBtn.addEventListener('click', function () { self.shake(); });
      this.catBtn.addEventListener('click', function () { m.close(); openCatalog(); });
      this.shareBtn.addEventListener('click', function () { self.share(); });
      m.onclose = function () { self.snow.stop(); };
      this.snow.init(m.body.querySelector('.ng3-globe__snow'));

      // подсказка-тизер через несколько секунд после загрузки (один раз за визит)
      if (!store('ng3_teased')) {
        setTimeout(function () {
          if (self.modal.open_) return;
          var tip = el('div', 'ng3-fab__tip', 'Что ждёт тебя в 2027? <b>Нажми!</b>');
          btn.appendChild(tip);
          requestAnimationFrame(function () { tip.classList.add('is-on'); });
          setTimeout(function () { tip.classList.remove('is-on'); setTimeout(function () { tip.remove(); }, 500); }, 6500);
          store('ng3_teased', '1');
        }, 4500);
      }
      if (location.hash === '#prediction') setTimeout(function () { self.open(); }, 400);
    },

    open: function () {
      this.modal.show();
      this.snow.start();
    },

    shake: function () {
      if (this.busy) return;
      var self = this;
      this.busy = true;
      this.globe.classList.remove('is-shaking'); void this.globe.offsetWidth;
      this.globe.classList.add('is-shaking');
      this.paper.classList.add('is-hidden');
      this.snow.burst();
      setTimeout(function () {
        self.text.textContent = self.pick();
        self.paper.classList.remove('is-hidden');
        self.paper.classList.add('is-result');
        self.shakeBtn.textContent = 'Ещё предсказание';
        self.catBtn.hidden = false; self.shareBtn.hidden = false;
        self.globe.classList.remove('is-shaking');
        self.busy = false;
      }, reduce ? 200 : 1300);
    },

    share: function () {
      var t = 'Моё предсказание на 2027: «' + this.text.textContent + '» — А Бутик', url = location.href.split('#')[0] + '#prediction', self = this;
      if (navigator.share) { navigator.share({ title: 'Предсказание на 2027', text: t, url: url }).catch(function () {}); return; }
      var done = function () { self.shareBtn.textContent = 'Скопировано!'; setTimeout(function () { self.shareBtn.textContent = 'Поделиться'; }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(t + ' ' + url).then(done, function () {});
    },

    /* снег внутри шара */
    snow: {
      c: null, x: null, p: [], raf: 0, last: 0, w: 0, h: 0,
      init: function (c) { this.c = c; this.x = c.getContext('2d'); },
      size: function () {
        var d = Math.min(window.devicePixelRatio || 1, 2), r = this.c.getBoundingClientRect();
        this.w = r.width; this.h = r.height; this.c.width = r.width * d; this.c.height = r.height * d;
        this.x.setTransform(d, 0, 0, d, 0, 0);
        if (!this.p.length) for (var i = 0; i < 70; i++) this.p.push({ x: rnd(0, this.w), y: rnd(0, this.h), vx: 0, vy: rnd(6, 16), r: rnd(0.8, 2.2), ph: rnd(0, TAU) });
      },
      burst: function () { for (var i = 0; i < this.p.length; i++) { var q = this.p[i]; q.vx = rnd(-120, 120); q.vy = rnd(-220, -60); } },
      start: function () {
        var S = this; this.size();
        if (reduce) { this.draw(0); return; }
        if (!this.raf) { this.last = performance.now(); this.raf = requestAnimationFrame(function f(t) { S.raf = requestAnimationFrame(f); S.draw(Math.min((t - S.last) / 1000, 0.05)); S.last = t; }); }
      },
      stop: function () { cancelAnimationFrame(this.raf); this.raf = 0; },
      draw: function (dt) {
        var x = this.x, cx = this.w / 2, cy = this.h / 2, R = this.w / 2 - 2;
        x.clearRect(0, 0, this.w, this.h);
        x.fillStyle = '#fff';
        for (var i = 0; i < this.p.length; i++) {
          var q = this.p[i];
          q.vx *= Math.pow(0.35, dt); q.vy += (14 - q.vy) * Math.min(1, dt * 1.6); q.ph += dt;
          q.x += (q.vx + Math.sin(q.ph * 1.3) * 6) * dt; q.y += q.vy * dt;
          var dx = q.x - cx, dy = q.y - cy, d = Math.sqrt(dx * dx + dy * dy);
          if (d > R - q.r) { // снежинки остаются внутри стеклянного шара
            if (q.y > cy) { q.y = rnd(cy - R * 0.9, cy - R * 0.4); q.x = cx + rnd(-R * 0.6, R * 0.6); q.vy = rnd(6, 14); }
            else { q.x = cx + dx / d * (R - q.r - 1); q.y = cy + dy / d * (R - q.r - 1); q.vx *= -0.4; }
          }
          x.globalAlpha = 0.75; x.beginPath(); x.arc(q.x, q.y, q.r, 0, TAU); x.fill();
        }
        x.globalAlpha = 1;
      }
    }
  };

  /* =====================================================================
   * 2. Ожившие окна — «Дом, в котором празднуют»
   * ===================================================================== */
  var S = 'class="ng3-sil"'; // силуэты
  var SCENES = {
    tree: {
      label: 'Наряжают ёлку',
      svg: '<svg viewBox="0 0 60 80"><path ' + S + ' d="M30 14l13 22h-6l10 18h-7l9 16H11l9-16h-7l10-18h-6z"/><rect ' + S + ' x="27" y="70" width="6" height="7"/>' +
        '<circle class="ng3-bulb b1" cx="24" cy="40" r="2"/><circle class="ng3-bulb b2" cx="35" cy="47" r="2"/><circle class="ng3-bulb b3" cx="22" cy="58" r="2"/>' +
        '<circle class="ng3-bulb b1" cx="38" cy="62" r="2"/><circle class="ng3-bulb b2" cx="30" cy="31" r="2"/><circle class="ng3-bulb b3" cx="29" cy="64" r="2"/>' +
        '<path class="ng3-star" d="M30 6l2 4.5 5 .5-3.7 3.3 1 4.8L30 16.6 25.7 19l1-4.8L23 11l5-.5z"/></svg>',
      title: 'Первая ёлка в своей квартире',
      story: 'Год назад эта семья встречала праздник на съёмной квартире и ставила маленькую ёлку на тумбочку. В этом декабре ёлка стоит там, где они сами решили: у большого окна в гостиной.',
      cta: 'Квартиры для семьи'
    },
    dance: {
      label: 'Танцуют',
      svg: '<svg viewBox="0 0 60 80"><g class="ng3-bob a"><circle ' + S + ' cx="20" cy="30" r="6"/><path ' + S + ' d="M13 78l3-26-6-10 4-3 7 8h3l6-10 4 2-6 14 2 25h-5l-3-18-3 18z"/></g>' +
        '<g class="ng3-bob b"><circle ' + S + ' cx="42" cy="32" r="5.5"/><path ' + S + ' d="M34 78l4-20-8-6 3-3 8 5h3l4-10 4 1-4 14 6 19h-6l-5-15-3 15z"/></g>' +
        '<g class="ng3-confetti"><rect x="10" y="10" width="2" height="4" fill="#ff7a7a"/><rect x="30" y="6" width="2" height="4" fill="#35b9f5"/><rect x="48" y="12" width="2" height="4" fill="#ffd36b"/></g></svg>',
      title: 'Новоселье под бой курантов',
      story: 'Ключи они получили 28 декабря и решили не ждать: праздник прямо среди коробок. Мебели ещё нет, зато в гостиной хватает места, чтобы танцевать до утра.',
      cta: 'Квартиры с просторной гостиной'
    },
    tv: {
      label: 'Смотрят кино',
      svg: '<svg viewBox="0 0 60 80"><rect class="ng3-tv" x="14" y="18" width="32" height="20" rx="2"/><rect ' + S + ' x="28" y="38" width="4" height="5"/>' +
        '<path ' + S + ' d="M4 80V62c0-4 3-6 6-6h40c3 0 6 2 6 6v18z"/><circle ' + S + ' cx="22" cy="52" r="6"/><circle ' + S + ' cx="38" cy="53" r="5.5"/></svg>',
      title: 'Тот самый фильм',
      story: 'Каждый год 31 декабря они пересматривают одно и то же кино. Раньше — на ноутбуке в общежитии, теперь — с дивана в своей студии, под пледом и с мандаринами.',
      cta: 'Студии и однокомнатные'
    },
    kitchen: {
      label: 'Режут салаты',
      svg: '<svg viewBox="0 0 60 80"><circle ' + S + ' cx="34" cy="26" r="6.5"/><path ' + S + ' d="M24 62l2-24c1-4 4-5 8-5s7 1 8 5l2 24z"/>' +
        '<g class="ng3-stir"><path ' + S + ' d="M26 42l-10 10 2 2 11-9z"/></g><path ' + S + ' d="M2 62h56v4H2z"/><path ' + S + ' d="M8 56c0 4 3 6 8 6s8-2 8-6z"/>' +
        '<path class="ng3-steam" d="M14 50c-2-3 2-5 0-8M19 50c-2-3 2-5 0-8" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="1.2" stroke-linecap="round"/><path ' + S + ' d="M6 66h4v14H6zM50 66h4v14h-4z"/></svg>',
      title: 'Оливье на большой кухне',
      story: 'На старой кухне двоим было тесно. Здесь у стола собирается вся семья: бабушка режет салат, папа спорит, сколько класть горошка, а дети таскают мандарины.',
      cta: 'Квартиры с большой кухней'
    },
    cat: {
      label: 'Кот на подоконнике',
      svg: '<svg viewBox="0 0 60 80"><circle class="ng3-moon" cx="44" cy="18" r="7"/><path ' + S + ' d="M2 66h56v5H2z"/>' +
        '<path ' + S + ' d="M18 66c-2-8 0-17 6-21l-1-8 5 5c2-1 4-1 6 0l5-5-1 8c5 4 6 12 4 21z"/>' +
        '<path class="ng3-tail ng3-sil" d="M40 64c6 0 9-3 9-8" fill="none" stroke-width="3.2" stroke-linecap="round"/>' +
        '<circle class="ng3-eye" cx="27" cy="50" r="1.1"/><circle class="ng3-eye" cx="33" cy="50" r="1.1"/></svg>',
      title: 'Свой подоконник',
      story: 'Кот Пломбир впервые в жизни встречает Новый год на собственном широком подоконнике. Отсюда видно весь двор, гирлянды и салют — и он явно доволен переездом.',
      cta: 'Квартиры с видом'
    },
    toast: {
      label: 'Поднимают бокалы',
      svg: '<svg viewBox="0 0 60 80"><circle ' + S + ' cx="15" cy="40" r="5.5"/><circle ' + S + ' cx="45" cy="40" r="5.5"/><circle ' + S + ' cx="30" cy="36" r="5"/>' +
        '<path ' + S + ' d="M6 70l2-18c1-3 4-5 7-5s6 2 7 5l1 18zM37 70l1-18c1-3 4-5 7-5s6 2 7 5l2 18zM22 70l1-21c1-3 4-4 7-4s6 1 7 4l1 21z"/>' +
        '<g class="ng3-clink"><path class="ng3-glass l" d="M23 22h5l-1 7h-1v6h2v1h-6v-1h2v-6h-1z"/><path class="ng3-glass r" d="M32 22h5l-1 7h-1v6h2v1h-6v-1h2v-6h-1z"/></g>' +
        '<path ' + S + ' d="M0 70h60v10H0z"/></svg>',
      title: 'Соседи, которые стали друзьями',
      story: 'Познакомились в чате дома, когда выбирали ёлку для двора. Теперь встречают Новый год вместе: сначала у одних, после курантов — этажом выше.',
      cta: 'Выбрать жилой комплекс'
    }
  };
  var KEYS = Object.keys(SCENES);

  var windows = {
    wins: [], timer: 0,

    build: function () {
      var promo = document.querySelector('.promo');
      if (!promo) return;
      var self = this;
      var sec = this.sec = el('section', 'ng3-house');
      sec.innerHTML =
        '<canvas class="ng3-house__snow" aria-hidden="true"></canvas>' +
        '<div class="ng3-house__head">' +
          '<div class="ng3-house__eyebrow">Новый год 2027</div>' +
          '<h2 class="ng3-house__title">Дом, в котором <span>празднуют</span></h2>' +
          '<p class="ng3-house__lead">Наведите на окно — и загляните в праздник. Нажмите, чтобы узнать его историю.</p>' +
        '</div>' +
        '<div class="ng3-bld" role="group" aria-label="Окна праздничного дома">' +
          '<div class="ng3-bld__roof" aria-hidden="true"><span class="ng3-bld__snowcap"></span><span class="ng3-bld__garland"></span></div>' +
          '<div class="ng3-bld__facade"></div>' +
          '<div class="ng3-bld__ground" aria-hidden="true"><span class="ng3-bld__door"></span></div>' +
        '</div>' +
        '<div class="ng3-house__foot">' +
          '<p>Ваш свет скоро будет гореть здесь</p>' +
          '<button type="button" class="ng3-btn ng3-btn_main" data-catalog>Выбрать квартиру</button>' +
        '</div>';
      promo.parentNode.insertBefore(sec, promo.nextSibling);
      sec.querySelector('[data-catalog]').addEventListener('click', openCatalog);

      // гирлянда по крыше
      var g = sec.querySelector('.ng3-bld__garland'), cols = ['#ffd36b', '#35b9f5', '#fff1d6', '#ff7a7a', '#8ee6b0'];
      for (var i = 0; i < 28; i++) {
        var b = el('i'); b.style.left = (i / 27 * 100) + '%'; b.style.setProperty('--c', cols[i % cols.length]);
        b.style.animationDelay = (-(i * 0.37) % 2.4) + 's'; g.appendChild(b);
      }

      this.layout();
      var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { self.layout(); }, 200); });

      // окно с историей
      var m = this.modal = new Modal('ng3-story', 'История окна');
      m.body.innerHTML = '<div class="ng3-story__pic"></div><div class="ng3-story__eyebrow">История одного окна</div><h3 class="ng3-story__title"></h3><p class="ng3-story__text"></p>' +
        '<div class="ng3-predict__actions"><button type="button" class="ng3-btn ng3-btn_main" data-go data-autofocus></button><button type="button" class="ng3-btn ng3-btn_ghost" data-close>Заглянуть в другое окно</button></div>';
      m.body.querySelector('[data-go]').addEventListener('click', function () { m.close(); openCatalog(); });

      this.flakes.init(sec.querySelector('.ng3-house__snow'), sec);
      // окна загораются по одному, когда блок попадает в экран
      var io = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { self.wakeUp(); self.flakes.start(); }
        else { clearInterval(self.timer); self.timer = 0; self.flakes.stop(); }
      }, { threshold: 0.15 });
      io.observe(sec);
      if (window.ScrollTrigger && ScrollTrigger.refresh) setTimeout(function () { ScrollTrigger.refresh(); }, 300);
    },

    layout: function () {
      var w = window.innerWidth, cols = w < 600 ? 4 : (w < 1000 ? 6 : 8), rows = w < 600 ? 6 : 5;
      if (this.cols === cols) return;
      this.cols = cols;
      var f = this.sec.querySelector('.ng3-bld__facade'), self = this;
      f.innerHTML = ''; f.style.setProperty('--cols', cols);
      this.wins = [];
      var bag = [];
      for (var i = 0; i < cols * rows; i++) {
        if (!bag.length) bag = KEYS.slice().sort(function () { return Math.random() - 0.5; });
        var key = bag.pop(), sc = SCENES[key];
        var b = el('button', 'ng3-win' + (i % cols === 0 || i % cols === cols - 1 ? ' is-balcony' : ''));
        b.type = 'button'; b.dataset.scene = key;
        b.setAttribute('aria-label', 'Окно: ' + sc.label + '. Открыть историю');
        b.innerHTML = '<span class="ng3-win__glass">' + sc.svg + '</span><span class="ng3-win__curtain l"></span><span class="ng3-win__curtain r"></span><span class="ng3-win__tip">' + sc.label + '</span>';
        b.addEventListener('mouseenter', function () { this.classList.add('is-on', 'is-peek'); });
        b.addEventListener('mouseleave', function () { this.classList.remove('is-peek'); });
        b.addEventListener('focus', function () { this.classList.add('is-on', 'is-peek'); });
        b.addEventListener('blur', function () { this.classList.remove('is-peek'); });
        b.addEventListener('click', function () { self.story(this.dataset.scene); });
        f.appendChild(b); this.wins.push(b);
      }
      if (this.awake) this.lightSome(0.45);
    },

    lightSome: function (share) {
      this.wins.forEach(function (w) { if (Math.random() < share) w.classList.add('is-on'); });
    },

    wakeUp: function () {
      var self = this;
      if (!this.awake) { // первое появление: окна вспыхивают одно за другим
        this.awake = true;
        var order = this.wins.slice().sort(function () { return Math.random() - 0.5; }).slice(0, Math.round(this.wins.length * 0.45));
        order.forEach(function (w, i) { setTimeout(function () { w.classList.add('is-on'); }, reduce ? 0 : 250 + i * 110); });
      }
      if (reduce || this.timer) return;
      // дальше дом «живёт»: где-то гасят свет, где-то включают
      this.timer = setInterval(function () {
        var w = self.wins[(Math.random() * self.wins.length) | 0];
        if (w.classList.contains('is-peek')) return;
        var on = self.wins.filter(function (x) { return x.classList.contains('is-on'); }).length / self.wins.length;
        if (w.classList.contains('is-on') ? on > 0.35 : on < 0.65) w.classList.toggle('is-on');
      }, 900);
    },

    story: function (key) {
      var sc = SCENES[key], b = this.modal.body;
      b.querySelector('.ng3-story__pic').innerHTML = '<span class="ng3-win is-on is-peek is-big"><span class="ng3-win__glass">' + sc.svg + '</span></span>';
      b.querySelector('.ng3-story__title').textContent = sc.title;
      b.querySelector('.ng3-story__text').textContent = sc.story;
      b.querySelector('[data-go]').textContent = sc.cta;
      this.modal.show();
    },

    /* лёгкий снег внутри блока */
    flakes: {
      c: null, x: null, p: [], raf: 0, last: 0,
      init: function (c, host) { this.c = c; this.host = host; this.x = c.getContext('2d'); },
      size: function () {
        var d = Math.min(window.devicePixelRatio || 1, 2);
        this.w = this.host.clientWidth; this.h = this.host.clientHeight;
        this.c.width = this.w * d; this.c.height = this.h * d; this.x.setTransform(d, 0, 0, d, 0, 0);
        var n = Math.round(Math.min(Math.max(this.w / 16, 24), 90));
        while (this.p.length < n) this.p.push({ x: rnd(0, this.w), y: rnd(0, this.h), r: rnd(0.8, 2.4), vy: rnd(18, 46), ph: rnd(0, TAU), a: rnd(0.4, 0.9) });
        this.p.length = n;
      },
      start: function () {
        var F = this; this.size();
        if (reduce) { this.draw(0); return; }
        if (!this.raf) { this.last = performance.now(); this.raf = requestAnimationFrame(function f(t) { F.raf = requestAnimationFrame(f); F.draw(Math.min((t - F.last) / 1000, 0.05)); F.last = t; }); }
      },
      stop: function () { cancelAnimationFrame(this.raf); this.raf = 0; },
      draw: function (dt) {
        var x = this.x; x.clearRect(0, 0, this.w, this.h); x.fillStyle = '#fff';
        for (var i = 0; i < this.p.length; i++) {
          var q = this.p[i]; q.y += q.vy * dt; q.ph += dt * 0.8;
          if (q.y > this.h + 4) { q.y = -4; q.x = rnd(0, this.w); }
          x.globalAlpha = q.a; x.beginPath(); x.arc(q.x + Math.sin(q.ph) * 10, q.y, q.r, 0, TAU); x.fill();
        }
        x.globalAlpha = 1;
      }
    }
  };

  /* ---------- Запуск ---------- */
  function init() {
    var m = window.NG3;
    try { var q = /[?&]ng3=(\w+)/.exec(location.search); if (q) m = q[1]; } catch (e) {}
    if (m === 'prediction') prediction.build();
    else if (m === 'windows') windows.build();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
