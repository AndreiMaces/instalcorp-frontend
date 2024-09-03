import "./polyfills.server.mjs";
import { a as ye, b as Ze } from "./chunk-5XUXGTUW.mjs";

var Vo = null, Vn = !1, jo = 1, Bn = Symbol("SIGNAL");

function _(e) {
  let t = Vo;
  return Vo = e, t;
}

function Ka() {
  return Vo;
}

function tp() {
  return Vn;
}

var Hn = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {
  },
  consumerMarkedDirty: () => {
  },
  consumerOnSignalRead: () => {
  }
};

function np(e) {
  if (!(Uo(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === jo)) {
    if (!e.producerMustRecompute(e) && !Un(e)) {
      e.dirty = !1, e.lastCleanEpoch = jo;
      return;
    }
    e.producerRecomputeValue(e), e.dirty = !1, e.lastCleanEpoch = jo;
  }
}

function rp(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = Vn;
  Vn = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || Xa(n);
  } finally {
    Vn = t;
  }
}

function Xa(e) {
  e.dirty = !0, rp(e), e.consumerMarkedDirty?.(e);
}

function $n(e) {
  return e && (e.nextProducerIndex = 0), _(e);
}

function Ho(e, t) {
  if (_(t), !(!e || e.producerNode === void 0 || e.producerIndexOfThis === void 0 || e.producerLastReadVersion === void 0)) {
    if (Uo(e)) for (let n = e.nextProducerIndex; n < e.producerNode.length; n++) $o(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex;) e.producerNode.pop(), e.producerLastReadVersion.pop(), e.producerIndexOfThis.pop();
  }
}

function Un(e) {
  Go(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t], r = e.producerLastReadVersion[t];
    if (r !== n.version || (np(n), r !== n.version)) return !0;
  }
  return !1;
}

function Gn(e) {
  if (Go(e), Uo(e)) for (let t = 0; t < e.producerNode.length; t++) $o(e.producerNode[t], e.producerIndexOfThis[t]);
  e.producerNode.length = e.producerLastReadVersion.length = e.producerIndexOfThis.length = 0, e.liveConsumerNode && (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}

function $o(e, t) {
  if (op(e), e.liveConsumerNode.length === 1 && ip(e)) for (let r = 0; r < e.producerNode.length; r++) $o(e.producerNode[r], e.producerIndexOfThis[r]);
  let n = e.liveConsumerNode.length - 1;
  if (e.liveConsumerNode[t] = e.liveConsumerNode[n], e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n], e.liveConsumerNode.length--, e.liveConsumerIndexOfThis.length--, t < e.liveConsumerNode.length) {
    let r = e.liveConsumerIndexOfThis[t], o = e.liveConsumerNode[t];
    Go(o), o.producerIndexOfThis[r] = t;
  }
}

function Uo(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}

function Go(e) {
  e.producerNode ??= [], e.producerIndexOfThis ??= [], e.producerLastReadVersion ??= [];
}

function op(e) {
  e.liveConsumerNode ??= [], e.liveConsumerIndexOfThis ??= [];
}

function ip(e) {
  return e.producerNode !== void 0;
}

function sp() {
  throw new Error;
}

var ap = sp;

function Ja(e) {
  ap = e;
}

function eu(e, t, n) {
  let r = Object.create(up);
  n && (r.consumerAllowSignalWrites = !0), r.fn = e, r.schedule = t;
  let o = u => {
    r.cleanupFn = u;
  };

  function i(u) {
    return u.fn === null && u.schedule === null;
  }

  function s(u) {
    i(u) || (Gn(u), u.cleanupFn(), u.fn = null, u.schedule = null, u.cleanupFn = Bo);
  }

  let a = () => {
    if (r.fn === null) return;
    if (tp()) throw new Error("Schedulers cannot synchronously execute watches while scheduling.");
    if (r.dirty = !1, r.hasRun && !Un(r)) return;
    r.hasRun = !0;
    let u = $n(r);
    try {
      r.cleanupFn(), r.cleanupFn = Bo, r.fn(o);
    } finally {
      Ho(r, u);
    }
  };
  return r.ref = { notify: () => Xa(r), run: a, cleanup: () => r.cleanupFn(), destroy: () => s(r), [Bn]: r }, r.ref;
}

var Bo = () => {
}, up = Ze(ye({}, Hn), {
  consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !1, consumerMarkedDirty: e => {
    e.schedule !== null && e.schedule(e.ref);
  }, hasRun: !1, cleanupFn: Bo
});

function g(e) {
  return typeof e == "function";
}

function wt(e) {
  let n = e(r => {
    Error.call(r), r.stack = new Error().stack;
  });
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}

