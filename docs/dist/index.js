var fa = Object.defineProperty;
var ca = (e, t) => {
  for (var n in t) fa(e, n, { get: t[n], enumerable: !0 });
};
var ll = {};
ca(ll, { MODE: () => da, NODE_ENV: () => pa, SSR: () => ma });
var da = 'production',
  pa = 'production',
  ma = !1;
function Ct(e, t, n) {
  return (
    (n = {
      path: t,
      exports: {},
      require: function (r, l) {
        return ha(r, l ?? n.path);
      },
    }),
    e(n, n.exports),
    n.exports
  );
}
function ha() {
  throw new Error(
    'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
  );
}
var ai = Object.getOwnPropertySymbols,
  va = Object.prototype.hasOwnProperty,
  ya = Object.prototype.propertyIsEnumerable;
function ga(e) {
  if (e == null)
    throw new TypeError(
      'Object.assign cannot be called with null or undefined',
    );
  return Object(e);
}
function wa() {
  try {
    if (!Object.assign) return !1;
    var e = new String('abc');
    if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1;
    for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (o) {
      return t[o];
    });
    if (r.join('') !== '0123456789') return !1;
    var l = {};
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (o) {
        l[o] = o;
      }),
      Object.keys(Object.assign({}, l)).join('') === 'abcdefghijklmnopqrst'
    );
  } catch (o) {
    return !1;
  }
}
var $ = wa()
    ? Object.assign
    : function (e, t) {
        for (var n, r = ga(e), l, o = 1; o < arguments.length; o++) {
          n = Object(arguments[o]);
          for (var i in n) va.call(n, i) && (r[i] = n[i]);
          if (ai) {
            l = ai(n);
            for (var u = 0; u < l.length; u++)
              ya.call(n, l[u]) && (r[l[u]] = n[l[u]]);
          }
        }
        return r;
      },
  Ea = Ct(function (e, t) {
    var n = 60103,
      r = 60106;
    (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
    var l = 60109,
      o = 60110,
      i = 60112;
    t.Suspense = 60113;
    var u = 60115,
      s = 60116;
    if (typeof Symbol == 'function' && Symbol.for) {
      var d = Symbol.for;
      (n = d('react.element')),
        (r = d('react.portal')),
        (t.Fragment = d('react.fragment')),
        (t.StrictMode = d('react.strict_mode')),
        (t.Profiler = d('react.profiler')),
        (l = d('react.provider')),
        (o = d('react.context')),
        (i = d('react.forward_ref')),
        (t.Suspense = d('react.suspense')),
        (u = d('react.memo')),
        (s = d('react.lazy'));
    }
    var w = typeof Symbol == 'function' && Symbol.iterator;
    function L(p) {
      return p === null || typeof p != 'object'
        ? null
        : ((p = (w && p[w]) || p['@@iterator']),
          typeof p == 'function' ? p : null);
    }
    function v(p) {
      for (
        var E = 'https://reactjs.org/docs/error-decoder.html?invariant=' + p,
          D = 1;
        D < arguments.length;
        D++
      )
        E += '&args[]=' + encodeURIComponent(arguments[D]);
      return (
        'Minified React error #' +
        p +
        '; visit ' +
        E +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    var C = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      T = {};
    function _(p, E, D) {
      (this.props = p),
        (this.context = E),
        (this.refs = T),
        (this.updater = D || C);
    }
    (_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (p, E) {
        if (typeof p != 'object' && typeof p != 'function' && p != null)
          throw Error(v(85));
        this.updater.enqueueSetState(this, p, E, 'setState');
      }),
      (_.prototype.forceUpdate = function (p) {
        this.updater.enqueueForceUpdate(this, p, 'forceUpdate');
      });
    function c() {}
    c.prototype = _.prototype;
    function a(p, E, D) {
      (this.props = p),
        (this.context = E),
        (this.refs = T),
        (this.updater = D || C);
    }
    var f = (a.prototype = new c());
    (f.constructor = a), $(f, _.prototype), (f.isPureReactComponent = !0);
    var m = { current: null },
      h = Object.prototype.hasOwnProperty,
      M = { key: !0, ref: !0, __self: !0, __source: !0 };
    function k(p, E, D) {
      var U,
        y = {},
        x = null,
        O = null;
      if (E != null)
        for (U in (E.ref !== void 0 && (O = E.ref),
        E.key !== void 0 && (x = '' + E.key),
        E))
          h.call(E, U) && !M.hasOwnProperty(U) && (y[U] = E[U]);
      var z = arguments.length - 2;
      if (z === 1) y.children = D;
      else if (1 < z) {
        for (var F = Array(z), G = 0; G < z; G++) F[G] = arguments[G + 2];
        y.children = F;
      }
      if (p && p.defaultProps)
        for (U in ((z = p.defaultProps), z)) y[U] === void 0 && (y[U] = z[U]);
      return {
        $$typeof: n,
        type: p,
        key: x,
        ref: O,
        props: y,
        _owner: m.current,
      };
    }
    function N(p, E) {
      return {
        $$typeof: n,
        type: p.type,
        key: E,
        ref: p.ref,
        props: p.props,
        _owner: p._owner,
      };
    }
    function R(p) {
      return typeof p == 'object' && p !== null && p.$$typeof === n;
    }
    function I(p) {
      var E = { '=': '=0', ':': '=2' };
      return (
        '$' +
        p.replace(/[=:]/g, function (D) {
          return E[D];
        })
      );
    }
    var H = /\/+/g;
    function b(p, E) {
      return typeof p == 'object' && p !== null && p.key != null
        ? I('' + p.key)
        : E.toString(36);
    }
    function Oe(p, E, D, U, y) {
      var x = typeof p;
      (x === 'undefined' || x === 'boolean') && (p = null);
      var O = !1;
      if (p === null) O = !0;
      else
        switch (x) {
          case 'string':
          case 'number':
            O = !0;
            break;
          case 'object':
            switch (p.$$typeof) {
              case n:
              case r:
                O = !0;
            }
        }
      if (O)
        return (
          (O = p),
          (y = y(O)),
          (p = U === '' ? '.' + b(O, 0) : U),
          Array.isArray(y)
            ? ((D = ''),
              p != null && (D = p.replace(H, '$&/') + '/'),
              Oe(y, E, D, '', function (G) {
                return G;
              }))
            : y != null &&
              (R(y) &&
                (y = N(
                  y,
                  D +
                    (!y.key || (O && O.key === y.key)
                      ? ''
                      : ('' + y.key).replace(H, '$&/') + '/') +
                    p,
                )),
              E.push(y)),
          1
        );
      if (((O = 0), (U = U === '' ? '.' : U + ':'), Array.isArray(p)))
        for (var z = 0; z < p.length; z++) {
          x = p[z];
          var F = U + b(x, z);
          O += Oe(x, E, D, F, y);
        }
      else if (((F = L(p)), typeof F == 'function'))
        for (p = F.call(p), z = 0; !(x = p.next()).done; )
          (x = x.value), (F = U + b(x, z++)), (O += Oe(x, E, D, F, y));
      else if (x === 'object')
        throw (
          ((E = '' + p),
          Error(
            v(
              31,
              E === '[object Object]'
                ? 'object with keys {' + Object.keys(p).join(', ') + '}'
                : E,
            ),
          ))
        );
      return O;
    }
    function X(p, E, D) {
      if (p == null) return p;
      var U = [],
        y = 0;
      return (
        Oe(p, U, '', '', function (x) {
          return E.call(D, x, y++);
        }),
        U
      );
    }
    function W(p) {
      if (p._status === -1) {
        var E = p._result;
        (E = E()),
          (p._status = 0),
          (p._result = E),
          E.then(
            function (D) {
              p._status === 0 &&
                ((D = D.default), (p._status = 1), (p._result = D));
            },
            function (D) {
              p._status === 0 && ((p._status = 2), (p._result = D));
            },
          );
      }
      if (p._status === 1) return p._result;
      throw p._result;
    }
    var rt = { current: null };
    function ee() {
      var p = rt.current;
      if (p === null) throw Error(v(321));
      return p;
    }
    var lt = {
      ReactCurrentDispatcher: rt,
      ReactCurrentBatchConfig: { transition: 0 },
      ReactCurrentOwner: m,
      IsSomeRendererActing: { current: !1 },
      assign: $,
    };
    (t.Children = {
      map: X,
      forEach: function (p, E, D) {
        X(
          p,
          function () {
            E.apply(this, arguments);
          },
          D,
        );
      },
      count: function (p) {
        var E = 0;
        return (
          X(p, function () {
            E++;
          }),
          E
        );
      },
      toArray: function (p) {
        return (
          X(p, function (E) {
            return E;
          }) || []
        );
      },
      only: function (p) {
        if (!R(p)) throw Error(v(143));
        return p;
      },
    }),
      (t.Component = _),
      (t.PureComponent = a),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lt),
      (t.cloneElement = function (p, E, D) {
        if (p == null) throw Error(v(267, p));
        var U = $({}, p.props),
          y = p.key,
          x = p.ref,
          O = p._owner;
        if (E != null) {
          if (
            (E.ref !== void 0 && ((x = E.ref), (O = m.current)),
            E.key !== void 0 && (y = '' + E.key),
            p.type && p.type.defaultProps)
          )
            var z = p.type.defaultProps;
          for (F in E)
            h.call(E, F) &&
              !M.hasOwnProperty(F) &&
              (U[F] = E[F] === void 0 && z !== void 0 ? z[F] : E[F]);
        }
        var F = arguments.length - 2;
        if (F === 1) U.children = D;
        else if (1 < F) {
          z = Array(F);
          for (var G = 0; G < F; G++) z[G] = arguments[G + 2];
          U.children = z;
        }
        return {
          $$typeof: n,
          type: p.type,
          key: y,
          ref: x,
          props: U,
          _owner: O,
        };
      }),
      (t.createContext = function (p, E) {
        return (
          E === void 0 && (E = null),
          (p = {
            $$typeof: o,
            _calculateChangedBits: E,
            _currentValue: p,
            _currentValue2: p,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (p.Provider = { $$typeof: l, _context: p }),
          (p.Consumer = p)
        );
      }),
      (t.createElement = k),
      (t.createFactory = function (p) {
        var E = k.bind(null, p);
        return (E.type = p), E;
      }),
      (t.createRef = function () {
        return { current: null };
      }),
      (t.forwardRef = function (p) {
        return { $$typeof: i, render: p };
      }),
      (t.isValidElement = R),
      (t.lazy = function (p) {
        return { $$typeof: s, _payload: { _status: -1, _result: p }, _init: W };
      }),
      (t.memo = function (p, E) {
        return { $$typeof: u, type: p, compare: E === void 0 ? null : E };
      }),
      (t.useCallback = function (p, E) {
        return ee().useCallback(p, E);
      }),
      (t.useContext = function (p, E) {
        return ee().useContext(p, E);
      }),
      (t.useDebugValue = function () {}),
      (t.useEffect = function (p, E) {
        return ee().useEffect(p, E);
      }),
      (t.useImperativeHandle = function (p, E, D) {
        return ee().useImperativeHandle(p, E, D);
      }),
      (t.useLayoutEffect = function (p, E) {
        return ee().useLayoutEffect(p, E);
      }),
      (t.useMemo = function (p, E) {
        return ee().useMemo(p, E);
      }),
      (t.useReducer = function (p, E, D) {
        return ee().useReducer(p, E, D);
      }),
      (t.useRef = function (p) {
        return ee().useRef(p);
      }),
      (t.useState = function (p) {
        return ee().useState(p);
      }),
      (t.version = '17.0.2');
  }),
  S = Ct(function (e) {
    e.exports = Ea;
  });
var fi = S.useContext,
  ci = S.useMemo,
  bn = S.useRef,
  me = S.useState;
var ka = Ct(function (e, t) {
    var n, r, l, o;
    if (
      typeof performance == 'object' &&
      typeof performance.now == 'function'
    ) {
      var i = performance;
      t.unstable_now = function () {
        return i.now();
      };
    } else {
      var u = Date,
        s = u.now();
      t.unstable_now = function () {
        return u.now() - s;
      };
    }
    if (typeof window == 'undefined' || typeof MessageChannel != 'function') {
      var d = null,
        w = null,
        L = function () {
          if (d !== null)
            try {
              var y = t.unstable_now();
              d(!0, y), (d = null);
            } catch (x) {
              throw (setTimeout(L, 0), x);
            }
        };
      (n = function (y) {
        d !== null ? setTimeout(n, 0, y) : ((d = y), setTimeout(L, 0));
      }),
        (r = function (y, x) {
          w = setTimeout(y, x);
        }),
        (l = function () {
          clearTimeout(w);
        }),
        (t.unstable_shouldYield = function () {
          return !1;
        }),
        (o = t.unstable_forceFrameRate = function () {});
    } else {
      var v = window.setTimeout,
        C = window.clearTimeout;
      if (typeof console != 'undefined') {
        var T = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != 'function' &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          ),
          typeof T != 'function' &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
            );
      }
      var _ = !1,
        c = null,
        a = -1,
        f = 5,
        m = 0;
      (t.unstable_shouldYield = function () {
        return t.unstable_now() >= m;
      }),
        (o = function () {}),
        (t.unstable_forceFrameRate = function (y) {
          0 > y || 125 < y
            ? console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
              )
            : (f = 0 < y ? Math.floor(1e3 / y) : 5);
        });
      var h = new MessageChannel(),
        M = h.port2;
      (h.port1.onmessage = function () {
        if (c !== null) {
          var y = t.unstable_now();
          m = y + f;
          try {
            c(!0, y) ? M.postMessage(null) : ((_ = !1), (c = null));
          } catch (x) {
            throw (M.postMessage(null), x);
          }
        } else _ = !1;
      }),
        (n = function (y) {
          (c = y), _ || ((_ = !0), M.postMessage(null));
        }),
        (r = function (y, x) {
          a = v(function () {
            y(t.unstable_now());
          }, x);
        }),
        (l = function () {
          C(a), (a = -1);
        });
    }
    function k(y, x) {
      var O = y.length;
      y.push(x);
      e: for (;;) {
        var z = (O - 1) >>> 1,
          F = y[z];
        if (F !== void 0 && 0 < I(F, x)) (y[z] = x), (y[O] = F), (O = z);
        else break e;
      }
    }
    function N(y) {
      return (y = y[0]), y === void 0 ? null : y;
    }
    function R(y) {
      var x = y[0];
      if (x !== void 0) {
        var O = y.pop();
        if (O !== x) {
          y[0] = O;
          e: for (var z = 0, F = y.length; z < F; ) {
            var G = 2 * (z + 1) - 1,
              ot = y[G],
              tn = G + 1,
              St = y[tn];
            if (ot !== void 0 && 0 > I(ot, O))
              St !== void 0 && 0 > I(St, ot)
                ? ((y[z] = St), (y[tn] = O), (z = tn))
                : ((y[z] = ot), (y[G] = O), (z = G));
            else if (St !== void 0 && 0 > I(St, O))
              (y[z] = St), (y[tn] = O), (z = tn);
            else break e;
          }
        }
        return x;
      }
      return null;
    }
    function I(y, x) {
      var O = y.sortIndex - x.sortIndex;
      return O !== 0 ? O : y.id - x.id;
    }
    var H = [],
      b = [],
      Oe = 1,
      X = null,
      W = 3,
      rt = !1,
      ee = !1,
      lt = !1;
    function p(y) {
      for (var x = N(b); x !== null; ) {
        if (x.callback === null) R(b);
        else if (x.startTime <= y)
          R(b), (x.sortIndex = x.expirationTime), k(H, x);
        else break;
        x = N(b);
      }
    }
    function E(y) {
      if (((lt = !1), p(y), !ee))
        if (N(H) !== null) (ee = !0), n(D);
        else {
          var x = N(b);
          x !== null && r(E, x.startTime - y);
        }
    }
    function D(y, x) {
      (ee = !1), lt && ((lt = !1), l()), (rt = !0);
      var O = W;
      try {
        for (
          p(x), X = N(H);
          X !== null &&
          (!(X.expirationTime > x) || (y && !t.unstable_shouldYield()));

        ) {
          var z = X.callback;
          if (typeof z == 'function') {
            (X.callback = null), (W = X.priorityLevel);
            var F = z(X.expirationTime <= x);
            (x = t.unstable_now()),
              typeof F == 'function' ? (X.callback = F) : X === N(H) && R(H),
              p(x);
          } else R(H);
          X = N(H);
        }
        if (X !== null) var G = !0;
        else {
          var ot = N(b);
          ot !== null && r(E, ot.startTime - x), (G = !1);
        }
        return G;
      } finally {
        (X = null), (W = O), (rt = !1);
      }
    }
    var U = o;
    (t.unstable_IdlePriority = 5),
      (t.unstable_ImmediatePriority = 1),
      (t.unstable_LowPriority = 4),
      (t.unstable_NormalPriority = 3),
      (t.unstable_Profiling = null),
      (t.unstable_UserBlockingPriority = 2),
      (t.unstable_cancelCallback = function (y) {
        y.callback = null;
      }),
      (t.unstable_continueExecution = function () {
        ee || rt || ((ee = !0), n(D));
      }),
      (t.unstable_getCurrentPriorityLevel = function () {
        return W;
      }),
      (t.unstable_getFirstCallbackNode = function () {
        return N(H);
      }),
      (t.unstable_next = function (y) {
        switch (W) {
          case 1:
          case 2:
          case 3:
            var x = 3;
            break;
          default:
            x = W;
        }
        var O = W;
        W = x;
        try {
          return y();
        } finally {
          W = O;
        }
      }),
      (t.unstable_pauseExecution = function () {}),
      (t.unstable_requestPaint = U),
      (t.unstable_runWithPriority = function (y, x) {
        switch (y) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            y = 3;
        }
        var O = W;
        W = y;
        try {
          return x();
        } finally {
          W = O;
        }
      }),
      (t.unstable_scheduleCallback = function (y, x, O) {
        var z = t.unstable_now();
        switch (
          (typeof O == 'object' && O !== null
            ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? z + O : z))
            : (O = z),
          y)
        ) {
          case 1:
            var F = -1;
            break;
          case 2:
            F = 250;
            break;
          case 5:
            F = 1073741823;
            break;
          case 4:
            F = 1e4;
            break;
          default:
            F = 5e3;
        }
        return (
          (F = O + F),
          (y = {
            id: Oe++,
            callback: x,
            priorityLevel: y,
            startTime: O,
            expirationTime: F,
            sortIndex: -1,
          }),
          O > z
            ? ((y.sortIndex = O),
              k(b, y),
              N(H) === null &&
                y === N(b) &&
                (lt ? l() : (lt = !0), r(E, O - z)))
            : ((y.sortIndex = F), k(H, y), ee || rt || ((ee = !0), n(D))),
          y
        );
      }),
      (t.unstable_wrapCallback = function (y) {
        var x = W;
        return function () {
          var O = W;
          W = x;
          try {
            return y.apply(this, arguments);
          } finally {
            W = O;
          }
        };
      });
  }),
  q = Ct(function (e) {
    e.exports = ka;
  });
