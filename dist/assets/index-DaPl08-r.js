(function() {
  const H = document.createElement("link").relList;
  if (H && H.supports && H.supports("modulepreload")) return;
  for (const O of document.querySelectorAll('link[rel="modulepreload"]')) h(O);
  new MutationObserver((O) => {
    for (const Q of O) if (Q.type === "childList") for (const _ of Q.addedNodes) _.tagName === "LINK" && _.rel === "modulepreload" && h(_);
  }).observe(document, { childList: true, subtree: true });
  function U(O) {
    const Q = {};
    return O.integrity && (Q.integrity = O.integrity), O.referrerPolicy && (Q.referrerPolicy = O.referrerPolicy), O.crossOrigin === "use-credentials" ? Q.credentials = "include" : O.crossOrigin === "anonymous" ? Q.credentials = "omit" : Q.credentials = "same-origin", Q;
  }
  function h(O) {
    if (O.ep) return;
    O.ep = true;
    const Q = U(O);
    fetch(O.href, Q);
  }
})();
var pf = { exports: {} }, Gu = {};
var _m;
function Ph() {
  if (_m) return Gu;
  _m = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.fragment");
  function U(h, O, Q) {
    var _ = null;
    if (Q !== void 0 && (_ = "" + Q), O.key !== void 0 && (_ = "" + O.key), "key" in O) {
      Q = {};
      for (var w in O) w !== "key" && (Q[w] = O[w]);
    } else Q = O;
    return O = Q.ref, { $$typeof: o, type: h, key: _, ref: O !== void 0 ? O : null, props: Q };
  }
  return Gu.Fragment = H, Gu.jsx = U, Gu.jsxs = U, Gu;
}
var Om;
function l0() {
  return Om || (Om = 1, pf.exports = Ph()), pf.exports;
}
var f = l0(), Nf = { exports: {} }, F = {};
var Dm;
function t0() {
  if (Dm) return F;
  Dm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), U = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function A(m) {
    return m === null || typeof m != "object" ? null : (m = k && m[k] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var W = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, V = Object.assign, ml = {};
  function Cl(m, p, C) {
    this.props = m, this.context = p, this.refs = ml, this.updater = C || W;
  }
  Cl.prototype.isReactComponent = {}, Cl.prototype.setState = function(m, p) {
    if (typeof m != "object" && typeof m != "function" && m != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, p, "setState");
  }, Cl.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function Hl() {
  }
  Hl.prototype = Cl.prototype;
  function E(m, p, C) {
    this.props = m, this.context = p, this.refs = ml, this.updater = C || W;
  }
  var Y = E.prototype = new Hl();
  Y.constructor = E, V(Y, Cl.prototype), Y.isPureReactComponent = true;
  var Vl = Array.isArray;
  function I() {
  }
  var G = { H: null, A: null, T: null, S: null }, Al = Object.prototype.hasOwnProperty;
  function ut(m, p, C) {
    var q = C.ref;
    return { $$typeof: o, type: m, key: p, ref: q !== void 0 ? q : null, props: C };
  }
  function Ol(m, p) {
    return ut(m.type, p, m.props);
  }
  function zl(m) {
    return typeof m == "object" && m !== null && m.$$typeof === o;
  }
  function sl(m) {
    var p = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(C) {
      return p[C];
    });
  }
  var Kl = /\/+/g;
  function P(m, p) {
    return typeof m == "object" && m !== null && m.key != null ? sl("" + m.key) : p.toString(36);
  }
  function dl(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(I, I) : (m.status = "pending", m.then(function(p) {
          m.status === "pending" && (m.status = "fulfilled", m.value = p);
        }, function(p) {
          m.status === "pending" && (m.status = "rejected", m.reason = p);
        })), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function S(m, p, C, q, $) {
    var tl = typeof m;
    (tl === "undefined" || tl === "boolean") && (m = null);
    var rl = false;
    if (m === null) rl = true;
    else switch (tl) {
      case "bigint":
      case "string":
      case "number":
        rl = true;
        break;
      case "object":
        switch (m.$$typeof) {
          case o:
          case H:
            rl = true;
            break;
          case J:
            return rl = m._init, S(rl(m._payload), p, C, q, $);
        }
    }
    if (rl) return $ = $(m), rl = q === "" ? "." + P(m, 0) : q, Vl($) ? (C = "", rl != null && (C = rl.replace(Kl, "$&/") + "/"), S($, p, C, "", function(Oe) {
      return Oe;
    })) : $ != null && (zl($) && ($ = Ol($, C + ($.key == null || m && m.key === $.key ? "" : ("" + $.key).replace(Kl, "$&/") + "/") + rl)), p.push($)), 1;
    rl = 0;
    var Ql = q === "" ? "." : q + ":";
    if (Vl(m)) for (var _l = 0; _l < m.length; _l++) q = m[_l], tl = Ql + P(q, _l), rl += S(q, p, C, tl, $);
    else if (_l = A(m), typeof _l == "function") for (m = _l.call(m), _l = 0; !(q = m.next()).done; ) q = q.value, tl = Ql + P(q, _l++), rl += S(q, p, C, tl, $);
    else if (tl === "object") {
      if (typeof m.then == "function") return S(dl(m), p, C, q, $);
      throw p = String(m), Error("Objects are not valid as a React child (found: " + (p === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : p) + "). If you meant to render a collection of children, use an array instead.");
    }
    return rl;
  }
  function M(m, p, C) {
    if (m == null) return m;
    var q = [], $ = 0;
    return S(m, q, "", "", function(tl) {
      return p.call(C, tl, $++);
    }), q;
  }
  function j(m) {
    if (m._status === -1) {
      var p = m._result;
      p = p(), p.then(function(C) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = C);
      }, function(C) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = C);
      }), m._status === -1 && (m._status = 0, m._result = p);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var al = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var p = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m), error: m });
      if (!window.dispatchEvent(p)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, ul = { map: M, forEach: function(m, p, C) {
    M(m, function() {
      p.apply(this, arguments);
    }, C);
  }, count: function(m) {
    var p = 0;
    return M(m, function() {
      p++;
    }), p;
  }, toArray: function(m) {
    return M(m, function(p) {
      return p;
    }) || [];
  }, only: function(m) {
    if (!zl(m)) throw Error("React.Children.only expected to receive a single React element child.");
    return m;
  } };
  return F.Activity = B, F.Children = ul, F.Component = Cl, F.Fragment = U, F.Profiler = O, F.PureComponent = E, F.StrictMode = h, F.Suspense = D, F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, F.__COMPILER_RUNTIME = { __proto__: null, c: function(m) {
    return G.H.useMemoCache(m);
  } }, F.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, F.cacheSignal = function() {
    return null;
  }, F.cloneElement = function(m, p, C) {
    if (m == null) throw Error("The argument must be a React element, but you passed " + m + ".");
    var q = V({}, m.props), $ = m.key;
    if (p != null) for (tl in p.key !== void 0 && ($ = "" + p.key), p) !Al.call(p, tl) || tl === "key" || tl === "__self" || tl === "__source" || tl === "ref" && p.ref === void 0 || (q[tl] = p[tl]);
    var tl = arguments.length - 2;
    if (tl === 1) q.children = C;
    else if (1 < tl) {
      for (var rl = Array(tl), Ql = 0; Ql < tl; Ql++) rl[Ql] = arguments[Ql + 2];
      q.children = rl;
    }
    return ut(m.type, $, q);
  }, F.createContext = function(m) {
    return m = { $$typeof: _, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null }, m.Provider = m, m.Consumer = { $$typeof: Q, _context: m }, m;
  }, F.createElement = function(m, p, C) {
    var q, $ = {}, tl = null;
    if (p != null) for (q in p.key !== void 0 && (tl = "" + p.key), p) Al.call(p, q) && q !== "key" && q !== "__self" && q !== "__source" && ($[q] = p[q]);
    var rl = arguments.length - 2;
    if (rl === 1) $.children = C;
    else if (1 < rl) {
      for (var Ql = Array(rl), _l = 0; _l < rl; _l++) Ql[_l] = arguments[_l + 2];
      $.children = Ql;
    }
    if (m && m.defaultProps) for (q in rl = m.defaultProps, rl) $[q] === void 0 && ($[q] = rl[q]);
    return ut(m, tl, $);
  }, F.createRef = function() {
    return { current: null };
  }, F.forwardRef = function(m) {
    return { $$typeof: w, render: m };
  }, F.isValidElement = zl, F.lazy = function(m) {
    return { $$typeof: J, _payload: { _status: -1, _result: m }, _init: j };
  }, F.memo = function(m, p) {
    return { $$typeof: z, type: m, compare: p === void 0 ? null : p };
  }, F.startTransition = function(m) {
    var p = G.T, C = {};
    G.T = C;
    try {
      var q = m(), $ = G.S;
      $ !== null && $(C, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(I, al);
    } catch (tl) {
      al(tl);
    } finally {
      p !== null && C.types !== null && (p.types = C.types), G.T = p;
    }
  }, F.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, F.use = function(m) {
    return G.H.use(m);
  }, F.useActionState = function(m, p, C) {
    return G.H.useActionState(m, p, C);
  }, F.useCallback = function(m, p) {
    return G.H.useCallback(m, p);
  }, F.useContext = function(m) {
    return G.H.useContext(m);
  }, F.useDebugValue = function() {
  }, F.useDeferredValue = function(m, p) {
    return G.H.useDeferredValue(m, p);
  }, F.useEffect = function(m, p) {
    return G.H.useEffect(m, p);
  }, F.useEffectEvent = function(m) {
    return G.H.useEffectEvent(m);
  }, F.useId = function() {
    return G.H.useId();
  }, F.useImperativeHandle = function(m, p, C) {
    return G.H.useImperativeHandle(m, p, C);
  }, F.useInsertionEffect = function(m, p) {
    return G.H.useInsertionEffect(m, p);
  }, F.useLayoutEffect = function(m, p) {
    return G.H.useLayoutEffect(m, p);
  }, F.useMemo = function(m, p) {
    return G.H.useMemo(m, p);
  }, F.useOptimistic = function(m, p) {
    return G.H.useOptimistic(m, p);
  }, F.useReducer = function(m, p, C) {
    return G.H.useReducer(m, p, C);
  }, F.useRef = function(m) {
    return G.H.useRef(m);
  }, F.useState = function(m) {
    return G.H.useState(m);
  }, F.useSyncExternalStore = function(m, p, C) {
    return G.H.useSyncExternalStore(m, p, C);
  }, F.useTransition = function() {
    return G.H.useTransition();
  }, F.version = "19.2.3", F;
}
var Um;
function Df() {
  return Um || (Um = 1, Nf.exports = t0()), Nf.exports;
}
var Z = Df(), Mf = { exports: {} }, Xu = {}, Af = { exports: {} }, jf = {};
var Hm;
function e0() {
  return Hm || (Hm = 1, (function(o) {
    function H(S, M) {
      var j = S.length;
      S.push(M);
      l: for (; 0 < j; ) {
        var al = j - 1 >>> 1, ul = S[al];
        if (0 < O(ul, M)) S[al] = M, S[j] = ul, j = al;
        else break l;
      }
    }
    function U(S) {
      return S.length === 0 ? null : S[0];
    }
    function h(S) {
      if (S.length === 0) return null;
      var M = S[0], j = S.pop();
      if (j !== M) {
        S[0] = j;
        l: for (var al = 0, ul = S.length, m = ul >>> 1; al < m; ) {
          var p = 2 * (al + 1) - 1, C = S[p], q = p + 1, $ = S[q];
          if (0 > O(C, j)) q < ul && 0 > O($, C) ? (S[al] = $, S[q] = j, al = q) : (S[al] = C, S[p] = j, al = p);
          else if (q < ul && 0 > O($, j)) S[al] = $, S[q] = j, al = q;
          else break l;
        }
      }
      return M;
    }
    function O(S, M) {
      var j = S.sortIndex - M.sortIndex;
      return j !== 0 ? j : S.id - M.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Q = performance;
      o.unstable_now = function() {
        return Q.now();
      };
    } else {
      var _ = Date, w = _.now();
      o.unstable_now = function() {
        return _.now() - w;
      };
    }
    var D = [], z = [], J = 1, B = null, k = 3, A = false, W = false, V = false, ml = false, Cl = typeof setTimeout == "function" ? setTimeout : null, Hl = typeof clearTimeout == "function" ? clearTimeout : null, E = typeof setImmediate < "u" ? setImmediate : null;
    function Y(S) {
      for (var M = U(z); M !== null; ) {
        if (M.callback === null) h(z);
        else if (M.startTime <= S) h(z), M.sortIndex = M.expirationTime, H(D, M);
        else break;
        M = U(z);
      }
    }
    function Vl(S) {
      if (V = false, Y(S), !W) if (U(D) !== null) W = true, I || (I = true, sl());
      else {
        var M = U(z);
        M !== null && dl(Vl, M.startTime - S);
      }
    }
    var I = false, G = -1, Al = 5, ut = -1;
    function Ol() {
      return ml ? true : !(o.unstable_now() - ut < Al);
    }
    function zl() {
      if (ml = false, I) {
        var S = o.unstable_now();
        ut = S;
        var M = true;
        try {
          l: {
            W = false, V && (V = false, Hl(G), G = -1), A = true;
            var j = k;
            try {
              t: {
                for (Y(S), B = U(D); B !== null && !(B.expirationTime > S && Ol()); ) {
                  var al = B.callback;
                  if (typeof al == "function") {
                    B.callback = null, k = B.priorityLevel;
                    var ul = al(B.expirationTime <= S);
                    if (S = o.unstable_now(), typeof ul == "function") {
                      B.callback = ul, Y(S), M = true;
                      break t;
                    }
                    B === U(D) && h(D), Y(S);
                  } else h(D);
                  B = U(D);
                }
                if (B !== null) M = true;
                else {
                  var m = U(z);
                  m !== null && dl(Vl, m.startTime - S), M = false;
                }
              }
              break l;
            } finally {
              B = null, k = j, A = false;
            }
            M = void 0;
          }
        } finally {
          M ? sl() : I = false;
        }
      }
    }
    var sl;
    if (typeof E == "function") sl = function() {
      E(zl);
    };
    else if (typeof MessageChannel < "u") {
      var Kl = new MessageChannel(), P = Kl.port2;
      Kl.port1.onmessage = zl, sl = function() {
        P.postMessage(null);
      };
    } else sl = function() {
      Cl(zl, 0);
    };
    function dl(S, M) {
      G = Cl(function() {
        S(o.unstable_now());
      }, M);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, o.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Al = 0 < S ? Math.floor(1e3 / S) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, o.unstable_next = function(S) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = k;
      }
      var j = k;
      k = M;
      try {
        return S();
      } finally {
        k = j;
      }
    }, o.unstable_requestPaint = function() {
      ml = true;
    }, o.unstable_runWithPriority = function(S, M) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var j = k;
      k = S;
      try {
        return M();
      } finally {
        k = j;
      }
    }, o.unstable_scheduleCallback = function(S, M, j) {
      var al = o.unstable_now();
      switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? al + j : al) : j = al, S) {
        case 1:
          var ul = -1;
          break;
        case 2:
          ul = 250;
          break;
        case 5:
          ul = 1073741823;
          break;
        case 4:
          ul = 1e4;
          break;
        default:
          ul = 5e3;
      }
      return ul = j + ul, S = { id: J++, callback: M, priorityLevel: S, startTime: j, expirationTime: ul, sortIndex: -1 }, j > al ? (S.sortIndex = j, H(z, S), U(D) === null && S === U(z) && (V ? (Hl(G), G = -1) : V = true, dl(Vl, j - al))) : (S.sortIndex = ul, H(D, S), W || A || (W = true, I || (I = true, sl()))), S;
    }, o.unstable_shouldYield = Ol, o.unstable_wrapCallback = function(S) {
      var M = k;
      return function() {
        var j = k;
        k = M;
        try {
          return S.apply(this, arguments);
        } finally {
          k = j;
        }
      };
    };
  })(jf)), jf;
}
var qm;
function a0() {
  return qm || (qm = 1, Af.exports = e0()), Af.exports;
}
var Cf = { exports: {} }, et = {};
var Rm;
function u0() {
  if (Rm) return et;
  Rm = 1;
  var o = Df();
  function H(D) {
    var z = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++) z += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return "Minified React error #" + D + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function U() {
  }
  var h = { d: { f: U, r: function() {
    throw Error(H(522));
  }, D: U, C: U, L: U, m: U, X: U, S: U, M: U }, p: 0, findDOMNode: null }, O = /* @__PURE__ */ Symbol.for("react.portal");
  function Q(D, z, J) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: O, key: B == null ? null : "" + B, children: D, containerInfo: z, implementation: J };
  }
  var _ = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(D, z) {
    if (D === "font") return "";
    if (typeof z == "string") return z === "use-credentials" ? z : "";
  }
  return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, et.createPortal = function(D, z) {
    var J = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11) throw Error(H(299));
    return Q(D, z, null, J);
  }, et.flushSync = function(D) {
    var z = _.T, J = h.p;
    try {
      if (_.T = null, h.p = 2, D) return D();
    } finally {
      _.T = z, h.p = J, h.d.f();
    }
  }, et.preconnect = function(D, z) {
    typeof D == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, h.d.C(D, z));
  }, et.prefetchDNS = function(D) {
    typeof D == "string" && h.d.D(D);
  }, et.preinit = function(D, z) {
    if (typeof D == "string" && z && typeof z.as == "string") {
      var J = z.as, B = w(J, z.crossOrigin), k = typeof z.integrity == "string" ? z.integrity : void 0, A = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      J === "style" ? h.d.S(D, typeof z.precedence == "string" ? z.precedence : void 0, { crossOrigin: B, integrity: k, fetchPriority: A }) : J === "script" && h.d.X(D, { crossOrigin: B, integrity: k, fetchPriority: A, nonce: typeof z.nonce == "string" ? z.nonce : void 0 });
    }
  }, et.preinitModule = function(D, z) {
    if (typeof D == "string") if (typeof z == "object" && z !== null) {
      if (z.as == null || z.as === "script") {
        var J = w(z.as, z.crossOrigin);
        h.d.M(D, { crossOrigin: J, integrity: typeof z.integrity == "string" ? z.integrity : void 0, nonce: typeof z.nonce == "string" ? z.nonce : void 0 });
      }
    } else z == null && h.d.M(D);
  }, et.preload = function(D, z) {
    if (typeof D == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var J = z.as, B = w(J, z.crossOrigin);
      h.d.L(D, J, { crossOrigin: B, integrity: typeof z.integrity == "string" ? z.integrity : void 0, nonce: typeof z.nonce == "string" ? z.nonce : void 0, type: typeof z.type == "string" ? z.type : void 0, fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0, referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0, imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0, imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0, media: typeof z.media == "string" ? z.media : void 0 });
    }
  }, et.preloadModule = function(D, z) {
    if (typeof D == "string") if (z) {
      var J = w(z.as, z.crossOrigin);
      h.d.m(D, { as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0, crossOrigin: J, integrity: typeof z.integrity == "string" ? z.integrity : void 0 });
    } else h.d.m(D);
  }, et.requestFormReset = function(D) {
    h.d.r(D);
  }, et.unstable_batchedUpdates = function(D, z) {
    return D(z);
  }, et.useFormState = function(D, z, J) {
    return _.H.useFormState(D, z, J);
  }, et.useFormStatus = function() {
    return _.H.useHostTransitionStatus();
  }, et.version = "19.2.3", et;
}
var Bm;
function n0() {
  if (Bm) return Cf.exports;
  Bm = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
    } catch (H) {
      console.error(H);
    }
  }
  return o(), Cf.exports = u0(), Cf.exports;
}
var Ym;
function i0() {
  if (Ym) return Xu;
  Ym = 1;
  var o = a0(), H = Df(), U = n0();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function O(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Q(l) {
    var t = l, e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function _(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function w(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function D(l) {
    if (Q(l) !== l) throw Error(h(188));
  }
  function z(l) {
    var t = l.alternate;
    if (!t) {
      if (t = Q(l), t === null) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return D(u), l;
          if (n === a) return D(u), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var i = false, c = u.child; c; ) {
          if (c === e) {
            i = true, e = u, a = n;
            break;
          }
          if (c === a) {
            i = true, a = u, e = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              i = true, e = n, a = u;
              break;
            }
            if (c === a) {
              i = true, a = n, e = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(h(189));
        }
      }
      if (e.alternate !== a) throw Error(h(190));
    }
    if (e.tag !== 3) throw Error(h(188));
    return e.stateNode.current === e ? l : t;
  }
  function J(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = J(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var B = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.transitional.element"), W = /* @__PURE__ */ Symbol.for("react.portal"), V = /* @__PURE__ */ Symbol.for("react.fragment"), ml = /* @__PURE__ */ Symbol.for("react.strict_mode"), Cl = /* @__PURE__ */ Symbol.for("react.profiler"), Hl = /* @__PURE__ */ Symbol.for("react.consumer"), E = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), Vl = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), G = /* @__PURE__ */ Symbol.for("react.memo"), Al = /* @__PURE__ */ Symbol.for("react.lazy"), ut = /* @__PURE__ */ Symbol.for("react.activity"), Ol = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), zl = Symbol.iterator;
  function sl(l) {
    return l === null || typeof l != "object" ? null : (l = zl && l[zl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Kl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function P(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Kl ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case V:
        return "Fragment";
      case Cl:
        return "Profiler";
      case ml:
        return "StrictMode";
      case Vl:
        return "Suspense";
      case I:
        return "SuspenseList";
      case ut:
        return "Activity";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case W:
        return "Portal";
      case E:
        return l.displayName || "Context";
      case Hl:
        return (l._context.displayName || "Context") + ".Consumer";
      case Y:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case G:
        return t = l.displayName || null, t !== null ? t : P(l.type) || "Memo";
      case Al:
        t = l._payload, l = l._init;
        try {
          return P(l(t));
        } catch {
        }
    }
    return null;
  }
  var dl = Array.isArray, S = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = { pending: false, data: null, method: null, action: null }, al = [], ul = -1;
  function m(l) {
    return { current: l };
  }
  function p(l) {
    0 > ul || (l.current = al[ul], al[ul] = null, ul--);
  }
  function C(l, t) {
    ul++, al[ul] = l.current, l.current = t;
  }
  var q = m(null), $ = m(null), tl = m(null), rl = m(null);
  function Ql(l, t) {
    switch (C(tl, t), C($, l), C(q, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Pd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = Pd(t), l = lm(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0;
        }
    }
    p(q), C(q, l);
  }
  function _l() {
    p(q), p($), p(tl);
  }
  function Oe(l) {
    l.memoizedState !== null && C(rl, l);
    var t = q.current, e = lm(t, l.type);
    t !== e && (C($, l), C(q, e));
  }
  function Yt(l) {
    $.current === l && (p(q), p($)), rl.current === l && (p(rl), qu._currentValue = j);
  }
  var La, Za;
  function Gt(l) {
    if (La === void 0) try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      La = t && t[1] || "", Za = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + La + l + Za;
  }
  var ke = false;
  function Ie(l, t) {
    if (!l || ke) return "";
    ke = true;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var N = function() {
              throw Error();
            };
            if (Object.defineProperty(N.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(N, []);
              } catch (b) {
                var g = b;
              }
              Reflect.construct(l, [], N);
            } else {
              try {
                N.call();
              } catch (b) {
                g = b;
              }
              l.call(N.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (b) {
              g = b;
            }
            (N = l()) && typeof N.catch == "function" && N.catch(function() {
            });
          }
        } catch (b) {
          if (b && g && typeof b.stack == "string") return [b.stack, g.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = a.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var s = i.split(`
`), y = c.split(`
`);
        for (u = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (a === s.length || u === y.length) for (a = s.length - 1, u = y.length - 1; 1 <= a && 0 <= u && s[a] !== y[u]; ) u--;
        for (; 1 <= a && 0 <= u; a--, u--) if (s[a] !== y[u]) {
          if (a !== 1 || u !== 1) do
            if (a--, u--, 0 > u || s[a] !== y[u]) {
              var x = `
` + s[a].replace(" at new ", " at ");
              return l.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", l.displayName)), x;
            }
          while (1 <= a && 0 <= u);
          break;
        }
      }
    } finally {
      ke = false, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? Gt(e) : "";
  }
  function Qu(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Gt(l.type);
      case 16:
        return Gt("Lazy");
      case 13:
        return l.child !== t && t !== null ? Gt("Suspense Fallback") : Gt("Suspense");
      case 19:
        return Gt("SuspenseList");
      case 0:
      case 15:
        return Ie(l.type, false);
      case 11:
        return Ie(l.type.render, false);
      case 1:
        return Ie(l.type, true);
      case 31:
        return Gt("Activity");
      default:
        return "";
    }
  }
  function Lu(l) {
    try {
      var t = "", e = null;
      do
        t += Qu(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Pe = Object.prototype.hasOwnProperty, Va = o.unstable_scheduleCallback, la = o.unstable_cancelCallback, Zu = o.unstable_shouldYield, Vu = o.unstable_requestPaint, Tl = o.unstable_now, Ku = o.unstable_getCurrentPriorityLevel, Ka = o.unstable_ImmediatePriority, Ja = o.unstable_UserBlockingPriority, ue = o.unstable_NormalPriority, Ju = o.unstable_LowPriority, ne = o.unstable_IdlePriority, wa = o.log, fi = o.unstable_setDisableYieldValue, De = null, lt = null;
  function mt(l) {
    if (typeof wa == "function" && fi(l), lt && typeof lt.setStrictMode == "function") try {
      lt.setStrictMode(De, l);
    } catch {
    }
  }
  var tt = Math.clz32 ? Math.clz32 : di, si = Math.log, oi = Math.LN2;
  function di(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (si(l) / oi | 0) | 0;
  }
  var Jl = 256, xt = 262144, ta = 4194304;
  function ie(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function ea(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? u = ie(a) : (i &= c, i !== 0 ? u = ie(i) : e || (e = c & ~l, e !== 0 && (u = ie(e))))) : (c = a & ~n, c !== 0 ? u = ie(c) : i !== 0 ? u = ie(i) : e || (e = a & ~l, e !== 0 && (u = ie(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
  }
  function Ue(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function aa(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ll() {
    var l = ta;
    return ta <<= 1, (ta & 62914560) === 0 && (ta = 4194304), l;
  }
  function Wa(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function $a(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Qm(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements, s = l.expirationTimes, y = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var x = 31 - tt(e), N = 1 << x;
      c[x] = 0, s[x] = -1;
      var g = y[x];
      if (g !== null) for (y[x] = null, x = 0; x < g.length; x++) {
        var b = g[x];
        b !== null && (b.lane &= -536870913);
      }
      e &= ~N;
    }
    a !== 0 && Hf(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Hf(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - tt(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function qf(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - tt(e), u = 1 << a;
      u & t | l[a] & t && (l[a] |= t), e &= ~u;
    }
  }
  function Rf(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : mi(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function mi(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ri(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Bf() {
    var l = M.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Tm(l.type));
  }
  function Yf(l, t) {
    var e = M.p;
    try {
      return M.p = l, t();
    } finally {
      M.p = e;
    }
  }
  var ce = Math.random().toString(36).slice(2), $l = "__reactFiber$" + ce, nt = "__reactProps$" + ce, ua = "__reactContainer$" + ce, hi = "__reactEvents$" + ce, Lm = "__reactListeners$" + ce, Zm = "__reactHandles$" + ce, Gf = "__reactResources$" + ce, Fa = "__reactMarker$" + ce;
  function vi(l) {
    delete l[$l], delete l[nt], delete l[hi], delete l[Lm], delete l[Zm];
  }
  function na(l) {
    var t = l[$l];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[ua] || e[$l]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (l = cm(l); l !== null; ) {
          if (e = l[$l]) return e;
          l = cm(l);
        }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function ia(l) {
    if (l = l[$l] || l[ua]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function ka(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function ca(l) {
    var t = l[Gf];
    return t || (t = l[Gf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function wl(l) {
    l[Fa] = true;
  }
  var Xf = /* @__PURE__ */ new Set(), Qf = {};
  function He(l, t) {
    fa(l, t), fa(l + "Capture", t);
  }
  function fa(l, t) {
    for (Qf[l] = t, l = 0; l < t.length; l++) Xf.add(t[l]);
  }
  var Vm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Lf = {}, Zf = {};
  function Km(l) {
    return Pe.call(Zf, l) ? true : Pe.call(Lf, l) ? false : Vm.test(l) ? Zf[l] = true : (Lf[l] = true, false);
  }
  function wu(l, t, e) {
    if (Km(t)) if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var a = t.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Wu(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Xt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function Et(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Vf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Jm(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, n = a.set;
      return Object.defineProperty(l, t, { configurable: true, get: function() {
        return u.call(this);
      }, set: function(i) {
        e = "" + i, n.call(this, i);
      } }), Object.defineProperty(l, t, { enumerable: a.enumerable }), { getValue: function() {
        return e;
      }, setValue: function(i) {
        e = "" + i;
      }, stopTracking: function() {
        l._valueTracker = null, delete l[t];
      } };
    }
  }
  function yi(l) {
    if (!l._valueTracker) {
      var t = Vf(l) ? "checked" : "value";
      l._valueTracker = Jm(l, t, "" + l[t]);
    }
  }
  function Kf(l) {
    if (!l) return false;
    var t = l._valueTracker;
    if (!t) return true;
    var e = t.getValue(), a = "";
    return l && (a = Vf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), true) : false;
  }
  function $u(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var wm = /[\n"\\]/g;
  function zt(l) {
    return l.replace(wm, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function gi(l, t, e, a, u, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Et(t)) : l.value !== "" + Et(t) && (l.value = "" + Et(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? Si(l, i, Et(t)) : e != null ? Si(l, i, Et(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Et(c) : l.removeAttribute("name");
  }
  function Jf(l, t, e, a, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        yi(l);
        return;
      }
      e = e != null ? "" + Et(e) : "", t = t != null ? "" + Et(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), yi(l);
  }
  function Si(l, t, e) {
    t === "number" && $u(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function sa(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < e.length; u++) t["$" + e[u]] = true;
      for (e = 0; e < l.length; e++) u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = true);
    } else {
      for (e = "" + Et(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          l[u].selected = true, a && (l[u].defaultSelected = true);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = true);
    }
  }
  function wf(l, t, e) {
    if (t != null && (t = "" + Et(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + Et(e) : "";
  }
  function Wf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(h(92));
        if (dl(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = Et(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), yi(l);
  }
  function oa(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Wm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function $f(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Wm.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function Ff(l, t, e) {
    if (t != null && typeof t != "object") throw Error(h(62));
    if (l = l.style, e != null) {
      for (var a in e) !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var u in t) a = t[u], t.hasOwnProperty(u) && e[u] !== a && $f(l, u, a);
    } else for (var n in t) t.hasOwnProperty(n) && $f(l, n, t[n]);
  }
  function bi(l) {
    if (l.indexOf("-") === -1) return false;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var $m = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Fm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fu(l) {
    return Fm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Qt() {
  }
  var xi = null;
  function Ei(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var da = null, ma = null;
  function kf(l) {
    var t = ia(l);
    if (t && (l = t.stateNode)) {
      var e = l[nt] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (gi(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll('input[name="' + zt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[nt] || null;
                if (!u) throw Error(h(90));
                gi(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
              }
            }
            for (t = 0; t < e.length; t++) a = e[t], a.form === l.form && Kf(a);
          }
          break l;
        case "textarea":
          wf(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && sa(l, !!e.multiple, t, false);
      }
    }
  }
  var zi = false;
  function If(l, t, e) {
    if (zi) return l(t, e);
    zi = true;
    try {
      var a = l(t);
      return a;
    } finally {
      if (zi = false, (da !== null || ma !== null) && (Yn(), da && (t = da, l = ma, ma = da = null, kf(t), l))) for (t = 0; t < l.length; t++) kf(l[t]);
    }
  }
  function Ia(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[nt] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = false;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(h(231, t, typeof e));
    return e;
  }
  var Lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ti = false;
  if (Lt) try {
    var Pa = {};
    Object.defineProperty(Pa, "passive", { get: function() {
      Ti = true;
    } }), window.addEventListener("test", Pa, Pa), window.removeEventListener("test", Pa, Pa);
  } catch {
    Ti = false;
  }
  var fe = null, pi = null, ku = null;
  function Pf() {
    if (ku) return ku;
    var l, t = pi, e = t.length, a, u = "value" in fe ? fe.value : fe.textContent, n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++) ;
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++) ;
    return ku = u.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Iu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Pu() {
    return true;
  }
  function ls() {
    return false;
  }
  function it(l) {
    function t(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Pu : ls, this.isPropagationStopped = ls, this;
    }
    return B(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e = this.nativeEvent;
      e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = Pu);
    }, stopPropagation: function() {
      var e = this.nativeEvent;
      e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = Pu);
    }, persist: function() {
    }, isPersistent: Pu }), t;
  }
  var qe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(l) {
    return l.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ln = it(qe), lu = B({}, qe, { view: 0, detail: 0 }), km = it(lu), Ni, Mi, tu, tn = B({}, lu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ji, button: 0, buttons: 0, relatedTarget: function(l) {
    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
  }, movementX: function(l) {
    return "movementX" in l ? l.movementX : (l !== tu && (tu && l.type === "mousemove" ? (Ni = l.screenX - tu.screenX, Mi = l.screenY - tu.screenY) : Mi = Ni = 0, tu = l), Ni);
  }, movementY: function(l) {
    return "movementY" in l ? l.movementY : Mi;
  } }), ts = it(tn), Im = B({}, tn, { dataTransfer: 0 }), Pm = it(Im), lr = B({}, lu, { relatedTarget: 0 }), Ai = it(lr), tr = B({}, qe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), er = it(tr), ar = B({}, qe, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } }), ur = it(ar), nr = B({}, qe, { data: 0 }), es = it(nr), ir = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, cr = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, fr = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function sr(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = fr[l]) ? !!t[l] : false;
  }
  function ji() {
    return sr;
  }
  var or = B({}, lu, { key: function(l) {
    if (l.key) {
      var t = ir[l.key] || l.key;
      if (t !== "Unidentified") return t;
    }
    return l.type === "keypress" ? (l = Iu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? cr[l.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ji, charCode: function(l) {
    return l.type === "keypress" ? Iu(l) : 0;
  }, keyCode: function(l) {
    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  }, which: function(l) {
    return l.type === "keypress" ? Iu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  } }), dr = it(or), mr = B({}, tn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), as = it(mr), rr = B({}, lu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ji }), hr = it(rr), vr = B({}, qe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yr = it(vr), gr = B({}, tn, { deltaX: function(l) {
    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
  }, deltaY: function(l) {
    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Sr = it(gr), br = B({}, qe, { newState: 0, oldState: 0 }), xr = it(br), Er = [9, 13, 27, 32], Ci = Lt && "CompositionEvent" in window, eu = null;
  Lt && "documentMode" in document && (eu = document.documentMode);
  var zr = Lt && "TextEvent" in window && !eu, us = Lt && (!Ci || eu && 8 < eu && 11 >= eu), ns = " ", is = false;
  function cs(l, t) {
    switch (l) {
      case "keyup":
        return Er.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function fs(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ra = false;
  function Tr(l, t) {
    switch (l) {
      case "compositionend":
        return fs(t);
      case "keypress":
        return t.which !== 32 ? null : (is = true, ns);
      case "textInput":
        return l = t.data, l === ns && is ? null : l;
      default:
        return null;
    }
  }
  function pr(l, t) {
    if (ra) return l === "compositionend" || !Ci && cs(l, t) ? (l = Pf(), ku = pi = fe = null, ra = false, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return us && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Nr = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function ss(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Nr[l.type] : t === "textarea";
  }
  function os(l, t, e, a) {
    da ? ma ? ma.push(a) : ma = [a] : da = a, t = Kn(t, "onChange"), 0 < t.length && (e = new ln("onChange", "change", null, e, a), l.push({ event: e, listeners: t }));
  }
  var au = null, uu = null;
  function Mr(l) {
    wd(l, 0);
  }
  function en(l) {
    var t = ka(l);
    if (Kf(t)) return l;
  }
  function ds(l, t) {
    if (l === "change") return t;
  }
  var ms = false;
  if (Lt) {
    var _i;
    if (Lt) {
      var Oi = "oninput" in document;
      if (!Oi) {
        var rs = document.createElement("div");
        rs.setAttribute("oninput", "return;"), Oi = typeof rs.oninput == "function";
      }
      _i = Oi;
    } else _i = false;
    ms = _i && (!document.documentMode || 9 < document.documentMode);
  }
  function hs() {
    au && (au.detachEvent("onpropertychange", vs), uu = au = null);
  }
  function vs(l) {
    if (l.propertyName === "value" && en(uu)) {
      var t = [];
      os(t, uu, l, Ei(l)), If(Mr, t);
    }
  }
  function Ar(l, t, e) {
    l === "focusin" ? (hs(), au = t, uu = e, au.attachEvent("onpropertychange", vs)) : l === "focusout" && hs();
  }
  function jr(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return en(uu);
  }
  function Cr(l, t) {
    if (l === "click") return en(t);
  }
  function _r(l, t) {
    if (l === "input" || l === "change") return en(t);
  }
  function Or(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var rt = typeof Object.is == "function" ? Object.is : Or;
  function nu(l, t) {
    if (rt(l, t)) return true;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return false;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Pe.call(t, u) || !rt(l[u], t[u])) return false;
    }
    return true;
  }
  function ys(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function gs(l, t) {
    var e = ys(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = l + e.textContent.length, l <= t && a >= t) return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = ys(e);
    }
  }
  function Ss(l, t) {
    return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? Ss(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
  }
  function bs(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = $u(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = false;
      }
      if (e) l = t.contentWindow;
      else break;
      t = $u(l.document);
    }
    return t;
  }
  function Di(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Dr = Lt && "documentMode" in document && 11 >= document.documentMode, ha = null, Ui = null, iu = null, Hi = false;
  function xs(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Hi || ha == null || ha !== $u(a) || (a = ha, "selectionStart" in a && Di(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), iu && nu(iu, a) || (iu = a, a = Kn(Ui, "onSelect"), 0 < a.length && (t = new ln("onSelect", "select", null, t, e), l.push({ event: t, listeners: a }), t.target = ha)));
  }
  function Re(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var va = { animationend: Re("Animation", "AnimationEnd"), animationiteration: Re("Animation", "AnimationIteration"), animationstart: Re("Animation", "AnimationStart"), transitionrun: Re("Transition", "TransitionRun"), transitionstart: Re("Transition", "TransitionStart"), transitioncancel: Re("Transition", "TransitionCancel"), transitionend: Re("Transition", "TransitionEnd") }, qi = {}, Es = {};
  Lt && (Es = document.createElement("div").style, "AnimationEvent" in window || (delete va.animationend.animation, delete va.animationiteration.animation, delete va.animationstart.animation), "TransitionEvent" in window || delete va.transitionend.transition);
  function Be(l) {
    if (qi[l]) return qi[l];
    if (!va[l]) return l;
    var t = va[l], e;
    for (e in t) if (t.hasOwnProperty(e) && e in Es) return qi[l] = t[e];
    return l;
  }
  var zs = Be("animationend"), Ts = Be("animationiteration"), ps = Be("animationstart"), Ur = Be("transitionrun"), Hr = Be("transitionstart"), qr = Be("transitioncancel"), Ns = Be("transitionend"), Ms = /* @__PURE__ */ new Map(), Ri = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Ri.push("scrollEnd");
  function Ot(l, t) {
    Ms.set(l, t), He(t, [l]);
  }
  var an = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Tt = [], ya = 0, Bi = 0;
  function un() {
    for (var l = ya, t = Bi = ya = 0; t < l; ) {
      var e = Tt[t];
      Tt[t++] = null;
      var a = Tt[t];
      Tt[t++] = null;
      var u = Tt[t];
      Tt[t++] = null;
      var n = Tt[t];
      if (Tt[t++] = null, a !== null && u !== null) {
        var i = a.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u;
      }
      n !== 0 && As(e, u, n);
    }
  }
  function nn(l, t, e, a) {
    Tt[ya++] = l, Tt[ya++] = t, Tt[ya++] = e, Tt[ya++] = a, Bi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Yi(l, t, e, a) {
    return nn(l, t, e, a), cn(l);
  }
  function Ye(l, t) {
    return nn(l, null, null, t), cn(l);
  }
  function As(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = false, n = l.return; n !== null; ) n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = true)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - tt(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null;
  }
  function cn(l) {
    if (50 < ju) throw ju = 0, wc = null, Error(h(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ga = {};
  function Rr(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ht(l, t, e, a) {
    return new Rr(l, t, e, a);
  }
  function Gi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Zt(l, t) {
    var e = l.alternate;
    return e === null ? (e = ht(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function js(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l;
  }
  function fn(l, t, e, a, u, n) {
    var i = 0;
    if (a = l, typeof l == "function") Gi(l) && (i = 1);
    else if (typeof l == "string") i = Qh(l, e, q.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case ut:
        return l = ht(31, e, t, u), l.elementType = ut, l.lanes = n, l;
      case V:
        return Ge(e.children, u, n, t);
      case ml:
        i = 8, u |= 24;
        break;
      case Cl:
        return l = ht(12, e, t, u | 2), l.elementType = Cl, l.lanes = n, l;
      case Vl:
        return l = ht(13, e, t, u), l.elementType = Vl, l.lanes = n, l;
      case I:
        return l = ht(19, e, t, u), l.elementType = I, l.lanes = n, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case E:
            i = 10;
            break l;
          case Hl:
            i = 9;
            break l;
          case Y:
            i = 11;
            break l;
          case G:
            i = 14;
            break l;
          case Al:
            i = 16, a = null;
            break l;
        }
        i = 29, e = Error(h(130, l === null ? "null" : typeof l, "")), a = null;
    }
    return t = ht(i, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Ge(l, t, e, a) {
    return l = ht(7, l, a, t), l.lanes = e, l;
  }
  function Xi(l, t, e) {
    return l = ht(6, l, null, t), l.lanes = e, l;
  }
  function Cs(l) {
    var t = ht(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Qi(l, t, e) {
    return t = ht(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }, t;
  }
  var _s = /* @__PURE__ */ new WeakMap();
  function pt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = _s.get(l);
      return e !== void 0 ? e : (t = { value: l, source: t, stack: Lu(t) }, _s.set(l, t), t);
    }
    return { value: l, source: t, stack: Lu(t) };
  }
  var Sa = [], ba = 0, sn = null, cu = 0, Nt = [], Mt = 0, se = null, Ht = 1, qt = "";
  function Vt(l, t) {
    Sa[ba++] = cu, Sa[ba++] = sn, sn = l, cu = t;
  }
  function Os(l, t, e) {
    Nt[Mt++] = Ht, Nt[Mt++] = qt, Nt[Mt++] = se, se = l;
    var a = Ht;
    l = qt;
    var u = 32 - tt(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - tt(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, Ht = 1 << 32 - tt(t) + u | e << u | a, qt = n + l;
    } else Ht = 1 << n | e << u | a, qt = l;
  }
  function Li(l) {
    l.return !== null && (Vt(l, 1), Os(l, 1, 0));
  }
  function Zi(l) {
    for (; l === sn; ) sn = Sa[--ba], Sa[ba] = null, cu = Sa[--ba], Sa[ba] = null;
    for (; l === se; ) se = Nt[--Mt], Nt[Mt] = null, qt = Nt[--Mt], Nt[Mt] = null, Ht = Nt[--Mt], Nt[Mt] = null;
  }
  function Ds(l, t) {
    Nt[Mt++] = Ht, Nt[Mt++] = qt, Nt[Mt++] = se, Ht = t.id, qt = t.overflow, se = l;
  }
  var Fl = null, Nl = null, ol = false, oe = null, At = false, Vi = Error(h(519));
  function de(l) {
    var t = Error(h(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw fu(pt(t, l)), Vi;
  }
  function Us(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[$l] = l, t[nt] = a, e) {
      case "dialog":
        il("cancel", t), il("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        il("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < _u.length; e++) il(_u[e], t);
        break;
      case "source":
        il("error", t);
        break;
      case "img":
      case "image":
      case "link":
        il("error", t), il("load", t);
        break;
      case "details":
        il("toggle", t);
        break;
      case "input":
        il("invalid", t), Jf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        il("invalid", t);
        break;
      case "textarea":
        il("invalid", t), Wf(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === true || kd(t.textContent, e) ? (a.popover != null && (il("beforetoggle", t), il("toggle", t)), a.onScroll != null && il("scroll", t), a.onScrollEnd != null && il("scrollend", t), a.onClick != null && (t.onclick = Qt), t = true) : t = false, t || de(l, true);
  }
  function Hs(l) {
    for (Fl = l.return; Fl; ) switch (Fl.tag) {
      case 5:
      case 31:
      case 13:
        At = false;
        return;
      case 27:
      case 3:
        At = true;
        return;
      default:
        Fl = Fl.return;
    }
  }
  function xa(l) {
    if (l !== Fl) return false;
    if (!ol) return Hs(l), ol = true, false;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || sf(l.type, l.memoizedProps)), e = !e), e && Nl && de(l), Hs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      Nl = im(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      Nl = im(l);
    } else t === 27 ? (t = Nl, Ne(l.type) ? (l = hf, hf = null, Nl = l) : Nl = t) : Nl = Fl ? Ct(l.stateNode.nextSibling) : null;
    return true;
  }
  function Xe() {
    Nl = Fl = null, ol = false;
  }
  function Ki() {
    var l = oe;
    return l !== null && (ot === null ? ot = l : ot.push.apply(ot, l), oe = null), l;
  }
  function fu(l) {
    oe === null ? oe = [l] : oe.push(l);
  }
  var Ji = m(null), Qe = null, Kt = null;
  function me(l, t, e) {
    C(Ji, t._currentValue), t._currentValue = e;
  }
  function Jt(l) {
    l._currentValue = Ji.current, p(Ji);
  }
  function wi(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function Wi(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var s = 0; s < t.length; s++) if (c.context === t[s]) {
            n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), wi(n.return, e, l), a || (i = null);
            break l;
          }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(h(341));
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), wi(i, e, l), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else for (i = u; i !== null; ) {
        if (i === l) {
          i = null;
          break;
        }
        if (u = i.sibling, u !== null) {
          u.return = i.return, i = u;
          break;
        }
        i = i.return;
      }
      u = i;
    }
  }
  function Ea(l, t, e, a) {
    l = null;
    for (var u = t, n = false; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = true;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(h(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          rt(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (u === rl.current) {
        if (i = u.alternate, i === null) throw Error(h(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(qu) : l = [qu]);
      }
      u = u.return;
    }
    l !== null && Wi(t, l, e, a), t.flags |= 262144;
  }
  function on(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!rt(l.context._currentValue, l.memoizedValue)) return true;
      l = l.next;
    }
    return false;
  }
  function Le(l) {
    Qe = l, Kt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function kl(l) {
    return qs(Qe, l);
  }
  function dn(l, t) {
    return Qe === null && Le(l), qs(l, t);
  }
  function qs(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, Kt === null) {
      if (l === null) throw Error(h(308));
      Kt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Kt = Kt.next = t;
    return e;
  }
  var Br = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = { aborted: false, addEventListener: function(e, a) {
      l.push(a);
    } };
    this.abort = function() {
      t.aborted = true, l.forEach(function(e) {
        return e();
      });
    };
  }, Yr = o.unstable_scheduleCallback, Gr = o.unstable_NormalPriority, Bl = { $$typeof: E, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function $i() {
    return { controller: new Br(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function su(l) {
    l.refCount--, l.refCount === 0 && Yr(Gr, function() {
      l.controller.abort();
    });
  }
  var ou = null, Fi = 0, za = 0, Ta = null;
  function Xr(l, t) {
    if (ou === null) {
      var e = ou = [];
      Fi = 0, za = Pc(), Ta = { status: "pending", value: void 0, then: function(a) {
        e.push(a);
      } };
    }
    return Fi++, t.then(Rs, Rs), t;
  }
  function Rs() {
    if (--Fi === 0 && ou !== null) {
      Ta !== null && (Ta.status = "fulfilled");
      var l = ou;
      ou = null, za = 0, Ta = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Qr(l, t) {
    var e = [], a = { status: "pending", value: null, reason: null, then: function(u) {
      e.push(u);
    } };
    return l.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var u = 0; u < e.length; u++) (0, e[u])(t);
    }, function(u) {
      for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++) (0, e[u])(void 0);
    }), a;
  }
  var Bs = S.S;
  S.S = function(l, t) {
    Ed = Tl(), typeof t == "object" && t !== null && typeof t.then == "function" && Xr(l, t), Bs !== null && Bs(l, t);
  };
  var Ze = m(null);
  function ki() {
    var l = Ze.current;
    return l !== null ? l : pl.pooledCache;
  }
  function mn(l, t) {
    t === null ? C(Ze, Ze.current) : C(Ze, t.pool);
  }
  function Ys() {
    var l = ki();
    return l === null ? null : { parent: Bl._currentValue, pool: l };
  }
  var pa = Error(h(460)), Ii = Error(h(474)), rn = Error(h(542)), hn = { then: function() {
  } };
  function Gs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Xs(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Qt, Qt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ls(l), l;
      default:
        if (typeof t.status == "string") t.then(Qt, Qt);
        else {
          if (l = pl, l !== null && 100 < l.shellSuspendCounter) throw Error(h(482));
          l = t, l.status = "pending", l.then(function(a) {
            if (t.status === "pending") {
              var u = t;
              u.status = "fulfilled", u.value = a;
            }
          }, function(a) {
            if (t.status === "pending") {
              var u = t;
              u.status = "rejected", u.reason = a;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ls(l), l;
        }
        throw Ke = t, pa;
    }
  }
  function Ve(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ke = e, pa) : e;
    }
  }
  var Ke = null;
  function Qs() {
    if (Ke === null) throw Error(h(459));
    var l = Ke;
    return Ke = null, l;
  }
  function Ls(l) {
    if (l === pa || l === rn) throw Error(h(483));
  }
  var Na = null, du = 0;
  function vn(l) {
    var t = du;
    return du += 1, Na === null && (Na = []), Xs(Na, l, t);
  }
  function mu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function yn(l, t) {
    throw t.$$typeof === k ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(h(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function Zs(l) {
    function t(r, d) {
      if (l) {
        var v = r.deletions;
        v === null ? (r.deletions = [d], r.flags |= 16) : v.push(d);
      }
    }
    function e(r, d) {
      if (!l) return null;
      for (; d !== null; ) t(r, d), d = d.sibling;
      return null;
    }
    function a(r) {
      for (var d = /* @__PURE__ */ new Map(); r !== null; ) r.key !== null ? d.set(r.key, r) : d.set(r.index, r), r = r.sibling;
      return d;
    }
    function u(r, d) {
      return r = Zt(r, d), r.index = 0, r.sibling = null, r;
    }
    function n(r, d, v) {
      return r.index = v, l ? (v = r.alternate, v !== null ? (v = v.index, v < d ? (r.flags |= 67108866, d) : v) : (r.flags |= 67108866, d)) : (r.flags |= 1048576, d);
    }
    function i(r) {
      return l && r.alternate === null && (r.flags |= 67108866), r;
    }
    function c(r, d, v, T) {
      return d === null || d.tag !== 6 ? (d = Xi(v, r.mode, T), d.return = r, d) : (d = u(d, v), d.return = r, d);
    }
    function s(r, d, v, T) {
      var L = v.type;
      return L === V ? x(r, d, v.props.children, T, v.key) : d !== null && (d.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Al && Ve(L) === d.type) ? (d = u(d, v.props), mu(d, v), d.return = r, d) : (d = fn(v.type, v.key, v.props, null, r.mode, T), mu(d, v), d.return = r, d);
    }
    function y(r, d, v, T) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== v.containerInfo || d.stateNode.implementation !== v.implementation ? (d = Qi(v, r.mode, T), d.return = r, d) : (d = u(d, v.children || []), d.return = r, d);
    }
    function x(r, d, v, T, L) {
      return d === null || d.tag !== 7 ? (d = Ge(v, r.mode, T, L), d.return = r, d) : (d = u(d, v), d.return = r, d);
    }
    function N(r, d, v) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return d = Xi("" + d, r.mode, v), d.return = r, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case A:
            return v = fn(d.type, d.key, d.props, null, r.mode, v), mu(v, d), v.return = r, v;
          case W:
            return d = Qi(d, r.mode, v), d.return = r, d;
          case Al:
            return d = Ve(d), N(r, d, v);
        }
        if (dl(d) || sl(d)) return d = Ge(d, r.mode, v, null), d.return = r, d;
        if (typeof d.then == "function") return N(r, vn(d), v);
        if (d.$$typeof === E) return N(r, dn(r, d), v);
        yn(r, d);
      }
      return null;
    }
    function g(r, d, v, T) {
      var L = d !== null ? d.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return L !== null ? null : c(r, d, "" + v, T);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case A:
            return v.key === L ? s(r, d, v, T) : null;
          case W:
            return v.key === L ? y(r, d, v, T) : null;
          case Al:
            return v = Ve(v), g(r, d, v, T);
        }
        if (dl(v) || sl(v)) return L !== null ? null : x(r, d, v, T, null);
        if (typeof v.then == "function") return g(r, d, vn(v), T);
        if (v.$$typeof === E) return g(r, d, dn(r, v), T);
        yn(r, v);
      }
      return null;
    }
    function b(r, d, v, T, L) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return r = r.get(v) || null, c(d, r, "" + T, L);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case A:
            return r = r.get(T.key === null ? v : T.key) || null, s(d, r, T, L);
          case W:
            return r = r.get(T.key === null ? v : T.key) || null, y(d, r, T, L);
          case Al:
            return T = Ve(T), b(r, d, v, T, L);
        }
        if (dl(T) || sl(T)) return r = r.get(v) || null, x(d, r, T, L, null);
        if (typeof T.then == "function") return b(r, d, v, vn(T), L);
        if (T.$$typeof === E) return b(r, d, v, dn(d, T), L);
        yn(d, T);
      }
      return null;
    }
    function R(r, d, v, T) {
      for (var L = null, hl = null, X = d, el = d = 0, fl = null; X !== null && el < v.length; el++) {
        X.index > el ? (fl = X, X = null) : fl = X.sibling;
        var vl = g(r, X, v[el], T);
        if (vl === null) {
          X === null && (X = fl);
          break;
        }
        l && X && vl.alternate === null && t(r, X), d = n(vl, d, el), hl === null ? L = vl : hl.sibling = vl, hl = vl, X = fl;
      }
      if (el === v.length) return e(r, X), ol && Vt(r, el), L;
      if (X === null) {
        for (; el < v.length; el++) X = N(r, v[el], T), X !== null && (d = n(X, d, el), hl === null ? L = X : hl.sibling = X, hl = X);
        return ol && Vt(r, el), L;
      }
      for (X = a(X); el < v.length; el++) fl = b(X, r, el, v[el], T), fl !== null && (l && fl.alternate !== null && X.delete(fl.key === null ? el : fl.key), d = n(fl, d, el), hl === null ? L = fl : hl.sibling = fl, hl = fl);
      return l && X.forEach(function(_e) {
        return t(r, _e);
      }), ol && Vt(r, el), L;
    }
    function K(r, d, v, T) {
      if (v == null) throw Error(h(151));
      for (var L = null, hl = null, X = d, el = d = 0, fl = null, vl = v.next(); X !== null && !vl.done; el++, vl = v.next()) {
        X.index > el ? (fl = X, X = null) : fl = X.sibling;
        var _e = g(r, X, vl.value, T);
        if (_e === null) {
          X === null && (X = fl);
          break;
        }
        l && X && _e.alternate === null && t(r, X), d = n(_e, d, el), hl === null ? L = _e : hl.sibling = _e, hl = _e, X = fl;
      }
      if (vl.done) return e(r, X), ol && Vt(r, el), L;
      if (X === null) {
        for (; !vl.done; el++, vl = v.next()) vl = N(r, vl.value, T), vl !== null && (d = n(vl, d, el), hl === null ? L = vl : hl.sibling = vl, hl = vl);
        return ol && Vt(r, el), L;
      }
      for (X = a(X); !vl.done; el++, vl = v.next()) vl = b(X, r, el, vl.value, T), vl !== null && (l && vl.alternate !== null && X.delete(vl.key === null ? el : vl.key), d = n(vl, d, el), hl === null ? L = vl : hl.sibling = vl, hl = vl);
      return l && X.forEach(function(Ih) {
        return t(r, Ih);
      }), ol && Vt(r, el), L;
    }
    function El(r, d, v, T) {
      if (typeof v == "object" && v !== null && v.type === V && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case A:
            l: {
              for (var L = v.key; d !== null; ) {
                if (d.key === L) {
                  if (L = v.type, L === V) {
                    if (d.tag === 7) {
                      e(r, d.sibling), T = u(d, v.props.children), T.return = r, r = T;
                      break l;
                    }
                  } else if (d.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Al && Ve(L) === d.type) {
                    e(r, d.sibling), T = u(d, v.props), mu(T, v), T.return = r, r = T;
                    break l;
                  }
                  e(r, d);
                  break;
                } else t(r, d);
                d = d.sibling;
              }
              v.type === V ? (T = Ge(v.props.children, r.mode, T, v.key), T.return = r, r = T) : (T = fn(v.type, v.key, v.props, null, r.mode, T), mu(T, v), T.return = r, r = T);
            }
            return i(r);
          case W:
            l: {
              for (L = v.key; d !== null; ) {
                if (d.key === L) if (d.tag === 4 && d.stateNode.containerInfo === v.containerInfo && d.stateNode.implementation === v.implementation) {
                  e(r, d.sibling), T = u(d, v.children || []), T.return = r, r = T;
                  break l;
                } else {
                  e(r, d);
                  break;
                }
                else t(r, d);
                d = d.sibling;
              }
              T = Qi(v, r.mode, T), T.return = r, r = T;
            }
            return i(r);
          case Al:
            return v = Ve(v), El(r, d, v, T);
        }
        if (dl(v)) return R(r, d, v, T);
        if (sl(v)) {
          if (L = sl(v), typeof L != "function") throw Error(h(150));
          return v = L.call(v), K(r, d, v, T);
        }
        if (typeof v.then == "function") return El(r, d, vn(v), T);
        if (v.$$typeof === E) return El(r, d, dn(r, v), T);
        yn(r, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, d !== null && d.tag === 6 ? (e(r, d.sibling), T = u(d, v), T.return = r, r = T) : (e(r, d), T = Xi(v, r.mode, T), T.return = r, r = T), i(r)) : e(r, d);
    }
    return function(r, d, v, T) {
      try {
        du = 0;
        var L = El(r, d, v, T);
        return Na = null, L;
      } catch (X) {
        if (X === pa || X === rn) throw X;
        var hl = ht(29, X, null, r.mode);
        return hl.lanes = T, hl.return = r, hl;
      }
    };
  }
  var Je = Zs(true), Vs = Zs(false), re = false;
  function Pi(l) {
    l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function lc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null });
  }
  function he(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ve(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (yl & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = cn(l), As(l, null, e), t;
    }
    return nn(l, a, t, e), cn(l);
  }
  function ru(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, qf(l, e);
    }
  }
  function tc(l, t) {
    var e = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = { lane: e.lane, tag: e.tag, payload: e.payload, callback: null, next: null };
          n === null ? u = n = i : n = n.next = i, e = e.next;
        } while (e !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      e = { baseState: a.baseState, firstBaseUpdate: u, lastBaseUpdate: n, shared: a.shared, callbacks: a.callbacks }, l.updateQueue = e;
      return;
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
  }
  var ec = false;
  function hu() {
    if (ec) {
      var l = Ta;
      if (l !== null) throw l;
    }
  }
  function vu(l, t, e, a) {
    ec = false;
    var u = l.updateQueue;
    re = false;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var s = c, y = s.next;
      s.next = null, i === null ? n = y : i.next = y, i = s;
      var x = l.alternate;
      x !== null && (x = x.updateQueue, c = x.lastBaseUpdate, c !== i && (c === null ? x.firstBaseUpdate = y : c.next = y, x.lastBaseUpdate = s));
    }
    if (n !== null) {
      var N = u.baseState;
      i = 0, x = y = s = null, c = n;
      do {
        var g = c.lane & -536870913, b = g !== c.lane;
        if (b ? (cl & g) === g : (a & g) === g) {
          g !== 0 && g === za && (ec = true), x !== null && (x = x.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
          l: {
            var R = l, K = c;
            g = t;
            var El = e;
            switch (K.tag) {
              case 1:
                if (R = K.payload, typeof R == "function") {
                  N = R.call(El, N, g);
                  break l;
                }
                N = R;
                break l;
              case 3:
                R.flags = R.flags & -65537 | 128;
              case 0:
                if (R = K.payload, g = typeof R == "function" ? R.call(El, N, g) : R, g == null) break l;
                N = B({}, N, g);
                break l;
              case 2:
                re = true;
            }
          }
          g = c.callback, g !== null && (l.flags |= 64, b && (l.flags |= 8192), b = u.callbacks, b === null ? u.callbacks = [g] : b.push(g));
        } else b = { lane: g, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, x === null ? (y = x = b, s = N) : x = x.next = b, i |= g;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null) break;
          b = c, c = b.next, b.next = null, u.lastBaseUpdate = b, u.shared.pending = null;
        }
      } while (true);
      x === null && (s = N), u.baseState = s, u.firstBaseUpdate = y, u.lastBaseUpdate = x, n === null && (u.shared.lanes = 0), xe |= i, l.lanes = i, l.memoizedState = N;
    }
  }
  function Ks(l, t) {
    if (typeof l != "function") throw Error(h(191, l));
    l.call(t);
  }
  function Js(l, t) {
    var e = l.callbacks;
    if (e !== null) for (l.callbacks = null, l = 0; l < e.length; l++) Ks(e[l], t);
  }
  var Ma = m(null), gn = m(0);
  function ws(l, t) {
    l = te, C(gn, l), C(Ma, t), te = l | t.baseLanes;
  }
  function ac() {
    C(gn, te), C(Ma, Ma.current);
  }
  function uc() {
    te = gn.current, p(Ma), p(gn);
  }
  var vt = m(null), jt = null;
  function ye(l) {
    var t = l.alternate;
    C(ql, ql.current & 1), C(vt, l), jt === null && (t === null || Ma.current !== null || t.memoizedState !== null) && (jt = l);
  }
  function nc(l) {
    C(ql, ql.current), C(vt, l), jt === null && (jt = l);
  }
  function Ws(l) {
    l.tag === 22 ? (C(ql, ql.current), C(vt, l), jt === null && (jt = l)) : ge();
  }
  function ge() {
    C(ql, ql.current), C(vt, vt.current);
  }
  function yt(l) {
    p(vt), jt === l && (jt = null), p(ql);
  }
  var ql = m(0);
  function Sn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || mf(e) || rf(e))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var wt = 0, ll = null, bl = null, Yl = null, bn = false, Aa = false, we = false, xn = 0, yu = 0, ja = null, Lr = 0;
  function Dl() {
    throw Error(h(321));
  }
  function ic(l, t) {
    if (t === null) return false;
    for (var e = 0; e < t.length && e < l.length; e++) if (!rt(l[e], t[e])) return false;
    return true;
  }
  function cc(l, t, e, a, u, n) {
    return wt = n, ll = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? Do : zc, we = false, n = e(a, u), we = false, Aa && (n = Fs(t, e, a, u)), $s(l), n;
  }
  function $s(l) {
    S.H = bu;
    var t = bl !== null && bl.next !== null;
    if (wt = 0, Yl = bl = ll = null, bn = false, yu = 0, ja = null, t) throw Error(h(300));
    l === null || Gl || (l = l.dependencies, l !== null && on(l) && (Gl = true));
  }
  function Fs(l, t, e, a) {
    ll = l;
    var u = 0;
    do {
      if (Aa && (ja = null), yu = 0, Aa = false, 25 <= u) throw Error(h(301));
      if (u += 1, Yl = bl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = Uo, n = t(e, a);
    } while (Aa);
    return n;
  }
  function Zr() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? gu(t) : t, l = l.useState()[0], (bl !== null ? bl.memoizedState : null) !== l && (ll.flags |= 1024), t;
  }
  function fc() {
    var l = xn !== 0;
    return xn = 0, l;
  }
  function sc(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function oc(l) {
    if (bn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      bn = false;
    }
    wt = 0, Yl = bl = ll = null, Aa = false, yu = xn = 0, ja = null;
  }
  function at() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Yl === null ? ll.memoizedState = Yl = l : Yl = Yl.next = l, Yl;
  }
  function Rl() {
    if (bl === null) {
      var l = ll.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = bl.next;
    var t = Yl === null ? ll.memoizedState : Yl.next;
    if (t !== null) Yl = t, bl = l;
    else {
      if (l === null) throw ll.alternate === null ? Error(h(467)) : Error(h(310));
      bl = l, l = { memoizedState: bl.memoizedState, baseState: bl.baseState, baseQueue: bl.baseQueue, queue: bl.queue, next: null }, Yl === null ? ll.memoizedState = Yl = l : Yl = Yl.next = l;
    }
    return Yl;
  }
  function En() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function gu(l) {
    var t = yu;
    return yu += 1, ja === null && (ja = []), l = Xs(ja, l, t), t = ll, (Yl === null ? t.memoizedState : Yl.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? Do : zc), l;
  }
  function zn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return gu(l);
      if (l.$$typeof === E) return kl(l);
    }
    throw Error(h(438, String(l)));
  }
  function dc(l) {
    var t = null, e = ll.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = ll.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(u) {
        return u.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = En(), ll.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0) for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ol;
    return t.index++, e;
  }
  function Wt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Tn(l) {
    var t = Rl();
    return mc(t, bl, l);
  }
  function mc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      t.baseQueue = u = n, a.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var c = i = null, s = null, y = t, x = false;
      do {
        var N = y.lane & -536870913;
        if (N !== y.lane ? (cl & N) === N : (wt & N) === N) {
          var g = y.revertLane;
          if (g === 0) s !== null && (s = s.next = { lane: 0, revertLane: 0, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }), N === za && (x = true);
          else if ((wt & g) === g) {
            y = y.next, g === za && (x = true);
            continue;
          } else N = { lane: 0, revertLane: y.revertLane, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, s === null ? (c = s = N, i = n) : s = s.next = N, ll.lanes |= g, xe |= g;
          N = y.action, we && e(n, N), n = y.hasEagerState ? y.eagerState : e(n, N);
        } else g = { lane: N, revertLane: y.revertLane, gesture: y.gesture, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, s === null ? (c = s = g, i = n) : s = s.next = g, ll.lanes |= N, xe |= N;
        y = y.next;
      } while (y !== null && y !== t);
      if (s === null ? i = n : s.next = c, !rt(n, l.memoizedState) && (Gl = true, x && (e = Ta, e !== null))) throw e;
      l.memoizedState = n, l.baseState = i, l.baseQueue = s, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function rc(l) {
    var t = Rl(), e = t.queue;
    if (e === null) throw Error(h(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, u = e.pending, n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      rt(n, t.memoizedState) || (Gl = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function ks(l, t, e) {
    var a = ll, u = Rl(), n = ol;
    if (n) {
      if (e === void 0) throw Error(h(407));
      e = e();
    } else e = t();
    var i = !rt((bl || u).memoizedState, e);
    if (i && (u.memoizedState = e, Gl = true), u = u.queue, yc(lo.bind(null, a, u, l), [l]), u.getSnapshot !== t || i || Yl !== null && Yl.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ca(9, { destroy: void 0 }, Ps.bind(null, a, u, e, t), null), pl === null) throw Error(h(349));
      n || (wt & 127) !== 0 || Is(a, t, e);
    }
    return e;
  }
  function Is(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = ll.updateQueue, t === null ? (t = En(), ll.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function Ps(l, t, e, a) {
    t.value = e, t.getSnapshot = a, to(t) && eo(l);
  }
  function lo(l, t, e) {
    return e(function() {
      to(t) && eo(l);
    });
  }
  function to(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !rt(l, e);
    } catch {
      return true;
    }
  }
  function eo(l) {
    var t = Ye(l, 2);
    t !== null && dt(t, l, 2);
  }
  function hc(l) {
    var t = at();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), we) {
        mt(true);
        try {
          e();
        } finally {
          mt(false);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Wt, lastRenderedState: l }, t;
  }
  function ao(l, t, e, a) {
    return l.baseState = e, mc(l, bl, typeof a == "function" ? a : Wt);
  }
  function Vr(l, t, e, a, u) {
    if (Mn(l)) throw Error(h(485));
    if (l = t.action, l !== null) {
      var n = { payload: u, action: l, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(i) {
        n.listeners.push(i);
      } };
      S.T !== null ? e(true) : n.isTransition = false, a(n), e = t.pending, e === null ? (n.next = t.pending = n, uo(t, n)) : (n.next = e.next, t.pending = e.next = n);
    }
  }
  function uo(l, t) {
    var e = t.action, a = t.payload, u = l.state;
    if (t.isTransition) {
      var n = S.T, i = {};
      S.T = i;
      try {
        var c = e(u, a), s = S.S;
        s !== null && s(i, c), no(l, t, c);
      } catch (y) {
        vc(l, t, y);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), S.T = n;
      }
    } else try {
      n = e(u, a), no(l, t, n);
    } catch (y) {
      vc(l, t, y);
    }
  }
  function no(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
      io(l, t, a);
    }, function(a) {
      return vc(l, t, a);
    }) : io(l, t, e);
  }
  function io(l, t, e) {
    t.status = "fulfilled", t.value = e, co(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, uo(l, e)));
  }
  function vc(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, co(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function co(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function fo(l, t) {
    return t;
  }
  function so(l, t) {
    if (ol) {
      var e = pl.formState;
      if (e !== null) {
        l: {
          var a = ll;
          if (ol) {
            if (Nl) {
              t: {
                for (var u = Nl, n = At; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = Ct(u.nextSibling), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                Nl = Ct(u.nextSibling), a = u.data === "F!";
                break l;
              }
            }
            de(a);
          }
          a = false;
        }
        a && (t = e[0]);
      }
    }
    return e = at(), e.memoizedState = e.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: fo, lastRenderedState: t }, e.queue = a, e = Co.bind(null, ll, a), a.dispatch = e, a = hc(false), n = Ec.bind(null, ll, false, a.queue), a = at(), u = { state: t, dispatch: null, action: l, pending: null }, a.queue = u, e = Vr.bind(null, ll, u, n, e), u.dispatch = e, a.memoizedState = l, [t, e, false];
  }
  function oo(l) {
    var t = Rl();
    return mo(t, bl, l);
  }
  function mo(l, t, e) {
    if (t = mc(l, t, fo)[0], l = Tn(Wt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = gu(t);
    } catch (i) {
      throw i === pa ? rn : i;
    }
    else a = t;
    t = Rl();
    var u = t.queue, n = u.dispatch;
    return e !== t.memoizedState && (ll.flags |= 2048, Ca(9, { destroy: void 0 }, Kr.bind(null, u, e), null)), [a, n, l];
  }
  function Kr(l, t) {
    l.action = t;
  }
  function ro(l) {
    var t = Rl(), e = bl;
    if (e !== null) return mo(t, e, l);
    Rl(), t = t.memoizedState, e = Rl();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, false];
  }
  function Ca(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = ll.updateQueue, t === null && (t = En(), ll.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function ho() {
    return Rl().memoizedState;
  }
  function pn(l, t, e, a) {
    var u = at();
    ll.flags |= l, u.memoizedState = Ca(1 | t, { destroy: void 0 }, e, a === void 0 ? null : a);
  }
  function Nn(l, t, e, a) {
    var u = Rl();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    bl !== null && a !== null && ic(a, bl.memoizedState.deps) ? u.memoizedState = Ca(t, n, e, a) : (ll.flags |= l, u.memoizedState = Ca(1 | t, n, e, a));
  }
  function vo(l, t) {
    pn(8390656, 8, l, t);
  }
  function yc(l, t) {
    Nn(2048, 8, l, t);
  }
  function Jr(l) {
    ll.flags |= 4;
    var t = ll.updateQueue;
    if (t === null) t = En(), ll.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function yo(l) {
    var t = Rl().memoizedState;
    return Jr({ ref: t, nextImpl: l }), function() {
      if ((yl & 2) !== 0) throw Error(h(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function go(l, t) {
    return Nn(4, 2, l, t);
  }
  function So(l, t) {
    return Nn(4, 4, l, t);
  }
  function bo(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function() {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null) return l = l(), t.current = l, function() {
      t.current = null;
    };
  }
  function xo(l, t, e) {
    e = e != null ? e.concat([l]) : null, Nn(4, 4, bo.bind(null, t, l), e);
  }
  function gc() {
  }
  function Eo(l, t) {
    var e = Rl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && ic(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function zo(l, t) {
    var e = Rl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && ic(t, a[1])) return a[0];
    if (a = l(), we) {
      mt(true);
      try {
        l();
      } finally {
        mt(false);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function Sc(l, t, e) {
    return e === void 0 || (wt & 1073741824) !== 0 && (cl & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = Td(), ll.lanes |= l, xe |= l, e);
  }
  function To(l, t, e, a) {
    return rt(e, t) ? e : Ma.current !== null ? (l = Sc(l, e, a), rt(l, t) || (Gl = true), l) : (wt & 42) === 0 || (wt & 1073741824) !== 0 && (cl & 261930) === 0 ? (Gl = true, l.memoizedState = e) : (l = Td(), ll.lanes |= l, xe |= l, t);
  }
  function po(l, t, e, a, u) {
    var n = M.p;
    M.p = n !== 0 && 8 > n ? n : 8;
    var i = S.T, c = {};
    S.T = c, Ec(l, false, t, e);
    try {
      var s = u(), y = S.S;
      if (y !== null && y(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var x = Qr(s, a);
        Su(l, t, x, bt(l));
      } else Su(l, t, a, bt(l));
    } catch (N) {
      Su(l, t, { then: function() {
      }, status: "rejected", reason: N }, bt());
    } finally {
      M.p = n, i !== null && c.types !== null && (i.types = c.types), S.T = i;
    }
  }
  function wr() {
  }
  function bc(l, t, e, a) {
    if (l.tag !== 5) throw Error(h(476));
    var u = No(l).queue;
    po(l, u, t, j, e === null ? wr : function() {
      return Mo(l), e(a);
    });
  }
  function No(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: j, baseState: j, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Wt, lastRenderedState: j }, next: null };
    var e = {};
    return t.next = { memoizedState: e, baseState: e, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Wt, lastRenderedState: e }, next: null }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Mo(l) {
    var t = No(l);
    t.next === null && (t = l.alternate.memoizedState), Su(l, t.next.queue, {}, bt());
  }
  function xc() {
    return kl(qu);
  }
  function Ao() {
    return Rl().memoizedState;
  }
  function jo() {
    return Rl().memoizedState;
  }
  function Wr(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = bt();
          l = he(e);
          var a = ve(t, l, e);
          a !== null && (dt(a, t, e), ru(a, t, e)), t = { cache: $i() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function $r(l, t, e) {
    var a = bt();
    e = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: false, eagerState: null, next: null }, Mn(l) ? _o(t, e) : (e = Yi(l, t, e, a), e !== null && (dt(e, l, a), Oo(e, t, a)));
  }
  function Co(l, t, e) {
    var a = bt();
    Su(l, t, e, a);
  }
  function Su(l, t, e, a) {
    var u = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: false, eagerState: null, next: null };
    if (Mn(l)) _o(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var i = t.lastRenderedState, c = n(i, e);
        if (u.hasEagerState = true, u.eagerState = c, rt(c, i)) return nn(l, t, u, 0), pl === null && un(), false;
      } catch {
      }
      if (e = Yi(l, t, u, a), e !== null) return dt(e, l, a), Oo(e, t, a), true;
    }
    return false;
  }
  function Ec(l, t, e, a) {
    if (a = { lane: 2, revertLane: Pc(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Mn(l)) {
      if (t) throw Error(h(479));
    } else t = Yi(l, e, a, 2), t !== null && dt(t, l, 2);
  }
  function Mn(l) {
    var t = l.alternate;
    return l === ll || t !== null && t === ll;
  }
  function _o(l, t) {
    Aa = bn = true;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function Oo(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, qf(l, e);
    }
  }
  var bu = { readContext: kl, use: zn, useCallback: Dl, useContext: Dl, useEffect: Dl, useImperativeHandle: Dl, useLayoutEffect: Dl, useInsertionEffect: Dl, useMemo: Dl, useReducer: Dl, useRef: Dl, useState: Dl, useDebugValue: Dl, useDeferredValue: Dl, useTransition: Dl, useSyncExternalStore: Dl, useId: Dl, useHostTransitionStatus: Dl, useFormState: Dl, useActionState: Dl, useOptimistic: Dl, useMemoCache: Dl, useCacheRefresh: Dl };
  bu.useEffectEvent = Dl;
  var Do = { readContext: kl, use: zn, useCallback: function(l, t) {
    return at().memoizedState = [l, t === void 0 ? null : t], l;
  }, useContext: kl, useEffect: vo, useImperativeHandle: function(l, t, e) {
    e = e != null ? e.concat([l]) : null, pn(4194308, 4, bo.bind(null, t, l), e);
  }, useLayoutEffect: function(l, t) {
    return pn(4194308, 4, l, t);
  }, useInsertionEffect: function(l, t) {
    pn(4, 2, l, t);
  }, useMemo: function(l, t) {
    var e = at();
    t = t === void 0 ? null : t;
    var a = l();
    if (we) {
      mt(true);
      try {
        l();
      } finally {
        mt(false);
      }
    }
    return e.memoizedState = [a, t], a;
  }, useReducer: function(l, t, e) {
    var a = at();
    if (e !== void 0) {
      var u = e(t);
      if (we) {
        mt(true);
        try {
          e(t);
        } finally {
          mt(false);
        }
      }
    } else u = t;
    return a.memoizedState = a.baseState = u, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: u }, a.queue = l, l = l.dispatch = $r.bind(null, ll, l), [a.memoizedState, l];
  }, useRef: function(l) {
    var t = at();
    return l = { current: l }, t.memoizedState = l;
  }, useState: function(l) {
    l = hc(l);
    var t = l.queue, e = Co.bind(null, ll, t);
    return t.dispatch = e, [l.memoizedState, e];
  }, useDebugValue: gc, useDeferredValue: function(l, t) {
    var e = at();
    return Sc(e, l, t);
  }, useTransition: function() {
    var l = hc(false);
    return l = po.bind(null, ll, l.queue, true, false), at().memoizedState = l, [false, l];
  }, useSyncExternalStore: function(l, t, e) {
    var a = ll, u = at();
    if (ol) {
      if (e === void 0) throw Error(h(407));
      e = e();
    } else {
      if (e = t(), pl === null) throw Error(h(349));
      (cl & 127) !== 0 || Is(a, t, e);
    }
    u.memoizedState = e;
    var n = { value: e, getSnapshot: t };
    return u.queue = n, vo(lo.bind(null, a, n, l), [l]), a.flags |= 2048, Ca(9, { destroy: void 0 }, Ps.bind(null, a, n, e, t), null), e;
  }, useId: function() {
    var l = at(), t = pl.identifierPrefix;
    if (ol) {
      var e = qt, a = Ht;
      e = (a & ~(1 << 32 - tt(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = xn++, 0 < e && (t += "H" + e.toString(32)), t += "_";
    } else e = Lr++, t = "_" + t + "r_" + e.toString(32) + "_";
    return l.memoizedState = t;
  }, useHostTransitionStatus: xc, useFormState: so, useActionState: so, useOptimistic: function(l) {
    var t = at();
    t.memoizedState = t.baseState = l;
    var e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = e, t = Ec.bind(null, ll, true, e), e.dispatch = t, [l, t];
  }, useMemoCache: dc, useCacheRefresh: function() {
    return at().memoizedState = Wr.bind(null, ll);
  }, useEffectEvent: function(l) {
    var t = at(), e = { impl: l };
    return t.memoizedState = e, function() {
      if ((yl & 2) !== 0) throw Error(h(440));
      return e.impl.apply(void 0, arguments);
    };
  } }, zc = { readContext: kl, use: zn, useCallback: Eo, useContext: kl, useEffect: yc, useImperativeHandle: xo, useInsertionEffect: go, useLayoutEffect: So, useMemo: zo, useReducer: Tn, useRef: ho, useState: function() {
    return Tn(Wt);
  }, useDebugValue: gc, useDeferredValue: function(l, t) {
    var e = Rl();
    return To(e, bl.memoizedState, l, t);
  }, useTransition: function() {
    var l = Tn(Wt)[0], t = Rl().memoizedState;
    return [typeof l == "boolean" ? l : gu(l), t];
  }, useSyncExternalStore: ks, useId: Ao, useHostTransitionStatus: xc, useFormState: oo, useActionState: oo, useOptimistic: function(l, t) {
    var e = Rl();
    return ao(e, bl, l, t);
  }, useMemoCache: dc, useCacheRefresh: jo };
  zc.useEffectEvent = yo;
  var Uo = { readContext: kl, use: zn, useCallback: Eo, useContext: kl, useEffect: yc, useImperativeHandle: xo, useInsertionEffect: go, useLayoutEffect: So, useMemo: zo, useReducer: rc, useRef: ho, useState: function() {
    return rc(Wt);
  }, useDebugValue: gc, useDeferredValue: function(l, t) {
    var e = Rl();
    return bl === null ? Sc(e, l, t) : To(e, bl.memoizedState, l, t);
  }, useTransition: function() {
    var l = rc(Wt)[0], t = Rl().memoizedState;
    return [typeof l == "boolean" ? l : gu(l), t];
  }, useSyncExternalStore: ks, useId: Ao, useHostTransitionStatus: xc, useFormState: ro, useActionState: ro, useOptimistic: function(l, t) {
    var e = Rl();
    return bl !== null ? ao(e, bl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
  }, useMemoCache: dc, useCacheRefresh: jo };
  Uo.useEffectEvent = yo;
  function Tc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : B({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var pc = { enqueueSetState: function(l, t, e) {
    l = l._reactInternals;
    var a = bt(), u = he(a);
    u.payload = t, e != null && (u.callback = e), t = ve(l, u, a), t !== null && (dt(t, l, a), ru(t, l, a));
  }, enqueueReplaceState: function(l, t, e) {
    l = l._reactInternals;
    var a = bt(), u = he(a);
    u.tag = 1, u.payload = t, e != null && (u.callback = e), t = ve(l, u, a), t !== null && (dt(t, l, a), ru(t, l, a));
  }, enqueueForceUpdate: function(l, t) {
    l = l._reactInternals;
    var e = bt(), a = he(e);
    a.tag = 2, t != null && (a.callback = t), t = ve(l, a, e), t !== null && (dt(t, l, e), ru(t, l, e));
  } };
  function Ho(l, t, e, a, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !nu(e, a) || !nu(u, n) : true;
  }
  function qo(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && pc.enqueueReplaceState(t, t.state, null);
  }
  function We(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = B({}, e));
      for (var u in l) e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function Ro(l) {
    an(l);
  }
  function Bo(l) {
    console.error(l);
  }
  function Yo(l) {
    an(l);
  }
  function An(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Go(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, { componentStack: e.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Nc(l, t, e) {
    return e = he(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      An(l, t);
    }, e;
  }
  function Xo(l) {
    return l = he(l), l.tag = 3, l;
  }
  function Qo(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        Go(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Go(t, e, a), typeof u != "function" && (Ee === null ? Ee = /* @__PURE__ */ new Set([this]) : Ee.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, { componentStack: c !== null ? c : "" });
    });
  }
  function Fr(l, t, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && Ea(t, e, u, true), e = vt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return jt === null ? Gn() : e.alternate === null && Ul === 0 && (Ul = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === hn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Fc(l, a, u)), false;
          case 22:
            return e.flags |= 65536, a === hn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Fc(l, a, u)), false;
        }
        throw Error(h(435, e.tag));
      }
      return Fc(l, a, u), Gn(), false;
    }
    if (ol) return t = vt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Vi && (l = Error(h(422), { cause: a }), fu(pt(l, e)))) : (a !== Vi && (t = Error(h(423), { cause: a }), fu(pt(t, e))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = pt(a, e), u = Nc(l.stateNode, a, u), tc(l, u), Ul !== 4 && (Ul = 2)), false;
    var n = Error(h(520), { cause: a });
    if (n = pt(n, e), Au === null ? Au = [n] : Au.push(n), Ul !== 4 && (Ul = 2), t === null) return true;
    a = pt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = u & -u, e.lanes |= l, l = Nc(e.stateNode, a, l), tc(e, l), false;
        case 1:
          if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Ee === null || !Ee.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = Xo(u), Qo(u, l, e, a), tc(e, u), false;
      }
      e = e.return;
    } while (e !== null);
    return false;
  }
  var Mc = Error(h(461)), Gl = false;
  function Il(l, t, e, a) {
    t.child = l === null ? Vs(t, null, e, a) : Je(t, l.child, e, a);
  }
  function Lo(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return Le(t), a = cc(l, t, e, i, n, u), c = fc(), l !== null && !Gl ? (sc(l, t, u), $t(l, t, u)) : (ol && c && Li(t), t.flags |= 1, Il(l, t, a, u), t.child);
  }
  function Zo(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" && !Gi(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Vo(l, t, n, a, u)) : (l = fn(e.type, null, a, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Hc(l, u)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : nu, e(i, a) && l.ref === t.ref) return $t(l, t, u);
    }
    return t.flags |= 1, l = Zt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Vo(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (nu(n, a) && l.ref === t.ref) if (Gl = false, t.pendingProps = a = n, Hc(l, u)) (l.flags & 131072) !== 0 && (Gl = true);
      else return t.lanes = l.lanes, $t(l, t, u);
    }
    return Ac(l, t, e, a, u);
  }
  function Ko(l, t, e, a) {
    var u = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, l !== null) {
          for (a = t.child = l.child, u = 0; a !== null; ) u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~n;
        } else a = 0, t.child = null;
        return Jo(l, t, n, e, a);
      }
      if ((e & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && mn(t, n !== null ? n.cachePool : null), n !== null ? ws(t, n) : ac(), Ws(t);
      else return a = t.lanes = 536870912, Jo(l, t, n !== null ? n.baseLanes | e : e, e, a);
    } else n !== null ? (mn(t, n.cachePool), ws(t, n), ge(), t.memoizedState = null) : (l !== null && mn(t, null), ac(), ge());
    return Il(l, t, u, e), t.child;
  }
  function xu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function Jo(l, t, e, a, u) {
    var n = ki();
    return n = n === null ? null : { parent: Bl._currentValue, pool: n }, t.memoizedState = { baseLanes: e, cachePool: n }, l !== null && mn(t, null), ac(), Ws(t), l !== null && Ea(l, t, a, true), t.childLanes = u, null;
  }
  function jn(l, t) {
    return t = _n({ mode: t.mode, children: t.children }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function wo(l, t, e) {
    return Je(t, l.child, null, e), l = jn(t, t.pendingProps), l.flags |= 2, yt(t), t.memoizedState = null, l;
  }
  function kr(l, t, e) {
    var a = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (ol) {
        if (a.mode === "hidden") return l = jn(t, a), t.lanes = 536870912, xu(null, l);
        if (nc(t), (l = Nl) ? (l = nm(l, At), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: se !== null ? { id: Ht, overflow: qt } : null, retryLane: 536870912, hydrationErrors: null }, e = Cs(l), e.return = t, t.child = e, Fl = t, Nl = null)) : l = null, l === null) throw de(t);
        return t.lanes = 536870912, null;
      }
      return jn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (nc(t), u) if (t.flags & 256) t.flags &= -257, t = wo(l, t, e);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(h(558));
      else if (Gl || Ea(l, t, e, false), u = (e & l.childLanes) !== 0, Gl || u) {
        if (a = pl, a !== null && (i = Rf(a, e), i !== 0 && i !== n.retryLane)) throw n.retryLane = i, Ye(l, i), dt(a, l, i), Mc;
        Gn(), t = wo(l, t, e);
      } else l = n.treeContext, Nl = Ct(i.nextSibling), Fl = t, ol = true, oe = null, At = false, l !== null && Ds(t, l), t = jn(t, a), t.flags |= 4096;
      return t;
    }
    return l = Zt(l.child, { mode: a.mode, children: a.children }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Cn(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(h(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function Ac(l, t, e, a, u) {
    return Le(t), e = cc(l, t, e, a, void 0, u), a = fc(), l !== null && !Gl ? (sc(l, t, u), $t(l, t, u)) : (ol && a && Li(t), t.flags |= 1, Il(l, t, e, u), t.child);
  }
  function Wo(l, t, e, a, u, n) {
    return Le(t), t.updateQueue = null, e = Fs(t, a, e, u), $s(l), a = fc(), l !== null && !Gl ? (sc(l, t, n), $t(l, t, n)) : (ol && a && Li(t), t.flags |= 1, Il(l, t, e, n), t.child);
  }
  function $o(l, t, e, a, u) {
    if (Le(t), t.stateNode === null) {
      var n = ga, i = e.contextType;
      typeof i == "object" && i !== null && (n = kl(i)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = pc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Pi(t), i = e.contextType, n.context = typeof i == "object" && i !== null ? kl(i) : ga, n.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Tc(t, e, i, a), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && pc.enqueueReplaceState(n, n.state, null), vu(t, a, n, u), hu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = true;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, s = We(e, c);
      n.props = s;
      var y = n.context, x = e.contextType;
      i = ga, typeof x == "object" && x !== null && (i = kl(x));
      var N = e.getDerivedStateFromProps;
      x = typeof N == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, x || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && qo(t, n, a, i), re = false;
      var g = t.memoizedState;
      n.state = g, vu(t, a, n, u), hu(), y = t.memoizedState, c || g !== y || re ? (typeof N == "function" && (Tc(t, e, N, a), y = t.memoizedState), (s = re || Ho(t, e, s, a, g, y, i)) ? (x || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = i, a = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = false);
    } else {
      n = t.stateNode, lc(l, t), i = t.memoizedProps, x = We(e, i), n.props = x, N = t.pendingProps, g = n.context, y = e.contextType, s = ga, typeof y == "object" && y !== null && (s = kl(y)), c = e.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== N || g !== s) && qo(t, n, a, s), re = false, g = t.memoizedState, n.state = g, vu(t, a, n, u), hu();
      var b = t.memoizedState;
      i !== N || g !== b || re || l !== null && l.dependencies !== null && on(l.dependencies) ? (typeof c == "function" && (Tc(t, e, c, a), b = t.memoizedState), (x = re || Ho(t, e, x, a, g, b, s) || l !== null && l.dependencies !== null && on(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, b, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, b, s)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = b), n.props = a, n.state = b, n.context = s, a = x) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), a = false);
    }
    return n = a, Cn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Je(t, l.child, null, u), t.child = Je(t, null, e, u)) : Il(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = $t(l, t, u), l;
  }
  function Fo(l, t, e, a) {
    return Xe(), t.flags |= 256, Il(l, t, e, a), t.child;
  }
  var jc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Cc(l) {
    return { baseLanes: l, cachePool: Ys() };
  }
  function _c(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= St), l;
  }
  function ko(l, t, e) {
    var a = t.pendingProps, u = false, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? false : (ql.current & 2) !== 0), i && (u = true, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ol) {
        if (u ? ye(t) : ge(), (l = Nl) ? (l = nm(l, At), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: se !== null ? { id: Ht, overflow: qt } : null, retryLane: 536870912, hydrationErrors: null }, e = Cs(l), e.return = t, t.child = e, Fl = t, Nl = null)) : l = null, l === null) throw de(t);
        return rf(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, u ? (ge(), u = t.mode, c = _n({ mode: "hidden", children: c }, u), a = Ge(a, u, e, null), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = Cc(e), a.childLanes = _c(l, i, e), t.memoizedState = jc, xu(null, a)) : (ye(t), Oc(t, c));
    }
    var s = l.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (n) t.flags & 256 ? (ye(t), t.flags &= -257, t = Dc(l, t, e)) : t.memoizedState !== null ? (ge(), t.child = l.child, t.flags |= 128, t = null) : (ge(), c = a.fallback, u = t.mode, a = _n({ mode: "visible", children: a.children }, u), c = Ge(c, u, e, null), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Je(t, l.child, null, e), a = t.child, a.memoizedState = Cc(e), a.childLanes = _c(l, i, e), t.memoizedState = jc, t = xu(null, a));
      else if (ye(t), rf(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, a = Error(h(419)), a.stack = "", a.digest = i, fu({ value: a, source: null, stack: null }), t = Dc(l, t, e);
      } else if (Gl || Ea(l, t, e, false), i = (e & l.childLanes) !== 0, Gl || i) {
        if (i = pl, i !== null && (a = Rf(i, e), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Ye(l, a), dt(i, l, a), Mc;
        mf(c) || Gn(), t = Dc(l, t, e);
      } else mf(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, Nl = Ct(c.nextSibling), Fl = t, ol = true, oe = null, At = false, l !== null && Ds(t, l), t = Oc(t, a.children), t.flags |= 4096);
      return t;
    }
    return u ? (ge(), c = a.fallback, u = t.mode, s = l.child, y = s.sibling, a = Zt(s, { mode: "hidden", children: a.children }), a.subtreeFlags = s.subtreeFlags & 65011712, y !== null ? c = Zt(y, c) : (c = Ge(c, u, e, null), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, xu(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = Cc(e) : (u = c.cachePool, u !== null ? (s = Bl._currentValue, u = u.parent !== s ? { parent: s, pool: s } : u) : u = Ys(), c = { baseLanes: c.baseLanes | e, cachePool: u }), a.memoizedState = c, a.childLanes = _c(l, i, e), t.memoizedState = jc, xu(l.child, a)) : (ye(t), e = l.child, l = e.sibling, e = Zt(e, { mode: "visible", children: a.children }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function Oc(l, t) {
    return t = _n({ mode: "visible", children: t }, l.mode), t.return = l, l.child = t;
  }
  function _n(l, t) {
    return l = ht(22, l, null, t), l.lanes = 0, l;
  }
  function Dc(l, t, e) {
    return Je(t, l.child, null, e), l = Oc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function Io(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), wi(l.return, t, e);
  }
  function Uc(l, t, e, a, u, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: e, tailMode: u, treeForkCount: n } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = u, i.treeForkCount = n);
  }
  function Po(l, t, e) {
    var a = t.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var i = ql.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, C(ql, i), Il(l, t, a, e), a = ol ? cu : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && Io(l, e, t);
      else if (l.tag === 19) Io(l, e, t);
      else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break l;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) break l;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    switch (u) {
      case "forwards":
        for (e = t.child, u = null; e !== null; ) l = e.alternate, l !== null && Sn(l) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), Uc(t, false, u, e, n, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && Sn(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = e, e = u, u = l;
        }
        Uc(t, true, e, null, n, a);
        break;
      case "together":
        Uc(t, false, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function $t(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), xe |= t.lanes, (e & t.childLanes) === 0) if (l !== null) {
      if (Ea(l, t, e, false), (e & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, e = Zt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; ) l = l.sibling, e = e.sibling = Zt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Hc(l, t) {
    return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && on(l)));
  }
  function Ir(l, t, e) {
    switch (t.tag) {
      case 3:
        Ql(t, t.stateNode.containerInfo), me(t, Bl, l.memoizedState.cache), Xe();
        break;
      case 27:
      case 5:
        Oe(t);
        break;
      case 4:
        Ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        me(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, nc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (ye(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? ko(l, t, e) : (ye(t), l = $t(l, t, e), l !== null ? l.sibling : null);
        ye(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (Ea(l, t, e, false), a = (e & t.childLanes) !== 0), u) {
          if (a) return Po(l, t, e);
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), C(ql, ql.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Ko(l, t, e, t.pendingProps);
      case 24:
        me(t, Bl, l.memoizedState.cache);
    }
    return $t(l, t, e);
  }
  function ld(l, t, e) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) Gl = true;
    else {
      if (!Hc(l, e) && (t.flags & 128) === 0) return Gl = false, Ir(l, t, e);
      Gl = (l.flags & 131072) !== 0;
    }
    else Gl = false, ol && (t.flags & 1048576) !== 0 && Os(t, cu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Ve(t.elementType), t.type = l, typeof l == "function") Gi(l) ? (a = We(l, a), t.tag = 1, t = $o(null, t, l, a, e)) : (t.tag = 0, t = Ac(null, t, l, a, e));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Y) {
                t.tag = 11, t = Lo(null, t, l, a, e);
                break l;
              } else if (u === G) {
                t.tag = 14, t = Zo(null, t, l, a, e);
                break l;
              }
            }
            throw t = P(l) || l, Error(h(306, t, ""));
          }
        }
        return t;
      case 0:
        return Ac(l, t, t.type, t.pendingProps, e);
      case 1:
        return a = t.type, u = We(a, t.pendingProps), $o(l, t, a, u, e);
      case 3:
        l: {
          if (Ql(t, t.stateNode.containerInfo), l === null) throw Error(h(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, lc(l, t), vu(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, me(t, Bl, a), a !== n.cache && Wi(t, [Bl], e, true), hu(), a = i.element, n.isDehydrated) if (n = { element: a, isDehydrated: false, cache: i.cache }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            t = Fo(l, t, a, e);
            break l;
          } else if (a !== u) {
            u = pt(Error(h(424)), t), fu(u), t = Fo(l, t, a, e);
            break l;
          } else for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Nl = Ct(l.firstChild), Fl = t, ol = true, oe = null, At = true, e = Vs(t, null, a, e), t.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Xe(), a === u) {
              t = $t(l, t, e);
              break l;
            }
            Il(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Cn(l, t), l === null ? (e = dm(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : ol || (e = t.type, l = t.pendingProps, a = Jn(tl.current).createElement(e), a[$l] = t, a[nt] = l, Pl(a, e, l), wl(a), t.stateNode = a) : t.memoizedState = dm(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Oe(t), l === null && ol && (a = t.stateNode = fm(t.type, t.pendingProps, tl.current), Fl = t, At = true, u = Nl, Ne(t.type) ? (hf = u, Nl = Ct(a.firstChild)) : Nl = u), Il(l, t, t.pendingProps.children, e), Cn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ol && ((u = a = Nl) && (a = jh(a, t.type, t.pendingProps, At), a !== null ? (t.stateNode = a, Fl = t, Nl = Ct(a.firstChild), At = false, u = true) : u = false), u || de(t)), Oe(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = n.children, sf(u, n) ? a = null : i !== null && sf(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = cc(l, t, Zr, null, null, e), qu._currentValue = u), Cn(l, t), Il(l, t, a, e), t.child;
      case 6:
        return l === null && ol && ((l = e = Nl) && (e = Ch(e, t.pendingProps, At), e !== null ? (t.stateNode = e, Fl = t, Nl = null, l = true) : l = false), l || de(t)), null;
      case 13:
        return ko(l, t, e);
      case 4:
        return Ql(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = Je(t, null, a, e) : Il(l, t, a, e), t.child;
      case 11:
        return Lo(l, t, t.type, t.pendingProps, e);
      case 7:
        return Il(l, t, t.pendingProps, e), t.child;
      case 8:
        return Il(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Il(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return a = t.pendingProps, me(t, t.type, a.value), Il(l, t, a.children, e), t.child;
      case 9:
        return u = t.type._context, a = t.pendingProps.children, Le(t), u = kl(u), a = a(u), t.flags |= 1, Il(l, t, a, e), t.child;
      case 14:
        return Zo(l, t, t.type, t.pendingProps, e);
      case 15:
        return Vo(l, t, t.type, t.pendingProps, e);
      case 19:
        return Po(l, t, e);
      case 31:
        return kr(l, t, e);
      case 22:
        return Ko(l, t, e, t.pendingProps);
      case 24:
        return Le(t), a = kl(Bl), l === null ? (u = ki(), u === null && (u = pl, n = $i(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = { parent: a, cache: u }, Pi(t), me(t, Bl, u)) : ((l.lanes & e) !== 0 && (lc(l, t), vu(t, null, null, e), hu()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), me(t, Bl, a)) : (a = n.cache, me(t, Bl, a), a !== u.cache && Wi(t, [Bl], e, true))), Il(l, t, t.pendingProps.children, e), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Ft(l) {
    l.flags |= 4;
  }
  function qc(l, t, e, a, u) {
    if ((t = (l.mode & 32) !== 0) && (t = false), t) {
      if (l.flags |= 16777216, (u & 335544128) === u) if (l.stateNode.complete) l.flags |= 8192;
      else if (Ad()) l.flags |= 8192;
      else throw Ke = hn, Ii;
    } else l.flags &= -16777217;
  }
  function td(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !ym(t)) if (Ad()) l.flags |= 8192;
    else throw Ke = hn, Ii;
  }
  function On(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Ll() : 536870912, l.lanes |= t, Ua |= t);
  }
  function Eu(l, t) {
    if (!ol) switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var e = null; t !== null; ) t.alternate !== null && (e = t), t = t.sibling;
        e === null ? l.tail = null : e.sibling = null;
        break;
      case "collapsed":
        e = l.tail;
        for (var a = null; e !== null; ) e.alternate !== null && (a = e), e = e.sibling;
        a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
    }
  }
  function Ml(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t) for (var u = l.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
    else for (u = l.child; u !== null; ) e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function Pr(l, t, e) {
    var a = t.pendingProps;
    switch (Zi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ml(t), null;
      case 1:
        return Ml(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Jt(Bl), _l(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (xa(t) ? Ft(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ki())), Ml(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Ft(t), n !== null ? (Ml(t), td(t, n)) : (Ml(t), qc(t, u, null, a, e))) : n ? n !== l.memoizedState ? (Ft(t), Ml(t), td(t, n)) : (Ml(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Ft(t), Ml(t), qc(t, u, l, a, e)), null;
      case 27:
        if (Yt(t), e = tl.current, u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Ft(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return Ml(t), null;
          }
          l = q.current, xa(t) ? Us(t) : (l = fm(u, a, e), t.stateNode = l, Ft(t));
        }
        return Ml(t), null;
      case 5:
        if (Yt(t), u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Ft(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return Ml(t), null;
          }
          if (n = q.current, xa(t)) Us(t);
          else {
            var i = Jn(tl.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof a.is == "string" ? i.createElement("select", { is: a.is }) : i.createElement("select"), a.multiple ? n.multiple = true : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? i.createElement(u, { is: a.is }) : i.createElement(u);
                }
            }
            n[$l] = t, n[nt] = a;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = n;
            l: switch (Pl(n, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = true;
                break l;
              default:
                a = false;
            }
            a && Ft(t);
          }
        }
        return Ml(t), qc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Ft(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(h(166));
          if (l = tl.current, xa(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, u = Fl, u !== null) switch (u.tag) {
              case 27:
              case 5:
                a = u.memoizedProps;
            }
            l[$l] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === true || kd(l.nodeValue, e)), l || de(t, true);
          } else l = Jn(l).createTextNode(a), l[$l] = t, t.stateNode = l;
        }
        return Ml(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = xa(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(h(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(557));
              l[$l] = t;
            } else Xe(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ml(t), l = false;
          } else e = Ki(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = true;
          if (!l) return t.flags & 256 ? (yt(t), t) : (yt(t), null);
          if ((t.flags & 128) !== 0) throw Error(h(558));
        }
        return Ml(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = xa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(h(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(h(317));
              u[$l] = t;
            } else Xe(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ml(t), u = false;
          } else u = Ki(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = true;
          if (!u) return t.flags & 256 ? (yt(t), t) : (yt(t), null);
        }
        return yt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), On(t, t.updateQueue), Ml(t), null);
      case 4:
        return _l(), l === null && af(t.stateNode.containerInfo), Ml(t), null;
      case 10:
        return Jt(t.type), Ml(t), null;
      case 19:
        if (p(ql), a = t.memoizedState, a === null) return Ml(t), null;
        if (u = (t.flags & 128) !== 0, n = a.rendering, n === null) if (u) Eu(a, false);
        else {
          if (Ul !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (n = Sn(l), n !== null) {
              for (t.flags |= 128, Eu(a, false), l = n.updateQueue, t.updateQueue = l, On(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; ) js(e, l), e = e.sibling;
              return C(ql, ql.current & 1 | 2), ol && Vt(t, a.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          a.tail !== null && Tl() > Rn && (t.flags |= 128, u = true, Eu(a, false), t.lanes = 4194304);
        }
        else {
          if (!u) if (l = Sn(n), l !== null) {
            if (t.flags |= 128, u = true, l = l.updateQueue, t.updateQueue = l, On(t, l), Eu(a, true), a.tail === null && a.tailMode === "hidden" && !n.alternate && !ol) return Ml(t), null;
          } else 2 * Tl() - a.renderingStartTime > Rn && e !== 536870912 && (t.flags |= 128, u = true, Eu(a, false), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Tl(), l.sibling = null, e = ql.current, C(ql, u ? e & 1 | 2 : e & 1), ol && Vt(t, a.treeForkCount), l) : (Ml(t), null);
      case 22:
      case 23:
        return yt(t), uc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (Ml(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ml(t), e = t.updateQueue, e !== null && On(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && p(Ze), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Jt(Bl), Ml(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function lh(l, t) {
    switch (Zi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Jt(Bl), _l(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Yt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (yt(t), t.alternate === null) throw Error(h(340));
          Xe();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (yt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(h(340));
          Xe();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return p(ql), null;
      case 4:
        return _l(), null;
      case 10:
        return Jt(t.type), null;
      case 22:
      case 23:
        return yt(t), uc(), l !== null && p(Ze), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Jt(Bl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ed(l, t) {
    switch (Zi(t), t.tag) {
      case 3:
        Jt(Bl), _l();
        break;
      case 26:
      case 27:
      case 5:
        Yt(t);
        break;
      case 4:
        _l();
        break;
      case 31:
        t.memoizedState !== null && yt(t);
        break;
      case 13:
        yt(t);
        break;
      case 19:
        p(ql);
        break;
      case 10:
        Jt(t.type);
        break;
      case 22:
      case 23:
        yt(t), uc(), l !== null && p(Ze);
        break;
      case 24:
        Jt(Bl);
    }
  }
  function zu(l, t) {
    try {
      var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create, i = e.inst;
            a = n(), i.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      Sl(t, t.return, c);
    }
  }
  function Se(l, t, e) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = t;
              var s = e, y = c;
              try {
                y();
              } catch (x) {
                Sl(u, s, x);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (x) {
      Sl(t, t.return, x);
    }
  }
  function ad(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Js(t, e);
      } catch (a) {
        Sl(l, l.return, a);
      }
    }
  }
  function ud(l, t, e) {
    e.props = We(l.type, l.memoizedProps), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      Sl(l, t, a);
    }
  }
  function Tu(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
      }
    } catch (u) {
      Sl(l, t, u);
    }
  }
  function Rt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null) if (typeof a == "function") try {
      a();
    } catch (u) {
      Sl(l, t, u);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof e == "function") try {
      e(null);
    } catch (u) {
      Sl(l, t, u);
    }
    else e.current = null;
  }
  function nd(l) {
    var t = l.type, e = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      Sl(l, l.return, u);
    }
  }
  function Rc(l, t, e) {
    try {
      var a = l.stateNode;
      zh(a, l.type, e, t), a[nt] = t;
    } catch (u) {
      Sl(l, l.return, u);
    }
  }
  function id(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Ne(l.type) || l.tag === 4;
  }
  function Bc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || id(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Ne(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Yc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Qt));
    else if (a !== 4 && (a === 27 && Ne(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null)) for (Yc(l, t, e), l = l.sibling; l !== null; ) Yc(l, t, e), l = l.sibling;
  }
  function Dn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && Ne(l.type) && (e = l.stateNode), l = l.child, l !== null)) for (Dn(l, t, e), l = l.sibling; l !== null; ) Dn(l, t, e), l = l.sibling;
  }
  function cd(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
      Pl(t, a, e), t[$l] = l, t[nt] = e;
    } catch (n) {
      Sl(l, l.return, n);
    }
  }
  var kt = false, Xl = false, Gc = false, fd = typeof WeakSet == "function" ? WeakSet : Set, Wl = null;
  function th(l, t) {
    if (l = l.containerInfo, cf = Pn, l = bs(l), Di(l)) {
      if ("selectionStart" in l) var e = { start: l.selectionStart, end: l.selectionEnd };
      else l: {
        e = (e = l.ownerDocument) && e.defaultView || window;
        var a = e.getSelection && e.getSelection();
        if (a && a.rangeCount !== 0) {
          e = a.anchorNode;
          var u = a.anchorOffset, n = a.focusNode;
          a = a.focusOffset;
          try {
            e.nodeType, n.nodeType;
          } catch {
            e = null;
            break l;
          }
          var i = 0, c = -1, s = -1, y = 0, x = 0, N = l, g = null;
          t: for (; ; ) {
            for (var b; N !== e || u !== 0 && N.nodeType !== 3 || (c = i + u), N !== n || a !== 0 && N.nodeType !== 3 || (s = i + a), N.nodeType === 3 && (i += N.nodeValue.length), (b = N.firstChild) !== null; ) g = N, N = b;
            for (; ; ) {
              if (N === l) break t;
              if (g === e && ++y === u && (c = i), g === n && ++x === a && (s = i), (b = N.nextSibling) !== null) break;
              N = g, g = N.parentNode;
            }
            N = b;
          }
          e = c === -1 || s === -1 ? null : { start: c, end: s };
        } else e = null;
      }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (ff = { focusedElem: l, selectionRange: e }, Pn = false, Wl = t; Wl !== null; ) if (t = Wl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Wl = l;
    else for (; Wl !== null; ) {
      switch (t = Wl, n = t.alternate, l = t.flags, t.tag) {
        case 0:
          if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (e = 0; e < l.length; e++) u = l[e], u.ref.impl = u.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && n !== null) {
            l = void 0, e = t, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
            try {
              var R = We(e.type, u);
              l = a.getSnapshotBeforeUpdate(R, n), a.__reactInternalSnapshotBeforeUpdate = l;
            } catch (K) {
              Sl(e, e.return, K);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) df(l);
            else if (e === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                df(l);
                break;
              default:
                l.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((l & 1024) !== 0) throw Error(h(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, Wl = l;
        break;
      }
      Wl = t.return;
    }
  }
  function sd(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Pt(l, e), a & 4 && zu(5, e);
        break;
      case 1:
        if (Pt(l, e), a & 4) if (l = e.stateNode, t === null) try {
          l.componentDidMount();
        } catch (i) {
          Sl(e, e.return, i);
        }
        else {
          var u = We(e.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            Sl(e, e.return, i);
          }
        }
        a & 64 && ad(e), a & 512 && Tu(e, e.return);
        break;
      case 3:
        if (Pt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null) switch (e.child.tag) {
            case 27:
            case 5:
              t = e.child.stateNode;
              break;
            case 1:
              t = e.child.stateNode;
          }
          try {
            Js(l, t);
          } catch (i) {
            Sl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && cd(e);
      case 26:
      case 5:
        Pt(l, e), t === null && a & 4 && nd(e), a & 512 && Tu(e, e.return);
        break;
      case 12:
        Pt(l, e);
        break;
      case 31:
        Pt(l, e), a & 4 && md(l, e);
        break;
      case 13:
        Pt(l, e), a & 4 && rd(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = oh.bind(null, e), _h(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || kt, !a) {
          t = t !== null && t.memoizedState !== null || Xl, u = kt;
          var n = Xl;
          kt = a, (Xl = t) && !n ? le(l, e, (e.subtreeFlags & 8772) !== 0) : Pt(l, e), kt = u, Xl = n;
        }
        break;
      case 30:
        break;
      default:
        Pt(l, e);
    }
  }
  function od(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, od(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && vi(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var jl = null, ct = false;
  function It(l, t, e) {
    for (e = e.child; e !== null; ) dd(l, t, e), e = e.sibling;
  }
  function dd(l, t, e) {
    if (lt && typeof lt.onCommitFiberUnmount == "function") try {
      lt.onCommitFiberUnmount(De, e);
    } catch {
    }
    switch (e.tag) {
      case 26:
        Xl || Rt(e, t), It(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Xl || Rt(e, t);
        var a = jl, u = ct;
        Ne(e.type) && (jl = e.stateNode, ct = false), It(l, t, e), Du(e.stateNode), jl = a, ct = u;
        break;
      case 5:
        Xl || Rt(e, t);
      case 6:
        if (a = jl, u = ct, jl = null, It(l, t, e), jl = a, ct = u, jl !== null) if (ct) try {
          (jl.nodeType === 9 ? jl.body : jl.nodeName === "HTML" ? jl.ownerDocument.body : jl).removeChild(e.stateNode);
        } catch (n) {
          Sl(e, t, n);
        }
        else try {
          jl.removeChild(e.stateNode);
        } catch (n) {
          Sl(e, t, n);
        }
        break;
      case 18:
        jl !== null && (ct ? (l = jl, am(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Qa(l)) : am(jl, e.stateNode));
        break;
      case 4:
        a = jl, u = ct, jl = e.stateNode.containerInfo, ct = true, It(l, t, e), jl = a, ct = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Se(2, e, t), Xl || Se(4, e, t), It(l, t, e);
        break;
      case 1:
        Xl || (Rt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && ud(e, t, a)), It(l, t, e);
        break;
      case 21:
        It(l, t, e);
        break;
      case 22:
        Xl = (a = Xl) || e.memoizedState !== null, It(l, t, e), Xl = a;
        break;
      default:
        It(l, t, e);
    }
  }
  function md(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Qa(l);
      } catch (e) {
        Sl(t, t.return, e);
      }
    }
  }
  function rd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      Qa(l);
    } catch (e) {
      Sl(t, t.return, e);
    }
  }
  function eh(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new fd()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new fd()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function Un(l, t) {
    var e = eh(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = dh.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function ft(l, t) {
    var e = t.deletions;
    if (e !== null) for (var a = 0; a < e.length; a++) {
      var u = e[a], n = l, i = t, c = i;
      l: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (Ne(c.type)) {
              jl = c.stateNode, ct = false;
              break l;
            }
            break;
          case 5:
            jl = c.stateNode, ct = false;
            break l;
          case 3:
          case 4:
            jl = c.stateNode.containerInfo, ct = true;
            break l;
        }
        c = c.return;
      }
      if (jl === null) throw Error(h(160));
      dd(n, i, u), jl = null, ct = false, n = u.alternate, n !== null && (n.return = null), u.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) hd(t, l), t = t.sibling;
  }
  var Dt = null;
  function hd(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ft(t, l), st(l), a & 4 && (Se(3, l, l.return), zu(3, l), Se(5, l, l.return));
        break;
      case 1:
        ft(t, l), st(l), a & 512 && (Xl || e === null || Rt(e, e.return)), a & 64 && kt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Dt;
        if (ft(t, l), st(l), a & 512 && (Xl || e === null || Rt(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null) if (a === null) if (l.stateNode === null) {
            l: {
              a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
              t: switch (a) {
                case "title":
                  n = u.getElementsByTagName("title")[0], (!n || n[Fa] || n[$l] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), Pl(n, a, e), n[$l] = l, wl(n), a = n;
                  break l;
                case "link":
                  var i = hm("link", "href", u).get(a + (e.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (n = i[c], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  n = u.createElement(a), Pl(n, a, e), u.head.appendChild(n);
                  break;
                case "meta":
                  if (i = hm("meta", "content", u).get(a + (e.content || ""))) {
                    for (c = 0; c < i.length; c++) if (n = i[c], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  n = u.createElement(a), Pl(n, a, e), u.head.appendChild(n);
                  break;
                default:
                  throw Error(h(468, a));
              }
              n[$l] = l, wl(n), a = n;
            }
            l.stateNode = a;
          } else vm(u, l.type, l.stateNode);
          else l.stateNode = rm(u, a, l.memoizedProps);
          else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? vm(u, l.type, l.stateNode) : rm(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && Rc(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        ft(t, l), st(l), a & 512 && (Xl || e === null || Rt(e, e.return)), e !== null && a & 4 && Rc(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (ft(t, l), st(l), a & 512 && (Xl || e === null || Rt(e, e.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            oa(u, "");
          } catch (R) {
            Sl(l, l.return, R);
          }
        }
        a & 4 && l.stateNode != null && (u = l.memoizedProps, Rc(l, u, e !== null ? e.memoizedProps : u)), a & 1024 && (Gc = true);
        break;
      case 6:
        if (ft(t, l), st(l), a & 4) {
          if (l.stateNode === null) throw Error(h(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (R) {
            Sl(l, l.return, R);
          }
        }
        break;
      case 3:
        if ($n = null, u = Dt, Dt = wn(t.containerInfo), ft(t, l), Dt = u, st(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
          Qa(t.containerInfo);
        } catch (R) {
          Sl(l, l.return, R);
        }
        Gc && (Gc = false, vd(l));
        break;
      case 4:
        a = Dt, Dt = wn(l.stateNode.containerInfo), ft(t, l), st(l), Dt = a;
        break;
      case 12:
        ft(t, l), st(l);
        break;
      case 31:
        ft(t, l), st(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Un(l, a)));
        break;
      case 13:
        ft(t, l), st(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (qn = Tl()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Un(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, y = kt, x = Xl;
        if (kt = y || u, Xl = x || s, ft(t, l), Xl = x, kt = y, st(l), a & 8192) l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || s || kt || Xl || $e(l)), e = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (e === null) {
              s = e = t;
              try {
                if (n = s.stateNode, u) i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = s.stateNode;
                  var N = s.memoizedProps.style, g = N != null && N.hasOwnProperty("display") ? N.display : null;
                  c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                }
              } catch (R) {
                Sl(s, s.return, R);
              }
            }
          } else if (t.tag === 6) {
            if (e === null) {
              s = t;
              try {
                s.stateNode.nodeValue = u ? "" : s.memoizedProps;
              } catch (R) {
                Sl(s, s.return, R);
              }
            }
          } else if (t.tag === 18) {
            if (e === null) {
              s = t;
              try {
                var b = s.stateNode;
                u ? um(b, true) : um(s.stateNode, false);
              } catch (R) {
                Sl(s, s.return, R);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break l;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break l;
            e === t && (e = null), t = t.return;
          }
          e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
        }
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Un(l, e))));
        break;
      case 19:
        ft(t, l), st(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Un(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ft(t, l), st(l);
    }
  }
  function st(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (id(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(h(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = Bc(l);
            Dn(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (oa(i, ""), e.flags &= -33);
            var c = Bc(l);
            Dn(l, c, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo, y = Bc(l);
            Yc(l, y, s);
            break;
          default:
            throw Error(h(161));
        }
      } catch (x) {
        Sl(l, l.return, x);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function vd(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      vd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function Pt(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) sd(l, t.alternate, t), t = t.sibling;
  }
  function $e(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Se(4, t, t.return), $e(t);
          break;
        case 1:
          Rt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && ud(t, t.return, e), $e(t);
          break;
        case 27:
          Du(t.stateNode);
        case 26:
        case 5:
          Rt(t, t.return), $e(t);
          break;
        case 22:
          t.memoizedState === null && $e(t);
          break;
        case 30:
          $e(t);
          break;
        default:
          $e(t);
      }
      l = l.sibling;
    }
  }
  function le(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, u = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          le(u, n, e), zu(4, n);
          break;
        case 1:
          if (le(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
            u.componentDidMount();
          } catch (y) {
            Sl(a, a.return, y);
          }
          if (a = n, u = a.updateQueue, u !== null) {
            var c = a.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++) Ks(s[u], c);
            } catch (y) {
              Sl(a, a.return, y);
            }
          }
          e && i & 64 && ad(n), Tu(n, n.return);
          break;
        case 27:
          cd(n);
        case 26:
        case 5:
          le(u, n, e), e && a === null && i & 4 && nd(n), Tu(n, n.return);
          break;
        case 12:
          le(u, n, e);
          break;
        case 31:
          le(u, n, e), e && i & 4 && md(u, n);
          break;
        case 13:
          le(u, n, e), e && i & 4 && rd(u, n);
          break;
        case 22:
          n.memoizedState === null && le(u, n, e), Tu(n, n.return);
          break;
        case 30:
          break;
        default:
          le(u, n, e);
      }
      t = t.sibling;
    }
  }
  function Xc(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && su(e));
  }
  function Qc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && su(l));
  }
  function Ut(l, t, e, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) yd(l, t, e, a), t = t.sibling;
  }
  function yd(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ut(l, t, e, a), u & 2048 && zu(9, t);
        break;
      case 1:
        Ut(l, t, e, a);
        break;
      case 3:
        Ut(l, t, e, a), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && su(l)));
        break;
      case 12:
        if (u & 2048) {
          Ut(l, t, e, a), l = t.stateNode;
          try {
            var n = t.memoizedProps, i = n.id, c = n.onPostCommit;
            typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (s) {
            Sl(t, t.return, s);
          }
        } else Ut(l, t, e, a);
        break;
      case 31:
        Ut(l, t, e, a);
        break;
      case 13:
        Ut(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Ut(l, t, e, a) : pu(l, t) : n._visibility & 2 ? Ut(l, t, e, a) : (n._visibility |= 2, _a(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || false)), u & 2048 && Xc(i, t);
        break;
      case 24:
        Ut(l, t, e, a), u & 2048 && Qc(t.alternate, t);
        break;
      default:
        Ut(l, t, e, a);
    }
  }
  function _a(l, t, e, a, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var n = l, i = t, c = e, s = a, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          _a(n, i, c, s, u), zu(8, i);
          break;
        case 23:
          break;
        case 22:
          var x = i.stateNode;
          i.memoizedState !== null ? x._visibility & 2 ? _a(n, i, c, s, u) : pu(n, i) : (x._visibility |= 2, _a(n, i, c, s, u)), u && y & 2048 && Xc(i.alternate, i);
          break;
        case 24:
          _a(n, i, c, s, u), u && y & 2048 && Qc(i.alternate, i);
          break;
        default:
          _a(n, i, c, s, u);
      }
      t = t.sibling;
    }
  }
  function pu(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var e = l, a = t, u = a.flags;
      switch (a.tag) {
        case 22:
          pu(e, a), u & 2048 && Xc(a.alternate, a);
          break;
        case 24:
          pu(e, a), u & 2048 && Qc(a.alternate, a);
          break;
        default:
          pu(e, a);
      }
      t = t.sibling;
    }
  }
  var Nu = 8192;
  function Oa(l, t, e) {
    if (l.subtreeFlags & Nu) for (l = l.child; l !== null; ) gd(l, t, e), l = l.sibling;
  }
  function gd(l, t, e) {
    switch (l.tag) {
      case 26:
        Oa(l, t, e), l.flags & Nu && l.memoizedState !== null && Lh(e, Dt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        Oa(l, t, e);
        break;
      case 3:
      case 4:
        var a = Dt;
        Dt = wn(l.stateNode.containerInfo), Oa(l, t, e), Dt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = Nu, Nu = 16777216, Oa(l, t, e), Nu = a) : Oa(l, t, e));
        break;
      default:
        Oa(l, t, e);
    }
  }
  function Sd(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Mu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var e = 0; e < t.length; e++) {
        var a = t[e];
        Wl = a, xd(a, l);
      }
      Sd(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) bd(l), l = l.sibling;
  }
  function bd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Mu(l), l.flags & 2048 && Se(9, l, l.return);
        break;
      case 3:
        Mu(l);
        break;
      case 12:
        Mu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Hn(l)) : Mu(l);
        break;
      default:
        Mu(l);
    }
  }
  function Hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var e = 0; e < t.length; e++) {
        var a = t[e];
        Wl = a, xd(a, l);
      }
      Sd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Se(8, t, t.return), Hn(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Hn(t));
          break;
        default:
          Hn(t);
      }
      l = l.sibling;
    }
  }
  function xd(l, t) {
    for (; Wl !== null; ) {
      var e = Wl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Se(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          su(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Wl = a;
      else l: for (e = l; Wl !== null; ) {
        a = Wl;
        var u = a.sibling, n = a.return;
        if (od(a), a === e) {
          Wl = null;
          break l;
        }
        if (u !== null) {
          u.return = n, Wl = u;
          break l;
        }
        Wl = n;
      }
    }
  }
  var ah = { getCacheForType: function(l) {
    var t = kl(Bl), e = t.data.get(l);
    return e === void 0 && (e = l(), t.data.set(l, e)), e;
  }, cacheSignal: function() {
    return kl(Bl).controller.signal;
  } }, uh = typeof WeakMap == "function" ? WeakMap : Map, yl = 0, pl = null, nl = null, cl = 0, gl = 0, gt = null, be = false, Da = false, Lc = false, te = 0, Ul = 0, xe = 0, Fe = 0, Zc = 0, St = 0, Ua = 0, Au = null, ot = null, Vc = false, qn = 0, Ed = 0, Rn = 1 / 0, Bn = null, Ee = null, Zl = 0, ze = null, Ha = null, ee = 0, Kc = 0, Jc = null, zd = null, ju = 0, wc = null;
  function bt() {
    return (yl & 2) !== 0 && cl !== 0 ? cl & -cl : S.T !== null ? Pc() : Bf();
  }
  function Td() {
    if (St === 0) if ((cl & 536870912) === 0 || ol) {
      var l = xt;
      xt <<= 1, (xt & 3932160) === 0 && (xt = 262144), St = l;
    } else St = 536870912;
    return l = vt.current, l !== null && (l.flags |= 32), St;
  }
  function dt(l, t, e) {
    (l === pl && (gl === 2 || gl === 9) || l.cancelPendingCommit !== null) && (qa(l, 0), Te(l, cl, St, false)), $a(l, e), ((yl & 2) === 0 || l !== pl) && (l === pl && ((yl & 2) === 0 && (Fe |= e), Ul === 4 && Te(l, cl, St, false)), Bt(l));
  }
  function pd(l, t, e) {
    if ((yl & 6) !== 0) throw Error(h(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ue(l, t), u = a ? ch(l, t) : $c(l, t, true), n = a;
    do {
      if (u === 0) {
        Da && !a && Te(l, t, 0, false);
        break;
      } else {
        if (e = l.current.alternate, n && !nh(e)) {
          u = $c(l, t, false), n = false;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n) var i = 0;
          else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = Au;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (qa(c, i).flags |= 256), i = $c(c, i, false), i !== 2) {
                if (Lc && !s) {
                  c.errorRecoveryDisabledLanes |= n, Fe |= n, u = 4;
                  break l;
                }
                n = ot, ot = u, n !== null && (ot === null ? ot = n : ot.push.apply(ot, n));
              }
              u = i;
            }
            if (n = false, u !== 2) continue;
          }
        }
        if (u === 1) {
          qa(l, 0), Te(l, t, 0, true);
          break;
        }
        l: {
          switch (a = l, n = u, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Te(a, t, St, !be);
              break l;
            case 2:
              ot = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && (u = qn + 300 - Tl(), 10 < u)) {
            if (Te(a, t, St, !be), ea(a, 0, true) !== 0) break l;
            ee = t, a.timeoutHandle = tm(Nd.bind(null, a, e, ot, Bn, Vc, t, St, Fe, Ua, be, n, "Throttled", -0, 0), u);
            break l;
          }
          Nd(a, e, ot, Bn, Vc, t, St, Fe, Ua, be, n, null, -0, 0);
        }
      }
      break;
    } while (true);
    Bt(l);
  }
  function Nd(l, t, e, a, u, n, i, c, s, y, x, N, g, b) {
    if (l.timeoutHandle = -1, N = t.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
      N = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Qt }, gd(t, n, N);
      var R = (n & 62914560) === n ? qn - Tl() : (n & 4194048) === n ? Ed - Tl() : 0;
      if (R = Zh(N, R), R !== null) {
        ee = n, l.cancelPendingCommit = R(Ud.bind(null, l, t, n, e, a, u, i, c, s, x, N, null, g, b)), Te(l, n, i, !y);
        return;
      }
    }
    Ud(l, t, n, e, a, u, i, c, s);
  }
  function nh(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null))) for (var a = 0; a < e.length; a++) {
        var u = e[a], n = u.getSnapshot;
        u = u.value;
        try {
          if (!rt(n(), u)) return false;
        } catch {
          return false;
        }
      }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function Te(l, t, e, a) {
    t &= ~Zc, t &= ~Fe, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - tt(u), i = 1 << n;
      a[n] = -1, u &= ~i;
    }
    e !== 0 && Hf(l, e, t);
  }
  function Yn() {
    return (yl & 6) === 0 ? (Cu(0), false) : true;
  }
  function Wc() {
    if (nl !== null) {
      if (gl === 0) var l = nl.return;
      else l = nl, Kt = Qe = null, oc(l), Na = null, du = 0, l = nl;
      for (; l !== null; ) ed(l.alternate, l), l = l.return;
      nl = null;
    }
  }
  function qa(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Nh(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), ee = 0, Wc(), pl = l, nl = e = Zt(l.current, null), cl = t, gl = 0, gt = null, be = false, Da = Ue(l, t), Lc = false, Ua = St = Zc = Fe = xe = Ul = 0, ot = Au = null, Vc = false, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0) for (l = l.entanglements, a &= t; 0 < a; ) {
      var u = 31 - tt(a), n = 1 << u;
      t |= l[u], a &= ~n;
    }
    return te = t, un(), e;
  }
  function Md(l, t) {
    ll = null, S.H = bu, t === pa || t === rn ? (t = Qs(), gl = 3) : t === Ii ? (t = Qs(), gl = 4) : gl = t === Mc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, gt = t, nl === null && (Ul = 1, An(l, pt(t, l.current)));
  }
  function Ad() {
    var l = vt.current;
    return l === null ? true : (cl & 4194048) === cl ? jt === null : (cl & 62914560) === cl || (cl & 536870912) !== 0 ? l === jt : false;
  }
  function jd() {
    var l = S.H;
    return S.H = bu, l === null ? bu : l;
  }
  function Cd() {
    var l = S.A;
    return S.A = ah, l;
  }
  function Gn() {
    Ul = 4, be || (cl & 4194048) !== cl && vt.current !== null || (Da = true), (xe & 134217727) === 0 && (Fe & 134217727) === 0 || pl === null || Te(pl, cl, St, false);
  }
  function $c(l, t, e) {
    var a = yl;
    yl |= 2;
    var u = jd(), n = Cd();
    (pl !== l || cl !== t) && (Bn = null, qa(l, t)), t = false;
    var i = Ul;
    l: do
      try {
        if (gl !== 0 && nl !== null) {
          var c = nl, s = gt;
          switch (gl) {
            case 8:
              Wc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              vt.current === null && (t = true);
              var y = gl;
              if (gl = 0, gt = null, Ra(l, c, s, y), e && Da) {
                i = 0;
                break l;
              }
              break;
            default:
              y = gl, gl = 0, gt = null, Ra(l, c, s, y);
          }
        }
        ih(), i = Ul;
        break;
      } catch (x) {
        Md(l, x);
      }
    while (true);
    return t && l.shellSuspendCounter++, Kt = Qe = null, yl = a, S.H = u, S.A = n, nl === null && (pl = null, cl = 0, un()), i;
  }
  function ih() {
    for (; nl !== null; ) _d(nl);
  }
  function ch(l, t) {
    var e = yl;
    yl |= 2;
    var a = jd(), u = Cd();
    pl !== l || cl !== t ? (Bn = null, Rn = Tl() + 500, qa(l, t)) : Da = Ue(l, t);
    l: do
      try {
        if (gl !== 0 && nl !== null) {
          t = nl;
          var n = gt;
          t: switch (gl) {
            case 1:
              gl = 0, gt = null, Ra(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Gs(n)) {
                gl = 0, gt = null, Od(t);
                break;
              }
              t = function() {
                gl !== 2 && gl !== 9 || pl !== l || (gl = 7), Bt(l);
              }, n.then(t, t);
              break l;
            case 3:
              gl = 7;
              break l;
            case 4:
              gl = 5;
              break l;
            case 7:
              Gs(n) ? (gl = 0, gt = null, Od(t)) : (gl = 0, gt = null, Ra(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (nl.tag) {
                case 26:
                  i = nl.memoizedState;
                case 5:
                case 27:
                  var c = nl;
                  if (i ? ym(i) : c.stateNode.complete) {
                    gl = 0, gt = null;
                    var s = c.sibling;
                    if (s !== null) nl = s;
                    else {
                      var y = c.return;
                      y !== null ? (nl = y, Xn(y)) : nl = null;
                    }
                    break t;
                  }
              }
              gl = 0, gt = null, Ra(l, t, n, 5);
              break;
            case 6:
              gl = 0, gt = null, Ra(l, t, n, 6);
              break;
            case 8:
              Wc(), Ul = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        fh();
        break;
      } catch (x) {
        Md(l, x);
      }
    while (true);
    return Kt = Qe = null, S.H = a, S.A = u, yl = e, nl !== null ? 0 : (pl = null, cl = 0, un(), Ul);
  }
  function fh() {
    for (; nl !== null && !Zu(); ) _d(nl);
  }
  function _d(l) {
    var t = ld(l.alternate, l, te);
    l.memoizedProps = l.pendingProps, t === null ? Xn(l) : nl = t;
  }
  function Od(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Wo(e, t, t.pendingProps, t.type, void 0, cl);
        break;
      case 11:
        t = Wo(e, t, t.pendingProps, t.type.render, t.ref, cl);
        break;
      case 5:
        oc(t);
      default:
        ed(e, t), t = nl = js(t, te), t = ld(e, t, te);
    }
    l.memoizedProps = l.pendingProps, t === null ? Xn(l) : nl = t;
  }
  function Ra(l, t, e, a) {
    Kt = Qe = null, oc(t), Na = null, du = 0;
    var u = t.return;
    try {
      if (Fr(l, u, t, e, cl)) {
        Ul = 1, An(l, pt(e, l.current)), nl = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw nl = u, n;
      Ul = 1, An(l, pt(e, l.current)), nl = null;
      return;
    }
    t.flags & 32768 ? (ol || a === 1 ? l = true : Da || (cl & 536870912) !== 0 ? l = false : (be = l = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = vt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Dd(t, l)) : Xn(t);
  }
  function Xn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Dd(t, be);
        return;
      }
      l = t.return;
      var e = Pr(t.alternate, t, te);
      if (e !== null) {
        nl = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        nl = t;
        return;
      }
      nl = t = l;
    } while (t !== null);
    Ul === 0 && (Ul = 5);
  }
  function Dd(l, t) {
    do {
      var e = lh(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, nl = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        nl = l;
        return;
      }
      nl = l = e;
    } while (l !== null);
    Ul = 6, nl = null;
  }
  function Ud(l, t, e, a, u, n, i, c, s) {
    l.cancelPendingCommit = null;
    do
      Qn();
    while (Zl !== 0);
    if ((yl & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (n = t.lanes | t.childLanes, n |= Bi, Qm(l, e, n, i, c, s), l === pl && (nl = pl = null, cl = 0), Ha = t, ze = l, ee = e, Kc = n, Jc = u, zd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, mh(ue, function() {
        return Yd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, u = M.p, M.p = 2, i = yl, yl |= 4;
        try {
          th(l, t, e);
        } finally {
          yl = i, M.p = u, S.T = a;
        }
      }
      Zl = 1, Hd(), qd(), Rd();
    }
  }
  function Hd() {
    if (Zl === 1) {
      Zl = 0;
      var l = ze, t = Ha, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = S.T, S.T = null;
        var a = M.p;
        M.p = 2;
        var u = yl;
        yl |= 4;
        try {
          hd(t, l);
          var n = ff, i = bs(l.containerInfo), c = n.focusedElem, s = n.selectionRange;
          if (i !== c && c && c.ownerDocument && Ss(c.ownerDocument.documentElement, c)) {
            if (s !== null && Di(c)) {
              var y = s.start, x = s.end;
              if (x === void 0 && (x = y), "selectionStart" in c) c.selectionStart = y, c.selectionEnd = Math.min(x, c.value.length);
              else {
                var N = c.ownerDocument || document, g = N && N.defaultView || window;
                if (g.getSelection) {
                  var b = g.getSelection(), R = c.textContent.length, K = Math.min(s.start, R), El = s.end === void 0 ? K : Math.min(s.end, R);
                  !b.extend && K > El && (i = El, El = K, K = i);
                  var r = gs(c, K), d = gs(c, El);
                  if (r && d && (b.rangeCount !== 1 || b.anchorNode !== r.node || b.anchorOffset !== r.offset || b.focusNode !== d.node || b.focusOffset !== d.offset)) {
                    var v = N.createRange();
                    v.setStart(r.node, r.offset), b.removeAllRanges(), K > El ? (b.addRange(v), b.extend(d.node, d.offset)) : (v.setEnd(d.node, d.offset), b.addRange(v));
                  }
                }
              }
            }
            for (N = [], b = c; b = b.parentNode; ) b.nodeType === 1 && N.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < N.length; c++) {
              var T = N[c];
              T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
            }
          }
          Pn = !!cf, ff = cf = null;
        } finally {
          yl = u, M.p = a, S.T = e;
        }
      }
      l.current = t, Zl = 2;
    }
  }
  function qd() {
    if (Zl === 2) {
      Zl = 0;
      var l = ze, t = Ha, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = S.T, S.T = null;
        var a = M.p;
        M.p = 2;
        var u = yl;
        yl |= 4;
        try {
          sd(l, t.alternate, t);
        } finally {
          yl = u, M.p = a, S.T = e;
        }
      }
      Zl = 3;
    }
  }
  function Rd() {
    if (Zl === 4 || Zl === 3) {
      Zl = 0, Vu();
      var l = ze, t = Ha, e = ee, a = zd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Zl = 5 : (Zl = 0, Ha = ze = null, Bd(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (Ee = null), ri(e), t = t.stateNode, lt && typeof lt.onCommitFiberRoot == "function") try {
        lt.onCommitFiberRoot(De, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        t = S.T, u = M.p, M.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          S.T = t, M.p = u;
        }
      }
      (ee & 3) !== 0 && Qn(), Bt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === wc ? ju++ : (ju = 0, wc = l) : ju = 0, Cu(0);
    }
  }
  function Bd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, su(t)));
  }
  function Qn() {
    return Hd(), qd(), Rd(), Yd();
  }
  function Yd() {
    if (Zl !== 5) return false;
    var l = ze, t = Kc;
    Kc = 0;
    var e = ri(ee), a = S.T, u = M.p;
    try {
      M.p = 32 > e ? 32 : e, S.T = null, e = Jc, Jc = null;
      var n = ze, i = ee;
      if (Zl = 0, Ha = ze = null, ee = 0, (yl & 6) !== 0) throw Error(h(331));
      var c = yl;
      if (yl |= 4, bd(n.current), yd(n, n.current, i, e), yl = c, Cu(0, false), lt && typeof lt.onPostCommitFiberRoot == "function") try {
        lt.onPostCommitFiberRoot(De, n);
      } catch {
      }
      return true;
    } finally {
      M.p = u, S.T = a, Bd(l, t);
    }
  }
  function Gd(l, t, e) {
    t = pt(e, t), t = Nc(l.stateNode, t, 2), l = ve(l, t, 2), l !== null && ($a(l, 2), Bt(l));
  }
  function Sl(l, t, e) {
    if (l.tag === 3) Gd(l, l, e);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Gd(t, l, e);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ee === null || !Ee.has(a))) {
          l = pt(e, l), e = Xo(2), a = ve(t, e, 2), a !== null && (Qo(e, a, t, l), $a(a, 2), Bt(a));
          break;
        }
      }
      t = t.return;
    }
  }
  function Fc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new uh();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(e) || (Lc = true, u.add(e), l = sh.bind(null, l, t, e), t.then(l, l));
  }
  function sh(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, pl === l && (cl & e) === e && (Ul === 4 || Ul === 3 && (cl & 62914560) === cl && 300 > Tl() - qn ? (yl & 2) === 0 && qa(l, 0) : Zc |= e, Ua === cl && (Ua = 0)), Bt(l);
  }
  function Xd(l, t) {
    t === 0 && (t = Ll()), l = Ye(l, t), l !== null && ($a(l, t), Bt(l));
  }
  function oh(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), Xd(l, e);
  }
  function dh(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    a !== null && a.delete(t), Xd(l, e);
  }
  function mh(l, t) {
    return Va(l, t);
  }
  var Ln = null, Ba = null, kc = false, Zn = false, Ic = false, pe = 0;
  function Bt(l) {
    l !== Ba && l.next === null && (Ba === null ? Ln = Ba = l : Ba = Ba.next = l), Zn = true, kc || (kc = true, hh());
  }
  function Cu(l, t) {
    if (!Ic && Zn) {
      Ic = true;
      do
        for (var e = false, a = Ln; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - tt(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = true, Vd(a, n));
          } else n = cl, n = ea(a, a === pl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || Ue(a, n) || (e = true, Vd(a, n));
          a = a.next;
        }
      while (e);
      Ic = false;
    }
  }
  function rh() {
    Qd();
  }
  function Qd() {
    Zn = kc = false;
    var l = 0;
    pe !== 0 && ph() && (l = pe);
    for (var t = Tl(), e = null, a = Ln; a !== null; ) {
      var u = a.next, n = Ld(a, t);
      n === 0 ? (a.next = null, e === null ? Ln = u : e.next = u, u === null && (Ba = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Zn = true)), a = u;
    }
    Zl !== 0 && Zl !== 5 || Cu(l), pe !== 0 && (pe = 0);
  }
  function Ld(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - tt(n), c = 1 << i, s = u[i];
      s === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = aa(c, t)) : s <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = pl, e = cl, e = ea(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (gl === 2 || gl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && la(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Ue(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && la(a), ri(e)) {
        case 2:
        case 8:
          e = Ja;
          break;
        case 32:
          e = ue;
          break;
        case 268435456:
          e = ne;
          break;
        default:
          e = ue;
      }
      return a = Zd.bind(null, l), e = Va(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && la(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Zd(l, t) {
    if (Zl !== 0 && Zl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (Qn() && l.callbackNode !== e) return null;
    var a = cl;
    return a = ea(l, l === pl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (pd(l, a, t), Ld(l, Tl()), l.callbackNode != null && l.callbackNode === e ? Zd.bind(null, l) : null);
  }
  function Vd(l, t) {
    if (Qn()) return null;
    pd(l, t, true);
  }
  function hh() {
    Mh(function() {
      (yl & 6) !== 0 ? Va(Ka, rh) : Qd();
    });
  }
  function Pc() {
    if (pe === 0) {
      var l = za;
      l === 0 && (l = Jl, Jl <<= 1, (Jl & 261888) === 0 && (Jl = 256)), pe = l;
    }
    return pe;
  }
  function Kd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Fu("" + l);
  }
  function Jd(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function vh(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = Kd((u[nt] || null).action), i = a.submitter;
      i && (t = (t = i[nt] || null) ? Kd(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new ln("action", "action", null, a, u);
      l.push({ event: c, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (pe !== 0) {
            var s = i ? Jd(u, i) : new FormData(u);
            bc(e, { pending: true, data: s, method: u.method, action: n }, null, s);
          }
        } else typeof n == "function" && (c.preventDefault(), s = i ? Jd(u, i) : new FormData(u), bc(e, { pending: true, data: s, method: u.method, action: n }, n, s));
      }, currentTarget: u }] });
    }
  }
  for (var lf = 0; lf < Ri.length; lf++) {
    var tf = Ri[lf], yh = tf.toLowerCase(), gh = tf[0].toUpperCase() + tf.slice(1);
    Ot(yh, "on" + gh);
  }
  Ot(zs, "onAnimationEnd"), Ot(Ts, "onAnimationIteration"), Ot(ps, "onAnimationStart"), Ot("dblclick", "onDoubleClick"), Ot("focusin", "onFocus"), Ot("focusout", "onBlur"), Ot(Ur, "onTransitionRun"), Ot(Hr, "onTransitionStart"), Ot(qr, "onTransitionCancel"), Ot(Ns, "onTransitionEnd"), fa("onMouseEnter", ["mouseout", "mouseover"]), fa("onMouseLeave", ["mouseout", "mouseover"]), fa("onPointerEnter", ["pointerout", "pointerover"]), fa("onPointerLeave", ["pointerout", "pointerover"]), He("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), He("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), He("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), He("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), He("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), He("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _u = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Sh = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_u));
  function wd(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t) for (var i = a.length - 1; 0 <= i; i--) {
          var c = a[i], s = c.instance, y = c.currentTarget;
          if (c = c.listener, s !== n && u.isPropagationStopped()) break l;
          n = c, u.currentTarget = y;
          try {
            n(u);
          } catch (x) {
            an(x);
          }
          u.currentTarget = null, n = s;
        }
        else for (i = 0; i < a.length; i++) {
          if (c = a[i], s = c.instance, y = c.currentTarget, c = c.listener, s !== n && u.isPropagationStopped()) break l;
          n = c, u.currentTarget = y;
          try {
            n(u);
          } catch (x) {
            an(x);
          }
          u.currentTarget = null, n = s;
        }
      }
    }
  }
  function il(l, t) {
    var e = t[hi];
    e === void 0 && (e = t[hi] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (Wd(t, l, 2, false), e.add(a));
  }
  function ef(l, t, e) {
    var a = 0;
    t && (a |= 4), Wd(e, l, a, t);
  }
  var Vn = "_reactListening" + Math.random().toString(36).slice(2);
  function af(l) {
    if (!l[Vn]) {
      l[Vn] = true, Xf.forEach(function(e) {
        e !== "selectionchange" && (Sh.has(e) || ef(e, false, l), ef(e, true, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Vn] || (t[Vn] = true, ef("selectionchange", false, t));
    }
  }
  function Wd(l, t, e, a) {
    switch (Tm(t)) {
      case 2:
        var u = Jh;
        break;
      case 8:
        u = wh;
        break;
      default:
        u = bf;
    }
    e = u.bind(null, t, e, l), u = void 0, !Ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = true), a ? u !== void 0 ? l.addEventListener(t, e, { capture: true, passive: u }) : l.addEventListener(t, e, true) : u !== void 0 ? l.addEventListener(t, e, { passive: u }) : l.addEventListener(t, e, false);
  }
  function uf(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (; ; ) {
      if (a === null) return;
      var i = a.tag;
      if (i === 3 || i === 4) {
        var c = a.stateNode.containerInfo;
        if (c === u) break;
        if (i === 4) for (i = a.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && i.stateNode.containerInfo === u) return;
          i = i.return;
        }
        for (; c !== null; ) {
          if (i = na(c), i === null) return;
          if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
            a = n = i;
            continue l;
          }
          c = c.parentNode;
        }
      }
      a = a.return;
    }
    If(function() {
      var y = n, x = Ei(e), N = [];
      l: {
        var g = Ms.get(l);
        if (g !== void 0) {
          var b = ln, R = l;
          switch (l) {
            case "keypress":
              if (Iu(e) === 0) break l;
            case "keydown":
            case "keyup":
              b = dr;
              break;
            case "focusin":
              R = "focus", b = Ai;
              break;
            case "focusout":
              R = "blur", b = Ai;
              break;
            case "beforeblur":
            case "afterblur":
              b = Ai;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = ts;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Pm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = hr;
              break;
            case zs:
            case Ts:
            case ps:
              b = er;
              break;
            case Ns:
              b = yr;
              break;
            case "scroll":
            case "scrollend":
              b = km;
              break;
            case "wheel":
              b = Sr;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = ur;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = as;
              break;
            case "toggle":
            case "beforetoggle":
              b = xr;
          }
          var K = (t & 4) !== 0, El = !K && (l === "scroll" || l === "scrollend"), r = K ? g !== null ? g + "Capture" : null : g;
          K = [];
          for (var d = y, v; d !== null; ) {
            var T = d;
            if (v = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || v === null || r === null || (T = Ia(d, r), T != null && K.push(Ou(d, T, v))), El) break;
            d = d.return;
          }
          0 < K.length && (g = new b(g, R, null, e, x), N.push({ event: g, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", b = l === "mouseout" || l === "pointerout", g && e !== xi && (R = e.relatedTarget || e.fromElement) && (na(R) || R[ua])) break l;
          if ((b || g) && (g = x.window === x ? x : (g = x.ownerDocument) ? g.defaultView || g.parentWindow : window, b ? (R = e.relatedTarget || e.toElement, b = y, R = R ? na(R) : null, R !== null && (El = Q(R), K = R.tag, R !== El || K !== 5 && K !== 27 && K !== 6) && (R = null)) : (b = null, R = y), b !== R)) {
            if (K = ts, T = "onMouseLeave", r = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (K = as, T = "onPointerLeave", r = "onPointerEnter", d = "pointer"), El = b == null ? g : ka(b), v = R == null ? g : ka(R), g = new K(T, d + "leave", b, e, x), g.target = El, g.relatedTarget = v, T = null, na(x) === y && (K = new K(r, d + "enter", R, e, x), K.target = v, K.relatedTarget = El, T = K), El = T, b && R) t: {
              for (K = bh, r = b, d = R, v = 0, T = r; T; T = K(T)) v++;
              T = 0;
              for (var L = d; L; L = K(L)) T++;
              for (; 0 < v - T; ) r = K(r), v--;
              for (; 0 < T - v; ) d = K(d), T--;
              for (; v--; ) {
                if (r === d || d !== null && r === d.alternate) {
                  K = r;
                  break t;
                }
                r = K(r), d = K(d);
              }
              K = null;
            }
            else K = null;
            b !== null && $d(N, g, b, K, false), R !== null && El !== null && $d(N, El, R, K, true);
          }
        }
        l: {
          if (g = y ? ka(y) : window, b = g.nodeName && g.nodeName.toLowerCase(), b === "select" || b === "input" && g.type === "file") var hl = ds;
          else if (ss(g)) if (ms) hl = _r;
          else {
            hl = jr;
            var X = Ar;
          }
          else b = g.nodeName, !b || b.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? y && bi(y.elementType) && (hl = ds) : hl = Cr;
          if (hl && (hl = hl(l, y))) {
            os(N, hl, e, x);
            break l;
          }
          X && X(l, g, y), l === "focusout" && y && g.type === "number" && y.memoizedProps.value != null && Si(g, "number", g.value);
        }
        switch (X = y ? ka(y) : window, l) {
          case "focusin":
            (ss(X) || X.contentEditable === "true") && (ha = X, Ui = y, iu = null);
            break;
          case "focusout":
            iu = Ui = ha = null;
            break;
          case "mousedown":
            Hi = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Hi = false, xs(N, e, x);
            break;
          case "selectionchange":
            if (Dr) break;
          case "keydown":
          case "keyup":
            xs(N, e, x);
        }
        var el;
        if (Ci) l: {
          switch (l) {
            case "compositionstart":
              var fl = "onCompositionStart";
              break l;
            case "compositionend":
              fl = "onCompositionEnd";
              break l;
            case "compositionupdate":
              fl = "onCompositionUpdate";
              break l;
          }
          fl = void 0;
        }
        else ra ? cs(l, e) && (fl = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (fl = "onCompositionStart");
        fl && (us && e.locale !== "ko" && (ra || fl !== "onCompositionStart" ? fl === "onCompositionEnd" && ra && (el = Pf()) : (fe = x, pi = "value" in fe ? fe.value : fe.textContent, ra = true)), X = Kn(y, fl), 0 < X.length && (fl = new es(fl, l, null, e, x), N.push({ event: fl, listeners: X }), el ? fl.data = el : (el = fs(e), el !== null && (fl.data = el)))), (el = zr ? Tr(l, e) : pr(l, e)) && (fl = Kn(y, "onBeforeInput"), 0 < fl.length && (X = new es("onBeforeInput", "beforeinput", null, e, x), N.push({ event: X, listeners: fl }), X.data = el)), vh(N, l, y, e, x);
      }
      wd(N, t);
    });
  }
  function Ou(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function Kn(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ia(l, e), u != null && a.unshift(Ou(l, u, n)), u = Ia(l, t), u != null && a.push(Ou(l, u, n))), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function bh(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function $d(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e, s = c.alternate, y = c.stateNode;
      if (c = c.tag, s !== null && s === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (s = y, u ? (y = Ia(e, n), y != null && i.unshift(Ou(e, y, s))) : u || (y = Ia(e, n), y != null && i.push(Ou(e, y, s)))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var xh = /\r\n?/g, Eh = /\u0000|\uFFFD/g;
  function Fd(l) {
    return (typeof l == "string" ? l : "" + l).replace(xh, `
`).replace(Eh, "");
  }
  function kd(l, t) {
    return t = Fd(t), Fd(l) === t;
  }
  function xl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || oa(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && oa(l, "" + a);
        break;
      case "className":
        Wu(l, "class", a);
        break;
      case "tabIndex":
        Wu(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wu(l, e, a);
        break;
      case "style":
        Ff(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Wu(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Fu("" + a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (e === "formAction" ? (t !== "input" && xl(l, t, "name", u.name, u, null), xl(l, t, "formEncType", u.formEncType, u, null), xl(l, t, "formMethod", u.formMethod, u, null), xl(l, t, "formTarget", u.formTarget, u, null)) : (xl(l, t, "encType", u.encType, u, null), xl(l, t, "method", u.method, u, null), xl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Fu("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Qt);
        break;
      case "onScroll":
        a != null && il("scroll", l);
        break;
      case "onScrollEnd":
        a != null && il("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(h(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(h(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        e = Fu("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === true ? l.setAttribute(e, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        il("beforetoggle", l), il("toggle", l), wu(l, "popover", a);
        break;
      case "xlinkActuate":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Xt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Xt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Xt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Xt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        wu(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = $m.get(e) || e, wu(l, e, a));
    }
  }
  function nf(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Ff(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(h(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(h(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? oa(l, a) : (typeof a == "number" || typeof a == "bigint") && oa(l, "" + a);
        break;
      case "onScroll":
        a != null && il("scroll", l);
        break;
      case "onScrollEnd":
        a != null && il("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Qf.hasOwnProperty(e)) l: {
          if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[nt] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
            typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
            break l;
          }
          e in l ? l[e] = a : a === true ? l.setAttribute(e, "") : wu(l, e, a);
        }
    }
  }
  function Pl(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        il("error", l), il("load", l);
        var a = false, u = false, n;
        for (n in e) if (e.hasOwnProperty(n)) {
          var i = e[n];
          if (i != null) switch (n) {
            case "src":
              a = true;
              break;
            case "srcSet":
              u = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(h(137, t));
            default:
              xl(l, t, n, i, e, null);
          }
        }
        u && xl(l, t, "srcSet", e.srcSet, e, null), a && xl(l, t, "src", e.src, e, null);
        return;
      case "input":
        il("invalid", l);
        var c = n = i = u = null, s = null, y = null;
        for (a in e) if (e.hasOwnProperty(a)) {
          var x = e[a];
          if (x != null) switch (a) {
            case "name":
              u = x;
              break;
            case "type":
              i = x;
              break;
            case "checked":
              s = x;
              break;
            case "defaultChecked":
              y = x;
              break;
            case "value":
              n = x;
              break;
            case "defaultValue":
              c = x;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (x != null) throw Error(h(137, t));
              break;
            default:
              xl(l, t, a, x, e, null);
          }
        }
        Jf(l, n, c, s, y, i, u, false);
        return;
      case "select":
        il("invalid", l), a = i = n = null;
        for (u in e) if (e.hasOwnProperty(u) && (c = e[u], c != null)) switch (u) {
          case "value":
            n = c;
            break;
          case "defaultValue":
            i = c;
            break;
          case "multiple":
            a = c;
          default:
            xl(l, t, u, c, e, null);
        }
        t = n, e = i, l.multiple = !!a, t != null ? sa(l, !!a, t, false) : e != null && sa(l, !!a, e, true);
        return;
      case "textarea":
        il("invalid", l), n = u = a = null;
        for (i in e) if (e.hasOwnProperty(i) && (c = e[i], c != null)) switch (i) {
          case "value":
            a = c;
            break;
          case "defaultValue":
            u = c;
            break;
          case "children":
            n = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(h(91));
            break;
          default:
            xl(l, t, i, c, e, null);
        }
        Wf(l, a, u, n);
        return;
      case "option":
        for (s in e) e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : xl(l, t, s, a, e, null));
        return;
      case "dialog":
        il("beforetoggle", l), il("toggle", l), il("cancel", l), il("close", l);
        break;
      case "iframe":
      case "object":
        il("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < _u.length; a++) il(_u[a], l);
        break;
      case "image":
        il("error", l), il("load", l);
        break;
      case "details":
        il("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        il("error", l), il("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in e) if (e.hasOwnProperty(y) && (a = e[y], a != null)) switch (y) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(h(137, t));
          default:
            xl(l, t, y, a, e, null);
        }
        return;
      default:
        if (bi(t)) {
          for (x in e) e.hasOwnProperty(x) && (a = e[x], a !== void 0 && nf(l, t, x, a, e, void 0));
          return;
        }
    }
    for (c in e) e.hasOwnProperty(c) && (a = e[c], a != null && xl(l, t, c, a, e, null));
  }
  function zh(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, n = null, i = null, c = null, s = null, y = null, x = null;
        for (b in e) {
          var N = e[b];
          if (e.hasOwnProperty(b) && N != null) switch (b) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              s = N;
            default:
              a.hasOwnProperty(b) || xl(l, t, b, null, a, N);
          }
        }
        for (var g in a) {
          var b = a[g];
          if (N = e[g], a.hasOwnProperty(g) && (b != null || N != null)) switch (g) {
            case "type":
              n = b;
              break;
            case "name":
              u = b;
              break;
            case "checked":
              y = b;
              break;
            case "defaultChecked":
              x = b;
              break;
            case "value":
              i = b;
              break;
            case "defaultValue":
              c = b;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(h(137, t));
              break;
            default:
              b !== N && xl(l, t, g, b, a, N);
          }
        }
        gi(l, i, c, s, y, x, n, u);
        return;
      case "select":
        b = i = c = g = null;
        for (n in e) if (s = e[n], e.hasOwnProperty(n) && s != null) switch (n) {
          case "value":
            break;
          case "multiple":
            b = s;
          default:
            a.hasOwnProperty(n) || xl(l, t, n, null, a, s);
        }
        for (u in a) if (n = a[u], s = e[u], a.hasOwnProperty(u) && (n != null || s != null)) switch (u) {
          case "value":
            g = n;
            break;
          case "defaultValue":
            c = n;
            break;
          case "multiple":
            i = n;
          default:
            n !== s && xl(l, t, u, n, a, s);
        }
        t = c, e = i, a = b, g != null ? sa(l, !!e, g, false) : !!a != !!e && (t != null ? sa(l, !!e, t, true) : sa(l, !!e, e ? [] : "", false));
        return;
      case "textarea":
        b = g = null;
        for (c in e) if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            xl(l, t, c, null, a, u);
        }
        for (i in a) if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null)) switch (i) {
          case "value":
            g = u;
            break;
          case "defaultValue":
            b = u;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (u != null) throw Error(h(91));
            break;
          default:
            u !== n && xl(l, t, i, u, a, n);
        }
        wf(l, g, b);
        return;
      case "option":
        for (var R in e) g = e[R], e.hasOwnProperty(R) && g != null && !a.hasOwnProperty(R) && (R === "selected" ? l.selected = false : xl(l, t, R, null, a, g));
        for (s in a) g = a[s], b = e[s], a.hasOwnProperty(s) && g !== b && (g != null || b != null) && (s === "selected" ? l.selected = g && typeof g != "function" && typeof g != "symbol" : xl(l, t, s, g, a, b));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var K in e) g = e[K], e.hasOwnProperty(K) && g != null && !a.hasOwnProperty(K) && xl(l, t, K, null, a, g);
        for (y in a) if (g = a[y], b = e[y], a.hasOwnProperty(y) && g !== b && (g != null || b != null)) switch (y) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (g != null) throw Error(h(137, t));
            break;
          default:
            xl(l, t, y, g, a, b);
        }
        return;
      default:
        if (bi(t)) {
          for (var El in e) g = e[El], e.hasOwnProperty(El) && g !== void 0 && !a.hasOwnProperty(El) && nf(l, t, El, void 0, a, g);
          for (x in a) g = a[x], b = e[x], !a.hasOwnProperty(x) || g === b || g === void 0 && b === void 0 || nf(l, t, x, g, a, b);
          return;
        }
    }
    for (var r in e) g = e[r], e.hasOwnProperty(r) && g != null && !a.hasOwnProperty(r) && xl(l, t, r, null, a, g);
    for (N in a) g = a[N], b = e[N], !a.hasOwnProperty(N) || g === b || g == null && b == null || xl(l, t, N, g, a, b);
  }
  function Id(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function Th() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && Id(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a], y = s.startTime;
            if (y > c) break;
            var x = s.transferSize, N = s.initiatorType;
            x && Id(N) && (s = s.responseEnd, i += x * (s < c ? 1 : (c - y) / (s - y)));
          }
          if (--a, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var cf = null, ff = null;
  function Jn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Pd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lm(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function sf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var of = null;
  function ph() {
    var l = window.event;
    return l && l.type === "popstate" ? l === of ? false : (of = l, true) : (of = null, false);
  }
  var tm = typeof setTimeout == "function" ? setTimeout : void 0, Nh = typeof clearTimeout == "function" ? clearTimeout : void 0, em = typeof Promise == "function" ? Promise : void 0, Mh = typeof queueMicrotask == "function" ? queueMicrotask : typeof em < "u" ? function(l) {
    return em.resolve(null).then(l).catch(Ah);
  } : tm;
  function Ah(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Ne(l) {
    return l === "head";
  }
  function am(l, t) {
    var e = t, a = 0;
    do {
      var u = e.nextSibling;
      if (l.removeChild(e), u && u.nodeType === 8) if (e = u.data, e === "/$" || e === "/&") {
        if (a === 0) {
          l.removeChild(u), Qa(t);
          return;
        }
        a--;
      } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
      else if (e === "html") Du(l.ownerDocument.documentElement);
      else if (e === "head") {
        e = l.ownerDocument.head, Du(e);
        for (var n = e.firstChild; n; ) {
          var i = n.nextSibling, c = n.nodeName;
          n[Fa] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
        }
      } else e === "body" && Du(l.ownerDocument.body);
      e = u;
    } while (e);
    Qa(t);
  }
  function um(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8) if (e = a.data, e === "/$") {
        if (l === 0) break;
        l--;
      } else e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
      e = a;
    } while (e);
  }
  function df(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          df(e), vi(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function jh(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Fa]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (l = Ct(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Ch(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Ct(l.nextSibling), l === null)) return null;
    return l;
  }
  function nm(l, t) {
    for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Ct(l.nextSibling), l === null)) return null;
    return l;
  }
  function mf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function rf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function _h(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function() {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function Ct(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var hf = null;
  function im(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return Ct(l.nextSibling);
          t--;
        } else e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function cm(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else e !== "/$" && e !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function fm(l, t, e) {
    switch (t = Jn(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(h(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(h(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function Du(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    vi(l);
  }
  var _t = /* @__PURE__ */ new Map(), sm = /* @__PURE__ */ new Set();
  function wn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ae = M.d;
  M.d = { f: Oh, r: Dh, D: Uh, C: Hh, L: qh, m: Rh, X: Yh, S: Bh, M: Gh };
  function Oh() {
    var l = ae.f(), t = Yn();
    return l || t;
  }
  function Dh(l) {
    var t = ia(l);
    t !== null && t.tag === 5 && t.type === "form" ? Mo(t) : ae.r(l);
  }
  var Ya = typeof document > "u" ? null : document;
  function om(l, t, e) {
    var a = Ya;
    if (a && typeof t == "string" && t) {
      var u = zt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), sm.has(u) || (sm.add(u), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(u) === null && (t = a.createElement("link"), Pl(t, "link", l), wl(t), a.head.appendChild(t)));
    }
  }
  function Uh(l) {
    ae.D(l), om("dns-prefetch", l, null);
  }
  function Hh(l, t) {
    ae.C(l, t), om("preconnect", l, t);
  }
  function qh(l, t, e) {
    ae.L(l, t, e);
    var a = Ya;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + zt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + zt(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + zt(e.imageSizes) + '"]')) : u += '[href="' + zt(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Ga(l);
          break;
        case "script":
          n = Xa(l);
      }
      _t.has(n) || (l = B({ rel: "preload", href: t === "image" && e && e.imageSrcSet ? void 0 : l, as: t }, e), _t.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(Uu(n)) || t === "script" && a.querySelector(Hu(n)) || (t = a.createElement("link"), Pl(t, "link", l), wl(t), a.head.appendChild(t)));
    }
  }
  function Rh(l, t) {
    ae.m(l, t);
    var e = Ya;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + zt(a) + '"][href="' + zt(l) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Xa(l);
      }
      if (!_t.has(n) && (l = B({ rel: "modulepreload", href: l }, t), _t.set(n, l), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Hu(n))) return;
        }
        a = e.createElement("link"), Pl(a, "link", l), wl(a), e.head.appendChild(a);
      }
    }
  }
  function Bh(l, t, e) {
    ae.S(l, t, e);
    var a = Ya;
    if (a && l) {
      var u = ca(a).hoistableStyles, n = Ga(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(Uu(n))) c.loading = 5;
        else {
          l = B({ rel: "stylesheet", href: l, "data-precedence": t }, e), (e = _t.get(n)) && vf(l, e);
          var s = i = a.createElement("link");
          wl(s), Pl(s, "link", l), s._p = new Promise(function(y, x) {
            s.onload = y, s.onerror = x;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Wn(i, t, a);
        }
        i = { type: "stylesheet", instance: i, count: 1, state: c }, u.set(n, i);
      }
    }
  }
  function Yh(l, t) {
    ae.X(l, t);
    var e = Ya;
    if (e && l) {
      var a = ca(e).hoistableScripts, u = Xa(l), n = a.get(u);
      n || (n = e.querySelector(Hu(u)), n || (l = B({ src: l, async: true }, t), (t = _t.get(u)) && yf(l, t), n = e.createElement("script"), wl(n), Pl(n, "link", l), e.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(u, n));
    }
  }
  function Gh(l, t) {
    ae.M(l, t);
    var e = Ya;
    if (e && l) {
      var a = ca(e).hoistableScripts, u = Xa(l), n = a.get(u);
      n || (n = e.querySelector(Hu(u)), n || (l = B({ src: l, async: true, type: "module" }, t), (t = _t.get(u)) && yf(l, t), n = e.createElement("script"), wl(n), Pl(n, "link", l), e.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(u, n));
    }
  }
  function dm(l, t, e, a) {
    var u = (u = tl.current) ? wn(u) : null;
    if (!u) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Ga(e.href), e = ca(u).hoistableStyles, a = e.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Ga(e.href);
          var n = ca(u).hoistableStyles, i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(l, i), (n = u.querySelector(Uu(l))) && !n._p && (i.instance = n, i.state.loading = 5), _t.has(l) || (e = { rel: "preload", as: "style", href: e.href, crossOrigin: e.crossOrigin, integrity: e.integrity, media: e.media, hrefLang: e.hrefLang, referrerPolicy: e.referrerPolicy }, _t.set(l, e), n || Xh(u, l, e, i.state))), t && a === null) throw Error(h(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Xa(e), e = ca(u).hoistableScripts, a = e.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, l));
    }
  }
  function Ga(l) {
    return 'href="' + zt(l) + '"';
  }
  function Uu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function mm(l) {
    return B({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Xh(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Pl(t, "link", e), wl(t), l.head.appendChild(t));
  }
  function Xa(l) {
    return '[src="' + zt(l) + '"]';
  }
  function Hu(l) {
    return "script[async]" + l;
  }
  function rm(l, t, e) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = l.querySelector('style[data-href~="' + zt(e.href) + '"]');
        if (a) return t.instance = a, wl(a), a;
        var u = B({}, e, { "data-href": e.href, "data-precedence": e.precedence, href: null, precedence: null });
        return a = (l.ownerDocument || l).createElement("style"), wl(a), Pl(a, "style", u), Wn(a, e.precedence, l), t.instance = a;
      case "stylesheet":
        u = Ga(e.href);
        var n = l.querySelector(Uu(u));
        if (n) return t.state.loading |= 4, t.instance = n, wl(n), n;
        a = mm(e), (u = _t.get(u)) && vf(a, u), n = (l.ownerDocument || l).createElement("link"), wl(n);
        var i = n;
        return i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Pl(n, "link", a), t.state.loading |= 4, Wn(n, e.precedence, l), t.instance = n;
      case "script":
        return n = Xa(e.src), (u = l.querySelector(Hu(n))) ? (t.instance = u, wl(u), u) : (a = e, (u = _t.get(n)) && (a = B({}, e), yf(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), wl(u), Pl(u, "link", a), l.head.appendChild(u), t.instance = u);
      case "void":
        return null;
      default:
        throw Error(h(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Wn(a, e.precedence, l));
    return t.instance;
  }
  function Wn(l, t, e) {
    for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function vf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function yf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var $n = null;
  function hm(l, t, e) {
    if ($n === null) {
      var a = /* @__PURE__ */ new Map(), u = $n = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else u = $n, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Fa] || n[$l] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function vm(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null);
  }
  function Qh(l, t, e) {
    if (e === 1 || t.itemProp != null) return false;
    switch (l) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : true;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function ym(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Lh(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Ga(a.href), n = t.querySelector(Uu(u));
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Fn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, wl(n);
          return;
        }
        n = t.ownerDocument || t, a = mm(a), (u = _t.get(u)) && vf(a, u), n = n.createElement("link"), wl(n);
        var i = n;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Pl(n, "link", a), e.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Fn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var gf = 0;
  function Zh(l, t) {
    return l.stylesheets && l.count === 0 && In(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && In(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && gf === 0 && (gf = 62500 * Th());
      var u = setTimeout(function() {
        if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && In(l, l.stylesheets), l.unsuspend)) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, (l.imgBytes > gf ? 50 : 800) + t);
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function Fn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) In(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var kn = null;
  function In(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, kn = /* @__PURE__ */ new Map(), t.forEach(Vh, l), kn = null, Fn.call(l));
  }
  function Vh(l, t) {
    if (!(t.state.loading & 4)) {
      var e = kn.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), kn.set(l, e);
        for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      u = t.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = Fn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var qu = { $$typeof: E, Provider: null, Consumer: null, _currentValue: j, _currentValue2: j, _threadCount: 0 };
  function Kh(l, t, e, a, u, n, i, c, s) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wa(0), this.hiddenUpdates = Wa(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function gm(l, t, e, a, u, n, i, c, s, y, x, N) {
    return l = new Kh(l, t, e, i, s, y, x, N, c), t = 1, n === true && (t |= 24), n = ht(3, null, null, t), l.current = n, n.stateNode = l, t = $i(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = { element: a, isDehydrated: e, cache: t }, Pi(n), l;
  }
  function Sm(l) {
    return l ? (l = ga, l) : ga;
  }
  function bm(l, t, e, a, u, n) {
    u = Sm(u), a.context === null ? a.context = u : a.pendingContext = u, a = he(t), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = ve(l, a, t), e !== null && (dt(e, l, t), ru(e, l, t));
  }
  function xm(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function Sf(l, t) {
    xm(l, t), (l = l.alternate) && xm(l, t);
  }
  function Em(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ye(l, 67108864);
      t !== null && dt(t, l, 67108864), Sf(l, 67108864);
    }
  }
  function zm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = bt();
      t = mi(t);
      var e = Ye(l, t);
      e !== null && dt(e, l, t), Sf(l, t);
    }
  }
  var Pn = true;
  function Jh(l, t, e, a) {
    var u = S.T;
    S.T = null;
    var n = M.p;
    try {
      M.p = 2, bf(l, t, e, a);
    } finally {
      M.p = n, S.T = u;
    }
  }
  function wh(l, t, e, a) {
    var u = S.T;
    S.T = null;
    var n = M.p;
    try {
      M.p = 8, bf(l, t, e, a);
    } finally {
      M.p = n, S.T = u;
    }
  }
  function bf(l, t, e, a) {
    if (Pn) {
      var u = xf(a);
      if (u === null) uf(l, t, a, li, e), pm(l, a);
      else if ($h(u, l, t, e, a)) a.stopPropagation();
      else if (pm(l, a), t & 4 && -1 < Wh.indexOf(l)) {
        for (; u !== null; ) {
          var n = ia(u);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var i = ie(n.pendingLanes);
                if (i !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var s = 1 << 31 - tt(i);
                    c.entanglements[1] |= s, i &= ~s;
                  }
                  Bt(n), (yl & 6) === 0 && (Rn = Tl() + 500, Cu(0));
                }
              }
              break;
            case 31:
            case 13:
              c = Ye(n, 2), c !== null && dt(c, n, 2), Yn(), Sf(n, 2);
          }
          if (n = xf(a), n === null && uf(l, t, a, li, e), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else uf(l, t, a, null, e);
    }
  }
  function xf(l) {
    return l = Ei(l), Ef(l);
  }
  var li = null;
  function Ef(l) {
    if (li = null, l = na(l), l !== null) {
      var t = Q(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = _(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = w(t), l !== null) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return li = l, null;
  }
  function Tm(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ku()) {
          case Ka:
            return 2;
          case Ja:
            return 8;
          case ue:
          case Ju:
            return 32;
          case ne:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var zf = false, Me = null, Ae = null, je = null, Ru = /* @__PURE__ */ new Map(), Bu = /* @__PURE__ */ new Map(), Ce = [], Wh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function pm(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Me = null;
        break;
      case "dragenter":
      case "dragleave":
        Ae = null;
        break;
      case "mouseover":
      case "mouseout":
        je = null;
        break;
      case "pointerover":
      case "pointerout":
        Ru.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bu.delete(t.pointerId);
    }
  }
  function Yu(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n ? (l = { blockedOn: t, domEventName: e, eventSystemFlags: a, nativeEvent: n, targetContainers: [u] }, t !== null && (t = ia(t), t !== null && Em(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function $h(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return Me = Yu(Me, l, t, e, a, u), true;
      case "dragenter":
        return Ae = Yu(Ae, l, t, e, a, u), true;
      case "mouseover":
        return je = Yu(je, l, t, e, a, u), true;
      case "pointerover":
        var n = u.pointerId;
        return Ru.set(n, Yu(Ru.get(n) || null, l, t, e, a, u)), true;
      case "gotpointercapture":
        return n = u.pointerId, Bu.set(n, Yu(Bu.get(n) || null, l, t, e, a, u)), true;
    }
    return false;
  }
  function Nm(l) {
    var t = na(l.target);
    if (t !== null) {
      var e = Q(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = _(e), t !== null) {
            l.blockedOn = t, Yf(l.priority, function() {
              zm(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = w(e), t !== null) {
            l.blockedOn = t, Yf(l.priority, function() {
              zm(e);
            });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function ti(l) {
    if (l.blockedOn !== null) return false;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = xf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        xi = a, e.target.dispatchEvent(a), xi = null;
      } else return t = ia(e), t !== null && Em(t), l.blockedOn = e, false;
      t.shift();
    }
    return true;
  }
  function Mm(l, t, e) {
    ti(l) && e.delete(t);
  }
  function Fh() {
    zf = false, Me !== null && ti(Me) && (Me = null), Ae !== null && ti(Ae) && (Ae = null), je !== null && ti(je) && (je = null), Ru.forEach(Mm), Bu.forEach(Mm);
  }
  function ei(l, t) {
    l.blockedOn === t && (l.blockedOn = null, zf || (zf = true, o.unstable_scheduleCallback(o.unstable_NormalPriority, Fh)));
  }
  var ai = null;
  function Am(l) {
    ai !== l && (ai = l, o.unstable_scheduleCallback(o.unstable_NormalPriority, function() {
      ai === l && (ai = null);
      for (var t = 0; t < l.length; t += 3) {
        var e = l[t], a = l[t + 1], u = l[t + 2];
        if (typeof a != "function") {
          if (Ef(a || e) === null) continue;
          break;
        }
        var n = ia(e);
        n !== null && (l.splice(t, 3), t -= 3, bc(n, { pending: true, data: u, method: e.method, action: a }, a, u));
      }
    }));
  }
  function Qa(l) {
    function t(s) {
      return ei(s, l);
    }
    Me !== null && ei(Me, l), Ae !== null && ei(Ae, l), je !== null && ei(je, l), Ru.forEach(t), Bu.forEach(t);
    for (var e = 0; e < Ce.length; e++) {
      var a = Ce[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Ce.length && (e = Ce[0], e.blockedOn === null); ) Nm(e), e.blockedOn === null && Ce.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null) for (a = 0; a < e.length; a += 3) {
      var u = e[a], n = e[a + 1], i = u[nt] || null;
      if (typeof n == "function") i || Am(e);
      else if (i) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (u = n, i = n[nt] || null) c = i.formAction;
          else if (Ef(u) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), Am(e);
      }
    }
  }
  function jm() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({ handler: function() {
        return new Promise(function(i) {
          return u = i;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      u !== null && (u(), u = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, { state: n.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = false, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
        a = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function Tf(l) {
    this._internalRoot = l;
  }
  ui.prototype.render = Tf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var e = t.current, a = bt();
    bm(e, a, l, t, null, null);
  }, ui.prototype.unmount = Tf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      bm(l.current, 2, null, l, null, null), Yn(), t[ua] = null;
    }
  };
  function ui(l) {
    this._internalRoot = l;
  }
  ui.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Bf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < Ce.length && t !== 0 && t < Ce[e].priority; e++) ;
      Ce.splice(e, 0, l), e === 0 && Nm(l);
    }
  };
  var Cm = H.version;
  if (Cm !== "19.2.3") throw Error(h(527, Cm, "19.2.3"));
  M.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = z(t), l = l !== null ? J(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var kh = { bundleType: 0, version: "19.2.3", rendererPackageName: "react-dom", currentDispatcherRef: S, reconcilerVersion: "19.2.3" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ni.isDisabled && ni.supportsFiber) try {
      De = ni.inject(kh), lt = ni;
    } catch {
    }
  }
  return Xu.createRoot = function(l, t) {
    if (!O(l)) throw Error(h(299));
    var e = false, a = "", u = Ro, n = Bo, i = Yo;
    return t != null && (t.unstable_strictMode === true && (e = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = gm(l, 1, false, null, null, e, a, null, u, n, i, jm), l[ua] = t.current, af(l), new Tf(t);
  }, Xu.hydrateRoot = function(l, t, e) {
    if (!O(l)) throw Error(h(299));
    var a = false, u = "", n = Ro, i = Bo, c = Yo, s = null;
    return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), t = gm(l, 1, true, t, e ?? null, a, u, s, n, i, c, jm), t.context = Sm(null), e = t.current, a = bt(), a = mi(a), u = he(a), u.callback = null, ve(e, u, a), e = a, t.current.lanes = e, $a(t, e), Bt(t), l[ua] = t.current, af(l), new ui(t);
  }, Xu.version = "19.2.3", Xu;
}
var Gm;
function c0() {
  if (Gm) return Mf.exports;
  Gm = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
    } catch (H) {
      console.error(H);
    }
  }
  return o(), Mf.exports = i0(), Mf.exports;
}
var f0 = c0();
const Uf = { aluminum: { name: "Aluminum 6061", E: 689e8, rho: 2700, nu: 0.33, category: "metal" }, aluminum7075: { name: "Aluminum 7075", E: 717e8, rho: 2810, nu: 0.33, category: "metal" }, brass: { name: "Brass C260", E: 11e10, rho: 8530, nu: 0.35, category: "metal" }, steel: { name: "Steel 1018", E: 205e9, rho: 7870, nu: 0.29, category: "metal" }, stainlessSteel: { name: "Stainless Steel 304", E: 193e9, rho: 8e3, nu: 0.29, category: "metal" }, bronze: { name: "Phosphor Bronze", E: 11e10, rho: 8800, nu: 0.34, category: "metal" }, bellBronze: { name: "Bell Bronze (B20)", E: 1e11, rho: 8600, nu: 0.34, category: "metal" }, rosewood: { name: "Honduran Rosewood", E: 125e8, rho: 850, nu: 0.37, category: "wood" }, africanRosewood: { name: "African Rosewood (Bubinga)", E: 158e8, rho: 890, nu: 0.36, category: "wood" }, padauk: { name: "African Padauk", E: 117e8, rho: 750, nu: 0.35, category: "wood" }, sapele: { name: "Sapele", E: 12e9, rho: 640, nu: 0.35, category: "wood" }, bubinga: { name: "Bubinga", E: 158e8, rho: 890, nu: 0.36, category: "wood" }, maple: { name: "Hard Maple", E: 126e8, rho: 705, nu: 0.35, category: "wood" }, purpleheart: { name: "Purpleheart", E: 17e9, rho: 880, nu: 0.35, category: "wood" }, wenge: { name: "Wenge", E: 14e9, rho: 870, nu: 0.35, category: "wood" }, bocote: { name: "Bocote", E: 141e8, rho: 930, nu: 0.36, category: "wood" }, zebrawood: { name: "Zebrawood", E: 152e8, rho: 780, nu: 0.35, category: "wood" }, cocobolo: { name: "Cocobolo", E: 141e8, rho: 1100, nu: 0.36, category: "wood" }, ebony: { name: "African Ebony", E: 174e8, rho: 1050, nu: 0.38, category: "wood" }, teak: { name: "Teak", E: 123e8, rho: 630, nu: 0.35, category: "wood" }, fiberglass: { name: "Fiberglass Composite", E: 17e9, rho: 1800, nu: 0.3, category: "metal" } };
function s0() {
  const o = Object.entries(Uf);
  return { metals: o.filter(([, H]) => H.category === "metal"), woods: o.filter(([, H]) => H.category === "wood") };
}
const _f = [{ name: "1:4:10", ratios: [1, 4, 10], description: "Standard marimba tuning (triple tuning)", instrument: "Marimba" }, { name: "1:4:9", ratios: [1, 4, 9], description: "Alternative marimba/vibraphone tuning", instrument: "Vibraphone" }, { name: "1:3:6", ratios: [1, 3, 6], description: "Xylophone tuning", instrument: "Xylophone" }, { name: "1:3:6:12", ratios: [1, 3, 6, 12], description: "Extended harmonic series (quadruple tuning)", instrument: "Custom" }, { name: "1:2:4:8", ratios: [1, 2, 4, 8], description: "Octave series (demanding)", instrument: "Custom" }, { name: "1:2:4:8:16", ratios: [1, 2, 4, 8, 16], description: "Extended octave series (5 modes)", instrument: "Custom" }, { name: "1:5:10:15", ratios: [1, 5, 10, 15], description: "Unorthodox quintal tuning", instrument: "Custom" }, { name: "1:2:5:10", ratios: [1, 2, 5, 10], description: "Mixed interval tuning", instrument: "Custom" }, { name: "1:3:5:7:9", ratios: [1, 3, 5, 7, 9], description: "Odd harmonic series", instrument: "Custom" }];
function ii(o, H) {
  return o.map((U) => U * H);
}
const ci = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
function Of(o) {
  const H = o.match(/^([A-Ga-g])([#b]?)(\d)$/);
  if (!H) return null;
  const [, U, h, O] = H, Q = parseInt(O);
  let _ = ci.indexOf(U.toUpperCase());
  if (_ === -1) return null;
  h === "#" && (_ += 1), h === "b" && (_ -= 1), _ < 0 && (_ += 12), _ >= 12 && (_ -= 12);
  const w = (Q - 4) * 12 + (_ - 9);
  return 440 * Math.pow(2, w / 12);
}
function o0(o) {
  const H = 12 * Math.log2(o / 440), U = Math.round(69 + H), h = (U % 12 + 12) % 12, O = Math.floor(U / 12) - 1;
  return `${ci[h]}${O}`;
}
function d0() {
  const o = [];
  for (let H = 2; H <= 7; H++) for (let U = 0; U < ci.length; U++) {
    const h = `${ci[U]}${H}`, O = Of(h);
    O && O >= 20 && O <= 4e3 && o.push({ note: h, freq: Math.round(O * 10) / 10 });
  }
  return o;
}
function m0(o) {
  const { metals: H, woods: U } = s0(), h = Uf[o.selectedMaterial], [O, Q] = Z.useState(""), [_, w] = Z.useState(false), [D, z] = Z.useState(0), J = Z.useRef(null), B = Z.useRef(null), k = Z.useMemo(() => d0(), []), A = Z.useMemo(() => {
    if (!O) return k.slice(0, 12);
    const E = O.toUpperCase();
    return k.filter((Y) => Y.note.toUpperCase().startsWith(E) || Y.note.toUpperCase().includes(E)).slice(0, 12);
  }, [O, k]);
  Z.useEffect(() => {
    const E = o0(o.fundamentalFrequency), Y = Of(E);
    Y && Math.abs(1200 * Math.log2(o.fundamentalFrequency / Y)) < 5 && Q(E);
  }, [o.fundamentalFrequency]);
  const W = (E, Y) => {
    Q(E), o.onFundamentalChange(Math.round(Y * 10) / 10), w(false);
  }, V = (E) => {
    if (E.key === "ArrowDown") E.preventDefault(), z((Y) => Math.min(Y + 1, A.length - 1));
    else if (E.key === "ArrowUp") E.preventDefault(), z((Y) => Math.max(Y - 1, 0));
    else if (E.key === "Enter" && A.length > 0) {
      E.preventDefault();
      const Y = A[D];
      W(Y.note, Y.freq);
    } else E.key === "Escape" && w(false);
  }, ml = (E) => {
    Q(E), z(0), w(true);
    const Y = Of(E);
    Y && Y >= 20 && Y <= 4e3 && o.onFundamentalChange(Math.round(Y * 10) / 10);
  }, Hl = (() => {
    if (o.tuningMode === "preset") {
      const E = _f.find((Y) => Y.name === o.selectedPreset);
      if (E) return ii(E.ratios, o.fundamentalFrequency);
    } else {
      const E = o.customRatios.split(",").map((Y) => parseFloat(Y.trim())).filter((Y) => !isNaN(Y));
      return ii(E, o.fundamentalFrequency);
    }
    return [];
  })();
  return f.jsxs("div", { className: "sidebar", children: [f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Bar Dimensions" }), f.jsxs("div", { className: "input-row", children: [f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Length" }), f.jsxs("div", { className: "input-unit", children: [f.jsx("input", { type: "number", className: "form-input", value: o.barLength, onChange: (E) => o.onBarLengthChange(parseFloat(E.target.value) || 0), min: 50, max: 1e3 }), f.jsx("span", { children: "mm" })] })] }), f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Width" }), f.jsxs("div", { className: "input-unit", children: [f.jsx("input", { type: "number", className: "form-input", value: o.barWidth, onChange: (E) => o.onBarWidthChange(parseFloat(E.target.value) || 0), min: 10, max: 200 }), f.jsx("span", { children: "mm" })] })] }), f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Thickness" }), f.jsxs("div", { className: "input-unit", children: [f.jsx("input", { type: "number", className: "form-input", value: o.barThickness, onChange: (E) => o.onBarThicknessChange(parseFloat(E.target.value) || 0), min: 5, max: 50 }), f.jsx("span", { children: "mm" })] })] })] })] }), f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Material" }), f.jsxs("select", { className: "form-select", value: o.selectedMaterial, onChange: (E) => o.onMaterialChange(E.target.value), children: [f.jsx("optgroup", { label: "Metals", children: H.map(([E, Y]) => f.jsx("option", { value: E, children: Y.name }, E)) }), f.jsx("optgroup", { label: "Woods", children: U.map(([E, Y]) => f.jsx("option", { value: E, children: Y.name }, E)) })] }), h && f.jsxs("div", { className: "material-props", children: [f.jsxs("div", { className: "material-prop", children: [f.jsx("div", { className: "label", children: "E" }), f.jsxs("div", { className: "value", children: [(h.E / 1e9).toFixed(1), " GPa"] })] }), f.jsxs("div", { className: "material-prop", children: [f.jsx("div", { className: "label", children: "\u03C1" }), f.jsxs("div", { className: "value", children: [h.rho, " kg/m\xB3"] })] }), f.jsxs("div", { className: "material-prop", children: [f.jsx("div", { className: "label", children: "\u03BD" }), f.jsx("div", { className: "value", children: h.nu })] })] })] }), f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Tuning Target" }), f.jsxs("div", { className: "tuning-mode-toggle", children: [f.jsx("button", { className: `tuning-mode-btn ${o.tuningMode === "preset" ? "active" : ""}`, onClick: () => o.onTuningModeChange("preset"), children: "Preset" }), f.jsx("button", { className: `tuning-mode-btn ${o.tuningMode === "custom" ? "active" : ""}`, onClick: () => o.onTuningModeChange("custom"), children: "Custom" })] }), o.tuningMode === "preset" ? f.jsx("select", { className: "form-select", value: o.selectedPreset, onChange: (E) => o.onPresetChange(E.target.value), children: _f.map((E) => f.jsxs("option", { value: E.name, children: [E.name, " - ", E.description] }, E.name)) }) : f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Ratios (comma-separated)" }), f.jsx("input", { type: "text", className: "form-input", value: o.customRatios, onChange: (E) => o.onCustomRatiosChange(E.target.value), placeholder: "1, 4, 10" })] }), f.jsxs("div", { className: "form-group", style: { marginTop: 12 }, children: [f.jsx("label", { className: "form-label", children: "Fundamental Frequency (f\u2081)" }), f.jsxs("div", { className: "frequency-input-row", children: [f.jsxs("div", { className: "note-input-container", children: [f.jsx("input", { ref: J, type: "text", className: "form-input note-input", value: O, onChange: (E) => ml(E.target.value), onFocus: () => w(true), onBlur: () => setTimeout(() => w(false), 150), onKeyDown: V, placeholder: "C4" }), _ && A.length > 0 && f.jsx("div", { className: "note-suggestions", ref: B, children: A.map((E, Y) => f.jsxs("div", { className: `note-suggestion ${Y === D ? "selected" : ""}`, onMouseDown: () => W(E.note, E.freq), onMouseEnter: () => z(Y), children: [f.jsx("span", { className: "note-name", children: E.note }), f.jsxs("span", { className: "note-freq", children: [E.freq, " Hz"] })] }, E.note)) })] }), f.jsxs("div", { className: "input-unit", children: [f.jsx("input", { type: "number", className: "form-input", value: o.fundamentalFrequency, onChange: (E) => o.onFundamentalChange(parseFloat(E.target.value) || 0), min: 20, max: 4e3, step: 0.1, title: "Frequency in Hz", "aria-label": "Frequency in Hz" }), f.jsx("span", { children: "Hz" })] })] })] }), f.jsxs("div", { className: "target-frequencies", children: [f.jsx("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }, children: "Target Frequencies:" }), Hl.map((E, Y) => f.jsxs("div", { className: "freq-item", children: [f.jsxs("span", { children: ["f", Y + 1] }), f.jsxs("span", { children: [E.toFixed(1), " Hz"] })] }, Y))] })] }), f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Optimization" }), f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Number of Cuts" }), f.jsx("input", { type: "number", className: "form-input", min: 1, max: 20, value: o.numCuts, onChange: (E) => {
    const Y = parseInt(E.target.value);
    !isNaN(Y) && Y >= 1 && o.onNumCutsChange(Y);
  }, "aria-label": "Number of cuts" }), f.jsx("div", { className: "input-hint", children: "Typical: 1-5 cuts. More cuts = finer tuning control but slower optimization." })] }), f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Penalty Type" }), f.jsxs("select", { className: "form-select", value: o.penaltyType, onChange: (E) => o.onPenaltyTypeChange(E.target.value), children: [f.jsx("option", { value: "none", children: "None" }), f.jsx("option", { value: "volume", children: "Volume (minimize material removal)" }), f.jsx("option", { value: "roughness", children: "Roughness (smooth profile)" })] })] }), o.penaltyType !== "none" && f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Penalty Weight (\u03B1)" }), f.jsx("span", { className: "slider-value", children: o.penaltyWeight.toFixed(2) })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: 0.3, step: 0.01, value: o.penaltyWeight, onChange: (E) => o.onPenaltyWeightChange(parseFloat(E.target.value)) })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "f\u2081 Priority" }), f.jsxs("span", { className: "slider-value", children: [o.f1Priority.toFixed(1), "\xD7"] })] }), f.jsx("input", { type: "range", className: "slider", min: 1, max: 5, step: 0.5, value: o.f1Priority, onChange: (E) => o.onF1PriorityChange(parseFloat(E.target.value)), title: "f1 Priority - weight multiplier for fundamental frequency", "aria-label": "f1 Priority" }), f.jsx("div", { className: "slider-hint", children: "Higher = prioritize fundamental frequency tuning" })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "FEM Elements" }), f.jsx("span", { className: "slider-value", children: o.numElements })] }), f.jsx("input", { type: "range", className: "slider", min: 40, max: 400, step: 10, value: o.numElements, onChange: (E) => o.onNumElementsChange(parseInt(E.target.value)), title: "Number of finite elements for mesh discretization", "aria-label": "FEM Elements" }), f.jsxs("div", { className: "slider-hint", children: ["Element size: ", (o.barLength / o.numElements).toFixed(2), " mm"] })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Min Step Width" }), f.jsxs("span", { className: "slider-value", children: [o.minCutWidth, " mm"] })] }), f.jsx("input", { type: "range", className: "slider", min: 0.5, max: 20, step: 0.5, value: o.minCutWidth, onChange: (E) => o.onMinCutWidthChange(parseFloat(E.target.value)), title: "Minimum step width", "aria-label": "Minimum Step Width" }), f.jsx("div", { className: "slider-hint", children: "Min width of each tier/step" })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Max Step Width" }), f.jsx("span", { className: "slider-value", children: o.maxCutWidth === 0 ? "No limit" : `${o.maxCutWidth} mm` })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: o.barLength / 2, step: 5, value: o.maxCutWidth, onChange: (E) => o.onMaxCutWidthChange(parseFloat(E.target.value)), title: "Maximum step width (0 = no limit)", "aria-label": "Maximum Step Width" }), f.jsx("div", { className: "slider-hint", children: "Max width of each tier/step (0 = no limit)" })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Min Cut Depth" }), f.jsx("span", { className: "slider-value", children: o.minCutDepth === 0 ? "No limit" : `${o.minCutDepth} mm` })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: o.barThickness * 0.9, step: 0.5, value: o.minCutDepth, onChange: (E) => o.onMinCutDepthChange(parseFloat(E.target.value)), title: "Minimum cut depth (0 = no minimum)", "aria-label": "Minimum Cut Depth" }), f.jsx("div", { className: "slider-hint", children: "Min material removed (0 = no min)" })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Max Cut Depth" }), f.jsx("span", { className: "slider-value", children: o.maxCutDepth === 0 ? "No limit" : `${o.maxCutDepth} mm` })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: o.barThickness * 0.9, step: 0.5, value: o.maxCutDepth, onChange: (E) => o.onMaxCutDepthChange(parseFloat(E.target.value)), title: "Maximum cut depth (0 = 90% of thickness)", "aria-label": "Maximum Cut Depth" }), f.jsx("div", { className: "slider-hint", children: "Max material removed (0 = 90% of h\u2080)" })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Max Length Trim" }), f.jsx("span", { className: "slider-value", children: o.maxLengthTrim === 0 ? "Disabled" : `${o.maxLengthTrim} mm` })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: o.barLength * 0.2, step: 1, value: o.maxLengthTrim, onChange: (E) => o.onMaxLengthTrimChange(parseFloat(E.target.value)), title: "Maximum trim from each end (0 = no trimming)", "aria-label": "Maximum Length Trim" }), f.jsxs("div", { className: "slider-hint", children: ["Optimizer can shorten bar by up to 2\xD7", o.maxLengthTrim, " mm total"] })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Max Length Extend" }), f.jsx("span", { className: "slider-value", children: o.maxLengthExtend === 0 ? "Disabled" : `${o.maxLengthExtend} mm` })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: o.barLength * 0.2, step: 1, value: o.maxLengthExtend, onChange: (E) => o.onMaxLengthExtendChange(parseFloat(E.target.value)), title: "Maximum extension from each end (0 = no extension)", "aria-label": "Maximum Length Extend" }), f.jsxs("div", { className: "slider-hint", children: ["Optimizer can lengthen bar by up to 2\xD7", o.maxLengthExtend, " mm total"] })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "CPU Cores" }), f.jsx("span", { className: "slider-value", children: o.maxCores === 0 ? "Auto (max)" : o.maxCores })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: navigator.hardwareConcurrency || 8, step: 1, value: o.maxCores, onChange: (E) => o.onMaxCoresChange(parseInt(E.target.value)), title: "Maximum CPU cores for WASM threading (0 = auto/max available)", "aria-label": "Maximum CPU Cores" }), f.jsx("div", { className: "slider-hint", children: o.maxCores === 0 ? `Use all available cores (${navigator.hardwareConcurrency || "unknown"})` : `Limit to ${o.maxCores} core${o.maxCores > 1 ? "s" : ""}` })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Target Error" }), f.jsxs("span", { className: "slider-value", children: [o.targetError < 0.01 ? o.targetError.toFixed(3) : o.targetError.toFixed(2), "%"] })] }), f.jsx("input", { type: "range", className: "slider", min: 1e-3, max: 1, step: 1e-3, value: o.targetError, onChange: (E) => o.onTargetErrorChange(parseFloat(E.target.value)), title: "Stop optimization when fitness reaches this error percentage", "aria-label": "Target Error" }), f.jsx("div", { className: "slider-hint", children: "Stop early when tuning error falls below this threshold" })] }), f.jsxs("div", { className: "input-row", style: { marginTop: 12 }, children: [f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Population" }), f.jsx("input", { type: "number", className: "form-input", value: o.populationSize, onChange: (E) => o.onPopulationSizeChange(parseInt(E.target.value) || 30), min: 20, max: 200 })] }), f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Generations" }), f.jsx("input", { type: "number", className: "form-input", value: o.maxGenerations, onChange: (E) => o.onMaxGenerationsChange(parseInt(E.target.value) || 50), min: 10, max: 500 })] })] })] }), f.jsxs("div", { className: "attribution", children: ["Based on", " ", f.jsx("a", { href: "https://hal.science/hal-04240657v1/file/soares2020.pdf", target: "_blank", rel: "noopener noreferrer", children: "Soares et al. (2020)" })] })] });
}
function r0({ length: o, thickness: H, cuts: U, showDimensions: h, effectiveLength: O }) {
  const Q = O ? O - o : 0, _ = Math.abs(Q) / 2, w = Q < 0, D = Q > 0, z = w || D, B = [...U.map((Ol) => ({ lambda: Ol.lambda * 1e3, h: Ol.h * 1e3 }))].sort((Ol, zl) => zl.lambda - Ol.lambda), k = 800, A = { top: 40, right: 100, bottom: 130, left: 90 }, W = k - A.left - A.right, V = W / o, ml = H * V, E = Math.max(30, Math.min(150, ml)), Y = A.top + E + A.bottom, Vl = E / H, I = A.top, G = A.top + E, Al = A.left + o / 2 * V, ut = Z.useMemo(() => {
    const Ol = o / 2, zl = (M) => {
      const j = Math.abs(M - Ol), al = B.filter((ul) => ul.lambda > 0 && j <= ul.lambda);
      return al.length === 0 ? H : al[al.length - 1].h;
    }, sl = [0];
    for (const M of B) if (M.lambda > 0 && M.lambda < Ol) {
      const j = Ol - M.lambda, al = Ol + M.lambda;
      sl.push(j), sl.push(al);
    }
    sl.push(o);
    const Kl = [...new Set(sl)].sort((M, j) => M - j), P = [];
    for (let M = 0; M < Kl.length; M++) {
      const j = Kl[M], al = A.left + j * V, ul = zl(j + 1e-3), m = I + ul * Vl, p = j > 0 ? zl(j - 1e-3) : ul, C = I + p * Vl;
      M > 0 && Math.abs(C - m) > 0.5 ? (P.push({ x: al, y: C }), P.push({ x: al, y: m })) : P.push({ x: al, y: m });
    }
    let dl = `M ${A.left} ${I}`;
    dl += ` L ${A.left + W} ${I}`;
    const S = P[P.length - 1];
    dl += ` L ${A.left + W} ${S.y}`;
    for (let M = P.length - 1; M >= 0; M--) dl += ` L ${P[M].x} ${P[M].y}`;
    return dl += ` L ${A.left} ${I}`, dl += " Z", dl;
  }, [B, o, H, V, Vl, I, A.left, W]);
  return f.jsxs("div", { className: "bar-profile-container panel", children: [f.jsx("h3", { className: "panel-title", children: "Bar Profile (Side View)" }), f.jsxs("svg", { className: "bar-profile-svg", viewBox: `0 0 ${k} ${Y}`, preserveAspectRatio: "xMidYMid meet", children: [f.jsx("rect", { x: A.left, y: A.top - 10, width: W, height: E + 20, fill: "#fafafa" }), f.jsx("line", { x1: Al, y1: I - 10, x2: Al, y2: G + 15, stroke: "#bbb", strokeWidth: "1", strokeDasharray: "4,4" }), f.jsx("path", { d: ut, fill: "#bbdefb", stroke: "#1976d2", strokeWidth: "2" }), w && f.jsxs(f.Fragment, { children: [f.jsx("rect", { x: A.left, y: I, width: _ * V, height: E, fill: "rgba(220, 38, 38, 0.2)", stroke: "#dc2626", strokeWidth: "1", strokeDasharray: "4,2" }), f.jsx("rect", { x: A.left + W - _ * V, y: I, width: _ * V, height: E, fill: "rgba(220, 38, 38, 0.2)", stroke: "#dc2626", strokeWidth: "1", strokeDasharray: "4,2" }), f.jsxs("text", { x: A.left + _ * V / 2, y: I - 5, textAnchor: "middle", fontSize: "9", fill: "#dc2626", children: ["-", _.toFixed(1), "mm"] }), f.jsxs("text", { x: A.left + W - _ * V / 2, y: I - 5, textAnchor: "middle", fontSize: "9", fill: "#dc2626", children: ["-", _.toFixed(1), "mm"] })] }), D && f.jsxs(f.Fragment, { children: [f.jsx("rect", { x: A.left - _ * V, y: I, width: _ * V, height: E, fill: "rgba(34, 197, 94, 0.2)", stroke: "#16a34a", strokeWidth: "1", strokeDasharray: "4,2" }), f.jsx("rect", { x: A.left + W, y: I, width: _ * V, height: E, fill: "rgba(34, 197, 94, 0.2)", stroke: "#16a34a", strokeWidth: "1", strokeDasharray: "4,2" }), f.jsxs("text", { x: A.left - _ * V / 2, y: I - 5, textAnchor: "middle", fontSize: "9", fill: "#16a34a", children: ["+", _.toFixed(1), "mm"] }), f.jsxs("text", { x: A.left + W + _ * V / 2, y: I - 5, textAnchor: "middle", fontSize: "9", fill: "#16a34a", children: ["+", _.toFixed(1), "mm"] })] }), f.jsxs("g", { children: [f.jsx("line", { x1: A.left - 25, y1: I, x2: A.left - 10, y2: I, stroke: "#444", strokeWidth: "1" }), f.jsx("line", { x1: A.left - 25, y1: G, x2: A.left - 10, y2: G, stroke: "#444", strokeWidth: "1" }), f.jsx("line", { x1: A.left - 17, y1: I, x2: A.left - 17, y2: G, stroke: "#444", strokeWidth: "1" }), f.jsx("polygon", { points: `${A.left - 17},${I} ${A.left - 20},${I + 6} ${A.left - 14},${I + 6}`, fill: "#444" }), f.jsx("polygon", { points: `${A.left - 17},${G} ${A.left - 20},${G - 6} ${A.left - 14},${G - 6}`, fill: "#444" }), f.jsxs("text", { x: A.left - 30, y: (I + G) / 2, textAnchor: "end", fontSize: "11", fill: "#333", dominantBaseline: "middle", children: ["h\u2080 = ", H, " mm"] })] }), f.jsxs("g", { children: [f.jsx("line", { x1: A.left, y1: G + 25, x2: A.left, y2: G + 40, stroke: "#444", strokeWidth: "1" }), f.jsx("line", { x1: A.left + W, y1: G + 25, x2: A.left + W, y2: G + 40, stroke: "#444", strokeWidth: "1" }), f.jsx("line", { x1: A.left, y1: G + 32, x2: A.left + W, y2: G + 32, stroke: "#444", strokeWidth: "1" }), f.jsx("polygon", { points: `${A.left},${G + 32} ${A.left + 6},${G + 29} ${A.left + 6},${G + 35}`, fill: "#444" }), f.jsx("polygon", { points: `${A.left + W},${G + 32} ${A.left + W - 6},${G + 29} ${A.left + W - 6},${G + 35}`, fill: "#444" }), f.jsx("text", { x: Al, y: G + 48, textAnchor: "middle", fontSize: "11", fill: "#333", children: z ? `L = ${O == null ? void 0 : O.toFixed(1)} mm (original: ${o} mm)` : `L = ${o} mm` })] }), f.jsx("text", { x: Al, y: G + 22, textAnchor: "middle", fontSize: "9", fill: "#888", children: "center" }), h && [...B].filter((zl) => zl.lambda > 0).sort((zl, sl) => zl.lambda - sl.lambda).map((zl, sl) => {
    const Kl = o / 2, P = Kl - zl.lambda, dl = zl.lambda * 2, S = A.left + P * V, M = A.left + (Kl + zl.lambda) * V, j = G + 60 + sl * 22;
    return f.jsxs("g", { children: [f.jsx("line", { x1: A.left, y1: j - 5, x2: A.left, y2: j + 5, stroke: "#666", strokeWidth: "1" }), f.jsx("line", { x1: S, y1: j - 5, x2: S, y2: j + 5, stroke: "#666", strokeWidth: "1" }), f.jsx("line", { x1: A.left, y1: j, x2: S, y2: j, stroke: "#666", strokeWidth: "1" }), f.jsx("polygon", { points: `${A.left},${j} ${A.left + 5},${j - 3} ${A.left + 5},${j + 3}`, fill: "#666" }), f.jsx("polygon", { points: `${S},${j} ${S - 5},${j - 3} ${S - 5},${j + 3}`, fill: "#666" }), f.jsx("text", { x: (A.left + S) / 2, y: j - 7, textAnchor: "middle", fontSize: "9", fill: "#666", children: P.toFixed(1) }), f.jsx("line", { x1: S, y1: j, x2: M, y2: j, stroke: "#e65100", strokeWidth: "2" }), f.jsx("polygon", { points: `${S},${j} ${S + 5},${j - 3} ${S + 5},${j + 3}`, fill: "#e65100" }), f.jsx("polygon", { points: `${M},${j} ${M - 5},${j - 3} ${M - 5},${j + 3}`, fill: "#e65100" }), f.jsxs("text", { x: (S + M) / 2, y: j - 7, textAnchor: "middle", fontSize: "10", fill: "#e65100", fontWeight: "600", children: [dl.toFixed(1), " mm"] }), f.jsxs("text", { x: M + 8, y: j + 3, fontSize: "9", fill: "#1565c0", children: ["Cut ", sl + 1, ": depth ", (H - zl.h).toFixed(2), " mm"] })] }, `cut-dim-${sl}`);
  }), h && (() => {
    const sl = [...B].filter((P) => P.lambda > 0).sort((P, dl) => P.lambda - dl.lambda).map((P, dl) => ({ cut: P, index: dl, naturalY: I + P.h * Vl })).sort((P, dl) => P.naturalY - dl.naturalY);
    for (let P = 1; P < sl.length; P++) {
      const dl = sl[P - 1], S = sl[P];
      S.naturalY - dl.naturalY < 16 && (sl[P] = { ...S, naturalY: dl.naturalY + 16 });
    }
    const Kl = A.left + W + 10;
    return sl.map(({ cut: P, index: dl, naturalY: S }) => {
      const M = I + P.h * Vl;
      return f.jsxs("g", { children: [f.jsx("line", { x1: A.left + W + 2, y1: M, x2: A.left + W + 8, y2: M, stroke: "#1565c0", strokeWidth: "1.5" }), Math.abs(S - M) > 2 && f.jsx("line", { x1: A.left + W + 8, y1: M, x2: Kl + 3, y2: S, stroke: "#1565c0", strokeWidth: "0.5", strokeDasharray: "2,2" }), f.jsxs("text", { x: Kl + 5, y: S, fontSize: "10", fill: "#1565c0", dominantBaseline: "middle", children: [P.h.toFixed(2), " mm"] })] }, `height-${dl}`);
    });
  })(), U.length === 0 && f.jsx("text", { x: k / 2, y: Y / 2 - 30, textAnchor: "middle", fontSize: "14", fill: "#999", children: "Run optimization to see bar profile" })] })] });
}
function h0({ targetFrequencies: o, computedFrequencies: H, errorsInCents: U }) {
  const h = (_) => _ >= 1e3 ? `${(_ / 1e3).toFixed(2)} kHz` : `${_.toFixed(1)} Hz`, O = (_) => `${_ >= 0 ? "+" : ""}${_.toFixed(1)}`, Q = (_) => {
    const w = Math.abs(_);
    return w <= 5 ? "error-excellent" : w <= 15 ? "error-good" : w <= 50 ? "error-ok" : "error-bad";
  };
  return f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Frequencies" }), f.jsxs("table", { className: "frequency-table", children: [f.jsx("thead", { children: f.jsxs("tr", { children: [f.jsx("th", { children: "Mode" }), f.jsx("th", { children: "Target" }), f.jsx("th", { children: "Computed" }), f.jsx("th", { children: "Error (cents)" })] }) }), f.jsx("tbody", { children: o.map((_, w) => f.jsxs("tr", { children: [f.jsxs("td", { children: ["f", w + 1] }), f.jsx("td", { children: h(_) }), f.jsx("td", { children: H[w] ? h(H[w]) : "\u2014" }), f.jsx("td", { className: U[w] !== void 0 ? Q(U[w]) : "", children: U[w] !== void 0 ? O(U[w]) : "\u2014" })] }, w)) })] })] });
}
function v0({ tuningError: o, maxErrorCents: H, volumePercent: U, generations: h, cuts: O, lengthTrim: Q, effectiveLength: _ }) {
  const w = (z) => z <= 2 ? "success" : z <= 10 ? "warning" : "error", D = [...O].sort((z, J) => J.lambda - z.lambda);
  return f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Results" }), f.jsxs("div", { className: "results-summary", children: [f.jsxs("div", { className: `result-card ${w(H)}`, children: [f.jsx("div", { className: "label", children: "Max Error" }), f.jsxs("div", { className: "value", children: [H.toFixed(1), " \xA2"] })] }), f.jsxs("div", { className: "result-card", children: [f.jsx("div", { className: "label", children: "Avg Error" }), f.jsxs("div", { className: "value", children: [o.toFixed(4), "%"] })] }), f.jsxs("div", { className: "result-card", children: [f.jsx("div", { className: "label", children: "Volume Removed" }), f.jsxs("div", { className: "value", children: [U.toFixed(1), "%"] })] }), f.jsxs("div", { className: "result-card", children: [f.jsx("div", { className: "label", children: "Generations" }), f.jsx("div", { className: "value", children: h })] })] }), Q !== void 0 && Q !== 0 && _ && f.jsxs("div", { className: "cut-dimensions", style: { marginTop: 16 }, children: [f.jsx("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }, children: "Length Optimization:" }), f.jsxs("div", { className: "cut-item", children: [f.jsx("span", { className: "cut-label", children: Q > 0 ? "Length Trim" : "Length Extend" }), f.jsxs("span", { className: "cut-values", children: [Math.abs(Q * 1e3).toFixed(1), " mm ", Q > 0 ? "removed from" : "added to", " each end"] })] }), f.jsxs("div", { className: "cut-item", children: [f.jsx("span", { className: "cut-label", children: "Effective Length" }), f.jsxs("span", { className: "cut-values", children: [(_ * 1e3).toFixed(1), " mm (was ", ((_ + 2 * Q) * 1e3).toFixed(1), " mm)"] })] })] }), f.jsxs("div", { className: "cut-dimensions", children: [f.jsx("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 8, marginTop: Q !== void 0 && Q !== 0 ? 8 : 16 }, children: "Cut Dimensions:" }), D.map((z, J) => {
    const B = z.lambda * 2 * 1e3, k = D[J + 1], A = k ? (z.lambda - k.lambda) * 1e3 : null;
    return f.jsxs("div", { className: "cut-item", children: [f.jsxs("span", { className: "cut-label", children: ["Cut ", J + 1] }), f.jsxs("span", { className: "cut-values", children: ["width = ", B.toFixed(1), " mm, h = ", (z.h * 1e3).toFixed(2), " mm", A !== null && f.jsxs("span", { className: "cut-gap", children: ["(gap: ", A.toFixed(1), " mm)"] })] })] }, J);
  })] })] });
}
function y0({ isRunning: o, currentGeneration: H, maxGenerations: U, bestFitness: h, onStart: O, onStop: Q }) {
  const _ = U > 0 ? H / U * 100 : 0;
  return f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Optimization Controls" }), f.jsxs("div", { className: "btn-group", children: [f.jsx("button", { className: "btn btn-primary", onClick: O, disabled: o, style: { flex: 1 }, children: o ? "Running..." : "\u25B6 Start Optimization" }), f.jsx("button", { className: "btn btn-danger", onClick: Q, disabled: !o, children: "\u25A0 Stop" })] }), (o || H > 0) && f.jsxs("div", { className: "progress-container", children: [f.jsx("div", { className: "progress-bar-wrapper", children: f.jsx("div", { className: "progress-bar", style: { width: `${_}%` } }) }), f.jsxs("div", { className: "progress-stats", children: [f.jsxs("span", { children: ["Generation: ", H, " / ", U] }), f.jsxs("span", { children: ["Best: ", h < 1 / 0 ? h.toFixed(4) : "\u2014", "%"] })] })] })] });
}
function g0({ entries: o, targetFrequencies: H, selectedGeneration: U, onSelectGeneration: h }) {
  const [O, Q] = Z.useState(false), [_, w] = Z.useState("generation"), [D, z] = Z.useState("asc"), J = Z.useRef(null), B = Z.useMemo(() => [...o].sort((ml, Cl) => {
    let Hl, E;
    if (_ === "generation") Hl = ml.generation, E = Cl.generation;
    else if (_ === "fitness") Hl = ml.fitness, E = Cl.fitness;
    else {
      const Y = parseInt(_.replace("error", ""));
      Hl = Math.abs(ml.errorsInCents[Y] ?? 0), E = Math.abs(Cl.errorsInCents[Y] ?? 0);
    }
    return D === "asc" ? Hl - E : E - Hl;
  }), [o, _, D]), k = (V) => {
    _ === V ? z((ml) => ml === "asc" ? "desc" : "asc") : (w(V), z("asc"));
  }, A = (V) => _ !== V ? null : D === "asc" ? " \u25B2" : " \u25BC";
  if (Z.useEffect(() => {
    O && J.current && _ === "generation" && D === "asc" && J.current.scrollIntoView({ behavior: "smooth" });
  }, [o.length, O, _, D]), o.length === 0) return null;
  const W = (V) => {
    h(U === V ? null : V);
  };
  return f.jsxs("div", { className: "panel generation-log", children: [f.jsxs("button", { className: "log-header", onClick: () => Q(!O), "aria-expanded": O, children: [f.jsxs("span", { className: "log-title", children: ["Generation Log (", o.length, ")", U !== null && f.jsxs("span", { className: "log-selected-badge", children: ["Viewing Gen ", U] })] }), f.jsx("span", { className: `log-chevron ${O ? "expanded" : ""}`, children: "\u25B6" })] }), O && f.jsxs("div", { className: "log-content", children: [f.jsxs("table", { className: "log-table", children: [f.jsx("thead", { children: f.jsxs("tr", { children: [f.jsxs("th", { className: "sortable", onClick: () => k("generation"), children: ["Gen", A("generation")] }), f.jsxs("th", { className: "sortable", onClick: () => k("fitness"), children: ["Fitness", A("fitness")] }), H.map((V, ml) => f.jsxs("th", { className: "sortable", onClick: () => k(`error${ml}`), children: ["f", ml + 1, " err", A(`error${ml}`)] }, ml))] }) }), f.jsx("tbody", { children: B.map((V) => f.jsxs("tr", { className: `log-row ${U === V.generation ? "selected" : ""}`, onClick: () => W(V.generation), children: [f.jsx("td", { className: "gen-num", children: V.generation }), f.jsxs("td", { className: "fitness", children: [V.fitness.toFixed(4), "%"] }), V.errorsInCents.map((ml, Cl) => f.jsxs("td", { className: `error-cell ${S0(ml)}`, children: [ml >= 0 ? "+" : "", ml.toFixed(1), "\xA2"] }, Cl))] }, V.generation)) })] }), f.jsx("div", { ref: J })] })] });
}
function S0(o) {
  const H = Math.abs(o);
  return H <= 5 ? "error-excellent" : H <= 15 ? "error-good" : H <= 50 ? "error-ok" : "error-bad";
}
function Xm(o) {
  const H = [];
  for (let U = 0; U < o.length; U += 2) H.push({ lambda: o[U], h: o[U + 1] });
  return H.sort((U, h) => h.lambda - U.lambda);
}
function b0(o) {
  return new Worker("/assets/optimizationWorker-H9C5M1r5.js", { type: "module", name: o == null ? void 0 : o.name });
}
function x0() {
  const [o, H] = Z.useState(350), [U, h] = Z.useState(50), [O, Q] = Z.useState(10), [_, w] = Z.useState("aluminum"), [D, z] = Z.useState("preset"), [J, B] = Z.useState("1:4:10"), [k, A] = Z.useState("1, 4, 10"), [W, V] = Z.useState(175), [ml, Cl] = Z.useState(3), [Hl, E] = Z.useState("volume"), [Y, Vl] = Z.useState(0.05), [I, G] = Z.useState(50), [Al, ut] = Z.useState(100), [Ol, zl] = Z.useState(2), [sl, Kl] = Z.useState(80), [P, dl] = Z.useState(2), [S, M] = Z.useState(0), [j, al] = Z.useState(0), [ul, m] = Z.useState(0), [p, C] = Z.useState(0), [q, $] = Z.useState(0), [tl, rl] = Z.useState(0), [Ql, _l] = Z.useState(0.01), [Oe, Yt] = Z.useState(false), [La, Za] = Z.useState(0), [Gt, ke] = Z.useState(1 / 0), [Ie, Qu] = Z.useState(null), [Lu, Pe] = Z.useState([]), [Va, la] = Z.useState([]), [Zu, Vu] = Z.useState(0), [Tl, Ku] = Z.useState(null), [Ka, Ja] = Z.useState([]), [ue, Ju] = Z.useState(null), ne = Z.useRef(null), wa = Z.useCallback(() => {
    if (D === "preset") {
      const Jl = _f.find((xt) => xt.name === J);
      if (Jl) return ii(Jl.ratios, W);
    } else {
      const Jl = k.split(",").map((xt) => parseFloat(xt.trim())).filter((xt) => !isNaN(xt));
      if (Jl.length > 0) return ii(Jl, W);
    }
    return [W];
  }, [D, J, k, W]), fi = Z.useCallback(() => {
    const Jl = new b0();
    ne.current = Jl, Jl.onmessage = (Ue) => {
      const aa = Ue.data;
      switch (aa.type) {
        case "PROGRESS":
          const Ll = aa.data;
          Za(Ll.generation), ke(Ll.bestFitness), Qu(Ll.bestIndividual), Ll.computedFrequencies && Pe(Ll.computedFrequencies), Ll.errorsInCents && la(Ll.errorsInCents), Ll.lengthTrim !== void 0 && Vu(Ll.lengthTrim), Ll.computedFrequencies && Ll.errorsInCents && Ja((Wa) => [...Wa, { generation: Ll.generation, fitness: Ll.bestFitness, errorsInCents: Ll.errorsInCents, computedFrequencies: Ll.computedFrequencies, genes: [...Ll.bestIndividual.genes] }]);
          break;
        case "COMPLETE":
          Ku(aa.result), Yt(false);
          break;
        case "ERROR":
          console.error("Optimization error:", aa.message), Yt(false);
          break;
        case "STOPPED":
          Yt(false);
          break;
      }
    };
    const xt = Uf[_], ta = wa(), ea = { type: "START", params: { bar: { L: o / 1e3, b: U / 1e3, h0: O / 1e3, hMin: O / 1e4 }, material: xt, targetFrequencies: ta, numCuts: ml, penaltyType: Hl, penaltyWeight: Y, eaParams: { populationSize: I, elitismPercent: 10, crossoverPercent: 30, mutationPercent: 60, mutationStrength: 0.1, maxGenerations: Al, targetError: Ql, numElements: sl, f1Priority: Ol, minCutWidth: P / 1e3, maxCutWidth: S / 1e3, minCutDepth: j / 1e3, maxCutDepth: ul / 1e3, maxLengthTrim: p / 1e3, maxLengthExtend: q / 1e3, maxCores: tl } } };
    Jl.postMessage(ea), Yt(true), Za(0), ke(1 / 0), Qu(null), Pe([]), la([]), Vu(0), Ku(null), Ja([]), Ju(null);
  }, [_, o, U, O, ml, Hl, Y, I, Al, sl, Ol, P, S, j, ul, p, q, tl, Ql, wa]), De = Z.useCallback(() => {
    if (ne.current) {
      const Jl = { type: "STOP" };
      ne.current.postMessage(Jl);
    }
  }, []);
  Z.useEffect(() => () => {
    ne.current && ne.current.terminate();
  }, []);
  const lt = wa(), mt = ue !== null ? Ka.find((Jl) => Jl.generation === ue) : null, tt = mt ? Xm(mt.genes) : (Tl == null ? void 0 : Tl.cuts) ?? (Ie ? Xm(Ie.genes) : []), si = (mt == null ? void 0 : mt.computedFrequencies) ?? (Tl == null ? void 0 : Tl.computedFrequencies) ?? Lu, oi = (mt == null ? void 0 : mt.errorsInCents) ?? (Tl == null ? void 0 : Tl.errorsInCents) ?? Va, di = (Tl == null ? void 0 : Tl.effectiveLength) ? Tl.effectiveLength * 1e3 : Zu !== 0 ? o - 2 * Zu * 1e3 : o;
  return f.jsxs("div", { className: "app-container", children: [f.jsx(m0, { barLength: o, barWidth: U, barThickness: O, onBarLengthChange: H, onBarWidthChange: h, onBarThicknessChange: Q, selectedMaterial: _, onMaterialChange: w, tuningMode: D, selectedPreset: J, customRatios: k, fundamentalFrequency: W, onTuningModeChange: z, onPresetChange: B, onCustomRatiosChange: A, onFundamentalChange: V, numCuts: ml, penaltyType: Hl, penaltyWeight: Y, populationSize: I, maxGenerations: Al, onNumCutsChange: Cl, onPenaltyTypeChange: E, onPenaltyWeightChange: Vl, onPopulationSizeChange: G, onMaxGenerationsChange: ut, f1Priority: Ol, onF1PriorityChange: zl, numElements: sl, onNumElementsChange: Kl, minCutWidth: P, onMinCutWidthChange: dl, maxCutWidth: S, onMaxCutWidthChange: M, minCutDepth: j, onMinCutDepthChange: al, maxCutDepth: ul, onMaxCutDepthChange: m, maxLengthTrim: p, onMaxLengthTrimChange: C, maxLengthExtend: q, onMaxLengthExtendChange: $, maxCores: tl, onMaxCoresChange: rl, targetError: Ql, onTargetErrorChange: _l }), f.jsxs("div", { className: "main-content", children: [f.jsx(y0, { isRunning: Oe, currentGeneration: La, maxGenerations: Al, bestFitness: Gt, onStart: fi, onStop: De }), f.jsx(r0, { length: o, thickness: O, cuts: tt, showDimensions: tt.length > 0, effectiveLength: di }), f.jsx(h0, { targetFrequencies: lt, computedFrequencies: si, errorsInCents: oi }), f.jsx(g0, { entries: Ka, targetFrequencies: lt, selectedGeneration: ue, onSelectGeneration: Ju }), Tl && f.jsx(v0, { tuningError: Tl.tuningError, maxErrorCents: Tl.maxErrorCents, volumePercent: Tl.volumePercent, generations: Tl.generations, cuts: Tl.cuts, lengthTrim: Tl.lengthTrim, effectiveLength: Tl.effectiveLength })] })] });
}
f0.createRoot(document.getElementById("root")).render(f.jsx(Z.StrictMode, { children: f.jsx(x0, {}) }));