var zn = wt(e => function(n) {
  e(this), this.message = n ? `${n.length} errors occurred during unsubscription:
${n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = n;
});

function Qe(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}

var B = class e {
  constructor(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }

  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n) if (this._parentage = null, Array.isArray(n)) for (let i of n) i.remove(this); else n.remove(this);
      let { initialTeardown: r } = this;
      if (g(r)) try {
        r();
      } catch (i) {
        t = i instanceof zn ? i.errors : [i];
      }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o) try {
          tu(i);
        } catch (s) {
          t = t ?? [], s instanceof zn ? t = [...t, ...s.errors] : t.push(s);
        }
      }
      if (t) throw new zn(t);
    }
  }

  add(t) {
    var n;
    if (t && t !== this) if (this.closed) tu(t); else {
      if (t instanceof e) {
        if (t.closed || t._hasParent(this)) return;
        t._addParent(this);
      }
      (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
    }
  }

  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || Array.isArray(n) && n.includes(t);
  }

  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }

  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? this._parentage = null : Array.isArray(n) && Qe(n, t);
  }

  remove(t) {
    let { _finalizers: n } = this;
    n && Qe(n, t), t instanceof e && t._removeParent(this);
  }
};
B.EMPTY = (() => {
  let e = new B;
  return e.closed = !0, e;
})();
var zo = B.EMPTY;

function Wn(e) {
  return e instanceof B || e && "closed" in e && g(e.remove) && g(e.add) && g(e.unsubscribe);
}

function tu(e) {
  g(e) ? e() : e.unsubscribe();
}

var le = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
};
var bt = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = bt;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  }, clearTimeout(e) {
    let { delegate: t } = bt;
    return (t?.clearTimeout || clearTimeout)(e);
  }, delegate: void 0
};

function qn(e) {
  bt.setTimeout(() => {
    let { onUnhandledError: t } = le;
    if (t) t(e); else throw e;
  });
}

function Ke() {
}

var nu = Wo("C", void 0, void 0);

function ru(e) {
  return Wo("E", void 0, e);
}

function ou(e) {
  return Wo("N", e, void 0);
}

function Wo(e, t, n) {
  return { kind: e, value: t, error: n };
}

var Xe = null;

function Mt(e) {
  if (le.useDeprecatedSynchronousErrorHandling) {
    let t = !Xe;
    if (t && (Xe = { errorThrown: !1, error: null }), e(), t) {
      let { errorThrown: n, error: r } = Xe;
      if (Xe = null, n) throw r;
    }
  } else e();
}

function iu(e) {
  le.useDeprecatedSynchronousErrorHandling && Xe && (Xe.errorThrown = !0, Xe.error = e);
}

var Je = class extends B {
  constructor(t) {
    super(), this.isStopped = !1, t ? (this.destination = t, Wn(t) && t.add(this)) : this.destination = dp;
  }

  static create(t, n, r) {
    return new Te(t, n, r);
  }

  next(t) {
    this.isStopped ? Yo(ou(t), this) : this._next(t);
  }

  error(t) {
    this.isStopped ? Yo(ru(t), this) : (this.isStopped = !0, this._error(t));
  }

  complete() {
    this.isStopped ? Yo(nu, this) : (this.isStopped = !0, this._complete());
  }

  unsubscribe() {
    this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null);
  }

  _next(t) {
    this.destination.next(t);
  }

  _error(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }

  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}, cp = Function.prototype.bind;

function qo(e, t) {
  return cp.call(e, t);
}

var Zo = class {
  constructor(t) {
    this.partialObserver = t;
  }

  next(t) {
    let { partialObserver: n } = this;
    if (n.next) try {
      n.next(t);
    } catch (r) {
      Yn(r);
    }
  }

  error(t) {
    let { partialObserver: n } = this;
    if (n.error) try {
      n.error(t);
    } catch (r) {
      Yn(r);
    } else Yn(t);
  }

  complete() {
    let { partialObserver: t } = this;
    if (t.complete) try {
      t.complete();
    } catch (n) {
      Yn(n);
    }
  }
}, Te = class extends Je {
  constructor(t, n, r) {
    super();
    let o;
    if (g(t) || !t) o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 }; else {
      let i;
      this && le.useDeprecatedNextContext ? (i = Object.create(t), i.unsubscribe = () => this.unsubscribe(), o = {
        next: t.next && qo(t.next, i),
        error: t.error && qo(t.error, i),
        complete: t.complete && qo(t.complete, i)
      }) : o = t;
    }
    this.destination = new Zo(o);
  }
};

function Yn(e) {
  le.useDeprecatedSynchronousErrorHandling ? iu(e) : qn(e);
}

function lp(e) {
  throw e;
}

function Yo(e, t) {
  let { onStoppedNotification: n } = le;
  n && bt.setTimeout(() => n(e, t));
}

var dp = { closed: !0, next: Ke, error: lp, complete: Ke };
var _t = typeof Symbol == "function" && Symbol.observable || "@@observable";

function q(e) {
  return e;
}

function fp(...e) {
  return Qo(e);
}

function Qo(e) {
  return e.length === 0 ? q : e.length === 1 ? e[0] : function(n) {
    return e.reduce((r, o) => o(r), n);
  };
}

var T = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }

    lift(n) {
      let r = new e;
      return r.source = this, r.operator = n, r;
    }

    subscribe(n, r, o) {
      let i = hp(n) ? n : new Te(n, r, o);
      return Mt(() => {
        let { operator: s, source: a } = this;
        i.add(s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i));
      }), i;
    }

    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }

    forEach(n, r) {
      return r = su(r), new r((o, i) => {
        let s = new Te({
          next: a => {
            try {
              n(a);
            } catch (u) {
              i(u), s.unsubscribe();
            }
          }, error: i, complete: o
        });
        this.subscribe(s);
      });
    }

    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n);
    }

    [_t]() {
      return this;
    }

    pipe(...n) {
      return Qo(n)(this);
    }

    toPromise(n) {
      return n = su(n), new n((r, o) => {
        let i;
        this.subscribe(s => i = s, s => o(s), () => r(i));
      });
    }
  }

  return e.create = t => new e(t), e;
})();

function su(e) {
  var t;
  return (t = e ?? le.Promise) !== null && t !== void 0 ? t : Promise;
}

function pp(e) {
  return e && g(e.next) && g(e.error) && g(e.complete);
}

function hp(e) {
  return e && e instanceof Je || pp(e) && Wn(e);
}

function Ko(e) {
  return g(e?.lift);
}

function I(e) {
  return t => {
    if (Ko(t)) return t.lift(function(n) {
      try {
        return e(n, this);
      } catch (r) {
        this.error(r);
      }
    });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

function E(e, t, n, r, o) {
  return new Xo(e, t, n, r, o);
}

var Xo = class extends Je {
  constructor(t, n, r, o, i, s) {
    super(t), this.onFinalize = i, this.shouldUnsubscribe = s, this._next = n ? function(a) {
      try {
        n(a);
      } catch (u) {
        t.error(u);
      }
    } : super._next, this._error = o ? function(a) {
      try {
        o(a);
      } catch (u) {
        t.error(u);
      } finally {
        this.unsubscribe();
      }
    } : super._error, this._complete = r ? function() {
      try {
        r();
      } catch (a) {
        t.error(a);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }

  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      super.unsubscribe(), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};

function Jo() {
  return I((e, t) => {
    let n = null;
    e._refCount++;
    let r = E(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection, i = n;
      n = null, o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(r), r.closed || (n = e.connect());
  });
}

var ei = class extends T {
  constructor(t, n) {
    super(), this.source = t, this.subjectFactory = n, this._subject = null, this._refCount = 0, this._connection = null, Ko(t) && (this.lift = t.lift);
  }

  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }

  getSubject() {
    let t = this._subject;
    return (!t || t.isStopped) && (this._subject = this.subjectFactory()), this._subject;
  }

  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    this._subject = this._connection = null, t?.unsubscribe();
  }

  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new B;
      let n = this.getSubject();
      t.add(this.source.subscribe(E(n, void 0, () => {
        this._teardown(), n.complete();
      }, r => {
        this._teardown(), n.error(r);
      }, () => this._teardown()))), t.closed && (this._connection = null, t = B.EMPTY);
    }
    return t;
  }

  refCount() {
    return Jo()(this);
  }
};
var au = wt(e => function() {
  e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
});
var ve = (() => {
  class e extends T {
    constructor() {
      super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null;
    }

    lift(n) {
      let r = new Zn(this, this);
      return r.operator = n, r;
    }

    _throwIfClosed() {
      if (this.closed) throw new au;
    }

    next(n) {
      Mt(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.currentObservers || (this.currentObservers = Array.from(this.observers));
          for (let r of this.currentObservers) r.next(n);
        }
      });
    }

    error(n) {
      Mt(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.hasError = this.isStopped = !0, this.thrownError = n;
          let { observers: r } = this;
          for (; r.length;) r.shift().error(n);
        }
      });
    }

    complete() {
      Mt(() => {
        if (this._throwIfClosed(), !this.isStopped) {
          this.isStopped = !0;
          let { observers: n } = this;
          for (; n.length;) n.shift().complete();
        }
      });
    }

    unsubscribe() {
      this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
    }

    get observed() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    }

    _trySubscribe(n) {
      return this._throwIfClosed(), super._trySubscribe(n);
    }

    _subscribe(n) {
      return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
    }

    _innerSubscribe(n) {
      let { hasError: r, isStopped: o, observers: i } = this;
      return r || o ? zo : (this.currentObservers = null, i.push(n), new B(() => {
        this.currentObservers = null, Qe(i, n);
      }));
    }

    _checkFinalizedStatuses(n) {
      let { hasError: r, thrownError: o, isStopped: i } = this;
      r ? n.error(o) : i && n.complete();
    }

    asObservable() {
      let n = new T;
      return n.source = this, n;
    }
  }

  return e.create = (t, n) => new Zn(t, n), e;
})(), Zn = class extends ve {
  constructor(t, n) {
    super(), this.destination = t, this.source = n;
  }

  next(t) {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || r === void 0 || r.call(n, t);
  }

  error(t) {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || r === void 0 || r.call(n, t);
  }

  complete() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }

  _subscribe(t) {
    var n, r;
    return (r = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && r !== void 0 ? r : zo;
  }
};
var an = class extends ve {
  constructor(t) {
    super(), this._value = t;
  }

  get value() {
    return this.getValue();
  }

  _subscribe(t) {
    let n = super._subscribe(t);
    return !n.closed && t.next(this._value), n;
  }

  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return this._throwIfClosed(), r;
  }

  next(t) {
    super.next(this._value = t);
  }
};
var ti = {
  now() {
    return (ti.delegate || Date).now();
  }, delegate: void 0
};
var Qn = class extends B {
  constructor(t, n) {
    super();
  }

  schedule(t, n = 0) {
    return this;
  }
};
var un = {
  setInterval(e, t, ...n) {
    let { delegate: r } = un;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  }, clearInterval(e) {
    let { delegate: t } = un;
    return (t?.clearInterval || clearInterval)(e);
  }, delegate: void 0
};
var Tt = class extends Qn {
  constructor(t, n) {
    super(t, n), this.scheduler = t, this.work = n, this.pending = !1;
  }

  schedule(t, n = 0) {
    var r;
    if (this.closed) return this;
    this.state = t;
    let o = this.id, i = this.scheduler;
    return o != null && (this.id = this.recycleAsyncId(i, o, n)), this.pending = !0, this.delay = n, this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(i, this.id, n), this;
  }

  requestAsyncId(t, n, r = 0) {
    return un.setInterval(t.flush.bind(t, this), r);
  }

  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && un.clearInterval(n);
  }

  execute(t, n) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let r = this._execute(t, n);
    if (r) return r;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }

  _execute(t, n) {
    let r = !1, o;
    try {
      this.work(t);
    } catch (i) {
      r = !0, o = i || new Error("Scheduled action threw falsy error");
    }
    if (r) return this.unsubscribe(), o;
  }

  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: n } = this, { actions: r } = n;
      this.work = this.state = this.scheduler = null, this.pending = !1, Qe(r, this), t != null && (this.id = this.recycleAsyncId(n, t, null)), this.delay = null, super.unsubscribe();
    }
  }
};
var gp = 1, ni, ri = {};

function uu(e) {
  return e in ri ? (delete ri[e], !0) : !1;
}

var cu = {
  setImmediate(e) {
    let t = gp++;
    return ri[t] = !0, ni || (ni = Promise.resolve()), ni.then(() => uu(t) && e()), t;
  }, clearImmediate(e) {
    uu(e);
  }
};
var { setImmediate: mp, clearImmediate: yp } = cu, cn = {
  setImmediate(...e) {
    let { delegate: t } = cn;
    return (t?.setImmediate || mp)(...e);
  }, clearImmediate(e) {
    let { delegate: t } = cn;
    return (t?.clearImmediate || yp)(e);
  }, delegate: void 0
};
var Kn = class extends Tt {
  constructor(t, n) {
    super(t, n), this.scheduler = t, this.work = n;
  }

  requestAsyncId(t, n, r = 0) {
    return r !== null && r > 0 ? super.requestAsyncId(t, n, r) : (t.actions.push(this), t._scheduled || (t._scheduled = cn.setImmediate(t.flush.bind(t, void 0))));
  }

  recycleAsyncId(t, n, r = 0) {
    var o;
    if (r != null ? r > 0 : this.delay > 0) return super.recycleAsyncId(t, n, r);
    let { actions: i } = t;
    n != null && ((o = i[i.length - 1]) === null || o === void 0 ? void 0 : o.id) !== n && (cn.clearImmediate(n), t._scheduled === n && (t._scheduled = void 0));
  }
};
var St = class e {
  constructor(t, n = e.now) {
    this.schedulerActionCtor = t, this.now = n;
  }

  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
St.now = ti.now;
var xt = class extends St {
  constructor(t, n = St.now) {
    super(t, n), this.actions = [], this._active = !1;
  }

  flush(t) {
    let { actions: n } = this;
    if (this._active) {
      n.push(t);
      return;
    }
    let r;
    this._active = !0;
    do if (r = t.execute(t.state, t.delay)) break; while (t = n.shift());
    if (this._active = !1, r) {
      for (; t = n.shift();) t.unsubscribe();
      throw r;
    }
  }
};
var Xn = class extends xt {
  flush(t) {
    this._active = !0;
    let n = this._scheduled;
    this._scheduled = void 0;
    let { actions: r } = this, o;
    t = t || r.shift();
    do if (o = t.execute(t.state, t.delay)) break; while ((t = r[0]) && t.id === n && r.shift());
    if (this._active = !1, o) {
      for (; (t = r[0]) && t.id === n && r.shift();) t.unsubscribe();
      throw o;
    }
  }
};
var vp = new Xn(Kn);
var et = new xt(Tt), lu = et;
var tt = new T(e => e.complete());

function Jn(e) {
  return e && g(e.schedule);
}

function oi(e) {
  return e[e.length - 1];
}

function er(e) {
  return g(oi(e)) ? e.pop() : void 0;
}

function De(e) {
  return Jn(oi(e)) ? e.pop() : void 0;
}

function du(e, t) {
  return typeof oi(e) == "number" ? e.pop() : t;
}

function pu(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }

  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (d) {
        s(d);
      }
    }

    function u(l) {
      try {
        c(r.throw(l));
      } catch (d) {
        s(d);
      }
    }

    function c(l) {
      l.done ? i(l.value) : o(l.value).then(a, u);
    }

    c((r = r.apply(e, t || [])).next());
  });
}

function fu(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function nt(e) {
  return this instanceof nt ? (this.v = e, this) : new nt(e);
}

function hu(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), o, i = [];
  return o = {}, a("next"), a("throw"), a("return", s), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;

  function s(f) {
    return function(h) {
      return Promise.resolve(h).then(f, d);
    };
  }

  function a(f, h) {
    r[f] && (o[f] = function(D) {
      return new Promise(function(P, x) {
        i.push([f, D, P, x]) > 1 || u(f, D);
      });
    }, h && (o[f] = h(o[f])));
  }

  function u(f, h) {
    try {
      c(r[f](h));
    } catch (D) {
      p(i[0][3], D);
    }
  }

  function c(f) {
    f.value instanceof nt ? Promise.resolve(f.value.v).then(l, d) : p(i[0][2], f);
  }

  function l(f) {
    u("next", f);
  }

  function d(f) {
    u("throw", f);
  }

  function p(f, h) {
    f(h), i.shift(), i.length && u(i[0][0], i[0][1]);
  }
}

function gu(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof fu == "function" ? fu(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);

  function r(i) {
    n[i] = e[i] && function(s) {
      return new Promise(function(a, u) {
        s = e[i](s), o(a, u, s.done, s.value);
      });
    };
  }

  function o(i, s, a, u) {
    Promise.resolve(u).then(function(c) {
      i({ value: c, done: a });
    }, s);
  }
}

var Nt = e => e && typeof e.length == "number" && typeof e != "function";

function tr(e) {
  return g(e?.then);
}

function nr(e) {
  return g(e[_t]);
}

function rr(e) {
  return Symbol.asyncIterator && g(e?.[Symbol.asyncIterator]);
}

function or(e) {
  return new TypeError(`You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

function Dp() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}

var ir = Dp();

function sr(e) {
  return g(e?.[ir]);
}

function ar(e) {
  return hu(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (; ;) {
        let { value: r, done: o } = yield nt(n.read());
        if (o) return yield nt(void 0);
        yield yield nt(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}

function ur(e) {
  return g(e?.getReader);
}

function N(e) {
  if (e instanceof T) return e;
  if (e != null) {
    if (nr(e)) return Ep(e);
    if (Nt(e)) return Ip(e);
    if (tr(e)) return Cp(e);
    if (rr(e)) return mu(e);
    if (sr(e)) return wp(e);
    if (ur(e)) return bp(e);
  }
  throw or(e);
}

function Ep(e) {
  return new T(t => {
    let n = e[_t]();
    if (g(n.subscribe)) return n.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}

function Ip(e) {
  return new T(t => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}

function Cp(e) {
  return new T(t => {
    e.then(n => {
      t.closed || (t.next(n), t.complete());
    }, n => t.error(n)).then(null, qn);
  });
}

function wp(e) {
  return new T(t => {
    for (let n of e) if (t.next(n), t.closed) return;
    t.complete();
  });
}

function mu(e) {
  return new T(t => {
    Mp(e, t).catch(n => t.error(n));
  });
}

function bp(e) {
  return mu(ar(e));
}

function Mp(e, t) {
  var n, r, o, i;
  return pu(this, void 0, void 0, function* () {
    try {
      for (n = gu(e); r = yield n.next(), !r.done;) {
        let s = r.value;
        if (t.next(s), t.closed) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}

function J(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function() {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(i), !o) return i;
}

function cr(e, t = 0) {
  return I((n, r) => {
    n.subscribe(E(r, o => J(r, e, () => r.next(o), t), () => J(r, e, () => r.complete(), t), o => J(r, e, () => r.error(o), t)));
  });
}

function lr(e, t = 0) {
  return I((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}

function yu(e, t) {
  return N(e).pipe(lr(t), cr(t));
}

function vu(e, t) {
  return N(e).pipe(lr(t), cr(t));
}

function Du(e, t) {
  return new T(n => {
    let r = 0;
    return t.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}

function Eu(e, t) {
  return new T(n => {
    let r;
    return J(n, t, () => {
      r = e[ir](), J(n, t, () => {
        let o, i;
        try {
          ({ value: o, done: i } = r.next());
        } catch (s) {
          n.error(s);
          return;
        }
        i ? n.complete() : n.next(o);
      }, 0, !0);
    }), () => g(r?.return) && r.return();
  });
}

function dr(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new T(n => {
    J(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      J(n, t, () => {
        r.next().then(o => {
          o.done ? n.complete() : n.next(o.value);
        });
      }, 0, !0);
    });
  });
}

function Iu(e, t) {
  return dr(ar(e), t);
}

function Cu(e, t) {
  if (e != null) {
    if (nr(e)) return yu(e, t);
    if (Nt(e)) return Du(e, t);
    if (tr(e)) return vu(e, t);
    if (rr(e)) return dr(e, t);
    if (sr(e)) return Eu(e, t);
    if (ur(e)) return Iu(e, t);
  }
  throw or(e);
}

function Ee(e, t) {
  return t ? Cu(e, t) : N(e);
}

function _p(...e) {
  let t = De(e);
  return Ee(e, t);
}

function Tp(e, t) {
  let n = g(e) ? e : () => e, r = o => o.error(n());
  return new T(t ? o => t.schedule(r, 0, o) : r);
}

function Sp(e) {
  return !!e && (e instanceof T || g(e.lift) && g(e.subscribe));
}

var rt = wt(e => function() {
  e(this), this.name = "EmptyError", this.message = "no elements in sequence";
});

function wu(e) {
  return e instanceof Date && !isNaN(e);
}

function Se(e, t) {
  return I((n, r) => {
    let o = 0;
    n.subscribe(E(r, i => {
      r.next(e.call(t, i, o++));
    }));
  });
}

var { isArray: xp } = Array;

function Np(e, t) {
  return xp(t) ? e(...t) : e(t);
}

function At(e) {
  return Se(t => Np(e, t));
}

var { isArray: Ap } = Array, { getPrototypeOf: Op, prototype: Rp, keys: Fp } = Object;

function fr(e) {
  if (e.length === 1) {
    let t = e[0];
    if (Ap(t)) return { args: t, keys: null };
    if (Pp(t)) {
      let n = Fp(t);
      return { args: n.map(r => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}

function Pp(e) {
  return e && typeof e == "object" && Op(e) === Rp;
}

function pr(e, t) {
  return e.reduce((n, r, o) => (n[r] = t[o], n), {});
}

function kp(...e) {
  let t = De(e), n = er(e), { args: r, keys: o } = fr(e);
  if (r.length === 0) return Ee([], t);
  let i = new T(Lp(r, t, o ? s => pr(o, s) : q));
  return n ? i.pipe(At(n)) : i;
}

function Lp(e, t, n = q) {
  return r => {
    bu(t, () => {
      let { length: o } = e, i = new Array(o), s = o, a = o;
      for (let u = 0; u < o; u++) bu(t, () => {
        let c = Ee(e[u], t), l = !1;
        c.subscribe(E(r, d => {
          i[u] = d, l || (l = !0, a--), a || r.next(n(i.slice()));
        }, () => {
          --s || r.complete();
        }));
      }, r);
    }, r);
  };
}

function bu(e, t, n) {
  e ? J(n, e, t) : t();
}

function Mu(e, t, n, r, o, i, s, a) {
  let u = [], c = 0, l = 0, d = !1, p = () => {
    d && !u.length && !c && t.complete();
  }, f = D => c < r ? h(D) : u.push(D), h = D => {
    i && t.next(D), c++;
    let P = !1;
    N(n(D, l++)).subscribe(E(t, x => {
      o?.(x), i ? f(x) : t.next(x);
    }, () => {
      P = !0;
    }, void 0, () => {
      if (P) try {
        for (c--; u.length && c < r;) {
          let x = u.shift();
          s ? J(t, s, () => h(x)) : h(x);
        }
        p();
      } catch (x) {
        t.error(x);
      }
    }));
  };
  return e.subscribe(E(t, f, () => {
    d = !0, p();
  })), () => {
    a?.();
  };
}

function de(e, t, n = 1 / 0) {
  return g(t) ? de((r, o) => Se((i, s) => t(r, i, o, s))(N(e(r, o))), n) : (typeof t == "number" && (n = t), I((r, o) => Mu(r, o, e, n)));
}

function ln(e = 1 / 0) {
  return de(q, e);
}

function _u() {
  return ln(1);
}

function Ot(...e) {
  return _u()(Ee(e, De(e)));
}

function jp(e) {
  return new T(t => {
    N(e()).subscribe(t);
  });
}

function Vp(...e) {
  let t = er(e), { args: n, keys: r } = fr(e), o = new T(i => {
    let { length: s } = n;
    if (!s) {
      i.complete();
      return;
    }
    let a = new Array(s), u = s, c = s;
    for (let l = 0; l < s; l++) {
      let d = !1;
      N(n[l]).subscribe(E(i, p => {
        d || (d = !0, c--), a[l] = p;
      }, () => u--, void 0, () => {
        (!u || !d) && (c || i.next(r ? pr(r, a) : a), i.complete());
      }));
    }
  });
  return t ? o.pipe(At(t)) : o;
}

var Bp = ["addListener", "removeListener"], Hp = ["addEventListener", "removeEventListener"], $p = ["on", "off"];

function ii(e, t, n, r) {
  if (g(n) && (r = n, n = void 0), r) return ii(e, t, n).pipe(At(r));
  let [o, i] = zp(e) ? Hp.map(s => a => e[s](t, a, n)) : Up(e) ? Bp.map(Tu(e, t)) : Gp(e) ? $p.map(Tu(e, t)) : [];
  if (!o && Nt(e)) return de(s => ii(s, t, n))(N(e));
  if (!o) throw new TypeError("Invalid event target");
  return new T(s => {
    let a = (...u) => s.next(1 < u.length ? u : u[0]);
    return o(a), () => i(a);
  });
}

function Tu(e, t) {
  return n => r => e[n](t, r);
}

function Up(e) {
  return g(e.addListener) && g(e.removeListener);
}

function Gp(e) {
  return g(e.on) && g(e.off);
}

function zp(e) {
  return g(e.addEventListener) && g(e.removeEventListener);
}

function hr(e = 0, t, n = lu) {
  let r = -1;
  return t != null && (Jn(t) ? n = t : r = t), new T(o => {
    let i = wu(e) ? +e - n.now() : e;
    i < 0 && (i = 0);
    let s = 0;
    return n.schedule(function() {
      o.closed || (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
    }, i);
  });
}

function Wp(...e) {
  let t = De(e), n = du(e, 1 / 0), r = e;
  return r.length ? r.length === 1 ? N(r[0]) : ln(n)(Ee(r, t)) : tt;
}

function ot(e, t) {
  return I((n, r) => {
    let o = 0;
    n.subscribe(E(r, i => e.call(t, i, o++) && r.next(i)));
  });
}

function Su(e) {
  return I((t, n) => {
    let r = !1, o = null, i = null, s = !1, a = () => {
      if (i?.unsubscribe(), i = null, r) {
        r = !1;
        let c = o;
        o = null, n.next(c);
      }
      s && n.complete();
    }, u = () => {
      i = null, s && n.complete();
    };
    t.subscribe(E(n, c => {
      r = !0, o = c, i || N(e(c)).subscribe(i = E(n, a, u));
    }, () => {
      s = !0, (!r || !i || i.closed) && n.complete();
    }));
  });
}

function qp(e, t = et) {
  return Su(() => hr(e, t));
}

function xu(e) {
  return I((t, n) => {
    let r = null, o = !1, i;
    r = t.subscribe(E(n, void 0, void 0, s => {
      i = N(e(s, xu(e)(t))), r ? (r.unsubscribe(), r = null, i.subscribe(n)) : o = !0;
    })), o && (r.unsubscribe(), r = null, i.subscribe(n));
  });
}

function Nu(e, t, n, r, o) {
  return (i, s) => {
    let a = n, u = t, c = 0;
    i.subscribe(E(s, l => {
      let d = c++;
      u = a ? e(u, l, d) : (a = !0, l), r && s.next(u);
    }, o && (() => {
      a && s.next(u), s.complete();
    })));
  };
}

function Yp(e, t) {
  return g(t) ? de(e, t, 1) : de(e, 1);
}

function Zp(e, t = et) {
  return I((n, r) => {
    let o = null, i = null, s = null, a = () => {
      if (o) {
        o.unsubscribe(), o = null;
        let c = i;
        i = null, r.next(c);
      }
    };

    function u() {
      let c = s + e, l = t.now();
      if (l < c) {
        o = this.schedule(void 0, c - l), r.add(o);
        return;
      }
      a();
    }

    n.subscribe(E(r, c => {
      i = c, s = t.now(), o || (o = t.schedule(u, e), r.add(o));
    }, () => {
      a(), r.complete();
    }, void 0, () => {
      i = o = null;
    }));
  });
}

function dn(e) {
  return I((t, n) => {
    let r = !1;
    t.subscribe(E(n, o => {
      r = !0, n.next(o);
    }, () => {
      r || n.next(e), n.complete();
    }));
  });
}

function Rt(e) {
  return e <= 0 ? () => tt : I((t, n) => {
    let r = 0;
    t.subscribe(E(n, o => {
      ++r <= e && (n.next(o), e <= r && n.complete());
    }));
  });
}

function Au() {
  return I((e, t) => {
    e.subscribe(E(t, Ke));
  });
}

function si(e) {
  return Se(() => e);
}

function ai(e, t) {
  return t ? n => Ot(t.pipe(Rt(1), Au()), n.pipe(ai(e))) : de((n, r) => N(e(n, r)).pipe(Rt(1), si(n)));
}

function Qp(e, t = et) {
  let n = hr(e, t);
  return ai(() => n);
}

function Kp(e, t = q) {
  return e = e ?? Xp, I((n, r) => {
    let o, i = !0;
    n.subscribe(E(r, s => {
      let a = t(s);
      (i || !e(o, a)) && (i = !1, o = a, r.next(s));
    }));
  });
}

function Xp(e, t) {
  return e === t;
}

function gr(e = Jp) {
  return I((t, n) => {
    let r = !1;
    t.subscribe(E(n, o => {
      r = !0, n.next(o);
    }, () => r ? n.complete() : n.error(e())));
  });
}

function Jp() {
  return new rt;
}

function eh(e) {
  return I((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}

function ui(e, t) {
  let n = arguments.length >= 2;
  return r => r.pipe(e ? ot((o, i) => e(o, i, r)) : q, Rt(1), n ? dn(t) : gr(() => new rt));
}

function ci(e) {
  return e <= 0 ? () => tt : I((t, n) => {
    let r = [];
    t.subscribe(E(n, o => {
      r.push(o), e < r.length && r.shift();
    }, () => {
      for (let o of r) n.next(o);
      n.complete();
    }, void 0, () => {
      r = null;
    }));
  });
}

function th(e, t) {
  let n = arguments.length >= 2;
  return r => r.pipe(e ? ot((o, i) => e(o, i, r)) : q, ci(1), n ? dn(t) : gr(() => new rt));
}

function nh(e, t) {
  return I(Nu(e, t, arguments.length >= 2, !0));
}

function rh(e = {}) {
  let { connector: t = () => new ve, resetOnError: n = !0, resetOnComplete: r = !0, resetOnRefCountZero: o = !0 } = e;
  return i => {
    let s, a, u, c = 0, l = !1, d = !1, p = () => {
      a?.unsubscribe(), a = void 0;
    }, f = () => {
      p(), s = u = void 0, l = d = !1;
    }, h = () => {
      let D = s;
      f(), D?.unsubscribe();
    };
    return I((D, P) => {
      c++, !d && !l && p();
      let x = u = u ?? t();
      P.add(() => {
        c--, c === 0 && !d && !l && (a = li(h, o));
      }), x.subscribe(P), !s && c > 0 && (s = new Te({
        next: se => x.next(se), error: se => {
          d = !0, p(), a = li(f, n, se), x.error(se);
        }, complete: () => {
          l = !0, p(), a = li(f, r), x.complete();
        }
      }), N(D).subscribe(s));
    })(i);
  };
}

function li(e, t, ...n) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let r = new Te({
    next: () => {
      r.unsubscribe(), e();
    }
  });
  return N(t(...n)).subscribe(r);
}

function oh(e) {
  return ot((t, n) => e <= n);
}

function ih(...e) {
  let t = De(e);
  return I((n, r) => {
    (t ? Ot(e, n, t) : Ot(e, n)).subscribe(r);
  });
}

function sh(e, t) {
  return I((n, r) => {
    let o = null, i = 0, s = !1, a = () => s && !o && r.complete();
    n.subscribe(E(r, u => {
      o?.unsubscribe();
      let c = 0, l = i++;
      N(e(u, l)).subscribe(o = E(r, d => r.next(t ? t(u, d, l, c++) : d), () => {
        o = null, a();
      }));
    }, () => {
      s = !0, a();
    }));
  });
}

function ah(e) {
  return I((t, n) => {
    N(e).subscribe(E(n, () => n.complete(), Ke)), !n.closed && t.subscribe(n);
  });
}

function uh(e, t, n) {
  let r = g(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r ? I((o, i) => {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    let a = !0;
    o.subscribe(E(i, u => {
      var c;
      (c = r.next) === null || c === void 0 || c.call(r, u), i.next(u);
    }, () => {
      var u;
      a = !1, (u = r.complete) === null || u === void 0 || u.call(r), i.complete();
    }, u => {
      var c;
      a = !1, (c = r.error) === null || c === void 0 || c.call(r, u), i.error(u);
    }, () => {
      var u, c;
      a && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)), (c = r.finalize) === null || c === void 0 || c.call(r);
    }));
  }) : q;
}

var di = { JSACTION: "jsaction" };
var L = {
    AUXCLICK: "auxclick",
    CHANGE: "change",
    CLICK: "click",
    CLICKMOD: "clickmod",
    CLICKONLY: "clickonly",
    DBLCLICK: "dblclick",
    FOCUS: "focus",
    FOCUSIN: "focusin",
    BLUR: "blur",
    FOCUSOUT: "focusout",
    SUBMIT: "submit",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    KEYUP: "keyup",
    MOUSEUP: "mouseup",
    MOUSEDOWN: "mousedown",
    MOUSEOVER: "mouseover",
    MOUSEOUT: "mouseout",
    MOUSEENTER: "mouseenter",
    MOUSELEAVE: "mouseleave",
    MOUSEMOVE: "mousemove",
    POINTERUP: "pointerup",
    POINTERDOWN: "pointerdown",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERMOVE: "pointermove",
    POINTERCANCEL: "pointercancel",
    GOTPOINTERCAPTURE: "gotpointercapture",
    LOSTPOINTERCAPTURE: "lostpointercapture",
    ERROR: "error",
    LOAD: "load",
    UNLOAD: "unload",
    TOUCHSTART: "touchstart",
    TOUCHEND: "touchend",
    TOUCHMOVE: "touchmove",
    INPUT: "input",
    SCROLL: "scroll",
    TOGGLE: "toggle",
    CUSTOM: "_custom"
  }, IS = [L.MOUSEENTER, L.MOUSELEAVE, "pointerenter", "pointerleave"],
  ch = [L.CLICK, L.DBLCLICK, L.FOCUSIN, L.FOCUSOUT, L.KEYDOWN, L.KEYUP, L.KEYPRESS, L.MOUSEOVER, L.MOUSEOUT, L.SUBMIT, L.TOUCHSTART, L.TOUCHEND, L.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"],
  Ou = [L.FOCUS, L.BLUR, L.ERROR, L.LOAD, L.TOGGLE], Ru = e => Ou.indexOf(e) >= 0, lh = ch.concat(Ou),
  Fu = e => lh.indexOf(e) >= 0, dh = 3, fh = 13, ph = 32, te = { MAC_ENTER: dh, ENTER: fh, SPACE: ph };
var CS = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
var wS = typeof navigator < "u" && !/Opera/.test(navigator.userAgent) && /WebKit/.test(navigator.userAgent),
  bS = typeof navigator < "u" && (/MSIE/.test(navigator.userAgent) || /Trident/.test(navigator.userAgent)),
  MS = typeof navigator < "u" && !/Opera|WebKit/.test(navigator.userAgent) && /Gecko/.test(navigator.product);
var _S = { Enter: te.ENTER, " ": te.SPACE }, TS = {
  A: te.ENTER,
  BUTTON: 0,
  CHECKBOX: te.SPACE,
  COMBOBOX: te.ENTER,
  FILE: 0,
  GRIDCELL: te.ENTER,
  LINK: te.ENTER,
  LISTBOX: te.ENTER,
  MENU: 0,
  MENUBAR: 0,
  MENUITEM: 0,
  MENUITEMCHECKBOX: 0,
  MENUITEMRADIO: 0,
  OPTION: 0,
  RADIO: te.SPACE,
  RADIOGROUP: te.SPACE,
  RESET: 0,
  SUBMIT: 0,
  SWITCH: te.SPACE,
  TAB: 0,
  TREE: te.ENTER,
  TREEITEM: te.ENTER
};
var SS = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent);
var xS = L.CLICK;
var Mc = "https://g.co/ng/security#xss", w = class extends Error {
  constructor(t, n) {
    super(_c(t, n)), this.code = t;
  }
};

function _c(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}

function On(e) {
  return { toString: e }.toString();
}

var mr = "__parameters__";

function hh(e) {
  return function(...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}

function Tc(e, t, n) {
  return On(() => {
    let r = hh(t);

    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return a.annotation = s, a;

      function a(u, c, l) {
        let d = u.hasOwnProperty(mr) ? u[mr] : Object.defineProperty(u, mr, { value: [] })[mr];
        for (; d.length <= l;) d.push(null);
        return (d[l] = d[l] || []).push(s), u;
      }
    }

    return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = e, o.annotationCls = o, o;
  });
}

var mn = globalThis;

function F(e) {
  for (let t in e) if (e[t] === F) return t;
  throw Error("Could not find renamed property on target object.");
}

function gh(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}

function Q(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(Q).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}

function Ti(e, t) {
  return e == null || e === "" ? t === null ? "" : t : t == null || t === "" ? e : e + " " + t;
}

var mh = F({ __forward_ref__: F });

function Sc(e) {
  return e.__forward_ref__ = Sc, e.toString = function() {
    return Q(this());
  }, e;
}

function Y(e) {
  return xc(e) ? e() : e;
}

function xc(e) {
  return typeof e == "function" && e.hasOwnProperty(mh) && e.__forward_ref__ === Sc;
}

function R(e) {
  return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 };
}

function Nc(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}

function fo(e) {
  return Pu(e, Ac) || Pu(e, Oc);
}

function YS(e) {
  return fo(e) !== null;
}

function Pu(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}

function yh(e) {
  let t = e && (e[Ac] || e[Oc]);
  return t || null;
}

function ku(e) {
  return e && (e.hasOwnProperty(Lu) || e.hasOwnProperty(vh)) ? e[Lu] : null;
}

var Ac = F({ \u0275prov: F }), Lu = F({ \u0275inj: F }), Oc = F({ ngInjectableDef: F }), vh = F({ ngInjectorDef: F }),
  b = class {
    constructor(t, n) {
      this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = R({
        token: this,
        providedIn: n.providedIn || "root",
        factory: n.factory
      }));
    }

    get multi() {
      return this;
    }

    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };

function Rc(e) {
  return e && !!e.\u0275providers;
}

var Dh = F({ \u0275cmp: F }), Eh = F({ \u0275dir: F }), Ih = F({ \u0275pipe: F }), Ch = F({ \u0275mod: F }),
  Or = F({ \u0275fac: F }), fn = F({ __NG_ELEMENT_ID__: F }), ju = F({ __NG_ENV_ID__: F });

function Rn(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}

function wh(e) {
  return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : Rn(e);
}

function bh(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new w(-200, e);
}

function js(e, t) {
  throw new w(-201, !1);
}

var M = function(e) {
  return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e;
}(M || {}), Si;

function Fc() {
  return Si;
}

function ae(e) {
  let t = Si;
  return Si = e, t;
}

function Pc(e, t, n) {
  let r = fo(e);
  if (r && r.providedIn == "root") return r.value === void 0 ? r.value = r.factory() : r.value;
  if (n & M.Optional) return null;
  if (t !== void 0) return t;
  js(e, "Injector");
}

var Mh = {}, yn = Mh, xi = "__NG_DI_FLAG__", Rr = "ngTempTokenPath", _h = "ngTokenPath", Th = /\n/gm, Sh = "\u0275",
  Vu = "__source", jt;

function xh() {
  return jt;
}

function Le(e) {
  let t = jt;
  return jt = e, t;
}

function Nh(e, t = M.Default) {
  if (jt === void 0) throw new w(-203, !1);
  return jt === null ? Pc(e, void 0, t) : jt.get(e, t & M.Optional ? null : void 0, t);
}

function H(e, t = M.Default) {
  return (Fc() || Nh)(Y(e), t);
}

function y(e, t = M.Default) {
  return H(e, po(t));
}

function po(e) {
  return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}

function Ni(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = Y(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new w(900, !1);
      let o, i = M.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s], u = Ah(a);
        typeof u == "number" ? u === -1 ? o = a.token : i |= u : o = a;
      }
      t.push(H(o, i));
    } else t.push(H(r));
  }
  return t;
}

function kc(e, t) {
  return e[xi] = t, e.prototype[xi] = t, e;
}

function Ah(e) {
  return e[xi];
}

function Oh(e, t, n, r) {
  let o = e[Rr];
  throw t[Vu] && o.unshift(t[Vu]), e.message = Rh(`
` + e.message, o, n, r), e[_h] = o, e[Rr] = null, e;
}

function Rh(e, t, n, r = null) {
  e = e && e.charAt(0) === `
` && e.charAt(1) == Sh ? e.slice(2) : e;
  let o = Q(t);
  if (Array.isArray(t)) o = t.map(Q).join(" -> "); else if (typeof t == "object") {
    let i = [];
    for (let s in t) if (t.hasOwnProperty(s)) {
      let a = t[s];
      i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : Q(a)));
    }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(Th, `
  `)}`;
}

var Fh = kc(Tc("Optional"), 8);
var Ph = kc(Tc("SkipSelf"), 4);

function Bt(e, t) {
  let n = e.hasOwnProperty(Or);
  return n ? e[Or] : null;
}

function kh(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r], i = t[r];
    if (n && (o = n(o), i = n(i)), i !== o) return !1;
  }
  return !0;
}

function Lh(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}

function Vs(e, t) {
  e.forEach(n => Array.isArray(n) ? Vs(n, t) : t(n));
}

function Lc(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}

function Fr(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}

function jh(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}

function Vh(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r); else if (o === 1) e.push(r, e[0]), e[0] = n; else {
    for (o--, e.push(e[o - 1], e[o]); o > t;) {
      let i = o - 2;
      e[o] = e[i], o--;
    }
    e[t] = n, e[t + 1] = r;
  }
}

function Bs(e, t, n) {
  let r = Fn(e, t);
  return r >= 0 ? e[r | 1] = n : (r = ~r, Vh(e, r, t, n)), r;
}

function fi(e, t) {
  let n = Fn(e, t);
  if (n >= 0) return e[n | 1];
}

function Fn(e, t) {
  return Bh(e, t, 1);
}

function Bh(e, t, n) {
  let r = 0, o = e.length >> n;
  for (; o !== r;) {
    let i = r + (o - r >> 1), s = e[i << n];
    if (t === s) return i << n;
    s > t ? o = i : r = i + 1;
  }
  return ~(o << n);
}

var Ht = {}, z = [], vn = new b(""), jc = new b("", -1), Vc = new b(""), Pr = class {
  get(t, n = yn) {
    if (n === yn) {
      let r = new Error(`NullInjectorError: No provider for ${Q(t)}!`);
      throw r.name = "NullInjectorError", r;
    }
    return n;
  }
}, Bc = function(e) {
  return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e;
}(Bc || {}), $t = function(e) {
  return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e;
}($t || {}), Be = function(e) {
  return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e;
}(Be || {});

function Hh(e, t, n) {
  let r = e.length;
  for (; ;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}

function Ai(e, t, n) {
  let r = 0;
  for (; r < n.length;) {
    let o = n[r];
    if (typeof o == "number") {
      if (o !== 0) break;
      r++;
      let i = n[r++], s = n[r++], a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o, s = n[++r];
      $h(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}

function Hc(e) {
  return e === 3 || e === 4 || e === 6;
}

function $h(e) {
  return e.charCodeAt(0) === 64;
}

function Dn(e, t) {
  if (!(t === null || t.length === 0)) if (e === null || e.length === 0) e = t.slice(); else {
    let n = -1;
    for (let r = 0; r < t.length; r++) {
      let o = t[r];
      typeof o == "number" ? n = o : n === 0 || (n === -1 || n === 2 ? Bu(e, n, o, null, t[++r]) : Bu(e, n, o, null, null));
    }
  }
  return e;
}

function Bu(e, t, n, r, o) {
  let i = 0, s = e.length;
  if (t === -1) s = -1; else for (; i < e.length;) {
    let a = e[i++];
    if (typeof a == "number") {
      if (a === t) {
        s = -1;
        break;
      } else if (a > t) {
        s = i - 1;
        break;
      }
    }
  }
  for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === n) {
      if (r === null) {
        o !== null && (e[i + 1] = o);
        return;
      } else if (r === e[i + 1]) {
        e[i + 2] = o;
        return;
      }
    }
    i++, r !== null && i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r), o !== null && e.splice(i++, 0, o);
}

var $c = "ng-template";

function Uh(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2) if (t[o] === "class" && Hh(t[o + 1].toLowerCase(), n, 0) !== -1) return !0;
  } else if (Hs(e)) return !1;
  if (o = t.indexOf(1, o), o > -1) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string";) if (i.toLowerCase() === n) return !0;
  }
  return !1;
}

function Hs(e) {
  return e.type === 4 && e.value !== $c;
}

function Gh(e, t, n) {
  let r = e.type === 4 && !n ? $c : e.value;
  return t === r;
}

function zh(e, t, n) {
  let r = 4, o = e.attrs, i = o !== null ? Yh(o) : 0, s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == "number") {
      if (!s && !fe(r) && !fe(u)) return !1;
      if (s && fe(u)) continue;
      s = !1, r = u | r & 1;
      continue;
    }
    if (!s) if (r & 4) {
      if (r = 2 | r & 1, u !== "" && !Gh(e, u, n) || u === "" && t.length === 1) {
        if (fe(r)) return !1;
        s = !0;
      }
    } else if (r & 8) {
      if (o === null || !Uh(e, o, u, n)) {
        if (fe(r)) return !1;
        s = !0;
      }
    } else {
      let c = t[++a], l = Wh(u, o, Hs(e), n);
      if (l === -1) {
        if (fe(r)) return !1;
        s = !0;
        continue;
      }
      if (c !== "") {
        let d;
        if (l > i ? d = "" : d = o[l + 1].toLowerCase(), r & 2 && c !== d) {
          if (fe(r)) return !1;
          s = !0;
        }
      }
    }
  }
  return fe(r) || s;
}

function fe(e) {
  return (e & 1) === 0;
}

function Wh(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length;) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0; else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == "string";) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return Zh(t, e);
}

function Uc(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (zh(e, t[r], n)) return !0;
  return !1;
}

function qh(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}

function Yh(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Hc(n)) return t;
  }
  return e.length;
}

function Zh(e, t) {
  let n = e.indexOf(4);
  if (n > -1) for (n++; n < e.length;) {
    let r = e[n];
    if (typeof r == "number") return -1;
    if (r === t) return n;
    n++;
  }
  return -1;
}

function Qh(e, t) {
  e:for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}

function Hu(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}

function Kh(e) {
  let t = e[0], n = 1, r = 2, o = "", i = !1;
  for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string") if (r & 2) {
      let a = e[++n];
      o += "[" + s + (a.length > 0 ? "=\"" + a + "\"" : "") + "]";
    } else r & 8 ? o += "." + s : r & 4 && (o += " " + s); else o !== "" && !fe(s) && (t += Hu(i, o), o = ""), r = s, i = i || !fe(r);
    n++;
  }
  return o !== "" && (t += Hu(i, o)), t;
}

function Xh(e) {
  return e.map(Kh).join(",");
}

function Jh(e) {
  let t = [], n = [], r = 1, o = 2;
  for (; r < e.length;) {
    let i = e[r];
    if (typeof i == "string") o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i); else {
      if (!fe(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}

function ZS(e) {
  return On(() => {
    let t = Yc(e), n = Ze(ye({}, t), {
      decls: e.decls,
      vars: e.vars,
      template: e.template,
      consts: e.consts || null,
      ngContentSelectors: e.ngContentSelectors,
      onPush: e.changeDetection === Bc.OnPush,
      directiveDefs: null,
      pipeDefs: null,
      dependencies: t.standalone && e.dependencies || null,
      getStandaloneInjector: null,
      signals: e.signals ?? !1,
      data: e.data || {},
      encapsulation: e.encapsulation || $t.Emulated,
      styles: e.styles || z,
      _: null,
      schemas: e.schemas || null,
      tView: null,
      id: ""
    });
    Zc(n);
    let r = e.dependencies;
    return n.directiveDefs = Uu(r, !1), n.pipeDefs = Uu(r, !0), n.id = rg(n), n;
  });
}

function eg(e) {
  return xe(e) || zc(e);
}

function tg(e) {
  return e !== null;
}

function Gc(e) {
  return On(() => ({
    type: e.type,
    bootstrap: e.bootstrap || z,
    declarations: e.declarations || z,
    imports: e.imports || z,
    exports: e.exports || z,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null
  }));
}

function $u(e, t) {
  if (e == null) return Ht;
  let n = {};
  for (let r in e) if (e.hasOwnProperty(r)) {
    let o = e[r], i, s, a = Be.None;
    Array.isArray(o) ? (a = o[0], i = o[1], s = o[2] ?? i) : (i = o, s = o), t ? (n[i] = a !== Be.None ? [r, a] : r, t[i] = s) : n[i] = r;
  }
  return n;
}

function ho(e) {
  return On(() => {
    let t = Yc(e);
    return Zc(t), t;
  });
}

function xe(e) {
  return e[Dh] || null;
}

function zc(e) {
  return e[Eh] || null;
}

function Wc(e) {
  return e[Ih] || null;
}

function ng(e) {
  let t = xe(e) || zc(e) || Wc(e);
  return t !== null ? t.standalone : !1;
}

function qc(e, t) {
  let n = e[Ch] || null;
  if (!n && t === !0) throw new Error(`Type ${Q(e)} does not have '\u0275mod' property.`);
  return n;
}

function Yc(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || Ht,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || z,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: $u(e.inputs, t),
    outputs: $u(e.outputs),
    debugInfo: null
  };
}

function Zc(e) {
  e.features?.forEach(t => t(e));
}

function Uu(e, t) {
  if (!e) return null;
  let n = t ? Wc : eg;
  return () => (typeof e == "function" ? e() : e).map(r => n(r)).filter(tg);
}

function rg(e) {
  let t = 0,
    n = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, e.consts, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery].join("|");
  for (let o of n) t = Math.imul(31, t) + o.charCodeAt(0) << 0;
  return t += 2147483648, "c" + t;
}

function Qc(e) {
  return { \u0275providers: e };
}

function og(...e) {
  return { \u0275providers: Kc(!0, e), \u0275fromNgModule: !0 };
}

function Kc(e, ...t) {
  let n = [], r = new Set, o, i = s => {
    n.push(s);
  };
  return Vs(t, s => {
    let a = s;
    Oi(a, i, [], r) && (o ||= [], o.push(a));
  }), o !== void 0 && Xc(o, i), n;
}

function Xc(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    $s(o, i => {
      t(i, r);
    });
  }
}

function Oi(e, t, n, r) {
  if (e = Y(e), !e) return !1;
  let o = null, i = ku(e), s = !i && xe(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (i = ku(u), i) o = u; else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if (r.add(o), s.dependencies) {
      let u = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let c of u) Oi(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        Vs(i.imports, l => {
          Oi(l, t, n, r) && (c ||= [], c.push(l));
        });
      } finally {
      }
      c !== void 0 && Xc(c, t);
    }
    if (!a) {
      let c = Bt(o) || (() => new o);
      t({ provide: o, useFactory: c, deps: z }, o), t({ provide: Vc, useValue: o, multi: !0 }, o), t({
        provide: vn,
        useValue: () => H(o),
        multi: !0
      }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      $s(u, l => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}

function $s(e, t) {
  for (let n of e) Rc(n) && (n = n.\u0275providers), Array.isArray(n) ? $s(n, t) : t(n);
}

var ig = F({ provide: String, useValue: F });

function Jc(e) {
  return e !== null && typeof e == "object" && ig in e;
}

function sg(e) {
  return !!(e && e.useExisting);
}

function ag(e) {
  return !!(e && e.useFactory);
}

function Ut(e) {
  return typeof e == "function";
}

function ug(e) {
  return !!e.useClass;
}

var el = new b(""), Mr = {}, cg = {}, pi;

function Us() {
  return pi === void 0 && (pi = new Pr), pi;
}

var He = class {
}, En = class extends He {
  get destroyed() {
    return this._destroyed;
  }

  constructor(t, n, r, o) {
    super(), this.parent = n, this.source = r, this.scopes = o, this.records = new Map, this._ngOnDestroyHooks = new Set, this._onDestroyHooks = [], this._destroyed = !1, Fi(t, s => this.processProvider(s)), this.records.set(jc, Ft(void 0, this)), o.has("environment") && this.records.set(He, Ft(void 0, this));
    let i = this.records.get(el);
    i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(Vc, z, M.Self));
  }

  destroy() {
    this.assertNotDestroyed(), this._destroyed = !0;
    let t = _(null);
    try {
      for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
      let n = this._onDestroyHooks;
      this._onDestroyHooks = [];
      for (let r of n) r();
    } finally {
      this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), _(t);
    }
  }

  onDestroy(t) {
    return this.assertNotDestroyed(), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t);
  }

  runInContext(t) {
    this.assertNotDestroyed();
    let n = Le(this), r = ae(void 0), o;
    try {
      return t();
    } finally {
      Le(n), ae(r);
    }
  }

  get(t, n = yn, r = M.Default) {
    if (this.assertNotDestroyed(), t.hasOwnProperty(ju)) return t[ju](this);
    r = po(r);
    let o, i = Le(this), s = ae(void 0);
    try {
      if (!(r & M.SkipSelf)) {
        let u = this.records.get(t);
        if (u === void 0) {
          let c = hg(t) && fo(t);
          c && this.injectableDefInScope(c) ? u = Ft(Ri(t), Mr) : u = null, this.records.set(t, u);
        }
        if (u != null) return this.hydrate(t, u);
      }
      let a = r & M.Self ? Us() : this.parent;
      return n = r & M.Optional && n === yn ? null : n, a.get(t, n);
    } catch (a) {
      if (a.name === "NullInjectorError") {
        if ((a[Rr] = a[Rr] || []).unshift(Q(t)), i) throw a;
        return Oh(a, t, "R3InjectorError", this.source);
      } else throw a;
    } finally {
      ae(s), Le(i);
    }
  }

  resolveInjectorInitializers() {
    let t = _(null), n = Le(this), r = ae(void 0), o;
    try {
      let i = this.get(vn, z, M.Self);
      for (let s of i) s();
    } finally {
      Le(n), ae(r), _(t);
    }
  }

  toString() {
    let t = [], n = this.records;
    for (let r of n.keys()) t.push(Q(r));
    return `R3Injector[${t.join(", ")}]`;
  }

  assertNotDestroyed() {
    if (this._destroyed) throw new w(205, !1);
  }

  processProvider(t) {
    t = Y(t);
    let n = Ut(t) ? t : Y(t && t.provide), r = dg(t);
    if (!Ut(t) && t.multi === !0) {
      let o = this.records.get(n);
      o || (o = Ft(void 0, Mr, !0), o.factory = () => Ni(o.multi), this.records.set(n, o)), n = t, o.multi.push(t);
    }
    this.records.set(n, r);
  }

  hydrate(t, n) {
    let r = _(null);
    try {
      return n.value === Mr && (n.value = cg, n.value = n.factory()), typeof n.value == "object" && n.value && pg(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    } finally {
      _(r);
    }
  }

  injectableDefInScope(t) {
    if (!t.providedIn) return !1;
    let n = Y(t.providedIn);
    return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n);
  }

  removeOnDestroy(t) {
    let n = this._onDestroyHooks.indexOf(t);
    n !== -1 && this._onDestroyHooks.splice(n, 1);
  }
};

function Ri(e) {
  let t = fo(e), n = t !== null ? t.factory : Bt(e);
  if (n !== null) return n;
  if (e instanceof b) throw new w(204, !1);
  if (e instanceof Function) return lg(e);
  throw new w(204, !1);
}

function lg(e) {
  if (e.length > 0) throw new w(204, !1);
  let n = yh(e);
  return n !== null ? () => n.factory(e) : () => new e;
}

function dg(e) {
  if (Jc(e)) return Ft(void 0, e.useValue);
  {
    let t = tl(e);
    return Ft(t, Mr);
  }
}

function tl(e, t, n) {
  let r;
  if (Ut(e)) {
    let o = Y(e);
    return Bt(o) || Ri(o);
  } else if (Jc(e)) r = () => Y(e.useValue); else if (ag(e)) r = () => e.useFactory(...Ni(e.deps || [])); else if (sg(e)) r = () => H(Y(e.useExisting)); else {
    let o = Y(e && (e.useClass || e.provide));
    if (fg(e)) r = () => new o(...Ni(e.deps)); else return Bt(o) || Ri(o);
  }
  return r;
}

function Ft(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}

function fg(e) {
  return !!e.deps;
}

function pg(e) {
  return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function";
}

function hg(e) {
  return typeof e == "function" || typeof e == "object" && e instanceof b;
}

function Fi(e, t) {
  for (let n of e) Array.isArray(n) ? Fi(n, t) : n && Rc(n) ? Fi(n.\u0275providers, t) : t(n);
}

function gg(e, t) {
  e instanceof En && e.assertNotDestroyed();
  let n, r = Le(e), o = ae(void 0);
  try {
    return t();
  } finally {
    Le(r), ae(o);
  }
}

function nl() {
  return Fc() !== void 0 || xh() != null;
}

function Gs(e) {
  if (!nl()) throw new w(-203, !1);
}

function mg(e) {
  let t = mn.ng;
  if (t && t.\u0275compilerFacade) return t.\u0275compilerFacade;
  throw new Error("JIT compiler unavailable");
}

function yg(e) {
  return typeof e == "function";
}

var j = 0, m = 1, v = 2, U = 3, ge = 4, ee = 5, me = 6, In = 7, ne = 8, Gt = 9, be = 10, O = 11, Cn = 12, Gu = 13,
  Xt = 14, K = 15, ut = 16, Pt = 17, Ne = 18, go = 19, rl = 20, je = 21, _r = 22, ue = 23, A = 25, zs = 1, wn = 6,
  Ae = 7, kr = 8, zt = 9, W = 10, Lr = function(e) {
    return e[e.None = 0] = "None", e[e.HasTransplantedViews = 2] = "HasTransplantedViews", e;
  }(Lr || {});

function we(e) {
  return Array.isArray(e) && typeof e[zs] == "object";
}

function oe(e) {
  return Array.isArray(e) && e[zs] === !0;
}

function Ws(e) {
  return (e.flags & 4) !== 0;
}

function Jt(e) {
  return e.componentOffset > -1;
}

function mo(e) {
  return (e.flags & 1) === 1;
}

function Oe(e) {
  return !!e.template;
}

function bn(e) {
  return (e[v] & 512) !== 0;
}

function vg(e) {
  return (e.type & 16) === 16;
}

function Dg(e) {
  return (e[v] & 32) === 32;
}

var Pi = class {
  constructor(t, n, r) {
    this.previousValue = t, this.currentValue = n, this.firstChange = r;
  }

  isFirstChange() {
    return this.firstChange;
  }
};

function ol(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : e[n] = r;
}

function qs() {
  return il;
}

function il(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = Ig), Eg;
}

qs.ngInherit = !0;

function Eg() {
  let e = al(this), t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === Ht) e.previous = t; else for (let r in t) n[r] = t[r];
    e.current = null, this.ngOnChanges(t);
  }
}

function Ig(e, t, n, r, o) {
  let i = this.declaredInputs[r], s = al(e) || Cg(e, { previous: Ht, current: null }),
    a = s.current || (s.current = {}), u = s.previous, c = u[i];
  a[i] = new Pi(c && c.currentValue, n, u === Ht), ol(e, t, o, n);
}

var sl = "__ngSimpleChanges__";

function al(e) {
  return e[sl] || null;
}

function Cg(e, t) {
  return e[sl] = t;
}

var zu = null;
var Ie = function(e, t, n) {
  zu?.(e, t, n);
}, ul = "svg", wg = "math";

function k(e) {
  for (; Array.isArray(e);) e = e[j];
  return e;
}

function Ys(e) {
  for (; Array.isArray(e);) {
    if (typeof e[zs] == "object") return e;
    e = e[j];
  }
  return null;
}

function cl(e, t) {
  return k(t[e]);
}

function ie(e, t) {
  return k(t[e.index]);
}

function Zs(e, t) {
  return e.data[t];
}

function bg(e, t) {
  return e[t];
}

function ze(e, t) {
  let n = t[e];
  return we(n) ? n : n[j];
}

function Mg(e) {
  return (e[v] & 4) === 4;
}

function Qs(e) {
  return (e[v] & 128) === 128;
}

function _g(e) {
  return oe(e[U]);
}

function Wt(e, t) {
  return t == null ? null : e[t];
}

function ll(e) {
  e[Pt] = 0;
}

function dl(e) {
  e[v] & 1024 || (e[v] |= 1024, Qs(e) && yo(e));
}

function Tg(e, t) {
  for (; e > 0;) t = t[Xt], e--;
  return t;
}

function Mn(e) {
  return !!(e[v] & 9216 || e[ue]?.dirty);
}

function ki(e) {
  e[be].changeDetectionScheduler?.notify(7), e[v] & 64 && (e[v] |= 1024), Mn(e) && yo(e);
}

function yo(e) {
  e[be].changeDetectionScheduler?.notify(0);
  let t = ct(e);
  for (; t !== null && !(t[v] & 8192 || (t[v] |= 8192, !Qs(t)));) t = ct(t);
}

function fl(e, t) {
  if ((e[v] & 256) === 256) throw new w(911, !1);
  e[je] === null && (e[je] = []), e[je].push(t);
}

function Sg(e, t) {
  if (e[je] === null) return;
  let n = e[je].indexOf(t);
  n !== -1 && e[je].splice(n, 1);
}

function ct(e) {
  let t = e[U];
  return oe(t) ? t[U] : t;
}

var C = { lFrame: Il(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var pl = !1;

function xg() {
  return C.lFrame.elementDepthCount;
}

function Ng() {
  C.lFrame.elementDepthCount++;
}

function Ag() {
  C.lFrame.elementDepthCount--;
}

function hl() {
  return C.bindingsEnabled;
}

function en() {
  return C.skipHydrationRootTNode !== null;
}

function Og(e) {
  return C.skipHydrationRootTNode === e;
}

function Rg(e) {
  C.skipHydrationRootTNode = e;
}

function Fg() {
  C.skipHydrationRootTNode = null;
}

function S() {
  return C.lFrame.lView;
}

function V() {
  return C.lFrame.tView;
}

function QS(e) {
  return C.lFrame.contextLView = e, e[ne];
}

function KS(e) {
  return C.lFrame.contextLView = null, e;
}

function G() {
  let e = gl();
  for (; e !== null && e.type === 64;) e = e.parent;
  return e;
}

function gl() {
  return C.lFrame.currentTNode;
}

function Pg() {
  let e = C.lFrame, t = e.currentTNode;
  return e.isParent ? t : t.parent;
}

function yt(e, t) {
  let n = C.lFrame;
  n.currentTNode = e, n.isParent = t;
}

function Ks() {
  return C.lFrame.isParent;
}

function Xs() {
  C.lFrame.isParent = !1;
}

function kg() {
  return C.lFrame.contextLView;
}

function ml() {
  return pl;
}

function Wu(e) {
  pl = e;
}

function Lg(e) {
  return C.lFrame.bindingIndex = e;
}

function tn() {
  return C.lFrame.bindingIndex++;
}

function yl(e) {
  let t = C.lFrame, n = t.bindingIndex;
  return t.bindingIndex = t.bindingIndex + e, n;
}

function jg() {
  return C.lFrame.inI18n;
}

function Vg(e, t) {
  let n = C.lFrame;
  n.bindingIndex = n.bindingRootIndex = e, Li(t);
}

function Bg() {
  return C.lFrame.currentDirectiveIndex;
}

function Li(e) {
  C.lFrame.currentDirectiveIndex = e;
}

function Js(e) {
  let t = C.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}

function vl() {
  return C.lFrame.currentQueryIndex;
}

function ea(e) {
  C.lFrame.currentQueryIndex = e;
}

function Hg(e) {
  let t = e[m];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[ee] : null;
}

function Dl(e, t, n) {
  if (n & M.SkipSelf) {
    let o = t, i = e;
    for (; o = o.parent, o === null && !(n & M.Host);) if (o = Hg(i), o === null || (i = i[Xt], o.type & 10)) break;
    if (o === null) return !1;
    t = o, e = i;
  }
  let r = C.lFrame = El();
  return r.currentTNode = t, r.lView = e, !0;
}

function ta(e) {
  let t = El(), n = e[m];
  C.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1;
}

function El() {
  let e = C.lFrame, t = e === null ? null : e.child;
  return t === null ? Il(e) : t;
}

function Il(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1
  };
  return e !== null && (e.child = t), t;
}

function Cl() {
  let e = C.lFrame;
  return C.lFrame = e.parent, e.currentTNode = null, e.lView = null, e;
}

var wl = Cl;

function na() {
  let e = Cl();
  e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0;
}

function $g(e) {
  return (C.lFrame.contextLView = Tg(e, C.lFrame.contextLView))[ne];
}

function vt() {
  return C.lFrame.selectedIndex;
}

function lt(e) {
  C.lFrame.selectedIndex = e;
}

function vo() {
  let e = C.lFrame;
  return Zs(e.tView, e.selectedIndex);
}

function XS() {
  C.lFrame.currentNamespace = ul;
}

function JS() {
  Ug();
}

function Ug() {
  C.lFrame.currentNamespace = null;
}

function bl() {
  return C.lFrame.currentNamespace;
}

var Ml = !0;

function Do() {
  return Ml;
}

function We(e) {
  Ml = e;
}

function Gg(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = il(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i));
}

function Eo(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype, {
      ngAfterContentInit: s,
      ngAfterContentChecked: a,
      ngAfterViewInit: u,
      ngAfterViewChecked: c,
      ngOnDestroy: l
    } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), u && (e.viewHooks ??= []).push(-n, u), c && ((e.viewHooks ??= []).push(n, c), (e.viewCheckHooks ??= []).push(n, c)), l != null && (e.destroyHooks ??= []).push(n, l);
  }
}

function Tr(e, t, n) {
  _l(e, t, 3, n);
}

function Sr(e, t, n, r) {
  (e[v] & 3) === n && _l(e, t, n, r);
}

function hi(e, t) {
  let n = e[v];
  (n & 3) === t && (n &= 16383, n += 1, e[v] = n);
}

function _l(e, t, n, r) {
  let o = r !== void 0 ? e[Pt] & 65535 : 0, i = r ?? -1, s = t.length - 1, a = 0;
  for (let u = o; u < s; u++) if (typeof t[u + 1] == "number") {
    if (a = t[u], r != null && a >= r) break;
  } else t[u] < 0 && (e[Pt] += 65536), (a < i || i == -1) && (zg(e, n, t, u), e[Pt] = (e[Pt] & 4294901760) + u + 2), u++;
}

function qu(e, t) {
  Ie(4, e, t);
  let n = _(null);
  try {
    t.call(e);
  } finally {
    _(n), Ie(5, e, t);
  }
}

function zg(e, t, n, r) {
  let o = n[r] < 0, i = n[r + 1], s = o ? -n[r] : n[r], a = e[s];
  o ? e[v] >> 14 < e[Pt] >> 16 && (e[v] & 3) === t && (e[v] += 16384, qu(a, i)) : qu(a, i);
}

var Vt = -1, dt = class {
  constructor(t, n, r) {
    this.factory = t, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r;
  }
};

function Wg(e) {
  return e instanceof dt;
}

function Tl(e) {
  return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex));
}

function qg(e) {
  return (e.flags & 8) !== 0;
}

function Yg(e) {
  return (e.flags & 16) !== 0;
}

var gi = {}, ji = class {
  constructor(t, n) {
    this.injector = t, this.parentInjector = n;
  }

  get(t, n, r) {
    r = po(r);
    let o = this.injector.get(t, gi, r);
    return o !== gi || n === gi ? o : this.parentInjector.get(t, n, r);
  }
};

function Sl(e) {
  return e !== Vt;
}

function jr(e) {
  return e & 32767;
}

function Zg(e) {
  return e >> 16;
}

function Vr(e, t) {
  let n = Zg(e), r = t;
  for (; n > 0;) r = r[Xt], n--;
  return r;
}

var Vi = !0;

function Yu(e) {
  let t = Vi;
  return Vi = e, t;
}

var Qg = 256, xl = Qg - 1, Nl = 5, Kg = 0, Ce = {};

function Xg(e, t, n) {
  let r;
  typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(fn) && (r = n[fn]), r == null && (r = n[fn] = Kg++);
  let o = r & xl, i = 1 << o;
  t.data[e + (o >> Nl)] |= i;
}

function Br(e, t) {
  let n = Al(e, t);
  if (n !== -1) return n;
  let r = t[m];
  r.firstCreatePass && (e.injectorIndex = t.length, mi(r.data, e), mi(t, null), mi(r.blueprint, null));
  let o = ra(e, t), i = e.injectorIndex;
  if (Sl(o)) {
    let s = jr(o), a = Vr(o, t), u = a[m].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return t[i + 8] = o, i;
}

function mi(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}

function Al(e, t) {
  return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex;
}

function ra(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0, r = null, o = t;
  for (; o !== null;) {
    if (r = kl(o), r === null) return Vt;
    if (n++, o = o[Xt], r.injectorIndex !== -1) return r.injectorIndex | n << 16;
  }
  return Vt;
}

function Bi(e, t, n) {
  Xg(e, t, n);
}

function Jg(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let n = e.attrs;
  if (n) {
    let r = n.length, o = 0;
    for (; o < r;) {
      let i = n[o];
      if (Hc(i)) break;
      if (i === 0) o = o + 2; else if (typeof i == "number") for (o++; o < r && typeof n[o] == "string";) o++; else {
        if (i === t) return n[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}

function Ol(e, t, n) {
  if (n & M.Optional || e !== void 0) return e;
  js(t, "NodeInjector");
}

function Rl(e, t, n, r) {
  if (n & M.Optional && r === void 0 && (r = null), !(n & (M.Self | M.Host))) {
    let o = e[Gt], i = ae(void 0);
    try {
      return o ? o.get(t, r, n & M.Optional) : Pc(t, r, n & M.Optional);
    } finally {
      ae(i);
    }
  }
  return Ol(r, t, n);
}

function Fl(e, t, n, r = M.Default, o) {
  if (e !== null) {
    if (t[v] & 2048 && !(r & M.Self)) {
      let s = rm(e, t, n, r, Ce);
      if (s !== Ce) return s;
    }
    let i = Pl(e, t, n, r, Ce);
    if (i !== Ce) return i;
  }
  return Rl(t, n, r, o);
}

function Pl(e, t, n, r, o) {
  let i = tm(n);
  if (typeof i == "function") {
    if (!Dl(t, e, r)) return r & M.Host ? Ol(o, n, r) : Rl(t, n, r, o);
    try {
      let s;
      if (s = i(r), s == null && !(r & M.Optional)) js(n); else return s;
    } finally {
      wl();
    }
  } else if (typeof i == "number") {
    let s = null, a = Al(e, t), u = Vt, c = r & M.Host ? t[K][ee] : null;
    for ((a === -1 || r & M.SkipSelf) && (u = a === -1 ? ra(e, t) : t[a + 8], u === Vt || !Qu(r, !1) ? a = -1 : (s = t[m], a = jr(u), t = Vr(u, t))); a !== -1;) {
      let l = t[m];
      if (Zu(i, a, l.data)) {
        let d = em(a, t, n, s, r, c);
        if (d !== Ce) return d;
      }
      u = t[a + 8], u !== Vt && Qu(r, t[m].data[a + 8] === c) && Zu(i, a, t) ? (s = l, a = jr(u), t = Vr(u, t)) : a = -1;
    }
  }
  return o;
}

function em(e, t, n, r, o, i) {
  let s = t[m], a = s.data[e + 8], u = r == null ? Jt(a) && Vi : r != s && (a.type & 3) !== 0,
    c = o & M.Host && i === a, l = xr(a, s, n, u, c);
  return l !== null ? ft(t, s, l, a) : Ce;
}

function xr(e, t, n, r, o) {
  let i = e.providerIndexes, s = t.data, a = i & 1048575, u = e.directiveStart, c = e.directiveEnd, l = i >> 20,
    d = r ? a : a + l, p = o ? a + l : c;
  for (let f = d; f < p; f++) {
    let h = s[f];
    if (f < u && n === h || f >= u && h.type === n) return f;
  }
  if (o) {
    let f = s[u];
    if (f && Oe(f) && f.type === n) return u;
  }
  return null;
}

function ft(e, t, n, r) {
  let o = e[n], i = t.data;
  if (Wg(o)) {
    let s = o;
    s.resolving && bh(wh(i[n]));
    let a = Yu(s.canSeeViewProviders);
    s.resolving = !0;
    let u, c = s.injectImpl ? ae(s.injectImpl) : null, l = Dl(e, r, M.Default);
    try {
      o = e[n] = s.factory(void 0, i, e, r), t.firstCreatePass && n >= r.directiveStart && Gg(n, i[n], t);
    } finally {
      c !== null && ae(c), Yu(a), s.resolving = !1, wl();
    }
  }
  return o;
}

function tm(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(fn) ? e[fn] : void 0;
  return typeof t == "number" ? t >= 0 ? t & xl : nm : t;
}

function Zu(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> Nl)] & r);
}

function Qu(e, t) {
  return !(e & M.Self) && !(e & M.Host && t);
}

var at = class {
  constructor(t, n) {
    this._tNode = t, this._lView = n;
  }

  get(t, n, r) {
    return Fl(this._tNode, this._lView, t, po(r), n);
  }
};

function nm() {
  return new at(G(), S());
}

function ex(e) {
  return On(() => {
    let t = e.prototype.constructor, n = t[Or] || Hi(t), r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r;) {
      let i = o[Or] || Hi(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return i => new i;
  });
}

function Hi(e) {
  return xc(e) ? () => {
    let t = Hi(Y(e));
    return t && t();
  } : Bt(e);
}

function rm(e, t, n, r, o) {
  let i = e, s = t;
  for (; i !== null && s !== null && s[v] & 2048 && !(s[v] & 512);) {
    let a = Pl(i, s, n, r | M.Self, Ce);
    if (a !== Ce) return a;
    let u = i.parent;
    if (!u) {
      let c = s[rl];
      if (c) {
        let l = c.get(n, Ce, r);
        if (l !== Ce) return l;
      }
      u = kl(s), s = s[Xt];
    }
    i = u;
  }
  return o;
}

function kl(e) {
  let t = e[m], n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[ee] : null;
}

function om(e) {
  return Jg(G(), e);
}

function Ku(e, t = null, n = null, r) {
  let o = Ll(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}

function Ll(e, t = null, n = null, r, o = new Set) {
  let i = [n || z, og(e)];
  return r = r || (typeof e == "object" ? void 0 : Q(e)), new En(i, t || Us(), r || null, o);
}

var it = class it {
  static create(t, n) {
    if (Array.isArray(t)) return Ku({ name: "" }, n, t, "");
    {
      let r = t.name ?? "";
      return Ku({ name: r }, t.parent, t.providers, r);
    }
  }
};
it.THROW_IF_NOT_FOUND = yn, it.NULL = new Pr, it.\u0275prov = R({
  token: it,
  providedIn: "any",
  factory: () => H(jc)
}), it.__NG_ELEMENT_ID__ = -1;
var re = it;
var im = new b("");
im.__NG_ELEMENT_ID__ = e => {
  let t = G();
  if (t === null) throw new w(204, !1);
  if (t.type & 2) return t.value;
  if (e & M.Optional) return null;
  throw new w(204, !1);
};
var sm = "ngOriginalError";

function yi(e) {
  return e[sm];
}

var Io = (() => {
  let t = class t {
  };
  t.__NG_ELEMENT_ID__ = am, t.__NG_ENV_ID__ = r => r;
  let e = t;
  return e;
})(), $i = class extends Io {
  constructor(t) {
    super(), this._lView = t;
  }

  onDestroy(t) {
    return fl(this._lView, t), () => Sg(this._lView, t);
  }
};

function am() {
  return new $i(S());
}

var Pn = (() => {
  let t = class t {
    constructor() {
      this.taskId = 0, this.pendingTasks = new Set, this.hasPendingTasks = new an(!1);
    }

    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }

    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let r = this.taskId++;
      return this.pendingTasks.add(r), r;
    }

    remove(r) {
      this.pendingTasks.delete(r), this.pendingTasks.size === 0 && this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }

    ngOnDestroy() {
      this.pendingTasks.clear(), this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
  };
  t.\u0275prov = R({ token: t, providedIn: "root", factory: () => new t });
  let e = t;
  return e;
})();
var Ui = class extends ve {
  constructor(t = !1) {
    super(), this.destroyRef = void 0, this.pendingTasks = void 0, this.__isAsync = t, nl() && (this.destroyRef = y(Io, { optional: !0 }) ?? void 0, this.pendingTasks = y(Pn, { optional: !0 }) ?? void 0);
  }

  emit(t) {
    let n = _(null);
    try {
      super.next(t);
    } finally {
      _(n);
    }
  }

  subscribe(t, n, r) {
    let o = t, i = n || (() => null), s = r;
    if (t && typeof t == "object") {
      let u = t;
      o = u.next?.bind(u), i = u.error?.bind(u), s = u.complete?.bind(u);
    }
    this.__isAsync && (i = this.wrapInTimeout(i), o && (o = this.wrapInTimeout(o)), s && (s = this.wrapInTimeout(s)));
    let a = super.subscribe({ next: o, error: i, complete: s });
    return t instanceof B && t.add(a), a;
  }

  wrapInTimeout(t) {
    return n => {
      let r = this.pendingTasks?.add();
      setTimeout(() => {
        t(n), r !== void 0 && this.pendingTasks?.remove(r);
      });
    };
  }
}, he = Ui;

function Hr(...e) {
}

function jl(e) {
  let t, n;

  function r() {
    e = Hr;
    try {
      n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
    } catch {
    }
  }

  return t = setTimeout(() => {
    e(), r();
  }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => {
    e(), r();
  })), () => r();
}

function Xu(e) {
  return queueMicrotask(() => e()), () => {
    e = Hr;
  };
}

var $ = class e {
  constructor({
                enableLongStackTrace: t = !1,
                shouldCoalesceEventChangeDetection: n = !1,
                shouldCoalesceRunChangeDetection: r = !1
              }) {
    if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new he(!1), this.onMicrotaskEmpty = new he(!1), this.onStable = new he(!1), this.onError = new he(!1), typeof Zone > "u") throw new w(908, !1);
    Zone.assertZonePatched();
    let o = this;
    o._nesting = 0, o._outer = o._inner = Zone.current, Zone.TaskTrackingZoneSpec && (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)), o.shouldCoalesceEventChangeDetection = !r && n, o.shouldCoalesceRunChangeDetection = r, o.callbackScheduled = !1, lm(o);
  }

  static isInAngularZone() {
    return typeof Zone < "u" && Zone.current.get("isAngularZone") === !0;
  }

  static assertInAngularZone() {
    if (!e.isInAngularZone()) throw new w(909, !1);
  }

  static assertNotInAngularZone() {
    if (e.isInAngularZone()) throw new w(909, !1);
  }

  run(t, n, r) {
    return this._inner.run(t, n, r);
  }

  runTask(t, n, r, o) {
    let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + o, t, um, Hr, Hr);
    try {
      return i.runTask(s, n, r);
    } finally {
      i.cancelTask(s);
    }
  }

  runGuarded(t, n, r) {
    return this._inner.runGuarded(t, n, r);
  }

  runOutsideAngular(t) {
    return this._outer.run(t);
  }
}, um = {};

function oa(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable) try {
    e._nesting++, e.onMicrotaskEmpty.emit(null);
  } finally {
    if (e._nesting--, !e.hasPendingMicrotasks) try {
      e.runOutsideAngular(() => e.onStable.emit(null));
    } finally {
      e.isStable = !0;
    }
  }
}

function cm(e) {
  e.isCheckStableRunning || e.callbackScheduled || (e.callbackScheduled = !0, Zone.root.run(() => {
    jl(() => {
      e.callbackScheduled = !1, Gi(e), e.isCheckStableRunning = !0, oa(e), e.isCheckStableRunning = !1;
    });
  }), Gi(e));
}

function lm(e) {
  let t = () => {
    cm(e);
  };
  e._inner = e._inner.fork({
    name: "angular", properties: { isAngularZone: !0 }, onInvokeTask: (n, r, o, i, s, a) => {
      if (dm(a)) return n.invokeTask(o, i, s, a);
      try {
        return Ju(e), n.invokeTask(o, i, s, a);
      } finally {
        (e.shouldCoalesceEventChangeDetection && i.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), ec(e);
      }
    }, onInvoke: (n, r, o, i, s, a, u) => {
      try {
        return Ju(e), n.invoke(o, i, s, a, u);
      } finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !fm(a) && t(), ec(e);
      }
    }, onHasTask: (n, r, o, i) => {
      n.hasTask(o, i), r === o && (i.change == "microTask" ? (e._hasPendingMicrotasks = i.microTask, Gi(e), oa(e)) : i.change == "macroTask" && (e.hasPendingMacrotasks = i.macroTask));
    }, onHandleError: (n, r, o, i) => (n.handleError(o, i), e.runOutsideAngular(() => e.onError.emit(i)), !1)
  });
}

function Gi(e) {
  e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1;
}

function Ju(e) {
  e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null));
}

function ec(e) {
  e._nesting--, oa(e);
}

var $r = class {
  constructor() {
    this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new he, this.onMicrotaskEmpty = new he, this.onStable = new he, this.onError = new he;
  }

  run(t, n, r) {
    return t.apply(n, r);
  }

  runGuarded(t, n, r) {
    return t.apply(n, r);
  }

  runOutsideAngular(t) {
    return t();
  }

  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
};

function dm(e) {
  return Vl(e, "__ignore_ng_zone__");
}

function fm(e) {
  return Vl(e, "__scheduler_tick__");
}

function Vl(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}

function pm(e = "zone.js", t) {
  return e === "noop" ? new $r : e === "zone.js" ? new $(t) : e;
}

var $e = class {
  constructor() {
    this._console = console;
  }

  handleError(t) {
    let n = this._findOriginalError(t);
    this._console.error("ERROR", t), n && this._console.error("ORIGINAL ERROR", n);
  }

  _findOriginalError(t) {
    let n = t && yi(t);
    for (; n && yi(n);) n = yi(n);
    return n || null;
  }
}, hm = new b("", {
  providedIn: "root", factory: () => {
    let e = y($), t = y($e);
    return n => e.runOutsideAngular(() => t.handleError(n));
  }
});

function gm() {
  return nn(G(), S());
}

function nn(e, t) {
  return new rn(ie(e, t));
}

var rn = (() => {
  let t = class t {
    constructor(r) {
      this.nativeElement = r;
    }
  };
  t.__NG_ELEMENT_ID__ = gm;
  let e = t;
  return e;
})();

function mm(e) {
  return e instanceof rn ? e.nativeElement : e;
}

function ym() {
  return this._results[Symbol.iterator]();
}

var zi = class e {
  get changes() {
    return this._changes ??= new he;
  }

  constructor(t = !1) {
    this._emitDistinctChangesOnly = t, this.dirty = !0, this._onDirty = void 0, this._results = [], this._changesDetected = !1, this._changes = void 0, this.length = 0, this.first = void 0, this.last = void 0;
    let n = e.prototype;
    n[Symbol.iterator] || (n[Symbol.iterator] = ym);
  }

  get(t) {
    return this._results[t];
  }

  map(t) {
    return this._results.map(t);
  }

  filter(t) {
    return this._results.filter(t);
  }

  find(t) {
    return this._results.find(t);
  }

  reduce(t, n) {
    return this._results.reduce(t, n);
  }

  forEach(t) {
    this._results.forEach(t);
  }

  some(t) {
    return this._results.some(t);
  }

  toArray() {
    return this._results.slice();
  }

  toString() {
    return this._results.toString();
  }

  reset(t, n) {
    this.dirty = !1;
    let r = Lh(t);
    (this._changesDetected = !kh(this._results, r, n)) && (this._results = r, this.length = r.length, this.last = r[this.length - 1], this.first = r[0]);
  }

  notifyOnChanges() {
    this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this);
  }

  onDirty(t) {
    this._onDirty = t;
  }

  setDirty() {
    this.dirty = !0, this._onDirty?.();
  }

  destroy() {
    this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe());
  }
}, _n = "ngSkipHydration", vm = "ngskiphydration";

function Bl(e) {
  let t = e.mergedAttrs;
  if (t === null) return !1;
  for (let n = 0; n < t.length; n += 2) {
    let r = t[n];
    if (typeof r == "number") return !1;
    if (typeof r == "string" && r.toLowerCase() === vm) return !0;
  }
  return !1;
}

function Hl(e) {
  return e.hasAttribute(_n);
}

function Ur(e) {
  return (e.flags & 128) === 128;
}

function Gr(e) {
  if (Ur(e)) return !0;
  let t = e.parent;
  for (; t;) {
    if (Ur(e) || Bl(t)) return !0;
    t = t.parent;
  }
  return !1;
}

var $l = new Map, Dm = 0;

function Em() {
  return Dm++;
}

function Im(e) {
  $l.set(e[go], e);
}

function Cm(e) {
  $l.delete(e[go]);
}

var tc = "__ngContext__";

function Ue(e, t) {
  we(t) ? (e[tc] = t[go], Im(t)) : e[tc] = t;
}

function Ul(e) {
  return zl(e[Cn]);
}

function Gl(e) {
  return zl(e[ge]);
}

function zl(e) {
  for (; e !== null && !oe(e);) e = e[ge];
  return e;
}

var Wi;

function tx(e) {
  Wi = e;
}

function Co() {
  if (Wi !== void 0) return Wi;
  if (typeof document < "u") return document;
  throw new w(210, !1);
}

var wm = new b("", { providedIn: "root", factory: () => bm }), bm = "ng", Mm = new b(""),
  wo = new b("", { providedIn: "platform", factory: () => "unknown" });
var nx = new b(""), rx = new b("", {
  providedIn: "root",
  factory: () => Co().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null
});

function _m() {
  let e = new bo;
  return y(wo) === "browser" && (e.store = Tm(Co(), y(wm))), e;
}

var bo = (() => {
  let t = class t {
    constructor() {
      this.store = {}, this.onSerializeCallbacks = {};
    }

    get(r, o) {
      return this.store[r] !== void 0 ? this.store[r] : o;
    }

    set(r, o) {
      this.store[r] = o;
    }

    remove(r) {
      delete this.store[r];
    }

    hasKey(r) {
      return this.store.hasOwnProperty(r);
    }

    get isEmpty() {
      return Object.keys(this.store).length === 0;
    }

    onSerialize(r, o) {
      this.onSerializeCallbacks[r] = o;
    }

    toJson() {
      for (let r in this.onSerializeCallbacks) if (this.onSerializeCallbacks.hasOwnProperty(r)) try {
        this.store[r] = this.onSerializeCallbacks[r]();
      } catch (o) {
        console.warn("Exception in onSerialize callback: ", o);
      }
      return JSON.stringify(this.store).replace(/</g, "\\u003C");
    }
  };
  t.\u0275prov = R({ token: t, providedIn: "root", factory: _m });
  let e = t;
  return e;
})();

function Tm(e, t) {
  let n = e.getElementById(t + "-state");
  if (n?.textContent) try {
    return JSON.parse(n.textContent);
  } catch (r) {
    console.warn("Exception while restoring TransferState for app " + t, r);
  }
  return {};
}

var ia = "h", sa = "b", Tn = function(e) {
    return e.FirstChild = "f", e.NextSibling = "n", e;
  }(Tn || {}), qi = "e", Yi = "t", Sn = "c", zr = "x", qt = "r", Zi = "i", Qi = "n", pn = "d", nc = "l",
  Sm = "__nghData__", aa = Sm, hn = "ngh", xm = "nghm", Wl = () => null;

function Nm(e, t, n = !1) {
  let r = e.getAttribute(hn);
  if (r == null) return null;
  let [o, i] = r.split("|");
  if (r = n ? i : o, !r) return null;
  let s = i ? `|${i}` : "", a = n ? o : s, u = {};
  if (r !== "") {
    let l = t.get(bo, null, { optional: !0 });
    l !== null && (u = l.get(aa, [])[Number(r)]);
  }
  let c = { data: u, firstChild: e.firstChild ?? null };
  return n && (c.firstChild = e, Mo(c, 0, e.nextSibling)), a ? e.setAttribute(hn, a) : e.removeAttribute(hn), c;
}

function Am() {
  Wl = Nm;
}

function ua(e, t, n = !1) {
  return Wl(e, t, n);
}

function ql(e) {
  let t = e._lView;
  return t[m].type === 2 ? null : (bn(t) && (t = t[A]), t);
}

function Om(e) {
  return e.textContent?.replace(/\s/gm, "");
}

function Rm(e) {
  let t = Co(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, {
    acceptNode(i) {
      let s = Om(i);
      return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  }), r, o = [];
  for (; r = n.nextNode();) o.push(r);
  for (let i of o) i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove();
}

function Mo(e, t, n) {
  e.segmentHeads ??= {}, e.segmentHeads[t] = n;
}

function Ki(e, t) {
  return e.segmentHeads?.[t] ?? null;
}

function Fm(e, t) {
  let n = e.data, r = n[qi]?.[t] ?? null;
  return r === null && n[Sn]?.[t] && (r = ca(e, t)), r;
}

function Yl(e, t) {
  return e.data[Sn]?.[t] ?? null;
}

function ca(e, t) {
  let n = Yl(e, t) ?? [], r = 0;
  for (let o of n) r += o[qt] * (o[zr] ?? 1);
  return r;
}

function Pm(e) {
  if (typeof e.disconnectedNodes > "u") {
    let t = e.data[pn];
    e.disconnectedNodes = t ? new Set(t) : null;
  }
  return e.disconnectedNodes;
}

function _o(e, t) {
  if (typeof e.disconnectedNodes > "u") {
    let n = e.data[pn];
    e.disconnectedNodes = n ? new Set(n) : null;
  }
  return !!Pm(e)?.has(t);
}

function Zl(e, t) {
  let n = t, r = e.corruptedTextNodes;
  n.textContent === "" ? r.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && r.set(n, "ngtns");
}

var yr = new b(""), Ql = !1, Kl = new b("", { providedIn: "root", factory: () => Ql }), km = new b(""), Lm = new b(""),
  jm = !1;
var vr;

function Vm() {
  if (vr === void 0 && (vr = null, mn.trustedTypes)) try {
    vr = mn.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
  } catch {
  }
  return vr;
}

function To(e) {
  return Vm()?.createHTML(e) || e;
}

var Dr;

function Bm() {
  if (Dr === void 0 && (Dr = null, mn.trustedTypes)) try {
    Dr = mn.trustedTypes.createPolicy("angular#unsafe-bypass", {
      createHTML: e => e,
      createScript: e => e,
      createScriptURL: e => e
    });
  } catch {
  }
  return Dr;
}

function rc(e) {
  return Bm()?.createScriptURL(e) || e;
}

var Re = class {
  constructor(t) {
    this.changingThisBreaksApplicationSecurity = t;
  }

  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Mc})`;
  }
}, Xi = class extends Re {
  getTypeName() {
    return "HTML";
  }
}, Ji = class extends Re {
  getTypeName() {
    return "Style";
  }
}, es = class extends Re {
  getTypeName() {
    return "Script";
  }
}, ts = class extends Re {
  getTypeName() {
    return "URL";
  }
}, ns = class extends Re {
  getTypeName() {
    return "ResourceURL";
  }
};

function kn(e) {
  return e instanceof Re ? e.changingThisBreaksApplicationSecurity : e;
}

function Xl(e, t) {
  let n = Hm(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Mc})`);
  }
  return n === t;
}

function Hm(e) {
  return e instanceof Re && e.getTypeName() || null;
}

function ox(e) {
  return new Xi(e);
}

function ix(e) {
  return new Ji(e);
}

function sx(e) {
  return new es(e);
}

function ax(e) {
  return new ts(e);
}

function ux(e) {
  return new ns(e);
}

function $m(e) {
  let t = new os(e);
  return Um() ? new rs(t) : t;
}

var rs = class {
  constructor(t) {
    this.inertDocumentHelper = t;
  }

  getInertBodyElement(t) {
    t = "<body><remove></remove>" + t;
    try {
      let n = new window.DOMParser().parseFromString(To(t), "text/html").body;
      return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.removeChild(n.firstChild), n);
    } catch {
      return null;
    }
  }
}, os = class {
  constructor(t) {
    this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");
  }

  getInertBodyElement(t) {
    let n = this.inertDocument.createElement("template");
    return n.innerHTML = To(t), n;
  }
};

function Um() {
  try {
    return !!new window.DOMParser().parseFromString(To(""), "text/html");
  } catch {
    return !1;
  }
}

var Gm = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

function Jl(e) {
  return e = String(e), e.match(Gm) ? e : "unsafe:" + e;
}

function Fe(e) {
  let t = {};
  for (let n of e.split(",")) t[n] = !0;
  return t;
}

function Ln(...e) {
  let t = {};
  for (let n of e) for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
  return t;
}

var ed = Fe("area,br,col,hr,img,wbr"), td = Fe("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), nd = Fe("rp,rt"),
  zm = Ln(nd, td),
  Wm = Ln(td, Fe("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),
  qm = Ln(nd, Fe("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),
  oc = Ln(ed, Wm, qm, zm), rd = Fe("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  Ym = Fe("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),
  Zm = Fe("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),
  Qm = Ln(rd, Ym, Zm), Km = Fe("script,style,template"), is = class {
    constructor() {
      this.sanitizedSomething = !1, this.buf = [];
    }

    sanitizeChildren(t) {
      let n = t.firstChild, r = !0, o = [];
      for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, r && n.firstChild) {
          o.push(n), n = ey(n);
          continue;
        }
        for (; n;) {
          n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
          let i = Jm(n);
          if (i) {
            n = i;
            break;
          }
          n = o.pop();
        }
      }
      return this.buf.join("");
    }

    startElement(t) {
      let n = ic(t).toLowerCase();
      if (!oc.hasOwnProperty(n)) return this.sanitizedSomething = !0, !Km.hasOwnProperty(n);
      this.buf.push("<"), this.buf.push(n);
      let r = t.attributes;
      for (let o = 0; o < r.length; o++) {
        let i = r.item(o), s = i.name, a = s.toLowerCase();
        if (!Qm.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let u = i.value;
        rd[a] && (u = Jl(u)), this.buf.push(" ", s, "=\"", sc(u), "\"");
      }
      return this.buf.push(">"), !0;
    }

    endElement(t) {
      let n = ic(t).toLowerCase();
      oc.hasOwnProperty(n) && !ed.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
    }

    chars(t) {
      this.buf.push(sc(t));
    }
  };

function Xm(e, t) {
  return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY;
}

function Jm(e) {
  let t = e.nextSibling;
  if (t && e !== t.previousSibling) throw od(t);
  return t;
}

function ey(e) {
  let t = e.firstChild;
  if (t && Xm(e, t)) throw od(t);
  return t;
}

function ic(e) {
  let t = e.nodeName;
  return typeof t == "string" ? t : "FORM";
}

function od(e) {
  return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);
}

var ty = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, ny = /([^\#-~ |!])/g;

function sc(e) {
  return e.replace(/&/g, "&amp;").replace(ty, function(t) {
    let n = t.charCodeAt(0), r = t.charCodeAt(1);
    return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";";
  }).replace(ny, function(t) {
    return "&#" + t.charCodeAt(0) + ";";
  }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

var Er;

function cx(e, t) {
  let n = null;
  try {
    Er = Er || $m(e);
    let r = t ? String(t) : "";
    n = Er.getInertBodyElement(r);
    let o = 5, i = r;
    do {
      if (o === 0) throw new Error("Failed to sanitize html because the input is unstable");
      o--, r = i, i = n.innerHTML, n = Er.getInertBodyElement(r);
    } while (r !== i);
    let a = new is().sanitizeChildren(ac(n) || n);
    return To(a);
  } finally {
    if (n) {
      let r = ac(n) || n;
      for (; r.firstChild;) r.removeChild(r.firstChild);
    }
  }
}

function ac(e) {
  return "content" in e && ry(e) ? e.content : null;
}

function ry(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}

var la = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e;
}(la || {});

function oy(e) {
  let t = id();
  return t ? t.sanitize(la.URL, e) || "" : Xl(e, "URL") ? kn(e) : Jl(Rn(e));
}

function iy(e) {
  let t = id();
  if (t) return rc(t.sanitize(la.RESOURCE_URL, e) || "");
  if (Xl(e, "ResourceURL")) return rc(kn(e));
  throw new w(904, !1);
}

function sy(e, t) {
  return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? iy : oy;
}

function lx(e, t, n) {
  return sy(t, n)(e);
}

function id() {
  let e = S();
  return e && e[be].sanitizer;
}

var ay = /^>|^->|<!--|-->|--!>|<!-$/g, uy = /(<|>)/g, cy = "\u200B$1\u200B";

function ly(e) {
  return e.replace(ay, t => t.replace(uy, cy));
}

function dy(e) {
  return e.ownerDocument.body;
}

function sd(e) {
  return e instanceof Function ? e() : e;
}

function kt(e) {
  return (e ?? y(re)).get(wo) === "browser";
}

var Wr = function(e) {
  return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e;
}(Wr || {}), fy;

function da(e, t) {
  return fy(e, t);
}

function Lt(e, t, n, r, o) {
  if (r != null) {
    let i, s = !1;
    oe(r) ? i = r : we(r) && (s = !0, r = r[j]);
    let a = k(r);
    e === 0 && n !== null ? o == null ? dd(t, n, a) : Yr(t, n, a, o || null, !0) : e === 1 && n !== null ? Yr(t, n, a, o || null, !0) : e === 2 ? ya(t, a, s) : e === 3 && t.destroyNode(a), i != null && _y(t, e, i, n, o);
  }
}

function ad(e, t) {
  return e.createText(t);
}

function py(e, t, n) {
  e.setValue(t, n);
}

function ud(e, t) {
  return e.createComment(ly(t));
}

function fa(e, t, n) {
  return e.createElement(t, n);
}

function hy(e, t) {
  cd(e, t), t[j] = null, t[ee] = null;
}

function gy(e, t, n, r, o, i) {
  r[j] = o, r[ee] = t, xo(e, r, n, 1, o, i);
}

function cd(e, t) {
  t[be].changeDetectionScheduler?.notify(8), xo(e, t, t[O], 2, null, null);
}

function my(e) {
  let t = e[Cn];
  if (!t) return vi(e[m], e);
  for (; t;) {
    let n = null;
    if (we(t)) n = t[Cn]; else {
      let r = t[W];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[ge] && t !== e;) we(t) && vi(t[m], t), t = t[U];
      t === null && (t = e), we(t) && vi(t[m], t), n = t && t[ge];
    }
    t = n;
  }
}

function yy(e, t, n, r) {
  let o = W + r, i = n.length;
  r > 0 && (n[o - 1][ge] = t), r < i - W ? (t[ge] = n[o], Lc(n, W + r, t)) : (n.push(t), t[ge] = null), t[U] = n;
  let s = t[ut];
  s !== null && n !== s && ld(s, t);
  let a = t[Ne];
  a !== null && a.insertView(e), ki(t), t[v] |= 128;
}

function ld(e, t) {
  let n = e[zt], r = t[U];
  if (we(r)) e[v] |= Lr.HasTransplantedViews; else {
    let o = r[U][K];
    t[K] !== o && (e[v] |= Lr.HasTransplantedViews);
  }
  n === null ? e[zt] = [t] : n.push(t);
}

function pa(e, t) {
  let n = e[zt], r = n.indexOf(t);
  n.splice(r, 1);
}

function qr(e, t) {
  if (e.length <= W) return;
  let n = W + t, r = e[n];
  if (r) {
    let o = r[ut];
    o !== null && o !== e && pa(o, r), t > 0 && (e[n - 1][ge] = r[ge]);
    let i = Fr(e, W + t);
    hy(r[m], r);
    let s = i[Ne];
    s !== null && s.detachView(i[m]), r[U] = null, r[ge] = null, r[v] &= -129;
  }
  return r;
}

function ha(e, t) {
  if (!(t[v] & 256)) {
    let n = t[O];
    n.destroyNode && xo(e, t, n, 3, null, null), my(t);
  }
}

function vi(e, t) {
  if (t[v] & 256) return;
  let n = _(null);
  try {
    t[v] &= -129, t[v] |= 256, t[ue] && Gn(t[ue]), Dy(e, t), vy(e, t), t[m].type === 1 && t[O].destroy();
    let r = t[ut];
    if (r !== null && oe(t[U])) {
      r !== t[U] && pa(r, t);
      let o = t[Ne];
      o !== null && o.detachView(e);
    }
    Cm(t);
  } finally {
    _(n);
  }
}

function vy(e, t) {
  let n = e.cleanup, r = t[In];
  if (n !== null) for (let i = 0; i < n.length - 1; i += 2) if (typeof n[i] == "string") {
    let s = n[i + 3];
    s >= 0 ? r[s]() : r[-s].unsubscribe(), i += 2;
  } else {
    let s = r[n[i + 1]];
    n[i].call(s);
  }
  r !== null && (t[In] = null);
  let o = t[je];
  if (o !== null) {
    t[je] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}

function Dy(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null) for (let r = 0; r < n.length; r += 2) {
    let o = t[n[r]];
    if (!(o instanceof dt)) {
      let i = n[r + 1];
      if (Array.isArray(i)) for (let s = 0; s < i.length; s += 2) {
        let a = o[i[s]], u = i[s + 1];
        Ie(4, a, u);
        try {
          u.call(a);
        } finally {
          Ie(5, a, u);
        }
      } else {
        Ie(4, o, i);
        try {
          i.call(o);
        } finally {
          Ie(5, o, i);
        }
      }
    }
  }
}

function ga(e, t, n) {
  return Ey(e, t.parent, n);
}

function Ey(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168;) t = r, r = t.parent;
  if (r === null) return n[j];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === $t.None || i === $t.Emulated) return null;
    }
    return ie(r, n);
  }
}

function Yr(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}

function dd(e, t, n) {
  e.appendChild(t, n);
}

function uc(e, t, n, r, o) {
  r !== null ? Yr(e, t, n, r, o) : dd(e, t, n);
}

function Iy(e, t, n, r) {
  e.removeChild(t, n, r);
}

function ma(e, t) {
  return e.parentNode(t);
}

function Cy(e, t) {
  return e.nextSibling(t);
}

function fd(e, t, n) {
  return by(e, t, n);
}

function wy(e, t, n) {
  return e.type & 40 ? ie(e, n) : null;
}

var by = wy, cc;

function So(e, t, n, r) {
  let o = ga(e, r, t), i = t[O], s = r.parent || t[ee], a = fd(s, r, t);
  if (o != null) if (Array.isArray(n)) for (let u = 0; u < n.length; u++) uc(i, o, n[u], a, !1); else uc(i, o, n, a, !1);
  cc !== void 0 && cc(i, r, t, n, o);
}

function st(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return ie(t, e);
    if (n & 4) return ss(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return st(e, r);
      {
        let o = e[t.index];
        return oe(o) ? ss(-1, o) : k(o);
      }
    } else {
      if (n & 128) return st(e, t.next);
      if (n & 32) return da(t, e)() || k(e[t.index]);
      {
        let r = pd(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = ct(e[K]);
          return st(o, r);
        } else return st(e, t.next);
      }
    }
  }
  return null;
}

function pd(e, t) {
  if (t !== null) {
    let r = e[K][ee], o = t.projection;
    return r.projection[o];
  }
  return null;
}

function ss(e, t) {
  let n = W + e + 1;
  if (n < t.length) {
    let r = t[n], o = r[m].firstChild;
    if (o !== null) return st(r, o);
  }
  return t[Ae];
}

function ya(e, t, n) {
  let r = ma(e, t);
  r && Iy(e, r, t, n);
}

function hd(e) {
  e.textContent = "";
}

function va(e, t, n, r, o, i, s) {
  for (; n != null;) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index], u = n.type;
    if (s && t === 0 && (a && Ue(k(a), r), n.flags |= 2), (n.flags & 32) !== 32) if (u & 8) va(e, t, n.child, r, o, i, !1), Lt(t, e, o, a, i); else if (u & 32) {
      let c = da(n, r), l;
      for (; l = c();) Lt(t, e, o, l, i);
      Lt(t, e, o, a, i);
    } else u & 16 ? gd(e, t, r, n, o, i) : Lt(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}

function xo(e, t, n, r, o, i) {
  va(n, r, e.firstChild, t, o, i, !1);
}

function My(e, t, n) {
  let r = t[O], o = ga(e, n, t), i = n.parent || t[ee], s = fd(i, n, t);
  gd(r, 0, t, n, o, s);
}

function gd(e, t, n, r, o, i) {
  let s = n[K], u = s[ee].projection[r.projection];
  if (Array.isArray(u)) for (let c = 0; c < u.length; c++) {
    let l = u[c];
    Lt(t, e, o, l, i);
  } else {
    let c = u, l = s[U];
    Ur(r) && (c.flags |= 128), va(e, t, c, l, o, i, !0);
  }
}

function _y(e, t, n, r, o) {
  let i = n[Ae], s = k(n);
  i !== s && Lt(t, e, r, i, o);
  for (let a = W; a < n.length; a++) {
    let u = n[a];
    xo(u[m], u, e, t, r, i);
  }
}

function Ty(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r); else {
    let i = r.indexOf("-") === -1 ? void 0 : Wr.DashCase;
    o == null ? e.removeStyle(n, r, i) : (typeof o == "string" && o.endsWith("!important") && (o = o.slice(0, -10), i |= Wr.Important), e.setStyle(n, r, o, i));
  }
}

function Sy(e, t, n) {
  e.setAttribute(t, "style", n);
}

function md(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}

function yd(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && Ai(e, t, r), o !== null && md(e, t, o), i !== null && Sy(e, t, i);
}

var Pe = {};

function dx(e = 1) {
  vd(V(), S(), vt() + e, !1);
}

function vd(e, t, n, r) {
  if (!r) if ((t[v] & 3) === 3) {
    let i = e.preOrderCheckHooks;
    i !== null && Tr(t, i, n);
  } else {
    let i = e.preOrderHooks;
    i !== null && Sr(t, i, 0, n);
  }
  lt(n);
}

function Me(e, t = M.Default) {
  let n = S();
  if (n === null) return H(e, t);
  let r = G();
  return Fl(r, n, Y(e), t);
}

function fx() {
  let e = "invalid";
  throw new Error(e);
}

function Dd(e, t, n, r, o, i) {
  let s = _(null);
  try {
    let a = null;
    o & Be.SignalBased && (a = t[r][Bn]), a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)), o & Be.HasDecoratorInputTransform && (i = e.inputTransforms[r].call(t, i)), e.setInput !== null ? e.setInput(t, a, i, n, r) : ol(t, a, r, i);
  } finally {
    _(s);
  }
}

function xy(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null) try {
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      if (o < 0) lt(~o); else {
        let i = o, s = n[++r], a = n[++r];
        Vg(s, i);
        let u = t[i];
        a(2, u);
      }
    }
  } finally {
    lt(-1);
  }
}

function No(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return d[j] = o, d[v] = r | 4 | 128 | 8 | 64, (c !== null || e && e[v] & 2048) && (d[v] |= 2048), ll(d), d[U] = d[Xt] = e, d[ne] = n, d[be] = s || e && e[be], d[O] = a || e && e[O], d[Gt] = u || e && e[Gt] || null, d[ee] = i, d[go] = Em(), d[me] = l, d[rl] = c, d[K] = t.type == 2 ? e[K] : d, d;
}

function on(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) i = Ny(e, t, n, r, o), jg() && (i.flags |= 32); else if (i.type & 64) {
    i.type = n, i.value = r, i.attrs = o;
    let s = Pg();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return yt(i, !0), i;
}

function Ny(e, t, n, r, o) {
  let i = gl(), s = Ks(), a = s ? i : i && i.parent, u = e.data[t] = Ly(e, a, n, t, r, o);
  return e.firstChild === null && (e.firstChild = u), i !== null && (s ? i.child == null && u.parent !== null && (i.child = u) : i.next === null && (i.next = u, u.prev = i)), u;
}

function Ed(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}

function Id(e, t, n, r, o) {
  let i = vt(), s = r & 2;
  try {
    lt(-1), s && t.length > A && vd(e, t, A, !1), Ie(s ? 2 : 0, o), n(r, o);
  } finally {
    lt(i), Ie(s ? 3 : 1, o);
  }
}

function Da(e, t, n) {
  if (Ws(t)) {
    let r = _(null);
    try {
      let o = t.directiveStart, i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let u = n[s];
          a.contentQueries(1, u, s);
        }
      }
    } finally {
      _(r);
    }
  }
}

function Ea(e, t, n) {
  hl() && (Uy(e, t, n, ie(n, t)), (n.flags & 64) === 64 && Md(e, t, n));
}

function Ia(e, t, n = ie) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1], a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}

function Cd(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass ? e.tView = Ca(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t;
}

function Ca(e, t, n, r, o, i, s, a, u, c, l) {
  let d = A + r, p = d + o, f = Ay(d, p), h = typeof c == "function" ? c() : c;
  return f[m] = {
    type: e,
    blueprint: f,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: f.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: p,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: u,
    consts: h,
    incompleteFirstPass: !1,
    ssrId: l
  };
}

function Ay(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : Pe);
  return n;
}

function Oy(e, t, n, r) {
  let i = r.get(Kl, Ql) || n === $t.ShadowDom, s = e.selectRootElement(t, i);
  return Ry(s), s;
}

function Ry(e) {
  wd(e);
}

var wd = () => null;

function Fy(e) {
  Hl(e) ? hd(e) : Rm(e);
}

function Py() {
  wd = Fy;
}

function ky(e, t, n, r) {
  let o = Sd(t);
  o.push(n), e.firstCreatePass && xd(e).push(r, o.length - 1);
}

function Ly(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1, a = 0;
  return en() && (a |= 128), {
    type: n,
    index: r,
    insertBeforeIndex: null,
    injectorIndex: s,
    directiveStart: -1,
    directiveEnd: -1,
    directiveStylingLast: -1,
    componentOffset: -1,
    propertyBindings: null,
    flags: a,
    providerIndexes: 0,
    value: o,
    attrs: i,
    mergedAttrs: null,
    localNames: null,
    initialInputs: void 0,
    inputs: null,
    outputs: null,
    tView: null,
    next: null,
    prev: null,
    projectionNext: null,
    child: null,
    parent: t,
    projection: null,
    styles: null,
    stylesWithoutHost: null,
    residualStyles: void 0,
    classes: null,
    classesWithoutHost: null,
    residualClasses: void 0,
    classBindings: 0,
    styleBindings: 0
  };
}

function lc(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a, u = Be.None;
    Array.isArray(s) ? (a = s[0], u = s[1]) : a = s;
    let c = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      c = o[i];
    }
    e === 0 ? dc(r, n, c, a, u) : dc(r, n, c, a);
  }
  return r;
}

function dc(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : i = e[n] = [t, r], o !== void 0 && i.push(o);
}

function jy(e, t, n) {
  let r = t.directiveStart, o = t.directiveEnd, i = e.data, s = t.attrs, a = [], u = null, c = null;
  for (let l = r; l < o; l++) {
    let d = i[l], p = n ? n.get(d) : null, f = p ? p.inputs : null, h = p ? p.outputs : null;
    u = lc(0, d.inputs, l, u, f), c = lc(1, d.outputs, l, c, h);
    let D = u !== null && s !== null && !Hs(t) ? ev(u, l, s) : null;
    a.push(D);
  }
  u !== null && (u.hasOwnProperty("class") && (t.flags |= 8), u.hasOwnProperty("style") && (t.flags |= 16)), t.initialInputs = a, t.inputs = u, t.outputs = c;
}

function Vy(e) {
  return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e;
}

function wa(e, t, n, r, o, i, s, a) {
  let u = ie(t, n), c = t.inputs, l;
  !a && c != null && (l = c[r]) ? (Ma(e, n, l, r, o), Jt(t) && By(n, t.index)) : t.type & 3 ? (r = Vy(r), o = s != null ? s(o, t.value || "", r) : o, i.setProperty(u, r, o)) : t.type & 12;
}

function By(e, t) {
  let n = ze(t, e);
  n[v] & 16 || (n[v] |= 64);
}

function ba(e, t, n, r) {
  if (hl()) {
    let o = r === null ? null : { "": -1 }, i = zy(e, n), s, a;
    i === null ? s = a = null : [s, a] = i, s !== null && bd(e, t, n, s, o, a), o && Wy(n, r, o);
  }
  n.mergedAttrs = Dn(n.mergedAttrs, n.attrs);
}

function bd(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) Bi(Br(n, t), e, r[c].type);
  Yy(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1, a = !1, u = Ed(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    n.mergedAttrs = Dn(n.mergedAttrs, l.hostAttrs), Zy(e, n, t, u, l), qy(u, l, o), l.contentQueries !== null && (n.flags |= 4), (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) && (n.flags |= 64);
    let d = l.type.prototype;
    !s && (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), s = !0), !a && (d.ngOnChanges || d.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), a = !0), u++;
  }
  jy(e, n, i);
}

function Hy(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    $y(s) != a && s.push(a), s.push(n, r, i);
  }
}

function $y(e) {
  let t = e.length;
  for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}

function Uy(e, t, n, r) {
  let o = n.directiveStart, i = n.directiveEnd;
  Jt(n) && Qy(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Br(n, t), Ue(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let u = e.data[a], c = ft(t, e, a, n);
    if (Ue(c, t), s !== null && Jy(t, a - o, c, u, n, s), Oe(u)) {
      let l = ze(n.index, t);
      l[ne] = ft(t, e, a, n);
    }
  }
}

function Md(e, t, n) {
  let r = n.directiveStart, o = n.directiveEnd, i = n.index, s = Bg();
  try {
    lt(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a], c = t[a];
      Li(a), (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) && Gy(u, c);
    }
  } finally {
    lt(-1), Li(s);
  }
}

function Gy(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}

function zy(e, t) {
  let n = e.directiveRegistry, r = null, o = null;
  if (n) for (let i = 0; i < n.length; i++) {
    let s = n[i];
    if (Uc(t, s.selectors, !1)) if (r || (r = []), Oe(s)) if (s.findHostDirectiveDefs !== null) {
      let a = [];
      o = o || new Map, s.findHostDirectiveDefs(s, a, o), r.unshift(...a, s);
      let u = a.length;
      as(e, t, u);
    } else r.unshift(s), as(e, t, 0); else o = o || new Map, s.findHostDirectiveDefs?.(s, r, o), r.push(s);
  }
  return r === null ? null : [r, o];
}

function as(e, t, n) {
  t.componentOffset = n, (e.components ??= []).push(t.index);
}

function Wy(e, t, n) {
  if (t) {
    let r = e.localNames = [];
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new w(-301, !1);
      r.push(t[o], i);
    }
  }
}

function qy(e, t, n) {
  if (n) {
    if (t.exportAs) for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    Oe(t) && (n[""] = e);
  }
}

function Yy(e, t, n) {
  e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t;
}

function Zy(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = Bt(o.type, !0)), s = new dt(i, Oe(o), Me);
  e.blueprint[r] = s, n[r] = s, Hy(e, t, r, Ed(e, n, o.hostVars, Pe), o);
}

function Qy(e, t, n) {
  let r = ie(t, e), o = Cd(n), i = e[be].rendererFactory, s = 16;
  n.signals ? s = 4096 : n.onPush && (s = 64);
  let a = Ao(e, No(e, o, null, s, r, t, null, i.createRenderer(r, n), null, null, null));
  e[t.index] = a;
}

function Ky(e, t, n, r, o, i) {
  let s = ie(e, t);
  Xy(t[O], s, i, e.value, n, r, o);
}

function Xy(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n); else {
    let a = s == null ? Rn(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}

function Jy(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null) for (let a = 0; a < s.length;) {
    let u = s[a++], c = s[a++], l = s[a++], d = s[a++];
    Dd(r, n, u, c, l, d);
  }
}

function ev(e, t, n) {
  let r = null, o = 0;
  for (; o < n.length;) {
    let i = n[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == "number") break;
    if (e.hasOwnProperty(i)) {
      r === null && (r = []);
      let s = e[i];
      for (let a = 0; a < s.length; a += 3) if (s[a] === t) {
        r.push(i, s[a + 1], s[a + 2], n[o + 1]);
        break;
      }
    }
    o += 2;
  }
  return r;
}

function _d(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}

function Td(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = _(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o], s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          ea(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      _(r);
    }
  }
}

function Ao(e, t) {
  return e[Cn] ? e[Gu][ge] = t : e[Cn] = t, e[Gu] = t, t;
}

function us(e, t, n) {
  ea(0);
  let r = _(null);
  try {
    t(e, n);
  } finally {
    _(r);
  }
}

function Sd(e) {
  return e[In] ??= [];
}

function xd(e) {
  return e.cleanup ??= [];
}

function Nd(e, t, n) {
  return (e === null || Oe(e)) && (n = Ys(n[t.index])), n[O];
}

function Ad(e, t) {
  let n = e[Gt], r = n ? n.get($e, null) : null;
  r && r.handleError(t);
}

function Ma(e, t, n, r, o) {
  for (let i = 0; i < n.length;) {
    let s = n[i++], a = n[i++], u = n[i++], c = t[s], l = e.data[s];
    Dd(l, c, r, a, u, o);
  }
}

function tv(e, t, n) {
  let r = cl(t, e);
  py(e[O], r, n);
}

function nv(e, t) {
  let n = ze(t, e), r = n[m];
  rv(r, n);
  let o = n[j];
  o !== null && n[me] === null && (n[me] = ua(o, n[Gt])), _a(r, n, n[ne]);
}

function rv(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}

function _a(e, t, n) {
  ta(t);
  try {
    let r = e.viewQuery;
    r !== null && us(1, r, n);
    let o = e.template;
    o !== null && Id(e, t, o, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[Ne]?.finishViewCreation(e), e.staticContentQueries && Td(e, t), e.staticViewQueries && us(2, e.viewQuery, n);
    let i = e.components;
    i !== null && ov(t, i);
  } catch (r) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), r;
  } finally {
    t[v] &= -5, na();
  }
}

function ov(e, t) {
  for (let n = 0; n < t.length; n++) nv(e, t[n]);
}

function Ta(e, t, n, r) {
  let o = _(null);
  try {
    let i = t.tView, a = e[v] & 4096 ? 4096 : 16,
      u = No(e, i, n, a, null, t, null, null, r?.injector ?? null, r?.embeddedViewInjector ?? null, r?.dehydratedView ?? null),
      c = e[t.index];
    u[ut] = c;
    let l = e[Ne];
    return l !== null && (u[Ne] = l.createEmbeddedView(i)), _a(i, u, n), u;
  } finally {
    _(o);
  }
}

function iv(e, t) {
  let n = W + t;
  if (n < e.length) return e[n];
}

function Zr(e, t) {
  return !t || t.firstChild === null || Ur(e);
}

function Sa(e, t, n, r = !0) {
  let o = t[m];
  if (yy(o, t, e, n), r) {
    let s = ss(n, e), a = t[O], u = ma(a, e[Ae]);
    u !== null && gy(o, e[ee], a, t, u, s);
  }
  let i = t[me];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}

function sv(e, t) {
  let n = qr(e, t);
  return n !== void 0 && ha(n[m], n), n;
}

function xn(e, t, n, r, o = !1) {
  for (; n !== null;) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(k(i)), oe(i) && Od(i, r);
    let s = n.type;
    if (s & 8) xn(e, t, n.child, r); else if (s & 32) {
      let a = da(n, t), u;
      for (; u = a();) r.push(u);
    } else if (s & 16) {
      let a = pd(t, n);
      if (Array.isArray(a)) r.push(...a); else {
        let u = ct(t[K]);
        xn(u[m], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}

function Od(e, t) {
  for (let n = W; n < e.length; n++) {
    let r = e[n], o = r[m].firstChild;
    o !== null && xn(r[m], r, o, t);
  }
  e[Ae] !== e[j] && t.push(e[Ae]);
}

var Rd = [];

function av(e) {
  return e[ue] ?? uv(e);
}

function uv(e) {
  let t = Rd.pop() ?? Object.create(lv);
  return t.lView = e, t;
}

function cv(e) {
  e.lView[ue] !== e && (e.lView = null, Rd.push(e));
}

var lv = Ze(ye({}, Hn), {
  consumerIsAlwaysLive: !0, consumerMarkedDirty: e => {
    yo(e.lView);
  }, consumerOnSignalRead() {
    this.lView[ue] = this;
  }
});

function dv(e) {
  let t = e[ue] ?? Object.create(fv);
  return t.lView = e, t;
}

var fv = Ze(ye({}, Hn), {
  consumerIsAlwaysLive: !0, consumerMarkedDirty: e => {
    let t = ct(e.lView);
    for (; t && !Fd(t[m]);) t = ct(t);
    t && dl(t);
  }, consumerOnSignalRead() {
    this.lView[ue] = this;
  }
});

function Fd(e) {
  return e.type !== 2;
}

var pv = 100;

function Pd(e, t = !0, n = 0) {
  let r = e[be], o = r.rendererFactory, i = !1;
  i || o.begin?.();
  try {
    hv(e, n);
  } catch (s) {
    throw t && Ad(e, s), s;
  } finally {
    i || (o.end?.(), r.inlineEffectRunner?.flush());
  }
}

function hv(e, t) {
  let n = ml();
  try {
    Wu(!0), cs(e, t);
    let r = 0;
    for (; Mn(e);) {
      if (r === pv) throw new w(103, !1);
      r++, cs(e, 1);
    }
  } finally {
    Wu(n);
  }
}

function gv(e, t, n, r) {
  let o = t[v];
  if ((o & 256) === 256) return;
  let i = !1, s = !1;
  !i && t[be].inlineEffectRunner?.flush(), ta(t);
  let a = !0, u = null, c = null;
  i || (Fd(e) ? (c = av(t), u = $n(c)) : Ka() === null ? (a = !1, c = dv(t), u = $n(c)) : t[ue] && (Gn(t[ue]), t[ue] = null));
  try {
    ll(t), Lg(e.bindingStartIndex), n !== null && Id(e, t, n, 2, r);
    let l = (o & 3) === 3;
    if (!i) if (l) {
      let f = e.preOrderCheckHooks;
      f !== null && Tr(t, f, null);
    } else {
      let f = e.preOrderHooks;
      f !== null && Sr(t, f, 0, null), hi(t, 0);
    }
    if (s || mv(t), kd(t, 0), e.contentQueries !== null && Td(e, t), !i) if (l) {
      let f = e.contentCheckHooks;
      f !== null && Tr(t, f);
    } else {
      let f = e.contentHooks;
      f !== null && Sr(t, f, 1), hi(t, 1);
    }
    xy(e, t);
    let d = e.components;
    d !== null && jd(t, d, 0);
    let p = e.viewQuery;
    if (p !== null && us(2, p, r), !i) if (l) {
      let f = e.viewCheckHooks;
      f !== null && Tr(t, f);
    } else {
      let f = e.viewHooks;
      f !== null && Sr(t, f, 2), hi(t, 2);
    }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[_r]) {
      for (let f of t[_r]) f();
      t[_r] = null;
    }
    i || (t[v] &= -73);
  } catch (l) {
    throw i || yo(t), l;
  } finally {
    c !== null && (Ho(c, u), a && cv(c)), na();
  }
}

function kd(e, t) {
  for (let n = Ul(e); n !== null; n = Gl(n)) for (let r = W; r < n.length; r++) {
    let o = n[r];
    Ld(o, t);
  }
}

function mv(e) {
  for (let t = Ul(e); t !== null; t = Gl(t)) {
    if (!(t[v] & Lr.HasTransplantedViews)) continue;
    let n = t[zt];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      dl(o);
    }
  }
}

function yv(e, t, n) {
  let r = ze(t, e);
  Ld(r, n);
}

function Ld(e, t) {
  Qs(e) && cs(e, t);
}

function cs(e, t) {
  let r = e[m], o = e[v], i = e[ue], s = !!(t === 0 && o & 16);
  if (s ||= !!(o & 64 && t === 0), s ||= !!(o & 1024), s ||= !!(i?.dirty && Un(i)), s ||= !1, i && (i.dirty = !1), e[v] &= -9217, s) gv(r, e, r.template, e[ne]); else if (o & 8192) {
    kd(e, 1);
    let a = r.components;
    a !== null && jd(e, a, 1);
  }
}

function jd(e, t, n) {
  for (let r = 0; r < t.length; r++) yv(e, t[r], n);
}

function xa(e, t) {
  let n = ml() ? 64 : 1088;
  for (e[be].changeDetectionScheduler?.notify(t); e;) {
    e[v] |= n;
    let r = ct(e);
    if (bn(e) && !r) return e;
    e = r;
  }
  return null;
}

var pt = class {
  get rootNodes() {
    let t = this._lView, n = t[m];
    return xn(n, t, n.firstChild, []);
  }

  constructor(t, n, r = !0) {
    this._lView = t, this._cdRefInjectingView = n, this.notifyErrorHandler = r, this._appRef = null, this._attachedToViewContainer = !1;
  }

  get context() {
    return this._lView[ne];
  }

  set context(t) {
    this._lView[ne] = t;
  }

  get destroyed() {
    return (this._lView[v] & 256) === 256;
  }

  destroy() {
    if (this._appRef) this._appRef.detachView(this); else if (this._attachedToViewContainer) {
      let t = this._lView[U];
      if (oe(t)) {
        let n = t[kr], r = n ? n.indexOf(this) : -1;
        r > -1 && (qr(t, r), Fr(n, r));
      }
      this._attachedToViewContainer = !1;
    }
    ha(this._lView[m], this._lView);
  }

  onDestroy(t) {
    fl(this._lView, t);
  }

  markForCheck() {
    xa(this._cdRefInjectingView || this._lView, 4);
  }

  detach() {
    this._lView[v] &= -129;
  }

  reattach() {
    ki(this._lView), this._lView[v] |= 128;
  }

  detectChanges() {
    this._lView[v] |= 1024, Pd(this._lView, this.notifyErrorHandler);
  }

  checkNoChanges() {
  }

  attachToViewContainerRef() {
    if (this._appRef) throw new w(902, !1);
    this._attachedToViewContainer = !0;
  }

  detachFromAppRef() {
    this._appRef = null;
    let t = bn(this._lView), n = this._lView[ut];
    n !== null && !t && pa(n, this._lView), cd(this._lView[m], this._lView);
  }

  attachToAppRef(t) {
    if (this._attachedToViewContainer) throw new w(902, !1);
    this._appRef = t;
    let n = bn(this._lView), r = this._lView[ut];
    r !== null && !n && ld(r, this._lView), ki(this._lView);
  }
}, ht = (() => {
  let t = class t {
  };
  t.__NG_ELEMENT_ID__ = Ev;
  let e = t;
  return e;
})(), vv = ht, Dv = class extends vv {
  constructor(t, n, r) {
    super(), this._declarationLView = t, this._declarationTContainer = n, this.elementRef = r;
  }

  get ssrId() {
    return this._declarationTContainer.tView?.ssrId || null;
  }

  createEmbeddedView(t, n) {
    return this.createEmbeddedViewImpl(t, n);
  }

  createEmbeddedViewImpl(t, n, r) {
    let o = Ta(this._declarationLView, this._declarationTContainer, t, { embeddedViewInjector: n, dehydratedView: r });
    return new pt(o);
  }
};

function Ev() {
  return Oo(G(), S());
}

function Oo(e, t) {
  return e.type & 4 ? new Dv(t, e, nn(e, t)) : null;
}

var ls = "<-- AT THIS LOCATION";

function Iv(e) {
  switch (e) {
    case 4:
      return "view container";
    case 2:
      return "element";
    case 8:
      return "ng-container";
    case 32:
      return "icu";
    case 64:
      return "i18n";
    case 16:
      return "projection";
    case 1:
      return "text";
    case 128:
      return "@let";
    default:
      return "<unknown>";
  }
}

function Cv(e, t) {
  let n = `During serialization, Angular was unable to find an element in the DOM:

`, r = `${Tv(e, t, !1)}

`, o = xv();
  throw new w(-502, n + r + o);
}

function wv(e) {
  let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n",
    n = `${Sv(e)}

`, r = t + n + Nv();
  return new w(-503, r);
}

function bv(e) {
  let t = [];
  if (e.attrs) for (let n = 0; n < e.attrs.length;) {
    let r = e.attrs[n++];
    if (typeof r == "number") break;
    let o = e.attrs[n++];
    t.push(`${r}="${Qr(o)}"`);
  }
  return t.join(" ");
}

var Mv = new Set(["ngh", "ng-version", "ng-server-context"]);

function _v(e) {
  let t = [];
  for (let n = 0; n < e.attributes.length; n++) {
    let r = e.attributes[n];
    Mv.has(r.name) || t.push(`${r.name}="${Qr(r.value)}"`);
  }
  return t.join(" ");
}

function Di(e, t = "\u2026") {
  switch (e.type) {
    case 1:
      return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
      let r = bv(e), o = e.value.toLowerCase();
      return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case 8:
      return "<!-- ng-container -->";
    case 4:
      return "<!-- container -->";
    default:
      return `#node(${Iv(e.type)})`;
  }
}

function Nr(e, t = "\u2026") {
  let n = e;
  switch (n.nodeType) {
    case Node.ELEMENT_NODE:
      let r = n.tagName.toLowerCase(), o = _v(n);
      return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case Node.TEXT_NODE:
      let i = n.textContent ? Qr(n.textContent) : "";
      return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE:
      return `<!-- ${Qr(n.textContent ?? "")} -->`;
    default:
      return `#node(${n.nodeType})`;
  }
}

function Tv(e, t, n) {
  let r = "  ", o = "";
  t.prev ? (o += r + `\u2026
`, o += r + Di(t.prev) + `
`) : t.type && t.type & 12 && (o += r + `\u2026
`), n ? (o += r + Di(t) + `
`, o += r + `<!-- container -->  ${ls}
`) : o += r + Di(t) + `  ${ls}
`, o += r + `\u2026
`;
  let i = t.type ? ga(e[m], t, e) : null;
  return i && (o = Nr(i, `
` + o)), o;
}

function Sv(e) {
  let t = "  ", n = "", r = e;
  return r.previousSibling && (n += t + `\u2026
`, n += t + Nr(r.previousSibling) + `
`), n += t + Nr(r) + `  ${ls}
`, e.nextSibling && (n += t + `\u2026
`), e.parentNode && (n = Nr(r.parentNode, `
` + n)), n;
}

function xv(e) {
  return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related projects
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}

function Nv() {
  return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}

function Av(e) {
  return e.replace(/\s+/gm, "");
}

function Qr(e, t = 50) {
  return e ? (e = Av(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : "";
}

function Ov(e, t) {
  let n = t[e.currentCaseLViewIndex];
  return n === null ? n : n < 0 ? ~n : n;
}

function Vd(e, t, n) {
  e.index = 0;
  let r = Ov(t, n);
  r !== null ? e.removes = t.remove[r] : e.removes = z;
}

function ds(e) {
  if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0) return e.lView[t];
    {
      e.stack.push(e.index, e.removes);
      let n = ~t, r = e.lView[m].data[n];
      return Vd(e, r, e.lView), ds(e);
    }
  } else return e.stack.length === 0 ? null : (e.removes = e.stack.pop(), e.index = e.stack.pop(), ds(e));
}

function Rv(e, t) {
  let n = { stack: [], index: -1, lView: t };
  return Vd(n, e, t), ds.bind(null, n);
}

var Fv = new RegExp(`^(\\d+)*(${sa}|${ia})*(.*)`);

function Pv(e, t) {
  let n = [e];
  for (let r of t) {
    let o = n.length - 1;
    if (o > 0 && n[o - 1] === r) {
      let i = n[o] || 1;
      n[o] = i + 1;
    } else n.push(r, "");
  }
  return n.join("");
}

function kv(e) {
  let t = e.match(Fv), [n, r, o, i] = t, s = r ? parseInt(r, 10) : o, a = [];
  for (let [u, c, l] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(l, 10) || 1;
    a.push(c, d);
  }
  return [s, ...a];
}

function Lv(e) {
  return !e.prev && e.parent?.type === 8;
}

function Ei(e) {
  return e.index - A;
}

function Nn(e, t) {
  return !(e.type & 144) && !!t[e.index] && Bd(k(t[e.index]));
}

function Bd(e) {
  return !!e && !e.isConnected;
}

function jv(e, t) {
  let n = e.i18nNodes;
  if (n) return n.get(t);
}

function Ro(e, t, n, r) {
  let o = Ei(r), i = jv(e, o);
  if (i === void 0) {
    let s = e.data[Qi];
    if (s?.[o]) i = Bv(s[o], n); else if (t.firstChild === r) i = e.firstChild; else {
      let a = r.prev === null, u = r.prev ?? r.parent;
      if (Lv(r)) {
        let c = Ei(r.parent);
        i = Ki(e, c);
      } else {
        let c = ie(u, n);
        if (a) i = c.firstChild; else {
          let l = Ei(u), d = Ki(e, l);
          if (u.type === 2 && d) {
            let f = ca(e, l) + 1;
            i = Fo(f, d);
          } else i = c.nextSibling;
        }
      }
    }
  }
  return i;
}

function Fo(e, t) {
  let n = t;
  for (let r = 0; r < e; r++) n = n.nextSibling;
  return n;
}

function Vv(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r += 2) {
    let o = t[r], i = t[r + 1];
    for (let s = 0; s < i; s++) switch (o) {
      case Tn.FirstChild:
        n = n.firstChild;
        break;
      case Tn.NextSibling:
        n = n.nextSibling;
        break;
    }
  }
  return n;
}

function Bv(e, t) {
  let [n, ...r] = kv(e), o;
  if (n === ia) o = t[K][j]; else if (n === sa) o = dy(t[K][j]); else {
    let i = Number(n);
    o = k(t[i + A]);
  }
  return Vv(o, r);
}

function fs(e, t) {
  if (e === t) return [];
  if (e.parentElement == null || t.parentElement == null) return null;
  if (e.parentElement === t.parentElement) return Hv(e, t);
  {
    let n = t.parentElement, r = fs(e, n), o = fs(n.firstChild, t);
    return !r || !o ? null : [...r, Tn.FirstChild, ...o];
  }
}

function Hv(e, t) {
  let n = [], r = null;
  for (r = e; r != null && r !== t; r = r.nextSibling) n.push(Tn.NextSibling);
  return r == null ? null : n;
}

function fc(e, t, n) {
  let r = fs(e, t);
  return r === null ? null : Pv(n, r);
}

function $v(e, t, n) {
  let r = e.parent, o, i, s;
  for (; r !== null && (Nn(r, t) || n?.has(r.index));) r = r.parent;
  r === null || !(r.type & 3) ? (o = s = ia, i = t[K][j]) : (o = r.index, i = k(t[o]), s = Rn(o - A));
  let a = k(t[e.index]);
  if (e.type & 44) {
    let c = st(t, e);
    c && (a = c);
  }
  let u = fc(i, a, s);
  if (u === null && i !== a) {
    let c = i.ownerDocument.body;
    if (u = fc(c, a, sa), u === null) throw Cv(t, e);
  }
  return u;
}

var Hd = !1;

function Uv(e) {
  Hd = e;
}

function Gv() {
  return Hd;
}

function zv(e) {
  return e = e ?? y(re), e.get(km, !1);
}

function Wv(e, t) {
  let n = t.i18nChildren.get(e);
  return n === void 0 && (n = qv(e), t.i18nChildren.set(e, n)), n;
}

function qv(e) {
  let t = new Set;

  function n(r) {
    switch (t.add(r.index), r.kind) {
      case 1:
      case 2: {
        for (let o of r.children) n(o);
        break;
      }
      case 3: {
        for (let o of r.cases) for (let i of o) n(i);
        break;
      }
    }
  }

  for (let r = A; r < e.bindingStartIndex; r++) {
    let o = e.data[r];
    if (!(!o || !o.ast)) for (let i of o.ast) n(i);
  }
  return t.size === 0 ? null : t;
}

function Yv(e, t, n) {
  if (!n.isI18nHydrationEnabled) return null;
  let o = e[m].data[t];
  if (!o || !o.ast) return null;
  let i = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set };
  return ps(e, i, n, o.ast), i.caseQueue.length === 0 && i.disconnectedNodes.size === 0 && i.disjointNodes.size === 0 ? null : i;
}

function ps(e, t, n, r) {
  let o = null;
  for (let i of r) {
    let s = Qv(e, t, n, i);
    s && (Zv(o, s) && t.disjointNodes.add(i.index - A), o = s);
  }
  return o;
}

function Zv(e, t) {
  return e && e.nextSibling !== t;
}

function Qv(e, t, n, r) {
  let o = k(e[r.index]);
  if (!o || Bd(o)) return t.disconnectedNodes.add(r.index - A), null;
  let i = o;
  switch (r.kind) {
    case 0: {
      Zl(n, i);
      break;
    }
    case 1:
    case 2: {
      ps(e, t, n, r.children);
      break;
    }
    case 3: {
      let s = e[r.currentCaseLViewIndex];
      if (s != null) {
        let a = s < 0 ? ~s : s;
        t.caseQueue.push(a), ps(e, t, n, r.cases[a]);
      }
      break;
    }
  }
  return Kv(e, r);
}

function Kv(e, t) {
  let r = e[m].data[t.index];
  return Tl(r) ? st(e, r) : t.kind === 3 ? Rv(r, e)() ?? k(e[t.index]) : k(e[t.index]) ?? null;
}

function Xv(e) {
  let t = e[me];
  if (t) {
    let { i18nNodes: n, dehydratedIcuData: r } = t;
    if (n && r) {
      let o = e[O];
      for (let i of r.values()) Jv(o, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
  }
}

function Jv(e, t, n) {
  for (let r of n.node.cases[n.case]) {
    let o = t.get(r.index - A);
    o && ya(e, o, !1);
  }
}

function $d(e) {
  let t = e[wn] ?? [], r = e[U][O];
  for (let o of t) eD(o, r);
  e[wn] = z;
}

function eD(e, t) {
  let n = 0, r = e.firstChild;
  if (r) {
    let o = e.data[qt];
    for (; n < o;) {
      let i = r.nextSibling;
      ya(t, r, !1), r = i, n++;
    }
  }
}

function Ud(e) {
  $d(e);
  for (let t = W; t < e.length; t++) Kr(e[t]);
}

function Kr(e) {
  Xv(e);
  let t = e[m];
  for (let n = A; n < t.bindingStartIndex; n++) if (oe(e[n])) {
    let r = e[n];
    Ud(r);
  } else we(e[n]) && Kr(e[n]);
}

function tD(e) {
  let t = e._views;
  for (let n of t) {
    let r = ql(n);
    if (r !== null && r[j] !== null) if (we(r)) Kr(r); else {
      let o = r[j];
      Kr(o), Ud(r);
    }
  }
}

function nD(e, t) {
  let n = [];
  for (let r of t) for (let o = 0; o < (r[zr] ?? 1); o++) {
    let i = { data: r, firstChild: null };
    r[qt] > 0 && (i.firstChild = e, e = Fo(r[qt], e)), n.push(i);
  }
  return [e, n];
}

var Gd = () => null;

function rD(e, t) {
  let n = e[wn];
  return !t || n === null || n.length === 0 ? null : n[0].data[Zi] === t ? n.shift() : ($d(e), null);
}

function oD() {
  Gd = rD;
}

function Xr(e, t) {
  return Gd(e, t);
}

var gt = class {
}, Na = new b("", { providedIn: "root", factory: () => !1 });
var zd = new b(""), hs = class {
}, Jr = class {
};

function iD(e) {
  let t = Error(`No component factory found for ${Q(e)}.`);
  return t[sD] = e, t;
}

var sD = "ngComponent";
var gs = class {
  resolveComponentFactory(t) {
    throw iD(t);
  }
}, $a = class $a {
};
$a.NULL = new gs;
var Yt = $a, eo = class {
}, Wd = (() => {
  let t = class t {
    constructor() {
      this.destroyNode = null;
    }
  };
  t.__NG_ELEMENT_ID__ = () => aD();
  let e = t;
  return e;
})();

function aD() {
  let e = S(), t = G(), n = ze(t.index, e);
  return (we(n) ? n : e)[O];
}

var uD = (() => {
  let t = class t {
  };
  t.\u0275prov = R({ token: t, providedIn: "root", factory: () => null });
  let e = t;
  return e;
})();
var pc = new Set;

function qe(e) {
  pc.has(e) || (pc.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}

var Z = function(e) {
  return e[e.EarlyRead = 0] = "EarlyRead", e[e.Write = 1] = "Write", e[e.MixedReadWrite = 2] = "MixedReadWrite", e[e.Read = 3] = "Read", e;
}(Z || {}), qd = {
  destroy() {
  }
};

function cD(e, t) {
  !t && Gs(cD);
  let n = t?.injector ?? y(re);
  return kt(n) ? (qe("NgAfterRender"), Yd(e, n, !1, t?.phase ?? Z.MixedReadWrite)) : qd;
}

function lD(e, t) {
  !t && Gs(lD);
  let n = t?.injector ?? y(re);
  return kt(n) ? (qe("NgAfterNextRender"), Yd(e, n, !0, t?.phase ?? Z.MixedReadWrite)) : qd;
}

function dD(e, t) {
  if (e instanceof Function) switch (t) {
    case Z.EarlyRead:
      return { earlyRead: e };
    case Z.Write:
      return { write: e };
    case Z.MixedReadWrite:
      return { mixedReadWrite: e };
    case Z.Read:
      return { read: e };
  }
  return e;
}

function Yd(e, t, n, r) {
  let o = dD(e, r), i = t.get(Aa), s = i.handler ??= new ys, a = [], u = [], c = () => {
    for (let f of u) s.unregister(f);
    l();
  }, l = t.get(Io).onDestroy(c), d = 0, p = (f, h) => {
    if (!h) return;
    let D = n ? (...x) => (d--, d < 1 && c(), h(...x)) : h, P = gg(t, () => new ms(f, a, D));
    s.register(P), u.push(P), d++;
  };
  return p(Z.EarlyRead, o.earlyRead), p(Z.Write, o.write), p(Z.MixedReadWrite, o.mixedReadWrite), p(Z.Read, o.read), { destroy: c };
}

var ms = class {
  constructor(t, n, r) {
    this.phase = t, this.pipelinedArgs = n, this.callbackFn = r, this.zone = y($), this.errorHandler = y($e, { optional: !0 }), y(gt, { optional: !0 })?.notify(6);
  }

  invoke() {
    try {
      let t = this.zone.runOutsideAngular(() => this.callbackFn.apply(null, this.pipelinedArgs));
      this.pipelinedArgs.splice(0, this.pipelinedArgs.length, t);
    } catch (t) {
      this.errorHandler?.handleError(t);
    }
  }
}, ys = class {
  constructor() {
    this.executingCallbacks = !1, this.buckets = {
      [Z.EarlyRead]: new Set,
      [Z.Write]: new Set,
      [Z.MixedReadWrite]: new Set,
      [Z.Read]: new Set
    }, this.deferredCallbacks = new Set;
  }

  register(t) {
    (this.executingCallbacks ? this.deferredCallbacks : this.buckets[t.phase]).add(t);
  }

  unregister(t) {
    this.buckets[t.phase].delete(t), this.deferredCallbacks.delete(t);
  }

  execute() {
    this.executingCallbacks = !0;
    for (let t of Object.values(this.buckets)) for (let n of t) n.invoke();
    this.executingCallbacks = !1;
    for (let t of this.deferredCallbacks) this.buckets[t.phase].add(t);
    this.deferredCallbacks.clear();
  }

  destroy() {
    for (let t of Object.values(this.buckets)) t.clear();
    this.deferredCallbacks.clear();
  }
}, Aa = (() => {
  let t = class t {
    constructor() {
      this.handler = null, this.internalCallbacks = [];
    }

    execute() {
      this.executeInternalCallbacks(), this.handler?.execute();
    }

    executeInternalCallbacks() {
      let r = [...this.internalCallbacks];
      this.internalCallbacks.length = 0;
      for (let o of r) o();
    }

    ngOnDestroy() {
      this.handler?.destroy(), this.handler = null, this.internalCallbacks.length = 0;
    }
  };
  t.\u0275prov = R({ token: t, providedIn: "root", factory: () => new t });
  let e = t;
  return e;
})();

function to(e, t, n) {
  let r = n ? e.styles : null, o = n ? e.classes : null, i = 0;
  if (t !== null) for (let s = 0; s < t.length; s++) {
    let a = t[s];
    if (typeof a == "number") i = a; else if (i == 1) o = Ti(o, a); else if (i == 2) {
      let u = a, c = t[++s];
      r = Ti(r, u + ": " + c + ";");
    }
  }
  n ? e.styles = r : e.stylesWithoutHost = r, n ? e.classes = o : e.classesWithoutHost = o;
}

var no = class extends Yt {
  constructor(t) {
    super(), this.ngModule = t;
  }

  resolveComponentFactory(t) {
    let n = xe(t);
    return new Zt(n, this.ngModule);
  }
};

function hc(e, t) {
  let n = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let o = e[r];
    if (o === void 0) continue;
    let i = Array.isArray(o), s = i ? o[0] : o, a = i ? o[1] : Be.None;
    t ? n.push({ propName: s, templateName: r, isSignal: (a & Be.SignalBased) !== 0 }) : n.push({
      propName: s,
      templateName: r
    });
  }
  return n;
}

function fD(e) {
  let t = e.toLowerCase();
  return t === "svg" ? ul : t === "math" ? wg : null;
}

var Zt = class extends Jr {
  get inputs() {
    let t = this.componentDef, n = t.inputTransforms, r = hc(t.inputs, !0);
    if (n !== null) for (let o of r) n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
    return r;
  }

  get outputs() {
    return hc(this.componentDef.outputs, !1);
  }

  constructor(t, n) {
    super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = Xh(t.selectors), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!n;
  }

  create(t, n, r, o) {
    let i = _(null);
    try {
      o = o || this.ngModule;
      let s = o instanceof He ? o : o?.injector;
      s && this.componentDef.getStandaloneInjector !== null && (s = this.componentDef.getStandaloneInjector(s) || s);
      let a = s ? new ji(t, s) : t, u = a.get(eo, null);
      if (u === null) throw new w(407, !1);
      let c = a.get(uD, null), l = a.get(Aa, null), d = a.get(gt, null), p = {
          rendererFactory: u,
          sanitizer: c,
          inlineEffectRunner: null,
          afterRenderEventManager: l,
          changeDetectionScheduler: d
        }, f = u.createRenderer(null, this.componentDef), h = this.componentDef.selectors[0][0] || "div",
        D = r ? Oy(f, r, this.componentDef.encapsulation, a) : fa(f, h, fD(h)), P = 512;
      this.componentDef.signals ? P |= 4096 : this.componentDef.onPush || (P |= 16);
      let x = null;
      D !== null && (x = ua(D, a, !0));
      let se = Ca(0, null, null, 1, 0, null, null, null, null, null, null),
        X = No(null, se, null, P, null, null, p, f, a, null, x);
      ta(X);
      let _e, It;
      try {
        let ce = this.componentDef, Ct, Lo = null;
        ce.findHostDirectiveDefs ? (Ct = [], Lo = new Map, ce.findHostDirectiveDefs(ce, Ct, Lo), Ct.push(ce)) : Ct = [ce];
        let Jf = pD(X, D), ep = hD(Jf, D, ce, Ct, X, p, f);
        It = Zs(se, A), D && yD(f, ce, D, r), n !== void 0 && vD(It, this.ngContentSelectors, n), _e = mD(ep, ce, Ct, Lo, X, [DD]), _a(se, X, null);
      } finally {
        na();
      }
      return new vs(this.componentType, _e, nn(It, X), X, It);
    } finally {
      _(i);
    }
  }
}, vs = class extends hs {
  constructor(t, n, r, o, i) {
    super(), this.location = r, this._rootLView = o, this._tNode = i, this.previousInputValues = null, this.instance = n, this.hostView = this.changeDetectorRef = new pt(o, void 0, !1), this.componentType = t;
  }

  setInput(t, n) {
    let r = this._tNode.inputs, o;
    if (r !== null && (o = r[t])) {
      if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n)) return;
      let i = this._rootLView;
      Ma(i[m], i, o, t, n), this.previousInputValues.set(t, n);
      let s = ze(this._tNode.index, i);
      xa(s, 1);
    }
  }

  get injector() {
    return new at(this._tNode, this._rootLView);
  }

  destroy() {
    this.hostView.destroy();
  }

  onDestroy(t) {
    this.hostView.onDestroy(t);
  }
};

function pD(e, t) {
  let n = e[m], r = A;
  return e[r] = t, on(n, r, 2, "#host", null);
}

function hD(e, t, n, r, o, i, s) {
  let a = o[m];
  gD(r, e, t, s);
  let u = null;
  t !== null && (u = ua(t, o[Gt]));
  let c = i.rendererFactory.createRenderer(t, n), l = 16;
  n.signals ? l = 4096 : n.onPush && (l = 64);
  let d = No(o, Cd(n), null, l, o[e.index], e, i, c, null, null, u);
  return a.firstCreatePass && as(a, e, r.length - 1), Ao(o, d), o[e.index] = d;
}

function gD(e, t, n, r) {
  for (let o of e) t.mergedAttrs = Dn(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null && (to(t, t.mergedAttrs, !0), n !== null && yd(r, n, t));
}

function mD(e, t, n, r, o, i) {
  let s = G(), a = o[m], u = ie(s, o);
  bd(a, o, s, n, null, r);
  for (let l = 0; l < n.length; l++) {
    let d = s.directiveStart + l, p = ft(o, a, d, s);
    Ue(p, o);
  }
  Md(a, o, s), u && Ue(u, o);
  let c = ft(o, a, s.directiveStart + s.componentOffset, s);
  if (e[ne] = o[ne] = c, i !== null) for (let l of i) l(c, t);
  return Da(a, s, o), c;
}

function yD(e, t, n, r) {
  if (r) Ai(e, n, ["ng-version", "18.1.3"]); else {
    let { attrs: o, classes: i } = Jh(t.selectors[0]);
    o && Ai(e, n, o), i && i.length > 0 && md(e, n, i.join(" "));
  }
}

function vD(e, t, n) {
  let r = e.projection = [];
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null ? Array.from(i) : null);
  }
}

function DD() {
  let e = G();
  Eo(S()[m], e);
}

var Dt = (() => {
  let t = class t {
  };
  t.__NG_ELEMENT_ID__ = ED;
  let e = t;
  return e;
})();

function ED() {
  let e = G();
  return Qd(e, S());
}

var ID = Dt, Zd = class extends ID {
  constructor(t, n, r) {
    super(), this._lContainer = t, this._hostTNode = n, this._hostLView = r;
  }

  get element() {
    return nn(this._hostTNode, this._hostLView);
  }

  get injector() {
    return new at(this._hostTNode, this._hostLView);
  }

  get parentInjector() {
    let t = ra(this._hostTNode, this._hostLView);
    if (Sl(t)) {
      let n = Vr(t, this._hostLView), r = jr(t), o = n[m].data[r + 8];
      return new at(o, n);
    } else return new at(null, this._hostLView);
  }

  clear() {
    for (; this.length > 0;) this.remove(this.length - 1);
  }

  get(t) {
    let n = gc(this._lContainer);
    return n !== null && n[t] || null;
  }

  get length() {
    return this._lContainer.length - W;
  }

  createEmbeddedView(t, n, r) {
    let o, i;
    typeof r == "number" ? o = r : r != null && (o = r.index, i = r.injector);
    let s = Xr(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s);
    return this.insertImpl(a, o, Zr(this._hostTNode, s)), a;
  }

  createComponent(t, n, r, o, i) {
    let s = t && !yg(t), a;
    if (s) a = n; else {
      let h = n || {};
      a = h.index, r = h.injector, o = h.projectableNodes, i = h.environmentInjector || h.ngModuleRef;
    }
    let u = s ? t : new Zt(xe(t)), c = r || this.parentInjector;
    if (!i && u.ngModule == null) {
      let D = (s ? c : this.parentInjector).get(He, null);
      D && (i = D);
    }
    let l = xe(u.componentType ?? {}), d = Xr(this._lContainer, l?.id ?? null), p = d?.firstChild ?? null,
      f = u.create(c, o, p, i);
    return this.insertImpl(f.hostView, a, Zr(this._hostTNode, d)), f;
  }

  insert(t, n) {
    return this.insertImpl(t, n, !0);
  }

  insertImpl(t, n, r) {
    let o = t._lView;
    if (_g(o)) {
      let a = this.indexOf(t);
      if (a !== -1) this.detach(a); else {
        let u = o[U], c = new Zd(u, u[ee], u[U]);
        c.detach(c.indexOf(t));
      }
    }
    let i = this._adjustIndex(n), s = this._lContainer;
    return Sa(s, o, i, r), t.attachToViewContainerRef(), Lc(Ii(s), i, t), t;
  }

  move(t, n) {
    return this.insert(t, n);
  }

  indexOf(t) {
    let n = gc(this._lContainer);
    return n !== null ? n.indexOf(t) : -1;
  }

  remove(t) {
    let n = this._adjustIndex(t, -1), r = qr(this._lContainer, n);
    r && (Fr(Ii(this._lContainer), n), ha(r[m], r));
  }

  detach(t) {
    let n = this._adjustIndex(t, -1), r = qr(this._lContainer, n);
    return r && Fr(Ii(this._lContainer), n) != null ? new pt(r) : null;
  }

  _adjustIndex(t, n = 0) {
    return t ?? this.length + n;
  }
};

function gc(e) {
  return e[kr];
}

function Ii(e) {
  return e[kr] || (e[kr] = []);
}

function Qd(e, t) {
  let n, r = t[e.index];
  return oe(r) ? n = r : (n = _d(r, t, null, e), t[e.index] = n, Ao(t, n)), Kd(n, t, e, r), new Zd(n, e, t);
}

function CD(e, t) {
  let n = e[O], r = n.createComment(""), o = ie(t, e), i = ma(n, o);
  return Yr(n, i, r, Cy(n, o), !1), r;
}

var Kd = Xd, Oa = () => !1;

function wD(e, t, n) {
  return Oa(e, t, n);
}

function Xd(e, t, n, r) {
  if (e[Ae]) return;
  let o;
  n.type & 8 ? o = k(r) : o = CD(t, n), e[Ae] = o;
}

function bD(e, t, n) {
  if (e[Ae] && e[wn]) return !0;
  let r = n[me], o = t.index - A;
  if (!r || Gr(t) || _o(r, o)) return !1;
  let s = Ki(r, o), a = r.data[Sn]?.[o], [u, c] = nD(s, a);
  return e[Ae] = u, e[wn] = c, !0;
}

function MD(e, t, n, r) {
  Oa(e, n, t) || Xd(e, t, n, r);
}

function _D() {
  Kd = MD, Oa = bD;
}

var Ds = class e {
  constructor(t) {
    this.queryList = t, this.matches = null;
  }

  clone() {
    return new e(this.queryList);
  }

  setDirty() {
    this.queryList.setDirty();
  }
}, Es = class e {
  constructor(t = []) {
    this.queries = t;
  }

  createEmbeddedView(t) {
    let n = t.queries;
    if (n !== null) {
      let r = t.contentQueries !== null ? t.contentQueries[0] : n.length, o = [];
      for (let i = 0; i < r; i++) {
        let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
        o.push(a.clone());
      }
      return new e(o);
    }
    return null;
  }

  insertView(t) {
    this.dirtyQueriesWithMatches(t);
  }

  detachView(t) {
    this.dirtyQueriesWithMatches(t);
  }

  finishViewCreation(t) {
    this.dirtyQueriesWithMatches(t);
  }

  dirtyQueriesWithMatches(t) {
    for (let n = 0; n < this.queries.length; n++) Ra(t, n).matches !== null && this.queries[n].setDirty();
  }
}, ro = class {
  constructor(t, n, r = null) {
    this.flags = n, this.read = r, typeof t == "string" ? this.predicate = FD(t) : this.predicate = t;
  }
}, Is = class e {
  constructor(t = []) {
    this.queries = t;
  }

  elementStart(t, n) {
    for (let r = 0; r < this.queries.length; r++) this.queries[r].elementStart(t, n);
  }

  elementEnd(t) {
    for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(t);
  }

  embeddedTView(t) {
    let n = null;
    for (let r = 0; r < this.length; r++) {
      let o = n !== null ? n.length : 0, i = this.getByIndex(r).embeddedTView(t, o);
      i && (i.indexInDeclarationView = r, n !== null ? n.push(i) : n = [i]);
    }
    return n !== null ? new e(n) : null;
  }

  template(t, n) {
    for (let r = 0; r < this.queries.length; r++) this.queries[r].template(t, n);
  }

  getByIndex(t) {
    return this.queries[t];
  }

  get length() {
    return this.queries.length;
  }

  track(t) {
    this.queries.push(t);
  }
}, Cs = class e {
  constructor(t, n = -1) {
    this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n;
  }

  elementStart(t, n) {
    this.isApplyingToNode(n) && this.matchTNode(t, n);
  }

  elementEnd(t) {
    this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
  }

  template(t, n) {
    this.elementStart(t, n);
  }

  embeddedTView(t, n) {
    return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null;
  }

  isApplyingToNode(t) {
    if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
      let n = this._declarationNodeIndex, r = t.parent;
      for (; r !== null && r.type & 8 && r.index !== n;) r = r.parent;
      return n === (r !== null ? r.index : -1);
    }
    return this._appliesToNextNode;
  }

  matchTNode(t, n) {
    let r = this.metadata.predicate;
    if (Array.isArray(r)) for (let o = 0; o < r.length; o++) {
      let i = r[o];
      this.matchTNodeWithReadOption(t, n, TD(n, i)), this.matchTNodeWithReadOption(t, n, xr(n, t, i, !1, !1));
    } else r === ht ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, xr(n, t, r, !1, !1));
  }

  matchTNodeWithReadOption(t, n, r) {
    if (r !== null) {
      let o = this.metadata.read;
      if (o !== null) if (o === rn || o === Dt || o === ht && n.type & 4) this.addMatch(n.index, -2); else {
        let i = xr(n, t, o, !1, !1);
        i !== null && this.addMatch(n.index, i);
      } else this.addMatch(n.index, r);
    }
  }

  addMatch(t, n) {
    this.matches === null ? this.matches = [t, n] : this.matches.push(t, n);
  }
};

function TD(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}

function SD(e, t) {
  return e.type & 11 ? nn(e, t) : e.type & 4 ? Oo(e, t) : null;
}

function xD(e, t, n, r) {
  return n === -1 ? SD(t, e) : n === -2 ? ND(e, t, r) : ft(e, e[m], n, t);
}

function ND(e, t, n) {
  if (n === rn) return nn(t, e);
  if (n === ht) return Oo(t, e);
  if (n === Dt) return Qd(t, e);
}

function Jd(e, t, n, r) {
  let o = t[Ne].queries[r];
  if (o.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let u = 0; s !== null && u < s.length; u += 2) {
      let c = s[u];
      if (c < 0) a.push(null); else {
        let l = i[c];
        a.push(xD(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}

function ws(e, t, n, r) {
  let o = e.queries.getByIndex(n), i = o.matches;
  if (i !== null) {
    let s = Jd(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]); else {
        let c = i[a + 1], l = t[-u];
        for (let d = W; d < l.length; d++) {
          let p = l[d];
          p[ut] === p[U] && ws(p[m], p, c, r);
        }
        if (l[zt] !== null) {
          let d = l[zt];
          for (let p = 0; p < d.length; p++) {
            let f = d[p];
            ws(f[m], f, c, r);
          }
        }
      }
    }
  }
  return r;
}

function AD(e, t) {
  return e[Ne].queries[t].queryList;
}

function ef(e, t, n) {
  let r = new zi((n & 4) === 4);
  return ky(e, t, r, r.destroy), (t[Ne] ??= new Es).queries.push(new Ds(r)) - 1;
}

function OD(e, t, n) {
  let r = V();
  return r.firstCreatePass && (tf(r, new ro(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)), ef(r, S(), t);
}

function RD(e, t, n, r) {
  let o = V();
  if (o.firstCreatePass) {
    let i = G();
    tf(o, new ro(t, n, r), i.index), PD(o, e), (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return ef(o, S(), n);
}

function FD(e) {
  return e.split(",").map(t => t.trim());
}

function tf(e, t, n) {
  e.queries === null && (e.queries = new Is), e.queries.track(new Cs(t, n));
}

function PD(e, t) {
  let n = e.contentQueries || (e.contentQueries = []), r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}

function Ra(e, t) {
  return e.queries.getByIndex(t);
}

function kD(e, t) {
  let n = e[m], r = Ra(n, t);
  return r.crossesNgTemplate ? ws(n, e, t, []) : Jd(n, e, r, t);
}

function gx(e) {
  return typeof e == "function" && e[Bn] !== void 0;
}

function LD(e) {
  let t = [], n = new Map;

  function r(o) {
    let i = n.get(o);
    if (!i) {
      let s = e(o);
      n.set(o, i = s.then(HD));
    }
    return i;
  }

  return oo.forEach((o, i) => {
    let s = [];
    o.templateUrl && s.push(r(o.templateUrl).then(c => {
      o.template = c;
    }));
    let a = typeof o.styles == "string" ? [o.styles] : o.styles || [];
    if (o.styles = a, o.styleUrl && o.styleUrls?.length) throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");
    if (o.styleUrls?.length) {
      let c = o.styles.length, l = o.styleUrls;
      o.styleUrls.forEach((d, p) => {
        a.push(""), s.push(r(d).then(f => {
          a[c + p] = f, l.splice(l.indexOf(d), 1), l.length == 0 && (o.styleUrls = void 0);
        }));
      });
    } else o.styleUrl && s.push(r(o.styleUrl).then(c => {
      a.push(c), o.styleUrl = void 0;
    }));
    let u = Promise.all(s).then(() => $D(i));
    t.push(u);
  }), VD(), Promise.all(t).then(() => {
  });
}

var oo = new Map, jD = new Set;

function VD() {
  let e = oo;
  return oo = new Map, e;
}

function BD() {
  return oo.size === 0;
}

function HD(e) {
  return typeof e == "string" ? e : e.text();
}

function $D(e) {
  jD.delete(e);
}

function UD(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}

function GD(e) {
  let t = UD(e.type), n = !0, r = [e];
  for (; t;) {
    let o;
    if (Oe(e)) o = t.\u0275cmp || t.\u0275dir; else {
      if (t.\u0275cmp) throw new w(903, !1);
      o = t.\u0275dir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        s.inputs = Ir(e.inputs), s.inputTransforms = Ir(e.inputTransforms), s.declaredInputs = Ir(e.declaredInputs), s.outputs = Ir(e.outputs);
        let a = o.hostBindings;
        a && ZD(e, a);
        let u = o.viewQuery, c = o.contentQueries;
        if (u && qD(e, u), c && YD(e, c), zD(e, o), gh(e.outputs, o.outputs), Oe(o) && o.data.animation) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i) for (let s = 0; s < i.length; s++) {
        let a = i[s];
        a && a.ngInherit && a(e), a === GD && (n = !1);
      }
    }
    t = Object.getPrototypeOf(t);
  }
  WD(r);
}

function zD(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    if (r !== void 0 && (e.inputs[n] = r, e.declaredInputs[n] = t.declaredInputs[n], t.inputTransforms !== null)) {
      let o = Array.isArray(r) ? r[0] : r;
      if (!t.inputTransforms.hasOwnProperty(o)) continue;
      e.inputTransforms ??= {}, e.inputTransforms[o] = t.inputTransforms[o];
    }
  }
}

function WD(e) {
  let t = 0, n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    o.hostVars = t += o.hostVars, o.hostAttrs = Dn(o.hostAttrs, n = Dn(n, o.hostAttrs));
  }
}

function Ir(e) {
  return e === Ht ? {} : e === z ? [] : e;
}

function qD(e, t) {
  let n = e.viewQuery;
  n ? e.viewQuery = (r, o) => {
    t(r, o), n(r, o);
  } : e.viewQuery = t;
}

function YD(e, t) {
  let n = e.contentQueries;
  n ? e.contentQueries = (r, o, i) => {
    t(r, o, i), n(r, o, i);
  } : e.contentQueries = t;
}

function ZD(e, t) {
  let n = e.hostBindings;
  n ? e.hostBindings = (r, o) => {
    t(r, o), n(r, o);
  } : e.hostBindings = t;
}

function QD(e) {
  let t = e.inputConfig, n = {};
  for (let r in t) if (t.hasOwnProperty(r)) {
    let o = t[r];
    Array.isArray(o) && o[3] && (n[r] = o[3]);
  }
  e.inputTransforms = n;
}

var Ge = class {
}, bs = class {
};
var io = class extends Ge {
  constructor(t, n, r) {
    super(), this._parent = n, this._bootstrapComponents = [], this.destroyCbs = [], this.componentFactoryResolver = new no(this);
    let o = qc(t);
    this._bootstrapComponents = sd(o.bootstrap), this._r3Injector = Ll(t, n, [{
      provide: Ge,
      useValue: this
    }, {
      provide: Yt,
      useValue: this.componentFactoryResolver
    }, ...r], Q(t), new Set(["environment"])), this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(t);
  }

  get injector() {
    return this._r3Injector;
  }

  destroy() {
    let t = this._r3Injector;
    !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null;
  }

  onDestroy(t) {
    this.destroyCbs.push(t);
  }
}, so = class extends bs {
  constructor(t) {
    super(), this.moduleType = t;
  }

  create(t) {
    return new io(this.moduleType, t, []);
  }
};

function KD(e, t, n) {
  return new io(e, t, n);
}

var ao = class extends Ge {
  constructor(t) {
    super(), this.componentFactoryResolver = new no(this), this.instance = null;
    let n = new En([...t.providers, { provide: Ge, useValue: this }, {
      provide: Yt,
      useValue: this.componentFactoryResolver
    }], t.parent || Us(), t.debugName, new Set(["environment"]));
    this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }

  destroy() {
    this.injector.destroy();
  }

  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};

function XD(e, t, n = null) {
  return new ao({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector;
}

function nf(e) {
  return eE(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1;
}

function JD(e, t) {
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]); else {
    let n = e[Symbol.iterator](), r;
    for (; !(r = n.next()).done;) t(r.value);
  }
}

function eE(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}

function Ye(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : (e[t] = n, !0);
}

function sn(e) {
  return (e.flags & 32) === 32;
}

function tE(e, t, n, r, o, i, s, a, u) {
  let c = t.consts, l = on(t, e, 4, s || null, a || null);
  ba(t, n, l, Wt(c, u)), Eo(t, l);
  let d = l.tView = Ca(2, l, r, o, i, t.directiveRegistry, t.pipeRegistry, null, t.schemas, c, null);
  return t.queries !== null && (t.queries.template(t, l), d.queries = t.queries.embeddedTView(l)), l;
}

function rf(e, t, n, r, o, i, s, a, u, c) {
  let l = n + A, d = t.firstCreatePass ? tE(l, t, e, r, o, i, s, a, u) : t.data[l];
  yt(d, !1);
  let p = of(t, e, d, n);
  Do() && So(t, e, p, d), Ue(p, e);
  let f = _d(p, e, p, d);
  return e[l] = f, Ao(e, f), wD(f, d, e), mo(d) && Ea(t, e, d), u != null && Ia(e, d, c), d;
}

function nE(e, t, n, r, o, i, s, a) {
  let u = S(), c = V(), l = Wt(c.consts, i);
  return rf(u, c, e, t, n, r, o, l, s, a), nE;
}

var of = sf;

function sf(e, t, n, r) {
  return We(!0), t[O].createComment("");
}

function rE(e, t, n, r) {
  let o = t[me], i = !o || en() || sn(n) || _o(o, r);
  if (We(i), i) return sf(e, t, n, r);
  let s = o.data[Yi]?.[r] ?? null;
  s !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = s);
  let a = Ro(o, e, t, n);
  Mo(o, r, a);
  let u = ca(o, r);
  return Fo(u, a);
}

function oE() {
  of = rE;
}

function iE(e, t, n, r) {
  let o = S(), i = tn();
  if (Ye(o, i, t)) {
    let s = V(), a = vo();
    Ky(a, o, e, t, n, r);
  }
  return iE;
}

function sE(e, t, n, r) {
  return Ye(e, tn(), n) ? t + Rn(n) + r : Pe;
}

function Cr(e, t) {
  return e << 17 | t << 2;
}

function mt(e) {
  return e >> 17 & 32767;
}

function aE(e) {
  return (e & 2) == 2;
}

function uE(e, t) {
  return e & 131071 | t << 17;
}

function Ms(e) {
  return e | 2;
}

function Qt(e) {
  return (e & 131068) >> 2;
}

function Ci(e, t) {
  return e & -131069 | t << 2;
}

function cE(e) {
  return (e & 1) === 1;
}

function _s(e) {
  return e | 1;
}

function lE(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings, a = mt(s), u = Qt(s);
  e[r] = n;
  let c = !1, l;
  if (Array.isArray(n)) {
    let d = n;
    l = d[1], (l === null || Fn(d, l) > 0) && (c = !0);
  } else l = n;
  if (o) if (u !== 0) {
    let p = mt(e[a + 1]);
    e[r + 1] = Cr(p, a), p !== 0 && (e[p + 1] = Ci(e[p + 1], r)), e[a + 1] = uE(e[a + 1], r);
  } else e[r + 1] = Cr(a, 0), a !== 0 && (e[a + 1] = Ci(e[a + 1], r)), a = r; else e[r + 1] = Cr(u, 0), a === 0 ? a = r : e[u + 1] = Ci(e[u + 1], r), u = r;
  c && (e[r + 1] = Ms(e[r + 1])), mc(e, l, r, !0), mc(e, l, r, !1), dE(t, l, e, r, i), s = Cr(a, u), i ? t.classBindings = s : t.styleBindings = s;
}

function dE(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null && typeof t == "string" && Fn(i, t) >= 0 && (n[r + 1] = _s(n[r + 1]));
}

function mc(e, t, n, r) {
  let o = e[n + 1], i = t === null, s = r ? mt(o) : Qt(o), a = !1;
  for (; s !== 0 && (a === !1 || i);) {
    let u = e[s], c = e[s + 1];
    fE(u, t) && (a = !0, e[s + 1] = r ? _s(c) : Ms(c)), s = r ? mt(c) : Qt(c);
  }
  a && (e[n + 1] = r ? Ms(o) : _s(o));
}

function fE(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Fn(e, t) >= 0 : !1;
}

var pe = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };

function pE(e) {
  return e.substring(pe.key, pe.keyEnd);
}

function hE(e) {
  return gE(e), af(e, uf(e, 0, pe.textEnd));
}

function af(e, t) {
  let n = pe.textEnd;
  return n === t ? -1 : (t = pe.keyEnd = mE(e, pe.key = t, n), uf(e, t, n));
}

function gE(e) {
  pe.key = 0, pe.keyEnd = 0, pe.value = 0, pe.valueEnd = 0, pe.textEnd = e.length;
}

function uf(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32;) t++;
  return t;
}

function mE(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32;) t++;
  return t;
}

function yE(e, t, n) {
  let r = S(), o = tn();
  if (Ye(r, o, t)) {
    let i = V(), s = vo();
    wa(i, s, r, e, t, r[O], n, !1);
  }
  return yE;
}

function Ts(e, t, n, r, o) {
  let i = t.inputs, s = o ? "class" : "style";
  Ma(e, n, i[s], s, r);
}

function cf(e, t, n) {
  return lf(e, t, n, !1), cf;
}

function vE(e, t) {
  return lf(e, t, null, !0), vE;
}

function mx(e) {
  EE(_E, DE, e, !0);
}

function DE(e, t) {
  for (let n = hE(t); n >= 0; n = af(t, n)) Bs(e, pE(t), !0);
}

function lf(e, t, n, r) {
  let o = S(), i = V(), s = yl(2);
  if (i.firstUpdatePass && ff(i, e, s, r), t !== Pe && Ye(o, s, t)) {
    let a = i.data[vt()];
    pf(i, a, o, o[O], e, o[s + 1] = SE(t, n), r, s);
  }
}

function EE(e, t, n, r) {
  let o = V(), i = yl(2);
  o.firstUpdatePass && ff(o, null, i, r);
  let s = S();
  if (n !== Pe && Ye(s, i, n)) {
    let a = o.data[vt()];
    if (hf(a, r) && !df(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = Ti(u, n || "")), Ts(o, a, s, n, r);
    } else TE(o, a, s, s[O], s[i + 1], s[i + 1] = ME(e, t, n), r, i);
  }
}

function df(e, t) {
  return t >= e.expandoStartIndex;
}

function ff(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[vt()], s = df(e, n);
    hf(i, r) && t === null && !s && (t = !1), t = IE(o, i, t, r), lE(o, i, t, n, s, r);
  }
}

function IE(e, t, n, r) {
  let o = Js(e), i = r ? t.residualClasses : t.residualStyles;
  if (o === null) (r ? t.classBindings : t.styleBindings) === 0 && (n = wi(null, e, t, n, r), n = An(n, t.attrs, r), i = null); else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o) if (n = wi(o, e, t, n, r), i === null) {
      let u = CE(e, t, r);
      u !== void 0 && Array.isArray(u) && (u = wi(null, e, t, u[1], r), u = An(u, t.attrs, r), wE(e, t, r, u));
    } else i = bE(e, t, r);
  }
  return i !== void 0 && (r ? t.residualClasses = i : t.residualStyles = i), n;
}

