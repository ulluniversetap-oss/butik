/*
 * Новогоднее оформление «А» Бутик.
 * Режимы: "snow" (лёгкий снегопад), "garland" (гирлянды сверху), "off".
 * Выбор запоминается в localStorage; можно задать ссылкой: ?ng=snow | ?ng=garland | ?ng=off
 * Чтобы убрать оформление совсем: удалить подключение css/ng.css и js/ng.js из index.html.
 */
(function () {
  'use strict';

  var DEFAULT_MODE = 'snow';
  var KEY = 'ab_ng_mode';
  var MODES = ['snow', 'garland', 'off'];
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function load() {
    var m = null;
    try {
      var q = /[?&]ng=(\w+)/.exec(location.search);
      if (q) m = q[1];
      else m = localStorage.getItem(KEY);
    } catch (e) {}
    return MODES.indexOf(m) > -1 ? m : DEFAULT_MODE;
  }
  function save(m) { try { localStorage.setItem(KEY, m); } catch (e) {} }

  /* ---------- Снег ---------- */
  var snow = {
    canvas: null, ctx: null, flakes: [], raf: 0, last: 0, w: 0, h: 0, dpr: 1, sprites: [],

    makeSprite: function (r, glow) {
      var s = Math.ceil((r + glow) * 2 + 2), c = document.createElement('canvas');
      c.width = c.height = s;
      var x = c.getContext('2d'), m = s / 2;
      var g = x.createRadialGradient(m, m, 0, m, m, r + glow);
      g.addColorStop(0, 'rgba(255,255,255,1)');
      g.addColorStop(r / (r + glow) * 0.9, 'rgba(255,255,255,.95)');
      g.addColorStop(r / (r + glow), 'rgba(214,236,255,.55)');
      g.addColorStop(1, 'rgba(120,190,240,0)');
      x.fillStyle = g;
      x.beginPath(); x.arc(m, m, r + glow, 0, 6.2832); x.fill();
      return c;
    },

    init: function () {
      var c = this.canvas = document.createElement('canvas');
      c.className = 'ng-snow';
      c.setAttribute('aria-hidden', 'true');
      document.body.appendChild(c);
      this.ctx = c.getContext('2d');
      // три размера: мелкие, средние, крупные «боке»
      this.sprites = [this.makeSprite(1.6, 2.2), this.makeSprite(2.6, 3), this.makeSprite(4.4, 5)];
      this.resize();
    },

    resize: function () {
      var d = this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.w = window.innerWidth; this.h = window.innerHeight;
      this.canvas.width = this.w * d; this.canvas.height = this.h * d;
      var n = Math.round(Math.min(Math.max(this.w / 20, 26), 78));
      while (this.flakes.length < n) this.flakes.push(this.spawn(true));
      this.flakes.length = n;
    },

    spawn: function (anywhere) {
      var depth = Math.random();
      var size = depth > .93 ? 2 : depth > .6 ? 1 : 0; // редко — крупные
      var k = [.55, .8, 1.15][size];
      return {
        x: Math.random() * this.w,
        y: anywhere ? Math.random() * this.h : -12,
        s: size,
        vy: (16 + Math.random() * 26) * k,
        amp: 10 + Math.random() * 22,
        fr: .35 + Math.random() * .6,
        ph: Math.random() * 6.28,
        a: [.75, .85, .5][size] * (.7 + Math.random() * .3)
      };
    },

    frame: function (t) {
      var self = snow;
      self.raf = requestAnimationFrame(self.frame);
      var dt = Math.min((t - self.last) / 1000 || 0, .05);
      self.last = t;
      var ctx = self.ctx, d = self.dpr, f = self.flakes, i, p, sp, x;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      ctx.clearRect(0, 0, self.w, self.h);
      var wind = Math.sin(t / 5200) * 9; // общий мягкий ветер
      for (i = 0; i < f.length; i++) {
        p = f[i];
        p.y += p.vy * dt;
        p.ph += p.fr * dt;
        x = p.x + Math.sin(p.ph) * p.amp + wind;
        if (p.y > self.h + 12) { f[i] = self.spawn(false); continue; }
        sp = self.sprites[p.s];
        ctx.globalAlpha = p.a;
        ctx.drawImage(sp, x - sp.width / 2, p.y - sp.height / 2);
      }
      ctx.globalAlpha = 1;
    },

    start: function () {
      if (!this.canvas) this.init();
      this.canvas.style.display = '';
      if (reduce) { // без анимации — один статичный кадр
        this.last = 0; this.frame(0); cancelAnimationFrame(this.raf); return;
      }
      if (!this.raf) { this.last = performance.now(); this.raf = requestAnimationFrame(this.frame); }
    },
    stop: function () {
      if (this.raf) { cancelAnimationFrame(this.raf); this.raf = 0; }
      if (this.canvas) this.canvas.style.display = 'none';
    }
  };

  /* ---------- Гирлянда ---------- */
  var COLORS = ['#ffd36b', '#35b9f5', '#fff1d6', '#ff7a7a', '#8ee6b0'];
  var garland = {
    el: null, built: 0,

    build: function () {
      var w = window.innerWidth, h = w < 768 ? 44 : 48;
      if (this.built === w) return;
      this.built = w;
      var el = this.el, svgNS = 'http://www.w3.org/2000/svg';
      el.innerHTML = '';

      // Провисающие дуги от верхнего края: чем шире экран — тем больше пролётов
      var span = w < 768 ? 150 : 230;
      var n = Math.max(2, Math.round(w / span));
      var seg = w / n, sag = w < 768 ? 11 : 15, top = -5;
      var svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('class', 'ng-garland__wire');
      svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
      svg.setAttribute('preserveAspectRatio', 'none');
      var d = '', bulbs = [], gap = w < 768 ? 30 : 38, idx = 0;
      for (var i = 0; i < n; i++) {
        var x0 = i * seg, x1 = x0 + seg, cx = x0 + seg / 2, cy = top + sag * 2;
        d += (i ? '' : 'M' + x0 + ' ' + top + ' ') + 'Q' + cx + ' ' + cy + ' ' + x1 + ' ' + top + ' ';
        // лампочки равномерно вдоль дуги (параметрически по Безье)
        var cnt = Math.max(3, Math.round(seg / gap));
        for (var j = 1; j < cnt; j++) {
          var t = j / cnt, mt = 1 - t;
          var bx = mt * mt * x0 + 2 * mt * t * cx + t * t * x1;
          var by = mt * mt * top + 2 * mt * t * cy + t * t * top;
          // наклон лампочки по касательной, чтобы висела естественно
          var dx = 2 * mt * (cx - x0) + 2 * t * (x1 - cx);
          var dy = 2 * mt * (cy - top) + 2 * t * (top - cy);
          var rot = Math.atan2(dy, dx) * 180 / Math.PI;
          bulbs.push({ x: bx, y: by, r: rot * -0.12 + (Math.random() * 6 - 3), i: idx++ });
        }
      }
      var path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', d);
      svg.appendChild(path);
      el.appendChild(svg);

      var frag = document.createDocumentFragment();
      bulbs.forEach(function (b) {
        var s = document.createElement('i');
        s.className = 'ng-bulb';
        s.dataset.k = b.i % 3;
        s.style.cssText = 'left:' + b.x.toFixed(1) + 'px;top:' + (b.y + 1).toFixed(1) + 'px;' +
          '--c:' + COLORS[b.i % COLORS.length] + ';--r:' + b.r.toFixed(1) + 'deg;' +
          '--d:-' + ((b.i * 0.57) % 3.2).toFixed(2) + 's';
        frag.appendChild(s);
      });
      el.appendChild(frag);
    },

    start: function () {
      if (!this.el) {
        this.el = document.createElement('div');
        this.el.className = 'ng-garland';
        this.el.setAttribute('aria-hidden', 'true');
        document.body.appendChild(this.el);
      }
      this.el.style.display = '';
      document.documentElement.classList.add('ng-garland-on');
      this.build();
      var el = this.el;
      requestAnimationFrame(function () { el.classList.add('is-on'); });
    },
    stop: function () {
      if (!this.el) return;
      this.el.classList.remove('is-on');
      document.documentElement.classList.remove('ng-garland-on');
      this.el.style.display = 'none';
    }
  };

  /* ---------- Переключатель ---------- */
  var current = null, sw = null;
  function apply(mode) {
    current = mode;
    if (mode === 'snow') { garland.stop(); snow.start(); }
    else if (mode === 'garland') { snow.stop(); garland.start(); }
    else { snow.stop(); garland.stop(); }
    if (sw) {
      var bs = sw.querySelectorAll('button');
      for (var i = 0; i < bs.length; i++) {
        bs[i].setAttribute('aria-pressed', bs[i].dataset.mode === mode ? 'true' : 'false');
      }
    }
  }

  function buildSwitch() {
    sw = document.createElement('div');
    sw.className = 'ng-switch';
    sw.setAttribute('role', 'group');
    sw.setAttribute('aria-label', 'Новогоднее оформление');
    [['snow', '❄ Снег'], ['garland', '✦ Гирлянды'], ['off', 'Выкл']].forEach(function (o) {
      var b = document.createElement('button');
      b.type = 'button'; b.dataset.mode = o[0]; b.textContent = o[1];
      b.addEventListener('click', function () { save(o[0]); apply(o[0]); });
      sw.appendChild(b);
    });
    document.body.appendChild(sw);
  }

  function init() {
    buildSwitch();
    apply(load());
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        if (snow.canvas) snow.resize();
        if (current === 'garland') garland.build();
      }, 150);
    });
    document.addEventListener('visibilitychange', function () {
      if (current !== 'snow' || reduce) return;
      if (document.hidden) { cancelAnimationFrame(snow.raf); snow.raf = 0; }
      else if (!snow.raf) { snow.last = performance.now(); snow.raf = requestAnimationFrame(snow.frame); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
