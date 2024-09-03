import "./polyfills.server.mjs";
import { a as ie } from "./chunk-UNBHUIPM.mjs";
import { a as We, i as kn, k as Sn, n as An, p as vi } from "./chunk-WZRHMARD.mjs";
import {
  $a as gn,
  _ as I,
  a as it,
  Aa as pn,
  Ab as O,
  ab as bn,
  Ac as In,
  B as je,
  Ba as J,
  Bb as Mt,
  bb as yt,
  c as mi,
  ca as b,
  Cb as rt,
  cb as Pt,
  cc as G,
  D as dt,
  da as Y,
  Db as z,
  db as fi,
  dc as Yt,
  E as ui,
  ea as X,
  Eb as H,
  eb as st,
  ec as wn,
  F as pi,
  f as g,
  Fb as ze,
  fb as tt,
  fc as xn,
  G as fe,
  g as nn,
  Gb as C,
  H as cn,
  h as Fe,
  ha as hn,
  Hb as Wt,
  Hc as Lt,
  i as on,
  Ib as bi,
  ib as K,
  Ic as It,
  ja as Ht,
  Jb as lt,
  jb as T,
  k as ot,
  ka as ut,
  Kb as _,
  kb as Z,
  Kc as ct,
  l as rn,
  la as pt,
  Lb as yn,
  lb as wt,
  Lc as xt,
  lc as E,
  M as dn,
  ma as Ut,
  mb as L,
  Mc as kt,
  N as ln,
  na as un,
  nb as At,
  O as at,
  o as vt,
  ob as jt,
  P as Ne,
  Pa as ee,
  pa as Le,
  pb as p,
  Q as V,
  qa as $,
  qb as f,
  R as te,
  rb as P,
  Sa as S,
  sa as F,
  Sb as _i,
  sb as Ve,
  sc as He,
  T as mn,
  t as Pe,
  Ta as d,
  ta as k,
  tb as Nt,
  U as x,
  u as an,
  Ua as fn,
  ua as Be,
  ub as gi,
  uc as Cn,
  V as W,
  v as pe,
  Va as Dt,
  va as y,
  vb as _n,
  vc as En,
  w as ht,
  wa as Ft,
  wb as j,
  wc as Dn,
  X as v,
  x as M,
  Xa as ge,
  xb as vn,
  xc as Ue,
  y as hi,
  Yb as Q,
  yb as nt,
  Z as h,
  z as sn,
  zb as et
} from "./chunk-UMIOEBY4.mjs";
import { a as w, b as zt } from "./chunk-5XUXGTUW.mjs";

var Mn = (() => {
  class o {
    static \u0275fac = function(t) {
      return new (t || o);
    };
    static \u0275cmp = b({
      type: o,
      selectors: [["app-calendar-view"]],
      hostAttrs: [1, "flex-grow"],
      standalone: !0,
      features: [_],
      decls: 3,
      vars: 0,
      consts: [[1, "h-full", "w-full", "flex", "justify-center", "items-center"]],
      template: function(t, i) {
        t & 1 && (p(0, "div", 0)(1, "p"), C(2, "Calendar view"), f()());
      }
    });
  }

  return o;
})();
var wi;
try {
  wi = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  wi = !1;
}
var N = (() => {
  let e = class e {
    constructor(t) {
      this._platformId = t, this.isBrowser = this._platformId ? In(this._platformId) : typeof document == "object" && !!document, this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent), this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent), this.BLINK = this.isBrowser && !!(window.chrome || wi) && typeof CSS < "u" && !this.EDGE && !this.TRIDENT, this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT, this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window), this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent), this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT, this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(pn));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();
var be;

function Uo() {
  if (be == null && typeof window < "u") try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: () => be = !0 }));
  } finally {
    be = be || !1;
  }
  return be;
}

function Bt(o) {
  return Uo() ? o : !!o.capture;
}

var Ct = function(o) {
  return o[o.NORMAL = 0] = "NORMAL", o[o.NEGATED = 1] = "NEGATED", o[o.INVERTED = 2] = "INVERTED", o;
}(Ct || {}), Ye, $t;

function $e() {
  if ($t == null) {
    if (typeof document != "object" || !document || typeof Element != "function" || !Element) return $t = !1, $t;
    if ("scrollBehavior" in document.documentElement.style) $t = !0; else {
      let o = Element.prototype.scrollTo;
      o ? $t = !/\{\s*\[native code\]\s*\}/.test(o.toString()) : $t = !1;
    }
  }
  return $t;
}

function ne() {
  if (typeof document != "object" || !document) return Ct.NORMAL;
  if (Ye == null) {
    let o = document.createElement("div"), e = o.style;
    o.dir = "rtl", e.width = "1px", e.overflow = "auto", e.visibility = "hidden", e.pointerEvents = "none", e.position = "absolute";
    let r = document.createElement("div"), t = r.style;
    t.width = "2px", t.height = "1px", o.appendChild(r), document.body.appendChild(o), Ye = Ct.NORMAL, o.scrollLeft === 0 && (o.scrollLeft = 1, Ye = o.scrollLeft === 0 ? Ct.NEGATED : Ct.INVERTED), o.remove();
  }
  return Ye;
}

var yi;

function Wo() {
  if (yi == null) {
    let o = typeof document < "u" ? document.head : null;
    yi = !!(o && (o.createShadowRoot || o.attachShadow));
  }
  return yi;
}

function Tn(o) {
  if (Wo()) {
    let e = o.getRootNode ? o.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && e instanceof ShadowRoot) return e;
  }
  return null;
}

function _e() {
  let o = typeof document < "u" && document ? document.activeElement : null;
  for (; o && o.shadowRoot;) {
    let e = o.shadowRoot.activeElement;
    if (e === o) break;
    o = e;
  }
  return o;
}

function ft(o) {
  return o.composedPath ? o.composedPath()[0] : o.target;
}

function Ze() {
  return typeof __karma__ < "u" && !!__karma__ || typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest || typeof Mocha < "u" && !!Mocha;
}

function gt(o, ...e) {
  return e.length ? e.some(r => o[r]) : o.altKey || o.shiftKey || o.ctrlKey || o.metaKey;
}

function Zt(o) {
  return o != null && `${o}` != "false";
}

function re(o, e = 0) {
  return Yo(o) ? Number(o) : arguments.length === 2 ? e : 0;
}

function Yo(o) {
  return !isNaN(parseFloat(o)) && !isNaN(Number(o));
}

function xi(o) {
  return Array.isArray(o) ? o : [o];
}

function U(o) {
  return o == null ? "" : typeof o == "string" ? o : `${o}px`;
}

function Tt(o) {
  return o instanceof y ? o.nativeElement : o;
}