function CE(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (Qt(r) !== 0) return e[mt(r)];
}

function wE(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[mt(o)] = r;
}

function bE(e, t, n) {
  let r, o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = An(r, s, n);
  }
  return An(r, t.attrs, n);
}

function wi(e, t, n, r, o) {
  let i = null, s = n.directiveEnd, a = n.directiveStylingLast;
  for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], r = An(r, i.hostAttrs, o), i !== e);) a++;
  return e !== null && (n.directiveStylingLast = a), r;
}

function An(e, t, n) {
  let r = n ? 1 : 2, o = -1;
  if (t !== null) for (let i = 0; i < t.length; i++) {
    let s = t[i];
    typeof s == "number" ? o = s : o === r && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Bs(e, s, n ? !0 : t[++i]));
  }
  return e === void 0 ? null : e;
}

function ME(e, t, n) {
  if (n == null || n === "") return z;
  let r = [], o = kn(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0); else if (typeof o == "object") for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]); else typeof o == "string" && t(r, o);
  return r;
}

function _E(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && Bs(e, r, n);
}

function TE(e, t, n, r, o, i, s, a) {
  o === Pe && (o = z);
  let u = 0, c = 0, l = 0 < o.length ? o[0] : null, d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null;) {
    let p = u < o.length ? o[u + 1] : void 0, f = c < i.length ? i[c + 1] : void 0, h = null, D;
    l === d ? (u += 2, c += 2, p !== f && (h = d, D = f)) : d === null || l !== null && l < d ? (u += 2, h = l) : (c += 2, h = d, D = f), h !== null && pf(e, t, n, r, h, D, s, a), l = u < o.length ? o[u] : null, d = c < i.length ? i[c] : null;
  }
}

