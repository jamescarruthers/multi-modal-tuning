(function() {
  const j = document.createElement("link").relList;
  if (j && j.supports && j.supports("modulepreload")) return;
  for (const O of document.querySelectorAll('link[rel="modulepreload"]')) m(O);
  new MutationObserver((O) => {
    for (const X of O) if (X.type === "childList") for (const D of X.addedNodes) D.tagName === "LINK" && D.rel === "modulepreload" && m(D);
  }).observe(document, { childList: true, subtree: true });
  function A(O) {
    const X = {};
    return O.integrity && (X.integrity = O.integrity), O.referrerPolicy && (X.referrerPolicy = O.referrerPolicy), O.crossOrigin === "use-credentials" ? X.credentials = "include" : O.crossOrigin === "anonymous" ? X.credentials = "omit" : X.credentials = "same-origin", X;
  }
  function m(O) {
    if (O.ep) return;
    O.ep = true;
    const X = A(O);
    fetch(O.href, X);
  }
})();
var Nf = { exports: {} }, Ln = {};
var Ur;
function a0() {
  if (Ur) return Ln;
  Ur = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.fragment");
  function A(m, O, X) {
    var D = null;
    if (X !== void 0 && (D = "" + X), O.key !== void 0 && (D = "" + O.key), "key" in O) {
      X = {};
      for (var w in O) w !== "key" && (X[w] = O[w]);
    } else X = O;
    return O = X.ref, { $$typeof: o, type: m, key: D, ref: O !== void 0 ? O : null, props: X };
  }
  return Ln.Fragment = j, Ln.jsx = A, Ln.jsxs = A, Ln;
}
var Hr;
function n0() {
  return Hr || (Hr = 1, Nf.exports = a0()), Nf.exports;
}
var f = n0(), Mf = { exports: {} }, I = {};
var Rr;
function u0() {
  if (Rr) return I;
  Rr = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), A = /* @__PURE__ */ Symbol.for("react.fragment"), m = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), X = /* @__PURE__ */ Symbol.for("react.consumer"), D = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.activity"), ll = Symbol.iterator;
  function C(r) {
    return r === null || typeof r != "object" ? null : (r = ll && r[ll] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Q = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, W = Object.assign, Al = {};
  function Ol(r, z, U) {
    this.props = r, this.context = z, this.refs = Al, this.updater = U || Q;
  }
  Ol.prototype.isReactComponent = {}, Ol.prototype.setState = function(r, z) {
    if (typeof r != "object" && typeof r != "function" && r != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, z, "setState");
  }, Ol.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function F() {
  }
  F.prototype = Ol.prototype;
  function x(r, z, U) {
    this.props = r, this.context = z, this.refs = Al, this.updater = U || Q;
  }
  var R = x.prototype = new F();
  R.constructor = x, W(R, Ol.prototype), R.isPureReactComponent = true;
  var Tl = Array.isArray;
  function K() {
  }
  var Y = { H: null, A: null, T: null, S: null }, jl = Object.prototype.hasOwnProperty;
  function it(r, z, U) {
    var q = U.ref;
    return { $$typeof: o, type: r, key: z, ref: q !== void 0 ? q : null, props: U };
  }
  function Dl(r, z) {
    return it(r.type, z, r.props);
  }
  function pl(r) {
    return typeof r == "object" && r !== null && r.$$typeof === o;
  }
  function ol(r) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(U) {
      return z[U];
    });
  }
  var Zl = /\/+/g;
  function P(r, z) {
    return typeof r == "object" && r !== null && r.key != null ? ol("" + r.key) : z.toString(36);
  }
  function rl(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (typeof r.status == "string" ? r.then(K, K) : (r.status = "pending", r.then(function(z) {
          r.status === "pending" && (r.status = "fulfilled", r.value = z);
        }, function(z) {
          r.status === "pending" && (r.status = "rejected", r.reason = z);
        })), r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function S(r, z, U, q, k) {
    var el = typeof r;
    (el === "undefined" || el === "boolean") && (r = null);
    var ml = false;
    if (r === null) ml = true;
    else switch (el) {
      case "bigint":
      case "string":
      case "number":
        ml = true;
        break;
      case "object":
        switch (r.$$typeof) {
          case o:
          case j:
            ml = true;
            break;
          case $:
            return ml = r._init, S(ml(r._payload), z, U, q, k);
        }
    }
    if (ml) return k = k(r), ml = q === "" ? "." + P(r, 0) : q, Tl(k) ? (U = "", ml != null && (U = ml.replace(Zl, "$&/") + "/"), S(k, z, U, "", function(Ht) {
      return Ht;
    })) : k != null && (pl(k) && (k = Dl(k, U + (k.key == null || r && r.key === k.key ? "" : ("" + k.key).replace(Zl, "$&/") + "/") + ml)), z.push(k)), 1;
    ml = 0;
    var Ll = q === "" ? "." : q + ":";
    if (Tl(r)) for (var _l = 0; _l < r.length; _l++) q = r[_l], el = Ll + P(q, _l), ml += S(q, z, U, el, k);
    else if (_l = C(r), typeof _l == "function") for (r = _l.call(r), _l = 0; !(q = r.next()).done; ) q = q.value, el = Ll + P(q, _l++), ml += S(q, z, U, el, k);
    else if (el === "object") {
      if (typeof r.then == "function") return S(rl(r), z, U, q, k);
      throw z = String(r), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ml;
  }
  function M(r, z, U) {
    if (r == null) return r;
    var q = [], k = 0;
    return S(r, q, "", "", function(el) {
      return z.call(U, el, k++);
    }), q;
  }
  function _(r) {
    if (r._status === -1) {
      var z = r._result;
      z = z(), z.then(function(U) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = U);
      }, function(U) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = U);
      }), r._status === -1 && (r._status = 0, r._result = z);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var nl = typeof reportError == "function" ? reportError : function(r) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r), error: r });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", r);
      return;
    }
    console.error(r);
  }, ul = { map: M, forEach: function(r, z, U) {
    M(r, function() {
      z.apply(this, arguments);
    }, U);
  }, count: function(r) {
    var z = 0;
    return M(r, function() {
      z++;
    }), z;
  }, toArray: function(r) {
    return M(r, function(z) {
      return z;
    }) || [];
  }, only: function(r) {
    if (!pl(r)) throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } };
  return I.Activity = G, I.Children = ul, I.Component = Ol, I.Fragment = A, I.Profiler = O, I.PureComponent = x, I.StrictMode = m, I.Suspense = H, I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, I.__COMPILER_RUNTIME = { __proto__: null, c: function(r) {
    return Y.H.useMemoCache(r);
  } }, I.cache = function(r) {
    return function() {
      return r.apply(null, arguments);
    };
  }, I.cacheSignal = function() {
    return null;
  }, I.cloneElement = function(r, z, U) {
    if (r == null) throw Error("The argument must be a React element, but you passed " + r + ".");
    var q = W({}, r.props), k = r.key;
    if (z != null) for (el in z.key !== void 0 && (k = "" + z.key), z) !jl.call(z, el) || el === "key" || el === "__self" || el === "__source" || el === "ref" && z.ref === void 0 || (q[el] = z[el]);
    var el = arguments.length - 2;
    if (el === 1) q.children = U;
    else if (1 < el) {
      for (var ml = Array(el), Ll = 0; Ll < el; Ll++) ml[Ll] = arguments[Ll + 2];
      q.children = ml;
    }
    return it(r.type, k, q);
  }, I.createContext = function(r) {
    return r = { $$typeof: D, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null }, r.Provider = r, r.Consumer = { $$typeof: X, _context: r }, r;
  }, I.createElement = function(r, z, U) {
    var q, k = {}, el = null;
    if (z != null) for (q in z.key !== void 0 && (el = "" + z.key), z) jl.call(z, q) && q !== "key" && q !== "__self" && q !== "__source" && (k[q] = z[q]);
    var ml = arguments.length - 2;
    if (ml === 1) k.children = U;
    else if (1 < ml) {
      for (var Ll = Array(ml), _l = 0; _l < ml; _l++) Ll[_l] = arguments[_l + 2];
      k.children = Ll;
    }
    if (r && r.defaultProps) for (q in ml = r.defaultProps, ml) k[q] === void 0 && (k[q] = ml[q]);
    return it(r, el, k);
  }, I.createRef = function() {
    return { current: null };
  }, I.forwardRef = function(r) {
    return { $$typeof: w, render: r };
  }, I.isValidElement = pl, I.lazy = function(r) {
    return { $$typeof: $, _payload: { _status: -1, _result: r }, _init: _ };
  }, I.memo = function(r, z) {
    return { $$typeof: T, type: r, compare: z === void 0 ? null : z };
  }, I.startTransition = function(r) {
    var z = Y.T, U = {};
    Y.T = U;
    try {
      var q = r(), k = Y.S;
      k !== null && k(U, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(K, nl);
    } catch (el) {
      nl(el);
    } finally {
      z !== null && U.types !== null && (z.types = U.types), Y.T = z;
    }
  }, I.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, I.use = function(r) {
    return Y.H.use(r);
  }, I.useActionState = function(r, z, U) {
    return Y.H.useActionState(r, z, U);
  }, I.useCallback = function(r, z) {
    return Y.H.useCallback(r, z);
  }, I.useContext = function(r) {
    return Y.H.useContext(r);
  }, I.useDebugValue = function() {
  }, I.useDeferredValue = function(r, z) {
    return Y.H.useDeferredValue(r, z);
  }, I.useEffect = function(r, z) {
    return Y.H.useEffect(r, z);
  }, I.useEffectEvent = function(r) {
    return Y.H.useEffectEvent(r);
  }, I.useId = function() {
    return Y.H.useId();
  }, I.useImperativeHandle = function(r, z, U) {
    return Y.H.useImperativeHandle(r, z, U);
  }, I.useInsertionEffect = function(r, z) {
    return Y.H.useInsertionEffect(r, z);
  }, I.useLayoutEffect = function(r, z) {
    return Y.H.useLayoutEffect(r, z);
  }, I.useMemo = function(r, z) {
    return Y.H.useMemo(r, z);
  }, I.useOptimistic = function(r, z) {
    return Y.H.useOptimistic(r, z);
  }, I.useReducer = function(r, z, U) {
    return Y.H.useReducer(r, z, U);
  }, I.useRef = function(r) {
    return Y.H.useRef(r);
  }, I.useState = function(r) {
    return Y.H.useState(r);
  }, I.useSyncExternalStore = function(r, z, U) {
    return Y.H.useSyncExternalStore(r, z, U);
  }, I.useTransition = function() {
    return Y.H.useTransition();
  }, I.version = "19.2.3", I;
}
var qr;
function Hf() {
  return qr || (qr = 1, Mf.exports = u0()), Mf.exports;
}
var Z = Hf(), jf = { exports: {} }, Qn = {}, Cf = { exports: {} }, Af = {};
var Br;
function i0() {
  return Br || (Br = 1, (function(o) {
    function j(S, M) {
      var _ = S.length;
      S.push(M);
      l: for (; 0 < _; ) {
        var nl = _ - 1 >>> 1, ul = S[nl];
        if (0 < O(ul, M)) S[nl] = M, S[_] = ul, _ = nl;
        else break l;
      }
    }
    function A(S) {
      return S.length === 0 ? null : S[0];
    }
    function m(S) {
      if (S.length === 0) return null;
      var M = S[0], _ = S.pop();
      if (_ !== M) {
        S[0] = _;
        l: for (var nl = 0, ul = S.length, r = ul >>> 1; nl < r; ) {
          var z = 2 * (nl + 1) - 1, U = S[z], q = z + 1, k = S[q];
          if (0 > O(U, _)) q < ul && 0 > O(k, U) ? (S[nl] = k, S[q] = _, nl = q) : (S[nl] = U, S[z] = _, nl = z);
          else if (q < ul && 0 > O(k, _)) S[nl] = k, S[q] = _, nl = q;
          else break l;
        }
      }
      return M;
    }
    function O(S, M) {
      var _ = S.sortIndex - M.sortIndex;
      return _ !== 0 ? _ : S.id - M.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var X = performance;
      o.unstable_now = function() {
        return X.now();
      };
    } else {
      var D = Date, w = D.now();
      o.unstable_now = function() {
        return D.now() - w;
      };
    }
    var H = [], T = [], $ = 1, G = null, ll = 3, C = false, Q = false, W = false, Al = false, Ol = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, x = typeof setImmediate < "u" ? setImmediate : null;
    function R(S) {
      for (var M = A(T); M !== null; ) {
        if (M.callback === null) m(T);
        else if (M.startTime <= S) m(T), M.sortIndex = M.expirationTime, j(H, M);
        else break;
        M = A(T);
      }
    }
    function Tl(S) {
      if (W = false, R(S), !Q) if (A(H) !== null) Q = true, K || (K = true, ol());
      else {
        var M = A(T);
        M !== null && rl(Tl, M.startTime - S);
      }
    }
    var K = false, Y = -1, jl = 5, it = -1;
    function Dl() {
      return Al ? true : !(o.unstable_now() - it < jl);
    }
    function pl() {
      if (Al = false, K) {
        var S = o.unstable_now();
        it = S;
        var M = true;
        try {
          l: {
            Q = false, W && (W = false, F(Y), Y = -1), C = true;
            var _ = ll;
            try {
              t: {
                for (R(S), G = A(H); G !== null && !(G.expirationTime > S && Dl()); ) {
                  var nl = G.callback;
                  if (typeof nl == "function") {
                    G.callback = null, ll = G.priorityLevel;
                    var ul = nl(G.expirationTime <= S);
                    if (S = o.unstable_now(), typeof ul == "function") {
                      G.callback = ul, R(S), M = true;
                      break t;
                    }
                    G === A(H) && m(H), R(S);
                  } else m(H);
                  G = A(H);
                }
                if (G !== null) M = true;
                else {
                  var r = A(T);
                  r !== null && rl(Tl, r.startTime - S), M = false;
                }
              }
              break l;
            } finally {
              G = null, ll = _, C = false;
            }
            M = void 0;
          }
        } finally {
          M ? ol() : K = false;
        }
      }
    }
    var ol;
    if (typeof x == "function") ol = function() {
      x(pl);
    };
    else if (typeof MessageChannel < "u") {
      var Zl = new MessageChannel(), P = Zl.port2;
      Zl.port1.onmessage = pl, ol = function() {
        P.postMessage(null);
      };
    } else ol = function() {
      Ol(pl, 0);
    };
    function rl(S, M) {
      Y = Ol(function() {
        S(o.unstable_now());
      }, M);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, o.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jl = 0 < S ? Math.floor(1e3 / S) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return ll;
    }, o.unstable_next = function(S) {
      switch (ll) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = ll;
      }
      var _ = ll;
      ll = M;
      try {
        return S();
      } finally {
        ll = _;
      }
    }, o.unstable_requestPaint = function() {
      Al = true;
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
      var _ = ll;
      ll = S;
      try {
        return M();
      } finally {
        ll = _;
      }
    }, o.unstable_scheduleCallback = function(S, M, _) {
      var nl = o.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? nl + _ : nl) : _ = nl, S) {
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
      return ul = _ + ul, S = { id: $++, callback: M, priorityLevel: S, startTime: _, expirationTime: ul, sortIndex: -1 }, _ > nl ? (S.sortIndex = _, j(T, S), A(H) === null && S === A(T) && (W ? (F(Y), Y = -1) : W = true, rl(Tl, _ - nl))) : (S.sortIndex = ul, j(H, S), Q || C || (Q = true, K || (K = true, ol()))), S;
    }, o.unstable_shouldYield = Dl, o.unstable_wrapCallback = function(S) {
      var M = ll;
      return function() {
        var _ = ll;
        ll = M;
        try {
          return S.apply(this, arguments);
        } finally {
          ll = _;
        }
      };
    };
  })(Af)), Af;
}
var Yr;
function c0() {
  return Yr || (Yr = 1, Cf.exports = i0()), Cf.exports;
}
var _f = { exports: {} }, et = {};
var Gr;
function f0() {
  if (Gr) return et;
  Gr = 1;
  var o = Hf();
  function j(H) {
    var T = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++) T += "&args[]=" + encodeURIComponent(arguments[$]);
    }
    return "Minified React error #" + H + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function A() {
  }
  var m = { d: { f: A, r: function() {
    throw Error(j(522));
  }, D: A, C: A, L: A, m: A, X: A, S: A, M: A }, p: 0, findDOMNode: null }, O = /* @__PURE__ */ Symbol.for("react.portal");
  function X(H, T, $) {
    var G = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: O, key: G == null ? null : "" + G, children: H, containerInfo: T, implementation: $ };
  }
  var D = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(H, T) {
    if (H === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, et.createPortal = function(H, T) {
    var $ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11) throw Error(j(299));
    return X(H, T, null, $);
  }, et.flushSync = function(H) {
    var T = D.T, $ = m.p;
    try {
      if (D.T = null, m.p = 2, H) return H();
    } finally {
      D.T = T, m.p = $, m.d.f();
    }
  }, et.preconnect = function(H, T) {
    typeof H == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, m.d.C(H, T));
  }, et.prefetchDNS = function(H) {
    typeof H == "string" && m.d.D(H);
  }, et.preinit = function(H, T) {
    if (typeof H == "string" && T && typeof T.as == "string") {
      var $ = T.as, G = w($, T.crossOrigin), ll = typeof T.integrity == "string" ? T.integrity : void 0, C = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      $ === "style" ? m.d.S(H, typeof T.precedence == "string" ? T.precedence : void 0, { crossOrigin: G, integrity: ll, fetchPriority: C }) : $ === "script" && m.d.X(H, { crossOrigin: G, integrity: ll, fetchPriority: C, nonce: typeof T.nonce == "string" ? T.nonce : void 0 });
    }
  }, et.preinitModule = function(H, T) {
    if (typeof H == "string") if (typeof T == "object" && T !== null) {
      if (T.as == null || T.as === "script") {
        var $ = w(T.as, T.crossOrigin);
        m.d.M(H, { crossOrigin: $, integrity: typeof T.integrity == "string" ? T.integrity : void 0, nonce: typeof T.nonce == "string" ? T.nonce : void 0 });
      }
    } else T == null && m.d.M(H);
  }, et.preload = function(H, T) {
    if (typeof H == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var $ = T.as, G = w($, T.crossOrigin);
      m.d.L(H, $, { crossOrigin: G, integrity: typeof T.integrity == "string" ? T.integrity : void 0, nonce: typeof T.nonce == "string" ? T.nonce : void 0, type: typeof T.type == "string" ? T.type : void 0, fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0, referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0, imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0, imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0, media: typeof T.media == "string" ? T.media : void 0 });
    }
  }, et.preloadModule = function(H, T) {
    if (typeof H == "string") if (T) {
      var $ = w(T.as, T.crossOrigin);
      m.d.m(H, { as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0, crossOrigin: $, integrity: typeof T.integrity == "string" ? T.integrity : void 0 });
    } else m.d.m(H);
  }, et.requestFormReset = function(H) {
    m.d.r(H);
  }, et.unstable_batchedUpdates = function(H, T) {
    return H(T);
  }, et.useFormState = function(H, T, $) {
    return D.H.useFormState(H, T, $);
  }, et.useFormStatus = function() {
    return D.H.useHostTransitionStatus();
  }, et.version = "19.2.3", et;
}
var Xr;
function s0() {
  if (Xr) return _f.exports;
  Xr = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
    } catch (j) {
      console.error(j);
    }
  }
  return o(), _f.exports = f0(), _f.exports;
}
var Lr;
function o0() {
  if (Lr) return Qn;
  Lr = 1;
  var o = c0(), j = Hf(), A = s0();
  function m(l) {
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
  function X(l) {
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
  function D(l) {
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
  function H(l) {
    if (X(l) !== l) throw Error(m(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (t = X(l), t === null) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return H(n), l;
          if (u === a) return H(n), t;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (e.return !== a.return) e = n, a = u;
      else {
        for (var i = false, c = n.child; c; ) {
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
        if (!i) {
          for (c = u.child; c; ) {
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
          if (!i) throw Error(m(189));
        }
      }
      if (e.alternate !== a) throw Error(m(190));
    }
    if (e.tag !== 3) throw Error(m(188));
    return e.stateNode.current === e ? l : t;
  }
  function $(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = $(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var G = Object.assign, ll = /* @__PURE__ */ Symbol.for("react.element"), C = /* @__PURE__ */ Symbol.for("react.transitional.element"), Q = /* @__PURE__ */ Symbol.for("react.portal"), W = /* @__PURE__ */ Symbol.for("react.fragment"), Al = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ol = /* @__PURE__ */ Symbol.for("react.profiler"), F = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), Tl = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), Y = /* @__PURE__ */ Symbol.for("react.memo"), jl = /* @__PURE__ */ Symbol.for("react.lazy"), it = /* @__PURE__ */ Symbol.for("react.activity"), Dl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), pl = Symbol.iterator;
  function ol(l) {
    return l === null || typeof l != "object" ? null : (l = pl && l[pl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Zl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function P(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Zl ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case W:
        return "Fragment";
      case Ol:
        return "Profiler";
      case Al:
        return "StrictMode";
      case Tl:
        return "Suspense";
      case K:
        return "SuspenseList";
      case it:
        return "Activity";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case Q:
        return "Portal";
      case x:
        return l.displayName || "Context";
      case F:
        return (l._context.displayName || "Context") + ".Consumer";
      case R:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case Y:
        return t = l.displayName || null, t !== null ? t : P(l.type) || "Memo";
      case jl:
        t = l._payload, l = l._init;
        try {
          return P(l(t));
        } catch {
        }
    }
    return null;
  }
  var rl = Array.isArray, S = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = { pending: false, data: null, method: null, action: null }, nl = [], ul = -1;
  function r(l) {
    return { current: l };
  }
  function z(l) {
    0 > ul || (l.current = nl[ul], nl[ul] = null, ul--);
  }
  function U(l, t) {
    ul++, nl[ul] = l.current, l.current = t;
  }
  var q = r(null), k = r(null), el = r(null), ml = r(null);
  function Ll(l, t) {
    switch (U(el, t), U(k, l), U(q, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? er(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = er(t), l = ar(t, l);
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
    z(q), U(q, l);
  }
  function _l() {
    z(q), z(k), z(el);
  }
  function Ht(l) {
    l.memoizedState !== null && U(ml, l);
    var t = q.current, e = ar(t, l.type);
    t !== e && (U(k, l), U(q, e));
  }
  function Ie(l) {
    k.current === l && (z(q), z(k)), ml.current === l && (z(ml), Bn._currentValue = _);
  }
  var Ka, Oe;
  function Lt(l) {
    if (Ka === void 0) try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      Ka = t && t[1] || "", Oe = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Ka + l + Oe;
  }
  var Pe = false;
  function Ja(l, t) {
    if (!l || Pe) return "";
    Pe = true;
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
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var u = a.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var s = i.split(`
`), y = c.split(`
`);
        for (n = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); ) n++;
        if (a === s.length || n === y.length) for (a = s.length - 1, n = y.length - 1; 1 <= a && 0 <= n && s[a] !== y[n]; ) n--;
        for (; 1 <= a && 0 <= n; a--, n--) if (s[a] !== y[n]) {
          if (a !== 1 || n !== 1) do
            if (a--, n--, 0 > n || s[a] !== y[n]) {
              var E = `
` + s[a].replace(" at new ", " at ");
              return l.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", l.displayName)), E;
            }
          while (1 <= a && 0 <= n);
          break;
        }
      }
    } finally {
      Pe = false, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? Lt(e) : "";
  }
  function Zn(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Lt(l.type);
      case 16:
        return Lt("Lazy");
      case 13:
        return l.child !== t && t !== null ? Lt("Suspense Fallback") : Lt("Suspense");
      case 19:
        return Lt("SuspenseList");
      case 0:
      case 15:
        return Ja(l.type, false);
      case 11:
        return Ja(l.type.render, false);
      case 1:
        return Ja(l.type, true);
      case 31:
        return Lt("Activity");
      default:
        return "";
    }
  }
  function wa(l) {
    try {
      var t = "", e = null;
      do
        t += Zn(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var la = Object.prototype.hasOwnProperty, Wa = o.unstable_scheduleCallback, ta = o.unstable_cancelCallback, di = o.unstable_shouldYield, Vn = o.unstable_requestPaint, lt = o.unstable_now, Kn = o.unstable_getCurrentPriorityLevel, Wl = o.unstable_ImmediatePriority, $a = o.unstable_UserBlockingPriority, De = o.unstable_NormalPriority, Jn = o.unstable_LowPriority, ea = o.unstable_IdlePriority, wn = o.log, Ue = o.unstable_setDisableYieldValue, Qt = null, at = null;
  function Rt(l) {
    if (typeof wn == "function" && Ue(l), at && typeof at.setStrictMode == "function") try {
      at.setStrictMode(Qt, l);
    } catch {
    }
  }
  var tt = Math.clz32 ? Math.clz32 : ri, aa = Math.log, Wn = Math.LN2;
  function ri(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (aa(l) / Wn | 0) | 0;
  }
  var na = 256, ua = 262144, Vl = 4194304;
  function nt(l) {
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
  function ia(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~u, a !== 0 ? n = nt(a) : (i &= c, i !== 0 ? n = nt(i) : e || (e = c & ~l, e !== 0 && (n = nt(e))))) : (c = a & ~u, c !== 0 ? n = nt(c) : i !== 0 ? n = nt(i) : e || (e = a & ~l, e !== 0 && (n = nt(e)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, e = t & -t, u >= e || u === 32 && (e & 4194048) !== 0) ? t : n;
  }
  function He(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Bf(l, t) {
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
  function $n() {
    var l = Vl;
    return Vl <<= 1, (Vl & 62914560) === 0 && (Vl = 4194304), l;
  }
  function Fa(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function qt(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Kl(l, t, e, a, n, u) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements, s = l.expirationTimes, y = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var E = 31 - tt(e), N = 1 << E;
      c[E] = 0, s[E] = -1;
      var g = y[E];
      if (g !== null) for (y[E] = null, E = 0; E < g.length; E++) {
        var b = g[E];
        b !== null && (b.lane &= -536870913);
      }
      e &= ~N;
    }
    a !== 0 && Fn(l, a, 0), u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t));
  }
  function Fn(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - tt(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Yf(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - tt(e), n = 1 << a;
      n & t | l[a] & t && (l[a] |= t), e &= ~n;
    }
  }
  function Gf(l, t) {
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
  function hi(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Xf() {
    var l = M.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Mr(l.type));
  }
  function Lf(l, t) {
    var e = M.p;
    try {
      return M.p = l, t();
    } finally {
      M.p = e;
    }
  }
  var ce = Math.random().toString(36).slice(2), $l = "__reactFiber$" + ce, ct = "__reactProps$" + ce, ca = "__reactContainer$" + ce, vi = "__reactEvents$" + ce, Jr = "__reactListeners$" + ce, wr = "__reactHandles$" + ce, Qf = "__reactResources$" + ce, ka = "__reactMarker$" + ce;
  function yi(l) {
    delete l[$l], delete l[ct], delete l[vi], delete l[Jr], delete l[wr];
  }
  function fa(l) {
    var t = l[$l];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[ca] || e[$l]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (l = or(l); l !== null; ) {
          if (e = l[$l]) return e;
          l = or(l);
        }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function sa(l) {
    if (l = l[$l] || l[ca]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function Ia(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function oa(l) {
    var t = l[Qf];
    return t || (t = l[Qf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Jl(l) {
    l[ka] = true;
  }
  var Zf = /* @__PURE__ */ new Set(), Vf = {};
  function Re(l, t) {
    da(l, t), da(l + "Capture", t);
  }
  function da(l, t) {
    for (Vf[l] = t, l = 0; l < t.length; l++) Zf.add(t[l]);
  }
  var Wr = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Kf = {}, Jf = {};
  function $r(l) {
    return la.call(Jf, l) ? true : la.call(Kf, l) ? false : Wr.test(l) ? Jf[l] = true : (Kf[l] = true, false);
  }
  function kn(l, t, e) {
    if ($r(t)) if (e === null) l.removeAttribute(t);
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
  function In(l, t, e) {
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
  function Zt(l, t, e, a) {
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
  function wf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Fr(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(l, t, { configurable: true, get: function() {
        return n.call(this);
      }, set: function(i) {
        e = "" + i, u.call(this, i);
      } }), Object.defineProperty(l, t, { enumerable: a.enumerable }), { getValue: function() {
        return e;
      }, setValue: function(i) {
        e = "" + i;
      }, stopTracking: function() {
        l._valueTracker = null, delete l[t];
      } };
    }
  }
  function gi(l) {
    if (!l._valueTracker) {
      var t = wf(l) ? "checked" : "value";
      l._valueTracker = Fr(l, t, "" + l[t]);
    }
  }
  function Wf(l) {
    if (!l) return false;
    var t = l._valueTracker;
    if (!t) return true;
    var e = t.getValue(), a = "";
    return l && (a = wf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), true) : false;
  }
  function Pn(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var kr = /[\n"\\]/g;
  function pt(l) {
    return l.replace(kr, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Si(l, t, e, a, n, u, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Et(t)) : l.value !== "" + Et(t) && (l.value = "" + Et(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? bi(l, i, Et(t)) : e != null ? bi(l, i, Et(e)) : a != null && l.removeAttribute("value"), n == null && u != null && (l.defaultChecked = !!u), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Et(c) : l.removeAttribute("name");
  }
  function $f(l, t, e, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u), t != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        gi(l);
        return;
      }
      e = e != null ? "" + Et(e) : "", t = t != null ? "" + Et(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), gi(l);
  }
  function bi(l, t, e) {
    t === "number" && Pn(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function ra(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var n = 0; n < e.length; n++) t["$" + e[n]] = true;
      for (e = 0; e < l.length; e++) n = t.hasOwnProperty("$" + l[e].value), l[e].selected !== n && (l[e].selected = n), n && a && (l[e].defaultSelected = true);
    } else {
      for (e = "" + Et(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          l[n].selected = true, a && (l[n].defaultSelected = true);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Ff(l, t, e) {
    if (t != null && (t = "" + Et(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + Et(e) : "";
  }
  function kf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(m(92));
        if (rl(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = Et(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), gi(l);
  }
  function ma(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Ir = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function If(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Ir.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function Pf(l, t, e) {
    if (t != null && typeof t != "object") throw Error(m(62));
    if (l = l.style, e != null) {
      for (var a in e) !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var n in t) a = t[n], t.hasOwnProperty(n) && e[n] !== a && If(l, n, a);
    } else for (var u in t) t.hasOwnProperty(u) && If(l, u, t[u]);
  }
  function xi(l) {
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
  var Pr = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), lm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function lu(l) {
    return lm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Vt() {
  }
  var Ei = null;
  function pi(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ha = null, va = null;
  function ls(l) {
    var t = sa(l);
    if (t && (l = t.stateNode)) {
      var e = l[ct] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Si(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll('input[name="' + pt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[ct] || null;
                if (!n) throw Error(m(90));
                Si(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (t = 0; t < e.length; t++) a = e[t], a.form === l.form && Wf(a);
          }
          break l;
        case "textarea":
          Ff(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && ra(l, !!e.multiple, t, false);
      }
    }
  }
  var zi = false;
  function ts(l, t, e) {
    if (zi) return l(t, e);
    zi = true;
    try {
      var a = l(t);
      return a;
    } finally {
      if (zi = false, (ha !== null || va !== null) && (Lu(), ha && (t = ha, l = va, va = ha = null, ls(t), l))) for (t = 0; t < l.length; t++) ls(l[t]);
    }
  }
  function Pa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[ct] || null;
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
    if (e && typeof e != "function") throw Error(m(231, t, typeof e));
    return e;
  }
  var Kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ti = false;
  if (Kt) try {
    var ln = {};
    Object.defineProperty(ln, "passive", { get: function() {
      Ti = true;
    } }), window.addEventListener("test", ln, ln), window.removeEventListener("test", ln, ln);
  } catch {
    Ti = false;
  }
  var fe = null, Ni = null, tu = null;
  function es() {
    if (tu) return tu;
    var l, t = Ni, e = t.length, a, n = "value" in fe ? fe.value : fe.textContent, u = n.length;
    for (l = 0; l < e && t[l] === n[l]; l++) ;
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === n[u - a]; a++) ;
    return tu = n.slice(l, 1 < a ? 1 - a : void 0);
  }
  function eu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function au() {
    return true;
  }
  function as() {
    return false;
  }
  function ft(l) {
    function t(e, a, n, u, i) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? au : as, this.isPropagationStopped = as, this;
    }
    return G(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e = this.nativeEvent;
      e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = au);
    }, stopPropagation: function() {
      var e = this.nativeEvent;
      e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = au);
    }, persist: function() {
    }, isPersistent: au }), t;
  }
  var qe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(l) {
    return l.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, nu = ft(qe), tn = G({}, qe, { view: 0, detail: 0 }), tm = ft(tn), Mi, ji, en, uu = G({}, tn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ai, button: 0, buttons: 0, relatedTarget: function(l) {
    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
  }, movementX: function(l) {
    return "movementX" in l ? l.movementX : (l !== en && (en && l.type === "mousemove" ? (Mi = l.screenX - en.screenX, ji = l.screenY - en.screenY) : ji = Mi = 0, en = l), Mi);
  }, movementY: function(l) {
    return "movementY" in l ? l.movementY : ji;
  } }), ns = ft(uu), em = G({}, uu, { dataTransfer: 0 }), am = ft(em), nm = G({}, tn, { relatedTarget: 0 }), Ci = ft(nm), um = G({}, qe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), im = ft(um), cm = G({}, qe, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } }), fm = ft(cm), sm = G({}, qe, { data: 0 }), us = ft(sm), om = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, dm = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, rm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function mm(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = rm[l]) ? !!t[l] : false;
  }
  function Ai() {
    return mm;
  }
  var hm = G({}, tn, { key: function(l) {
    if (l.key) {
      var t = om[l.key] || l.key;
      if (t !== "Unidentified") return t;
    }
    return l.type === "keypress" ? (l = eu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? dm[l.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ai, charCode: function(l) {
    return l.type === "keypress" ? eu(l) : 0;
  }, keyCode: function(l) {
    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  }, which: function(l) {
    return l.type === "keypress" ? eu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  } }), vm = ft(hm), ym = G({}, uu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), is = ft(ym), gm = G({}, tn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ai }), Sm = ft(gm), bm = G({}, qe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), xm = ft(bm), Em = G({}, uu, { deltaX: function(l) {
    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
  }, deltaY: function(l) {
    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), pm = ft(Em), zm = G({}, qe, { newState: 0, oldState: 0 }), Tm = ft(zm), Nm = [9, 13, 27, 32], _i = Kt && "CompositionEvent" in window, an = null;
  Kt && "documentMode" in document && (an = document.documentMode);
  var Mm = Kt && "TextEvent" in window && !an, cs = Kt && (!_i || an && 8 < an && 11 >= an), fs = " ", ss = false;
  function os(l, t) {
    switch (l) {
      case "keyup":
        return Nm.indexOf(t.keyCode) !== -1;
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
  function ds(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ya = false;
  function jm(l, t) {
    switch (l) {
      case "compositionend":
        return ds(t);
      case "keypress":
        return t.which !== 32 ? null : (ss = true, fs);
      case "textInput":
        return l = t.data, l === fs && ss ? null : l;
      default:
        return null;
    }
  }
  function Cm(l, t) {
    if (ya) return l === "compositionend" || !_i && os(l, t) ? (l = es(), tu = Ni = fe = null, ya = false, l) : null;
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
        return cs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Am = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function rs(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Am[l.type] : t === "textarea";
  }
  function ms(l, t, e, a) {
    ha ? va ? va.push(a) : va = [a] : ha = a, t = Wu(t, "onChange"), 0 < t.length && (e = new nu("onChange", "change", null, e, a), l.push({ event: e, listeners: t }));
  }
  var nn = null, un = null;
  function _m(l) {
    Fd(l, 0);
  }
  function iu(l) {
    var t = Ia(l);
    if (Wf(t)) return l;
  }
  function hs(l, t) {
    if (l === "change") return t;
  }
  var vs = false;
  if (Kt) {
    var Oi;
    if (Kt) {
      var Di = "oninput" in document;
      if (!Di) {
        var ys = document.createElement("div");
        ys.setAttribute("oninput", "return;"), Di = typeof ys.oninput == "function";
      }
      Oi = Di;
    } else Oi = false;
    vs = Oi && (!document.documentMode || 9 < document.documentMode);
  }
  function gs() {
    nn && (nn.detachEvent("onpropertychange", Ss), un = nn = null);
  }
  function Ss(l) {
    if (l.propertyName === "value" && iu(un)) {
      var t = [];
      ms(t, un, l, pi(l)), ts(_m, t);
    }
  }
  function Om(l, t, e) {
    l === "focusin" ? (gs(), nn = t, un = e, nn.attachEvent("onpropertychange", Ss)) : l === "focusout" && gs();
  }
  function Dm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return iu(un);
  }
  function Um(l, t) {
    if (l === "click") return iu(t);
  }
  function Hm(l, t) {
    if (l === "input" || l === "change") return iu(t);
  }
  function Rm(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ht = typeof Object.is == "function" ? Object.is : Rm;
  function cn(l, t) {
    if (ht(l, t)) return true;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return false;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!la.call(t, n) || !ht(l[n], t[n])) return false;
    }
    return true;
  }
  function bs(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function xs(l, t) {
    var e = bs(l);
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
      e = bs(e);
    }
  }
  function Es(l, t) {
    return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? Es(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
  }
  function ps(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Pn(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = false;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Pn(l.document);
    }
    return t;
  }
  function Ui(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var qm = Kt && "documentMode" in document && 11 >= document.documentMode, ga = null, Hi = null, fn = null, Ri = false;
  function zs(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ri || ga == null || ga !== Pn(a) || (a = ga, "selectionStart" in a && Ui(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), fn && cn(fn, a) || (fn = a, a = Wu(Hi, "onSelect"), 0 < a.length && (t = new nu("onSelect", "select", null, t, e), l.push({ event: t, listeners: a }), t.target = ga)));
  }
  function Be(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var Sa = { animationend: Be("Animation", "AnimationEnd"), animationiteration: Be("Animation", "AnimationIteration"), animationstart: Be("Animation", "AnimationStart"), transitionrun: Be("Transition", "TransitionRun"), transitionstart: Be("Transition", "TransitionStart"), transitioncancel: Be("Transition", "TransitionCancel"), transitionend: Be("Transition", "TransitionEnd") }, qi = {}, Ts = {};
  Kt && (Ts = document.createElement("div").style, "AnimationEvent" in window || (delete Sa.animationend.animation, delete Sa.animationiteration.animation, delete Sa.animationstart.animation), "TransitionEvent" in window || delete Sa.transitionend.transition);
  function Ye(l) {
    if (qi[l]) return qi[l];
    if (!Sa[l]) return l;
    var t = Sa[l], e;
    for (e in t) if (t.hasOwnProperty(e) && e in Ts) return qi[l] = t[e];
    return l;
  }
  var Ns = Ye("animationend"), Ms = Ye("animationiteration"), js = Ye("animationstart"), Bm = Ye("transitionrun"), Ym = Ye("transitionstart"), Gm = Ye("transitioncancel"), Cs = Ye("transitionend"), As = /* @__PURE__ */ new Map(), Bi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Bi.push("scrollEnd");
  function Ot(l, t) {
    As.set(l, t), Re(t, [l]);
  }
  var cu = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, zt = [], ba = 0, Yi = 0;
  function fu() {
    for (var l = ba, t = Yi = ba = 0; t < l; ) {
      var e = zt[t];
      zt[t++] = null;
      var a = zt[t];
      zt[t++] = null;
      var n = zt[t];
      zt[t++] = null;
      var u = zt[t];
      if (zt[t++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && _s(e, n, u);
    }
  }
  function su(l, t, e, a) {
    zt[ba++] = l, zt[ba++] = t, zt[ba++] = e, zt[ba++] = a, Yi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Gi(l, t, e, a) {
    return su(l, t, e, a), ou(l);
  }
  function Ge(l, t) {
    return su(l, null, null, t), ou(l);
  }
  function _s(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var n = false, u = l.return; u !== null; ) u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (l = u.stateNode, l === null || l._visibility & 1 || (n = true)), l = u, u = u.return;
    return l.tag === 3 ? (u = l.stateNode, n && t !== null && (n = 31 - tt(e), l = u.hiddenUpdates, a = l[n], a === null ? l[n] = [t] : a.push(t), t.lane = e | 536870912), u) : null;
  }
  function ou(l) {
    if (50 < _n) throw _n = 0, Wc = null, Error(m(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var xa = {};
  function Xm(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function vt(l, t, e, a) {
    return new Xm(l, t, e, a);
  }
  function Xi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Jt(l, t) {
    var e = l.alternate;
    return e === null ? (e = vt(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function Os(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l;
  }
  function du(l, t, e, a, n, u) {
    var i = 0;
    if (a = l, typeof l == "function") Xi(l) && (i = 1);
    else if (typeof l == "string") i = Kh(l, e, q.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case it:
        return l = vt(31, e, t, n), l.elementType = it, l.lanes = u, l;
      case W:
        return Xe(e.children, n, u, t);
      case Al:
        i = 8, n |= 24;
        break;
      case Ol:
        return l = vt(12, e, t, n | 2), l.elementType = Ol, l.lanes = u, l;
      case Tl:
        return l = vt(13, e, t, n), l.elementType = Tl, l.lanes = u, l;
      case K:
        return l = vt(19, e, t, n), l.elementType = K, l.lanes = u, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case x:
            i = 10;
            break l;
          case F:
            i = 9;
            break l;
          case R:
            i = 11;
            break l;
          case Y:
            i = 14;
            break l;
          case jl:
            i = 16, a = null;
            break l;
        }
        i = 29, e = Error(m(130, l === null ? "null" : typeof l, "")), a = null;
    }
    return t = vt(i, e, t, n), t.elementType = l, t.type = a, t.lanes = u, t;
  }
  function Xe(l, t, e, a) {
    return l = vt(7, l, a, t), l.lanes = e, l;
  }
  function Li(l, t, e) {
    return l = vt(6, l, null, t), l.lanes = e, l;
  }
  function Ds(l) {
    var t = vt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Qi(l, t, e) {
    return t = vt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }, t;
  }
  var Us = /* @__PURE__ */ new WeakMap();
  function Tt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Us.get(l);
      return e !== void 0 ? e : (t = { value: l, source: t, stack: wa(t) }, Us.set(l, t), t);
    }
    return { value: l, source: t, stack: wa(t) };
  }
  var Ea = [], pa = 0, ru = null, sn = 0, Nt = [], Mt = 0, se = null, Bt = 1, Yt = "";
  function wt(l, t) {
    Ea[pa++] = sn, Ea[pa++] = ru, ru = l, sn = t;
  }
  function Hs(l, t, e) {
    Nt[Mt++] = Bt, Nt[Mt++] = Yt, Nt[Mt++] = se, se = l;
    var a = Bt;
    l = Yt;
    var n = 32 - tt(a) - 1;
    a &= ~(1 << n), e += 1;
    var u = 32 - tt(t) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Bt = 1 << 32 - tt(t) + n | e << n | a, Yt = u + l;
    } else Bt = 1 << u | e << n | a, Yt = l;
  }
  function Zi(l) {
    l.return !== null && (wt(l, 1), Hs(l, 1, 0));
  }
  function Vi(l) {
    for (; l === ru; ) ru = Ea[--pa], Ea[pa] = null, sn = Ea[--pa], Ea[pa] = null;
    for (; l === se; ) se = Nt[--Mt], Nt[Mt] = null, Yt = Nt[--Mt], Nt[Mt] = null, Bt = Nt[--Mt], Nt[Mt] = null;
  }
  function Rs(l, t) {
    Nt[Mt++] = Bt, Nt[Mt++] = Yt, Nt[Mt++] = se, Bt = t.id, Yt = t.overflow, se = l;
  }
  var Fl = null, Nl = null, dl = false, oe = null, jt = false, Ki = Error(m(519));
  function de(l) {
    var t = Error(m(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw on(Tt(t, l)), Ki;
  }
  function qs(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[$l] = l, t[ct] = a, e) {
      case "dialog":
        cl("cancel", t), cl("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        cl("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Dn.length; e++) cl(Dn[e], t);
        break;
      case "source":
        cl("error", t);
        break;
      case "img":
      case "image":
      case "link":
        cl("error", t), cl("load", t);
        break;
      case "details":
        cl("toggle", t);
        break;
      case "input":
        cl("invalid", t), $f(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        cl("invalid", t);
        break;
      case "textarea":
        cl("invalid", t), kf(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === true || lr(t.textContent, e) ? (a.popover != null && (cl("beforetoggle", t), cl("toggle", t)), a.onScroll != null && cl("scroll", t), a.onScrollEnd != null && cl("scrollend", t), a.onClick != null && (t.onclick = Vt), t = true) : t = false, t || de(l, true);
  }
  function Bs(l) {
    for (Fl = l.return; Fl; ) switch (Fl.tag) {
      case 5:
      case 31:
      case 13:
        jt = false;
        return;
      case 27:
      case 3:
        jt = true;
        return;
      default:
        Fl = Fl.return;
    }
  }
  function za(l) {
    if (l !== Fl) return false;
    if (!dl) return Bs(l), dl = true, false;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || of(l.type, l.memoizedProps)), e = !e), e && Nl && de(l), Bs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      Nl = sr(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      Nl = sr(l);
    } else t === 27 ? (t = Nl, Ne(l.type) ? (l = vf, vf = null, Nl = l) : Nl = t) : Nl = Fl ? At(l.stateNode.nextSibling) : null;
    return true;
  }
  function Le() {
    Nl = Fl = null, dl = false;
  }
  function Ji() {
    var l = oe;
    return l !== null && (rt === null ? rt = l : rt.push.apply(rt, l), oe = null), l;
  }
  function on(l) {
    oe === null ? oe = [l] : oe.push(l);
  }
  var wi = r(null), Qe = null, Wt = null;
  function re(l, t, e) {
    U(wi, t._currentValue), t._currentValue = e;
  }
  function $t(l) {
    l._currentValue = wi.current, z(wi);
  }
  function Wi(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function $i(l, t, e, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var s = 0; s < t.length; s++) if (c.context === t[s]) {
            u.lanes |= e, c = u.alternate, c !== null && (c.lanes |= e), Wi(u.return, e, l), a || (i = null);
            break l;
          }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(m(341));
        i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Wi(i, e, l), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else for (i = n; i !== null; ) {
        if (i === l) {
          i = null;
          break;
        }
        if (n = i.sibling, n !== null) {
          n.return = i.return, i = n;
          break;
        }
        i = i.return;
      }
      n = i;
    }
  }
  function Ta(l, t, e, a) {
    l = null;
    for (var n = t, u = false; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = true;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(m(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          ht(n.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (n === ml.current) {
        if (i = n.alternate, i === null) throw Error(m(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(Bn) : l = [Bn]);
      }
      n = n.return;
    }
    l !== null && $i(t, l, e, a), t.flags |= 262144;
  }
  function mu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ht(l.context._currentValue, l.memoizedValue)) return true;
      l = l.next;
    }
    return false;
  }
  function Ze(l) {
    Qe = l, Wt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function kl(l) {
    return Ys(Qe, l);
  }
  function hu(l, t) {
    return Qe === null && Ze(l), Ys(l, t);
  }
  function Ys(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, Wt === null) {
      if (l === null) throw Error(m(308));
      Wt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Wt = Wt.next = t;
    return e;
  }
  var Lm = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = { aborted: false, addEventListener: function(e, a) {
      l.push(a);
    } };
    this.abort = function() {
      t.aborted = true, l.forEach(function(e) {
        return e();
      });
    };
  }, Qm = o.unstable_scheduleCallback, Zm = o.unstable_NormalPriority, Bl = { $$typeof: x, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Fi() {
    return { controller: new Lm(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function dn(l) {
    l.refCount--, l.refCount === 0 && Qm(Zm, function() {
      l.controller.abort();
    });
  }
  var rn = null, ki = 0, Na = 0, Ma = null;
  function Vm(l, t) {
    if (rn === null) {
      var e = rn = [];
      ki = 0, Na = lf(), Ma = { status: "pending", value: void 0, then: function(a) {
        e.push(a);
      } };
    }
    return ki++, t.then(Gs, Gs), t;
  }
  function Gs() {
    if (--ki === 0 && rn !== null) {
      Ma !== null && (Ma.status = "fulfilled");
      var l = rn;
      rn = null, Na = 0, Ma = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Km(l, t) {
    var e = [], a = { status: "pending", value: null, reason: null, then: function(n) {
      e.push(n);
    } };
    return l.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var n = 0; n < e.length; n++) (0, e[n])(t);
    }, function(n) {
      for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++) (0, e[n])(void 0);
    }), a;
  }
  var Xs = S.S;
  S.S = function(l, t) {
    Td = lt(), typeof t == "object" && t !== null && typeof t.then == "function" && Vm(l, t), Xs !== null && Xs(l, t);
  };
  var Ve = r(null);
  function Ii() {
    var l = Ve.current;
    return l !== null ? l : zl.pooledCache;
  }
  function vu(l, t) {
    t === null ? U(Ve, Ve.current) : U(Ve, t.pool);
  }
  function Ls() {
    var l = Ii();
    return l === null ? null : { parent: Bl._currentValue, pool: l };
  }
  var ja = Error(m(460)), Pi = Error(m(474)), yu = Error(m(542)), gu = { then: function() {
  } };
  function Qs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Zs(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Vt, Vt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ks(l), l;
      default:
        if (typeof t.status == "string") t.then(Vt, Vt);
        else {
          if (l = zl, l !== null && 100 < l.shellSuspendCounter) throw Error(m(482));
          l = t, l.status = "pending", l.then(function(a) {
            if (t.status === "pending") {
              var n = t;
              n.status = "fulfilled", n.value = a;
            }
          }, function(a) {
            if (t.status === "pending") {
              var n = t;
              n.status = "rejected", n.reason = a;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ks(l), l;
        }
        throw Je = t, ja;
    }
  }
  function Ke(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Je = e, ja) : e;
    }
  }
  var Je = null;
  function Vs() {
    if (Je === null) throw Error(m(459));
    var l = Je;
    return Je = null, l;
  }
  function Ks(l) {
    if (l === ja || l === yu) throw Error(m(483));
  }
  var Ca = null, mn = 0;
  function Su(l) {
    var t = mn;
    return mn += 1, Ca === null && (Ca = []), Zs(Ca, l, t);
  }
  function hn(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function bu(l, t) {
    throw t.$$typeof === ll ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(m(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function Js(l) {
    function t(h, d) {
      if (l) {
        var v = h.deletions;
        v === null ? (h.deletions = [d], h.flags |= 16) : v.push(d);
      }
    }
    function e(h, d) {
      if (!l) return null;
      for (; d !== null; ) t(h, d), d = d.sibling;
      return null;
    }
    function a(h) {
      for (var d = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? d.set(h.key, h) : d.set(h.index, h), h = h.sibling;
      return d;
    }
    function n(h, d) {
      return h = Jt(h, d), h.index = 0, h.sibling = null, h;
    }
    function u(h, d, v) {
      return h.index = v, l ? (v = h.alternate, v !== null ? (v = v.index, v < d ? (h.flags |= 67108866, d) : v) : (h.flags |= 67108866, d)) : (h.flags |= 1048576, d);
    }
    function i(h) {
      return l && h.alternate === null && (h.flags |= 67108866), h;
    }
    function c(h, d, v, p) {
      return d === null || d.tag !== 6 ? (d = Li(v, h.mode, p), d.return = h, d) : (d = n(d, v), d.return = h, d);
    }
    function s(h, d, v, p) {
      var V = v.type;
      return V === W ? E(h, d, v.props.children, p, v.key) : d !== null && (d.elementType === V || typeof V == "object" && V !== null && V.$$typeof === jl && Ke(V) === d.type) ? (d = n(d, v.props), hn(d, v), d.return = h, d) : (d = du(v.type, v.key, v.props, null, h.mode, p), hn(d, v), d.return = h, d);
    }
    function y(h, d, v, p) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== v.containerInfo || d.stateNode.implementation !== v.implementation ? (d = Qi(v, h.mode, p), d.return = h, d) : (d = n(d, v.children || []), d.return = h, d);
    }
    function E(h, d, v, p, V) {
      return d === null || d.tag !== 7 ? (d = Xe(v, h.mode, p, V), d.return = h, d) : (d = n(d, v), d.return = h, d);
    }
    function N(h, d, v) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return d = Li("" + d, h.mode, v), d.return = h, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case C:
            return v = du(d.type, d.key, d.props, null, h.mode, v), hn(v, d), v.return = h, v;
          case Q:
            return d = Qi(d, h.mode, v), d.return = h, d;
          case jl:
            return d = Ke(d), N(h, d, v);
        }
        if (rl(d) || ol(d)) return d = Xe(d, h.mode, v, null), d.return = h, d;
        if (typeof d.then == "function") return N(h, Su(d), v);
        if (d.$$typeof === x) return N(h, hu(h, d), v);
        bu(h, d);
      }
      return null;
    }
    function g(h, d, v, p) {
      var V = d !== null ? d.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return V !== null ? null : c(h, d, "" + v, p);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case C:
            return v.key === V ? s(h, d, v, p) : null;
          case Q:
            return v.key === V ? y(h, d, v, p) : null;
          case jl:
            return v = Ke(v), g(h, d, v, p);
        }
        if (rl(v) || ol(v)) return V !== null ? null : E(h, d, v, p, null);
        if (typeof v.then == "function") return g(h, d, Su(v), p);
        if (v.$$typeof === x) return g(h, d, hu(h, v), p);
        bu(h, v);
      }
      return null;
    }
    function b(h, d, v, p, V) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return h = h.get(v) || null, c(d, h, "" + p, V);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case C:
            return h = h.get(p.key === null ? v : p.key) || null, s(d, h, p, V);
          case Q:
            return h = h.get(p.key === null ? v : p.key) || null, y(d, h, p, V);
          case jl:
            return p = Ke(p), b(h, d, v, p, V);
        }
        if (rl(p) || ol(p)) return h = h.get(v) || null, E(d, h, p, V, null);
        if (typeof p.then == "function") return b(h, d, v, Su(p), V);
        if (p.$$typeof === x) return b(h, d, v, hu(d, p), V);
        bu(d, p);
      }
      return null;
    }
    function B(h, d, v, p) {
      for (var V = null, hl = null, L = d, al = d = 0, sl = null; L !== null && al < v.length; al++) {
        L.index > al ? (sl = L, L = null) : sl = L.sibling;
        var vl = g(h, L, v[al], p);
        if (vl === null) {
          L === null && (L = sl);
          break;
        }
        l && L && vl.alternate === null && t(h, L), d = u(vl, d, al), hl === null ? V = vl : hl.sibling = vl, hl = vl, L = sl;
      }
      if (al === v.length) return e(h, L), dl && wt(h, al), V;
      if (L === null) {
        for (; al < v.length; al++) L = N(h, v[al], p), L !== null && (d = u(L, d, al), hl === null ? V = L : hl.sibling = L, hl = L);
        return dl && wt(h, al), V;
      }
      for (L = a(L); al < v.length; al++) sl = b(L, h, al, v[al], p), sl !== null && (l && sl.alternate !== null && L.delete(sl.key === null ? al : sl.key), d = u(sl, d, al), hl === null ? V = sl : hl.sibling = sl, hl = sl);
      return l && L.forEach(function(_e) {
        return t(h, _e);
      }), dl && wt(h, al), V;
    }
    function J(h, d, v, p) {
      if (v == null) throw Error(m(151));
      for (var V = null, hl = null, L = d, al = d = 0, sl = null, vl = v.next(); L !== null && !vl.done; al++, vl = v.next()) {
        L.index > al ? (sl = L, L = null) : sl = L.sibling;
        var _e = g(h, L, vl.value, p);
        if (_e === null) {
          L === null && (L = sl);
          break;
        }
        l && L && _e.alternate === null && t(h, L), d = u(_e, d, al), hl === null ? V = _e : hl.sibling = _e, hl = _e, L = sl;
      }
      if (vl.done) return e(h, L), dl && wt(h, al), V;
      if (L === null) {
        for (; !vl.done; al++, vl = v.next()) vl = N(h, vl.value, p), vl !== null && (d = u(vl, d, al), hl === null ? V = vl : hl.sibling = vl, hl = vl);
        return dl && wt(h, al), V;
      }
      for (L = a(L); !vl.done; al++, vl = v.next()) vl = b(L, h, al, vl.value, p), vl !== null && (l && vl.alternate !== null && L.delete(vl.key === null ? al : vl.key), d = u(vl, d, al), hl === null ? V = vl : hl.sibling = vl, hl = vl);
      return l && L.forEach(function(e0) {
        return t(h, e0);
      }), dl && wt(h, al), V;
    }
    function El(h, d, v, p) {
      if (typeof v == "object" && v !== null && v.type === W && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case C:
            l: {
              for (var V = v.key; d !== null; ) {
                if (d.key === V) {
                  if (V = v.type, V === W) {
                    if (d.tag === 7) {
                      e(h, d.sibling), p = n(d, v.props.children), p.return = h, h = p;
                      break l;
                    }
                  } else if (d.elementType === V || typeof V == "object" && V !== null && V.$$typeof === jl && Ke(V) === d.type) {
                    e(h, d.sibling), p = n(d, v.props), hn(p, v), p.return = h, h = p;
                    break l;
                  }
                  e(h, d);
                  break;
                } else t(h, d);
                d = d.sibling;
              }
              v.type === W ? (p = Xe(v.props.children, h.mode, p, v.key), p.return = h, h = p) : (p = du(v.type, v.key, v.props, null, h.mode, p), hn(p, v), p.return = h, h = p);
            }
            return i(h);
          case Q:
            l: {
              for (V = v.key; d !== null; ) {
                if (d.key === V) if (d.tag === 4 && d.stateNode.containerInfo === v.containerInfo && d.stateNode.implementation === v.implementation) {
                  e(h, d.sibling), p = n(d, v.children || []), p.return = h, h = p;
                  break l;
                } else {
                  e(h, d);
                  break;
                }
                else t(h, d);
                d = d.sibling;
              }
              p = Qi(v, h.mode, p), p.return = h, h = p;
            }
            return i(h);
          case jl:
            return v = Ke(v), El(h, d, v, p);
        }
        if (rl(v)) return B(h, d, v, p);
        if (ol(v)) {
          if (V = ol(v), typeof V != "function") throw Error(m(150));
          return v = V.call(v), J(h, d, v, p);
        }
        if (typeof v.then == "function") return El(h, d, Su(v), p);
        if (v.$$typeof === x) return El(h, d, hu(h, v), p);
        bu(h, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, d !== null && d.tag === 6 ? (e(h, d.sibling), p = n(d, v), p.return = h, h = p) : (e(h, d), p = Li(v, h.mode, p), p.return = h, h = p), i(h)) : e(h, d);
    }
    return function(h, d, v, p) {
      try {
        mn = 0;
        var V = El(h, d, v, p);
        return Ca = null, V;
      } catch (L) {
        if (L === ja || L === yu) throw L;
        var hl = vt(29, L, null, h.mode);
        return hl.lanes = p, hl.return = h, hl;
      }
    };
  }
  var we = Js(true), ws = Js(false), me = false;
  function lc(l) {
    l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function tc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null });
  }
  function he(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ve(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (yl & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = ou(l), _s(l, null, e), t;
    }
    return su(l, a, t, e), ou(l);
  }
  function vn(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Yf(l, e);
    }
  }
  function ec(l, t) {
    var e = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var n = null, u = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = { lane: e.lane, tag: e.tag, payload: e.payload, callback: null, next: null };
          u === null ? n = u = i : u = u.next = i, e = e.next;
        } while (e !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      e = { baseState: a.baseState, firstBaseUpdate: n, lastBaseUpdate: u, shared: a.shared, callbacks: a.callbacks }, l.updateQueue = e;
      return;
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
  }
  var ac = false;
  function yn() {
    if (ac) {
      var l = Ma;
      if (l !== null) throw l;
    }
  }
  function gn(l, t, e, a) {
    ac = false;
    var n = l.updateQueue;
    me = false;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var s = c, y = s.next;
      s.next = null, i === null ? u = y : i.next = y, i = s;
      var E = l.alternate;
      E !== null && (E = E.updateQueue, c = E.lastBaseUpdate, c !== i && (c === null ? E.firstBaseUpdate = y : c.next = y, E.lastBaseUpdate = s));
    }
    if (u !== null) {
      var N = n.baseState;
      i = 0, E = y = s = null, c = u;
      do {
        var g = c.lane & -536870913, b = g !== c.lane;
        if (b ? (fl & g) === g : (a & g) === g) {
          g !== 0 && g === Na && (ac = true), E !== null && (E = E.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
          l: {
            var B = l, J = c;
            g = t;
            var El = e;
            switch (J.tag) {
              case 1:
                if (B = J.payload, typeof B == "function") {
                  N = B.call(El, N, g);
                  break l;
                }
                N = B;
                break l;
              case 3:
                B.flags = B.flags & -65537 | 128;
              case 0:
                if (B = J.payload, g = typeof B == "function" ? B.call(El, N, g) : B, g == null) break l;
                N = G({}, N, g);
                break l;
              case 2:
                me = true;
            }
          }
          g = c.callback, g !== null && (l.flags |= 64, b && (l.flags |= 8192), b = n.callbacks, b === null ? n.callbacks = [g] : b.push(g));
        } else b = { lane: g, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, E === null ? (y = E = b, s = N) : E = E.next = b, i |= g;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null) break;
          b = c, c = b.next, b.next = null, n.lastBaseUpdate = b, n.shared.pending = null;
        }
      } while (true);
      E === null && (s = N), n.baseState = s, n.firstBaseUpdate = y, n.lastBaseUpdate = E, u === null && (n.shared.lanes = 0), xe |= i, l.lanes = i, l.memoizedState = N;
    }
  }
  function Ws(l, t) {
    if (typeof l != "function") throw Error(m(191, l));
    l.call(t);
  }
  function $s(l, t) {
    var e = l.callbacks;
    if (e !== null) for (l.callbacks = null, l = 0; l < e.length; l++) Ws(e[l], t);
  }
  var Aa = r(null), xu = r(0);
  function Fs(l, t) {
    l = ne, U(xu, l), U(Aa, t), ne = l | t.baseLanes;
  }
  function nc() {
    U(xu, ne), U(Aa, Aa.current);
  }
  function uc() {
    ne = xu.current, z(Aa), z(xu);
  }
  var yt = r(null), Ct = null;
  function ye(l) {
    var t = l.alternate;
    U(Rl, Rl.current & 1), U(yt, l), Ct === null && (t === null || Aa.current !== null || t.memoizedState !== null) && (Ct = l);
  }
  function ic(l) {
    U(Rl, Rl.current), U(yt, l), Ct === null && (Ct = l);
  }
  function ks(l) {
    l.tag === 22 ? (U(Rl, Rl.current), U(yt, l), Ct === null && (Ct = l)) : ge();
  }
  function ge() {
    U(Rl, Rl.current), U(yt, yt.current);
  }
  function gt(l) {
    z(yt), Ct === l && (Ct = null), z(Rl);
  }
  var Rl = r(0);
  function Eu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || mf(e) || hf(e))) return t;
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
  var Ft = 0, tl = null, bl = null, Yl = null, pu = false, _a = false, We = false, zu = 0, Sn = 0, Oa = null, Jm = 0;
  function Ul() {
    throw Error(m(321));
  }
  function cc(l, t) {
    if (t === null) return false;
    for (var e = 0; e < t.length && e < l.length; e++) if (!ht(l[e], t[e])) return false;
    return true;
  }
  function fc(l, t, e, a, n, u) {
    return Ft = u, tl = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? Ro : zc, We = false, u = e(a, n), We = false, _a && (u = Ps(t, e, a, n)), Is(l), u;
  }
  function Is(l) {
    S.H = En;
    var t = bl !== null && bl.next !== null;
    if (Ft = 0, Yl = bl = tl = null, pu = false, Sn = 0, Oa = null, t) throw Error(m(300));
    l === null || Gl || (l = l.dependencies, l !== null && mu(l) && (Gl = true));
  }
  function Ps(l, t, e, a) {
    tl = l;
    var n = 0;
    do {
      if (_a && (Oa = null), Sn = 0, _a = false, 25 <= n) throw Error(m(301));
      if (n += 1, Yl = bl = null, l.updateQueue != null) {
        var u = l.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      S.H = qo, u = t(e, a);
    } while (_a);
    return u;
  }
  function wm() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? bn(t) : t, l = l.useState()[0], (bl !== null ? bl.memoizedState : null) !== l && (tl.flags |= 1024), t;
  }
  function sc() {
    var l = zu !== 0;
    return zu = 0, l;
  }
  function oc(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function dc(l) {
    if (pu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      pu = false;
    }
    Ft = 0, Yl = bl = tl = null, _a = false, Sn = zu = 0, Oa = null;
  }
  function ut() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Yl === null ? tl.memoizedState = Yl = l : Yl = Yl.next = l, Yl;
  }
  function ql() {
    if (bl === null) {
      var l = tl.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = bl.next;
    var t = Yl === null ? tl.memoizedState : Yl.next;
    if (t !== null) Yl = t, bl = l;
    else {
      if (l === null) throw tl.alternate === null ? Error(m(467)) : Error(m(310));
      bl = l, l = { memoizedState: bl.memoizedState, baseState: bl.baseState, baseQueue: bl.baseQueue, queue: bl.queue, next: null }, Yl === null ? tl.memoizedState = Yl = l : Yl = Yl.next = l;
    }
    return Yl;
  }
  function Tu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function bn(l) {
    var t = Sn;
    return Sn += 1, Oa === null && (Oa = []), l = Zs(Oa, l, t), t = tl, (Yl === null ? t.memoizedState : Yl.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? Ro : zc), l;
  }
  function Nu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return bn(l);
      if (l.$$typeof === x) return kl(l);
    }
    throw Error(m(438, String(l)));
  }
  function rc(l) {
    var t = null, e = tl.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = tl.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(n) {
        return n.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = Tu(), tl.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0) for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Dl;
    return t.index++, e;
  }
  function kt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Mu(l) {
    var t = ql();
    return mc(t, bl, l);
  }
  function mc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = e;
    var n = l.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      t.baseQueue = n = u, a.pending = null;
    }
    if (u = l.baseState, n === null) l.memoizedState = u;
    else {
      t = n.next;
      var c = i = null, s = null, y = t, E = false;
      do {
        var N = y.lane & -536870913;
        if (N !== y.lane ? (fl & N) === N : (Ft & N) === N) {
          var g = y.revertLane;
          if (g === 0) s !== null && (s = s.next = { lane: 0, revertLane: 0, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }), N === Na && (E = true);
          else if ((Ft & g) === g) {
            y = y.next, g === Na && (E = true);
            continue;
          } else N = { lane: 0, revertLane: y.revertLane, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, s === null ? (c = s = N, i = u) : s = s.next = N, tl.lanes |= g, xe |= g;
          N = y.action, We && e(u, N), u = y.hasEagerState ? y.eagerState : e(u, N);
        } else g = { lane: N, revertLane: y.revertLane, gesture: y.gesture, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, s === null ? (c = s = g, i = u) : s = s.next = g, tl.lanes |= N, xe |= N;
        y = y.next;
      } while (y !== null && y !== t);
      if (s === null ? i = u : s.next = c, !ht(u, l.memoizedState) && (Gl = true, E && (e = Ma, e !== null))) throw e;
      l.memoizedState = u, l.baseState = i, l.baseQueue = s, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function hc(l) {
    var t = ql(), e = t.queue;
    if (e === null) throw Error(m(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, n = e.pending, u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = n = n.next;
      do
        u = l(u, i.action), i = i.next;
      while (i !== n);
      ht(u, t.memoizedState) || (Gl = true), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), e.lastRenderedState = u;
    }
    return [u, a];
  }
  function lo(l, t, e) {
    var a = tl, n = ql(), u = dl;
    if (u) {
      if (e === void 0) throw Error(m(407));
      e = e();
    } else e = t();
    var i = !ht((bl || n).memoizedState, e);
    if (i && (n.memoizedState = e, Gl = true), n = n.queue, gc(ao.bind(null, a, n, l), [l]), n.getSnapshot !== t || i || Yl !== null && Yl.memoizedState.tag & 1) {
      if (a.flags |= 2048, Da(9, { destroy: void 0 }, eo.bind(null, a, n, e, t), null), zl === null) throw Error(m(349));
      u || (Ft & 127) !== 0 || to(a, t, e);
    }
    return e;
  }
  function to(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = tl.updateQueue, t === null ? (t = Tu(), tl.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function eo(l, t, e, a) {
    t.value = e, t.getSnapshot = a, no(t) && uo(l);
  }
  function ao(l, t, e) {
    return e(function() {
      no(t) && uo(l);
    });
  }
  function no(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !ht(l, e);
    } catch {
      return true;
    }
  }
  function uo(l) {
    var t = Ge(l, 2);
    t !== null && mt(t, l, 2);
  }
  function vc(l) {
    var t = ut();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), We) {
        Rt(true);
        try {
          e();
        } finally {
          Rt(false);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: kt, lastRenderedState: l }, t;
  }
  function io(l, t, e, a) {
    return l.baseState = e, mc(l, bl, typeof a == "function" ? a : kt);
  }
  function Wm(l, t, e, a, n) {
    if (Au(l)) throw Error(m(485));
    if (l = t.action, l !== null) {
      var u = { payload: n, action: l, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(i) {
        u.listeners.push(i);
      } };
      S.T !== null ? e(true) : u.isTransition = false, a(u), e = t.pending, e === null ? (u.next = t.pending = u, co(t, u)) : (u.next = e.next, t.pending = e.next = u);
    }
  }
  function co(l, t) {
    var e = t.action, a = t.payload, n = l.state;
    if (t.isTransition) {
      var u = S.T, i = {};
      S.T = i;
      try {
        var c = e(n, a), s = S.S;
        s !== null && s(i, c), fo(l, t, c);
      } catch (y) {
        yc(l, t, y);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), S.T = u;
      }
    } else try {
      u = e(n, a), fo(l, t, u);
    } catch (y) {
      yc(l, t, y);
    }
  }
  function fo(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
      so(l, t, a);
    }, function(a) {
      return yc(l, t, a);
    }) : so(l, t, e);
  }
  function so(l, t, e) {
    t.status = "fulfilled", t.value = e, oo(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, co(l, e)));
  }
  function yc(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, oo(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function oo(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ro(l, t) {
    return t;
  }
  function mo(l, t) {
    if (dl) {
      var e = zl.formState;
      if (e !== null) {
        l: {
          var a = tl;
          if (dl) {
            if (Nl) {
              t: {
                for (var n = Nl, u = jt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = At(n.nextSibling), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Nl = At(n.nextSibling), a = n.data === "F!";
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
    return e = ut(), e.memoizedState = e.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ro, lastRenderedState: t }, e.queue = a, e = Do.bind(null, tl, a), a.dispatch = e, a = vc(false), u = pc.bind(null, tl, false, a.queue), a = ut(), n = { state: t, dispatch: null, action: l, pending: null }, a.queue = n, e = Wm.bind(null, tl, n, u, e), n.dispatch = e, a.memoizedState = l, [t, e, false];
  }
  function ho(l) {
    var t = ql();
    return vo(t, bl, l);
  }
  function vo(l, t, e) {
    if (t = mc(l, t, ro)[0], l = Mu(kt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = bn(t);
    } catch (i) {
      throw i === ja ? yu : i;
    }
    else a = t;
    t = ql();
    var n = t.queue, u = n.dispatch;
    return e !== t.memoizedState && (tl.flags |= 2048, Da(9, { destroy: void 0 }, $m.bind(null, n, e), null)), [a, u, l];
  }
  function $m(l, t) {
    l.action = t;
  }
  function yo(l) {
    var t = ql(), e = bl;
    if (e !== null) return vo(t, e, l);
    ql(), t = t.memoizedState, e = ql();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, false];
  }
  function Da(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = tl.updateQueue, t === null && (t = Tu(), tl.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function go() {
    return ql().memoizedState;
  }
  function ju(l, t, e, a) {
    var n = ut();
    tl.flags |= l, n.memoizedState = Da(1 | t, { destroy: void 0 }, e, a === void 0 ? null : a);
  }
  function Cu(l, t, e, a) {
    var n = ql();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    bl !== null && a !== null && cc(a, bl.memoizedState.deps) ? n.memoizedState = Da(t, u, e, a) : (tl.flags |= l, n.memoizedState = Da(1 | t, u, e, a));
  }
  function So(l, t) {
    ju(8390656, 8, l, t);
  }
  function gc(l, t) {
    Cu(2048, 8, l, t);
  }
  function Fm(l) {
    tl.flags |= 4;
    var t = tl.updateQueue;
    if (t === null) t = Tu(), tl.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function bo(l) {
    var t = ql().memoizedState;
    return Fm({ ref: t, nextImpl: l }), function() {
      if ((yl & 2) !== 0) throw Error(m(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function xo(l, t) {
    return Cu(4, 2, l, t);
  }
  function Eo(l, t) {
    return Cu(4, 4, l, t);
  }
  function po(l, t) {
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
  function zo(l, t, e) {
    e = e != null ? e.concat([l]) : null, Cu(4, 4, po.bind(null, t, l), e);
  }
  function Sc() {
  }
  function To(l, t) {
    var e = ql();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && cc(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function No(l, t) {
    var e = ql();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && cc(t, a[1])) return a[0];
    if (a = l(), We) {
      Rt(true);
      try {
        l();
      } finally {
        Rt(false);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function bc(l, t, e) {
    return e === void 0 || (Ft & 1073741824) !== 0 && (fl & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = Md(), tl.lanes |= l, xe |= l, e);
  }
  function Mo(l, t, e, a) {
    return ht(e, t) ? e : Aa.current !== null ? (l = bc(l, e, a), ht(l, t) || (Gl = true), l) : (Ft & 42) === 0 || (Ft & 1073741824) !== 0 && (fl & 261930) === 0 ? (Gl = true, l.memoizedState = e) : (l = Md(), tl.lanes |= l, xe |= l, t);
  }
  function jo(l, t, e, a, n) {
    var u = M.p;
    M.p = u !== 0 && 8 > u ? u : 8;
    var i = S.T, c = {};
    S.T = c, pc(l, false, t, e);
    try {
      var s = n(), y = S.S;
      if (y !== null && y(c, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var E = Km(s, a);
        xn(l, t, E, xt(l));
      } else xn(l, t, a, xt(l));
    } catch (N) {
      xn(l, t, { then: function() {
      }, status: "rejected", reason: N }, xt());
    } finally {
      M.p = u, i !== null && c.types !== null && (i.types = c.types), S.T = i;
    }
  }
  function km() {
  }
  function xc(l, t, e, a) {
    if (l.tag !== 5) throw Error(m(476));
    var n = Co(l).queue;
    jo(l, n, t, _, e === null ? km : function() {
      return Ao(l), e(a);
    });
  }
  function Co(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: _, baseState: _, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: kt, lastRenderedState: _ }, next: null };
    var e = {};
    return t.next = { memoizedState: e, baseState: e, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: kt, lastRenderedState: e }, next: null }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Ao(l) {
    var t = Co(l);
    t.next === null && (t = l.alternate.memoizedState), xn(l, t.next.queue, {}, xt());
  }
  function Ec() {
    return kl(Bn);
  }
  function _o() {
    return ql().memoizedState;
  }
  function Oo() {
    return ql().memoizedState;
  }
  function Im(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = xt();
          l = he(e);
          var a = ve(t, l, e);
          a !== null && (mt(a, t, e), vn(a, t, e)), t = { cache: Fi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Pm(l, t, e) {
    var a = xt();
    e = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: false, eagerState: null, next: null }, Au(l) ? Uo(t, e) : (e = Gi(l, t, e, a), e !== null && (mt(e, l, a), Ho(e, t, a)));
  }
  function Do(l, t, e) {
    var a = xt();
    xn(l, t, e, a);
  }
  function xn(l, t, e, a) {
    var n = { lane: a, revertLane: 0, gesture: null, action: e, hasEagerState: false, eagerState: null, next: null };
    if (Au(l)) Uo(t, n);
    else {
      var u = l.alternate;
      if (l.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var i = t.lastRenderedState, c = u(i, e);
        if (n.hasEagerState = true, n.eagerState = c, ht(c, i)) return su(l, t, n, 0), zl === null && fu(), false;
      } catch {
      }
      if (e = Gi(l, t, n, a), e !== null) return mt(e, l, a), Ho(e, t, a), true;
    }
    return false;
  }
  function pc(l, t, e, a) {
    if (a = { lane: 2, revertLane: lf(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Au(l)) {
      if (t) throw Error(m(479));
    } else t = Gi(l, e, a, 2), t !== null && mt(t, l, 2);
  }
  function Au(l) {
    var t = l.alternate;
    return l === tl || t !== null && t === tl;
  }
  function Uo(l, t) {
    _a = pu = true;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function Ho(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Yf(l, e);
    }
  }
  var En = { readContext: kl, use: Nu, useCallback: Ul, useContext: Ul, useEffect: Ul, useImperativeHandle: Ul, useLayoutEffect: Ul, useInsertionEffect: Ul, useMemo: Ul, useReducer: Ul, useRef: Ul, useState: Ul, useDebugValue: Ul, useDeferredValue: Ul, useTransition: Ul, useSyncExternalStore: Ul, useId: Ul, useHostTransitionStatus: Ul, useFormState: Ul, useActionState: Ul, useOptimistic: Ul, useMemoCache: Ul, useCacheRefresh: Ul };
  En.useEffectEvent = Ul;
  var Ro = { readContext: kl, use: Nu, useCallback: function(l, t) {
    return ut().memoizedState = [l, t === void 0 ? null : t], l;
  }, useContext: kl, useEffect: So, useImperativeHandle: function(l, t, e) {
    e = e != null ? e.concat([l]) : null, ju(4194308, 4, po.bind(null, t, l), e);
  }, useLayoutEffect: function(l, t) {
    return ju(4194308, 4, l, t);
  }, useInsertionEffect: function(l, t) {
    ju(4, 2, l, t);
  }, useMemo: function(l, t) {
    var e = ut();
    t = t === void 0 ? null : t;
    var a = l();
    if (We) {
      Rt(true);
      try {
        l();
      } finally {
        Rt(false);
      }
    }
    return e.memoizedState = [a, t], a;
  }, useReducer: function(l, t, e) {
    var a = ut();
    if (e !== void 0) {
      var n = e(t);
      if (We) {
        Rt(true);
        try {
          e(t);
        } finally {
          Rt(false);
        }
      }
    } else n = t;
    return a.memoizedState = a.baseState = n, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: n }, a.queue = l, l = l.dispatch = Pm.bind(null, tl, l), [a.memoizedState, l];
  }, useRef: function(l) {
    var t = ut();
    return l = { current: l }, t.memoizedState = l;
  }, useState: function(l) {
    l = vc(l);
    var t = l.queue, e = Do.bind(null, tl, t);
    return t.dispatch = e, [l.memoizedState, e];
  }, useDebugValue: Sc, useDeferredValue: function(l, t) {
    var e = ut();
    return bc(e, l, t);
  }, useTransition: function() {
    var l = vc(false);
    return l = jo.bind(null, tl, l.queue, true, false), ut().memoizedState = l, [false, l];
  }, useSyncExternalStore: function(l, t, e) {
    var a = tl, n = ut();
    if (dl) {
      if (e === void 0) throw Error(m(407));
      e = e();
    } else {
      if (e = t(), zl === null) throw Error(m(349));
      (fl & 127) !== 0 || to(a, t, e);
    }
    n.memoizedState = e;
    var u = { value: e, getSnapshot: t };
    return n.queue = u, So(ao.bind(null, a, u, l), [l]), a.flags |= 2048, Da(9, { destroy: void 0 }, eo.bind(null, a, u, e, t), null), e;
  }, useId: function() {
    var l = ut(), t = zl.identifierPrefix;
    if (dl) {
      var e = Yt, a = Bt;
      e = (a & ~(1 << 32 - tt(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = zu++, 0 < e && (t += "H" + e.toString(32)), t += "_";
    } else e = Jm++, t = "_" + t + "r_" + e.toString(32) + "_";
    return l.memoizedState = t;
  }, useHostTransitionStatus: Ec, useFormState: mo, useActionState: mo, useOptimistic: function(l) {
    var t = ut();
    t.memoizedState = t.baseState = l;
    var e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = e, t = pc.bind(null, tl, true, e), e.dispatch = t, [l, t];
  }, useMemoCache: rc, useCacheRefresh: function() {
    return ut().memoizedState = Im.bind(null, tl);
  }, useEffectEvent: function(l) {
    var t = ut(), e = { impl: l };
    return t.memoizedState = e, function() {
      if ((yl & 2) !== 0) throw Error(m(440));
      return e.impl.apply(void 0, arguments);
    };
  } }, zc = { readContext: kl, use: Nu, useCallback: To, useContext: kl, useEffect: gc, useImperativeHandle: zo, useInsertionEffect: xo, useLayoutEffect: Eo, useMemo: No, useReducer: Mu, useRef: go, useState: function() {
    return Mu(kt);
  }, useDebugValue: Sc, useDeferredValue: function(l, t) {
    var e = ql();
    return Mo(e, bl.memoizedState, l, t);
  }, useTransition: function() {
    var l = Mu(kt)[0], t = ql().memoizedState;
    return [typeof l == "boolean" ? l : bn(l), t];
  }, useSyncExternalStore: lo, useId: _o, useHostTransitionStatus: Ec, useFormState: ho, useActionState: ho, useOptimistic: function(l, t) {
    var e = ql();
    return io(e, bl, l, t);
  }, useMemoCache: rc, useCacheRefresh: Oo };
  zc.useEffectEvent = bo;
  var qo = { readContext: kl, use: Nu, useCallback: To, useContext: kl, useEffect: gc, useImperativeHandle: zo, useInsertionEffect: xo, useLayoutEffect: Eo, useMemo: No, useReducer: hc, useRef: go, useState: function() {
    return hc(kt);
  }, useDebugValue: Sc, useDeferredValue: function(l, t) {
    var e = ql();
    return bl === null ? bc(e, l, t) : Mo(e, bl.memoizedState, l, t);
  }, useTransition: function() {
    var l = hc(kt)[0], t = ql().memoizedState;
    return [typeof l == "boolean" ? l : bn(l), t];
  }, useSyncExternalStore: lo, useId: _o, useHostTransitionStatus: Ec, useFormState: yo, useActionState: yo, useOptimistic: function(l, t) {
    var e = ql();
    return bl !== null ? io(e, bl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
  }, useMemoCache: rc, useCacheRefresh: Oo };
  qo.useEffectEvent = bo;
  function Tc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : G({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var Nc = { enqueueSetState: function(l, t, e) {
    l = l._reactInternals;
    var a = xt(), n = he(a);
    n.payload = t, e != null && (n.callback = e), t = ve(l, n, a), t !== null && (mt(t, l, a), vn(t, l, a));
  }, enqueueReplaceState: function(l, t, e) {
    l = l._reactInternals;
    var a = xt(), n = he(a);
    n.tag = 1, n.payload = t, e != null && (n.callback = e), t = ve(l, n, a), t !== null && (mt(t, l, a), vn(t, l, a));
  }, enqueueForceUpdate: function(l, t) {
    l = l._reactInternals;
    var e = xt(), a = he(e);
    a.tag = 2, t != null && (a.callback = t), t = ve(l, a, e), t !== null && (mt(t, l, e), vn(t, l, e));
  } };
  function Bo(l, t, e, a, n, u, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !cn(e, a) || !cn(n, u) : true;
  }
  function Yo(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && Nc.enqueueReplaceState(t, t.state, null);
  }
  function $e(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = G({}, e));
      for (var n in l) e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  function Go(l) {
    cu(l);
  }
  function Xo(l) {
    console.error(l);
  }
  function Lo(l) {
    cu(l);
  }
  function _u(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Qo(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, { componentStack: e.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Mc(l, t, e) {
    return e = he(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      _u(l, t);
    }, e;
  }
  function Zo(l) {
    return l = he(l), l.tag = 3, l;
  }
  function Vo(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      l.payload = function() {
        return n(u);
      }, l.callback = function() {
        Qo(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Qo(t, e, a), typeof n != "function" && (Ee === null ? Ee = /* @__PURE__ */ new Set([this]) : Ee.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, { componentStack: c !== null ? c : "" });
    });
  }
  function lh(l, t, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && Ta(t, e, n, true), e = yt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return Ct === null ? Qu() : e.alternate === null && Hl === 0 && (Hl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === gu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), kc(l, a, n)), false;
          case 22:
            return e.flags |= 65536, a === gu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), kc(l, a, n)), false;
        }
        throw Error(m(435, e.tag));
      }
      return kc(l, a, n), Qu(), false;
    }
    if (dl) return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Ki && (l = Error(m(422), { cause: a }), on(Tt(l, e)))) : (a !== Ki && (t = Error(m(423), { cause: a }), on(Tt(t, e))), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = Tt(a, e), n = Mc(l.stateNode, a, n), ec(l, n), Hl !== 4 && (Hl = 2)), false;
    var u = Error(m(520), { cause: a });
    if (u = Tt(u, e), An === null ? An = [u] : An.push(u), Hl !== 4 && (Hl = 2), t === null) return true;
    a = Tt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = n & -n, e.lanes |= l, l = Mc(e.stateNode, a, l), ec(e, l), false;
        case 1:
          if (t = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ee === null || !Ee.has(u)))) return e.flags |= 65536, n &= -n, e.lanes |= n, n = Zo(n), Vo(n, l, e, a), ec(e, n), false;
      }
      e = e.return;
    } while (e !== null);
    return false;
  }
  var jc = Error(m(461)), Gl = false;
  function Il(l, t, e, a) {
    t.child = l === null ? ws(t, null, e, a) : we(t, l.child, e, a);
  }
  function Ko(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return Ze(t), a = fc(l, t, e, i, u, n), c = sc(), l !== null && !Gl ? (oc(l, t, n), It(l, t, n)) : (dl && c && Zi(t), t.flags |= 1, Il(l, t, a, n), t.child);
  }
  function Jo(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" && !Xi(u) && u.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = u, wo(l, t, u, a, n)) : (l = du(e.type, null, a, t, t.mode, n), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (u = l.child, !Rc(l, n)) {
      var i = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : cn, e(i, a) && l.ref === t.ref) return It(l, t, n);
    }
    return t.flags |= 1, l = Jt(u, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function wo(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (cn(u, a) && l.ref === t.ref) if (Gl = false, t.pendingProps = a = u, Rc(l, n)) (l.flags & 131072) !== 0 && (Gl = true);
      else return t.lanes = l.lanes, It(l, t, n);
    }
    return Cc(l, t, e, a, n);
  }
  function Wo(l, t, e, a) {
    var n = a.children, u = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | e : e, l !== null) {
          for (a = t.child = l.child, n = 0; a !== null; ) n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, t.child = null;
        return $o(l, t, u, e, a);
      }
      if ((e & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && vu(t, u !== null ? u.cachePool : null), u !== null ? Fs(t, u) : nc(), ks(t);
      else return a = t.lanes = 536870912, $o(l, t, u !== null ? u.baseLanes | e : e, e, a);
    } else u !== null ? (vu(t, u.cachePool), Fs(t, u), ge(), t.memoizedState = null) : (l !== null && vu(t, null), nc(), ge());
    return Il(l, t, n, e), t.child;
  }
  function pn(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function $o(l, t, e, a, n) {
    var u = Ii();
    return u = u === null ? null : { parent: Bl._currentValue, pool: u }, t.memoizedState = { baseLanes: e, cachePool: u }, l !== null && vu(t, null), nc(), ks(t), l !== null && Ta(l, t, a, true), t.childLanes = n, null;
  }
  function Ou(l, t) {
    return t = Uu({ mode: t.mode, children: t.children }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Fo(l, t, e) {
    return we(t, l.child, null, e), l = Ou(t, t.pendingProps), l.flags |= 2, gt(t), t.memoizedState = null, l;
  }
  function th(l, t, e) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (dl) {
        if (a.mode === "hidden") return l = Ou(t, a), t.lanes = 536870912, pn(null, l);
        if (ic(t), (l = Nl) ? (l = fr(l, jt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: se !== null ? { id: Bt, overflow: Yt } : null, retryLane: 536870912, hydrationErrors: null }, e = Ds(l), e.return = t, t.child = e, Fl = t, Nl = null)) : l = null, l === null) throw de(t);
        return t.lanes = 536870912, null;
      }
      return Ou(t, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (ic(t), n) if (t.flags & 256) t.flags &= -257, t = Fo(l, t, e);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(m(558));
      else if (Gl || Ta(l, t, e, false), n = (e & l.childLanes) !== 0, Gl || n) {
        if (a = zl, a !== null && (i = Gf(a, e), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Ge(l, i), mt(a, l, i), jc;
        Qu(), t = Fo(l, t, e);
      } else l = u.treeContext, Nl = At(i.nextSibling), Fl = t, dl = true, oe = null, jt = false, l !== null && Rs(t, l), t = Ou(t, a), t.flags |= 4096;
      return t;
    }
    return l = Jt(l.child, { mode: a.mode, children: a.children }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Du(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(m(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function Cc(l, t, e, a, n) {
    return Ze(t), e = fc(l, t, e, a, void 0, n), a = sc(), l !== null && !Gl ? (oc(l, t, n), It(l, t, n)) : (dl && a && Zi(t), t.flags |= 1, Il(l, t, e, n), t.child);
  }
  function ko(l, t, e, a, n, u) {
    return Ze(t), t.updateQueue = null, e = Ps(t, a, e, n), Is(l), a = sc(), l !== null && !Gl ? (oc(l, t, u), It(l, t, u)) : (dl && a && Zi(t), t.flags |= 1, Il(l, t, e, u), t.child);
  }
  function Io(l, t, e, a, n) {
    if (Ze(t), t.stateNode === null) {
      var u = xa, i = e.contextType;
      typeof i == "object" && i !== null && (u = kl(i)), u = new e(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Nc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, lc(t), i = e.contextType, u.context = typeof i == "object" && i !== null ? kl(i) : xa, u.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Tc(t, e, i, a), u.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Nc.enqueueReplaceState(u, u.state, null), gn(t, a, u, n), yn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = true;
    } else if (l === null) {
      u = t.stateNode;
      var c = t.memoizedProps, s = $e(e, c);
      u.props = s;
      var y = u.context, E = e.contextType;
      i = xa, typeof E == "object" && E !== null && (i = kl(E));
      var N = e.getDerivedStateFromProps;
      E = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || y !== i) && Yo(t, u, a, i), me = false;
      var g = t.memoizedState;
      u.state = g, gn(t, a, u, n), yn(), y = t.memoizedState, c || g !== y || me ? (typeof N == "function" && (Tc(t, e, N, a), y = t.memoizedState), (s = me || Bo(t, e, s, a, g, y, i)) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), u.props = a, u.state = y, u.context = i, a = s) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = false);
    } else {
      u = t.stateNode, tc(l, t), i = t.memoizedProps, E = $e(e, i), u.props = E, N = t.pendingProps, g = u.context, y = e.contextType, s = xa, typeof y == "object" && y !== null && (s = kl(y)), c = e.getDerivedStateFromProps, (y = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== N || g !== s) && Yo(t, u, a, s), me = false, g = t.memoizedState, u.state = g, gn(t, a, u, n), yn();
      var b = t.memoizedState;
      i !== N || g !== b || me || l !== null && l.dependencies !== null && mu(l.dependencies) ? (typeof c == "function" && (Tc(t, e, c, a), b = t.memoizedState), (E = me || Bo(t, e, E, a, g, b, s) || l !== null && l.dependencies !== null && mu(l.dependencies)) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, b, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, b, s)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = b), u.props = a, u.state = b, u.context = s, a = E) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), a = false);
    }
    return u = a, Du(l, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, l !== null && a ? (t.child = we(t, l.child, null, n), t.child = we(t, null, e, n)) : Il(l, t, e, n), t.memoizedState = u.state, l = t.child) : l = It(l, t, n), l;
  }
  function Po(l, t, e, a) {
    return Le(), t.flags |= 256, Il(l, t, e, a), t.child;
  }
  var Ac = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function _c(l) {
    return { baseLanes: l, cachePool: Ls() };
  }
  function Oc(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= bt), l;
  }
  function ld(l, t, e) {
    var a = t.pendingProps, n = false, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = l !== null && l.memoizedState === null ? false : (Rl.current & 2) !== 0), i && (n = true, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (dl) {
        if (n ? ye(t) : ge(), (l = Nl) ? (l = fr(l, jt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: se !== null ? { id: Bt, overflow: Yt } : null, retryLane: 536870912, hydrationErrors: null }, e = Ds(l), e.return = t, t.child = e, Fl = t, Nl = null)) : l = null, l === null) throw de(t);
        return hf(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, n ? (ge(), n = t.mode, c = Uu({ mode: "hidden", children: c }, n), a = Xe(a, n, e, null), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = _c(e), a.childLanes = Oc(l, i, e), t.memoizedState = Ac, pn(null, a)) : (ye(t), Dc(t, c));
    }
    var s = l.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (u) t.flags & 256 ? (ye(t), t.flags &= -257, t = Uc(l, t, e)) : t.memoizedState !== null ? (ge(), t.child = l.child, t.flags |= 128, t = null) : (ge(), c = a.fallback, n = t.mode, a = Uu({ mode: "visible", children: a.children }, n), c = Xe(c, n, e, null), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, we(t, l.child, null, e), a = t.child, a.memoizedState = _c(e), a.childLanes = Oc(l, i, e), t.memoizedState = Ac, t = pn(null, a));
      else if (ye(t), hf(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, a = Error(m(419)), a.stack = "", a.digest = i, on({ value: a, source: null, stack: null }), t = Uc(l, t, e);
      } else if (Gl || Ta(l, t, e, false), i = (e & l.childLanes) !== 0, Gl || i) {
        if (i = zl, i !== null && (a = Gf(i, e), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Ge(l, a), mt(i, l, a), jc;
        mf(c) || Qu(), t = Uc(l, t, e);
      } else mf(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, Nl = At(c.nextSibling), Fl = t, dl = true, oe = null, jt = false, l !== null && Rs(t, l), t = Dc(t, a.children), t.flags |= 4096);
      return t;
    }
    return n ? (ge(), c = a.fallback, n = t.mode, s = l.child, y = s.sibling, a = Jt(s, { mode: "hidden", children: a.children }), a.subtreeFlags = s.subtreeFlags & 65011712, y !== null ? c = Jt(y, c) : (c = Xe(c, n, e, null), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, pn(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = _c(e) : (n = c.cachePool, n !== null ? (s = Bl._currentValue, n = n.parent !== s ? { parent: s, pool: s } : n) : n = Ls(), c = { baseLanes: c.baseLanes | e, cachePool: n }), a.memoizedState = c, a.childLanes = Oc(l, i, e), t.memoizedState = Ac, pn(l.child, a)) : (ye(t), e = l.child, l = e.sibling, e = Jt(e, { mode: "visible", children: a.children }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function Dc(l, t) {
    return t = Uu({ mode: "visible", children: t }, l.mode), t.return = l, l.child = t;
  }
  function Uu(l, t) {
    return l = vt(22, l, null, t), l.lanes = 0, l;
  }
  function Uc(l, t, e) {
    return we(t, l.child, null, e), l = Dc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function td(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Wi(l.return, t, e);
  }
  function Hc(l, t, e, a, n, u) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: e, tailMode: n, treeForkCount: u } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = n, i.treeForkCount = u);
  }
  function ed(l, t, e) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = Rl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, U(Rl, i), Il(l, t, a, e), a = dl ? sn : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && td(l, e, t);
      else if (l.tag === 19) td(l, e, t);
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
    switch (n) {
      case "forwards":
        for (e = t.child, n = null; e !== null; ) l = e.alternate, l !== null && Eu(l) === null && (n = e), e = e.sibling;
        e = n, e === null ? (n = t.child, t.child = null) : (n = e.sibling, e.sibling = null), Hc(t, false, n, e, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, n = t.child, t.child = null; n !== null; ) {
          if (l = n.alternate, l !== null && Eu(l) === null) {
            t.child = n;
            break;
          }
          l = n.sibling, n.sibling = e, e = n, n = l;
        }
        Hc(t, true, e, null, u, a);
        break;
      case "together":
        Hc(t, false, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function It(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), xe |= t.lanes, (e & t.childLanes) === 0) if (l !== null) {
      if (Ta(l, t, e, false), (e & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(m(153));
    if (t.child !== null) {
      for (l = t.child, e = Jt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; ) l = l.sibling, e = e.sibling = Jt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Rc(l, t) {
    return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && mu(l)));
  }
  function eh(l, t, e) {
    switch (t.tag) {
      case 3:
        Ll(t, t.stateNode.containerInfo), re(t, Bl, l.memoizedState.cache), Le();
        break;
      case 27:
      case 5:
        Ht(t);
        break;
      case 4:
        Ll(t, t.stateNode.containerInfo);
        break;
      case 10:
        re(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, ic(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (ye(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? ld(l, t, e) : (ye(t), l = It(l, t, e), l !== null ? l.sibling : null);
        ye(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (Ta(l, t, e, false), a = (e & t.childLanes) !== 0), n) {
          if (a) return ed(l, t, e);
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), U(Rl, Rl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Wo(l, t, e, t.pendingProps);
      case 24:
        re(t, Bl, l.memoizedState.cache);
    }
    return It(l, t, e);
  }
  function ad(l, t, e) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) Gl = true;
    else {
      if (!Rc(l, e) && (t.flags & 128) === 0) return Gl = false, eh(l, t, e);
      Gl = (l.flags & 131072) !== 0;
    }
    else Gl = false, dl && (t.flags & 1048576) !== 0 && Hs(t, sn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Ke(t.elementType), t.type = l, typeof l == "function") Xi(l) ? (a = $e(l, a), t.tag = 1, t = Io(null, t, l, a, e)) : (t.tag = 0, t = Cc(null, t, l, a, e));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === R) {
                t.tag = 11, t = Ko(null, t, l, a, e);
                break l;
              } else if (n === Y) {
                t.tag = 14, t = Jo(null, t, l, a, e);
                break l;
              }
            }
            throw t = P(l) || l, Error(m(306, t, ""));
          }
        }
        return t;
      case 0:
        return Cc(l, t, t.type, t.pendingProps, e);
      case 1:
        return a = t.type, n = $e(a, t.pendingProps), Io(l, t, a, n, e);
      case 3:
        l: {
          if (Ll(t, t.stateNode.containerInfo), l === null) throw Error(m(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, tc(l, t), gn(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, re(t, Bl, a), a !== u.cache && $i(t, [Bl], e, true), yn(), a = i.element, u.isDehydrated) if (u = { element: a, isDehydrated: false, cache: i.cache }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            t = Po(l, t, a, e);
            break l;
          } else if (a !== n) {
            n = Tt(Error(m(424)), t), on(n), t = Po(l, t, a, e);
            break l;
          } else for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Nl = At(l.firstChild), Fl = t, dl = true, oe = null, jt = true, e = ws(t, null, a, e), t.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Le(), a === n) {
              t = It(l, t, e);
              break l;
            }
            Il(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Du(l, t), l === null ? (e = hr(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : dl || (e = t.type, l = t.pendingProps, a = $u(el.current).createElement(e), a[$l] = t, a[ct] = l, Pl(a, e, l), Jl(a), t.stateNode = a) : t.memoizedState = hr(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Ht(t), l === null && dl && (a = t.stateNode = dr(t.type, t.pendingProps, el.current), Fl = t, jt = true, n = Nl, Ne(t.type) ? (vf = n, Nl = At(a.firstChild)) : Nl = n), Il(l, t, t.pendingProps.children, e), Du(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && dl && ((n = a = Nl) && (a = Dh(a, t.type, t.pendingProps, jt), a !== null ? (t.stateNode = a, Fl = t, Nl = At(a.firstChild), jt = false, n = true) : n = false), n || de(t)), Ht(t), n = t.type, u = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = u.children, of(n, u) ? a = null : i !== null && of(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = fc(l, t, wm, null, null, e), Bn._currentValue = n), Du(l, t), Il(l, t, a, e), t.child;
      case 6:
        return l === null && dl && ((l = e = Nl) && (e = Uh(e, t.pendingProps, jt), e !== null ? (t.stateNode = e, Fl = t, Nl = null, l = true) : l = false), l || de(t)), null;
      case 13:
        return ld(l, t, e);
      case 4:
        return Ll(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = we(t, null, a, e) : Il(l, t, a, e), t.child;
      case 11:
        return Ko(l, t, t.type, t.pendingProps, e);
      case 7:
        return Il(l, t, t.pendingProps, e), t.child;
      case 8:
        return Il(l, t, t.pendingProps.children, e), t.child;
      case 12:
        return Il(l, t, t.pendingProps.children, e), t.child;
      case 10:
        return a = t.pendingProps, re(t, t.type, a.value), Il(l, t, a.children, e), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, Ze(t), n = kl(n), a = a(n), t.flags |= 1, Il(l, t, a, e), t.child;
      case 14:
        return Jo(l, t, t.type, t.pendingProps, e);
      case 15:
        return wo(l, t, t.type, t.pendingProps, e);
      case 19:
        return ed(l, t, e);
      case 31:
        return th(l, t, e);
      case 22:
        return Wo(l, t, e, t.pendingProps);
      case 24:
        return Ze(t), a = kl(Bl), l === null ? (n = Ii(), n === null && (n = zl, u = Fi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), t.memoizedState = { parent: a, cache: n }, lc(t), re(t, Bl, n)) : ((l.lanes & e) !== 0 && (tc(l, t), gn(t, null, null, e), yn()), n = l.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), re(t, Bl, a)) : (a = u.cache, re(t, Bl, a), a !== n.cache && $i(t, [Bl], e, true))), Il(l, t, t.pendingProps.children, e), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function Pt(l) {
    l.flags |= 4;
  }
  function qc(l, t, e, a, n) {
    if ((t = (l.mode & 32) !== 0) && (t = false), t) {
      if (l.flags |= 16777216, (n & 335544128) === n) if (l.stateNode.complete) l.flags |= 8192;
      else if (_d()) l.flags |= 8192;
      else throw Je = gu, Pi;
    } else l.flags &= -16777217;
  }
  function nd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !br(t)) if (_d()) l.flags |= 8192;
    else throw Je = gu, Pi;
  }
  function Hu(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? $n() : 536870912, l.lanes |= t, qa |= t);
  }
  function zn(l, t) {
    if (!dl) switch (l.tailMode) {
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
    if (t) for (var n = l.child; n !== null; ) e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = l, n = n.sibling;
    else for (n = l.child; n !== null; ) e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function ah(l, t, e) {
    var a = t.pendingProps;
    switch (Vi(t), t.tag) {
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
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), $t(Bl), _l(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (za(t) ? Pt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ji())), Ml(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return l === null ? (Pt(t), u !== null ? (Ml(t), nd(t, u)) : (Ml(t), qc(t, n, null, a, e))) : u ? u !== l.memoizedState ? (Pt(t), Ml(t), nd(t, u)) : (Ml(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Pt(t), Ml(t), qc(t, n, l, a, e)), null;
      case 27:
        if (Ie(t), e = el.current, n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Pt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(m(166));
            return Ml(t), null;
          }
          l = q.current, za(t) ? qs(t) : (l = dr(n, a, e), t.stateNode = l, Pt(t));
        }
        return Ml(t), null;
      case 5:
        if (Ie(t), n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Pt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(m(166));
            return Ml(t), null;
          }
          if (u = q.current, za(t)) qs(t);
          else {
            var i = $u(el.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                    break;
                  case "select":
                    u = typeof a.is == "string" ? i.createElement("select", { is: a.is }) : i.createElement("select"), a.multiple ? u.multiple = true : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            u[$l] = t, u[ct] = a;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
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
            t.stateNode = u;
            l: switch (Pl(u, n, a), n) {
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
            a && Pt(t);
          }
        }
        return Ml(t), qc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Pt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(m(166));
          if (l = el.current, za(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, n = Fl, n !== null) switch (n.tag) {
              case 27:
              case 5:
                a = n.memoizedProps;
            }
            l[$l] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === true || lr(l.nodeValue, e)), l || de(t, true);
          } else l = $u(l).createTextNode(a), l[$l] = t, t.stateNode = l;
        }
        return Ml(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = za(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(m(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(557));
              l[$l] = t;
            } else Le(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ml(t), l = false;
          } else e = Ji(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = true;
          if (!l) return t.flags & 256 ? (gt(t), t) : (gt(t), null);
          if ((t.flags & 128) !== 0) throw Error(m(558));
        }
        return Ml(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = za(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(m(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(m(317));
              n[$l] = t;
            } else Le(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ml(t), n = false;
          } else n = Ji(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = true;
          if (!n) return t.flags & 256 ? (gt(t), t) : (gt(t), null);
        }
        return gt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), Hu(t, t.updateQueue), Ml(t), null);
      case 4:
        return _l(), l === null && nf(t.stateNode.containerInfo), Ml(t), null;
      case 10:
        return $t(t.type), Ml(t), null;
      case 19:
        if (z(Rl), a = t.memoizedState, a === null) return Ml(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null) if (n) zn(a, false);
        else {
          if (Hl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (u = Eu(l), u !== null) {
              for (t.flags |= 128, zn(a, false), l = u.updateQueue, t.updateQueue = l, Hu(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; ) Os(e, l), e = e.sibling;
              return U(Rl, Rl.current & 1 | 2), dl && wt(t, a.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          a.tail !== null && lt() > Gu && (t.flags |= 128, n = true, zn(a, false), t.lanes = 4194304);
        }
        else {
          if (!n) if (l = Eu(u), l !== null) {
            if (t.flags |= 128, n = true, l = l.updateQueue, t.updateQueue = l, Hu(t, l), zn(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !dl) return Ml(t), null;
          } else 2 * lt() - a.renderingStartTime > Gu && e !== 536870912 && (t.flags |= 128, n = true, zn(a, false), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (l = a.last, l !== null ? l.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = lt(), l.sibling = null, e = Rl.current, U(Rl, n ? e & 1 | 2 : e & 1), dl && wt(t, a.treeForkCount), l) : (Ml(t), null);
      case 22:
      case 23:
        return gt(t), uc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (Ml(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ml(t), e = t.updateQueue, e !== null && Hu(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && z(Ve), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), $t(Bl), Ml(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function nh(l, t) {
    switch (Vi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return $t(Bl), _l(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ie(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (gt(t), t.alternate === null) throw Error(m(340));
          Le();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (gt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(m(340));
          Le();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return z(Rl), null;
      case 4:
        return _l(), null;
      case 10:
        return $t(t.type), null;
      case 22:
      case 23:
        return gt(t), uc(), l !== null && z(Ve), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return $t(Bl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ud(l, t) {
    switch (Vi(t), t.tag) {
      case 3:
        $t(Bl), _l();
        break;
      case 26:
      case 27:
      case 5:
        Ie(t);
        break;
      case 4:
        _l();
        break;
      case 31:
        t.memoizedState !== null && gt(t);
        break;
      case 13:
        gt(t);
        break;
      case 19:
        z(Rl);
        break;
      case 10:
        $t(t.type);
        break;
      case 22:
      case 23:
        gt(t), uc(), l !== null && z(Ve);
        break;
      case 24:
        $t(Bl);
    }
  }
  function Tn(l, t) {
    try {
      var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var u = e.create, i = e.inst;
            a = u(), i.destroy = a;
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (c) {
      Sl(t, t.return, c);
    }
  }
  function Se(l, t, e) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = t;
              var s = e, y = c;
              try {
                y();
              } catch (E) {
                Sl(n, s, E);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (E) {
      Sl(t, t.return, E);
    }
  }
  function id(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        $s(t, e);
      } catch (a) {
        Sl(l, l.return, a);
      }
    }
  }
  function cd(l, t, e) {
    e.props = $e(l.type, l.memoizedProps), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      Sl(l, t, a);
    }
  }
  function Nn(l, t) {
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
    } catch (n) {
      Sl(l, t, n);
    }
  }
  function Gt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null) if (typeof a == "function") try {
      a();
    } catch (n) {
      Sl(l, t, n);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof e == "function") try {
      e(null);
    } catch (n) {
      Sl(l, t, n);
    }
    else e.current = null;
  }
  function fd(l) {
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
    } catch (n) {
      Sl(l, l.return, n);
    }
  }
  function Bc(l, t, e) {
    try {
      var a = l.stateNode;
      Mh(a, l.type, e, t), a[ct] = t;
    } catch (n) {
      Sl(l, l.return, n);
    }
  }
  function sd(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Ne(l.type) || l.tag === 4;
  }
  function Yc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || sd(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Ne(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Gc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Vt));
    else if (a !== 4 && (a === 27 && Ne(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null)) for (Gc(l, t, e), l = l.sibling; l !== null; ) Gc(l, t, e), l = l.sibling;
  }
  function Ru(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && Ne(l.type) && (e = l.stateNode), l = l.child, l !== null)) for (Ru(l, t, e), l = l.sibling; l !== null; ) Ru(l, t, e), l = l.sibling;
  }
  function od(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      Pl(t, a, e), t[$l] = l, t[ct] = e;
    } catch (u) {
      Sl(l, l.return, u);
    }
  }
  var le = false, Xl = false, Xc = false, dd = typeof WeakSet == "function" ? WeakSet : Set, wl = null;
  function uh(l, t) {
    if (l = l.containerInfo, ff = ei, l = ps(l), Ui(l)) {
      if ("selectionStart" in l) var e = { start: l.selectionStart, end: l.selectionEnd };
      else l: {
        e = (e = l.ownerDocument) && e.defaultView || window;
        var a = e.getSelection && e.getSelection();
        if (a && a.rangeCount !== 0) {
          e = a.anchorNode;
          var n = a.anchorOffset, u = a.focusNode;
          a = a.focusOffset;
          try {
            e.nodeType, u.nodeType;
          } catch {
            e = null;
            break l;
          }
          var i = 0, c = -1, s = -1, y = 0, E = 0, N = l, g = null;
          t: for (; ; ) {
            for (var b; N !== e || n !== 0 && N.nodeType !== 3 || (c = i + n), N !== u || a !== 0 && N.nodeType !== 3 || (s = i + a), N.nodeType === 3 && (i += N.nodeValue.length), (b = N.firstChild) !== null; ) g = N, N = b;
            for (; ; ) {
              if (N === l) break t;
              if (g === e && ++y === n && (c = i), g === u && ++E === a && (s = i), (b = N.nextSibling) !== null) break;
              N = g, g = N.parentNode;
            }
            N = b;
          }
          e = c === -1 || s === -1 ? null : { start: c, end: s };
        } else e = null;
      }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (sf = { focusedElem: l, selectionRange: e }, ei = false, wl = t; wl !== null; ) if (t = wl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, wl = l;
    else for (; wl !== null; ) {
      switch (t = wl, u = t.alternate, l = t.flags, t.tag) {
        case 0:
          if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (e = 0; e < l.length; e++) n = l[e], n.ref.impl = n.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && u !== null) {
            l = void 0, e = t, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
            try {
              var B = $e(e.type, n);
              l = a.getSnapshotBeforeUpdate(B, u), a.__reactInternalSnapshotBeforeUpdate = l;
            } catch (J) {
              Sl(e, e.return, J);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) rf(l);
            else if (e === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                rf(l);
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
          if ((l & 1024) !== 0) throw Error(m(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, wl = l;
        break;
      }
      wl = t.return;
    }
  }
  function rd(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ee(l, e), a & 4 && Tn(5, e);
        break;
      case 1:
        if (ee(l, e), a & 4) if (l = e.stateNode, t === null) try {
          l.componentDidMount();
        } catch (i) {
          Sl(e, e.return, i);
        }
        else {
          var n = $e(e.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            Sl(e, e.return, i);
          }
        }
        a & 64 && id(e), a & 512 && Nn(e, e.return);
        break;
      case 3:
        if (ee(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null) switch (e.child.tag) {
            case 27:
            case 5:
              t = e.child.stateNode;
              break;
            case 1:
              t = e.child.stateNode;
          }
          try {
            $s(l, t);
          } catch (i) {
            Sl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && od(e);
      case 26:
      case 5:
        ee(l, e), t === null && a & 4 && fd(e), a & 512 && Nn(e, e.return);
        break;
      case 12:
        ee(l, e);
        break;
      case 31:
        ee(l, e), a & 4 && vd(l, e);
        break;
      case 13:
        ee(l, e), a & 4 && yd(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = hh.bind(null, e), Hh(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || le, !a) {
          t = t !== null && t.memoizedState !== null || Xl, n = le;
          var u = Xl;
          le = a, (Xl = t) && !u ? ae(l, e, (e.subtreeFlags & 8772) !== 0) : ee(l, e), le = n, Xl = u;
        }
        break;
      case 30:
        break;
      default:
        ee(l, e);
    }
  }
  function md(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, md(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && yi(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Cl = null, st = false;
  function te(l, t, e) {
    for (e = e.child; e !== null; ) hd(l, t, e), e = e.sibling;
  }
  function hd(l, t, e) {
    if (at && typeof at.onCommitFiberUnmount == "function") try {
      at.onCommitFiberUnmount(Qt, e);
    } catch {
    }
    switch (e.tag) {
      case 26:
        Xl || Gt(e, t), te(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Xl || Gt(e, t);
        var a = Cl, n = st;
        Ne(e.type) && (Cl = e.stateNode, st = false), te(l, t, e), Hn(e.stateNode), Cl = a, st = n;
        break;
      case 5:
        Xl || Gt(e, t);
      case 6:
        if (a = Cl, n = st, Cl = null, te(l, t, e), Cl = a, st = n, Cl !== null) if (st) try {
          (Cl.nodeType === 9 ? Cl.body : Cl.nodeName === "HTML" ? Cl.ownerDocument.body : Cl).removeChild(e.stateNode);
        } catch (u) {
          Sl(e, t, u);
        }
        else try {
          Cl.removeChild(e.stateNode);
        } catch (u) {
          Sl(e, t, u);
        }
        break;
      case 18:
        Cl !== null && (st ? (l = Cl, ir(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), Va(l)) : ir(Cl, e.stateNode));
        break;
      case 4:
        a = Cl, n = st, Cl = e.stateNode.containerInfo, st = true, te(l, t, e), Cl = a, st = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Se(2, e, t), Xl || Se(4, e, t), te(l, t, e);
        break;
      case 1:
        Xl || (Gt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && cd(e, t, a)), te(l, t, e);
        break;
      case 21:
        te(l, t, e);
        break;
      case 22:
        Xl = (a = Xl) || e.memoizedState !== null, te(l, t, e), Xl = a;
        break;
      default:
        te(l, t, e);
    }
  }
  function vd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Va(l);
      } catch (e) {
        Sl(t, t.return, e);
      }
    }
  }
  function yd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      Va(l);
    } catch (e) {
      Sl(t, t.return, e);
    }
  }
  function ih(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new dd()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new dd()), t;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function qu(l, t) {
    var e = ih(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var n = vh.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function ot(l, t) {
    var e = t.deletions;
    if (e !== null) for (var a = 0; a < e.length; a++) {
      var n = e[a], u = l, i = t, c = i;
      l: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (Ne(c.type)) {
              Cl = c.stateNode, st = false;
              break l;
            }
            break;
          case 5:
            Cl = c.stateNode, st = false;
            break l;
          case 3:
          case 4:
            Cl = c.stateNode.containerInfo, st = true;
            break l;
        }
        c = c.return;
      }
      if (Cl === null) throw Error(m(160));
      hd(u, i, n), Cl = null, st = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) gd(t, l), t = t.sibling;
  }
  var Dt = null;
  function gd(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ot(t, l), dt(l), a & 4 && (Se(3, l, l.return), Tn(3, l), Se(5, l, l.return));
        break;
      case 1:
        ot(t, l), dt(l), a & 512 && (Xl || e === null || Gt(e, e.return)), a & 64 && le && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var n = Dt;
        if (ot(t, l), dt(l), a & 512 && (Xl || e === null || Gt(e, e.return)), a & 4) {
          var u = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null) if (a === null) if (l.stateNode === null) {
            l: {
              a = l.type, e = l.memoizedProps, n = n.ownerDocument || n;
              t: switch (a) {
                case "title":
                  u = n.getElementsByTagName("title")[0], (!u || u[ka] || u[$l] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Pl(u, a, e), u[$l] = l, Jl(u), a = u;
                  break l;
                case "link":
                  var i = gr("link", "href", n).get(a + (e.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  u = n.createElement(a), Pl(u, a, e), n.head.appendChild(u);
                  break;
                case "meta":
                  if (i = gr("meta", "content", n).get(a + (e.content || ""))) {
                    for (c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  u = n.createElement(a), Pl(u, a, e), n.head.appendChild(u);
                  break;
                default:
                  throw Error(m(468, a));
              }
              u[$l] = l, Jl(u), a = u;
            }
            l.stateNode = a;
          } else Sr(n, l.type, l.stateNode);
          else l.stateNode = yr(n, a, l.memoizedProps);
          else u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? Sr(n, l.type, l.stateNode) : yr(n, a, l.memoizedProps)) : a === null && l.stateNode !== null && Bc(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        ot(t, l), dt(l), a & 512 && (Xl || e === null || Gt(e, e.return)), e !== null && a & 4 && Bc(l, l.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (ot(t, l), dt(l), a & 512 && (Xl || e === null || Gt(e, e.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            ma(n, "");
          } catch (B) {
            Sl(l, l.return, B);
          }
        }
        a & 4 && l.stateNode != null && (n = l.memoizedProps, Bc(l, n, e !== null ? e.memoizedProps : n)), a & 1024 && (Xc = true);
        break;
      case 6:
        if (ot(t, l), dt(l), a & 4) {
          if (l.stateNode === null) throw Error(m(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (B) {
            Sl(l, l.return, B);
          }
        }
        break;
      case 3:
        if (Iu = null, n = Dt, Dt = Fu(t.containerInfo), ot(t, l), Dt = n, dt(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
          Va(t.containerInfo);
        } catch (B) {
          Sl(l, l.return, B);
        }
        Xc && (Xc = false, Sd(l));
        break;
      case 4:
        a = Dt, Dt = Fu(l.stateNode.containerInfo), ot(t, l), dt(l), Dt = a;
        break;
      case 12:
        ot(t, l), dt(l);
        break;
      case 31:
        ot(t, l), dt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, qu(l, a)));
        break;
      case 13:
        ot(t, l), dt(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Yu = lt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, qu(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null, y = le, E = Xl;
        if (le = y || n, Xl = E || s, ot(t, l), Xl = E, le = y, dt(l), a & 8192) l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (e === null || s || le || Xl || Fe(l)), e = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (e === null) {
              s = e = t;
              try {
                if (u = s.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = s.stateNode;
                  var N = s.memoizedProps.style, g = N != null && N.hasOwnProperty("display") ? N.display : null;
                  c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                }
              } catch (B) {
                Sl(s, s.return, B);
              }
            }
          } else if (t.tag === 6) {
            if (e === null) {
              s = t;
              try {
                s.stateNode.nodeValue = n ? "" : s.memoizedProps;
              } catch (B) {
                Sl(s, s.return, B);
              }
            }
          } else if (t.tag === 18) {
            if (e === null) {
              s = t;
              try {
                var b = s.stateNode;
                n ? cr(b, true) : cr(s.stateNode, false);
              } catch (B) {
                Sl(s, s.return, B);
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
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, qu(l, e))));
        break;
      case 19:
        ot(t, l), dt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, qu(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ot(t, l), dt(l);
    }
  }
  function dt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (sd(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(m(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode, u = Yc(l);
            Ru(l, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (ma(i, ""), e.flags &= -33);
            var c = Yc(l);
            Ru(l, c, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo, y = Yc(l);
            Gc(l, y, s);
            break;
          default:
            throw Error(m(161));
        }
      } catch (E) {
        Sl(l, l.return, E);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Sd(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      Sd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) rd(l, t.alternate, t), t = t.sibling;
  }
  function Fe(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Se(4, t, t.return), Fe(t);
          break;
        case 1:
          Gt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && cd(t, t.return, e), Fe(t);
          break;
        case 27:
          Hn(t.stateNode);
        case 26:
        case 5:
          Gt(t, t.return), Fe(t);
          break;
        case 22:
          t.memoizedState === null && Fe(t);
          break;
        case 30:
          Fe(t);
          break;
        default:
          Fe(t);
      }
      l = l.sibling;
    }
  }
  function ae(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = l, u = t, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ae(n, u, e), Tn(4, u);
          break;
        case 1:
          if (ae(n, u, e), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount();
          } catch (y) {
            Sl(a, a.return, y);
          }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++) Ws(s[n], c);
            } catch (y) {
              Sl(a, a.return, y);
            }
          }
          e && i & 64 && id(u), Nn(u, u.return);
          break;
        case 27:
          od(u);
        case 26:
        case 5:
          ae(n, u, e), e && a === null && i & 4 && fd(u), Nn(u, u.return);
          break;
        case 12:
          ae(n, u, e);
          break;
        case 31:
          ae(n, u, e), e && i & 4 && vd(n, u);
          break;
        case 13:
          ae(n, u, e), e && i & 4 && yd(n, u);
          break;
        case 22:
          u.memoizedState === null && ae(n, u, e), Nn(u, u.return);
          break;
        case 30:
          break;
        default:
          ae(n, u, e);
      }
      t = t.sibling;
    }
  }
  function Lc(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && dn(e));
  }
  function Qc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && dn(l));
  }
  function Ut(l, t, e, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) bd(l, t, e, a), t = t.sibling;
  }
  function bd(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ut(l, t, e, a), n & 2048 && Tn(9, t);
        break;
      case 1:
        Ut(l, t, e, a);
        break;
      case 3:
        Ut(l, t, e, a), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && dn(l)));
        break;
      case 12:
        if (n & 2048) {
          Ut(l, t, e, a), l = t.stateNode;
          try {
            var u = t.memoizedProps, i = u.id, c = u.onPostCommit;
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
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ut(l, t, e, a) : Mn(l, t) : u._visibility & 2 ? Ut(l, t, e, a) : (u._visibility |= 2, Ua(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Lc(i, t);
        break;
      case 24:
        Ut(l, t, e, a), n & 2048 && Qc(t.alternate, t);
        break;
      default:
        Ut(l, t, e, a);
    }
  }
  function Ua(l, t, e, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var u = l, i = t, c = e, s = a, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ua(u, i, c, s, n), Tn(8, i);
          break;
        case 23:
          break;
        case 22:
          var E = i.stateNode;
          i.memoizedState !== null ? E._visibility & 2 ? Ua(u, i, c, s, n) : Mn(u, i) : (E._visibility |= 2, Ua(u, i, c, s, n)), n && y & 2048 && Lc(i.alternate, i);
          break;
        case 24:
          Ua(u, i, c, s, n), n && y & 2048 && Qc(i.alternate, i);
          break;
        default:
          Ua(u, i, c, s, n);
      }
      t = t.sibling;
    }
  }
  function Mn(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var e = l, a = t, n = a.flags;
      switch (a.tag) {
        case 22:
          Mn(e, a), n & 2048 && Lc(a.alternate, a);
          break;
        case 24:
          Mn(e, a), n & 2048 && Qc(a.alternate, a);
          break;
        default:
          Mn(e, a);
      }
      t = t.sibling;
    }
  }
  var jn = 8192;
  function Ha(l, t, e) {
    if (l.subtreeFlags & jn) for (l = l.child; l !== null; ) xd(l, t, e), l = l.sibling;
  }
  function xd(l, t, e) {
    switch (l.tag) {
      case 26:
        Ha(l, t, e), l.flags & jn && l.memoizedState !== null && Jh(e, Dt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        Ha(l, t, e);
        break;
      case 3:
      case 4:
        var a = Dt;
        Dt = Fu(l.stateNode.containerInfo), Ha(l, t, e), Dt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = jn, jn = 16777216, Ha(l, t, e), jn = a) : Ha(l, t, e));
        break;
      default:
        Ha(l, t, e);
    }
  }
  function Ed(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Cn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var e = 0; e < t.length; e++) {
        var a = t[e];
        wl = a, zd(a, l);
      }
      Ed(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) pd(l), l = l.sibling;
  }
  function pd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Cn(l), l.flags & 2048 && Se(9, l, l.return);
        break;
      case 3:
        Cn(l);
        break;
      case 12:
        Cn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Bu(l)) : Cn(l);
        break;
      default:
        Cn(l);
    }
  }
  function Bu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var e = 0; e < t.length; e++) {
        var a = t[e];
        wl = a, zd(a, l);
      }
      Ed(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Se(8, t, t.return), Bu(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Bu(t));
          break;
        default:
          Bu(t);
      }
      l = l.sibling;
    }
  }
  function zd(l, t) {
    for (; wl !== null; ) {
      var e = wl;
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
          dn(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, wl = a;
      else l: for (e = l; wl !== null; ) {
        a = wl;
        var n = a.sibling, u = a.return;
        if (md(a), a === e) {
          wl = null;
          break l;
        }
        if (n !== null) {
          n.return = u, wl = n;
          break l;
        }
        wl = u;
      }
    }
  }
  var ch = { getCacheForType: function(l) {
    var t = kl(Bl), e = t.data.get(l);
    return e === void 0 && (e = l(), t.data.set(l, e)), e;
  }, cacheSignal: function() {
    return kl(Bl).controller.signal;
  } }, fh = typeof WeakMap == "function" ? WeakMap : Map, yl = 0, zl = null, il = null, fl = 0, gl = 0, St = null, be = false, Ra = false, Zc = false, ne = 0, Hl = 0, xe = 0, ke = 0, Vc = 0, bt = 0, qa = 0, An = null, rt = null, Kc = false, Yu = 0, Td = 0, Gu = 1 / 0, Xu = null, Ee = null, Ql = 0, pe = null, Ba = null, ue = 0, Jc = 0, wc = null, Nd = null, _n = 0, Wc = null;
  function xt() {
    return (yl & 2) !== 0 && fl !== 0 ? fl & -fl : S.T !== null ? lf() : Xf();
  }
  function Md() {
    if (bt === 0) if ((fl & 536870912) === 0 || dl) {
      var l = ua;
      ua <<= 1, (ua & 3932160) === 0 && (ua = 262144), bt = l;
    } else bt = 536870912;
    return l = yt.current, l !== null && (l.flags |= 32), bt;
  }
  function mt(l, t, e) {
    (l === zl && (gl === 2 || gl === 9) || l.cancelPendingCommit !== null) && (Ya(l, 0), ze(l, fl, bt, false)), qt(l, e), ((yl & 2) === 0 || l !== zl) && (l === zl && ((yl & 2) === 0 && (ke |= e), Hl === 4 && ze(l, fl, bt, false)), Xt(l));
  }
  function jd(l, t, e) {
    if ((yl & 6) !== 0) throw Error(m(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || He(l, t), n = a ? dh(l, t) : Fc(l, t, true), u = a;
    do {
      if (n === 0) {
        Ra && !a && ze(l, t, 0, false);
        break;
      } else {
        if (e = l.current.alternate, u && !sh(e)) {
          n = Fc(l, t, false), u = false;
          continue;
        }
        if (n === 2) {
          if (u = t, l.errorRecoveryDisabledLanes & u) var i = 0;
          else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              n = An;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (Ya(c, i).flags |= 256), i = Fc(c, i, false), i !== 2) {
                if (Zc && !s) {
                  c.errorRecoveryDisabledLanes |= u, ke |= u, n = 4;
                  break l;
                }
                u = rt, rt = n, u !== null && (rt === null ? rt = u : rt.push.apply(rt, u));
              }
              n = i;
            }
            if (u = false, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ya(l, 0), ze(l, t, 0, true);
          break;
        }
        l: {
          switch (a = l, u = n, u) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ze(a, t, bt, !be);
              break l;
            case 2:
              rt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && (n = Yu + 300 - lt(), 10 < n)) {
            if (ze(a, t, bt, !be), ia(a, 0, true) !== 0) break l;
            ue = t, a.timeoutHandle = nr(Cd.bind(null, a, e, rt, Xu, Kc, t, bt, ke, qa, be, u, "Throttled", -0, 0), n);
            break l;
          }
          Cd(a, e, rt, Xu, Kc, t, bt, ke, qa, be, u, null, -0, 0);
        }
      }
      break;
    } while (true);
    Xt(l);
  }
  function Cd(l, t, e, a, n, u, i, c, s, y, E, N, g, b) {
    if (l.timeoutHandle = -1, N = t.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
      N = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Vt }, xd(t, u, N);
      var B = (u & 62914560) === u ? Yu - lt() : (u & 4194048) === u ? Td - lt() : 0;
      if (B = wh(N, B), B !== null) {
        ue = u, l.cancelPendingCommit = B(qd.bind(null, l, t, u, e, a, n, i, c, s, E, N, null, g, b)), ze(l, u, i, !y);
        return;
      }
    }
    qd(l, t, u, e, a, n, i, c, s);
  }
  function sh(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null))) for (var a = 0; a < e.length; a++) {
        var n = e[a], u = n.getSnapshot;
        n = n.value;
        try {
          if (!ht(u(), n)) return false;
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
  function ze(l, t, e, a) {
    t &= ~Vc, t &= ~ke, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - tt(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    e !== 0 && Fn(l, e, t);
  }
  function Lu() {
    return (yl & 6) === 0 ? (On(0), false) : true;
  }
  function $c() {
    if (il !== null) {
      if (gl === 0) var l = il.return;
      else l = il, Wt = Qe = null, dc(l), Ca = null, mn = 0, l = il;
      for (; l !== null; ) ud(l.alternate, l), l = l.return;
      il = null;
    }
  }
  function Ya(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Ah(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), ue = 0, $c(), zl = l, il = e = Jt(l.current, null), fl = t, gl = 0, St = null, be = false, Ra = He(l, t), Zc = false, qa = bt = Vc = ke = xe = Hl = 0, rt = An = null, Kc = false, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0) for (l = l.entanglements, a &= t; 0 < a; ) {
      var n = 31 - tt(a), u = 1 << n;
      t |= l[n], a &= ~u;
    }
    return ne = t, fu(), e;
  }
  function Ad(l, t) {
    tl = null, S.H = En, t === ja || t === yu ? (t = Vs(), gl = 3) : t === Pi ? (t = Vs(), gl = 4) : gl = t === jc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, St = t, il === null && (Hl = 1, _u(l, Tt(t, l.current)));
  }
  function _d() {
    var l = yt.current;
    return l === null ? true : (fl & 4194048) === fl ? Ct === null : (fl & 62914560) === fl || (fl & 536870912) !== 0 ? l === Ct : false;
  }
  function Od() {
    var l = S.H;
    return S.H = En, l === null ? En : l;
  }
  function Dd() {
    var l = S.A;
    return S.A = ch, l;
  }
  function Qu() {
    Hl = 4, be || (fl & 4194048) !== fl && yt.current !== null || (Ra = true), (xe & 134217727) === 0 && (ke & 134217727) === 0 || zl === null || ze(zl, fl, bt, false);
  }
  function Fc(l, t, e) {
    var a = yl;
    yl |= 2;
    var n = Od(), u = Dd();
    (zl !== l || fl !== t) && (Xu = null, Ya(l, t)), t = false;
    var i = Hl;
    l: do
      try {
        if (gl !== 0 && il !== null) {
          var c = il, s = St;
          switch (gl) {
            case 8:
              $c(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              yt.current === null && (t = true);
              var y = gl;
              if (gl = 0, St = null, Ga(l, c, s, y), e && Ra) {
                i = 0;
                break l;
              }
              break;
            default:
              y = gl, gl = 0, St = null, Ga(l, c, s, y);
          }
        }
        oh(), i = Hl;
        break;
      } catch (E) {
        Ad(l, E);
      }
    while (true);
    return t && l.shellSuspendCounter++, Wt = Qe = null, yl = a, S.H = n, S.A = u, il === null && (zl = null, fl = 0, fu()), i;
  }
  function oh() {
    for (; il !== null; ) Ud(il);
  }
  function dh(l, t) {
    var e = yl;
    yl |= 2;
    var a = Od(), n = Dd();
    zl !== l || fl !== t ? (Xu = null, Gu = lt() + 500, Ya(l, t)) : Ra = He(l, t);
    l: do
      try {
        if (gl !== 0 && il !== null) {
          t = il;
          var u = St;
          t: switch (gl) {
            case 1:
              gl = 0, St = null, Ga(l, t, u, 1);
              break;
            case 2:
            case 9:
              if (Qs(u)) {
                gl = 0, St = null, Hd(t);
                break;
              }
              t = function() {
                gl !== 2 && gl !== 9 || zl !== l || (gl = 7), Xt(l);
              }, u.then(t, t);
              break l;
            case 3:
              gl = 7;
              break l;
            case 4:
              gl = 5;
              break l;
            case 7:
              Qs(u) ? (gl = 0, St = null, Hd(t)) : (gl = 0, St = null, Ga(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (il.tag) {
                case 26:
                  i = il.memoizedState;
                case 5:
                case 27:
                  var c = il;
                  if (i ? br(i) : c.stateNode.complete) {
                    gl = 0, St = null;
                    var s = c.sibling;
                    if (s !== null) il = s;
                    else {
                      var y = c.return;
                      y !== null ? (il = y, Zu(y)) : il = null;
                    }
                    break t;
                  }
              }
              gl = 0, St = null, Ga(l, t, u, 5);
              break;
            case 6:
              gl = 0, St = null, Ga(l, t, u, 6);
              break;
            case 8:
              $c(), Hl = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        rh();
        break;
      } catch (E) {
        Ad(l, E);
      }
    while (true);
    return Wt = Qe = null, S.H = a, S.A = n, yl = e, il !== null ? 0 : (zl = null, fl = 0, fu(), Hl);
  }
  function rh() {
    for (; il !== null && !di(); ) Ud(il);
  }
  function Ud(l) {
    var t = ad(l.alternate, l, ne);
    l.memoizedProps = l.pendingProps, t === null ? Zu(l) : il = t;
  }
  function Hd(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ko(e, t, t.pendingProps, t.type, void 0, fl);
        break;
      case 11:
        t = ko(e, t, t.pendingProps, t.type.render, t.ref, fl);
        break;
      case 5:
        dc(t);
      default:
        ud(e, t), t = il = Os(t, ne), t = ad(e, t, ne);
    }
    l.memoizedProps = l.pendingProps, t === null ? Zu(l) : il = t;
  }
  function Ga(l, t, e, a) {
    Wt = Qe = null, dc(t), Ca = null, mn = 0;
    var n = t.return;
    try {
      if (lh(l, n, t, e, fl)) {
        Hl = 1, _u(l, Tt(e, l.current)), il = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw il = n, u;
      Hl = 1, _u(l, Tt(e, l.current)), il = null;
      return;
    }
    t.flags & 32768 ? (dl || a === 1 ? l = true : Ra || (fl & 536870912) !== 0 ? l = false : (be = l = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = yt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Rd(t, l)) : Zu(t);
  }
  function Zu(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Rd(t, be);
        return;
      }
      l = t.return;
      var e = ah(t.alternate, t, ne);
      if (e !== null) {
        il = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        il = t;
        return;
      }
      il = t = l;
    } while (t !== null);
    Hl === 0 && (Hl = 5);
  }
  function Rd(l, t) {
    do {
      var e = nh(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, il = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        il = l;
        return;
      }
      il = l = e;
    } while (l !== null);
    Hl = 6, il = null;
  }
  function qd(l, t, e, a, n, u, i, c, s) {
    l.cancelPendingCommit = null;
    do
      Vu();
    while (Ql !== 0);
    if ((yl & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (u = t.lanes | t.childLanes, u |= Yi, Kl(l, e, u, i, c, s), l === zl && (il = zl = null, fl = 0), Ba = t, pe = l, ue = e, Jc = u, wc = n, Nd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, yh(De, function() {
        return Ld(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, n = M.p, M.p = 2, i = yl, yl |= 4;
        try {
          uh(l, t, e);
        } finally {
          yl = i, M.p = n, S.T = a;
        }
      }
      Ql = 1, Bd(), Yd(), Gd();
    }
  }
  function Bd() {
    if (Ql === 1) {
      Ql = 0;
      var l = pe, t = Ba, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = S.T, S.T = null;
        var a = M.p;
        M.p = 2;
        var n = yl;
        yl |= 4;
        try {
          gd(t, l);
          var u = sf, i = ps(l.containerInfo), c = u.focusedElem, s = u.selectionRange;
          if (i !== c && c && c.ownerDocument && Es(c.ownerDocument.documentElement, c)) {
            if (s !== null && Ui(c)) {
              var y = s.start, E = s.end;
              if (E === void 0 && (E = y), "selectionStart" in c) c.selectionStart = y, c.selectionEnd = Math.min(E, c.value.length);
              else {
                var N = c.ownerDocument || document, g = N && N.defaultView || window;
                if (g.getSelection) {
                  var b = g.getSelection(), B = c.textContent.length, J = Math.min(s.start, B), El = s.end === void 0 ? J : Math.min(s.end, B);
                  !b.extend && J > El && (i = El, El = J, J = i);
                  var h = xs(c, J), d = xs(c, El);
                  if (h && d && (b.rangeCount !== 1 || b.anchorNode !== h.node || b.anchorOffset !== h.offset || b.focusNode !== d.node || b.focusOffset !== d.offset)) {
                    var v = N.createRange();
                    v.setStart(h.node, h.offset), b.removeAllRanges(), J > El ? (b.addRange(v), b.extend(d.node, d.offset)) : (v.setEnd(d.node, d.offset), b.addRange(v));
                  }
                }
              }
            }
            for (N = [], b = c; b = b.parentNode; ) b.nodeType === 1 && N.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < N.length; c++) {
              var p = N[c];
              p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
            }
          }
          ei = !!ff, sf = ff = null;
        } finally {
          yl = n, M.p = a, S.T = e;
        }
      }
      l.current = t, Ql = 2;
    }
  }
  function Yd() {
    if (Ql === 2) {
      Ql = 0;
      var l = pe, t = Ba, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = S.T, S.T = null;
        var a = M.p;
        M.p = 2;
        var n = yl;
        yl |= 4;
        try {
          rd(l, t.alternate, t);
        } finally {
          yl = n, M.p = a, S.T = e;
        }
      }
      Ql = 3;
    }
  }
  function Gd() {
    if (Ql === 4 || Ql === 3) {
      Ql = 0, Vn();
      var l = pe, t = Ba, e = ue, a = Nd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ql = 5 : (Ql = 0, Ba = pe = null, Xd(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (Ee = null), hi(e), t = t.stateNode, at && typeof at.onCommitFiberRoot == "function") try {
        at.onCommitFiberRoot(Qt, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        t = S.T, n = M.p, M.p = 2, S.T = null;
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, { componentStack: c.stack });
          }
        } finally {
          S.T = t, M.p = n;
        }
      }
      (ue & 3) !== 0 && Vu(), Xt(l), n = l.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? l === Wc ? _n++ : (_n = 0, Wc = l) : _n = 0, On(0);
    }
  }
  function Xd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, dn(t)));
  }
  function Vu() {
    return Bd(), Yd(), Gd(), Ld();
  }
  function Ld() {
    if (Ql !== 5) return false;
    var l = pe, t = Jc;
    Jc = 0;
    var e = hi(ue), a = S.T, n = M.p;
    try {
      M.p = 32 > e ? 32 : e, S.T = null, e = wc, wc = null;
      var u = pe, i = ue;
      if (Ql = 0, Ba = pe = null, ue = 0, (yl & 6) !== 0) throw Error(m(331));
      var c = yl;
      if (yl |= 4, pd(u.current), bd(u, u.current, i, e), yl = c, On(0, false), at && typeof at.onPostCommitFiberRoot == "function") try {
        at.onPostCommitFiberRoot(Qt, u);
      } catch {
      }
      return true;
    } finally {
      M.p = n, S.T = a, Xd(l, t);
    }
  }
  function Qd(l, t, e) {
    t = Tt(e, t), t = Mc(l.stateNode, t, 2), l = ve(l, t, 2), l !== null && (qt(l, 2), Xt(l));
  }
  function Sl(l, t, e) {
    if (l.tag === 3) Qd(l, l, e);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Qd(t, l, e);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ee === null || !Ee.has(a))) {
          l = Tt(e, l), e = Zo(2), a = ve(t, e, 2), a !== null && (Vo(e, a, t, l), qt(a, 2), Xt(a));
          break;
        }
      }
      t = t.return;
    }
  }
  function kc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new fh();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(e) || (Zc = true, n.add(e), l = mh.bind(null, l, t, e), t.then(l, l));
  }
  function mh(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, zl === l && (fl & e) === e && (Hl === 4 || Hl === 3 && (fl & 62914560) === fl && 300 > lt() - Yu ? (yl & 2) === 0 && Ya(l, 0) : Vc |= e, qa === fl && (qa = 0)), Xt(l);
  }
  function Zd(l, t) {
    t === 0 && (t = $n()), l = Ge(l, t), l !== null && (qt(l, t), Xt(l));
  }
  function hh(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), Zd(l, e);
  }
  function vh(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, n = l.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    a !== null && a.delete(t), Zd(l, e);
  }
  function yh(l, t) {
    return Wa(l, t);
  }
  var Ku = null, Xa = null, Ic = false, Ju = false, Pc = false, Te = 0;
  function Xt(l) {
    l !== Xa && l.next === null && (Xa === null ? Ku = Xa = l : Xa = Xa.next = l), Ju = true, Ic || (Ic = true, Sh());
  }
  function On(l, t) {
    if (!Pc && Ju) {
      Pc = true;
      do
        for (var e = false, a = Ku; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              u = (1 << 31 - tt(42 | l) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = true, wd(a, u));
          } else u = fl, u = ia(a, a === zl ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || He(a, u) || (e = true, wd(a, u));
          a = a.next;
        }
      while (e);
      Pc = false;
    }
  }
  function gh() {
    Vd();
  }
  function Vd() {
    Ju = Ic = false;
    var l = 0;
    Te !== 0 && Ch() && (l = Te);
    for (var t = lt(), e = null, a = Ku; a !== null; ) {
      var n = a.next, u = Kd(a, t);
      u === 0 ? (a.next = null, e === null ? Ku = n : e.next = n, n === null && (Xa = e)) : (e = a, (l !== 0 || (u & 3) !== 0) && (Ju = true)), a = n;
    }
    Ql !== 0 && Ql !== 5 || On(l), Te !== 0 && (Te = 0);
  }
  function Kd(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - tt(u), c = 1 << i, s = n[i];
      s === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = Bf(c, t)) : s <= t && (l.expiredLanes |= c), u &= ~c;
    }
    if (t = zl, e = fl, e = ia(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (gl === 2 || gl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && ta(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || He(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && ta(a), hi(e)) {
        case 2:
        case 8:
          e = $a;
          break;
        case 32:
          e = De;
          break;
        case 268435456:
          e = ea;
          break;
        default:
          e = De;
      }
      return a = Jd.bind(null, l), e = Wa(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && ta(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Jd(l, t) {
    if (Ql !== 0 && Ql !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (Vu() && l.callbackNode !== e) return null;
    var a = fl;
    return a = ia(l, l === zl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (jd(l, a, t), Kd(l, lt()), l.callbackNode != null && l.callbackNode === e ? Jd.bind(null, l) : null);
  }
  function wd(l, t) {
    if (Vu()) return null;
    jd(l, t, true);
  }
  function Sh() {
    _h(function() {
      (yl & 6) !== 0 ? Wa(Wl, gh) : Vd();
    });
  }
  function lf() {
    if (Te === 0) {
      var l = Na;
      l === 0 && (l = na, na <<= 1, (na & 261888) === 0 && (na = 256)), Te = l;
    }
    return Te;
  }
  function Wd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : lu("" + l);
  }
  function $d(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function bh(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = Wd((n[ct] || null).action), i = a.submitter;
      i && (t = (t = i[ct] || null) ? Wd(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
      var c = new nu("action", "action", null, a, n);
      l.push({ event: c, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (Te !== 0) {
            var s = i ? $d(n, i) : new FormData(n);
            xc(e, { pending: true, data: s, method: n.method, action: u }, null, s);
          }
        } else typeof u == "function" && (c.preventDefault(), s = i ? $d(n, i) : new FormData(n), xc(e, { pending: true, data: s, method: n.method, action: u }, u, s));
      }, currentTarget: n }] });
    }
  }
  for (var tf = 0; tf < Bi.length; tf++) {
    var ef = Bi[tf], xh = ef.toLowerCase(), Eh = ef[0].toUpperCase() + ef.slice(1);
    Ot(xh, "on" + Eh);
  }
  Ot(Ns, "onAnimationEnd"), Ot(Ms, "onAnimationIteration"), Ot(js, "onAnimationStart"), Ot("dblclick", "onDoubleClick"), Ot("focusin", "onFocus"), Ot("focusout", "onBlur"), Ot(Bm, "onTransitionRun"), Ot(Ym, "onTransitionStart"), Ot(Gm, "onTransitionCancel"), Ot(Cs, "onTransitionEnd"), da("onMouseEnter", ["mouseout", "mouseover"]), da("onMouseLeave", ["mouseout", "mouseover"]), da("onPointerEnter", ["pointerout", "pointerover"]), da("onPointerLeave", ["pointerout", "pointerover"]), Re("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Re("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Re("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Re("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Re("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Re("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Dn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ph = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dn));
  function Fd(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t) for (var i = a.length - 1; 0 <= i; i--) {
          var c = a[i], s = c.instance, y = c.currentTarget;
          if (c = c.listener, s !== u && n.isPropagationStopped()) break l;
          u = c, n.currentTarget = y;
          try {
            u(n);
          } catch (E) {
            cu(E);
          }
          n.currentTarget = null, u = s;
        }
        else for (i = 0; i < a.length; i++) {
          if (c = a[i], s = c.instance, y = c.currentTarget, c = c.listener, s !== u && n.isPropagationStopped()) break l;
          u = c, n.currentTarget = y;
          try {
            u(n);
          } catch (E) {
            cu(E);
          }
          n.currentTarget = null, u = s;
        }
      }
    }
  }
  function cl(l, t) {
    var e = t[vi];
    e === void 0 && (e = t[vi] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (kd(t, l, 2, false), e.add(a));
  }
  function af(l, t, e) {
    var a = 0;
    t && (a |= 4), kd(e, l, a, t);
  }
  var wu = "_reactListening" + Math.random().toString(36).slice(2);
  function nf(l) {
    if (!l[wu]) {
      l[wu] = true, Zf.forEach(function(e) {
        e !== "selectionchange" && (ph.has(e) || af(e, false, l), af(e, true, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[wu] || (t[wu] = true, af("selectionchange", false, t));
    }
  }
  function kd(l, t, e, a) {
    switch (Mr(t)) {
      case 2:
        var n = Fh;
        break;
      case 8:
        n = kh;
        break;
      default:
        n = xf;
    }
    e = n.bind(null, t, e, l), n = void 0, !Ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = true), a ? n !== void 0 ? l.addEventListener(t, e, { capture: true, passive: n }) : l.addEventListener(t, e, true) : n !== void 0 ? l.addEventListener(t, e, { passive: n }) : l.addEventListener(t, e, false);
  }
  function uf(l, t, e, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (; ; ) {
      if (a === null) return;
      var i = a.tag;
      if (i === 3 || i === 4) {
        var c = a.stateNode.containerInfo;
        if (c === n) break;
        if (i === 4) for (i = a.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && i.stateNode.containerInfo === n) return;
          i = i.return;
        }
        for (; c !== null; ) {
          if (i = fa(c), i === null) return;
          if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
            a = u = i;
            continue l;
          }
          c = c.parentNode;
        }
      }
      a = a.return;
    }
    ts(function() {
      var y = u, E = pi(e), N = [];
      l: {
        var g = As.get(l);
        if (g !== void 0) {
          var b = nu, B = l;
          switch (l) {
            case "keypress":
              if (eu(e) === 0) break l;
            case "keydown":
            case "keyup":
              b = vm;
              break;
            case "focusin":
              B = "focus", b = Ci;
              break;
            case "focusout":
              B = "blur", b = Ci;
              break;
            case "beforeblur":
            case "afterblur":
              b = Ci;
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
              b = ns;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = am;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Sm;
              break;
            case Ns:
            case Ms:
            case js:
              b = im;
              break;
            case Cs:
              b = xm;
              break;
            case "scroll":
            case "scrollend":
              b = tm;
              break;
            case "wheel":
              b = pm;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = fm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = is;
              break;
            case "toggle":
            case "beforetoggle":
              b = Tm;
          }
          var J = (t & 4) !== 0, El = !J && (l === "scroll" || l === "scrollend"), h = J ? g !== null ? g + "Capture" : null : g;
          J = [];
          for (var d = y, v; d !== null; ) {
            var p = d;
            if (v = p.stateNode, p = p.tag, p !== 5 && p !== 26 && p !== 27 || v === null || h === null || (p = Pa(d, h), p != null && J.push(Un(d, p, v))), El) break;
            d = d.return;
          }
          0 < J.length && (g = new b(g, B, null, e, E), N.push({ event: g, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", b = l === "mouseout" || l === "pointerout", g && e !== Ei && (B = e.relatedTarget || e.fromElement) && (fa(B) || B[ca])) break l;
          if ((b || g) && (g = E.window === E ? E : (g = E.ownerDocument) ? g.defaultView || g.parentWindow : window, b ? (B = e.relatedTarget || e.toElement, b = y, B = B ? fa(B) : null, B !== null && (El = X(B), J = B.tag, B !== El || J !== 5 && J !== 27 && J !== 6) && (B = null)) : (b = null, B = y), b !== B)) {
            if (J = ns, p = "onMouseLeave", h = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (J = is, p = "onPointerLeave", h = "onPointerEnter", d = "pointer"), El = b == null ? g : Ia(b), v = B == null ? g : Ia(B), g = new J(p, d + "leave", b, e, E), g.target = El, g.relatedTarget = v, p = null, fa(E) === y && (J = new J(h, d + "enter", B, e, E), J.target = v, J.relatedTarget = El, p = J), El = p, b && B) t: {
              for (J = zh, h = b, d = B, v = 0, p = h; p; p = J(p)) v++;
              p = 0;
              for (var V = d; V; V = J(V)) p++;
              for (; 0 < v - p; ) h = J(h), v--;
              for (; 0 < p - v; ) d = J(d), p--;
              for (; v--; ) {
                if (h === d || d !== null && h === d.alternate) {
                  J = h;
                  break t;
                }
                h = J(h), d = J(d);
              }
              J = null;
            }
            else J = null;
            b !== null && Id(N, g, b, J, false), B !== null && El !== null && Id(N, El, B, J, true);
          }
        }
        l: {
          if (g = y ? Ia(y) : window, b = g.nodeName && g.nodeName.toLowerCase(), b === "select" || b === "input" && g.type === "file") var hl = hs;
          else if (rs(g)) if (vs) hl = Hm;
          else {
            hl = Dm;
            var L = Om;
          }
          else b = g.nodeName, !b || b.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? y && xi(y.elementType) && (hl = hs) : hl = Um;
          if (hl && (hl = hl(l, y))) {
            ms(N, hl, e, E);
            break l;
          }
          L && L(l, g, y), l === "focusout" && y && g.type === "number" && y.memoizedProps.value != null && bi(g, "number", g.value);
        }
        switch (L = y ? Ia(y) : window, l) {
          case "focusin":
            (rs(L) || L.contentEditable === "true") && (ga = L, Hi = y, fn = null);
            break;
          case "focusout":
            fn = Hi = ga = null;
            break;
          case "mousedown":
            Ri = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ri = false, zs(N, e, E);
            break;
          case "selectionchange":
            if (qm) break;
          case "keydown":
          case "keyup":
            zs(N, e, E);
        }
        var al;
        if (_i) l: {
          switch (l) {
            case "compositionstart":
              var sl = "onCompositionStart";
              break l;
            case "compositionend":
              sl = "onCompositionEnd";
              break l;
            case "compositionupdate":
              sl = "onCompositionUpdate";
              break l;
          }
          sl = void 0;
        }
        else ya ? os(l, e) && (sl = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (sl = "onCompositionStart");
        sl && (cs && e.locale !== "ko" && (ya || sl !== "onCompositionStart" ? sl === "onCompositionEnd" && ya && (al = es()) : (fe = E, Ni = "value" in fe ? fe.value : fe.textContent, ya = true)), L = Wu(y, sl), 0 < L.length && (sl = new us(sl, l, null, e, E), N.push({ event: sl, listeners: L }), al ? sl.data = al : (al = ds(e), al !== null && (sl.data = al)))), (al = Mm ? jm(l, e) : Cm(l, e)) && (sl = Wu(y, "onBeforeInput"), 0 < sl.length && (L = new us("onBeforeInput", "beforeinput", null, e, E), N.push({ event: L, listeners: sl }), L.data = al)), bh(N, l, y, e, E);
      }
      Fd(N, t);
    });
  }
  function Un(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function Wu(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var n = l, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Pa(l, e), n != null && a.unshift(Un(l, n, u)), n = Pa(l, t), n != null && a.push(Un(l, n, u))), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function zh(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Id(l, t, e, a, n) {
    for (var u = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e, s = c.alternate, y = c.stateNode;
      if (c = c.tag, s !== null && s === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (s = y, n ? (y = Pa(e, u), y != null && i.unshift(Un(e, y, s))) : n || (y = Pa(e, u), y != null && i.push(Un(e, y, s)))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Th = /\r\n?/g, Nh = /\u0000|\uFFFD/g;
  function Pd(l) {
    return (typeof l == "string" ? l : "" + l).replace(Th, `
`).replace(Nh, "");
  }
  function lr(l, t) {
    return t = Pd(t), Pd(l) === t;
  }
  function xl(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ma(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ma(l, "" + a);
        break;
      case "className":
        In(l, "class", a);
        break;
      case "tabIndex":
        In(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        In(l, e, a);
        break;
      case "style":
        Pf(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          In(l, "data", a);
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
        a = lu("" + a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (e === "formAction" ? (t !== "input" && xl(l, t, "name", n.name, n, null), xl(l, t, "formEncType", n.formEncType, n, null), xl(l, t, "formMethod", n.formMethod, n, null), xl(l, t, "formTarget", n.formTarget, n, null)) : (xl(l, t, "encType", n.encType, n, null), xl(l, t, "method", n.method, n, null), xl(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = lu("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Vt);
        break;
      case "onScroll":
        a != null && cl("scroll", l);
        break;
      case "onScrollEnd":
        a != null && cl("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(m(60));
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
        e = lu("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
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
        cl("beforetoggle", l), cl("toggle", l), kn(l, "popover", a);
        break;
      case "xlinkActuate":
        Zt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Zt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Zt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Zt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Zt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Zt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Zt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Zt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Zt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        kn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Pr.get(e) || e, kn(l, e, a));
    }
  }
  function cf(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        Pf(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(m(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ma(l, a) : (typeof a == "number" || typeof a == "bigint") && ma(l, "" + a);
        break;
      case "onScroll":
        a != null && cl("scroll", l);
        break;
      case "onScrollEnd":
        a != null && cl("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Vt);
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
        if (!Vf.hasOwnProperty(e)) l: {
          if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), t = e.slice(2, n ? e.length - 7 : void 0), u = l[ct] || null, u = u != null ? u[e] : null, typeof u == "function" && l.removeEventListener(t, u, n), typeof a == "function")) {
            typeof u != "function" && u !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, n);
            break l;
          }
          e in l ? l[e] = a : a === true ? l.setAttribute(e, "") : kn(l, e, a);
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
        cl("error", l), cl("load", l);
        var a = false, n = false, u;
        for (u in e) if (e.hasOwnProperty(u)) {
          var i = e[u];
          if (i != null) switch (u) {
            case "src":
              a = true;
              break;
            case "srcSet":
              n = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(m(137, t));
            default:
              xl(l, t, u, i, e, null);
          }
        }
        n && xl(l, t, "srcSet", e.srcSet, e, null), a && xl(l, t, "src", e.src, e, null);
        return;
      case "input":
        cl("invalid", l);
        var c = u = i = n = null, s = null, y = null;
        for (a in e) if (e.hasOwnProperty(a)) {
          var E = e[a];
          if (E != null) switch (a) {
            case "name":
              n = E;
              break;
            case "type":
              i = E;
              break;
            case "checked":
              s = E;
              break;
            case "defaultChecked":
              y = E;
              break;
            case "value":
              u = E;
              break;
            case "defaultValue":
              c = E;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (E != null) throw Error(m(137, t));
              break;
            default:
              xl(l, t, a, E, e, null);
          }
        }
        $f(l, u, c, s, y, i, n, false);
        return;
      case "select":
        cl("invalid", l), a = i = u = null;
        for (n in e) if (e.hasOwnProperty(n) && (c = e[n], c != null)) switch (n) {
          case "value":
            u = c;
            break;
          case "defaultValue":
            i = c;
            break;
          case "multiple":
            a = c;
          default:
            xl(l, t, n, c, e, null);
        }
        t = u, e = i, l.multiple = !!a, t != null ? ra(l, !!a, t, false) : e != null && ra(l, !!a, e, true);
        return;
      case "textarea":
        cl("invalid", l), u = n = a = null;
        for (i in e) if (e.hasOwnProperty(i) && (c = e[i], c != null)) switch (i) {
          case "value":
            a = c;
            break;
          case "defaultValue":
            n = c;
            break;
          case "children":
            u = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(m(91));
            break;
          default:
            xl(l, t, i, c, e, null);
        }
        kf(l, a, n, u);
        return;
      case "option":
        for (s in e) e.hasOwnProperty(s) && (a = e[s], a != null) && (s === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : xl(l, t, s, a, e, null));
        return;
      case "dialog":
        cl("beforetoggle", l), cl("toggle", l), cl("cancel", l), cl("close", l);
        break;
      case "iframe":
      case "object":
        cl("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Dn.length; a++) cl(Dn[a], l);
        break;
      case "image":
        cl("error", l), cl("load", l);
        break;
      case "details":
        cl("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        cl("error", l), cl("load", l);
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
            throw Error(m(137, t));
          default:
            xl(l, t, y, a, e, null);
        }
        return;
      default:
        if (xi(t)) {
          for (E in e) e.hasOwnProperty(E) && (a = e[E], a !== void 0 && cf(l, t, E, a, e, void 0));
          return;
        }
    }
    for (c in e) e.hasOwnProperty(c) && (a = e[c], a != null && xl(l, t, c, a, e, null));
  }
  function Mh(l, t, e, a) {
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
        var n = null, u = null, i = null, c = null, s = null, y = null, E = null;
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
              u = b;
              break;
            case "name":
              n = b;
              break;
            case "checked":
              y = b;
              break;
            case "defaultChecked":
              E = b;
              break;
            case "value":
              i = b;
              break;
            case "defaultValue":
              c = b;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(m(137, t));
              break;
            default:
              b !== N && xl(l, t, g, b, a, N);
          }
        }
        Si(l, i, c, s, y, E, u, n);
        return;
      case "select":
        b = i = c = g = null;
        for (u in e) if (s = e[u], e.hasOwnProperty(u) && s != null) switch (u) {
          case "value":
            break;
          case "multiple":
            b = s;
          default:
            a.hasOwnProperty(u) || xl(l, t, u, null, a, s);
        }
        for (n in a) if (u = a[n], s = e[n], a.hasOwnProperty(n) && (u != null || s != null)) switch (n) {
          case "value":
            g = u;
            break;
          case "defaultValue":
            c = u;
            break;
          case "multiple":
            i = u;
          default:
            u !== s && xl(l, t, n, u, a, s);
        }
        t = c, e = i, a = b, g != null ? ra(l, !!e, g, false) : !!a != !!e && (t != null ? ra(l, !!e, t, true) : ra(l, !!e, e ? [] : "", false));
        return;
      case "textarea":
        b = g = null;
        for (c in e) if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            xl(l, t, c, null, a, n);
        }
        for (i in a) if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
          case "value":
            g = n;
            break;
          case "defaultValue":
            b = n;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n != null) throw Error(m(91));
            break;
          default:
            n !== u && xl(l, t, i, n, a, u);
        }
        Ff(l, g, b);
        return;
      case "option":
        for (var B in e) g = e[B], e.hasOwnProperty(B) && g != null && !a.hasOwnProperty(B) && (B === "selected" ? l.selected = false : xl(l, t, B, null, a, g));
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
        for (var J in e) g = e[J], e.hasOwnProperty(J) && g != null && !a.hasOwnProperty(J) && xl(l, t, J, null, a, g);
        for (y in a) if (g = a[y], b = e[y], a.hasOwnProperty(y) && g !== b && (g != null || b != null)) switch (y) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (g != null) throw Error(m(137, t));
            break;
          default:
            xl(l, t, y, g, a, b);
        }
        return;
      default:
        if (xi(t)) {
          for (var El in e) g = e[El], e.hasOwnProperty(El) && g !== void 0 && !a.hasOwnProperty(El) && cf(l, t, El, void 0, a, g);
          for (E in a) g = a[E], b = e[E], !a.hasOwnProperty(E) || g === b || g === void 0 && b === void 0 || cf(l, t, E, g, a, b);
          return;
        }
    }
    for (var h in e) g = e[h], e.hasOwnProperty(h) && g != null && !a.hasOwnProperty(h) && xl(l, t, h, null, a, g);
    for (N in a) g = a[N], b = e[N], !a.hasOwnProperty(N) || g === b || g == null && b == null || xl(l, t, N, g, a, b);
  }
  function tr(l) {
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
  function jh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && tr(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a], y = s.startTime;
            if (y > c) break;
            var E = s.transferSize, N = s.initiatorType;
            E && tr(N) && (s = s.responseEnd, i += E * (s < c ? 1 : (c - y) / (s - y)));
          }
          if (--a, t += 8 * (u + i) / (n.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var ff = null, sf = null;
  function $u(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function er(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ar(l, t) {
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
  function of(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var df = null;
  function Ch() {
    var l = window.event;
    return l && l.type === "popstate" ? l === df ? false : (df = l, true) : (df = null, false);
  }
  var nr = typeof setTimeout == "function" ? setTimeout : void 0, Ah = typeof clearTimeout == "function" ? clearTimeout : void 0, ur = typeof Promise == "function" ? Promise : void 0, _h = typeof queueMicrotask == "function" ? queueMicrotask : typeof ur < "u" ? function(l) {
    return ur.resolve(null).then(l).catch(Oh);
  } : nr;
  function Oh(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Ne(l) {
    return l === "head";
  }
  function ir(l, t) {
    var e = t, a = 0;
    do {
      var n = e.nextSibling;
      if (l.removeChild(e), n && n.nodeType === 8) if (e = n.data, e === "/$" || e === "/&") {
        if (a === 0) {
          l.removeChild(n), Va(t);
          return;
        }
        a--;
      } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
      else if (e === "html") Hn(l.ownerDocument.documentElement);
      else if (e === "head") {
        e = l.ownerDocument.head, Hn(e);
        for (var u = e.firstChild; u; ) {
          var i = u.nextSibling, c = u.nodeName;
          u[ka] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u), u = i;
        }
      } else e === "body" && Hn(l.ownerDocument.body);
      e = n;
    } while (e);
    Va(t);
  }
  function cr(l, t) {
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
  function rf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rf(e), yi(e);
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
  function Dh(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[ka]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (u = l.getAttribute("rel"), u === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (u !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (u = l.getAttribute("src"), (u !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u) return l;
      } else return l;
      if (l = At(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Uh(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = At(l.nextSibling), l === null)) return null;
    return l;
  }
  function fr(l, t) {
    for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = At(l.nextSibling), l === null)) return null;
    return l;
  }
  function mf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function hf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Hh(l, t) {
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
  function At(l) {
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
  var vf = null;
  function sr(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return At(l.nextSibling);
          t--;
        } else e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function or(l) {
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
  function dr(l, t, e) {
    switch (t = $u(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(m(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(m(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function Hn(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    yi(l);
  }
  var _t = /* @__PURE__ */ new Map(), rr = /* @__PURE__ */ new Set();
  function Fu(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ie = M.d;
  M.d = { f: Rh, r: qh, D: Bh, C: Yh, L: Gh, m: Xh, X: Qh, S: Lh, M: Zh };
  function Rh() {
    var l = ie.f(), t = Lu();
    return l || t;
  }
  function qh(l) {
    var t = sa(l);
    t !== null && t.tag === 5 && t.type === "form" ? Ao(t) : ie.r(l);
  }
  var La = typeof document > "u" ? null : document;
  function mr(l, t, e) {
    var a = La;
    if (a && typeof t == "string" && t) {
      var n = pt(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), rr.has(n) || (rr.add(n), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), Pl(t, "link", l), Jl(t), a.head.appendChild(t)));
    }
  }
  function Bh(l) {
    ie.D(l), mr("dns-prefetch", l, null);
  }
  function Yh(l, t) {
    ie.C(l, t), mr("preconnect", l, t);
  }
  function Gh(l, t, e) {
    ie.L(l, t, e);
    var a = La;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + pt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + pt(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + pt(e.imageSizes) + '"]')) : n += '[href="' + pt(l) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = Qa(l);
          break;
        case "script":
          u = Za(l);
      }
      _t.has(u) || (l = G({ rel: "preload", href: t === "image" && e && e.imageSrcSet ? void 0 : l, as: t }, e), _t.set(u, l), a.querySelector(n) !== null || t === "style" && a.querySelector(Rn(u)) || t === "script" && a.querySelector(qn(u)) || (t = a.createElement("link"), Pl(t, "link", l), Jl(t), a.head.appendChild(t)));
    }
  }
  function Xh(l, t) {
    ie.m(l, t);
    var e = La;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + pt(a) + '"][href="' + pt(l) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Za(l);
      }
      if (!_t.has(u) && (l = G({ rel: "modulepreload", href: l }, t), _t.set(u, l), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(qn(u))) return;
        }
        a = e.createElement("link"), Pl(a, "link", l), Jl(a), e.head.appendChild(a);
      }
    }
  }
  function Lh(l, t, e) {
    ie.S(l, t, e);
    var a = La;
    if (a && l) {
      var n = oa(a).hoistableStyles, u = Qa(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(Rn(u))) c.loading = 5;
        else {
          l = G({ rel: "stylesheet", href: l, "data-precedence": t }, e), (e = _t.get(u)) && yf(l, e);
          var s = i = a.createElement("link");
          Jl(s), Pl(s, "link", l), s._p = new Promise(function(y, E) {
            s.onload = y, s.onerror = E;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, ku(i, t, a);
        }
        i = { type: "stylesheet", instance: i, count: 1, state: c }, n.set(u, i);
      }
    }
  }
  function Qh(l, t) {
    ie.X(l, t);
    var e = La;
    if (e && l) {
      var a = oa(e).hoistableScripts, n = Za(l), u = a.get(n);
      u || (u = e.querySelector(qn(n)), u || (l = G({ src: l, async: true }, t), (t = _t.get(n)) && gf(l, t), u = e.createElement("script"), Jl(u), Pl(u, "link", l), e.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, a.set(n, u));
    }
  }
  function Zh(l, t) {
    ie.M(l, t);
    var e = La;
    if (e && l) {
      var a = oa(e).hoistableScripts, n = Za(l), u = a.get(n);
      u || (u = e.querySelector(qn(n)), u || (l = G({ src: l, async: true, type: "module" }, t), (t = _t.get(n)) && gf(l, t), u = e.createElement("script"), Jl(u), Pl(u, "link", l), e.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, a.set(n, u));
    }
  }
  function hr(l, t, e, a) {
    var n = (n = el.current) ? Fu(n) : null;
    if (!n) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Qa(e.href), e = oa(n).hoistableStyles, a = e.get(t), a || (a = { type: "style", instance: null, count: 0, state: null }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Qa(e.href);
          var u = oa(n).hoistableStyles, i = u.get(l);
          if (i || (n = n.ownerDocument || n, i = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, u.set(l, i), (u = n.querySelector(Rn(l))) && !u._p && (i.instance = u, i.state.loading = 5), _t.has(l) || (e = { rel: "preload", as: "style", href: e.href, crossOrigin: e.crossOrigin, integrity: e.integrity, media: e.media, hrefLang: e.hrefLang, referrerPolicy: e.referrerPolicy }, _t.set(l, e), u || Vh(n, l, e, i.state))), t && a === null) throw Error(m(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(m(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Za(e), e = oa(n).hoistableScripts, a = e.get(t), a || (a = { type: "script", instance: null, count: 0, state: null }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, l));
    }
  }
  function Qa(l) {
    return 'href="' + pt(l) + '"';
  }
  function Rn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function vr(l) {
    return G({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Vh(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Pl(t, "link", e), Jl(t), l.head.appendChild(t));
  }
  function Za(l) {
    return '[src="' + pt(l) + '"]';
  }
  function qn(l) {
    return "script[async]" + l;
  }
  function yr(l, t, e) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = l.querySelector('style[data-href~="' + pt(e.href) + '"]');
        if (a) return t.instance = a, Jl(a), a;
        var n = G({}, e, { "data-href": e.href, "data-precedence": e.precedence, href: null, precedence: null });
        return a = (l.ownerDocument || l).createElement("style"), Jl(a), Pl(a, "style", n), ku(a, e.precedence, l), t.instance = a;
      case "stylesheet":
        n = Qa(e.href);
        var u = l.querySelector(Rn(n));
        if (u) return t.state.loading |= 4, t.instance = u, Jl(u), u;
        a = vr(e), (n = _t.get(n)) && yf(a, n), u = (l.ownerDocument || l).createElement("link"), Jl(u);
        var i = u;
        return i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Pl(u, "link", a), t.state.loading |= 4, ku(u, e.precedence, l), t.instance = u;
      case "script":
        return u = Za(e.src), (n = l.querySelector(qn(u))) ? (t.instance = n, Jl(n), n) : (a = e, (n = _t.get(u)) && (a = G({}, e), gf(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), Jl(n), Pl(n, "link", a), l.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(m(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, ku(a, e.precedence, l));
    return t.instance;
  }
  function ku(l, t, e) {
    for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(l, u.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function yf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function gf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Iu = null;
  function gr(l, t, e) {
    if (Iu === null) {
      var a = /* @__PURE__ */ new Map(), n = Iu = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else n = Iu, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[ka] || u[$l] || l === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Sr(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null);
  }
  function Kh(l, t, e) {
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
  function br(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Jh(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = Qa(a.href), u = t.querySelector(Rn(n));
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Pu.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = u, Jl(u);
          return;
        }
        u = t.ownerDocument || t, a = vr(a), (n = _t.get(n)) && yf(a, n), u = u.createElement("link"), Jl(u);
        var i = u;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Pl(u, "link", a), e.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Pu.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var Sf = 0;
  function wh(l, t) {
    return l.stylesheets && l.count === 0 && ti(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && ti(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Sf === 0 && (Sf = 62500 * jh());
      var n = setTimeout(function() {
        if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && ti(l, l.stylesheets), l.unsuspend)) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, (l.imgBytes > Sf ? 50 : 800) + t);
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Pu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ti(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var li = null;
  function ti(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, li = /* @__PURE__ */ new Map(), t.forEach(Wh, l), li = null, Pu.call(l));
  }
  function Wh(l, t) {
    if (!(t.state.loading & 4)) {
      var e = li.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), li.set(l, e);
        for (var n = l.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      n = t.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = Pu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4;
    }
  }
  var Bn = { $$typeof: x, Provider: null, Consumer: null, _currentValue: _, _currentValue2: _, _threadCount: 0 };
  function $h(l, t, e, a, n, u, i, c, s) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fa(0), this.hiddenUpdates = Fa(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function xr(l, t, e, a, n, u, i, c, s, y, E, N) {
    return l = new $h(l, t, e, i, s, y, E, N, c), t = 1, u === true && (t |= 24), u = vt(3, null, null, t), l.current = u, u.stateNode = l, t = Fi(), t.refCount++, l.pooledCache = t, t.refCount++, u.memoizedState = { element: a, isDehydrated: e, cache: t }, lc(u), l;
  }
  function Er(l) {
    return l ? (l = xa, l) : xa;
  }
  function pr(l, t, e, a, n, u) {
    n = Er(n), a.context === null ? a.context = n : a.pendingContext = n, a = he(t), a.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = ve(l, a, t), e !== null && (mt(e, l, t), vn(e, l, t));
  }
  function zr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function bf(l, t) {
    zr(l, t), (l = l.alternate) && zr(l, t);
  }
  function Tr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ge(l, 67108864);
      t !== null && mt(t, l, 67108864), bf(l, 67108864);
    }
  }
  function Nr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = xt();
      t = mi(t);
      var e = Ge(l, t);
      e !== null && mt(e, l, t), bf(l, t);
    }
  }
  var ei = true;
  function Fh(l, t, e, a) {
    var n = S.T;
    S.T = null;
    var u = M.p;
    try {
      M.p = 2, xf(l, t, e, a);
    } finally {
      M.p = u, S.T = n;
    }
  }
  function kh(l, t, e, a) {
    var n = S.T;
    S.T = null;
    var u = M.p;
    try {
      M.p = 8, xf(l, t, e, a);
    } finally {
      M.p = u, S.T = n;
    }
  }
  function xf(l, t, e, a) {
    if (ei) {
      var n = Ef(a);
      if (n === null) uf(l, t, a, ai, e), jr(l, a);
      else if (Ph(n, l, t, e, a)) a.stopPropagation();
      else if (jr(l, a), t & 4 && -1 < Ih.indexOf(l)) {
        for (; n !== null; ) {
          var u = sa(n);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var i = nt(u.pendingLanes);
                if (i !== 0) {
                  var c = u;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var s = 1 << 31 - tt(i);
                    c.entanglements[1] |= s, i &= ~s;
                  }
                  Xt(u), (yl & 6) === 0 && (Gu = lt() + 500, On(0));
                }
              }
              break;
            case 31:
            case 13:
              c = Ge(u, 2), c !== null && mt(c, u, 2), Lu(), bf(u, 2);
          }
          if (u = Ef(a), u === null && uf(l, t, a, ai, e), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else uf(l, t, a, null, e);
    }
  }
  function Ef(l) {
    return l = pi(l), pf(l);
  }
  var ai = null;
  function pf(l) {
    if (ai = null, l = fa(l), l !== null) {
      var t = X(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = D(t), l !== null) return l;
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
    return ai = l, null;
  }
  function Mr(l) {
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
        switch (Kn()) {
          case Wl:
            return 2;
          case $a:
            return 8;
          case De:
          case Jn:
            return 32;
          case ea:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var zf = false, Me = null, je = null, Ce = null, Yn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), Ae = [], Ih = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function jr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Me = null;
        break;
      case "dragenter":
      case "dragleave":
        je = null;
        break;
      case "mouseover":
      case "mouseout":
        Ce = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gn.delete(t.pointerId);
    }
  }
  function Xn(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u ? (l = { blockedOn: t, domEventName: e, eventSystemFlags: a, nativeEvent: u, targetContainers: [n] }, t !== null && (t = sa(t), t !== null && Tr(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function Ph(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return Me = Xn(Me, l, t, e, a, n), true;
      case "dragenter":
        return je = Xn(je, l, t, e, a, n), true;
      case "mouseover":
        return Ce = Xn(Ce, l, t, e, a, n), true;
      case "pointerover":
        var u = n.pointerId;
        return Yn.set(u, Xn(Yn.get(u) || null, l, t, e, a, n)), true;
      case "gotpointercapture":
        return u = n.pointerId, Gn.set(u, Xn(Gn.get(u) || null, l, t, e, a, n)), true;
    }
    return false;
  }
  function Cr(l) {
    var t = fa(l.target);
    if (t !== null) {
      var e = X(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = D(e), t !== null) {
            l.blockedOn = t, Lf(l.priority, function() {
              Nr(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = w(e), t !== null) {
            l.blockedOn = t, Lf(l.priority, function() {
              Nr(e);
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
  function ni(l) {
    if (l.blockedOn !== null) return false;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = Ef(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        Ei = a, e.target.dispatchEvent(a), Ei = null;
      } else return t = sa(e), t !== null && Tr(t), l.blockedOn = e, false;
      t.shift();
    }
    return true;
  }
  function Ar(l, t, e) {
    ni(l) && e.delete(t);
  }
  function l0() {
    zf = false, Me !== null && ni(Me) && (Me = null), je !== null && ni(je) && (je = null), Ce !== null && ni(Ce) && (Ce = null), Yn.forEach(Ar), Gn.forEach(Ar);
  }
  function ui(l, t) {
    l.blockedOn === t && (l.blockedOn = null, zf || (zf = true, o.unstable_scheduleCallback(o.unstable_NormalPriority, l0)));
  }
  var ii = null;
  function _r(l) {
    ii !== l && (ii = l, o.unstable_scheduleCallback(o.unstable_NormalPriority, function() {
      ii === l && (ii = null);
      for (var t = 0; t < l.length; t += 3) {
        var e = l[t], a = l[t + 1], n = l[t + 2];
        if (typeof a != "function") {
          if (pf(a || e) === null) continue;
          break;
        }
        var u = sa(e);
        u !== null && (l.splice(t, 3), t -= 3, xc(u, { pending: true, data: n, method: e.method, action: a }, a, n));
      }
    }));
  }
  function Va(l) {
    function t(s) {
      return ui(s, l);
    }
    Me !== null && ui(Me, l), je !== null && ui(je, l), Ce !== null && ui(Ce, l), Yn.forEach(t), Gn.forEach(t);
    for (var e = 0; e < Ae.length; e++) {
      var a = Ae[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Ae.length && (e = Ae[0], e.blockedOn === null); ) Cr(e), e.blockedOn === null && Ae.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null) for (a = 0; a < e.length; a += 3) {
      var n = e[a], u = e[a + 1], i = n[ct] || null;
      if (typeof u == "function") i || _r(e);
      else if (i) {
        var c = null;
        if (u && u.hasAttribute("formAction")) {
          if (n = u, i = u[ct] || null) c = i.formAction;
          else if (pf(n) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), _r(e);
      }
    }
  }
  function Or() {
    function l(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({ handler: function() {
        return new Promise(function(i) {
          return n = i;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      n !== null && (n(), n = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, { state: u.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = false, n = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
        a = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function Tf(l) {
    this._internalRoot = l;
  }
  ci.prototype.render = Tf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var e = t.current, a = xt();
    pr(e, a, l, t, null, null);
  }, ci.prototype.unmount = Tf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      pr(l.current, 2, null, l, null, null), Lu(), t[ca] = null;
    }
  };
  function ci(l) {
    this._internalRoot = l;
  }
  ci.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Xf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < Ae.length && t !== 0 && t < Ae[e].priority; e++) ;
      Ae.splice(e, 0, l), e === 0 && Cr(l);
    }
  };
  var Dr = j.version;
  if (Dr !== "19.2.3") throw Error(m(527, Dr, "19.2.3"));
  M.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = T(t), l = l !== null ? $(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var t0 = { bundleType: 0, version: "19.2.3", rendererPackageName: "react-dom", currentDispatcherRef: S, reconcilerVersion: "19.2.3" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fi.isDisabled && fi.supportsFiber) try {
      Qt = fi.inject(t0), at = fi;
    } catch {
    }
  }
  return Qn.createRoot = function(l, t) {
    if (!O(l)) throw Error(m(299));
    var e = false, a = "", n = Go, u = Xo, i = Lo;
    return t != null && (t.unstable_strictMode === true && (e = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = xr(l, 1, false, null, null, e, a, null, n, u, i, Or), l[ca] = t.current, nf(l), new Tf(t);
  }, Qn.hydrateRoot = function(l, t, e) {
    if (!O(l)) throw Error(m(299));
    var a = false, n = "", u = Go, i = Xo, c = Lo, s = null;
    return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (s = e.formState)), t = xr(l, 1, true, t, e ?? null, a, n, s, u, i, c, Or), t.context = Er(null), e = t.current, a = xt(), a = mi(a), n = he(a), n.callback = null, ve(e, n, a), e = a, t.current.lanes = e, qt(t, e), Xt(t), l[ca] = t.current, nf(l), new ci(t);
  }, Qn.version = "19.2.3", Qn;
}
var Qr;
function d0() {
  if (Qr) return jf.exports;
  Qr = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
    } catch (j) {
      console.error(j);
    }
  }
  return o(), jf.exports = o0(), jf.exports;
}
var r0 = d0();
const Rf = { aluminum: { name: "Aluminum 6061", E: 689e8, rho: 2700, nu: 0.33, category: "metal" }, aluminum7075: { name: "Aluminum 7075", E: 717e8, rho: 2810, nu: 0.33, category: "metal" }, brass: { name: "Brass C260", E: 11e10, rho: 8530, nu: 0.35, category: "metal" }, steel: { name: "Steel 1018", E: 205e9, rho: 7870, nu: 0.29, category: "metal" }, stainlessSteel: { name: "Stainless Steel 304", E: 193e9, rho: 8e3, nu: 0.29, category: "metal" }, bronze: { name: "Phosphor Bronze", E: 11e10, rho: 8800, nu: 0.34, category: "metal" }, bellBronze: { name: "Bell Bronze (B20)", E: 1e11, rho: 8600, nu: 0.34, category: "metal" }, rosewood: { name: "Honduran Rosewood", E: 125e8, rho: 850, nu: 0.37, category: "wood" }, africanRosewood: { name: "African Rosewood (Bubinga)", E: 158e8, rho: 890, nu: 0.36, category: "wood" }, padauk: { name: "African Padauk", E: 117e8, rho: 750, nu: 0.35, category: "wood" }, sapele: { name: "Sapele", E: 12e9, rho: 640, nu: 0.35, category: "wood" }, bubinga: { name: "Bubinga", E: 158e8, rho: 890, nu: 0.36, category: "wood" }, maple: { name: "Hard Maple", E: 126e8, rho: 705, nu: 0.35, category: "wood" }, purpleheart: { name: "Purpleheart", E: 17e9, rho: 880, nu: 0.35, category: "wood" }, wenge: { name: "Wenge", E: 14e9, rho: 870, nu: 0.35, category: "wood" }, bocote: { name: "Bocote", E: 141e8, rho: 930, nu: 0.36, category: "wood" }, zebrawood: { name: "Zebrawood", E: 152e8, rho: 780, nu: 0.35, category: "wood" }, cocobolo: { name: "Cocobolo", E: 141e8, rho: 1100, nu: 0.36, category: "wood" }, ebony: { name: "African Ebony", E: 174e8, rho: 1050, nu: 0.38, category: "wood" }, teak: { name: "Teak", E: 123e8, rho: 630, nu: 0.35, category: "wood" }, fiberglass: { name: "Fiberglass Composite", E: 17e9, rho: 1800, nu: 0.3, category: "metal" } };
function m0() {
  const o = Object.entries(Rf);
  return { metals: o.filter(([, j]) => j.category === "metal"), woods: o.filter(([, j]) => j.category === "wood") };
}
const Of = [{ name: "1:4:10", ratios: [1, 4, 10], description: "Standard marimba tuning (triple tuning)", instrument: "Marimba" }, { name: "1:4:9", ratios: [1, 4, 9], description: "Alternative marimba/vibraphone tuning", instrument: "Vibraphone" }, { name: "1:3:6", ratios: [1, 3, 6], description: "Xylophone tuning", instrument: "Xylophone" }, { name: "1:3:6:12", ratios: [1, 3, 6, 12], description: "Extended harmonic series (quadruple tuning)", instrument: "Custom" }, { name: "1:2:4:8", ratios: [1, 2, 4, 8], description: "Octave series (demanding)", instrument: "Custom" }, { name: "1:2:4:8:16", ratios: [1, 2, 4, 8, 16], description: "Extended octave series (5 modes)", instrument: "Custom" }, { name: "1:5:10:15", ratios: [1, 5, 10, 15], description: "Unorthodox quintal tuning", instrument: "Custom" }, { name: "1:2:5:10", ratios: [1, 2, 5, 10], description: "Mixed interval tuning", instrument: "Custom" }, { name: "1:3:5:7:9", ratios: [1, 3, 5, 7, 9], description: "Odd harmonic series", instrument: "Custom" }];
function si(o, j) {
  return o.map((A) => A * j);
}
const qf = "01";
function h0(o) {
  const j = new ArrayBuffer(8), A = new DataView(j);
  A.setFloat64(0, o, false);
  let m = "";
  for (let O = 0; O < 8; O++) m += A.getUint8(O).toString(16).padStart(2, "0");
  return m;
}
function v0(o) {
  const j = new ArrayBuffer(8), A = new DataView(j);
  for (let m = 0; m < 8; m++) A.setUint8(m, parseInt(o.substr(m * 2, 2), 16));
  return A.getFloat64(0, false);
}
function Df(o) {
  const j = o.length.toString(16).padStart(2, "0"), A = o.map(h0).join("");
  return `${qf}${j}${A}`;
}
function y0(o) {
  try {
    const j = o.replace(/[\s-]/g, "").toLowerCase();
    if (j.length < 4) return null;
    const A = j.substring(0, 2);
    if (A !== qf) return console.warn(`Unknown gene code version: ${A}`), null;
    const m = parseInt(j.substring(2, 4), 16), O = 4 + m * 16;
    if (j.length !== O) return console.warn(`Invalid gene code length: expected ${O}, got ${j.length}`), null;
    const X = [];
    for (let D = 0; D < m; D++) {
      const w = 4 + D * 16, H = j.substring(w, w + 16);
      X.push(v0(H));
    }
    return X;
  } catch (j) {
    return console.error("Failed to decode gene code:", j), null;
  }
}
function Zr(o) {
  try {
    const j = o.replace(/[\s-]/g, "").toLowerCase();
    if (j.length < 4 || j.substring(0, 2) !== qf) return false;
    const O = 4 + parseInt(j.substring(2, 4), 16) * 16;
    return j.length === O && /^[0-9a-f]+$/.test(j);
  } catch {
    return false;
  }
}
function Kr(o) {
  var _a;
  const j = o.replace(/[\s-]/g, "").toLowerCase();
  return ((_a = j.match(/.{1,8}/g)) == null ? void 0 : _a.join("-")) || j;
}
const oi = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
function Uf(o) {
  const j = o.match(/^([A-Ga-g])([#b]?)(\d)$/);
  if (!j) return null;
  const [, A, m, O] = j, X = parseInt(O);
  let D = oi.indexOf(A.toUpperCase());
  if (D === -1) return null;
  m === "#" && (D += 1), m === "b" && (D -= 1), D < 0 && (D += 12), D >= 12 && (D -= 12);
  const w = (X - 4) * 12 + (D - 9);
  return 440 * Math.pow(2, w / 12);
}
function g0(o) {
  const j = 12 * Math.log2(o / 440), A = Math.round(69 + j), m = (A % 12 + 12) % 12, O = Math.floor(A / 12) - 1;
  return `${oi[m]}${O}`;
}
function S0() {
  const o = [];
  for (let j = 2; j <= 7; j++) for (let A = 0; A < oi.length; A++) {
    const m = `${oi[A]}${j}`, O = Uf(m);
    O && O >= 20 && O <= 4e3 && o.push({ note: m, freq: Math.round(O * 10) / 10 });
  }
  return o;
}
function b0(o) {
  const { metals: j, woods: A } = m0(), m = Rf[o.selectedMaterial], [O, X] = Z.useState(""), [D, w] = Z.useState(false), [H, T] = Z.useState(0), $ = Z.useRef(null), G = Z.useRef(null), ll = Z.useMemo(() => S0(), []), C = Z.useMemo(() => {
    if (!O) return ll.slice(0, 12);
    const x = O.toUpperCase();
    return ll.filter((R) => R.note.toUpperCase().startsWith(x) || R.note.toUpperCase().includes(x)).slice(0, 12);
  }, [O, ll]);
  Z.useEffect(() => {
    const x = g0(o.fundamentalFrequency), R = Uf(x);
    R && Math.abs(1200 * Math.log2(o.fundamentalFrequency / R)) < 5 && X(x);
  }, [o.fundamentalFrequency]);
  const Q = (x, R) => {
    X(x), o.onFundamentalChange(Math.round(R * 10) / 10), w(false);
  }, W = (x) => {
    if (x.key === "ArrowDown") x.preventDefault(), T((R) => Math.min(R + 1, C.length - 1));
    else if (x.key === "ArrowUp") x.preventDefault(), T((R) => Math.max(R - 1, 0));
    else if (x.key === "Enter" && C.length > 0) {
      x.preventDefault();
      const R = C[H];
      Q(R.note, R.freq);
    } else x.key === "Escape" && w(false);
  }, Al = (x) => {
    X(x), T(0), w(true);
    const R = Uf(x);
    R && R >= 20 && R <= 4e3 && o.onFundamentalChange(Math.round(R * 10) / 10);
  }, F = (() => {
    if (o.tuningMode === "preset") {
      const x = Of.find((R) => R.name === o.selectedPreset);
      if (x) return si(x.ratios, o.fundamentalFrequency);
    } else {
      const x = o.customRatios.split(",").map((R) => parseFloat(R.trim())).filter((R) => !isNaN(R));
      return si(x, o.fundamentalFrequency);
    }
    return [];
  })();
  return f.jsxs("div", { className: "sidebar", children: [f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Bar Dimensions" }), f.jsxs("div", { className: "input-row", children: [f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Length" }), f.jsxs("div", { className: "input-unit", children: [f.jsx("input", { type: "number", className: "form-input", value: o.barLength, onChange: (x) => o.onBarLengthChange(parseFloat(x.target.value) || 0), min: 50, max: 1e3 }), f.jsx("span", { children: "mm" })] })] }), f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Width" }), f.jsxs("div", { className: "input-unit", children: [f.jsx("input", { type: "number", className: "form-input", value: o.barWidth, onChange: (x) => o.onBarWidthChange(parseFloat(x.target.value) || 0), min: 10, max: 200 }), f.jsx("span", { children: "mm" })] })] }), f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Thickness" }), f.jsxs("div", { className: "input-unit", children: [f.jsx("input", { type: "number", className: "form-input", value: o.barThickness, onChange: (x) => o.onBarThicknessChange(parseFloat(x.target.value) || 0), min: 5, max: 50 }), f.jsx("span", { children: "mm" })] })] })] })] }), f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Material" }), f.jsxs("select", { className: "form-select", value: o.selectedMaterial, onChange: (x) => o.onMaterialChange(x.target.value), children: [f.jsx("optgroup", { label: "Metals", children: j.map(([x, R]) => f.jsx("option", { value: x, children: R.name }, x)) }), f.jsx("optgroup", { label: "Woods", children: A.map(([x, R]) => f.jsx("option", { value: x, children: R.name }, x)) })] }), m && f.jsxs("div", { className: "material-props", children: [f.jsxs("div", { className: "material-prop", children: [f.jsx("div", { className: "label", children: "E" }), f.jsxs("div", { className: "value", children: [(m.E / 1e9).toFixed(1), " GPa"] })] }), f.jsxs("div", { className: "material-prop", children: [f.jsx("div", { className: "label", children: "\u03C1" }), f.jsxs("div", { className: "value", children: [m.rho, " kg/m\xB3"] })] }), f.jsxs("div", { className: "material-prop", children: [f.jsx("div", { className: "label", children: "\u03BD" }), f.jsx("div", { className: "value", children: m.nu })] })] })] }), f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Tuning Target" }), f.jsxs("div", { className: "tuning-mode-toggle", children: [f.jsx("button", { className: `tuning-mode-btn ${o.tuningMode === "preset" ? "active" : ""}`, onClick: () => o.onTuningModeChange("preset"), children: "Preset" }), f.jsx("button", { className: `tuning-mode-btn ${o.tuningMode === "custom" ? "active" : ""}`, onClick: () => o.onTuningModeChange("custom"), children: "Custom" })] }), o.tuningMode === "preset" ? f.jsx("select", { className: "form-select", value: o.selectedPreset, onChange: (x) => o.onPresetChange(x.target.value), children: Of.map((x) => f.jsxs("option", { value: x.name, children: [x.name, " - ", x.description] }, x.name)) }) : f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Ratios (comma-separated)" }), f.jsx("input", { type: "text", className: "form-input", value: o.customRatios, onChange: (x) => o.onCustomRatiosChange(x.target.value), placeholder: "1, 4, 10" })] }), f.jsxs("div", { className: "form-group", style: { marginTop: 12 }, children: [f.jsx("label", { className: "form-label", children: "Fundamental Frequency (f\u2081)" }), f.jsxs("div", { className: "frequency-input-row", children: [f.jsxs("div", { className: "note-input-container", children: [f.jsx("input", { ref: $, type: "text", className: "form-input note-input", value: O, onChange: (x) => Al(x.target.value), onFocus: () => w(true), onBlur: () => setTimeout(() => w(false), 150), onKeyDown: W, placeholder: "C4" }), D && C.length > 0 && f.jsx("div", { className: "note-suggestions", ref: G, children: C.map((x, R) => f.jsxs("div", { className: `note-suggestion ${R === H ? "selected" : ""}`, onMouseDown: () => Q(x.note, x.freq), onMouseEnter: () => T(R), children: [f.jsx("span", { className: "note-name", children: x.note }), f.jsxs("span", { className: "note-freq", children: [x.freq, " Hz"] })] }, x.note)) })] }), f.jsxs("div", { className: "input-unit", children: [f.jsx("input", { type: "number", className: "form-input", value: o.fundamentalFrequency, onChange: (x) => o.onFundamentalChange(parseFloat(x.target.value) || 0), min: 20, max: 4e3, step: 0.1, title: "Frequency in Hz", "aria-label": "Frequency in Hz" }), f.jsx("span", { children: "Hz" })] })] })] }), f.jsxs("div", { className: "target-frequencies", children: [f.jsx("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }, children: "Target Frequencies:" }), F.map((x, R) => f.jsxs("div", { className: "freq-item", children: [f.jsxs("span", { children: ["f", R + 1] }), f.jsxs("span", { children: [x.toFixed(1), " Hz"] })] }, R))] })] }), f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Optimization" }), f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Number of Cuts" }), f.jsx("input", { type: "number", className: "form-input", min: 1, max: 20, value: o.numCuts, onChange: (x) => {
    const R = parseInt(x.target.value);
    !isNaN(R) && R >= 1 && o.onNumCutsChange(R);
  }, "aria-label": "Number of cuts" }), f.jsx("div", { className: "input-hint", children: "Typical: 1-5 cuts. More cuts = finer tuning control but slower optimization." })] }), f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Penalty Type" }), f.jsxs("select", { className: "form-select", value: o.penaltyType, onChange: (x) => o.onPenaltyTypeChange(x.target.value), children: [f.jsx("option", { value: "none", children: "None" }), f.jsx("option", { value: "volume", children: "Volume (minimize material removal)" }), f.jsx("option", { value: "roughness", children: "Roughness (smooth profile)" })] })] }), o.penaltyType !== "none" && f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Penalty Weight (\u03B1)" }), f.jsx("span", { className: "slider-value", children: o.penaltyWeight.toFixed(2) })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: 0.3, step: 0.01, value: o.penaltyWeight, onChange: (x) => o.onPenaltyWeightChange(parseFloat(x.target.value)) })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "f\u2081 Priority" }), f.jsxs("span", { className: "slider-value", children: [o.f1Priority.toFixed(1), "\xD7"] })] }), f.jsx("input", { type: "range", className: "slider", min: 1, max: 5, step: 0.5, value: o.f1Priority, onChange: (x) => o.onF1PriorityChange(parseFloat(x.target.value)), title: "f1 Priority - weight multiplier for fundamental frequency", "aria-label": "f1 Priority" }), f.jsx("div", { className: "slider-hint", children: "Higher = prioritize fundamental frequency tuning" })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "FEM Elements" }), f.jsx("span", { className: "slider-value", children: o.numElements })] }), f.jsx("input", { type: "range", className: "slider", min: 40, max: 400, step: 10, value: o.numElements, onChange: (x) => o.onNumElementsChange(parseInt(x.target.value)), title: "Number of finite elements for mesh discretization", "aria-label": "FEM Elements" }), f.jsxs("div", { className: "slider-hint", children: ["Element size: ", (o.barLength / o.numElements).toFixed(2), " mm"] })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Min Step Width" }), f.jsxs("span", { className: "slider-value", children: [o.minCutWidth, " mm"] })] }), f.jsx("input", { type: "range", className: "slider", min: 0.5, max: 20, step: 0.5, value: o.minCutWidth, onChange: (x) => o.onMinCutWidthChange(parseFloat(x.target.value)), title: "Minimum step width", "aria-label": "Minimum Step Width" }), f.jsx("div", { className: "slider-hint", children: "Min width of each tier/step" })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Max Step Width" }), f.jsx("span", { className: "slider-value", children: o.maxCutWidth === 0 ? "No limit" : `${o.maxCutWidth} mm` })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: o.barLength / 2, step: 5, value: o.maxCutWidth, onChange: (x) => o.onMaxCutWidthChange(parseFloat(x.target.value)), title: "Maximum step width (0 = no limit)", "aria-label": "Maximum Step Width" }), f.jsx("div", { className: "slider-hint", children: "Max width of each tier/step (0 = no limit)" })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Min Cut Depth" }), f.jsx("span", { className: "slider-value", children: o.minCutDepth === 0 ? "No limit" : `${o.minCutDepth} mm` })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: o.barThickness * 0.9, step: 0.5, value: o.minCutDepth, onChange: (x) => o.onMinCutDepthChange(parseFloat(x.target.value)), title: "Minimum cut depth (0 = no minimum)", "aria-label": "Minimum Cut Depth" }), f.jsx("div", { className: "slider-hint", children: "Min material removed (0 = no min)" })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Max Cut Depth" }), f.jsx("span", { className: "slider-value", children: o.maxCutDepth === 0 ? "No limit" : `${o.maxCutDepth} mm` })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: o.barThickness * 0.9, step: 0.5, value: o.maxCutDepth, onChange: (x) => o.onMaxCutDepthChange(parseFloat(x.target.value)), title: "Maximum cut depth (0 = 90% of thickness)", "aria-label": "Maximum Cut Depth" }), f.jsx("div", { className: "slider-hint", children: "Max material removed (0 = 90% of h\u2080)" })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Max Length Trim" }), f.jsx("span", { className: "slider-value", children: o.maxLengthTrim === 0 ? "Disabled" : `${o.maxLengthTrim} mm` })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: o.barLength * 0.2, step: 1, value: o.maxLengthTrim, onChange: (x) => o.onMaxLengthTrimChange(parseFloat(x.target.value)), title: "Maximum trim from each end (0 = no trimming)", "aria-label": "Maximum Length Trim" }), f.jsxs("div", { className: "slider-hint", children: ["Optimizer can shorten bar by up to 2\xD7", o.maxLengthTrim, " mm total"] })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Max Length Extend" }), f.jsx("span", { className: "slider-value", children: o.maxLengthExtend === 0 ? "Disabled" : `${o.maxLengthExtend} mm` })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: o.barLength * 0.2, step: 1, value: o.maxLengthExtend, onChange: (x) => o.onMaxLengthExtendChange(parseFloat(x.target.value)), title: "Maximum extension from each end (0 = no extension)", "aria-label": "Maximum Length Extend" }), f.jsxs("div", { className: "slider-hint", children: ["Optimizer can lengthen bar by up to 2\xD7", o.maxLengthExtend, " mm total"] })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "CPU Cores" }), f.jsx("span", { className: "slider-value", children: o.maxCores === 0 ? "Auto (max)" : o.maxCores })] }), f.jsx("input", { type: "range", className: "slider", min: 0, max: navigator.hardwareConcurrency || 8, step: 1, value: o.maxCores, onChange: (x) => o.onMaxCoresChange(parseInt(x.target.value)), title: "Maximum CPU cores for WASM threading (0 = auto/max available)", "aria-label": "Maximum CPU Cores" }), f.jsx("div", { className: "slider-hint", children: o.maxCores === 0 ? `Use all available cores (${navigator.hardwareConcurrency || "unknown"})` : `Limit to ${o.maxCores} core${o.maxCores > 1 ? "s" : ""}` })] }), f.jsxs("div", { className: "slider-group", children: [f.jsxs("div", { className: "slider-header", children: [f.jsx("span", { className: "slider-label", children: "Target Error" }), f.jsxs("span", { className: "slider-value", children: [o.targetError < 0.01 ? o.targetError.toFixed(3) : o.targetError.toFixed(2), "%"] })] }), f.jsx("input", { type: "range", className: "slider", min: 1e-3, max: 1, step: 1e-3, value: o.targetError, onChange: (x) => o.onTargetErrorChange(parseFloat(x.target.value)), title: "Stop optimization when fitness reaches this error percentage", "aria-label": "Target Error" }), f.jsx("div", { className: "slider-hint", children: "Stop early when tuning error falls below this threshold" })] }), f.jsxs("div", { className: "input-row", style: { marginTop: 12 }, children: [f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Population" }), f.jsx("input", { type: "number", className: "form-input", value: o.populationSize, onChange: (x) => o.onPopulationSizeChange(parseInt(x.target.value) || 30), min: 20, max: 200 })] }), f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Generations" }), f.jsx("input", { type: "number", className: "form-input", value: o.maxGenerations, onChange: (x) => o.onMaxGenerationsChange(parseInt(x.target.value) || 50), min: 10, max: 500 })] })] }), f.jsxs("div", { className: "form-group", children: [f.jsx("label", { className: "form-label", children: "Seed Gene Code (optional)" }), f.jsx("input", { type: "text", className: `form-input seed-input ${o.seedGeneCode && !Zr(o.seedGeneCode) ? "input-error" : ""}`, value: o.seedGeneCode, onChange: (x) => o.onSeedGeneCodeChange(x.target.value), placeholder: "Paste gene code to resume optimization" }), f.jsx("div", { className: "input-hint", children: o.seedGeneCode ? Zr(o.seedGeneCode) ? "Valid gene code - will seed initial population" : "Invalid gene code format" : "Paste a gene code from a previous run to continue refining" })] })] }), f.jsxs("div", { className: "attribution", children: ["Based on", " ", f.jsx("a", { href: "https://hal.science/hal-04240657v1/file/soares2020.pdf", target: "_blank", rel: "noopener noreferrer", children: "Soares et al. (2020)" })] })] });
}
function x0({ length: o, thickness: j, cuts: A, showDimensions: m, effectiveLength: O }) {
  const X = O ? O - o : 0, D = Math.abs(X) / 2, w = X < 0, H = X > 0, T = w || H, G = [...A.map((Dl) => ({ lambda: Dl.lambda * 1e3, h: Dl.h * 1e3 }))].sort((Dl, pl) => pl.lambda - Dl.lambda), ll = 800, C = { top: 40, right: 100, bottom: 130, left: 90 }, Q = ll - C.left - C.right, W = Q / o, Al = j * W, x = Math.max(30, Math.min(150, Al)), R = C.top + x + C.bottom, Tl = x / j, K = C.top, Y = C.top + x, jl = C.left + o / 2 * W, it = Z.useMemo(() => {
    const Dl = o / 2, pl = (M) => {
      const _ = Math.abs(M - Dl), nl = G.filter((ul) => ul.lambda > 0 && _ <= ul.lambda);
      return nl.length === 0 ? j : nl[nl.length - 1].h;
    }, ol = [0];
    for (const M of G) if (M.lambda > 0 && M.lambda < Dl) {
      const _ = Dl - M.lambda, nl = Dl + M.lambda;
      ol.push(_), ol.push(nl);
    }
    ol.push(o);
    const Zl = [...new Set(ol)].sort((M, _) => M - _), P = [];
    for (let M = 0; M < Zl.length; M++) {
      const _ = Zl[M], nl = C.left + _ * W, ul = pl(_ + 1e-3), r = K + ul * Tl, z = _ > 0 ? pl(_ - 1e-3) : ul, U = K + z * Tl;
      M > 0 && Math.abs(U - r) > 0.5 ? (P.push({ x: nl, y: U }), P.push({ x: nl, y: r })) : P.push({ x: nl, y: r });
    }
    let rl = `M ${C.left} ${K}`;
    rl += ` L ${C.left + Q} ${K}`;
    const S = P[P.length - 1];
    rl += ` L ${C.left + Q} ${S.y}`;
    for (let M = P.length - 1; M >= 0; M--) rl += ` L ${P[M].x} ${P[M].y}`;
    return rl += ` L ${C.left} ${K}`, rl += " Z", rl;
  }, [G, o, j, W, Tl, K, C.left, Q]);
  return f.jsxs("div", { className: "bar-profile-container panel", children: [f.jsx("h3", { className: "panel-title", children: "Bar Profile (Side View)" }), f.jsxs("svg", { className: "bar-profile-svg", viewBox: `0 0 ${ll} ${R}`, preserveAspectRatio: "xMidYMid meet", children: [f.jsx("rect", { x: C.left, y: C.top - 10, width: Q, height: x + 20, fill: "#fafafa" }), f.jsx("line", { x1: jl, y1: K - 10, x2: jl, y2: Y + 15, stroke: "#bbb", strokeWidth: "1", strokeDasharray: "4,4" }), f.jsx("path", { d: it, fill: "#bbdefb", stroke: "#1976d2", strokeWidth: "2" }), w && f.jsxs(f.Fragment, { children: [f.jsx("rect", { x: C.left, y: K, width: D * W, height: x, fill: "rgba(220, 38, 38, 0.2)", stroke: "#dc2626", strokeWidth: "1", strokeDasharray: "4,2" }), f.jsx("rect", { x: C.left + Q - D * W, y: K, width: D * W, height: x, fill: "rgba(220, 38, 38, 0.2)", stroke: "#dc2626", strokeWidth: "1", strokeDasharray: "4,2" }), f.jsxs("text", { x: C.left + D * W / 2, y: K - 5, textAnchor: "middle", fontSize: "9", fill: "#dc2626", children: ["-", D.toFixed(1), "mm"] }), f.jsxs("text", { x: C.left + Q - D * W / 2, y: K - 5, textAnchor: "middle", fontSize: "9", fill: "#dc2626", children: ["-", D.toFixed(1), "mm"] })] }), H && f.jsxs(f.Fragment, { children: [f.jsx("rect", { x: C.left - D * W, y: K, width: D * W, height: x, fill: "rgba(34, 197, 94, 0.2)", stroke: "#16a34a", strokeWidth: "1", strokeDasharray: "4,2" }), f.jsx("rect", { x: C.left + Q, y: K, width: D * W, height: x, fill: "rgba(34, 197, 94, 0.2)", stroke: "#16a34a", strokeWidth: "1", strokeDasharray: "4,2" }), f.jsxs("text", { x: C.left - D * W / 2, y: K - 5, textAnchor: "middle", fontSize: "9", fill: "#16a34a", children: ["+", D.toFixed(1), "mm"] }), f.jsxs("text", { x: C.left + Q + D * W / 2, y: K - 5, textAnchor: "middle", fontSize: "9", fill: "#16a34a", children: ["+", D.toFixed(1), "mm"] })] }), f.jsxs("g", { children: [f.jsx("line", { x1: C.left - 25, y1: K, x2: C.left - 10, y2: K, stroke: "#444", strokeWidth: "1" }), f.jsx("line", { x1: C.left - 25, y1: Y, x2: C.left - 10, y2: Y, stroke: "#444", strokeWidth: "1" }), f.jsx("line", { x1: C.left - 17, y1: K, x2: C.left - 17, y2: Y, stroke: "#444", strokeWidth: "1" }), f.jsx("polygon", { points: `${C.left - 17},${K} ${C.left - 20},${K + 6} ${C.left - 14},${K + 6}`, fill: "#444" }), f.jsx("polygon", { points: `${C.left - 17},${Y} ${C.left - 20},${Y - 6} ${C.left - 14},${Y - 6}`, fill: "#444" }), f.jsxs("text", { x: C.left - 30, y: (K + Y) / 2, textAnchor: "end", fontSize: "11", fill: "#333", dominantBaseline: "middle", children: ["h\u2080 = ", j, " mm"] })] }), f.jsxs("g", { children: [f.jsx("line", { x1: C.left, y1: Y + 25, x2: C.left, y2: Y + 40, stroke: "#444", strokeWidth: "1" }), f.jsx("line", { x1: C.left + Q, y1: Y + 25, x2: C.left + Q, y2: Y + 40, stroke: "#444", strokeWidth: "1" }), f.jsx("line", { x1: C.left, y1: Y + 32, x2: C.left + Q, y2: Y + 32, stroke: "#444", strokeWidth: "1" }), f.jsx("polygon", { points: `${C.left},${Y + 32} ${C.left + 6},${Y + 29} ${C.left + 6},${Y + 35}`, fill: "#444" }), f.jsx("polygon", { points: `${C.left + Q},${Y + 32} ${C.left + Q - 6},${Y + 29} ${C.left + Q - 6},${Y + 35}`, fill: "#444" }), f.jsx("text", { x: jl, y: Y + 48, textAnchor: "middle", fontSize: "11", fill: "#333", children: T ? `L = ${O == null ? void 0 : O.toFixed(1)} mm (original: ${o} mm)` : `L = ${o} mm` })] }), f.jsx("text", { x: jl, y: Y + 22, textAnchor: "middle", fontSize: "9", fill: "#888", children: "center" }), m && [...G].filter((pl) => pl.lambda > 0).sort((pl, ol) => pl.lambda - ol.lambda).map((pl, ol) => {
    const Zl = o / 2, P = Zl - pl.lambda, rl = pl.lambda * 2, S = C.left + P * W, M = C.left + (Zl + pl.lambda) * W, _ = Y + 60 + ol * 22;
    return f.jsxs("g", { children: [f.jsx("line", { x1: C.left, y1: _ - 5, x2: C.left, y2: _ + 5, stroke: "#666", strokeWidth: "1" }), f.jsx("line", { x1: S, y1: _ - 5, x2: S, y2: _ + 5, stroke: "#666", strokeWidth: "1" }), f.jsx("line", { x1: C.left, y1: _, x2: S, y2: _, stroke: "#666", strokeWidth: "1" }), f.jsx("polygon", { points: `${C.left},${_} ${C.left + 5},${_ - 3} ${C.left + 5},${_ + 3}`, fill: "#666" }), f.jsx("polygon", { points: `${S},${_} ${S - 5},${_ - 3} ${S - 5},${_ + 3}`, fill: "#666" }), f.jsx("text", { x: (C.left + S) / 2, y: _ - 7, textAnchor: "middle", fontSize: "9", fill: "#666", children: P.toFixed(1) }), f.jsx("line", { x1: S, y1: _, x2: M, y2: _, stroke: "#e65100", strokeWidth: "2" }), f.jsx("polygon", { points: `${S},${_} ${S + 5},${_ - 3} ${S + 5},${_ + 3}`, fill: "#e65100" }), f.jsx("polygon", { points: `${M},${_} ${M - 5},${_ - 3} ${M - 5},${_ + 3}`, fill: "#e65100" }), f.jsxs("text", { x: (S + M) / 2, y: _ - 7, textAnchor: "middle", fontSize: "10", fill: "#e65100", fontWeight: "600", children: [rl.toFixed(1), " mm"] }), f.jsxs("text", { x: M + 8, y: _ + 3, fontSize: "9", fill: "#1565c0", children: ["Cut ", ol + 1, ": depth ", (j - pl.h).toFixed(2), " mm"] })] }, `cut-dim-${ol}`);
  }), m && (() => {
    const ol = [...G].filter((P) => P.lambda > 0).sort((P, rl) => P.lambda - rl.lambda).map((P, rl) => ({ cut: P, index: rl, naturalY: K + P.h * Tl })).sort((P, rl) => P.naturalY - rl.naturalY);
    for (let P = 1; P < ol.length; P++) {
      const rl = ol[P - 1], S = ol[P];
      S.naturalY - rl.naturalY < 16 && (ol[P] = { ...S, naturalY: rl.naturalY + 16 });
    }
    const Zl = C.left + Q + 10;
    return ol.map(({ cut: P, index: rl, naturalY: S }) => {
      const M = K + P.h * Tl;
      return f.jsxs("g", { children: [f.jsx("line", { x1: C.left + Q + 2, y1: M, x2: C.left + Q + 8, y2: M, stroke: "#1565c0", strokeWidth: "1.5" }), Math.abs(S - M) > 2 && f.jsx("line", { x1: C.left + Q + 8, y1: M, x2: Zl + 3, y2: S, stroke: "#1565c0", strokeWidth: "0.5", strokeDasharray: "2,2" }), f.jsxs("text", { x: Zl + 5, y: S, fontSize: "10", fill: "#1565c0", dominantBaseline: "middle", children: [P.h.toFixed(2), " mm"] })] }, `height-${rl}`);
    });
  })(), A.length === 0 && f.jsx("text", { x: ll / 2, y: R / 2 - 30, textAnchor: "middle", fontSize: "14", fill: "#999", children: "Run optimization to see bar profile" })] })] });
}
function E0({ targetFrequencies: o, computedFrequencies: j, errorsInCents: A }) {
  const m = (D) => D >= 1e3 ? `${(D / 1e3).toFixed(2)} kHz` : `${D.toFixed(1)} Hz`, O = (D) => `${D >= 0 ? "+" : ""}${D.toFixed(1)}`, X = (D) => {
    const w = Math.abs(D);
    return w <= 5 ? "error-excellent" : w <= 15 ? "error-good" : w <= 50 ? "error-ok" : "error-bad";
  };
  return f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Frequencies" }), f.jsxs("table", { className: "frequency-table", children: [f.jsx("thead", { children: f.jsxs("tr", { children: [f.jsx("th", { children: "Mode" }), f.jsx("th", { children: "Target" }), f.jsx("th", { children: "Computed" }), f.jsx("th", { children: "Error (cents)" })] }) }), f.jsx("tbody", { children: o.map((D, w) => f.jsxs("tr", { children: [f.jsxs("td", { children: ["f", w + 1] }), f.jsx("td", { children: m(D) }), f.jsx("td", { children: j[w] ? m(j[w]) : "\u2014" }), f.jsx("td", { className: A[w] !== void 0 ? X(A[w]) : "", children: A[w] !== void 0 ? O(A[w]) : "\u2014" })] }, w)) })] })] });
}
function p0({ tuningError: o, maxErrorCents: j, volumePercent: A, generations: m, cuts: O, lengthTrim: X, effectiveLength: D, genes: w }) {
  const [H, T] = Z.useState(false), $ = w ? Kr(Df(w)) : null, G = async () => {
    if ($) try {
      await navigator.clipboard.writeText($.replace(/-/g, "")), T(true), setTimeout(() => T(false), 2e3);
    } catch (Q) {
      console.error("Failed to copy:", Q);
    }
  }, ll = (Q) => Q <= 2 ? "success" : Q <= 10 ? "warning" : "error", C = [...O].sort((Q, W) => W.lambda - Q.lambda);
  return f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Results" }), f.jsxs("div", { className: "results-summary", children: [f.jsxs("div", { className: `result-card ${ll(j)}`, children: [f.jsx("div", { className: "label", children: "Max Error" }), f.jsxs("div", { className: "value", children: [j.toFixed(1), " \xA2"] })] }), f.jsxs("div", { className: "result-card", children: [f.jsx("div", { className: "label", children: "Avg Error" }), f.jsxs("div", { className: "value", children: [o.toFixed(4), "%"] })] }), f.jsxs("div", { className: "result-card", children: [f.jsx("div", { className: "label", children: "Volume Removed" }), f.jsxs("div", { className: "value", children: [A.toFixed(1), "%"] })] }), f.jsxs("div", { className: "result-card", children: [f.jsx("div", { className: "label", children: "Generations" }), f.jsx("div", { className: "value", children: m })] })] }), X !== void 0 && X !== 0 && D && f.jsxs("div", { className: "cut-dimensions", style: { marginTop: 16 }, children: [f.jsx("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }, children: "Length Optimization:" }), f.jsxs("div", { className: "cut-item", children: [f.jsx("span", { className: "cut-label", children: X > 0 ? "Length Trim" : "Length Extend" }), f.jsxs("span", { className: "cut-values", children: [Math.abs(X * 1e3).toFixed(1), " mm ", X > 0 ? "removed from" : "added to", " each end"] })] }), f.jsxs("div", { className: "cut-item", children: [f.jsx("span", { className: "cut-label", children: "Effective Length" }), f.jsxs("span", { className: "cut-values", children: [(D * 1e3).toFixed(1), " mm (was ", ((D + 2 * X) * 1e3).toFixed(1), " mm)"] })] })] }), f.jsxs("div", { className: "cut-dimensions", children: [f.jsx("div", { style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 8, marginTop: X !== void 0 && X !== 0 ? 8 : 16 }, children: "Cut Dimensions:" }), C.map((Q, W) => {
    const Al = Q.lambda * 2 * 1e3, Ol = C[W + 1], F = Ol ? (Q.lambda - Ol.lambda) * 1e3 : null;
    return f.jsxs("div", { className: "cut-item", children: [f.jsxs("span", { className: "cut-label", children: ["Cut ", W + 1] }), f.jsxs("span", { className: "cut-values", children: ["width = ", Al.toFixed(1), " mm, h = ", (Q.h * 1e3).toFixed(2), " mm", F !== null && f.jsxs("span", { className: "cut-gap", children: ["(gap: ", F.toFixed(1), " mm)"] })] })] }, W);
  })] }), $ && f.jsxs("div", { className: "gene-code-container", children: [f.jsx("div", { className: "gene-code-label", children: "Gene Code" }), f.jsx("div", { className: "gene-code-value", onClick: G, title: "Click to copy", children: $ }), f.jsx("div", { className: "gene-code-hint", children: H ? "Copied!" : 'Click to copy - paste into "Seed Gene Code" to resume optimization' })] })] });
}
function z0({ isRunning: o, currentGeneration: j, maxGenerations: A, bestFitness: m, onStart: O, onStop: X }) {
  const D = A > 0 ? j / A * 100 : 0;
  return f.jsxs("div", { className: "panel", children: [f.jsx("h3", { className: "panel-title", children: "Optimization Controls" }), f.jsxs("div", { className: "btn-group", children: [f.jsx("button", { className: "btn btn-primary", onClick: O, disabled: o, style: { flex: 1 }, children: o ? "Running..." : "\u25B6 Start Optimization" }), f.jsx("button", { className: "btn btn-danger", onClick: X, disabled: !o, children: "\u25A0 Stop" })] }), (o || j > 0) && f.jsxs("div", { className: "progress-container", children: [f.jsx("div", { className: "progress-bar-wrapper", children: f.jsx("div", { className: "progress-bar", style: { width: `${D}%` } }) }), f.jsxs("div", { className: "progress-stats", children: [f.jsxs("span", { children: ["Generation: ", j, " / ", A] }), f.jsxs("span", { children: ["Best: ", m < 1 / 0 ? m.toFixed(4) : "\u2014", "%"] })] })] })] });
}
function T0({ entries: o, targetFrequencies: j, selectedGeneration: A, onSelectGeneration: m }) {
  const [O, X] = Z.useState(false), [D, w] = Z.useState("generation"), [H, T] = Z.useState("asc"), [$, G] = Z.useState(null), ll = Z.useRef(null), C = async (F, x, R) => {
    F.stopPropagation();
    const Tl = Df(x);
    try {
      await navigator.clipboard.writeText(Tl), G(R), setTimeout(() => G(null), 2e3);
    } catch (K) {
      console.error("Failed to copy:", K);
    }
  }, Q = Z.useMemo(() => [...o].sort((x, R) => {
    let Tl, K;
    if (D === "generation") Tl = x.generation, K = R.generation;
    else if (D === "fitness") Tl = x.fitness, K = R.fitness;
    else {
      const Y = parseInt(D.replace("error", ""));
      Tl = Math.abs(x.errorsInCents[Y] ?? 0), K = Math.abs(R.errorsInCents[Y] ?? 0);
    }
    return H === "asc" ? Tl - K : K - Tl;
  }), [o, D, H]), W = (F) => {
    D === F ? T((x) => x === "asc" ? "desc" : "asc") : (w(F), T("asc"));
  }, Al = (F) => D !== F ? null : H === "asc" ? " \u25B2" : " \u25BC";
  if (Z.useEffect(() => {
    O && ll.current && D === "generation" && H === "asc" && ll.current.scrollIntoView({ behavior: "smooth" });
  }, [o.length, O, D, H]), o.length === 0) return null;
  const Ol = (F) => {
    m(A === F ? null : F);
  };
  return f.jsxs("div", { className: "panel generation-log", children: [f.jsxs("button", { className: "log-header", onClick: () => X(!O), "aria-expanded": O, children: [f.jsxs("span", { className: "log-title", children: ["Generation Log (", o.length, ")", A !== null && f.jsxs("span", { className: "log-selected-badge", children: ["Viewing Gen ", A] })] }), f.jsx("span", { className: `log-chevron ${O ? "expanded" : ""}`, children: "\u25B6" })] }), O && f.jsxs("div", { className: "log-content", children: [f.jsxs("table", { className: "log-table", children: [f.jsx("thead", { children: f.jsxs("tr", { children: [f.jsxs("th", { className: "sortable", onClick: () => W("generation"), children: ["Gen", Al("generation")] }), f.jsxs("th", { className: "sortable", onClick: () => W("fitness"), children: ["Fitness", Al("fitness")] }), j.map((F, x) => f.jsxs("th", { className: "sortable", onClick: () => W(`error${x}`), children: ["f", x + 1, " err", Al(`error${x}`)] }, x)), f.jsx("th", { className: "gene-code-header", children: "Gene Code" })] }) }), f.jsxs("tbody", { children: [Q.map((F) => f.jsxs("tr", { className: `log-row ${A === F.generation ? "selected" : ""}`, onClick: () => Ol(F.generation), children: [f.jsx("td", { className: "gen-num", children: F.generation }), f.jsxs("td", { className: "fitness", children: [F.fitness.toFixed(4), "%"] }), F.errorsInCents.map((x, R) => f.jsxs("td", { className: `error-cell ${N0(x)}`, children: [x >= 0 ? "+" : "", x.toFixed(1), "\xA2"] }, R)), f.jsx("td", { className: "gene-code-cell", children: f.jsx("button", { type: "button", className: "copy-gene-btn", onClick: (x) => C(x, F.genes, F.generation), title: "Copy gene code to clipboard", children: $ === F.generation ? "Copied!" : "Copy" }) })] }, F.generation)), A !== null && Q.find((F) => F.generation === A) && f.jsx("tr", { className: "gene-code-detail-row", children: f.jsx("td", { colSpan: 3 + j.length, children: f.jsxs("div", { className: "gene-code-detail", children: [f.jsxs("span", { className: "gene-code-label", children: ["Gene Code (Gen ", A, "):"] }), f.jsx("code", { className: "gene-code-value", children: Kr(Df(Q.find((F) => F.generation === A).genes)) })] }) }) })] })] }), f.jsx("div", { ref: ll })] })] });
}
function N0(o) {
  const j = Math.abs(o);
  return j <= 5 ? "error-excellent" : j <= 15 ? "error-good" : j <= 50 ? "error-ok" : "error-bad";
}
function Vr(o) {
  const j = [];
  for (let A = 0; A < o.length; A += 2) j.push({ lambda: o[A], h: o[A + 1] });
  return j.sort((A, m) => m.lambda - A.lambda);
}
function M0(o) {
  return new Worker("/multi-modal-tuning/assets/optimizationWorker-CLYxdS3f.js", { type: "module", name: o == null ? void 0 : o.name });
}
function j0() {
  const [o, j] = Z.useState(350), [A, m] = Z.useState(50), [O, X] = Z.useState(10), [D, w] = Z.useState("aluminum"), [H, T] = Z.useState("preset"), [$, G] = Z.useState("1:4:10"), [ll, C] = Z.useState("1, 4, 10"), [Q, W] = Z.useState(175), [Al, Ol] = Z.useState(3), [F, x] = Z.useState("volume"), [R, Tl] = Z.useState(0.05), [K, Y] = Z.useState(50), [jl, it] = Z.useState(100), [Dl, pl] = Z.useState(2), [ol, Zl] = Z.useState(80), [P, rl] = Z.useState(2), [S, M] = Z.useState(0), [_, nl] = Z.useState(0), [ul, r] = Z.useState(0), [z, U] = Z.useState(0), [q, k] = Z.useState(0), [el, ml] = Z.useState(0), [Ll, _l] = Z.useState(0.01), [Ht, Ie] = Z.useState(""), [Ka, Oe] = Z.useState(false), [Lt, Pe] = Z.useState(0), [Ja, Zn] = Z.useState(1 / 0), [wa, la] = Z.useState(null), [Wa, ta] = Z.useState([]), [di, Vn] = Z.useState([]), [lt, Kn] = Z.useState(0), [Wl, $a] = Z.useState(null), [De, Jn] = Z.useState([]), [ea, wn] = Z.useState(null), Ue = Z.useRef(null), Qt = Z.useCallback(() => {
    if (H === "preset") {
      const Vl = Of.find((nt) => nt.name === $);
      if (Vl) return si(Vl.ratios, Q);
    } else {
      const Vl = ll.split(",").map((nt) => parseFloat(nt.trim())).filter((nt) => !isNaN(nt));
      if (Vl.length > 0) return si(Vl, Q);
    }
    return [Q];
  }, [H, $, ll, Q]), at = Z.useCallback(() => {
    const Vl = new M0();
    Ue.current = Vl, Vl.onmessage = (Fa) => {
      const qt = Fa.data;
      switch (qt.type) {
        case "PROGRESS":
          const Kl = qt.data;
          Pe(Kl.generation), Zn(Kl.bestFitness), la(Kl.bestIndividual), Kl.computedFrequencies && ta(Kl.computedFrequencies), Kl.errorsInCents && Vn(Kl.errorsInCents), Kl.lengthTrim !== void 0 && Kn(Kl.lengthTrim), Kl.computedFrequencies && Kl.errorsInCents && Jn((Fn) => [...Fn, { generation: Kl.generation, fitness: Kl.bestFitness, errorsInCents: Kl.errorsInCents, computedFrequencies: Kl.computedFrequencies, genes: [...Kl.bestIndividual.genes] }]);
          break;
        case "COMPLETE":
          $a(qt.result), Oe(false);
          break;
        case "ERROR":
          console.error("Optimization error:", qt.message), Oe(false);
          break;
        case "STOPPED":
          Oe(false);
          break;
      }
    };
    const nt = Rf[D], ia = Qt(), He = Ht ? y0(Ht) : void 0, $n = { type: "START", params: { bar: { L: o / 1e3, b: A / 1e3, h0: O / 1e3, hMin: O / 1e4 }, material: nt, targetFrequencies: ia, numCuts: Al, penaltyType: F, penaltyWeight: R, eaParams: { populationSize: K, elitismPercent: 10, crossoverPercent: 30, mutationPercent: 60, mutationStrength: 0.1, maxGenerations: jl, targetError: Ll, numElements: ol, f1Priority: Dl, minCutWidth: P / 1e3, maxCutWidth: S / 1e3, minCutDepth: _ / 1e3, maxCutDepth: ul / 1e3, maxLengthTrim: z / 1e3, maxLengthExtend: q / 1e3, maxCores: el }, seedGenes: He || void 0 } };
    Vl.postMessage($n), Oe(true), Pe(0), Zn(1 / 0), la(null), ta([]), Vn([]), Kn(0), $a(null), Jn([]), wn(null);
  }, [D, o, A, O, Al, F, R, K, jl, ol, Dl, P, S, _, ul, z, q, el, Ll, Ht, Qt]), Rt = Z.useCallback(() => {
    if (Ue.current) {
      const Vl = { type: "STOP" };
      Ue.current.postMessage(Vl);
    }
  }, []);
  Z.useEffect(() => () => {
    Ue.current && Ue.current.terminate();
  }, []);
  const tt = Qt(), aa = ea !== null ? De.find((Vl) => Vl.generation === ea) : null, Wn = aa ? Vr(aa.genes) : (Wl == null ? void 0 : Wl.cuts) ?? (wa ? Vr(wa.genes) : []), ri = (aa == null ? void 0 : aa.computedFrequencies) ?? (Wl == null ? void 0 : Wl.computedFrequencies) ?? Wa, na = (aa == null ? void 0 : aa.errorsInCents) ?? (Wl == null ? void 0 : Wl.errorsInCents) ?? di, ua = (Wl == null ? void 0 : Wl.effectiveLength) ? Wl.effectiveLength * 1e3 : lt !== 0 ? o - 2 * lt * 1e3 : o;
  return f.jsxs("div", { className: "app-container", children: [f.jsx(b0, { barLength: o, barWidth: A, barThickness: O, onBarLengthChange: j, onBarWidthChange: m, onBarThicknessChange: X, selectedMaterial: D, onMaterialChange: w, tuningMode: H, selectedPreset: $, customRatios: ll, fundamentalFrequency: Q, onTuningModeChange: T, onPresetChange: G, onCustomRatiosChange: C, onFundamentalChange: W, numCuts: Al, penaltyType: F, penaltyWeight: R, populationSize: K, maxGenerations: jl, onNumCutsChange: Ol, onPenaltyTypeChange: x, onPenaltyWeightChange: Tl, onPopulationSizeChange: Y, onMaxGenerationsChange: it, f1Priority: Dl, onF1PriorityChange: pl, numElements: ol, onNumElementsChange: Zl, minCutWidth: P, onMinCutWidthChange: rl, maxCutWidth: S, onMaxCutWidthChange: M, minCutDepth: _, onMinCutDepthChange: nl, maxCutDepth: ul, onMaxCutDepthChange: r, maxLengthTrim: z, onMaxLengthTrimChange: U, maxLengthExtend: q, onMaxLengthExtendChange: k, maxCores: el, onMaxCoresChange: ml, targetError: Ll, onTargetErrorChange: _l, seedGeneCode: Ht, onSeedGeneCodeChange: Ie }), f.jsxs("div", { className: "main-content", children: [f.jsx(z0, { isRunning: Ka, currentGeneration: Lt, maxGenerations: jl, bestFitness: Ja, onStart: at, onStop: Rt }), f.jsx(x0, { length: o, thickness: O, cuts: Wn, showDimensions: Wn.length > 0, effectiveLength: ua }), f.jsx(E0, { targetFrequencies: tt, computedFrequencies: ri, errorsInCents: na }), f.jsx(T0, { entries: De, targetFrequencies: tt, selectedGeneration: ea, onSelectGeneration: wn }), Wl && f.jsx(p0, { tuningError: Wl.tuningError, maxErrorCents: Wl.maxErrorCents, volumePercent: Wl.volumePercent, generations: Wl.generations, cuts: Wl.cuts, lengthTrim: Wl.lengthTrim, effectiveLength: Wl.effectiveLength, genes: Wl.bestIndividual.genes })] })] });
}
r0.createRoot(document.getElementById("root")).render(f.jsx(Z.StrictMode, { children: f.jsx(j0, {}) }));