var Ci = class {
  constructor(e, r) {
    this._items = e, this._activeItemIndex = -1, this._activeItem = null, this._wrap = !1, this._letterKeyStream = new g, this._typeaheadSubscription = it.EMPTY, this._vertical = !0, this._allowedModifierKeys = [], this._homeAndEnd = !1, this._pageUpAndDown = {
      enabled: !1,
      delta: 10
    }, this._skipPredicateFn = t => t.disabled, this._pressedLetters = [], this.tabOut = new g, this.change = new g, e instanceof Ft ? this._itemChangesSubscription = e.changes.subscribe(t => this._itemsChanged(t.toArray())) : fi(e) && (this._effectRef = xn(() => this._itemsChanged(e()), { injector: r }));
  }

  skipPredicate(e) {
    return this._skipPredicateFn = e, this;
  }

  withWrap(e = !0) {
    return this._wrap = e, this;
  }

  withVerticalOrientation(e = !0) {
    return this._vertical = e, this;
  }

  withHorizontalOrientation(e) {
    return this._horizontal = e, this;
  }

  withAllowedModifierKeys(e) {
    return this._allowedModifierKeys = e, this;
  }

  withTypeAhead(e = 200) {
    return this._typeaheadSubscription.unsubscribe(), this._typeaheadSubscription = this._letterKeyStream.pipe(te(r => this._pressedLetters.push(r)), je(e), M(() => this._pressedLetters.length > 0), vt(() => this._pressedLetters.join(""))).subscribe(r => {
      let t = this._getItemsArray();
      for (let i = 1; i < t.length + 1; i++) {
        let n = (this._activeItemIndex + i) % t.length, a = t[n];
        if (!this._skipPredicateFn(a) && a.getLabel().toUpperCase().trim().indexOf(r) === 0) {
          this.setActiveItem(n);
          break;
        }
      }
      this._pressedLetters = [];
    }), this;
  }

  cancelTypeahead() {
    return this._pressedLetters = [], this;
  }

  withHomeAndEnd(e = !0) {
    return this._homeAndEnd = e, this;
  }

  withPageUpDown(e = !0, r = 10) {
    return this._pageUpAndDown = { enabled: e, delta: r }, this;
  }

  setActiveItem(e) {
    let r = this._activeItem;
    this.updateActiveItem(e), this._activeItem !== r && this.change.next(this._activeItemIndex);
  }

  onKeydown(e) {
    let r = e.keyCode,
      i = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(n => !e[n] || this._allowedModifierKeys.indexOf(n) > -1);
    switch (r) {
      case 9:
        this.tabOut.next();
        return;
      case 40:
        if (this._vertical && i) {
          this.setNextItemActive();
          break;
        } else return;
      case 38:
        if (this._vertical && i) {
          this.setPreviousItemActive();
          break;
        } else return;
      case 39:
        if (this._horizontal && i) {
          this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else return;
      case 37:
        if (this._horizontal && i) {
          this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else return;
      case 36:
        if (this._homeAndEnd && i) {
          this.setFirstItemActive();
          break;
        } else return;
      case 35:
        if (this._homeAndEnd && i) {
          this.setLastItemActive();
          break;
        } else return;
      case 33:
        if (this._pageUpAndDown.enabled && i) {
          let n = this._activeItemIndex - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(n > 0 ? n : 0, 1);
          break;
        } else return;
      case 34:
        if (this._pageUpAndDown.enabled && i) {
          let n = this._activeItemIndex + this._pageUpAndDown.delta, a = this._getItemsArray().length;
          this._setActiveItemByIndex(n < a ? n : a - 1, -1);
          break;
        } else return;
      default:
        (i || gt(e, "shiftKey")) && (e.key && e.key.length === 1 ? this._letterKeyStream.next(e.key.toLocaleUpperCase()) : (r >= 65 && r <= 90 || r >= 48 && r <= 57) && this._letterKeyStream.next(String.fromCharCode(r)));
        return;
    }
    this._pressedLetters = [], e.preventDefault();
  }

  get activeItemIndex() {
    return this._activeItemIndex;
  }

  get activeItem() {
    return this._activeItem;
  }

  isTyping() {
    return this._pressedLetters.length > 0;
  }

  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }

  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }

  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }

  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }

  updateActiveItem(e) {
    let r = this._getItemsArray(), t = typeof e == "number" ? e : r.indexOf(e), i = r[t];
    this._activeItem = i ?? null, this._activeItemIndex = t;
  }

  destroy() {
    this._typeaheadSubscription.unsubscribe(), this._itemChangesSubscription?.unsubscribe(), this._effectRef?.destroy(), this._letterKeyStream.complete(), this.tabOut.complete(), this.change.complete(), this._pressedLetters = [];
  }

  _setActiveItemByDelta(e) {
    this._wrap ? this._setActiveInWrapMode(e) : this._setActiveInDefaultMode(e);
  }

  _setActiveInWrapMode(e) {
    let r = this._getItemsArray();
    for (let t = 1; t <= r.length; t++) {
      let i = (this._activeItemIndex + e * t + r.length) % r.length, n = r[i];
      if (!this._skipPredicateFn(n)) {
        this.setActiveItem(i);
        return;
      }
    }
  }

  _setActiveInDefaultMode(e) {
    this._setActiveItemByIndex(this._activeItemIndex + e, e);
  }

  _setActiveItemByIndex(e, r) {
    let t = this._getItemsArray();
    if (t[e]) {
      for (; this._skipPredicateFn(t[e]);) if (e += r, !t[e]) return;
      this.setActiveItem(e);
    }
  }

  _getItemsArray() {
    return fi(this._items) ? this._items() : this._items instanceof Ft ? this._items.toArray() : this._items;
  }

  _itemsChanged(e) {
    if (this._activeItem) {
      let r = e.indexOf(this._activeItem);
      r > -1 && r !== this._activeItemIndex && (this._activeItemIndex = r);
    }
  }
};
var Ke = class extends Ci {
  constructor() {
    super(...arguments), this._origin = "program";
  }

  setFocusOrigin(e) {
    return this._origin = e, this;
  }

  setActiveItem(e) {
    super.setActiveItem(e), this.activeItem && this.activeItem.focus(this._origin);
  }
};
var Gt = (() => {
  let e = class e {
    constructor(t) {
      this._platform = t;
    }

    isDisabled(t) {
      return t.hasAttribute("disabled");
    }

    isVisible(t) {
      return sr(t) && getComputedStyle(t).visibility === "visible";
    }

    isTabbable(t) {
      if (!this._platform.isBrowser) return !1;
      let i = ar(fr(t));
      if (i && (Rn(i) === -1 || !this.isVisible(i))) return !1;
      let n = t.nodeName.toLowerCase(), a = Rn(t);
      return t.hasAttribute("contenteditable") ? a !== -1 : n === "iframe" || n === "object" || this._platform.WEBKIT && this._platform.IOS && !ur(t) ? !1 : n === "audio" ? t.hasAttribute("controls") ? a !== -1 : !1 : n === "video" ? a === -1 ? !1 : a !== null ? !0 : this._platform.FIREFOX || t.hasAttribute("controls") : t.tabIndex >= 0;
    }

    isFocusable(t, i) {
      return pr(t) && !this.isDisabled(t) && (i?.ignoreVisibility || this.isVisible(t));
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(N));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();

function ar(o) {
  try {
    return o.frameElement;
  } catch {
    return null;
  }
}

function sr(o) {
  return !!(o.offsetWidth || o.offsetHeight || typeof o.getClientRects == "function" && o.getClientRects().length);
}

function cr(o) {
  let e = o.nodeName.toLowerCase();
  return e === "input" || e === "select" || e === "button" || e === "textarea";
}

function dr(o) {
  return mr(o) && o.type == "hidden";
}

function lr(o) {
  return hr(o) && o.hasAttribute("href");
}

function mr(o) {
  return o.nodeName.toLowerCase() == "input";
}

function hr(o) {
  return o.nodeName.toLowerCase() == "a";
}

function On(o) {
  if (!o.hasAttribute("tabindex") || o.tabIndex === void 0) return !1;
  let e = o.getAttribute("tabindex");
  return !!(e && !isNaN(parseInt(e, 10)));
}

function Rn(o) {
  if (!On(o)) return null;
  let e = parseInt(o.getAttribute("tabindex") || "", 10);
  return isNaN(e) ? -1 : e;
}

function ur(o) {
  let e = o.nodeName.toLowerCase(), r = e === "input" && o.type;
  return r === "text" || r === "password" || e === "select" || e === "textarea";
}

function pr(o) {
  return dr(o) ? !1 : cr(o) || lr(o) || o.hasAttribute("contenteditable") || On(o);
}

function fr(o) {
  return o.ownerDocument && o.ownerDocument.defaultView || window;
}

var Ei = class {
  get enabled() {
    return this._enabled;
  }

  set enabled(e) {
    this._enabled = e, this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(e, this._startAnchor), this._toggleAnchorTabIndex(e, this._endAnchor));
  }

  constructor(e, r, t, i, n = !1, a) {
    this._element = e, this._checker = r, this._ngZone = t, this._document = i, this._injector = a, this._hasAttached = !1, this.startAnchorListener = () => this.focusLastTabbableElement(), this.endAnchorListener = () => this.focusFirstTabbableElement(), this._enabled = !0, n || this.attachAnchors();
  }

  destroy() {
    let e = this._startAnchor, r = this._endAnchor;
    e && (e.removeEventListener("focus", this.startAnchorListener), e.remove()), r && (r.removeEventListener("focus", this.endAnchorListener), r.remove()), this._startAnchor = this._endAnchor = null, this._hasAttached = !1;
  }

  attachAnchors() {
    return this._hasAttached ? !0 : (this._ngZone.runOutsideAngular(() => {
      this._startAnchor || (this._startAnchor = this._createAnchor(), this._startAnchor.addEventListener("focus", this.startAnchorListener)), this._endAnchor || (this._endAnchor = this._createAnchor(), this._endAnchor.addEventListener("focus", this.endAnchorListener));
    }), this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element), this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling), this._hasAttached = !0), this._hasAttached);
  }

  focusInitialElementWhenReady(e) {
    return new Promise(r => {
      this._executeOnStable(() => r(this.focusInitialElement(e)));
    });
  }

  focusFirstTabbableElementWhenReady(e) {
    return new Promise(r => {
      this._executeOnStable(() => r(this.focusFirstTabbableElement(e)));
    });
  }

  focusLastTabbableElementWhenReady(e) {
    return new Promise(r => {
      this._executeOnStable(() => r(this.focusLastTabbableElement(e)));
    });
  }

  _getRegionBoundary(e) {
    let r = this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);
    return e == "start" ? r.length ? r[0] : this._getFirstTabbableElement(this._element) : r.length ? r[r.length - 1] : this._getLastTabbableElement(this._element);
  }

  focusInitialElement(e) {
    let r = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");
    if (r) {
      if (!this._checker.isFocusable(r)) {
        let t = this._getFirstTabbableElement(r);
        return t?.focus(e), !!t;
      }
      return r.focus(e), !0;
    }
    return this.focusFirstTabbableElement(e);
  }

  focusFirstTabbableElement(e) {
    let r = this._getRegionBoundary("start");
    return r && r.focus(e), !!r;
  }

  focusLastTabbableElement(e) {
    let r = this._getRegionBoundary("end");
    return r && r.focus(e), !!r;
  }

  hasAttached() {
    return this._hasAttached;
  }

  _getFirstTabbableElement(e) {
    if (this._checker.isFocusable(e) && this._checker.isTabbable(e)) return e;
    let r = e.children;
    for (let t = 0; t < r.length; t++) {
      let i = r[t].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(r[t]) : null;
      if (i) return i;
    }
    return null;
  }

  _getLastTabbableElement(e) {
    if (this._checker.isFocusable(e) && this._checker.isTabbable(e)) return e;
    let r = e.children;
    for (let t = r.length - 1; t >= 0; t--) {
      let i = r[t].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(r[t]) : null;
      if (i) return i;
    }
    return null;
  }

  _createAnchor() {
    let e = this._document.createElement("div");
    return this._toggleAnchorTabIndex(this._enabled, e), e.classList.add("cdk-visually-hidden"), e.classList.add("cdk-focus-trap-anchor"), e.setAttribute("aria-hidden", "true"), e;
  }

  _toggleAnchorTabIndex(e, r) {
    e ? r.setAttribute("tabindex", "0") : r.removeAttribute("tabindex");
  }

  toggleAnchors(e) {
    this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(e, this._startAnchor), this._toggleAnchorTabIndex(e, this._endAnchor));
  }

  _executeOnStable(e) {
    this._injector ? yt(e, { injector: this._injector }) : setTimeout(e);
  }
}, se = (() => {
  let e = class e {
    constructor(t, i, n) {
      this._checker = t, this._ngZone = i, this._injector = I($), this._document = n;
    }

    create(t, i = !1) {
      return new Ei(t, this._checker, this._ngZone, this._document, i, this._injector);
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(Gt), h(k), h(E));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();

function ve(o) {
  return o.buttons === 0 || o.detail === 0;
}

function ye(o) {
  let e = o.touches && o.touches[0] || o.changedTouches && o.changedTouches[0];
  return !!e && e.identifier === -1 && (e.radiusX == null || e.radiusX === 1) && (e.radiusY == null || e.radiusY === 1);
}

var gr = new v("cdk-input-modality-detector-options"), br = { ignoreKeys: [18, 17, 224, 91, 16] }, Fn = 650,
  ae = Bt({ passive: !0, capture: !0 }), _r = (() => {
    let e = class e {
      get mostRecentModality() {
        return this._modality.value;
      }

      constructor(t, i, n, a) {
        this._platform = t, this._mostRecentTarget = null, this._modality = new nn(null), this._lastTouchMs = 0, this._onKeydown = s => {
          this._options?.ignoreKeys?.some(c => c === s.keyCode) || (this._modality.next("keyboard"), this._mostRecentTarget = ft(s));
        }, this._onMousedown = s => {
          Date.now() - this._lastTouchMs < Fn || (this._modality.next(ve(s) ? "keyboard" : "mouse"), this._mostRecentTarget = ft(s));
        }, this._onTouchstart = s => {
          if (ye(s)) {
            this._modality.next("keyboard");
            return;
          }
          this._lastTouchMs = Date.now(), this._modality.next("touch"), this._mostRecentTarget = ft(s);
        }, this._options = w(w({}, br), a), this.modalityDetected = this._modality.pipe(ln(1)), this.modalityChanged = this.modalityDetected.pipe(fe()), t.isBrowser && i.runOutsideAngular(() => {
          n.addEventListener("keydown", this._onKeydown, ae), n.addEventListener("mousedown", this._onMousedown, ae), n.addEventListener("touchstart", this._onTouchstart, ae);
        });
      }

      ngOnDestroy() {
        this._modality.complete(), this._platform.isBrowser && (document.removeEventListener("keydown", this._onKeydown, ae), document.removeEventListener("mousedown", this._onMousedown, ae), document.removeEventListener("touchstart", this._onTouchstart, ae));
      }
    };
    e.\u0275fac = function(i) {
      return new (i || e)(h(N), h(k), h(E), h(gr, 8));
    }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
    let o = e;
    return o;
  })();
var Xe = function(o) {
  return o[o.IMMEDIATE = 0] = "IMMEDIATE", o[o.EVENTUAL = 1] = "EVENTUAL", o;
}(Xe || {}), vr = new v("cdk-focus-monitor-default-options"), Ge = Bt({ passive: !0, capture: !0 }), mt = (() => {
  let e = class e {
    constructor(t, i, n, a, s) {
      this._ngZone = t, this._platform = i, this._inputModalityDetector = n, this._origin = null, this._windowFocused = !1, this._originFromTouchInteraction = !1, this._elementInfo = new Map, this._monitoredElementCount = 0, this._rootNodeFocusListenerCount = new Map, this._windowFocusListener = () => {
        this._windowFocused = !0, this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = !1);
      }, this._stopInputModalityDetector = new g, this._rootNodeFocusAndBlurListener = c => {
        let u = ft(c);
        for (let l = u; l; l = l.parentElement) c.type === "focus" ? this._onFocus(c, l) : this._onBlur(c, l);
      }, this._document = a, this._detectionMode = s?.detectionMode || Xe.IMMEDIATE;
    }

    monitor(t, i = !1) {
      let n = Tt(t);
      if (!this._platform.isBrowser || n.nodeType !== 1) return ot();
      let a = Tn(n) || this._getDocument(), s = this._elementInfo.get(n);
      if (s) return i && (s.checkChildren = !0), s.subject;
      let c = { checkChildren: i, subject: new g, rootNode: a };
      return this._elementInfo.set(n, c), this._registerGlobalListeners(c), c.subject;
    }

    stopMonitoring(t) {
      let i = Tt(t), n = this._elementInfo.get(i);
      n && (n.subject.complete(), this._setClasses(i), this._elementInfo.delete(i), this._removeGlobalListeners(n));
    }

    focusVia(t, i, n) {
      let a = Tt(t), s = this._getDocument().activeElement;
      a === s ? this._getClosestElementsInfo(a).forEach(([c, u]) => this._originChanged(c, i, u)) : (this._setOrigin(i), typeof a.focus == "function" && a.focus(n));
    }

    ngOnDestroy() {
      this._elementInfo.forEach((t, i) => this.stopMonitoring(i));
    }

    _getDocument() {
      return this._document || document;
    }

    _getWindow() {
      return this._getDocument().defaultView || window;
    }

    _getFocusOrigin(t) {
      return this._origin ? this._originFromTouchInteraction ? this._shouldBeAttributedToTouch(t) ? "touch" : "program" : this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : t && this._isLastInteractionFromInputLabel(t) ? "mouse" : "program";
    }

    _shouldBeAttributedToTouch(t) {
      return this._detectionMode === Xe.EVENTUAL || !!t?.contains(this._inputModalityDetector._mostRecentTarget);
    }

    _setClasses(t, i) {
      t.classList.toggle("cdk-focused", !!i), t.classList.toggle("cdk-touch-focused", i === "touch"), t.classList.toggle("cdk-keyboard-focused", i === "keyboard"), t.classList.toggle("cdk-mouse-focused", i === "mouse"), t.classList.toggle("cdk-program-focused", i === "program");
    }

    _setOrigin(t, i = !1) {
      this._ngZone.runOutsideAngular(() => {
        if (this._origin = t, this._originFromTouchInteraction = t === "touch" && i, this._detectionMode === Xe.IMMEDIATE) {
          clearTimeout(this._originTimeoutId);
          let n = this._originFromTouchInteraction ? Fn : 1;
          this._originTimeoutId = setTimeout(() => this._origin = null, n);
        }
      });
    }

    _onFocus(t, i) {
      let n = this._elementInfo.get(i), a = ft(t);
      !n || !n.checkChildren && i !== a || this._originChanged(i, this._getFocusOrigin(a), n);
    }

    _onBlur(t, i) {
      let n = this._elementInfo.get(i);
      !n || n.checkChildren && t.relatedTarget instanceof Node && i.contains(t.relatedTarget) || (this._setClasses(i), this._emitOrigin(n, null));
    }

    _emitOrigin(t, i) {
      t.subject.observers.length && this._ngZone.run(() => t.subject.next(i));
    }

    _registerGlobalListeners(t) {
      if (!this._platform.isBrowser) return;
      let i = t.rootNode, n = this._rootNodeFocusListenerCount.get(i) || 0;
      n || this._ngZone.runOutsideAngular(() => {
        i.addEventListener("focus", this._rootNodeFocusAndBlurListener, Ge), i.addEventListener("blur", this._rootNodeFocusAndBlurListener, Ge);
      }), this._rootNodeFocusListenerCount.set(i, n + 1), ++this._monitoredElementCount === 1 && (this._ngZone.runOutsideAngular(() => {
        this._getWindow().addEventListener("focus", this._windowFocusListener);
      }), this._inputModalityDetector.modalityDetected.pipe(V(this._stopInputModalityDetector)).subscribe(a => {
        this._setOrigin(a, !0);
      }));
    }

    _removeGlobalListeners(t) {
      let i = t.rootNode;
      if (this._rootNodeFocusListenerCount.has(i)) {
        let n = this._rootNodeFocusListenerCount.get(i);
        n > 1 ? this._rootNodeFocusListenerCount.set(i, n - 1) : (i.removeEventListener("focus", this._rootNodeFocusAndBlurListener, Ge), i.removeEventListener("blur", this._rootNodeFocusAndBlurListener, Ge), this._rootNodeFocusListenerCount.delete(i));
      }
      --this._monitoredElementCount || (this._getWindow().removeEventListener("focus", this._windowFocusListener), this._stopInputModalityDetector.next(), clearTimeout(this._windowFocusTimeoutId), clearTimeout(this._originTimeoutId));
    }

    _originChanged(t, i, n) {
      this._setClasses(t, i), this._emitOrigin(n, i), this._lastFocusOrigin = i;
    }

    _getClosestElementsInfo(t) {
      let i = [];
      return this._elementInfo.forEach((n, a) => {
        (a === t || n.checkChildren && a.contains(t)) && i.push([a, n]);
      }), i;
    }

    _isLastInteractionFromInputLabel(t) {
      let { _mostRecentTarget: i, mostRecentModality: n } = this._inputModalityDetector;
      if (n !== "mouse" || !i || i === t || t.nodeName !== "INPUT" && t.nodeName !== "TEXTAREA" || t.disabled) return !1;
      let a = t.labels;
      if (a) {
        for (let s = 0; s < a.length; s++) if (a[s].contains(i)) return !0;
      }
      return !1;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(k), h(N), h(_r), h(E, 8), h(vr, 8));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();
var yr = new v("cdk-dir-doc", { providedIn: "root", factory: wr });

function wr() {
  return I(E);
}

var xr = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

function Cr(o) {
  let e = o?.toLowerCase() || "";
  return e === "auto" && typeof navigator < "u" && navigator?.language ? xr.test(navigator.language) ? "rtl" : "ltr" : e === "rtl" ? "rtl" : "ltr";
}

var Et = (() => {
  let e = class e {
    constructor(t) {
      if (this.value = "ltr", this.change = new F, t) {
        let i = t.body ? t.body.dir : null, n = t.documentElement ? t.documentElement.dir : null;
        this.value = Cr(i || n || "ltr");
      }
    }

    ngOnDestroy() {
      this.change.complete();
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(yr, 8));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();
var bt = function(o) {
    return o[o.FADING_IN = 0] = "FADING_IN", o[o.VISIBLE = 1] = "VISIBLE", o[o.FADING_OUT = 2] = "FADING_OUT", o[o.HIDDEN = 3] = "HIDDEN", o;
  }(bt || {}), Ai = class {
    constructor(e, r, t, i = !1) {
      this._renderer = e, this.element = r, this.config = t, this._animationForciblyDisabledThroughCss = i, this.state = bt.HIDDEN;
    }

    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  }, Pn = Bt({ passive: !0, capture: !0 }), Mi = class {
    constructor() {
      this._events = new Map, this._delegateEventHandler = e => {
        let r = ft(e);
        r && this._events.get(e.type)?.forEach((t, i) => {
          (i === r || i.contains(r)) && t.forEach(n => n.handleEvent(e));
        });
      };
    }

    addHandler(e, r, t, i) {
      let n = this._events.get(r);
      if (n) {
        let a = n.get(t);
        a ? a.add(i) : n.set(t, new Set([i]));
      } else this._events.set(r, new Map([[t, new Set([i])]])), e.runOutsideAngular(() => {
        document.addEventListener(r, this._delegateEventHandler, Pn);
      });
    }

    removeHandler(e, r, t) {
      let i = this._events.get(e);
      if (!i) return;
      let n = i.get(r);
      n && (n.delete(t), n.size === 0 && i.delete(r), i.size === 0 && (this._events.delete(e), document.removeEventListener(e, this._delegateEventHandler, Pn)));
    }
  }, jn = { enterDuration: 225, exitDuration: 150 }, Er = 800, Nn = Bt({ passive: !0, capture: !0 }),
  Ln = ["mousedown", "touchstart"], Bn = ["mouseup", "mouseleave", "touchend", "touchcancel"], xe = class xe {
    constructor(e, r, t, i) {
      this._target = e, this._ngZone = r, this._platform = i, this._isPointerDown = !1, this._activeRipples = new Map, this._pointerUpEventsRegistered = !1, i.isBrowser && (this._containerElement = Tt(t));
    }

    fadeInRipple(e, r, t = {}) {
      let i = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect(),
        n = w(w({}, jn), t.animation);
      t.centered && (e = i.left + i.width / 2, r = i.top + i.height / 2);
      let a = t.radius || Dr(e, r, i), s = e - i.left, c = r - i.top, u = n.enterDuration,
        l = document.createElement("div");
      l.classList.add("mat-ripple-element"), l.style.left = `${s - a}px`, l.style.top = `${c - a}px`, l.style.height = `${a * 2}px`, l.style.width = `${a * 2}px`, t.color != null && (l.style.backgroundColor = t.color), l.style.transitionDuration = `${u}ms`, this._containerElement.appendChild(l);
      let m = window.getComputedStyle(l), D = m.transitionProperty, R = m.transitionDuration,
        B = D === "none" || R === "0s" || R === "0s, 0s" || i.width === 0 && i.height === 0, q = new Ai(this, l, t, B);
      l.style.transform = "scale3d(1, 1, 1)", q.state = bt.FADING_IN, t.persistent || (this._mostRecentTransientRipple = q);
      let Vt = null;
      return !B && (u || n.exitDuration) && this._ngZone.runOutsideAngular(() => {
        let tn = () => {
          Vt && (Vt.fallbackTimer = null), clearTimeout(en), this._finishRippleTransition(q);
        }, li = () => this._destroyRipple(q), en = setTimeout(li, u + 100);
        l.addEventListener("transitionend", tn), l.addEventListener("transitioncancel", li), Vt = {
          onTransitionEnd: tn,
          onTransitionCancel: li,
          fallbackTimer: en
        };
      }), this._activeRipples.set(q, Vt), (B || !u) && this._finishRippleTransition(q), q;
    }

    fadeOutRipple(e) {
      if (e.state === bt.FADING_OUT || e.state === bt.HIDDEN) return;
      let r = e.element, t = w(w({}, jn), e.config.animation);
      r.style.transitionDuration = `${t.exitDuration}ms`, r.style.opacity = "0", e.state = bt.FADING_OUT, (e._animationForciblyDisabledThroughCss || !t.exitDuration) && this._finishRippleTransition(e);
    }

    fadeOutAll() {
      this._getActiveRipples().forEach(e => e.fadeOut());
    }

    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach(e => {
        e.config.persistent || e.fadeOut();
      });
    }

    setupTriggerEvents(e) {
      let r = Tt(e);
      !this._platform.isBrowser || !r || r === this._triggerElement || (this._removeTriggerEvents(), this._triggerElement = r, Ln.forEach(t => {
        xe._eventManager.addHandler(this._ngZone, t, r, this);
      }));
    }

    handleEvent(e) {
      e.type === "mousedown" ? this._onMousedown(e) : e.type === "touchstart" ? this._onTouchStart(e) : this._onPointerUp(), this._pointerUpEventsRegistered || (this._ngZone.runOutsideAngular(() => {
        Bn.forEach(r => {
          this._triggerElement.addEventListener(r, this, Nn);
        });
      }), this._pointerUpEventsRegistered = !0);
    }

    _finishRippleTransition(e) {
      e.state === bt.FADING_IN ? this._startFadeOutTransition(e) : e.state === bt.FADING_OUT && this._destroyRipple(e);
    }

    _startFadeOutTransition(e) {
      let r = e === this._mostRecentTransientRipple, { persistent: t } = e.config;
      e.state = bt.VISIBLE, !t && (!r || !this._isPointerDown) && e.fadeOut();
    }

    _destroyRipple(e) {
      let r = this._activeRipples.get(e) ?? null;
      this._activeRipples.delete(e), this._activeRipples.size || (this._containerRect = null), e === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null), e.state = bt.HIDDEN, r !== null && (e.element.removeEventListener("transitionend", r.onTransitionEnd), e.element.removeEventListener("transitioncancel", r.onTransitionCancel), r.fallbackTimer !== null && clearTimeout(r.fallbackTimer)), e.element.remove();
    }

    _onMousedown(e) {
      let r = ve(e), t = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + Er;
      !this._target.rippleDisabled && !r && !t && (this._isPointerDown = !0, this.fadeInRipple(e.clientX, e.clientY, this._target.rippleConfig));
    }

    _onTouchStart(e) {
      if (!this._target.rippleDisabled && !ye(e)) {
        this._lastTouchStartEvent = Date.now(), this._isPointerDown = !0;
        let r = e.changedTouches;
        if (r) for (let t = 0; t < r.length; t++) this.fadeInRipple(r[t].clientX, r[t].clientY, this._target.rippleConfig);
      }
    }

    _onPointerUp() {
      this._isPointerDown && (this._isPointerDown = !1, this._getActiveRipples().forEach(e => {
        let r = e.state === bt.VISIBLE || e.config.terminateOnPointerUp && e.state === bt.FADING_IN;
        !e.config.persistent && r && e.fadeOut();
      }));
    }

    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }

    _removeTriggerEvents() {
      let e = this._triggerElement;
      e && (Ln.forEach(r => xe._eventManager.removeHandler(r, e, this)), this._pointerUpEventsRegistered && (Bn.forEach(r => e.removeEventListener(r, this, Nn)), this._pointerUpEventsRegistered = !1));
    }
  };
xe._eventManager = new Mi;
var Ti = xe;

function Dr(o, e, r) {
  let t = Math.max(Math.abs(o - r.left), Math.abs(o - r.right)),
    i = Math.max(Math.abs(e - r.top), Math.abs(e - r.bottom));
  return Math.sqrt(t * t + i * i);
}

var Un = new v("mat-ripple-global-options"), Ce = (() => {
  let e = class e {
    get disabled() {
      return this._disabled;
    }

    set disabled(t) {
      t && this.fadeOutAllNonPersistent(), this._disabled = t, this._setupTriggerEventsIfEnabled();
    }

    get trigger() {
      return this._trigger || this._elementRef.nativeElement;
    }

    set trigger(t) {
      this._trigger = t, this._setupTriggerEventsIfEnabled();
    }

    constructor(t, i, n, a, s) {
      this._elementRef = t, this._animationMode = s, this.radius = 0, this._disabled = !1, this._isInitialized = !1, this._globalOptions = a || {}, this._rippleRenderer = new Ti(this, i, t, n);
    }

    ngOnInit() {
      this._isInitialized = !0, this._setupTriggerEventsIfEnabled();
    }

    ngOnDestroy() {
      this._rippleRenderer._removeTriggerEvents();
    }

    fadeOutAll() {
      this._rippleRenderer.fadeOutAll();
    }

    fadeOutAllNonPersistent() {
      this._rippleRenderer.fadeOutAllNonPersistent();
    }

    get rippleConfig() {
      return {
        centered: this.centered,
        radius: this.radius,
        color: this.color,
        animation: w(w(w({}, this._globalOptions.animation), this._animationMode === "NoopAnimations" ? {
          enterDuration: 0,
          exitDuration: 0
        } : {}), this.animation),
        terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
      };
    }

    get rippleDisabled() {
      return this.disabled || !!this._globalOptions.disabled;
    }

    _setupTriggerEventsIfEnabled() {
      !this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger);
    }

    launch(t, i = 0, n) {
      return typeof t == "number" ? this._rippleRenderer.fadeInRipple(t, i, w(w({}, this.rippleConfig), n)) : this._rippleRenderer.fadeInRipple(0, 0, w(w({}, this.rippleConfig), t));
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(y), d(k), d(N), d(Un, 8), d(J, 8));
  }, e.\u0275dir = X({
    type: e,
    selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
    hostAttrs: [1, "mat-ripple"],
    hostVars: 2,
    hostBindings: function(i, n) {
      i & 2 && L("mat-ripple-unbounded", n.unbounded);
    },
    inputs: {
      color: [0, "matRippleColor", "color"],
      unbounded: [0, "matRippleUnbounded", "unbounded"],
      centered: [0, "matRippleCentered", "centered"],
      radius: [0, "matRippleRadius", "radius"],
      animation: [0, "matRippleAnimation", "animation"],
      disabled: [0, "matRippleDisabled", "disabled"],
      trigger: [0, "matRippleTrigger", "trigger"]
    },
    exportAs: ["matRipple"],
    standalone: !0
  });
  let o = e;
  return o;
})();
var Vn = { capture: !0 }, zn = ["focus", "mousedown", "mouseenter", "touchstart"],
  ki = "mat-ripple-loader-uninitialized", Si = "mat-ripple-loader-class-name", Hn = "mat-ripple-loader-centered",
  ti = "mat-ripple-loader-disabled", Wn = (() => {
    let e = class e {
      constructor() {
        this._document = I(E, { optional: !0 }), this._animationMode = I(J, { optional: !0 }), this._globalRippleOptions = I(Un, { optional: !0 }), this._platform = I(N), this._ngZone = I(k), this._hosts = new Map, this._onInteraction = t => {
          let i = ft(t);
          if (i instanceof HTMLElement) {
            let n = i.closest(`[${ki}="${this._globalRippleOptions?.namespace ?? ""}"]`);
            n && this._createRipple(n);
          }
        }, this._ngZone.runOutsideAngular(() => {
          for (let t of zn) this._document?.addEventListener(t, this._onInteraction, Vn);
        });
      }

      ngOnDestroy() {
        let t = this._hosts.keys();
        for (let i of t) this.destroyRipple(i);
        for (let i of zn) this._document?.removeEventListener(i, this._onInteraction, Vn);
      }

      configureRipple(t, i) {
        t.setAttribute(ki, this._globalRippleOptions?.namespace ?? ""), (i.className || !t.hasAttribute(Si)) && t.setAttribute(Si, i.className || ""), i.centered && t.setAttribute(Hn, ""), i.disabled && t.setAttribute(ti, "");
      }

      getRipple(t) {
        return this._hosts.get(t) || this._createRipple(t);
      }

      setDisabled(t, i) {
        let n = this._hosts.get(t);
        if (n) {
          n.disabled = i;
          return;
        }
        i ? t.setAttribute(ti, "") : t.removeAttribute(ti);
      }

      _createRipple(t) {
        if (!this._document) return;
        let i = this._hosts.get(t);
        if (i) return i;
        t.querySelector(".mat-ripple")?.remove();
        let n = this._document.createElement("span");
        n.classList.add("mat-ripple", t.getAttribute(Si)), t.append(n);
        let a = new Ce(new y(n), this._ngZone, this._platform, this._globalRippleOptions ? this._globalRippleOptions : void 0, this._animationMode ? this._animationMode : void 0);
        return a._isInitialized = !0, a.trigger = t, a.centered = t.hasAttribute(Hn), a.disabled = t.hasAttribute(ti), this.attachRipple(t, a), a;
      }

      attachRipple(t, i) {
        t.removeAttribute(ki), this._hosts.set(t, i);
      }

      destroyRipple(t) {
        let i = this._hosts.get(t);
        i && (i.ngOnDestroy(), this._hosts.delete(t));
      }
    };
    e.\u0275fac = function(i) {
      return new (i || e);
    }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
    let o = e;
    return o;
  })();
var Sr = ["mat-button", ""],
  Ar = [[["", 8, "material-icons", 3, "iconPositionEnd", ""], ["mat-icon", 3, "iconPositionEnd", ""], ["", "matButtonIcon", "", 3, "iconPositionEnd", ""]], "*", [["", "iconPositionEnd", "", 8, "material-icons"], ["mat-icon", "iconPositionEnd", ""], ["", "matButtonIcon", "", "iconPositionEnd", ""]]],
  Mr = [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];
var Tr = ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";
var Rr = ["mat-icon-button", ""], Or = ["*"];
var Fr = new v("MAT_BUTTON_CONFIG");
var Pr = [{ attribute: "mat-button", mdcClasses: ["mdc-button", "mat-mdc-button"] }, {
  attribute: "mat-flat-button",
  mdcClasses: ["mdc-button", "mdc-button--unelevated", "mat-mdc-unelevated-button"]
}, {
  attribute: "mat-raised-button",
  mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"]
}, {
  attribute: "mat-stroked-button",
  mdcClasses: ["mdc-button", "mdc-button--outlined", "mat-mdc-outlined-button"]
}, { attribute: "mat-fab", mdcClasses: ["mdc-fab", "mat-mdc-fab-base", "mat-mdc-fab"] }, {
  attribute: "mat-mini-fab",
  mdcClasses: ["mdc-fab", "mat-mdc-fab-base", "mdc-fab--mini", "mat-mdc-mini-fab"]
}, { attribute: "mat-icon-button", mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"] }], Yn = (() => {
  let e = class e {
    get ripple() {
      return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
    }

    set ripple(t) {
      this._rippleLoader?.attachRipple(this._elementRef.nativeElement, t);
    }

    get disableRipple() {
      return this._disableRipple;
    }

    set disableRipple(t) {
      this._disableRipple = t, this._updateRippleDisabled();
    }

    get disabled() {
      return this._disabled;
    }

    set disabled(t) {
      this._disabled = t, this._updateRippleDisabled();
    }

    constructor(t, i, n, a) {
      this._elementRef = t, this._platform = i, this._ngZone = n, this._animationMode = a, this._focusMonitor = I(mt), this._rippleLoader = I(Wn), this._isFab = !1, this._disableRipple = !1, this._disabled = !1;
      let s = I(Fr, { optional: !0 }), c = t.nativeElement, u = c.classList;
      this.disabledInteractive = s?.disabledInteractive ?? !1, this.color = s?.color ?? null, this._rippleLoader?.configureRipple(c, { className: "mat-mdc-button-ripple" });
      for (let { attribute: l, mdcClasses: m } of Pr) c.hasAttribute(l) && u.add(...m);
    }

    ngAfterViewInit() {
      this._focusMonitor.monitor(this._elementRef, !0);
    }

    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef), this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
    }

    focus(t = "program", i) {
      t ? this._focusMonitor.focusVia(this._elementRef.nativeElement, t, i) : this._elementRef.nativeElement.focus(i);
    }

    _getAriaDisabled() {
      return this.ariaDisabled != null ? this.ariaDisabled : this.disabled && this.disabledInteractive ? !0 : null;
    }

    _getDisabledAttribute() {
      return this.disabledInteractive || !this.disabled ? null : !0;
    }

    _updateRippleDisabled() {
      this._rippleLoader?.setDisabled(this._elementRef.nativeElement, this.disableRipple || this.disabled);
    }
  };
  e.\u0275fac = function(i) {
    fn();
  }, e.\u0275dir = X({
    type: e,
    inputs: {
      color: "color",
      disableRipple: [2, "disableRipple", "disableRipple", G],
      disabled: [2, "disabled", "disabled", G],
      ariaDisabled: [2, "aria-disabled", "ariaDisabled", G],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", G]
    },
    features: [tt]
  });
  let o = e;
  return o;
})();
var ce = (() => {
  let e = class e extends Yn {
    constructor(t, i, n, a) {
      super(t, i, n, a);
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(y), d(N), d(k), d(J, 8));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-flat-button", ""], ["button", "mat-stroked-button", ""]],
    hostVars: 14,
    hostBindings: function(i, n) {
      i & 2 && (T("disabled", n._getDisabledAttribute())("aria-disabled", n._getAriaDisabled()), At(n.color ? "mat-" + n.color : ""), L("mat-mdc-button-disabled", n.disabled)("mat-mdc-button-disabled-interactive", n.disabledInteractive)("_mat-animation-noopable", n._animationMode === "NoopAnimations")("mat-unthemed", !n.color)("mat-mdc-button-base", !0));
    },
    exportAs: ["matButton"],
    standalone: !0,
    features: [st, _],
    attrs: Sr,
    ngContentSelectors: Mr,
    decls: 7,
    vars: 4,
    consts: [[1, "mat-mdc-button-persistent-ripple"], [1, "mdc-button__label"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
    template: function(i, n) {
      i & 1 && (et(Ar), P(0, "span", 0), O(1), p(2, "span", 1), O(3, 1), f(), O(4, 2), P(5, "span", 2)(6, "span", 3)), i & 2 && L("mdc-button__ripple", !n._isFab)("mdc-fab__ripple", n._isFab);
    },
    styles: [".mat-mdc-button-base{text-decoration:none}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-text-button-horizontal-padding, 8px);height:var(--mdc-text-button-container-height);font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);text-transform:var(--mdc-text-button-label-text-transform);font-weight:var(--mdc-text-button-label-text-weight)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-filled-button-horizontal-padding, 16px);height:var(--mdc-filled-button-container-height);font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);text-transform:var(--mdc-filled-button-label-text-transform);font-weight:var(--mdc-filled-button-label-text-weight)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color);background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow);height:var(--mdc-protected-button-container-height);font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);text-transform:var(--mdc-protected-button-label-text-transform);font-weight:var(--mdc-protected-button-label-text-weight)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color);background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-outlined-button-horizontal-padding, 15px);height:var(--mdc-outlined-button-container-height);font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);text-transform:var(--mdc-outlined-button-label-text-transform);font-weight:var(--mdc-outlined-button-label-text-weight);border-radius:var(--mdc-outlined-button-container-shape);border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color);border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button .mdc-button__ripple{border-width:var(--mdc-outlined-button-outline-width);border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:\"\";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:\"\"}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}", ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],
    encapsulation: 2,
    changeDetection: 0
  });
  let o = e;
  return o;
})();
var ei = (() => {
  let e = class e extends Yn {
    constructor(t, i, n, a) {
      super(t, i, n, a), this._rippleLoader.configureRipple(this._elementRef.nativeElement, { centered: !0 });
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(y), d(N), d(k), d(J, 8));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["button", "mat-icon-button", ""]],
    hostVars: 14,
    hostBindings: function(i, n) {
      i & 2 && (T("disabled", n._getDisabledAttribute())("aria-disabled", n._getAriaDisabled()), At(n.color ? "mat-" + n.color : ""), L("mat-mdc-button-disabled", n.disabled)("mat-mdc-button-disabled-interactive", n.disabledInteractive)("_mat-animation-noopable", n._animationMode === "NoopAnimations")("mat-unthemed", !n.color)("mat-mdc-button-base", !0));
    },
    exportAs: ["matButton"],
    standalone: !0,
    features: [st, _],
    attrs: Rr,
    ngContentSelectors: Or,
    decls: 4,
    vars: 0,
    consts: [[1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"], [1, "mat-mdc-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
    template: function(i, n) {
      i & 1 && (et(), P(0, "span", 0), O(1), P(2, "span", 1)(3, "span", 2));
    },
    styles: [".mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);color:var(--mdc-icon-button-icon-color);-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:\"\";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:\"\"}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color)}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity)}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity)}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity)}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}", Tr],
    encapsulation: 2,
    changeDetection: 0
  });
  let o = e;
  return o;
})();
var Nr = ["*"], ii;

function Lr() {
  if (ii === void 0 && (ii = null, typeof window < "u")) {
    let o = window;
    o.trustedTypes !== void 0 && (ii = o.trustedTypes.createPolicy("angular#components", { createHTML: e => e }));
  }
  return ii;
}

function Ee(o) {
  return Lr()?.createHTML(o) || o;
}

function $n(o) {
  return Error(`Unable to find icon with the name "${o}"`);
}

function Br() {
  return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");
}

function Zn(o) {
  return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`);
}

function Gn(o) {
  return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`);
}

var Rt = class {
  constructor(e, r, t) {
    this.url = e, this.svgText = r, this.options = t;
  }
}, Vr = (() => {
  let e = class e {
    constructor(t, i, n, a) {
      this._httpClient = t, this._sanitizer = i, this._errorHandler = a, this._svgIconConfigs = new Map, this._iconSetConfigs = new Map, this._cachedIconsByUrl = new Map, this._inProgressUrlFetches = new Map, this._fontCssClassesByAlias = new Map, this._resolvers = [], this._defaultFontSetClass = ["material-icons", "mat-ligature-font"], this._document = n;
    }

    addSvgIcon(t, i, n) {
      return this.addSvgIconInNamespace("", t, i, n);
    }

    addSvgIconLiteral(t, i, n) {
      return this.addSvgIconLiteralInNamespace("", t, i, n);
    }

    addSvgIconInNamespace(t, i, n, a) {
      return this._addSvgIconConfig(t, i, new Rt(n, null, a));
    }

    addSvgIconResolver(t) {
      return this._resolvers.push(t), this;
    }

    addSvgIconLiteralInNamespace(t, i, n, a) {
      let s = this._sanitizer.sanitize(ee.HTML, n);
      if (!s) throw Gn(n);
      let c = Ee(s);
      return this._addSvgIconConfig(t, i, new Rt("", c, a));
    }

    addSvgIconSet(t, i) {
      return this.addSvgIconSetInNamespace("", t, i);
    }

    addSvgIconSetLiteral(t, i) {
      return this.addSvgIconSetLiteralInNamespace("", t, i);
    }

    addSvgIconSetInNamespace(t, i, n) {
      return this._addSvgIconSetConfig(t, new Rt(i, null, n));
    }

    addSvgIconSetLiteralInNamespace(t, i, n) {
      let a = this._sanitizer.sanitize(ee.HTML, i);
      if (!a) throw Gn(i);
      let s = Ee(a);
      return this._addSvgIconSetConfig(t, new Rt("", s, n));
    }

    registerFontClassAlias(t, i = t) {
      return this._fontCssClassesByAlias.set(t, i), this;
    }

    classNameForFontAlias(t) {
      return this._fontCssClassesByAlias.get(t) || t;
    }

    setDefaultFontSetClass(...t) {
      return this._defaultFontSetClass = t, this;
    }

    getDefaultFontSetClass() {
      return this._defaultFontSetClass;
    }

    getSvgIconFromUrl(t) {
      let i = this._sanitizer.sanitize(ee.RESOURCE_URL, t);
      if (!i) throw Zn(t);
      let n = this._cachedIconsByUrl.get(i);
      return n ? ot(ni(n)) : this._loadSvgIconFromConfig(new Rt(t, null)).pipe(te(a => this._cachedIconsByUrl.set(i, a)), vt(a => ni(a)));
    }

    getNamedSvgIcon(t, i = "") {
      let n = Xn(i, t), a = this._svgIconConfigs.get(n);
      if (a) return this._getSvgFromConfig(a);
      if (a = this._getIconConfigFromResolvers(i, t), a) return this._svgIconConfigs.set(n, a), this._getSvgFromConfig(a);
      let s = this._iconSetConfigs.get(i);
      return s ? this._getSvgFromIconSetConfigs(t, s) : rn($n(n));
    }

    ngOnDestroy() {
      this._resolvers = [], this._svgIconConfigs.clear(), this._iconSetConfigs.clear(), this._cachedIconsByUrl.clear();
    }

    _getSvgFromConfig(t) {
      return t.svgText ? ot(ni(this._svgElementFromConfig(t))) : this._loadSvgIconFromConfig(t).pipe(vt(i => ni(i)));
    }

    _getSvgFromIconSetConfigs(t, i) {
      let n = this._extractIconWithNameFromAnySet(t, i);
      if (n) return ot(n);
      let a = i.filter(s => !s.svgText).map(s => this._loadSvgIconSetFromConfig(s).pipe(sn(c => {
        let l = `Loading icon set URL: ${this._sanitizer.sanitize(ee.RESOURCE_URL, s.url)} failed: ${c.message}`;
        return this._errorHandler.handleError(new Error(l)), ot(null);
      })));
      return an(a).pipe(vt(() => {
        let s = this._extractIconWithNameFromAnySet(t, i);
        if (!s) throw $n(t);
        return s;
      }));
    }

    _extractIconWithNameFromAnySet(t, i) {
      for (let n = i.length - 1; n >= 0; n--) {
        let a = i[n];
        if (a.svgText && a.svgText.toString().indexOf(t) > -1) {
          let s = this._svgElementFromConfig(a), c = this._extractSvgIconFromSet(s, t, a.options);
          if (c) return c;
        }
      }
      return null;
    }

    _loadSvgIconFromConfig(t) {
      return this._fetchIcon(t).pipe(te(i => t.svgText = i), vt(() => this._svgElementFromConfig(t)));
    }

    _loadSvgIconSetFromConfig(t) {
      return t.svgText ? ot(null) : this._fetchIcon(t).pipe(te(i => t.svgText = i));
    }

    _extractSvgIconFromSet(t, i, n) {
      let a = t.querySelector(`[id="${i}"]`);
      if (!a) return null;
      let s = a.cloneNode(!0);
      if (s.removeAttribute("id"), s.nodeName.toLowerCase() === "svg") return this._setSvgAttributes(s, n);
      if (s.nodeName.toLowerCase() === "symbol") return this._setSvgAttributes(this._toSvgElement(s), n);
      let c = this._svgElementFromString(Ee("<svg></svg>"));
      return c.appendChild(s), this._setSvgAttributes(c, n);
    }

    _svgElementFromString(t) {
      let i = this._document.createElement("DIV");
      i.innerHTML = t;
      let n = i.querySelector("svg");
      if (!n) throw Error("<svg> tag not found");
      return n;
    }

    _toSvgElement(t) {
      let i = this._svgElementFromString(Ee("<svg></svg>")), n = t.attributes;
      for (let a = 0; a < n.length; a++) {
        let { name: s, value: c } = n[a];
        s !== "id" && i.setAttribute(s, c);
      }
      for (let a = 0; a < t.childNodes.length; a++) t.childNodes[a].nodeType === this._document.ELEMENT_NODE && i.appendChild(t.childNodes[a].cloneNode(!0));
      return i;
    }

    _setSvgAttributes(t, i) {
      return t.setAttribute("fit", ""), t.setAttribute("height", "100%"), t.setAttribute("width", "100%"), t.setAttribute("preserveAspectRatio", "xMidYMid meet"), t.setAttribute("focusable", "false"), i && i.viewBox && t.setAttribute("viewBox", i.viewBox), t;
    }

    _fetchIcon(t) {
      let { url: i, options: n } = t, a = n?.withCredentials ?? !1;
      if (!this._httpClient) throw Br();
      if (i == null) throw Error(`Cannot fetch icon from URL "${i}".`);
      let s = this._sanitizer.sanitize(ee.RESOURCE_URL, i);
      if (!s) throw Zn(i);
      let c = this._inProgressUrlFetches.get(s);
      if (c) return c;
      let u = this._httpClient.get(s, {
        responseType: "text",
        withCredentials: a
      }).pipe(vt(l => Ee(l)), cn(() => this._inProgressUrlFetches.delete(s)), dn());
      return this._inProgressUrlFetches.set(s, u), u;
    }

    _addSvgIconConfig(t, i, n) {
      return this._svgIconConfigs.set(Xn(t, i), n), this;
    }

    _addSvgIconSetConfig(t, i) {
      let n = this._iconSetConfigs.get(t);
      return n ? n.push(i) : this._iconSetConfigs.set(t, [i]), this;
    }

    _svgElementFromConfig(t) {
      if (!t.svgElement) {
        let i = this._svgElementFromString(t.svgText);
        this._setSvgAttributes(i, t.options), t.svgElement = i;
      }
      return t.svgElement;
    }

    _getIconConfigFromResolvers(t, i) {
      for (let n = 0; n < this._resolvers.length; n++) {
        let a = this._resolvers[n](i, t);
        if (a) return zr(a) ? new Rt(a.url, null, a.options) : new Rt(a, null);
      }
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(We, 8), h(kn), h(E, 8), h(Be));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();

function ni(o) {
  return o.cloneNode(!0);
}

function Xn(o, e) {
  return o + ":" + e;
}

function zr(o) {
  return !!(o.url && o.options);
}

var Hr = new v("MAT_ICON_DEFAULT_OPTIONS"), Ur = new v("mat-icon-location", { providedIn: "root", factory: Wr });

function Wr() {
  let o = I(E), e = o ? o.location : null;
  return { getPathname: () => e ? e.pathname + e.search : "" };
}

var Kn = ["clip-path", "color-profile", "src", "cursor", "fill", "filter", "marker", "marker-start", "marker-mid", "marker-end", "mask", "stroke"],
  Yr = Kn.map(o => `[${o}]`).join(", "), $r = /^url\(['"]?#(.*?)['"]?\)$/, de = (() => {
    let e = class e {
      get color() {
        return this._color || this._defaultColor;
      }

      set color(t) {
        this._color = t;
      }

      get svgIcon() {
        return this._svgIcon;
      }

      set svgIcon(t) {
        t !== this._svgIcon && (t ? this._updateSvgIcon(t) : this._svgIcon && this._clearSvgElement(), this._svgIcon = t);
      }

      get fontSet() {
        return this._fontSet;
      }

      set fontSet(t) {
        let i = this._cleanupFontValue(t);
        i !== this._fontSet && (this._fontSet = i, this._updateFontIconClasses());
      }

      get fontIcon() {
        return this._fontIcon;
      }

      set fontIcon(t) {
        let i = this._cleanupFontValue(t);
        i !== this._fontIcon && (this._fontIcon = i, this._updateFontIconClasses());
      }

      constructor(t, i, n, a, s, c) {
        this._elementRef = t, this._iconRegistry = i, this._location = a, this._errorHandler = s, this.inline = !1, this._previousFontSetClass = [], this._currentIconFetch = it.EMPTY, c && (c.color && (this.color = this._defaultColor = c.color), c.fontSet && (this.fontSet = c.fontSet)), n || t.nativeElement.setAttribute("aria-hidden", "true");
      }

      _splitIconName(t) {
        if (!t) return ["", ""];
        let i = t.split(":");
        switch (i.length) {
          case 1:
            return ["", i[0]];
          case 2:
            return i;
          default:
            throw Error(`Invalid icon name: "${t}"`);
        }
      }

      ngOnInit() {
        this._updateFontIconClasses();
      }

      ngAfterViewChecked() {
        let t = this._elementsWithExternalReferences;
        if (t && t.size) {
          let i = this._location.getPathname();
          i !== this._previousPath && (this._previousPath = i, this._prependPathToReferences(i));
        }
      }

      ngOnDestroy() {
        this._currentIconFetch.unsubscribe(), this._elementsWithExternalReferences && this._elementsWithExternalReferences.clear();
      }

      _usingFontIcon() {
        return !this.svgIcon;
      }

      _setSvgElement(t) {
        this._clearSvgElement();
        let i = this._location.getPathname();
        this._previousPath = i, this._cacheChildrenWithExternalReferences(t), this._prependPathToReferences(i), this._elementRef.nativeElement.appendChild(t);
      }

      _clearSvgElement() {
        let t = this._elementRef.nativeElement, i = t.childNodes.length;
        for (this._elementsWithExternalReferences && this._elementsWithExternalReferences.clear(); i--;) {
          let n = t.childNodes[i];
          (n.nodeType !== 1 || n.nodeName.toLowerCase() === "svg") && n.remove();
        }
      }

      _updateFontIconClasses() {
        if (!this._usingFontIcon()) return;
        let t = this._elementRef.nativeElement,
          i = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter(n => n.length > 0);
        this._previousFontSetClass.forEach(n => t.classList.remove(n)), i.forEach(n => t.classList.add(n)), this._previousFontSetClass = i, this.fontIcon !== this._previousFontIconClass && !i.includes("mat-ligature-font") && (this._previousFontIconClass && t.classList.remove(this._previousFontIconClass), this.fontIcon && t.classList.add(this.fontIcon), this._previousFontIconClass = this.fontIcon);
      }

      _cleanupFontValue(t) {
        return typeof t == "string" ? t.trim().split(" ")[0] : t;
      }

      _prependPathToReferences(t) {
        let i = this._elementsWithExternalReferences;
        i && i.forEach((n, a) => {
          n.forEach(s => {
            a.setAttribute(s.name, `url('${t}#${s.value}')`);
          });
        });
      }

      _cacheChildrenWithExternalReferences(t) {
        let i = t.querySelectorAll(Yr),
          n = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map;
        for (let a = 0; a < i.length; a++) Kn.forEach(s => {
          let c = i[a], u = c.getAttribute(s), l = u ? u.match($r) : null;
          if (l) {
            let m = n.get(c);
            m || (m = [], n.set(c, m)), m.push({ name: s, value: l[1] });
          }
        });
      }

      _updateSvgIcon(t) {
        if (this._svgNamespace = null, this._svgName = null, this._currentIconFetch.unsubscribe(), t) {
          let [i, n] = this._splitIconName(t);
          i && (this._svgNamespace = i), n && (this._svgName = n), this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(n, i).pipe(dt(1)).subscribe(a => this._setSvgElement(a), a => {
            let s = `Error retrieving icon ${i}:${n}! ${a.message}`;
            this._errorHandler.handleError(new Error(s));
          });
        }
      }
    };
    e.\u0275fac = function(i) {
      return new (i || e)(d(y), d(Vr), Le("aria-hidden"), d(Ur), d(Be), d(Hr, 8));
    }, e.\u0275cmp = b({
      type: e,
      selectors: [["mat-icon"]],
      hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
      hostVars: 10,
      hostBindings: function(i, n) {
        i & 2 && (T("data-mat-icon-type", n._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", n._svgName || n.fontIcon)("data-mat-icon-namespace", n._svgNamespace || n.fontSet)("fontIcon", n._usingFontIcon() ? n.fontIcon : null), At(n.color ? "mat-" + n.color : ""), L("mat-icon-inline", n.inline)("mat-icon-no-color", n.color !== "primary" && n.color !== "accent" && n.color !== "warn"));
      },
      inputs: {
        color: "color",
        inline: [2, "inline", "inline", G],
        svgIcon: "svgIcon",
        fontSet: "fontSet",
        fontIcon: "fontIcon"
      },
      exportAs: ["matIcon"],
      standalone: !0,
      features: [tt, _],
      ngContentSelectors: Nr,
      decls: 1,
      vars: 0,
      template: function(i, n) {
        i & 1 && (et(), O(0));
      },
      styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
      encapsulation: 2,
      changeDetection: 0
    });
    let o = e;
    return o;
  })();
var qn = (() => {
  class o {
    sidebarService;

    constructor(r) {
      this.sidebarService = r;
    }

    toggleSidebar() {
      this.sidebarService.toggle();
    }

    static \u0275fac = function(t) {
      return new (t || o)(d(ie));
    };
    static \u0275cmp = b({
      type: o,
      selectors: [["app-navbar"]],
      standalone: !0,
      features: [_],
      decls: 6,
      vars: 0,
      consts: [[1, "w-full", "border-b", "flex", "justify-between", "items-center", "px-5", "py-3"], ["mat-icon-button", "", 1, "flex", "items-center", "justify-center", 3, "click"], [1, "text-2xl"], [1, "text-md", "!m-0"]],
      template: function(t, i) {
        t & 1 && (p(0, "div", 0)(1, "button", 1), j("click", function() {
          return i.toggleSidebar();
        }), p(2, "mat-icon", 2), C(3, "menu"), f()(), p(4, "p", 3), C(5, "Planificator instalcorp"), f()());
      },
      dependencies: [de, ei]
    });
  }

  return o;
})();
var oi = (() => {
  let e = class e {
    constructor() {
      this._listeners = [];
    }

    notify(t, i) {
      for (let n of this._listeners) n(t, i);
    }

    listen(t) {
      return this._listeners.push(t), () => {
        this._listeners = this._listeners.filter(i => t !== i);
      };
    }

    ngOnDestroy() {
      this._listeners = [];
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e);
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();
var Zr = 20, De = (() => {
  let e = class e {
    constructor(t, i, n) {
      this._ngZone = t, this._platform = i, this._scrolled = new g, this._globalSubscription = null, this._scrolledCount = 0, this.scrollContainers = new Map, this._document = n;
    }

    register(t) {
      this.scrollContainers.has(t) || this.scrollContainers.set(t, t.elementScrolled().subscribe(() => this._scrolled.next(t)));
    }

    deregister(t) {
      let i = this.scrollContainers.get(t);
      i && (i.unsubscribe(), this.scrollContainers.delete(t));
    }

    scrolled(t = Zr) {
      return this._platform.isBrowser ? new mi(i => {
        this._globalSubscription || this._addGlobalListener();
        let n = t > 0 ? this._scrolled.pipe(hi(t)).subscribe(i) : this._scrolled.subscribe(i);
        return this._scrolledCount++, () => {
          n.unsubscribe(), this._scrolledCount--, this._scrolledCount || this._removeGlobalListener();
        };
      }) : ot();
    }

    ngOnDestroy() {
      this._removeGlobalListener(), this.scrollContainers.forEach((t, i) => this.deregister(i)), this._scrolled.complete();
    }

    ancestorScrolled(t, i) {
      let n = this.getAncestorScrollContainers(t);
      return this.scrolled(i).pipe(M(a => !a || n.indexOf(a) > -1));
    }

    getAncestorScrollContainers(t) {
      let i = [];
      return this.scrollContainers.forEach((n, a) => {
        this._scrollableContainsElement(a, t) && i.push(a);
      }), i;
    }

    _getWindow() {
      return this._document.defaultView || window;
    }

    _scrollableContainsElement(t, i) {
      let n = Tt(i), a = t.getElementRef().nativeElement;
      do if (n == a) return !0; while (n = n.parentElement);
      return !1;
    }

    _addGlobalListener() {
      this._globalSubscription = this._ngZone.runOutsideAngular(() => {
        let t = this._getWindow();
        return pe(t.document, "scroll").subscribe(() => this._scrolled.next());
      });
    }

    _removeGlobalListener() {
      this._globalSubscription && (this._globalSubscription.unsubscribe(), this._globalSubscription = null);
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(k), h(N), h(E, 8));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})(), ri = (() => {
  let e = class e {
    constructor(t, i, n, a) {
      this.elementRef = t, this.scrollDispatcher = i, this.ngZone = n, this.dir = a, this._destroyed = new g, this._elementScrolled = new mi(s => this.ngZone.runOutsideAngular(() => pe(this.elementRef.nativeElement, "scroll").pipe(V(this._destroyed)).subscribe(s)));
    }

    ngOnInit() {
      this.scrollDispatcher.register(this);
    }

    ngOnDestroy() {
      this.scrollDispatcher.deregister(this), this._destroyed.next(), this._destroyed.complete();
    }

    elementScrolled() {
      return this._elementScrolled;
    }

    getElementRef() {
      return this.elementRef;
    }

    scrollTo(t) {
      let i = this.elementRef.nativeElement, n = this.dir && this.dir.value == "rtl";
      t.left == null && (t.left = n ? t.end : t.start), t.right == null && (t.right = n ? t.start : t.end), t.bottom != null && (t.top = i.scrollHeight - i.clientHeight - t.bottom), n && ne() != Ct.NORMAL ? (t.left != null && (t.right = i.scrollWidth - i.clientWidth - t.left), ne() == Ct.INVERTED ? t.left = t.right : ne() == Ct.NEGATED && (t.left = t.right ? -t.right : t.right)) : t.right != null && (t.left = i.scrollWidth - i.clientWidth - t.right), this._applyScrollToOptions(t);
    }

    _applyScrollToOptions(t) {
      let i = this.elementRef.nativeElement;
      $e() ? i.scrollTo(t) : (t.top != null && (i.scrollTop = t.top), t.left != null && (i.scrollLeft = t.left));
    }

    measureScrollOffset(t) {
      let i = "left", n = "right", a = this.elementRef.nativeElement;
      if (t == "top") return a.scrollTop;
      if (t == "bottom") return a.scrollHeight - a.clientHeight - a.scrollTop;
      let s = this.dir && this.dir.value == "rtl";
      return t == "start" ? t = s ? n : i : t == "end" && (t = s ? i : n), s && ne() == Ct.INVERTED ? t == i ? a.scrollWidth - a.clientWidth - a.scrollLeft : a.scrollLeft : s && ne() == Ct.NEGATED ? t == i ? a.scrollLeft + a.scrollWidth - a.clientWidth : -a.scrollLeft : t == i ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(y), d(De), d(k), d(Et, 8));
  }, e.\u0275dir = X({ type: e, selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]], standalone: !0 });
  let o = e;
  return o;
})(), Gr = 20, Ie = (() => {
  let e = class e {
    constructor(t, i, n) {
      this._platform = t, this._change = new g, this._changeListener = a => {
        this._change.next(a);
      }, this._document = n, i.runOutsideAngular(() => {
        if (t.isBrowser) {
          let a = this._getWindow();
          a.addEventListener("resize", this._changeListener), a.addEventListener("orientationchange", this._changeListener);
        }
        this.change().subscribe(() => this._viewportSize = null);
      });
    }

    ngOnDestroy() {
      if (this._platform.isBrowser) {
        let t = this._getWindow();
        t.removeEventListener("resize", this._changeListener), t.removeEventListener("orientationchange", this._changeListener);
      }
      this._change.complete();
    }

    getViewportSize() {
      this._viewportSize || this._updateViewportSize();
      let t = { width: this._viewportSize.width, height: this._viewportSize.height };
      return this._platform.isBrowser || (this._viewportSize = null), t;
    }

    getViewportRect() {
      let t = this.getViewportScrollPosition(), { width: i, height: n } = this.getViewportSize();
      return { top: t.top, left: t.left, bottom: t.top + n, right: t.left + i, height: n, width: i };
    }

    getViewportScrollPosition() {
      if (!this._platform.isBrowser) return { top: 0, left: 0 };
      let t = this._document, i = this._getWindow(), n = t.documentElement, a = n.getBoundingClientRect(),
        s = -a.top || t.body.scrollTop || i.scrollY || n.scrollTop || 0,
        c = -a.left || t.body.scrollLeft || i.scrollX || n.scrollLeft || 0;
      return { top: s, left: c };
    }

    change(t = Gr) {
      return t > 0 ? this._change.pipe(hi(t)) : this._change;
    }

    _getWindow() {
      return this._document.defaultView || window;
    }

    _updateViewportSize() {
      let t = this._getWindow();
      this._viewportSize = this._platform.isBrowser ? { width: t.innerWidth, height: t.innerHeight } : {
        width: 0,
        height: 0
      };
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(N), h(k), h(E, 8));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();
var eo = ["*"], Xr = ["content"], Kr = [[["mat-drawer"]], [["mat-drawer-content"]], "*"],
  Qr = ["mat-drawer", "mat-drawer-content", "*"];

function qr(o, e) {
  if (o & 1) {
    let r = Nt();
    p(0, "div", 1), j("click", function() {
      ut(r);
      let i = nt();
      return pt(i._onBackdropClicked());
    }), f();
  }
  if (o & 2) {
    let r = nt();
    L("mat-drawer-shown", r._isShowingBackdrop());
  }
}

function Jr(o, e) {
  o & 1 && (p(0, "mat-drawer-content"), O(1, 2), f());
}

var ta = {
  transformDrawer: Lt("transform", [xt("open, open-instant", ct({
    transform: "none",
    visibility: "visible"
  })), xt("void", ct({
    "box-shadow": "none",
    visibility: "hidden"
  })), kt("void => open-instant", It("0ms")), kt("void <=> open, open-instant => void", It("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])
};
var ea = new v("MAT_DRAWER_DEFAULT_AUTOSIZE", { providedIn: "root", factory: ia }), io = new v("MAT_DRAWER_CONTAINER");

function ia() {
  return !1;
}

var ke = (() => {
  let e = class e extends ri {
    constructor(t, i, n, a, s) {
      super(n, a, s), this._changeDetectorRef = t, this._container = i;
    }

    ngAfterContentInit() {
      this._container._contentMarginChanges.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      });
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(Q), d(mn(() => Fi)), d(y), d(De), d(k));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["mat-drawer-content"]],
    hostAttrs: [1, "mat-drawer-content"],
    hostVars: 4,
    hostBindings: function(i, n) {
      i & 2 && wt("margin-left", n._container._contentMargins.left, "px")("margin-right", n._container._contentMargins.right, "px");
    },
    standalone: !0,
    features: [lt([{ provide: ri, useExisting: e }]), st, _],
    ngContentSelectors: eo,
    decls: 1,
    vars: 0,
    template: function(i, n) {
      i & 1 && (et(), O(0));
    },
    encapsulation: 2,
    changeDetection: 0
  });
  let o = e;
  return o;
})(), Oi = (() => {
  let e = class e {
    get position() {
      return this._position;
    }

    set position(t) {
      t = t === "end" ? "end" : "start", t !== this._position && (this._isAttached && this._updatePositionInParent(t), this._position = t, this.onPositionChanged.emit());
    }

    get mode() {
      return this._mode;
    }

    set mode(t) {
      this._mode = t, this._updateFocusTrapState(), this._modeChanged.next();
    }

    get disableClose() {
      return this._disableClose;
    }

    set disableClose(t) {
      this._disableClose = Zt(t);
    }

    get autoFocus() {
      let t = this._autoFocus;
      return t ?? (this.mode === "side" ? "dialog" : "first-tabbable");
    }

    set autoFocus(t) {
      (t === "true" || t === "false" || t == null) && (t = Zt(t)), this._autoFocus = t;
    }

    get opened() {
      return this._opened;
    }

    set opened(t) {
      this.toggle(Zt(t));
    }

    constructor(t, i, n, a, s, c, u, l) {
      this._elementRef = t, this._focusTrapFactory = i, this._focusMonitor = n, this._platform = a, this._ngZone = s, this._interactivityChecker = c, this._doc = u, this._container = l, this._focusTrap = null, this._elementFocusedBeforeDrawerWasOpened = null, this._enableAnimations = !1, this._position = "start", this._mode = "over", this._disableClose = !1, this._opened = !1, this._animationStarted = new g, this._animationEnd = new g, this._animationState = "void", this.openedChange = new F(!0), this._openedStream = this.openedChange.pipe(M(m => m), vt(() => {
      })), this.openedStart = this._animationStarted.pipe(M(m => m.fromState !== m.toState && m.toState.indexOf("open") === 0), ui(void 0)), this._closedStream = this.openedChange.pipe(M(m => !m), vt(() => {
      })), this.closedStart = this._animationStarted.pipe(M(m => m.fromState !== m.toState && m.toState === "void"), ui(void 0)), this._destroyed = new g, this.onPositionChanged = new F, this._modeChanged = new g, this._injector = I($), this._changeDetectorRef = I(Q), this.openedChange.pipe(V(this._destroyed)).subscribe(m => {
        m ? (this._doc && (this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement), this._takeFocus()) : this._isFocusWithinDrawer() && this._restoreFocus(this._openedVia || "program");
      }), this._ngZone.runOutsideAngular(() => {
        pe(this._elementRef.nativeElement, "keydown").pipe(M(m => m.keyCode === 27 && !this.disableClose && !gt(m)), V(this._destroyed)).subscribe(m => this._ngZone.run(() => {
          this.close(), m.stopPropagation(), m.preventDefault();
        }));
      }), this._animationEnd.pipe(fe((m, D) => m.fromState === D.fromState && m.toState === D.toState)).subscribe(m => {
        let { fromState: D, toState: R } = m;
        (R.indexOf("open") === 0 && D === "void" || R === "void" && D.indexOf("open") === 0) && this.openedChange.emit(this._opened);
      });
    }

    _forceFocus(t, i) {
      this._interactivityChecker.isFocusable(t) || (t.tabIndex = -1, this._ngZone.runOutsideAngular(() => {
        let n = () => {
          t.removeEventListener("blur", n), t.removeEventListener("mousedown", n), t.removeAttribute("tabindex");
        };
        t.addEventListener("blur", n), t.addEventListener("mousedown", n);
      })), t.focus(i);
    }

    _focusByCssSelector(t, i) {
      let n = this._elementRef.nativeElement.querySelector(t);
      n && this._forceFocus(n, i);
    }

    _takeFocus() {
      if (!this._focusTrap) return;
      let t = this._elementRef.nativeElement;
      switch (this.autoFocus) {
        case!1:
        case"dialog":
          return;
        case!0:
        case"first-tabbable":
          yt(() => {
            !this._focusTrap.focusInitialElement() && typeof t.focus == "function" && t.focus();
          }, { injector: this._injector });
          break;
        case"first-heading":
          this._focusByCssSelector("h1, h2, h3, h4, h5, h6, [role=\"heading\"]");
          break;
        default:
          this._focusByCssSelector(this.autoFocus);
          break;
      }
    }

    _restoreFocus(t) {
      this.autoFocus !== "dialog" && (this._elementFocusedBeforeDrawerWasOpened ? this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, t) : this._elementRef.nativeElement.blur(), this._elementFocusedBeforeDrawerWasOpened = null);
    }

    _isFocusWithinDrawer() {
      let t = this._doc.activeElement;
      return !!t && this._elementRef.nativeElement.contains(t);
    }

    ngAfterViewInit() {
      this._isAttached = !0, this._position === "end" && this._updatePositionInParent("end"), this._platform.isBrowser && (this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement), this._updateFocusTrapState());
    }

    ngAfterContentChecked() {
      this._platform.isBrowser && (this._enableAnimations = !0);
    }

    ngOnDestroy() {
      this._focusTrap?.destroy(), this._anchor?.remove(), this._anchor = null, this._animationStarted.complete(), this._animationEnd.complete(), this._modeChanged.complete(), this._destroyed.next(), this._destroyed.complete();
    }

    open(t) {
      return this.toggle(!0, t);
    }

    close() {
      return this.toggle(!1);
    }

    _closeViaBackdropClick() {
      return this._setOpen(!1, !0, "mouse");
    }

    toggle(t = !this.opened, i) {
      t && i && (this._openedVia = i);
      let n = this._setOpen(t, !t && this._isFocusWithinDrawer(), this._openedVia || "program");
      return t || (this._openedVia = null), n;
    }

    _setOpen(t, i, n) {
      return this._opened = t, t ? this._animationState = this._enableAnimations ? "open" : "open-instant" : (this._animationState = "void", i && this._restoreFocus(n)), this._changeDetectorRef.markForCheck(), this._updateFocusTrapState(), new Promise(a => {
        this.openedChange.pipe(dt(1)).subscribe(s => a(s ? "open" : "close"));
      });
    }

    _getWidth() {
      return this._elementRef.nativeElement && this._elementRef.nativeElement.offsetWidth || 0;
    }

    _updateFocusTrapState() {
      this._focusTrap && (this._focusTrap.enabled = !!this._container?.hasBackdrop);
    }

    _updatePositionInParent(t) {
      if (!this._platform.isBrowser) return;
      let i = this._elementRef.nativeElement, n = i.parentNode;
      t === "end" ? (this._anchor || (this._anchor = this._doc.createComment("mat-drawer-anchor"), n.insertBefore(this._anchor, i)), n.appendChild(i)) : this._anchor && this._anchor.parentNode.insertBefore(i, this._anchor);
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(y), d(se), d(mt), d(N), d(k), d(Gt), d(E, 8), d(io, 8));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["mat-drawer"]],
    viewQuery: function(i, n) {
      if (i & 1 && rt(Xr, 5), i & 2) {
        let a;
        z(a = H()) && (n._content = a.first);
      }
    },
    hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
    hostVars: 12,
    hostBindings: function(i, n) {
      i & 1 && vn("@transform.start", function(s) {
        return n._animationStarted.next(s);
      })("@transform.done", function(s) {
        return n._animationEnd.next(s);
      }), i & 2 && (_n("@transform", n._animationState), T("align", null), L("mat-drawer-end", n.position === "end")("mat-drawer-over", n.mode === "over")("mat-drawer-push", n.mode === "push")("mat-drawer-side", n.mode === "side")("mat-drawer-opened", n.opened));
    },
    inputs: {
      position: "position",
      mode: "mode",
      disableClose: "disableClose",
      autoFocus: "autoFocus",
      opened: "opened"
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      openedStart: "openedStart",
      _closedStream: "closed",
      closedStart: "closedStart",
      onPositionChanged: "positionChanged"
    },
    exportAs: ["matDrawer"],
    standalone: !0,
    features: [_],
    ngContentSelectors: eo,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function(i, n) {
      i & 1 && (et(), p(0, "div", 1, 0), O(2), f());
    },
    dependencies: [ri],
    encapsulation: 2,
    data: { animation: [ta.transformDrawer] },
    changeDetection: 0
  });
  let o = e;
  return o;
})(), Fi = (() => {
  let e = class e {
    get start() {
      return this._start;
    }

    get end() {
      return this._end;
    }

    get autosize() {
      return this._autosize;
    }

    set autosize(t) {
      this._autosize = Zt(t);
    }

    get hasBackdrop() {
      return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
    }

    set hasBackdrop(t) {
      this._backdropOverride = t == null ? null : Zt(t);
    }

    get scrollable() {
      return this._userContent || this._content;
    }

    constructor(t, i, n, a, s, c = !1, u) {
      this._dir = t, this._element = i, this._ngZone = n, this._changeDetectorRef = a, this._animationMode = u, this._drawers = new Ft, this.backdropClick = new F, this._destroyed = new g, this._doCheckSubject = new g, this._contentMargins = {
        left: null,
        right: null
      }, this._contentMarginChanges = new g, this._injector = I($), t && t.change.pipe(V(this._destroyed)).subscribe(() => {
        this._validateDrawers(), this.updateContentMargins();
      }), s.change().pipe(V(this._destroyed)).subscribe(() => this.updateContentMargins()), this._autosize = c;
    }

    ngAfterContentInit() {
      this._allDrawers.changes.pipe(at(this._allDrawers), V(this._destroyed)).subscribe(t => {
        this._drawers.reset(t.filter(i => !i._container || i._container === this)), this._drawers.notifyOnChanges();
      }), this._drawers.changes.pipe(at(null)).subscribe(() => {
        this._validateDrawers(), this._drawers.forEach(t => {
          this._watchDrawerToggle(t), this._watchDrawerPosition(t), this._watchDrawerMode(t);
        }), (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) && this.updateContentMargins(), this._changeDetectorRef.markForCheck();
      }), this._ngZone.runOutsideAngular(() => {
        this._doCheckSubject.pipe(je(10), V(this._destroyed)).subscribe(() => this.updateContentMargins());
      });
    }

    ngOnDestroy() {
      this._contentMarginChanges.complete(), this._doCheckSubject.complete(), this._drawers.destroy(), this._destroyed.next(), this._destroyed.complete();
    }

    open() {
      this._drawers.forEach(t => t.open());
    }

    close() {
      this._drawers.forEach(t => t.close());
    }

    updateContentMargins() {
      let t = 0, i = 0;
      if (this._left && this._left.opened) {
        if (this._left.mode == "side") t += this._left._getWidth(); else if (this._left.mode == "push") {
          let n = this._left._getWidth();
          t += n, i -= n;
        }
      }
      if (this._right && this._right.opened) {
        if (this._right.mode == "side") i += this._right._getWidth(); else if (this._right.mode == "push") {
          let n = this._right._getWidth();
          i += n, t -= n;
        }
      }
      t = t || null, i = i || null, (t !== this._contentMargins.left || i !== this._contentMargins.right) && (this._contentMargins = {
        left: t,
        right: i
      }, this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins)));
    }

    ngDoCheck() {
      this._autosize && this._isPushed() && this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
    }

    _watchDrawerToggle(t) {
      t._animationStarted.pipe(M(i => i.fromState !== i.toState), V(this._drawers.changes)).subscribe(i => {
        i.toState !== "open-instant" && this._animationMode !== "NoopAnimations" && this._element.nativeElement.classList.add("mat-drawer-transition"), this.updateContentMargins(), this._changeDetectorRef.markForCheck();
      }), t.mode !== "side" && t.openedChange.pipe(V(this._drawers.changes)).subscribe(() => this._setContainerClass(t.opened));
    }

    _watchDrawerPosition(t) {
      t && t.onPositionChanged.pipe(V(this._drawers.changes)).subscribe(() => {
        yt(() => {
          this._validateDrawers();
        }, { injector: this._injector, phase: gn.Read });
      });
    }

    _watchDrawerMode(t) {
      t && t._modeChanged.pipe(V(ht(this._drawers.changes, this._destroyed))).subscribe(() => {
        this.updateContentMargins(), this._changeDetectorRef.markForCheck();
      });
    }

    _setContainerClass(t) {
      let i = this._element.nativeElement.classList, n = "mat-drawer-container-has-open";
      t ? i.add(n) : i.remove(n);
    }

    _validateDrawers() {
      this._start = this._end = null, this._drawers.forEach(t => {
        t.position == "end" ? (this._end != null, this._end = t) : (this._start != null, this._start = t);
      }), this._right = this._left = null, this._dir && this._dir.value === "rtl" ? (this._left = this._end, this._right = this._start) : (this._left = this._start, this._right = this._end);
    }

    _isPushed() {
      return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over";
    }

    _onBackdropClicked() {
      this.backdropClick.emit(), this._closeModalDrawersViaBackdrop();
    }

    _closeModalDrawersViaBackdrop() {
      [this._start, this._end].filter(t => t && !t.disableClose && this._drawerHasBackdrop(t)).forEach(t => t._closeViaBackdropClick());
    }

    _isShowingBackdrop() {
      return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end);
    }

    _isDrawerOpen(t) {
      return t != null && t.opened;
    }

    _drawerHasBackdrop(t) {
      return this._backdropOverride == null ? !!t && t.mode !== "side" : this._backdropOverride;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(Et, 8), d(y), d(k), d(Q), d(Ie), d(ea), d(J, 8));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["mat-drawer-container"]],
    contentQueries: function(i, n, a) {
      if (i & 1 && (Mt(a, ke, 5), Mt(a, Oi, 5)), i & 2) {
        let s;
        z(s = H()) && (n._content = s.first), z(s = H()) && (n._allDrawers = s);
      }
    },
    viewQuery: function(i, n) {
      if (i & 1 && rt(ke, 5), i & 2) {
        let a;
        z(a = H()) && (n._userContent = a.first);
      }
    },
    hostAttrs: [1, "mat-drawer-container"],
    hostVars: 2,
    hostBindings: function(i, n) {
      i & 2 && L("mat-drawer-container-explicit-backdrop", n._backdropOverride);
    },
    inputs: { autosize: "autosize", hasBackdrop: "hasBackdrop" },
    outputs: { backdropClick: "backdropClick" },
    exportAs: ["matDrawerContainer"],
    standalone: !0,
    features: [lt([{ provide: io, useExisting: e }]), _],
    ngContentSelectors: Qr,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function(i, n) {
      i & 1 && (et(Kr), K(0, qr, 1, 2, "div", 0), O(1), O(2, 1), K(3, Jr, 2, 0, "mat-drawer-content")), i & 2 && (jt(n.hasBackdrop ? 0 : -1), S(3), jt(n._content ? -1 : 3));
    },
    dependencies: [ke],
    styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color);background-color:var(--mat-sidenav-content-background-color);box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color);box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color);border-top-right-radius:var(--mat-sidenav-container-shape);border-bottom-right-radius:var(--mat-sidenav-container-shape);width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape);border-bottom-left-radius:var(--mat-sidenav-container-shape);border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape);border-bottom-left-radius:var(--mat-sidenav-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape);border-bottom-right-radius:var(--mat-sidenav-container-shape);border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"],
    encapsulation: 2,
    changeDetection: 0
  });
  let o = e;
  return o;
})();
var no = (() => {
  class o {
    sidebarService;

    constructor(r) {
      this.sidebarService = r;
    }

    toggleSidebar() {
      this.sidebarService.toggle();
    }

    static \u0275fac = function(t) {
      return new (t || o)(d(ie));
    };
    static \u0275cmp = b({
      type: o,
      selectors: [["app-sidebar"]],
      standalone: !0,
      features: [_],
      decls: 13,
      vars: 0,
      consts: [[1, "px-3", "py-5"], [1, "flex", "flex-col", "gap-5", "justify-center", "items-center"], [1, "w-[80px]", "h-[80px]", "bg-[#ccc]", "rounded-full"], [1, "flex", "flex-col", "justify-center", "items-center"], [1, "text-2xl", "!m-0"], [1, "text-md"], [1, "flex", "flex-col", "py-5"], ["routerLink", "calendar", "matRipple", "", 1, "p-3", "flex", "items-center", "border-b", "hover:bg-[#eee]", "transition-all", "cursor-pointer", 3, "click"], ["routerLink", "project-types", "matRipple", "", 1, "p-3", "flex", "items-center", "border-b", "hover:bg-[#eee]", "transition-all", "cursor-pointer", 3, "click"]],
      template: function(t, i) {
        t & 1 && (p(0, "div", 0)(1, "div", 1), P(2, "div", 2), p(3, "div", 3)(4, "p", 4), C(5, "John Doe"), f(), p(6, "p", 5), C(7, "johndoe@gmail.com"), f()()()(), p(8, "div", 6)(9, "a", 7), j("click", function() {
          return i.toggleSidebar();
        }), C(10, " Calendar "), f(), p(11, "a", 8), j("click", function() {
          return i.toggleSidebar();
        }), C(12, " Proiecte "), f()());
      },
      dependencies: [An, Ce]
    });
  }

  return o;
})();
var na = ["drawer"], oo = (() => {
  class o {
    sidebarService;
    drawer;

    constructor(r) {
      this.sidebarService = r;
    }

    ngAfterViewInit() {
      this.sidebarService.sidebarRef = this.drawer;
    }

    static \u0275fac = function(t) {
      return new (t || o)(d(ie));
    };
    static \u0275cmp = b({
      type: o,
      selectors: [["app-dashboard"]],
      viewQuery: function(t, i) {
        if (t & 1 && rt(na, 5), t & 2) {
          let n;
          z(n = H()) && (i.drawer = n.first);
        }
      },
      standalone: !0,
      features: [_],
      decls: 8,
      vars: 0,
      consts: [["drawer", ""], ["mode", "over"], [1, "flex", "flex-col", "h-screen", "w-full"]],
      template: function(t, i) {
        t & 1 && (p(0, "mat-drawer-container")(1, "mat-drawer", 1, 0), P(3, "app-sidebar"), f(), p(4, "mat-drawer-content")(5, "div", 2), P(6, "app-navbar")(7, "router-outlet"), f()()());
      },
      dependencies: [qn, Sn, ke, Oi, Fi, no]
    });
  }

  return o;
})();
var ro = new v("CdkAccordion");
var oa = 0, ao = (() => {
  let e = class e {
    get expanded() {
      return this._expanded;
    }

    set expanded(t) {
      if (this._expanded !== t) {
        if (this._expanded = t, this.expandedChange.emit(t), t) {
          this.opened.emit();
          let i = this.accordion ? this.accordion.id : this.id;
          this._expansionDispatcher.notify(this.id, i);
        } else this.closed.emit();
        this._changeDetectorRef.markForCheck();
      }
    }

    constructor(t, i, n) {
      this.accordion = t, this._changeDetectorRef = i, this._expansionDispatcher = n, this._openCloseAllSubscription = it.EMPTY, this.closed = new F, this.opened = new F, this.destroyed = new F, this.expandedChange = new F, this.id = `cdk-accordion-child-${oa++}`, this._expanded = !1, this.disabled = !1, this._removeUniqueSelectionListener = () => {
      }, this._removeUniqueSelectionListener = n.listen((a, s) => {
        this.accordion && !this.accordion.multi && this.accordion.id === s && this.id !== a && (this.expanded = !1);
      }), this.accordion && (this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions());
    }

    ngOnDestroy() {
      this.opened.complete(), this.closed.complete(), this.destroyed.emit(), this.destroyed.complete(), this._removeUniqueSelectionListener(), this._openCloseAllSubscription.unsubscribe();
    }

    toggle() {
      this.disabled || (this.expanded = !this.expanded);
    }

    close() {
      this.disabled || (this.expanded = !1);
    }

    open() {
      this.disabled || (this.expanded = !0);
    }

    _subscribeToOpenCloseAllActions() {
      return this.accordion._openCloseAllActions.subscribe(t => {
        this.disabled || (this.expanded = t);
      });
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(ro, 12), d(Q), d(oi));
  }, e.\u0275dir = X({
    type: e,
    selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
    inputs: { expanded: [2, "expanded", "expanded", G], disabled: [2, "disabled", "disabled", G] },
    outputs: { closed: "closed", opened: "opened", destroyed: "destroyed", expandedChange: "expandedChange" },
    exportAs: ["cdkAccordionItem"],
    standalone: !0,
    features: [lt([{ provide: ro, useValue: void 0 }]), tt]
  });
  let o = e;
  return o;
})();
var Se = class {
  attach(e) {
    return this._attachedHost = e, e.attach(this);
  }

  detach() {
    let e = this._attachedHost;
    e != null && (this._attachedHost = null, e.detach());
  }

  get isAttached() {
    return this._attachedHost != null;
  }

  setAttachedHost(e) {
    this._attachedHost = e;
  }
}, le = class extends Se {
  constructor(e, r, t, i, n) {
    super(), this.component = e, this.viewContainerRef = r, this.injector = t, this.componentFactoryResolver = i, this.projectableNodes = n;
  }
}, St = class extends Se {
  constructor(e, r, t, i) {
    super(), this.templateRef = e, this.viewContainerRef = r, this.context = t, this.injector = i;
  }

  get origin() {
    return this.templateRef.elementRef;
  }

  attach(e, r = this.context) {
    return this.context = r, super.attach(e);
  }

  detach() {
    return this.context = void 0, super.detach();
  }
}, Pi = class extends Se {
  constructor(e) {
    super(), this.element = e instanceof y ? e.nativeElement : e;
  }
}, me = class {
  constructor() {
    this._isDisposed = !1, this.attachDomPortal = null;
  }

  hasAttached() {
    return !!this._attachedPortal;
  }

  attach(e) {
    if (e instanceof le) return this._attachedPortal = e, this.attachComponentPortal(e);
    if (e instanceof St) return this._attachedPortal = e, this.attachTemplatePortal(e);
    if (this.attachDomPortal && e instanceof Pi) return this._attachedPortal = e, this.attachDomPortal(e);
  }

  detach() {
    this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn();
  }

  dispose() {
    this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0;
  }

  setDisposeFn(e) {
    this._disposeFn = e;
  }

  _invokeDisposeFn() {
    this._disposeFn && (this._disposeFn(), this._disposeFn = null);
  }
};
var Ae = class extends me {
  constructor(e, r, t, i, n) {
    super(), this.outletElement = e, this._componentFactoryResolver = r, this._appRef = t, this._defaultInjector = i, this.attachDomPortal = a => {
      this._document;
      let s = a.element;
      s.parentNode;
      let c = this._document.createComment("dom-portal");
      s.parentNode.insertBefore(c, s), this.outletElement.appendChild(s), this._attachedPortal = a, super.setDisposeFn(() => {
        c.parentNode && c.parentNode.replaceChild(s, c);
      });
    }, this._document = n;
  }

  attachComponentPortal(e) {
    let t = (e.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(e.component), i;
    return e.viewContainerRef ? (i = e.viewContainerRef.createComponent(t, e.viewContainerRef.length, e.injector || e.viewContainerRef.injector, e.projectableNodes || void 0), this.setDisposeFn(() => i.destroy())) : (i = t.create(e.injector || this._defaultInjector || $.NULL), this._appRef.attachView(i.hostView), this.setDisposeFn(() => {
      this._appRef.viewCount > 0 && this._appRef.detachView(i.hostView), i.destroy();
    })), this.outletElement.appendChild(this._getComponentRootNode(i)), this._attachedPortal = e, i;
  }

  attachTemplatePortal(e) {
    let r = e.viewContainerRef, t = r.createEmbeddedView(e.templateRef, e.context, { injector: e.injector });
    return t.rootNodes.forEach(i => this.outletElement.appendChild(i)), t.detectChanges(), this.setDisposeFn(() => {
      let i = r.indexOf(t);
      i !== -1 && r.remove(i);
    }), this._attachedPortal = e, t;
  }

  dispose() {
    super.dispose(), this.outletElement.remove();
  }

  _getComponentRootNode(e) {
    return e.hostView.rootNodes[0];
  }
};
var Kt = (() => {
  let e = class e extends me {
    constructor(t, i, n) {
      super(), this._componentFactoryResolver = t, this._viewContainerRef = i, this._isInitialized = !1, this.attached = new F, this.attachDomPortal = a => {
        this._document;
        let s = a.element;
        s.parentNode;
        let c = this._document.createComment("dom-portal");
        a.setAttachedHost(this), s.parentNode.insertBefore(c, s), this._getRootNode().appendChild(s), this._attachedPortal = a, super.setDisposeFn(() => {
          c.parentNode && c.parentNode.replaceChild(s, c);
        });
      }, this._document = n;
    }

    get portal() {
      return this._attachedPortal;
    }

    set portal(t) {
      this.hasAttached() && !t && !this._isInitialized || (this.hasAttached() && super.detach(), t && super.attach(t), this._attachedPortal = t || null);
    }

    get attachedRef() {
      return this._attachedRef;
    }

    ngOnInit() {
      this._isInitialized = !0;
    }

    ngOnDestroy() {
      super.dispose(), this._attachedRef = this._attachedPortal = null;
    }

    attachComponentPortal(t) {
      t.setAttachedHost(this);
      let i = t.viewContainerRef != null ? t.viewContainerRef : this._viewContainerRef,
        a = (t.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(t.component),
        s = i.createComponent(a, i.length, t.injector || i.injector, t.projectableNodes || void 0);
      return i !== this._viewContainerRef && this._getRootNode().appendChild(s.hostView.rootNodes[0]), super.setDisposeFn(() => s.destroy()), this._attachedPortal = t, this._attachedRef = s, this.attached.emit(s), s;
    }

    attachTemplatePortal(t) {
      t.setAttachedHost(this);
      let i = this._viewContainerRef.createEmbeddedView(t.templateRef, t.context, { injector: t.injector });
      return super.setDisposeFn(() => this._viewContainerRef.clear()), this._attachedPortal = t, this._attachedRef = i, this.attached.emit(i), i;
    }

    _getRootNode() {
      let t = this._viewContainerRef.element.nativeElement;
      return t.nodeType === t.ELEMENT_NODE ? t : t.parentNode;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(ge), d(Pt), d(E));
  }, e.\u0275dir = X({
    type: e,
    selectors: [["", "cdkPortalOutlet", ""]],
    inputs: { portal: [0, "cdkPortalOutlet", "portal"] },
    outputs: { attached: "attached" },
    exportAs: ["cdkPortalOutlet"],
    standalone: !0,
    features: [st]
  });
  let o = e;
  return o;
})();
var ra = ["body"], aa = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]],
  sa = ["mat-expansion-panel-header", "*", "mat-action-row"];