function pf(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data, c = u[a + 1], l = cE(c) ? yc(u, t, n, o, Qt(c), s) : void 0;
  if (!uo(l)) {
    uo(i) || aE(c) && (i = yc(u, null, n, o, a, s));
    let d = cl(vt(), n);
    Ty(r, s, d, o, i);
  }
}

function yc(e, t, n, r, o, i) {
  let s = t === null, a;
  for (; o > 0;) {
    let u = e[o], c = Array.isArray(u), l = c ? u[1] : u, d = l === null, p = n[o + 1];
    p === Pe && (p = d ? z : void 0);
    let f = d ? fi(p, r) : l === r ? p : void 0;
    if (c && !uo(f) && (f = fi(u, r)), uo(f) && (a = f, s)) return a;
    let h = e[o + 1];
    o = s ? mt(h) : Qt(h);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = fi(u, r));
  }
  return a;
}

function uo(e) {
  return e !== void 0;
}

function SE(e, t) {
  return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Q(kn(e)))), e;
}

function hf(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}

function yx(e, t) {
  qe("NgControlFlow");
  let n = S(), r = tn(), o = n[r] !== Pe ? n[r] : -1, i = o !== -1 ? vc(n, A + o) : void 0, s = 0;
  if (Ye(n, r, e)) {
    let a = _(null);
    try {
      if (i !== void 0 && sv(i, s), e !== -1) {
        let u = A + e, c = vc(n, u), l = xE(n[m], u), d = Xr(c, l.tView.ssrId), p = Ta(n, l, t, { dehydratedView: d });
        Sa(c, p, s, Zr(l, d));
      }
    } finally {
      _(a);
    }
  } else if (i !== void 0) {
    let a = iv(i, s);
    a !== void 0 && (a[ne] = t);
  }
}

