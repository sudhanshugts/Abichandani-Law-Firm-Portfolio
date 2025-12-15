!(function (t, e) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
  "use strict";
  var i = [],
    n = Object.getPrototypeOf,
    s = i.slice,
    o = i.flat
      ? function (t) {
          return i.flat.call(t);
        }
      : function (t) {
          return i.concat.apply([], t);
        },
    r = i.push,
    a = i.indexOf,
    l = {},
    c = l.toString,
    d = l.hasOwnProperty,
    u = d.toString,
    p = u.call(Object),
    h = {},
    f = function (t) {
      return (
        "function" == typeof t &&
        "number" != typeof t.nodeType &&
        "function" != typeof t.item
      );
    },
    g = function (t) {
      return null != t && t === t.window;
    },
    m = t.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(t, e, i) {
    var n,
      s,
      o = (i = i || m).createElement("script");
    if (((o.text = t), e))
      for (n in v)
        (s = e[n] || (e.getAttribute && e.getAttribute(n))) &&
          o.setAttribute(n, s);
    i.head.appendChild(o).parentNode.removeChild(o);
  }
  function _(t) {
    return null == t
      ? t + ""
      : "object" == typeof t || "function" == typeof t
      ? l[c.call(t)] || "object"
      : typeof t;
  }
  var b = "3.6.0",
    w = function (t, e) {
      return new w.fn.init(t, e);
    };
  function T(t) {
    var e = !!t && "length" in t && t.length,
      i = _(t);
    return (
      !f(t) &&
      !g(t) &&
      ("array" === i ||
        0 === e ||
        ("number" == typeof e && 0 < e && e - 1 in t))
    );
  }
  (w.fn = w.prototype =
    {
      jquery: b,
      constructor: w,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (t) {
        return null == t
          ? s.call(this)
          : t < 0
          ? this[t + this.length]
          : this[t];
      },
      pushStack: function (t) {
        var e = w.merge(this.constructor(), t);
        return (e.prevObject = this), e;
      },
      each: function (t) {
        return w.each(this, t);
      },
      map: function (t) {
        return this.pushStack(
          w.map(this, function (e, i) {
            return t.call(e, i, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          w.grep(this, function (t, e) {
            return (e + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          w.grep(this, function (t, e) {
            return e % 2;
          })
        );
      },
      eq: function (t) {
        var e = this.length,
          i = +t + (t < 0 ? e : 0);
        return this.pushStack(0 <= i && i < e ? [this[i]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: r,
      sort: i.sort,
      splice: i.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var t,
          e,
          i,
          n,
          s,
          o,
          r = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
            "object" == typeof r || f(r) || (r = {}),
            a === l && ((r = this), a--);
          a < l;
          a++
        )
          if (null != (t = arguments[a]))
            for (e in t)
              (n = t[e]),
                "__proto__" !== e &&
                  r !== n &&
                  (c && n && (w.isPlainObject(n) || (s = Array.isArray(n)))
                    ? ((i = r[e]),
                      (o =
                        s && !Array.isArray(i)
                          ? []
                          : s || w.isPlainObject(i)
                          ? i
                          : {}),
                      (s = !1),
                      (r[e] = w.extend(c, o, n)))
                    : void 0 !== n && (r[e] = n));
        return r;
      }),
    w.extend({
      expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isPlainObject: function (t) {
        var e, i;
        return !(
          !t ||
          "[object Object]" !== c.call(t) ||
          ((e = n(t)) &&
            ("function" !=
              typeof (i = d.call(e, "constructor") && e.constructor) ||
              u.call(i) !== p))
        );
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      globalEval: function (t, e, i) {
        y(t, { nonce: e && e.nonce }, i);
      },
      each: function (t, e) {
        var i,
          n = 0;
        if (T(t))
          for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
        else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
        return t;
      },
      makeArray: function (t, e) {
        var i = e || [];
        return (
          null != t &&
            (T(Object(t))
              ? w.merge(i, "string" == typeof t ? [t] : t)
              : r.call(i, t)),
          i
        );
      },
      inArray: function (t, e, i) {
        return null == e ? -1 : a.call(e, t, i);
      },
      merge: function (t, e) {
        for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
        return (t.length = s), t;
      },
      grep: function (t, e, i) {
        for (var n = [], s = 0, o = t.length, r = !i; s < o; s++)
          !e(t[s], s) !== r && n.push(t[s]);
        return n;
      },
      map: function (t, e, i) {
        var n,
          s,
          r = 0,
          a = [];
        if (T(t))
          for (n = t.length; r < n; r++)
            null != (s = e(t[r], r, i)) && a.push(s);
        else for (r in t) null != (s = e(t[r], r, i)) && a.push(s);
        return o(a);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = i[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (t, e) {
        l["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var x = (function (t) {
    var e,
      i,
      n,
      s,
      o,
      r,
      a,
      l,
      c,
      d,
      u,
      p,
      h,
      f,
      g,
      m,
      v,
      y,
      _,
      b = "sizzle" + 1 * new Date(),
      w = t.document,
      T = 0,
      x = 0,
      k = lt(),
      S = lt(),
      C = lt(),
      E = lt(),
      A = function (t, e) {
        return t === e && (u = !0), 0;
      },
      D = {}.hasOwnProperty,
      O = [],
      L = O.pop,
      $ = O.push,
      N = O.push,
      P = O.slice,
      j = function (t, e) {
        for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
        return -1;
      },
      M =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      H = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        H +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      R =
        "\\[" +
        H +
        "*(" +
        I +
        ")(?:" +
        H +
        "*([*^$|!~]?=)" +
        H +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        H +
        "*\\]",
      q =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        R +
        ")*)|.*)\\)|)",
      z = new RegExp(H + "+", "g"),
      F = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
      B = new RegExp("^" + H + "*," + H + "*"),
      W = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
      U = new RegExp(H + "|>"),
      X = new RegExp(q),
      Y = new RegExp("^" + I + "$"),
      V = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + R),
        PSEUDO: new RegExp("^" + q),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            H +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            H +
            "*(?:([+-]|)" +
            H +
            "*(\\d+)|))" +
            H +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + M + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            H +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            H +
            "*((?:-\\d)?\\d*)" +
            H +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Q = /HTML$/i,
      K = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      tt = /[+~]/,
      et = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
      it = function (t, e) {
        var i = "0x" + t.slice(1) - 65536;
        return (
          e ||
          (i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
        );
      },
      nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      st = function (t, e) {
        return e
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      },
      ot = function () {
        p();
      },
      rt = bt(
        function (t) {
          return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      N.apply((O = P.call(w.childNodes)), w.childNodes),
        O[w.childNodes.length].nodeType;
    } catch (e) {
      N = {
        apply: O.length
          ? function (t, e) {
              $.apply(t, P.call(e));
            }
          : function (t, e) {
              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
              t.length = i - 1;
            },
      };
    }
    function at(t, e, n, s) {
      var o,
        a,
        c,
        d,
        u,
        f,
        v,
        y = e && e.ownerDocument,
        w = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== w && 9 !== w && 11 !== w))
      )
        return n;
      if (!s && (p(e), (e = e || h), g)) {
        if (11 !== w && (u = Z.exec(t)))
          if ((o = u[1])) {
            if (9 === w) {
              if (!(c = e.getElementById(o))) return n;
              if (c.id === o) return n.push(c), n;
            } else if (y && (c = y.getElementById(o)) && _(e, c) && c.id === o)
              return n.push(c), n;
          } else {
            if (u[2]) return N.apply(n, e.getElementsByTagName(t)), n;
            if (
              (o = u[3]) &&
              i.getElementsByClassName &&
              e.getElementsByClassName
            )
              return N.apply(n, e.getElementsByClassName(o)), n;
          }
        if (
          i.qsa &&
          !E[t + " "] &&
          (!m || !m.test(t)) &&
          (1 !== w || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((v = t), (y = e), 1 === w && (U.test(t) || W.test(t)))) {
            for (
              ((y = (tt.test(t) && vt(e.parentNode)) || e) === e && i.scope) ||
                ((d = e.getAttribute("id"))
                  ? (d = d.replace(nt, st))
                  : e.setAttribute("id", (d = b))),
                a = (f = r(t)).length;
              a--;

            )
              f[a] = (d ? "#" + d : ":scope") + " " + _t(f[a]);
            v = f.join(",");
          }
          try {
            return N.apply(n, y.querySelectorAll(v)), n;
          } catch (e) {
            E(t, !0);
          } finally {
            d === b && e.removeAttribute("id");
          }
        }
      }
      return l(t.replace(F, "$1"), e, n, s);
    }
    function lt() {
      var t = [];
      return function e(i, s) {
        return (
          t.push(i + " ") > n.cacheLength && delete e[t.shift()],
          (e[i + " "] = s)
        );
      };
    }
    function ct(t) {
      return (t[b] = !0), t;
    }
    function dt(t) {
      var e = h.createElement("fieldset");
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function ut(t, e) {
      for (var i = t.split("|"), s = i.length; s--; ) n.attrHandle[i[s]] = e;
    }
    function pt(t, e) {
      var i = e && t,
        n =
          i &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          t.sourceIndex - e.sourceIndex;
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
      return t ? 1 : -1;
    }
    function ht(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function ft(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && e.type === t;
      };
    }
    function gt(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && rt(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function mt(t) {
      return ct(function (e) {
        return (
          (e = +e),
          ct(function (i, n) {
            for (var s, o = t([], i.length, e), r = o.length; r--; )
              i[(s = o[r])] && (i[s] = !(n[s] = i[s]));
          })
        );
      });
    }
    function vt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }
    for (e in ((i = at.support = {}),
    (o = at.isXML =
      function (t) {
        var e = t && t.namespaceURI,
          i = t && (t.ownerDocument || t).documentElement;
        return !Q.test(e || (i && i.nodeName) || "HTML");
      }),
    (p = at.setDocument =
      function (t) {
        var e,
          s,
          r = t ? t.ownerDocument || t : w;
        return (
          r != h &&
            9 === r.nodeType &&
            r.documentElement &&
            ((f = (h = r).documentElement),
            (g = !o(h)),
            w != h &&
              (s = h.defaultView) &&
              s.top !== s &&
              (s.addEventListener
                ? s.addEventListener("unload", ot, !1)
                : s.attachEvent && s.attachEvent("onunload", ot)),
            (i.scope = dt(function (t) {
              return (
                f.appendChild(t).appendChild(h.createElement("div")),
                void 0 !== t.querySelectorAll &&
                  !t.querySelectorAll(":scope fieldset div").length
              );
            })),
            (i.attributes = dt(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (i.getElementsByTagName = dt(function (t) {
              return (
                t.appendChild(h.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (i.getElementsByClassName = J.test(h.getElementsByClassName)),
            (i.getById = dt(function (t) {
              return (
                (f.appendChild(t).id = b),
                !h.getElementsByName || !h.getElementsByName(b).length
              );
            })),
            i.getById
              ? ((n.filter.ID = function (t) {
                  var e = t.replace(et, it);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }),
                (n.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && g) {
                    var i = e.getElementById(t);
                    return i ? [i] : [];
                  }
                }))
              : ((n.filter.ID = function (t) {
                  var e = t.replace(et, it);
                  return function (t) {
                    var i =
                      void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e;
                  };
                }),
                (n.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && g) {
                    var i,
                      n,
                      s,
                      o = e.getElementById(t);
                    if (o) {
                      if ((i = o.getAttributeNode("id")) && i.value === t)
                        return [o];
                      for (s = e.getElementsByName(t), n = 0; (o = s[n++]); )
                        if ((i = o.getAttributeNode("id")) && i.value === t)
                          return [o];
                    }
                    return [];
                  }
                })),
            (n.find.TAG = i.getElementsByTagName
              ? function (t, e) {
                  return void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : i.qsa
                    ? e.querySelectorAll(t)
                    : void 0;
                }
              : function (t, e) {
                  var i,
                    n = [],
                    s = 0,
                    o = e.getElementsByTagName(t);
                  if ("*" === t) {
                    for (; (i = o[s++]); ) 1 === i.nodeType && n.push(i);
                    return n;
                  }
                  return o;
                }),
            (n.find.CLASS =
              i.getElementsByClassName &&
              function (t, e) {
                if (void 0 !== e.getElementsByClassName && g)
                  return e.getElementsByClassName(t);
              }),
            (v = []),
            (m = []),
            (i.qsa = J.test(h.querySelectorAll)) &&
              (dt(function (t) {
                var e;
                (f.appendChild(t).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    m.push("[*^$]=" + H + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    m.push("\\[" + H + "*(?:value|" + M + ")"),
                  t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                  (e = h.createElement("input")).setAttribute("name", ""),
                  t.appendChild(e),
                  t.querySelectorAll("[name='']").length ||
                    m.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"),
                  t.querySelectorAll(":checked").length || m.push(":checked"),
                  t.querySelectorAll("a#" + b + "+*").length ||
                    m.push(".#.+[+~]"),
                  t.querySelectorAll("\\\f"),
                  m.push("[\\r\\n\\f]");
              }),
              dt(function (t) {
                t.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = h.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    m.push("name" + H + "*[*^$|!~]?="),
                  2 !== t.querySelectorAll(":enabled").length &&
                    m.push(":enabled", ":disabled"),
                  (f.appendChild(t).disabled = !0),
                  2 !== t.querySelectorAll(":disabled").length &&
                    m.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  m.push(",.*:");
              })),
            (i.matchesSelector = J.test(
              (y =
                f.matches ||
                f.webkitMatchesSelector ||
                f.mozMatchesSelector ||
                f.oMatchesSelector ||
                f.msMatchesSelector)
            )) &&
              dt(function (t) {
                (i.disconnectedMatch = y.call(t, "*")),
                  y.call(t, "[s!='']:x"),
                  v.push("!=", q);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (e = J.test(f.compareDocumentPosition)),
            (_ =
              e || J.test(f.contains)
                ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                      n = e && e.parentNode;
                    return (
                      t === n ||
                      !(
                        !n ||
                        1 !== n.nodeType ||
                        !(i.contains
                          ? i.contains(n)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(n))
                      )
                    );
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            (A = e
              ? function (t, e) {
                  if (t === e) return (u = !0), 0;
                  var n =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (t.ownerDocument || t) == (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1) ||
                    (!i.sortDetached && e.compareDocumentPosition(t) === n)
                      ? t == h || (t.ownerDocument == w && _(w, t))
                        ? -1
                        : e == h || (e.ownerDocument == w && _(w, e))
                        ? 1
                        : d
                        ? j(d, t) - j(d, e)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (t, e) {
                  if (t === e) return (u = !0), 0;
                  var i,
                    n = 0,
                    s = t.parentNode,
                    o = e.parentNode,
                    r = [t],
                    a = [e];
                  if (!s || !o)
                    return t == h
                      ? -1
                      : e == h
                      ? 1
                      : s
                      ? -1
                      : o
                      ? 1
                      : d
                      ? j(d, t) - j(d, e)
                      : 0;
                  if (s === o) return pt(t, e);
                  for (i = t; (i = i.parentNode); ) r.unshift(i);
                  for (i = e; (i = i.parentNode); ) a.unshift(i);
                  for (; r[n] === a[n]; ) n++;
                  return n
                    ? pt(r[n], a[n])
                    : r[n] == w
                    ? -1
                    : a[n] == w
                    ? 1
                    : 0;
                })),
          h
        );
      }),
    (at.matches = function (t, e) {
      return at(t, null, null, e);
    }),
    (at.matchesSelector = function (t, e) {
      if (
        (p(t),
        i.matchesSelector &&
          g &&
          !E[e + " "] &&
          (!v || !v.test(e)) &&
          (!m || !m.test(e)))
      )
        try {
          var n = y.call(t, e);
          if (
            n ||
            i.disconnectedMatch ||
            (t.document && 11 !== t.document.nodeType)
          )
            return n;
        } catch (t) {
          E(e, !0);
        }
      return 0 < at(e, h, null, [t]).length;
    }),
    (at.contains = function (t, e) {
      return (t.ownerDocument || t) != h && p(t), _(t, e);
    }),
    (at.attr = function (t, e) {
      (t.ownerDocument || t) != h && p(t);
      var s = n.attrHandle[e.toLowerCase()],
        o = s && D.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !g) : void 0;
      return void 0 !== o
        ? o
        : i.attributes || !g
        ? t.getAttribute(e)
        : (o = t.getAttributeNode(e)) && o.specified
        ? o.value
        : null;
    }),
    (at.escape = function (t) {
      return (t + "").replace(nt, st);
    }),
    (at.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }),
    (at.uniqueSort = function (t) {
      var e,
        n = [],
        s = 0,
        o = 0;
      if (
        ((u = !i.detectDuplicates),
        (d = !i.sortStable && t.slice(0)),
        t.sort(A),
        u)
      ) {
        for (; (e = t[o++]); ) e === t[o] && (s = n.push(o));
        for (; s--; ) t.splice(n[s], 1);
      }
      return (d = null), t;
    }),
    (s = at.getText =
      function (t) {
        var e,
          i = "",
          n = 0,
          o = t.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) i += s(t);
          } else if (3 === o || 4 === o) return t.nodeValue;
        } else for (; (e = t[n++]); ) i += s(e);
        return i;
      }),
    ((n = at.selectors =
      {
        cacheLength: 50,
        createPseudo: ct,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (t) {
            return (
              (t[1] = t[1].replace(et, it)),
              (t[3] = (t[3] || t[4] || t[5] || "").replace(et, it)),
              "~=" === t[2] && (t[3] = " " + t[3] + " "),
              t.slice(0, 4)
            );
          },
          CHILD: function (t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3)
                ? (t[3] || at.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ("even" === t[3] || "odd" === t[3]))),
                  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                : t[3] && at.error(t[0]),
              t
            );
          },
          PSEUDO: function (t) {
            var e,
              i = !t[6] && t[2];
            return V.CHILD.test(t[0])
              ? null
              : (t[3]
                  ? (t[2] = t[4] || t[5] || "")
                  : i &&
                    X.test(i) &&
                    (e = r(i, !0)) &&
                    (e = i.indexOf(")", i.length - e) - i.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                t.slice(0, 3));
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(et, it).toLowerCase();
            return "*" === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = k[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) &&
                k(t, function (t) {
                  return e.test(
                    ("string" == typeof t.className && t.className) ||
                      (void 0 !== t.getAttribute && t.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (t, e, i) {
            return function (n) {
              var s = at.attr(n, t);
              return null == s
                ? "!=" === e
                : !e ||
                    ((s += ""),
                    "=" === e
                      ? s === i
                      : "!=" === e
                      ? s !== i
                      : "^=" === e
                      ? i && 0 === s.indexOf(i)
                      : "*=" === e
                      ? i && -1 < s.indexOf(i)
                      : "$=" === e
                      ? i && s.slice(-i.length) === i
                      : "~=" === e
                      ? -1 < (" " + s.replace(z, " ") + " ").indexOf(i)
                      : "|=" === e &&
                        (s === i || s.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (t, e, i, n, s) {
            var o = "nth" !== t.slice(0, 3),
              r = "last" !== t.slice(-4),
              a = "of-type" === e;
            return 1 === n && 0 === s
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (e, i, l) {
                  var c,
                    d,
                    u,
                    p,
                    h,
                    f,
                    g = o !== r ? "nextSibling" : "previousSibling",
                    m = e.parentNode,
                    v = a && e.nodeName.toLowerCase(),
                    y = !l && !a,
                    _ = !1;
                  if (m) {
                    if (o) {
                      for (; g; ) {
                        for (p = e; (p = p[g]); )
                          if (
                            a
                              ? p.nodeName.toLowerCase() === v
                              : 1 === p.nodeType
                          )
                            return !1;
                        f = g = "only" === t && !f && "nextSibling";
                      }
                      return !0;
                    }
                    if (((f = [r ? m.firstChild : m.lastChild]), r && y)) {
                      for (
                        _ =
                          (h =
                            (c =
                              (d =
                                (u = (p = m)[b] || (p[b] = {}))[p.uniqueID] ||
                                (u[p.uniqueID] = {}))[t] || [])[0] === T &&
                            c[1]) && c[2],
                          p = h && m.childNodes[h];
                        (p = (++h && p && p[g]) || (_ = h = 0) || f.pop());

                      )
                        if (1 === p.nodeType && ++_ && p === e) {
                          d[t] = [T, h, _];
                          break;
                        }
                    } else if (
                      (y &&
                        (_ = h =
                          (c =
                            (d =
                              (u = (p = e)[b] || (p[b] = {}))[p.uniqueID] ||
                              (u[p.uniqueID] = {}))[t] || [])[0] === T && c[1]),
                      !1 === _)
                    )
                      for (
                        ;
                        (p = (++h && p && p[g]) || (_ = h = 0) || f.pop()) &&
                        ((a
                          ? p.nodeName.toLowerCase() !== v
                          : 1 !== p.nodeType) ||
                          !++_ ||
                          (y &&
                            ((d =
                              (u = p[b] || (p[b] = {}))[p.uniqueID] ||
                              (u[p.uniqueID] = {}))[t] = [T, _]),
                          p !== e));

                      );
                    return (_ -= s) === n || (_ % n == 0 && 0 <= _ / n);
                  }
                };
          },
          PSEUDO: function (t, e) {
            var i,
              s =
                n.pseudos[t] ||
                n.setFilters[t.toLowerCase()] ||
                at.error("unsupported pseudo: " + t);
            return s[b]
              ? s(e)
              : 1 < s.length
              ? ((i = [t, t, "", e]),
                n.setFilters.hasOwnProperty(t.toLowerCase())
                  ? ct(function (t, i) {
                      for (var n, o = s(t, e), r = o.length; r--; )
                        t[(n = j(t, o[r]))] = !(i[n] = o[r]);
                    })
                  : function (t) {
                      return s(t, 0, i);
                    })
              : s;
          },
        },
        pseudos: {
          not: ct(function (t) {
            var e = [],
              i = [],
              n = a(t.replace(F, "$1"));
            return n[b]
              ? ct(function (t, e, i, s) {
                  for (var o, r = n(t, null, s, []), a = t.length; a--; )
                    (o = r[a]) && (t[a] = !(e[a] = o));
                })
              : function (t, s, o) {
                  return (e[0] = t), n(e, null, o, i), (e[0] = null), !i.pop();
                };
          }),
          has: ct(function (t) {
            return function (e) {
              return 0 < at(t, e).length;
            };
          }),
          contains: ct(function (t) {
            return (
              (t = t.replace(et, it)),
              function (e) {
                return -1 < (e.textContent || s(e)).indexOf(t);
              }
            );
          }),
          lang: ct(function (t) {
            return (
              Y.test(t || "") || at.error("unsupported lang: " + t),
              (t = t.replace(et, it).toLowerCase()),
              function (e) {
                var i;
                do {
                  if (
                    (i = g
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var i = t.location && t.location.hash;
            return i && i.slice(1) === e.id;
          },
          root: function (t) {
            return t === f;
          },
          focus: function (t) {
            return (
              t === h.activeElement &&
              (!h.hasFocus || h.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: gt(!1),
          disabled: gt(!0),
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return (
              ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
            );
          },
          selected: function (t) {
            return (
              t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            );
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function (t) {
            return !n.pseudos.empty(t);
          },
          header: function (t) {
            return G.test(t.nodeName);
          },
          input: function (t) {
            return K.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function (t) {
            var e;
            return (
              "input" === t.nodeName.toLowerCase() &&
              "text" === t.type &&
              (null == (e = t.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: mt(function () {
            return [0];
          }),
          last: mt(function (t, e) {
            return [e - 1];
          }),
          eq: mt(function (t, e, i) {
            return [i < 0 ? i + e : i];
          }),
          even: mt(function (t, e) {
            for (var i = 0; i < e; i += 2) t.push(i);
            return t;
          }),
          odd: mt(function (t, e) {
            for (var i = 1; i < e; i += 2) t.push(i);
            return t;
          }),
          lt: mt(function (t, e, i) {
            for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n; ) t.push(n);
            return t;
          }),
          gt: mt(function (t, e, i) {
            for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
            return t;
          }),
        },
      }).pseudos.nth = n.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      n.pseudos[e] = ht(e);
    for (e in { submit: !0, reset: !0 }) n.pseudos[e] = ft(e);
    function yt() {}
    function _t(t) {
      for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
      return n;
    }
    function bt(t, e, i) {
      var n = e.dir,
        s = e.next,
        o = s || n,
        r = i && "parentNode" === o,
        a = x++;
      return e.first
        ? function (e, i, s) {
            for (; (e = e[n]); ) if (1 === e.nodeType || r) return t(e, i, s);
            return !1;
          }
        : function (e, i, l) {
            var c,
              d,
              u,
              p = [T, a];
            if (l) {
              for (; (e = e[n]); )
                if ((1 === e.nodeType || r) && t(e, i, l)) return !0;
            } else
              for (; (e = e[n]); )
                if (1 === e.nodeType || r)
                  if (
                    ((d =
                      (u = e[b] || (e[b] = {}))[e.uniqueID] ||
                      (u[e.uniqueID] = {})),
                    s && s === e.nodeName.toLowerCase())
                  )
                    e = e[n] || e;
                  else {
                    if ((c = d[o]) && c[0] === T && c[1] === a)
                      return (p[2] = c[2]);
                    if (((d[o] = p)[2] = t(e, i, l))) return !0;
                  }
            return !1;
          };
    }
    function wt(t) {
      return 1 < t.length
        ? function (e, i, n) {
            for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
            return !0;
          }
        : t[0];
    }
    function Tt(t, e, i, n, s) {
      for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++)
        (o = t[a]) && ((i && !i(o, n, s)) || (r.push(o), c && e.push(a)));
      return r;
    }
    function xt(t, e, i, n, s, o) {
      return (
        n && !n[b] && (n = xt(n)),
        s && !s[b] && (s = xt(s, o)),
        ct(function (o, r, a, l) {
          var c,
            d,
            u,
            p = [],
            h = [],
            f = r.length,
            g =
              o ||
              (function (t, e, i) {
                for (var n = 0, s = e.length; n < s; n++) at(t, e[n], i);
                return i;
              })(e || "*", a.nodeType ? [a] : a, []),
            m = !t || (!o && e) ? g : Tt(g, p, t, a, l),
            v = i ? (s || (o ? t : f || n) ? [] : r) : m;
          if ((i && i(m, v, a, l), n))
            for (c = Tt(v, h), n(c, [], a, l), d = c.length; d--; )
              (u = c[d]) && (v[h[d]] = !(m[h[d]] = u));
          if (o) {
            if (s || t) {
              if (s) {
                for (c = [], d = v.length; d--; )
                  (u = v[d]) && c.push((m[d] = u));
                s(null, (v = []), c, l);
              }
              for (d = v.length; d--; )
                (u = v[d]) &&
                  -1 < (c = s ? j(o, u) : p[d]) &&
                  (o[c] = !(r[c] = u));
            }
          } else (v = Tt(v === r ? v.splice(f, v.length) : v)), s ? s(null, r, v, l) : N.apply(r, v);
        })
      );
    }
    function kt(t) {
      for (
        var e,
          i,
          s,
          o = t.length,
          r = n.relative[t[0].type],
          a = r || n.relative[" "],
          l = r ? 1 : 0,
          d = bt(
            function (t) {
              return t === e;
            },
            a,
            !0
          ),
          u = bt(
            function (t) {
              return -1 < j(e, t);
            },
            a,
            !0
          ),
          p = [
            function (t, i, n) {
              var s =
                (!r && (n || i !== c)) ||
                ((e = i).nodeType ? d(t, i, n) : u(t, i, n));
              return (e = null), s;
            },
          ];
        l < o;
        l++
      )
        if ((i = n.relative[t[l].type])) p = [bt(wt(p), i)];
        else {
          if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
            for (s = ++l; s < o && !n.relative[t[s].type]; s++);
            return xt(
              1 < l && wt(p),
              1 < l &&
                _t(
                  t
                    .slice(0, l - 1)
                    .concat({ value: " " === t[l - 2].type ? "*" : "" })
                ).replace(F, "$1"),
              i,
              l < s && kt(t.slice(l, s)),
              s < o && kt((t = t.slice(s))),
              s < o && _t(t)
            );
          }
          p.push(i);
        }
      return wt(p);
    }
    return (
      (yt.prototype = n.filters = n.pseudos),
      (n.setFilters = new yt()),
      (r = at.tokenize =
        function (t, e) {
          var i,
            s,
            o,
            r,
            a,
            l,
            c,
            d = S[t + " "];
          if (d) return e ? 0 : d.slice(0);
          for (a = t, l = [], c = n.preFilter; a; ) {
            for (r in ((i && !(s = B.exec(a))) ||
              (s && (a = a.slice(s[0].length) || a), l.push((o = []))),
            (i = !1),
            (s = W.exec(a)) &&
              ((i = s.shift()),
              o.push({ value: i, type: s[0].replace(F, " ") }),
              (a = a.slice(i.length))),
            n.filter))
              !(s = V[r].exec(a)) ||
                (c[r] && !(s = c[r](s))) ||
                ((i = s.shift()),
                o.push({ value: i, type: r, matches: s }),
                (a = a.slice(i.length)));
            if (!i) break;
          }
          return e ? a.length : a ? at.error(t) : S(t, l).slice(0);
        }),
      (a = at.compile =
        function (t, e) {
          var i,
            s,
            o,
            a,
            l,
            d,
            u = [],
            f = [],
            m = C[t + " "];
          if (!m) {
            for (e || (e = r(t)), i = e.length; i--; )
              (m = kt(e[i]))[b] ? u.push(m) : f.push(m);
            (m = C(
              t,
              ((s = f),
              (a = 0 < (o = u).length),
              (l = 0 < s.length),
              (d = function (t, e, i, r, d) {
                var u,
                  f,
                  m,
                  v = 0,
                  y = "0",
                  _ = t && [],
                  b = [],
                  w = c,
                  x = t || (l && n.find.TAG("*", d)),
                  k = (T += null == w ? 1 : Math.random() || 0.1),
                  S = x.length;
                for (
                  d && (c = e == h || e || d);
                  y !== S && null != (u = x[y]);
                  y++
                ) {
                  if (l && u) {
                    for (
                      f = 0, e || u.ownerDocument == h || (p(u), (i = !g));
                      (m = s[f++]);

                    )
                      if (m(u, e || h, i)) {
                        r.push(u);
                        break;
                      }
                    d && (T = k);
                  }
                  a && ((u = !m && u) && v--, t && _.push(u));
                }
                if (((v += y), a && y !== v)) {
                  for (f = 0; (m = o[f++]); ) m(_, b, e, i);
                  if (t) {
                    if (0 < v) for (; y--; ) _[y] || b[y] || (b[y] = L.call(r));
                    b = Tt(b);
                  }
                  N.apply(r, b),
                    d &&
                      !t &&
                      0 < b.length &&
                      1 < v + o.length &&
                      at.uniqueSort(r);
                }
                return d && ((T = k), (c = w)), _;
              }),
              a ? ct(d) : d)
            )).selector = t;
          }
          return m;
        }),
      (l = at.select =
        function (t, e, i, s) {
          var o,
            l,
            c,
            d,
            u,
            p = "function" == typeof t && t,
            h = !s && r((t = p.selector || t));
          if (((i = i || []), 1 === h.length)) {
            if (
              2 < (l = h[0] = h[0].slice(0)).length &&
              "ID" === (c = l[0]).type &&
              9 === e.nodeType &&
              g &&
              n.relative[l[1].type]
            ) {
              if (!(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0]))
                return i;
              p && (e = e.parentNode), (t = t.slice(l.shift().value.length));
            }
            for (
              o = V.needsContext.test(t) ? 0 : l.length;
              o-- && ((c = l[o]), !n.relative[(d = c.type)]);

            )
              if (
                (u = n.find[d]) &&
                (s = u(
                  c.matches[0].replace(et, it),
                  (tt.test(l[0].type) && vt(e.parentNode)) || e
                ))
              ) {
                if ((l.splice(o, 1), !(t = s.length && _t(l))))
                  return N.apply(i, s), i;
                break;
              }
          }
          return (
            (p || a(t, h))(
              s,
              e,
              !g,
              i,
              !e || (tt.test(t) && vt(e.parentNode)) || e
            ),
            i
          );
        }),
      (i.sortStable = b.split("").sort(A).join("") === b),
      (i.detectDuplicates = !!u),
      p(),
      (i.sortDetached = dt(function (t) {
        return 1 & t.compareDocumentPosition(h.createElement("fieldset"));
      })),
      dt(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        ut("type|href|height|width", function (t, e, i) {
          if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (i.attributes &&
        dt(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        ut("value", function (t, e, i) {
          if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }),
      dt(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        ut(M, function (t, e, i) {
          var n;
          if (!i)
            return !0 === t[e]
              ? e.toLowerCase()
              : (n = t.getAttributeNode(e)) && n.specified
              ? n.value
              : null;
        }),
      at
    );
  })(t);
  (w.find = x),
    (w.expr = x.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = x.uniqueSort),
    (w.text = x.getText),
    (w.isXMLDoc = x.isXML),
    (w.contains = x.contains),
    (w.escapeSelector = x.escape);
  var k = function (t, e, i) {
      for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (s && w(t).is(i)) break;
          n.push(t);
        }
      return n;
    },
    S = function (t, e) {
      for (var i = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && i.push(t);
      return i;
    },
    C = w.expr.match.needsContext;
  function E(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(t, e, i) {
    return f(e)
      ? w.grep(t, function (t, n) {
          return !!e.call(t, n, t) !== i;
        })
      : e.nodeType
      ? w.grep(t, function (t) {
          return (t === e) !== i;
        })
      : "string" != typeof e
      ? w.grep(t, function (t) {
          return -1 < a.call(e, t) !== i;
        })
      : w.filter(e, t, i);
  }
  (w.filter = function (t, e, i) {
    var n = e[0];
    return (
      i && (t = ":not(" + t + ")"),
      1 === e.length && 1 === n.nodeType
        ? w.find.matchesSelector(n, t)
          ? [n]
          : []
        : w.find.matches(
            t,
            w.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (t) {
        var e,
          i,
          n = this.length,
          s = this;
        if ("string" != typeof t)
          return this.pushStack(
            w(t).filter(function () {
              for (e = 0; e < n; e++) if (w.contains(s[e], this)) return !0;
            })
          );
        for (i = this.pushStack([]), e = 0; e < n; e++) w.find(t, s[e], i);
        return 1 < n ? w.uniqueSort(i) : i;
      },
      filter: function (t) {
        return this.pushStack(D(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(D(this, t || [], !0));
      },
      is: function (t) {
        return !!D(this, "string" == typeof t && C.test(t) ? w(t) : t || [], !1)
          .length;
      },
    });
  var O,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (t, e, i) {
    var n, s;
    if (!t) return this;
    if (((i = i || O), "string" == typeof t)) {
      if (
        !(n =
          "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length
            ? [null, t, null]
            : L.exec(t)) ||
        (!n[1] && e)
      )
        return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
      if (n[1]) {
        if (
          ((e = e instanceof w ? e[0] : e),
          w.merge(
            this,
            w.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : m, !0)
          ),
          A.test(n[1]) && w.isPlainObject(e))
        )
          for (n in e) f(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
        return this;
      }
      return (
        (s = m.getElementById(n[2])) && ((this[0] = s), (this.length = 1)), this
      );
    }
    return t.nodeType
      ? ((this[0] = t), (this.length = 1), this)
      : f(t)
      ? void 0 !== i.ready
        ? i.ready(t)
        : t(w)
      : w.makeArray(t, this);
  }).prototype = w.fn),
    (O = w(m));
  var $ = /^(?:parents|prev(?:Until|All))/,
    N = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  w.fn.extend({
    has: function (t) {
      var e = w(t, this),
        i = e.length;
      return this.filter(function () {
        for (var t = 0; t < i; t++) if (w.contains(this, e[t])) return !0;
      });
    },
    closest: function (t, e) {
      var i,
        n = 0,
        s = this.length,
        o = [],
        r = "string" != typeof t && w(t);
      if (!C.test(t))
        for (; n < s; n++)
          for (i = this[n]; i && i !== e; i = i.parentNode)
            if (
              i.nodeType < 11 &&
              (r
                ? -1 < r.index(i)
                : 1 === i.nodeType && w.find.matchesSelector(i, t))
            ) {
              o.push(i);
              break;
            }
      return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? a.call(w(t), this[0])
          : a.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (t, e) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    w.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return k(t, "parentNode");
        },
        parentsUntil: function (t, e, i) {
          return k(t, "parentNode", i);
        },
        next: function (t) {
          return P(t, "nextSibling");
        },
        prev: function (t) {
          return P(t, "previousSibling");
        },
        nextAll: function (t) {
          return k(t, "nextSibling");
        },
        prevAll: function (t) {
          return k(t, "previousSibling");
        },
        nextUntil: function (t, e, i) {
          return k(t, "nextSibling", i);
        },
        prevUntil: function (t, e, i) {
          return k(t, "previousSibling", i);
        },
        siblings: function (t) {
          return S((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return S(t.firstChild);
        },
        contents: function (t) {
          return null != t.contentDocument && n(t.contentDocument)
            ? t.contentDocument
            : (E(t, "template") && (t = t.content || t),
              w.merge([], t.childNodes));
        },
      },
      function (t, e) {
        w.fn[t] = function (i, n) {
          var s = w.map(this, e, i);
          return (
            "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (s = w.filter(n, s)),
            1 < this.length &&
              (N[t] || w.uniqueSort(s), $.test(t) && s.reverse()),
            this.pushStack(s)
          );
        };
      }
    );
  var j = /[^\x20\t\r\n\f]+/g;
  function M(t) {
    return t;
  }
  function H(t) {
    throw t;
  }
  function I(t, e, i, n) {
    var s;
    try {
      t && f((s = t.promise))
        ? s.call(t).done(e).fail(i)
        : t && f((s = t.then))
        ? s.call(t, e, i)
        : e.apply(void 0, [t].slice(n));
    } catch (t) {
      i.apply(void 0, [t]);
    }
  }
  (w.Callbacks = function (t) {
    var e, i;
    t =
      "string" == typeof t
        ? ((e = t),
          (i = {}),
          w.each(e.match(j) || [], function (t, e) {
            i[e] = !0;
          }),
          i)
        : w.extend({}, t);
    var n,
      s,
      o,
      r,
      a = [],
      l = [],
      c = -1,
      d = function () {
        for (r = r || t.once, o = n = !0; l.length; c = -1)
          for (s = l.shift(); ++c < a.length; )
            !1 === a[c].apply(s[0], s[1]) &&
              t.stopOnFalse &&
              ((c = a.length), (s = !1));
        t.memory || (s = !1), (n = !1), r && (a = s ? [] : "");
      },
      u = {
        add: function () {
          return (
            a &&
              (s && !n && ((c = a.length - 1), l.push(s)),
              (function e(i) {
                w.each(i, function (i, n) {
                  f(n)
                    ? (t.unique && u.has(n)) || a.push(n)
                    : n && n.length && "string" !== _(n) && e(n);
                });
              })(arguments),
              s && !n && d()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (t, e) {
              for (var i; -1 < (i = w.inArray(e, a, i)); )
                a.splice(i, 1), i <= c && c--;
            }),
            this
          );
        },
        has: function (t) {
          return t ? -1 < w.inArray(t, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (r = l = []), (a = s = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (r = l = []), s || n || (a = s = ""), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (t, e) {
          return (
            r ||
              ((e = [t, (e = e || []).slice ? e.slice() : e]),
              l.push(e),
              n || d()),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return u;
  }),
    w.extend({
      Deferred: function (e) {
        var i = [
            [
              "notify",
              "progress",
              w.Callbacks("memory"),
              w.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              w.Callbacks("once memory"),
              w.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          n = "pending",
          s = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (t) {
              return s.then(null, t);
            },
            pipe: function () {
              var t = arguments;
              return w
                .Deferred(function (e) {
                  w.each(i, function (i, n) {
                    var s = f(t[n[4]]) && t[n[4]];
                    o[n[1]](function () {
                      var t = s && s.apply(this, arguments);
                      t && f(t.promise)
                        ? t
                            .promise()
                            .progress(e.notify)
                            .done(e.resolve)
                            .fail(e.reject)
                        : e[n[0] + "With"](this, s ? [t] : arguments);
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            then: function (e, n, s) {
              var o = 0;
              function r(e, i, n, s) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var t, c;
                      if (!(e < o)) {
                        if ((t = n.apply(a, l)) === i.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          t &&
                          ("object" == typeof t || "function" == typeof t) &&
                          t.then),
                          f(c)
                            ? s
                              ? c.call(t, r(o, i, M, s), r(o, i, H, s))
                              : (o++,
                                c.call(
                                  t,
                                  r(o, i, M, s),
                                  r(o, i, H, s),
                                  r(o, i, M, i.notifyWith)
                                ))
                            : (n !== M && ((a = void 0), (l = [t])),
                              (s || i.resolveWith)(a, l));
                      }
                    },
                    d = s
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (t) {
                            w.Deferred.exceptionHook &&
                              w.Deferred.exceptionHook(t, d.stackTrace),
                              o <= e + 1 &&
                                (n !== H && ((a = void 0), (l = [t])),
                                i.rejectWith(a, l));
                          }
                        };
                  e
                    ? d()
                    : (w.Deferred.getStackHook &&
                        (d.stackTrace = w.Deferred.getStackHook()),
                      t.setTimeout(d));
                };
              }
              return w
                .Deferred(function (t) {
                  i[0][3].add(r(0, t, f(s) ? s : M, t.notifyWith)),
                    i[1][3].add(r(0, t, f(e) ? e : M)),
                    i[2][3].add(r(0, t, f(n) ? n : H));
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? w.extend(t, s) : s;
            },
          },
          o = {};
        return (
          w.each(i, function (t, e) {
            var r = e[2],
              a = e[5];
            (s[e[1]] = r.add),
              a &&
                r.add(
                  function () {
                    n = a;
                  },
                  i[3 - t][2].disable,
                  i[3 - t][3].disable,
                  i[0][2].lock,
                  i[0][3].lock
                ),
              r.add(e[3].fire),
              (o[e[0]] = function () {
                return (
                  o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[e[0] + "With"] = r.fireWith);
          }),
          s.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (t) {
        var e = arguments.length,
          i = e,
          n = Array(i),
          o = s.call(arguments),
          r = w.Deferred(),
          a = function (t) {
            return function (i) {
              (n[t] = this),
                (o[t] = 1 < arguments.length ? s.call(arguments) : i),
                --e || r.resolveWith(n, o);
            };
          };
        if (
          e <= 1 &&
          (I(t, r.done(a(i)).resolve, r.reject, !e),
          "pending" === r.state() || f(o[i] && o[i].then))
        )
          return r.then();
        for (; i--; ) I(o[i], a(i), r.reject);
        return r.promise();
      },
    });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (e, i) {
    t.console &&
      t.console.warn &&
      e &&
      R.test(e.name) &&
      t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i);
  }),
    (w.readyException = function (e) {
      t.setTimeout(function () {
        throw e;
      });
    });
  var q = w.Deferred();
  function z() {
    m.removeEventListener("DOMContentLoaded", z),
      t.removeEventListener("load", z),
      w.ready();
  }
  (w.fn.ready = function (t) {
    return (
      q.then(t).catch(function (t) {
        w.readyException(t);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (t) {
        (!0 === t ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0) !== t && 0 < --w.readyWait) ||
          q.resolveWith(m, [w]);
      },
    }),
    (w.ready.then = q.then),
    "complete" === m.readyState ||
    ("loading" !== m.readyState && !m.documentElement.doScroll)
      ? t.setTimeout(w.ready)
      : (m.addEventListener("DOMContentLoaded", z),
        t.addEventListener("load", z));
  var F = function (t, e, i, n, s, o, r) {
      var a = 0,
        l = t.length,
        c = null == i;
      if ("object" === _(i))
        for (a in ((s = !0), i)) F(t, e, a, i[a], !0, o, r);
      else if (
        void 0 !== n &&
        ((s = !0),
        f(n) || (r = !0),
        c &&
          (r
            ? (e.call(t, n), (e = null))
            : ((c = e),
              (e = function (t, e, i) {
                return c.call(w(t), i);
              }))),
        e)
      )
        for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
      return s ? t : c ? e.call(t) : l ? e(t[0], i) : o;
    },
    B = /^-ms-/,
    W = /-([a-z])/g;
  function U(t, e) {
    return e.toUpperCase();
  }
  function X(t) {
    return t.replace(B, "ms-").replace(W, U);
  }
  var Y = function (t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  };
  function V() {
    this.expando = w.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (t) {
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            Y(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0,
                  }))),
          e
        );
      },
      set: function (t, e, i) {
        var n,
          s = this.cache(t);
        if ("string" == typeof e) s[X(e)] = i;
        else for (n in e) s[X(n)] = e[n];
        return s;
      },
      get: function (t, e) {
        return void 0 === e
          ? this.cache(t)
          : t[this.expando] && t[this.expando][X(e)];
      },
      access: function (t, e, i) {
        return void 0 === e || (e && "string" == typeof e && void 0 === i)
          ? this.get(t, e)
          : (this.set(t, e, i), void 0 !== i ? i : e);
      },
      remove: function (t, e) {
        var i,
          n = t[this.expando];
        if (void 0 !== n) {
          if (void 0 !== e) {
            i = (e = Array.isArray(e)
              ? e.map(X)
              : (e = X(e)) in n
              ? [e]
              : e.match(j) || []).length;
            for (; i--; ) delete n[e[i]];
          }
          (void 0 === e || w.isEmptyObject(n)) &&
            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !w.isEmptyObject(e);
      },
    });
  var Q = new V(),
    K = new V(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(t, e, i) {
    var n, s;
    if (void 0 === i && 1 === t.nodeType)
      if (
        ((n = "data-" + e.replace(J, "-$&").toLowerCase()),
        "string" == typeof (i = t.getAttribute(n)))
      ) {
        try {
          i =
            "true" === (s = i) ||
            ("false" !== s &&
              ("null" === s
                ? null
                : s === +s + ""
                ? +s
                : G.test(s)
                ? JSON.parse(s)
                : s));
        } catch (t) {}
        K.set(t, e, i);
      } else i = void 0;
    return i;
  }
  w.extend({
    hasData: function (t) {
      return K.hasData(t) || Q.hasData(t);
    },
    data: function (t, e, i) {
      return K.access(t, e, i);
    },
    removeData: function (t, e) {
      K.remove(t, e);
    },
    _data: function (t, e, i) {
      return Q.access(t, e, i);
    },
    _removeData: function (t, e) {
      Q.remove(t, e);
    },
  }),
    w.fn.extend({
      data: function (t, e) {
        var i,
          n,
          s,
          o = this[0],
          r = o && o.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((s = K.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
          ) {
            for (i = r.length; i--; )
              r[i] &&
                0 === (n = r[i].name).indexOf("data-") &&
                ((n = X(n.slice(5))), Z(o, n, s[n]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return s;
        }
        return "object" == typeof t
          ? this.each(function () {
              K.set(this, t);
            })
          : F(
              this,
              function (e) {
                var i;
                if (o && void 0 === e)
                  return void 0 !== (i = K.get(o, t))
                    ? i
                    : void 0 !== (i = Z(o, t))
                    ? i
                    : void 0;
                this.each(function () {
                  K.set(this, t, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (t) {
        return this.each(function () {
          K.remove(this, t);
        });
      },
    }),
    w.extend({
      queue: function (t, e, i) {
        var n;
        if (t)
          return (
            (e = (e || "fx") + "queue"),
            (n = Q.get(t, e)),
            i &&
              (!n || Array.isArray(i)
                ? (n = Q.access(t, e, w.makeArray(i)))
                : n.push(i)),
            n || []
          );
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var i = w.queue(t, e),
          n = i.length,
          s = i.shift(),
          o = w._queueHooks(t, e);
        "inprogress" === s && ((s = i.shift()), n--),
          s &&
            ("fx" === e && i.unshift("inprogress"),
            delete o.stop,
            s.call(
              t,
              function () {
                w.dequeue(t, e);
              },
              o
            )),
          !n && o && o.empty.fire();
      },
      _queueHooks: function (t, e) {
        var i = e + "queueHooks";
        return (
          Q.get(t, i) ||
          Q.access(t, i, {
            empty: w.Callbacks("once memory").add(function () {
              Q.remove(t, [e + "queue", i]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (t, e) {
        var i = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), i--),
          arguments.length < i
            ? w.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var i = w.queue(this, t, e);
                w._queueHooks(this, t),
                  "fx" === t && "inprogress" !== i[0] && w.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          w.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var i,
          n = 1,
          s = w.Deferred(),
          o = this,
          r = this.length,
          a = function () {
            --n || s.resolveWith(o, [o]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          r--;

        )
          (i = Q.get(o[r], t + "queueHooks")) &&
            i.empty &&
            (n++, i.empty.add(a));
        return a(), s.promise(e);
      },
    });
  var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
    it = ["Top", "Right", "Bottom", "Left"],
    nt = m.documentElement,
    st = function (t) {
      return w.contains(t.ownerDocument, t);
    },
    ot = { composed: !0 };
  nt.getRootNode &&
    (st = function (t) {
      return (
        w.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
      );
    });
  var rt = function (t, e) {
    return (
      "none" === (t = e || t).style.display ||
      ("" === t.style.display && st(t) && "none" === w.css(t, "display"))
    );
  };
  function at(t, e, i, n) {
    var s,
      o,
      r = 20,
      a = n
        ? function () {
            return n.cur();
          }
        : function () {
            return w.css(t, e, "");
          },
      l = a(),
      c = (i && i[3]) || (w.cssNumber[e] ? "" : "px"),
      d =
        t.nodeType &&
        (w.cssNumber[e] || ("px" !== c && +l)) &&
        et.exec(w.css(t, e));
    if (d && d[3] !== c) {
      for (l /= 2, c = c || d[3], d = +l || 1; r--; )
        w.style(t, e, d + c),
          (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (r = 0),
          (d /= o);
      (d *= 2), w.style(t, e, d + c), (i = i || []);
    }
    return (
      i &&
        ((d = +d || +l || 0),
        (s = i[1] ? d + (i[1] + 1) * i[2] : +i[2]),
        n && ((n.unit = c), (n.start = d), (n.end = s))),
      s
    );
  }
  var lt = {};
  function ct(t, e) {
    for (var i, n, s, o, r, a, l, c = [], d = 0, u = t.length; d < u; d++)
      (n = t[d]).style &&
        ((i = n.style.display),
        e
          ? ("none" === i &&
              ((c[d] = Q.get(n, "display") || null),
              c[d] || (n.style.display = "")),
            "" === n.style.display &&
              rt(n) &&
              (c[d] =
                ((l = r = o = void 0),
                (r = (s = n).ownerDocument),
                (a = s.nodeName),
                (l = lt[a]) ||
                  ((o = r.body.appendChild(r.createElement(a))),
                  (l = w.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === l && (l = "block"),
                  (lt[a] = l)))))
          : "none" !== i && ((c[d] = "none"), Q.set(n, "display", i)));
    for (d = 0; d < u; d++) null != c[d] && (t[d].style.display = c[d]);
    return t;
  }
  w.fn.extend({
    show: function () {
      return ct(this, !0);
    },
    hide: function () {
      return ct(this);
    },
    toggle: function (t) {
      return "boolean" == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function () {
            rt(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var dt,
    ut,
    pt = /^(?:checkbox|radio)$/i,
    ht = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    ft = /^$|^module$|\/(?:java|ecma)script/i;
  (dt = m.createDocumentFragment().appendChild(m.createElement("div"))),
    (ut = m.createElement("input")).setAttribute("type", "radio"),
    ut.setAttribute("checked", "checked"),
    ut.setAttribute("name", "t"),
    dt.appendChild(ut),
    (h.checkClone = dt.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (dt.innerHTML = "<textarea>x</textarea>"),
    (h.noCloneChecked = !!dt.cloneNode(!0).lastChild.defaultValue),
    (dt.innerHTML = "<option></option>"),
    (h.option = !!dt.lastChild);
  var gt = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function mt(t, e) {
    var i;
    return (
      (i =
        void 0 !== t.getElementsByTagName
          ? t.getElementsByTagName(e || "*")
          : void 0 !== t.querySelectorAll
          ? t.querySelectorAll(e || "*")
          : []),
      void 0 === e || (e && E(t, e)) ? w.merge([t], i) : i
    );
  }
  function vt(t, e) {
    for (var i = 0, n = t.length; i < n; i++)
      Q.set(t[i], "globalEval", !e || Q.get(e[i], "globalEval"));
  }
  (gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead),
    (gt.th = gt.td),
    h.option ||
      (gt.optgroup = gt.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var yt = /<|&#?\w+;/;
  function _t(t, e, i, n, s) {
    for (
      var o,
        r,
        a,
        l,
        c,
        d,
        u = e.createDocumentFragment(),
        p = [],
        h = 0,
        f = t.length;
      h < f;
      h++
    )
      if ((o = t[h]) || 0 === o)
        if ("object" === _(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (yt.test(o)) {
          for (
            r = r || u.appendChild(e.createElement("div")),
              a = (ht.exec(o) || ["", ""])[1].toLowerCase(),
              l = gt[a] || gt._default,
              r.innerHTML = l[1] + w.htmlPrefilter(o) + l[2],
              d = l[0];
            d--;

          )
            r = r.lastChild;
          w.merge(p, r.childNodes), ((r = u.firstChild).textContent = "");
        } else p.push(e.createTextNode(o));
    for (u.textContent = "", h = 0; (o = p[h++]); )
      if (n && -1 < w.inArray(o, n)) s && s.push(o);
      else if (
        ((c = st(o)), (r = mt(u.appendChild(o), "script")), c && vt(r), i)
      )
        for (d = 0; (o = r[d++]); ) ft.test(o.type || "") && i.push(o);
    return u;
  }
  var bt = /^([^.]*)(?:\.(.+)|)/;
  function wt() {
    return !0;
  }
  function Tt() {
    return !1;
  }
  function xt(t, e) {
    return (
      (t ===
        (function () {
          try {
            return m.activeElement;
          } catch (t) {}
        })()) ==
      ("focus" === e)
    );
  }
  function kt(t, e, i, n, s, o) {
    var r, a;
    if ("object" == typeof e) {
      for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e))
        kt(t, a, i, n, e[a], o);
      return t;
    }
    if (
      (null == n && null == s
        ? ((s = i), (n = i = void 0))
        : null == s &&
          ("string" == typeof i
            ? ((s = n), (n = void 0))
            : ((s = n), (n = i), (i = void 0))),
      !1 === s)
    )
      s = Tt;
    else if (!s) return t;
    return (
      1 === o &&
        ((r = s),
        ((s = function (t) {
          return w().off(t), r.apply(this, arguments);
        }).guid = r.guid || (r.guid = w.guid++))),
      t.each(function () {
        w.event.add(this, e, s, n, i);
      })
    );
  }
  function St(t, e, i) {
    i
      ? (Q.set(t, e, !1),
        w.event.add(t, e, {
          namespace: !1,
          handler: function (t) {
            var n,
              o,
              r = Q.get(this, e);
            if (1 & t.isTrigger && this[e]) {
              if (r.length)
                (w.event.special[e] || {}).delegateType && t.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Q.set(this, e, r),
                (n = i(this, e)),
                this[e](),
                r !== (o = Q.get(this, e)) || n ? Q.set(this, e, !1) : (o = {}),
                r !== o)
              )
                return (
                  t.stopImmediatePropagation(), t.preventDefault(), o && o.value
                );
            } else
              r.length &&
                (Q.set(this, e, {
                  value: w.event.trigger(
                    w.extend(r[0], w.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                t.stopImmediatePropagation());
          },
        }))
      : void 0 === Q.get(t, e) && w.event.add(t, e, wt);
  }
  (w.event = {
    global: {},
    add: function (t, e, i, n, s) {
      var o,
        r,
        a,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        g,
        m = Q.get(t);
      if (Y(t))
        for (
          i.handler && ((i = (o = i).handler), (s = o.selector)),
            s && w.find.matchesSelector(nt, s),
            i.guid || (i.guid = w.guid++),
            (l = m.events) || (l = m.events = Object.create(null)),
            (r = m.handle) ||
              (r = m.handle =
                function (e) {
                  return void 0 !== w && w.event.triggered !== e.type
                    ? w.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            c = (e = (e || "").match(j) || [""]).length;
          c--;

        )
          (h = g = (a = bt.exec(e[c]) || [])[1]),
            (f = (a[2] || "").split(".").sort()),
            h &&
              ((u = w.event.special[h] || {}),
              (h = (s ? u.delegateType : u.bindType) || h),
              (u = w.event.special[h] || {}),
              (d = w.extend(
                {
                  type: h,
                  origType: g,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: s,
                  needsContext: s && w.expr.match.needsContext.test(s),
                  namespace: f.join("."),
                },
                o
              )),
              (p = l[h]) ||
                (((p = l[h] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(t, n, f, r)) ||
                  (t.addEventListener && t.addEventListener(h, r))),
              u.add &&
                (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)),
              s ? p.splice(p.delegateCount++, 0, d) : p.push(d),
              (w.event.global[h] = !0));
    },
    remove: function (t, e, i, n, s) {
      var o,
        r,
        a,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        g,
        m = Q.hasData(t) && Q.get(t);
      if (m && (l = m.events)) {
        for (c = (e = (e || "").match(j) || [""]).length; c--; )
          if (
            ((h = g = (a = bt.exec(e[c]) || [])[1]),
            (f = (a[2] || "").split(".").sort()),
            h)
          ) {
            for (
              u = w.event.special[h] || {},
                p = l[(h = (n ? u.delegateType : u.bindType) || h)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                r = o = p.length;
              o--;

            )
              (d = p[o]),
                (!s && g !== d.origType) ||
                  (i && i.guid !== d.guid) ||
                  (a && !a.test(d.namespace)) ||
                  (n && n !== d.selector && ("**" !== n || !d.selector)) ||
                  (p.splice(o, 1),
                  d.selector && p.delegateCount--,
                  u.remove && u.remove.call(t, d));
            r &&
              !p.length &&
              ((u.teardown && !1 !== u.teardown.call(t, f, m.handle)) ||
                w.removeEvent(t, h, m.handle),
              delete l[h]);
          } else for (h in l) w.event.remove(t, h + e[c], i, n, !0);
        w.isEmptyObject(l) && Q.remove(t, "handle events");
      }
    },
    dispatch: function (t) {
      var e,
        i,
        n,
        s,
        o,
        r,
        a = new Array(arguments.length),
        l = w.event.fix(t),
        c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
        d = w.event.special[l.type] || {};
      for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
      if (
        ((l.delegateTarget = this),
        !d.preDispatch || !1 !== d.preDispatch.call(this, l))
      ) {
        for (
          r = w.event.handlers.call(this, l, c), e = 0;
          (s = r[e++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = s.elem, i = 0;
            (o = s.handlers[i++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== o.namespace &&
              !l.rnamespace.test(o.namespace)) ||
              ((l.handleObj = o),
              (l.data = o.data),
              void 0 !==
                (n = (
                  (w.event.special[o.origType] || {}).handle || o.handler
                ).apply(s.elem, a)) &&
                !1 === (l.result = n) &&
                (l.preventDefault(), l.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (t, e) {
      var i,
        n,
        s,
        o,
        r,
        a = [],
        l = e.delegateCount,
        c = t.target;
      if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
            for (o = [], r = {}, i = 0; i < l; i++)
              void 0 === r[(s = (n = e[i]).selector + " ")] &&
                (r[s] = n.needsContext
                  ? -1 < w(s, this).index(c)
                  : w.find(s, this, null, [c]).length),
                r[s] && o.push(n);
            o.length && a.push({ elem: c, handlers: o });
          }
      return (
        (c = this), l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(w.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: f(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (t) {
      return t[w.expando] ? t : new w.Event(t);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (t) {
          var e = this || t;
          return (
            pt.test(e.type) && e.click && E(e, "input") && St(e, "click", wt),
            !1
          );
        },
        trigger: function (t) {
          var e = this || t;
          return (
            pt.test(e.type) && e.click && E(e, "input") && St(e, "click"), !0
          );
        },
        _default: function (t) {
          var e = t.target;
          return (
            (pt.test(e.type) &&
              e.click &&
              E(e, "input") &&
              Q.get(e, "click")) ||
            E(e, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
  }),
    (w.removeEvent = function (t, e, i) {
      t.removeEventListener && t.removeEventListener(e, i);
    }),
    (w.Event = function (t, e) {
      if (!(this instanceof w.Event)) return new w.Event(t, e);
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented =
            t.defaultPrevented ||
            (void 0 === t.defaultPrevented && !1 === t.returnValue)
              ? wt
              : Tt),
          (this.target =
            t.target && 3 === t.target.nodeType
              ? t.target.parentNode
              : t.target),
          (this.currentTarget = t.currentTarget),
          (this.relatedTarget = t.relatedTarget))
        : (this.type = t),
        e && w.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Tt,
      isPropagationStopped: Tt,
      isImmediatePropagationStopped: Tt,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = wt),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = wt),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = wt),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      w.event.addProp
    ),
    w.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
      w.event.special[t] = {
        setup: function () {
          return St(this, t, xt), !1;
        },
        trigger: function () {
          return St(this, t), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: e,
      };
    }),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        w.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var i,
              n = t.relatedTarget,
              s = t.handleObj;
            return (
              (n && (n === this || w.contains(this, n))) ||
                ((t.type = s.origType),
                (i = s.handler.apply(this, arguments)),
                (t.type = e)),
              i
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (t, e, i, n) {
        return kt(this, t, e, i, n);
      },
      one: function (t, e, i, n) {
        return kt(this, t, e, i, n, 1);
      },
      off: function (t, e, i) {
        var n, s;
        if (t && t.preventDefault && t.handleObj)
          return (
            (n = t.handleObj),
            w(t.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (s in t) this.off(s, e, t[s]);
          return this;
        }
        return (
          (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
          !1 === i && (i = Tt),
          this.each(function () {
            w.event.remove(this, t, i, e);
          })
        );
      },
    });
  var Ct = /<script|<style|<link/i,
    Et = /checked\s*(?:[^=]|=\s*.checked.)/i,
    At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Dt(t, e) {
    return (
      (E(t, "table") &&
        E(11 !== e.nodeType ? e : e.firstChild, "tr") &&
        w(t).children("tbody")[0]) ||
      t
    );
  }
  function Ot(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function Lt(t) {
    return (
      "true/" === (t.type || "").slice(0, 5)
        ? (t.type = t.type.slice(5))
        : t.removeAttribute("type"),
      t
    );
  }
  function $t(t, e) {
    var i, n, s, o, r, a;
    if (1 === e.nodeType) {
      if (Q.hasData(t) && (a = Q.get(t).events))
        for (s in (Q.remove(e, "handle events"), a))
          for (i = 0, n = a[s].length; i < n; i++) w.event.add(e, s, a[s][i]);
      K.hasData(t) && ((o = K.access(t)), (r = w.extend({}, o)), K.set(e, r));
    }
  }
  function Nt(t, e, i, n) {
    e = o(e);
    var s,
      r,
      a,
      l,
      c,
      d,
      u = 0,
      p = t.length,
      g = p - 1,
      m = e[0],
      v = f(m);
    if (v || (1 < p && "string" == typeof m && !h.checkClone && Et.test(m)))
      return t.each(function (s) {
        var o = t.eq(s);
        v && (e[0] = m.call(this, s, o.html())), Nt(o, e, i, n);
      });
    if (
      p &&
      ((r = (s = _t(e, t[0].ownerDocument, !1, t, n)).firstChild),
      1 === s.childNodes.length && (s = r),
      r || n)
    ) {
      for (l = (a = w.map(mt(s, "script"), Ot)).length; u < p; u++)
        (c = s),
          u !== g &&
            ((c = w.clone(c, !0, !0)), l && w.merge(a, mt(c, "script"))),
          i.call(t[u], c, u);
      if (l)
        for (d = a[a.length - 1].ownerDocument, w.map(a, Lt), u = 0; u < l; u++)
          (c = a[u]),
            ft.test(c.type || "") &&
              !Q.access(c, "globalEval") &&
              w.contains(d, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? w._evalUrl &&
                  !c.noModule &&
                  w._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    d
                  )
                : y(c.textContent.replace(At, ""), c, d));
    }
    return t;
  }
  function Pt(t, e, i) {
    for (var n, s = e ? w.filter(e, t) : t, o = 0; null != (n = s[o]); o++)
      i || 1 !== n.nodeType || w.cleanData(mt(n)),
        n.parentNode &&
          (i && st(n) && vt(mt(n, "script")), n.parentNode.removeChild(n));
    return t;
  }
  w.extend({
    htmlPrefilter: function (t) {
      return t;
    },
    clone: function (t, e, i) {
      var n,
        s,
        o,
        r,
        a,
        l,
        c,
        d = t.cloneNode(!0),
        u = st(t);
      if (
        !(
          h.noCloneChecked ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          w.isXMLDoc(t)
        )
      )
        for (r = mt(d), n = 0, s = (o = mt(t)).length; n < s; n++)
          (a = o[n]),
            "input" === (c = (l = r[n]).nodeName.toLowerCase()) &&
            pt.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = a.defaultValue);
      if (e)
        if (i)
          for (o = o || mt(t), r = r || mt(d), n = 0, s = o.length; n < s; n++)
            $t(o[n], r[n]);
        else $t(t, d);
      return (
        0 < (r = mt(d, "script")).length && vt(r, !u && mt(t, "script")), d
      );
    },
    cleanData: function (t) {
      for (var e, i, n, s = w.event.special, o = 0; void 0 !== (i = t[o]); o++)
        if (Y(i)) {
          if ((e = i[Q.expando])) {
            if (e.events)
              for (n in e.events)
                s[n] ? w.event.remove(i, n) : w.removeEvent(i, n, e.handle);
            i[Q.expando] = void 0;
          }
          i[K.expando] && (i[K.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (t) {
        return Pt(this, t, !0);
      },
      remove: function (t) {
        return Pt(this, t);
      },
      text: function (t) {
        return F(
          this,
          function (t) {
            return void 0 === t
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return Nt(this, arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Dt(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return Nt(this, arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = Dt(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return Nt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return Nt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (w.cleanData(mt(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return w.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return F(
          this,
          function (t) {
            var e = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !Ct.test(t) &&
              !gt[(ht.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = w.htmlPrefilter(t);
              try {
                for (; i < n; i++)
                  1 === (e = this[i] || {}).nodeType &&
                    (w.cleanData(mt(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = [];
        return Nt(
          this,
          arguments,
          function (e) {
            var i = this.parentNode;
            w.inArray(this, t) < 0 &&
              (w.cleanData(mt(this)), i && i.replaceChild(e, this));
          },
          t
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        w.fn[t] = function (t) {
          for (var i, n = [], s = w(t), o = s.length - 1, a = 0; a <= o; a++)
            (i = a === o ? this : this.clone(!0)),
              w(s[a])[e](i),
              r.apply(n, i.get());
          return this.pushStack(n);
        };
      }
    );
  var jt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
    Mt = function (e) {
      var i = e.ownerDocument.defaultView;
      return (i && i.opener) || (i = t), i.getComputedStyle(e);
    },
    Ht = function (t, e, i) {
      var n,
        s,
        o = {};
      for (s in e) (o[s] = t.style[s]), (t.style[s] = e[s]);
      for (s in ((n = i.call(t)), e)) t.style[s] = o[s];
      return n;
    },
    It = new RegExp(it.join("|"), "i");
  function Rt(t, e, i) {
    var n,
      s,
      o,
      r,
      a = t.style;
    return (
      (i = i || Mt(t)) &&
        ("" !== (r = i.getPropertyValue(e) || i[e]) ||
          st(t) ||
          (r = w.style(t, e)),
        !h.pixelBoxStyles() &&
          jt.test(r) &&
          It.test(e) &&
          ((n = a.width),
          (s = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = r),
          (r = i.width),
          (a.width = n),
          (a.minWidth = s),
          (a.maxWidth = o))),
      void 0 !== r ? r + "" : r
    );
  }
  function qt(t, e) {
    return {
      get: function () {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (d) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (d.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          nt.appendChild(c).appendChild(d);
        var e = t.getComputedStyle(d);
        (n = "1%" !== e.top),
          (l = 12 === i(e.marginLeft)),
          (d.style.right = "60%"),
          (r = 36 === i(e.right)),
          (s = 36 === i(e.width)),
          (d.style.position = "absolute"),
          (o = 12 === i(d.offsetWidth / 3)),
          nt.removeChild(c),
          (d = null);
      }
    }
    function i(t) {
      return Math.round(parseFloat(t));
    }
    var n,
      s,
      o,
      r,
      a,
      l,
      c = m.createElement("div"),
      d = m.createElement("div");
    d.style &&
      ((d.style.backgroundClip = "content-box"),
      (d.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === d.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return e(), s;
        },
        pixelBoxStyles: function () {
          return e(), r;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), l;
        },
        scrollboxSize: function () {
          return e(), o;
        },
        reliableTrDimensions: function () {
          var e, i, n, s;
          return (
            null == a &&
              ((e = m.createElement("table")),
              (i = m.createElement("tr")),
              (n = m.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (i.style.cssText = "border:1px solid"),
              (i.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              nt.appendChild(e).appendChild(i).appendChild(n),
              (s = t.getComputedStyle(i)),
              (a =
                parseInt(s.height, 10) +
                  parseInt(s.borderTopWidth, 10) +
                  parseInt(s.borderBottomWidth, 10) ===
                i.offsetHeight),
              nt.removeChild(e)),
            a
          );
        },
      }));
  })();
  var zt = ["Webkit", "Moz", "ms"],
    Ft = m.createElement("div").style,
    Bt = {};
  function Wt(t) {
    return (
      w.cssProps[t] ||
      Bt[t] ||
      (t in Ft
        ? t
        : (Bt[t] =
            (function (t) {
              for (
                var e = t[0].toUpperCase() + t.slice(1), i = zt.length;
                i--;

              )
                if ((t = zt[i] + e) in Ft) return t;
            })(t) || t))
    );
  }
  var Ut = /^(none|table(?!-c[ea]).+)/,
    Xt = /^--/,
    Yt = { position: "absolute", visibility: "hidden", display: "block" },
    Vt = { letterSpacing: "0", fontWeight: "400" };
  function Qt(t, e, i) {
    var n = et.exec(e);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
  }
  function Kt(t, e, i, n, s, o) {
    var r = "width" === e ? 1 : 0,
      a = 0,
      l = 0;
    if (i === (n ? "border" : "content")) return 0;
    for (; r < 4; r += 2)
      "margin" === i && (l += w.css(t, i + it[r], !0, s)),
        n
          ? ("content" === i && (l -= w.css(t, "padding" + it[r], !0, s)),
            "margin" !== i &&
              (l -= w.css(t, "border" + it[r] + "Width", !0, s)))
          : ((l += w.css(t, "padding" + it[r], !0, s)),
            "padding" !== i
              ? (l += w.css(t, "border" + it[r] + "Width", !0, s))
              : (a += w.css(t, "border" + it[r] + "Width", !0, s)));
    return (
      !n &&
        0 <= o &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - 0.5
            )
          ) || 0),
      l
    );
  }
  function Gt(t, e, i) {
    var n = Mt(t),
      s =
        (!h.boxSizingReliable() || i) &&
        "border-box" === w.css(t, "boxSizing", !1, n),
      o = s,
      r = Rt(t, e, n),
      a = "offset" + e[0].toUpperCase() + e.slice(1);
    if (jt.test(r)) {
      if (!i) return r;
      r = "auto";
    }
    return (
      ((!h.boxSizingReliable() && s) ||
        (!h.reliableTrDimensions() && E(t, "tr")) ||
        "auto" === r ||
        (!parseFloat(r) && "inline" === w.css(t, "display", !1, n))) &&
        t.getClientRects().length &&
        ((s = "border-box" === w.css(t, "boxSizing", !1, n)),
        (o = a in t) && (r = t[a])),
      (r = parseFloat(r) || 0) +
        Kt(t, e, i || (s ? "border" : "content"), o, n, r) +
        "px"
    );
  }
  function Jt(t, e, i, n, s) {
    return new Jt.prototype.init(t, e, i, n, s);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var i = Rt(t, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var s,
          o,
          r,
          a = X(e),
          l = Xt.test(e),
          c = t.style;
        if (
          (l || (e = Wt(a)), (r = w.cssHooks[e] || w.cssHooks[a]), void 0 === i)
        )
          return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : c[e];
        "string" == (o = typeof i) &&
          (s = et.exec(i)) &&
          s[1] &&
          ((i = at(t, e, s)), (o = "number")),
          null != i &&
            i == i &&
            ("number" !== o ||
              l ||
              (i += (s && s[3]) || (w.cssNumber[a] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== i ||
              0 !== e.indexOf("background") ||
              (c[e] = "inherit"),
            (r && "set" in r && void 0 === (i = r.set(t, i, n))) ||
              (l ? c.setProperty(e, i) : (c[e] = i)));
      }
    },
    css: function (t, e, i, n) {
      var s,
        o,
        r,
        a = X(e);
      return (
        Xt.test(e) || (e = Wt(a)),
        (r = w.cssHooks[e] || w.cssHooks[a]) &&
          "get" in r &&
          (s = r.get(t, !0, i)),
        void 0 === s && (s = Rt(t, e, n)),
        "normal" === s && e in Vt && (s = Vt[e]),
        "" === i || i
          ? ((o = parseFloat(s)), !0 === i || isFinite(o) ? o || 0 : s)
          : s
      );
    },
  }),
    w.each(["height", "width"], function (t, e) {
      w.cssHooks[e] = {
        get: function (t, i, n) {
          if (i)
            return !Ut.test(w.css(t, "display")) ||
              (t.getClientRects().length && t.getBoundingClientRect().width)
              ? Gt(t, e, n)
              : Ht(t, Yt, function () {
                  return Gt(t, e, n);
                });
        },
        set: function (t, i, n) {
          var s,
            o = Mt(t),
            r = !h.scrollboxSize() && "absolute" === o.position,
            a = (r || n) && "border-box" === w.css(t, "boxSizing", !1, o),
            l = n ? Kt(t, e, n, a, o) : 0;
          return (
            a &&
              r &&
              (l -= Math.ceil(
                t["offset" + e[0].toUpperCase() + e.slice(1)] -
                  parseFloat(o[e]) -
                  Kt(t, e, "border", !1, o) -
                  0.5
              )),
            l &&
              (s = et.exec(i)) &&
              "px" !== (s[3] || "px") &&
              ((t.style[e] = i), (i = w.css(t, e))),
            Qt(0, i, l)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = qt(h.reliableMarginLeft, function (t, e) {
      if (e)
        return (
          (parseFloat(Rt(t, "marginLeft")) ||
            t.getBoundingClientRect().left -
              Ht(t, { marginLeft: 0 }, function () {
                return t.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      (w.cssHooks[t + e] = {
        expand: function (i) {
          for (
            var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i];
            n < 4;
            n++
          )
            s[t + it[n] + e] = o[n] || o[n - 2] || o[0];
          return s;
        },
      }),
        "margin" !== t && (w.cssHooks[t + e].set = Qt);
    }),
    w.fn.extend({
      css: function (t, e) {
        return F(
          this,
          function (t, e, i) {
            var n,
              s,
              o = {},
              r = 0;
            if (Array.isArray(e)) {
              for (n = Mt(t), s = e.length; r < s; r++)
                o[e[r]] = w.css(t, e[r], !1, n);
              return o;
            }
            return void 0 !== i ? w.style(t, e, i) : w.css(t, e);
          },
          t,
          e,
          1 < arguments.length
        );
      },
    }),
    (((w.Tween = Jt).prototype = {
      constructor: Jt,
      init: function (t, e, i, n, s, o) {
        (this.elem = t),
          (this.prop = i),
          (this.easing = s || w.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = o || (w.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var t = Jt.propHooks[this.prop];
        return t && t.get ? t.get(this) : Jt.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          i = Jt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e =
                w.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : Jt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Jt.prototype),
    ((Jt.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (e = w.css(t.elem, t.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function (t) {
          w.fx.step[t.prop]
            ? w.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (!w.cssHooks[t.prop] && null == t.elem.style[Wt(t.prop)])
            ? (t.elem[t.prop] = t.now)
            : w.style(t.elem, t.prop, t.now + t.unit);
        },
      },
    }).scrollTop = Jt.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    (w.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = Jt.prototype.init),
    (w.fx.step = {});
  var Zt,
    te,
    ee,
    ie,
    ne = /^(?:toggle|show|hide)$/,
    se = /queueHooks$/;
  function oe() {
    te &&
      (!1 === m.hidden && t.requestAnimationFrame
        ? t.requestAnimationFrame(oe)
        : t.setTimeout(oe, w.fx.interval),
      w.fx.tick());
  }
  function re() {
    return (
      t.setTimeout(function () {
        Zt = void 0;
      }),
      (Zt = Date.now())
    );
  }
  function ae(t, e) {
    var i,
      n = 0,
      s = { height: t };
    for (e = e ? 1 : 0; n < 4; n += 2 - e)
      s["margin" + (i = it[n])] = s["padding" + i] = t;
    return e && (s.opacity = s.width = t), s;
  }
  function le(t, e, i) {
    for (
      var n,
        s = (ce.tweeners[e] || []).concat(ce.tweeners["*"]),
        o = 0,
        r = s.length;
      o < r;
      o++
    )
      if ((n = s[o].call(i, e, t))) return n;
  }
  function ce(t, e, i) {
    var n,
      s,
      o = 0,
      r = ce.prefilters.length,
      a = w.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var e = Zt || re(),
            i = Math.max(0, c.startTime + c.duration - e),
            n = 1 - (i / c.duration || 0),
            o = 0,
            r = c.tweens.length;
          o < r;
          o++
        )
          c.tweens[o].run(n);
        return (
          a.notifyWith(t, [c, n, i]),
          n < 1 && r
            ? i
            : (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
        );
      },
      c = a.promise({
        elem: t,
        props: w.extend({}, e),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, i),
        originalProperties: e,
        originalOptions: i,
        startTime: Zt || re(),
        duration: i.duration,
        tweens: [],
        createTween: function (e, i) {
          var n = w.Tween(
            t,
            c.opts,
            e,
            i,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(n), n;
        },
        stop: function (e) {
          var i = 0,
            n = e ? c.tweens.length : 0;
          if (s) return this;
          for (s = !0; i < n; i++) c.tweens[i].run(1);
          return (
            e
              ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
              : a.rejectWith(t, [c, e]),
            this
          );
        },
      }),
      d = c.props;
    for (
      (function (t, e) {
        var i, n, s, o, r;
        for (i in t)
          if (
            ((s = e[(n = X(i))]),
            (o = t[i]),
            Array.isArray(o) && ((s = o[1]), (o = t[i] = o[0])),
            i !== n && ((t[n] = o), delete t[i]),
            (r = w.cssHooks[n]) && ("expand" in r))
          )
            for (i in ((o = r.expand(o)), delete t[n], o))
              (i in t) || ((t[i] = o[i]), (e[i] = s));
          else e[n] = s;
      })(d, c.opts.specialEasing);
      o < r;
      o++
    )
      if ((n = ce.prefilters[o].call(c, t, d, c.opts)))
        return (
          f(n.stop) &&
            (w._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      w.map(d, le, c),
      f(c.opts.start) && c.opts.start.call(t, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      w.fx.timer(w.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (w.Animation = w.extend(ce, {
    tweeners: {
      "*": [
        function (t, e) {
          var i = this.createTween(t, e);
          return at(i.elem, t, et.exec(e), i), i;
        },
      ],
    },
    tweener: function (t, e) {
      f(t) ? ((e = t), (t = ["*"])) : (t = t.match(j));
      for (var i, n = 0, s = t.length; n < s; n++)
        (i = t[n]),
          (ce.tweeners[i] = ce.tweeners[i] || []),
          ce.tweeners[i].unshift(e);
    },
    prefilters: [
      function (t, e, i) {
        var n,
          s,
          o,
          r,
          a,
          l,
          c,
          d,
          u = "width" in e || "height" in e,
          p = this,
          h = {},
          f = t.style,
          g = t.nodeType && rt(t),
          m = Q.get(t, "fxshow");
        for (n in (i.queue ||
          (null == (r = w._queueHooks(t, "fx")).unqueued &&
            ((r.unqueued = 0),
            (a = r.empty.fire),
            (r.empty.fire = function () {
              r.unqueued || a();
            })),
          r.unqueued++,
          p.always(function () {
            p.always(function () {
              r.unqueued--, w.queue(t, "fx").length || r.empty.fire();
            });
          })),
        e))
          if (((s = e[n]), ne.test(s))) {
            if (
              (delete e[n],
              (o = o || "toggle" === s),
              s === (g ? "hide" : "show"))
            ) {
              if ("show" !== s || !m || void 0 === m[n]) continue;
              g = !0;
            }
            h[n] = (m && m[n]) || w.style(t, n);
          }
        if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(h))
          for (n in (u &&
            1 === t.nodeType &&
            ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
            null == (c = m && m.display) && (c = Q.get(t, "display")),
            "none" === (d = w.css(t, "display")) &&
              (c
                ? (d = c)
                : (ct([t], !0),
                  (c = t.style.display || c),
                  (d = w.css(t, "display")),
                  ct([t]))),
            ("inline" === d || ("inline-block" === d && null != c)) &&
              "none" === w.css(t, "float") &&
              (l ||
                (p.done(function () {
                  f.display = c;
                }),
                null == c && ((d = f.display), (c = "none" === d ? "" : d))),
              (f.display = "inline-block"))),
          i.overflow &&
            ((f.overflow = "hidden"),
            p.always(function () {
              (f.overflow = i.overflow[0]),
                (f.overflowX = i.overflow[1]),
                (f.overflowY = i.overflow[2]);
            })),
          (l = !1),
          h))
            l ||
              (m
                ? "hidden" in m && (g = m.hidden)
                : (m = Q.access(t, "fxshow", { display: c })),
              o && (m.hidden = !g),
              g && ct([t], !0),
              p.done(function () {
                for (n in (g || ct([t]), Q.remove(t, "fxshow"), h))
                  w.style(t, n, h[n]);
              })),
              (l = le(g ? m[n] : 0, n, p)),
              n in m ||
                ((m[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (t, e) {
      e ? ce.prefilters.unshift(t) : ce.prefilters.push(t);
    },
  })),
    (w.speed = function (t, e, i) {
      var n =
        t && "object" == typeof t
          ? w.extend({}, t)
          : {
              complete: i || (!i && e) || (f(t) && t),
              duration: t,
              easing: (i && e) || (e && !f(e) && e),
            };
      return (
        w.fx.off
          ? (n.duration = 0)
          : "number" != typeof n.duration &&
            (n.duration in w.fx.speeds
              ? (n.duration = w.fx.speeds[n.duration])
              : (n.duration = w.fx.speeds._default)),
        (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          f(n.old) && n.old.call(this), n.queue && w.dequeue(this, n.queue);
        }),
        n
      );
    }),
    w.fn.extend({
      fadeTo: function (t, e, i, n) {
        return this.filter(rt)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, i, n);
      },
      animate: function (t, e, i, n) {
        var s = w.isEmptyObject(t),
          o = w.speed(e, i, n),
          r = function () {
            var e = ce(this, w.extend({}, t), o);
            (s || Q.get(this, "finish")) && e.stop(!0);
          };
        return (
          (r.finish = r),
          s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        );
      },
      stop: function (t, e, i) {
        var n = function (t) {
          var e = t.stop;
          delete t.stop, e(i);
        };
        return (
          "string" != typeof t && ((i = e), (e = t), (t = void 0)),
          e && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              s = null != t && t + "queueHooks",
              o = w.timers,
              r = Q.get(this);
            if (s) r[s] && r[s].stop && n(r[s]);
            else for (s in r) r[s] && r[s].stop && se.test(s) && n(r[s]);
            for (s = o.length; s--; )
              o[s].elem !== this ||
                (null != t && o[s].queue !== t) ||
                (o[s].anim.stop(i), (e = !1), o.splice(s, 1));
            (!e && i) || w.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          !1 !== t && (t = t || "fx"),
          this.each(function () {
            var e,
              i = Q.get(this),
              n = i[t + "queue"],
              s = i[t + "queueHooks"],
              o = w.timers,
              r = n ? n.length : 0;
            for (
              i.finish = !0,
                w.queue(this, t, []),
                s && s.stop && s.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === t &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < r; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (t, e) {
      var i = w.fn[e];
      w.fn[e] = function (t, n, s) {
        return null == t || "boolean" == typeof t
          ? i.apply(this, arguments)
          : this.animate(ae(e, !0), t, n, s);
      };
    }),
    w.each(
      {
        slideDown: ae("show"),
        slideUp: ae("hide"),
        slideToggle: ae("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        w.fn[t] = function (t, i, n) {
          return this.animate(e, t, i, n);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var t,
        e = 0,
        i = w.timers;
      for (Zt = Date.now(); e < i.length; e++)
        (t = i[e])() || i[e] !== t || i.splice(e--, 1);
      i.length || w.fx.stop(), (Zt = void 0);
    }),
    (w.fx.timer = function (t) {
      w.timers.push(t), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      te || ((te = !0), oe());
    }),
    (w.fx.stop = function () {
      te = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (e, i) {
      return (
        (e = (w.fx && w.fx.speeds[e]) || e),
        (i = i || "fx"),
        this.queue(i, function (i, n) {
          var s = t.setTimeout(i, e);
          n.stop = function () {
            t.clearTimeout(s);
          };
        })
      );
    }),
    (ee = m.createElement("input")),
    (ie = m.createElement("select").appendChild(m.createElement("option"))),
    (ee.type = "checkbox"),
    (h.checkOn = "" !== ee.value),
    (h.optSelected = ie.selected),
    ((ee = m.createElement("input")).value = "t"),
    (ee.type = "radio"),
    (h.radioValue = "t" === ee.value);
  var de,
    ue = w.expr.attrHandle;
  w.fn.extend({
    attr: function (t, e) {
      return F(this, w.attr, t, e, 1 < arguments.length);
    },
    removeAttr: function (t) {
      return this.each(function () {
        w.removeAttr(this, t);
      });
    },
  }),
    w.extend({
      attr: function (t, e, i) {
        var n,
          s,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === t.getAttribute
            ? w.prop(t, e, i)
            : ((1 === o && w.isXMLDoc(t)) ||
                (s =
                  w.attrHooks[e.toLowerCase()] ||
                  (w.expr.match.bool.test(e) ? de : void 0)),
              void 0 !== i
                ? null === i
                  ? void w.removeAttr(t, e)
                  : s && "set" in s && void 0 !== (n = s.set(t, i, e))
                  ? n
                  : (t.setAttribute(e, i + ""), i)
                : s && "get" in s && null !== (n = s.get(t, e))
                ? n
                : null == (n = w.find.attr(t, e))
                ? void 0
                : n);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!h.radioValue && "radio" === e && E(t, "input")) {
              var i = t.value;
              return t.setAttribute("type", e), i && (t.value = i), e;
            }
          },
        },
      },
      removeAttr: function (t, e) {
        var i,
          n = 0,
          s = e && e.match(j);
        if (s && 1 === t.nodeType) for (; (i = s[n++]); ) t.removeAttribute(i);
      },
    }),
    (de = {
      set: function (t, e, i) {
        return !1 === e ? w.removeAttr(t, i) : t.setAttribute(i, i), i;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var i = ue[e] || w.find.attr;
      ue[e] = function (t, e, n) {
        var s,
          o,
          r = e.toLowerCase();
        return (
          n ||
            ((o = ue[r]),
            (ue[r] = s),
            (s = null != i(t, e, n) ? r : null),
            (ue[r] = o)),
          s
        );
      };
    });
  var pe = /^(?:input|select|textarea|button)$/i,
    he = /^(?:a|area)$/i;
  function fe(t) {
    return (t.match(j) || []).join(" ");
  }
  function ge(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }
  function me(t) {
    return Array.isArray(t) ? t : ("string" == typeof t && t.match(j)) || [];
  }
  w.fn.extend({
    prop: function (t, e) {
      return F(this, w.prop, t, e, 1 < arguments.length);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[w.propFix[t] || t];
      });
    },
  }),
    w.extend({
      prop: function (t, e, i) {
        var n,
          s,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(t)) ||
              ((e = w.propFix[e] || e), (s = w.propHooks[e])),
            void 0 !== i
              ? s && "set" in s && void 0 !== (n = s.set(t, i, e))
                ? n
                : (t[e] = i)
              : s && "get" in s && null !== (n = s.get(t, e))
              ? n
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = w.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : pe.test(t.nodeName) || (he.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (t) {
        var e,
          i,
          n,
          s,
          o,
          r,
          a,
          l = 0;
        if (f(t))
          return this.each(function (e) {
            w(this).addClass(t.call(this, e, ge(this)));
          });
        if ((e = me(t)).length)
          for (; (i = this[l++]); )
            if (((s = ge(i)), (n = 1 === i.nodeType && " " + fe(s) + " "))) {
              for (r = 0; (o = e[r++]); )
                n.indexOf(" " + o + " ") < 0 && (n += o + " ");
              s !== (a = fe(n)) && i.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          i,
          n,
          s,
          o,
          r,
          a,
          l = 0;
        if (f(t))
          return this.each(function (e) {
            w(this).removeClass(t.call(this, e, ge(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = me(t)).length)
          for (; (i = this[l++]); )
            if (((s = ge(i)), (n = 1 === i.nodeType && " " + fe(s) + " "))) {
              for (r = 0; (o = e[r++]); )
                for (; -1 < n.indexOf(" " + o + " "); )
                  n = n.replace(" " + o + " ", " ");
              s !== (a = fe(n)) && i.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var i = typeof t,
          n = "string" === i || Array.isArray(t);
        return "boolean" == typeof e && n
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : f(t)
          ? this.each(function (i) {
              w(this).toggleClass(t.call(this, i, ge(this), e), e);
            })
          : this.each(function () {
              var e, s, o, r;
              if (n)
                for (s = 0, o = w(this), r = me(t); (e = r[s++]); )
                  o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
              else
                (void 0 !== t && "boolean" !== i) ||
                  ((e = ge(this)) && Q.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === t ? "" : Q.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (t) {
        var e,
          i,
          n = 0;
        for (e = " " + t + " "; (i = this[n++]); )
          if (1 === i.nodeType && -1 < (" " + fe(ge(i)) + " ").indexOf(e))
            return !0;
        return !1;
      },
    });
  var ve = /\r/g;
  w.fn.extend({
    val: function (t) {
      var e,
        i,
        n,
        s = this[0];
      return arguments.length
        ? ((n = f(t)),
          this.each(function (i) {
            var s;
            1 === this.nodeType &&
              (null == (s = n ? t.call(this, i, w(this).val()) : t)
                ? (s = "")
                : "number" == typeof s
                ? (s += "")
                : Array.isArray(s) &&
                  (s = w.map(s, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((e =
                w.valHooks[this.type] ||
                w.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in e &&
                void 0 !== e.set(this, s, "value")) ||
                (this.value = s));
          }))
        : s
        ? (e = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()]) &&
          "get" in e &&
          void 0 !== (i = e.get(s, "value"))
          ? i
          : "string" == typeof (i = s.value)
          ? i.replace(ve, "")
          : null == i
          ? ""
          : i
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = w.find.attr(t, "value");
            return null != e ? e : fe(w.text(t));
          },
        },
        select: {
          get: function (t) {
            var e,
              i,
              n,
              s = t.options,
              o = t.selectedIndex,
              r = "select-one" === t.type,
              a = r ? null : [],
              l = r ? o + 1 : s.length;
            for (n = o < 0 ? l : r ? o : 0; n < l; n++)
              if (
                ((i = s[n]).selected || n === o) &&
                !i.disabled &&
                (!i.parentNode.disabled || !E(i.parentNode, "optgroup"))
              ) {
                if (((e = w(i).val()), r)) return e;
                a.push(e);
              }
            return a;
          },
          set: function (t, e) {
            for (
              var i, n, s = t.options, o = w.makeArray(e), r = s.length;
              r--;

            )
              ((n = s[r]).selected =
                -1 < w.inArray(w.valHooks.option.get(n), o)) && (i = !0);
            return i || (t.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (t, e) {
          if (Array.isArray(e))
            return (t.checked = -1 < w.inArray(w(t).val(), e));
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    }),
    (h.focusin = "onfocusin" in t);
  var ye = /^(?:focusinfocus|focusoutblur)$/,
    _e = function (t) {
      t.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (e, i, n, s) {
      var o,
        r,
        a,
        l,
        c,
        u,
        p,
        h,
        v = [n || m],
        y = d.call(e, "type") ? e.type : e,
        _ = d.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((r = h = a = n = n || m),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !ye.test(y + w.event.triggered) &&
          (-1 < y.indexOf(".") && ((y = (_ = y.split(".")).shift()), _.sort()),
          (c = y.indexOf(":") < 0 && "on" + y),
          ((e = e[w.expando]
            ? e
            : new w.Event(y, "object" == typeof e && e)).isTrigger = s ? 2 : 3),
          (e.namespace = _.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (i = null == i ? [e] : w.makeArray(i, [e])),
          (p = w.event.special[y] || {}),
          s || !p.trigger || !1 !== p.trigger.apply(n, i)))
      ) {
        if (!s && !p.noBubble && !g(n)) {
          for (
            l = p.delegateType || y, ye.test(l + y) || (r = r.parentNode);
            r;
            r = r.parentNode
          )
            v.push(r), (a = r);
          a === (n.ownerDocument || m) &&
            v.push(a.defaultView || a.parentWindow || t);
        }
        for (o = 0; (r = v[o++]) && !e.isPropagationStopped(); )
          (h = r),
            (e.type = 1 < o ? l : p.bindType || y),
            (u =
              (Q.get(r, "events") || Object.create(null))[e.type] &&
              Q.get(r, "handle")) && u.apply(r, i),
            (u = c && r[c]) &&
              u.apply &&
              Y(r) &&
              ((e.result = u.apply(r, i)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = y),
          s ||
            e.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(v.pop(), i)) ||
            !Y(n) ||
            (c &&
              f(n[y]) &&
              !g(n) &&
              ((a = n[c]) && (n[c] = null),
              (w.event.triggered = y),
              e.isPropagationStopped() && h.addEventListener(y, _e),
              n[y](),
              e.isPropagationStopped() && h.removeEventListener(y, _e),
              (w.event.triggered = void 0),
              a && (n[c] = a))),
          e.result
        );
      }
    },
    simulate: function (t, e, i) {
      var n = w.extend(new w.Event(), i, { type: t, isSimulated: !0 });
      w.event.trigger(n, null, e);
    },
  }),
    w.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          w.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var i = this[0];
        if (i) return w.event.trigger(t, e, i, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var i = function (t) {
          w.event.simulate(e, t.target, w.event.fix(t));
        };
        w.event.special[e] = {
          setup: function () {
            var n = this.ownerDocument || this.document || this,
              s = Q.access(n, e);
            s || n.addEventListener(t, i, !0), Q.access(n, e, (s || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this.document || this,
              s = Q.access(n, e) - 1;
            s
              ? Q.access(n, e, s)
              : (n.removeEventListener(t, i, !0), Q.remove(n, e));
          },
        };
      });
  var be = t.location,
    we = { guid: Date.now() },
    Te = /\?/;
  w.parseXML = function (e) {
    var i, n;
    if (!e || "string" != typeof e) return null;
    try {
      i = new t.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = i && i.getElementsByTagName("parsererror")[0]),
      (i && !n) ||
        w.error(
          "Invalid XML: " +
            (n
              ? w
                  .map(n.childNodes, function (t) {
                    return t.textContent;
                  })
                  .join("\n")
              : e)
        ),
      i
    );
  };
  var xe = /\[\]$/,
    ke = /\r?\n/g,
    Se = /^(?:submit|button|image|reset|file)$/i,
    Ce = /^(?:input|select|textarea|keygen)/i;
  function Ee(t, e, i, n) {
    var s;
    if (Array.isArray(e))
      w.each(e, function (e, s) {
        i || xe.test(t)
          ? n(t, s)
          : Ee(
              t + "[" + ("object" == typeof s && null != s ? e : "") + "]",
              s,
              i,
              n
            );
      });
    else if (i || "object" !== _(e)) n(t, e);
    else for (s in e) Ee(t + "[" + s + "]", e[s], i, n);
  }
  (w.param = function (t, e) {
    var i,
      n = [],
      s = function (t, e) {
        var i = f(e) ? e() : e;
        n[n.length] =
          encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i);
      };
    if (null == t) return "";
    if (Array.isArray(t) || (t.jquery && !w.isPlainObject(t)))
      w.each(t, function () {
        s(this.name, this.value);
      });
    else for (i in t) Ee(i, t[i], e, s);
    return n.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = w.prop(this, "elements");
          return t ? w.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              Ce.test(this.nodeName) &&
              !Se.test(t) &&
              (this.checked || !pt.test(t))
            );
          })
          .map(function (t, e) {
            var i = w(this).val();
            return null == i
              ? null
              : Array.isArray(i)
              ? w.map(i, function (t) {
                  return { name: e.name, value: t.replace(ke, "\r\n") };
                })
              : { name: e.name, value: i.replace(ke, "\r\n") };
          })
          .get();
      },
    });
  var Ae = /%20/g,
    De = /#.*$/,
    Oe = /([?&])_=[^&]*/,
    Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    $e = /^(?:GET|HEAD)$/,
    Ne = /^\/\//,
    Pe = {},
    je = {},
    Me = "*/".concat("*"),
    He = m.createElement("a");
  function Ie(t) {
    return function (e, i) {
      "string" != typeof e && ((i = e), (e = "*"));
      var n,
        s = 0,
        o = e.toLowerCase().match(j) || [];
      if (f(i))
        for (; (n = o[s++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
            : (t[n] = t[n] || []).push(i);
    };
  }
  function Re(t, e, i, n) {
    var s = {},
      o = t === je;
    function r(a) {
      var l;
      return (
        (s[a] = !0),
        w.each(t[a] || [], function (t, a) {
          var c = a(e, i, n);
          return "string" != typeof c || o || s[c]
            ? o
              ? !(l = c)
              : void 0
            : (e.dataTypes.unshift(c), r(c), !1);
        }),
        l
      );
    }
    return r(e.dataTypes[0]) || (!s["*"] && r("*"));
  }
  function qe(t, e) {
    var i,
      n,
      s = w.ajaxSettings.flatOptions || {};
    for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
    return n && w.extend(!0, t, n), t;
  }
  (He.href = be.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: be.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            be.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Me,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? qe(qe(t, w.ajaxSettings), e) : qe(w.ajaxSettings, t);
      },
      ajaxPrefilter: Ie(Pe),
      ajaxTransport: Ie(je),
      ajax: function (e, i) {
        "object" == typeof e && ((i = e), (e = void 0)), (i = i || {});
        var n,
          s,
          o,
          r,
          a,
          l,
          c,
          d,
          u,
          p,
          h = w.ajaxSetup({}, i),
          f = h.context || h,
          g = h.context && (f.nodeType || f.jquery) ? w(f) : w.event,
          v = w.Deferred(),
          y = w.Callbacks("once memory"),
          _ = h.statusCode || {},
          b = {},
          T = {},
          x = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (c) {
                if (!r)
                  for (r = {}; (e = Le.exec(o)); )
                    r[e[1].toLowerCase() + " "] = (
                      r[e[1].toLowerCase() + " "] || []
                    ).concat(e[2]);
                e = r[t.toLowerCase() + " "];
              }
              return null == e ? null : e.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? o : null;
            },
            setRequestHeader: function (t, e) {
              return (
                null == c &&
                  ((t = T[t.toLowerCase()] = T[t.toLowerCase()] || t),
                  (b[t] = e)),
                this
              );
            },
            overrideMimeType: function (t) {
              return null == c && (h.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (c) k.always(t[k.status]);
                else for (e in t) _[e] = [_[e], t[e]];
              return this;
            },
            abort: function (t) {
              var e = t || x;
              return n && n.abort(e), S(0, e), this;
            },
          };
        if (
          (v.promise(k),
          (h.url = ((e || h.url || be.href) + "").replace(
            Ne,
            be.protocol + "//"
          )),
          (h.type = i.method || i.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(j) || [""]),
          null == h.crossDomain)
        ) {
          l = m.createElement("a");
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                He.protocol + "//" + He.host != l.protocol + "//" + l.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = w.param(h.data, h.traditional)),
          Re(Pe, h, i, k),
          c)
        )
          return k;
        for (u in ((d = w.event && h.global) &&
          0 == w.active++ &&
          w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !$e.test(h.type)),
        (s = h.url.replace(De, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(Ae, "+"))
          : ((p = h.url.slice(s.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((s += (Te.test(s) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((s = s.replace(Oe, "$1")),
              (p = (Te.test(s) ? "&" : "?") + "_=" + we.guid++ + p)),
            (h.url = s + p)),
        h.ifModified &&
          (w.lastModified[s] &&
            k.setRequestHeader("If-Modified-Since", w.lastModified[s]),
          w.etag[s] && k.setRequestHeader("If-None-Match", w.etag[s])),
        ((h.data && h.hasContent && !1 !== h.contentType) || i.contentType) &&
          k.setRequestHeader("Content-Type", h.contentType),
        k.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + Me + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          k.setRequestHeader(u, h.headers[u]);
        if (h.beforeSend && (!1 === h.beforeSend.call(f, k, h) || c))
          return k.abort();
        if (
          ((x = "abort"),
          y.add(h.complete),
          k.done(h.success),
          k.fail(h.error),
          (n = Re(je, h, i, k)))
        ) {
          if (((k.readyState = 1), d && g.trigger("ajaxSend", [k, h]), c))
            return k;
          h.async &&
            0 < h.timeout &&
            (a = t.setTimeout(function () {
              k.abort("timeout");
            }, h.timeout));
          try {
            (c = !1), n.send(b, S);
          } catch (e) {
            if (c) throw e;
            S(-1, e);
          }
        } else S(-1, "No Transport");
        function S(e, i, r, l) {
          var u,
            p,
            m,
            b,
            T,
            x = i;
          c ||
            ((c = !0),
            a && t.clearTimeout(a),
            (n = void 0),
            (o = l || ""),
            (k.readyState = 0 < e ? 4 : 0),
            (u = (200 <= e && e < 300) || 304 === e),
            r &&
              (b = (function (t, e, i) {
                for (
                  var n, s, o, r, a = t.contents, l = t.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === n &&
                      (n = t.mimeType || e.getResponseHeader("Content-Type"));
                if (n)
                  for (s in a)
                    if (a[s] && a[s].test(n)) {
                      l.unshift(s);
                      break;
                    }
                if (l[0] in i) o = l[0];
                else {
                  for (s in i) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                      o = s;
                      break;
                    }
                    r || (r = s);
                  }
                  o = o || r;
                }
                if (o) return o !== l[0] && l.unshift(o), i[o];
              })(h, k, r)),
            !u &&
              -1 < w.inArray("script", h.dataTypes) &&
              w.inArray("json", h.dataTypes) < 0 &&
              (h.converters["text script"] = function () {}),
            (b = (function (t, e, i, n) {
              var s,
                o,
                r,
                a,
                l,
                c = {},
                d = t.dataTypes.slice();
              if (d[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
              for (o = d.shift(); o; )
                if (
                  (t.responseFields[o] && (i[t.responseFields[o]] = e),
                  !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (l = o),
                  (o = d.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(r = c[l + " " + o] || c["* " + o]))
                      for (s in c)
                        if (
                          (a = s.split(" "))[1] === o &&
                          (r = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === r
                            ? (r = c[s])
                            : !0 !== c[s] && ((o = a[0]), d.unshift(a[1]));
                          break;
                        }
                    if (!0 !== r)
                      if (r && t.throws) e = r(e);
                      else
                        try {
                          e = r(e);
                        } catch (t) {
                          return {
                            state: "parsererror",
                            error: r
                              ? t
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: e };
            })(h, b, k, u)),
            u
              ? (h.ifModified &&
                  ((T = k.getResponseHeader("Last-Modified")) &&
                    (w.lastModified[s] = T),
                  (T = k.getResponseHeader("etag")) && (w.etag[s] = T)),
                204 === e || "HEAD" === h.type
                  ? (x = "nocontent")
                  : 304 === e
                  ? (x = "notmodified")
                  : ((x = b.state), (p = b.data), (u = !(m = b.error))))
              : ((m = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
            (k.status = e),
            (k.statusText = (i || x) + ""),
            u ? v.resolveWith(f, [p, x, k]) : v.rejectWith(f, [k, x, m]),
            k.statusCode(_),
            (_ = void 0),
            d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? p : m]),
            y.fireWith(f, [k, x]),
            d &&
              (g.trigger("ajaxComplete", [k, h]),
              --w.active || w.event.trigger("ajaxStop")));
        }
        return k;
      },
      getJSON: function (t, e, i) {
        return w.get(t, e, i, "json");
      },
      getScript: function (t, e) {
        return w.get(t, void 0, e, "script");
      },
    }),
    w.each(["get", "post"], function (t, e) {
      w[e] = function (t, i, n, s) {
        return (
          f(i) && ((s = s || n), (n = i), (i = void 0)),
          w.ajax(
            w.extend(
              { url: t, type: e, dataType: s, data: i, success: n },
              w.isPlainObject(t) && t
            )
          )
        );
      };
    }),
    w.ajaxPrefilter(function (t) {
      var e;
      for (e in t.headers)
        "content-type" === e.toLowerCase() &&
          (t.contentType = t.headers[e] || "");
    }),
    (w._evalUrl = function (t, e, i) {
      return w.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (t) {
          w.globalEval(t, e, i);
        },
      });
    }),
    w.fn.extend({
      wrapAll: function (t) {
        var e;
        return (
          this[0] &&
            (f(t) && (t = t.call(this[0])),
            (e = w(t, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;
                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (t) {
        return f(t)
          ? this.each(function (e) {
              w(this).wrapInner(t.call(this, e));
            })
          : this.each(function () {
              var e = w(this),
                i = e.contents();
              i.length ? i.wrapAll(t) : e.append(t);
            });
      },
      wrap: function (t) {
        var e = f(t);
        return this.each(function (i) {
          w(this).wrapAll(e ? t.call(this, i) : t);
        });
      },
      unwrap: function (t) {
        return (
          this.parent(t)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (t) {
      return !w.expr.pseudos.visible(t);
    }),
    (w.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    });
  var ze = { 0: 200, 1223: 204 },
    Fe = w.ajaxSettings.xhr();
  (h.cors = !!Fe && "withCredentials" in Fe),
    (h.ajax = Fe = !!Fe),
    w.ajaxTransport(function (e) {
      var i, n;
      if (h.cors || (Fe && !e.crossDomain))
        return {
          send: function (s, o) {
            var r,
              a = e.xhr();
            if (
              (a.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields)
            )
              for (r in e.xhrFields) a[r] = e.xhrFields[r];
            for (r in (e.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(e.mimeType),
            e.crossDomain ||
              s["X-Requested-With"] ||
              (s["X-Requested-With"] = "XMLHttpRequest"),
            s))
              a.setRequestHeader(r, s[r]);
            (i = function (t) {
              return function () {
                i &&
                  ((i =
                    n =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === t
                    ? a.abort()
                    : "error" === t
                    ? "number" != typeof a.status
                      ? o(0, "error")
                      : o(a.status, a.statusText)
                    : o(
                        ze[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = i()),
              (n = a.onerror = a.ontimeout = i("error")),
              void 0 !== a.onabort
                ? (a.onabort = n)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      t.setTimeout(function () {
                        i && n();
                      });
                  }),
              (i = i("abort"));
            try {
              a.send((e.hasContent && e.data) || null);
            } catch (s) {
              if (i) throw s;
            }
          },
          abort: function () {
            i && i();
          },
        };
    }),
    w.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (t) {
          return w.globalEval(t), t;
        },
      },
    }),
    w.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    w.ajaxTransport("script", function (t) {
      var e, i;
      if (t.crossDomain || t.scriptAttrs)
        return {
          send: function (n, s) {
            (e = w("<script>")
              .attr(t.scriptAttrs || {})
              .prop({ charset: t.scriptCharset, src: t.url })
              .on(
                "load error",
                (i = function (t) {
                  e.remove(),
                    (i = null),
                    t && s("error" === t.type ? 404 : 200, t.type);
                })
              )),
              m.head.appendChild(e[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Be,
    We = [],
    Ue = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = We.pop() || w.expando + "_" + we.guid++;
      return (this[t] = !0), t;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (e, i, n) {
      var s,
        o,
        r,
        a =
          !1 !== e.jsonp &&
          (Ue.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ue.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (s = e.jsonpCallback =
            f(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ue, "$1" + s))
            : !1 !== e.jsonp &&
              (e.url += (Te.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
          (e.converters["script json"] = function () {
            return r || w.error(s + " was not called"), r[0];
          }),
          (e.dataTypes[0] = "json"),
          (o = t[s]),
          (t[s] = function () {
            r = arguments;
          }),
          n.always(function () {
            void 0 === o ? w(t).removeProp(s) : (t[s] = o),
              e[s] && ((e.jsonpCallback = i.jsonpCallback), We.push(s)),
              r && f(o) && o(r[0]),
              (r = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument =
      (((Be = m.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Be.childNodes.length)),
    (w.parseHTML = function (t, e, i) {
      return "string" != typeof t
        ? []
        : ("boolean" == typeof e && ((i = e), (e = !1)),
          e ||
            (h.createHTMLDocument
              ? (((n = (e =
                  m.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = m.location.href),
                e.head.appendChild(n))
              : (e = m)),
          (o = !i && []),
          (s = A.exec(t))
            ? [e.createElement(s[1])]
            : ((s = _t([t], e, o)),
              o && o.length && w(o).remove(),
              w.merge([], s.childNodes)));
      var n, s, o;
    }),
    (w.fn.load = function (t, e, i) {
      var n,
        s,
        o,
        r = this,
        a = t.indexOf(" ");
      return (
        -1 < a && ((n = fe(t.slice(a))), (t = t.slice(0, a))),
        f(e)
          ? ((i = e), (e = void 0))
          : e && "object" == typeof e && (s = "POST"),
        0 < r.length &&
          w
            .ajax({ url: t, type: s || "GET", dataType: "html", data: e })
            .done(function (t) {
              (o = arguments),
                r.html(n ? w("<div>").append(w.parseHTML(t)).find(n) : t);
            })
            .always(
              i &&
                function (t, e) {
                  r.each(function () {
                    i.apply(this, o || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
    (w.expr.pseudos.animated = function (t) {
      return w.grep(w.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (t, e, i) {
        var n,
          s,
          o,
          r,
          a,
          l,
          c = w.css(t, "position"),
          d = w(t),
          u = {};
        "static" === c && (t.style.position = "relative"),
          (a = d.offset()),
          (o = w.css(t, "top")),
          (l = w.css(t, "left")),
          ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto")
            ? ((r = (n = d.position()).top), (s = n.left))
            : ((r = parseFloat(o) || 0), (s = parseFloat(l) || 0)),
          f(e) && (e = e.call(t, i, w.extend({}, a))),
          null != e.top && (u.top = e.top - a.top + r),
          null != e.left && (u.left = e.left - a.left + s),
          "using" in e ? e.using.call(t, u) : d.css(u);
      },
    }),
    w.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                w.offset.setOffset(this, t, e);
              });
        var e,
          i,
          n = this[0];
        return n
          ? n.getClientRects().length
            ? ((e = n.getBoundingClientRect()),
              (i = n.ownerDocument.defaultView),
              { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            i,
            n = this[0],
            s = { top: 0, left: 0 };
          if ("fixed" === w.css(n, "position")) e = n.getBoundingClientRect();
          else {
            for (
              e = this.offset(),
                i = n.ownerDocument,
                t = n.offsetParent || i.documentElement;
              t &&
              (t === i.body || t === i.documentElement) &&
              "static" === w.css(t, "position");

            )
              t = t.parentNode;
            t &&
              t !== n &&
              1 === t.nodeType &&
              (((s = w(t).offset()).top += w.css(t, "borderTopWidth", !0)),
              (s.left += w.css(t, "borderLeftWidth", !0)));
          }
          return {
            top: e.top - s.top - w.css(n, "marginTop", !0),
            left: e.left - s.left - w.css(n, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && "static" === w.css(t, "position");

          )
            t = t.offsetParent;
          return t || nt;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, e) {
        var i = "pageYOffset" === e;
        w.fn[t] = function (n) {
          return F(
            this,
            function (t, n, s) {
              var o;
              if (
                (g(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                void 0 === s)
              )
                return o ? o[e] : t[n];
              o
                ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset)
                : (t[n] = s);
            },
            t,
            n,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (t, e) {
      w.cssHooks[e] = qt(h.pixelPosition, function (t, i) {
        if (i)
          return (i = Rt(t, e)), jt.test(i) ? w(t).position()[e] + "px" : i;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (t, e) {
      w.each(
        { padding: "inner" + t, content: e, "": "outer" + t },
        function (i, n) {
          w.fn[n] = function (s, o) {
            var r = arguments.length && (i || "boolean" != typeof s),
              a = i || (!0 === s || !0 === o ? "margin" : "border");
            return F(
              this,
              function (e, i, s) {
                var o;
                return g(e)
                  ? 0 === n.indexOf("outer")
                    ? e["inner" + t]
                    : e.document.documentElement["client" + t]
                  : 9 === e.nodeType
                  ? ((o = e.documentElement),
                    Math.max(
                      e.body["scroll" + t],
                      o["scroll" + t],
                      e.body["offset" + t],
                      o["offset" + t],
                      o["client" + t]
                    ))
                  : void 0 === s
                  ? w.css(e, i, a)
                  : w.style(e, i, s, a);
              },
              e,
              r ? s : void 0,
              r
            );
          };
        }
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        w.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    w.fn.extend({
      bind: function (t, e, i) {
        return this.on(t, null, e, i);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, i, n) {
        return this.on(e, t, i, n);
      },
      undelegate: function (t, e, i) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", i);
      },
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (t, e) {
        w.fn[e] = function (t, i) {
          return 0 < arguments.length
            ? this.on(e, null, t, i)
            : this.trigger(e);
        };
      }
    );
  var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.proxy = function (t, e) {
    var i, n, o;
    if (("string" == typeof e && ((i = t[e]), (e = t), (t = i)), f(t)))
      return (
        (n = s.call(arguments, 2)),
        ((o = function () {
          return t.apply(e || this, n.concat(s.call(arguments)));
        }).guid = t.guid =
          t.guid || w.guid++),
        o
      );
  }),
    (w.holdReady = function (t) {
      t ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = E),
    (w.isFunction = f),
    (w.isWindow = g),
    (w.camelCase = X),
    (w.type = _),
    (w.now = Date.now),
    (w.isNumeric = function (t) {
      var e = w.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
    }),
    (w.trim = function (t) {
      return null == t ? "" : (t + "").replace(Xe, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Ye = t.jQuery,
    Ve = t.$;
  return (
    (w.noConflict = function (e) {
      return t.$ === w && (t.$ = Ve), e && t.jQuery === w && (t.jQuery = Ye), w;
    }),
    void 0 === e && (t.jQuery = t.$ = w),
    w
  );
}),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e(require("@popperjs/core")))
      : "function" == typeof define && define.amd
      ? define(["@popperjs/core"], e)
      : ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
          e(t.Popper));
  })(this, function (t) {
    "use strict";
    var e = (function (t) {
      if (t && t.__esModule) return t;
      var e = Object.create(null);
      return (
        t &&
          Object.keys(t).forEach(function (i) {
            if ("default" !== i) {
              var n = Object.getOwnPropertyDescriptor(t, i);
              Object.defineProperty(
                e,
                i,
                n.get
                  ? n
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[i];
                      },
                    }
              );
            }
          }),
        (e.default = t),
        Object.freeze(e)
      );
    })(t);
    const i = (t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      },
      n = (t) => {
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
          let i = t.getAttribute("href");
          if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
          i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]),
            (e = i && "#" !== i ? i.trim() : null);
        }
        return e;
      },
      s = (t) => {
        const e = n(t);
        return e && document.querySelector(e) ? e : null;
      },
      o = (t) => {
        const e = n(t);
        return e ? document.querySelector(e) : null;
      },
      r = (t) => {
        if (!t) return 0;
        let { transitionDuration: e, transitionDelay: i } =
          window.getComputedStyle(t);
        const n = Number.parseFloat(e),
          s = Number.parseFloat(i);
        return n || s
          ? ((e = e.split(",")[0]),
            (i = i.split(",")[0]),
            1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
          : 0;
      },
      a = (t) => {
        t.dispatchEvent(new Event("transitionend"));
      },
      l = (t) => (t[0] || t).nodeType,
      c = (t, e) => {
        let i = !1;
        const n = e + 5;
        t.addEventListener("transitionend", function e() {
          (i = !0), t.removeEventListener("transitionend", e);
        }),
          setTimeout(() => {
            i || a(t);
          }, n);
      },
      d = (t, e, i) => {
        Object.keys(i).forEach((n) => {
          const s = i[n],
            o = e[n],
            r =
              o && l(o)
                ? "element"
                : null == (a = o)
                ? "" + a
                : {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          var a;
          if (!new RegExp(s).test(r))
            throw new TypeError(
              t.toUpperCase() +
                ": " +
                `Option "${n}" provided type "${r}" ` +
                `but expected type "${s}".`
            );
        });
      },
      u = (t) => {
        if (!t) return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
          const e = getComputedStyle(t),
            i = getComputedStyle(t.parentNode);
          return (
            "none" !== e.display &&
            "none" !== i.display &&
            "hidden" !== e.visibility
          );
        }
        return !1;
      },
      p = (t) =>
        !t ||
        t.nodeType !== Node.ELEMENT_NODE ||
        !!t.classList.contains("disabled") ||
        (void 0 !== t.disabled
          ? t.disabled
          : t.hasAttribute("disabled") &&
            "false" !== t.getAttribute("disabled")),
      h = (t) => {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
          const e = t.getRootNode();
          return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? h(t.parentNode)
          : null;
      },
      f = () => function () {},
      g = (t) => t.offsetHeight,
      m = () => {
        const { jQuery: t } = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
      },
      v = () => "rtl" === document.documentElement.dir,
      y = (t, e) => {
        var i;
        (i = () => {
          const i = m();
          if (i) {
            const n = i.fn[t];
            (i.fn[t] = e.jQueryInterface),
              (i.fn[t].Constructor = e),
              (i.fn[t].noConflict = () => ((i.fn[t] = n), e.jQueryInterface));
          }
        }),
          "loading" === document.readyState
            ? document.addEventListener("DOMContentLoaded", i)
            : i();
      },
      _ = new Map();
    var b = {
      set(t, e, i) {
        _.has(t) || _.set(t, new Map());
        const n = _.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (_.has(t) && _.get(t).get(e)) || null,
      remove(t, e) {
        if (!_.has(t)) return;
        const i = _.get(t);
        i.delete(e), 0 === i.size && _.delete(t);
      },
    };
    const w = /[^.]*(?=\..*)\.|.*/,
      T = /\..*/,
      x = /::\d+$/,
      k = {};
    let S = 1;
    const C = { mouseenter: "mouseover", mouseleave: "mouseout" },
      E = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function A(t, e) {
      return (e && `${e}::${S++}`) || t.uidEvent || S++;
    }
    function D(t) {
      const e = A(t);
      return (t.uidEvent = e), (k[e] = k[e] || {}), k[e];
    }
    function O(t, e, i = null) {
      const n = Object.keys(t);
      for (let s = 0, o = n.length; s < o; s++) {
        const o = t[n[s]];
        if (o.originalHandler === e && o.delegationSelector === i) return o;
      }
      return null;
    }
    function L(t, e, i) {
      const n = "string" == typeof e,
        s = n ? i : e;
      let o = t.replace(T, "");
      const r = C[o];
      return r && (o = r), E.has(o) || (o = t), [n, s, o];
    }
    function $(t, e, i, n, s) {
      if ("string" != typeof e || !t) return;
      i || ((i = n), (n = null));
      const [o, r, a] = L(e, i, n),
        l = D(t),
        c = l[a] || (l[a] = {}),
        d = O(c, r, o ? i : null);
      if (d) return void (d.oneOff = d.oneOff && s);
      const u = A(r, e.replace(w, "")),
        p = o
          ? (function (t, e, i) {
              return function n(s) {
                const o = t.querySelectorAll(e);
                for (let { target: e } = s; e && e !== this; e = e.parentNode)
                  for (let r = o.length; r--; )
                    if (o[r] === e)
                      return (
                        (s.delegateTarget = e),
                        n.oneOff && P.off(t, s.type, i),
                        i.apply(e, [s])
                      );
                return null;
              };
            })(t, i, n)
          : (function (t, e) {
              return function i(n) {
                return (
                  (n.delegateTarget = t),
                  i.oneOff && P.off(t, n.type, e),
                  e.apply(t, [n])
                );
              };
            })(t, i);
      (p.delegationSelector = o ? i : null),
        (p.originalHandler = r),
        (p.oneOff = s),
        (p.uidEvent = u),
        (c[u] = p),
        t.addEventListener(a, p, o);
    }
    function N(t, e, i, n, s) {
      const o = O(e[i], n, s);
      o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    const P = {
      on(t, e, i, n) {
        $(t, e, i, n, !1);
      },
      one(t, e, i, n) {
        $(t, e, i, n, !0);
      },
      off(t, e, i, n) {
        if ("string" != typeof e || !t) return;
        const [s, o, r] = L(e, i, n),
          a = r !== e,
          l = D(t),
          c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void N(t, l, r, o, s ? i : null);
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function (t, e, i, n) {
              const s = e[i] || {};
              Object.keys(s).forEach((o) => {
                if (o.includes(n)) {
                  const n = s[o];
                  N(t, e, i, n.originalHandler, n.delegationSelector);
                }
              });
            })(t, l, i, e.slice(1));
          });
        const d = l[r] || {};
        Object.keys(d).forEach((i) => {
          const n = i.replace(x, "");
          if (!a || e.includes(n)) {
            const e = d[i];
            N(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, i) {
        if ("string" != typeof e || !t) return null;
        const n = m(),
          s = e.replace(T, ""),
          o = e !== s,
          r = E.has(s);
        let a,
          l = !0,
          c = !0,
          d = !1,
          u = null;
        return (
          o &&
            n &&
            ((a = n.Event(e, i)),
            n(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (d = a.isDefaultPrevented())),
          r
            ? (u = document.createEvent("HTMLEvents")).initEvent(s, l, !0)
            : (u = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((t) => {
              Object.defineProperty(u, t, { get: () => i[t] });
            }),
          d && u.preventDefault(),
          c && t.dispatchEvent(u),
          u.defaultPrevented && void 0 !== a && a.preventDefault(),
          u
        );
      },
    };
    class j {
      constructor(t) {
        (t = "string" == typeof t ? document.querySelector(t) : t) &&
          ((this._element = t),
          b.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        b.remove(this._element, this.constructor.DATA_KEY),
          (this._element = null);
      }
      static getInstance(t) {
        return b.get(t, this.DATA_KEY);
      }
      static get VERSION() {
        return "5.0.0-beta3";
      }
    }
    class M extends j {
      static get DATA_KEY() {
        return "bs.alert";
      }
      close(t) {
        const e = t ? this._getRootElement(t) : this._element,
          i = this._triggerCloseEvent(e);
        null === i || i.defaultPrevented || this._removeElement(e);
      }
      _getRootElement(t) {
        return o(t) || t.closest(".alert");
      }
      _triggerCloseEvent(t) {
        return P.trigger(t, "close.bs.alert");
      }
      _removeElement(t) {
        if ((t.classList.remove("show"), !t.classList.contains("fade")))
          return void this._destroyElement(t);
        const e = r(t);
        P.one(t, "transitionend", () => this._destroyElement(t)), c(t, e);
      }
      _destroyElement(t) {
        t.parentNode && t.parentNode.removeChild(t),
          P.trigger(t, "closed.bs.alert");
      }
      static jQueryInterface(t) {
        return this.each(function () {
          let e = b.get(this, "bs.alert");
          e || (e = new M(this)), "close" === t && e[t](this);
        });
      }
      static handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }
    P.on(
      document,
      "click.bs.alert.data-api",
      '[data-bs-dismiss="alert"]',
      M.handleDismiss(new M())
    ),
      y("alert", M);
    class H extends j {
      static get DATA_KEY() {
        return "bs.button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(t) {
        return this.each(function () {
          let e = b.get(this, "bs.button");
          e || (e = new H(this)), "toggle" === t && e[t]();
        });
      }
    }
    function I(t) {
      return (
        "true" === t ||
        ("false" !== t &&
          (t === Number(t).toString()
            ? Number(t)
            : "" === t || "null" === t
            ? null
            : t))
      );
    }
    function R(t) {
      return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
    }
    P.on(
      document,
      "click.bs.button.data-api",
      '[data-bs-toggle="button"]',
      (t) => {
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        let i = b.get(e, "bs.button");
        i || (i = new H(e)), i.toggle();
      }
    ),
      y("button", H);
    const q = {
        setDataAttribute(t, e, i) {
          t.setAttribute("data-bs-" + R(e), i);
        },
        removeDataAttribute(t, e) {
          t.removeAttribute("data-bs-" + R(e));
        },
        getDataAttributes(t) {
          if (!t) return {};
          const e = {};
          return (
            Object.keys(t.dataset)
              .filter((t) => t.startsWith("bs"))
              .forEach((i) => {
                let n = i.replace(/^bs/, "");
                (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                  (e[n] = I(t.dataset[i]));
              }),
            e
          );
        },
        getDataAttribute: (t, e) => I(t.getAttribute("data-bs-" + R(e))),
        offset(t) {
          const e = t.getBoundingClientRect();
          return {
            top: e.top + document.body.scrollTop,
            left: e.left + document.body.scrollLeft,
          };
        },
        position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
      },
      z = {
        find: (t, e = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement) =>
          Element.prototype.querySelector.call(e, t),
        children: (t, e) =>
          [].concat(...t.children).filter((t) => t.matches(e)),
        parents(t, e) {
          const i = [];
          let n = t.parentNode;
          for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
            n.matches(e) && i.push(n), (n = n.parentNode);
          return i;
        },
        prev(t, e) {
          let i = t.previousElementSibling;
          for (; i; ) {
            if (i.matches(e)) return [i];
            i = i.previousElementSibling;
          }
          return [];
        },
        next(t, e) {
          let i = t.nextElementSibling;
          for (; i; ) {
            if (i.matches(e)) return [i];
            i = i.nextElementSibling;
          }
          return [];
        },
      },
      F = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      B = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      W = "next",
      U = "prev",
      X = "left",
      Y = "right";
    class V extends j {
      constructor(t, e) {
        super(t),
          (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._indicatorsElement = z.findOne(
            ".carousel-indicators",
            this._element
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(window.PointerEvent)),
          this._addEventListeners();
      }
      static get Default() {
        return F;
      }
      static get DATA_KEY() {
        return "bs.carousel";
      }
      next() {
        this._isSliding || this._slide(W);
      }
      nextWhenVisible() {
        !document.hidden && u(this._element) && this.next();
      }
      prev() {
        this._isSliding || this._slide(U);
      }
      pause(t) {
        t || (this._isPaused = !0),
          z.findOne(
            ".carousel-item-next, .carousel-item-prev",
            this._element
          ) && (a(this._element), this.cycle(!0)),
          clearInterval(this._interval),
          (this._interval = null);
      }
      cycle(t) {
        t || (this._isPaused = !1),
          this._interval &&
            (clearInterval(this._interval), (this._interval = null)),
          this._config &&
            this._config.interval &&
            !this._isPaused &&
            (this._updateInterval(),
            (this._interval = setInterval(
              (document.visibilityState
                ? this.nextWhenVisible
                : this.next
              ).bind(this),
              this._config.interval
            )));
      }
      to(t) {
        this._activeElement = z.findOne(".active.carousel-item", this._element);
        const e = this._getItemIndex(this._activeElement);
        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding)
          return void P.one(this._element, "slid.bs.carousel", () =>
            this.to(t)
          );
        if (e === t) return this.pause(), void this.cycle();
        const i = t > e ? W : U;
        this._slide(i, this._items[t]);
      }
      dispose() {
        P.off(this._element, ".bs.carousel"),
          (this._items = null),
          (this._config = null),
          (this._interval = null),
          (this._isPaused = null),
          (this._isSliding = null),
          (this._activeElement = null),
          (this._indicatorsElement = null),
          super.dispose();
      }
      _getConfig(t) {
        return (t = { ...F, ...t }), d("carousel", t, B), t;
      }
      _handleSwipe() {
        const t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        const e = t / this.touchDeltaX;
        (this.touchDeltaX = 0), e && this._slide(e > 0 ? Y : X);
      }
      _addEventListeners() {
        this._config.keyboard &&
          P.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
          "hover" === this._config.pause &&
            (P.on(this._element, "mouseenter.bs.carousel", (t) =>
              this.pause(t)
            ),
            P.on(this._element, "mouseleave.bs.carousel", (t) =>
              this.cycle(t)
            )),
          this._config.touch &&
            this._touchSupported &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        const t = (t) => {
            !this._pointerEvent ||
            ("pen" !== t.pointerType && "touch" !== t.pointerType)
              ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
              : (this.touchStartX = t.clientX);
          },
          e = (t) => {
            this.touchDeltaX =
              t.touches && t.touches.length > 1
                ? 0
                : t.touches[0].clientX - this.touchStartX;
          },
          i = (t) => {
            !this._pointerEvent ||
              ("pen" !== t.pointerType && "touch" !== t.pointerType) ||
              (this.touchDeltaX = t.clientX - this.touchStartX),
              this._handleSwipe(),
              "hover" === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  (t) => this.cycle(t),
                  500 + this._config.interval
                )));
          };
        z.find(".carousel-item img", this._element).forEach((t) => {
          P.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
        }),
          this._pointerEvent
            ? (P.on(this._element, "pointerdown.bs.carousel", (e) => t(e)),
              P.on(this._element, "pointerup.bs.carousel", (t) => i(t)),
              this._element.classList.add("pointer-event"))
            : (P.on(this._element, "touchstart.bs.carousel", (e) => t(e)),
              P.on(this._element, "touchmove.bs.carousel", (t) => e(t)),
              P.on(this._element, "touchend.bs.carousel", (t) => i(t)));
      }
      _keydown(t) {
        /input|textarea/i.test(t.target.tagName) ||
          ("ArrowLeft" === t.key
            ? (t.preventDefault(), this._slide(X))
            : "ArrowRight" === t.key && (t.preventDefault(), this._slide(Y)));
      }
      _getItemIndex(t) {
        return (
          (this._items =
            t && t.parentNode ? z.find(".carousel-item", t.parentNode) : []),
          this._items.indexOf(t)
        );
      }
      _getItemByOrder(t, e) {
        const i = t === W,
          n = t === U,
          s = this._getItemIndex(e),
          o = this._items.length - 1;
        if (((n && 0 === s) || (i && s === o)) && !this._config.wrap) return e;
        const r = (s + (n ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r];
      }
      _triggerSlideEvent(t, e) {
        const i = this._getItemIndex(t),
          n = this._getItemIndex(
            z.findOne(".active.carousel-item", this._element)
          );
        return P.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: n,
          to: i,
        });
      }
      _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          const e = z.findOne(".active", this._indicatorsElement);
          e.classList.remove("active"), e.removeAttribute("aria-current");
          const i = z.find("[data-bs-target]", this._indicatorsElement);
          for (let e = 0; e < i.length; e++)
            if (
              Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) ===
              this._getItemIndex(t)
            ) {
              i[e].classList.add("active"),
                i[e].setAttribute("aria-current", "true");
              break;
            }
        }
      }
      _updateInterval() {
        const t =
          this._activeElement ||
          z.findOne(".active.carousel-item", this._element);
        if (!t) return;
        const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e
          ? ((this._config.defaultInterval =
              this._config.defaultInterval || this._config.interval),
            (this._config.interval = e))
          : (this._config.interval =
              this._config.defaultInterval || this._config.interval);
      }
      _slide(t, e) {
        const i = this._directionToOrder(t),
          n = z.findOne(".active.carousel-item", this._element),
          s = this._getItemIndex(n),
          o = e || this._getItemByOrder(i, n),
          a = this._getItemIndex(o),
          l = Boolean(this._interval),
          d = i === W,
          u = d ? "carousel-item-start" : "carousel-item-end",
          p = d ? "carousel-item-next" : "carousel-item-prev",
          h = this._orderToDirection(i);
        if (o && o.classList.contains("active")) this._isSliding = !1;
        else if (!this._triggerSlideEvent(o, h).defaultPrevented && n && o) {
          if (
            ((this._isSliding = !0),
            l && this.pause(),
            this._setActiveIndicatorElement(o),
            (this._activeElement = o),
            this._element.classList.contains("slide"))
          ) {
            o.classList.add(p), g(o), n.classList.add(u), o.classList.add(u);
            const t = r(n);
            P.one(n, "transitionend", () => {
              o.classList.remove(u, p),
                o.classList.add("active"),
                n.classList.remove("active", p, u),
                (this._isSliding = !1),
                setTimeout(() => {
                  P.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: o,
                    direction: h,
                    from: s,
                    to: a,
                  });
                }, 0);
            }),
              c(n, t);
          } else
            n.classList.remove("active"),
              o.classList.add("active"),
              (this._isSliding = !1),
              P.trigger(this._element, "slid.bs.carousel", {
                relatedTarget: o,
                direction: h,
                from: s,
                to: a,
              });
          l && this.cycle();
        }
      }
      _directionToOrder(t) {
        return [Y, X].includes(t)
          ? v()
            ? t === Y
              ? U
              : W
            : t === Y
            ? W
            : U
          : t;
      }
      _orderToDirection(t) {
        return [W, U].includes(t)
          ? v()
            ? t === W
              ? X
              : Y
            : t === W
            ? Y
            : X
          : t;
      }
      static carouselInterface(t, e) {
        let i = b.get(t, "bs.carousel"),
          n = { ...F, ...q.getDataAttributes(t) };
        "object" == typeof e && (n = { ...n, ...e });
        const s = "string" == typeof e ? e : n.slide;
        if ((i || (i = new V(t, n)), "number" == typeof e)) i.to(e);
        else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
          i[s]();
        } else n.interval && n.ride && (i.pause(), i.cycle());
      }
      static jQueryInterface(t) {
        return this.each(function () {
          V.carouselInterface(this, t);
        });
      }
      static dataApiClickHandler(t) {
        const e = o(this);
        if (!e || !e.classList.contains("carousel")) return;
        const i = { ...q.getDataAttributes(e), ...q.getDataAttributes(this) },
          n = this.getAttribute("data-bs-slide-to");
        n && (i.interval = !1),
          V.carouselInterface(e, i),
          n && b.get(e, "bs.carousel").to(n),
          t.preventDefault();
      }
    }
    P.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      V.dataApiClickHandler
    ),
      P.on(window, "load.bs.carousel.data-api", () => {
        const t = z.find('[data-bs-ride="carousel"]');
        for (let e = 0, i = t.length; e < i; e++)
          V.carouselInterface(t[e], b.get(t[e], "bs.carousel"));
      }),
      y("carousel", V);
    const Q = { toggle: !0, parent: "" },
      K = { toggle: "boolean", parent: "(string|element)" };
    class G extends j {
      constructor(t, e) {
        super(t),
          (this._isTransitioning = !1),
          (this._config = this._getConfig(e)),
          (this._triggerArray = z.find(
            `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
          ));
        const i = z.find('[data-bs-toggle="collapse"]');
        for (let t = 0, e = i.length; t < e; t++) {
          const e = i[t],
            n = s(e),
            o = z.find(n).filter((t) => t === this._element);
          null !== n &&
            o.length &&
            ((this._selector = n), this._triggerArray.push(e));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return Q;
      }
      static get DATA_KEY() {
        return "bs.collapse";
      }
      toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._element.classList.contains("show"))
          return;
        let t, e;
        this._parent &&
          0 ===
            (t = z
              .find(".show, .collapsing", this._parent)
              .filter((t) =>
                "string" == typeof this._config.parent
                  ? t.getAttribute("data-bs-parent") === this._config.parent
                  : t.classList.contains("collapse")
              )).length &&
          (t = null);
        const i = z.findOne(this._selector);
        if (t) {
          const n = t.find((t) => i !== t);
          if ((e = n ? b.get(n, "bs.collapse") : null) && e._isTransitioning)
            return;
        }
        if (P.trigger(this._element, "show.bs.collapse").defaultPrevented)
          return;
        t &&
          t.forEach((t) => {
            i !== t && G.collapseInterface(t, "hide"),
              e || b.set(t, "bs.collapse", null);
          });
        const n = this._getDimension();
        this._element.classList.remove("collapse"),
          this._element.classList.add("collapsing"),
          (this._element.style[n] = 0),
          this._triggerArray.length &&
            this._triggerArray.forEach((t) => {
              t.classList.remove("collapsed"),
                t.setAttribute("aria-expanded", !0);
            }),
          this.setTransitioning(!0);
        const s = "scroll" + (n[0].toUpperCase() + n.slice(1)),
          o = r(this._element);
        P.one(this._element, "transitionend", () => {
          this._element.classList.remove("collapsing"),
            this._element.classList.add("collapse", "show"),
            (this._element.style[n] = ""),
            this.setTransitioning(!1),
            P.trigger(this._element, "shown.bs.collapse");
        }),
          c(this._element, o),
          (this._element.style[n] = this._element[s] + "px");
      }
      hide() {
        if (this._isTransitioning || !this._element.classList.contains("show"))
          return;
        if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented)
          return;
        const t = this._getDimension();
        (this._element.style[t] =
          this._element.getBoundingClientRect()[t] + "px"),
          g(this._element),
          this._element.classList.add("collapsing"),
          this._element.classList.remove("collapse", "show");
        const e = this._triggerArray.length;
        if (e > 0)
          for (let t = 0; t < e; t++) {
            const e = this._triggerArray[t],
              i = o(e);
            i &&
              !i.classList.contains("show") &&
              (e.classList.add("collapsed"),
              e.setAttribute("aria-expanded", !1));
          }
        this.setTransitioning(!0), (this._element.style[t] = "");
        const i = r(this._element);
        P.one(this._element, "transitionend", () => {
          this.setTransitioning(!1),
            this._element.classList.remove("collapsing"),
            this._element.classList.add("collapse"),
            P.trigger(this._element, "hidden.bs.collapse");
        }),
          c(this._element, i);
      }
      setTransitioning(t) {
        this._isTransitioning = t;
      }
      dispose() {
        super.dispose(),
          (this._config = null),
          (this._parent = null),
          (this._triggerArray = null),
          (this._isTransitioning = null);
      }
      _getConfig(t) {
        return (
          ((t = { ...Q, ...t }).toggle = Boolean(t.toggle)),
          d("collapse", t, K),
          t
        );
      }
      _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
      _getParent() {
        let { parent: t } = this._config;
        l(t)
          ? (void 0 === t.jquery && void 0 === t[0]) || (t = t[0])
          : (t = z.findOne(t));
        const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
        return (
          z.find(e, t).forEach((t) => {
            const e = o(t);
            this._addAriaAndCollapsedClass(e, [t]);
          }),
          t
        );
      }
      _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        const i = t.classList.contains("show");
        e.forEach((t) => {
          i ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
            t.setAttribute("aria-expanded", i);
        });
      }
      static collapseInterface(t, e) {
        let i = b.get(t, "bs.collapse");
        const n = {
          ...Q,
          ...q.getDataAttributes(t),
          ...("object" == typeof e && e ? e : {}),
        };
        if (
          (!i &&
            n.toggle &&
            "string" == typeof e &&
            /show|hide/.test(e) &&
            (n.toggle = !1),
          i || (i = new G(t, n)),
          "string" == typeof e)
        ) {
          if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
          i[e]();
        }
      }
      static jQueryInterface(t) {
        return this.each(function () {
          G.collapseInterface(this, t);
        });
      }
    }
    P.on(
      document,
      "click.bs.collapse.data-api",
      '[data-bs-toggle="collapse"]',
      function (t) {
        ("A" === t.target.tagName ||
          (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
          t.preventDefault();
        const e = q.getDataAttributes(this),
          i = s(this);
        z.find(i).forEach((t) => {
          const i = b.get(t, "bs.collapse");
          let n;
          i
            ? (null === i._parent &&
                "string" == typeof e.parent &&
                ((i._config.parent = e.parent), (i._parent = i._getParent())),
              (n = "toggle"))
            : (n = e),
            G.collapseInterface(t, n);
        });
      }
    ),
      y("collapse", G);
    const J = new RegExp("ArrowUp|ArrowDown|Escape"),
      Z = v() ? "top-end" : "top-start",
      tt = v() ? "top-start" : "top-end",
      et = v() ? "bottom-end" : "bottom-start",
      it = v() ? "bottom-start" : "bottom-end",
      nt = v() ? "left-start" : "right-start",
      st = v() ? "right-start" : "left-start",
      ot = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      rt = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
      };
    class at extends j {
      constructor(t, e) {
        super(t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      static get Default() {
        return ot;
      }
      static get DefaultType() {
        return rt;
      }
      static get DATA_KEY() {
        return "bs.dropdown";
      }
      toggle() {
        if (
          this._element.disabled ||
          this._element.classList.contains("disabled")
        )
          return;
        const t = this._element.classList.contains("show");
        at.clearMenus(), t || this.show();
      }
      show() {
        if (
          this._element.disabled ||
          this._element.classList.contains("disabled") ||
          this._menu.classList.contains("show")
        )
          return;
        const t = at.getParentFromElement(this._element),
          i = { relatedTarget: this._element };
        if (!P.trigger(this._element, "show.bs.dropdown", i).defaultPrevented) {
          if (this._inNavbar) q.setDataAttribute(this._menu, "popper", "none");
          else {
            if (void 0 === e)
              throw new TypeError(
                "Bootstrap's dropdowns require Popper (https://popper.js.org)"
              );
            let i = this._element;
            "parent" === this._config.reference
              ? (i = t)
              : l(this._config.reference)
              ? ((i = this._config.reference),
                void 0 !== this._config.reference.jquery &&
                  (i = this._config.reference[0]))
              : "object" == typeof this._config.reference &&
                (i = this._config.reference);
            const n = this._getPopperConfig(),
              s = n.modifiers.find(
                (t) => "applyStyles" === t.name && !1 === t.enabled
              );
            (this._popper = e.createPopper(i, this._menu, n)),
              s && q.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement &&
            !t.closest(".navbar-nav") &&
            []
              .concat(...document.body.children)
              .forEach((t) => P.on(t, "mouseover", null, function () {})),
            this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.toggle("show"),
            this._element.classList.toggle("show"),
            P.trigger(this._element, "shown.bs.dropdown", i);
        }
      }
      hide() {
        if (
          this._element.disabled ||
          this._element.classList.contains("disabled") ||
          !this._menu.classList.contains("show")
        )
          return;
        const t = { relatedTarget: this._element };
        P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
          (this._popper && this._popper.destroy(),
          this._menu.classList.toggle("show"),
          this._element.classList.toggle("show"),
          q.removeDataAttribute(this._menu, "popper"),
          P.trigger(this._element, "hidden.bs.dropdown", t));
      }
      dispose() {
        P.off(this._element, ".bs.dropdown"),
          (this._menu = null),
          this._popper && (this._popper.destroy(), (this._popper = null)),
          super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _addEventListeners() {
        P.on(this._element, "click.bs.dropdown", (t) => {
          t.preventDefault(), this.toggle();
        });
      }
      _getConfig(t) {
        if (
          ((t = {
            ...this.constructor.Default,
            ...q.getDataAttributes(this._element),
            ...t,
          }),
          d("dropdown", t, this.constructor.DefaultType),
          "object" == typeof t.reference &&
            !l(t.reference) &&
            "function" != typeof t.reference.getBoundingClientRect)
        )
          throw new TypeError(
            "dropdown".toUpperCase() +
              ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
          );
        return t;
      }
      _getMenuElement() {
        return z.next(this._element, ".dropdown-menu")[0];
      }
      _getPlacement() {
        const t = this._element.parentNode;
        if (t.classList.contains("dropend")) return nt;
        if (t.classList.contains("dropstart")) return st;
        const e =
          "end" ===
          getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? (e ? tt : Z) : e ? it : et;
      }
      _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
      _getOffset() {
        const { offset: t } = this._config;
        return "string" == typeof t
          ? t.split(",").map((t) => Number.parseInt(t, 10))
          : "function" == typeof t
          ? (e) => t(e, this._element)
          : t;
      }
      _getPopperConfig() {
        const t = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          "static" === this._config.display &&
            (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
          {
            ...t,
            ...("function" == typeof this._config.popperConfig
              ? this._config.popperConfig(t)
              : this._config.popperConfig),
          }
        );
      }
      static dropdownInterface(t, e) {
        let i = b.get(t, "bs.dropdown");
        if (
          (i || (i = new at(t, "object" == typeof e ? e : null)),
          "string" == typeof e)
        ) {
          if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
          i[e]();
        }
      }
      static jQueryInterface(t) {
        return this.each(function () {
          at.dropdownInterface(this, t);
        });
      }
      static clearMenus(t) {
        if (t) {
          if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
          if (/input|select|textarea|form/i.test(t.target.tagName)) return;
        }
        const e = z.find('[data-bs-toggle="dropdown"]');
        for (let i = 0, n = e.length; i < n; i++) {
          const n = b.get(e[i], "bs.dropdown"),
            s = { relatedTarget: e[i] };
          if ((t && "click" === t.type && (s.clickEvent = t), !n)) continue;
          const o = n._menu;
          if (e[i].classList.contains("show")) {
            if (t) {
              if ([n._element].some((e) => t.composedPath().includes(e)))
                continue;
              if ("keyup" === t.type && "Tab" === t.key && o.contains(t.target))
                continue;
            }
            P.trigger(e[i], "hide.bs.dropdown", s).defaultPrevented ||
              ("ontouchstart" in document.documentElement &&
                []
                  .concat(...document.body.children)
                  .forEach((t) => P.off(t, "mouseover", null, function () {})),
              e[i].setAttribute("aria-expanded", "false"),
              n._popper && n._popper.destroy(),
              o.classList.remove("show"),
              e[i].classList.remove("show"),
              q.removeDataAttribute(o, "popper"),
              P.trigger(e[i], "hidden.bs.dropdown", s));
          }
        }
      }
      static getParentFromElement(t) {
        return o(t) || t.parentNode;
      }
      static dataApiKeydownHandler(t) {
        if (
          /input|textarea/i.test(t.target.tagName)
            ? "Space" === t.key ||
              ("Escape" !== t.key &&
                (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                  t.target.closest(".dropdown-menu")))
            : !J.test(t.key)
        )
          return;
        if (
          (t.preventDefault(),
          t.stopPropagation(),
          this.disabled || this.classList.contains("disabled"))
        )
          return;
        const e = at.getParentFromElement(this),
          i = this.classList.contains("show");
        if ("Escape" === t.key)
          return (
            (this.matches('[data-bs-toggle="dropdown"]')
              ? this
              : z.prev(this, '[data-bs-toggle="dropdown"]')[0]
            ).focus(),
            void at.clearMenus()
          );
        if (!i && ("ArrowUp" === t.key || "ArrowDown" === t.key))
          return void (
            this.matches('[data-bs-toggle="dropdown"]')
              ? this
              : z.prev(this, '[data-bs-toggle="dropdown"]')[0]
          ).click();
        if (!i || "Space" === t.key) return void at.clearMenus();
        const n = z
          .find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            e
          )
          .filter(u);
        if (!n.length) return;
        let s = n.indexOf(t.target);
        "ArrowUp" === t.key && s > 0 && s--,
          "ArrowDown" === t.key && s < n.length - 1 && s++,
          n[(s = -1 === s ? 0 : s)].focus();
      }
    }
    P.on(
      document,
      "keydown.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      at.dataApiKeydownHandler
    ),
      P.on(
        document,
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        at.dataApiKeydownHandler
      ),
      P.on(document, "click.bs.dropdown.data-api", at.clearMenus),
      P.on(document, "keyup.bs.dropdown.data-api", at.clearMenus),
      P.on(
        document,
        "click.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        function (t) {
          t.preventDefault(), at.dropdownInterface(this);
        }
      ),
      y("dropdown", at);
    const lt = { backdrop: !0, keyboard: !0, focus: !0 },
      ct = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
      };
    class dt extends j {
      constructor(t, e) {
        super(t),
          (this._config = this._getConfig(e)),
          (this._dialog = z.findOne(".modal-dialog", this._element)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      static get Default() {
        return lt;
      }
      static get DATA_KEY() {
        return "bs.modal";
      }
      toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
      show(t) {
        if (this._isShown || this._isTransitioning) return;
        this._isAnimated() && (this._isTransitioning = !0);
        const e = P.trigger(this._element, "show.bs.modal", {
          relatedTarget: t,
        });
        this._isShown ||
          e.defaultPrevented ||
          ((this._isShown = !0),
          this._checkScrollbar(),
          this._setScrollbar(),
          this._adjustDialog(),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          P.on(
            this._element,
            "click.dismiss.bs.modal",
            '[data-bs-dismiss="modal"]',
            (t) => this.hide(t)
          ),
          P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
            P.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
              t.target === this._element && (this._ignoreBackdropClick = !0);
            });
          }),
          this._showBackdrop(() => this._showElement(t)));
      }
      hide(t) {
        if ((t && t.preventDefault(), !this._isShown || this._isTransitioning))
          return;
        if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;
        const e = this._isAnimated();
        if (
          (e && (this._isTransitioning = !0),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          P.off(document, "focusin.bs.modal"),
          this._element.classList.remove("show"),
          P.off(this._element, "click.dismiss.bs.modal"),
          P.off(this._dialog, "mousedown.dismiss.bs.modal"),
          e)
        ) {
          const t = r(this._element);
          P.one(this._element, "transitionend", (t) => this._hideModal(t)),
            c(this._element, t);
        } else this._hideModal();
      }
      dispose() {
        [window, this._element, this._dialog].forEach((t) =>
          P.off(t, ".bs.modal")
        ),
          super.dispose(),
          P.off(document, "focusin.bs.modal"),
          (this._config = null),
          (this._dialog = null),
          (this._backdrop = null),
          (this._isShown = null),
          (this._isBodyOverflowing = null),
          (this._ignoreBackdropClick = null),
          (this._isTransitioning = null),
          (this._scrollbarWidth = null);
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _getConfig(t) {
        return (t = { ...lt, ...t }), d("modal", t, ct), t;
      }
      _showElement(t) {
        const e = this._isAnimated(),
          i = z.findOne(".modal-body", this._dialog);
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
          document.body.appendChild(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0),
          i && (i.scrollTop = 0),
          e && g(this._element),
          this._element.classList.add("show"),
          this._config.focus && this._enforceFocus();
        const n = () => {
          this._config.focus && this._element.focus(),
            (this._isTransitioning = !1),
            P.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
        };
        if (e) {
          const t = r(this._dialog);
          P.one(this._dialog, "transitionend", n), c(this._dialog, t);
        } else n();
      }
      _enforceFocus() {
        P.off(document, "focusin.bs.modal"),
          P.on(document, "focusin.bs.modal", (t) => {
            document === t.target ||
              this._element === t.target ||
              this._element.contains(t.target) ||
              this._element.focus();
          });
      }
      _setEscapeEvent() {
        this._isShown
          ? P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
              this._config.keyboard && "Escape" === t.key
                ? (t.preventDefault(), this.hide())
                : this._config.keyboard ||
                  "Escape" !== t.key ||
                  this._triggerBackdropTransition();
            })
          : P.off(this._element, "keydown.dismiss.bs.modal");
      }
      _setResizeEvent() {
        this._isShown
          ? P.on(window, "resize.bs.modal", () => this._adjustDialog())
          : P.off(window, "resize.bs.modal");
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._showBackdrop(() => {
            document.body.classList.remove("modal-open"),
              this._resetAdjustments(),
              this._resetScrollbar(),
              P.trigger(this._element, "hidden.bs.modal");
          });
      }
      _removeBackdrop() {
        this._backdrop.parentNode.removeChild(this._backdrop),
          (this._backdrop = null);
      }
      _showBackdrop(t) {
        const e = this._isAnimated();
        if (this._isShown && this._config.backdrop) {
          if (
            ((this._backdrop = document.createElement("div")),
            (this._backdrop.className = "modal-backdrop"),
            e && this._backdrop.classList.add("fade"),
            document.body.appendChild(this._backdrop),
            P.on(this._element, "click.dismiss.bs.modal", (t) => {
              this._ignoreBackdropClick
                ? (this._ignoreBackdropClick = !1)
                : t.target === t.currentTarget &&
                  ("static" === this._config.backdrop
                    ? this._triggerBackdropTransition()
                    : this.hide());
            }),
            e && g(this._backdrop),
            this._backdrop.classList.add("show"),
            !e)
          )
            return void t();
          const i = r(this._backdrop);
          P.one(this._backdrop, "transitionend", t), c(this._backdrop, i);
        } else if (!this._isShown && this._backdrop) {
          this._backdrop.classList.remove("show");
          const i = () => {
            this._removeBackdrop(), t();
          };
          if (e) {
            const t = r(this._backdrop);
            P.one(this._backdrop, "transitionend", i), c(this._backdrop, t);
          } else i();
        } else t();
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
          return;
        const t =
          this._element.scrollHeight > document.documentElement.clientHeight;
        t || (this._element.style.overflowY = "hidden"),
          this._element.classList.add("modal-static");
        const e = r(this._dialog);
        P.off(this._element, "transitionend"),
          P.one(this._element, "transitionend", () => {
            this._element.classList.remove("modal-static"),
              t ||
                (P.one(this._element, "transitionend", () => {
                  this._element.style.overflowY = "";
                }),
                c(this._element, e));
          }),
          c(this._element, e),
          this._element.focus();
      }
      _adjustDialog() {
        const t =
          this._element.scrollHeight > document.documentElement.clientHeight;
        ((!this._isBodyOverflowing && t && !v()) ||
          (this._isBodyOverflowing && !t && v())) &&
          (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
          ((this._isBodyOverflowing && !t && !v()) ||
            (!this._isBodyOverflowing && t && v())) &&
            (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      _checkScrollbar() {
        const t = document.body.getBoundingClientRect();
        (this._isBodyOverflowing =
          Math.round(t.left + t.right) < window.innerWidth),
          (this._scrollbarWidth = this._getScrollbarWidth());
      }
      _setScrollbar() {
        this._isBodyOverflowing &&
          (this._setElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight",
            (t) => t + this._scrollbarWidth
          ),
          this._setElementAttributes(
            ".sticky-top",
            "marginRight",
            (t) => t - this._scrollbarWidth
          ),
          this._setElementAttributes(
            "body",
            "paddingRight",
            (t) => t + this._scrollbarWidth
          )),
          document.body.classList.add("modal-open");
      }
      _setElementAttributes(t, e, i) {
        z.find(t).forEach((t) => {
          if (
            t !== document.body &&
            window.innerWidth > t.clientWidth + this._scrollbarWidth
          )
            return;
          const n = t.style[e],
            s = window.getComputedStyle(t)[e];
          q.setDataAttribute(t, e, n),
            (t.style[e] = i(Number.parseFloat(s)) + "px");
        });
      }
      _resetScrollbar() {
        this._resetElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight"
        ),
          this._resetElementAttributes(".sticky-top", "marginRight"),
          this._resetElementAttributes("body", "paddingRight");
      }
      _resetElementAttributes(t, e) {
        z.find(t).forEach((t) => {
          const i = q.getDataAttribute(t, e);
          void 0 === i && t === document.body
            ? (t.style[e] = "")
            : (q.removeDataAttribute(t, e), (t.style[e] = i));
        });
      }
      _getScrollbarWidth() {
        const t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
        const e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }
      static jQueryInterface(t, e) {
        return this.each(function () {
          let i = b.get(this, "bs.modal");
          const n = {
            ...lt,
            ...q.getDataAttributes(this),
            ...("object" == typeof t && t ? t : {}),
          };
          if ((i || (i = new dt(this, n)), "string" == typeof t)) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t](e);
          }
        });
      }
    }
    P.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (t) {
        const e = o(this);
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault(),
          P.one(e, "show.bs.modal", (t) => {
            t.defaultPrevented ||
              P.one(e, "hidden.bs.modal", () => {
                u(this) && this.focus();
              });
          });
        let i = b.get(e, "bs.modal");
        if (!i) {
          const t = { ...q.getDataAttributes(e), ...q.getDataAttributes(this) };
          i = new dt(e, t);
        }
        i.toggle(this);
      }
    ),
      y("modal", dt);
    const ut = () => {
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      },
      pt = (t, e, i) => {
        const n = ut();
        z.find(t).forEach((t) => {
          if (t !== document.body && window.innerWidth > t.clientWidth + n)
            return;
          const s = t.style[e],
            o = window.getComputedStyle(t)[e];
          q.setDataAttribute(t, e, s),
            (t.style[e] = i(Number.parseFloat(o)) + "px");
        });
      },
      ht = (t, e) => {
        z.find(t).forEach((t) => {
          const i = q.getDataAttribute(t, e);
          void 0 === i && t === document.body
            ? t.style.removeProperty(e)
            : (q.removeDataAttribute(t, e), (t.style[e] = i));
        });
      },
      ft = { backdrop: !0, keyboard: !0, scroll: !1 },
      gt = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
    class mt extends j {
      constructor(t, e) {
        super(t),
          (this._config = this._getConfig(e)),
          (this._isShown = !1),
          this._addEventListeners();
      }
      static get Default() {
        return ft;
      }
      static get DATA_KEY() {
        return "bs.offcanvas";
      }
      toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
      show(t) {
        this._isShown ||
          P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
            .defaultPrevented ||
          ((this._isShown = !0),
          (this._element.style.visibility = "visible"),
          this._config.backdrop &&
            document.body.classList.add("offcanvas-backdrop"),
          this._config.scroll ||
            ((t = ut()) => {
              (document.body.style.overflow = "hidden"),
                pt(
                  ".fixed-top, .fixed-bottom, .is-fixed",
                  "paddingRight",
                  (e) => e + t
                ),
                pt(".sticky-top", "marginRight", (e) => e - t),
                pt("body", "paddingRight", (e) => e + t);
            })(),
          this._element.classList.add("offcanvas-toggling"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add("show"),
          setTimeout(() => {
            this._element.classList.remove("offcanvas-toggling"),
              P.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: t,
              }),
              this._enforceFocusOnElement(this._element);
          }, r(this._element)));
      }
      hide() {
        this._isShown &&
          (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
            (this._element.classList.add("offcanvas-toggling"),
            P.off(document, "focusin.bs.offcanvas"),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.remove("show"),
            setTimeout(() => {
              this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._element.style.visibility = "hidden"),
                this._config.backdrop &&
                  document.body.classList.remove("offcanvas-backdrop"),
                this._config.scroll ||
                  ((document.body.style.overflow = "auto"),
                  ht(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight"),
                  ht(".sticky-top", "marginRight"),
                  ht("body", "paddingRight")),
                P.trigger(this._element, "hidden.bs.offcanvas"),
                this._element.classList.remove("offcanvas-toggling");
            }, r(this._element))));
      }
      _getConfig(t) {
        return (
          (t = {
            ...ft,
            ...q.getDataAttributes(this._element),
            ...("object" == typeof t ? t : {}),
          }),
          d("offcanvas", t, gt),
          t
        );
      }
      _enforceFocusOnElement(t) {
        P.off(document, "focusin.bs.offcanvas"),
          P.on(document, "focusin.bs.offcanvas", (e) => {
            document === e.target ||
              t === e.target ||
              t.contains(e.target) ||
              t.focus();
          }),
          t.focus();
      }
      _addEventListeners() {
        P.on(
          this._element,
          "click.dismiss.bs.offcanvas",
          '[data-bs-dismiss="offcanvas"]',
          () => this.hide()
        ),
          P.on(document, "keydown", (t) => {
            this._config.keyboard && "Escape" === t.key && this.hide();
          }),
          P.on(document, "click.bs.offcanvas.data-api", (t) => {
            const e = z.findOne(s(t.target));
            this._element.contains(t.target) ||
              e === this._element ||
              this.hide();
          });
      }
      static jQueryInterface(t) {
        return this.each(function () {
          const e =
            b.get(this, "bs.offcanvas") ||
            new mt(this, "object" == typeof t ? t : {});
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t](this);
          }
        });
      }
    }
    P.on(
      document,
      "click.bs.offcanvas.data-api",
      '[data-bs-toggle="offcanvas"]',
      function (t) {
        const e = o(this);
        if (
          (["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this))
        )
          return;
        P.one(e, "hidden.bs.offcanvas", () => {
          u(this) && this.focus();
        });
        const i = z.findOne(".offcanvas.show, .offcanvas-toggling");
        (i && i !== e) || (b.get(e, "bs.offcanvas") || new mt(e)).toggle(this);
      }
    ),
      P.on(window, "load.bs.offcanvas.data-api", () => {
        z.find(".offcanvas.show").forEach((t) =>
          (b.get(t, "bs.offcanvas") || new mt(t)).show()
        );
      }),
      y("offcanvas", mt);
    const vt = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      yt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&\/:?]*(?:[#\/?]|$))/i,
      _t =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+\/a-z]+=*$/i,
      bt = (t, e) => {
        const i = t.nodeName.toLowerCase();
        if (e.includes(i))
          return (
            !vt.has(i) || Boolean(yt.test(t.nodeValue) || _t.test(t.nodeValue))
          );
        const n = e.filter((t) => t instanceof RegExp);
        for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
        return !1;
      };
    function wt(t, e, i) {
      if (!t.length) return t;
      if (i && "function" == typeof i) return i(t);
      const n = new window.DOMParser().parseFromString(t, "text/html"),
        s = Object.keys(e),
        o = [].concat(...n.body.querySelectorAll("*"));
      for (let t = 0, i = o.length; t < i; t++) {
        const i = o[t],
          n = i.nodeName.toLowerCase();
        if (!s.includes(n)) {
          i.parentNode.removeChild(i);
          continue;
        }
        const r = [].concat(...i.attributes),
          a = [].concat(e["*"] || [], e[n] || []);
        r.forEach((t) => {
          bt(t, a) || i.removeAttribute(t.nodeName);
        });
      }
      return n.body.innerHTML;
    }
    const Tt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      xt = new Set(["sanitize", "allowList", "sanitizeFn"]),
      kt = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)",
      },
      St = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: v() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: v() ? "right" : "left",
      },
      Ct = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      Et = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip",
      };
    class At extends j {
      constructor(t, i) {
        if (void 0 === e)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(t),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.config = this._getConfig(i)),
          (this.tip = null),
          this._setListeners();
      }
      static get Default() {
        return Ct;
      }
      static get NAME() {
        return "tooltip";
      }
      static get DATA_KEY() {
        return "bs.tooltip";
      }
      static get Event() {
        return Et;
      }
      static get EVENT_KEY() {
        return ".bs.tooltip";
      }
      static get DefaultType() {
        return kt;
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle(t) {
        if (this._isEnabled)
          if (t) {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger.click = !e._activeTrigger.click),
              e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
          } else {
            if (this.getTipElement().classList.contains("show"))
              return void this._leave(null, this);
            this._enter(null, this);
          }
      }
      dispose() {
        clearTimeout(this._timeout),
          P.off(this._element, this.constructor.EVENT_KEY),
          P.off(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this.tip &&
            this.tip.parentNode &&
            this.tip.parentNode.removeChild(this.tip),
          (this._isEnabled = null),
          (this._timeout = null),
          (this._hoverState = null),
          (this._activeTrigger = null),
          this._popper && this._popper.destroy(),
          (this._popper = null),
          (this.config = null),
          (this.tip = null),
          super.dispose();
      }
      show() {
        if ("none" === this._element.style.display)
          throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        const t = P.trigger(this._element, this.constructor.Event.SHOW),
          n = h(this._element),
          s =
            null === n
              ? this._element.ownerDocument.documentElement.contains(
                  this._element
                )
              : n.contains(this._element);
        if (t.defaultPrevented || !s) return;
        const o = this.getTipElement(),
          a = i(this.constructor.NAME);
        o.setAttribute("id", a),
          this._element.setAttribute("aria-describedby", a),
          this.setContent(),
          this.config.animation && o.classList.add("fade");
        const l =
            "function" == typeof this.config.placement
              ? this.config.placement.call(this, o, this._element)
              : this.config.placement,
          d = this._getAttachment(l);
        this._addAttachmentClass(d);
        const u = this._getContainer();
        b.set(o, this.constructor.DATA_KEY, this),
          this._element.ownerDocument.documentElement.contains(this.tip) ||
            (u.appendChild(o),
            P.trigger(this._element, this.constructor.Event.INSERTED)),
          this._popper
            ? this._popper.update()
            : (this._popper = e.createPopper(
                this._element,
                o,
                this._getPopperConfig(d)
              )),
          o.classList.add("show");
        const p =
          "function" == typeof this.config.customClass
            ? this.config.customClass()
            : this.config.customClass;
        p && o.classList.add(...p.split(" ")),
          "ontouchstart" in document.documentElement &&
            [].concat(...document.body.children).forEach((t) => {
              P.on(t, "mouseover", function () {});
            });
        const f = () => {
          const t = this._hoverState;
          (this._hoverState = null),
            P.trigger(this._element, this.constructor.Event.SHOWN),
            "out" === t && this._leave(null, this);
        };
        if (this.tip.classList.contains("fade")) {
          const t = r(this.tip);
          P.one(this.tip, "transitionend", f), c(this.tip, t);
        } else f();
      }
      hide() {
        if (!this._popper) return;
        const t = this.getTipElement(),
          e = () => {
            this._isWithActiveTrigger() ||
              ("show" !== this._hoverState &&
                t.parentNode &&
                t.parentNode.removeChild(t),
              this._cleanTipClass(),
              this._element.removeAttribute("aria-describedby"),
              P.trigger(this._element, this.constructor.Event.HIDDEN),
              this._popper && (this._popper.destroy(), (this._popper = null)));
          };
        if (
          !P.trigger(this._element, this.constructor.Event.HIDE)
            .defaultPrevented
        ) {
          if (
            (t.classList.remove("show"),
            "ontouchstart" in document.documentElement &&
              []
                .concat(...document.body.children)
                .forEach((t) => P.off(t, "mouseover", f)),
            (this._activeTrigger.click = !1),
            (this._activeTrigger.focus = !1),
            (this._activeTrigger.hover = !1),
            this.tip.classList.contains("fade"))
          ) {
            const i = r(t);
            P.one(t, "transitionend", e), c(t, i);
          } else e();
          this._hoverState = "";
        }
      }
      update() {
        null !== this._popper && this._popper.update();
      }
      isWithContent() {
        return Boolean(this.getTitle());
      }
      getTipElement() {
        if (this.tip) return this.tip;
        const t = document.createElement("div");
        return (
          (t.innerHTML = this.config.template),
          (this.tip = t.children[0]),
          this.tip
        );
      }
      setContent() {
        const t = this.getTipElement();
        this.setElementContent(z.findOne(".tooltip-inner", t), this.getTitle()),
          t.classList.remove("fade", "show");
      }
      setElementContent(t, e) {
        if (null !== t)
          return "object" == typeof e && l(e)
            ? (e.jquery && (e = e[0]),
              void (this.config.html
                ? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
                : (t.textContent = e.textContent)))
            : void (this.config.html
                ? (this.config.sanitize &&
                    (e = wt(e, this.config.allowList, this.config.sanitizeFn)),
                  (t.innerHTML = e))
                : (t.textContent = e));
      }
      getTitle() {
        let t = this._element.getAttribute("data-bs-original-title");
        return (
          t ||
            (t =
              "function" == typeof this.config.title
                ? this.config.title.call(this._element)
                : this.config.title),
          t
        );
      }
      updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
      _initializeOnDelegatedTarget(t, e) {
        const i = this.constructor.DATA_KEY;
        return (
          (e = e || b.get(t.delegateTarget, i)) ||
            ((e = new this.constructor(
              t.delegateTarget,
              this._getDelegateConfig()
            )),
            b.set(t.delegateTarget, i, e)),
          e
        );
      }
      _getOffset() {
        const { offset: t } = this.config;
        return "string" == typeof t
          ? t.split(",").map((t) => Number.parseInt(t, 10))
          : "function" == typeof t
          ? (e) => t(e, this._element)
          : t;
      }
      _getPopperConfig(t) {
        const e = {
          placement: t,
          modifiers: [
            {
              name: "flip",
              options: {
                altBoundary: !0,
                fallbackPlacements: this.config.fallbackPlacements,
              },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this.config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "onChange",
              enabled: !0,
              phase: "afterWrite",
              fn: (t) => this._handlePopperPlacementChange(t),
            },
          ],
          onFirstUpdate: (t) => {
            t.options.placement !== t.placement &&
              this._handlePopperPlacementChange(t);
          },
        };
        return {
          ...e,
          ...("function" == typeof this.config.popperConfig
            ? this.config.popperConfig(e)
            : this.config.popperConfig),
        };
      }
      _addAttachmentClass(t) {
        this.getTipElement().classList.add(
          "bs-tooltip-" + this.updateAttachment(t)
        );
      }
      _getContainer() {
        return !1 === this.config.container
          ? document.body
          : l(this.config.container)
          ? this.config.container
          : z.findOne(this.config.container);
      }
      _getAttachment(t) {
        return St[t.toUpperCase()];
      }
      _setListeners() {
        this.config.trigger.split(" ").forEach((t) => {
          if ("click" === t)
            P.on(
              this._element,
              this.constructor.Event.CLICK,
              this.config.selector,
              (t) => this.toggle(t)
            );
          else if ("manual" !== t) {
            const e =
                "hover" === t
                  ? this.constructor.Event.MOUSEENTER
                  : this.constructor.Event.FOCUSIN,
              i =
                "hover" === t
                  ? this.constructor.Event.MOUSELEAVE
                  : this.constructor.Event.FOCUSOUT;
            P.on(this._element, e, this.config.selector, (t) => this._enter(t)),
              P.on(this._element, i, this.config.selector, (t) =>
                this._leave(t)
              );
          }
        }),
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
          P.on(
            this._element.closest(".modal"),
            "hide.bs.modal",
            this._hideModalHandler
          ),
          this.config.selector
            ? (this.config = {
                ...this.config,
                trigger: "manual",
                selector: "",
              })
            : this._fixTitle();
      }
      _fixTitle() {
        const t = this._element.getAttribute("title"),
          e = typeof this._element.getAttribute("data-bs-original-title");
        (t || "string" !== e) &&
          (this._element.setAttribute("data-bs-original-title", t || ""),
          !t ||
            this._element.getAttribute("aria-label") ||
            this._element.textContent ||
            this._element.setAttribute("aria-label", t),
          this._element.setAttribute("title", ""));
      }
      _enter(t, e) {
        (e = this._initializeOnDelegatedTarget(t, e)),
          t &&
            (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
          e.getTipElement().classList.contains("show") ||
          "show" === e._hoverState
            ? (e._hoverState = "show")
            : (clearTimeout(e._timeout),
              (e._hoverState = "show"),
              e.config.delay && e.config.delay.show
                ? (e._timeout = setTimeout(() => {
                    "show" === e._hoverState && e.show();
                  }, e.config.delay.show))
                : e.show());
      }
      _leave(t, e) {
        (e = this._initializeOnDelegatedTarget(t, e)),
          t &&
            (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
              e._element.contains(t.relatedTarget)),
          e._isWithActiveTrigger() ||
            (clearTimeout(e._timeout),
            (e._hoverState = "out"),
            e.config.delay && e.config.delay.hide
              ? (e._timeout = setTimeout(() => {
                  "out" === e._hoverState && e.hide();
                }, e.config.delay.hide))
              : e.hide());
      }
      _isWithActiveTrigger() {
        for (const t in this._activeTrigger)
          if (this._activeTrigger[t]) return !0;
        return !1;
      }
      _getConfig(t) {
        const e = q.getDataAttributes(this._element);
        return (
          Object.keys(e).forEach((t) => {
            xt.has(t) && delete e[t];
          }),
          t &&
            "object" == typeof t.container &&
            t.container.jquery &&
            (t.container = t.container[0]),
          "number" ==
            typeof (t = {
              ...this.constructor.Default,
              ...e,
              ...("object" == typeof t && t ? t : {}),
            }).delay && (t.delay = { show: t.delay, hide: t.delay }),
          "number" == typeof t.title && (t.title = t.title.toString()),
          "number" == typeof t.content && (t.content = t.content.toString()),
          d("tooltip", t, this.constructor.DefaultType),
          t.sanitize &&
            (t.template = wt(t.template, t.allowList, t.sanitizeFn)),
          t
        );
      }
      _getDelegateConfig() {
        const t = {};
        if (this.config)
          for (const e in this.config)
            this.constructor.Default[e] !== this.config[e] &&
              (t[e] = this.config[e]);
        return t;
      }
      _cleanTipClass() {
        const t = this.getTipElement(),
          e = t.getAttribute("class").match(Tt);
        null !== e &&
          e.length > 0 &&
          e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
      }
      _handlePopperPlacementChange(t) {
        const { state: e } = t;
        e &&
          ((this.tip = e.elements.popper),
          this._cleanTipClass(),
          this._addAttachmentClass(this._getAttachment(e.placement)));
      }
      static jQueryInterface(t) {
        return this.each(function () {
          let e = b.get(this, "bs.tooltip");
          const i = "object" == typeof t && t;
          if (
            (e || !/dispose|hide/.test(t)) &&
            (e || (e = new At(this, i)), "string" == typeof t)
          ) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    y("tooltip", At);
    const Dt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Ot = {
        ...At.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      },
      Lt = { ...At.DefaultType, content: "(string|element|function)" },
      $t = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover",
      };
    class Nt extends At {
      static get Default() {
        return Ot;
      }
      static get NAME() {
        return "popover";
      }
      static get DATA_KEY() {
        return "bs.popover";
      }
      static get Event() {
        return $t;
      }
      static get EVENT_KEY() {
        return ".bs.popover";
      }
      static get DefaultType() {
        return Lt;
      }
      isWithContent() {
        return this.getTitle() || this._getContent();
      }
      setContent() {
        const t = this.getTipElement();
        this.setElementContent(
          z.findOne(".popover-header", t),
          this.getTitle()
        );
        let e = this._getContent();
        "function" == typeof e && (e = e.call(this._element)),
          this.setElementContent(z.findOne(".popover-body", t), e),
          t.classList.remove("fade", "show");
      }
      _addAttachmentClass(t) {
        this.getTipElement().classList.add(
          "bs-popover-" + this.updateAttachment(t)
        );
      }
      _getContent() {
        return (
          this._element.getAttribute("data-bs-content") || this.config.content
        );
      }
      _cleanTipClass() {
        const t = this.getTipElement(),
          e = t.getAttribute("class").match(Dt);
        null !== e &&
          e.length > 0 &&
          e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
      }
      static jQueryInterface(t) {
        return this.each(function () {
          let e = b.get(this, "bs.popover");
          const i = "object" == typeof t ? t : null;
          if (
            (e || !/dispose|hide/.test(t)) &&
            (e || ((e = new Nt(this, i)), b.set(this, "bs.popover", e)),
            "string" == typeof t)
          ) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    y("popover", Nt);
    const Pt = { offset: 10, method: "auto", target: "" },
      jt = { offset: "number", method: "string", target: "(string|element)" };
    class Mt extends j {
      constructor(t, e) {
        super(t),
          (this._scrollElement =
            "BODY" === this._element.tagName ? window : this._element),
          (this._config = this._getConfig(e)),
          (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          P.on(this._scrollElement, "scroll.bs.scrollspy", () =>
            this._process()
          ),
          this.refresh(),
          this._process();
      }
      static get Default() {
        return Pt;
      }
      static get DATA_KEY() {
        return "bs.scrollspy";
      }
      refresh() {
        const t =
            this._scrollElement === this._scrollElement.window
              ? "offset"
              : "position",
          e = "auto" === this._config.method ? t : this._config.method,
          i = "position" === e ? this._getScrollTop() : 0;
        (this._offsets = []),
          (this._targets = []),
          (this._scrollHeight = this._getScrollHeight()),
          z
            .find(this._selector)
            .map((t) => {
              const n = s(t),
                o = n ? z.findOne(n) : null;
              if (o) {
                const t = o.getBoundingClientRect();
                if (t.width || t.height) return [q[e](o).top + i, n];
              }
              return null;
            })
            .filter((t) => t)
            .sort((t, e) => t[0] - e[0])
            .forEach((t) => {
              this._offsets.push(t[0]), this._targets.push(t[1]);
            });
      }
      dispose() {
        super.dispose(),
          P.off(this._scrollElement, ".bs.scrollspy"),
          (this._scrollElement = null),
          (this._config = null),
          (this._selector = null),
          (this._offsets = null),
          (this._targets = null),
          (this._activeTarget = null),
          (this._scrollHeight = null);
      }
      _getConfig(t) {
        if (
          "string" !=
            typeof (t = { ...Pt, ...("object" == typeof t && t ? t : {}) })
              .target &&
          l(t.target)
        ) {
          let { id: e } = t.target;
          e || ((e = i("scrollspy")), (t.target.id = e)), (t.target = "#" + e);
        }
        return d("scrollspy", t, jt), t;
      }
      _getScrollTop() {
        return this._scrollElement === window
          ? this._scrollElement.pageYOffset
          : this._scrollElement.scrollTop;
      }
      _getScrollHeight() {
        return (
          this._scrollElement.scrollHeight ||
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }
      _getOffsetHeight() {
        return this._scrollElement === window
          ? window.innerHeight
          : this._scrollElement.getBoundingClientRect().height;
      }
      _process() {
        const t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          i = this._config.offset + e - this._getOffsetHeight();
        if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
          const t = this._targets[this._targets.length - 1];
          this._activeTarget !== t && this._activate(t);
        } else {
          if (
            this._activeTarget &&
            t < this._offsets[0] &&
            this._offsets[0] > 0
          )
            return (this._activeTarget = null), void this._clear();
          for (let e = this._offsets.length; e--; )
            this._activeTarget !== this._targets[e] &&
              t >= this._offsets[e] &&
              (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
              this._activate(this._targets[e]);
        }
      }
      _activate(t) {
        (this._activeTarget = t), this._clear();
        const e = this._selector
            .split(",")
            .map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
          i = z.findOne(e.join(","));
        i.classList.contains("dropdown-item")
          ? (z
              .findOne(".dropdown-toggle", i.closest(".dropdown"))
              .classList.add("active"),
            i.classList.add("active"))
          : (i.classList.add("active"),
            z.parents(i, ".nav, .list-group").forEach((t) => {
              z
                .prev(t, ".nav-link, .list-group-item")
                .forEach((t) => t.classList.add("active")),
                z.prev(t, ".nav-item").forEach((t) => {
                  z.children(t, ".nav-link").forEach((t) =>
                    t.classList.add("active")
                  );
                });
            })),
          P.trigger(this._scrollElement, "activate.bs.scrollspy", {
            relatedTarget: t,
          });
      }
      _clear() {
        z.find(this._selector)
          .filter((t) => t.classList.contains("active"))
          .forEach((t) => t.classList.remove("active"));
      }
      static jQueryInterface(t) {
        return this.each(function () {
          let e = b.get(this, "bs.scrollspy");
          if (
            (e || (e = new Mt(this, "object" == typeof t && t)),
            "string" == typeof t)
          ) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    P.on(window, "load.bs.scrollspy.data-api", () => {
      z.find('[data-bs-spy="scroll"]').forEach(
        (t) => new Mt(t, q.getDataAttributes(t))
      );
    }),
      y("scrollspy", Mt);
    class Ht extends j {
      static get DATA_KEY() {
        return "bs.tab";
      }
      show() {
        if (
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
            this._element.classList.contains("active")) ||
          p(this._element)
        )
          return;
        let t;
        const e = o(this._element),
          i = this._element.closest(".nav, .list-group");
        if (i) {
          const e =
            "UL" === i.nodeName || "OL" === i.nodeName
              ? ":scope > li > .active"
              : ".active";
          t = (t = z.find(e, i))[t.length - 1];
        }
        const n = t
          ? P.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
          : null;
        if (
          P.trigger(this._element, "show.bs.tab", { relatedTarget: t })
            .defaultPrevented ||
          (null !== n && n.defaultPrevented)
        )
          return;
        this._activate(this._element, i);
        const s = () => {
          P.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
            P.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
        };
        e ? this._activate(e, e.parentNode, s) : s();
      }
      _activate(t, e, i) {
        const n = (
            !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
              ? z.children(e, ".active")
              : z.find(":scope > li > .active", e)
          )[0],
          s = i && n && n.classList.contains("fade"),
          o = () => this._transitionComplete(t, n, i);
        if (n && s) {
          const t = r(n);
          n.classList.remove("show"), P.one(n, "transitionend", o), c(n, t);
        } else o();
      }
      _transitionComplete(t, e, i) {
        if (e) {
          e.classList.remove("active");
          const t = z.findOne(":scope > .dropdown-menu .active", e.parentNode);
          t && t.classList.remove("active"),
            "tab" === e.getAttribute("role") &&
              e.setAttribute("aria-selected", !1);
        }
        t.classList.add("active"),
          "tab" === t.getAttribute("role") &&
            t.setAttribute("aria-selected", !0),
          g(t),
          t.classList.contains("fade") && t.classList.add("show"),
          t.parentNode &&
            t.parentNode.classList.contains("dropdown-menu") &&
            (t.closest(".dropdown") &&
              z
                .find(".dropdown-toggle")
                .forEach((t) => t.classList.add("active")),
            t.setAttribute("aria-expanded", !0)),
          i && i();
      }
      static jQueryInterface(t) {
        return this.each(function () {
          const e = b.get(this, "bs.tab") || new Ht(this);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        });
      }
    }
    P.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (t) {
        t.preventDefault(), (b.get(this, "bs.tab") || new Ht(this)).show();
      }
    ),
      y("tab", Ht);
    const It = { animation: "boolean", autohide: "boolean", delay: "number" },
      Rt = { animation: !0, autohide: !0, delay: 5e3 };
    class qt extends j {
      constructor(t, e) {
        super(t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      static get DefaultType() {
        return It;
      }
      static get Default() {
        return Rt;
      }
      static get DATA_KEY() {
        return "bs.toast";
      }
      show() {
        if (P.trigger(this._element, "show.bs.toast").defaultPrevented) return;
        this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade");
        const t = () => {
          this._element.classList.remove("showing"),
            this._element.classList.add("show"),
            P.trigger(this._element, "shown.bs.toast"),
            this._config.autohide &&
              (this._timeout = setTimeout(() => {
                this.hide();
              }, this._config.delay));
        };
        if (
          (this._element.classList.remove("hide"),
          g(this._element),
          this._element.classList.add("showing"),
          this._config.animation)
        ) {
          const e = r(this._element);
          P.one(this._element, "transitionend", t), c(this._element, e);
        } else t();
      }
      hide() {
        if (!this._element.classList.contains("show")) return;
        if (P.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
        const t = () => {
          this._element.classList.add("hide"),
            P.trigger(this._element, "hidden.bs.toast");
        };
        if ((this._element.classList.remove("show"), this._config.animation)) {
          const e = r(this._element);
          P.one(this._element, "transitionend", t), c(this._element, e);
        } else t();
      }
      dispose() {
        this._clearTimeout(),
          this._element.classList.contains("show") &&
            this._element.classList.remove("show"),
          P.off(this._element, "click.dismiss.bs.toast"),
          super.dispose(),
          (this._config = null);
      }
      _getConfig(t) {
        return (
          (t = {
            ...Rt,
            ...q.getDataAttributes(this._element),
            ...("object" == typeof t && t ? t : {}),
          }),
          d("toast", t, this.constructor.DefaultType),
          t
        );
      }
      _setListeners() {
        P.on(
          this._element,
          "click.dismiss.bs.toast",
          '[data-bs-dismiss="toast"]',
          () => this.hide()
        );
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(t) {
        return this.each(function () {
          let e = b.get(this, "bs.toast");
          if (
            (e || (e = new qt(this, "object" == typeof t && t)),
            "string" == typeof t)
          ) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t](this);
          }
        });
      }
    }
    return (
      y("toast", qt),
      {
        Alert: M,
        Button: H,
        Carousel: V,
        Collapse: G,
        Dropdown: at,
        Modal: dt,
        Offcanvas: mt,
        Popover: Nt,
        ScrollSpy: Mt,
        Tab: Ht,
        Toast: qt,
        Tooltip: At,
      }
    );
  }),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "undefined" != typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (t) {
    "use strict";
    var e = window.Slick || {};
    ((e = (function () {
      var e = 0;
      return function (i, n) {
        var s,
          o = this;
        (o.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: t(i),
          appendDots: t(i),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, i) {
            return t('<button type="button" />').text(i + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (o.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          t.extend(o, o.initials),
          (o.activeBreakpoint = null),
          (o.animType = null),
          (o.animProp = null),
          (o.breakpoints = []),
          (o.breakpointSettings = []),
          (o.cssTransitions = !1),
          (o.focussed = !1),
          (o.interrupted = !1),
          (o.hidden = "hidden"),
          (o.paused = !0),
          (o.positionProp = null),
          (o.respondTo = null),
          (o.rowCount = 1),
          (o.shouldClick = !0),
          (o.$slider = t(i)),
          (o.$slidesCache = null),
          (o.transformType = null),
          (o.transitionType = null),
          (o.visibilityChange = "visibilitychange"),
          (o.windowWidth = 0),
          (o.windowTimer = null),
          (s = t(i).data("slick") || {}),
          (o.options = t.extend({}, o.defaults, n, s)),
          (o.currentSlide = o.options.initialSlide),
          (o.originalSettings = o.options),
          void 0 !== document.mozHidden
            ? ((o.hidden = "mozHidden"),
              (o.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((o.hidden = "webkitHidden"),
              (o.visibilityChange = "webkitvisibilitychange")),
          (o.autoPlay = t.proxy(o.autoPlay, o)),
          (o.autoPlayClear = t.proxy(o.autoPlayClear, o)),
          (o.autoPlayIterator = t.proxy(o.autoPlayIterator, o)),
          (o.changeSlide = t.proxy(o.changeSlide, o)),
          (o.clickHandler = t.proxy(o.clickHandler, o)),
          (o.selectHandler = t.proxy(o.selectHandler, o)),
          (o.setPosition = t.proxy(o.setPosition, o)),
          (o.swipeHandler = t.proxy(o.swipeHandler, o)),
          (o.dragHandler = t.proxy(o.dragHandler, o)),
          (o.keyHandler = t.proxy(o.keyHandler, o)),
          (o.instanceUid = e++),
          (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          o.registerBreakpoints(),
          o.init(!0);
      };
    })()).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (e.prototype.addSlide = e.prototype.slickAdd =
        function (e, i, n) {
          var s = this;
          if ("boolean" == typeof i) (n = i), (i = null);
          else if (i < 0 || i >= s.slideCount) return !1;
          s.unload(),
            "number" == typeof i
              ? 0 === i && 0 === s.$slides.length
                ? t(e).appendTo(s.$slideTrack)
                : n
                ? t(e).insertBefore(s.$slides.eq(i))
                : t(e).insertAfter(s.$slides.eq(i))
              : !0 === n
              ? t(e).prependTo(s.$slideTrack)
              : t(e).appendTo(s.$slideTrack),
            (s.$slides = s.$slideTrack.children(this.options.slide)),
            s.$slideTrack.children(this.options.slide).detach(),
            s.$slideTrack.append(s.$slides),
            s.$slides.each(function (e, i) {
              t(i).attr("data-slick-index", e);
            }),
            (s.$slidesCache = s.$slides),
            s.reinit();
        }),
      (e.prototype.animateHeight = function () {
        var t = this;
        if (
          1 === t.options.slidesToShow &&
          !0 === t.options.adaptiveHeight &&
          !1 === t.options.vertical
        ) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.animate({ height: e }, t.options.speed);
        }
      }),
      (e.prototype.animateSlide = function (e, i) {
        var n = {},
          s = this;
        s.animateHeight(),
          !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
          !1 === s.transformsEnabled
            ? !1 === s.options.vertical
              ? s.$slideTrack.animate(
                  { left: e },
                  s.options.speed,
                  s.options.easing,
                  i
                )
              : s.$slideTrack.animate(
                  { top: e },
                  s.options.speed,
                  s.options.easing,
                  i
                )
            : !1 === s.cssTransitions
            ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
              t({ animStart: s.currentLeft }).animate(
                { animStart: e },
                {
                  duration: s.options.speed,
                  easing: s.options.easing,
                  step: function (t) {
                    (t = Math.ceil(t)),
                      !1 === s.options.vertical
                        ? ((n[s.animType] = "translate(" + t + "px, 0px)"),
                          s.$slideTrack.css(n))
                        : ((n[s.animType] = "translate(0px," + t + "px)"),
                          s.$slideTrack.css(n));
                  },
                  complete: function () {
                    i && i.call();
                  },
                }
              ))
            : (s.applyTransition(),
              (e = Math.ceil(e)),
              !1 === s.options.vertical
                ? (n[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
                : (n[s.animType] = "translate3d(0px," + e + "px, 0px)"),
              s.$slideTrack.css(n),
              i &&
                setTimeout(function () {
                  s.disableTransition(), i.call();
                }, s.options.speed));
      }),
      (e.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e;
      }),
      (e.prototype.asNavFor = function (e) {
        var i = this.getNavTarget();
        null !== i &&
          "object" == typeof i &&
          i.each(function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0);
          });
      }),
      (e.prototype.applyTransition = function (t) {
        var e = this,
          i = {};
        !1 === e.options.fade
          ? (i[e.transitionType] =
              e.transformType +
              " " +
              e.options.speed +
              "ms " +
              e.options.cssEase)
          : (i[e.transitionType] =
              "opacity " + e.options.speed + "ms " + e.options.cssEase),
          !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
      }),
      (e.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(),
          t.slideCount > t.options.slidesToShow &&
            (t.autoPlayTimer = setInterval(
              t.autoPlayIterator,
              t.options.autoplaySpeed
            ));
      }),
      (e.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (e.prototype.autoPlayIterator = function () {
        var t = this,
          e = t.currentSlide + t.options.slidesToScroll;
        t.paused ||
          t.interrupted ||
          t.focussed ||
          (!1 === t.options.infinite &&
            (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
              ? (t.direction = 0)
              : 0 === t.direction &&
                ((e = t.currentSlide - t.options.slidesToScroll),
                t.currentSlide - 1 == 0 && (t.direction = 1))),
          t.slideHandler(e));
      }),
      (e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows &&
          ((e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow")),
          (e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow")),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite &&
                e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : e.$prevArrow
                .add(e.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (e.prototype.buildDots = function () {
        var e,
          i,
          n = this;
        if (!0 === n.options.dots) {
          for (
            n.$slider.addClass("slick-dotted"),
              i = t("<ul />").addClass(n.options.dotsClass),
              e = 0;
            e <= n.getDotCount();
            e += 1
          )
            i.append(
              t("<li />").append(n.options.customPaging.call(this, n, e))
            );
          (n.$dots = i.appendTo(n.options.appendDots)),
            n.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (e.prototype.buildOut = function () {
        var e = this;
        (e.$slides = e.$slider
          .children(e.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function (e, i) {
            t(i)
              .attr("data-slick-index", e)
              .data("originalStyling", t(i).attr("style") || "");
          }),
          e.$slider.addClass("slick-slider"),
          (e.$slideTrack =
            0 === e.slideCount
              ? t('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          e.$slideTrack.css("opacity", 0),
          (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
            (e.options.slidesToScroll = 1),
          t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          !0 === e.options.draggable && e.$list.addClass("draggable");
      }),
      (e.prototype.buildRows = function () {
        var t,
          e,
          i,
          n,
          s,
          o,
          r,
          a = this;
        if (
          ((n = document.createDocumentFragment()),
          (o = a.$slider.children()),
          a.options.rows > 1)
        ) {
          for (
            r = a.options.slidesPerRow * a.options.rows,
              s = Math.ceil(o.length / r),
              t = 0;
            t < s;
            t++
          ) {
            var l = document.createElement("div");
            for (e = 0; e < a.options.rows; e++) {
              var c = document.createElement("div");
              for (i = 0; i < a.options.slidesPerRow; i++) {
                var d = t * r + (e * a.options.slidesPerRow + i);
                o.get(d) && c.appendChild(o.get(d));
              }
              l.appendChild(c);
            }
            n.appendChild(l);
          }
          a.$slider.empty().append(n),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (e.prototype.checkResponsive = function (e, i) {
        var n,
          s,
          o,
          r = this,
          a = !1,
          l = r.$slider.width(),
          c = window.innerWidth || t(window).width();
        if (
          ("window" === r.respondTo
            ? (o = c)
            : "slider" === r.respondTo
            ? (o = l)
            : "min" === r.respondTo && (o = Math.min(c, l)),
          r.options.responsive &&
            r.options.responsive.length &&
            null !== r.options.responsive)
        ) {
          for (n in ((s = null), r.breakpoints))
            r.breakpoints.hasOwnProperty(n) &&
              (!1 === r.originalSettings.mobileFirst
                ? o < r.breakpoints[n] && (s = r.breakpoints[n])
                : o > r.breakpoints[n] && (s = r.breakpoints[n]));
          null !== s
            ? null !== r.activeBreakpoint
              ? (s !== r.activeBreakpoint || i) &&
                ((r.activeBreakpoint = s),
                "unslick" === r.breakpointSettings[s]
                  ? r.unslick(s)
                  : ((r.options = t.extend(
                      {},
                      r.originalSettings,
                      r.breakpointSettings[s]
                    )),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e)),
                (a = s))
              : ((r.activeBreakpoint = s),
                "unslick" === r.breakpointSettings[s]
                  ? r.unslick(s)
                  : ((r.options = t.extend(
                      {},
                      r.originalSettings,
                      r.breakpointSettings[s]
                    )),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e)),
                (a = s))
            : null !== r.activeBreakpoint &&
              ((r.activeBreakpoint = null),
              (r.options = r.originalSettings),
              !0 === e && (r.currentSlide = r.options.initialSlide),
              r.refresh(e),
              (a = s)),
            e || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
        }
      }),
      (e.prototype.changeSlide = function (e, i) {
        var n,
          s,
          o = this,
          r = t(e.currentTarget);
        switch (
          (r.is("a") && e.preventDefault(),
          r.is("li") || (r = r.closest("li")),
          (n =
            o.slideCount % o.options.slidesToScroll != 0
              ? 0
              : (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
          e.data.message)
        ) {
          case "previous":
            (s =
              0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide - s, !1, i);
            break;
          case "next":
            (s = 0 === n ? o.options.slidesToScroll : n),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide + s, !1, i);
            break;
          case "index":
            var a =
              0 === e.data.index
                ? 0
                : e.data.index || r.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(a), !1, i),
              r.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (e.prototype.checkNavigable = function (t) {
        var e, i;
        if (((i = 0), t > (e = this.getNavigableIndexes())[e.length - 1]))
          t = e[e.length - 1];
        else
          for (var n in e) {
            if (t < e[n]) {
              t = i;
              break;
            }
            i = e[n];
          }
        return t;
      }),
      (e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots &&
          null !== e.$dots &&
          (t("li", e.$dots)
            .off("click.slick", e.changeSlide)
            .off("mouseenter.slick", t.proxy(e.interrupt, e, !0))
            .off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
          !0 === e.options.accessibility &&
            e.$dots.off("keydown.slick", e.keyHandler)),
          e.$slider.off("focus.slick blur.slick"),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
            !0 === e.options.accessibility &&
              (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
              e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
          e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
          e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
          e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
          e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
          e.$list.off("click.slick", e.clickHandler),
          t(document).off(e.visibilityChange, e.visibility),
          e.cleanUpSlideEvents(),
          !0 === e.options.accessibility &&
            e.$list.off("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            t(e.$slideTrack).children().off("click.slick", e.selectHandler),
          t(window).off(
            "orientationchange.slick.slick-" + e.instanceUid,
            e.orientationChange
          ),
          t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
          t("[draggable!=true]", e.$slideTrack).off(
            "dragstart",
            e.preventDefault
          ),
          t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
      }),
      (e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
          e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
      }),
      (e.prototype.cleanUpRows = function () {
        var t,
          e = this;
        e.options.rows > 1 &&
          ((t = e.$slides.children().children()).removeAttr("style"),
          e.$slider.empty().append(t));
      }),
      (e.prototype.clickHandler = function (t) {
        !1 === this.shouldClick &&
          (t.stopImmediatePropagation(),
          t.stopPropagation(),
          t.preventDefault());
      }),
      (e.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(),
          (i.touchObject = {}),
          i.cleanUpEvents(),
          t(".slick-cloned", i.$slider).detach(),
          i.$dots && i.$dots.remove(),
          i.$prevArrow &&
            i.$prevArrow.length &&
            (i.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
          i.$nextArrow &&
            i.$nextArrow.length &&
            (i.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
          i.$slides &&
            (i.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                t(this).attr("style", t(this).data("originalStyling"));
              }),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.detach(),
            i.$list.detach(),
            i.$slider.append(i.$slides)),
          i.cleanUpRows(),
          i.$slider.removeClass("slick-slider"),
          i.$slider.removeClass("slick-initialized"),
          i.$slider.removeClass("slick-dotted"),
          (i.unslicked = !0),
          e || i.$slider.trigger("destroy", [i]);
      }),
      (e.prototype.disableTransition = function (t) {
        var e = this,
          i = {};
        (i[e.transitionType] = ""),
          !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
      }),
      (e.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions
          ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
            i.$slides
              .eq(t)
              .animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
          : (i.applyTransition(t),
            i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
            e &&
              setTimeout(function () {
                i.disableTransition(t), e.call();
              }, i.options.speed));
      }),
      (e.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions
          ? e.$slides
              .eq(t)
              .animate(
                { opacity: 0, zIndex: e.options.zIndex - 2 },
                e.options.speed,
                e.options.easing
              )
          : (e.applyTransition(t),
            e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
      }),
      (e.prototype.filterSlides = e.prototype.slickFilter =
        function (t) {
          var e = this;
          null !== t &&
            ((e.$slidesCache = e.$slides),
            e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.filter(t).appendTo(e.$slideTrack),
            e.reinit());
        }),
      (e.prototype.focusHandler = function () {
        var e = this;
        e.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function () {
              e.options.pauseOnFocus &&
                ((e.focussed = n.is(":focus")), e.autoPlay());
            }, 0);
          });
      }),
      (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (e.prototype.getDotCount = function () {
        var t = this,
          e = 0,
          i = 0,
          n = 0;
        if (!0 === t.options.infinite)
          if (t.slideCount <= t.options.slidesToShow) ++n;
          else
            for (; e < t.slideCount; )
              ++n,
                (e = i + t.options.slidesToScroll),
                (i +=
                  t.options.slidesToScroll <= t.options.slidesToShow
                    ? t.options.slidesToScroll
                    : t.options.slidesToShow);
        else if (!0 === t.options.centerMode) n = t.slideCount;
        else if (t.options.asNavFor)
          for (; e < t.slideCount; )
            ++n,
              (e = i + t.options.slidesToScroll),
              (i +=
                t.options.slidesToScroll <= t.options.slidesToShow
                  ? t.options.slidesToScroll
                  : t.options.slidesToShow);
        else
          n =
            1 +
            Math.ceil(
              (t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll
            );
        return n - 1;
      }),
      (e.prototype.getLeft = function (t) {
        var e,
          i,
          n,
          s,
          o = this,
          r = 0;
        return (
          (o.slideOffset = 0),
          (i = o.$slides.first().outerHeight(!0)),
          !0 === o.options.infinite
            ? (o.slideCount > o.options.slidesToShow &&
                ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
                (s = -1),
                !0 === o.options.vertical &&
                  !0 === o.options.centerMode &&
                  (2 === o.options.slidesToShow
                    ? (s = -1.5)
                    : 1 === o.options.slidesToShow && (s = -2)),
                (r = i * o.options.slidesToShow * s)),
              o.slideCount % o.options.slidesToScroll != 0 &&
                t + o.options.slidesToScroll > o.slideCount &&
                o.slideCount > o.options.slidesToShow &&
                (t > o.slideCount
                  ? ((o.slideOffset =
                      (o.options.slidesToShow - (t - o.slideCount)) *
                      o.slideWidth *
                      -1),
                    (r =
                      (o.options.slidesToShow - (t - o.slideCount)) * i * -1))
                  : ((o.slideOffset =
                      (o.slideCount % o.options.slidesToScroll) *
                      o.slideWidth *
                      -1),
                    (r = (o.slideCount % o.options.slidesToScroll) * i * -1))))
            : t + o.options.slidesToShow > o.slideCount &&
              ((o.slideOffset =
                (t + o.options.slidesToShow - o.slideCount) * o.slideWidth),
              (r = (t + o.options.slidesToShow - o.slideCount) * i)),
          o.slideCount <= o.options.slidesToShow &&
            ((o.slideOffset = 0), (r = 0)),
          !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
            ? (o.slideOffset =
                (o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 -
                (o.slideWidth * o.slideCount) / 2)
            : !0 === o.options.centerMode && !0 === o.options.infinite
            ? (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2) -
                o.slideWidth)
            : !0 === o.options.centerMode &&
              ((o.slideOffset = 0),
              (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
          (e =
            !1 === o.options.vertical
              ? t * o.slideWidth * -1 + o.slideOffset
              : t * i * -1 + r),
          !0 === o.options.variableWidth &&
            ((n =
              o.slideCount <= o.options.slidesToShow ||
              !1 === o.options.infinite
                ? o.$slideTrack.children(".slick-slide").eq(t)
                : o.$slideTrack
                    .children(".slick-slide")
                    .eq(t + o.options.slidesToShow)),
            (e =
              !0 === o.options.rtl
                ? n[0]
                  ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width())
                  : 0
                : n[0]
                ? -1 * n[0].offsetLeft
                : 0),
            !0 === o.options.centerMode &&
              ((n =
                o.slideCount <= o.options.slidesToShow ||
                !1 === o.options.infinite
                  ? o.$slideTrack.children(".slick-slide").eq(t)
                  : o.$slideTrack
                      .children(".slick-slide")
                      .eq(t + o.options.slidesToShow + 1)),
              (e =
                !0 === o.options.rtl
                  ? n[0]
                    ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width())
                    : 0
                  : n[0]
                  ? -1 * n[0].offsetLeft
                  : 0),
              (e += (o.$list.width() - n.outerWidth()) / 2))),
          e
        );
      }),
      (e.prototype.getOption = e.prototype.slickGetOption =
        function (t) {
          return this.options[t];
        }),
      (e.prototype.getNavigableIndexes = function () {
        var t,
          e = this,
          i = 0,
          n = 0,
          s = [];
        for (
          !1 === e.options.infinite
            ? (t = e.slideCount)
            : ((i = -1 * e.options.slidesToScroll),
              (n = -1 * e.options.slidesToScroll),
              (t = 2 * e.slideCount));
          i < t;

        )
          s.push(i),
            (i = n + e.options.slidesToScroll),
            (n +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow);
        return s;
      }),
      (e.prototype.getSlick = function () {
        return this;
      }),
      (e.prototype.getSlideCount = function () {
        var e,
          i,
          n = this;
        return (
          (i =
            !0 === n.options.centerMode
              ? n.slideWidth * Math.floor(n.options.slidesToShow / 2)
              : 0),
          !0 === n.options.swipeToSlide
            ? (n.$slideTrack.find(".slick-slide").each(function (s, o) {
                if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft)
                  return (e = o), !1;
              }),
              Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1)
            : n.options.slidesToScroll
        );
      }),
      (e.prototype.goTo = e.prototype.slickGoTo =
        function (t, e) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(t) } },
            e
          );
        }),
      (e.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") ||
          (t(i.$slider).addClass("slick-initialized"),
          i.buildRows(),
          i.buildOut(),
          i.setProps(),
          i.startLoad(),
          i.loadSlider(),
          i.initializeEvents(),
          i.updateArrows(),
          i.updateDots(),
          i.checkResponsive(!0),
          i.focusHandler()),
          e && i.$slider.trigger("init", [i]),
          !0 === i.options.accessibility && i.initADA(),
          i.options.autoplay && ((i.paused = !1), i.autoPlay());
      }),
      (e.prototype.initADA = function () {
        var e = this,
          i = Math.ceil(e.slideCount / e.options.slidesToShow),
          n = e.getNavigableIndexes().filter(function (t) {
            return t >= 0 && t < e.slideCount;
          });
        e.$slides
          .add(e.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== e.$dots &&
            (e.$slides
              .not(e.$slideTrack.find(".slick-cloned"))
              .each(function (i) {
                var s = n.indexOf(i);
                t(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + e.instanceUid + i,
                  tabindex: -1,
                }),
                  -1 !== s &&
                    t(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + e.instanceUid + s,
                    });
              }),
            e.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (s) {
                var o = n[s];
                t(this).attr({ role: "presentation" }),
                  t(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + e.instanceUid + s,
                      "aria-controls": "slick-slide" + e.instanceUid + o,
                      "aria-label": s + 1 + " of " + i,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(e.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var s = e.currentSlide, o = s + e.options.slidesToShow; s < o; s++)
          e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA();
      }),
      (e.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, t.changeSlide),
          t.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, t.changeSlide),
          !0 === t.options.accessibility &&
            (t.$prevArrow.on("keydown.slick", t.keyHandler),
            t.$nextArrow.on("keydown.slick", t.keyHandler)));
      }),
      (e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots &&
          (t("li", e.$dots).on(
            "click.slick",
            { message: "index" },
            e.changeSlide
          ),
          !0 === e.options.accessibility &&
            e.$dots.on("keydown.slick", e.keyHandler)),
          !0 === e.options.dots &&
            !0 === e.options.pauseOnDotsHover &&
            t("li", e.$dots)
              .on("mouseenter.slick", t.proxy(e.interrupt, e, !0))
              .on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
      }),
      (e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover &&
          (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
          e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
      }),
      (e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(),
          e.initDotEvents(),
          e.initSlideEvents(),
          e.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on("click.slick", e.clickHandler),
          t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
          !0 === e.options.accessibility &&
            e.$list.on("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            t(e.$slideTrack).children().on("click.slick", e.selectHandler),
          t(window).on(
            "orientationchange.slick.slick-" + e.instanceUid,
            t.proxy(e.orientationChange, e)
          ),
          t(window).on(
            "resize.slick.slick-" + e.instanceUid,
            t.proxy(e.resize, e)
          ),
          t("[draggable!=true]", e.$slideTrack).on(
            "dragstart",
            e.preventDefault
          ),
          t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
          t(e.setPosition);
      }),
      (e.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.show(), t.$nextArrow.show()),
          !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.show();
      }),
      (e.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === t.keyCode && !0 === e.options.accessibility
            ? e.changeSlide({
                data: { message: !0 === e.options.rtl ? "next" : "previous" },
              })
            : 39 === t.keyCode &&
              !0 === e.options.accessibility &&
              e.changeSlide({
                data: { message: !0 === e.options.rtl ? "previous" : "next" },
              }));
      }),
      (e.prototype.lazyLoad = function () {
        function e(e) {
          t("img[data-lazy]", e).each(function () {
            var e = t(this),
              i = t(this).attr("data-lazy"),
              n = t(this).attr("data-srcset"),
              s = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
              r = document.createElement("img");
            (r.onload = function () {
              e.animate({ opacity: 0 }, 100, function () {
                n && (e.attr("srcset", n), s && e.attr("sizes", s)),
                  e.attr("src", i).animate({ opacity: 1 }, 200, function () {
                    e.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  o.$slider.trigger("lazyLoaded", [o, e, i]);
              });
            }),
              (r.onerror = function () {
                e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  o.$slider.trigger("lazyLoadError", [o, e, i]);
              }),
              (r.src = i);
          });
        }
        var i,
          n,
          s,
          o = this;
        if (
          (!0 === o.options.centerMode
            ? !0 === o.options.infinite
              ? (s =
                  (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) +
                  o.options.slidesToShow +
                  2)
              : ((n = Math.max(
                  0,
                  o.currentSlide - (o.options.slidesToShow / 2 + 1)
                )),
                (s = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
            : ((n = o.options.infinite
                ? o.options.slidesToShow + o.currentSlide
                : o.currentSlide),
              (s = Math.ceil(n + o.options.slidesToShow)),
              !0 === o.options.fade &&
                (n > 0 && n--, s <= o.slideCount && s++)),
          (i = o.$slider.find(".slick-slide").slice(n, s)),
          "anticipated" === o.options.lazyLoad)
        )
          for (
            var r = n - 1, a = s, l = o.$slider.find(".slick-slide"), c = 0;
            c < o.options.slidesToScroll;
            c++
          )
            r < 0 && (r = o.slideCount - 1),
              (i = (i = i.add(l.eq(r))).add(l.eq(a))),
              r--,
              a++;
        e(i),
          o.slideCount <= o.options.slidesToShow
            ? e(o.$slider.find(".slick-slide"))
            : o.currentSlide >= o.slideCount - o.options.slidesToShow
            ? e(
                o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)
              )
            : 0 === o.currentSlide &&
              e(
                o.$slider
                  .find(".slick-cloned")
                  .slice(-1 * o.options.slidesToShow)
              );
      }),
      (e.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(),
          t.$slideTrack.css({ opacity: 1 }),
          t.$slider.removeClass("slick-loading"),
          t.initUI(),
          "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
      }),
      (e.prototype.next = e.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (e.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (e.prototype.pause = e.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0);
        }),
      (e.prototype.play = e.prototype.slickPlay =
        function () {
          var t = this;
          t.autoPlay(),
            (t.options.autoplay = !0),
            (t.paused = !1),
            (t.focussed = !1),
            (t.interrupted = !1);
        }),
      (e.prototype.postSlide = function (e) {
        var i = this;
        i.unslicked ||
          (i.$slider.trigger("afterChange", [i, e]),
          (i.animating = !1),
          i.slideCount > i.options.slidesToShow && i.setPosition(),
          (i.swipeLeft = null),
          i.options.autoplay && i.autoPlay(),
          !0 === i.options.accessibility &&
            (i.initADA(),
            i.options.focusOnChange &&
              t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (e.prototype.prev = e.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (e.prototype.preventDefault = function (t) {
        t.preventDefault();
      }),
      (e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i,
          n,
          s,
          o,
          r,
          a = this,
          l = t("img[data-lazy]", a.$slider);
        l.length
          ? ((i = l.first()),
            (n = i.attr("data-lazy")),
            (s = i.attr("data-srcset")),
            (o = i.attr("data-sizes") || a.$slider.attr("data-sizes")),
            ((r = document.createElement("img")).onload = function () {
              s && (i.attr("srcset", s), o && i.attr("sizes", o)),
                i
                  .attr("src", n)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === a.options.adaptiveHeight && a.setPosition(),
                a.$slider.trigger("lazyLoaded", [a, i, n]),
                a.progressiveLazyLoad();
            }),
            (r.onerror = function () {
              e < 3
                ? setTimeout(function () {
                    a.progressiveLazyLoad(e + 1);
                  }, 500)
                : (i
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  a.$slider.trigger("lazyLoadError", [a, i, n]),
                  a.progressiveLazyLoad());
            }),
            (r.src = n))
          : a.$slider.trigger("allImagesLoaded", [a]);
      }),
      (e.prototype.refresh = function (e) {
        var i,
          n,
          s = this;
        (n = s.slideCount - s.options.slidesToShow),
          !s.options.infinite && s.currentSlide > n && (s.currentSlide = n),
          s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
          (i = s.currentSlide),
          s.destroy(!0),
          t.extend(s, s.initials, { currentSlide: i }),
          s.init(),
          e || s.changeSlide({ data: { message: "index", index: i } }, !1);
      }),
      (e.prototype.registerBreakpoints = function () {
        var e,
          i,
          n,
          s = this,
          o = s.options.responsive || null;
        if ("array" === t.type(o) && o.length) {
          for (e in ((s.respondTo = s.options.respondTo || "window"), o))
            if (((n = s.breakpoints.length - 1), o.hasOwnProperty(e))) {
              for (i = o[e].breakpoint; n >= 0; )
                s.breakpoints[n] &&
                  s.breakpoints[n] === i &&
                  s.breakpoints.splice(n, 1),
                  n--;
              s.breakpoints.push(i), (s.breakpointSettings[i] = o[e].settings);
            }
          s.breakpoints.sort(function (t, e) {
            return s.options.mobileFirst ? t - e : e - t;
          });
        }
      }),
      (e.prototype.reinit = function () {
        var e = this;
        (e.$slides = e.$slideTrack
          .children(e.options.slide)
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect &&
            t(e.$slideTrack).children().on("click.slick", e.selectHandler),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger("reInit", [e]);
      }),
      (e.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            (e.windowWidth = t(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition();
          }, 50)));
      }),
      (e.prototype.removeSlide = e.prototype.slickRemove =
        function (t, e, i) {
          var n = this;
          if (
            ((t =
              "boolean" == typeof t
                ? !0 === (e = t)
                  ? 0
                  : n.slideCount - 1
                : !0 === e
                ? --t
                : t),
            n.slideCount < 1 || t < 0 || t > n.slideCount - 1)
          )
            return !1;
          n.unload(),
            !0 === i
              ? n.$slideTrack.children().remove()
              : n.$slideTrack.children(this.options.slide).eq(t).remove(),
            (n.$slides = n.$slideTrack.children(this.options.slide)),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.append(n.$slides),
            (n.$slidesCache = n.$slides),
            n.reinit();
        }),
      (e.prototype.setCSS = function (t) {
        var e,
          i,
          n = this,
          s = {};
        !0 === n.options.rtl && (t = -t),
          (e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
          (i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
          (s[n.positionProp] = t),
          !1 === n.transformsEnabled
            ? n.$slideTrack.css(s)
            : ((s = {}),
              !1 === n.cssTransitions
                ? ((s[n.animType] = "translate(" + e + ", " + i + ")"),
                  n.$slideTrack.css(s))
                : ((s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"),
                  n.$slideTrack.css(s)));
      }),
      (e.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical
          ? !0 === t.options.centerMode &&
            t.$list.css({ padding: "0px " + t.options.centerPadding })
          : (t.$list.height(
              t.$slides.first().outerHeight(!0) * t.options.slidesToShow
            ),
            !0 === t.options.centerMode &&
              t.$list.css({ padding: t.options.centerPadding + " 0px" })),
          (t.listWidth = t.$list.width()),
          (t.listHeight = t.$list.height()),
          !1 === t.options.vertical && !1 === t.options.variableWidth
            ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
              t.$slideTrack.width(
                Math.ceil(
                  t.slideWidth * t.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === t.options.variableWidth
            ? t.$slideTrack.width(5e3 * t.slideCount)
            : ((t.slideWidth = Math.ceil(t.listWidth)),
              t.$slideTrack.height(
                Math.ceil(
                  t.$slides.first().outerHeight(!0) *
                    t.$slideTrack.children(".slick-slide").length
                )
              ));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth &&
          t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
      }),
      (e.prototype.setFade = function () {
        var e,
          i = this;
        i.$slides.each(function (n, s) {
          (e = i.slideWidth * n * -1),
            !0 === i.options.rtl
              ? t(s).css({
                  position: "relative",
                  right: e,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                })
              : t(s).css({
                  position: "relative",
                  left: e,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          i.$slides
            .eq(i.currentSlide)
            .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
      }),
      (e.prototype.setHeight = function () {
        var t = this;
        if (
          1 === t.options.slidesToShow &&
          !0 === t.options.adaptiveHeight &&
          !1 === t.options.vertical
        ) {
          var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
          t.$list.css("height", e);
        }
      }),
      (e.prototype.setOption = e.prototype.slickSetOption =
        function () {
          var e,
            i,
            n,
            s,
            o,
            r = this,
            a = !1;
          if (
            ("object" === t.type(arguments[0])
              ? ((n = arguments[0]), (a = arguments[1]), (o = "multiple"))
              : "string" === t.type(arguments[0]) &&
                ((n = arguments[0]),
                (s = arguments[1]),
                (a = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === t.type(arguments[1])
                  ? (o = "responsive")
                  : void 0 !== arguments[1] && (o = "single")),
            "single" === o)
          )
            r.options[n] = s;
          else if ("multiple" === o)
            t.each(n, function (t, e) {
              r.options[t] = e;
            });
          else if ("responsive" === o)
            for (i in s)
              if ("array" !== t.type(r.options.responsive))
                r.options.responsive = [s[i]];
              else {
                for (e = r.options.responsive.length - 1; e >= 0; )
                  r.options.responsive[e].breakpoint === s[i].breakpoint &&
                    r.options.responsive.splice(e, 1),
                    e--;
                r.options.responsive.push(s[i]);
              }
          a && (r.unload(), r.reinit());
        }),
      (e.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(),
          t.setHeight(),
          !1 === t.options.fade
            ? t.setCSS(t.getLeft(t.currentSlide))
            : t.setFade(),
          t.$slider.trigger("setPosition", [t]);
      }),
      (e.prototype.setProps = function () {
        var t = this,
          e = document.body.style;
        (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
          "top" === t.positionProp
            ? t.$slider.addClass("slick-vertical")
            : t.$slider.removeClass("slick-vertical"),
          (void 0 === e.WebkitTransition &&
            void 0 === e.MozTransition &&
            void 0 === e.msTransition) ||
            (!0 === t.options.useCSS && (t.cssTransitions = !0)),
          t.options.fade &&
            ("number" == typeof t.options.zIndex
              ? t.options.zIndex < 3 && (t.options.zIndex = 3)
              : (t.options.zIndex = t.defaults.zIndex)),
          void 0 !== e.OTransform &&
            ((t.animType = "OTransform"),
            (t.transformType = "-o-transform"),
            (t.transitionType = "OTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.MozTransform &&
            ((t.animType = "MozTransform"),
            (t.transformType = "-moz-transform"),
            (t.transitionType = "MozTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.MozPerspective &&
              (t.animType = !1)),
          void 0 !== e.webkitTransform &&
            ((t.animType = "webkitTransform"),
            (t.transformType = "-webkit-transform"),
            (t.transitionType = "webkitTransition"),
            void 0 === e.perspectiveProperty &&
              void 0 === e.webkitPerspective &&
              (t.animType = !1)),
          void 0 !== e.msTransform &&
            ((t.animType = "msTransform"),
            (t.transformType = "-ms-transform"),
            (t.transitionType = "msTransition"),
            void 0 === e.msTransform && (t.animType = !1)),
          void 0 !== e.transform &&
            !1 !== t.animType &&
            ((t.animType = "transform"),
            (t.transformType = "transform"),
            (t.transitionType = "transition")),
          (t.transformsEnabled =
            t.options.useTransform && null !== t.animType && !1 !== t.animType);
      }),
      (e.prototype.setSlideClasses = function (t) {
        var e,
          i,
          n,
          s,
          o = this;
        if (
          ((i = o.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          o.$slides.eq(t).addClass("slick-current"),
          !0 === o.options.centerMode)
        ) {
          var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
          (e = Math.floor(o.options.slidesToShow / 2)),
            !0 === o.options.infinite &&
              (t >= e && t <= o.slideCount - 1 - e
                ? o.$slides
                    .slice(t - e + r, t + e + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((n = o.options.slidesToShow + t),
                  i
                    .slice(n - e + 1 + r, n + e + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === t
                ? i
                    .eq(i.length - 1 - o.options.slidesToShow)
                    .addClass("slick-center")
                : t === o.slideCount - 1 &&
                  i.eq(o.options.slidesToShow).addClass("slick-center")),
            o.$slides.eq(t).addClass("slick-center");
        } else
          t >= 0 && t <= o.slideCount - o.options.slidesToShow
            ? o.$slides
                .slice(t, t + o.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : i.length <= o.options.slidesToShow
            ? i.addClass("slick-active").attr("aria-hidden", "false")
            : ((s = o.slideCount % o.options.slidesToShow),
              (n = !0 === o.options.infinite ? o.options.slidesToShow + t : t),
              o.options.slidesToShow == o.options.slidesToScroll &&
              o.slideCount - t < o.options.slidesToShow
                ? i
                    .slice(n - (o.options.slidesToShow - s), n + s)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : i
                    .slice(n, n + o.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== o.options.lazyLoad &&
          "anticipated" !== o.options.lazyLoad) ||
          o.lazyLoad();
      }),
      (e.prototype.setupInfinite = function () {
        var e,
          i,
          n,
          s = this;
        if (
          (!0 === s.options.fade && (s.options.centerMode = !1),
          !0 === s.options.infinite &&
            !1 === s.options.fade &&
            ((i = null), s.slideCount > s.options.slidesToShow))
        ) {
          for (
            n =
              !0 === s.options.centerMode
                ? s.options.slidesToShow + 1
                : s.options.slidesToShow,
              e = s.slideCount;
            e > s.slideCount - n;
            e -= 1
          )
            (i = e - 1),
              t(s.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i - s.slideCount)
                .prependTo(s.$slideTrack)
                .addClass("slick-cloned");
          for (e = 0; e < n + s.slideCount; e += 1)
            (i = e),
              t(s.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i + s.slideCount)
                .appendTo(s.$slideTrack)
                .addClass("slick-cloned");
          s.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              t(this).attr("id", "");
            });
        }
      }),
      (e.prototype.interrupt = function (t) {
        t || this.autoPlay(), (this.interrupted = t);
      }),
      (e.prototype.selectHandler = function (e) {
        var i = this,
          n = t(e.target).is(".slick-slide")
            ? t(e.target)
            : t(e.target).parents(".slick-slide"),
          s = parseInt(n.attr("data-slick-index"));
        s || (s = 0),
          i.slideCount <= i.options.slidesToShow
            ? i.slideHandler(s, !1, !0)
            : i.slideHandler(s);
      }),
      (e.prototype.slideHandler = function (t, e, i) {
        var n,
          s,
          o,
          r,
          a,
          l = null,
          c = this;
        if (
          ((e = e || !1),
          !(
            (!0 === c.animating && !0 === c.options.waitForAnimate) ||
            (!0 === c.options.fade && c.currentSlide === t)
          ))
        )
          if (
            (!1 === e && c.asNavFor(t),
            (n = t),
            (l = c.getLeft(n)),
            (r = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((n = c.currentSlide),
              !0 !== i
                ? c.animateSlide(r, function () {
                    c.postSlide(n);
                  })
                : c.postSlide(n));
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (t < 0 || t > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((n = c.currentSlide),
              !0 !== i
                ? c.animateSlide(r, function () {
                    c.postSlide(n);
                  })
                : c.postSlide(n));
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (s =
                n < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + n
                  : n >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : n - c.slideCount
                  : n),
              (c.animating = !0),
              c.$slider.trigger("beforeChange", [c, c.currentSlide, s]),
              (o = c.currentSlide),
              (c.currentSlide = s),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <=
                  a.options.slidesToShow &&
                a.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== i
                  ? (c.fadeSlideOut(o),
                    c.fadeSlide(s, function () {
                      c.postSlide(s);
                    }))
                  : c.postSlide(s),
                void c.animateHeight()
              );
            !0 !== i
              ? c.animateSlide(l, function () {
                  c.postSlide(s);
                })
              : c.postSlide(s);
          }
      }),
      (e.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows &&
          t.slideCount > t.options.slidesToShow &&
          (t.$prevArrow.hide(), t.$nextArrow.hide()),
          !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.hide(),
          t.$slider.addClass("slick-loading");
      }),
      (e.prototype.swipeDirection = function () {
        var t,
          e,
          i,
          n,
          s = this;
        return (
          (t = s.touchObject.startX - s.touchObject.curX),
          (e = s.touchObject.startY - s.touchObject.curY),
          (i = Math.atan2(e, t)),
          (n = Math.round((180 * i) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
          n <= 45 && n >= 0
            ? !1 === s.options.rtl
              ? "left"
              : "right"
            : n <= 360 && n >= 315
            ? !1 === s.options.rtl
              ? "left"
              : "right"
            : n >= 135 && n <= 225
            ? !1 === s.options.rtl
              ? "right"
              : "left"
            : !0 === s.options.verticalSwiping
            ? n >= 35 && n <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (e.prototype.swipeEnd = function (t) {
        var e,
          i,
          n = this;
        if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
          return (n.scrolling = !1), !1;
        if (
          ((n.interrupted = !1),
          (n.shouldClick = !(n.touchObject.swipeLength > 10)),
          void 0 === n.touchObject.curX)
        )
          return !1;
        if (
          (!0 === n.touchObject.edgeHit &&
            n.$slider.trigger("edge", [n, n.swipeDirection()]),
          n.touchObject.swipeLength >= n.touchObject.minSwipe)
        ) {
          switch ((i = n.swipeDirection())) {
            case "left":
            case "down":
              (e = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                : n.currentSlide + n.getSlideCount()),
                (n.currentDirection = 0);
              break;
            case "right":
            case "up":
              (e = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                : n.currentSlide - n.getSlideCount()),
                (n.currentDirection = 1);
          }
          "vertical" != i &&
            (n.slideHandler(e),
            (n.touchObject = {}),
            n.$slider.trigger("swipe", [n, i]));
        } else
          n.touchObject.startX !== n.touchObject.curX &&
            (n.slideHandler(n.currentSlide), (n.touchObject = {}));
      }),
      (e.prototype.swipeHandler = function (t) {
        var e = this;
        if (
          !(
            !1 === e.options.swipe ||
            ("ontouchend" in document && !1 === e.options.swipe) ||
            (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))
          )
        )
          switch (
            ((e.touchObject.fingerCount =
              t.originalEvent && void 0 !== t.originalEvent.touches
                ? t.originalEvent.touches.length
                : 1),
            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
            !0 === e.options.verticalSwiping &&
              (e.touchObject.minSwipe =
                e.listHeight / e.options.touchThreshold),
            t.data.action)
          ) {
            case "start":
              e.swipeStart(t);
              break;
            case "move":
              e.swipeMove(t);
              break;
            case "end":
              e.swipeEnd(t);
          }
      }),
      (e.prototype.swipeMove = function (t) {
        var e,
          i,
          n,
          s,
          o,
          r,
          a = this;
        return (
          (o = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (o && 1 !== o.length)) &&
            ((e = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX),
            (a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (r = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            !a.options.verticalSwiping && !a.swiping && r > 4
              ? ((a.scrolling = !0), !1)
              : (!0 === a.options.verticalSwiping &&
                  (a.touchObject.swipeLength = r),
                (i = a.swipeDirection()),
                void 0 !== t.originalEvent &&
                  a.touchObject.swipeLength > 4 &&
                  ((a.swiping = !0), t.preventDefault()),
                (s =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                  (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (n = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite &&
                  ((0 === a.currentSlide && "right" === i) ||
                    (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                  ((n = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = e + n * s)
                  : (a.swipeLeft =
                      e + n * (a.$list.height() / a.listWidth) * s),
                !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * s),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft))))
        );
      }),
      (e.prototype.swipeStart = function (t) {
        var e,
          i = this;
        if (
          ((i.interrupted = !0),
          1 !== i.touchObject.fingerCount ||
            i.slideCount <= i.options.slidesToShow)
        )
          return (i.touchObject = {}), !1;
        void 0 !== t.originalEvent &&
          void 0 !== t.originalEvent.touches &&
          (e = t.originalEvent.touches[0]),
          (i.touchObject.startX = i.touchObject.curX =
            void 0 !== e ? e.pageX : t.clientX),
          (i.touchObject.startY = i.touchObject.curY =
            void 0 !== e ? e.pageY : t.clientY),
          (i.dragging = !0);
      }),
      (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
        function () {
          var t = this;
          null !== t.$slidesCache &&
            (t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.appendTo(t.$slideTrack),
            t.reinit());
        }),
      (e.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
            e.htmlExpr.test(e.options.prevArrow) &&
            e.$prevArrow.remove(),
          e.$nextArrow &&
            e.htmlExpr.test(e.options.nextArrow) &&
            e.$nextArrow.remove(),
          e.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (e.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy();
      }),
      (e.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            !t.options.infinite &&
            (t.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            t.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === t.currentSlide
              ? (t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : t.currentSlide >= t.slideCount - t.options.slidesToShow &&
                !1 === t.options.centerMode
              ? (t.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : t.currentSlide >= t.slideCount - 1 &&
                !0 === t.options.centerMode &&
                (t.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (e.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots &&
          (t.$dots.find("li").removeClass("slick-active").end(),
          t.$dots
            .find("li")
            .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (e.prototype.visibility = function () {
        var t = this;
        t.options.autoplay &&
          (document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1));
      }),
      (t.fn.slick = function () {
        var t,
          i,
          n = this,
          s = arguments[0],
          o = Array.prototype.slice.call(arguments, 1),
          r = n.length;
        for (t = 0; t < r; t++)
          if (
            ("object" == typeof s || void 0 === s
              ? (n[t].slick = new e(n[t], s))
              : (i = n[t].slick[s].apply(n[t].slick, o)),
            void 0 !== i)
          )
            return i;
        return n;
      });
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], e)
      : e(((t = t || self).window = t.window || {}));
  })(this, function (t) {
    "use strict";
    function e(t, e) {
      (t.prototype = Object.create(e.prototype)),
        ((t.prototype.constructor = t).__proto__ = e);
    }
    function i(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function n(t) {
      return "string" == typeof t;
    }
    function s(t) {
      return "function" == typeof t;
    }
    function o(t) {
      return "number" == typeof t;
    }
    function r(t) {
      return void 0 === t;
    }
    function a(t) {
      return "object" == typeof t;
    }
    function l(t) {
      return !1 !== t;
    }
    function c() {
      return "undefined" != typeof window;
    }
    function d(t) {
      return s(t) || n(t);
    }
    function u(t) {
      return (gt = ae(t, Jt)) && oi;
    }
    function p(t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    }
    function h(t, e) {
      return !e && console.warn(t);
    }
    function f(t, e) {
      return (t && (Jt[t] = e) && gt && (gt[t] = e)) || Jt;
    }
    function g() {
      return 0;
    }
    function m(t) {
      var e,
        i,
        n = t[0];
      if ((a(n) || s(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
        for (i = oe.length; i-- && !oe[i].targetTest(n); );
        e = oe[i];
      }
      for (i = t.length; i--; )
        (t[i] && (t[i]._gsap || (t[i]._gsap = new De(t[i], e)))) ||
          t.splice(i, 1);
      return t;
    }
    function v(t) {
      return t._gsap || m(pe(t))[0]._gsap;
    }
    function y(t, e) {
      var i = t[e];
      return s(i) ? t[e]() : (r(i) && t.getAttribute(e)) || i;
    }
    function _(t, e) {
      return (t = t.split(",")).forEach(e) || t;
    }
    function b(t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    }
    function w(t, e) {
      for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
      return n < i;
    }
    function T(t, e, i) {
      var n,
        s = o(t[1]),
        r = (s ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[r];
      if ((s && (a.duration = t[1]), (a.parent = i), e)) {
        for (n = a; i && !("immediateRender" in n); )
          (n = i.vars.defaults || {}), (i = l(i.vars.inherit) && i.parent);
        (a.immediateRender = l(n.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[r - 1]);
      }
      return a;
    }
    function x() {
      var t,
        e,
        i = te.length,
        n = te.slice(0);
      for (ee = {}, t = te.length = 0; t < i; t++)
        (e = n[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
    function k(t, e, i, n) {
      te.length && x(), t.render(e, i, n), te.length && x();
    }
    function S(t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(Gt).length < 2 ? e : t;
    }
    function C(t) {
      return t;
    }
    function E(t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    }
    function A(t, e) {
      for (var i in e)
        i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
    }
    function D(t, e) {
      for (var i in e) t[i] = a(e[i]) ? D(t[i] || (t[i] = {}), e[i]) : e[i];
      return t;
    }
    function O(t, e) {
      var i,
        n = {};
      for (i in t) i in e || (n[i] = t[i]);
      return n;
    }
    function L(t) {
      var e = t.parent || ut,
        i = t.keyframes ? A : E;
      if (l(t.inherit)) for (; e; ) i(t, e.vars.defaults), (e = e.parent);
      return t;
    }
    function $(t, e, i, n) {
      void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
      var s = e._prev,
        o = e._next;
      s ? (s._next = o) : t[i] === e && (t[i] = o),
        o ? (o._prev = s) : t[n] === e && (t[n] = s),
        (e._next = e._prev = e.parent = null);
    }
    function N(t, e) {
      !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
        (t._act = 0);
    }
    function P(t) {
      for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
      return t;
    }
    function j(t) {
      return t._repeat ? le(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    }
    function M(t, e) {
      return (
        (t - e._start) * e._ts +
        (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    }
    function H(t) {
      return (t._end = b(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || Ht) || 0)
      ));
    }
    function I(t, e) {
      var i;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((i = M(t.rawTime(), e)),
          (!e._dur || de(0, e.totalDuration(), i) - e._tTime > Ht) &&
            e.render(i, !0)),
        P(t)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (i = t; i._dp; )
            0 <= i.rawTime() && i.totalTime(i._tTime), (i = i._dp);
        t._zTime = -Ht;
      }
    }
    function R(t, e, i, n) {
      return (
        e.parent && N(e),
        (e._start = b(i + e._delay)),
        (e._end = b(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        (function (t, e, i, n, s) {
          void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
          var o,
            r = t[n];
          if (s) for (o = e[s]; r && r[s] > o; ) r = r._prev;
          r
            ? ((e._next = r._next), (r._next = e))
            : ((e._next = t[i]), (t[i] = e)),
            e._next ? (e._next._prev = e) : (t[n] = e),
            (e._prev = r),
            (e.parent = e._dp = t);
        })(t, e, "_first", "_last", t._sort ? "_start" : 0),
        (t._recent = e),
        n || I(t, e),
        t
      );
    }
    function q(t, e, i, n) {
      return (
        Me(t, e),
        t._initted
          ? !i &&
            t._pt &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            vt !== _e.frame
            ? (te.push(t), (t._lazy = [e, n]), 1)
            : void 0
          : 1
      );
    }
    function z(t, e, i) {
      var n = t._repeat,
        s = b(e) || 0;
      return (
        (t._dur = s),
        (t._tDur = n ? (n < 0 ? 1e12 : b(s * (n + 1) + t._rDelay * n)) : s),
        t._time > s &&
          ((t._time = s), (t._tTime = Math.min(t._tTime, t._tDur))),
        i || P(t.parent),
        t.parent && H(t),
        t
      );
    }
    function F(t) {
      return t instanceof $e ? P(t) : z(t, t._dur);
    }
    function B(t, e) {
      var i,
        s,
        o = t.labels,
        r = t._recent || ce,
        a = t.duration() >= Mt ? r.endTime(!1) : t._dur;
      return n(e) && (isNaN(e) || e in o)
        ? "<" === (i = e.charAt(0)) || ">" === i
          ? ("<" === i ? r._start : r.endTime(0 <= r._repeat)) +
            (parseFloat(e.substr(1)) || 0)
          : (i = e.indexOf("=")) < 0
          ? (e in o || (o[e] = a), o[e])
          : ((s = +(e.charAt(i - 1) + e.substr(i + 1))),
            1 < i ? B(t, e.substr(0, i - 1)) + s : a + s)
        : null == e
        ? a
        : +e;
    }
    function W(t, e) {
      return t || 0 === t ? e(t) : e;
    }
    function U(t) {
      return (t + "").substr((parseFloat(t) + "").length);
    }
    function X(t, e) {
      return (
        t &&
        a(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && a(t[0]))) &&
        !t.nodeType &&
        t !== pt
      );
    }
    function Y(t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    }
    function V(t) {
      if (s(t)) return t;
      var e = a(t) ? t : { each: t },
        i = Se(e.ease),
        o = e.from || 0,
        r = parseFloat(e.base) || 0,
        l = {},
        c = 0 < o && o < 1,
        d = isNaN(o) || c,
        u = e.axis,
        p = o,
        h = o;
      return (
        n(o)
          ? (p = h = { center: 0.5, edges: 0.5, end: 1 }[o] || 0)
          : !c && d && ((p = o[0]), (h = o[1])),
        function (t, n, s) {
          var a,
            c,
            f,
            g,
            m,
            v,
            y,
            _,
            w,
            T = (s || e).length,
            x = l[T];
          if (!x) {
            if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, Mt])[1])) {
              for (
                y = -Mt;
                y < (y = s[w++].getBoundingClientRect().left) && w < T;

              );
              w--;
            }
            for (
              x = l[T] = [],
                a = d ? Math.min(w, T) * p - 0.5 : o % w,
                c = d ? (T * h) / w - 0.5 : (o / w) | 0,
                _ = Mt,
                v = y = 0;
              v < T;
              v++
            )
              (f = (v % w) - a),
                (g = c - ((v / w) | 0)),
                (x[v] = m =
                  u ? Math.abs("y" === u ? g : f) : zt(f * f + g * g)),
                y < m && (y = m),
                m < _ && (_ = m);
            "random" === o && Y(x),
              (x.max = y - _),
              (x.min = _),
              (x.v = T =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (T < w
                      ? T - 1
                      : u
                      ? "y" === u
                        ? T / w
                        : w
                      : Math.max(w, T / w)) ||
                  0) * ("edges" === o ? -1 : 1)),
              (x.b = T < 0 ? r - T : r),
              (x.u = U(e.amount || e.each) || 0),
              (i = i && T < 0 ? ke(i) : i);
          }
          return (
            (T = (x[t] - x.min) / x.max || 0),
            b(x.b + (i ? i(T) : T) * x.v) + x.u
          );
        }
      );
    }
    function Q(t) {
      var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
      return function (i) {
        return (
          ~~(Math.round(parseFloat(i) / t) * t * e) / e + (o(i) ? 0 : U(i))
        );
      };
    }
    function K(t, e) {
      var i,
        n,
        r = Wt(t);
      return (
        !r &&
          a(t) &&
          ((i = r = t.radius || Mt),
          t.values
            ? ((t = pe(t.values)), (n = !o(t[0])) && (i *= i))
            : (t = Q(t.increment))),
        W(
          e,
          r
            ? s(t)
              ? function (e) {
                  return (n = t(e)), Math.abs(n - e) <= i ? n : e;
                }
              : function (e) {
                  for (
                    var s,
                      r,
                      a = parseFloat(n ? e.x : e),
                      l = parseFloat(n ? e.y : 0),
                      c = Mt,
                      d = 0,
                      u = t.length;
                    u--;

                  )
                    (s = n
                      ? (s = t[u].x - a) * s + (r = t[u].y - l) * r
                      : Math.abs(t[u] - a)) < c && ((c = s), (d = u));
                  return (
                    (d = !i || c <= i ? t[d] : e),
                    n || d === e || o(e) ? d : d + U(e)
                  );
                }
            : Q(t)
        )
      );
    }
    function G(t, e, i, n) {
      return W(Wt(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
        return Wt(t)
          ? t[~~(Math.random() * t.length)]
          : (i = i || 1e-5) &&
              (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              ~~(Math.round((t + Math.random() * (e - t)) / i) * i * n) / n;
      });
    }
    function J(t, e, i) {
      return W(i, function (i) {
        return t[~~e(i)];
      });
    }
    function Z(t) {
      for (var e, i, n, s, o = 0, r = ""; ~(e = t.indexOf("random(", o)); )
        (n = t.indexOf(")", e)),
          (s = "[" === t.charAt(e + 7)),
          (i = t.substr(e + 7, n - e - 7).match(s ? Gt : Ut)),
          (r += t.substr(o, e - o) + G(s ? i : +i[0], +i[1], +i[2] || 1e-5)),
          (o = n + 1);
      return r + t.substr(o, t.length - o);
    }
    function tt(t, e, i) {
      var n,
        s,
        o,
        r = t.labels,
        a = Mt;
      for (n in r)
        (s = r[n] - e) < 0 == !!i &&
          s &&
          a > (s = Math.abs(s)) &&
          ((o = n), (a = s));
      return o;
    }
    function et(t) {
      return N(t), t.progress() < 1 && fe(t, "onInterrupt"), t;
    }
    function it(t, e, i) {
      return (
        ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : 3 * t < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) *
          ge +
          0.5) |
        0
      );
    }
    function nt(t, e, i) {
      var n,
        s,
        r,
        a,
        l,
        c,
        d,
        u,
        p,
        h,
        f = t ? (o(t) ? [t >> 16, (t >> 8) & ge, t & ge] : 0) : me.black;
      if (!f) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), me[t]))
          f = me[t];
        else if ("#" === t.charAt(0))
          4 === t.length &&
            (t =
              "#" +
              (n = t.charAt(1)) +
              n +
              (s = t.charAt(2)) +
              s +
              (r = t.charAt(3)) +
              r),
            (f = [
              (t = parseInt(t.substr(1), 16)) >> 16,
              (t >> 8) & ge,
              t & ge,
            ]);
        else if ("hsl" === t.substr(0, 3))
          if (((f = h = t.match(Ut)), e)) {
            if (~t.indexOf("="))
              return (f = t.match(Xt)), i && f.length < 4 && (f[3] = 1), f;
          } else
            (a = (+f[0] % 360) / 360),
              (l = f[1] / 100),
              (n =
                2 * (c = f[2] / 100) -
                (s = c <= 0.5 ? c * (l + 1) : c + l - c * l)),
              3 < f.length && (f[3] *= 1),
              (f[0] = it(a + 1 / 3, n, s)),
              (f[1] = it(a, n, s)),
              (f[2] = it(a - 1 / 3, n, s));
        else f = t.match(Ut) || me.transparent;
        f = f.map(Number);
      }
      return (
        e &&
          !h &&
          ((n = f[0] / ge),
          (s = f[1] / ge),
          (r = f[2] / ge),
          (c = ((d = Math.max(n, s, r)) + (u = Math.min(n, s, r))) / 2),
          d === u
            ? (a = l = 0)
            : ((p = d - u),
              (l = 0.5 < c ? p / (2 - d - u) : p / (d + u)),
              (a =
                d === n
                  ? (s - r) / p + (s < r ? 6 : 0)
                  : d === s
                  ? (r - n) / p + 2
                  : (n - s) / p + 4),
              (a *= 60)),
          (f[0] = ~~(a + 0.5)),
          (f[1] = ~~(100 * l + 0.5)),
          (f[2] = ~~(100 * c + 0.5))),
        i && f.length < 4 && (f[3] = 1),
        f
      );
    }
    function st(t) {
      var e = [],
        i = [],
        n = -1;
      return (
        t.split(ve).forEach(function (t) {
          var s = t.match(Yt) || [];
          e.push.apply(e, s), i.push((n += s.length + 1));
        }),
        (e.c = i),
        e
      );
    }
    function ot(t, e, i) {
      var n,
        s,
        o,
        r,
        a = "",
        l = (t + a).match(ve),
        c = e ? "hsla(" : "rgba(",
        d = 0;
      if (!l) return t;
      if (
        ((l = l.map(function (t) {
          return (
            (t = nt(t, e, 1)) &&
            c +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        i && ((o = st(t)), (n = i.c).join(a) !== o.c.join(a)))
      )
        for (r = (s = t.replace(ve, "1").split(Yt)).length - 1; d < r; d++)
          a +=
            s[d] +
            (~n.indexOf(d)
              ? l.shift() || c + "0,0,0,0)"
              : (o.length ? o : l.length ? l : i).shift());
      if (!s)
        for (r = (s = t.split(ve)).length - 1; d < r; d++) a += s[d] + l[d];
      return a + s[r];
    }
    function rt(t) {
      var e,
        i = t.join(" ");
      if (((ve.lastIndex = 0), ve.test(i)))
        return (
          (e = ye.test(i)),
          (t[1] = ot(t[1], e)),
          (t[0] = ot(t[0], e, st(t[1]))),
          !0
        );
    }
    function at(t, e, i, n) {
      void 0 === i &&
        (i = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === n &&
          (n = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var s,
        o = { easeIn: e, easeOut: i, easeInOut: n };
      return (
        _(t, function (t) {
          for (var e in ((we[t] = Jt[t] = o),
          (we[(s = t.toLowerCase())] = i),
          o))
            we[
              s + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = we[t + "." + e] = o[e];
        }),
        o
      );
    }
    function lt(t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    }
    function ct(t, e, i) {
      function n(t) {
        return 1 === t ? 1 : s * Math.pow(2, -10 * t) * Bt((t - r) * o) + 1;
      }
      var s = 1 <= e ? e : 1,
        o = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
        r = (o / It) * (Math.asin(1 / s) || 0),
        a =
          "out" === t
            ? n
            : "in" === t
            ? function (t) {
                return 1 - n(1 - t);
              }
            : lt(n);
      return (
        (o = It / o),
        (a.config = function (e, i) {
          return ct(t, e, i);
        }),
        a
      );
    }
    function dt(t, e) {
      function i(t) {
        return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
      }
      void 0 === e && (e = 1.70158);
      var n =
        "out" === t
          ? i
          : "in" === t
          ? function (t) {
              return 1 - i(1 - t);
            }
          : lt(i);
      return (
        (n.config = function (e) {
          return dt(t, e);
        }),
        n
      );
    }
    var ut,
      pt,
      ht,
      ft,
      gt,
      mt,
      vt,
      yt,
      _t,
      bt,
      wt,
      Tt,
      xt,
      kt,
      St,
      Ct,
      Et,
      At,
      Dt,
      Ot,
      Lt,
      $t,
      Nt,
      Pt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      jt = { duration: 0.5, overwrite: !1, delay: 0 },
      Mt = 1e8,
      Ht = 1 / Mt,
      It = 2 * Math.PI,
      Rt = It / 4,
      qt = 0,
      zt = Math.sqrt,
      Ft = Math.cos,
      Bt = Math.sin,
      Wt = Array.isArray,
      Ut = /(?:-?\.?\d|\.)+/gi,
      Xt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
      Yt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Vt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
      Qt = /\(([^()]+)\)/i,
      Kt = /[+-]=-?[\.\d]+/,
      Gt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      Jt = {},
      Zt = {},
      te = [],
      ee = {},
      ie = {},
      ne = {},
      se = 30,
      oe = [],
      re = "",
      ae = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      },
      le = function (t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
      },
      ce = { _start: 0, endTime: g },
      de = function (t, e, i) {
        return i < t ? t : e < i ? e : i;
      },
      ue = [].slice,
      pe = function (t, e) {
        return !n(t) || e || (!ht && be())
          ? Wt(t)
            ? (function (t, e, i) {
                return (
                  void 0 === i && (i = []),
                  t.forEach(function (t) {
                    return (n(t) && !e) || X(t, 1)
                      ? i.push.apply(i, pe(t))
                      : i.push(t);
                  }) || i
                );
              })(t, e)
            : X(t)
            ? ue.call(t, 0)
            : t
            ? [t]
            : []
          : ue.call(ft.querySelectorAll(t), 0);
      },
      he = function (t, e, i, n, s) {
        var o = e - t,
          r = n - i;
        return W(s, function (e) {
          return i + ((e - t) / o) * r;
        });
      },
      fe = function (t, e, i) {
        var n,
          s,
          o = t.vars,
          r = o[e];
        if (r)
          return (
            (n = o[e + "Params"]),
            (s = o.callbackScope || t),
            i && te.length && x(),
            n ? r.apply(s, n) : r.call(s)
          );
      },
      ge = 255,
      me = {
        aqua: [0, ge, ge],
        lime: [0, ge, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, ge],
        navy: [0, 0, 128],
        white: [ge, ge, ge],
        olive: [128, 128, 0],
        yellow: [ge, ge, 0],
        orange: [ge, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [ge, 0, 0],
        pink: [ge, 192, 203],
        cyan: [0, ge, ge],
        transparent: [ge, ge, ge, 0],
      },
      ve = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in me) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      ye = /hsl[a]?\(/,
      _e =
        ((kt = Date.now),
        (St = 500),
        (Ct = 33),
        (Et = kt()),
        (At = Et),
        (Ot = Dt = 1 / 240),
        (xt = {
          time: 0,
          frame: 0,
          tick: function () {
            Ce(!0);
          },
          wake: function () {
            mt &&
              (!ht &&
                c() &&
                ((pt = ht = window),
                (ft = pt.document || {}),
                (Jt.gsap = oi),
                (pt.gsapVersions || (pt.gsapVersions = [])).push(oi.version),
                u(gt || pt.GreenSockGlobals || (!pt.gsap && pt) || {}),
                (Tt = pt.requestAnimationFrame)),
              bt && xt.sleep(),
              (wt =
                Tt ||
                function (t) {
                  return setTimeout(t, (1e3 * (Ot - xt.time) + 1) | 0);
                }),
              (_t = 1),
              Ce(2));
          },
          sleep: function () {
            (Tt ? pt.cancelAnimationFrame : clearTimeout)(bt),
              (_t = 0),
              (wt = g);
          },
          lagSmoothing: function (t, e) {
            (St = t || 1e8), (Ct = Math.min(e, St, 0));
          },
          fps: function (t) {
            (Dt = 1 / (t || 240)), (Ot = xt.time + Dt);
          },
          add: function (t) {
            Lt.indexOf(t) < 0 && Lt.push(t), be();
          },
          remove: function (t) {
            var e;
            ~(e = Lt.indexOf(t)) && Lt.splice(e, 1);
          },
          _listeners: (Lt = []),
        })),
      be = function () {
        return !_t && _e.wake();
      },
      we = {},
      Te = /^[\d.\-M][\d.\-,\s]/,
      xe = /["']/g,
      ke = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      Se = function (t, e) {
        return (
          (t &&
            (s(t)
              ? t
              : we[t] ||
                (function (t) {
                  var e = (t + "").split("("),
                    i = we[e[0]];
                  return i && 1 < e.length && i.config
                    ? i.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [
                              (function (t) {
                                for (
                                  var e,
                                    i,
                                    n,
                                    s = {},
                                    o = t.substr(1, t.length - 3).split(":"),
                                    r = o[0],
                                    a = 1,
                                    l = o.length;
                                  a < l;
                                  a++
                                )
                                  (i = o[a]),
                                    (e =
                                      a !== l - 1
                                        ? i.lastIndexOf(",")
                                        : i.length),
                                    (n = i.substr(0, e)),
                                    (s[r] = isNaN(n)
                                      ? n.replace(xe, "").trim()
                                      : +n),
                                    (r = i.substr(e + 1).trim());
                                return s;
                              })(e[1]),
                            ]
                          : Qt.exec(t)[1].split(",").map(S)
                      )
                    : we._CE && Te.test(t)
                    ? we._CE("", t)
                    : i;
                })(t))) ||
          e
        );
      };
    function Ce(t) {
      var e,
        i,
        n = kt() - At,
        s = !0 === t;
      St < n && (Et += n - Ct),
        (At += n),
        (xt.time = (At - Et) / 1e3),
        (0 < (e = xt.time - Ot) || s) &&
          (xt.frame++, (Ot += e + (Dt <= e ? 0.004 : Dt - e)), (i = 1)),
        s || (bt = wt(Ce)),
        i &&
          Lt.forEach(function (e) {
            return e(xt.time, n, xt.frame, t);
          });
    }
    function Ee(t) {
      return t < Nt
        ? $t * t * t
        : t < 0.7272727272727273
        ? $t * Math.pow(t - 1.5 / 2.75, 2) + 0.75
        : t < 0.9090909090909092
        ? $t * (t -= 2.25 / 2.75) * t + 0.9375
        : $t * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
    }
    _("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var i = e < 5 ? e + 1 : e;
      at(
        t + ",Power" + (i - 1),
        e
          ? function (t) {
              return Math.pow(t, i);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, i);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, i) / 2
            : 1 - Math.pow(2 * (1 - t), i) / 2;
        }
      );
    }),
      (we.Linear.easeNone = we.none = we.Linear.easeIn),
      at("Elastic", ct("in"), ct("out"), ct()),
      ($t = 7.5625),
      (Nt = 1 / 2.75),
      at(
        "Bounce",
        function (t) {
          return 1 - Ee(1 - t);
        },
        Ee
      ),
      at("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      at("Circ", function (t) {
        return -(zt(1 - t * t) - 1);
      }),
      at("Sine", function (t) {
        return 1 - Ft(t * Rt);
      }),
      at("Back", dt("in"), dt("out"), dt()),
      (we.SteppedEase =
        we.steps =
        Jt.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var i = 1 / t,
                n = t + (e ? 0 : 1),
                s = e ? 1 : 0;
              return function (t) {
                return (((n * de(0, 0.99999999, t)) | 0) + s) * i;
              };
            },
          }),
      (jt.ease = we["quad.out"]),
      _(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (re += t + "," + t + "Params,");
        }
      );
    var Ae,
      De = function (t, e) {
        (this.id = qt++),
          ((t._gsap = this).target = t),
          (this.harness = e),
          (this.get = e ? e.get : y),
          (this.set = e ? e.getSetter : Xe);
      },
      Oe =
        (((Ae = Le.prototype).delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (Ae.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (Ae.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              z(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (Ae.totalTime = function (t, e) {
          if ((be(), !arguments.length)) return this._tTime;
          var i = this.parent || this._dp;
          if (i && i.smoothChildTiming && this._ts) {
            for (
              this._start = b(
                i._time -
                  (0 < this._ts
                    ? t / this._ts
                    : ((this._dirty ? this.totalDuration() : this._tDur) - t) /
                      -this._ts)
              ),
                H(this),
                i._dirty || P(i);
              i.parent;

            )
              i.parent._time !==
                i._start +
                  (0 <= i._ts
                    ? i._tTime / i._ts
                    : (i.totalDuration() - i._tTime) / -i._ts) &&
                i.totalTime(i._tTime, !0),
                (i = i.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              R(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === Ht)) &&
              (this._ts || (this._pTime = t), k(this, t, e)),
            this
          );
        }),
        (Ae.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + j(this)) % this._dur ||
                  (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (Ae.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (Ae.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  j(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (Ae.iteration = function (t, e) {
          var i = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * i, e)
            : this._repeat
            ? le(this._tTime, i) + 1
            : 1;
        }),
        (Ae.timeScale = function (t) {
          if (!arguments.length) return this._rts === -Ht ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? M(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || t === -Ht ? 0 : this._rts),
            (function (t) {
              for (var e = t.parent; e && e.parent; )
                (e._dirty = 1), e.totalDuration(), (e = e.parent);
              return t;
            })(this.totalTime(de(0, this._tDur, e), !0))
          );
        }),
        (Ae.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t)
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (be(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        (this._tTime -= Ht) &&
                        Math.abs(this._zTime) !== Ht
                    ))),
              this)
            : this._ps;
        }),
        (Ae.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              !e || (!e._sort && this.parent) || R(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (Ae.endTime = function (t) {
          return (
            this._start +
            (l(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
          );
        }),
        (Ae.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? M(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (Ae.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t), F(this))
            : this._repeat;
        }),
        (Ae.repeatDelay = function (t) {
          return arguments.length
            ? ((this._rDelay = t), F(this))
            : this._rDelay;
        }),
        (Ae.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (Ae.seek = function (t, e) {
          return this.totalTime(B(this, t), l(e));
        }),
        (Ae.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, l(e));
        }),
        (Ae.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (Ae.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (Ae.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (Ae.resume = function () {
          return this.paused(!1);
        }),
        (Ae.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -Ht : 0)),
              this)
            : this._rts < 0;
        }),
        (Ae.invalidate = function () {
          return (this._initted = 0), (this._zTime = -Ht), this;
        }),
        (Ae.isActive = function (t) {
          var e,
            i = this.parent || this._dp,
            n = this._start;
          return !(
            i &&
            !(
              this._ts &&
              (this._initted || !t) &&
              i.isActive(t) &&
              (e = i.rawTime(!0)) >= n &&
              e < this.endTime(!0) - Ht
            )
          );
        }),
        (Ae.eventCallback = function (t, e, i) {
          var n = this.vars;
          return 1 < arguments.length
            ? (e
                ? ((n[t] = e),
                  i && (n[t + "Params"] = i),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete n[t],
              this)
            : n[t];
        }),
        (Ae.then = function (t) {
          var e = this;
          return new Promise(function (i) {
            function n() {
              var t = e.then;
              (e.then = null),
                s(o) && (o = o(e)) && (o.then || o === e) && (e.then = t),
                i(o),
                (e.then = t);
            }
            var o = s(t) ? t : C;
            (e._initted && 1 === e.totalProgress() && 0 <= e._ts) ||
            (!e._tTime && e._ts < 0)
              ? n()
              : (e._prom = n);
          });
        }),
        (Ae.kill = function () {
          et(this);
        }),
        Le);
    function Le(t, e) {
      var i = t.parent || ut;
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        z(this, +t.duration, 1),
        (this.data = t.data),
        _t || _e.wake(),
        i && R(i, this, e || 0 === e ? e : i._time, 1),
        t.reversed && this.reverse(),
        t.paused && this.paused(!0);
    }
    E(Oe.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -Ht,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var $e = (function (t) {
      function r(e, n) {
        var s;
        return (
          void 0 === e && (e = {}),
          ((s = t.call(this, e, n) || this).labels = {}),
          (s.smoothChildTiming = !!e.smoothChildTiming),
          (s.autoRemoveChildren = !!e.autoRemoveChildren),
          (s._sort = l(e.sortChildren)),
          s.parent && I(s.parent, i(s)),
          s
        );
      }
      e(r, t);
      var a = r.prototype;
      return (
        (a.to = function (t, e, i, n) {
          return new qe(t, T(arguments, 0, this), B(this, o(e) ? n : i)), this;
        }),
        (a.from = function (t, e, i, n) {
          return new qe(t, T(arguments, 1, this), B(this, o(e) ? n : i)), this;
        }),
        (a.fromTo = function (t, e, i, n, s) {
          return new qe(t, T(arguments, 2, this), B(this, o(e) ? s : n)), this;
        }),
        (a.set = function (t, e, i) {
          return (
            (e.duration = 0),
            (e.parent = this),
            L(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new qe(t, e, B(this, i), 1),
            this
          );
        }),
        (a.call = function (t, e, i) {
          return R(this, qe.delayedCall(0, t, e), B(this, i));
        }),
        (a.staggerTo = function (t, e, i, n, s, o, r) {
          return (
            (i.duration = e),
            (i.stagger = i.stagger || n),
            (i.onComplete = o),
            (i.onCompleteParams = r),
            (i.parent = this),
            new qe(t, i, B(this, s)),
            this
          );
        }),
        (a.staggerFrom = function (t, e, i, n, s, o, r) {
          return (
            (i.runBackwards = 1),
            (L(i).immediateRender = l(i.immediateRender)),
            this.staggerTo(t, e, i, n, s, o, r)
          );
        }),
        (a.staggerFromTo = function (t, e, i, n, s, o, r, a) {
          return (
            (n.startAt = i),
            (L(n).immediateRender = l(n.immediateRender)),
            this.staggerTo(t, e, n, s, o, r, a)
          );
        }),
        (a.render = function (t, e, i) {
          var n,
            s,
            o,
            r,
            a,
            l,
            c,
            d,
            u,
            p,
            h,
            f,
            g = this._time,
            m = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = this !== ut && m - Ht < t && 0 <= t ? m : t < Ht ? 0 : t,
            _ = this._zTime < 0 != t < 0 && (this._initted || !v);
          if (y !== this._tTime || i || _) {
            if (
              (g !== this._time &&
                v &&
                ((y += this._time - g), (t += this._time - g)),
              (n = y),
              (u = this._start),
              (l = !(d = this._ts)),
              _ && (v || (g = this._zTime), (!t && e) || (this._zTime = t)),
              this._repeat &&
                ((h = this._yoyo),
                (v < (n = b(y % (a = v + this._rDelay))) || m === y) && (n = v),
                (r = ~~(y / a)) && r === y / a && ((n = v), r--),
                h && 1 & r && ((n = v - n), (f = 1)),
                r !== (p = le(this._tTime, a)) && !this._lock))
            ) {
              var w = h && 1 & p,
                T = w === (h && 1 & r);
              if (
                (r < p && (w = !w),
                (g = w ? 0 : v),
                (this._lock = 1),
                (this.render(g, e, !v)._lock = 0),
                !e && this.parent && fe(this, "onRepeat"),
                this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                g !== this._time || l != !this._ts)
              )
                return this;
              if (
                (T &&
                  ((this._lock = 2),
                  (g = w ? v + 1e-4 : -1e-4),
                  this.render(g, !0),
                  this.vars.repeatRefresh && !f && this.invalidate()),
                (this._lock = 0),
                !this._ts && !l)
              )
                return this;
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (c = (function (t, e, i) {
                  var n;
                  if (e < i)
                    for (n = t._first; n && n._start <= i; ) {
                      if (!n._dur && "isPause" === n.data && n._start > e)
                        return n;
                      n = n._next;
                    }
                  else
                    for (n = t._last; n && n._start >= i; ) {
                      if (!n._dur && "isPause" === n.data && n._start < e)
                        return n;
                      n = n._prev;
                    }
                })(this, b(g), b(n))) &&
                (y -= n - (n = c._start)),
              (this._tTime = y),
              (this._time = n),
              (this._act = !d),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t)),
              g || !n || e || fe(this, "onStart"),
              g <= n && 0 <= t)
            )
              for (s = this._first; s; ) {
                if (
                  ((o = s._next), (s._act || n >= s._start) && s._ts && c !== s)
                ) {
                  if (s.parent !== this) return this.render(t, e, i);
                  if (
                    (s.render(
                      0 < s._ts
                        ? (n - s._start) * s._ts
                        : (s._dirty ? s.totalDuration() : s._tDur) +
                            (n - s._start) * s._ts,
                      e,
                      i
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    (c = 0), o && (y += this._zTime = -Ht);
                    break;
                  }
                }
                s = o;
              }
            else {
              s = this._last;
              for (var x = t < 0 ? t : n; s; ) {
                if (
                  ((o = s._prev), (s._act || x <= s._end) && s._ts && c !== s)
                ) {
                  if (s.parent !== this) return this.render(t, e, i);
                  if (
                    (s.render(
                      0 < s._ts
                        ? (x - s._start) * s._ts
                        : (s._dirty ? s.totalDuration() : s._tDur) +
                            (x - s._start) * s._ts,
                      e,
                      i
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    (c = 0), o && (y += this._zTime = x ? -Ht : Ht);
                    break;
                  }
                }
                s = o;
              }
            }
            if (
              c &&
              !e &&
              (this.pause(),
              (c.render(g <= n ? 0 : -Ht)._zTime = g <= n ? 1 : -1),
              this._ts)
            )
              return (this._start = u), H(this), this.render(t, e, i);
            this._onUpdate && !e && fe(this, "onUpdate", !0),
              ((y === m && m >= this.totalDuration()) ||
                (!y && this._ts < 0)) &&
                ((u !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((!t && v) ||
                    !((t && 0 < this._ts) || (!y && this._ts < 0)) ||
                    N(this, 1),
                  e ||
                    (t < 0 && !g) ||
                    (fe(this, y === m ? "onComplete" : "onReverseComplete", !0),
                    this._prom && this._prom())));
          }
          return this;
        }),
        (a.add = function (t, e) {
          var i = this;
          if ((o(e) || (e = B(this, e)), !(t instanceof Oe))) {
            if (Wt(t))
              return (
                t.forEach(function (t) {
                  return i.add(t, e);
                }),
                P(this)
              );
            if (n(t)) return this.addLabel(t, e);
            if (!s(t)) return this;
            t = qe.delayedCall(0, t);
          }
          return this !== t ? R(this, t, e) : this;
        }),
        (a.getChildren = function (t, e, i, n) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === i && (i = !0),
            void 0 === n && (n = -Mt);
          for (var s = [], o = this._first; o; )
            o._start >= n &&
              (o instanceof qe
                ? e && s.push(o)
                : (i && s.push(o),
                  t && s.push.apply(s, o.getChildren(!0, e, i)))),
              (o = o._next);
          return s;
        }),
        (a.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
            if (e[i].vars.id === t) return e[i];
        }),
        (a.remove = function (t) {
          return n(t)
            ? this.removeLabel(t)
            : s(t)
            ? this.killTweensOf(t)
            : ($(this, t),
              t === this._recent && (this._recent = this._last),
              P(this));
        }),
        (a.totalTime = function (e, i) {
          return arguments.length
            ? ((this._forcing = 1),
              this.parent ||
                this._dp ||
                !this._ts ||
                (this._start = b(
                  _e.time -
                    (0 < this._ts
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts)
                )),
              t.prototype.totalTime.call(this, e, i),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (a.addLabel = function (t, e) {
          return (this.labels[t] = B(this, e)), this;
        }),
        (a.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (a.addPause = function (t, e, i) {
          var n = qe.delayedCall(0, e || g, i);
          return (
            (n.data = "isPause"), (this._hasPause = 1), R(this, n, B(this, t))
          );
        }),
        (a.removePause = function (t) {
          var e = this._first;
          for (t = B(this, t); e; )
            e._start === t && "isPause" === e.data && N(e), (e = e._next);
        }),
        (a.killTweensOf = function (t, e, i) {
          for (var n = this.getTweensOf(t, i), s = n.length; s--; )
            Pe !== n[s] && n[s].kill(t, e);
          return this;
        }),
        (a.getTweensOf = function (t, e) {
          for (var i, n = [], s = pe(t), o = this._first; o; )
            o instanceof qe
              ? !w(o._targets, s) ||
                (e && !o.isActive("started" === e)) ||
                n.push(o)
              : (i = o.getTweensOf(s, e)).length && n.push.apply(n, i),
              (o = o._next);
          return n;
        }),
        (a.tweenTo = function (t, e) {
          e = e || {};
          var i = this,
            n = B(i, t),
            s = e.startAt,
            o = e.onStart,
            r = e.onStartParams,
            a = qe.to(
              i,
              E(e, {
                ease: "none",
                lazy: !1,
                time: n,
                duration:
                  e.duration ||
                  Math.abs(
                    (n - (s && "time" in s ? s.time : i._time)) / i.timeScale()
                  ) ||
                  Ht,
                onStart: function () {
                  i.pause();
                  var t = e.duration || Math.abs((n - i._time) / i.timeScale());
                  a._dur !== t && z(a, t).render(a._time, !0, !0),
                    o && o.apply(a, r || []);
                },
              })
            );
          return a;
        }),
        (a.tweenFromTo = function (t, e, i) {
          return this.tweenTo(e, E({ startAt: { time: B(this, t) } }, i));
        }),
        (a.recent = function () {
          return this._recent;
        }),
        (a.nextLabel = function (t) {
          return void 0 === t && (t = this._time), tt(this, B(this, t));
        }),
        (a.previousLabel = function (t) {
          return void 0 === t && (t = this._time), tt(this, B(this, t), 1);
        }),
        (a.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + Ht);
        }),
        (a.shiftChildren = function (t, e, i) {
          void 0 === i && (i = 0);
          for (var n, s = this._first, o = this.labels; s; )
            s._start >= i && (s._start += t), (s = s._next);
          if (e) for (n in o) o[n] >= i && (o[n] += t);
          return P(this);
        }),
        (a.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
          return t.prototype.invalidate.call(this);
        }),
        (a.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, i = this._first; i; )
            (e = i._next), this.remove(i), (i = e);
          return (
            (this._time = this._tTime = 0), t && (this.labels = {}), P(this)
          );
        }),
        (a.totalDuration = function (t) {
          var e,
            i,
            n,
            s,
            o = 0,
            r = this,
            a = r._last,
            l = Mt;
          if (arguments.length)
            return r.timeScale(
              (r._repeat < 0 ? r.duration() : r.totalDuration()) /
                (r.reversed() ? -t : t)
            );
          if (r._dirty) {
            for (s = r.parent; a; )
              (e = a._prev),
                a._dirty && a.totalDuration(),
                l < (n = a._start) && r._sort && a._ts && !r._lock
                  ? ((r._lock = 1), (R(r, a, n - a._delay, 1)._lock = 0))
                  : (l = n),
                n < 0 &&
                  a._ts &&
                  ((o -= n),
                  ((!s && !r._dp) || (s && s.smoothChildTiming)) &&
                    ((r._start += n / r._ts), (r._time -= n), (r._tTime -= n)),
                  r.shiftChildren(-n, !1, -1e20),
                  (l = 0)),
                o < (i = H(a)) && a._ts && (o = i),
                (a = e);
            z(r, r === ut && r._time > o ? r._time : Math.min(Mt, o), 1),
              (r._dirty = 0);
          }
          return r._tDur;
        }),
        (r.updateRoot = function (t) {
          if ((ut._ts && (k(ut, M(t, ut)), (vt = _e.frame)), _e.frame >= se)) {
            se += Pt.autoSleep || 120;
            var e = ut._first;
            if ((!e || !e._ts) && Pt.autoSleep && _e._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || _e.sleep();
            }
          }
        }),
        r
      );
    })(Oe);
    function Ne(t, e, i, o, r, l) {
      var c, d, u, p;
      if (
        ie[t] &&
        !1 !==
          (c = new ie[t]()).init(
            r,
            c.rawVars
              ? e[t]
              : (function (t, e, i, o, r) {
                  if (
                    (s(t) && (t = He(t, r, e, i, o)),
                    !a(t) || (t.style && t.nodeType) || Wt(t))
                  )
                    return n(t) ? He(t, r, e, i, o) : t;
                  var l,
                    c = {};
                  for (l in t) c[l] = He(t[l], r, e, i, o);
                  return c;
                })(e[t], o, r, l, i),
            i,
            o,
            l
          ) &&
        ((i._pt = d = new ti(i._pt, r, t, 0, 1, c.render, c, 0, c.priority)),
        i !== yt)
      )
        for (u = i._ptLookup[i._targets.indexOf(r)], p = c._props.length; p--; )
          u[c._props[p]] = d;
      return c;
    }
    E($e.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Pe,
      je = function (t, e, i, o, r, a, l, c, d) {
        s(o) && (o = o(r || 0, t, a));
        var u,
          h = t[e],
          f =
            "get" !== i
              ? i
              : s(h)
              ? d
                ? t[
                    e.indexOf("set") || !s(t["get" + e.substr(3)])
                      ? e
                      : "get" + e.substr(3)
                  ](d)
                : t[e]()
              : h,
          g = s(h) ? (d ? Ue : We) : Be;
        if (
          (n(o) &&
            (~o.indexOf("random(") && (o = Z(o)),
            "=" === o.charAt(1) &&
              (o =
                parseFloat(f) +
                parseFloat(o.substr(2)) * ("-" === o.charAt(0) ? -1 : 1) +
                (U(f) || 0))),
          f !== o)
        )
          return isNaN(f + o)
            ? (h || e in t || p(e, o),
              function (t, e, i, n, s, o, r) {
                var a,
                  l,
                  c,
                  d,
                  u,
                  p,
                  h,
                  f,
                  g = new ti(this._pt, t, e, 0, 1, Qe, null, s),
                  m = 0,
                  v = 0;
                for (
                  g.b = i,
                    g.e = n,
                    i += "",
                    (h = ~(n += "").indexOf("random(")) && (n = Z(n)),
                    o && (o((f = [i, n]), t, e), (i = f[0]), (n = f[1])),
                    l = i.match(Vt) || [];
                  (a = Vt.exec(n));

                )
                  (d = a[0]),
                    (u = n.substring(m, a.index)),
                    c ? (c = (c + 1) % 5) : "rgba(" === u.substr(-5) && (c = 1),
                    d !== l[v++] &&
                      ((p = parseFloat(l[v - 1]) || 0),
                      (g._pt = {
                        _next: g._pt,
                        p: u || 1 === v ? u : ",",
                        s: p,
                        c:
                          "=" === d.charAt(1)
                            ? parseFloat(d.substr(2)) *
                              ("-" === d.charAt(0) ? -1 : 1)
                            : parseFloat(d) - p,
                        m: c && c < 4 ? Math.round : 0,
                      }),
                      (m = Vt.lastIndex));
                return (
                  (g.c = m < n.length ? n.substring(m, n.length) : ""),
                  (g.fp = r),
                  (Kt.test(n) || h) && (g.e = 0),
                  (this._pt = g)
                );
              }.call(this, t, e, f, o, g, c || Pt.stringFilter, d))
            : ((u = new ti(
                this._pt,
                t,
                e,
                +f || 0,
                o - (f || 0),
                "boolean" == typeof h ? Ve : Ye,
                0,
                g
              )),
              d && (u.fp = d),
              l && u.modifier(l, this, t),
              (this._pt = u));
      },
      Me = function t(e, i) {
        var n,
          s,
          o,
          r,
          a,
          c,
          d,
          u,
          p,
          h,
          f,
          g,
          y = e.vars,
          _ = y.ease,
          b = y.startAt,
          w = y.immediateRender,
          T = y.lazy,
          k = y.onUpdate,
          S = y.onUpdateParams,
          C = y.callbackScope,
          A = y.runBackwards,
          D = y.yoyoEase,
          L = y.keyframes,
          $ = y.autoRevert,
          P = e._dur,
          j = e._startAt,
          M = e._targets,
          H = e.parent,
          I = H && "nested" === H.data ? H.parent._targets : M,
          R = "auto" === e._overwrite,
          q = e.timeline;
        if (
          (!q || (L && _) || (_ = "none"),
          (e._ease = Se(_, jt.ease)),
          (e._yEase = D ? ke(Se(!0 === D ? _ : D, jt.ease)) : 0),
          D &&
            e._yoyo &&
            !e._repeat &&
            ((D = e._yEase), (e._yEase = e._ease), (e._ease = D)),
          !q)
        ) {
          if ((j && j.render(-1, !0).kill(), b)) {
            if (
              (N(
                (e._startAt = qe.set(
                  M,
                  E(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: H,
                      immediateRender: !0,
                      lazy: l(T),
                      startAt: null,
                      delay: 0,
                      onUpdate: k,
                      onUpdateParams: S,
                      callbackScope: C,
                      stagger: 0,
                    },
                    b
                  )
                ))
              ),
              w)
            )
              if (0 < i) $ || (e._startAt = 0);
              else if (P) return;
          } else if (A && P)
            if (j) $ || (e._startAt = 0);
            else if (
              (i && (w = !1),
              N(
                (e._startAt = qe.set(
                  M,
                  ae(O(y, Zt), {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: w && l(T),
                    immediateRender: w,
                    stagger: 0,
                    parent: H,
                  })
                ))
              ),
              w)
            ) {
              if (!i) return;
            } else t(e._startAt, Ht);
          for (
            n = O(y, Zt),
              g = (u = M[(e._pt = 0)] ? v(M[0]).harness : 0) && y[u.prop],
              T = (P && l(T)) || (T && !P),
              s = 0;
            s < M.length;
            s++
          ) {
            if (
              ((d = (a = M[s])._gsap || m(M)[s]._gsap),
              (e._ptLookup[s] = h = {}),
              ee[d.id] && x(),
              (f = I === M ? s : I.indexOf(a)),
              u &&
                !1 !== (p = new u()).init(a, g || n, e, f, I) &&
                ((e._pt = r =
                  new ti(e._pt, a, p.name, 0, 1, p.render, p, 0, p.priority)),
                p._props.forEach(function (t) {
                  h[t] = r;
                }),
                p.priority && (c = 1)),
              !u || g)
            )
              for (o in n)
                ie[o] && (p = Ne(o, n, e, f, a, I))
                  ? p.priority && (c = 1)
                  : (h[o] = r =
                      je.call(e, a, o, "get", n[o], f, I, 0, y.stringFilter));
            e._op && e._op[s] && e.kill(a, e._op[s]),
              R &&
                e._pt &&
                ((Pe = e), ut.killTweensOf(a, h, "started"), (Pe = 0)),
              e._pt && T && (ee[d.id] = 1);
          }
          c && Ze(e), e._onInit && e._onInit(e);
        }
        (e._from = !q && !!y.runBackwards), (e._onUpdate = k), (e._initted = 1);
      },
      He = function (t, e, i, o, r) {
        return s(t)
          ? t.call(e, i, o, r)
          : n(t) && ~t.indexOf("random(")
          ? Z(t)
          : t;
      },
      Ie = re + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Re = (Ie + ",id,stagger,delay,duration,paused").split(","),
      qe = (function (t) {
        function s(e, n, s, r) {
          var c;
          "number" == typeof n && ((s.duration = n), (n = s), (s = null));
          var u,
            p,
            f,
            v,
            y,
            _,
            b,
            w,
            T = (c = t.call(this, r ? n : L(n), s) || this).vars,
            x = T.duration,
            k = T.delay,
            S = T.immediateRender,
            C = T.stagger,
            A = T.overwrite,
            D = T.keyframes,
            O = T.defaults,
            $ = c.parent,
            N = (Wt(e) ? o(e[0]) : "length" in n) ? [e] : pe(e);
          if (
            ((c._targets = N.length
              ? m(N)
              : h(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !Pt.nullTargetWarn
                ) || []),
            (c._ptLookup = []),
            (c._overwrite = A),
            D || C || d(x) || d(k))
          ) {
            if (
              ((n = c.vars),
              (u = c.timeline =
                new $e({ data: "nested", defaults: O || {} })).kill(),
              (u.parent = i(c)),
              D)
            )
              E(u.vars.defaults, { ease: "none" }),
                D.forEach(function (t) {
                  return u.to(N, t, ">");
                });
            else {
              if (((v = N.length), (b = C ? V(C) : g), a(C)))
                for (y in C) ~Ie.indexOf(y) && ((w = w || {})[y] = C[y]);
              for (p = 0; p < v; p++) {
                for (y in ((f = {}), n)) Re.indexOf(y) < 0 && (f[y] = n[y]);
                (f.stagger = 0),
                  w && ae(f, w),
                  n.yoyoEase && !n.repeat && (f.yoyoEase = n.yoyoEase),
                  (_ = N[p]),
                  (f.duration = +He(x, i(c), p, _, N)),
                  (f.delay = (+He(k, i(c), p, _, N) || 0) - c._delay),
                  !C &&
                    1 === v &&
                    f.delay &&
                    ((c._delay = k = f.delay), (c._start += k), (f.delay = 0)),
                  u.to(_, f, b(p, _, N));
              }
              x = k = 0;
            }
            x || c.duration((x = u.duration()));
          } else c.timeline = 0;
          return (
            !0 === A && ((Pe = i(c)), ut.killTweensOf(N), (Pe = 0)),
            $ && I($, i(c)),
            (S ||
              (!x &&
                !D &&
                c._start === $._time &&
                l(S) &&
                (function t(e) {
                  return !e || (e._ts && t(e.parent));
                })(i(c)) &&
                "nested" !== $.data)) &&
              ((c._tTime = -Ht), c.render(Math.max(0, -k))),
            c
          );
        }
        e(s, t);
        var r = s.prototype;
        return (
          (r.render = function (t, e, i) {
            var n,
              s,
              o,
              r,
              a,
              l,
              c,
              d,
              u,
              p = this._time,
              h = this._tDur,
              f = this._dur,
              g = h - Ht < t && 0 <= t ? h : t < Ht ? 0 : t;
            if (f) {
              if (
                g !== this._tTime ||
                !t ||
                i ||
                (this._startAt && this._zTime < 0 != t < 0)
              ) {
                if (((n = g), (d = this.timeline), this._repeat)) {
                  if (
                    ((f < (n = b(g % (r = f + this._rDelay))) || h === g) &&
                      (n = f),
                    (o = ~~(g / r)) && o === g / r && ((n = f), o--),
                    (l = this._yoyo && 1 & o) &&
                      ((u = this._yEase), (n = f - n)),
                    (a = le(this._tTime, r)),
                    n === p && !i && this._initted)
                  )
                    return this;
                  o !== a &&
                    (!this.vars.repeatRefresh ||
                      l ||
                      this._lock ||
                      ((this._lock = i = 1),
                      (this.render(r * o, !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (q(this, n, i, e)) return (this._tTime = 0), this;
                  if (f !== this._dur) return this.render(t, e, i);
                }
                for (
                  this._tTime = g,
                    this._time = n,
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    this.ratio = c = (u || this._ease)(n / f),
                    this._from && (this.ratio = c = 1 - c),
                    p || !n || e || fe(this, "onStart"),
                    s = this._pt;
                  s;

                )
                  s.r(c, s.d), (s = s._next);
                (d && d.render(t < 0 ? t : !n && l ? -Ht : d._dur * c, e, i)) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                    fe(this, "onUpdate")),
                  this._repeat &&
                    o !== a &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    fe(this, "onRepeat"),
                  (g !== this._tDur && g) ||
                    this._tTime !== g ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(t, !0, i),
                    (!t && f) ||
                      !((t && 0 < this._ts) || (!g && this._ts < 0)) ||
                      N(this, 1),
                    e ||
                      (t < 0 && !p) ||
                      (g < h && 0 < this.timeScale()) ||
                      (fe(
                        this,
                        g === h ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom && this._prom()));
              }
            } else
              !(function (t, e, i, n) {
                var s,
                  o = t._zTime < 0 ? 0 : 1,
                  r = e < 0 ? 0 : 1,
                  a = t._rDelay,
                  l = 0;
                if (
                  (a &&
                    t._repeat &&
                    ((l = de(0, t._tDur, e)),
                    le(l, a) !== le(t._tTime, a) &&
                      ((o = 1 - r),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  (t._initted || !q(t, e, n, i)) &&
                    (r !== o || n || t._zTime === Ht || (!e && t._zTime)))
                ) {
                  for (
                    t._zTime = e || (i ? Ht : 0),
                      t.ratio = r,
                      t._from && (r = 1 - r),
                      t._time = 0,
                      t._tTime = l,
                      i || fe(t, "onStart"),
                      s = t._pt;
                    s;

                  )
                    s.r(r, s.d), (s = s._next);
                  !r &&
                    t._startAt &&
                    !t._onUpdate &&
                    t._start &&
                    t._startAt.render(e, !0, n),
                    t._onUpdate && (i || fe(t, "onUpdate")),
                    l && t._repeat && !i && t.parent && fe(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === r &&
                      (t.ratio && N(t, 1),
                      i ||
                        (fe(
                          t,
                          t.ratio ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        t._prom && t._prom()));
                }
              })(this, t, e, i);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._act =
                this._lazy =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              t.prototype.invalidate.call(this)
            );
          }),
          (r.kill = function (t, e) {
            if (
              (void 0 === e && (e = "all"),
              !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
            )
              return et(this);
            if (this.timeline)
              return (
                this.timeline.killTweensOf(
                  t,
                  e,
                  Pe && !0 !== Pe.vars.overwrite
                ),
                this
              );
            var i,
              s,
              o,
              r,
              a,
              l,
              c,
              d = this._targets,
              u = t ? pe(t) : d,
              p = this._ptLookup,
              h = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var i = t.length, n = i === e.length;
                  n && i-- && t[i] === e[i];

                );
                return i < 0;
              })(d, u)
            )
              return et(this);
            for (
              i = this._op = this._op || [],
                "all" !== e &&
                  (n(e) &&
                    ((a = {}),
                    _(e, function (t) {
                      return (a[t] = 1);
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var i,
                      n,
                      s,
                      o,
                      r = t[0] ? v(t[0]).harness : 0,
                      a = r && r.aliases;
                    if (!a) return e;
                    for (n in ((i = ae({}, e)), a))
                      if ((n in i))
                        for (s = (o = a[n].split(",")).length; s--; )
                          i[o[s]] = i[n];
                    return i;
                  })(d, e))),
                c = d.length;
              c--;

            )
              if (~u.indexOf(d[c]))
                for (a in ((s = p[c]),
                "all" === e
                  ? ((i[c] = e), (r = s), (o = {}))
                  : ((o = i[c] = i[c] || {}), (r = e)),
                r))
                  (l = s && s[a]) &&
                    (("kill" in l.d && !0 !== l.d.kill(a)) || $(this, l, "_pt"),
                    delete s[a]),
                    "all" !== o && (o[a] = 1);
            return this._initted && !this._pt && h && et(this), this;
          }),
          (s.to = function (t, e, i) {
            return new s(t, e, i);
          }),
          (s.from = function (t, e) {
            return new s(t, T(arguments, 1));
          }),
          (s.delayedCall = function (t, e, i, n) {
            return new s(e, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: e,
              onReverseComplete: e,
              onCompleteParams: i,
              onReverseCompleteParams: i,
              callbackScope: n,
            });
          }),
          (s.fromTo = function (t, e, i) {
            return new s(t, T(arguments, 2));
          }),
          (s.set = function (t, e) {
            return (
              (e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e)
            );
          }),
          (s.killTweensOf = function (t, e, i) {
            return ut.killTweensOf(t, e, i);
          }),
          s
        );
      })(Oe);
    function ze(t, e, i) {
      return t.setAttribute(e, i);
    }
    function Fe(t, e, i, n) {
      n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
    }
    E(qe.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      _("staggerTo,staggerFrom,staggerFromTo", function (t) {
        qe[t] = function () {
          var e = new $e(),
            i = ue.call(arguments, 0);
          return (
            i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
          );
        };
      });
    var Be = function (t, e, i) {
        return (t[e] = i);
      },
      We = function (t, e, i) {
        return t[e](i);
      },
      Ue = function (t, e, i, n) {
        return t[e](n.fp, i);
      },
      Xe = function (t, e) {
        return s(t[e]) ? We : r(t[e]) && t.setAttribute ? ze : Be;
      },
      Ye = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
      },
      Ve = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      Qe = function (t, e) {
        var i = e._pt,
          n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
          for (; i; )
            (n =
              i.p +
              (i.m
                ? i.m(i.s + i.c * t)
                : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
              n),
              (i = i._next);
          n += e.c;
        }
        e.set(e.t, e.p, n, e);
      },
      Ke = function (t, e) {
        for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
      },
      Ge = function (t, e, i, n) {
        for (var s, o = this._pt; o; )
          (s = o._next), o.p === n && o.modifier(t, e, i), (o = s);
      },
      Je = function (t) {
        for (var e, i, n = this._pt; n; )
          (i = n._next),
            (n.p === t && !n.op) || n.op === t
              ? $(this, n, "_pt")
              : n.dep || (e = 1),
            (n = i);
        return !e;
      },
      Ze = function (t) {
        for (var e, i, n, s, o = t._pt; o; ) {
          for (e = o._next, i = n; i && i.pr > o.pr; ) i = i._next;
          (o._prev = i ? i._prev : s) ? (o._prev._next = o) : (n = o),
            (o._next = i) ? (i._prev = o) : (s = o),
            (o = e);
        }
        t._pt = n;
      },
      ti =
        ((ei.prototype.modifier = function (t, e, i) {
          (this.mSet = this.mSet || this.set),
            (this.set = Fe),
            (this.m = t),
            (this.mt = i),
            (this.tween = e);
        }),
        ei);
    function ei(t, e, i, n, s, o, r, a, l) {
      (this.t = e),
        (this.s = n),
        (this.c = s),
        (this.p = i),
        (this.r = o || Ye),
        (this.d = r || this),
        (this.set = a || Be),
        (this.pr = l || 0),
        (this._next = t) && (t._prev = this);
    }
    _(
      re +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",
      function (t) {
        return (Zt[t] = 1);
      }
    ),
      (Jt.TweenMax = Jt.TweenLite = qe),
      (Jt.TimelineLite = Jt.TimelineMax = $e),
      (ut = new $e({
        sortChildren: !1,
        defaults: jt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (Pt.stringFilter = rt);
    var ii = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        e.forEach(function (t) {
          return (function (t) {
            var e = (t = (!t.name && t.default) || t).name,
              i = s(t),
              n =
                e && !i && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              o = {
                init: g,
                render: Ke,
                add: je,
                kill: Je,
                modifier: Ge,
                rawVars: 0,
              },
              r = {
                targetTest: 0,
                get: 0,
                getSetter: Xe,
                aliases: {},
                register: 0,
              };
            if ((be(), t !== n)) {
              if (ie[e]) return;
              E(n, E(O(t, o), r)),
                ae(n.prototype, ae(o, O(t, r))),
                (ie[(n.prop = e)] = n),
                t.targetTest && (oe.push(n), (Zt[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            f(e, n), t.register && t.register(oi, n, ti);
          })(t);
        });
      },
      timeline: function (t) {
        return new $e(t);
      },
      getTweensOf: function (t, e) {
        return ut.getTweensOf(t, e);
      },
      getProperty: function (t, e, i, s) {
        n(t) && (t = pe(t)[0]);
        var o = v(t || {}).get,
          r = i ? C : S;
        return (
          "native" === i && (i = ""),
          t
            ? e
              ? r(((ie[e] && ie[e].get) || o)(t, e, i, s))
              : function (e, i, n) {
                  return r(((ie[e] && ie[e].get) || o)(t, e, i, n));
                }
            : t
        );
      },
      quickSetter: function (t, e, i) {
        if (1 < (t = pe(t)).length) {
          var n = t.map(function (t) {
              return oi.quickSetter(t, e, i);
            }),
            s = n.length;
          return function (t) {
            for (var e = s; e--; ) n[e](t);
          };
        }
        t = t[0] || {};
        var o = ie[e],
          r = v(t),
          a = o
            ? function (e) {
                var n = new o();
                (yt._pt = 0),
                  n.init(t, i ? e + i : e, yt, 0, [t]),
                  n.render(1, n),
                  yt._pt && Ke(1, yt);
              }
            : r.set(t, e);
        return o
          ? a
          : function (n) {
              return a(t, e, i ? n + i : n, r, 1);
            };
      },
      isTweening: function (t) {
        return 0 < ut.getTweensOf(t, !0).length;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Se(t.ease, jt.ease)), D(jt, t || {});
      },
      config: function (t) {
        return D(Pt, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          i = t.effect,
          n = t.plugins,
          s = t.defaults,
          o = t.extendTimeline;
        (n || "").split(",").forEach(function (t) {
          return (
            t && !ie[t] && !Jt[t] && h(e + " effect requires " + t + " plugin.")
          );
        }),
          (ne[e] = function (t, e, n) {
            return i(pe(t), E(e || {}, s), n);
          }),
          o &&
            ($e.prototype[e] = function (t, i, n) {
              return this.add(ne[e](t, a(i) ? i : (n = i) && {}, this), n);
            });
      },
      registerEase: function (t, e) {
        we[t] = Se(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Se(t, e) : we;
      },
      getById: function (t) {
        return ut.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var i,
          n,
          s = new $e(t);
        for (
          s.smoothChildTiming = l(t.smoothChildTiming),
            ut.remove(s),
            s._dp = 0,
            s._time = s._tTime = ut._time,
            i = ut._first;
          i;

        )
          (n = i._next),
            (!e &&
              !i._dur &&
              i instanceof qe &&
              i.vars.onComplete === i._targets[0]) ||
              R(s, i, i._start - i._delay),
            (i = n);
        return R(ut, s, 0), s;
      },
      utils: {
        wrap: function t(e, i, n) {
          var s = i - e;
          return Wt(e)
            ? J(e, t(0, e.length), i)
            : W(n, function (t) {
                return ((s + ((t - e) % s)) % s) + e;
              });
        },
        wrapYoyo: function t(e, i, n) {
          var s = i - e,
            o = 2 * s;
          return Wt(e)
            ? J(e, t(0, e.length - 1), i)
            : W(n, function (t) {
                return e + (s < (t = (o + ((t - e) % o)) % o) ? o - t : t);
              });
        },
        distribute: V,
        random: G,
        snap: K,
        normalize: function (t, e, i) {
          return he(t, e, 0, 1, i);
        },
        getUnit: U,
        clamp: function (t, e, i) {
          return W(i, function (i) {
            return de(t, e, i);
          });
        },
        splitColor: nt,
        toArray: pe,
        mapRange: he,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (i) {
            return t(parseFloat(i)) + (e || U(i));
          };
        },
        interpolate: function t(e, i, s, o) {
          var r = isNaN(e + i)
            ? 0
            : function (t) {
                return (1 - t) * e + t * i;
              };
          if (!r) {
            var a,
              l,
              c,
              d,
              u,
              p = n(e),
              h = {};
            if ((!0 === s && (o = 1) && (s = null), p))
              (e = { p: e }), (i = { p: i });
            else if (Wt(e) && !Wt(i)) {
              for (c = [], d = e.length, u = d - 2, l = 1; l < d; l++)
                c.push(t(e[l - 1], e[l]));
              d--,
                (r = function (t) {
                  t *= d;
                  var e = Math.min(u, ~~t);
                  return c[e](t - e);
                }),
                (s = i);
            } else o || (e = ae(Wt(e) ? [] : {}, e));
            if (!c) {
              for (a in i) je.call(h, e, a, "get", i[a]);
              r = function (t) {
                return Ke(t, h) || (p ? e.p : e);
              };
            }
          }
          return W(s, r);
        },
        shuffle: Y,
      },
      install: u,
      effects: ne,
      ticker: _e,
      updateRoot: $e.updateRoot,
      plugins: ie,
      globalTimeline: ut,
      core: {
        PropTween: ti,
        globals: f,
        Tween: qe,
        Timeline: $e,
        Animation: Oe,
        getCache: v,
        _removeLinkedListItem: $,
      },
    };
    function ni(t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
      return i;
    }
    function si(t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, i, s) {
          s._onInit = function (t) {
            var s, o;
            if (
              (n(i) &&
                ((s = {}),
                _(i, function (t) {
                  return (s[t] = 1);
                }),
                (i = s)),
              e)
            ) {
              for (o in ((s = {}), i)) s[o] = e(i[o]);
              i = s;
            }
            !(function (t, e) {
              var i,
                n,
                s,
                o = t._targets;
              for (i in e)
                for (n = o.length; n--; )
                  (s = (s = t._ptLookup[n][i]) && s.d) &&
                    (s._pt && (s = ni(s, i)),
                    s && s.modifier && s.modifier(e[i], t, o[n], i));
            })(t, i);
          };
        },
      };
    }
    _("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (ii[t] = qe[t]);
    }),
      _e.add($e.updateRoot),
      (yt = ii.to({}, { duration: 0 }));
    var oi =
      ii.registerPlugin(
        {
          name: "attr",
          init: function (t, e, i, n, s) {
            for (var o in e)
              this.add(
                t,
                "setAttribute",
                (t.getAttribute(o) || 0) + "",
                e[o],
                n,
                s,
                0,
                0,
                o
              ),
                this._props.push(o);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
          },
        },
        si("roundProps", Q),
        si("modifiers"),
        si("snap", K)
      ) || ii;
    function ri(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    }
    function ai(t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    }
    function li(t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    }
    function ci(t, e) {
      var i = e.s + e.c * t;
      e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
    }
    function di(t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    }
    function ui(t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    }
    function pi(t, e, i) {
      return (t.style[e] = i);
    }
    function hi(t, e, i) {
      return t.style.setProperty(e, i);
    }
    function fi(t, e, i) {
      return (t._gsap[e] = i);
    }
    function gi(t, e, i) {
      return (t._gsap.scaleX = t._gsap.scaleY = i);
    }
    function mi(t, e, i, n, s) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
    }
    function vi(t, e, i, n, s) {
      var o = t._gsap;
      (o[e] = i), o.renderTransform(s, o);
    }
    function yi(t, e) {
      var i = qi.createElementNS
        ? qi.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : qi.createElement(t);
      return i.style ? i : qi.createElement(t);
    }
    function _i(t, e, i) {
      var n = getComputedStyle(t);
      return (
        n[e] ||
        n.getPropertyValue(e.replace(mn, "-$1").toLowerCase()) ||
        n.getPropertyValue(e) ||
        (!i && _i(t, xn(e) || e, 1)) ||
        ""
      );
    }
    function bi() {
      "undefined" == typeof window ||
        ((Ri = window),
        (qi = Ri.document),
        (zi = qi.documentElement),
        (Bi = yi("div") || { style: {} }),
        (Wi = yi("div")),
        (bn = xn(bn)),
        (wn = xn(wn)),
        (Bi.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Xi = !!xn("perspective")),
        (Fi = 1));
    }
    function wi(t) {
      var e,
        i = yi(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        n = this.parentNode,
        s = this.nextSibling,
        o = this.style.cssText;
      if (
        (zi.appendChild(i),
        i.appendChild(this),
        (this.style.display = "block"),
        t)
      )
        try {
          (e = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = wi);
        } catch (t) {}
      else this._gsapBBox && (e = this._gsapBBox());
      return (
        n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
        zi.removeChild(i),
        (this.style.cssText = o),
        e
      );
    }
    function Ti(t, e) {
      for (var i = e.length; i--; )
        if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
    }
    function xi(t) {
      var e;
      try {
        e = t.getBBox();
      } catch (i) {
        e = wi.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === wi ||
          (e = wi.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +Ti(t, ["x", "cx", "x1"]) || 0,
              y: +Ti(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    }
    function ki(t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !xi(t));
    }
    function Si(t, e) {
      if (e) {
        var i = t.style;
        e in pn && (e = bn),
          i.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              i.removeProperty(e.replace(mn, "-$1").toLowerCase()))
            : i.removeAttribute(e);
      }
    }
    function Ci(t, e, i, n, s, o) {
      var r = new ti(t._pt, e, i, 0, 1, o ? ui : di);
      return ((t._pt = r).b = n), (r.e = s), t._props.push(i), r;
    }
    function Ei(t, e, i, n) {
      var s,
        o,
        r,
        a,
        l = parseFloat(i) || 0,
        c = (i + "").trim().substr((l + "").length) || "px",
        d = Bi.style,
        u = vn.test(e),
        p = "svg" === t.tagName.toLowerCase(),
        h = (p ? "client" : "offset") + (u ? "Width" : "Height"),
        f = "px" === n,
        g = "%" === n;
      return n === c || !l || kn[n] || kn[c]
        ? l
        : ("px" === c || f || (l = Ei(t, e, i, "px")),
          (a = t.getCTM && ki(t)),
          g && (pn[e] || ~e.indexOf("adius"))
            ? b((l / (a ? t.getBBox()[u ? "width" : "height"] : t[h])) * 100)
            : ((d[u ? "width" : "height"] = 100 + (f ? c : n)),
              (o =
                ~e.indexOf("adius") || ("em" === n && t.appendChild && !p)
                  ? t
                  : t.parentNode),
              a && (o = (t.ownerSVGElement || {}).parentNode),
              (o && o !== qi && o.appendChild) || (o = qi.body),
              (r = o._gsap) && g && r.width && u && r.time === _e.time
                ? b((l / r.width) * 100)
                : ((!g && "%" !== c) || (d.position = _i(t, "position")),
                  o === t && (d.position = "static"),
                  o.appendChild(Bi),
                  (s = Bi[h]),
                  o.removeChild(Bi),
                  (d.position = "absolute"),
                  u && g && (((r = v(o)).time = _e.time), (r.width = o[h])),
                  b(f ? (s * l) / 100 : s && l ? (100 / s) * l : 0))));
    }
    function Ai(t, e, i, n) {
      var s;
      return (
        Fi || bi(),
        e in _n &&
          "transform" !== e &&
          ~(e = _n[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        pn[e] && "transform" !== e
          ? ((s = Dn(t, n)),
            (s =
              "transformOrigin" !== e
                ? s[e]
                : On(_i(t, wn)) + " " + s.zOrigin + "px"))
          : ((s = t.style[e]) &&
              "auto" !== s &&
              !n &&
              !~(s + "").indexOf("calc(")) ||
            (s =
              (Cn[e] && Cn[e](t, e, i)) ||
              _i(t, e) ||
              y(t, e) ||
              ("opacity" === e ? 1 : 0)),
        i && !~(s + "").indexOf(" ") ? Ei(t, e, s, i) + i : s
      );
    }
    function Di(t, e, i, n) {
      if (!i || "none" === i) {
        var s = xn(e, t, 1),
          o = s && _i(t, s, 1);
        o && o !== i && ((e = s), (i = o));
      }
      var r,
        a,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        g,
        m,
        v,
        y = new ti(this._pt, t.style, e, 0, 1, Qe),
        _ = 0,
        b = 0;
      if (
        ((y.b = i),
        (y.e = n),
        (i += ""),
        "auto" == (n += "") &&
          ((t.style[e] = n), (n = _i(t, e) || n), (t.style[e] = i)),
        rt((r = [i, n])),
        (n = r[1]),
        (l = (i = r[0]).match(Yt) || []),
        (n.match(Yt) || []).length)
      ) {
        for (; (a = Yt.exec(n)); )
          (p = a[0]),
            (f = n.substring(_, a.index)),
            d
              ? (d = (d + 1) % 5)
              : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) ||
                (d = 1),
            p !== (u = l[b++] || "") &&
              ((c = parseFloat(u) || 0),
              (m = u.substr((c + "").length)),
              (v = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) &&
                (p = p.substr(2)),
              (h = parseFloat(p)),
              (g = p.substr((h + "").length)),
              (_ = Yt.lastIndex - g.length),
              g ||
                ((g = g || Pt.units[e] || m),
                _ === n.length && ((n += g), (y.e += g))),
              m !== g && (c = Ei(t, e, u, g) || 0),
              (y._pt = {
                _next: y._pt,
                p: f || 1 === b ? f : ",",
                s: c,
                c: v ? v * h : h - c,
                m: d && d < 4 ? Math.round : 0,
              }));
        y.c = _ < n.length ? n.substring(_, n.length) : "";
      } else y.r = "display" === e && "none" === n ? ui : di;
      return Kt.test(n) && (y.e = 0), (this._pt = y);
    }
    function Oi(t) {
      var e = t.split(" "),
        i = e[0],
        n = e[1] || "50%";
      return (
        ("top" !== i && "bottom" !== i && "left" !== n && "right" !== n) ||
          ((t = i), (i = n), (n = t)),
        (e[0] = Sn[i] || i),
        (e[1] = Sn[n] || n),
        e.join(" ")
      );
    }
    function Li(t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var i,
          n,
          s,
          o = e.t,
          r = o.style,
          a = e.u,
          l = o._gsap;
        if ("all" === a || !0 === a) (r.cssText = ""), (n = 1);
        else
          for (s = (a = a.split(",")).length; -1 < --s; )
            (i = a[s]),
              pn[i] && ((n = 1), (i = "transformOrigin" === i ? wn : bn)),
              Si(o, i);
        n &&
          (Si(o, bn),
          l &&
            (l.svg && o.removeAttribute("transform"),
            Dn(o, 1),
            (l.uncache = 1)));
      }
    }
    function $i(t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    }
    function Ni(t) {
      var e = _i(t, bn);
      return $i(e) ? En : e.substr(7).match(Xt).map(b);
    }
    function Pi(t, e) {
      var i,
        n,
        s,
        o,
        r = t._gsap || v(t),
        a = t.style,
        l = Ni(t);
      return r.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (l = [
            (s = t.transform.baseVal.consolidate().matrix).a,
            s.b,
            s.c,
            s.d,
            s.e,
            s.f,
          ]).join(",")
          ? En
          : l
        : (l !== En ||
            t.offsetParent ||
            t === zi ||
            r.svg ||
            ((s = a.display),
            (a.display = "block"),
            ((i = t.parentNode) && t.offsetParent) ||
              ((o = 1), (n = t.nextSibling), zi.appendChild(t)),
            (l = Ni(t)),
            s ? (a.display = s) : Si(t, "display"),
            o &&
              (n
                ? i.insertBefore(t, n)
                : i
                ? i.appendChild(t)
                : zi.removeChild(t))),
          e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    }
    function ji(t, e, i, n, s, o) {
      var r,
        a,
        l,
        c = t._gsap,
        d = s || Pi(t, !0),
        u = c.xOrigin || 0,
        p = c.yOrigin || 0,
        h = c.xOffset || 0,
        f = c.yOffset || 0,
        g = d[0],
        m = d[1],
        v = d[2],
        y = d[3],
        _ = d[4],
        b = d[5],
        w = e.split(" "),
        T = parseFloat(w[0]) || 0,
        x = parseFloat(w[1]) || 0;
      i
        ? d !== En &&
          (a = g * y - m * v) &&
          ((l = T * (-m / a) + x * (g / a) - (g * b - m * _) / a),
          (T = T * (y / a) + x * (-v / a) + (v * b - y * _) / a),
          (x = l))
        : ((T = (r = xi(t)).x + (~w[0].indexOf("%") ? (T / 100) * r.width : T)),
          (x =
            r.y + (~(w[1] || w[0]).indexOf("%") ? (x / 100) * r.height : x))),
        n || (!1 !== n && c.smooth)
          ? ((_ = T - u),
            (b = x - p),
            (c.xOffset = h + (_ * g + b * v) - _),
            (c.yOffset = f + (_ * m + b * y) - b))
          : (c.xOffset = c.yOffset = 0),
        (c.xOrigin = T),
        (c.yOrigin = x),
        (c.smooth = !!n),
        (c.origin = e),
        (c.originIsAbsolute = !!i),
        (t.style[wn] = "0px 0px"),
        o &&
          (Ci(o, c, "xOrigin", u, T),
          Ci(o, c, "yOrigin", p, x),
          Ci(o, c, "xOffset", h, c.xOffset),
          Ci(o, c, "yOffset", f, c.yOffset)),
        t.setAttribute("data-svg-origin", T + " " + x);
    }
    function Mi(t, e, i) {
      var n = U(e);
      return b(parseFloat(e) + parseFloat(Ei(t, "x", i + "px", n))) + n;
    }
    function Hi(t, e, i, s, o, r) {
      var a,
        l,
        c = 360,
        d = n(o),
        u = parseFloat(o) * (d && ~o.indexOf("rad") ? hn : 1),
        p = r ? u * r : u - s,
        h = s + p + "deg";
      return (
        d &&
          ("short" === (a = o.split("_")[1]) &&
            (p %= c) != p % 180 &&
            (p += p < 0 ? c : -c),
          "cw" === a && p < 0
            ? (p = ((p + 36e9) % c) - ~~(p / c) * c)
            : "ccw" === a && 0 < p && (p = ((p - 36e9) % c) - ~~(p / c) * c)),
        (t._pt = l = new ti(t._pt, e, i, s, p, ai)),
        (l.e = h),
        (l.u = "deg"),
        t._props.push(i),
        l
      );
    }
    function Ii(t, e, i) {
      var n,
        s,
        o,
        r,
        a,
        l,
        c,
        d = Wi.style,
        u = i._gsap;
      for (s in ((d.cssText =
        getComputedStyle(i).cssText + ";position:absolute;display:block;"),
      (d[bn] = e),
      qi.body.appendChild(Wi),
      (n = Dn(Wi, 1)),
      pn))
        (o = u[s]) !== (r = n[s]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 &&
          ((a = U(o) !== (c = U(r)) ? Ei(i, s, o, c) : parseFloat(o)),
          (l = parseFloat(r)),
          (t._pt = new ti(t._pt, u, s, a, l - a, ri)),
          (t._pt.u = c || 0),
          t._props.push(s));
      qi.body.removeChild(Wi);
    }
    (qe.version = $e.version = oi.version = "3.2.6"), (mt = 1), c() && be();
    var Ri,
      qi,
      zi,
      Fi,
      Bi,
      Wi,
      Ui,
      Xi,
      Yi = we.Power0,
      Vi = we.Power1,
      Qi = we.Power2,
      Ki = we.Power3,
      Gi = we.Power4,
      Ji = we.Linear,
      Zi = we.Quad,
      tn = we.Cubic,
      en = we.Quart,
      nn = we.Quint,
      sn = we.Strong,
      on = we.Elastic,
      rn = we.Back,
      an = we.SteppedEase,
      ln = we.Bounce,
      cn = we.Sine,
      dn = we.Expo,
      un = we.Circ,
      pn = {},
      hn = 180 / Math.PI,
      fn = Math.PI / 180,
      gn = Math.atan2,
      mn = /([A-Z])/g,
      vn = /(?:left|right|width|margin|padding|x)/i,
      yn = /[\s,\(]\S/,
      _n = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      bn = "transform",
      wn = bn + "Origin",
      Tn = "O,Moz,ms,Ms,Webkit".split(","),
      xn = function (t, e, i) {
        var n = (e || Bi).style,
          s = 5;
        if (t in n && !i) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          s-- && !(Tn[s] + t in n);

        );
        return s < 0 ? null : (3 === s ? "ms" : 0 <= s ? Tn[s] : "") + t;
      },
      kn = { deg: 1, rad: 1, turn: 1 },
      Sn = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      Cn = {
        clearProps: function (t, e, i, n, s) {
          if ("isFromStart" !== s.data) {
            var o = (t._pt = new ti(t._pt, e, i, 0, 0, Li));
            return (o.u = n), (o.pr = -10), (o.tween = s), t._props.push(i), 1;
          }
        },
      },
      En = [1, 0, 0, 1, 0, 0],
      An = {},
      Dn = function (t, e) {
        var i = t._gsap || new De(t);
        if ("x" in i && !e && !i.uncache) return i;
        var n,
          s,
          o,
          r,
          a,
          l,
          c,
          d,
          u,
          p,
          h,
          f,
          g,
          m,
          v,
          y,
          _,
          w,
          T,
          x,
          k,
          S,
          C,
          E,
          A,
          D,
          O,
          L,
          $,
          N,
          P,
          j,
          M = t.style,
          H = i.scaleX < 0,
          I = "deg",
          R = _i(t, wn) || "0";
        return (
          (n = s = o = l = c = d = u = p = h = 0),
          (r = a = 1),
          (i.svg = !(!t.getCTM || !ki(t))),
          (m = Pi(t, i.svg)),
          i.svg &&
            ((E = !i.uncache && t.getAttribute("data-svg-origin")),
            ji(t, E || R, !!E || i.originIsAbsolute, !1 !== i.smooth, m)),
          (f = i.xOrigin || 0),
          (g = i.yOrigin || 0),
          m !== En &&
            ((w = m[0]),
            (T = m[1]),
            (x = m[2]),
            (k = m[3]),
            (n = S = m[4]),
            (s = C = m[5]),
            6 === m.length
              ? ((r = Math.sqrt(w * w + T * T)),
                (a = Math.sqrt(k * k + x * x)),
                (l = w || T ? gn(T, w) * hn : 0),
                (u = x || k ? gn(x, k) * hn + l : 0) && (a *= Math.cos(u * fn)),
                i.svg &&
                  ((n -= f - (f * w + g * x)), (s -= g - (f * T + g * k))))
              : ((j = m[6]),
                (N = m[7]),
                (O = m[8]),
                (L = m[9]),
                ($ = m[10]),
                (P = m[11]),
                (n = m[12]),
                (s = m[13]),
                (o = m[14]),
                (c = (v = gn(j, $)) * hn),
                v &&
                  ((E = S * (y = Math.cos(-v)) + O * (_ = Math.sin(-v))),
                  (A = C * y + L * _),
                  (D = j * y + $ * _),
                  (O = S * -_ + O * y),
                  (L = C * -_ + L * y),
                  ($ = j * -_ + $ * y),
                  (P = N * -_ + P * y),
                  (S = E),
                  (C = A),
                  (j = D)),
                (d = (v = gn(-x, $)) * hn),
                v &&
                  ((y = Math.cos(-v)),
                  (P = k * (_ = Math.sin(-v)) + P * y),
                  (w = E = w * y - O * _),
                  (T = A = T * y - L * _),
                  (x = D = x * y - $ * _)),
                (l = (v = gn(T, w)) * hn),
                v &&
                  ((E = w * (y = Math.cos(v)) + T * (_ = Math.sin(v))),
                  (A = S * y + C * _),
                  (T = T * y - w * _),
                  (C = C * y - S * _),
                  (w = E),
                  (S = A)),
                c &&
                  359.9 < Math.abs(c) + Math.abs(l) &&
                  ((c = l = 0), (d = 180 - d)),
                (r = b(Math.sqrt(w * w + T * T + x * x))),
                (a = b(Math.sqrt(C * C + j * j))),
                (v = gn(S, C)),
                (u = 2e-4 < Math.abs(v) ? v * hn : 0),
                (h = P ? 1 / (P < 0 ? -P : P) : 0)),
            i.svg &&
              ((m = t.getAttribute("transform")),
              (i.forceCSS = t.setAttribute("transform", "") || !$i(_i(t, bn))),
              m && t.setAttribute("transform", m))),
          90 < Math.abs(u) &&
            Math.abs(u) < 270 &&
            (H
              ? ((r *= -1),
                (u += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((a *= -1), (u += u <= 0 ? 180 : -180))),
          (i.x =
            ((i.xPercent =
              n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)
              ? 0
              : n) + "px"),
          (i.y =
            ((i.yPercent =
              s && Math.round(t.offsetHeight / 2) === Math.round(-s) ? -50 : 0)
              ? 0
              : s) + "px"),
          (i.z = o + "px"),
          (i.scaleX = b(r)),
          (i.scaleY = b(a)),
          (i.rotation = b(l) + I),
          (i.rotationX = b(c) + I),
          (i.rotationY = b(d) + I),
          (i.skewX = u + I),
          (i.skewY = p + I),
          (i.transformPerspective = h + "px"),
          (i.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (M[wn] = On(R)),
          (i.xOffset = i.yOffset = 0),
          (i.force3D = Pt.force3D),
          (i.renderTransform = i.svg ? Mn : Xi ? jn : Ln),
          (i.uncache = 0),
          i
        );
      },
      On = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      Ln = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          jn(t, e);
      },
      $n = "0deg",
      Nn = "0px",
      Pn = ") ",
      jn = function (t, e) {
        var i = e || this,
          n = i.xPercent,
          s = i.yPercent,
          o = i.x,
          r = i.y,
          a = i.z,
          l = i.rotation,
          c = i.rotationY,
          d = i.rotationX,
          u = i.skewX,
          p = i.skewY,
          h = i.scaleX,
          f = i.scaleY,
          g = i.transformPerspective,
          m = i.force3D,
          v = i.target,
          y = i.zOrigin,
          _ = "",
          b = ("auto" === m && t && 1 !== t) || !0 === m;
        if (y && (d !== $n || c !== $n)) {
          var w,
            T = parseFloat(c) * fn,
            x = Math.sin(T),
            k = Math.cos(T);
          (T = parseFloat(d) * fn),
            (o = Mi(v, o, x * (w = Math.cos(T)) * -y)),
            (r = Mi(v, r, -Math.sin(T) * -y)),
            (a = Mi(v, a, k * w * -y + y));
        }
        g !== Nn && (_ += "perspective(" + g + Pn),
          (n || s) && (_ += "translate(" + n + "%, " + s + "%) "),
          (!b && o === Nn && r === Nn && a === Nn) ||
            (_ +=
              a !== Nn || b
                ? "translate3d(" + o + ", " + r + ", " + a + ") "
                : "translate(" + o + ", " + r + Pn),
          l !== $n && (_ += "rotate(" + l + Pn),
          c !== $n && (_ += "rotateY(" + c + Pn),
          d !== $n && (_ += "rotateX(" + d + Pn),
          (u === $n && p === $n) || (_ += "skew(" + u + ", " + p + Pn),
          (1 === h && 1 === f) || (_ += "scale(" + h + ", " + f + Pn),
          (v.style[bn] = _ || "translate(0, 0)");
      },
      Mn = function (t, e) {
        var i,
          n,
          s,
          o,
          r,
          a = e || this,
          l = a.xPercent,
          c = a.yPercent,
          d = a.x,
          u = a.y,
          p = a.rotation,
          h = a.skewX,
          f = a.skewY,
          g = a.scaleX,
          m = a.scaleY,
          v = a.target,
          y = a.xOrigin,
          _ = a.yOrigin,
          w = a.xOffset,
          T = a.yOffset,
          x = a.forceCSS,
          k = parseFloat(d),
          S = parseFloat(u);
        (p = parseFloat(p)),
          (h = parseFloat(h)),
          (f = parseFloat(f)) && ((h += f = parseFloat(f)), (p += f)),
          p || h
            ? ((p *= fn),
              (h *= fn),
              (i = Math.cos(p) * g),
              (n = Math.sin(p) * g),
              (s = Math.sin(p - h) * -m),
              (o = Math.cos(p - h) * m),
              h &&
                ((f *= fn),
                (r = Math.tan(h - f)),
                (s *= r = Math.sqrt(1 + r * r)),
                (o *= r),
                f &&
                  ((r = Math.tan(f)),
                  (i *= r = Math.sqrt(1 + r * r)),
                  (n *= r))),
              (i = b(i)),
              (n = b(n)),
              (s = b(s)),
              (o = b(o)))
            : ((i = g), (o = m), (n = s = 0)),
          ((k && !~(d + "").indexOf("px")) ||
            (S && !~(u + "").indexOf("px"))) &&
            ((k = Ei(v, "x", d, "px")), (S = Ei(v, "y", u, "px"))),
          (y || _ || w || T) &&
            ((k = b(k + y - (y * i + _ * s) + w)),
            (S = b(S + _ - (y * n + _ * o) + T))),
          (l || c) &&
            ((k = b(k + (l / 100) * (r = v.getBBox()).width)),
            (S = b(S + (c / 100) * r.height))),
          (r =
            "matrix(" +
            i +
            "," +
            n +
            "," +
            s +
            "," +
            o +
            "," +
            k +
            "," +
            S +
            ")"),
          v.setAttribute("transform", r),
          x && (v.style[bn] = r);
      };
    _("padding,margin,Width,Radius", function (t, e) {
      var i = "Right",
        n = "Bottom",
        s = "Left",
        o = (
          e < 3 ? ["Top", i, n, s] : ["Top" + s, "Top" + i, n + i, n + s]
        ).map(function (i) {
          return e < 2 ? t + i : "border" + i + t;
        });
      Cn[1 < e ? "border" + t : t] = function (t, e, i, n, s) {
        var r, a;
        if (arguments.length < 4)
          return (
            (r = o.map(function (e) {
              return Ai(t, e, i);
            })),
            5 === (a = r.join(" ")).split(r[0]).length ? r[0] : a
          );
        (r = (n + "").split(" ")),
          (a = {}),
          o.forEach(function (t, e) {
            return (a[t] = r[e] = r[e] || r[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, s);
      };
    });
    var Hn,
      In,
      Rn = {
        name: "css",
        register: bi,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, i, n, s) {
          var o,
            r,
            a,
            l,
            c,
            d,
            u,
            h,
            f,
            g,
            m,
            v,
            y,
            _,
            b,
            w = this._props,
            T = t.style;
          for (u in (Fi || bi(), e))
            if (
              "autoRound" !== u &&
              ((r = e[u]), !ie[u] || !Ne(u, e, i, n, t, s))
            )
              if (
                ((c = typeof r),
                (d = Cn[u]),
                "function" === c && (c = typeof (r = r.call(i, n, t, s))),
                "string" === c && ~r.indexOf("random(") && (r = Z(r)),
                d)
              )
                d(this, t, u, r, i) && (b = 1);
              else if ("--" === u.substr(0, 2))
                this.add(
                  T,
                  "setProperty",
                  getComputedStyle(t).getPropertyValue(u) + "",
                  r + "",
                  n,
                  s,
                  0,
                  0,
                  u
                );
              else {
                if (
                  ((o = Ai(t, u)),
                  (l = parseFloat(o)),
                  (g =
                    "string" === c && "=" === r.charAt(1)
                      ? +(r.charAt(0) + "1")
                      : 0) && (r = r.substr(2)),
                  (a = parseFloat(r)),
                  u in _n &&
                    ("autoAlpha" === u &&
                      (1 === l &&
                        "hidden" === Ai(t, "visibility") &&
                        a &&
                        (l = 0),
                      Ci(
                        this,
                        T,
                        "visibility",
                        l ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== u &&
                      "transform" !== u &&
                      ~(u = _n[u]).indexOf(",") &&
                      (u = u.split(",")[0])),
                  (m = u in pn))
                )
                  if (
                    (v ||
                      ((y = t._gsap).renderTransform || Dn(t),
                      (_ = !1 !== e.smoothOrigin && y.smooth),
                      ((v = this._pt =
                        new ti(
                          this._pt,
                          T,
                          bn,
                          0,
                          1,
                          y.renderTransform,
                          y,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === u)
                  )
                    (this._pt = new ti(
                      this._pt,
                      y,
                      "scaleY",
                      y.scaleY,
                      g ? g * a : a - y.scaleY
                    )),
                      w.push("scaleY", u),
                      (u += "X");
                  else {
                    if ("transformOrigin" === u) {
                      (r = Oi(r)),
                        y.svg
                          ? ji(t, r, 0, _, 0, this)
                          : ((f = parseFloat(r.split(" ")[2]) || 0) !==
                              y.zOrigin && Ci(this, y, "zOrigin", y.zOrigin, f),
                            Ci(this, T, u, On(o), On(r)));
                      continue;
                    }
                    if ("svgOrigin" === u) {
                      ji(t, r, 1, _, 0, this);
                      continue;
                    }
                    if (u in An) {
                      Hi(this, y, u, l, r, g);
                      continue;
                    }
                    if ("smoothOrigin" === u) {
                      Ci(this, y, "smooth", y.smooth, r);
                      continue;
                    }
                    if ("force3D" === u) {
                      y[u] = r;
                      continue;
                    }
                    if ("transform" === u) {
                      Ii(this, r, t);
                      continue;
                    }
                  }
                else u in T || (u = xn(u) || u);
                if (
                  m ||
                  ((a || 0 === a) && (l || 0 === l) && !yn.test(r) && u in T)
                )
                  (h = (o + "").substr((l + "").length)) !==
                    (f =
                      (r + "").substr(((a = a || 0) + "").length) ||
                      (u in Pt.units ? Pt.units[u] : h)) &&
                    (l = Ei(t, u, o, f)),
                    (this._pt = new ti(
                      this._pt,
                      m ? y : T,
                      u,
                      l,
                      g ? g * a : a - l,
                      "px" !== f || !1 === e.autoRound || m ? ri : ci
                    )),
                    (this._pt.u = f || 0),
                    h !== f && ((this._pt.b = o), (this._pt.r = li));
                else if (u in T) Di.call(this, t, u, o, r);
                else {
                  if (!(u in t)) {
                    p(u, r);
                    continue;
                  }
                  this.add(t, u, t[u], r, n, s);
                }
                w.push(u);
              }
          b && Ze(this);
        },
        get: Ai,
        aliases: _n,
        getSetter: function (t, e, i) {
          var n = _n[e];
          return (
            n && n.indexOf(",") < 0 && (e = n),
            e in pn && e !== wn && (t._gsap.x || Ai(t, "x"))
              ? i && Ui === i
                ? "scale" === e
                  ? gi
                  : fi
                : (Ui = i || {}) && ("scale" === e ? mi : vi)
              : t.style && !r(t.style[e])
              ? pi
              : ~e.indexOf("-")
              ? hi
              : Xe(t, e)
          );
        },
        core: { _removeProperty: Si, _getMatrix: Pi },
      };
    (oi.utils.checkPrefix = xn),
      (In = _(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
          "," +
          (Hn = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          pn[t] = 1;
        }
      )),
      _(Hn, function (t) {
        (Pt.units[t] = "deg"), (An[t] = 1);
      }),
      (_n[In[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Hn),
      _(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          _n[e[1]] = In[e[0]];
        }
      ),
      _(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          Pt.units[t] = "px";
        }
      ),
      oi.registerPlugin(Rn);
    var qn = oi.registerPlugin(Rn) || oi,
      zn = qn.core.Tween;
    (t.Back = rn),
      (t.Bounce = ln),
      (t.CSSPlugin = Rn),
      (t.Circ = un),
      (t.Cubic = tn),
      (t.Elastic = on),
      (t.Expo = dn),
      (t.Linear = Ji),
      (t.Power0 = Yi),
      (t.Power1 = Vi),
      (t.Power2 = Qi),
      (t.Power3 = Ki),
      (t.Power4 = Gi),
      (t.Quad = Zi),
      (t.Quart = en),
      (t.Quint = nn),
      (t.Sine = cn),
      (t.SteppedEase = an),
      (t.Strong = sn),
      (t.TimelineLite = $e),
      (t.TimelineMax = $e),
      (t.TweenLite = qe),
      (t.TweenMax = zn),
      (t.default = qn),
      (t.gsap = qn),
      "undefined" == typeof window || window !== t
        ? Object.defineProperty(t, "__esModule", { value: !0 })
        : delete t.default;
  }),
  (window.onload = function () {
    gsap.to([".loading-screen p", ".loading-screen .line"], {
      ease: "power3.in",
      duration: 0.6,
      opacity: 0,
      y: "100%",
      onComplete: function () {
        gsap.to(".loading-screen", {
          ease: "power3.inOut",
          duration: 1,
          opacity: 0,
          delay: 0.3,
          zIndex: -100,
          onComplete: function () {},
        });
      },
    });
  }),
  $("body").append(
    '<div class="img-box"><div class="img-wrapper"><div class="img-wrapper-inner"></div></div></div>'
  ),
  $(".item").each(function () {
    var t = $(this).data("id");
    $(".img-wrapper-inner").append(
      '<div class="img" style="background: url(assets/images/' +
        t +
        '.jpg)" data-id="' +
        t +
        '"></div>'
    );
  }),
  $(".carousel").on("init", function () {
    var t = $(".item.slick-current").data("id");
    $(".img-wrapper-in  cner .img[data-id='" + t + "']").addClass("active");
  }),
  $(".carousel").on("afterChange", function (t, e, i) {
    var n = $(".item.slick-current").data("id");
    $(".img-wrapper-inner .img").removeClass("active"),
      $(".img-wrapper-inner .img[data-id='" + n + "']").addClass("active");
  }),
  $(".carousel").slick({
    dots: !1,
    infinite: !0,
    speed: 450,
    centerMode: !0,
    variableWidth: !0,
    arrows: !1,
    edgeFriction: 0.5,
    slidesToShow: 2,
    slidesToScroll: 2,
  }),
  window.addEventListener("wheel", function (t) {
    t.deltaY < 0
      ? $(".carousel").slick("slickPrev")
      : t.deltaY > 0 && $(".carousel").slick("slickNext");
  });