function ca(o, e) {
}

var da = [[["mat-panel-title"]], [["mat-panel-description"]], "*"],
  la = ["mat-panel-title", "mat-panel-description", "*"];

function ma(o, e) {
  if (o & 1 && (p(0, "span", 1), Ut(), p(1, "svg", 2), P(2, "path", 3), f()()), o & 2) {
    let r = nt();
    Z("@indicatorRotate", r._getExpandedState());
  }
}

var so = new v("MAT_ACCORDION"), co = "225ms cubic-bezier(0.4,0.0,0.2,1)", mo = {
  indicatorRotate: Lt("indicatorRotate", [xt("collapsed, void", ct({ transform: "rotate(0deg)" })), xt("expanded", ct({ transform: "rotate(180deg)" })), kt("expanded <=> collapsed, void => collapsed", It(co))]),
  bodyExpansion: Lt("bodyExpansion", [xt("collapsed, void", ct({
    height: "0px",
    visibility: "hidden"
  })), xt("expanded", ct({ height: "*", visibility: "" })), kt("expanded <=> collapsed, void => collapsed", It(co))])
}, ho = new v("MAT_EXPANSION_PANEL"), ha = (() => {
  let e = class e {
    constructor(t, i) {
      this._template = t, this._expansionPanel = i;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(Dt), d(ho, 8));
  }, e.\u0275dir = X({ type: e, selectors: [["ng-template", "matExpansionPanelContent", ""]], standalone: !0 });
  let o = e;
  return o;
})(), ua = 0, uo = new v("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"), Bi = (() => {
  let e = class e extends ao {
    get hideToggle() {
      return this._hideToggle || this.accordion && this.accordion.hideToggle;
    }

    set hideToggle(t) {
      this._hideToggle = t;
    }

    get togglePosition() {
      return this._togglePosition || this.accordion && this.accordion.togglePosition;
    }

    set togglePosition(t) {
      this._togglePosition = t;
    }

    constructor(t, i, n, a, s, c, u) {
      super(t, i, n), this._viewContainerRef = a, this._animationMode = c, this._hideToggle = !1, this.afterExpand = new F, this.afterCollapse = new F, this._inputChanges = new g, this._headerId = `mat-expansion-panel-header-${ua++}`, this.accordion = t, this._document = s, this._animationsDisabled = c === "NoopAnimations", u && (this.hideToggle = u.hideToggle);
    }

    _hasSpacing() {
      return this.accordion ? this.expanded && this.accordion.displayMode === "default" : !1;
    }

    _getExpandedState() {
      return this.expanded ? "expanded" : "collapsed";
    }

    toggle() {
      this.expanded = !this.expanded;
    }

    close() {
      this.expanded = !1;
    }

    open() {
      this.expanded = !0;
    }

    ngAfterContentInit() {
      this._lazyContent && this._lazyContent._expansionPanel === this && this.opened.pipe(at(null), M(() => this.expanded && !this._portal), dt(1)).subscribe(() => {
        this._portal = new St(this._lazyContent._template, this._viewContainerRef);
      });
    }

    ngOnChanges(t) {
      this._inputChanges.next(t);
    }

    ngOnDestroy() {
      super.ngOnDestroy(), this._inputChanges.complete();
    }

    _containsFocus() {
      if (this._body) {
        let t = this._document.activeElement, i = this._body.nativeElement;
        return t === i || i.contains(t);
      }
      return !1;
    }

    _animationStarted(t) {
      !lo(t) && !this._animationsDisabled && this._body && this._body?.nativeElement.setAttribute("inert", "");
    }

    _animationDone(t) {
      lo(t) || (t.toState === "expanded" ? this.afterExpand.emit() : t.toState === "collapsed" && this.afterCollapse.emit(), !this._animationsDisabled && this._body && this._body.nativeElement.removeAttribute("inert"));
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(so, 12), d(Q), d(oi), d(Pt), d(E), d(J, 8), d(uo, 8));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["mat-expansion-panel"]],
    contentQueries: function(i, n, a) {
      if (i & 1 && Mt(a, ha, 5), i & 2) {
        let s;
        z(s = H()) && (n._lazyContent = s.first);
      }
    },
    viewQuery: function(i, n) {
      if (i & 1 && rt(ra, 5), i & 2) {
        let a;
        z(a = H()) && (n._body = a.first);
      }
    },
    hostAttrs: [1, "mat-expansion-panel"],
    hostVars: 6,
    hostBindings: function(i, n) {
      i & 2 && L("mat-expanded", n.expanded)("_mat-animation-noopable", n._animationsDisabled)("mat-expansion-panel-spacing", n._hasSpacing());
    },
    inputs: { hideToggle: [2, "hideToggle", "hideToggle", G], togglePosition: "togglePosition" },
    outputs: { afterExpand: "afterExpand", afterCollapse: "afterCollapse" },
    exportAs: ["matExpansionPanel"],
    standalone: !0,
    features: [lt([{ provide: so, useValue: void 0 }, { provide: ho, useExisting: e }]), tt, st, Ht, _],
    ngContentSelectors: sa,
    decls: 7,
    vars: 4,
    consts: [["body", ""], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
    template: function(i, n) {
      if (i & 1) {
        let a = Nt();
        et(aa), O(0), p(1, "div", 1, 0), j("@bodyExpansion.start", function(c) {
          return ut(a), pt(n._animationStarted(c));
        })("@bodyExpansion.done", function(c) {
          return ut(a), pt(n._animationDone(c));
        }), p(3, "div", 2), O(4, 1), K(5, ca, 0, 0, "ng-template", 3), f(), O(6, 2), f();
      }
      i & 2 && (S(), Z("@bodyExpansion", n._getExpandedState())("id", n.id), T("aria-labelledby", n._headerId), S(4), Z("cdkPortalOutlet", n._portal));
    },
    dependencies: [Kt],
    styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}"],
    encapsulation: 2,
    data: { animation: [mo.bodyExpansion] },
    changeDetection: 0
  });
  let o = e;
  return o;
})();