function vc(e, t) {
  return e[t];
}

function xE(e, t) {
  return Zs(e, t);
}

function NE(e, t, n, r, o, i) {
  let s = t.consts, a = Wt(s, o), u = on(t, e, 2, r, a);
  return ba(t, n, u, Wt(s, i)), u.attrs !== null && to(u, u.attrs, !1), u.mergedAttrs !== null && to(u, u.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, u), u;
}

function gf(e, t, n, r) {
  let o = S(), i = V(), s = A + e, a = o[O], u = i.firstCreatePass ? NE(s, i, o, t, n, r) : i.data[s],
    c = yf(i, o, u, a, t, e);
  o[s] = c;
  let l = mo(u);
  return yt(u, !0), yd(a, c, u), !sn(u) && Do() && So(i, o, c, u), xg() === 0 && Ue(c, o), Ng(), l && (Ea(i, o, u), Da(i, u, o)), r !== null && Ia(o, u), gf;
}

function mf() {
  let e = G();
  Ks() ? Xs() : (e = e.parent, yt(e, !1));
  let t = e;
  Og(t) && Fg(), Ag();
  let n = V();
  return n.firstCreatePass && (Eo(n, e), Ws(e) && n.queries.elementEnd(e)), t.classesWithoutHost != null && qg(t) && Ts(n, t, S(), t.classesWithoutHost, !0), t.stylesWithoutHost != null && Yg(t) && Ts(n, t, S(), t.stylesWithoutHost, !1), mf;
}

