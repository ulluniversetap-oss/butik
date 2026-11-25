/*
 * Новогоднее оформление «А» Бутик — вторая серия вариантов.
 * Режимы:
 *   "baubles" — ёлочные шары на нитях: качаются, реагируют на курсор, уезжают вверх при прокрутке;
 *   "aurora"  — северное сияние в фирменных голубых тонах над первым экраном, звёзды и падающие звёзды;
 *   "crystal" — крупные хрустальные снежинки: медленно падают, вращаются, расступаются перед курсором.
 * Режим задаёт страница: <script>window.NG2="baubles"</script>; для проверки можно ?ng2=aurora.
 * Подключается вместо css/ng.css + js/ng.js, остальные файлы сайта не трогает.
 */
(function () {
  'use strict';

  var MODES = ['baubles', 'aurora', 'crystal'];
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var TAU = Math.PI * 2;

  function rnd(a, b) { return a + Math.random() * (b - a); }
  function mk(w, h) { var c = document.createElement('canvas'); c.width = w; c.height = h || w; return c; }

  /* Общая обвязка: холст на весь экран, ретина, цикл анимации, пауза в фоне */
  function Layer(cls, fx) {
    this.fx = fx; this.raf = 0; this.last = 0;
    var c = this.canvas = document.createElement('canvas');
    c.className = 'ng2-layer ' + cls;
    c.setAttribute('aria-hidden', 'true');
    document.body.appendChild(c);
    this.ctx = c.getContext('2d');
    var self = this;
    this.loop = function (t) {
      self.raf = requestAnimationFrame(self.loop);
      var dt = Math.min((t - self.last) / 1000 || 0, 0.05);
      self.last = t;
      fx.frame(dt, t / 1000);
    };
  }
  Layer.prototype.size = function () {
    var d = this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth; this.h = window.innerHeight;
    this.canvas.width = Math.round(this.w * d); this.canvas.height = Math.round(this.h * d);
    this.ctx.setTransform(d, 0, 0, d, 0, 0);
  };
  Layer.prototype.play = function () {
    if (reduce) { this.fx.frame(0, 2); return; }
    if (!this.raf) { this.last = performance.now(); this.raf = requestAnimationFrame(this.loop); }
  };
  Layer.prototype.pause = function () { if (this.raf) { cancelAnimationFrame(this.raf); this.raf = 0; } };

  /* Позиция курсора и скорость — для шаров и снежинок */
  var ptr = { x: -9999, y: -9999, vx: 0, vy: 0, t: 0 };
  window.addEventListener('pointermove', function (e) {
    var now = performance.now(), dt = Math.max(now - ptr.t, 8) / 1000;
    if (ptr.x > -9000) { ptr.vx = (e.clientX - ptr.x) / dt; ptr.vy = (e.clientY - ptr.y) / dt; }
    ptr.x = e.clientX; ptr.y = e.clientY; ptr.t = now;
  }, { passive: true });
  document.addEventListener('pointerleave', function () { ptr.x = ptr.y = -9999; ptr.vx = ptr.vy = 0; });

  /* =====================================================================
   * 1. Ёлочные шары
   * ===================================================================== */
  var PALETTE = [
    { name: 'blue',   c0: '#7fd6ff', c1: '#0aa2ec', c2: '#045a92', c3: '#022a48', band: '#f3d58f' },
    { name: 'silver', c0: '#ffffff', c1: '#e3e9ef', c2: '#a7b3bf', c3: '#5d6874', band: '#00a8f5' },
    { name: 'gold',   c0: '#fff3cf', c1: '#f0cd7a', c2: '#b8862f', c3: '#5e4212', band: '#ffffff' },
    { name: 'ink',    c0: '#8c93a6', c1: '#474a56', c2: '#262833', c3: '#101118', band: '#f0cd7a' }
  ];

  var baubles = {
    layer: null, items: [], sprites: {}, glints: [], nextGlint: 0, scrollY: 0, lift: 0, born: 0,

    ball: function (p, r, banded) {
      var pad = Math.ceil(r * 0.5), s = Math.ceil(r * 2 + pad * 2), c = mk(s), x = c.getContext('2d'), m = s / 2;
      // мягкое свечение вокруг
      var gl = x.createRadialGradient(m, m, r * 0.8, m, m, r + pad);
      gl.addColorStop(0, 'rgba(255,255,255,.18)'); gl.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = gl; x.beginPath(); x.arc(m, m, r + pad, 0, TAU); x.fill();
      // тело шара: свет сверху-слева
      var g = x.createRadialGradient(m - r * 0.38, m - r * 0.42, r * 0.05, m, m, r);
      g.addColorStop(0, p.c0); g.addColorStop(0.32, p.c1); g.addColorStop(0.78, p.c2); g.addColorStop(1, p.c3);
      x.fillStyle = g; x.beginPath(); x.arc(m, m, r, 0, TAU); x.fill();
      x.save(); x.beginPath(); x.arc(m, m, r, 0, TAU); x.clip();
      if (banded) { // тонкий пояс с точками
        x.strokeStyle = p.band; x.globalAlpha = 0.85; x.lineWidth = Math.max(1, r * 0.06);
        x.beginPath(); x.ellipse(m, m + r * 0.08, r * 1.02, r * 0.26, 0, 0, TAU); x.stroke();
        x.fillStyle = p.band;
        for (var i = 0; i < 9; i++) {
          var a = Math.PI * (0.08 + i * 0.105);
          x.beginPath(); x.arc(m + Math.cos(a) * r * 1.02 * -1, m + r * 0.08 + Math.sin(a) * r * 0.26, r * 0.045, 0, TAU); x.fill();
        }
        x.globalAlpha = 1;
      }
      // отражение окна внизу и блик
      var rf = x.createRadialGradient(m + r * 0.3, m + r * 0.75, 0, m + r * 0.3, m + r * 0.75, r * 0.6);
      rf.addColorStop(0, 'rgba(255,255,255,.35)'); rf.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = rf; x.fillRect(0, 0, s, s);
      x.restore();
      x.fillStyle = 'rgba(255,255,255,.9)';
      x.beginPath(); x.ellipse(m - r * 0.38, m - r * 0.42, r * 0.2, r * 0.11, -0.7, 0, TAU); x.fill();
      x.fillStyle = 'rgba(255,255,255,.55)';
      x.beginPath(); x.arc(m - r * 0.08, m - r * 0.66, r * 0.05, 0, TAU); x.fill();
      return c;
    },

    star: function (r) { // восьмиконечная золотая звезда-подвеска
      var pad = Math.ceil(r * 0.4), s = Math.ceil(r * 2 + pad * 2), c = mk(s), x = c.getContext('2d'), m = s / 2;
      x.translate(m, m);
      x.shadowColor = 'rgba(255,205,110,.55)'; x.shadowBlur = r * 0.45;
      x.beginPath();
      for (var i = 0; i < 16; i++) {
        var a = i * Math.PI / 8 - Math.PI / 2, rr = i % 2 ? r * 0.42 : (i % 4 ? r * 0.78 : r);
        x[i ? 'lineTo' : 'moveTo'](Math.cos(a) * rr, Math.sin(a) * rr);
      }
      x.closePath();
      var g = x.createLinearGradient(-r, -r, r, r);
      g.addColorStop(0, '#fff4d2'); g.addColorStop(0.45, '#eac46c'); g.addColorStop(1, '#9c6f22');
      x.fillStyle = g; x.fill();
      x.shadowBlur = 0; x.strokeStyle = 'rgba(255,250,235,.7)'; x.lineWidth = 1; x.stroke();
      x.fillStyle = '#fffaf0'; x.beginPath(); x.arc(0, 0, r * 0.12, 0, TAU); x.fill();
      return c;
    },

    glintSprite: function () {
      var s = 48, c = mk(s), x = c.getContext('2d'), m = s / 2;
      [[1, 0.06], [0.06, 1]].forEach(function (k) {
        x.save(); x.translate(m, m); x.scale(k[0], k[1]);
        var g = x.createRadialGradient(0, 0, 0, 0, 0, m);
        g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.4, 'rgba(255,255,255,.5)'); g.addColorStop(1, 'rgba(255,255,255,0)');
        x.fillStyle = g; x.beginPath(); x.arc(0, 0, m, 0, TAU); x.fill(); x.restore();
      });
      return c;
    },

    build: function () {
      var L = this.layer, w = L.w, mob = w < 768, items = [];
      // Шары висят «кластерами» по краям экрана, центр с заголовком остаётся свободным
      var perSide = mob ? 3 : (w < 1200 ? 4 : 5);
      var zone = mob ? 0.3 : 0.2;
      var plan = [
        // [доля внутри зоны, длина нити (доля), радиус (доля), тип]
        [0.08, 0.55, 0.85, 'ball'], [0.3, 0.95, 1.0, 'ball'], [0.52, 0.35, 0.62, 'star'],
        [0.72, 0.75, 0.78, 'ball'], [0.92, 0.48, 0.66, 'ball']
      ];
      var maxLen = mob ? 150 : Math.min(330, L.h * 0.36), baseR = mob ? 17 : 27, pi = 0;
      for (var side = 0; side < 2; side++) {
        for (var i = 0; i < perSide; i++) {
          var pl = plan[mob ? [0, 1, 3][i] : i], f = side ? 1 - pl[0] : pl[0];
          var x = side ? w - w * zone * pl[0] : w * zone * pl[0];
          var len = maxLen * pl[1] * rnd(0.92, 1.08) + (mob ? 40 : 90);
          var r = baseR * pl[2];
          var pal = PALETTE[(pi + side) % PALETTE.length]; pi++;
          var key = pl[3] + pal.name + Math.round(r) + (i % 2);
          if (!this.sprites[key]) this.sprites[key] = pl[3] === 'star' ? this.star(r * 1.15) : this.ball(pal, r, i % 2 === 1);
          items.push({
            x: x + rnd(-6, 6), len: len, r: r, kind: pl[3], spr: this.sprites[key],
            th: rnd(-0.05, 0.05), om: 0, ph: rnd(0, TAU), wf: rnd(0.35, 0.6),
            delay: (side * 0.15 + i * 0.12) + rnd(0, 0.08), spin: rnd(0, TAU), f: f
          });
        }
      }
      this.items = items;
    },

    frame: function (dt, ts) {
      var B = baubles, L = B.layer, ctx = L.ctx, i, it, k;
      ctx.clearRect(0, 0, L.w, L.h);
      // при прокрутке подвески плавно поднимаются за край экрана
      var target = Math.min(B.scrollY * 0.9, 600);
      B.lift += (target - B.lift) * Math.min(1, dt * 8 || 1);
      var age = reduce ? 99 : ts - B.born;
      var nearX = ptr.x, nearY = ptr.y;

      for (i = 0; i < B.items.length; i++) {
        it = B.items[i];
        // появление: нить «выпускается» сверху с лёгкой пружиной
        var p = Math.max(0, Math.min(1, (age - it.delay) / 1.1));
        var ease = p === 1 ? 1 : 1 - Math.pow(1 - p, 3) * Math.cos(p * 9) * (1 - p);
        var len = it.len * ease;
        if (len <= 1) continue;

        if (dt) {
          var g = 1500 / (it.len + it.r);
          var wind = Math.sin(ts * it.wf + it.ph) * 0.35 + Math.sin(ts * 0.23 + it.x * 0.01) * 0.25;
          var acc = -g * Math.sin(it.th) - 0.9 * it.om + wind * 0.6;
          // курсор задевает шар — получает толчок по ходу движения мыши
          var bx = it.x + Math.sin(it.th) * (len + it.r), by = Math.cos(it.th) * (len + it.r) - B.lift;
          var dx = nearX - bx, dy = nearY - by, d2 = dx * dx + dy * dy, rr = it.r + 26;
          if (d2 < rr * rr) {
            k = 1 - Math.sqrt(d2) / rr;
            acc += Math.max(-2200, Math.min(2200, ptr.vx)) * 0.012 * k;
          }
          it.om += acc * dt;
          it.om = Math.max(-4, Math.min(4, it.om));
          it.th += it.om * dt;
          it.spin += dt * (0.6 + Math.abs(it.om));
        }

        var sx = Math.sin(it.th), cx = Math.cos(it.th);
        var ex = it.x + sx * len, ey = cx * len - B.lift;
        if (ey + it.r * 2 < 0) continue;
        // нить
        ctx.strokeStyle = 'rgba(214,186,128,.85)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(it.x, -B.lift - 2); ctx.lineTo(ex, ey); ctx.stroke();
        // колпачок
        ctx.save(); ctx.translate(ex, ey); ctx.rotate(-it.th);
        if (it.kind === 'ball') {
          var cw = it.r * 0.42, ch = it.r * 0.26;
          var cg = ctx.createLinearGradient(-cw / 2, 0, cw / 2, 0);
          cg.addColorStop(0, '#8a6a2c'); cg.addColorStop(0.45, '#f6e2a8'); cg.addColorStop(1, '#7a5a1e');
          ctx.fillStyle = cg; ctx.fillRect(-cw / 2, 0, cw, ch);
          ctx.strokeStyle = 'rgba(214,186,128,.9)';
          ctx.beginPath(); ctx.arc(0, -1, 2.2, 0, TAU); ctx.stroke();
        }
        ctx.restore();
        // сам шар (без поворота — свет всегда сверху-слева)
        var s = it.spr, sw = s.width, cyB = ey + (it.kind === 'ball' ? it.r * 0.22 + it.r : it.r * 1.15);
        var bxx = ex + sx * (cyB - ey), byy = ey + cx * (cyB - ey);
        if (it.kind === 'star') {
          ctx.save(); ctx.translate(bxx, byy);
          ctx.scale(Math.max(0.18, Math.abs(Math.cos(it.spin * 0.5))), 1); // звезда медленно поворачивается
          ctx.drawImage(s, -sw / 2, -sw / 2); ctx.restore();
        } else {
          ctx.drawImage(s, bxx - sw / 2, byy - sw / 2);
        }
        it.cx = bxx; it.cy = byy;
      }

      // редкие искорки-блики на шарах
      if (dt && ts > B.nextGlint && B.items.length) {
        it = B.items[(Math.random() * B.items.length) | 0];
        if (it.cx != null) B.glints.push({ it: it, life: 0, dur: rnd(0.6, 1), sc: rnd(0.35, 0.6) });
        B.nextGlint = ts + rnd(0.5, 1.4);
      }
      for (i = B.glints.length - 1; i >= 0; i--) {
        var gl = B.glints[i]; gl.life += dt / gl.dur;
        if (gl.life >= 1) { B.glints.splice(i, 1); continue; }
        var e = Math.sin(Math.PI * gl.life), gs = B.glint.width * gl.sc * (0.5 + 0.5 * e);
        ctx.globalAlpha = e;
        ctx.drawImage(B.glint, gl.it.cx - gl.it.r * 0.38 - gs / 2, gl.it.cy - gl.it.r * 0.42 - gs / 2, gs, gs);
        ctx.globalAlpha = 1;
      }
    },

    start: function () {
      var L = this.layer = new Layer('ng2-baubles', this);
      this.glint = this.glintSprite();
      L.size(); this.build(); this.born = performance.now() / 1000;
      var self = this;
      this.scrollY = window.scrollY;
      window.addEventListener('scroll', function () {
        var y = window.scrollY, d = y - self.scrollY; self.scrollY = y;
        // рывок прокрутки слегка раскачивает шары
        for (var i = 0; i < self.items.length; i++) self.items[i].om += Math.max(-1, Math.min(1, d * 0.004)) * (i % 2 ? 1 : -1);
        if (reduce) self.frame(0, 2);
      }, { passive: true });
      L.play();
    },
    resize: function () { this.layer.size(); this.build(); this.born = -99; if (reduce) this.frame(0, 2); }
  };

  /* =====================================================================
   * 2. Северное сияние
   * ===================================================================== */
  var aurora = {
    layer: null, off: null, octx: null, rays: [], stars: [], shoot: null, nextShoot: 0, q: 4,

    raySprite: function (top, mid) { // вертикальный «луч» занавеса: яркий низ, растворяющийся верх
      var c = mk(1, 128), x = c.getContext('2d'), g = x.createLinearGradient(0, 0, 0, 128);
      g.addColorStop(0, 'rgba(' + top + ',0)');
      g.addColorStop(0.55, 'rgba(' + top + ',.55)');
      g.addColorStop(0.86, 'rgba(' + mid + ',1)');
      g.addColorStop(1, 'rgba(' + mid + ',0)');
      x.fillStyle = g; x.fillRect(0, 0, 1, 128);
      return c;
    },

    build: function () {
      var L = this.layer, q = this.q;
      this.off.width = Math.ceil(L.w / q); this.off.height = Math.ceil(L.h / q);
      var n = Math.round(Math.min(Math.max(L.w / 9, 50), 220));
      this.stars = [];
      for (var i = 0; i < n; i++) {
        this.stars.push({ x: Math.random() * L.w, y: Math.pow(Math.random(), 1.6) * L.h * 0.75,
          r: Math.random() < 0.1 ? rnd(1.1, 1.7) : rnd(0.4, 1), tw: rnd(0.6, 2.2), ph: rnd(0, TAU), a: rnd(0.35, 0.9) });
      }
    },

    frame: function (dt, ts) {
      var A = aurora, L = A.layer, ctx = L.ctx, o = A.octx, W = A.off.width, H = A.off.height, i, j;
      var vis = 1 - Math.min(1, window.scrollY / (L.h * 0.7));
      if (!reduce) vis *= Math.min(1, Math.max(0, ts - A.born) / 2.4); // плавное появление
      L.canvas.style.opacity = vis.toFixed(3);
      if (vis <= 0.01 && dt) return;

      // сияние рисуем в маленький буфер и растягиваем — получается естественное размытие
      o.clearRect(0, 0, W, H);
      o.globalCompositeOperation = 'lighter';
      var t = ts * 0.12;
      for (j = 0; j < A.rays.length; j++) {
        var R = A.rays[j], step = 1;
        for (i = 0; i <= W; i += step) {
          var u = i / W;
          var base = H * (R.y + 0.07 * Math.sin(u * R.k1 * TAU + t * R.s1 + R.p)
                                + 0.035 * Math.sin(u * R.k2 * TAU - t * R.s2 + R.p * 2));
          var hgt = H * R.h * (0.6 + 0.4 * Math.sin(u * R.k3 * TAU + t * 1.7 + R.p));
          // полосы-лучи вдоль занавеса
          var a = R.a * (0.45 + 0.55 * Math.pow(Math.abs(Math.sin(u * R.k4 * TAU + t * R.s3 + R.p)), 2))
                      * Math.min(1, u * 5, (1 - u) * 5 + 0.25);
          if (a < 0.02) continue;
          o.globalAlpha = a;
          o.drawImage(R.spr, i, base - hgt, step + 0.6, hgt);
        }
      }
      o.globalAlpha = 1; o.globalCompositeOperation = 'source-over';

      ctx.clearRect(0, 0, L.w, L.h);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(A.off, 0, 0, W, H, 0, 0, L.w, H * A.q);

      // звёзды
      ctx.fillStyle = '#fff';
      for (i = 0; i < A.stars.length; i++) {
        var s = A.stars[i];
        ctx.globalAlpha = s.a * (0.45 + 0.55 * Math.abs(Math.sin(ts * s.tw + s.ph)));
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, TAU); ctx.fill();
      }
      ctx.globalAlpha = 1;

      // падающая звезда раз в несколько секунд
      if (dt && !A.shoot && ts > A.nextShoot) {
        var sx = rnd(L.w * 0.15, L.w * 0.85);
        A.shoot = { x: sx, y: rnd(L.h * 0.04, L.h * 0.25), vx: (sx > L.w / 2 ? -1 : 1) * rnd(520, 760), vy: rnd(160, 260), life: 0, dur: rnd(0.9, 1.3) };
        A.nextShoot = ts + rnd(4.5, 9);
      }
      if (A.shoot) {
        var sh = A.shoot; sh.life += dt / sh.dur;
        if (sh.life >= 1) A.shoot = null;
        else {
          sh.x += sh.vx * dt; sh.y += sh.vy * dt;
          var e = Math.sin(Math.PI * sh.life), len = 0.16;
          var gx = sh.x - sh.vx * len, gy = sh.y - sh.vy * len;
          var gr = ctx.createLinearGradient(sh.x, sh.y, gx, gy);
          gr.addColorStop(0, 'rgba(255,255,255,' + (0.95 * e).toFixed(3) + ')');
          gr.addColorStop(0.25, 'rgba(160,225,255,' + (0.5 * e).toFixed(3) + ')');
          gr.addColorStop(1, 'rgba(120,200,255,0)');
          ctx.strokeStyle = gr; ctx.lineWidth = 1.6; ctx.lineCap = 'round';
          ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(gx, gy); ctx.stroke();
          ctx.globalAlpha = e; ctx.fillStyle = '#fff';
          ctx.beginPath(); ctx.arc(sh.x, sh.y, 1.6, 0, TAU); ctx.fill(); ctx.globalAlpha = 1;
        }
      }
    },

    start: function () {
      var L = this.layer = new Layer('ng2-aurora', this);
      this.off = mk(8, 8); this.octx = this.off.getContext('2d');
      // ленты: фирменный голубой, бирюза и немного фиолетового
      this.rays = [
        { spr: this.raySprite('64,140,255', '0,200,255'), y: 0.30, h: 0.26, a: 0.55, k1: 0.9, k2: 2.1, k3: 1.3, k4: 7, s1: 1, s2: 1.4, s3: 0.8, p: 0.3 },
        { spr: this.raySprite('120,90,255', '40,240,210'), y: 0.40, h: 0.30, a: 0.5, k1: 0.7, k2: 1.7, k3: 1.1, k4: 9, s1: -0.8, s2: 1.1, s3: -0.6, p: 2.1 },
        { spr: this.raySprite('0,168,245', '150,235,255'), y: 0.22, h: 0.18, a: 0.4, k1: 1.3, k2: 2.6, k3: 1.7, k4: 12, s1: 1.3, s2: -0.9, s3: 1.1, p: 4.2 }
      ];
      L.size(); this.build(); this.born = performance.now() / 1000; this.nextShoot = this.born + 2;
      var self = this;
      window.addEventListener('scroll', function () { if (reduce) self.frame(0, 2); }, { passive: true });
      L.play();
    },
    resize: function () { this.layer.size(); this.build(); if (reduce) this.frame(0, 2); }
  };

  /* =====================================================================
   * 3. Хрустальные снежинки
   * ===================================================================== */
  var crystal = {
    layer: null, flakes: [], designs: [],

    design: function (seed) { // процедурная шестилучевая снежинка
      var S = 160, c = mk(S), x = c.getContext('2d'), m = S / 2, R = S * 0.4;
      var rand = function () { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
      var br = [], nb = 2 + ((rand() * 3) | 0);
      for (var i = 0; i < nb; i++) br.push({ at: 0.25 + 0.6 * (i + rand() * 0.6) / nb, len: 0.18 + rand() * 0.32, ang: 0.75 + rand() * 0.35 });
      var tip = rand(), hex = rand() < 0.5, center = 0.12 + rand() * 0.12;
      function arm() {
        x.beginPath(); x.moveTo(0, 0); x.lineTo(0, -R);
        br.forEach(function (b) {
          var y = -R * b.at, l = R * b.len;
          x.moveTo(0, y); x.lineTo(-Math.sin(b.ang) * l, y - Math.cos(b.ang) * l);
          x.moveTo(0, y); x.lineTo(Math.sin(b.ang) * l, y - Math.cos(b.ang) * l);
        });
        if (tip > 0.5) { // ромбик на конце луча
          x.moveTo(0, -R * 0.86); x.lineTo(-R * 0.07, -R * 0.93); x.lineTo(0, -R); x.lineTo(R * 0.07, -R * 0.93); x.closePath();
        }
        x.stroke();
      }
      x.translate(m, m); x.lineCap = 'round'; x.lineJoin = 'round';
      // проход 1 — голубоватый ореол (виден и на белом фоне), проход 2 — белый кристалл
      [['rgba(70,150,215,.55)', 7, 6], ['rgba(255,255,255,1)', 3.2, 0]].forEach(function (pass) {
        x.strokeStyle = pass[0]; x.lineWidth = pass[1];
        x.shadowColor = 'rgba(40,130,200,.5)'; x.shadowBlur = pass[2];
        for (var k = 0; k < 6; k++) { x.save(); x.rotate(k * Math.PI / 3); arm(); x.restore(); }
        x.beginPath();
        for (k = 0; k <= 6; k++) {
          var a = k * Math.PI / 3 + (hex ? Math.PI / 6 : 0);
          x[k ? 'lineTo' : 'moveTo'](Math.cos(a) * R * center, Math.sin(a) * R * center);
        }
        x.stroke();
      });
      x.shadowBlur = 0; x.fillStyle = '#fff'; x.beginPath(); x.arc(0, 0, 3, 0, TAU); x.fill();
      return c;
    },

    spawn: function (anywhere) {
      var L = this.layer, z = Math.pow(Math.random(), 1.8); // большинство — дальние и мелкие
      var size = 12 + z * (L.w < 768 ? 30 : 46);
      return {
        x: Math.random() * L.w, y: anywhere ? Math.random() * L.h : -size,
        z: z, size: size, d: this.designs[(Math.random() * this.designs.length) | 0],
        vy: 14 + z * 34 + rnd(0, 8), amp: rnd(8, 24), fr: rnd(0.25, 0.55), ph: rnd(0, TAU),
        rot: rnd(0, TAU), vr: rnd(-0.5, 0.5) * (1 - z * 0.5), tilt: rnd(0, TAU), vt: rnd(0.2, 0.6),
        a: 0.55 + z * 0.4, px: 0, pvx: 0
      };
    },

    build: function () {
      var L = this.layer, n = Math.round(Math.min(Math.max(L.w / 42, 14), 38));
      while (this.flakes.length < n) this.flakes.push(this.spawn(true));
      this.flakes.length = n;
      this.flakes.sort(function (a, b) { return a.z - b.z; });
    },

    frame: function (dt, ts) {
      var C = crystal, L = C.layer, ctx = L.ctx, f = C.flakes, i, p;
      ctx.clearRect(0, 0, L.w, L.h);
      var wind = Math.sin(ts / 6) * 10;
      for (i = 0; i < f.length; i++) {
        p = f[i];
        if (dt) {
          p.y += p.vy * dt; p.ph += p.fr * dt; p.rot += p.vr * dt; p.tilt += p.vt * dt;
          // снежинки мягко расступаются перед курсором и возвращаются на свой путь
          var x0 = p.x + Math.sin(p.ph) * p.amp + wind * (0.5 + p.z) + p.px;
          var dx = x0 - ptr.x, dy = p.y - ptr.y, d2 = dx * dx + dy * dy, R = 130;
          if (d2 < R * R) { var d = Math.sqrt(d2) || 1, k = (1 - d / R); p.pvx += (dx / d) * k * 900 * dt; p.y += (dy / d) * k * 40 * dt; }
          p.pvx -= p.px * 2.2 * dt; p.pvx *= Math.pow(0.08, dt); p.px += p.pvx * dt;
          if (p.y - p.size > L.h) { f[i] = C.spawn(false); f[i].z = p.z; continue; }
        }
        var x = p.x + Math.sin(p.ph) * p.amp + wind * (0.5 + p.z) + p.px, s = p.size;
        ctx.save();
        ctx.translate(x, p.y); ctx.rotate(p.rot);
        ctx.scale(1, 0.55 + 0.45 * Math.abs(Math.cos(p.tilt))); // лёгкое «кувыркание» в воздухе
        ctx.globalAlpha = p.a;
        ctx.drawImage(p.d, -s / 2, -s / 2, s, s);
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    },

    start: function () {
      var L = this.layer = new Layer('ng2-crystal', this);
      for (var i = 0; i < 7; i++) this.designs.push(this.design(1234 + i * 7919));
      L.size(); this.build(); L.play();
    },
    resize: function () { this.layer.size(); this.build(); if (reduce) this.frame(0, 2); }
  };

  /* ---------- Запуск ---------- */
  var FX = { baubles: baubles, aurora: aurora, crystal: crystal };

  function init() {
    var m = window.NG2;
    try { var q = /[?&]ng2=(\w+)/.exec(location.search); if (q) m = q[1]; } catch (e) {}
    if (MODES.indexOf(m) < 0) return;
    var fx = FX[m];
    document.documentElement.classList.add('ng2-' + m);
    fx.start();
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { fx.resize(); }, 150);
    });
    document.addEventListener('visibilitychange', function () {
      if (reduce) return;
      if (document.hidden) fx.layer.pause(); else fx.layer.play();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