function lo(o) {
  return o.fromState === "void";
}

var po = (() => {
  let e = class e {
    constructor(t, i, n, a, s, c, u) {
      this.panel = t, this._element = i, this._focusMonitor = n, this._changeDetectorRef = a, this._animationMode = c, this._parentChangeSubscription = it.EMPTY, this.tabIndex = 0;
      let l = t.accordion ? t.accordion._stateChanges.pipe(M(m => !!(m.hideToggle || m.togglePosition))) : on;
      this.tabIndex = parseInt(u || "") || 0, this._parentChangeSubscription = ht(t.opened, t.closed, l, t._inputChanges.pipe(M(m => !!(m.hideToggle || m.disabled || m.togglePosition)))).subscribe(() => this._changeDetectorRef.markForCheck()), t.closed.pipe(M(() => t._containsFocus())).subscribe(() => n.focusVia(i, "program")), s && (this.expandedHeight = s.expandedHeight, this.collapsedHeight = s.collapsedHeight);
    }

    get disabled() {
      return this.panel.disabled;
    }

    _toggle() {
      this.disabled || this.panel.toggle();
    }

    _isExpanded() {
      return this.panel.expanded;
    }

    _getExpandedState() {
      return this.panel._getExpandedState();
    }

    _getPanelId() {
      return this.panel.id;
    }

    _getTogglePosition() {
      return this.panel.togglePosition;
    }

    _showToggle() {
      return !this.panel.hideToggle && !this.panel.disabled;
    }

    _getHeaderHeight() {
      let t = this._isExpanded();
      return t && this.expandedHeight ? this.expandedHeight : !t && this.collapsedHeight ? this.collapsedHeight : null;
    }

    _keydown(t) {
      switch (t.keyCode) {
        case 32:
        case 13:
          gt(t) || (t.preventDefault(), this._toggle());
          break;
        default:
          this.panel.accordion && this.panel.accordion._handleHeaderKeydown(t);
          return;
      }
    }

    focus(t, i) {
      t ? this._focusMonitor.focusVia(this._element, t, i) : this._element.nativeElement.focus(i);
    }

    ngAfterViewInit() {
      this._focusMonitor.monitor(this._element).subscribe(t => {
        t && this.panel.accordion && this.panel.accordion._handleHeaderFocus(this);
      });
    }

    ngOnDestroy() {
      this._parentChangeSubscription.unsubscribe(), this._focusMonitor.stopMonitoring(this._element);
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(Bi, 1), d(y), d(mt), d(Q), d(uo, 8), d(J, 8), Le("tabindex"));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["mat-expansion-panel-header"]],
    hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
    hostVars: 15,
    hostBindings: function(i, n) {
      i & 1 && j("click", function() {
        return n._toggle();
      })("keydown", function(s) {
        return n._keydown(s);
      }), i & 2 && (T("id", n.panel._headerId)("tabindex", n.disabled ? -1 : n.tabIndex)("aria-controls", n._getPanelId())("aria-expanded", n._isExpanded())("aria-disabled", n.panel.disabled), wt("height", n._getHeaderHeight()), L("mat-expanded", n._isExpanded())("mat-expansion-toggle-indicator-after", n._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", n._getTogglePosition() === "before")("_mat-animation-noopable", n._animationMode === "NoopAnimations"));
    },
    inputs: {
      expandedHeight: "expandedHeight",
      collapsedHeight: "collapsedHeight",
      tabIndex: [2, "tabIndex", "tabIndex", t => t == null ? 0 : Yt(t)]
    },
    standalone: !0,
    features: [tt, _],
    ngContentSelectors: la,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
    template: function(i, n) {
      i & 1 && (et(da), p(0, "span", 0), O(1), O(2, 1), O(3, 2), f(), K(4, ma, 3, 1, "span", 1)), i & 2 && (L("mat-content-hide-toggle", !n._showToggle()), S(4), jt(n._showToggle() ? 4 : -1));
    },
    styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}"],
    encapsulation: 2,
    data: { animation: [mo.indicatorRotate] },
    changeDetection: 0
  });
  let o = e;
  return o;
})();
var fo = (() => {
  let e = class e {
  };
  e.\u0275fac = function(i) {
    return new (i || e);
  }, e.\u0275dir = X({
    type: e,
    selectors: [["mat-panel-title"]],
    hostAttrs: [1, "mat-expansion-panel-header-title"],
    standalone: !0
  });
  let o = e;
  return o;
})();
var go = $e(), Vi = class {
  constructor(e, r) {
    this._viewportRuler = e, this._previousHTMLStyles = { top: "", left: "" }, this._isEnabled = !1, this._document = r;
  }

  attach() {
  }

  enable() {
    if (this._canBeEnabled()) {
      let e = this._document.documentElement;
      this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), this._previousHTMLStyles.left = e.style.left || "", this._previousHTMLStyles.top = e.style.top || "", e.style.left = U(-this._previousScrollPosition.left), e.style.top = U(-this._previousScrollPosition.top), e.classList.add("cdk-global-scrollblock"), this._isEnabled = !0;
    }
  }

  disable() {
    if (this._isEnabled) {
      let e = this._document.documentElement, r = this._document.body, t = e.style, i = r.style,
        n = t.scrollBehavior || "", a = i.scrollBehavior || "";
      this._isEnabled = !1, t.left = this._previousHTMLStyles.left, t.top = this._previousHTMLStyles.top, e.classList.remove("cdk-global-scrollblock"), go && (t.scrollBehavior = i.scrollBehavior = "auto"), window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), go && (t.scrollBehavior = n, i.scrollBehavior = a);
    }
  }

  _canBeEnabled() {
    if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled) return !1;
    let r = this._document.body, t = this._viewportRuler.getViewportSize();
    return r.scrollHeight > t.height || r.scrollWidth > t.width;
  }
};
var zi = class {
  constructor(e, r, t, i) {
    this._scrollDispatcher = e, this._ngZone = r, this._viewportRuler = t, this._config = i, this._scrollSubscription = null, this._detach = () => {
      this.disable(), this._overlayRef.hasAttached() && this._ngZone.run(() => this._overlayRef.detach());
    };
  }

  attach(e) {
    this._overlayRef, this._overlayRef = e;
  }

  enable() {
    if (this._scrollSubscription) return;
    let e = this._scrollDispatcher.scrolled(0).pipe(M(r => !r || !this._overlayRef.overlayElement.contains(r.getElementRef().nativeElement)));
    this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top, this._scrollSubscription = e.subscribe(() => {
      let r = this._viewportRuler.getViewportScrollPosition().top;
      Math.abs(r - this._initialScrollPosition) > this._config.threshold ? this._detach() : this._overlayRef.updatePosition();
    })) : this._scrollSubscription = e.subscribe(this._detach);
  }

  disable() {
    this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null);
  }

  detach() {
    this.disable(), this._overlayRef = null;
  }
}, ai = class {
  enable() {
  }

  disable() {
  }

  attach() {
  }
};