function AE(e, t, n, r) {
  return gf(e, t, n, r), mf(), AE;
}

var yf = (e, t, n, r, o, i) => (We(!0), fa(r, o, bl()));

function OE(e, t, n, r, o, i) {
  let s = t[me], a = !s || en() || sn(n) || _o(s, i);
  if (We(a), a) return fa(r, o, bl());
  let u = Ro(s, e, t, n);
  return Yl(s, i) && Mo(s, i, u.nextSibling), s && (Bl(n) || Hl(u)) && Jt(n) && (Rg(n), hd(u)), u;
}

function RE() {
  yf = OE;
}

function FE(e, t, n, r, o) {
  let i = t.consts, s = Wt(i, r), a = on(t, e, 8, "ng-container", s);
  s !== null && to(a, s, !0);
  let u = Wt(i, o);
  return ba(t, n, a, u), t.queries !== null && t.queries.elementStart(t, a), a;
}

function vf(e, t, n) {
  let r = S(), o = V(), i = e + A, s = o.firstCreatePass ? FE(i, o, r, t, n) : o.data[i];
  yt(s, !0);
  let a = Ef(o, r, s, e);
  return r[i] = a, Do() && So(o, r, a, s), Ue(a, r), mo(s) && (Ea(o, r, s), Da(o, s, r)), n != null && Ia(r, s), vf;
}

function Df() {
  let e = G(), t = V();
  return Ks() ? Xs() : (e = e.parent, yt(e, !1)), t.firstCreatePass && (Eo(t, e), Ws(e) && t.queries.elementEnd(e)), Df;
}

function PE(e, t, n) {
  return vf(e, t, n), Df(), PE;
}

var Ef = (e, t, n, r) => (We(!0), ud(t[O], ""));

function kE(e, t, n, r) {
  let o, i = t[me], s = !i || en() || sn(n);
  if (We(s), s) return ud(t[O], "");
  let a = Ro(i, e, t, n), u = Fm(i, r);
  return Mo(i, r, a), o = Fo(u, a), o;
}

function LE() {
  Ef = kE;
}

function vx() {
  return S();
}

function jE(e, t, n) {
  let r = S(), o = tn();
  if (Ye(r, o, t)) {
    let i = V(), s = vo();
    wa(i, s, r, e, t, r[O], n, !0);
  }
  return jE;
}

function VE(e, t, n) {
  let r = S(), o = tn();
  if (Ye(r, o, t)) {
    let i = V(), s = vo(), a = Js(i.data), u = Nd(a, s, r);
    wa(i, s, r, e, t, u, n, !0);
  }
  return VE;
}

var Kt = "en-US";
var BE = Kt;

function If(e) {
  typeof e == "string" && (BE = e.toLowerCase().replace(/_/g, "-"));
}

var HE = (e, t, n) => {
};

function $E(e, t, n, r) {
  let o = S(), i = V(), s = G();
  return Cf(i, o, o[O], s, e, t, r), $E;
}

function UE(e, t) {
  let n = G(), r = S(), o = V(), i = Js(o.data), s = Nd(i, n, r);
  return Cf(o, r, s, n, e, t), UE;
}

function GE(e, t, n, r) {
  let o = e.cleanup;
  if (o != null) for (let i = 0; i < o.length - 1; i += 2) {
    let s = o[i];
    if (s === n && o[i + 1] === r) {
      let a = t[In], u = o[i + 2];
      return a.length > u ? a[u] : null;
    }
    typeof s == "string" && (i += 2);
  }
  return null;
}

function Cf(e, t, n, r, o, i, s) {
  let a = mo(r), c = e.firstCreatePass && xd(e), l = t[ne], d = Sd(t), p = !0;
  if (r.type & 3 || s) {
    let D = ie(r, t), P = s ? s(D) : D, x = d.length, se = s ? _e => s(k(_e[r.index])) : r.index, X = null;
    if (!s && a && (X = GE(e, t, o, r.index)), X !== null) {
      let _e = X.__ngLastListenerFn__ || X;
      _e.__ngNextListenerFn__ = i, X.__ngLastListenerFn__ = i, p = !1;
    } else {
      i = Ec(r, t, l, i), HE(D, o, i);
      let _e = n.listen(P, o, i);
      d.push(i, _e), c && c.push(o, se, x, x + 1);
    }
  } else i = Ec(r, t, l, i);
  let f = r.outputs, h;
  if (p && f !== null && (h = f[o])) {
    let D = h.length;
    if (D) for (let P = 0; P < D; P += 2) {
      let x = h[P], se = h[P + 1], It = t[x][se].subscribe(i), ce = d.length;
      d.push(i, It), c && c.push(o, r.index, ce, -(ce + 1));
    }
  }
}

function Dc(e, t, n, r) {
  let o = _(null);
  try {
    return Ie(6, t, n), n(r) !== !1;
  } catch (i) {
    return Ad(e, i), !1;
  } finally {
    Ie(7, t, n), _(o);
  }
}

function Ec(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = e.componentOffset > -1 ? ze(e.index, t) : t;
    xa(s, 5);
    let a = Dc(t, n, r, i), u = o.__ngNextListenerFn__;
    for (; u;) a = Dc(t, n, u, i) && a, u = u.__ngNextListenerFn__;
    return a;
  };
}

function Dx(e = 1) {
  return $g(e);
}

function zE(e, t) {
  let n = null, r = qh(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? Uc(e, i, !0) : Qh(r, i)) return o;
  }
  return n;
}

function Ex(e) {
  let t = S()[K][ee];
  if (!t.projection) {
    let n = e ? e.length : 1, r = t.projection = jh(n, null), o = r.slice(), i = t.child;
    for (; i !== null;) {
      if (i.type !== 128) {
        let s = e ? zE(i, e) : 0;
        s !== null && (o[s] ? o[s].projectionNext = i : r[s] = i, o[s] = i);
      }
      i = i.next;
    }
  }
}

function Ix(e, t = 0, n, r, o, i) {
  let s = S(), a = V(), u = r ? e + 1 : null;
  u !== null && rf(s, a, u, r, o, i, null, n);
  let c = on(a, A + e, 16, null, n || null);
  c.projection === null && (c.projection = t), Xs();
  let d = !s[me] || en();
  s[K][ee].projection[c.projection] === null && u !== null ? WE(s, a, u) : d && (c.flags & 32) !== 32 && My(a, s, c);
}

function WE(e, t, n) {
  let r = A + n, o = t.data[r], i = e[r], s = Xr(i, o.tView.ssrId), a = Ta(e, o, void 0, { dehydratedView: s });
  Sa(i, a, 0, Zr(o, s));
}

function Cx(e, t, n, r) {
  RD(e, t, n, r);
}

function wx(e, t, n) {
  OD(e, t, n);
}