function g(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
if (!S) throw Error(g(227));
var di = new Set(),
  nn = {};
function it(e, t) {
  _t(e, t), _t(e + 'Capture', t);
}
function _t(e, t) {
  for (nn[e] = t, e = 0; e < t.length; e++) di.add(t[e]);
}
var Me = !(
    typeof window == 'undefined' ||
    typeof window.document == 'undefined' ||
    typeof window.document.createElement == 'undefined'
  ),
  Sa =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pi = Object.prototype.hasOwnProperty,
  mi = {},
  hi = {};
function Ca(e) {
  return pi.call(hi, e)
    ? !0
    : pi.call(mi, e)
    ? !1
    : Sa.test(e)
    ? (hi[e] = !0)
    : ((mi[e] = !0), !1);
}
function _a(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function xa(e, t, n, r) {
  if (t === null || typeof t == 'undefined' || _a(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var te = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    te[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  te[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  te[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  te[e] = new se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    te[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  te[e] = new se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  te[e] = new se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  te[e] = new se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  te[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ol = /[\-:]([a-z])/g;
function il(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ol, il);
    te[t] = new se(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ol, il);
    te[t] = new se(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ol, il);
  te[t] = new se(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  te[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new se(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  te[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ul(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null,
    o =
      l !== null
        ? l.type === 0
        : r
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== 'o' && t[0] !== 'O') ||
            (t[1] !== 'n' && t[1] !== 'N')
          );
  o ||
    (xa(t, n, l, r) && (n = null),
    r || l === null
      ? Ca(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ut = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rn = 60103,
  st = 60106,
  De = 60107,
  sl = 60108,
  ln = 60114,
  al = 60109,
  fl = 60110,
  er = 60112,
  on = 60113,
  tr = 60120,
  nr = 60115,
  cl = 60116,
  dl = 60121,
  pl = 60128,
  vi = 60129,
  ml = 60130,
  hl = 60131;
typeof Symbol == 'function' &&
  Symbol.for &&
  ((Z = Symbol.for),
  (rn = Z('react.element')),
  (st = Z('react.portal')),
  (De = Z('react.fragment')),
  (sl = Z('react.strict_mode')),
  (ln = Z('react.profiler')),
  (al = Z('react.provider')),
  (fl = Z('react.context')),
  (er = Z('react.forward_ref')),
  (on = Z('react.suspense')),
  (tr = Z('react.suspense_list')),
  (nr = Z('react.memo')),
  (cl = Z('react.lazy')),
  (dl = Z('react.block')),
  Z('react.scope'),
  (pl = Z('react.opaque.id')),
  (vi = Z('react.debug_trace_mode')),
  (ml = Z('react.offscreen')),
  (hl = Z('react.legacy_hidden')));
var Z,
  yi = typeof Symbol == 'function' && Symbol.iterator;
function un(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (yi && e[yi]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var vl;
function sn(e) {
  if (vl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      vl = (t && t[1]) || '';
    }
  return (
    `
` +
    vl +
    e
  );
}
var yl = !1;
function rr(e, t) {
  if (!e || yl) return '';
  yl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u]))
                return (
                  `
` + l[i].replace(' at new ', ' at ')
                );
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (yl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? sn(e) : '';
}
function Pa(e) {
  switch (e.tag) {
    case 5:
      return sn(e.type);
    case 16:
      return sn('Lazy');
    case 13:
      return sn('Suspense');
    case 19:
      return sn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = rr(e.type, !1)), e;
    case 11:
      return (e = rr(e.type.render, !1)), e;
    case 22:
      return (e = rr(e.type._render, !1)), e;
    case 1:
      return (e = rr(e.type, !0)), e;
    default:
      return '';
  }
}
function xt(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case De:
      return 'Fragment';
    case st:
      return 'Portal';
    case ln:
      return 'Profiler';
    case sl:
      return 'StrictMode';
    case on:
      return 'Suspense';
    case tr:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case fl:
        return (e.displayName || 'Context') + '.Consumer';
      case al:
        return (e._context.displayName || 'Context') + '.Provider';
      case er:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ''),
          e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
        );
      case nr:
        return xt(e.type);
      case dl:
        return xt(e._render);
      case cl:
        (t = e._payload), (e = e._init);
        try {
          return xt(e(t));
        } catch (n) {}
    }
  return null;
}
function $e(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return e;
    default:
      return '';
  }
}
function gi(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Na(e) {
  var t = gi(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != 'undefined' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Na(e));
}
function wi(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = gi(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function or(e) {
  if (
    ((e = e || (typeof document != 'undefined' ? document : void 0)),
    typeof e == 'undefined')
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function gl(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ei(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $e(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function ki(e, t) {
  (t = t.checked), t != null && ul(e, 'checked', t, !1);
}
function El(e, t) {
  ki(e, t);
  var n = $e(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? wl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && wl(e, t.type, $e(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Si(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function wl(e, t, n) {
  (t !== 'number' || or(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
function Ta(e) {
  var t = '';
  return (
    S.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function kl(e, t) {
  return (
    (e = $({ children: void 0 }, t)),
    (t = Ta(t.children)) && (e.children = t),
    e
  );
}
function Pt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + $e(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ci(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: $e(n) };
}
function _i(e, t) {
  var n = $e(t.value),
    r = $e(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function xi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
var Cl = {
  html: 'http://www.w3.org/1999/xhtml',
  mathml: 'http://www.w3.org/1998/Math/MathML',
  svg: 'http://www.w3.org/2000/svg',
};
function Pi(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function _l(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Pi(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var ir,
  Ni = (function (e) {
    return typeof MSApp != 'undefined' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== Cl.svg || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        ir = ir || document.createElement('div'),
          ir.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function an(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fn = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  La = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(fn).forEach(function (e) {
  La.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fn[t] = fn[e]);
  });
});
function Ti(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (fn.hasOwnProperty(e) && fn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Li(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Ti(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Oa = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function xl(e, t) {
  if (t) {
    if (Oa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        !(
          typeof t.dangerouslySetInnerHTML == 'object' &&
          '__html' in t.dangerouslySetInnerHTML
        )
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(g(62));
  }
}
function Pl(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
function Nl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Tl = null,
  Nt = null,
  Tt = null;
function Oi(e) {
  if ((e = cn(e))) {
    if (typeof Tl != 'function') throw Error(g(280));
    var t = e.stateNode;
    t && ((t = ur(t)), Tl(e.stateNode, e.type, t));
  }
}
function Mi(e) {
  Nt ? (Tt ? Tt.push(e) : (Tt = [e])) : (Nt = e);
}
function Ri() {
  if (Nt) {
    var e = Nt,
      t = Tt;
    if (((Tt = Nt = null), Oi(e), t)) for (e = 0; e < t.length; e++) Oi(t[e]);
  }
}
function Ll(e, t) {
  return e(t);
}
function Ii(e, t, n, r, l) {
  return e(t, n, r, l);
}
function Ol() {}
var ji = Ll,
  at = !1,
  Ml = !1;
function Rl() {
  (Nt !== null || Tt !== null) && (Ol(), Ri());
}
function Ma(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return ji(e, t, n);
  } finally {
    (Ml = !1), Rl();
  }
}
function dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ur(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(g(231, t, typeof n));
  return n;
}
var Il = !1;
if (Me)
  try {
    (Lt = {}),
      Object.defineProperty(Lt, 'passive', {
        get: function () {
          Il = !0;
        },
      }),
      window.addEventListener('test', Lt, Lt),
      window.removeEventListener('test', Lt, Lt);
  } catch (e) {
    Il = !1;
  }
var Lt;
function Ra(e, t, n, r, l, o, i, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (w) {
    this.onError(w);
  }
}
var pn = !1,
  sr = null,
  ar = !1,
  jl = null,
  Ia = {
    onError: function (e) {
      (pn = !0), (sr = e);
    },
  };
function ja(e, t, n, r, l, o, i, u, s) {
  (pn = !1), (sr = null), Ra.apply(Ia, arguments);
}
function za(e, t, n, r, l, o, i, u, s) {
  if ((ja.apply(this, arguments), pn)) {
    if (pn) {
      var d = sr;
      (pn = !1), (sr = null);
    } else throw Error(g(198));
    ar || ((ar = !0), (jl = d));
  }
}
function ft(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 1026) != 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function zi(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Fi(e) {
  if (ft(e) !== e) throw Error(g(188));
}
function Fa(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ft(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Fi(l), e;
        if (o === r) return Fi(l), t;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Di(e) {
  if (((e = Fa(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function $i(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var Ui,
  zl,
  Bi,
  Vi,
  Fl = !1,
  _e = [],
  Ue = null,
  Be = null,
  Ve = null,
  mn = new Map(),
  hn = new Map(),
  vn = [],
  Ai =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Dl(e, t, n, r, l) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: n | 16,
    nativeEvent: l,
    targetContainers: [r],
  };
}
function Hi(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ue = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Be = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Ve = null;
      break;
    case 'pointerover':
    case 'pointerout':
      mn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      hn.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = Dl(t, n, r, l, o)),
      t !== null && ((t = cn(t)), t !== null && zl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Da(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (Ue = yn(Ue, e, t, n, r, l)), !0;
    case 'dragenter':
      return (Be = yn(Be, e, t, n, r, l)), !0;
    case 'mouseover':
      return (Ve = yn(Ve, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return mn.set(o, yn(mn.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), hn.set(o, yn(hn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function $a(e) {
  var t = ct(e.target);
  if (t !== null) {
    var n = ft(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zi(n)), t !== null)) {
          (e.blockedOn = t),
            Vi(e.lanePriority, function () {
              q.unstable_runWithPriority(e.priority, function () {
                Bi(n);
              });
            });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function fr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = cn(n)), t !== null && zl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Wi(e, t, n) {
  fr(e) && n.delete(t);
}
function Ua() {
  for (Fl = !1; 0 < _e.length; ) {
    var e = _e[0];
    if (e.blockedOn !== null) {
      (e = cn(e.blockedOn)), e !== null && Ui(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = $l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && _e.shift();
  }
  Ue !== null && fr(Ue) && (Ue = null),
    Be !== null && fr(Be) && (Be = null),
    Ve !== null && fr(Ve) && (Ve = null),
    mn.forEach(Wi),
    hn.forEach(Wi);
}
function gn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fl ||
      ((Fl = !0), q.unstable_scheduleCallback(q.unstable_NormalPriority, Ua)));
}
function Qi(e) {
  function t(l) {
    return gn(l, e);
  }
  if (0 < _e.length) {
    gn(_e[0], e);
    for (var n = 1; n < _e.length; n++) {
      var r = _e[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ue !== null && gn(Ue, e),
      Be !== null && gn(Be, e),
      Ve !== null && gn(Ve, e),
      mn.forEach(t),
      hn.forEach(t),
      n = 0;
    n < vn.length;
    n++
  )
    (r = vn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vn.length && ((n = vn[0]), n.blockedOn === null); )
    $a(n), n.blockedOn === null && vn.shift();
}
function cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ot = {
    animationend: cr('Animation', 'AnimationEnd'),
    animationiteration: cr('Animation', 'AnimationIteration'),
    animationstart: cr('Animation', 'AnimationStart'),
    transitionend: cr('Transition', 'TransitionEnd'),
  },
  Ul = {},
  Yi = {};
Me &&
  ((Yi = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ot.animationend.animation,
    delete Ot.animationiteration.animation,
    delete Ot.animationstart.animation),
  'TransitionEvent' in window || delete Ot.transitionend.transition);
function dr(e) {
  if (Ul[e]) return Ul[e];
  if (!Ot[e]) return e;
  var t = Ot[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yi) return (Ul[e] = t[n]);
  return e;
}
var Ki = dr('animationend'),
  Xi = dr('animationiteration'),
  Gi = dr('animationstart'),
  Zi = dr('transitionend'),
  Ji = new Map(),
  Bl = new Map(),
  Ba = [
    'abort',
    'abort',
    Ki,
    'animationEnd',
    Xi,
    'animationIteration',
    Gi,
    'animationStart',
    'canplay',
    'canPlay',
    'canplaythrough',
    'canPlayThrough',
    'durationchange',
    'durationChange',
    'emptied',
    'emptied',
    'encrypted',
    'encrypted',
    'ended',
    'ended',
    'error',
    'error',
    'gotpointercapture',
    'gotPointerCapture',
    'load',
    'load',
    'loadeddata',
    'loadedData',
    'loadedmetadata',
    'loadedMetadata',
    'loadstart',
    'loadStart',
    'lostpointercapture',
    'lostPointerCapture',
    'playing',
    'playing',
    'progress',
    'progress',
    'seeking',
    'seeking',
    'stalled',
    'stalled',
    'suspend',
    'suspend',
    'timeupdate',
    'timeUpdate',
    Zi,
    'transitionEnd',
    'waiting',
    'waiting',
  ];
function Vl(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      l = e[n + 1];
    (l = 'on' + (l[0].toUpperCase() + l.slice(1))),
      Bl.set(r, t),
      Ji.set(r, l),
      it(l, [r]);
  }
}
var Va = q.unstable_now;
Va();
var B = 8;
function Mt(e) {
  if ((1 & e) != 0) return (B = 15), 1;
  if ((2 & e) != 0) return (B = 14), 2;
  if ((4 & e) != 0) return (B = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? ((B = 12), t)
    : (e & 32) != 0
    ? ((B = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((B = 10), t)
        : (e & 256) != 0
        ? ((B = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((B = 8), t)
            : (e & 4096) != 0
            ? ((B = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((B = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((B = 5), t)
                    : e & 67108864
                    ? ((B = 4), 67108864)
                    : (e & 134217728) != 0
                    ? ((B = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? ((B = 2), t)
                        : (1073741824 & e) != 0
                        ? ((B = 1), 1073741824)
                        : ((B = 8), e))))));
}
function Aa(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Ha(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(g(358, e));
  }
}
function wn(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return (B = 0);
  var r = 0,
    l = 0,
    o = e.expiredLanes,
    i = e.suspendedLanes,
    u = e.pingedLanes;
  if (o !== 0) (r = o), (l = B = 15);
  else if (((o = n & 134217727), o !== 0)) {
    var s = o & ~i;
    s !== 0
      ? ((r = Mt(s)), (l = B))
      : ((u &= o), u !== 0 && ((r = Mt(u)), (l = B)));
  } else
    (o = n & ~i),
      o !== 0 ? ((r = Mt(o)), (l = B)) : u !== 0 && ((r = Mt(u)), (l = B));
  if (r === 0) return 0;
  if (
    ((r = 31 - Ae(r)),
    (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)),
    t !== 0 && t !== r && (t & i) == 0)
  ) {
    if ((Mt(t), l <= B)) return t;
    B = l;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ae(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function qi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pr(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = Rt(24 & ~t)), e === 0 ? pr(10, t) : e;
    case 10:
      return (e = Rt(192 & ~t)), e === 0 ? pr(8, t) : e;
    case 8:
      return (
        (e = Rt(3584 & ~t)),
        e === 0 && ((e = Rt(4186112 & ~t)), e === 0 && (e = 512)),
        e
      );
    case 2:
      return (t = Rt(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(g(358, e));
}
function Rt(e) {
  return e & -e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mr(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  (e.suspendedLanes &= r),
    (e.pingedLanes &= r),
    (e = e.eventTimes),
    (t = 31 - Ae(t)),
    (e[t] = n);
}
var Ae = Math.clz32 ? Math.clz32 : Wa,
  Qa = Math.log,
  Ya = Math.LN2;
function Wa(e) {
  return e === 0 ? 32 : (31 - ((Qa(e) / Ya) | 0)) | 0;
}
var Ka = q.unstable_UserBlockingPriority,
  Xa = q.unstable_runWithPriority,
  hr = !0;
function Ga(e, t, n, r) {
  at || Ol();
  var l = Hl,
    o = at;
  at = !0;
  try {
    Ii(l, e, t, n, r);
  } finally {
    (at = o) || Rl();
  }
}
function Za(e, t, n, r) {
  Xa(Ka, Hl.bind(null, e, t, n, r));
}
function Hl(e, t, n, r) {
  if (hr) {
    var l;
    if ((l = (t & 4) == 0) && 0 < _e.length && -1 < Ai.indexOf(e))
      (e = Dl(null, e, t, n, r)), _e.push(e);
    else {
      var o = $l(e, t, n, r);
      if (o === null) l && Hi(e, r);
      else {
        if (l) {
          if (-1 < Ai.indexOf(e)) {
            (e = Dl(o, e, t, n, r)), _e.push(e);
            return;
          }
          if (Da(o, e, t, n, r)) return;
          Hi(e, r);
        }
        bi(e, t, r, null, n);
      }
    }
  }
}
function $l(e, t, n, r) {
  var l = Nl(r);
  if (((l = ct(l)), l !== null)) {
    var o = ft(l);
    if (o === null) l = null;
    else {
      var i = o.tag;
      if (i === 13) {
        if (((l = zi(o)), l !== null)) return l;
        l = null;
      } else if (i === 3) {
        if (o.stateNode.hydrate)
          return o.tag === 3 ? o.stateNode.containerInfo : null;
        l = null;
      } else o !== l && (l = null);
    }
  }
  return bi(e, t, r, l, n), null;
}
var He = null,
  Wl = null,
  vr = null;
function eu() {
  if (vr) return vr;
  var e,
    t = Wl,
    n = t.length,
    r,
    l = 'value' in He ? He.value : He.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (vr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function yr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function gr() {
  return !0;
}
function tu() {
  return !1;
}
function he(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? gr
        : tu),
      (this.isPropagationStopped = tu),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = gr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = gr));
      },
      persist: function () {},
      isPersistent: gr,
    }),
    t
  );
}
var It = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ql = he(It),
  En = $({}, It, { view: 0, detail: 0 }),
  Ja = he(En),
  Yl,
  Kl,
  kn,
  wr = $({}, En, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== kn &&
            (kn && e.type === 'mousemove'
              ? ((Yl = e.screenX - kn.screenX), (Kl = e.screenY - kn.screenY))
              : (Kl = Yl = 0),
            (kn = e)),
          Yl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Kl;
    },
  }),
  nu = he(wr),
  qa = $({}, wr, { dataTransfer: 0 }),
  ba = he(qa),
  ef = $({}, En, { relatedTarget: 0 }),
  Gl = he(ef),
  tf = $({}, It, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nf = he(tf),
  rf = $({}, It, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  lf = he(rf),
  of = $({}, It, { data: 0 }),
  ru = he(of),
  uf = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  sf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  af = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function ff(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = af[e]) ? !!t[e] : !1;
}
function Xl() {
  return ff;
}
var cf = $({}, En, {
    key: function (e) {
      if (e.key) {
        var t = uf[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = yr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? sf[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xl,
    charCode: function (e) {
      return e.type === 'keypress' ? yr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? yr(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  df = he(cf),
  pf = $({}, wr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  lu = he(pf),
  mf = $({}, En, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xl,
  }),
  hf = he(mf),
  vf = $({}, It, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yf = he(vf),
  gf = $({}, wr, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  wf = he(gf),
  Ef = [9, 13, 27, 32],
  Zl = Me && 'CompositionEvent' in window,
  Sn = null;
Me && 'documentMode' in document && (Sn = document.documentMode);
var kf = Me && 'TextEvent' in window && !Sn,
  ou = Me && (!Zl || (Sn && 8 < Sn && 11 >= Sn)),
  iu = String.fromCharCode(32),
  uu = !1;
function su(e, t) {
  switch (e) {
    case 'keyup':
      return Ef.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function au(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var jt = !1;
function Sf(e, t) {
  switch (e) {
    case 'compositionend':
      return au(t);
    case 'keypress':
      return t.which !== 32 ? null : ((uu = !0), iu);
    case 'textInput':
      return (e = t.data), e === iu && uu ? null : e;
    default:
      return null;
  }
}
function Cf(e, t) {
  if (jt)
    return e === 'compositionend' || (!Zl && su(e, t))
      ? ((e = eu()), (vr = Wl = He = null), (jt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return ou && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var _f = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!_f[e.type] : t === 'textarea';
}
function cu(e, t, n, r) {
  Mi(r),
    (t = Er(t, 'onChange')),
    0 < t.length &&
      ((n = new Ql('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cn = null,
  _n = null;
function xf(e) {
  du(e, 0);
}
function kr(e) {
  var t = zt(e);
  if (wi(t)) return e;
}
function Pf(e, t) {
  if (e === 'change') return t;
}
var pu = !1;
Me &&
  (Me
    ? ((Cr = 'oninput' in document),
      Cr ||
        ((Jl = document.createElement('div')),
        Jl.setAttribute('oninput', 'return;'),
        (Cr = typeof Jl.oninput == 'function')),
      (Sr = Cr))
    : (Sr = !1),
  (pu = Sr && (!document.documentMode || 9 < document.documentMode)));
var Sr, Cr, Jl;
function hu() {
  Cn && (Cn.detachEvent('onpropertychange', mu), (_n = Cn = null));
}
function mu(e) {
  if (e.propertyName === 'value' && kr(_n)) {
    var t = [];
    if ((cu(t, _n, e, Nl(e)), (e = xf), at)) e(t);
    else {
      at = !0;
      try {
        Ll(e, t);
      } finally {
        (at = !1), Rl();
      }
    }
  }
}
function Nf(e, t, n) {
  e === 'focusin'
    ? (hu(), (Cn = t), (_n = n), Cn.attachEvent('onpropertychange', mu))
    : e === 'focusout' && hu();
}
function Tf(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return kr(_n);
}
function Lf(e, t) {
  if (e === 'click') return kr(t);
}
function Of(e, t) {
  if (e === 'input' || e === 'change') return kr(t);
}
function Mf(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
var ye = typeof Object.is == 'function' ? Object.is : Mf,
  Rf = Object.prototype.hasOwnProperty;
function xn(e, t) {
  if (ye(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++)
    if (!Rf.call(t, n[r]) || !ye(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function vu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yu(e, t) {
  var n = vu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = vu(n);
  }
}
function gu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? gu(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function wu() {
  for (var e = window, t = or(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch (r) {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = or(e.document);
  }
  return t;
}
function ql(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
var If = Me && 'documentMode' in document && 11 >= document.documentMode,
  Ft = null,
  bl = null,
  Pn = null,
  eo = !1;
function Eu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  eo ||
    Ft == null ||
    Ft !== or(r) ||
    ((r = Ft),
    'selectionStart' in r && ql(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pn && xn(Pn, r)) ||
      ((Pn = r),
      (r = Er(bl, 'onSelect')),
      0 < r.length &&
        ((t = new Ql('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ft))));
}
Vl(
  'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
    ' ',
  ),
  0,
);
Vl(
  'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
    ' ',
  ),
  1,
);
Vl(Ba, 2);
for (
  var ku =
      'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
        ' ',
      ),
    to = 0;
  to < ku.length;
  to++
)
  Bl.set(ku[to], 0);
_t('onMouseEnter', ['mouseout', 'mouseover']);
_t('onMouseLeave', ['mouseout', 'mouseover']);
_t('onPointerEnter', ['pointerout', 'pointerover']);
_t('onPointerLeave', ['pointerout', 'pointerover']);
it(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
it(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
it('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
it(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
it(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
it(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var Nn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Su = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Nn));
function Cu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), za(r, t, void 0, e), (e.currentTarget = null);
}
function du(e, t) {
  t = (t & 4) != 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Cu(l, u, d), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Cu(l, u, d), (o = s);
        }
    }
  }
  if (ar) throw ((e = jl), (ar = !1), (jl = null), e);
}
function V(e, t) {
  var n = xu(t),
    r = e + '__bubble';
  n.has(r) || (_u(t, e, 2, !1), n.add(r));
}
var Pu = '_reactListening' + Math.random().toString(36).slice(2);
function Tu(e) {
  e[Pu] ||
    ((e[Pu] = !0),
    di.forEach(function (t) {
      Su.has(t) || Nu(t, !1, e, null), Nu(t, !0, e, null);
    }));
}
function Nu(e, t, n, r) {
  var l = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    o = n;
  if (
    (e === 'selectionchange' && n.nodeType !== 9 && (o = n.ownerDocument),
    r !== null && !t && Su.has(e))
  ) {
    if (e !== 'scroll') return;
    (l |= 2), (o = r);
  }
  var i = xu(o),
    u = e + '__' + (t ? 'capture' : 'bubble');
  i.has(u) || (t && (l |= 4), _u(o, e, l, t), i.add(u));
}
function _u(e, t, n, r) {
  var l = Bl.get(t);
  switch (l === void 0 ? 2 : l) {
    case 0:
      l = Ga;
      break;
    case 1:
      l = Za;
      break;
    default:
      l = Hl;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Il ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function bi(e, t, n, r, l) {
  var o = r;
  if ((t & 1) == 0 && (t & 2) == 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = ct(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ma(function () {
    var d = o,
      w = Nl(n),
      L = [];
    e: {
      var v = Ji.get(e);
      if (v !== void 0) {
        var C = Ql,
          T = e;
        switch (e) {
          case 'keypress':
            if (yr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            C = df;
            break;
          case 'focusin':
            (T = 'focus'), (C = Gl);
            break;
          case 'focusout':
            (T = 'blur'), (C = Gl);
            break;
          case 'beforeblur':
          case 'afterblur':
            C = Gl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            C = nu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            C = ba;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            C = hf;
            break;
          case Ki:
          case Xi:
          case Gi:
            C = nf;
            break;
          case Zi:
            C = yf;
            break;
          case 'scroll':
            C = Ja;
            break;
          case 'wheel':
            C = wf;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            C = lf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            C = lu;
        }
        var _ = (t & 4) != 0,
          c = !_ && e === 'scroll',
          a = _ ? (v !== null ? v + 'Capture' : null) : v;
        _ = [];
        for (var f = d, m; f !== null; ) {
          m = f;
          var h = m.stateNode;
          if (
            (m.tag === 5 &&
              h !== null &&
              ((m = h),
              a !== null && ((h = dn(f, a)), h != null && _.push(Tn(f, h, m)))),
            c)
          )
            break;
          f = f.return;
        }
        0 < _.length &&
          ((v = new C(v, T, null, n, w)), L.push({ event: v, listeners: _ }));
      }
    }
    if ((t & 7) == 0) {
      e: {
        if (
          ((v = e === 'mouseover' || e === 'pointerover'),
          (C = e === 'mouseout' || e === 'pointerout'),
          v &&
            (t & 16) == 0 &&
            (T = n.relatedTarget || n.fromElement) &&
            (ct(T) || T[$t]))
        )
          break e;
        if (
          (C || v) &&
          ((v =
            w.window === w
              ? w
              : (v = w.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          C
            ? ((T = n.relatedTarget || n.toElement),
              (C = d),
              (T = T ? ct(T) : null),
              T !== null &&
                ((c = ft(T)), T !== c || (T.tag !== 5 && T.tag !== 6)) &&
                (T = null))
            : ((C = null), (T = d)),
          C !== T)
        ) {
          if (
            ((_ = nu),
            (h = 'onMouseLeave'),
            (a = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((_ = lu),
              (h = 'onPointerLeave'),
              (a = 'onPointerEnter'),
              (f = 'pointer')),
            (c = C == null ? v : zt(C)),
            (m = T == null ? v : zt(T)),
            (v = new _(h, f + 'leave', C, n, w)),
            (v.target = c),
            (v.relatedTarget = m),
            (h = null),
            ct(w) === d &&
              ((_ = new _(a, f + 'enter', T, n, w)),
              (_.target = m),
              (_.relatedTarget = c),
              (h = _)),
            (c = h),
            C && T)
          )
            t: {
              for (_ = C, a = T, f = 0, m = _; m; m = Dt(m)) f++;
              for (m = 0, h = a; h; h = Dt(h)) m++;
              for (; 0 < f - m; ) (_ = Dt(_)), f--;
              for (; 0 < m - f; ) (a = Dt(a)), m--;
              for (; f--; ) {
                if (_ === a || (a !== null && _ === a.alternate)) break t;
                (_ = Dt(_)), (a = Dt(a));
              }
              _ = null;
            }
          else _ = null;
          C !== null && Lu(L, v, C, _, !1),
            T !== null && c !== null && Lu(L, c, T, _, !0);
        }
      }
      e: {
        if (
          ((v = d ? zt(d) : window),
          (C = v.nodeName && v.nodeName.toLowerCase()),
          C === 'select' || (C === 'input' && v.type === 'file'))
        )
          var M = Pf;
        else if (fu(v))
          if (pu) M = Of;
          else {
            M = Tf;
            var k = Nf;
          }
        else
          (C = v.nodeName) &&
            C.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (M = Lf);
        if (M && (M = M(e, d))) {
          cu(L, M, n, w);
          break e;
        }
        k && k(e, v, d),
          e === 'focusout' &&
            (k = v._wrapperState) &&
            k.controlled &&
            v.type === 'number' &&
            wl(v, 'number', v.value);
      }
      switch (((k = d ? zt(d) : window), e)) {
        case 'focusin':
          (fu(k) || k.contentEditable === 'true') &&
            ((Ft = k), (bl = d), (Pn = null));
          break;
        case 'focusout':
          Pn = bl = Ft = null;
          break;
        case 'mousedown':
          eo = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (eo = !1), Eu(L, n, w);
          break;
        case 'selectionchange':
          if (If) break;
        case 'keydown':
        case 'keyup':
          Eu(L, n, w);
      }
      var N;
      if (Zl)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart';
              break e;
            case 'compositionend':
              R = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              R = 'onCompositionUpdate';
              break e;
          }
          R = void 0;
        }
      else
        jt
          ? su(e, n) && (R = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart');
      R &&
        (ou &&
          n.locale !== 'ko' &&
          (jt || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && jt && (N = eu())
            : ((He = w),
              (Wl = 'value' in He ? He.value : He.textContent),
              (jt = !0))),
        (k = Er(d, R)),
        0 < k.length &&
          ((R = new ru(R, e, null, n, w)),
          L.push({ event: R, listeners: k }),
          N ? (R.data = N) : ((N = au(n)), N !== null && (R.data = N)))),
        (N = kf ? Sf(e, n) : Cf(e, n)) &&
          ((d = Er(d, 'onBeforeInput')),
          0 < d.length &&
            ((w = new ru('onBeforeInput', 'beforeinput', null, n, w)),
            L.push({ event: w, listeners: d }),
            (w.data = N)));
    }
    du(L, t);
  });
}
function Tn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Er(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = dn(e, n)),
      o != null && r.unshift(Tn(e, o, l)),
      (o = dn(e, t)),
      o != null && r.push(Tn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Lu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((s = dn(n, o)), s != null && i.unshift(Tn(n, s, u)))
        : l || ((s = dn(n, o)), s != null && i.push(Tn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
function _r() {}
var no = null,
  ro = null;
function Ou(e, t) {
  switch (e) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!t.autoFocus;
  }
  return !1;
}
function lo(e, t) {
  return (
    e === 'textarea' ||
    e === 'option' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Mu = typeof setTimeout == 'function' ? setTimeout : void 0,
  jf = typeof clearTimeout == 'function' ? clearTimeout : void 0;
function oo(e) {
  e.nodeType === 1
    ? (e.textContent = '')
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ''));
}
function Ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function Ru(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var io = 0;
function zf(e) {
  return { $$typeof: pl, toString: e, valueOf: e };
}
var xr = Math.random().toString(36).slice(2),
  We = '__reactFiber$' + xr,
  Pr = '__reactProps$' + xr,
  $t = '__reactContainer$' + xr,
  Iu = '__reactEvents$' + xr;
function ct(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[$t] || n[We])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ru(e); e !== null; ) {
          if ((n = e[We])) return n;
          e = Ru(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cn(e) {
  return (
    (e = e[We] || e[$t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function ur(e) {
  return e[Pr] || null;
}
function xu(e) {
  var t = e[Iu];
  return t === void 0 && (t = e[Iu] = new Set()), t;
}
var uo = [],
  Bt = -1;
function Qe(e) {
  return { current: e };
}
function A(e) {
  0 > Bt || ((e.current = uo[Bt]), (uo[Bt] = null), Bt--);
}
function Q(e, t) {
  Bt++, (uo[Bt] = e.current), (e.current = t);
}
var Ye = {},
  le = Qe(Ye),
  fe = Qe(!1),
  dt = Ye;
function Vt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ye;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ce(e) {
  return (e = e.childContextTypes), e != null;
}
function Nr() {
  A(fe), A(le);
}
function ju(e, t, n) {
  if (le.current !== Ye) throw Error(g(168));
  Q(le, t), Q(fe, n);
}
function zu(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in e)) throw Error(g(108, xt(t) || 'Unknown', l));
  return $({}, n, r);
}
function Tr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ye),
    (dt = le.current),
    Q(le, e),
    Q(fe, fe.current),
    !0
  );
}
function Fu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = zu(e, t, dt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(fe),
      A(le),
      Q(le, e))
    : A(fe),
    Q(fe, n);
}
var so = null,
  pt = null,
  Ff = q.unstable_runWithPriority,
  ao = q.unstable_scheduleCallback,
  fo = q.unstable_cancelCallback,
  Df = q.unstable_shouldYield,
  Du = q.unstable_requestPaint,
  co = q.unstable_now,
  $f = q.unstable_getCurrentPriorityLevel,
  Lr = q.unstable_ImmediatePriority,
  $u = q.unstable_UserBlockingPriority,
  Uu = q.unstable_NormalPriority,
  Bu = q.unstable_LowPriority,
  Vu = q.unstable_IdlePriority,
  po = {},
  Uf = Du !== void 0 ? Du : function () {},
  Re = null,
  Or = null,
  mo = !1,
  Au = co(),
  oe =
    1e4 > Au
      ? co
      : function () {
          return co() - Au;
        };
function At() {
  switch ($f()) {
    case Lr:
      return 99;
    case $u:
      return 98;
    case Uu:
      return 97;
    case Bu:
      return 96;
    case Vu:
      return 95;
    default:
      throw Error(g(332));
  }
}
function Hu(e) {
  switch (e) {
    case 99:
      return Lr;
    case 98:
      return $u;
    case 97:
      return Uu;
    case 96:
      return Bu;
    case 95:
      return Vu;
    default:
      throw Error(g(332));
  }
}
function mt(e, t) {
  return (e = Hu(e)), Ff(e, t);
}
function Ln(e, t, n) {
  return (e = Hu(e)), ao(e, t, n);
}
function xe() {
  if (Or !== null) {
    var e = Or;
    (Or = null), fo(e);
  }
  Wu();
}
function Wu() {
  if (!mo && Re !== null) {
    mo = !0;
    var e = 0;
    try {
      var t = Re;
      mt(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do n = n(!0);
          while (n !== null);
        }
      }),
        (Re = null);
    } catch (n) {
      throw (Re !== null && (Re = Re.slice(e + 1)), ao(Lr, xe), n);
    } finally {
      mo = !1;
    }
  }
}
var Bf = ut.ReactCurrentBatchConfig;
function Se(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Mr = Qe(null),
  Rr = null,
  Ht = null,
  Ir = null;
function ho() {
  Ir = Ht = Rr = null;
}
function vo(e) {
  var t = Mr.current;
  A(Mr), (e.type._context._currentValue = t);
}
function Qu(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function Wt(e, t) {
  (Rr = e),
    (Ir = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) != 0 && (Ce = !0), (e.firstContext = null));
}
function ge(e, t) {
  if (Ir !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != 'number' || t === 1073741823) &&
        ((Ir = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      Ht === null)
    ) {
      if (Rr === null) throw Error(g(308));
      (Ht = t),
        (Rr.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else Ht = Ht.next = t;
  return e._currentValue;
}
var Ke = !1;
function yo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function Yu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Xe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ge(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
}
function Ku(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Mn(e, t, n, r) {
  var l = e.updateQueue;
  Ke = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      d = s.next;
    (s.next = null), i === null ? (o = d) : (i.next = d), (i = s);
    var w = e.alternate;
    if (w !== null) {
      w = w.updateQueue;
      var L = w.lastBaseUpdate;
      L !== i &&
        (L === null ? (w.firstBaseUpdate = d) : (L.next = d),
        (w.lastBaseUpdate = s));
    }
  }
  if (o !== null) {
    (L = l.baseState), (i = 0), (w = d = s = null);
    do {
      u = o.lane;
      var v = o.eventTime;
      if ((r & u) === u) {
        w !== null &&
          (w = w.next =
            {
              eventTime: v,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var C = e,
            T = o;
          switch (((u = t), (v = n), T.tag)) {
            case 1:
              if (((C = T.payload), typeof C == 'function')) {
                L = C.call(v, L, u);
                break e;
              }
              L = C;
              break e;
            case 3:
              C.flags = (C.flags & -4097) | 64;
            case 0:
              if (
                ((C = T.payload),
                (u = typeof C == 'function' ? C.call(v, L, u) : C),
                u == null)
              )
                break e;
              L = $({}, L, u);
              break e;
            case 2:
              Ke = !0;
          }
        }
        o.callback !== null &&
          ((e.flags |= 32),
          (u = l.effects),
          u === null ? (l.effects = [o]) : u.push(o));
      } else
        (v = {
          eventTime: v,
          lane: u,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          w === null ? ((d = w = v), (s = L)) : (w = w.next = v),
          (i |= u);
      if (((o = o.next), o === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (o = u.next),
          (u.next = null),
          (l.lastBaseUpdate = u),
          (l.shared.pending = null);
      }
    } while (1);
    w === null && (s = L),
      (l.baseState = s),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = w),
      (On |= i),
      (e.lanes = i),
      (e.memoizedState = L);
  }
}
function Xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var Gu = new S.Component().refs;
function jr(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zr = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ft(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      l = Ze(e),
      o = Xe(r, l);
    (o.payload = t), n != null && (o.callback = n), Ge(e, o), Je(e, l, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      l = Ze(e),
      o = Xe(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      Ge(e, o),
      Je(e, l, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = Ze(e),
      l = Xe(n, r);
    (l.tag = 2), t != null && (l.callback = t), Ge(e, l), Je(e, r, n);
  },
};
function Zu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xn(n, r) || !xn(l, o)
      : !0
  );
}
function Ju(e, t, n) {
  var r = !1,
    l = Ye,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = ge(o))
      : ((l = ce(t) ? dt : le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Vt(e, l) : Ye)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zr),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function qu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zr.enqueueReplaceState(t, t.state, null);
}
function go(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Gu), yo(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = ge(o))
    : ((o = ce(t) ? dt : le.current), (l.context = Vt(e, o))),
    Mn(e, n, l, r),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (jr(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && zr.enqueueReplaceState(l, l.state, null),
      Mn(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4);
}
var Fr = Array.isArray;
function Rn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (o) {
            var i = r.refs;
            i === Gu && (i = r.refs = {}),
              o === null ? delete i[l] : (i[l] = o);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != 'string') throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function Dr(e, t) {
  if (e.type !== 'textarea')
    throw Error(
      g(
        31,
        Object.prototype.toString.call(t) === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : t,
      ),
    );
}
function bu(e) {
  function t(c, a) {
    if (e) {
      var f = c.lastEffect;
      f !== null
        ? ((f.nextEffect = a), (c.lastEffect = a))
        : (c.firstEffect = c.lastEffect = a),
        (a.nextEffect = null),
        (a.flags = 8);
    }
  }
  function n(c, a) {
    if (!e) return null;
    for (; a !== null; ) t(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; )
      a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = qe(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function o(c, a, f) {
    return (
      (c.index = f),
      e
        ? ((f = c.alternate),
          f !== null
            ? ((f = f.index), f < a ? ((c.flags = 2), a) : f)
            : ((c.flags = 2), a))
        : a
    );
  }
  function i(c) {
    return e && c.alternate === null && (c.flags = 2), c;
  }
  function u(c, a, f, m) {
    return a === null || a.tag !== 6
      ? ((a = wo(f, c.mode, m)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function s(c, a, f, m) {
    return a !== null && a.elementType === f.type
      ? ((m = l(a, f.props)), (m.ref = Rn(c, a, f)), (m.return = c), m)
      : ((m = $r(f.type, f.key, f.props, null, c.mode, m)),
        (m.ref = Rn(c, a, f)),
        (m.return = c),
        m);
  }
  function d(c, a, f, m) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = Eo(f, c.mode, m)), (a.return = c), a)
      : ((a = l(a, f.children || [])), (a.return = c), a);
  }
  function w(c, a, f, m, h) {
    return a === null || a.tag !== 7
      ? ((a = Qt(f, c.mode, m, h)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function L(c, a, f) {
    if (typeof a == 'string' || typeof a == 'number')
      return (a = wo('' + a, c.mode, f)), (a.return = c), a;
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case rn:
          return (
            (f = $r(a.type, a.key, a.props, null, c.mode, f)),
            (f.ref = Rn(c, null, a)),
            (f.return = c),
            f
          );
        case st:
          return (a = Eo(a, c.mode, f)), (a.return = c), a;
      }
      if (Fr(a) || un(a))
        return (a = Qt(a, c.mode, f, null)), (a.return = c), a;
      Dr(c, a);
    }
    return null;
  }
  function v(c, a, f, m) {
    var h = a !== null ? a.key : null;
    if (typeof f == 'string' || typeof f == 'number')
      return h !== null ? null : u(c, a, '' + f, m);
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case rn:
          return f.key === h
            ? f.type === De
              ? w(c, a, f.props.children, m, h)
              : s(c, a, f, m)
            : null;
        case st:
          return f.key === h ? d(c, a, f, m) : null;
      }
      if (Fr(f) || un(f)) return h !== null ? null : w(c, a, f, m, null);
      Dr(c, f);
    }
    return null;
  }
  function C(c, a, f, m, h) {
    if (typeof m == 'string' || typeof m == 'number')
      return (c = c.get(f) || null), u(a, c, '' + m, h);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case rn:
          return (
            (c = c.get(m.key === null ? f : m.key) || null),
            m.type === De ? w(a, c, m.props.children, h, m.key) : s(a, c, m, h)
          );
        case st:
          return (c = c.get(m.key === null ? f : m.key) || null), d(a, c, m, h);
      }
      if (Fr(m) || un(m)) return (c = c.get(f) || null), w(a, c, m, h, null);
      Dr(a, m);
    }
    return null;
  }
  function T(c, a, f, m) {
    for (
      var h = null, M = null, k = a, N = (a = 0), R = null;
      k !== null && N < f.length;
      N++
    ) {
      k.index > N ? ((R = k), (k = null)) : (R = k.sibling);
      var I = v(c, k, f[N], m);
      if (I === null) {
        k === null && (k = R);
        break;
      }
      e && k && I.alternate === null && t(c, k),
        (a = o(I, a, N)),
        M === null ? (h = I) : (M.sibling = I),
        (M = I),
        (k = R);
    }
    if (N === f.length) return n(c, k), h;
    if (k === null) {
      for (; N < f.length; N++)
        (k = L(c, f[N], m)),
          k !== null &&
            ((a = o(k, a, N)), M === null ? (h = k) : (M.sibling = k), (M = k));
      return h;
    }
    for (k = r(c, k); N < f.length; N++)
      (R = C(k, c, N, f[N], m)),
        R !== null &&
          (e && R.alternate !== null && k.delete(R.key === null ? N : R.key),
          (a = o(R, a, N)),
          M === null ? (h = R) : (M.sibling = R),
          (M = R));
    return (
      e &&
        k.forEach(function (H) {
          return t(c, H);
        }),
      h
    );
  }
  function _(c, a, f, m) {
    var h = un(f);
    if (typeof h != 'function') throw Error(g(150));
    if (((f = h.call(f)), f == null)) throw Error(g(151));
    for (
      var M = (h = null), k = a, N = (a = 0), R = null, I = f.next();
      k !== null && !I.done;
      N++, I = f.next()
    ) {
      k.index > N ? ((R = k), (k = null)) : (R = k.sibling);
      var H = v(c, k, I.value, m);
      if (H === null) {
        k === null && (k = R);
        break;
      }
      e && k && H.alternate === null && t(c, k),
        (a = o(H, a, N)),
        M === null ? (h = H) : (M.sibling = H),
        (M = H),
        (k = R);
    }
    if (I.done) return n(c, k), h;
    if (k === null) {
      for (; !I.done; N++, I = f.next())
        (I = L(c, I.value, m)),
          I !== null &&
            ((a = o(I, a, N)), M === null ? (h = I) : (M.sibling = I), (M = I));
      return h;
    }
    for (k = r(c, k); !I.done; N++, I = f.next())
      (I = C(k, c, N, I.value, m)),
        I !== null &&
          (e && I.alternate !== null && k.delete(I.key === null ? N : I.key),
          (a = o(I, a, N)),
          M === null ? (h = I) : (M.sibling = I),
          (M = I));
    return (
      e &&
        k.forEach(function (b) {
          return t(c, b);
        }),
      h
    );
  }
  return function (c, a, f, m) {
    var h =
      typeof f == 'object' && f !== null && f.type === De && f.key === null;
    h && (f = f.props.children);
    var M = typeof f == 'object' && f !== null;
    if (M)
      switch (f.$$typeof) {
        case rn:
          e: {
            for (M = f.key, h = a; h !== null; ) {
              if (h.key === M) {
                switch (h.tag) {
                  case 7:
                    if (f.type === De) {
                      n(c, h.sibling),
                        (a = l(h, f.props.children)),
                        (a.return = c),
                        (c = a);
                      break e;
                    }
                    break;
                  default:
                    if (h.elementType === f.type) {
                      n(c, h.sibling),
                        (a = l(h, f.props)),
                        (a.ref = Rn(c, h, f)),
                        (a.return = c),
                        (c = a);
                      break e;
                    }
                }
                n(c, h);
                break;
              } else t(c, h);
              h = h.sibling;
            }
            f.type === De
              ? ((a = Qt(f.props.children, c.mode, m, f.key)),
                (a.return = c),
                (c = a))
              : ((m = $r(f.type, f.key, f.props, null, c.mode, m)),
                (m.ref = Rn(c, a, f)),
                (m.return = c),
                (c = m));
          }
          return i(c);
        case st:
          e: {
            for (h = f.key; a !== null; ) {
              if (a.key === h)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === f.containerInfo &&
                  a.stateNode.implementation === f.implementation
                ) {
                  n(c, a.sibling),
                    (a = l(a, f.children || [])),
                    (a.return = c),
                    (c = a);
                  break e;
                } else {
                  n(c, a);
                  break;
                }
              else t(c, a);
              a = a.sibling;
            }
            (a = Eo(f, c.mode, m)), (a.return = c), (c = a);
          }
          return i(c);
      }
    if (typeof f == 'string' || typeof f == 'number')
      return (
        (f = '' + f),
        a !== null && a.tag === 6
          ? (n(c, a.sibling), (a = l(a, f)), (a.return = c), (c = a))
          : (n(c, a), (a = wo(f, c.mode, m)), (a.return = c), (c = a)),
        i(c)
      );
    if (Fr(f)) return T(c, a, f, m);
    if (un(f)) return _(c, a, f, m);
    if ((M && Dr(c, f), typeof f == 'undefined' && !h))
      switch (c.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(g(152, xt(c.type) || 'Component'));
      }
    return n(c, a);
  };
}
var Ur = bu(!0),
  es = bu(!1),
  In = {},
  Pe = Qe(In),
  jn = Qe(In),
  zn = Qe(In);
function ht(e) {
  if (e === In) throw Error(g(174));
  return e;
}
function ko(e, t) {
  switch ((Q(zn, t), Q(jn, e), Q(Pe, In), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _l(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _l(t, e));
  }
  A(Pe), Q(Pe, t);
}
function Yt() {
  A(Pe), A(jn), A(zn);
}
function ts(e) {
  ht(zn.current);
  var t = ht(Pe.current),
    n = _l(t, e.type);
  t !== n && (Q(jn, e), Q(Pe, n));
}
function So(e) {
  jn.current === e && (A(Pe), A(jn));
}
var Y = Qe(0);
function Br(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 64) != 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ie = null,
  be = null,
  Ne = !1;
function ns(e, t) {
  var n = we(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.type = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function rs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function Co(e) {
  if (Ne) {
    var t = be;
    if (t) {
      var n = t;
      if (!rs(e, t)) {
        if (((t = Ut(n.nextSibling)), !t || !rs(e, t))) {
          (e.flags = (e.flags & -1025) | 2), (Ne = !1), (Ie = e);
          return;
        }
        ns(Ie, n);
      }
      (Ie = e), (be = Ut(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (Ne = !1), (Ie = e);
  }
}
function ls(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function Vr(e) {
  if (e !== Ie) return !1;
  if (!Ne) return ls(e), (Ne = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== 'head' && t !== 'body' && !lo(t, e.memoizedProps)))
    for (t = be; t; ) ns(e, t), (t = Ut(t.nextSibling));
  if ((ls(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              be = Ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      be = null;
    }
  } else be = Ie ? Ut(e.stateNode.nextSibling) : null;
  return !0;
}
function _o() {
  (be = Ie = null), (Ne = !1);
}
var Kt = [];
function xo() {
  for (var e = 0; e < Kt.length; e++)
    Kt[e]._workInProgressVersionPrimary = null;
  Kt.length = 0;
}
var Fn = ut.ReactCurrentDispatcher,
  Ee = ut.ReactCurrentBatchConfig,
  Dn = 0,
  K = null,
  ie = null,
  ne = null,
  Ar = !1,
  $n = !1;
function de() {
  throw Error(g(321));
}
function Po(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ye(e[n], t[n])) return !1;
  return !0;
}
function No(e, t, n, r, l, o) {
  if (
    ((Dn = o),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fn.current = e === null || e.memoizedState === null ? Vf : Af),
    (e = n(r, l)),
    $n)
  ) {
    o = 0;
    do {
      if ((($n = !1), !(25 > o))) throw Error(g(301));
      (o += 1),
        (ne = ie = null),
        (t.updateQueue = null),
        (Fn.current = Hf),
        (e = n(r, l));
    } while ($n);
  }
  if (
    ((Fn.current = Hr),
    (t = ie !== null && ie.next !== null),
    (Dn = 0),
    (ne = ie = K = null),
    (Ar = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (K.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function yt() {
  if (ie === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = ne === null ? K.memoizedState : ne.next;
  if (t !== null) (ne = t), (ie = e);
  else {
    if (e === null) throw Error(g(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      ne === null ? (K.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function Te(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Un(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = ie,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (l = l.next), (r = r.baseState);
    var u = (i = o = null),
      s = l;
    do {
      var d = s.lane;
      if ((Dn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
      else {
        var w = {
          lane: d,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((i = u = w), (o = r)) : (u = u.next = w),
          (K.lanes |= d),
          (On |= d);
      }
      s = s.next;
    } while (s !== null && s !== l);
    u === null ? (o = r) : (u.next = i),
      ye(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function Bn(e) {
  var t = yt(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ye(o, t.memoizedState) || (Ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function os(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var l = t._workInProgressVersionPrimary;
  if (
    (l !== null
      ? (e = l === r)
      : ((e = e.mutableReadLanes),
        (e = (Dn & e) === e) &&
          ((t._workInProgressVersionPrimary = r), Kt.push(t))),
    e)
  )
    return n(t._source);
  throw (Kt.push(t), Error(g(350)));
}
function is(e, t, n, r) {
  var l = ae;
  if (l === null) throw Error(g(349));
  var o = t._getVersion,
    i = o(t._source),
    u = Fn.current,
    s = u.useState(function () {
      return os(l, t, n);
    }),
    d = s[1],
    w = s[0];
  s = ne;
  var L = e.memoizedState,
    v = L.refs,
    C = v.getSnapshot,
    T = L.source;
  L = L.subscribe;
  var _ = K;
  return (
    (e.memoizedState = { refs: v, source: t, subscribe: r }),
    u.useEffect(
      function () {
        (v.getSnapshot = n), (v.setSnapshot = d);
        var c = o(t._source);
        if (!ye(i, c)) {
          (c = n(t._source)),
            ye(w, c) ||
              (d(c), (c = Ze(_)), (l.mutableReadLanes |= c & l.pendingLanes)),
            (c = l.mutableReadLanes),
            (l.entangledLanes |= c);
          for (var a = l.entanglements, f = c; 0 < f; ) {
            var m = 31 - Ae(f),
              h = 1 << m;
            (a[m] |= c), (f &= ~h);
          }
        }
      },
      [n, t, r],
    ),
    u.useEffect(
      function () {
        return r(t._source, function () {
          var c = v.getSnapshot,
            a = v.setSnapshot;
          try {
            a(c(t._source));
            var f = Ze(_);
            l.mutableReadLanes |= f & l.pendingLanes;
          } catch (m) {
            a(function () {
              throw m;
            });
          }
        });
      },
      [t, r],
    ),
    (ye(C, n) && ye(T, t) && ye(L, r)) ||
      ((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Te,
        lastRenderedState: w,
      }),
      (e.dispatch = d = To.bind(null, K, e)),
      (s.queue = e),
      (s.baseQueue = null),
      (w = os(l, t, n)),
      (s.memoizedState = s.baseState = w)),
    w
  );
}
function us(e, t, n) {
  var r = yt();
  return is(r, e, t, n);
}
function Vn(e) {
  var t = vt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Te,
        lastRenderedState: e,
      }),
    (e = e.dispatch = To.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Wr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ss(e) {
  var t = vt();
  return (e = { current: e }), (t.memoizedState = e);
}
function Qr() {
  return yt().memoizedState;
}
function Lo(e, t, n, r) {
  var l = vt();
  (K.flags |= e),
    (l.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oo(e, t, n, r) {
  var l = yt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var i = ie.memoizedState;
    if (((o = i.destroy), r !== null && Po(r, i.deps))) {
      Wr(t, n, o, r);
      return;
    }
  }
  (K.flags |= e), (l.memoizedState = Wr(1 | t, n, o, r));
}
function as(e, t) {
  return Lo(516, 4, e, t);
}
function Yr(e, t) {
  return Oo(516, 4, e, t);
}
function fs(e, t) {
  return Oo(4, 2, e, t);
}
function cs(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ds(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oo(4, 2, cs.bind(null, t, e), n)
  );
}
function Mo() {}
function ps(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Po(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ms(e, t) {
  var n = yt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Po(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wf(e, t) {
  var n = At();
  mt(98 > n ? 98 : n, function () {
    e(!0);
  }),
    mt(97 < n ? 97 : n, function () {
      var r = Ee.transition;
      Ee.transition = 1;
      try {
        e(!1), t();
      } finally {
        Ee.transition = r;
      }
    });
}
function To(e, t, n) {
  var r = ve(),
    l = Ze(e),
    o = {
      lane: l,
      action: n,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    i = t.pending;
  if (
    (i === null ? (o.next = o) : ((o.next = i.next), (i.next = o)),
    (t.pending = o),
    (i = e.alternate),
    e === K || (i !== null && i === K))
  )
    $n = Ar = !0;
  else {
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var u = t.lastRenderedState,
          s = i(u, n);
        if (((o.eagerReducer = i), (o.eagerState = s), ye(s, u))) return;
      } catch (d) {
      } finally {
      }
    Je(e, l, r);
  }
}
var Hr = {
    readContext: ge,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useOpaqueIdentifier: de,
    unstable_isNewReconciler: !1,
  },
  Vf = {
    readContext: ge,
    useCallback: function (e, t) {
      return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ge,
    useEffect: as,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), Lo(4, 2, cs.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Lo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = vt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = vt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
        (e = e.dispatch = To.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: ss,
    useState: Vn,
    useDebugValue: Mo,
    useDeferredValue: function (e) {
      var t = Vn(e),
        n = t[0],
        r = t[1];
      return (
        as(
          function () {
            var l = Ee.transition;
            Ee.transition = 1;
            try {
              r(e);
            } finally {
              Ee.transition = l;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = Vn(!1),
        t = e[0];
      return (e = Wf.bind(null, e[1])), ss(e), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var r = vt();
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        is(r, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if (Ne) {
        var e = !1,
          t = zf(function () {
            throw (
              (e || ((e = !0), n('r:' + (io++).toString(36))), Error(g(355)))
            );
          }),
          n = Vn(t)[1];
        return (
          (K.mode & 2) == 0 &&
            ((K.flags |= 516),
            Wr(
              5,
              function () {
                n('r:' + (io++).toString(36));
              },
              void 0,
              null,
            )),
          t
        );
      }
      return (t = 'r:' + (io++).toString(36)), Vn(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  Af = {
    readContext: ge,
    useCallback: ps,
    useContext: ge,
    useEffect: Yr,
    useImperativeHandle: ds,
    useLayoutEffect: fs,
    useMemo: ms,
    useReducer: Un,
    useRef: Qr,
    useState: function () {
      return Un(Te);
    },
    useDebugValue: Mo,
    useDeferredValue: function (e) {
      var t = Un(Te),
        n = t[0],
        r = t[1];
      return (
        Yr(
          function () {
            var l = Ee.transition;
            Ee.transition = 1;
            try {
              r(e);
            } finally {
              Ee.transition = l;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = Un(Te)[0];
      return [Qr().current, e];
    },
    useMutableSource: us,
    useOpaqueIdentifier: function () {
      return Un(Te)[0];
    },
    unstable_isNewReconciler: !1,
  },
  Hf = {
    readContext: ge,
    useCallback: ps,
    useContext: ge,
    useEffect: Yr,
    useImperativeHandle: ds,
    useLayoutEffect: fs,
    useMemo: ms,
    useReducer: Bn,
    useRef: Qr,
    useState: function () {
      return Bn(Te);
    },
    useDebugValue: Mo,
    useDeferredValue: function (e) {
      var t = Bn(Te),
        n = t[0],
        r = t[1];
      return (
        Yr(
          function () {
            var l = Ee.transition;
            Ee.transition = 1;
            try {
              r(e);
            } finally {
              Ee.transition = l;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = Bn(Te)[0];
      return [Qr().current, e];
    },
    useMutableSource: us,
    useOpaqueIdentifier: function () {
      return Bn(Te)[0];
    },
    unstable_isNewReconciler: !1,
  },
  Qf = ut.ReactCurrentOwner,
  Ce = !1;
function pe(e, t, n, r) {
  t.child = e === null ? es(t, null, n, r) : Ur(t, e.child, n, r);
}
function hs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Wt(t, l),
    (r = No(e, t, n, r, o, l)),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~l),
        je(e, t, l))
      : ((t.flags |= 1), pe(e, t, r, l), t.child)
  );
}
function ys(e, t, n, r, l, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Ro(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), vs(e, t, i, r, l, o))
      : ((e = $r(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  return (
    (i = e.child),
    (l & o) == 0 &&
    ((l = i.memoizedProps),
    (n = n.compare),
    (n = n !== null ? n : xn),
    n(l, r) && e.ref === t.ref)
      ? je(e, t, o)
      : ((t.flags |= 1),
        (e = qe(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function vs(e, t, n, r, l, o) {
  if (e !== null && xn(e.memoizedProps, r) && e.ref === t.ref)
    if (((Ce = !1), (o & l) != 0)) (e.flags & 16384) != 0 && (Ce = !0);
    else return (t.lanes = e.lanes), je(e, t, o);
  return Io(e, t, n, r, o);
}
function jo(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden' || r.mode === 'unstable-defer-without-hiding')
    if ((t.mode & 4) == 0) (t.memoizedState = { baseLanes: 0 }), Kr(t, n);
    else if ((n & 1073741824) != 0)
      (t.memoizedState = { baseLanes: 0 }), Kr(t, o !== null ? o.baseLanes : n);
    else
      return (
        (e = o !== null ? o.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        Kr(t, e),
        null
      );
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Kr(t, r);
  return pe(e, t, l, n), t.child;
}
function gs(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    (t.flags |= 128);
}
function Io(e, t, n, r, l) {
  var o = ce(n) ? dt : le.current;
  return (
    (o = Vt(t, o)),
    Wt(t, l),
    (n = No(e, t, n, r, o, l)),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~l),
        je(e, t, l))
      : ((t.flags |= 1), pe(e, t, n, l), t.child)
  );
}
function ws(e, t, n, r, l) {
  if (ce(n)) {
    var o = !0;
    Tr(t);
  } else o = !1;
  if ((Wt(t, l), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      Ju(t, n, r),
      go(t, n, r, l),
      (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      d = n.contextType;
    typeof d == 'object' && d !== null
      ? (d = ge(d))
      : ((d = ce(n) ? dt : le.current), (d = Vt(t, d)));
    var w = n.getDerivedStateFromProps,
      L =
        typeof w == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    L ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== d) && qu(t, i, r, d)),
      (Ke = !1);
    var v = t.memoizedState;
    (i.state = v),
      Mn(t, r, i, l),
      (s = t.memoizedState),
      u !== r || v !== s || fe.current || Ke
        ? (typeof w == 'function' && (jr(t, n, w, r), (s = t.memoizedState)),
          (u = Ke || Zu(t, n, u, r, v, s, d))
            ? (L ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = d),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4),
          (r = !1));
  } else {
    (i = t.stateNode),
      Yu(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : Se(t.type, u)),
      (i.props = d),
      (L = t.pendingProps),
      (v = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = ge(s))
        : ((s = ce(n) ? dt : le.current), (s = Vt(t, s)));
    var C = n.getDerivedStateFromProps;
    (w =
      typeof C == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== L || v !== s) && qu(t, i, r, s)),
      (Ke = !1),
      (v = t.memoizedState),
      (i.state = v),
      Mn(t, r, i, l);
    var T = t.memoizedState;
    u !== L || v !== T || fe.current || Ke
      ? (typeof C == 'function' && (jr(t, n, C, r), (T = t.memoizedState)),
        (d = Ke || Zu(t, n, d, r, v, T, s))
          ? (w ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, T, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, T, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 256))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = T)),
        (i.props = r),
        (i.state = T),
        (i.context = s),
        (r = d))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1));
  }
  return zo(e, t, n, r, o, l);
}
function zo(e, t, n, r, l, o) {
  gs(e, t);
  var i = (t.flags & 64) != 0;
  if (!r && !i) return l && Fu(t, n, !1), je(e, t, o);
  (r = t.stateNode), (Qf.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Ur(t, e.child, null, o)), (t.child = Ur(t, null, u, o)))
      : pe(e, t, u, o),
    (t.memoizedState = r.state),
    l && Fu(t, n, !0),
    t.child
  );
}
function Es(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ju(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ju(e, t.context, !1),
    ko(e, t.containerInfo);
}
var Xr = { dehydrated: null, retryLane: 0 };
function _s(e, t, n) {
  var r = t.pendingProps,
    l = Y.current,
    o = !1,
    i;
  return (
    (i = (t.flags & 64) != 0) ||
      (i = e !== null && e.memoizedState === null ? !1 : (l & 2) != 0),
    i
      ? ((o = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        r.fallback === void 0 ||
        r.unstable_avoidThisFallback === !0 ||
        (l |= 1),
    Q(Y, l & 1),
    e === null
      ? (r.fallback !== void 0 && Co(t),
        (e = r.children),
        (l = r.fallback),
        o
          ? ((e = ks(t, e, l, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Xr),
            e)
          : typeof r.unstable_expectedLoadTime == 'number'
          ? ((e = ks(t, e, l, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Xr),
            (t.lanes = 33554432),
            e)
          : ((n = Fo({ mode: 'visible', children: e }, t.mode, n, null)),
            (n.return = t),
            (t.child = n)))
      : e.memoizedState !== null
      ? o
        ? ((r = Cs(e, t, r.children, r.fallback, n)),
          (o = t.child),
          (l = e.child.memoizedState),
          (o.memoizedState =
            l === null ? { baseLanes: n } : { baseLanes: l.baseLanes | n }),
          (o.childLanes = e.childLanes & ~n),
          (t.memoizedState = Xr),
          r)
        : ((n = Ss(e, t, r.children, n)), (t.memoizedState = null), n)
      : o
      ? ((r = Cs(e, t, r.children, r.fallback, n)),
        (o = t.child),
        (l = e.child.memoizedState),
        (o.memoizedState =
          l === null ? { baseLanes: n } : { baseLanes: l.baseLanes | n }),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Xr),
        r)
      : ((n = Ss(e, t, r.children, n)), (t.memoizedState = null), n)
  );
}
function ks(e, t, n, r) {
  var l = e.mode,
    o = e.child;
  return (
    (t = { mode: 'hidden', children: t }),
    (l & 2) == 0 && o !== null
      ? ((o.childLanes = 0), (o.pendingProps = t))
      : (o = Fo(t, l, 0, null)),
    (n = Qt(n, l, r, null)),
    (o.return = e),
    (n.return = e),
    (o.sibling = n),
    (e.child = o),
    n
  );
}
function Ss(e, t, n, r) {
  var l = e.child;
  return (
    (e = l.sibling),
    (n = qe(l, { mode: 'visible', children: n })),
    (t.mode & 2) == 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function Cs(e, t, n, r, l) {
  var o = t.mode,
    i = e.child;
  e = i.sibling;
  var u = { mode: 'hidden', children: n };
  return (
    (o & 2) == 0 && t.child !== i
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = u),
        (i = n.lastEffect),
        i !== null
          ? ((t.firstEffect = n.firstEffect),
            (t.lastEffect = i),
            (i.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = qe(i, u)),
    e !== null ? (r = qe(e, r)) : ((r = Qt(r, o, l, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function xs(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Qu(e.return, t);
}
function Do(e, t, n, r, l, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
        lastEffect: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l),
      (i.lastEffect = o));
}
function Ps(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((pe(e, t, r.children, n), (r = Y.current), (r & 2) != 0))
    (r = (r & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && (e.flags & 64) != 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xs(e, n);
        else if (e.tag === 19) xs(e, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Q(Y, r), (t.mode & 2) == 0)) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Br(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Do(t, !1, l, n, o, t.lastEffect);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Br(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Do(t, !0, n, null, o, t.lastEffect);
        break;
      case 'together':
        Do(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (On |= t.lanes),
    (n & t.childLanes) != 0)
  ) {
    if (e !== null && t.child !== e.child) throw Error(g(153));
    if (t.child !== null) {
      for (
        e = t.child, n = qe(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = qe(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var Ns, $o, Ts, Ls;
Ns = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
$o = function () {};
Ts = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), ht(Pe.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = gl(e, l)), (r = gl(e, r)), (o = []);
        break;
      case 'option':
        (l = kl(e, l)), (r = kl(e, r)), (o = []);
        break;
      case 'select':
        (l = $({}, l, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = Sl(e, l)), (r = Sl(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = _r);
    }
    xl(n, r);
    var i;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === 'style') {
          var u = l[d];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          d !== 'dangerouslySetInnerHTML' &&
            d !== 'children' &&
            d !== 'suppressContentEditableWarning' &&
            d !== 'suppressHydrationWarning' &&
            d !== 'autoFocus' &&
            (nn.hasOwnProperty(d)
              ? o || (o = [])
              : (o = o || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && s !== u && (s != null || u != null))
      )
        if (d === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(d, n)), (n = s);
        else
          d === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(d, s))
            : d === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(d, '' + s)
            : d !== 'suppressContentEditableWarning' &&
              d !== 'suppressHydrationWarning' &&
              (nn.hasOwnProperty(d)
                ? (s != null && d === 'onScroll' && V('scroll', e),
                  o || u === s || (o = []))
                : typeof s == 'object' && s !== null && s.$$typeof === pl
                ? s.toString()
                : (o = o || []).push(d, s));
    }
    n && (o = o || []).push('style', n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Ls = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function An(e, t) {
  if (!Ne)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Yf(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return ce(t.type) && Nr(), null;
    case 3:
      return (
        Yt(),
        A(fe),
        A(le),
        xo(),
        (r = t.stateNode),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vr(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        $o(t),
        null
      );
    case 5:
      So(t);
      var l = ht(zn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ts(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return null;
        }
        if (((e = ht(Pe.current)), Vr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[We] = t), (r[Pr] = o), n)) {
            case 'dialog':
              V('cancel', r), V('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              V('load', r);
              break;
            case 'video':
            case 'audio':
              for (e = 0; e < Nn.length; e++) V(Nn[e], r);
              break;
            case 'source':
              V('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              V('error', r), V('load', r);
              break;
            case 'details':
              V('toggle', r);
              break;
            case 'input':
              Ei(r, o), V('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                V('invalid', r);
              break;
            case 'textarea':
              Ci(r, o), V('invalid', r);
          }
          xl(n, o), (e = null);
          for (var i in o)
            o.hasOwnProperty(i) &&
              ((l = o[i]),
              i === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l && (e = ['children', l])
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (e = ['children', '' + l])
                : nn.hasOwnProperty(i) &&
                  l != null &&
                  i === 'onScroll' &&
                  V('scroll', r));
          switch (n) {
            case 'input':
              lr(r), Si(r, o, !0);
              break;
            case 'textarea':
              lr(r), xi(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = _r);
          }
          (r = e), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          switch (
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === Cl.html && (e = Pi(n)),
            e === Cl.html
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[We] = t),
            (e[Pr] = r),
            Ns(e, t, !1, !1),
            (t.stateNode = e),
            (i = Pl(n, r)),
            n)
          ) {
            case 'dialog':
              V('cancel', e), V('close', e), (l = r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              V('load', e), (l = r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Nn.length; l++) V(Nn[l], e);
              l = r;
              break;
            case 'source':
              V('error', e), (l = r);
              break;
            case 'img':
            case 'image':
            case 'link':
              V('error', e), V('load', e), (l = r);
              break;
            case 'details':
              V('toggle', e), (l = r);
              break;
            case 'input':
              Ei(e, r), (l = gl(e, r)), V('invalid', e);
              break;
            case 'option':
              l = kl(e, r);
              break;
            case 'select':
              (e._wrapperState = { wasMultiple: !!r.multiple }),
                (l = $({}, r, { value: void 0 })),
                V('invalid', e);
              break;
            case 'textarea':
              Ci(e, r), (l = Sl(e, r)), V('invalid', e);
              break;
            default:
              l = r;
          }
          xl(n, l);
          var u = l;
          for (o in u)
            if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === 'style'
                ? Li(e, s)
                : o === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0), s != null && Ni(e, s))
                : o === 'children'
                ? typeof s == 'string'
                  ? (n !== 'textarea' || s !== '') && an(e, s)
                  : typeof s == 'number' && an(e, '' + s)
                : o !== 'suppressContentEditableWarning' &&
                  o !== 'suppressHydrationWarning' &&
                  o !== 'autoFocus' &&
                  (nn.hasOwnProperty(o)
                    ? s != null && o === 'onScroll' && V('scroll', e)
                    : s != null && ul(e, o, s, i));
            }
          switch (n) {
            case 'input':
              lr(e), Si(e, r, !1);
              break;
            case 'textarea':
              lr(e), xi(e);
              break;
            case 'option':
              r.value != null && e.setAttribute('value', '' + $e(r.value));
              break;
            case 'select':
              (e.multiple = !!r.multiple),
                (o = r.value),
                o != null
                  ? Pt(e, !!r.multiple, o, !1)
                  : r.defaultValue != null &&
                    Pt(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof l.onClick == 'function' && (e.onclick = _r);
          }
          Ou(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) Ls(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(g(166));
        (n = ht(zn.current)),
          ht(Pe.current),
          Vr(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[We] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[We] = t),
              (t.stateNode = r));
      }
      return null;
    case 13:
      return (
        A(Y),
        (r = t.memoizedState),
        (t.flags & 64) != 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && Vr(t)
              : (n = e.memoizedState !== null),
            r &&
              !n &&
              (t.mode & 2) != 0 &&
              ((e === null &&
                t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              (Y.current & 1) != 0
                ? re === 0 && (re = 3)
                : ((re === 0 || re === 3) && (re = 4),
                  ae === null ||
                    ((On & 134217727) == 0 && (Xt & 134217727) == 0) ||
                    Gt(ae, ue))),
            (r || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return Yt(), $o(t), e === null && Tu(t.stateNode.containerInfo), null;
    case 10:
      return vo(t), null;
    case 17:
      return ce(t.type) && Nr(), null;
    case 19:
      if ((A(Y), (r = t.memoizedState), r === null)) return null;
      if (((o = (t.flags & 64) != 0), (i = r.rendering), i === null))
        if (o) An(r, !1);
        else {
          if (re !== 0 || (e !== null && (e.flags & 64) != 0))
            for (e = t.child; e !== null; ) {
              if (((i = Br(e)), i !== null)) {
                for (
                  t.flags |= 64,
                    An(r, !1),
                    o = i.updateQueue,
                    o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                    r.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 2),
                    (o.nextEffect = null),
                    (o.firstEffect = null),
                    (o.lastEffect = null),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Q(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null &&
            oe() > Uo &&
            ((t.flags |= 64), (o = !0), An(r, !1), (t.lanes = 33554432));
        }
      else {
        if (!o)
          if (((e = Br(i)), e !== null)) {
            if (
              ((t.flags |= 64),
              (o = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              An(r, !0),
              r.tail === null && r.tailMode === 'hidden' && !i.alternate && !Ne)
            )
              return (
                (t = t.lastEffect = r.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              );
          } else
            2 * oe() - r.renderingStartTime > Uo &&
              n !== 1073741824 &&
              ((t.flags |= 64), (o = !0), An(r, !1), (t.lanes = 33554432));
        r.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = r.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (r.last = i));
      }
      return r.tail !== null
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = oe()),
          (n.sibling = null),
          (t = Y.current),
          Q(Y, o ? (t & 1) | 2 : t & 1),
          n)
        : null;
    case 23:
    case 24:
      return (
        Bo(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          r.mode !== 'unstable-defer-without-hiding' &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(g(156, t.tag));
}
function Kf(e) {
  switch (e.tag) {
    case 1:
      ce(e.type) && Nr();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if ((Yt(), A(fe), A(le), xo(), (t = e.flags), (t & 64) != 0))
        throw Error(g(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return So(e), null;
    case 13:
      return (
        A(Y), (t = e.flags), t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
      );
    case 19:
      return A(Y), null;
    case 4:
      return Yt(), null;
    case 10:
      return vo(e), null;
    case 23:
    case 24:
      return Bo(), null;
    default:
      return null;
  }
}
function Vo(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Pa(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l };
}
function Ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xf = typeof WeakMap == 'function' ? WeakMap : Map;
function Os(e, t, n) {
  (n = Xe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Gr || ((Gr = !0), (Ho = r)), Ao(e, t);
    }),
    n
  );
}
function Ms(e, t, n) {
  (n = Xe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    n.payload = function () {
      return Ao(e, t), r(l);
    };
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        typeof r != 'function' &&
          (Le === null ? (Le = new Set([this])) : Le.add(this), Ao(e, t));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
var Gf = typeof WeakSet == 'function' ? WeakSet : Set;
function Rs(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == 'function')
      try {
        t(null);
      } catch (n) {
        et(e, n);
      }
    else t.current = null;
}
function Zf(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : Se(t.type, n),
            r,
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && oo(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(g(163));
}
function qf(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          if ((e.tag & 3) == 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          var l = e;
          (r = l.next),
            (l = l.tag),
            (l & 4) != 0 && (l & 1) != 0 && (Is(n, e), Jf(n, e)),
            (e = r);
        } while (e !== t);
      }
      return;
    case 1:
      (e = n.stateNode),
        n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((r =
                n.elementType === n.type
                  ? t.memoizedProps
                  : Se(n.type, t.memoizedProps)),
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate,
              ))),
        (t = n.updateQueue),
        t !== null && Xu(n, t, e);
      return;
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        Xu(n, t, e);
      }
      return;
    case 5:
      (e = n.stateNode),
        t === null && n.flags & 4 && Ou(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null &&
          ((n = n.memoizedState),
          n !== null && ((n = n.dehydrated), n !== null && Qi(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(g(163));
}
function js(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t)
        (r = r.style),
          typeof r.setProperty == 'function'
            ? r.setProperty('display', 'none', 'important')
            : (r.display = 'none');
      else {
        r = n.stateNode;
        var l = n.memoizedProps.style;
        (l = l != null && l.hasOwnProperty('display') ? l.display : null),
          (r.style.display = Ti('display', l));
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
    else if (
      ((n.tag !== 23 && n.tag !== 24) || n.memoizedState === null || n === e) &&
      n.child !== null
    ) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Fs(e, t) {
  if (pt && typeof pt.onCommitFiberUnmount == 'function')
    try {
      pt.onCommitFiberUnmount(so, t);
    } catch (o) {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (
        ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
      ) {
        var n = (e = e.next);
        do {
          var r = n,
            l = r.destroy;
          if (((r = r.tag), l !== void 0))
            if ((r & 4) != 0) Is(t, n);
            else {
              r = t;
              try {
                l();
              } catch (o) {
                et(r, o);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (
        (Rs(t), (e = t.stateNode), typeof e.componentWillUnmount == 'function')
      )
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (o) {
          et(t, o);
        }
      break;
    case 5:
      Rs(t);
      break;
    case 4:
      zs(e, t);
  }
}
function Ds(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function $s(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Us(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if ($s(t)) break e;
      t = t.return;
    }
    throw Error(g(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
      (t = t.containerInfo), (r = !0);
      break;
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(g(161));
  }
  n.flags & 16 && (an(t, ''), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || $s(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

    ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? Wo(e, n, t) : Qo(e, n, t);
}
function Wo(e, t, n) {
  var r = e.tag,
    l = r === 5 || r === 6;
  if (l)
    (e = l ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = _r));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wo(e, t, n), e = e.sibling; e !== null; ) Wo(e, t, n), (e = e.sibling);
}
function Qo(e, t, n) {
  var r = e.tag,
    l = r === 5 || r === 6;
  if (l)
    (e = l ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qo(e, t, n), e = e.sibling; e !== null; ) Qo(e, t, n), (e = e.sibling);
}
function zs(e, t) {
  for (var n = t, r = !1, l, o; ; ) {
    if (!r) {
      r = n.return;
      e: for (;;) {
        if (r === null) throw Error(g(160));
        switch (((l = r.stateNode), r.tag)) {
          case 5:
            o = !1;
            break e;
          case 3:
            (l = l.containerInfo), (o = !0);
            break e;
          case 4:
            (l = l.containerInfo), (o = !0);
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var i = e, u = n, s = u; ; )
        if ((Fs(i, s), s.child !== null && s.tag !== 4))
          (s.child.return = s), (s = s.child);
        else {
          if (s === u) break e;
          for (; s.sibling === null; ) {
            if (s.return === null || s.return === u) break e;
            s = s.return;
          }
          (s.sibling.return = s.return), (s = s.sibling);
        }
      o
        ? ((i = l),
          (u = n.stateNode),
          i.nodeType === 8 ? i.parentNode.removeChild(u) : i.removeChild(u))
        : l.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        (l = n.stateNode.containerInfo),
          (o = !0),
          (n.child.return = n),
          (n = n.child);
        continue;
      }
    } else if ((Fs(e, n), n.child !== null)) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      (n = n.return), n.tag === 4 && (r = !1);
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Ko(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var r = (n = n.next);
        do
          (r.tag & 3) == 3 &&
            ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
            (r = r.next);
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (((n = t.stateNode), n != null)) {
        r = t.memoizedProps;
        var l = e !== null ? e.memoizedProps : r;
        e = t.type;
        var o = t.updateQueue;
        if (((t.updateQueue = null), o !== null)) {
          for (
            n[Pr] = r,
              e === 'input' && r.type === 'radio' && r.name != null && ki(n, r),
              Pl(e, l),
              t = Pl(e, r),
              l = 0;
            l < o.length;
            l += 2
          ) {
            var i = o[l],
              u = o[l + 1];
            i === 'style'
              ? Li(n, u)
              : i === 'dangerouslySetInnerHTML'
              ? Ni(n, u)
              : i === 'children'
              ? an(n, u)
              : ul(n, i, u, t);
          }
          switch (e) {
            case 'input':
              El(n, r);
              break;
            case 'textarea':
              _i(n, r);
              break;
            case 'select':
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                (o = r.value),
                o != null
                  ? Pt(n, !!r.multiple, o, !1)
                  : e !== !!r.multiple &&
                    (r.defaultValue != null
                      ? Pt(n, !!r.multiple, r.defaultValue, !0)
                      : Pt(n, !!r.multiple, r.multiple ? [] : '', !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(g(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (n = t.stateNode), n.hydrate && ((n.hydrate = !1), Qi(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && ((Yo = oe()), js(t.child, !0)), Bs(t);
      return;
    case 19:
      Bs(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      js(t, t.memoizedState !== null);
      return;
  }
  throw Error(g(163));
}
function Bs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gf()),
      t.forEach(function (r) {
        var l = bf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ec(e, t) {
  return e !== null &&
    ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var tc = Math.ceil,
  Zr = ut.ReactCurrentDispatcher,
  Xo = ut.ReactCurrentOwner,
  j = 0,
  ae = null,
  J = null,
  ue = 0,
  gt = 0,
  Go = Qe(0),
  re = 0,
  Jr = null,
  Zt = 0,
  On = 0,
  Xt = 0,
  Zo = 0,
  Jo = null,
  Yo = 0,
  Uo = Infinity;
function Jt() {
  Uo = oe() + 500;
}
var P = null,
  Gr = !1,
  Ho = null,
  Le = null,
  tt = !1,
  Hn = null,
  Wn = 90,
  qo = [],
  bo = [],
  ze = null,
  Qn = 0,
  ei = null,
  qr = -1,
  Fe = 0,
  br = 0,
  Yn = null,
  el = !1;
function ve() {
  return (j & 48) != 0 ? oe() : qr !== -1 ? qr : (qr = oe());
}
function Ze(e) {
  if (((e = e.mode), (e & 2) == 0)) return 1;
  if ((e & 4) == 0) return At() === 99 ? 1 : 2;
  if ((Fe === 0 && (Fe = Zt), Bf.transition !== 0)) {
    br !== 0 && (br = Jo !== null ? Jo.pendingLanes : 0), (e = Fe);
    var t = 4186112 & ~br;
    return (
      (t &= -t),
      t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
      t
    );
  }
  return (
    (e = At()),
    (j & 4) != 0 && e === 98
      ? (e = pr(12, Fe))
      : ((e = Aa(e)), (e = pr(e, Fe))),
    e
  );
}
function Je(e, t, n) {
  if (50 < Qn) throw ((Qn = 0), (ei = null), Error(g(185)));
  if (((e = tl(e, t)), e === null)) return null;
  mr(e, t, n), e === ae && ((Xt |= t), re === 4 && Gt(e, ue));
  var r = At();
  t === 1
    ? (j & 8) != 0 && (j & 48) == 0
      ? ti(e)
      : (ke(e, n), j === 0 && (Jt(), xe()))
    : ((j & 4) == 0 ||
        (r !== 98 && r !== 99) ||
        (ze === null ? (ze = new Set([e])) : ze.add(e)),
      ke(e, n)),
    (Jo = e);
}
function tl(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function ke(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      l = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var u = 31 - Ae(i),
      s = 1 << u,
      d = o[u];
    if (d === -1) {
      if ((s & r) == 0 || (s & l) != 0) {
        (d = t), Mt(s);
        var w = B;
        o[u] = 10 <= w ? d + 250 : 6 <= w ? d + 5e3 : -1;
      }
    } else d <= t && (e.expiredLanes |= s);
    i &= ~s;
  }
  if (((r = wn(e, e === ae ? ue : 0)), (t = B), r === 0))
    n !== null &&
      (n !== po && fo(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== po && fo(n);
    }
    t === 15
      ? ((n = ti.bind(null, e)),
        Re === null ? ((Re = [n]), (Or = ao(Lr, Wu))) : Re.push(n),
        (n = po))
      : t === 14
      ? (n = Ln(99, ti.bind(null, e)))
      : ((n = Ha(t)), (n = Ln(n, Vs.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function Vs(e) {
  if (((qr = -1), (br = Fe = 0), (j & 48) != 0)) throw Error(g(327));
  var t = e.callbackNode;
  if (nt() && e.callbackNode !== t) return null;
  var n = wn(e, e === ae ? ue : 0);
  if (n === 0) return null;
  var r = n,
    l = j;
  j |= 16;
  var o = Hs();
  (ae !== e || ue !== r) && (Jt(), qt(e, r));
  do
    try {
      nc();
      break;
    } catch (u) {
      As(e, u);
    }
  while (1);
  if (
    (ho(),
    (Zr.current = o),
    (j = l),
    J !== null ? (r = 0) : ((ae = null), (ue = 0), (r = re)),
    (Zt & Xt) != 0)
  )
    qt(e, 0);
  else if (r !== 0) {
    if (
      (r === 2 &&
        ((j |= 64),
        e.hydrate && ((e.hydrate = !1), oo(e.containerInfo)),
        (n = qi(e)),
        n !== 0 && (r = Kn(e, n))),
      r === 1)
    )
      throw ((t = Jr), qt(e, 0), Gt(e, n), ke(e, oe()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
    ) {
      case 0:
      case 1:
        throw Error(g(345));
      case 2:
        wt(e);
        break;
      case 3:
        if (
          (Gt(e, n), (n & 62914560) === n && ((r = Yo + 500 - oe()), 10 < r))
        ) {
          if (wn(e, 0) !== 0) break;
          if (((l = e.suspendedLanes), (l & n) !== n)) {
            ve(), (e.pingedLanes |= e.suspendedLanes & l);
            break;
          }
          e.timeoutHandle = Mu(wt.bind(null, e), r);
          break;
        }
        wt(e);
        break;
      case 4:
        if ((Gt(e, n), (n & 4186112) === n)) break;
        for (r = e.eventTimes, l = -1; 0 < n; ) {
          var i = 31 - Ae(n);
          (o = 1 << i), (i = r[i]), i > l && (l = i), (n &= ~o);
        }
        if (
          ((n = l),
          (n = oe() - n),
          (n =
            (120 > n
              ? 120
              : 480 > n
              ? 480
              : 1080 > n
              ? 1080
              : 1920 > n
              ? 1920
              : 3e3 > n
              ? 3e3
              : 4320 > n
              ? 4320
              : 1960 * tc(n / 1960)) - n),
          10 < n)
        ) {
          e.timeoutHandle = Mu(wt.bind(null, e), n);
          break;
        }
        wt(e);
        break;
      case 5:
        wt(e);
        break;
      default:
        throw Error(g(329));
    }
  }
  return ke(e, oe()), e.callbackNode === t ? Vs.bind(null, e) : null;
}
function Gt(e, t) {
  for (
    t &= ~Zo,
      t &= ~Xt,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ae(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ti(e) {
  if ((j & 48) != 0) throw Error(g(327));
  if ((nt(), e === ae && (e.expiredLanes & ue) != 0)) {
    var t = ue,
      n = Kn(e, t);
    (Zt & Xt) != 0 && ((t = wn(e, t)), (n = Kn(e, t)));
  } else (t = wn(e, 0)), (n = Kn(e, t));
  if (
    (e.tag !== 0 &&
      n === 2 &&
      ((j |= 64),
      e.hydrate && ((e.hydrate = !1), oo(e.containerInfo)),
      (t = qi(e)),
      t !== 0 && (n = Kn(e, t))),
    n === 1)
  )
    throw ((n = Jr), qt(e, 0), Gt(e, t), ke(e, oe()), n);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e),
    ke(e, oe()),
    null
  );
}
function rc() {
  if (ze !== null) {
    var e = ze;
    (ze = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), ke(t, oe());
      });
  }
  xe();
}
function Ws(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && (Jt(), xe());
  }
}
function Qs(e, t) {
  var n = j;
  (j &= -2), (j |= 8);
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && (Jt(), xe());
  }
}
function Kr(e, t) {
  Q(Go, gt), (gt |= t), (Zt |= t);
}
function Bo() {
  (gt = Go.current), A(Go);
}
function qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jf(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          (r = r.type.childContextTypes), r != null && Nr();
          break;
        case 3:
          Yt(), A(fe), A(le), xo();
          break;
        case 5:
          So(r);
          break;
        case 4:
          Yt();
          break;
        case 13:
          A(Y);
          break;
        case 19:
          A(Y);
          break;
        case 10:
          vo(r);
          break;
        case 23:
        case 24:
          Bo();
      }
      n = n.return;
    }
  (ae = e),
    (J = qe(e.current, null)),
    (ue = gt = Zt = t),
    (re = 0),
    (Jr = null),
    (Zo = Xt = On = 0);
}
function As(e, t) {
  do {
    var n = J;
    try {
      if ((ho(), (Fn.current = Hr), Ar)) {
        for (var r = K.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ar = !1;
      }
      if (
        ((Dn = 0),
        (ne = ie = K = null),
        ($n = !1),
        (Xo.current = null),
        n === null || n.return === null)
      ) {
        (re = 1), (Jr = t), (J = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ue),
          (u.flags |= 2048),
          (u.firstEffect = u.lastEffect = null),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var d = s;
          if ((u.mode & 2) == 0) {
            var w = u.alternate;
            w
              ? ((u.updateQueue = w.updateQueue),
                (u.memoizedState = w.memoizedState),
                (u.lanes = w.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var L = (Y.current & 1) != 0,
            v = i;
          do {
            var C;
            if ((C = v.tag === 13)) {
              var T = v.memoizedState;
              if (T !== null) C = T.dehydrated !== null;
              else {
                var _ = v.memoizedProps;
                C =
                  _.fallback === void 0
                    ? !1
                    : _.unstable_avoidThisFallback !== !0
                    ? !0
                    : !L;
              }
            }
            if (C) {
              var c = v.updateQueue;
              if (c === null) {
                var a = new Set();
                a.add(d), (v.updateQueue = a);
              } else c.add(d);
              if ((v.mode & 2) == 0) {
                if (
                  ((v.flags |= 64),
                  (u.flags |= 16384),
                  (u.flags &= -2981),
                  u.tag === 1)
                )
                  if (u.alternate === null) u.tag = 17;
                  else {
                    var f = Xe(-1, 1);
                    (f.tag = 2), Ge(u, f);
                  }
                u.lanes |= 1;
                break e;
              }
              (s = void 0), (u = t);
              var m = o.pingCache;
              if (
                (m === null
                  ? ((m = o.pingCache = new Xf()), (s = new Set()), m.set(d, s))
                  : ((s = m.get(d)),
                    s === void 0 && ((s = new Set()), m.set(d, s))),
                !s.has(u))
              ) {
                s.add(u);
                var h = lc.bind(null, o, d, u);
                d.then(h, h);
              }
              (v.flags |= 4096), (v.lanes = t);
              break e;
            }
            v = v.return;
          } while (v !== null);
          s = Error(
            (xt(u.type) || 'A React component') +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`,
          );
        }
        re !== 5 && (re = 2), (s = Vo(s, u)), (v = i);
        do {
          switch (v.tag) {
            case 3:
              (o = s), (v.flags |= 4096), (t &= -t), (v.lanes |= t);
              var M = Os(v, o, t);
              Ku(v, M);
              break e;
            case 1:
              o = s;
              var k = v.type,
                N = v.stateNode;
              if (
                (v.flags & 64) == 0 &&
                (typeof k.getDerivedStateFromError == 'function' ||
                  (N !== null &&
                    typeof N.componentDidCatch == 'function' &&
                    (Le === null || !Le.has(N))))
              ) {
                (v.flags |= 4096), (t &= -t), (v.lanes |= t);
                var R = Ms(v, o, t);
                Ku(v, R);
                break e;
              }
          }
          v = v.return;
        } while (v !== null);
      }
      Ys(n);
    } catch (I) {
      (t = I), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Hs() {
  var e = Zr.current;
  return (Zr.current = Hr), e === null ? Hr : e;
}
function Kn(e, t) {
  var n = j;
  j |= 16;
  var r = Hs();
  (ae === e && ue === t) || qt(e, t);
  do
    try {
      oc();
      break;
    } catch (l) {
      As(e, l);
    }
  while (1);
  if ((ho(), (j = n), (Zr.current = r), J !== null)) throw Error(g(261));
  return (ae = null), (ue = 0), re;
}
function oc() {
  for (; J !== null; ) Ks(J);
}
function nc() {
  for (; J !== null && !Df(); ) Ks(J);
}
function Ks(e) {
  var t = Xs(e.alternate, e, gt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ys(e) : (J = t),
    (Xo.current = null);
}
function Ys(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 2048) == 0)) {
      if (((n = Yf(n, t, gt)), n !== null)) {
        J = n;
        return;
      }
      if (
        ((n = t),
        (n.tag !== 24 && n.tag !== 23) ||
          n.memoizedState === null ||
          (gt & 1073741824) != 0 ||
          (n.mode & 4) == 0)
      ) {
        for (var r = 0, l = n.child; l !== null; )
          (r |= l.lanes | l.childLanes), (l = l.sibling);
        n.childLanes = r;
      }
      e !== null &&
        (e.flags & 2048) == 0 &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (((n = Kf(t)), n !== null)) {
        (n.flags &= 2047), (J = n);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function wt(e) {
  var t = At();
  return mt(99, ic.bind(null, e, t)), null;
}
function ic(e, t) {
  do nt();
  while (Hn !== null);
  if ((j & 48) != 0) throw Error(g(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes,
    l = r,
    o = e.pendingLanes & ~l;
  (e.pendingLanes = l),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= l),
    (e.mutableReadLanes &= l),
    (e.entangledLanes &= l),
    (l = e.entanglements);
  for (var i = e.eventTimes, u = e.expirationTimes; 0 < o; ) {
    var s = 31 - Ae(o),
      d = 1 << s;
    (l[s] = 0), (i[s] = -1), (u[s] = -1), (o &= ~d);
  }
  if (
    (ze !== null && (r & 24) == 0 && ze.has(e) && ze.delete(e),
    e === ae && ((J = ae = null), (ue = 0)),
    1 < n.flags
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    r !== null)
  ) {
    if (
      ((l = j), (j |= 32), (Xo.current = null), (no = hr), (i = wu()), ql(i))
    ) {
      if ('selectionStart' in i)
        u = { start: i.selectionStart, end: i.selectionEnd };
      else
        e: if (
          ((u = ((u = i.ownerDocument) && u.defaultView) || window),
          (d = u.getSelection && u.getSelection()) && d.rangeCount !== 0)
        ) {
          (u = d.anchorNode),
            (o = d.anchorOffset),
            (s = d.focusNode),
            (d = d.focusOffset);
          try {
            u.nodeType, s.nodeType;
          } catch (I) {
            u = null;
            break e;
          }
          var w = 0,
            L = -1,
            v = -1,
            C = 0,
            T = 0,
            _ = i,
            c = null;
          t: for (;;) {
            for (
              var a;
              _ !== u || (o !== 0 && _.nodeType !== 3) || (L = w + o),
                _ !== s || (d !== 0 && _.nodeType !== 3) || (v = w + d),
                _.nodeType === 3 && (w += _.nodeValue.length),
                (a = _.firstChild) !== null;

            )
              (c = _), (_ = a);
            for (;;) {
              if (_ === i) break t;
              if (
                (c === u && ++C === o && (L = w),
                c === s && ++T === d && (v = w),
                (a = _.nextSibling) !== null)
              )
                break;
              (_ = c), (c = _.parentNode);
            }
            _ = a;
          }
          u = L === -1 || v === -1 ? null : { start: L, end: v };
        } else u = null;
      u = u || { start: 0, end: 0 };
    } else u = null;
    (ro = { focusedElem: i, selectionRange: u }),
      (hr = !1),
      (Yn = null),
      (el = !1),
      (P = r);
    do
      try {
        uc();
      } catch (I) {
        if (P === null) throw Error(g(330));
        et(P, I), (P = P.nextEffect);
      }
    while (P !== null);
    (Yn = null), (P = r);
    do
      try {
        for (i = e; P !== null; ) {
          var f = P.flags;
          if ((f & 16 && an(P.stateNode, ''), f & 128)) {
            var m = P.alternate;
            if (m !== null) {
              var h = m.ref;
              h !== null &&
                (typeof h == 'function' ? h(null) : (h.current = null));
            }
          }
          switch (f & 1038) {
            case 2:
              Us(P), (P.flags &= -3);
              break;
            case 6:
              Us(P), (P.flags &= -3), Ko(P.alternate, P);
              break;
            case 1024:
              P.flags &= -1025;
              break;
            case 1028:
              (P.flags &= -1025), Ko(P.alternate, P);
              break;
            case 4:
              Ko(P.alternate, P);
              break;
            case 8:
              (u = P), zs(i, u);
              var M = u.alternate;
              Ds(u), M !== null && Ds(M);
          }
          P = P.nextEffect;
        }
      } catch (I) {
        if (P === null) throw Error(g(330));
        et(P, I), (P = P.nextEffect);
      }
    while (P !== null);
    if (
      ((h = ro),
      (m = wu()),
      (f = h.focusedElem),
      (i = h.selectionRange),
      m !== f && f && f.ownerDocument && gu(f.ownerDocument.documentElement, f))
    ) {
      for (
        i !== null &&
          ql(f) &&
          ((m = i.start),
          (h = i.end),
          h === void 0 && (h = m),
          ('selectionStart' in f)
            ? ((f.selectionStart = m),
              (f.selectionEnd = Math.min(h, f.value.length)))
            : ((h =
                ((m = f.ownerDocument || document) && m.defaultView) || window),
              h.getSelection &&
                ((h = h.getSelection()),
                (u = f.textContent.length),
                (M = Math.min(i.start, u)),
                (i = i.end === void 0 ? M : Math.min(i.end, u)),
                !h.extend && M > i && ((u = i), (i = M), (M = u)),
                (u = yu(f, M)),
                (o = yu(f, i)),
                u &&
                  o &&
                  (h.rangeCount !== 1 ||
                    h.anchorNode !== u.node ||
                    h.anchorOffset !== u.offset ||
                    h.focusNode !== o.node ||
                    h.focusOffset !== o.offset) &&
                  ((m = m.createRange()),
                  m.setStart(u.node, u.offset),
                  h.removeAllRanges(),
                  M > i
                    ? (h.addRange(m), h.extend(o.node, o.offset))
                    : (m.setEnd(o.node, o.offset), h.addRange(m)))))),
          m = [],
          h = f;
        (h = h.parentNode);

      )
        h.nodeType === 1 &&
          m.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
      for (typeof f.focus == 'function' && f.focus(), f = 0; f < m.length; f++)
        (h = m[f]),
          (h.element.scrollLeft = h.left),
          (h.element.scrollTop = h.top);
    }
    (hr = !!no), (ro = no = null), (e.current = n), (P = r);
    do
      try {
        for (f = e; P !== null; ) {
          var k = P.flags;
          if ((k & 36 && qf(f, P.alternate, P), k & 128)) {
            m = void 0;
            var N = P.ref;
            if (N !== null) {
              var R = P.stateNode;
              switch (P.tag) {
                case 5:
                  m = R;
                  break;
                default:
                  m = R;
              }
              typeof N == 'function' ? N(m) : (N.current = m);
            }
          }
          P = P.nextEffect;
        }
      } catch (I) {
        if (P === null) throw Error(g(330));
        et(P, I), (P = P.nextEffect);
      }
    while (P !== null);
    (P = null), Uf(), (j = l);
  } else e.current = n;
  if (tt) (tt = !1), (Hn = e), (Wn = t);
  else
    for (P = r; P !== null; )
      (t = P.nextEffect),
        (P.nextEffect = null),
        P.flags & 8 && ((k = P), (k.sibling = null), (k.stateNode = null)),
        (P = t);
  if (
    ((r = e.pendingLanes),
    r === 0 && (Le = null),
    r === 1 ? (e === ei ? Qn++ : ((Qn = 0), (ei = e))) : (Qn = 0),
    (n = n.stateNode),
    pt && typeof pt.onCommitFiberRoot == 'function')
  )
    try {
      pt.onCommitFiberRoot(so, n, void 0, (n.current.flags & 64) == 64);
    } catch (I) {}
  if ((ke(e, oe()), Gr)) throw ((Gr = !1), (e = Ho), (Ho = null), e);
  return (j & 8) != 0 || xe(), null;
}
function uc() {
  for (; P !== null; ) {
    var e = P.alternate;
    el ||
      Yn === null ||
      ((P.flags & 8) != 0
        ? $i(P, Yn) && (el = !0)
        : P.tag === 13 && ec(e, P) && $i(P, Yn) && (el = !0));
    var t = P.flags;
    (t & 256) != 0 && Zf(e, P),
      (t & 512) == 0 ||
        tt ||
        ((tt = !0),
        Ln(97, function () {
          return nt(), null;
        })),
      (P = P.nextEffect);
  }
}
function nt() {
  if (Wn !== 90) {
    var e = 97 < Wn ? 97 : Wn;
    return (Wn = 90), mt(e, sc);
  }
  return !1;
}
function Jf(e, t) {
  qo.push(t, e),
    tt ||
      ((tt = !0),
      Ln(97, function () {
        return nt(), null;
      }));
}
function Is(e, t) {
  bo.push(t, e),
    tt ||
      ((tt = !0),
      Ln(97, function () {
        return nt(), null;
      }));
}
function sc() {
  if (Hn === null) return !1;
  var e = Hn;
  if (((Hn = null), (j & 48) != 0)) throw Error(g(331));
  var t = j;
  j |= 32;
  var n = bo;
  bo = [];
  for (var r = 0; r < n.length; r += 2) {
    var l = n[r],
      o = n[r + 1],
      i = l.destroy;
    if (((l.destroy = void 0), typeof i == 'function'))
      try {
        i();
      } catch (s) {
        if (o === null) throw Error(g(330));
        et(o, s);
      }
  }
  for (n = qo, qo = [], r = 0; r < n.length; r += 2) {
    (l = n[r]), (o = n[r + 1]);
    try {
      var u = l.create;
      l.destroy = u();
    } catch (s) {
      if (o === null) throw Error(g(330));
      et(o, s);
    }
  }
  for (u = e.current.firstEffect; u !== null; )
    (e = u.nextEffect),
      (u.nextEffect = null),
      u.flags & 8 && ((u.sibling = null), (u.stateNode = null)),
      (u = e);
  return (j = t), xe(), !0;
}
function Gs(e, t, n) {
  (t = Vo(n, t)),
    (t = Os(e, t, 1)),
    Ge(e, t),
    (t = ve()),
    (e = tl(e, 1)),
    e !== null && (mr(e, 1, t), ke(e, t));
}
function et(e, t) {
  if (e.tag === 3) Gs(e, e, t);
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        Gs(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Le === null || !Le.has(r)))
        ) {
          e = Vo(t, e);
          var l = Ms(n, e, 1);
          if ((Ge(n, l), (l = ve()), (n = tl(n, 1)), n !== null))
            mr(n, 1, l), ke(n, l);
          else if (
            typeof r.componentDidCatch == 'function' &&
            (Le === null || !Le.has(r))
          )
            try {
              r.componentDidCatch(t, e);
            } catch (o) {}
          break;
        }
      }
      n = n.return;
    }
}
function lc(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (ue & n) === n &&
      (re === 4 || (re === 3 && (ue & 62914560) === ue && 500 > oe() - Yo)
        ? qt(e, 0)
        : (Zo |= n)),
    ke(e, t);
}
function bf(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      (t & 2) == 0
        ? (t = 1)
        : (t & 4) == 0
        ? (t = At() === 99 ? 1 : 2)
        : (Fe === 0 && (Fe = Zt),
          (t = Rt(62914560 & ~Fe)),
          t === 0 && (t = 4194304))),
    (n = ve()),
    (e = tl(e, t)),
    e !== null && (mr(e, t, n), ke(e, n));
}
var Xs;
Xs = function (e, t, n) {
  var r = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) Ce = !0;
    else if ((n & r) != 0) Ce = (e.flags & 16384) != 0;
    else {
      switch (((Ce = !1), t.tag)) {
        case 3:
          Es(t), _o();
          break;
        case 5:
          ts(t);
          break;
        case 1:
          ce(t.type) && Tr(t);
          break;
        case 4:
          ko(t, t.stateNode.containerInfo);
          break;
        case 10:
          r = t.memoizedProps.value;
          var l = t.type._context;
          Q(Mr, l._currentValue), (l._currentValue = r);
          break;
        case 13:
          if (t.memoizedState !== null)
            return (n & t.child.childLanes) != 0
              ? _s(e, t, n)
              : (Q(Y, Y.current & 1),
                (t = je(e, t, n)),
                t !== null ? t.sibling : null);
          Q(Y, Y.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) != 0), (e.flags & 64) != 0)) {
            if (r) return Ps(e, t, n);
            t.flags |= 64;
          }
          if (
            ((l = t.memoizedState),
            l !== null &&
              ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
            Q(Y, Y.current),
            r)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), jo(e, t, n);
      }
      return je(e, t, n);
    }
  else Ce = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (l = Vt(t, le.current)),
        Wt(t, n),
        (l = No(null, t, r, e, l, n)),
        (t.flags |= 1),
        typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ce(r))
        ) {
          var o = !0;
          Tr(t);
        } else o = !1;
        (t.memoizedState =
          l.state !== null && l.state !== void 0 ? l.state : null),
          yo(t);
        var i = r.getDerivedStateFromProps;
        typeof i == 'function' && jr(t, r, i, e),
          (l.updater = zr),
          (t.stateNode = l),
          (l._reactInternals = t),
          go(t, r, e, n),
          (t = zo(null, t, r, !0, o, n));
      } else (t.tag = 0), pe(null, t, l, n), (t = t.child);
      return t;
    case 16:
      l = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (o = l._init),
          (l = o(l._payload)),
          (t.type = l),
          (o = t.tag = ac(l)),
          (e = Se(l, e)),
          o)
        ) {
          case 0:
            t = Io(null, t, l, e, n);
            break e;
          case 1:
            t = ws(null, t, l, e, n);
            break e;
          case 11:
            t = hs(null, t, l, e, n);
            break e;
          case 14:
            t = ys(null, t, l, Se(l.type, e), r, n);
            break e;
        }
        throw Error(g(306, l, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Se(r, l)),
        Io(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Se(r, l)),
        ws(e, t, r, l, n)
      );
    case 3:
      if ((Es(t), (r = t.updateQueue), e === null || r === null))
        throw Error(g(282));
      if (
        ((r = t.pendingProps),
        (l = t.memoizedState),
        (l = l !== null ? l.element : null),
        Yu(e, t),
        Mn(t, r, null, n),
        (r = t.memoizedState.element),
        r === l)
      )
        _o(), (t = je(e, t, n));
      else {
        if (
          ((l = t.stateNode),
          (o = l.hydrate) &&
            ((be = Ut(t.stateNode.containerInfo.firstChild)),
            (Ie = t),
            (o = Ne = !0)),
          o)
        ) {
          if (((e = l.mutableSourceEagerHydrationData), e != null))
            for (l = 0; l < e.length; l += 2)
              (o = e[l]),
                (o._workInProgressVersionPrimary = e[l + 1]),
                Kt.push(o);
          for (n = es(t, null, r, n), t.child = n; n; )
            (n.flags = (n.flags & -3) | 1024), (n = n.sibling);
        } else pe(e, t, r, n), _o();
        t = t.child;
      }
      return t;
    case 5:
      return (
        ts(t),
        e === null && Co(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        lo(r, l) ? (i = null) : o !== null && lo(r, o) && (t.flags |= 16),
        gs(e, t),
        pe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Co(t), null;
    case 13:
      return _s(e, t, n);
    case 4:
      return (
        ko(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ur(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Se(r, l)),
        hs(e, t, r, l, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value);
        var u = t.type._context;
        if ((Q(Mr, u._currentValue), (u._currentValue = o), i !== null))
          if (
            ((u = i.value),
            (o = ye(u, o)
              ? 0
              : (typeof r._calculateChangedBits == 'function'
                  ? r._calculateChangedBits(u, o)
                  : 1073741823) | 0),
            o === 0)
          ) {
            if (i.children === l.children && !fe.current) {
              t = je(e, t, n);
              break e;
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var s = u.dependencies;
              if (s !== null) {
                i = u.child;
                for (var d = s.firstContext; d !== null; ) {
                  if (d.context === r && (d.observedBits & o) != 0) {
                    u.tag === 1 &&
                      ((d = Xe(-1, n & -n)), (d.tag = 2), Ge(u, d)),
                      (u.lanes |= n),
                      (d = u.alternate),
                      d !== null && (d.lanes |= n),
                      Qu(u.return, n),
                      (s.lanes |= n);
                    break;
                  }
                  d = d.next;
                }
              } else i = u.tag === 10 && u.type === t.type ? null : u.child;
              if (i !== null) i.return = u;
              else
                for (i = u; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((u = i.sibling), u !== null)) {
                    (u.return = i.return), (i = u);
                    break;
                  }
                  i = i.return;
                }
              u = i;
            }
        pe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (o = t.pendingProps),
        (r = o.children),
        Wt(t, n),
        (l = ge(l, o.unstable_observedBits)),
        (r = r(l)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (l = t.type),
        (o = Se(l, t.pendingProps)),
        (o = Se(l.type, o)),
        ys(e, t, l, o, r, n)
      );
    case 15:
      return vs(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Se(r, l)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        ce(r) ? ((e = !0), Tr(t)) : (e = !1),
        Wt(t, n),
        Ju(t, r, l),
        go(t, r, l, n),
        zo(null, t, r, !0, e, n)
      );
    case 19:
      return Ps(e, t, n);
    case 23:
      return jo(e, t, n);
    case 24:
      return jo(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function fc(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function we(e, t, n, r) {
  return new fc(e, t, n, r);
}
function Ro(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ac(e) {
  if (typeof e == 'function') return Ro(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === er)) return 11;
    if (e === nr) return 14;
  }
  return 2;
}
function qe(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = we(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $r(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Ro(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case De:
        return Qt(n.children, l, o, t);
      case vi:
        (i = 8), (l |= 16);
        break;
      case sl:
        (i = 8), (l |= 1);
        break;
      case ln:
        return (
          (e = we(12, n, t, l | 8)),
          (e.elementType = ln),
          (e.type = ln),
          (e.lanes = o),
          e
        );
      case on:
        return (
          (e = we(13, n, t, l)),
          (e.type = on),
          (e.elementType = on),
          (e.lanes = o),
          e
        );
      case tr:
        return (e = we(19, n, t, l)), (e.elementType = tr), (e.lanes = o), e;
      case ml:
        return Fo(n, l, o, t);
      case hl:
        return (e = we(24, n, t, l)), (e.elementType = hl), (e.lanes = o), e;
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case al:
              i = 10;
              break e;
            case fl:
              i = 9;
              break e;
            case er:
              i = 11;
              break e;
            case nr:
              i = 14;
              break e;
            case cl:
              (i = 16), (r = null);
              break e;
            case dl:
              i = 22;
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = we(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Qt(e, t, n, r) {
  return (e = we(7, e, r, t)), (e.lanes = n), e;
}
function Fo(e, t, n, r) {
  return (e = we(23, e, r, t)), (e.elementType = ml), (e.lanes = n), e;
}
function wo(e, t, n) {
  return (e = we(6, e, null, t)), (e.lanes = n), e;
}
function Eo(e, t, n) {
  return (
    (t = we(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cc(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Al(0)),
    (this.expirationTimes = Al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Al(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function dc(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: st,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nl(e, t, n, r) {
  var l = t.current,
    o = ve(),
    i = Ze(l);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (ft(n) !== n || n.tag !== 1) throw Error(g(170));
      var u = n;
      do {
        switch (u.tag) {
          case 3:
            u = u.stateNode.context;
            break t;
          case 1:
            if (ce(u.type)) {
              u = u.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        u = u.return;
      } while (u !== null);
      throw Error(g(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (ce(s)) {
        n = zu(n, s, u);
        break e;
      }
    }
    n = u;
  } else n = Ye;
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xe(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    Ge(l, t),
    Je(l, i, o),
    i
  );
}
function ni(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ri(e, t) {
  Zs(e, t), (e = e.alternate) && Zs(e, t);
}
function pc() {
  return null;
}
function li(e, t, n) {
  var r =
    (n != null &&
      n.hydrationOptions != null &&
      n.hydrationOptions.mutableSources) ||
    null;
  if (
    ((n = new cc(e, t, n != null && n.hydrate === !0)),
    (t = we(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    yo(t),
    (e[$t] = n.current),
    Tu(e.nodeType === 8 ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      t = r[e];
      var l = t._getVersion;
      (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
    }
  this._internalRoot = n;
}
li.prototype.render = function (e) {
  nl(e, this._internalRoot, null, null);
};
li.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  nl(null, e, null, function () {
    t[$t] = null;
  });
};
function Xn(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function mc(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute('data-reactroot')))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n);
  return new li(e, 0, t ? { hydrate: !0 } : void 0);
}
function rl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o._internalRoot;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var d = ni(i);
        u.call(d);
      };
    }
    nl(t, i, e, l);
  } else {
    if (
      ((o = n._reactRootContainer = mc(n, r)),
      (i = o._internalRoot),
      typeof l == 'function')
    ) {
      var s = l;
      l = function () {
        var d = ni(i);
        s.call(d);
      };
    }
    Qs(function () {
      nl(t, i, e, l);
    });
  }
  return ni(i);
}
Ui = function (e) {
  if (e.tag === 13) {
    var t = ve();
    Je(e, 4, t), ri(e, 4);
  }
};
zl = function (e) {
  if (e.tag === 13) {
    var t = ve();
    Je(e, 67108864, t), ri(e, 67108864);
  }
};
Bi = function (e) {
  if (e.tag === 13) {
    var t = ve(),
      n = Ze(e);
    Je(e, n, t), ri(e, n);
  }
};
Vi = function (e, t) {
  return t();
};
Tl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((El(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ur(r);
            if (!l) throw Error(g(90));
            wi(r), El(r, l);
          }
        }
      }
      break;
    case 'textarea':
      _i(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Pt(e, !!n.multiple, t, !1);
  }
};
Ll = Ws;
Ii = function (e, t, n, r, l) {
  var o = j;
  j |= 4;
  try {
    return mt(98, e.bind(null, t, n, r, l));
  } finally {
    (j = o), j === 0 && (Jt(), xe());
  }
};
Ol = function () {
  (j & 49) == 0 && (rc(), nt());
};
ji = function (e, t) {
  var n = j;
  j |= 2;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && (Jt(), xe());
  }
};
function Js(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xn(t)) throw Error(g(200));
  return dc(e, t, null, n);
}
var hc = { Events: [cn, zt, ur, Mi, Ri, nt, { current: !1 }] },
  Gn = {
    findFiberByHostInstance: ct,
    bundleType: 0,
    version: '17.0.2',
    rendererPackageName: 'react-dom',
  },
  vc = {
    bundleType: Gn.bundleType,
    version: Gn.version,
    rendererPackageName: Gn.rendererPackageName,
    rendererConfig: Gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Di(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Gn.findFiberByHostInstance || pc,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined' &&
  ((Zn = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Zn.isDisabled && Zn.supportsFiber)
)
  try {
    (so = Zn.inject(vc)), (pt = Zn);
  } catch (e) {}
var Zn,
  yc = hc,
  gc = Js,
  wc = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(g(188))
        : Error(g(268, Object.keys(e)));
    return (e = Di(t)), (e = e === null ? null : e.stateNode), e;
  },
  Ec = function (e, t) {
    var n = j;
    if ((n & 48) != 0) return e(t);
    j |= 1;
    try {
      if (e) return mt(99, e.bind(null, t));
    } finally {
      (j = n), xe();
    }
  },
  kc = function (e, t, n) {
    if (!Xn(t)) throw Error(g(200));
    return rl(null, e, t, !0, n);
  },
  Sc = function (e, t, n) {
    if (!Xn(t)) throw Error(g(200));
    return rl(null, e, t, !1, n);
  },
  Cc = function (e) {
    if (!Xn(e)) throw Error(g(40));
    return e._reactRootContainer
      ? (Qs(function () {
          rl(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[$t] = null);
          });
        }),
        !0)
      : !1;
  },
  _c = Ws,
  xc = function (e, t) {
    return Js(
      e,
      t,
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null,
    );
  },
  Pc = function (e, t, n, r) {
    if (!Xn(n)) throw Error(g(200));
    if (e == null || e._reactInternals === void 0) throw Error(g(38));
    return rl(e, t, n, !1, r);
  },
  Nc = '17.0.2',
  Tc = {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: yc,
    createPortal: gc,
    findDOMNode: wc,
    flushSync: Ec,
    hydrate: kc,
    render: Sc,
    unmountComponentAtNode: Cc,
    unstable_batchedUpdates: _c,
    unstable_createPortal: xc,
    unstable_renderSubtreeIntoContainer: Pc,
    version: Nc,
  },
  Lc = Ct(function (e) {
    function t() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
        } catch (n) {
          console.error(n);
        }
    }
    t(), (e.exports = Tc);
  }),
  qs = Lc;
var qc = typeof window != 'undefined' ? S.useLayoutEffect : () => {},
  Jn = new Map(),
  bs = new Set();
function ea() {
  if (typeof window == 'undefined') return;
  let e = (n) => {
      let r = Jn.get(n.target);
      r ||
        ((r = new Set()),
        Jn.set(n.target, r),
        n.target.addEventListener('transitioncancel', t)),
        r.add(n.propertyName);
    },
    t = (n) => {
      let r = Jn.get(n.target);
      if (
        !!r &&
        (r.delete(n.propertyName),
        r.size === 0 &&
          (n.target.removeEventListener('transitioncancel', t),
          Jn.delete(n.target)),
        Jn.size === 0)
      ) {
        for (let l of bs) l();
        bs.clear();
      }
    };
  document.body.addEventListener('transitionrun', e),
    document.body.addEventListener('transitionend', t);
}
typeof document != 'undefined' &&
  (document.readyState !== 'loading'
    ? ea()
    : document.addEventListener('DOMContentLoaded', ea));
function Oc(e) {
  return typeof window != 'undefined' && window.navigator != null
    ? e.test(window.navigator.platform)
    : !1;
}
function Mc() {
  return Oc(/^Mac/);
}
function Rc(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : e.detail === 0 && !e.pointerType;
}
var Ic = S.createContext(null);
Ic.displayName = 'PressResponderContext';
function ta(e) {
  if (e.isDisabled) return { focusProps: {} };
  let t, n;
  return (
    (e.onFocus || e.onFocusChange) &&
      (t = (r) => {
        r.target === r.currentTarget &&
          (e.onFocus && e.onFocus(r), e.onFocusChange && e.onFocusChange(!0));
      }),
    (e.onBlur || e.onFocusChange) &&
      (n = (r) => {
        r.target === r.currentTarget &&
          (e.onBlur && e.onBlur(r), e.onFocusChange && e.onFocusChange(!1));
      }),
    { focusProps: { onFocus: t, onBlur: n } }
  );
}
var jc = new Set(),
  na = !1,
  Et = !1,
  oi = !1;
function ii(e, t) {
  for (let n of jc) n(e, t);
}
function zc(e) {
  return !(
    e.metaKey ||
    (!Mc() && e.altKey) ||
    e.ctrlKey ||
    (e.type === 'keyup' && (e.key === 'Control' || e.key === 'Shift'))
  );
}
function ra(e) {
  (Et = !0), zc(e) && ii('keyboard', e);
}
function bt(e) {
  (e.type === 'mousedown' || e.type === 'pointerdown') &&
    ((Et = !0), ii('pointer', e));
}
function Fc(e) {
  Rc(e) && (Et = !0);
}
function Dc(e) {
  e.target === window ||
    e.target === document ||
    (!Et && !oi && ii('virtual', e), (Et = !1), (oi = !1));
}
function $c() {
  (Et = !1), (oi = !0);
}
function la() {
  if (typeof window == 'undefined' || na) return;
  let e = HTMLElement.prototype.focus;
  (HTMLElement.prototype.focus = function () {
    (Et = !0), e.apply(this, arguments);
  }),
    document.addEventListener('keydown', ra, !0),
    document.addEventListener('keyup', ra, !0),
    document.addEventListener('click', Fc, !0),
    window.addEventListener('focus', Dc, !0),
    window.addEventListener('blur', $c, !1),
    typeof PointerEvent != 'undefined'
      ? (document.addEventListener('pointerdown', bt, !0),
        document.addEventListener('pointermove', bt, !0),
        document.addEventListener('pointerup', bt, !0))
      : (document.addEventListener('mousedown', bt, !0),
        document.addEventListener('mousemove', bt, !0),
        document.addEventListener('mouseup', bt, !0)),
    (na = !0);
}
typeof document != 'undefined' &&
  (document.readyState !== 'loading'
    ? la()
    : document.addEventListener('DOMContentLoaded', la));
var kt = {
    isDarkMode: !0,
    monospaceFont:
      "source-code-pro,Menlo,Monaco,Consolas,'Courier New',monospace",
    hue: 0,
    saturation: 0,
  },
  ui = S.createContext(kt),
  Uc = {
    success: 'hsl(152deg,100%,25%)',
    danger: 'hsl(354deg,100%,39%)',
    warning: 'hsl(45deg,100%,21%)',
    info: 'hsl(190deg,100%,25%)',
  },
  Bc = {
    success: 'hsl(152deg,79%,36%)',
    danger: 'hsl(354deg,81%,59%)',
    warning: 'hsl(45deg,100%,51%)',
    info: 'hsl(190deg,90%,50%)',
  },
  Vc = new Array(101).fill(0).map((e, t) => t),
  oa = () => {
    let { isDarkMode: e, monospaceFont: t, hue: n, saturation: r } = fi(ui),
      l = (i) => (e ? 0 + i : 100 - i),
      o = ci(() => Vc.map((i) => `hsl(${n}deg,${r}%,${l(i)}%)`), [n, r, e]);
    return {
      isDarkMode: e,
      monospaceFont: t,
      shades: o,
      semantic: e ? Bc : Uc,
    };
  };
var si = (e, t) => (t == null ? !0 : typeof t == 'function' ? t(e) : t.test(e));
var ia = (e) => e != null && e !== !0 && e !== !1,
  ua = (e) => e.trim().length > 0,
  en = S.forwardRef(
    (
      {
        label: e,
        value: t,
        onChange: n,
        validator: r = ua,
        status: l,
        startEnhancer: o,
        endEnhancer: i,
        monospace: u = !1,
        name: s = e,
        disabled: d = !1,
        autoComplete: w = 'on',
        placeholder: L,
      },
      v,
    ) => {
      let { isDarkMode: C, shades: T, semantic: _, monospaceFont: c } = oa(),
        a = bn(),
        [f, m] = me(!1),
        [h, M] = me(!1),
        { focusProps: k } = ta({
          onFocusChange: (W) => {
            M(W), !W && !f && m(!0);
          },
        }),
        N = si(t, r),
        R = t === '' && L === void 0,
        I = T[h ? 100 : C ? 80 : 70],
        H = T[h ? (C ? 15 : 12) : C ? 10 : 8],
        b = T[70],
        Oe = T[h ? 70 : 50],
        X = T[70];
      return (
        f &&
          r !== null &&
          ((b = `${(N ? _.success : _.danger).slice(0, -1)},${
            h && R ? 0.6 : 1
          })`),
          (Oe = N ? _.success : _.danger),
          (X = N ? _.success : _.danger),
          !N &&
            l === void 0 &&
            (l = r === ua ? `${e} is required` : `${e} is invalid`)),
        S.createElement(
          'div',
          null,
          S.createElement(
            'label',
            {
              style: {
                display: 'flex',
                position: 'relative',
                borderBottom: `2px solid ${Oe}`,
                backgroundColor: H,
                color: I,
                paddingLeft: ia(o) ? 0 : '1em',
                paddingRight: ia(i) ? 0 : '1em',
              },
            },
            o,
            S.createElement(
              'div',
              { style: { flex: '1 1 auto', position: 'relative' } },
              S.createElement(
                'div',
                {
                  style: {
                    fontSize: R ? 'inherit' : '75%',
                    color: b,
                    padding: R ? '1.2em 0' : '.8em 0 0',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                  },
                },
                e,
              ),
              S.createElement('input', {
                ...k,
                ref: v,
                name: s,
                disabled: d,
                autoComplete: w,
                value: t,
                onChange: (W) => {
                  n(W.target.value, si(W.target.value, r)),
                    clearTimeout(a.current),
                    f ||
                      (a.current = setTimeout(() => {
                        f || m(!0);
                      }, 300));
                },
                style: {
                  color: I,
                  padding: R ? '1.2em 0' : '1.7em 0 .7em',
                  fontSize: 'inherit',
                  outline: 0,
                  border: 0,
                  width: '100%',
                  background: 'transparent',
                  fontFamily: u ? c : 'inherit',
                },
              }),
              t === '' && L !== void 0
                ? S.createElement(
                    'div',
                    {
                      style: {
                        position: 'absolute',
                        top: R ? '1.2em' : '1.7em',
                        left: 0,
                        userSelect: 'none',
                        pointerEvents: 'none',
                        color: T[40],
                        padding: 0,
                        fontSize: 'inherit',
                        outline: 0,
                        border: 0,
                        background: 'transparent',
                        whiteSpace: 'pre',
                        overflow: 'hidden',
                      },
                    },
                    L,
                  )
                : null,
            ),
            i,
          ),
          f && l
            ? S.createElement(
                'div',
                {
                  style: { fontSize: '75%', color: X, padding: '.6em 1.4em 0' },
                },
                l,
              )
            : null,
        )
      );
    },
  );
var sa = () => {
    let [e, t] = me(''),
      [n, r] = me(''),
      [l, o] = me(''),
      [i, u] = me(''),
      s = bn(null),
      [d, w] = me('');
    return S.createElement(
      'div',
      null,
      S.createElement(
        qn,
        { name: 'Normal text input' },
        S.createElement(en, { label: 'Fruit', value: e, onChange: t }),
      ),
      S.createElement(
        qn,
        { name: 'Text input with placeholder' },
        S.createElement(en, {
          label: 'Fruit',
          value: n,
          onChange: r,
          placeholder: 'Orange',
        }),
      ),
      S.createElement(
        qn,
        { name: 'Monospace text input' },
        S.createElement(en, {
          label: 'Cyberfruit',
          value: l,
          onChange: o,
          monospace: !0,
        }),
      ),
      S.createElement(
        qn,
        { name: 'Text input with no validation' },
        S.createElement(en, {
          label: 'Cyberfruit',
          value: i,
          onChange: u,
          validator: null,
        }),
      ),
      S.createElement(
        qn,
        { name: 'Text input with custom enhancers' },
        S.createElement(en, {
          label: 'Search',
          value: d,
          onChange: w,
          validator: null,
          ref: s,
          startEnhancer: S.createElement(
            'div',
            {
              style: {
                flex: '0 0 3em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
            S.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '1em',
                height: '1em',
                viewBox: '0 0 24 24',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 2,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              },
              S.createElement('circle', { cx: 11, cy: 11, r: 8 }),
              S.createElement('path', { d: 'M21 21l-4.35-4.35' }),
            ),
          ),
          endEnhancer:
            d === ''
              ? null
              : S.createElement(
                  'div',
                  {
                    style: {
                      flex: '0 0 3em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  },
                  S.createElement(
                    'button',
                    {
                      onClick: () => {
                        w('');
                        let L = s.current;
                        L !== null && L.focus();
                      },
                      style: {
                        background: 'none',
                        border: 'none',
                        padding: 'none',
                        margin: 'none',
                        font: 'inherit',
                        color: 'inherit',
                        lineHeight: 1,
                      },
                    },
                    S.createElement(
                      'svg',
                      {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '1em',
                        height: '1em',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        stroke: 'currentColor',
                        strokeWidth: 2,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      },
                      S.createElement('circle', { cx: 12, cy: 12, r: 10 }),
                      S.createElement('line', { x1: 15, y1: 9, x2: 9, y2: 15 }),
                      S.createElement('line', { x1: 9, y1: 9, x2: 15, y2: 15 }),
                    ),
                  ),
                ),
        }),
      ),
    );
  },
  qn = ({ name: e, children: t }) =>
    S.createElement(
      'div',
      { style: { margin: '16px 0' } },
      S.createElement('div', { style: { marginBottom: 8 } }, e),
      S.createElement('div', null, t),
    );
var Ac = () => {
    let [e, t] = me(null),
      [n, r] = me(null),
      [l, o] = me(null),
      i = e ?? kt.isDarkMode,
      u = n ?? kt.hue,
      s = l ?? kt.saturation,
      d = { ...kt, isDarkMode: i, hue: u, saturation: s };
    return S.createElement(
      ui.Provider,
      { value: { ...kt, isDarkMode: i, hue: u, saturation: s } },
      S.createElement(
        'main',
        { className: i ? 'dark' : '' },
        S.createElement(
          'header',
          null,
          S.createElement(
            'button',
            { onClick: () => t(!i) },
            i ? 'Light' : 'Dark',
            ' mode',
          ),
          S.createElement('br', null),
          S.createElement('br', null),
          S.createElement(
            'label',
            null,
            'Hue: ',
            S.createElement('input', {
              type: 'range',
              min: '0',
              max: '360',
              value: u,
              onChange: (w) => {
                r(parseInt(w.target.value));
              },
              style: { verticalAlign: 'middle' },
            }),
            ` ${u}deg`,
          ),
          S.createElement('br', null),
          S.createElement(
            'label',
            null,
            'Saturation: ',
            S.createElement('input', {
              type: 'range',
              min: '0',
              max: '100',
              value: s,
              onChange: (w) => {
                o(parseInt(w.target.value));
              },
              style: { verticalAlign: 'middle' },
            }),
            ` ${s}%`,
          ),
        ),
        S.createElement(sa, null),
        S.createElement('footer', null),
        S.createElement(
          'pre',
          { style: { whiteSpace: 'pre-wrap' } },
          S.createElement('code', null, 'THEME: ', JSON.stringify(d, null, 2)),
        ),
      ),
    );
  },
  aa = Ac;
import.meta.env = ll;
qs.render(
  S.createElement(S.StrictMode, null, S.createElement(aa, null)),
  document.getElementById('root'),
);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
//# sourceMappingURL=index.js.map