function Hi(o, e) {
  return e.some(r => {
    let t = o.bottom < r.top, i = o.top > r.bottom, n = o.right < r.left, a = o.left > r.right;
    return t || i || n || a;
  });
}

function bo(o, e) {
  return e.some(r => {
    let t = o.top < r.top, i = o.bottom > r.bottom, n = o.left < r.left, a = o.right > r.right;
    return t || i || n || a;
  });
}

var Ui = class {
  constructor(e, r, t, i) {
    this._scrollDispatcher = e, this._viewportRuler = r, this._ngZone = t, this._config = i, this._scrollSubscription = null;
  }

  attach(e) {
    this._overlayRef, this._overlayRef = e;
  }

  enable() {
    if (!this._scrollSubscription) {
      let e = this._config ? this._config.scrollThrottle : 0;
      this._scrollSubscription = this._scrollDispatcher.scrolled(e).subscribe(() => {
        if (this._overlayRef.updatePosition(), this._config && this._config.autoClose) {
          let r = this._overlayRef.overlayElement.getBoundingClientRect(), {
            width: t,
            height: i
          } = this._viewportRuler.getViewportSize();
          Hi(r, [{
            width: t,
            height: i,
            bottom: i,
            right: t,
            top: 0,
            left: 0
          }]) && (this.disable(), this._ngZone.run(() => this._overlayRef.detach()));
        }
      });
    }
  }

  disable() {
    this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null);
  }

  detach() {
    this.disable(), this._overlayRef = null;
  }
}, fa = (() => {
  let e = class e {
    constructor(t, i, n, a) {
      this._scrollDispatcher = t, this._viewportRuler = i, this._ngZone = n, this.noop = () => new ai, this.close = s => new zi(this._scrollDispatcher, this._ngZone, this._viewportRuler, s), this.block = () => new Vi(this._viewportRuler, this._document), this.reposition = s => new Ui(this._scrollDispatcher, this._viewportRuler, this._ngZone, s), this._document = a;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(De), h(Ie), h(k), h(E));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})(), qt = class {
  constructor(e) {
    if (this.scrollStrategy = new ai, this.panelClass = "", this.hasBackdrop = !1, this.backdropClass = "cdk-overlay-dark-backdrop", this.disposeOnNavigation = !1, e) {
      let r = Object.keys(e);
      for (let t of r) e[t] !== void 0 && (this[t] = e[t]);
    }
  }
};
var Wi = class {
  constructor(e, r) {
    this.connectionPair = e, this.scrollableViewProperties = r;
  }
};
var Co = (() => {
  let e = class e {
    constructor(t) {
      this._attachedOverlays = [], this._document = t;
    }

    ngOnDestroy() {
      this.detach();
    }

    add(t) {
      this.remove(t), this._attachedOverlays.push(t);
    }

    remove(t) {
      let i = this._attachedOverlays.indexOf(t);
      i > -1 && this._attachedOverlays.splice(i, 1), this._attachedOverlays.length === 0 && this.detach();
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(E));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})(), ga = (() => {
  let e = class e extends Co {
    constructor(t, i) {
      super(t), this._ngZone = i, this._keydownListener = n => {
        let a = this._attachedOverlays;
        for (let s = a.length - 1; s > -1; s--) if (a[s]._keydownEvents.observers.length > 0) {
          let c = a[s]._keydownEvents;
          this._ngZone ? this._ngZone.run(() => c.next(n)) : c.next(n);
          break;
        }
      };
    }

    add(t) {
      super.add(t), this._isAttached || (this._ngZone ? this._ngZone.runOutsideAngular(() => this._document.body.addEventListener("keydown", this._keydownListener)) : this._document.body.addEventListener("keydown", this._keydownListener), this._isAttached = !0);
    }

    detach() {
      this._isAttached && (this._document.body.removeEventListener("keydown", this._keydownListener), this._isAttached = !1);
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(E), h(k, 8));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})(), ba = (() => {
  let e = class e extends Co {
    constructor(t, i, n) {
      super(t), this._platform = i, this._ngZone = n, this._cursorStyleIsSet = !1, this._pointerDownListener = a => {
        this._pointerDownEventTarget = ft(a);
      }, this._clickListener = a => {
        let s = ft(a), c = a.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : s;
        this._pointerDownEventTarget = null;
        let u = this._attachedOverlays.slice();
        for (let l = u.length - 1; l > -1; l--) {
          let m = u[l];
          if (m._outsidePointerEvents.observers.length < 1 || !m.hasAttached()) continue;
          if (_o(m.overlayElement, s) || _o(m.overlayElement, c)) break;
          let D = m._outsidePointerEvents;
          this._ngZone ? this._ngZone.run(() => D.next(a)) : D.next(a);
        }
      };
    }

    add(t) {
      if (super.add(t), !this._isAttached) {
        let i = this._document.body;
        this._ngZone ? this._ngZone.runOutsideAngular(() => this._addEventListeners(i)) : this._addEventListeners(i), this._platform.IOS && !this._cursorStyleIsSet && (this._cursorOriginalValue = i.style.cursor, i.style.cursor = "pointer", this._cursorStyleIsSet = !0), this._isAttached = !0;
      }
    }

    detach() {
      if (this._isAttached) {
        let t = this._document.body;
        t.removeEventListener("pointerdown", this._pointerDownListener, !0), t.removeEventListener("click", this._clickListener, !0), t.removeEventListener("auxclick", this._clickListener, !0), t.removeEventListener("contextmenu", this._clickListener, !0), this._platform.IOS && this._cursorStyleIsSet && (t.style.cursor = this._cursorOriginalValue, this._cursorStyleIsSet = !1), this._isAttached = !1;
      }
    }

    _addEventListeners(t) {
      t.addEventListener("pointerdown", this._pointerDownListener, !0), t.addEventListener("click", this._clickListener, !0), t.addEventListener("auxclick", this._clickListener, !0), t.addEventListener("contextmenu", this._clickListener, !0);
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(E), h(N), h(k, 8));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();

function _o(o, e) {
  let r = typeof ShadowRoot < "u" && ShadowRoot, t = e;
  for (; t;) {
    if (t === o) return !0;
    t = r && t instanceof ShadowRoot ? t.host : t.parentNode;
  }
  return !1;
}

var he = (() => {
  let e = class e {
    constructor(t, i) {
      this._platform = i, this._document = t;
    }

    ngOnDestroy() {
      this._containerElement?.remove();
    }

    getContainerElement() {
      return this._containerElement || this._createContainer(), this._containerElement;
    }

    _createContainer() {
      let t = "cdk-overlay-container";
      if (this._platform.isBrowser || Ze()) {
        let n = this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);
        for (let a = 0; a < n.length; a++) n[a].remove();
      }
      let i = this._document.createElement("div");
      i.classList.add(t), Ze() ? i.setAttribute("platform", "test") : this._platform.isBrowser || i.setAttribute("platform", "server"), this._document.body.appendChild(i), this._containerElement = i;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(E), h(N));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})(), Ot = class {
  constructor(e, r, t, i, n, a, s, c, u, l = !1, m) {
    this._portalOutlet = e, this._host = r, this._pane = t, this._config = i, this._ngZone = n, this._keyboardDispatcher = a, this._document = s, this._location = c, this._outsideClickDispatcher = u, this._animationsDisabled = l, this._injector = m, this._backdropElement = null, this._backdropClick = new g, this._attachments = new g, this._detachments = new g, this._locationChanges = it.EMPTY, this._backdropClickHandler = D => this._backdropClick.next(D), this._backdropTransitionendHandler = D => {
      this._disposeBackdrop(D.target);
    }, this._keydownEvents = new g, this._outsidePointerEvents = new g, this._renders = new g, i.scrollStrategy && (this._scrollStrategy = i.scrollStrategy, this._scrollStrategy.attach(this)), this._positionStrategy = i.positionStrategy, this._afterRenderRef = wn(() => bn(() => {
      this._renders.next();
    }, { injector: this._injector }));
  }

  get overlayElement() {
    return this._pane;
  }

  get backdropElement() {
    return this._backdropElement;
  }

  get hostElement() {
    return this._host;
  }

  attach(e) {
    !this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host);
    let r = this._portalOutlet.attach(e);
    return this._positionStrategy && this._positionStrategy.attach(this), this._updateStackingOrder(), this._updateElementSize(), this._updateElementDirection(), this._scrollStrategy && this._scrollStrategy.enable(), yt(() => {
      this.hasAttached() && this.updatePosition();
    }, { injector: this._injector }), this._togglePointerEvents(!0), this._config.hasBackdrop && this._attachBackdrop(), this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0), this._attachments.next(), this._keyboardDispatcher.add(this), this._config.disposeOnNavigation && (this._locationChanges = this._location.subscribe(() => this.dispose())), this._outsideClickDispatcher.add(this), typeof r?.onDestroy == "function" && r.onDestroy(() => {
      this.hasAttached() && this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
    }), r;
  }

  detach() {
    if (!this.hasAttached()) return;
    this.detachBackdrop(), this._togglePointerEvents(!1), this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(), this._scrollStrategy && this._scrollStrategy.disable();
    let e = this._portalOutlet.detach();
    return this._detachments.next(), this._keyboardDispatcher.remove(this), this._detachContentWhenEmpty(), this._locationChanges.unsubscribe(), this._outsideClickDispatcher.remove(this), e;
  }

  dispose() {
    let e = this.hasAttached();
    this._positionStrategy && this._positionStrategy.dispose(), this._disposeScrollStrategy(), this._disposeBackdrop(this._backdropElement), this._locationChanges.unsubscribe(), this._keyboardDispatcher.remove(this), this._portalOutlet.dispose(), this._attachments.complete(), this._backdropClick.complete(), this._keydownEvents.complete(), this._outsidePointerEvents.complete(), this._outsideClickDispatcher.remove(this), this._host?.remove(), this._previousHostParent = this._pane = this._host = null, e && this._detachments.next(), this._detachments.complete(), this._afterRenderRef.destroy(), this._renders.complete();
  }

  hasAttached() {
    return this._portalOutlet.hasAttached();
  }

  backdropClick() {
    return this._backdropClick;
  }

  attachments() {
    return this._attachments;
  }

  detachments() {
    return this._detachments;
  }

  keydownEvents() {
    return this._keydownEvents;
  }

  outsidePointerEvents() {
    return this._outsidePointerEvents;
  }

  getConfig() {
    return this._config;
  }

  updatePosition() {
    this._positionStrategy && this._positionStrategy.apply();
  }

  updatePositionStrategy(e) {
    e !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(), this._positionStrategy = e, this.hasAttached() && (e.attach(this), this.updatePosition()));
  }

  updateSize(e) {
    this._config = w(w({}, this._config), e), this._updateElementSize();
  }

  setDirection(e) {
    this._config = zt(w({}, this._config), { direction: e }), this._updateElementDirection();
  }

  addPanelClass(e) {
    this._pane && this._toggleClasses(this._pane, e, !0);
  }

  removePanelClass(e) {
    this._pane && this._toggleClasses(this._pane, e, !1);
  }

  getDirection() {
    let e = this._config.direction;
    return e ? typeof e == "string" ? e : e.value : "ltr";
  }

  updateScrollStrategy(e) {
    e !== this._scrollStrategy && (this._disposeScrollStrategy(), this._scrollStrategy = e, this.hasAttached() && (e.attach(this), e.enable()));
  }

  _updateElementDirection() {
    this._host.setAttribute("dir", this.getDirection());
  }

  _updateElementSize() {
    if (!this._pane) return;
    let e = this._pane.style;
    e.width = U(this._config.width), e.height = U(this._config.height), e.minWidth = U(this._config.minWidth), e.minHeight = U(this._config.minHeight), e.maxWidth = U(this._config.maxWidth), e.maxHeight = U(this._config.maxHeight);
  }

  _togglePointerEvents(e) {
    this._pane.style.pointerEvents = e ? "" : "none";
  }

  _attachBackdrop() {
    let e = "cdk-overlay-backdrop-showing";
    this._backdropElement = this._document.createElement("div"), this._backdropElement.classList.add("cdk-overlay-backdrop"), this._animationsDisabled && this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"), this._config.backdropClass && this._toggleClasses(this._backdropElement, this._config.backdropClass, !0), this._host.parentElement.insertBefore(this._backdropElement, this._host), this._backdropElement.addEventListener("click", this._backdropClickHandler), !this._animationsDisabled && typeof requestAnimationFrame < "u" ? this._ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        this._backdropElement && this._backdropElement.classList.add(e);
      });
    }) : this._backdropElement.classList.add(e);
  }

  _updateStackingOrder() {
    this._host.nextSibling && this._host.parentNode.appendChild(this._host);
  }

  detachBackdrop() {
    let e = this._backdropElement;
    if (e) {
      if (this._animationsDisabled) {
        this._disposeBackdrop(e);
        return;
      }
      e.classList.remove("cdk-overlay-backdrop-showing"), this._ngZone.runOutsideAngular(() => {
        e.addEventListener("transitionend", this._backdropTransitionendHandler);
      }), e.style.pointerEvents = "none", this._backdropTimeout = this._ngZone.runOutsideAngular(() => setTimeout(() => {
        this._disposeBackdrop(e);
      }, 500));
    }
  }

  _toggleClasses(e, r, t) {
    let i = xi(r || []).filter(n => !!n);
    i.length && (t ? e.classList.add(...i) : e.classList.remove(...i));
  }

  _detachContentWhenEmpty() {
    this._ngZone.runOutsideAngular(() => {
      let e = this._renders.pipe(V(ht(this._attachments, this._detachments))).subscribe(() => {
        (!this._pane || !this._host || this._pane.children.length === 0) && (this._pane && this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !1), this._host && this._host.parentElement && (this._previousHostParent = this._host.parentElement, this._host.remove()), e.unsubscribe());
      });
    });
  }

  _disposeScrollStrategy() {
    let e = this._scrollStrategy;
    e && (e.disable(), e.detach && e.detach());
  }

  _disposeBackdrop(e) {
    e && (e.removeEventListener("click", this._backdropClickHandler), e.removeEventListener("transitionend", this._backdropTransitionendHandler), e.remove(), this._backdropElement === e && (this._backdropElement = null)), this._backdropTimeout && (clearTimeout(this._backdropTimeout), this._backdropTimeout = void 0);
  }
}, vo = "cdk-overlay-connected-position-bounding-box", _a = /([A-Za-z%]+)$/, Yi = class {
  get positions() {
    return this._preferredPositions;
  }

  constructor(e, r, t, i, n) {
    this._viewportRuler = r, this._document = t, this._platform = i, this._overlayContainer = n, this._lastBoundingBoxSize = {
      width: 0,
      height: 0
    }, this._isPushed = !1, this._canPush = !0, this._growAfterOpen = !1, this._hasFlexibleDimensions = !0, this._positionLocked = !1, this._viewportMargin = 0, this._scrollables = [], this._preferredPositions = [], this._positionChanges = new g, this._resizeSubscription = it.EMPTY, this._offsetX = 0, this._offsetY = 0, this._appliedPanelClasses = [], this.positionChanges = this._positionChanges, this.setOrigin(e);
  }

  attach(e) {
    this._overlayRef && this._overlayRef, this._validatePositions(), e.hostElement.classList.add(vo), this._overlayRef = e, this._boundingBox = e.hostElement, this._pane = e.overlayElement, this._isDisposed = !1, this._isInitialRender = !0, this._lastPosition = null, this._resizeSubscription.unsubscribe(), this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
      this._isInitialRender = !0, this.apply();
    });
  }

  apply() {
    if (this._isDisposed || !this._platform.isBrowser) return;
    if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
      this.reapplyLastPosition();
      return;
    }
    this._clearPanelClasses(), this._resetOverlayElementStyles(), this._resetBoundingBoxStyles(), this._viewportRect = this._getNarrowedViewportRect(), this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
    let e = this._originRect, r = this._overlayRect, t = this._viewportRect, i = this._containerRect, n = [], a;
    for (let s of this._preferredPositions) {
      let c = this._getOriginPoint(e, i, s), u = this._getOverlayPoint(c, r, s), l = this._getOverlayFit(u, r, t, s);
      if (l.isCompletelyWithinViewport) {
        this._isPushed = !1, this._applyPosition(s, c);
        return;
      }
      if (this._canFitWithFlexibleDimensions(l, u, t)) {
        n.push({ position: s, origin: c, overlayRect: r, boundingBoxRect: this._calculateBoundingBoxRect(c, s) });
        continue;
      }
      (!a || a.overlayFit.visibleArea < l.visibleArea) && (a = {
        overlayFit: l,
        overlayPoint: u,
        originPoint: c,
        position: s,
        overlayRect: r
      });
    }
    if (n.length) {
      let s = null, c = -1;
      for (let u of n) {
        let l = u.boundingBoxRect.width * u.boundingBoxRect.height * (u.position.weight || 1);
        l > c && (c = l, s = u);
      }
      this._isPushed = !1, this._applyPosition(s.position, s.origin);
      return;
    }
    if (this._canPush) {
      this._isPushed = !0, this._applyPosition(a.position, a.originPoint);
      return;
    }
    this._applyPosition(a.position, a.originPoint);
  }

  detach() {
    this._clearPanelClasses(), this._lastPosition = null, this._previousPushAmount = null, this._resizeSubscription.unsubscribe();
  }

  dispose() {
    this._isDisposed || (this._boundingBox && Qt(this._boundingBox.style, {
      top: "",
      left: "",
      right: "",
      bottom: "",
      height: "",
      width: "",
      alignItems: "",
      justifyContent: ""
    }), this._pane && this._resetOverlayElementStyles(), this._overlayRef && this._overlayRef.hostElement.classList.remove(vo), this.detach(), this._positionChanges.complete(), this._overlayRef = this._boundingBox = null, this._isDisposed = !0);
  }

  reapplyLastPosition() {
    if (this._isDisposed || !this._platform.isBrowser) return;
    let e = this._lastPosition;
    if (e) {
      this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._viewportRect = this._getNarrowedViewportRect(), this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
      let r = this._getOriginPoint(this._originRect, this._containerRect, e);
      this._applyPosition(e, r);
    } else this.apply();
  }

  withScrollableContainers(e) {
    return this._scrollables = e, this;
  }

  withPositions(e) {
    return this._preferredPositions = e, e.indexOf(this._lastPosition) === -1 && (this._lastPosition = null), this._validatePositions(), this;
  }

  withViewportMargin(e) {
    return this._viewportMargin = e, this;
  }

  withFlexibleDimensions(e = !0) {
    return this._hasFlexibleDimensions = e, this;
  }

  withGrowAfterOpen(e = !0) {
    return this._growAfterOpen = e, this;
  }

  withPush(e = !0) {
    return this._canPush = e, this;
  }

  withLockedPosition(e = !0) {
    return this._positionLocked = e, this;
  }

  setOrigin(e) {
    return this._origin = e, this;
  }

  withDefaultOffsetX(e) {
    return this._offsetX = e, this;
  }

  withDefaultOffsetY(e) {
    return this._offsetY = e, this;
  }

  withTransformOriginOn(e) {
    return this._transformOriginSelector = e, this;
  }

  _getOriginPoint(e, r, t) {
    let i;
    if (t.originX == "center") i = e.left + e.width / 2; else {
      let a = this._isRtl() ? e.right : e.left, s = this._isRtl() ? e.left : e.right;
      i = t.originX == "start" ? a : s;
    }
    r.left < 0 && (i -= r.left);
    let n;
    return t.originY == "center" ? n = e.top + e.height / 2 : n = t.originY == "top" ? e.top : e.bottom, r.top < 0 && (n -= r.top), {
      x: i,
      y: n
    };
  }

  _getOverlayPoint(e, r, t) {
    let i;
    t.overlayX == "center" ? i = -r.width / 2 : t.overlayX === "start" ? i = this._isRtl() ? -r.width : 0 : i = this._isRtl() ? 0 : -r.width;
    let n;
    return t.overlayY == "center" ? n = -r.height / 2 : n = t.overlayY == "top" ? 0 : -r.height, {
      x: e.x + i,
      y: e.y + n
    };
  }

  _getOverlayFit(e, r, t, i) {
    let n = wo(r), { x: a, y: s } = e, c = this._getOffset(i, "x"), u = this._getOffset(i, "y");
    c && (a += c), u && (s += u);
    let l = 0 - a, m = a + n.width - t.width, D = 0 - s, R = s + n.height - t.height,
      B = this._subtractOverflows(n.width, l, m), q = this._subtractOverflows(n.height, D, R), Vt = B * q;
    return {
      visibleArea: Vt,
      isCompletelyWithinViewport: n.width * n.height === Vt,
      fitsInViewportVertically: q === n.height,
      fitsInViewportHorizontally: B == n.width
    };
  }

  _canFitWithFlexibleDimensions(e, r, t) {
    if (this._hasFlexibleDimensions) {
      let i = t.bottom - r.y, n = t.right - r.x, a = yo(this._overlayRef.getConfig().minHeight),
        s = yo(this._overlayRef.getConfig().minWidth), c = e.fitsInViewportVertically || a != null && a <= i,
        u = e.fitsInViewportHorizontally || s != null && s <= n;
      return c && u;
    }
    return !1;
  }

  _pushOverlayOnScreen(e, r, t) {
    if (this._previousPushAmount && this._positionLocked) return {
      x: e.x + this._previousPushAmount.x,
      y: e.y + this._previousPushAmount.y
    };
    let i = wo(r), n = this._viewportRect, a = Math.max(e.x + i.width - n.width, 0),
      s = Math.max(e.y + i.height - n.height, 0), c = Math.max(n.top - t.top - e.y, 0),
      u = Math.max(n.left - t.left - e.x, 0), l = 0, m = 0;
    return i.width <= n.width ? l = u || -a : l = e.x < this._viewportMargin ? n.left - t.left - e.x : 0, i.height <= n.height ? m = c || -s : m = e.y < this._viewportMargin ? n.top - t.top - e.y : 0, this._previousPushAmount = {
      x: l,
      y: m
    }, { x: e.x + l, y: e.y + m };
  }

  _applyPosition(e, r) {
    if (this._setTransformOrigin(e), this._setOverlayElementStyles(r, e), this._setBoundingBoxStyles(r, e), e.panelClass && this._addPanelClasses(e.panelClass), this._positionChanges.observers.length) {
      let t = this._getScrollVisibility();
      if (e !== this._lastPosition || !this._lastScrollVisibility || !va(this._lastScrollVisibility, t)) {
        let i = new Wi(e, t);
        this._positionChanges.next(i);
      }
      this._lastScrollVisibility = t;
    }
    this._lastPosition = e, this._isInitialRender = !1;
  }

  _setTransformOrigin(e) {
    if (!this._transformOriginSelector) return;
    let r = this._boundingBox.querySelectorAll(this._transformOriginSelector), t, i = e.overlayY;
    e.overlayX === "center" ? t = "center" : this._isRtl() ? t = e.overlayX === "start" ? "right" : "left" : t = e.overlayX === "start" ? "left" : "right";
    for (let n = 0; n < r.length; n++) r[n].style.transformOrigin = `${t} ${i}`;
  }

  _calculateBoundingBoxRect(e, r) {
    let t = this._viewportRect, i = this._isRtl(), n, a, s;
    if (r.overlayY === "top") a = e.y, n = t.height - a + this._viewportMargin; else if (r.overlayY === "bottom") s = t.height - e.y + this._viewportMargin * 2, n = t.height - s + this._viewportMargin; else {
      let R = Math.min(t.bottom - e.y + t.top, e.y), B = this._lastBoundingBoxSize.height;
      n = R * 2, a = e.y - R, n > B && !this._isInitialRender && !this._growAfterOpen && (a = e.y - B / 2);
    }
    let c = r.overlayX === "start" && !i || r.overlayX === "end" && i,
      u = r.overlayX === "end" && !i || r.overlayX === "start" && i, l, m, D;
    if (u) D = t.width - e.x + this._viewportMargin * 2, l = e.x - this._viewportMargin; else if (c) m = e.x, l = t.right - e.x; else {
      let R = Math.min(t.right - e.x + t.left, e.x), B = this._lastBoundingBoxSize.width;
      l = R * 2, m = e.x - R, l > B && !this._isInitialRender && !this._growAfterOpen && (m = e.x - B / 2);
    }
    return { top: a, left: m, bottom: s, right: D, width: l, height: n };
  }

  _setBoundingBoxStyles(e, r) {
    let t = this._calculateBoundingBoxRect(e, r);
    !this._isInitialRender && !this._growAfterOpen && (t.height = Math.min(t.height, this._lastBoundingBoxSize.height), t.width = Math.min(t.width, this._lastBoundingBoxSize.width));
    let i = {};
    if (this._hasExactPosition()) i.top = i.left = "0", i.bottom = i.right = i.maxHeight = i.maxWidth = "", i.width = i.height = "100%"; else {
      let n = this._overlayRef.getConfig().maxHeight, a = this._overlayRef.getConfig().maxWidth;
      i.height = U(t.height), i.top = U(t.top), i.bottom = U(t.bottom), i.width = U(t.width), i.left = U(t.left), i.right = U(t.right), r.overlayX === "center" ? i.alignItems = "center" : i.alignItems = r.overlayX === "end" ? "flex-end" : "flex-start", r.overlayY === "center" ? i.justifyContent = "center" : i.justifyContent = r.overlayY === "bottom" ? "flex-end" : "flex-start", n && (i.maxHeight = U(n)), a && (i.maxWidth = U(a));
    }
    this._lastBoundingBoxSize = t, Qt(this._boundingBox.style, i);
  }

  _resetBoundingBoxStyles() {
    Qt(this._boundingBox.style, {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      height: "",
      width: "",
      alignItems: "",
      justifyContent: ""
    });
  }

  _resetOverlayElementStyles() {
    Qt(this._pane.style, { top: "", left: "", bottom: "", right: "", position: "", transform: "" });
  }

  _setOverlayElementStyles(e, r) {
    let t = {}, i = this._hasExactPosition(), n = this._hasFlexibleDimensions, a = this._overlayRef.getConfig();
    if (i) {
      let l = this._viewportRuler.getViewportScrollPosition();
      Qt(t, this._getExactOverlayY(r, e, l)), Qt(t, this._getExactOverlayX(r, e, l));
    } else t.position = "static";
    let s = "", c = this._getOffset(r, "x"), u = this._getOffset(r, "y");
    c && (s += `translateX(${c}px) `), u && (s += `translateY(${u}px)`), t.transform = s.trim(), a.maxHeight && (i ? t.maxHeight = U(a.maxHeight) : n && (t.maxHeight = "")), a.maxWidth && (i ? t.maxWidth = U(a.maxWidth) : n && (t.maxWidth = "")), Qt(this._pane.style, t);
  }

  _getExactOverlayY(e, r, t) {
    let i = { top: "", bottom: "" }, n = this._getOverlayPoint(r, this._overlayRect, e);
    if (this._isPushed && (n = this._pushOverlayOnScreen(n, this._overlayRect, t)), e.overlayY === "bottom") {
      let a = this._document.documentElement.clientHeight;
      i.bottom = `${a - (n.y + this._overlayRect.height)}px`;
    } else i.top = U(n.y);
    return i;
  }

  _getExactOverlayX(e, r, t) {
    let i = { left: "", right: "" }, n = this._getOverlayPoint(r, this._overlayRect, e);
    this._isPushed && (n = this._pushOverlayOnScreen(n, this._overlayRect, t));
    let a;
    if (this._isRtl() ? a = e.overlayX === "end" ? "left" : "right" : a = e.overlayX === "end" ? "right" : "left", a === "right") {
      let s = this._document.documentElement.clientWidth;
      i.right = `${s - (n.x + this._overlayRect.width)}px`;
    } else i.left = U(n.x);
    return i;
  }

  _getScrollVisibility() {
    let e = this._getOriginRect(), r = this._pane.getBoundingClientRect(),
      t = this._scrollables.map(i => i.getElementRef().nativeElement.getBoundingClientRect());
    return {
      isOriginClipped: bo(e, t),
      isOriginOutsideView: Hi(e, t),
      isOverlayClipped: bo(r, t),
      isOverlayOutsideView: Hi(r, t)
    };
  }

  _subtractOverflows(e, ...r) {
    return r.reduce((t, i) => t - Math.max(i, 0), e);
  }

  _getNarrowedViewportRect() {
    let e = this._document.documentElement.clientWidth, r = this._document.documentElement.clientHeight,
      t = this._viewportRuler.getViewportScrollPosition();
    return {
      top: t.top + this._viewportMargin,
      left: t.left + this._viewportMargin,
      right: t.left + e - this._viewportMargin,
      bottom: t.top + r - this._viewportMargin,
      width: e - 2 * this._viewportMargin,
      height: r - 2 * this._viewportMargin
    };
  }

  _isRtl() {
    return this._overlayRef.getDirection() === "rtl";
  }

  _hasExactPosition() {
    return !this._hasFlexibleDimensions || this._isPushed;
  }

  _getOffset(e, r) {
    return r === "x" ? e.offsetX == null ? this._offsetX : e.offsetX : e.offsetY == null ? this._offsetY : e.offsetY;
  }

  _validatePositions() {
  }

  _addPanelClasses(e) {
    this._pane && xi(e).forEach(r => {
      r !== "" && this._appliedPanelClasses.indexOf(r) === -1 && (this._appliedPanelClasses.push(r), this._pane.classList.add(r));
    });
  }

  _clearPanelClasses() {
    this._pane && (this._appliedPanelClasses.forEach(e => {
      this._pane.classList.remove(e);
    }), this._appliedPanelClasses = []);
  }

  _getOriginRect() {
    let e = this._origin;
    if (e instanceof y) return e.nativeElement.getBoundingClientRect();
    if (e instanceof Element) return e.getBoundingClientRect();
    let r = e.width || 0, t = e.height || 0;
    return { top: e.y, bottom: e.y + t, left: e.x, right: e.x + r, height: t, width: r };
  }
};