function bx(e) {
  let t = S(), n = V(), r = vl();
  ea(r + 1);
  let o = Ra(n, r);
  if (e.dirty && Mg(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]); else {
      let i = kD(t, r);
      e.reset(i, mm), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}

function Mx() {
  return AD(S(), vl());
}

function _x(e) {
  let t = kg();
  return bg(t, A + e);
}

function Tx(e, t = "") {
  let n = S(), r = V(), o = e + A, i = r.firstCreatePass ? on(r, o, 1, t, null) : r.data[o], s = wf(r, n, i, t, e);
  n[o] = s, Do() && So(r, n, s, i), yt(i, !1);
}

var wf = (e, t, n, r, o) => (We(!0), ad(t[O], r));

function qE(e, t, n, r, o) {
  let i = t[me], s = !i || en() || sn(n) || _o(i, o);
  return We(s), s ? ad(t[O], r) : Ro(i, e, t, n);
}

function YE() {
  wf = qE;
}

function ZE(e) {
  return bf("", e, ""), ZE;
}

function bf(e, t, n) {
  let r = S(), o = sE(r, e, t, n);
  return o !== Pe && tv(r, vt(), o), bf;
}

function QE(e, t, n) {
  let r = V();
  if (r.firstCreatePass) {
    let o = Oe(e);
    Ss(n, r.data, r.blueprint, o, !0), Ss(t, r.data, r.blueprint, o, !1);
  }
}

function Ss(e, t, n, r, o) {
  if (e = Y(e), Array.isArray(e)) for (let i = 0; i < e.length; i++) Ss(e[i], t, n, r, o); else {
    let i = V(), s = S(), a = G(), u = Ut(e) ? e : Y(e.provide), c = tl(e), l = a.providerIndexes & 1048575,
      d = a.directiveStart, p = a.providerIndexes >> 20;
    if (Ut(e) || !e.multi) {
      let f = new dt(c, o, Me), h = Mi(u, t, o ? l : l + p, d);
      h === -1 ? (Bi(Br(a, s), i, u), bi(i, e, t.length), t.push(u), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(f), s.push(f)) : (n[h] = f, s[h] = f);
    } else {
      let f = Mi(u, t, l + p, d), h = Mi(u, t, l, l + p), D = f >= 0 && n[f], P = h >= 0 && n[h];
      if (o && !P || !o && !D) {
        Bi(Br(a, s), i, u);
        let x = JE(o ? XE : KE, n.length, o, r, c);
        !o && P && (n[h].providerFactory = x), bi(i, e, t.length, 0), t.push(u), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(x), s.push(x);
      } else {
        let x = Mf(n[o ? h : f], c, !o && r);
        bi(i, e, f > -1 ? f : h, x);
      }
      !o && r && P && n[h].componentProviders++;
    }
  }
}

function bi(e, t, n, r) {
  let o = Ut(t), i = ug(t);
  if (o || i) {
    let u = (i ? Y(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}

function Mf(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}

function Mi(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}

function KE(e, t, n, r) {
  return xs(this.multi, []);
}

function XE(e, t, n, r) {
  let o = this.multi, i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders, a = ft(n, n[m], this.providerFactory.index, r);
    i = a.slice(0, s), xs(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else i = [], xs(o, i);
  return i;
}

function xs(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}

function JE(e, t, n, r, o) {
  let i = new dt(e, n, Me);
  return i.multi = [], i.index = t, i.componentProviders = 0, Mf(i, o, r && !n), i;
}

function Sx(e, t = []) {
  return n => {
    n.providersResolver = (r, o) => QE(r, o ? o(e) : e, t);
  };
}

var eI = (() => {
  let t = class t {
    constructor(r) {
      this._injector = r, this.cachedInjectors = new Map;
    }

    getOrCreateStandaloneInjector(r) {
      if (!r.standalone) return null;
      if (!this.cachedInjectors.has(r)) {
        let o = Kc(!1, r.type), i = o.length > 0 ? XD([o], this._injector, `Standalone[${r.type.name}]`) : null;
        this.cachedInjectors.set(r, i);
      }
      return this.cachedInjectors.get(r);
    }

    ngOnDestroy() {
      try {
        for (let r of this.cachedInjectors.values()) r !== null && r.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
  };
  t.\u0275prov = R({ token: t, providedIn: "environment", factory: () => new t(H(He)) });
  let e = t;
  return e;
})();

function xx(e) {
  qe("NgStandalone"), e.getStandaloneInjector = t => t.get(eI).getOrCreateStandaloneInjector(e);
}

function Nx(e, t) {
  return Oo(e, t);
}

var wr = null;

function tI(e) {
  wr !== null && (e.defaultEncapsulation !== wr.defaultEncapsulation || e.preserveWhitespaces !== wr.preserveWhitespaces) || (wr = e);
}

var Ax = (() => {
  let t = class t {
    log(r) {
      console.log(r);
    }

    warn(r) {
      console.warn(r);
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac, providedIn: "platform" });
  let e = t;
  return e;
})();
var nI = new b(""), rI = new b(""), Ox = (() => {
  let t = class t {
    constructor(r, o, i) {
      this._ngZone = r, this.registry = o, this._isZoneStable = !0, this._callbacks = [], this.taskTrackingZone = null, Fa || (iI(i), i.addToWindow(o)), this._watchAngularEvents(), r.run(() => {
        this.taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone");
      });
    }

    _watchAngularEvents() {
      this._ngZone.onUnstable.subscribe({
        next: () => {
          this._isZoneStable = !1;
        }
      }), this._ngZone.runOutsideAngular(() => {
        this._ngZone.onStable.subscribe({
          next: () => {
            $.assertNotInAngularZone(), queueMicrotask(() => {
              this._isZoneStable = !0, this._runCallbacksIfReady();
            });
          }
        });
      });
    }

    isStable() {
      return this._isZoneStable && !this._ngZone.hasPendingMacrotasks;
    }

    _runCallbacksIfReady() {
      if (this.isStable()) queueMicrotask(() => {
        for (; this._callbacks.length !== 0;) {
          let r = this._callbacks.pop();
          clearTimeout(r.timeoutId), r.doneCb();
        }
      }); else {
        let r = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(r) ? (clearTimeout(o.timeoutId), !1) : !0);
      }
    }

    getPendingTasks() {
      return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(r => ({
        source: r.source,
        creationLocation: r.creationLocation,
        data: r.data
      })) : [];
    }

    addCallback(r, o, i) {
      let s = -1;
      o && o > 0 && (s = setTimeout(() => {
        this._callbacks = this._callbacks.filter(a => a.timeoutId !== s), r();
      }, o)), this._callbacks.push({ doneCb: r, timeoutId: s, updateCb: i });
    }

    whenStable(r, o, i) {
      if (i && !this.taskTrackingZone) throw new Error("Task tracking zone is required when passing an update callback to whenStable(). Is \"zone.js/plugins/task-tracking\" loaded?");
      this.addCallback(r, o, i), this._runCallbacksIfReady();
    }

    registerApplication(r) {
      this.registry.registerApplication(r, this);
    }

    unregisterApplication(r) {
      this.registry.unregisterApplication(r);
    }

    findProviders(r, o, i) {
      return [];
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t)(H($), H(oI), H(rI));
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac });
  let e = t;
  return e;
})(), oI = (() => {
  let t = class t {
    constructor() {
      this._applications = new Map;
    }

    registerApplication(r, o) {
      this._applications.set(r, o);
    }

    unregisterApplication(r) {
      this._applications.delete(r);
    }

    unregisterAllApplications() {
      this._applications.clear();
    }

    getTestability(r) {
      return this._applications.get(r) || null;
    }

    getAllTestabilities() {
      return Array.from(this._applications.values());
    }

    getAllRootElements() {
      return Array.from(this._applications.keys());
    }

    findTestabilityInTree(r, o = !0) {
      return Fa?.findTestabilityInTree(this, r, o) ?? null;
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac, providedIn: "platform" });
  let e = t;
  return e;
})();

function iI(e) {
  Fa = e;
}

var Fa;

function Pa(e) {
  return !!e && typeof e.then == "function";
}

function _f(e) {
  return !!e && typeof e.subscribe == "function";
}

var sI = new b(""), ka = (() => {
  let t = class t {
    constructor() {
      this.initialized = !1, this.done = !1, this.donePromise = new Promise((r, o) => {
        this.resolve = r, this.reject = o;
      }), this.appInits = y(sI, { optional: !0 }) ?? [];
    }

    runInitializers() {
      if (this.initialized) return;
      let r = [];
      for (let i of this.appInits) {
        let s = i();
        if (Pa(s)) r.push(s); else if (_f(s)) {
          let a = new Promise((u, c) => {
            s.subscribe({ complete: u, error: c });
          });
          r.push(a);
        }
      }
      let o = () => {
        this.done = !0, this.resolve();
      };
      Promise.all(r).then(() => {
        o();
      }).catch(i => {
        this.reject(i);
      }), r.length === 0 && o(), this.initialized = !0;
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac, providedIn: "root" });
  let e = t;
  return e;
})(), Tf = new b("");

function Sf() {
  Ja(() => {
    throw new w(600, !1);
  });
}

function aI(e) {
  return e.isBoundToModule;
}

var uI = 10;

function xf(e, t, n) {
  try {
    let r = n();
    return Pa(r) ? r.catch(o => {
      throw t.runOutsideAngular(() => e.handleError(o)), o;
    }) : r;
  } catch (r) {
    throw t.runOutsideAngular(() => e.handleError(r)), r;
  }
}

function Nf(e, t) {
  return Array.isArray(t) ? t.reduce(Nf, e) : ye(ye({}, e), t);
}

var jn = (() => {
  let t = class t {
    constructor() {
      this._bootstrapListeners = [], this._runningTick = !1, this._destroyed = !1, this._destroyListeners = [], this._views = [], this.internalErrorHandler = y(hm), this.afterRenderEffectManager = y(Aa), this.zonelessEnabled = y(Na), this.externalTestViews = new Set, this.beforeRender = new ve, this.afterTick = new ve, this.componentTypes = [], this.components = [], this.isStable = y(Pn).hasPendingTasks.pipe(Se(r => !r)), this._injector = y(He);
    }

    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }

    get destroyed() {
      return this._destroyed;
    }

    get injector() {
      return this._injector;
    }

    bootstrap(r, o) {
      let i = r instanceof Jr;
      if (!this._injector.get(ka).done) {
        let f = !i && ng(r), h = !1;
        throw new w(405, h);
      }
      let a;
      i ? a = r : a = this._injector.get(Yt).resolveComponentFactory(r), this.componentTypes.push(a.componentType);
      let u = aI(a) ? void 0 : this._injector.get(Ge), c = o || a.selector, l = a.create(re.NULL, [], c, u),
        d = l.location.nativeElement, p = l.injector.get(nI, null);
      return p?.registerApplication(d), l.onDestroy(() => {
        this.detachView(l.hostView), Ar(this.components, l), p?.unregisterApplication(d);
      }), this._loadComponent(l), l;
    }

    tick() {
      this._tick(!0);
    }

    _tick(r) {
      if (this._runningTick) throw new w(101, !1);
      let o = _(null);
      try {
        this._runningTick = !0, this.detectChangesInAttachedViews(r);
      } catch (i) {
        this.internalErrorHandler(i);
      } finally {
        this._runningTick = !1, _(o), this.afterTick.next();
      }
    }

    detectChangesInAttachedViews(r) {
      let o = null;
      this._injector.destroyed || (o = this._injector.get(eo, null, { optional: !0 }));
      let i = 0, s = this.afterRenderEffectManager;
      for (; i < uI;) {
        let a = i === 0;
        if (r || !a) {
          this.beforeRender.next(a);
          for (let { _lView: u, notifyErrorHandler: c } of this._views) cI(u, c, a, this.zonelessEnabled);
        } else o?.begin?.(), o?.end?.();
        if (i++, s.executeInternalCallbacks(), !this.allViews.some(({ _lView: u }) => Mn(u)) && (s.execute(), !this.allViews.some(({ _lView: u }) => Mn(u)))) break;
      }
    }

    attachView(r) {
      let o = r;
      this._views.push(o), o.attachToAppRef(this);
    }

    detachView(r) {
      let o = r;
      Ar(this._views, o), o.detachFromAppRef();
    }

    _loadComponent(r) {
      this.attachView(r.hostView), this.tick(), this.components.push(r);
      let o = this._injector.get(Tf, []);
      [...this._bootstrapListeners, ...o].forEach(i => i(r));
    }

    ngOnDestroy() {
      if (!this._destroyed) try {
        this._destroyListeners.forEach(r => r()), this._views.slice().forEach(r => r.destroy());
      } finally {
        this._destroyed = !0, this._views = [], this._bootstrapListeners = [], this._destroyListeners = [];
      }
    }

    onDestroy(r) {
      return this._destroyListeners.push(r), () => Ar(this._destroyListeners, r);
    }

    destroy() {
      if (this._destroyed) throw new w(406, !1);
      let r = this._injector;
      r.destroy && !r.destroyed && r.destroy();
    }

    get viewCount() {
      return this._views.length;
    }

    warnIfDestroyed() {
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac, providedIn: "root" });
  let e = t;
  return e;
})();

function Ar(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}

var br;

function Af(e) {
  br ??= new WeakMap;
  let t = br.get(e);
  if (t) return t;
  let n = e.isStable.pipe(ui(r => r)).toPromise().then(() => {
  });
  return br.set(e, n), e.onDestroy(() => br?.delete(e)), n;
}

function cI(e, t, n, r) {
  if (!n && !Mn(e)) return;
  Pd(e, t, n && !r ? 0 : 1);
}

var Ns = class {
  constructor(t, n) {
    this.ngModuleFactory = t, this.componentFactories = n;
  }
}, Rx = (() => {
  let t = class t {
    compileModuleSync(r) {
      return new so(r);
    }

    compileModuleAsync(r) {
      return Promise.resolve(this.compileModuleSync(r));
    }

    compileModuleAndAllComponentsSync(r) {
      let o = this.compileModuleSync(r), i = qc(r), s = sd(i.declarations).reduce((a, u) => {
        let c = xe(u);
        return c && a.push(new Zt(c)), a;
      }, []);
      return new Ns(o, s);
    }

    compileModuleAndAllComponentsAsync(r) {
      return Promise.resolve(this.compileModuleAndAllComponentsSync(r));
    }

    clearCache() {
    }

    clearCacheFor(r) {
    }

    getModuleId(r) {
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac, providedIn: "root" });
  let e = t;
  return e;
})(), lI = new b("");

function dI(e, t, n) {
  let r = new so(n);
  return Promise.resolve(r);
}

function Ic(e) {
  for (let t = e.length - 1; t >= 0; t--) if (e[t] !== void 0) return e[t];
}

var fI = (() => {
  let t = class t {
    constructor() {
      this.zone = y($), this.changeDetectionScheduler = y(gt), this.applicationRef = y(jn);
    }

    initialize() {
      this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
        next: () => {
          this.changeDetectionScheduler.runningTick || this.zone.run(() => {
            this.applicationRef.tick();
          });
        }
      }));
    }

    ngOnDestroy() {
      this._onMicrotaskEmptySubscription?.unsubscribe();
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac, providedIn: "root" });
  let e = t;
  return e;
})(), pI = new b("", { factory: () => !1 });

function La({ ngZoneFactory: e, ignoreChangesOutsideZone: t }) {
  return e ??= () => new $(ja()), [{ provide: $, useFactory: e }, {
    provide: vn, multi: !0, useFactory: () => {
      let n = y(fI, { optional: !0 });
      return () => n.initialize();
    }
  }, {
    provide: vn, multi: !0, useFactory: () => {
      let n = y(hI);
      return () => {
        n.initialize();
      };
    }
  }, t === !0 ? { provide: zd, useValue: !0 } : []];
}

function Fx(e) {
  let t = e?.ignoreChangesOutsideZone, n = La({
    ngZoneFactory: () => {
      let r = ja(e);
      return r.shouldCoalesceEventChangeDetection && qe("NgZone_CoalesceEvent"), new $(r);
    }, ignoreChangesOutsideZone: t
  });
  return Qc([{ provide: pI, useValue: !0 }, { provide: Na, useValue: !1 }, n]);
}

function ja(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1
  };
}

var hI = (() => {
  let t = class t {
    constructor() {
      this.subscription = new B, this.initialized = !1, this.zone = y($), this.pendingTasks = y(Pn);
    }

    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let r = null;
      !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (r = this.pendingTasks.add()), this.zone.runOutsideAngular(() => {
        this.subscription.add(this.zone.onStable.subscribe(() => {
          $.assertNotInAngularZone(), queueMicrotask(() => {
            r !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(r), r = null);
          });
        }));
      }), this.subscription.add(this.zone.onUnstable.subscribe(() => {
        $.assertInAngularZone(), r ??= this.pendingTasks.add();
      }));
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac, providedIn: "root" });
  let e = t;
  return e;
})();
var Of = (() => {
  let t = class t {
    constructor() {
      this.appRef = y(jn), this.taskService = y(Pn), this.ngZone = y($), this.zonelessEnabled = y(Na), this.disableScheduling = y(zd, { optional: !0 }) ?? !1, this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run, this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }], this.subscriptions = new B, this.cancelScheduledCallback = null, this.shouldRefreshViews = !1, this.useMicrotaskScheduler = !1, this.runningTick = !1, this.pendingRenderTaskId = null, this.subscriptions.add(this.appRef.afterTick.subscribe(() => {
        this.runningTick || this.cleanup();
      })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => {
        this.runningTick || this.cleanup();
      })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof $r || !this.zoneIsDefined);
    }

    notify(r) {
      if (!this.zonelessEnabled && r === 5) return;
      switch (r) {
        case 3:
        case 2:
        case 0:
        case 4:
        case 5:
        case 1: {
          this.shouldRefreshViews = !0;
          break;
        }
        case 8:
        case 7:
        case 6:
        case 9:
        default:
      }
      if (!this.shouldScheduleTick()) return;
      let o = this.useMicrotaskScheduler ? Xu : jl;
      this.pendingRenderTaskId = this.taskService.add(), this.zoneIsDefined ? Zone.root.run(() => {
        this.cancelScheduledCallback = o(() => {
          this.tick(this.shouldRefreshViews);
        });
      }) : this.cancelScheduledCallback = o(() => {
        this.tick(this.shouldRefreshViews);
      });
    }

    shouldScheduleTick() {
      return !(this.disableScheduling || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && $.isInAngularZone());
    }

    tick(r) {
      if (this.runningTick || this.appRef.destroyed) return;
      let o = this.taskService.add();
      try {
        this.ngZone.run(() => {
          this.runningTick = !0, this.appRef._tick(r);
        }, void 0, this.schedulerTickApplyArgs);
      } catch (i) {
        throw this.taskService.remove(o), i;
      } finally {
        this.cleanup();
      }
      this.useMicrotaskScheduler = !0, Xu(() => {
        this.useMicrotaskScheduler = !1, this.taskService.remove(o);
      });
    }

    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }

    cleanup() {
      if (this.shouldRefreshViews = !1, this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let r = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(r);
      }
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac, providedIn: "root" });
  let e = t;
  return e;
})();

function gI() {
  return typeof $localize < "u" && $localize.locale || Kt;
}

var Po = new b("", { providedIn: "root", factory: () => y(Po, M.Optional | M.SkipSelf) || gI() });
var Va = new b(""), Rf = (() => {
  let t = class t {
    constructor(r) {
      this._injector = r, this._modules = [], this._destroyListeners = [], this._destroyed = !1;
    }

    bootstrapModuleFactory(r, o) {
      let i = pm(o?.ngZone, ja({ eventCoalescing: o?.ngZoneEventCoalescing, runCoalescing: o?.ngZoneRunCoalescing }));
      return i.run(() => {
        let s = o?.ignoreChangesOutsideZone, a = KD(r.moduleType, this.injector, [...La({
          ngZoneFactory: () => i,
          ignoreChangesOutsideZone: s
        }), { provide: gt, useExisting: Of }]), u = a.injector.get($e, null);
        return i.runOutsideAngular(() => {
          let c = i.onError.subscribe({
            next: l => {
              u.handleError(l);
            }
          });
          a.onDestroy(() => {
            Ar(this._modules, a), c.unsubscribe();
          });
        }), xf(u, i, () => {
          let c = a.injector.get(ka);
          return c.runInitializers(), c.donePromise.then(() => {
            let l = a.injector.get(Po, Kt);
            return If(l || Kt), this._moduleDoBootstrap(a), a;
          });
        });
      });
    }

    bootstrapModule(r, o = []) {
      let i = Nf({}, o);
      return dI(this.injector, i, r).then(s => this.bootstrapModuleFactory(s, i));
    }

    _moduleDoBootstrap(r) {
      let o = r.injector.get(jn);
      if (r._bootstrapComponents.length > 0) r._bootstrapComponents.forEach(i => o.bootstrap(i)); else if (r.instance.ngDoBootstrap) r.instance.ngDoBootstrap(o); else throw new w(-403, !1);
      this._modules.push(r);
    }

    onDestroy(r) {
      this._destroyListeners.push(r);
    }

    get injector() {
      return this._injector;
    }

    destroy() {
      if (this._destroyed) throw new w(404, !1);
      this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o());
      let r = this._injector.get(Va, null);
      r && (r.forEach(o => o()), r.clear()), this._destroyed = !0;
    }

    get destroyed() {
      return this._destroyed;
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t)(H(re));
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac, providedIn: "platform" });
  let e = t;
  return e;
})(), Ve = null, Ff = new b("");

function mI(e) {
  if (Ve && !Ve.get(Ff, !1)) throw new w(400, !1);
  Sf(), Ve = e;
  let t = e.get(Rf);
  return Lf(e), t;
}

function yI(e, t, n = []) {
  let r = `Platform: ${t}`, o = new b(r);
  return (i = []) => {
    let s = kf();
    if (!s || s.injector.get(Ff, !1)) {
      let a = [...n, ...i, { provide: o, useValue: !0 }];
      e ? e(a) : mI(Pf(a, r));
    }
    return vI(o);
  };
}

function Pf(e = [], t) {
  return re.create({
    name: t,
    providers: [{ provide: el, useValue: "platform" }, { provide: Va, useValue: new Set([() => Ve = null]) }, ...e]
  });
}

function vI(e) {
  let t = kf();
  if (!t) throw new w(401, !1);
  return t;
}

function kf() {
  return Ve?.get(Rf) ?? null;
}

function DI(e = []) {
  if (Ve) return Ve;
  let t = Pf(e);
  return Ve = t, Sf(), Lf(t), t;
}

function Lf(e) {
  e.get(Mm, null)?.forEach(n => n());
}

var Ba = (() => {
  let t = class t {
  };
  t.__NG_ELEMENT_ID__ = EI;
  let e = t;
  return e;
})();

function EI(e) {
  return II(G(), S(), (e & 16) === 16);
}

function II(e, t, n) {
  if (Jt(e) && !n) {
    let r = ze(e.index, t);
    return new pt(r, r);
  } else if (e.type & 175) {
    let r = t[K];
    return new pt(r, t);
  }
  return null;
}

var As = class {
  constructor() {
  }

  supports(t) {
    return nf(t);
  }

  create(t) {
    return new Os(t);
  }
}, CI = (e, t) => t, Os = class {
  constructor(t) {
    this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || CI;
  }

  forEachItem(t) {
    let n;
    for (n = this._itHead; n !== null; n = n._next) t(n);
  }

  forEachOperation(t) {
    let n = this._itHead, r = this._removalsHead, o = 0, i = null;
    for (; n || r;) {
      let s = !r || n && n.currentIndex < Cc(r, o, i) ? n : r, a = Cc(s, o, i), u = s.currentIndex;
      if (s === r) o--, r = r._nextRemoved; else if (n = n._next, s.previousIndex == null) o++; else {
        i || (i = []);
        let c = a - o, l = u - o;
        if (c != l) {
          for (let p = 0; p < c; p++) {
            let f = p < i.length ? i[p] : i[p] = 0, h = f + p;
            l <= h && h < c && (i[p] = f + 1);
          }
          let d = s.previousIndex;
          i[d] = l - c;
        }
      }
      a !== u && t(s, a, u);
    }
  }

  forEachPreviousItem(t) {
    let n;
    for (n = this._previousItHead; n !== null; n = n._nextPrevious) t(n);
  }

  forEachAddedItem(t) {
    let n;
    for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
  }

  forEachMovedItem(t) {
    let n;
    for (n = this._movesHead; n !== null; n = n._nextMoved) t(n);
  }

  forEachRemovedItem(t) {
    let n;
    for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
  }

  forEachIdentityChange(t) {
    let n;
    for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange) t(n);
  }

  diff(t) {
    if (t == null && (t = []), !nf(t)) throw new w(900, !1);
    return this.check(t) ? this : null;
  }

  onDestroy() {
  }

  check(t) {
    this._reset();
    let n = this._itHead, r = !1, o, i, s;
    if (Array.isArray(t)) {
      this.length = t.length;
      for (let a = 0; a < this.length; a++) i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), r = !0) : (r && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    } else o = 0, JD(t, a => {
      s = this._trackByFn(o, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, o), r = !0) : (r && (n = this._verifyReinsertion(n, a, s, o)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, o++;
    }), this.length = o;
    return this._truncate(n), this.collection = t, this.isDirty;
  }

  get isDirty() {
    return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null;
  }

  _reset() {
    if (this.isDirty) {
      let t;
      for (t = this._previousItHead = this._itHead; t !== null; t = t._next) t._nextPrevious = t._next;
      for (t = this._additionsHead; t !== null; t = t._nextAdded) t.previousIndex = t.currentIndex;
      for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved) t.previousIndex = t.currentIndex;
      this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    }
  }

  _mismatch(t, n, r, o) {
    let i;
    return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, o)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(r, o), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, o)) : t = this._addAfter(new Rs(n, r), i, o)), t;
  }

  _verifyReinsertion(t, n, r, o) {
    let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null);
    return i !== null ? t = this._reinsertAfter(i, t._prev, o) : t.currentIndex != o && (t.currentIndex = o, this._addToMoves(t, o)), t;
  }

  _truncate(t) {
    for (; t !== null;) {
      let n = t._next;
      this._addToRemovals(this._unlink(t)), t = n;
    }
    this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null);
  }

  _reinsertAfter(t, n, r) {
    this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
    let o = t._prevRemoved, i = t._nextRemoved;
    return o === null ? this._removalsHead = i : o._nextRemoved = i, i === null ? this._removalsTail = o : i._prevRemoved = o, this._insertAfter(t, n, r), this._addToMoves(t, r), t;
  }

  _moveAfter(t, n, r) {
    return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t;
  }

  _addAfter(t, n, r) {
    return this._insertAfter(t, n, r), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t;
  }

  _insertAfter(t, n, r) {
    let o = n === null ? this._itHead : n._next;
    return t._next = o, t._prev = n, o === null ? this._itTail = t : o._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new co), this._linkedRecords.put(t), t.currentIndex = r, t;
  }

  _remove(t) {
    return this._addToRemovals(this._unlink(t));
  }

  _unlink(t) {
    this._linkedRecords !== null && this._linkedRecords.remove(t);
    let n = t._prev, r = t._next;
    return n === null ? this._itHead = r : n._next = r, r === null ? this._itTail = n : r._prev = n, t;
  }

  _addToMoves(t, n) {
    return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t;
  }

  _addToRemovals(t) {
    return this._unlinkedRecords === null && (this._unlinkedRecords = new co), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t;
  }

  _addIdentityChange(t, n) {
    return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t;
  }
}, Rs = class {
  constructor(t, n) {
    this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null;
  }
}, Fs = class {
  constructor() {
    this._head = null, this._tail = null;
  }

  add(t) {
    this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t);
  }

  get(t, n) {
    let r;
    for (r = this._head; r !== null; r = r._nextDup) if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t)) return r;
    return null;
  }

  remove(t) {
    let n = t._prevDup, r = t._nextDup;
    return n === null ? this._head = r : n._nextDup = r, r === null ? this._tail = n : r._prevDup = n, this._head === null;
  }
}, co = class {
  constructor() {
    this.map = new Map;
  }

  put(t) {
    let n = t.trackById, r = this.map.get(n);
    r || (r = new Fs, this.map.set(n, r)), r.add(t);
  }

  get(t, n) {
    let r = t, o = this.map.get(r);
    return o ? o.get(t, n) : null;
  }

  remove(t) {
    let n = t.trackById;
    return this.map.get(n).remove(t) && this.map.delete(n), t;
  }

  get isEmpty() {
    return this.map.size === 0;
  }

  clear() {
    this.map.clear();
  }
};

function Cc(e, t, n) {
  let r = e.previousIndex;
  if (r === null) return r;
  let o = 0;
  return n && r < n.length && (o = n[r]), r + t + o;
}

function wc() {
  return new Ha([new As]);
}

var Ha = (() => {
  let t = class t {
    constructor(r) {
      this.factories = r;
    }

    static create(r, o) {
      if (o != null) {
        let i = o.factories.slice();
        r = r.concat(i);
      }
      return new t(r);
    }

    static extend(r) {
      return { provide: t, useFactory: o => t.create(r, o || wc()), deps: [[t, new Ph, new Fh]] };
    }

    find(r) {
      let o = this.factories.find(i => i.supports(r));
      if (o != null) return o;
      throw new w(901, !1);
    }
  };
  t.\u0275prov = R({ token: t, providedIn: "root", factory: wc });
  let e = t;
  return e;
})();
var Px = yI(null, "core", []);

function kx(e) {
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e, o = DI(r),
      i = [La({}), { provide: gt, useExisting: Of }, ...n || []],
      a = new ao({ providers: i, parent: o, debugName: "", runEnvironmentInitializers: !1 }).injector, u = a.get($);
    return u.run(() => {
      a.resolveInjectorInitializers();
      let c = a.get($e, null), l;
      u.runOutsideAngular(() => {
        l = u.onError.subscribe({
          next: f => {
            c.handleError(f);
          }
        });
      });
      let d = () => a.destroy(), p = o.get(Va);
      return p.add(d), a.onDestroy(() => {
        l.unsubscribe(), p.delete(d);
      }), xf(c, u, () => {
        let f = a.get(ka);
        return f.runInitializers(), f.donePromise.then(() => {
          let h = a.get(Po, Kt);
          If(h || Kt);
          let D = a.get(jn);
          return t !== void 0 && D.bootstrap(t), D;
        });
      });
    });
  } catch (t) {
    return Promise.reject(t);
  }
}

function wI(e, t) {
  if (!t.length) return;
  let n = t.reduce((o, i) => o + i + ":;", ""), r = e.getAttribute(di.JSACTION);
  e.setAttribute(di.JSACTION, `${r ?? ""}${n}`);
}

var Lx = new b("");