function Qt(o, e) {
  for (let r in e) e.hasOwnProperty(r) && (o[r] = e[r]);
  return o;
}

function yo(o) {
  if (typeof o != "number" && o != null) {
    let [e, r] = o.split(_a);
    return !r || r === "px" ? parseFloat(e) : null;
  }
  return o || null;
}

function wo(o) {
  return {
    top: Math.floor(o.top),
    right: Math.floor(o.right),
    bottom: Math.floor(o.bottom),
    left: Math.floor(o.left),
    width: Math.floor(o.width),
    height: Math.floor(o.height)
  };
}

function va(o, e) {
  return o === e ? !0 : o.isOriginClipped === e.isOriginClipped && o.isOriginOutsideView === e.isOriginOutsideView && o.isOverlayClipped === e.isOverlayClipped && o.isOverlayOutsideView === e.isOverlayOutsideView;
}

var xo = "cdk-global-overlay-wrapper", $i = class {
  constructor() {
    this._cssPosition = "static", this._topOffset = "", this._bottomOffset = "", this._alignItems = "", this._xPosition = "", this._xOffset = "", this._width = "", this._height = "", this._isDisposed = !1;
  }

  attach(e) {
    let r = e.getConfig();
    this._overlayRef = e, this._width && !r.width && e.updateSize({ width: this._width }), this._height && !r.height && e.updateSize({ height: this._height }), e.hostElement.classList.add(xo), this._isDisposed = !1;
  }

  top(e = "") {
    return this._bottomOffset = "", this._topOffset = e, this._alignItems = "flex-start", this;
  }

  left(e = "") {
    return this._xOffset = e, this._xPosition = "left", this;
  }

  bottom(e = "") {
    return this._topOffset = "", this._bottomOffset = e, this._alignItems = "flex-end", this;
  }

  right(e = "") {
    return this._xOffset = e, this._xPosition = "right", this;
  }

  start(e = "") {
    return this._xOffset = e, this._xPosition = "start", this;
  }

  end(e = "") {
    return this._xOffset = e, this._xPosition = "end", this;
  }

  width(e = "") {
    return this._overlayRef ? this._overlayRef.updateSize({ width: e }) : this._width = e, this;
  }

  height(e = "") {
    return this._overlayRef ? this._overlayRef.updateSize({ height: e }) : this._height = e, this;
  }

  centerHorizontally(e = "") {
    return this.left(e), this._xPosition = "center", this;
  }

  centerVertically(e = "") {
    return this.top(e), this._alignItems = "center", this;
  }

  apply() {
    if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
    let e = this._overlayRef.overlayElement.style, r = this._overlayRef.hostElement.style,
      t = this._overlayRef.getConfig(), { width: i, height: n, maxWidth: a, maxHeight: s } = t,
      c = (i === "100%" || i === "100vw") && (!a || a === "100%" || a === "100vw"),
      u = (n === "100%" || n === "100vh") && (!s || s === "100%" || s === "100vh"), l = this._xPosition,
      m = this._xOffset, D = this._overlayRef.getConfig().direction === "rtl", R = "", B = "", q = "";
    c ? q = "flex-start" : l === "center" ? (q = "center", D ? B = m : R = m) : D ? l === "left" || l === "end" ? (q = "flex-end", R = m) : (l === "right" || l === "start") && (q = "flex-start", B = m) : l === "left" || l === "start" ? (q = "flex-start", R = m) : (l === "right" || l === "end") && (q = "flex-end", B = m), e.position = this._cssPosition, e.marginLeft = c ? "0" : R, e.marginTop = u ? "0" : this._topOffset, e.marginBottom = this._bottomOffset, e.marginRight = c ? "0" : B, r.justifyContent = q, r.alignItems = u ? "flex-start" : this._alignItems;
  }

  dispose() {
    if (this._isDisposed || !this._overlayRef) return;
    let e = this._overlayRef.overlayElement.style, r = this._overlayRef.hostElement, t = r.style;
    r.classList.remove(xo), t.justifyContent = t.alignItems = e.marginTop = e.marginBottom = e.marginLeft = e.marginRight = e.position = "", this._overlayRef = null, this._isDisposed = !0;
  }
}, ya = (() => {
  let e = class e {
    constructor(t, i, n, a) {
      this._viewportRuler = t, this._document = i, this._platform = n, this._overlayContainer = a;
    }

    global() {
      return new $i;
    }

    flexibleConnectedTo(t) {
      return new Yi(t, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(Ie), h(E), h(N), h(he));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})(), wa = 0, _t = (() => {
  let e = class e {
    constructor(t, i, n, a, s, c, u, l, m, D, R, B) {
      this.scrollStrategies = t, this._overlayContainer = i, this._componentFactoryResolver = n, this._positionBuilder = a, this._keyboardDispatcher = s, this._injector = c, this._ngZone = u, this._document = l, this._directionality = m, this._location = D, this._outsideClickDispatcher = R, this._animationsModuleType = B;
    }

    create(t) {
      let i = this._createHostElement(), n = this._createPaneElement(i), a = this._createPortalOutlet(n), s = new qt(t);
      return s.direction = s.direction || this._directionality.value, new Ot(a, i, n, s, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher, this._animationsModuleType === "NoopAnimations", this._injector.get(hn));
    }

    position() {
      return this._positionBuilder;
    }

    _createPaneElement(t) {
      let i = this._document.createElement("div");
      return i.id = `cdk-overlay-${wa++}`, i.classList.add("cdk-overlay-pane"), t.appendChild(i), i;
    }

    _createHostElement() {
      let t = this._document.createElement("div");
      return this._overlayContainer.getContainerElement().appendChild(t), t;
    }

    _createPortalOutlet(t) {
      return this._appRef || (this._appRef = this._injector.get(_i)), new Ae(t, this._componentFactoryResolver, this._appRef, this._injector, this._document);
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(fa), h(he), h(ge), h(ya), h(ga), h($), h(k), h(E), h(Et), h(He), h(ba), h(J, 8));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();
var xa = ["mat-menu-item", ""], Ca = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"],
  Ea = ["mat-icon, [matMenuItemIcon]", "*"];

function Da(o, e) {
  o & 1 && (Ut(), p(0, "svg", 2), P(1, "polygon", 3), f());
}

var Ia = ["*"];

function ka(o, e) {
  if (o & 1) {
    let r = Nt();
    p(0, "div", 0), j("keydown", function(i) {
      ut(r);
      let n = nt();
      return pt(n._handleKeydown(i));
    })("click", function() {
      ut(r);
      let i = nt();
      return pt(i.closed.emit("click"));
    })("@transformMenu.start", function(i) {
      ut(r);
      let n = nt();
      return pt(n._onAnimationStart(i));
    })("@transformMenu.done", function(i) {
      ut(r);
      let n = nt();
      return pt(n._onAnimationDone(i));
    }), p(1, "div", 1), O(2), f()();
  }
  if (o & 2) {
    let r = nt();
    At(r._classList), Z("id", r.panelId)("@transformMenu", r._panelAnimationState), T("aria-label", r.ariaLabel || null)("aria-labelledby", r.ariaLabelledby || null)("aria-describedby", r.ariaDescribedby || null);
  }
}

var Gi = new v("MAT_MENU_PANEL"), Me = (() => {
  let e = class e {
    constructor(t, i, n, a, s) {
      this._elementRef = t, this._document = i, this._focusMonitor = n, this._parentMenu = a, this._changeDetectorRef = s, this.role = "menuitem", this.disabled = !1, this.disableRipple = !1, this._hovered = new g, this._focused = new g, this._highlighted = !1, this._triggersSubmenu = !1, a?.addItem?.(this);
    }

    focus(t, i) {
      this._focusMonitor && t ? this._focusMonitor.focusVia(this._getHostElement(), t, i) : this._getHostElement().focus(i), this._focused.next(this);
    }

    ngAfterViewInit() {
      this._focusMonitor && this._focusMonitor.monitor(this._elementRef, !1);
    }

    ngOnDestroy() {
      this._focusMonitor && this._focusMonitor.stopMonitoring(this._elementRef), this._parentMenu && this._parentMenu.removeItem && this._parentMenu.removeItem(this), this._hovered.complete(), this._focused.complete();
    }

    _getTabIndex() {
      return this.disabled ? "-1" : "0";
    }

    _getHostElement() {
      return this._elementRef.nativeElement;
    }

    _checkDisabled(t) {
      this.disabled && (t.preventDefault(), t.stopPropagation());
    }

    _handleMouseEnter() {
      this._hovered.next(this);
    }

    getLabel() {
      let t = this._elementRef.nativeElement.cloneNode(!0), i = t.querySelectorAll("mat-icon, .material-icons");
      for (let n = 0; n < i.length; n++) i[n].remove();
      return t.textContent?.trim() || "";
    }

    _setHighlighted(t) {
      this._highlighted = t, this._changeDetectorRef?.markForCheck();
    }

    _setTriggersSubmenu(t) {
      this._triggersSubmenu = t, this._changeDetectorRef?.markForCheck();
    }

    _hasFocus() {
      return this._document && this._document.activeElement === this._getHostElement();
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(y), d(E), d(mt), d(Gi, 8), d(Q));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["", "mat-menu-item", ""]],
    hostAttrs: [1, "mat-mdc-menu-item", "mat-mdc-focus-indicator"],
    hostVars: 8,
    hostBindings: function(i, n) {
      i & 1 && j("click", function(s) {
        return n._checkDisabled(s);
      })("mouseenter", function() {
        return n._handleMouseEnter();
      }), i & 2 && (T("role", n.role)("tabindex", n._getTabIndex())("aria-disabled", n.disabled)("disabled", n.disabled || null), L("mat-mdc-menu-item-highlighted", n._highlighted)("mat-mdc-menu-item-submenu-trigger", n._triggersSubmenu));
    },
    inputs: {
      role: "role",
      disabled: [2, "disabled", "disabled", G],
      disableRipple: [2, "disableRipple", "disableRipple", G]
    },
    exportAs: ["matMenuItem"],
    standalone: !0,
    features: [tt, _],
    attrs: xa,
    ngContentSelectors: Ea,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
    template: function(i, n) {
      i & 1 && (et(Ca), O(0), p(1, "span", 0), O(2, 1), f(), P(3, "div", 1), K(4, Da, 2, 0, ":svg:svg", 2)), i & 2 && (S(3), Z("matRippleDisabled", n.disableRipple || n.disabled)("matRippleTrigger", n._getHostElement()), S(), jt(n._triggersSubmenu ? 4 : -1));
    },
    dependencies: [Ce],
    encapsulation: 2,
    changeDetection: 0
  });
  let o = e;
  return o;
})();
var Sa = new v("MatMenuContent");
var si = {
    transformMenu: Lt("transformMenu", [xt("void", ct({
      opacity: 0,
      transform: "scale(0.8)"
    })), kt("void => enter", It("120ms cubic-bezier(0, 0, 0.2, 1)", ct({
      opacity: 1,
      transform: "scale(1)"
    }))), kt("* => void", It("100ms 25ms linear", ct({ opacity: 0 })))]),
    fadeInItems: Lt("fadeInItems", [xt("showing", ct({ opacity: 1 })), kt("void => *", [ct({ opacity: 0 }), It("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])
  }, Ql = si.fadeInItems, ql = si.transformMenu, Aa = 0,
  Ma = new v("mat-menu-default-options", { providedIn: "root", factory: Ta });

function Ta() {
  return {
    overlapTrigger: !1,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  };
}

var ue = (() => {
  let e = class e {
    get xPosition() {
      return this._xPosition;
    }

    set xPosition(t) {
      this._xPosition = t, this.setPositionClasses();
    }

    get yPosition() {
      return this._yPosition;
    }

    set yPosition(t) {
      this._yPosition = t, this.setPositionClasses();
    }

    set panelClass(t) {
      let i = this._previousPanelClass, n = w({}, this._classList);
      i && i.length && i.split(" ").forEach(a => {
        n[a] = !1;
      }), this._previousPanelClass = t, t && t.length && (t.split(" ").forEach(a => {
        n[a] = !0;
      }), this._elementRef.nativeElement.className = ""), this._classList = n;
    }

    get classList() {
      return this.panelClass;
    }

    set classList(t) {
      this.panelClass = t;
    }

    constructor(t, i, n, a) {
      this._elementRef = t, this._changeDetectorRef = a, this._elevationPrefix = "mat-elevation-z", this._baseElevation = null, this._directDescendantItems = new Ft, this._classList = {}, this._panelAnimationState = "void", this._animationDone = new g, this.closed = new F, this.close = this.closed, this.panelId = `mat-menu-panel-${Aa++}`, this._injector = I($), this.overlayPanelClass = n.overlayPanelClass || "", this._xPosition = n.xPosition, this._yPosition = n.yPosition, this.backdropClass = n.backdropClass, this.overlapTrigger = n.overlapTrigger, this.hasBackdrop = n.hasBackdrop;
    }

    ngOnInit() {
      this.setPositionClasses();
    }

    ngAfterContentInit() {
      this._updateDirectDescendants(), this._keyManager = new Ke(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(), this._keyManager.tabOut.subscribe(() => this.closed.emit("tab")), this._directDescendantItems.changes.pipe(at(this._directDescendantItems), Ne(t => ht(...t.map(i => i._focused)))).subscribe(t => this._keyManager.updateActiveItem(t)), this._directDescendantItems.changes.subscribe(t => {
        let i = this._keyManager;
        if (this._panelAnimationState === "enter" && i.activeItem?._hasFocus()) {
          let n = t.toArray(), a = Math.max(0, Math.min(n.length - 1, i.activeItemIndex || 0));
          n[a] && !n[a].disabled ? i.setActiveItem(a) : i.setNextItemActive();
        }
      });
    }

    ngOnDestroy() {
      this._keyManager?.destroy(), this._directDescendantItems.destroy(), this.closed.complete(), this._firstItemFocusRef?.destroy();
    }

    _hovered() {
      return this._directDescendantItems.changes.pipe(at(this._directDescendantItems), Ne(i => ht(...i.map(n => n._hovered))));
    }

    addItem(t) {
    }

    removeItem(t) {
    }

    _handleKeydown(t) {
      let i = t.keyCode, n = this._keyManager;
      switch (i) {
        case 27:
          gt(t) || (t.preventDefault(), this.closed.emit("keydown"));
          break;
        case 37:
          this.parentMenu && this.direction === "ltr" && this.closed.emit("keydown");
          break;
        case 39:
          this.parentMenu && this.direction === "rtl" && this.closed.emit("keydown");
          break;
        default:
          (i === 38 || i === 40) && n.setFocusOrigin("keyboard"), n.onKeydown(t);
          return;
      }
      t.stopPropagation();
    }

    focusFirstItem(t = "program") {
      this._firstItemFocusRef?.destroy(), this._firstItemFocusRef = yt(() => {
        let i = null;
        if (this._directDescendantItems.length && (i = this._directDescendantItems.first._getHostElement().closest("[role=\"menu\"]")), !i || !i.contains(document.activeElement)) {
          let n = this._keyManager;
          n.setFocusOrigin(t).setFirstItemActive(), !n.activeItem && i && i.focus();
        }
      }, { injector: this._injector });
    }

    resetActiveItem() {
      this._keyManager.setActiveItem(-1);
    }

    setElevation(t) {
      if (this._baseElevation === null) {
        let c = (typeof getComputedStyle == "function" ? getComputedStyle(this._elementRef.nativeElement) : null)?.getPropertyValue("--mat-menu-base-elevation-level") || "8";
        this._baseElevation = parseInt(c);
      }
      let i = Math.min(this._baseElevation + t, 24), n = `${this._elevationPrefix}${i}`,
        a = Object.keys(this._classList).find(s => s.startsWith(this._elevationPrefix));
      if (!a || a === this._previousElevation) {
        let s = w({}, this._classList);
        this._previousElevation && (s[this._previousElevation] = !1), s[n] = !0, this._previousElevation = n, this._classList = s;
      }
    }

    setPositionClasses(t = this.xPosition, i = this.yPosition) {
      this._classList = zt(w({}, this._classList), {
        "mat-menu-before": t === "before",
        "mat-menu-after": t === "after",
        "mat-menu-above": i === "above",
        "mat-menu-below": i === "below"
      }), this._changeDetectorRef?.markForCheck();
    }

    _startAnimation() {
      this._panelAnimationState = "enter";
    }

    _resetAnimation() {
      this._panelAnimationState = "void";
    }

    _onAnimationDone(t) {
      this._animationDone.next(t), this._isAnimating = !1;
    }

    _onAnimationStart(t) {
      this._isAnimating = !0, t.toState === "enter" && this._keyManager.activeItemIndex === 0 && (t.element.scrollTop = 0);
    }

    _updateDirectDescendants() {
      this._allItems.changes.pipe(at(this._allItems)).subscribe(t => {
        this._directDescendantItems.reset(t.filter(i => i._parentMenu === this)), this._directDescendantItems.notifyOnChanges();
      });
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(y), d(k), d(Ma), d(Q));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["mat-menu"]],
    contentQueries: function(i, n, a) {
      if (i & 1 && (Mt(a, Sa, 5), Mt(a, Me, 5), Mt(a, Me, 4)), i & 2) {
        let s;
        z(s = H()) && (n.lazyContent = s.first), z(s = H()) && (n._allItems = s), z(s = H()) && (n.items = s);
      }
    },
    viewQuery: function(i, n) {
      if (i & 1 && rt(Dt, 5), i & 2) {
        let a;
        z(a = H()) && (n.templateRef = a.first);
      }
    },
    hostVars: 3,
    hostBindings: function(i, n) {
      i & 2 && T("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
    },
    inputs: {
      backdropClass: "backdropClass",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      xPosition: "xPosition",
      yPosition: "yPosition",
      overlapTrigger: [2, "overlapTrigger", "overlapTrigger", G],
      hasBackdrop: [2, "hasBackdrop", "hasBackdrop", t => t == null ? null : G(t)],
      panelClass: [0, "class", "panelClass"],
      classList: "classList"
    },
    outputs: { closed: "closed", close: "close" },
    exportAs: ["matMenu"],
    standalone: !0,
    features: [lt([{ provide: Gi, useExisting: e }]), tt, _],
    ngContentSelectors: Ia,
    decls: 1,
    vars: 0,
    consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", "mat-mdc-elevation-specific", 3, "keydown", "click", "id"], [1, "mat-mdc-menu-content"]],
    template: function(i, n) {
      i & 1 && (et(), K(0, ka, 3, 7, "ng-template"));
    },
    styles: ["mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.mat-mdc-menu-panel.ng-animating:has(.mat-mdc-menu-content:empty){display:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}[dir=rtl] .mat-mdc-menu-item{padding-right:var(--mat-menu-item-leading-spacing);padding-left:var(--mat-menu-item-trailing-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-right:var(--mat-menu-item-with-icon-leading-spacing);padding-left:var(--mat-menu-item-with-icon-trailing-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
    encapsulation: 2,
    data: { animation: [si.transformMenu, si.fadeInItems] },
    changeDetection: 0
  });
  let o = e;
  return o;
})(), Ra = new v("mat-menu-scroll-strategy", {
  providedIn: "root", factory: () => {
    let o = I(_t);
    return () => o.scrollStrategies.reposition();
  }
});
var Eo = Bt({ passive: !0 });
var Io = (() => {
  let e = class e {
    get _deprecatedMatMenuTriggerFor() {
      return this.menu;
    }

    set _deprecatedMatMenuTriggerFor(t) {
      this.menu = t;
    }

    get menu() {
      return this._menu;
    }

    set menu(t) {
      t !== this._menu && (this._menu = t, this._menuCloseSubscription.unsubscribe(), t && (this._parentMaterialMenu, this._menuCloseSubscription = t.close.subscribe(i => {
        this._destroyMenu(i), (i === "click" || i === "tab") && this._parentMaterialMenu && this._parentMaterialMenu.closed.emit(i);
      })), this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()));
    }

    constructor(t, i, n, a, s, c, u, l, m) {
      this._overlay = t, this._element = i, this._viewContainerRef = n, this._menuItemInstance = c, this._dir = u, this._focusMonitor = l, this._ngZone = m, this._overlayRef = null, this._menuOpen = !1, this._closingActionsSubscription = it.EMPTY, this._hoverSubscription = it.EMPTY, this._menuCloseSubscription = it.EMPTY, this._changeDetectorRef = I(Q), this._handleTouchStart = D => {
        ye(D) || (this._openedBy = "touch");
      }, this._openedBy = void 0, this.restoreFocus = !0, this.menuOpened = new F, this.onMenuOpen = this.menuOpened, this.menuClosed = new F, this.onMenuClose = this.menuClosed, this._scrollStrategy = a, this._parentMaterialMenu = s instanceof ue ? s : void 0, i.nativeElement.addEventListener("touchstart", this._handleTouchStart, Eo);
    }

    ngAfterContentInit() {
      this._handleHover();
    }

    ngOnDestroy() {
      this._overlayRef && (this._overlayRef.dispose(), this._overlayRef = null), this._element.nativeElement.removeEventListener("touchstart", this._handleTouchStart, Eo), this._menuCloseSubscription.unsubscribe(), this._closingActionsSubscription.unsubscribe(), this._hoverSubscription.unsubscribe();
    }

    get menuOpen() {
      return this._menuOpen;
    }

    get dir() {
      return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
    }

    triggersSubmenu() {
      return !!(this._menuItemInstance && this._parentMaterialMenu && this.menu);
    }

    toggleMenu() {
      return this._menuOpen ? this.closeMenu() : this.openMenu();
    }

    openMenu() {
      let t = this.menu;
      if (this._menuOpen || !t) return;
      let i = this._createOverlay(t), n = i.getConfig(), a = n.positionStrategy;
      this._setPosition(t, a), n.hasBackdrop = t.hasBackdrop == null ? !this.triggersSubmenu() : t.hasBackdrop, i.attach(this._getPortal(t)), t.lazyContent && t.lazyContent.attach(this.menuData), this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu()), this._initMenu(t), t instanceof ue && (t._startAnimation(), t._directDescendantItems.changes.pipe(V(t.close)).subscribe(() => {
        a.withLockedPosition(!1).reapplyLastPosition(), a.withLockedPosition(!0);
      }));
    }

    closeMenu() {
      this.menu?.close.emit();
    }

    focus(t, i) {
      this._focusMonitor && t ? this._focusMonitor.focusVia(this._element, t, i) : this._element.nativeElement.focus(i);
    }

    updatePosition() {
      this._overlayRef?.updatePosition();
    }

    _destroyMenu(t) {
      if (!this._overlayRef || !this.menuOpen) return;
      let i = this.menu;
      this._closingActionsSubscription.unsubscribe(), this._overlayRef.detach(), this.restoreFocus && (t === "keydown" || !this._openedBy || !this.triggersSubmenu()) && this.focus(this._openedBy), this._openedBy = void 0, i instanceof ue ? (i._resetAnimation(), i.lazyContent ? i._animationDone.pipe(M(n => n.toState === "void"), dt(1), V(i.lazyContent._attached)).subscribe({
        next: () => i.lazyContent.detach(),
        complete: () => this._setIsMenuOpen(!1)
      }) : this._setIsMenuOpen(!1)) : (this._setIsMenuOpen(!1), i?.lazyContent?.detach());
    }

    _initMenu(t) {
      t.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : void 0, t.direction = this.dir, this._setMenuElevation(t), t.focusFirstItem(this._openedBy || "program"), this._setIsMenuOpen(!0);
    }

    _setMenuElevation(t) {
      if (t.setElevation) {
        let i = 0, n = t.parentMenu;
        for (; n;) i++, n = n.parentMenu;
        t.setElevation(i);
      }
    }

    _setIsMenuOpen(t) {
      t !== this._menuOpen && (this._menuOpen = t, this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit(), this.triggersSubmenu() && this._menuItemInstance._setHighlighted(t), this._changeDetectorRef.markForCheck());
    }

    _createOverlay(t) {
      if (!this._overlayRef) {
        let i = this._getOverlayConfig(t);
        this._subscribeToPositions(t, i.positionStrategy), this._overlayRef = this._overlay.create(i), this._overlayRef.keydownEvents().subscribe();
      }
      return this._overlayRef;
    }

    _getOverlayConfig(t) {
      return new qt({
        positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
        backdropClass: t.backdropClass || "cdk-overlay-transparent-backdrop",
        panelClass: t.overlayPanelClass,
        scrollStrategy: this._scrollStrategy(),
        direction: this._dir
      });
    }

    _subscribeToPositions(t, i) {
      t.setPositionClasses && i.positionChanges.subscribe(n => {
        let a = n.connectionPair.overlayX === "start" ? "after" : "before",
          s = n.connectionPair.overlayY === "top" ? "below" : "above";
        this._ngZone ? this._ngZone.run(() => t.setPositionClasses(a, s)) : t.setPositionClasses(a, s);
      });
    }

    _setPosition(t, i) {
      let [n, a] = t.xPosition === "before" ? ["end", "start"] : ["start", "end"], [s, c] = t.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"], [u, l] = [s, c], [m, D] = [n, a],
        R = 0;
      if (this.triggersSubmenu()) {
        if (D = n = t.xPosition === "before" ? "start" : "end", a = m = n === "end" ? "start" : "end", this._parentMaterialMenu) {
          if (this._parentInnerPadding == null) {
            let B = this._parentMaterialMenu.items.first;
            this._parentInnerPadding = B ? B._getHostElement().offsetTop : 0;
          }
          R = s === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
        }
      } else t.overlapTrigger || (u = s === "top" ? "bottom" : "top", l = c === "top" ? "bottom" : "top");
      i.withPositions([{ originX: n, originY: u, overlayX: m, overlayY: s, offsetY: R }, {
        originX: a,
        originY: u,
        overlayX: D,
        overlayY: s,
        offsetY: R
      }, { originX: n, originY: l, overlayX: m, overlayY: c, offsetY: -R }, {
        originX: a,
        originY: l,
        overlayX: D,
        overlayY: c,
        offsetY: -R
      }]);
    }

    _menuClosingActions() {
      let t = this._overlayRef.backdropClick(), i = this._overlayRef.detachments(),
        n = this._parentMaterialMenu ? this._parentMaterialMenu.closed : ot(),
        a = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(M(s => s !== this._menuItemInstance), M(() => this._menuOpen)) : ot();
      return ht(t, n, a, i);
    }

    _handleMousedown(t) {
      ve(t) || (this._openedBy = t.button === 0 ? "mouse" : void 0, this.triggersSubmenu() && t.preventDefault());
    }

    _handleKeydown(t) {
      let i = t.keyCode;
      (i === 13 || i === 32) && (this._openedBy = "keyboard"), this.triggersSubmenu() && (i === 39 && this.dir === "ltr" || i === 37 && this.dir === "rtl") && (this._openedBy = "keyboard", this.openMenu());
    }

    _handleClick(t) {
      this.triggersSubmenu() ? (t.stopPropagation(), this.openMenu()) : this.toggleMenu();
    }

    _handleHover() {
      !this.triggersSubmenu() || !this._parentMaterialMenu || (this._hoverSubscription = this._parentMaterialMenu._hovered().pipe(M(t => t === this._menuItemInstance && !t.disabled), pi(0, Fe)).subscribe(() => {
        this._openedBy = "mouse", this.menu instanceof ue && this.menu._isAnimating ? this.menu._animationDone.pipe(dt(1), pi(0, Fe), V(this._parentMaterialMenu._hovered())).subscribe(() => this.openMenu()) : this.openMenu();
      }));
    }

    _getPortal(t) {
      return (!this._portal || this._portal.templateRef !== t.templateRef) && (this._portal = new St(t.templateRef, this._viewContainerRef)), this._portal;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(_t), d(y), d(Pt), d(Ra), d(Gi, 8), d(Me, 10), d(Et, 8), d(mt), d(k));
  }, e.\u0275dir = X({
    type: e,
    selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
    hostAttrs: [1, "mat-mdc-menu-trigger"],
    hostVars: 3,
    hostBindings: function(i, n) {
      i & 1 && j("click", function(s) {
        return n._handleClick(s);
      })("mousedown", function(s) {
        return n._handleMousedown(s);
      })("keydown", function(s) {
        return n._handleKeydown(s);
      }), i & 2 && T("aria-haspopup", n.menu ? "menu" : null)("aria-expanded", n.menuOpen)("aria-controls", n.menuOpen ? n.menu.panelId : null);
    },
    inputs: {
      _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
      menu: [0, "matMenuTriggerFor", "menu"],
      menuData: [0, "matMenuTriggerData", "menuData"],
      restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
    },
    outputs: {
      menuOpened: "menuOpened",
      onMenuOpen: "onMenuOpen",
      menuClosed: "menuClosed",
      onMenuClose: "onMenuClose"
    },
    exportAs: ["matMenuTrigger"],
    standalone: !0
  });
  let o = e;
  return o;
})();
var ko = (() => {
  class o {
    projectType;
    static \u0275fac = function(t) {
      return new (t || o);
    };
    static \u0275cmp = b({
      type: o,
      selectors: [["app-project-type-row"]],
      inputs: { projectType: "projectType" },
      standalone: !0,
      features: [_],
      decls: 24,
      vars: 5,
      consts: [["menu", "matMenu"], [1, "flex", "items-center", "justify-between", "gap-3", "w-full"], ["mat-icon-button", "", 3, "click", "matMenuTriggerFor"], ["mat-menu-item", ""], [1, "p-5"]],
      template: function(t, i) {
        if (t & 1) {
          let n = Nt();
          p(0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title")(3, "div", 1)(4, "span"), C(5), f(), p(6, "button", 2), j("click", function(s) {
            return ut(n), pt(s.stopPropagation());
          }), p(7, "mat-icon"), C(8, "more_vert"), f()(), p(9, "mat-menu", null, 0)(11, "button", 3)(12, "mat-icon"), C(13, "edit"), f(), p(14, "span"), C(15, "Edit"), f()(), p(16, "button", 3)(17, "mat-icon"), C(18, "delete"), f(), p(19, "span"), C(20, "Delete"), f()()()()()(), p(21, "div", 4)(22, "p"), C(23), f()()();
        }
        if (t & 2) {
          let n, a = ze(10);
          wt("background-color", (n = i.projectType.color) !== null && n !== void 0 ? n : "white"), S(5), bi(" ", i.projectType.title, " "), S(), Z("matMenuTriggerFor", a), S(17), Wt(i.projectType == null ? null : i.projectType.description);
        }
      },
      dependencies: [Bi, fo, po, ei, de, Io, ue, Me]
    });
  }

  return o;
})();
var Oa = ["determinateSpinner"];

function Fa(o, e) {
  if (o & 1 && (Ut(), p(0, "svg", 11), P(1, "circle", 12), f()), o & 2) {
    let r = nt();
    T("viewBox", r._viewBox()), S(), wt("stroke-dasharray", r._strokeCircumference(), "px")("stroke-dashoffset", r._strokeCircumference() / 2, "px")("stroke-width", r._circleStrokeWidth(), "%"), T("r", r._circleRadius());
  }
}

var Pa = new v("mat-progress-spinner-default-options", { providedIn: "root", factory: ja });

function ja() {
  return { diameter: So };
}

var So = 100, Na = 10, Ao = (() => {
  let e = class e {
    get color() {
      return this._color || this._defaultColor;
    }

    set color(t) {
      this._color = t;
    }

    constructor(t, i, n) {
      this._elementRef = t, this._defaultColor = "primary", this._value = 0, this._diameter = So, this._noopAnimations = i === "NoopAnimations" && !!n && !n._forceAnimations, this.mode = t.nativeElement.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate", n && (n.color && (this.color = this._defaultColor = n.color), n.diameter && (this.diameter = n.diameter), n.strokeWidth && (this.strokeWidth = n.strokeWidth));
    }

    get value() {
      return this.mode === "determinate" ? this._value : 0;
    }

    set value(t) {
      this._value = Math.max(0, Math.min(100, t || 0));
    }

    get diameter() {
      return this._diameter;
    }

    set diameter(t) {
      this._diameter = t || 0;
    }

    get strokeWidth() {
      return this._strokeWidth ?? this.diameter / 10;
    }

    set strokeWidth(t) {
      this._strokeWidth = t || 0;
    }

    _circleRadius() {
      return (this.diameter - Na) / 2;
    }

    _viewBox() {
      let t = this._circleRadius() * 2 + this.strokeWidth;
      return `0 0 ${t} ${t}`;
    }

    _strokeCircumference() {
      return 2 * Math.PI * this._circleRadius();
    }

    _strokeDashOffset() {
      return this.mode === "determinate" ? this._strokeCircumference() * (100 - this._value) / 100 : null;
    }

    _circleStrokeWidth() {
      return this.strokeWidth / this.diameter * 100;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(y), d(J, 8), d(Pa));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
    viewQuery: function(i, n) {
      if (i & 1 && rt(Oa, 5), i & 2) {
        let a;
        z(a = H()) && (n._determinateCircle = a.first);
      }
    },
    hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
    hostVars: 18,
    hostBindings: function(i, n) {
      i & 2 && (T("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", n.mode === "determinate" ? n.value : null)("mode", n.mode), At("mat-" + n.color), wt("width", n.diameter, "px")("height", n.diameter, "px")("--mdc-circular-progress-size", n.diameter + "px")("--mdc-circular-progress-active-indicator-width", n.diameter + "px"), L("_mat-animation-noopable", n._noopAnimations)("mdc-circular-progress--indeterminate", n.mode === "indeterminate"));
    },
    inputs: {
      color: "color",
      mode: "mode",
      value: [2, "value", "value", Yt],
      diameter: [2, "diameter", "diameter", Yt],
      strokeWidth: [2, "strokeWidth", "strokeWidth", Yt]
    },
    exportAs: ["matProgressSpinner"],
    standalone: !0,
    features: [tt, _],
    decls: 14,
    vars: 11,
    consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
    template: function(i, n) {
      if (i & 1 && (K(0, Fa, 2, 8, "ng-template", null, 0, yn), p(2, "div", 2, 1), Ut(), p(4, "svg", 3), P(5, "circle", 4), f()(), un(), p(6, "div", 5)(7, "div", 6)(8, "div", 7), Ve(9, 8), f(), p(10, "div", 9), Ve(11, 8), f(), p(12, "div", 10), Ve(13, 8), f()()()), i & 2) {
        let a = ze(1);
        S(4), T("viewBox", n._viewBox()), S(), wt("stroke-dasharray", n._strokeCircumference(), "px")("stroke-dashoffset", n._strokeDashOffset(), "px")("stroke-width", n._circleStrokeWidth(), "%"), T("r", n._circleRadius()), S(4), Z("ngTemplateOutlet", a), S(2), Z("ngTemplateOutlet", a), S(2), Z("ngTemplateOutlet", a);
      }
    },
    dependencies: [Dn],
    styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],
    encapsulation: 2,
    changeDetection: 0
  });
  let o = e;
  return o;
})();
var Mo = (() => {
  class o {
    static \u0275fac = function(t) {
      return new (t || o);
    };
    static \u0275cmp = b({
      type: o,
      selectors: [["app-project-type-row-form"]],
      standalone: !0,
      features: [_],
      decls: 2,
      vars: 0,
      template: function(t, i) {
        t & 1 && (p(0, "p"), C(1, "project-type-row-form works!"), f());
      }
    });
  }

  return o;
})();

function La(o, e) {
}

var Jt = class {
  constructor() {
    this.role = "dialog", this.panelClass = "", this.hasBackdrop = !0, this.backdropClass = "", this.disableClose = !1, this.width = "", this.height = "", this.data = null, this.ariaDescribedBy = null, this.ariaLabelledBy = null, this.ariaLabel = null, this.ariaModal = !0, this.autoFocus = "first-tabbable", this.restoreFocus = !0, this.closeOnNavigation = !0, this.closeOnDestroy = !0, this.closeOnOverlayDetachments = !0;
  }
};
var Ki = (() => {
  let e = class e extends me {
    constructor(t, i, n, a, s, c, u, l) {
      super(), this._elementRef = t, this._focusTrapFactory = i, this._config = a, this._interactivityChecker = s, this._ngZone = c, this._overlayRef = u, this._focusMonitor = l, this._platform = I(N), this._focusTrap = null, this._elementFocusedBeforeDialogWasOpened = null, this._closeInteractionType = null, this._ariaLabelledByQueue = [], this._changeDetectorRef = I(Q), this._injector = I($), this._isDestroyed = !1, this.attachDomPortal = m => {
        this._portalOutlet.hasAttached();
        let D = this._portalOutlet.attachDomPortal(m);
        return this._contentAttached(), D;
      }, this._document = n, this._config.ariaLabelledBy && this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }

    _addAriaLabelledBy(t) {
      this._ariaLabelledByQueue.push(t), this._changeDetectorRef.markForCheck();
    }

    _removeAriaLabelledBy(t) {
      let i = this._ariaLabelledByQueue.indexOf(t);
      i > -1 && (this._ariaLabelledByQueue.splice(i, 1), this._changeDetectorRef.markForCheck());
    }

    _contentAttached() {
      this._initializeFocusTrap(), this._handleBackdropClicks(), this._captureInitialFocus();
    }

    _captureInitialFocus() {
      this._trapFocus();
    }

    ngOnDestroy() {
      this._isDestroyed = !0, this._restoreFocus();
    }

    attachComponentPortal(t) {
      this._portalOutlet.hasAttached();
      let i = this._portalOutlet.attachComponentPortal(t);
      return this._contentAttached(), i;
    }

    attachTemplatePortal(t) {
      this._portalOutlet.hasAttached();
      let i = this._portalOutlet.attachTemplatePortal(t);
      return this._contentAttached(), i;
    }

    _recaptureFocus() {
      this._containsFocus() || this._trapFocus();
    }

    _forceFocus(t, i) {
      this._interactivityChecker.isFocusable(t) || (t.tabIndex = -1, this._ngZone.runOutsideAngular(() => {
        let n = () => {
          t.removeEventListener("blur", n), t.removeEventListener("mousedown", n), t.removeAttribute("tabindex");
        };
        t.addEventListener("blur", n), t.addEventListener("mousedown", n);
      })), t.focus(i);
    }

    _focusByCssSelector(t, i) {
      let n = this._elementRef.nativeElement.querySelector(t);
      n && this._forceFocus(n, i);
    }

    _trapFocus() {
      this._isDestroyed || yt(() => {
        let t = this._elementRef.nativeElement;
        switch (this._config.autoFocus) {
          case!1:
          case"dialog":
            this._containsFocus() || t.focus();
            break;
          case!0:
          case"first-tabbable":
            this._focusTrap?.focusInitialElement() || this._focusDialogContainer();
            break;
          case"first-heading":
            this._focusByCssSelector("h1, h2, h3, h4, h5, h6, [role=\"heading\"]");
            break;
          default:
            this._focusByCssSelector(this._config.autoFocus);
            break;
        }
      }, { injector: this._injector });
    }

    _restoreFocus() {
      let t = this._config.restoreFocus, i = null;
      if (typeof t == "string" ? i = this._document.querySelector(t) : typeof t == "boolean" ? i = t ? this._elementFocusedBeforeDialogWasOpened : null : t && (i = t), this._config.restoreFocus && i && typeof i.focus == "function") {
        let n = _e(), a = this._elementRef.nativeElement;
        (!n || n === this._document.body || n === a || a.contains(n)) && (this._focusMonitor ? (this._focusMonitor.focusVia(i, this._closeInteractionType), this._closeInteractionType = null) : i.focus());
      }
      this._focusTrap && this._focusTrap.destroy();
    }

    _focusDialogContainer() {
      this._elementRef.nativeElement.focus && this._elementRef.nativeElement.focus();
    }

    _containsFocus() {
      let t = this._elementRef.nativeElement, i = _e();
      return t === i || t.contains(i);
    }

    _initializeFocusTrap() {
      this._platform.isBrowser && (this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement), this._document && (this._elementFocusedBeforeDialogWasOpened = _e()));
    }

    _handleBackdropClicks() {
      this._overlayRef.backdropClick().subscribe(() => {
        this._config.disableClose && this._recaptureFocus();
      });
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(y), d(se), d(E, 8), d(Jt), d(Gt), d(k), d(Ot), d(mt));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["cdk-dialog-container"]],
    viewQuery: function(i, n) {
      if (i & 1 && rt(Kt, 7), i & 2) {
        let a;
        z(a = H()) && (n._portalOutlet = a.first);
      }
    },
    hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
    hostVars: 6,
    hostBindings: function(i, n) {
      i & 2 && T("id", n._config.id || null)("role", n._config.role)("aria-modal", n._config.ariaModal)("aria-labelledby", n._config.ariaLabel ? null : n._ariaLabelledByQueue[0])("aria-label", n._config.ariaLabel)("aria-describedby", n._config.ariaDescribedBy || null);
    },
    standalone: !0,
    features: [st, _],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function(i, n) {
      i & 1 && K(0, La, 0, 0, "ng-template", 0);
    },
    dependencies: [Kt],
    styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],
    encapsulation: 2
  });
  let o = e;
  return o;
})(), Te = class {
  constructor(e, r) {
    this.overlayRef = e, this.config = r, this.closed = new g, this.disableClose = r.disableClose, this.backdropClick = e.backdropClick(), this.keydownEvents = e.keydownEvents(), this.outsidePointerEvents = e.outsidePointerEvents(), this.id = r.id, this.keydownEvents.subscribe(t => {
      t.keyCode === 27 && !this.disableClose && !gt(t) && (t.preventDefault(), this.close(void 0, { focusOrigin: "keyboard" }));
    }), this.backdropClick.subscribe(() => {
      this.disableClose || this.close(void 0, { focusOrigin: "mouse" });
    }), this._detachSubscription = e.detachments().subscribe(() => {
      r.closeOnOverlayDetachments !== !1 && this.close();
    });
  }

  close(e, r) {
    if (this.containerInstance) {
      let t = this.closed;
      this.containerInstance._closeInteractionType = r?.focusOrigin || "program", this._detachSubscription.unsubscribe(), this.overlayRef.dispose(), t.next(e), t.complete(), this.componentInstance = this.containerInstance = null;
    }
  }

  updatePosition() {
    return this.overlayRef.updatePosition(), this;
  }

  updateSize(e = "", r = "") {
    return this.overlayRef.updateSize({ width: e, height: r }), this;
  }

  addPanelClass(e) {
    return this.overlayRef.addPanelClass(e), this;
  }

  removePanelClass(e) {
    return this.overlayRef.removePanelClass(e), this;
  }
}, Ba = new v("DialogScrollStrategy", {
  providedIn: "root", factory: () => {
    let o = I(_t);
    return () => o.scrollStrategies.block();
  }
}), Va = new v("DialogData"), za = new v("DefaultDialogConfig");
var Ha = 0, To = (() => {
  let e = class e {
    get openDialogs() {
      return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }

    get afterOpened() {
      return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }

    constructor(t, i, n, a, s, c) {
      this._overlay = t, this._injector = i, this._defaultOptions = n, this._parentDialog = a, this._overlayContainer = s, this._openDialogsAtThisLevel = [], this._afterAllClosedAtThisLevel = new g, this._afterOpenedAtThisLevel = new g, this._ariaHiddenElements = new Map, this.afterAllClosed = Pe(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(at(void 0))), this._scrollStrategy = c;
    }

    open(t, i) {
      let n = this._defaultOptions || new Jt;
      i = w(w({}, n), i), i.id = i.id || `cdk-dialog-${Ha++}`, i.id && this.getDialogById(i.id);
      let a = this._getOverlayConfig(i), s = this._overlay.create(a), c = new Te(s, i),
        u = this._attachContainer(s, c, i);
      return c.containerInstance = u, this._attachDialogContent(t, c, u, i), this.openDialogs.length || this._hideNonDialogContentFromAssistiveTechnology(), this.openDialogs.push(c), c.closed.subscribe(() => this._removeOpenDialog(c, !0)), this.afterOpened.next(c), c;
    }

    closeAll() {
      Xi(this.openDialogs, t => t.close());
    }

    getDialogById(t) {
      return this.openDialogs.find(i => i.id === t);
    }

    ngOnDestroy() {
      Xi(this._openDialogsAtThisLevel, t => {
        t.config.closeOnDestroy === !1 && this._removeOpenDialog(t, !1);
      }), Xi(this._openDialogsAtThisLevel, t => t.close()), this._afterAllClosedAtThisLevel.complete(), this._afterOpenedAtThisLevel.complete(), this._openDialogsAtThisLevel = [];
    }

    _getOverlayConfig(t) {
      let i = new qt({
        positionStrategy: t.positionStrategy || this._overlay.position().global().centerHorizontally().centerVertically(),
        scrollStrategy: t.scrollStrategy || this._scrollStrategy(),
        panelClass: t.panelClass,
        hasBackdrop: t.hasBackdrop,
        direction: t.direction,
        minWidth: t.minWidth,
        minHeight: t.minHeight,
        maxWidth: t.maxWidth,
        maxHeight: t.maxHeight,
        width: t.width,
        height: t.height,
        disposeOnNavigation: t.closeOnNavigation
      });
      return t.backdropClass && (i.backdropClass = t.backdropClass), i;
    }

    _attachContainer(t, i, n) {
      let a = n.injector || n.viewContainerRef?.injector,
        s = [{ provide: Jt, useValue: n }, { provide: Te, useValue: i }, { provide: Ot, useValue: t }], c;
      n.container ? typeof n.container == "function" ? c = n.container : (c = n.container.type, s.push(...n.container.providers(n))) : c = Ki;
      let u = new le(c, n.viewContainerRef, $.create({
        parent: a || this._injector,
        providers: s
      }), n.componentFactoryResolver);
      return t.attach(u).instance;
    }

    _attachDialogContent(t, i, n, a) {
      if (t instanceof Dt) {
        let s = this._createInjector(a, i, n, void 0), c = { $implicit: a.data, dialogRef: i };
        a.templateContext && (c = w(w({}, c), typeof a.templateContext == "function" ? a.templateContext() : a.templateContext)), n.attachTemplatePortal(new St(t, null, c, s));
      } else {
        let s = this._createInjector(a, i, n, this._injector),
          c = n.attachComponentPortal(new le(t, a.viewContainerRef, s, a.componentFactoryResolver));
        i.componentRef = c, i.componentInstance = c.instance;
      }
    }

    _createInjector(t, i, n, a) {
      let s = t.injector || t.viewContainerRef?.injector,
        c = [{ provide: Va, useValue: t.data }, { provide: Te, useValue: i }];
      return t.providers && (typeof t.providers == "function" ? c.push(...t.providers(i, t, n)) : c.push(...t.providers)), t.direction && (!s || !s.get(Et, null, { optional: !0 })) && c.push({
        provide: Et,
        useValue: { value: t.direction, change: ot() }
      }), $.create({ parent: s || a, providers: c });
    }

    _removeOpenDialog(t, i) {
      let n = this.openDialogs.indexOf(t);
      n > -1 && (this.openDialogs.splice(n, 1), this.openDialogs.length || (this._ariaHiddenElements.forEach((a, s) => {
        a ? s.setAttribute("aria-hidden", a) : s.removeAttribute("aria-hidden");
      }), this._ariaHiddenElements.clear(), i && this._getAfterAllClosed().next()));
    }

    _hideNonDialogContentFromAssistiveTechnology() {
      let t = this._overlayContainer.getContainerElement();
      if (t.parentElement) {
        let i = t.parentElement.children;
        for (let n = i.length - 1; n > -1; n--) {
          let a = i[n];
          a !== t && a.nodeName !== "SCRIPT" && a.nodeName !== "STYLE" && !a.hasAttribute("aria-live") && (this._ariaHiddenElements.set(a, a.getAttribute("aria-hidden")), a.setAttribute("aria-hidden", "true"));
        }
      }
    }

    _getAfterAllClosed() {
      let t = this._parentDialog;
      return t ? t._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(_t), h($), h(za, 8), h(e, 12), h(he), h(Ba));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();

function Xi(o, e) {
  let r = o.length;
  for (; r--;) e(o[r]);
}

function Ua(o, e) {
}

var Re = class {
  constructor() {
    this.role = "dialog", this.panelClass = "", this.hasBackdrop = !0, this.backdropClass = "", this.disableClose = !1, this.width = "", this.height = "", this.data = null, this.ariaDescribedBy = null, this.ariaLabelledBy = null, this.ariaLabel = null, this.ariaModal = !0, this.autoFocus = "first-tabbable", this.restoreFocus = !0, this.delayFocusTrap = !0, this.closeOnNavigation = !0;
  }
}, Qi = "mdc-dialog--open", Ro = "mdc-dialog--opening", Oo = "mdc-dialog--closing", Wa = 150, Ya = 75, $a = (() => {
  let e = class e extends Ki {
    constructor(t, i, n, a, s, c, u, l, m) {
      super(t, i, n, a, s, c, u, m), this._animationMode = l, this._animationStateChanged = new F, this._animationsEnabled = this._animationMode !== "NoopAnimations", this._actionSectionCount = 0, this._hostElement = this._elementRef.nativeElement, this._enterAnimationDuration = this._animationsEnabled ? Po(this._config.enterAnimationDuration) ?? Wa : 0, this._exitAnimationDuration = this._animationsEnabled ? Po(this._config.exitAnimationDuration) ?? Ya : 0, this._animationTimer = null, this._finishDialogOpen = () => {
        this._clearAnimationClasses(), this._openAnimationDone(this._enterAnimationDuration);
      }, this._finishDialogClose = () => {
        this._clearAnimationClasses(), this._animationStateChanged.emit({
          state: "closed",
          totalTime: this._exitAnimationDuration
        });
      };
    }

    _contentAttached() {
      super._contentAttached(), this._startOpenAnimation();
    }

    _startOpenAnimation() {
      this._animationStateChanged.emit({
        state: "opening",
        totalTime: this._enterAnimationDuration
      }), this._animationsEnabled ? (this._hostElement.style.setProperty(Fo, `${this._enterAnimationDuration}ms`), this._requestAnimationFrame(() => this._hostElement.classList.add(Ro, Qi)), this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen)) : (this._hostElement.classList.add(Qi), Promise.resolve().then(() => this._finishDialogOpen()));
    }

    _startExitAnimation() {
      this._animationStateChanged.emit({
        state: "closing",
        totalTime: this._exitAnimationDuration
      }), this._hostElement.classList.remove(Qi), this._animationsEnabled ? (this._hostElement.style.setProperty(Fo, `${this._exitAnimationDuration}ms`), this._requestAnimationFrame(() => this._hostElement.classList.add(Oo)), this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose)) : Promise.resolve().then(() => this._finishDialogClose());
    }

    _updateActionSectionCount(t) {
      this._actionSectionCount += t, this._changeDetectorRef.markForCheck();
    }

    _clearAnimationClasses() {
      this._hostElement.classList.remove(Ro, Oo);
    }

    _waitForAnimationToComplete(t, i) {
      this._animationTimer !== null && clearTimeout(this._animationTimer), this._animationTimer = setTimeout(i, t);
    }

    _requestAnimationFrame(t) {
      this._ngZone.runOutsideAngular(() => {
        typeof requestAnimationFrame == "function" ? requestAnimationFrame(t) : t();
      });
    }

    _captureInitialFocus() {
      this._config.delayFocusTrap || this._trapFocus();
    }

    _openAnimationDone(t) {
      this._config.delayFocusTrap && this._trapFocus(), this._animationStateChanged.next({
        state: "opened",
        totalTime: t
      });
    }

    ngOnDestroy() {
      super.ngOnDestroy(), this._animationTimer !== null && clearTimeout(this._animationTimer);
    }

    attachComponentPortal(t) {
      let i = super.attachComponentPortal(t);
      return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"), i;
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(d(y), d(se), d(E, 8), d(Re), d(Gt), d(k), d(Ot), d(J, 8), d(mt));
  }, e.\u0275cmp = b({
    type: e,
    selectors: [["mat-dialog-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
    hostVars: 10,
    hostBindings: function(i, n) {
      i & 2 && (gi("id", n._config.id), T("aria-modal", n._config.ariaModal)("role", n._config.role)("aria-labelledby", n._config.ariaLabel ? null : n._ariaLabelledByQueue[0])("aria-label", n._config.ariaLabel)("aria-describedby", n._config.ariaDescribedBy || null), L("_mat-animation-noopable", !n._animationsEnabled)("mat-mdc-dialog-container-with-actions", n._actionSectionCount > 0));
    },
    standalone: !0,
    features: [st, _],
    decls: 3,
    vars: 0,
    consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
    template: function(i, n) {
      i & 1 && (p(0, "div", 0)(1, "div", 1), K(2, Ua, 0, 0, "ng-template", 2), f()());
    },
    dependencies: [Kt],
    styles: [".mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, 4px);background-color:var(--mdc-dialog-container-color, white)}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87));font-family:var(--mdc-dialog-subhead-font, inherit);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6));font-family:var(--mdc-dialog-supporting-text-font, inherit);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}"],
    encapsulation: 2
  });
  let o = e;
  return o;
})(), Fo = "--mat-dialog-transition-duration";

function Po(o) {
  return o == null ? null : typeof o == "number" ? o : o.endsWith("ms") ? re(o.substring(0, o.length - 2)) : o.endsWith("s") ? re(o.substring(0, o.length - 1)) * 1e3 : o === "0" ? 0 : null;
}

var ci = function(o) {
  return o[o.OPEN = 0] = "OPEN", o[o.CLOSING = 1] = "CLOSING", o[o.CLOSED = 2] = "CLOSED", o;
}(ci || {}), Oe = class {
  constructor(e, r, t) {
    this._ref = e, this._containerInstance = t, this._afterOpened = new g, this._beforeClosed = new g, this._state = ci.OPEN, this.disableClose = r.disableClose, this.id = e.id, e.addPanelClass("mat-mdc-dialog-panel"), t._animationStateChanged.pipe(M(i => i.state === "opened"), dt(1)).subscribe(() => {
      this._afterOpened.next(), this._afterOpened.complete();
    }), t._animationStateChanged.pipe(M(i => i.state === "closed"), dt(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout), this._finishDialogClose();
    }), e.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result), this._beforeClosed.complete(), this._finishDialogClose();
    }), ht(this.backdropClick(), this.keydownEvents().pipe(M(i => i.keyCode === 27 && !this.disableClose && !gt(i)))).subscribe(i => {
      this.disableClose || (i.preventDefault(), Za(this, i.type === "keydown" ? "keyboard" : "mouse"));
    });
  }

  close(e) {
    this._result = e, this._containerInstance._animationStateChanged.pipe(M(r => r.state === "closing"), dt(1)).subscribe(r => {
      this._beforeClosed.next(e), this._beforeClosed.complete(), this._ref.overlayRef.detachBackdrop(), this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), r.totalTime + 100);
    }), this._state = ci.CLOSING, this._containerInstance._startExitAnimation();
  }

  afterOpened() {
    return this._afterOpened;
  }

  afterClosed() {
    return this._ref.closed;
  }

  beforeClosed() {
    return this._beforeClosed;
  }

  backdropClick() {
    return this._ref.backdropClick;
  }

  keydownEvents() {
    return this._ref.keydownEvents;
  }

  updatePosition(e) {
    let r = this._ref.config.positionStrategy;
    return e && (e.left || e.right) ? e.left ? r.left(e.left) : r.right(e.right) : r.centerHorizontally(), e && (e.top || e.bottom) ? e.top ? r.top(e.top) : r.bottom(e.bottom) : r.centerVertically(), this._ref.updatePosition(), this;
  }

  updateSize(e = "", r = "") {
    return this._ref.updateSize(e, r), this;
  }

  addPanelClass(e) {
    return this._ref.addPanelClass(e), this;
  }

  removePanelClass(e) {
    return this._ref.removePanelClass(e), this;
  }

  getState() {
    return this._state;
  }

  _finishDialogClose() {
    this._state = ci.CLOSED, this._ref.close(this._result, { focusOrigin: this._closeInteractionType }), this.componentInstance = null;
  }
};

function Za(o, e, r) {
  return o._closeInteractionType = e, o.close(r);
}

var qi = new v("MatMdcDialogData"), Ga = new v("mat-mdc-dialog-default-options"),
  Xa = new v("mat-mdc-dialog-scroll-strategy", {
    providedIn: "root", factory: () => {
      let o = I(_t);
      return () => o.scrollStrategies.block();
    }
  });
var Ka = 0, di = (() => {
  let e = class e {
    get openDialogs() {
      return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }

    get afterOpened() {
      return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }

    _getAfterAllClosed() {
      let t = this._parentDialog;
      return t ? t._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
    }

    constructor(t, i, n, a, s, c, u, l) {
      this._overlay = t, this._defaultOptions = a, this._scrollStrategy = s, this._parentDialog = c, this._openDialogsAtThisLevel = [], this._afterAllClosedAtThisLevel = new g, this._afterOpenedAtThisLevel = new g, this.dialogConfigClass = Re, this.afterAllClosed = Pe(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(at(void 0))), this._dialog = i.get(To), this._dialogRefConstructor = Oe, this._dialogContainerType = $a, this._dialogDataToken = qi;
    }

    open(t, i) {
      let n;
      i = w(w({}, this._defaultOptions || new Re), i), i.id = i.id || `mat-mdc-dialog-${Ka++}`, i.scrollStrategy = i.scrollStrategy || this._scrollStrategy();
      let a = this._dialog.open(t, zt(w({}, i), {
        positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
        disableClose: !0,
        closeOnDestroy: !1,
        closeOnOverlayDetachments: !1,
        container: {
          type: this._dialogContainerType,
          providers: () => [{ provide: this.dialogConfigClass, useValue: i }, { provide: Jt, useValue: i }]
        },
        templateContext: () => ({ dialogRef: n }),
        providers: (s, c, u) => (n = new this._dialogRefConstructor(s, i, u), n.updatePosition(i?.position), [{
          provide: this._dialogContainerType,
          useValue: u
        }, { provide: this._dialogDataToken, useValue: c.data }, { provide: this._dialogRefConstructor, useValue: n }])
      }));
      return n.componentRef = a.componentRef, n.componentInstance = a.componentInstance, this.openDialogs.push(n), this.afterOpened.next(n), n.afterClosed().subscribe(() => {
        let s = this.openDialogs.indexOf(n);
        s > -1 && (this.openDialogs.splice(s, 1), this.openDialogs.length || this._getAfterAllClosed().next());
      }), n;
    }

    closeAll() {
      this._closeDialogs(this.openDialogs);
    }

    getDialogById(t) {
      return this.openDialogs.find(i => i.id === t);
    }

    ngOnDestroy() {
      this._closeDialogs(this._openDialogsAtThisLevel), this._afterAllClosedAtThisLevel.complete(), this._afterOpenedAtThisLevel.complete();
    }

    _closeDialogs(t) {
      let i = t.length;
      for (; i--;) t[i].close();
    }
  };
  e.\u0275fac = function(i) {
    return new (i || e)(h(_t), h($), h(He, 8), h(Ga, 8), h(Xa), h(e, 12), h(he), h(J, 8));
  }, e.\u0275prov = x({ token: e, factory: e.\u0275fac, providedIn: "root" });
  let o = e;
  return o;
})();
var jo = (() => {
  class o {
    data;
    dialogRef;

    constructor(r, t) {
      this.data = r, this.dialogRef = t;
    }

    confirm() {
      this.dialogRef.close(!0);
    }

    cancel() {
      this.dialogRef.close(!1);
    }

    static \u0275fac = function(t) {
      return new (t || o)(d(qi), d(Oe));
    };
    static \u0275cmp = b({
      type: o,
      selectors: [["app-confirmation-dialog"]],
      standalone: !0,
      features: [_],
      decls: 12,
      vars: 4,
      consts: [[1, "flex", "flex-col"], [1, "p-5", "border-b"], [1, "text-3xl", "!m-0"], [1, "p-5"], [1, "p-5", "border-t", "flex", "justify-end", "gap-5"], ["mat-flat-button", "", "color", "warn", 3, "click"], ["mat-flat-button", "", 3, "click"]],
      template: function(t, i) {
        if (t & 1 && (p(0, "div", 0)(1, "div", 1)(2, "p", 2), C(3), f()(), p(4, "div", 3)(5, "p"), C(6), f()(), p(7, "div", 4)(8, "button", 5), j("click", function() {
          return i.confirm();
        }), C(9), f(), p(10, "button", 6), j("click", function() {
          return i.cancel();
        }), C(11), f()()()), t & 2) {
          let n, a, s, c;
          S(3), Wt((n = i.data.title) !== null && n !== void 0 ? n : "Confirmare"), S(3), Wt((a = i.data.message) !== null && a !== void 0 ? a : "Sunte\u021Bi sigur c\u0103 dori\u021Bi s\u0103 efectua\u021Bi ac\u021Biunea?"), S(3), Wt((s = i.data.confirmButtonText) !== null && s !== void 0 ? s : "Da"), S(2), Wt((c = i.data.cancelButtonText) !== null && c !== void 0 ? c : "Nu");
        }
      },
      dependencies: [ce]
    });
  }

  return o;
})();
var No = (() => {
  class o {
    dialog;

    constructor(r) {
      this.dialog = r;
    }

    openDenyConfirmationDialog() {
      this.dialog.open(jo, {
        maxWidth: "100%",
        width: "800px",
        disableClose: !0,
        data: { message: "Sunte\u021Bi sigur c\u0103 dori\u021Bi s\u0103 anula\u021Bi? Toate modific\u0103rile vor fi pierdute." }
      }).afterClosed().subscribe(r => {
        r && this.dialog.closeAll();
      });
    }

    static \u0275fac = function(t) {
      return new (t || o)(d(di));
    };
    static \u0275cmp = b({
      type: o,
      selectors: [["app-create-project-type-row-dialog"]],
      standalone: !0,
      features: [_],
      decls: 11,
      vars: 0,
      consts: [[1, "flex", "flex-col"], [1, "p-5", "border-b"], [1, "text-3xl", "!m-0"], [1, "p-5"], [1, "p-5", "border-t", "flex", "justify-end", "gap-5"], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "warn", 3, "click"]],
      template: function(t, i) {
        t & 1 && (p(0, "div", 0)(1, "div", 1)(2, "p", 2), C(3, "Creeaz\u0103 proiect"), f()(), p(4, "div", 3), P(5, "app-project-type-row-form"), f(), p(6, "div", 4)(7, "button", 5), C(8, "Salveaz\u0103"), f(), p(9, "button", 6), j("click", function() {
          return i.openDenyConfirmationDialog();
        }), C(10, "Anuleaz\u0103"), f()()());
      },
      dependencies: [Mo, ce]
    });
  }

  return o;
})();
var Lo = { server: "https://dev.instalcorp-planner.macesandrei.com" };
var Bo = (() => {
  class o {
    http;
    _apiUrl;

    constructor(r) {
      this.http = r, this._apiUrl = Lo.server;
    }

    get(r, t = {}, i = {}, n = {}) {
      return this.http.get(`${this._apiUrl}${r}`, w({ params: t, headers: i }, n));
    }

    post(r, t = {}, i = {}, n = {}) {
      return this.http.post(`${this._apiUrl}${r}`, t, { params: i, headers: n });
    }

    put(r, t = {}, i = {}) {
      return this.http.put(`${this._apiUrl}${r}`, t, { params: i });
    }

    delete(r, t = {}) {
      return this.http.delete(`${this._apiUrl}${r}`, { params: t });
    }

    static \u0275fac = function(t) {
      return new (t || o)(h(We));
    };
    static \u0275prov = x({ token: o, factory: o.\u0275fac, providedIn: "root" });
  }

  return o;
})();
var Vo = (() => {
  class o {
    apiService;
    _baseURL = "/project-type";

    constructor(r) {
      this.apiService = r;
    }

    getIssueTypes() {
      return this.apiService.get(this._baseURL);
    }

    static \u0275fac = function(t) {
      return new (t || o)(h(Bo));
    };
    static \u0275prov = x({ token: o, factory: o.\u0275fac, providedIn: "root" });
  }

  return o;
})();