function bI(e, t, n) {
  let r = new Map, o = t[In], i = e.cleanup;
  if (!i || !o) return r;
  for (let s = 0; s < i.length;) {
    let a = i[s++], u = i[s++];
    if (typeof a != "string") continue;
    let c = a;
    if (!Fu(c)) continue;
    Ru(c) ? n.capture.add(c) : n.regular.add(c);
    let l = k(t[u]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (r.has(l) ? r.get(l).push(c) : r.set(l, [c]));
  }
  return r;
}

var Ps = class {
  constructor() {
    this.views = [], this.indexByContent = new Map;
  }

  add(t) {
    let n = JSON.stringify(t);
    if (!this.indexByContent.has(n)) {
      let r = this.views.length;
      return this.views.push(t), this.indexByContent.set(n, r), r;
    }
    return this.indexByContent.get(n);
  }

  getAll() {
    return this.views;
  }
}, MI = 0;

function jf(e) {
  return e.ssrId || (e.ssrId = `t${MI++}`), e.ssrId;
}

function Vf(e, t, n) {
  let r = [];
  return xn(e, t, n, r), r.length;
}

function _I(e) {
  let t = [];
  return Od(e, t), t.length;
}

function Bf(e, t) {
  let n = e[j];
  return n && !n.hasAttribute(_n) ? lo(n, e, t) : null;
}

function Hf(e, t) {
  let n = Ys(e[j]), r = Bf(n, t);
  if (r === null) return;
  let o = k(n[j]), i = e[U], s = lo(o, i, t), a = n[O], u = `${r}|${s}`;
  a.setAttribute(o, hn, u);
}

function jx(e, t) {
  let n = e.injector, r = zv(n), o = new Ps, i = new Map, s = e._views, a = n.get(Lm, jm),
    u = { regular: new Set, capture: new Set };
  for (let d of s) {
    let p = ql(d);
    if (p !== null) {
      let f = {
        serializedViewCollection: o,
        corruptedTextNodes: i,
        isI18nHydrationEnabled: r,
        i18nChildren: new Map,
        eventTypesToReplay: u,
        shouldReplayEvents: a
      };
      oe(p) ? Hf(p, f) : Bf(p, f), NI(i, t);
    }
  }
  let c = o.getAll();
  return n.get(bo).set(aa, c), u;
}

function TI(e, t) {
  let n = [], r = "";
  for (let o = W; o < e.length; o++) {
    let i = e[o], s, a, u;
    if (bn(i) && (i = i[A], oe(i))) {
      a = _I(i) + 1, Hf(i, t);
      let l = Ys(i[j]);
      u = { [Zi]: l[m].ssrId, [qt]: a };
    }
    if (!u) {
      let l = i[m];
      l.type === 1 ? (s = l.ssrId, a = 1) : (s = jf(l), a = Vf(l, i, l.firstChild)), u = ye({
        [Zi]: s,
        [qt]: a
      }, $f(e[o], t));
    }
    let c = JSON.stringify(u);
    if (n.length > 0 && c === r) {
      let l = n[n.length - 1];
      l[zr] ??= 1, l[zr]++;
    } else r = c, n.push(u);
  }
  return n;
}

function gn(e, t, n, r) {
  let o = t.index - A;
  e[Qi] ??= {}, e[Qi][o] ??= $v(t, n, r);
}

function _i(e, t) {
  let n = typeof t == "number" ? t : t.index - A;
  e[pn] ??= [], e[pn].includes(n) || e[pn].push(n);
}

function $f(e, t) {
  let n = {}, r = e[m], o = Wv(r, t), i = t.shouldReplayEvents ? bI(r, e, t.eventTypesToReplay) : null;
  for (let s = A; s < r.bindingStartIndex; s++) {
    let a = r.data[s], u = s - A, c = Yv(e, s, t);
    if (c) {
      n[nc] ??= {}, n[nc][u] = c.caseQueue;
      for (let l of c.disconnectedNodes) _i(n, l);
      for (let l of c.disjointNodes) {
        let d = r.data[l + A];
        gn(n, d, e, o);
      }
      continue;
    }
    if (Tl(a) && !sn(a)) {
      if (Nn(a, e) && AI(a)) {
        _i(n, a);
        continue;
      }
      if (i && a.type & 2) {
        let l = k(e[s]);
        i.has(l) && wI(l, i.get(l));
      }
      if (Array.isArray(a.projection)) {
        for (let l of a.projection) if (l) if (!Array.isArray(l)) !vg(l) && !Gr(l) && (Nn(l, e) ? _i(n, l) : gn(n, l, e, o)); else throw wv(k(e[s]));
      }
      if (SI(n, a, e, o), oe(e[s])) {
        let l = a.tView;
        l !== null && (n[Yi] ??= {}, n[Yi][u] = jf(l));
        let d = e[s][j];
        if (Array.isArray(d)) {
          let p = k(d);
          p.hasAttribute(_n) || lo(p, d, t);
        }
        n[Sn] ??= {}, n[Sn][u] = TI(e[s], t);
      } else if (Array.isArray(e[s])) {
        let l = k(e[s][j]);
        l.hasAttribute(_n) || lo(l, e[s], t);
      } else if (a.type & 8) n[qi] ??= {}, n[qi][u] = Vf(r, e, a.child); else if (a.type & 144) {
        let l = a.next;
        for (; l !== null && l.type & 144;) l = l.next;
        l && !Gr(l) && gn(n, l, e, o);
      } else if (a.type & 1) {
        let l = k(e[s]);
        Zl(t, l);
      }
    }
  }
  return n;
}

function SI(e, t, n, r) {
  t.projectionNext && t.projectionNext !== t.next && !Gr(t.projectionNext) && gn(e, t.projectionNext, n, r), t.prev === null && t.parent !== null && Nn(t.parent, n) && !Nn(t, n) && gn(e, t, n, r);
}

function xI(e) {
  let t = e[ne];
  return t?.constructor ? xe(t.constructor)?.encapsulation === $t.ShadowDom : !1;
}

function lo(e, t, n) {
  let r = t[O];
  if (Dg(t) && !Gv() || xI(t)) return r.setAttribute(e, _n, ""), null;
  {
    let o = $f(t, n), i = n.serializedViewCollection.add(o);
    return r.setAttribute(e, hn, i.toString()), i;
  }
}

function NI(e, t) {
  for (let [n, r] of e) n.after(t.createComment(r));
}

function AI(e) {
  let t = e;
  for (; t != null;) {
    if (Jt(t)) return !0;
    t = t.parent;
  }
  return !1;
}

var bc = !1;

function OI() {
  bc || (bc = !0, Am(), RE(), YE(), LE(), oE(), _D(), oD(), Py());
}

function RI(e, t) {
  return Af(e);
}

function Vx() {
  return Qc([{
    provide: yr, useFactory: () => {
      let e = !0;
      return kt() && (e = !!y(bo, { optional: !0 })?.get(aa, null)), e && qe("NgHydration"), e;
    }
  }, {
    provide: vn, useValue: () => {
      Uv(!1), kt() && y(yr) && (FI(), OI());
    }, multi: !0
  }, { provide: Kl, useFactory: () => kt() && y(yr) }, {
    provide: Tf, useFactory: () => {
      if (kt() && y(yr)) {
        let e = y(jn), t = y(re);
        return () => {
          RI(e, t).then(() => {
            tD(e);
          });
        };
      }
      return () => {
      };
    }, multi: !0
  }]);
}

function FI() {
  let e = Co(), t;
  for (let n of e.body.childNodes) if (n.nodeType === Node.COMMENT_NODE && n.textContent?.trim() === xm) {
    t = n;
    break;
  }
  if (!t) throw new w(-507, !1);
}

function PI(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}

function kI(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}

function LI(e) {
  let t = _(null);
  try {
    return e();
  } finally {
    _(t);
  }
}

var jI = new b("", { providedIn: "root", factory: () => y(VI) }), VI = (() => {
  let t = class t {
  };
  t.\u0275prov = R({ token: t, providedIn: "root", factory: () => new ks });
  let e = t;
  return e;
})(), ks = class {
  constructor() {
    this.queuedEffectCount = 0, this.queues = new Map, this.pendingTasks = y(Pn), this.taskId = null;
  }

  scheduleEffect(t) {
    if (this.enqueue(t), this.taskId === null) {
      let n = this.taskId = this.pendingTasks.add();
      queueMicrotask(() => {
        this.flush(), this.pendingTasks.remove(n), this.taskId = null;
      });
    }
  }

  enqueue(t) {
    let n = t.creationZone;
    this.queues.has(n) || this.queues.set(n, new Set);
    let r = this.queues.get(n);
    r.has(t) || (this.queuedEffectCount++, r.add(t));
  }

  flush() {
    for (; this.queuedEffectCount > 0;) for (let [t, n] of this.queues) t === null ? this.flushQueue(n) : t.run(() => this.flushQueue(n));
  }

  flushQueue(t) {
    for (let n of t) t.delete(n), this.queuedEffectCount--, n.run();
  }
}, Ls = class {
  constructor(t, n, r, o, i, s) {
    this.scheduler = t, this.effectFn = n, this.creationZone = r, this.injector = i, this.watcher = eu(a => this.runEffect(a), () => this.schedule(), s), this.unregisterOnDestroy = o?.onDestroy(() => this.destroy());
  }

  runEffect(t) {
    try {
      this.effectFn(t);
    } catch (n) {
      this.injector.get($e, null, { optional: !0 })?.handleError(n);
    }
  }

  run() {
    this.watcher.run();
  }

  schedule() {
    this.scheduler.scheduleEffect(this);
  }

  destroy() {
    this.watcher.destroy(), this.unregisterOnDestroy?.();
  }
};

function BI(e, t) {
  qe("NgSignals"), !t?.injector && Gs(BI);
  let n = t?.injector ?? y(re), r = t?.manualCleanup !== !0 ? n.get(Io) : null,
    o = new Ls(n.get(jI), e, typeof Zone > "u" ? null : Zone.current, r, n, t?.allowSignalWrites ?? !1),
    i = n.get(Ba, null, { optional: !0 });
  return !i || !(i._lView[v] & 8) ? o.watcher.notify() : (i._lView[_r] ??= []).push(o.watcher.notify), o;
}

function Bx(e) {
  let t = xe(e);
  if (!t) return null;
  let n = new Zt(t);
  return {
    get selector() {
      return n.selector;
    }, get type() {
      return n.componentType;
    }, get inputs() {
      return n.inputs;
    }, get outputs() {
      return n.outputs;
    }, get ngContentSelectors() {
      return n.ngContentSelectors;
    }, get isStandalone() {
      return t.standalone;
    }, get isSignal() {
      return t.signals;
    }
  };
}

function Hx(...e) {
  return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] });
}

var Zf = null;

function Ua() {
  return Zf;
}

function pN(e) {
  Zf ??= e;
}

var Uf = class {
};
var Ya = new b(""), Za = (() => {
  let t = class t {
    historyGo(r) {
      throw new Error("");
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275prov = R({ token: t, factory: () => y($I), providedIn: "platform" });
  let e = t;
  return e;
})(), hN = new b(""), $I = (() => {
  let t = class t extends Za {
    constructor() {
      super(), this._doc = y(Ya), this._location = window.location, this._history = window.history;
    }

    getBaseHrefFromDOM() {
      return Ua().getBaseHref(this._doc);
    }

    onPopState(r) {
      let o = Ua().getGlobalEventTarget(this._doc, "window");
      return o.addEventListener("popstate", r, !1), () => o.removeEventListener("popstate", r);
    }

    onHashChange(r) {
      let o = Ua().getGlobalEventTarget(this._doc, "window");
      return o.addEventListener("hashchange", r, !1), () => o.removeEventListener("hashchange", r);
    }

    get href() {
      return this._location.href;
    }

    get protocol() {
      return this._location.protocol;
    }

    get hostname() {
      return this._location.hostname;
    }

    get port() {
      return this._location.port;
    }

    get pathname() {
      return this._location.pathname;
    }

    get search() {
      return this._location.search;
    }

    get hash() {
      return this._location.hash;
    }

    set pathname(r) {
      this._location.pathname = r;
    }

    pushState(r, o, i) {
      this._history.pushState(r, o, i);
    }

    replaceState(r, o, i) {
      this._history.replaceState(r, o, i);
    }

    forward() {
      this._history.forward();
    }

    back() {
      this._history.back();
    }

    historyGo(r = 0) {
      this._history.go(r);
    }

    getState() {
      return this._history.state;
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275prov = R({ token: t, factory: () => new t, providedIn: "platform" });
  let e = t;
  return e;
})();

function Qa(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return e.endsWith("/") && n++, t.startsWith("/") && n++, n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t;
}

function Gf(e) {
  let t = e.match(/#|\?|$/), n = t && t.index || e.length, r = n - (e[n - 1] === "/" ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}

function ke(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}

var ko = (() => {
  let t = class t {
    historyGo(r) {
      throw new Error("");
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275prov = R({ token: t, factory: () => y(UI), providedIn: "root" });
  let e = t;
  return e;
})(), Qf = new b(""), UI = (() => {
  let t = class t extends ko {
    constructor(r, o) {
      super(), this._platformLocation = r, this._removeListenerFns = [], this._baseHref = o ?? this._platformLocation.getBaseHrefFromDOM() ?? y(Ya).location?.origin ?? "";
    }

    ngOnDestroy() {
      for (; this._removeListenerFns.length;) this._removeListenerFns.pop()();
    }

    onPopState(r) {
      this._removeListenerFns.push(this._platformLocation.onPopState(r), this._platformLocation.onHashChange(r));
    }

    getBaseHref() {
      return this._baseHref;
    }

    prepareExternalUrl(r) {
      return Qa(this._baseHref, r);
    }

    path(r = !1) {
      let o = this._platformLocation.pathname + ke(this._platformLocation.search), i = this._platformLocation.hash;
      return i && r ? `${o}${i}` : o;
    }

    pushState(r, o, i, s) {
      let a = this.prepareExternalUrl(i + ke(s));
      this._platformLocation.pushState(r, o, a);
    }

    replaceState(r, o, i, s) {
      let a = this.prepareExternalUrl(i + ke(s));
      this._platformLocation.replaceState(r, o, a);
    }

    forward() {
      this._platformLocation.forward();
    }

    back() {
      this._platformLocation.back();
    }

    getState() {
      return this._platformLocation.getState();
    }

    historyGo(r = 0) {
      this._platformLocation.historyGo?.(r);
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t)(H(Za), H(Qf, 8));
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac, providedIn: "root" });
  let e = t;
  return e;
})(), gN = (() => {
  let t = class t extends ko {
    constructor(r, o) {
      super(), this._platformLocation = r, this._baseHref = "", this._removeListenerFns = [], o != null && (this._baseHref = o);
    }

    ngOnDestroy() {
      for (; this._removeListenerFns.length;) this._removeListenerFns.pop()();
    }

    onPopState(r) {
      this._removeListenerFns.push(this._platformLocation.onPopState(r), this._platformLocation.onHashChange(r));
    }

    getBaseHref() {
      return this._baseHref;
    }

    path(r = !1) {
      let o = this._platformLocation.hash ?? "#";
      return o.length > 0 ? o.substring(1) : o;
    }

    prepareExternalUrl(r) {
      let o = Qa(this._baseHref, r);
      return o.length > 0 ? "#" + o : o;
    }

    pushState(r, o, i, s) {
      let a = this.prepareExternalUrl(i + ke(s));
      a.length == 0 && (a = this._platformLocation.pathname), this._platformLocation.pushState(r, o, a);
    }

    replaceState(r, o, i, s) {
      let a = this.prepareExternalUrl(i + ke(s));
      a.length == 0 && (a = this._platformLocation.pathname), this._platformLocation.replaceState(r, o, a);
    }

    forward() {
      this._platformLocation.forward();
    }

    back() {
      this._platformLocation.back();
    }

    getState() {
      return this._platformLocation.getState();
    }

    historyGo(r = 0) {
      this._platformLocation.historyGo?.(r);
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t)(H(Za), H(Qf, 8));
  }, t.\u0275prov = R({ token: t, factory: t.\u0275fac });
  let e = t;
  return e;
})(), GI = (() => {
  let t = class t {
    constructor(r) {
      this._subject = new he, this._urlChangeListeners = [], this._urlChangeSubscription = null, this._locationStrategy = r;
      let o = this._locationStrategy.getBaseHref();
      this._basePath = qI(Gf(zf(o))), this._locationStrategy.onPopState(i => {
        this._subject.emit({ url: this.path(!0), pop: !0, state: i.state, type: i.type });
      });
    }

    ngOnDestroy() {
      this._urlChangeSubscription?.unsubscribe(), this._urlChangeListeners = [];
    }

    path(r = !1) {
      return this.normalize(this._locationStrategy.path(r));
    }

    getState() {
      return this._locationStrategy.getState();
    }

    isCurrentPathEqualTo(r, o = "") {
      return this.path() == this.normalize(r + ke(o));
    }

    normalize(r) {
      return t.stripTrailingSlash(WI(this._basePath, zf(r)));
    }

    prepareExternalUrl(r) {
      return r && r[0] !== "/" && (r = "/" + r), this._locationStrategy.prepareExternalUrl(r);
    }

    go(r, o = "", i = null) {
      this._locationStrategy.pushState(i, "", r, o), this._notifyUrlChangeListeners(this.prepareExternalUrl(r + ke(o)), i);
    }

    replaceState(r, o = "", i = null) {
      this._locationStrategy.replaceState(i, "", r, o), this._notifyUrlChangeListeners(this.prepareExternalUrl(r + ke(o)), i);
    }

    forward() {
      this._locationStrategy.forward();
    }

    back() {
      this._locationStrategy.back();
    }

    historyGo(r = 0) {
      this._locationStrategy.historyGo?.(r);
    }

    onUrlChange(r) {
      return this._urlChangeListeners.push(r), this._urlChangeSubscription ??= this.subscribe(o => {
        this._notifyUrlChangeListeners(o.url, o.state);
      }), () => {
        let o = this._urlChangeListeners.indexOf(r);
        this._urlChangeListeners.splice(o, 1), this._urlChangeListeners.length === 0 && (this._urlChangeSubscription?.unsubscribe(), this._urlChangeSubscription = null);
      };
    }

    _notifyUrlChangeListeners(r = "", o) {
      this._urlChangeListeners.forEach(i => i(r, o));
    }

    subscribe(r, o, i) {
      return this._subject.subscribe({ next: r, error: o, complete: i });
    }
  };
  t.normalizeQueryParams = ke, t.joinWithSlash = Qa, t.stripTrailingSlash = Gf, t.\u0275fac = function(o) {
    return new (o || t)(H(ko));
  }, t.\u0275prov = R({ token: t, factory: () => zI(), providedIn: "root" });
  let e = t;
  return e;
})();

function zI() {
  return new GI(H(ko));
}

function WI(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}

function zf(e) {
  return e.replace(/\/index.html$/, "");
}

function qI(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}

function mN(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="), [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}

var Ga = class {
  constructor(t, n, r, o) {
    this.$implicit = t, this.ngForOf = n, this.index = r, this.count = o;
  }

  get first() {
    return this.index === 0;
  }

  get last() {
    return this.index === this.count - 1;
  }

  get even() {
    return this.index % 2 === 0;
  }

  get odd() {
    return !this.even;
  }
}, yN = (() => {
  let t = class t {
    set ngForOf(r) {
      this._ngForOf = r, this._ngForOfDirty = !0;
    }

    set ngForTrackBy(r) {
      this._trackByFn = r;
    }

    get ngForTrackBy() {
      return this._trackByFn;
    }

    constructor(r, o, i) {
      this._viewContainer = r, this._template = o, this._differs = i, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null;
    }

    set ngForTemplate(r) {
      r && (this._template = r);
    }

    ngDoCheck() {
      if (this._ngForOfDirty) {
        this._ngForOfDirty = !1;
        let r = this._ngForOf;
        if (!this._differ && r) if (0) try {
        } catch {
        } else this._differ = this._differs.find(r).create(this.ngForTrackBy);
      }
      if (this._differ) {
        let r = this._differ.diff(this._ngForOf);
        r && this._applyChanges(r);
      }
    }

    _applyChanges(r) {
      let o = this._viewContainer;
      r.forEachOperation((i, s, a) => {
        if (i.previousIndex == null) o.createEmbeddedView(this._template, new Ga(i.item, this._ngForOf, -1, -1), a === null ? void 0 : a); else if (a == null) o.remove(s === null ? void 0 : s); else if (s !== null) {
          let u = o.get(s);
          o.move(u, a), Wf(u, i);
        }
      });
      for (let i = 0, s = o.length; i < s; i++) {
        let u = o.get(i).context;
        u.index = i, u.count = s, u.ngForOf = this._ngForOf;
      }
      r.forEachIdentityChange(i => {
        let s = o.get(i.currentIndex);
        Wf(s, i);
      });
    }

    static ngTemplateContextGuard(r, o) {
      return !0;
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t)(Me(Dt), Me(ht), Me(Ha));
  }, t.\u0275dir = ho({
    type: t,
    selectors: [["", "ngFor", "", "ngForOf", ""]],
    inputs: { ngForOf: "ngForOf", ngForTrackBy: "ngForTrackBy", ngForTemplate: "ngForTemplate" },
    standalone: !0
  });
  let e = t;
  return e;
})();

function Wf(e, t) {
  e.context.$implicit = t.item;
}

var vN = (() => {
  let t = class t {
    constructor(r, o) {
      this._viewContainer = r, this._context = new za, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = o;
    }

    set ngIf(r) {
      this._context.$implicit = this._context.ngIf = r, this._updateView();
    }

    set ngIfThen(r) {
      qf("ngIfThen", r), this._thenTemplateRef = r, this._thenViewRef = null, this._updateView();
    }

    set ngIfElse(r) {
      qf("ngIfElse", r), this._elseTemplateRef = r, this._elseViewRef = null, this._updateView();
    }

    _updateView() {
      this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
    }

    static ngTemplateContextGuard(r, o) {
      return !0;
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t)(Me(Dt), Me(ht));
  }, t.\u0275dir = ho({
    type: t,
    selectors: [["", "ngIf", ""]],
    inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" },
    standalone: !0
  });
  let e = t;
  return e;
})(), za = class {
  constructor() {
    this.$implicit = null, this.ngIf = null;
  }
};

function qf(e, t) {
  if (!!!(!t || t.createEmbeddedView)) throw new Error(`${e} must be a TemplateRef, but received '${Q(t)}'.`);
}

var DN = (() => {
  let t = class t {
    constructor(r) {
      this._viewContainerRef = r, this._viewRef = null, this.ngTemplateOutletContext = null, this.ngTemplateOutlet = null, this.ngTemplateOutletInjector = null;
    }

    ngOnChanges(r) {
      if (this._shouldRecreateView(r)) {
        let o = this._viewContainerRef;
        if (this._viewRef && o.remove(o.indexOf(this._viewRef)), !this.ngTemplateOutlet) {
          this._viewRef = null;
          return;
        }
        let i = this._createContextForwardProxy();
        this._viewRef = o.createEmbeddedView(this.ngTemplateOutlet, i, { injector: this.ngTemplateOutletInjector ?? void 0 });
      }
    }

    _shouldRecreateView(r) {
      return !!r.ngTemplateOutlet || !!r.ngTemplateOutletInjector;
    }

    _createContextForwardProxy() {
      return new Proxy({}, {
        set: (r, o, i) => this.ngTemplateOutletContext ? Reflect.set(this.ngTemplateOutletContext, o, i) : !1,
        get: (r, o, i) => {
          if (this.ngTemplateOutletContext) return Reflect.get(this.ngTemplateOutletContext, o, i);
        }
      });
    }
  };
  t.\u0275fac = function(o) {
    return new (o || t)(Me(Dt));
  }, t.\u0275dir = ho({
    type: t,
    selectors: [["", "ngTemplateOutlet", ""]],
    inputs: {
      ngTemplateOutletContext: "ngTemplateOutletContext",
      ngTemplateOutlet: "ngTemplateOutlet",
      ngTemplateOutletInjector: "ngTemplateOutletInjector"
    },
    standalone: !0,
    features: [qs]
  });
  let e = t;
  return e;
})();
var EN = (() => {
  let t = class t {
  };
  t.\u0275fac = function(o) {
    return new (o || t);
  }, t.\u0275mod = Gc({ type: t }), t.\u0275inj = Nc({});
  let e = t;
  return e;
})(), YI = "browser", ZI = "server";

function QI(e) {
  return e === YI;
}

function IN(e) {
  return e === ZI;
}

var CN = (() => {
  let t = class t {
  };
  t.\u0275prov = R({ token: t, providedIn: "root", factory: () => QI(y(wo)) ? new Wa(y(Ya), window) : new qa });
  let e = t;
  return e;
})(), Wa = class {
  constructor(t, n) {
    this.document = t, this.window = n, this.offset = () => [0, 0];
  }

  setOffset(t) {
    Array.isArray(t) ? this.offset = () => t : this.offset = t;
  }

  getScrollPosition() {
    return [this.window.scrollX, this.window.scrollY];
  }

  scrollToPosition(t) {
    this.window.scrollTo(t[0], t[1]);
  }

  scrollToAnchor(t) {
    let n = KI(this.document, t);
    n && (this.scrollToElement(n), n.focus());
  }

  setHistoryScrollRestoration(t) {
    this.window.history.scrollRestoration = t;
  }

  scrollToElement(t) {
    let n = t.getBoundingClientRect(), r = n.left + this.window.pageXOffset, o = n.top + this.window.pageYOffset,
      i = this.offset();
    this.window.scrollTo(r - i[0], o - i[1]);
  }
};

function KI(e, t) {
  let n = e.getElementById(t) || e.getElementsByName(t)[0];
  if (n) return n;
  if (typeof e.createTreeWalker == "function" && e.body && typeof e.body.attachShadow == "function") {
    let r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT), o = r.currentNode;
    for (; o;) {
      let i = o.shadowRoot;
      if (i) {
        let s = i.getElementById(t) || i.querySelector(`[name="${t}"]`);
        if (s) return s;
      }
      o = r.nextNode();
    }
  }
  return null;
}

var qa = class {
  setOffset(t) {
  }

  getScrollPosition() {
    return [0, 0];
  }

  scrollToPosition(t) {
  }

  scrollToAnchor(t) {
  }

  setHistoryScrollRestoration(t) {
  }
}, Yf = class {
};
var Et = function(e) {
  return e[e.State = 0] = "State", e[e.Transition = 1] = "Transition", e[e.Sequence = 2] = "Sequence", e[e.Group = 3] = "Group", e[e.Animate = 4] = "Animate", e[e.Keyframes = 5] = "Keyframes", e[e.Style = 6] = "Style", e[e.Trigger = 7] = "Trigger", e[e.Reference = 8] = "Reference", e[e.AnimateChild = 9] = "AnimateChild", e[e.AnimateRef = 10] = "AnimateRef", e[e.Query = 11] = "Query", e[e.Stagger = 12] = "Stagger", e;
}(Et || {}), MN = "*";

function _N(e, t) {
  return { type: Et.Trigger, name: e, definitions: t, options: {} };
}

function TN(e, t = null) {
  return { type: Et.Animate, styles: t, timings: e };
}

function SN(e, t = null) {
  return { type: Et.Sequence, steps: e, options: t };
}

function xN(e) {
  return { type: Et.Style, styles: e, offset: null };
}

function NN(e, t, n) {
  return { type: Et.State, name: e, styles: t, options: n };
}

function AN(e, t, n = null) {
  return { type: Et.Transition, expr: e, animation: t, options: n };
}

var Kf = class {
  constructor(t = 0, n = 0) {
    this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._originalOnDoneFns = [], this._originalOnStartFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this._position = 0, this.parentPlayer = null, this.totalTime = t + n;
  }

  _onFinish() {
    this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = []);
  }

  onStart(t) {
    this._originalOnStartFns.push(t), this._onStartFns.push(t);
  }

  onDone(t) {
    this._originalOnDoneFns.push(t), this._onDoneFns.push(t);
  }

  onDestroy(t) {
    this._onDestroyFns.push(t);
  }

  hasStarted() {
    return this._started;
  }

  init() {
  }

  play() {
    this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0;
  }

  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }

  _onStart() {
    this._onStartFns.forEach(t => t()), this._onStartFns = [];
  }

  pause() {
  }

  restart() {
  }

  finish() {
    this._onFinish();
  }

  destroy() {
    this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = []);
  }

  reset() {
    this._started = !1, this._finished = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns;
  }

  setPosition(t) {
    this._position = this.totalTime ? t * this.totalTime : 1;
  }

  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }

  triggerCallback(t) {
    let n = t == "start" ? this._onStartFns : this._onDoneFns;
    n.forEach(r => r()), n.length = 0;
  }
}, Xf = class {
  constructor(t) {
    this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = t;
    let n = 0, r = 0, o = 0, i = this.players.length;
    i == 0 ? queueMicrotask(() => this._onFinish()) : this.players.forEach(s => {
      s.onDone(() => {
        ++n == i && this._onFinish();
      }), s.onDestroy(() => {
        ++r == i && this._onDestroy();
      }), s.onStart(() => {
        ++o == i && this._onStart();
      });
    }), this.totalTime = this.players.reduce((s, a) => Math.max(s, a.totalTime), 0);
  }

  _onFinish() {
    this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = []);
  }

  init() {
    this.players.forEach(t => t.init());
  }

  onStart(t) {
    this._onStartFns.push(t);
  }

  _onStart() {
    this.hasStarted() || (this._started = !0, this._onStartFns.forEach(t => t()), this._onStartFns = []);
  }

  onDone(t) {
    this._onDoneFns.push(t);
  }

  onDestroy(t) {
    this._onDestroyFns.push(t);
  }

  hasStarted() {
    return this._started;
  }

  play() {
    this.parentPlayer || this.init(), this._onStart(), this.players.forEach(t => t.play());
  }

  pause() {
    this.players.forEach(t => t.pause());
  }

  restart() {
    this.players.forEach(t => t.restart());
  }

  finish() {
    this._onFinish(), this.players.forEach(t => t.finish());
  }

  destroy() {
    this._onDestroy();
  }

  _onDestroy() {
    this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(t => t.destroy()), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = []);
  }

  reset() {
    this.players.forEach(t => t.reset()), this._destroyed = !1, this._finished = !1, this._started = !1;
  }

  setPosition(t) {
    let n = t * this.totalTime;
    this.players.forEach(r => {
      let o = r.totalTime ? Math.min(1, n / r.totalTime) : 1;
      r.setPosition(o);
    });
  }

  getPosition() {
    let t = this.players.reduce((n, r) => n === null || r.totalTime > n.totalTime ? r : n, null);
    return t != null ? t.getPosition() : 0;
  }

  beforeDestroy() {
    this.players.forEach(t => {
      t.beforeDestroy && t.beforeDestroy();
    });
  }

  triggerCallback(t) {
    let n = t == "start" ? this._onStartFns : this._onDoneFns;
    n.forEach(r => r()), n.length = 0;
  }
}, ON = "!";
export {
  B as a,
  fp as b,
  T as c,
  Jo as d,
  ei as e,
  ve as f,
  an as g,
  vp as h,
  tt as i,
  Ee as j,
  _p as k,
  Tp as l,
  Sp as m,
  rt as n,
  Se as o,
  kp as p,
  de as q,
  ln as r,
  Ot as s,
  jp as t,
  Vp as u,
  ii as v,
  Wp as w,
  ot as x,
  qp as y,
  xu as z,
  Yp as A,
  Zp as B,
  dn as C,
  Rt as D,
  si as E,
  Qp as F,
  Kp as G,
  eh as H,
  ui as I,
  ci as J,
  th as K,
  nh as L,
  rh as M,
  oh as N,
  ih as O,
  sh as P,
  ah as Q,
  uh as R,
  w as S,
  Sc as T,
  R as U,
  Nc as V,
  YS as W,
  b as X,
  M as Y,
  H as Z,
  y as _,
  Fh as $,
  Ph as aa,
  $t as ba,
  ZS as ca,
  Gc as da,
  ho as ea,
  Qc as fa,
  el as ga,
  He as ha,
  gg as ia,
  qs as ja,
  QS as ka,
  KS as la,
  XS as ma,
  JS as na,
  ex as oa,
  om as pa,
  re as qa,
  Pn as ra,
  he as sa,
  $ as ta,
  $e as ua,
  rn as va,
  zi as wa,
  tx as xa,
  wm as ya,
  Mm as za,
  wo as Aa,
  nx as Ba,
  rx as Ca,
  bo as Da,
  xm as Ea,
  yr as Fa,
  kn as Ga,
  Xl as Ha,
  ox as Ia,
  ix as Ja,
  sx as Ka,
  ax as La,
  ux as Ma,
  Jl as Na,
  cx as Oa,
  la as Pa,
  lx as Qa,
  Wr as Ra,
  dx as Sa,
  Me as Ta,
  fx as Ua,
  ht as Va,
  gt as Wa,
  Yt as Xa,
  eo as Ya,
  Wd as Za,
  qe as _a,
  Z as $a,
  cD as ab,
  lD as bb,
  Dt as cb,
  gx as db,
  GD as eb,
  QD as fb,
  bs as gb,
  XD as hb,
  nE as ib,
  iE as jb,
  yE as kb,
  cf as lb,
  vE as mb,
  mx as nb,
  yx as ob,
  gf as pb,
  mf as qb,
  AE as rb,
  PE as sb,
  vx as tb,
  jE as ub,
  VE as vb,
  $E as wb,
  UE as xb,
  Dx as yb,
  Ex as zb,
  Ix as Ab,
  Cx as Bb,
  wx as Cb,
  bx as Db,
  Mx as Eb,
  _x as Fb,
  Tx as Gb,
  ZE as Hb,
  bf as Ib,
  Sx as Jb,
  xx as Kb,
  Nx as Lb,
  Ax as Mb,
  nI as Nb,
  Ox as Ob,
  Pa as Pb,
  sI as Qb,
  Tf as Rb,
  jn as Sb,
  Af as Tb,
  Rx as Ub,
  Fx as Vb,
  Ff as Wb,
  yI as Xb,
  Ba as Yb,
  Px as Zb,
  kx as _b,
  Lx as $b,
  jx as ac,
  Vx as bc,
  PI as cc,
  kI as dc,
  LI as ec,
  BI as fc,
  Bx as gc,
  Hx as hc,
  Ua as ic,
  pN as jc,
  Uf as kc,
  Ya as lc,
  Za as mc,
  hN as nc,
  ko as oc,
  Qf as pc,
  UI as qc,
  gN as rc,
  GI as sc,
  mN as tc,
  yN as uc,
  vN as vc,
  DN as wc,
  EN as xc,
  YI as yc,
  ZI as zc,
  QI as Ac,
  IN as Bc,
  CN as Cc,
  qa as Dc,
  Yf as Ec,
  Et as Fc,
  MN as Gc,
  _N as Hc,
  TN as Ic,
  SN as Jc,
  xN as Kc,
  NN as Lc,
  AN as Mc,
  Kf as Nc,
  Xf as Oc,
  ON as Pc
};