function Ja(o, e) {
  if (o & 1 && P(0, "app-project-type-row", 12), o & 2) {
    let r = e.$implicit;
    Z("projectType", r);
  }
}

function ts(o, e) {
  if (o & 1 && (p(0, "div", 10), K(1, Ja, 1, 1, "app-project-type-row", 11), f()), o & 2) {
    let r = nt();
    S(), Z("ngForOf", r.projectTypes);
  }
}

function es(o, e) {
  o & 1 && (p(0, "div", 13), P(1, "mat-spinner", 14), f()), o & 2 && (S(), Z("diameter", 80));
}

var zo = (() => {
  class o {
    projectTypeController;
    dialog;
    projectTypes;
    isLoading = !0;

    constructor(r, t) {
      this.projectTypeController = r, this.dialog = t;
    }

    ngOnInit() {
      this.getIssueTypes();
    }

    getIssueTypes() {
      this.isLoading = !0, this.projectTypeController.getIssueTypes().subscribe({
        next: r => {
          this.projectTypes = r, this.isLoading = !1;
        }, error: r => {
          console.error(r), this.isLoading = !1;
        }
      });
    }

    openCreateProjectTypeDialog() {
      this.dialog.open(No, { maxWidth: "100%", width: "800px", disableClose: !0 });
    }

    static \u0275fac = function(t) {
      return new (t || o)(d(Vo), d(di));
    };
    static \u0275cmp = b({
      type: o,
      selectors: [["app-project-types"]],
      hostAttrs: [1, "flex-grow"],
      standalone: !0,
      features: [_],
      decls: 13,
      vars: 2,
      consts: [[1, "h-full", "w-full", "p-5"], [1, "flex", "flex-col", "h-full", "max-w-[1200px]", "mx-auto"], [1, "flex", "justify-between", "items-center"], [1, "text-3xl", "font-bold"], [1, "flex", "gap-5", "items-center"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "ml-2"], [1, "flex-grow"], ["class", "flex flex-col gap-5", 4, "ngIf"], ["class", "w-full h-full flex items-center justify-center", 4, "ngIf"], [1, "flex", "flex-col", "gap-5"], [3, "projectType", 4, "ngFor", "ngForOf"], [3, "projectType"], [1, "w-full", "h-full", "flex", "items-center", "justify-center"], [3, "diameter"]],
      template: function(t, i) {
        t & 1 && (p(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3), C(4, "Proiecte"), f(), p(5, "div", 4)(6, "button", 5), j("click", function() {
          return i.openCreateProjectTypeDialog();
        }), C(7, " Creeaz\u0103 proiect "), p(8, "mat-icon", 6), C(9, "add"), f()()()(), p(10, "div", 7), K(11, ts, 2, 1, "div", 8)(12, es, 2, 1, "div", 9), f()()()), t & 2 && (S(11), Z("ngIf", !i.isLoading), S(), Z("ngIf", i.isLoading));
      },
      dependencies: [ko, Cn, En, Ao, ce, de]
    });
  }

  return o;
})();
var is = [{
  path: "",
  component: oo,
  children: [{ path: "", redirectTo: "calendar", pathMatch: "full" }, {
    path: "calendar",
    component: Mn
  }, { path: "project-types", component: zo }]
}], Ho = (() => {
  class o {
    static \u0275fac = function(t) {
      return new (t || o);
    };
    static \u0275mod = Y({ type: o });
    static \u0275inj = W({ imports: [vi.forChild(is), vi] });
  }

  return o;
})();
var Fh = (() => {
  class o {
    static \u0275fac = function(t) {
      return new (t || o);
    };
    static \u0275mod = Y({ type: o });
    static \u0275inj = W({ imports: [Ue, Ho] });
  }

  return o;
})();
export { Fh as DashboardModule };
