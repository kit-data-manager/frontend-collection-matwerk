var ti = Object.defineProperty;
var ni = (e, t, n) => t in e ? ti(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var st = (e, t, n) => (ni(e, typeof t != "symbol" ? t + "" : t, n), n);
const ri = `<div class="mapping-container">
	<h2 class="mapping-title">Choose a Mapping</h2>
	<div class="mapping-input-container">
		<input id="mappingchooser" class="mapping-input" placeholder="Select or search your mapping here." />
	</div>
</div>
<input type="file" id="fileUpload" />`;
/*!
 * FilePond 4.30.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const ii = (e) => e instanceof HTMLElement, si = (e, t = [], n = []) => {
  const r = {
    ...e
  }, i = [], o = [], s = () => ({ ...r }), l = () => {
    const f = [...i];
    return i.length = 0, f;
  }, a = () => {
    const f = [...o];
    o.length = 0, f.forEach(({ type: E, data: L }) => {
      d(E, L);
    });
  }, d = (f, E, L) => {
    if (L && !document.hidden) {
      o.push({ type: f, data: E });
      return;
    }
    g[f] && g[f](E), i.push({
      type: f,
      data: E
    });
  }, c = (f, ...E) => m[f] ? m[f](...E) : null, p = {
    getState: s,
    processActionQueue: l,
    processDispatchQueue: a,
    dispatch: d,
    query: c
  };
  let m = {};
  t.forEach((f) => {
    m = {
      ...f(r),
      ...m
    };
  });
  let g = {};
  return n.forEach((f) => {
    g = {
      ...f(d, c, r),
      ...g
    };
  }), p;
}, oi = (e, t, n) => {
  if (typeof n == "function") {
    e[t] = n;
    return;
  }
  Object.defineProperty(e, t, { ...n });
}, Q = (e, t) => {
  for (const n in e)
    e.hasOwnProperty(n) && t(n, e[n]);
}, Pe = (e) => {
  const t = {};
  return Q(e, (n) => {
    oi(t, n, e[n]);
  }), t;
}, J = (e, t, n = null) => {
  if (n === null)
    return e.getAttribute(t) || e.hasAttribute(t);
  e.setAttribute(t, n);
}, ai = "http://www.w3.org/2000/svg", li = ["svg", "path"], hn = (e) => li.includes(e), mt = (e, t, n = {}) => {
  typeof t == "object" && (n = t, t = null);
  const r = hn(e) ? document.createElementNS(ai, e) : document.createElement(e);
  return t && (hn(e) ? J(r, "class", t) : r.className = t), Q(n, (i, o) => {
    J(r, i, o);
  }), r;
}, ci = (e) => (t, n) => {
  typeof n < "u" && e.children[n] ? e.insertBefore(t, e.children[n]) : e.appendChild(t);
}, di = (e, t) => (n, r) => (typeof r < "u" ? t.splice(r, 0, n) : t.push(n), n), fi = (e, t) => (n) => (t.splice(t.indexOf(n), 1), n.element.parentNode && e.removeChild(n.element), n), ui = (() => typeof window < "u" && typeof window.document < "u")(), lr = () => ui, pi = lr() ? mt("svg") : {}, mi = "children" in pi ? (e) => e.children.length : (e) => e.childNodes.length, cr = (e, t, n, r) => {
  const i = n[0] || e.left, o = n[1] || e.top, s = i + e.width, l = o + e.height * (r[1] || 1), a = {
    // the rectangle of the element itself
    element: {
      ...e
    },
    // the rectangle of the element expanded to contain its children, does not include any margins
    inner: {
      left: e.left,
      top: e.top,
      right: e.right,
      bottom: e.bottom
    },
    // the rectangle of the element expanded to contain its children including own margin and child margins
    // margins will be added after we've recalculated the size
    outer: {
      left: i,
      top: o,
      right: s,
      bottom: l
    }
  };
  return t.filter((d) => !d.isRectIgnored()).map((d) => d.rect).forEach((d) => {
    In(a.inner, { ...d.inner }), In(a.outer, { ...d.outer });
  }), _n(a.inner), a.outer.bottom += a.element.marginBottom, a.outer.right += a.element.marginRight, _n(a.outer), a;
}, In = (e, t) => {
  t.top += e.top, t.right += e.left, t.bottom += e.top, t.left += e.left, t.bottom > e.bottom && (e.bottom = t.bottom), t.right > e.right && (e.right = t.right);
}, _n = (e) => {
  e.width = e.right - e.left, e.height = e.bottom - e.top;
}, Ne = (e) => typeof e == "number", Ei = (e, t, n, r = 1e-3) => Math.abs(e - t) < r && Math.abs(n) < r, gi = (
  // default options
  ({ stiffness: e = 0.5, damping: t = 0.75, mass: n = 10 } = {}) => {
    let r = null, i = null, o = 0, s = !1;
    const d = Pe({
      interpolate: (c, p) => {
        if (s)
          return;
        if (!(Ne(r) && Ne(i))) {
          s = !0, o = 0;
          return;
        }
        const m = -(i - r) * e;
        o += m / n, i += o, o *= t, Ei(i, r, o) || p ? (i = r, o = 0, s = !0, d.onupdate(i), d.oncomplete(i)) : d.onupdate(i);
      },
      target: {
        set: (c) => {
          if (Ne(c) && !Ne(i) && (i = c), r === null && (r = c, i = c), r = c, i === r || typeof r > "u") {
            s = !0, o = 0, d.onupdate(i), d.oncomplete(i);
            return;
          }
          s = !1;
        },
        get: () => r
      },
      resting: {
        get: () => s
      },
      onupdate: (c) => {
      },
      oncomplete: (c) => {
      }
    });
    return d;
  }
), hi = (e) => e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e, Ii = (
  // default values
  ({ duration: e = 500, easing: t = hi, delay: n = 0 } = {}) => {
    let r = null, i, o, s = !0, l = !1, a = null;
    const c = Pe({
      interpolate: (p, m) => {
        s || a === null || (r === null && (r = p), !(p - r < n) && (i = p - r - n, i >= e || m ? (i = 1, o = l ? 0 : 1, c.onupdate(o * a), c.oncomplete(o * a), s = !0) : (o = i / e, c.onupdate((i >= 0 ? t(l ? 1 - o : o) : 0) * a))));
      },
      target: {
        get: () => l ? 0 : a,
        set: (p) => {
          if (a === null) {
            a = p, c.onupdate(p), c.oncomplete(p);
            return;
          }
          p < a ? (a = 1, l = !0) : (l = !1, a = p), s = !1, r = null;
        }
      },
      resting: {
        get: () => s
      },
      onupdate: (p) => {
      },
      oncomplete: (p) => {
      }
    });
    return c;
  }
), Tn = {
  spring: gi,
  tween: Ii
}, _i = (e, t, n) => {
  const r = e[t] && typeof e[t][n] == "object" ? e[t][n] : e[t] || e, i = typeof r == "string" ? r : r.type, o = typeof r == "object" ? { ...r } : {};
  return Tn[i] ? Tn[i](o) : null;
}, Qt = (e, t, n, r = !1) => {
  t = Array.isArray(t) ? t : [t], t.forEach((i) => {
    e.forEach((o) => {
      let s = o, l = () => n[o], a = (d) => n[o] = d;
      typeof o == "object" && (s = o.key, l = o.getter || l, a = o.setter || a), !(i[s] && !r) && (i[s] = {
        get: l,
        set: a
      });
    });
  });
}, Ti = ({ mixinConfig: e, viewProps: t, viewInternalAPI: n, viewExternalAPI: r }) => {
  const i = { ...t }, o = [];
  return Q(e, (s, l) => {
    const a = _i(l);
    if (!a)
      return;
    a.onupdate = (c) => {
      t[s] = c;
    }, a.target = i[s], Qt([{
      key: s,
      setter: (c) => {
        a.target !== c && (a.target = c);
      },
      getter: () => t[s]
    }], [n, r], t, !0), o.push(a);
  }), {
    write: (s) => {
      let l = document.hidden, a = !0;
      return o.forEach((d) => {
        d.resting || (a = !1), d.interpolate(s, l);
      }), a;
    },
    destroy: () => {
    }
  };
}, Ri = (e) => (t, n) => {
  e.addEventListener(t, n);
}, bi = (e) => (t, n) => {
  e.removeEventListener(t, n);
}, Oi = ({
  mixinConfig: e,
  viewProps: t,
  viewInternalAPI: n,
  viewExternalAPI: r,
  viewState: i,
  view: o
}) => {
  const s = [], l = Ri(o.element), a = bi(o.element);
  return r.on = (d, c) => {
    s.push({
      type: d,
      fn: c
    }), l(d, c);
  }, r.off = (d, c) => {
    s.splice(s.findIndex((p) => p.type === d && p.fn === c), 1), a(d, c);
  }, {
    write: () => !0,
    destroy: () => {
      s.forEach((d) => {
        a(d.type, d.fn);
      });
    }
  };
}, yi = ({ mixinConfig: e, viewProps: t, viewExternalAPI: n }) => {
  Qt(e, n, t);
}, ce = (e) => e != null, Si = {
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  originX: 0,
  originY: 0
}, Di = ({ mixinConfig: e, viewProps: t, viewInternalAPI: n, viewExternalAPI: r, view: i }) => {
  const o = { ...t }, s = {};
  Qt(e, [n, r], t);
  const l = () => [t.translateX || 0, t.translateY || 0], a = () => [t.scaleX || 0, t.scaleY || 0], d = () => i.rect ? cr(i.rect, i.childViews, l(), a()) : null;
  return n.rect = { get: d }, r.rect = { get: d }, e.forEach((c) => {
    t[c] = typeof o[c] > "u" ? Si[c] : o[c];
  }), {
    write: () => {
      if (Ai(s, t))
        return wi(i.element, t), Object.assign(s, { ...t }), !0;
    },
    destroy: () => {
    }
  };
}, Ai = (e, t) => {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !0;
  for (const n in t)
    if (t[n] !== e[n])
      return !0;
  return !1;
}, wi = (e, {
  opacity: t,
  perspective: n,
  translateX: r,
  translateY: i,
  scaleX: o,
  scaleY: s,
  rotateX: l,
  rotateY: a,
  rotateZ: d,
  originX: c,
  originY: p,
  width: m,
  height: g
}) => {
  let f = "", E = "";
  (ce(c) || ce(p)) && (E += `transform-origin: ${c || 0}px ${p || 0}px;`), ce(n) && (f += `perspective(${n}px) `), (ce(r) || ce(i)) && (f += `translate3d(${r || 0}px, ${i || 0}px, 0) `), (ce(o) || ce(s)) && (f += `scale3d(${ce(o) ? o : 1}, ${ce(s) ? s : 1}, 1) `), ce(d) && (f += `rotateZ(${d}rad) `), ce(l) && (f += `rotateX(${l}rad) `), ce(a) && (f += `rotateY(${a}rad) `), f.length && (E += `transform:${f};`), ce(t) && (E += `opacity:${t};`, t === 0 && (E += "visibility:hidden;"), t < 1 && (E += "pointer-events:none;")), ce(g) && (E += `height:${g}px;`), ce(m) && (E += `width:${m}px;`);
  const L = e.elementCurrentStyle || "";
  (E.length !== L.length || E !== L) && (e.style.cssText = E, e.elementCurrentStyle = E);
}, Li = {
  styles: Di,
  listeners: Oi,
  animations: Ti,
  apis: yi
}, Rn = (e = {}, t = {}, n = {}) => (t.layoutCalculated || (e.paddingTop = parseInt(n.paddingTop, 10) || 0, e.marginTop = parseInt(n.marginTop, 10) || 0, e.marginRight = parseInt(n.marginRight, 10) || 0, e.marginBottom = parseInt(n.marginBottom, 10) || 0, e.marginLeft = parseInt(n.marginLeft, 10) || 0, t.layoutCalculated = !0), e.left = t.offsetLeft || 0, e.top = t.offsetTop || 0, e.width = t.offsetWidth || 0, e.height = t.offsetHeight || 0, e.right = e.left + e.width, e.bottom = e.top + e.height, e.scrollTop = t.scrollTop, e.hidden = t.offsetParent === null, e), ee = (
  // default view definition
  ({
    // element definition
    tag: e = "div",
    name: t = null,
    attributes: n = {},
    // view interaction
    read: r = () => {
    },
    write: i = () => {
    },
    create: o = () => {
    },
    destroy: s = () => {
    },
    // hooks
    filterFrameActionsForChild: l = (g, f) => f,
    didCreateView: a = () => {
    },
    didWriteView: d = () => {
    },
    // rect related
    ignoreRect: c = !1,
    ignoreRectUpdate: p = !1,
    // mixins
    mixins: m = []
  } = {}) => (g, f = {}) => {
    const E = mt(e, `filepond--${t}`, n), L = window.getComputedStyle(E, null), u = Rn();
    let D = null, S = !1;
    const b = [], w = [], G = {}, X = {}, A = [
      i
      // default writer
    ], N = [
      r
      // default reader
    ], H = [
      s
      // default destroy
    ], _ = () => E, F = () => b.concat(), $ = () => G, R = (T) => (V, me) => V(T, me), Y = () => D || (D = cr(u, b, [0, 0], [1, 1]), D), h = () => L, O = () => {
      D = null, b.forEach((me) => me._read()), !(p && u.width && u.height) && Rn(u, E, L);
      const V = { root: te, props: f, rect: u };
      N.forEach((me) => me(V));
    }, C = (T, V, me) => {
      let Ee = V.length === 0;
      return A.forEach((ne) => {
        ne({
          props: f,
          root: te,
          actions: V,
          timestamp: T,
          shouldOptimize: me
        }) === !1 && (Ee = !1);
      }), w.forEach((ne) => {
        ne.write(T) === !1 && (Ee = !1);
      }), b.filter((ne) => !!ne.element.parentNode).forEach((ne) => {
        ne._write(
          T,
          l(ne, V),
          me
        ) || (Ee = !1);
      }), b.forEach((ne, W) => {
        ne.element.parentNode || (te.appendChild(ne.element, W), ne._read(), ne._write(
          T,
          l(ne, V),
          me
        ), Ee = !1);
      }), S = Ee, d({
        props: f,
        root: te,
        actions: V,
        timestamp: T
      }), Ee;
    }, P = () => {
      w.forEach((T) => T.destroy()), H.forEach((T) => {
        T({ root: te, props: f });
      }), b.forEach((T) => T._destroy());
    }, z = {
      element: {
        get: _
      },
      style: {
        get: h
      },
      childViews: {
        get: F
      }
    }, j = {
      ...z,
      rect: {
        get: Y
      },
      // access to custom children references
      ref: {
        get: $
      },
      // dom modifiers
      is: (T) => t === T,
      appendChild: ci(E),
      createChildView: R(g),
      linkView: (T) => (b.push(T), T),
      unlinkView: (T) => {
        b.splice(b.indexOf(T), 1);
      },
      appendChildView: di(E, b),
      removeChildView: fi(E, b),
      registerWriter: (T) => A.push(T),
      registerReader: (T) => N.push(T),
      registerDestroyer: (T) => H.push(T),
      invalidateLayout: () => E.layoutCalculated = !1,
      // access to data store
      dispatch: g.dispatch,
      query: g.query
    }, Ce = {
      element: {
        get: _
      },
      childViews: {
        get: F
      },
      rect: {
        get: Y
      },
      resting: {
        get: () => S
      },
      isRectIgnored: () => c,
      _read: O,
      _write: C,
      _destroy: P
    }, je = {
      ...z,
      rect: {
        get: () => u
      }
    };
    Object.keys(m).sort((T, V) => T === "styles" ? 1 : V === "styles" ? -1 : 0).forEach((T) => {
      const V = Li[T]({
        mixinConfig: m[T],
        viewProps: f,
        viewState: X,
        viewInternalAPI: j,
        viewExternalAPI: Ce,
        view: Pe(je)
      });
      V && w.push(V);
    });
    const te = Pe(j);
    o({
      root: te,
      props: f
    });
    const oe = mi(E);
    return b.forEach((T, V) => {
      te.appendChild(T.element, oe + V);
    }), a(te), Pe(Ce);
  }
), vi = (e, t, n = 60) => {
  const r = "__framePainter";
  if (window[r]) {
    window[r].readers.push(e), window[r].writers.push(t);
    return;
  }
  window[r] = {
    readers: [e],
    writers: [t]
  };
  const i = window[r], o = 1e3 / n;
  let s = null, l = null, a = null, d = null;
  const c = () => {
    document.hidden ? (a = () => window.setTimeout(() => p(performance.now()), o), d = () => window.clearTimeout(l)) : (a = () => window.requestAnimationFrame(p), d = () => window.cancelAnimationFrame(l));
  };
  document.addEventListener("visibilitychange", () => {
    d && d(), c(), p(performance.now());
  });
  const p = (m) => {
    l = a(p), s || (s = m);
    const g = m - s;
    g <= o || (s = m - g % o, i.readers.forEach((f) => f()), i.writers.forEach((f) => f(m)));
  };
  return c(), p(performance.now()), {
    pause: () => {
      d(l);
    }
  };
}, fe = (e, t) => ({ root: n, props: r, actions: i = [], timestamp: o, shouldOptimize: s }) => {
  i.filter((l) => e[l.type]).forEach(
    (l) => e[l.type]({ root: n, props: r, action: l.data, timestamp: o, shouldOptimize: s })
  ), t && t({ root: n, props: r, actions: i, timestamp: o, shouldOptimize: s });
}, bn = (e, t) => t.parentNode.insertBefore(e, t), On = (e, t) => t.parentNode.insertBefore(e, t.nextSibling), It = (e) => Array.isArray(e), Ae = (e) => e == null, Pi = (e) => e.trim(), _t = (e) => "" + e, Ci = (e, t = ",") => Ae(e) ? [] : It(e) ? e : _t(e).split(t).map(Pi).filter((n) => n.length), dr = (e) => typeof e == "boolean", fr = (e) => dr(e) ? e : e === "true", de = (e) => typeof e == "string", ur = (e) => Ne(e) ? e : de(e) ? _t(e).replace(/[a-z]+/gi, "") : 0, ut = (e) => parseInt(ur(e), 10), yn = (e) => parseFloat(ur(e)), Xe = (e) => Ne(e) && isFinite(e) && Math.floor(e) === e, Sn = (e, t = 1e3) => {
  if (Xe(e))
    return e;
  let n = _t(e).trim();
  return /MB$/i.test(n) ? (n = n.replace(/MB$i/, "").trim(), ut(n) * t * t) : /KB/i.test(n) ? (n = n.replace(/KB$i/, "").trim(), ut(n) * t) : ut(n);
}, Ge = (e) => typeof e == "function", Mi = (e) => {
  let t = self, n = e.split("."), r = null;
  for (; r = n.shift(); )
    if (t = t[r], !t)
      return null;
  return t;
}, Dn = {
  process: "POST",
  patch: "PATCH",
  revert: "DELETE",
  fetch: "GET",
  restore: "GET",
  load: "GET"
}, Ni = (e) => {
  const t = {};
  return t.url = de(e) ? e : e.url || "", t.timeout = e.timeout ? parseInt(e.timeout, 10) : 0, t.headers = e.headers ? e.headers : {}, Q(Dn, (n) => {
    t[n] = Gi(n, e[n], Dn[n], t.timeout, t.headers);
  }), t.process = e.process || de(e) || e.url ? t.process : null, t.remove = e.remove || null, delete t.headers, t;
}, Gi = (e, t, n, r, i) => {
  if (t === null)
    return null;
  if (typeof t == "function")
    return t;
  const o = {
    url: n === "GET" || n === "PATCH" ? `?${e}=` : "",
    method: n,
    headers: i,
    withCredentials: !1,
    timeout: r,
    onload: null,
    ondata: null,
    onerror: null
  };
  if (de(t))
    return o.url = t, o;
  if (Object.assign(o, t), de(o.headers)) {
    const s = o.headers.split(/:(.+)/);
    o.headers = {
      header: s[0],
      value: s[1]
    };
  }
  return o.withCredentials = fr(o.withCredentials), o;
}, Fi = (e) => Ni(e), Ui = (e) => e === null, se = (e) => typeof e == "object" && e !== null, Bi = (e) => se(e) && de(e.url) && se(e.process) && se(e.revert) && se(e.restore) && se(e.fetch), kt = (e) => It(e) ? "array" : Ui(e) ? "null" : Xe(e) ? "int" : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e) ? "bytes" : Bi(e) ? "api" : typeof e, xi = (e) => e.replace(/{\s*'/g, '{"').replace(/'\s*}/g, '"}').replace(/'\s*:/g, '":').replace(/:\s*'/g, ':"').replace(/,\s*'/g, ',"').replace(/'\s*,/g, '",'), Vi = {
  array: Ci,
  boolean: fr,
  int: (e) => kt(e) === "bytes" ? Sn(e) : ut(e),
  number: yn,
  float: yn,
  bytes: Sn,
  string: (e) => Ge(e) ? e : _t(e),
  function: (e) => Mi(e),
  serverapi: Fi,
  object: (e) => {
    try {
      return JSON.parse(xi(e));
    } catch {
      return null;
    }
  }
}, ki = (e, t) => Vi[t](e), pr = (e, t, n) => {
  if (e === t)
    return e;
  let r = kt(e);
  if (r !== n) {
    const i = ki(e, n);
    if (r = kt(i), i === null)
      throw `Trying to assign value with incorrect type to "${option}", allowed type: "${n}"`;
    e = i;
  }
  return e;
}, qi = (e, t) => {
  let n = e;
  return {
    enumerable: !0,
    get: () => n,
    set: (r) => {
      n = pr(r, e, t);
    }
  };
}, Hi = (e) => {
  const t = {};
  return Q(e, (n) => {
    const r = e[n];
    t[n] = qi(r[0], r[1]);
  }), Pe(t);
}, Yi = (e) => ({
  // model
  items: [],
  // timeout used for calling update items
  listUpdateTimeout: null,
  // timeout used for stacking metadata updates
  itemUpdateTimeout: null,
  // queue of items waiting to be processed
  processingQueue: [],
  // options
  options: Hi(e)
}), Tt = (e, t = "-") => e.split(/(?=[A-Z])/).map((n) => n.toLowerCase()).join(t), zi = (e, t) => {
  const n = {};
  return Q(t, (r) => {
    n[r] = {
      get: () => e.getState().options[r],
      set: (i) => {
        e.dispatch(`SET_${Tt(r, "_").toUpperCase()}`, {
          value: i
        });
      }
    };
  }), n;
}, $i = (e) => (t, n, r) => {
  const i = {};
  return Q(e, (o) => {
    const s = Tt(o, "_").toUpperCase();
    i[`SET_${s}`] = (l) => {
      try {
        r.options[o] = l.value;
      } catch {
      }
      t(`DID_SET_${s}`, { value: r.options[o] });
    };
  }), i;
}, Wi = (e) => (t) => {
  const n = {};
  return Q(e, (r) => {
    n[`GET_${Tt(r, "_").toUpperCase()}`] = (i) => t.options[r];
  }), n;
}, Te = {
  API: 1,
  DROP: 2,
  BROWSE: 3,
  PASTE: 4,
  NONE: 5
}, Kt = () => Math.random().toString(36).substring(2, 11), Zt = (e, t) => e.splice(t, 1), Xi = (e, t) => {
  t ? e() : document.hidden ? Promise.resolve(1).then(e) : setTimeout(e, 0);
}, Rt = () => {
  const e = [], t = (r, i) => {
    Zt(
      e,
      e.findIndex((o) => o.event === r && (o.cb === i || !i))
    );
  }, n = (r, i, o) => {
    e.filter((s) => s.event === r).map((s) => s.cb).forEach((s) => Xi(() => s(...i), o));
  };
  return {
    fireSync: (r, ...i) => {
      n(r, i, !0);
    },
    fire: (r, ...i) => {
      n(r, i, !1);
    },
    on: (r, i) => {
      e.push({ event: r, cb: i });
    },
    onOnce: (r, i) => {
      e.push({
        event: r,
        cb: (...o) => {
          t(r, i), i(...o);
        }
      });
    },
    off: t
  };
}, mr = (e, t, n) => {
  Object.getOwnPropertyNames(e).filter((r) => !n.includes(r)).forEach(
    (r) => Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
  );
}, ji = [
  "fire",
  "process",
  "revert",
  "load",
  "on",
  "off",
  "onOnce",
  "retryLoad",
  "extend",
  "archive",
  "archived",
  "release",
  "released",
  "requestProcessing",
  "freeze"
], pe = (e) => {
  const t = {};
  return mr(e, t, ji), t;
}, Qi = (e) => {
  e.forEach((t, n) => {
    t.released && Zt(e, n);
  });
}, x = {
  INIT: 1,
  IDLE: 2,
  PROCESSING_QUEUED: 9,
  PROCESSING: 3,
  PROCESSING_COMPLETE: 5,
  PROCESSING_ERROR: 6,
  PROCESSING_REVERT_ERROR: 10,
  LOADING: 7,
  LOAD_ERROR: 8
}, ie = {
  INPUT: 1,
  LIMBO: 2,
  LOCAL: 3
}, Er = (e) => /[^0-9]+/.exec(e), gr = () => Er(1.1.toLocaleString())[0], Ki = () => {
  const e = gr(), t = 1e3.toLocaleString(), n = 1e3.toString();
  return t !== n ? Er(t)[0] : e === "." ? "," : ".";
}, I = {
  BOOLEAN: "boolean",
  INT: "int",
  NUMBER: "number",
  STRING: "string",
  ARRAY: "array",
  OBJECT: "object",
  FUNCTION: "function",
  ACTION: "action",
  SERVER_API: "serverapi",
  REGEX: "regex"
}, Jt = [], Re = (e, t, n) => new Promise((r, i) => {
  const o = Jt.filter((l) => l.key === e).map((l) => l.cb);
  if (o.length === 0) {
    r(t);
    return;
  }
  const s = o.shift();
  o.reduce(
    // loop over promises passing value to next promise
    (l, a) => l.then((d) => a(d, n)),
    // call initial filter, will return a promise
    s(t, n)
    // all executed
  ).then((l) => r(l)).catch((l) => i(l));
}), Ve = (e, t, n) => Jt.filter((r) => r.key === e).map((r) => r.cb(t, n)), Zi = (e, t) => Jt.push({ key: e, cb: t }), Ji = (e) => Object.assign(He, e), Et = () => ({ ...He }), es = (e) => {
  Q(e, (t, n) => {
    He[t] && (He[t][0] = pr(
      n,
      He[t][0],
      He[t][1]
    ));
  });
}, He = {
  // the id to add to the root element
  id: [null, I.STRING],
  // input field name to use
  name: ["filepond", I.STRING],
  // disable the field
  disabled: [!1, I.BOOLEAN],
  // classname to put on wrapper
  className: [null, I.STRING],
  // is the field required
  required: [!1, I.BOOLEAN],
  // Allow media capture when value is set
  captureMethod: [null, I.STRING],
  // - "camera", "microphone" or "camcorder",
  // - Does not work with multiple on apple devices
  // - If set, acceptedFileTypes must be made to match with media wildcard "image/*", "audio/*" or "video/*"
  // sync `acceptedFileTypes` property with `accept` attribute
  allowSyncAcceptAttribute: [!0, I.BOOLEAN],
  // Feature toggles
  allowDrop: [!0, I.BOOLEAN],
  // Allow dropping of files
  allowBrowse: [!0, I.BOOLEAN],
  // Allow browsing the file system
  allowPaste: [!0, I.BOOLEAN],
  // Allow pasting files
  allowMultiple: [!1, I.BOOLEAN],
  // Allow multiple files (disabled by default, as multiple attribute is also required on input to allow multiple)
  allowReplace: [!0, I.BOOLEAN],
  // Allow dropping a file on other file to replace it (only works when multiple is set to false)
  allowRevert: [!0, I.BOOLEAN],
  // Allows user to revert file upload
  allowRemove: [!0, I.BOOLEAN],
  // Allow user to remove a file
  allowProcess: [!0, I.BOOLEAN],
  // Allows user to process a file, when set to false, this removes the file upload button
  allowReorder: [!1, I.BOOLEAN],
  // Allow reordering of files
  allowDirectoriesOnly: [!1, I.BOOLEAN],
  // Allow only selecting directories with browse (no support for filtering dnd at this point)
  // Try store file if `server` not set
  storeAsFile: [!1, I.BOOLEAN],
  // Revert mode
  forceRevert: [!1, I.BOOLEAN],
  // Set to 'force' to require the file to be reverted before removal
  // Input requirements
  maxFiles: [null, I.INT],
  // Max number of files
  checkValidity: [!1, I.BOOLEAN],
  // Enables custom validity messages
  // Where to put file
  itemInsertLocationFreedom: [!0, I.BOOLEAN],
  // Set to false to always add items to begin or end of list
  itemInsertLocation: ["before", I.STRING],
  // Default index in list to add items that have been dropped at the top of the list
  itemInsertInterval: [75, I.INT],
  // Drag 'n Drop related
  dropOnPage: [!1, I.BOOLEAN],
  // Allow dropping of files anywhere on page (prevents browser from opening file if dropped outside of Up)
  dropOnElement: [!0, I.BOOLEAN],
  // Drop needs to happen on element (set to false to also load drops outside of Up)
  dropValidation: [!1, I.BOOLEAN],
  // Enable or disable validating files on drop
  ignoredFiles: [[".ds_store", "thumbs.db", "desktop.ini"], I.ARRAY],
  // Upload related
  instantUpload: [!0, I.BOOLEAN],
  // Should upload files immediately on drop
  maxParallelUploads: [2, I.INT],
  // Maximum files to upload in parallel
  allowMinimumUploadDuration: [!0, I.BOOLEAN],
  // if true uploads take at least 750 ms, this ensures the user sees the upload progress giving trust the upload actually happened
  // Chunks
  chunkUploads: [!1, I.BOOLEAN],
  // Enable chunked uploads
  chunkForce: [!1, I.BOOLEAN],
  // Force use of chunk uploads even for files smaller than chunk size
  chunkSize: [5e6, I.INT],
  // Size of chunks (5MB default)
  chunkRetryDelays: [[500, 1e3, 3e3], I.ARRAY],
  // Amount of times to retry upload of a chunk when it fails
  // The server api end points to use for uploading (see docs)
  server: [null, I.SERVER_API],
  // File size calculations, can set to 1024, this is only used for display, properties use file size base 1000
  fileSizeBase: [1e3, I.INT],
  // Labels and status messages
  labelFileSizeBytes: ["bytes", I.STRING],
  labelFileSizeKilobytes: ["KB", I.STRING],
  labelFileSizeMegabytes: ["MB", I.STRING],
  labelFileSizeGigabytes: ["GB", I.STRING],
  labelDecimalSeparator: [gr(), I.STRING],
  // Default is locale separator
  labelThousandsSeparator: [Ki(), I.STRING],
  // Default is locale separator
  labelIdle: [
    'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
    I.STRING
  ],
  labelInvalidField: ["Field contains invalid files", I.STRING],
  labelFileWaitingForSize: ["Waiting for size", I.STRING],
  labelFileSizeNotAvailable: ["Size not available", I.STRING],
  labelFileCountSingular: ["file in list", I.STRING],
  labelFileCountPlural: ["files in list", I.STRING],
  labelFileLoading: ["Loading", I.STRING],
  labelFileAdded: ["Added", I.STRING],
  // assistive only
  labelFileLoadError: ["Error during load", I.STRING],
  labelFileRemoved: ["Removed", I.STRING],
  // assistive only
  labelFileRemoveError: ["Error during remove", I.STRING],
  labelFileProcessing: ["Uploading", I.STRING],
  labelFileProcessingComplete: ["Upload complete", I.STRING],
  labelFileProcessingAborted: ["Upload cancelled", I.STRING],
  labelFileProcessingError: ["Error during upload", I.STRING],
  labelFileProcessingRevertError: ["Error during revert", I.STRING],
  labelTapToCancel: ["tap to cancel", I.STRING],
  labelTapToRetry: ["tap to retry", I.STRING],
  labelTapToUndo: ["tap to undo", I.STRING],
  labelButtonRemoveItem: ["Remove", I.STRING],
  labelButtonAbortItemLoad: ["Abort", I.STRING],
  labelButtonRetryItemLoad: ["Retry", I.STRING],
  labelButtonAbortItemProcessing: ["Cancel", I.STRING],
  labelButtonUndoItemProcessing: ["Undo", I.STRING],
  labelButtonRetryItemProcessing: ["Retry", I.STRING],
  labelButtonProcessItem: ["Upload", I.STRING],
  // make sure width and height plus viewpox are even numbers so icons are nicely centered
  iconRemove: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
    I.STRING
  ],
  iconProcess: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
    I.STRING
  ],
  iconRetry: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
    I.STRING
  ],
  iconUndo: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
    I.STRING
  ],
  iconDone: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
    I.STRING
  ],
  // event handlers
  oninit: [null, I.FUNCTION],
  onwarning: [null, I.FUNCTION],
  onerror: [null, I.FUNCTION],
  onactivatefile: [null, I.FUNCTION],
  oninitfile: [null, I.FUNCTION],
  onaddfilestart: [null, I.FUNCTION],
  onaddfileprogress: [null, I.FUNCTION],
  onaddfile: [null, I.FUNCTION],
  onprocessfilestart: [null, I.FUNCTION],
  onprocessfileprogress: [null, I.FUNCTION],
  onprocessfileabort: [null, I.FUNCTION],
  onprocessfilerevert: [null, I.FUNCTION],
  onprocessfile: [null, I.FUNCTION],
  onprocessfiles: [null, I.FUNCTION],
  onremovefile: [null, I.FUNCTION],
  onpreparefile: [null, I.FUNCTION],
  onupdatefiles: [null, I.FUNCTION],
  onreorderfiles: [null, I.FUNCTION],
  // hooks
  beforeDropFile: [null, I.FUNCTION],
  beforeAddFile: [null, I.FUNCTION],
  beforeRemoveFile: [null, I.FUNCTION],
  beforePrepareFile: [null, I.FUNCTION],
  // styles
  stylePanelLayout: [null, I.STRING],
  // null 'integrated', 'compact', 'circle'
  stylePanelAspectRatio: [null, I.STRING],
  // null or '3:2' or 1
  styleItemPanelAspectRatio: [null, I.STRING],
  styleButtonRemoveItemPosition: ["left", I.STRING],
  styleButtonProcessItemPosition: ["right", I.STRING],
  styleLoadIndicatorPosition: ["right", I.STRING],
  styleProgressIndicatorPosition: ["right", I.STRING],
  styleButtonRemoveItemAlign: [!1, I.BOOLEAN],
  // custom initial files array
  files: [[], I.ARRAY],
  // show support by displaying credits
  credits: [["https://pqina.nl/", "Powered by PQINA"], I.ARRAY]
}, Fe = (e, t) => Ae(t) ? e[0] || null : Xe(t) ? e[t] || null : (typeof t == "object" && (t = t.id), e.find((n) => n.id === t) || null), hr = (e) => {
  if (Ae(e))
    return e;
  if (/:/.test(e)) {
    const t = e.split(":");
    return t[1] / t[0];
  }
  return parseFloat(e);
}, be = (e) => e.filter((t) => !t.archived), ts = {
  EMPTY: 0,
  IDLE: 1,
  // waiting
  ERROR: 2,
  // a file is in error state
  BUSY: 3,
  // busy processing or loading
  READY: 4
  // all files uploaded
};
let ot = null;
const ns = () => {
  if (ot === null)
    try {
      const e = new DataTransfer();
      e.items.add(new File(["hello world"], "This_Works.txt"));
      const t = document.createElement("input");
      t.setAttribute("type", "file"), t.files = e.files, ot = t.files.length === 1;
    } catch {
      ot = !1;
    }
  return ot;
}, rs = [
  x.LOAD_ERROR,
  x.PROCESSING_ERROR,
  x.PROCESSING_REVERT_ERROR
], is = [
  x.LOADING,
  x.PROCESSING,
  x.PROCESSING_QUEUED,
  x.INIT
], ss = [x.PROCESSING_COMPLETE], os = (e) => rs.includes(e.status), as = (e) => is.includes(e.status), ls = (e) => ss.includes(e.status), An = (e) => se(e.options.server) && (se(e.options.server.process) || Ge(e.options.server.process)), cs = (e) => ({
  GET_STATUS: () => {
    const t = be(e.items), { EMPTY: n, ERROR: r, BUSY: i, IDLE: o, READY: s } = ts;
    return t.length === 0 ? n : t.some(os) ? r : t.some(as) ? i : t.some(ls) ? s : o;
  },
  GET_ITEM: (t) => Fe(e.items, t),
  GET_ACTIVE_ITEM: (t) => Fe(be(e.items), t),
  GET_ACTIVE_ITEMS: () => be(e.items),
  GET_ITEMS: () => e.items,
  GET_ITEM_NAME: (t) => {
    const n = Fe(e.items, t);
    return n ? n.filename : null;
  },
  GET_ITEM_SIZE: (t) => {
    const n = Fe(e.items, t);
    return n ? n.fileSize : null;
  },
  GET_STYLES: () => Object.keys(e.options).filter((t) => /^style/.test(t)).map((t) => ({
    name: t,
    value: e.options[t]
  })),
  GET_PANEL_ASPECT_RATIO: () => /circle/.test(e.options.stylePanelLayout) ? 1 : hr(e.options.stylePanelAspectRatio),
  GET_ITEM_PANEL_ASPECT_RATIO: () => e.options.styleItemPanelAspectRatio,
  GET_ITEMS_BY_STATUS: (t) => be(e.items).filter((n) => n.status === t),
  GET_TOTAL_ITEMS: () => be(e.items).length,
  SHOULD_UPDATE_FILE_INPUT: () => e.options.storeAsFile && ns() && !An(e),
  IS_ASYNC: () => An(e),
  GET_FILE_SIZE_LABELS: (t) => ({
    labelBytes: t("GET_LABEL_FILE_SIZE_BYTES") || void 0,
    labelKilobytes: t("GET_LABEL_FILE_SIZE_KILOBYTES") || void 0,
    labelMegabytes: t("GET_LABEL_FILE_SIZE_MEGABYTES") || void 0,
    labelGigabytes: t("GET_LABEL_FILE_SIZE_GIGABYTES") || void 0
  })
}), ds = (e) => {
  const t = be(e.items).length;
  if (!e.options.allowMultiple)
    return t === 0;
  const n = e.options.maxFiles;
  return n === null || t < n;
}, Ir = (e, t, n) => Math.max(Math.min(n, e), t), fs = (e, t, n) => e.splice(t, 0, n), us = (e, t, n) => Ae(t) ? null : typeof n > "u" ? (e.push(t), t) : (n = Ir(n, 0, e.length), fs(e, n, t), t), qt = (e) => /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
  e
), et = (e) => e.split("/").pop().split("?").shift(), bt = (e) => e.split(".").pop(), ps = (e) => {
  if (typeof e != "string")
    return "";
  const t = e.split("/").pop();
  return /svg/.test(t) ? "svg" : /zip|compressed/.test(t) ? "zip" : /plain/.test(t) ? "txt" : /msword/.test(t) ? "doc" : /[a-z]+/.test(t) ? t === "jpeg" ? "jpg" : t : "";
}, Qe = (e, t = "") => (t + e).slice(-t.length), _r = (e = /* @__PURE__ */ new Date()) => `${e.getFullYear()}-${Qe(e.getMonth() + 1, "00")}-${Qe(
  e.getDate(),
  "00"
)}_${Qe(e.getHours(), "00")}-${Qe(e.getMinutes(), "00")}-${Qe(
  e.getSeconds(),
  "00"
)}`, $e = (e, t, n = null, r = null) => {
  const i = typeof n == "string" ? e.slice(0, e.size, n) : e.slice(0, e.size, e.type);
  return i.lastModifiedDate = /* @__PURE__ */ new Date(), e._relativePath && (i._relativePath = e._relativePath), de(t) || (t = _r()), t && r === null && bt(t) ? i.name = t : (r = r || ps(i.type), i.name = t + (r ? "." + r : "")), i;
}, ms = () => window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, Tr = (e, t) => {
  const n = ms();
  if (n) {
    const r = new n();
    return r.append(e), r.getBlob(t);
  }
  return new Blob([e], {
    type: t
  });
}, Es = (e, t) => {
  const n = new ArrayBuffer(e.length), r = new Uint8Array(n);
  for (let i = 0; i < e.length; i++)
    r[i] = e.charCodeAt(i);
  return Tr(n, t);
}, Rr = (e) => (/^data:(.+);/.exec(e) || [])[1] || null, gs = (e) => e.split(",")[1].replace(/\s/g, ""), hs = (e) => atob(gs(e)), Is = (e) => {
  const t = Rr(e), n = hs(e);
  return Es(n, t);
}, _s = (e, t, n) => $e(Is(e), t, null, n), Ts = (e) => {
  if (!/^content-disposition:/i.test(e))
    return null;
  const t = e.split(/filename=|filename\*=.+''/).splice(1).map((n) => n.trim().replace(/^["']|[;"']{0,2}$/g, "")).filter((n) => n.length);
  return t.length ? decodeURI(t[t.length - 1]) : null;
}, Rs = (e) => {
  if (/content-length:/i.test(e)) {
    const t = e.match(/[0-9]+/)[0];
    return t ? parseInt(t, 10) : null;
  }
  return null;
}, bs = (e) => /x-content-transfer-id:/i.test(e) && (e.split(":")[1] || "").trim() || null, en = (e) => {
  const t = {
    source: null,
    name: null,
    size: null
  }, n = e.split(`
`);
  for (let r of n) {
    const i = Ts(r);
    if (i) {
      t.name = i;
      continue;
    }
    const o = Rs(r);
    if (o) {
      t.size = o;
      continue;
    }
    const s = bs(r);
    if (s) {
      t.source = s;
      continue;
    }
  }
  return t;
}, Os = (e) => {
  const t = {
    source: null,
    complete: !1,
    progress: 0,
    size: null,
    timestamp: null,
    duration: 0,
    request: null
  }, n = () => t.progress, r = () => {
    t.request && t.request.abort && t.request.abort();
  }, i = () => {
    const l = t.source;
    s.fire("init", l), l instanceof File ? s.fire("load", l) : l instanceof Blob ? s.fire("load", $e(l, l.name)) : qt(l) ? s.fire("load", _s(l)) : o(l);
  }, o = (l) => {
    if (!e) {
      s.fire("error", {
        type: "error",
        body: "Can't load URL",
        code: 400
      });
      return;
    }
    t.timestamp = Date.now(), t.request = e(
      l,
      (a) => {
        t.duration = Date.now() - t.timestamp, t.complete = !0, a instanceof Blob && (a = $e(a, a.name || et(l))), s.fire(
          "load",
          // if has received blob, we go with blob, if no response, we return null
          a instanceof Blob ? a : a ? a.body : null
        );
      },
      (a) => {
        s.fire(
          "error",
          typeof a == "string" ? {
            type: "error",
            code: 0,
            body: a
          } : a
        );
      },
      (a, d, c) => {
        if (c && (t.size = c), t.duration = Date.now() - t.timestamp, !a) {
          t.progress = null;
          return;
        }
        t.progress = d / c, s.fire("progress", t.progress);
      },
      () => {
        s.fire("abort");
      },
      (a) => {
        const d = en(
          typeof a == "string" ? a : a.headers
        );
        s.fire("meta", {
          size: t.size || d.size,
          filename: d.name,
          source: d.source
        });
      }
    );
  }, s = {
    ...Rt(),
    setSource: (l) => t.source = l,
    getProgress: n,
    // file load progress
    abort: r,
    // abort file load
    load: i
    // start load
  };
  return s;
}, wn = (e) => /GET|HEAD/.test(e), Ue = (e, t, n) => {
  const r = {
    onheaders: () => {
    },
    onprogress: () => {
    },
    onload: () => {
    },
    ontimeout: () => {
    },
    onerror: () => {
    },
    onabort: () => {
    },
    abort: () => {
      i = !0, s.abort();
    }
  };
  let i = !1, o = !1;
  n = {
    method: "POST",
    headers: {},
    withCredentials: !1,
    ...n
  }, t = encodeURI(t), wn(n.method) && e && (t = `${t}${encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))}`);
  const s = new XMLHttpRequest(), l = wn(n.method) ? s : s.upload;
  return l.onprogress = (a) => {
    i || r.onprogress(a.lengthComputable, a.loaded, a.total);
  }, s.onreadystatechange = () => {
    s.readyState < 2 || s.readyState === 4 && s.status === 0 || o || (o = !0, r.onheaders(s));
  }, s.onload = () => {
    s.status >= 200 && s.status < 300 ? r.onload(s) : r.onerror(s);
  }, s.onerror = () => r.onerror(s), s.onabort = () => {
    i = !0, r.onabort();
  }, s.ontimeout = () => r.ontimeout(s), s.open(n.method, t, !0), Xe(n.timeout) && (s.timeout = n.timeout), Object.keys(n.headers).forEach((a) => {
    const d = unescape(encodeURIComponent(n.headers[a]));
    s.setRequestHeader(a, d);
  }), n.responseType && (s.responseType = n.responseType), n.withCredentials && (s.withCredentials = !0), s.send(e), r;
}, K = (e, t, n, r) => ({
  type: e,
  code: t,
  body: n,
  headers: r
}), Be = (e) => (t) => {
  e(K("error", 0, "Timeout", t.getAllResponseHeaders()));
}, Ln = (e) => /\?/.test(e), Je = (...e) => {
  let t = "";
  return e.forEach((n) => {
    t += Ln(t) && Ln(n) ? n.replace(/\?/, "&") : n;
  }), t;
}, Mt = (e = "", t) => {
  if (typeof t == "function")
    return t;
  if (!t || !de(t.url))
    return null;
  const n = t.onload || ((i) => i), r = t.onerror || ((i) => null);
  return (i, o, s, l, a, d) => {
    const c = Ue(i, Je(e, t.url), {
      ...t,
      responseType: "blob"
    });
    return c.onload = (p) => {
      const m = p.getAllResponseHeaders(), g = en(m).name || et(i);
      o(
        K(
          "load",
          p.status,
          t.method === "HEAD" ? null : $e(n(p.response), g),
          m
        )
      );
    }, c.onerror = (p) => {
      s(
        K(
          "error",
          p.status,
          r(p.response) || p.statusText,
          p.getAllResponseHeaders()
        )
      );
    }, c.onheaders = (p) => {
      d(K("headers", p.status, null, p.getAllResponseHeaders()));
    }, c.ontimeout = Be(s), c.onprogress = l, c.onabort = a, c;
  };
}, Ie = {
  QUEUED: 0,
  COMPLETE: 1,
  PROCESSING: 2,
  ERROR: 3,
  WAITING: 4
}, ys = (e, t, n, r, i, o, s, l, a, d, c) => {
  const p = [], { chunkTransferId: m, chunkServer: g, chunkSize: f, chunkRetryDelays: E } = c, L = {
    serverId: m,
    aborted: !1
  }, u = t.ondata || ((R) => R), D = t.onload || ((R, Y) => Y === "HEAD" ? R.getResponseHeader("Upload-Offset") : R.response), S = t.onerror || ((R) => null), b = (R) => {
    const Y = new FormData();
    se(i) && Y.append(n, JSON.stringify(i));
    const h = typeof t.headers == "function" ? t.headers(r, i) : {
      ...t.headers,
      "Upload-Length": r.size
    }, O = {
      ...t,
      headers: h
    }, C = Ue(u(Y), Je(e, t.url), O);
    C.onload = (P) => R(D(P, O.method)), C.onerror = (P) => s(
      K(
        "error",
        P.status,
        S(P.response) || P.statusText,
        P.getAllResponseHeaders()
      )
    ), C.ontimeout = Be(s);
  }, w = (R) => {
    const Y = Je(e, g.url, L.serverId), O = {
      headers: typeof t.headers == "function" ? t.headers(L.serverId) : {
        ...t.headers
      },
      method: "HEAD"
    }, C = Ue(null, Y, O);
    C.onload = (P) => R(D(P, O.method)), C.onerror = (P) => s(
      K(
        "error",
        P.status,
        S(P.response) || P.statusText,
        P.getAllResponseHeaders()
      )
    ), C.ontimeout = Be(s);
  }, G = Math.floor(r.size / f);
  for (let R = 0; R <= G; R++) {
    const Y = R * f, h = r.slice(Y, Y + f, "application/offset+octet-stream");
    p[R] = {
      index: R,
      size: h.size,
      offset: Y,
      data: h,
      file: r,
      progress: 0,
      retries: [...E],
      status: Ie.QUEUED,
      error: null,
      request: null,
      timeout: null
    };
  }
  const X = () => o(L.serverId), A = (R) => R.status === Ie.QUEUED || R.status === Ie.ERROR, N = (R) => {
    if (L.aborted)
      return;
    if (R = R || p.find(A), !R) {
      p.every((z) => z.status === Ie.COMPLETE) && X();
      return;
    }
    R.status = Ie.PROCESSING, R.progress = null;
    const Y = g.ondata || ((z) => z), h = g.onerror || ((z) => null), O = Je(e, g.url, L.serverId), C = typeof g.headers == "function" ? g.headers(R) : {
      ...g.headers,
      "Content-Type": "application/offset+octet-stream",
      "Upload-Offset": R.offset,
      "Upload-Length": r.size,
      "Upload-Name": r.name
    }, P = R.request = Ue(Y(R.data), O, {
      ...g,
      headers: C
    });
    P.onload = () => {
      R.status = Ie.COMPLETE, R.request = null, F();
    }, P.onprogress = (z, j, Ce) => {
      R.progress = z ? j : null, _();
    }, P.onerror = (z) => {
      R.status = Ie.ERROR, R.request = null, R.error = h(z.response) || z.statusText, H(R) || s(
        K(
          "error",
          z.status,
          h(z.response) || z.statusText,
          z.getAllResponseHeaders()
        )
      );
    }, P.ontimeout = (z) => {
      R.status = Ie.ERROR, R.request = null, H(R) || Be(s)(z);
    }, P.onabort = () => {
      R.status = Ie.QUEUED, R.request = null, a();
    };
  }, H = (R) => R.retries.length === 0 ? !1 : (R.status = Ie.WAITING, clearTimeout(R.timeout), R.timeout = setTimeout(() => {
    N(R);
  }, R.retries.shift()), !0), _ = () => {
    const R = p.reduce((h, O) => h === null || O.progress === null ? null : h + O.progress, 0);
    if (R === null)
      return l(!1, 0, 0);
    const Y = p.reduce((h, O) => h + O.size, 0);
    l(!0, R, Y);
  }, F = () => {
    p.filter((Y) => Y.status === Ie.PROCESSING).length >= 1 || N();
  }, $ = () => {
    p.forEach((R) => {
      clearTimeout(R.timeout), R.request && R.request.abort();
    });
  };
  return L.serverId ? w((R) => {
    L.aborted || (p.filter((Y) => Y.offset < R).forEach((Y) => {
      Y.status = Ie.COMPLETE, Y.progress = Y.size;
    }), F());
  }) : b((R) => {
    L.aborted || (d(R), L.serverId = R, F());
  }), {
    abort: () => {
      L.aborted = !0, $();
    }
  };
}, Ss = (e, t, n, r) => (i, o, s, l, a, d, c) => {
  if (!i)
    return;
  const p = r.chunkUploads, m = p && i.size > r.chunkSize, g = p && (m || r.chunkForce);
  if (i instanceof Blob && g)
    return ys(
      e,
      t,
      n,
      i,
      o,
      s,
      l,
      a,
      d,
      c,
      r
    );
  const f = t.ondata || ((w) => w), E = t.onload || ((w) => w), L = t.onerror || ((w) => null), u = typeof t.headers == "function" ? t.headers(i, o) || {} : {
    ...t.headers
  }, D = {
    ...t,
    headers: u
  };
  var S = new FormData();
  se(o) && S.append(n, JSON.stringify(o)), (i instanceof Blob ? [{ name: null, file: i }] : i).forEach((w) => {
    S.append(
      n,
      w.file,
      w.name === null ? w.file.name : `${w.name}${w.file.name}`
    );
  });
  const b = Ue(f(S), Je(e, t.url), D);
  return b.onload = (w) => {
    s(K("load", w.status, E(w.response), w.getAllResponseHeaders()));
  }, b.onerror = (w) => {
    l(
      K(
        "error",
        w.status,
        L(w.response) || w.statusText,
        w.getAllResponseHeaders()
      )
    );
  }, b.ontimeout = Be(l), b.onprogress = a, b.onabort = d, b;
}, Ds = (e = "", t, n, r) => typeof t == "function" ? (...i) => t(n, ...i, r) : !t || !de(t.url) ? null : Ss(e, t, n, r), Ke = (e = "", t) => {
  if (typeof t == "function")
    return t;
  if (!t || !de(t.url))
    return (i, o) => o();
  const n = t.onload || ((i) => i), r = t.onerror || ((i) => null);
  return (i, o, s) => {
    const l = Ue(
      i,
      e + t.url,
      t
      // contains method, headers and withCredentials properties
    );
    return l.onload = (a) => {
      o(
        K(
          "load",
          a.status,
          n(a.response),
          a.getAllResponseHeaders()
        )
      );
    }, l.onerror = (a) => {
      s(
        K(
          "error",
          a.status,
          r(a.response) || a.statusText,
          a.getAllResponseHeaders()
        )
      );
    }, l.ontimeout = Be(s), l;
  };
}, br = (e = 0, t = 1) => e + Math.random() * (t - e), As = (e, t = 1e3, n = 0, r = 25, i = 250) => {
  let o = null;
  const s = Date.now(), l = () => {
    let a = Date.now() - s, d = br(r, i);
    a + d > t && (d = a + d - t);
    let c = a / t;
    if (c >= 1 || document.hidden) {
      e(1);
      return;
    }
    e(c), o = setTimeout(l, d);
  };
  return t > 0 && l(), {
    clear: () => {
      clearTimeout(o);
    }
  };
}, ws = (e, t) => {
  const n = {
    complete: !1,
    perceivedProgress: 0,
    perceivedPerformanceUpdater: null,
    progress: null,
    timestamp: null,
    perceivedDuration: 0,
    duration: 0,
    request: null,
    response: null
  }, { allowMinimumUploadDuration: r } = t, i = (c, p) => {
    const m = () => {
      n.duration === 0 || n.progress === null || d.fire("progress", d.getProgress());
    }, g = () => {
      n.complete = !0, d.fire("load-perceived", n.response.body);
    };
    d.fire("start"), n.timestamp = Date.now(), n.perceivedPerformanceUpdater = As(
      (f) => {
        n.perceivedProgress = f, n.perceivedDuration = Date.now() - n.timestamp, m(), n.response && n.perceivedProgress === 1 && !n.complete && g();
      },
      // random delay as in a list of files you start noticing
      // files uploading at the exact same speed
      r ? br(750, 1500) : 0
    ), n.request = e(
      // the file to process
      c,
      // the metadata to send along
      p,
      // callbacks (load, error, progress, abort, transfer)
      // load expects the body to be a server id if
      // you want to make use of revert
      (f) => {
        n.response = se(f) ? f : {
          type: "load",
          code: 200,
          body: `${f}`,
          headers: {}
        }, n.duration = Date.now() - n.timestamp, n.progress = 1, d.fire("load", n.response.body), (!r || r && n.perceivedProgress === 1) && g();
      },
      // error is expected to be an object with type, code, body
      (f) => {
        n.perceivedPerformanceUpdater.clear(), d.fire(
          "error",
          se(f) ? f : {
            type: "error",
            code: 0,
            body: `${f}`
          }
        );
      },
      // actual processing progress
      (f, E, L) => {
        n.duration = Date.now() - n.timestamp, n.progress = f ? E / L : null, m();
      },
      // abort does not expect a value
      () => {
        n.perceivedPerformanceUpdater.clear(), d.fire("abort", n.response ? n.response.body : null);
      },
      // register the id for this transfer
      (f) => {
        d.fire("transfer", f);
      }
    );
  }, o = () => {
    n.request && (n.perceivedPerformanceUpdater.clear(), n.request.abort && n.request.abort(), n.complete = !0);
  }, s = () => {
    o(), n.complete = !1, n.perceivedProgress = 0, n.progress = 0, n.timestamp = null, n.perceivedDuration = 0, n.duration = 0, n.request = null, n.response = null;
  }, l = r ? () => n.progress ? Math.min(n.progress, n.perceivedProgress) : null : () => n.progress || null, a = r ? () => Math.min(n.duration, n.perceivedDuration) : () => n.duration, d = {
    ...Rt(),
    process: i,
    // start processing file
    abort: o,
    // abort active process request
    getProgress: l,
    getDuration: a,
    reset: s
  };
  return d;
}, Or = (e) => e.substring(0, e.lastIndexOf(".")) || e, Ls = (e) => {
  let t = [e.name, e.size, e.type];
  return e instanceof Blob || qt(e) ? t[0] = e.name || _r() : qt(e) ? (t[1] = e.length, t[2] = Rr(e)) : de(e) && (t[0] = et(e), t[1] = 0, t[2] = "application/octet-stream"), {
    name: t[0],
    size: t[1],
    type: t[2]
  };
}, We = (e) => !!(e instanceof File || e instanceof Blob && e.name), yr = (e) => {
  if (!se(e))
    return e;
  const t = It(e) ? [] : {};
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const r = e[n];
    t[n] = r && se(r) ? yr(r) : r;
  }
  return t;
}, vs = (e = null, t = null, n = null) => {
  const r = Kt(), i = {
    // is archived
    archived: !1,
    // if is frozen, no longer fires events
    frozen: !1,
    // removed from view
    released: !1,
    // original source
    source: null,
    // file model reference
    file: n,
    // id of file on server
    serverFileReference: t,
    // id of file transfer on server
    transferId: null,
    // is aborted
    processingAborted: !1,
    // current item status
    status: t ? x.PROCESSING_COMPLETE : x.INIT,
    // active processes
    activeLoader: null,
    activeProcessor: null
  };
  let o = null;
  const s = {}, l = (A) => i.status = A, a = (A, ...N) => {
    i.released || i.frozen || G.fire(A, ...N);
  }, d = () => bt(i.file.name), c = () => i.file.type, p = () => i.file.size, m = () => i.file, g = (A, N, H) => {
    if (i.source = A, G.fireSync("init"), i.file) {
      G.fireSync("load-skip");
      return;
    }
    i.file = Ls(A), N.on("init", () => {
      a("load-init");
    }), N.on("meta", (_) => {
      i.file.size = _.size, i.file.filename = _.filename, _.source && (e = ie.LIMBO, i.serverFileReference = _.source, i.status = x.PROCESSING_COMPLETE), a("load-meta");
    }), N.on("progress", (_) => {
      l(x.LOADING), a("load-progress", _);
    }), N.on("error", (_) => {
      l(x.LOAD_ERROR), a("load-request-error", _);
    }), N.on("abort", () => {
      l(x.INIT), a("load-abort");
    }), N.on("load", (_) => {
      i.activeLoader = null;
      const F = (R) => {
        i.file = We(R) ? R : i.file, e === ie.LIMBO && i.serverFileReference ? l(x.PROCESSING_COMPLETE) : l(x.IDLE), a("load");
      }, $ = (R) => {
        i.file = _, a("load-meta"), l(x.LOAD_ERROR), a("load-file-error", R);
      };
      if (i.serverFileReference) {
        F(_);
        return;
      }
      H(_, F, $);
    }), N.setSource(A), i.activeLoader = N, N.load();
  }, f = () => {
    i.activeLoader && i.activeLoader.load();
  }, E = () => {
    if (i.activeLoader) {
      i.activeLoader.abort();
      return;
    }
    l(x.INIT), a("load-abort");
  }, L = (A, N) => {
    if (i.processingAborted) {
      i.processingAborted = !1;
      return;
    }
    if (l(x.PROCESSING), o = null, !(i.file instanceof Blob)) {
      G.on("load", () => {
        L(A, N);
      });
      return;
    }
    A.on("load", (F) => {
      i.transferId = null, i.serverFileReference = F;
    }), A.on("transfer", (F) => {
      i.transferId = F;
    }), A.on("load-perceived", (F) => {
      i.activeProcessor = null, i.transferId = null, i.serverFileReference = F, l(x.PROCESSING_COMPLETE), a("process-complete", F);
    }), A.on("start", () => {
      a("process-start");
    }), A.on("error", (F) => {
      i.activeProcessor = null, l(x.PROCESSING_ERROR), a("process-error", F);
    }), A.on("abort", (F) => {
      i.activeProcessor = null, i.serverFileReference = F, l(x.IDLE), a("process-abort"), o && o();
    }), A.on("progress", (F) => {
      a("process-progress", F);
    });
    const H = (F) => {
      i.archived || A.process(F, { ...s });
    }, _ = console.error;
    N(i.file, H, _), i.activeProcessor = A;
  }, u = () => {
    i.processingAborted = !1, l(x.PROCESSING_QUEUED);
  }, D = () => new Promise((A) => {
    if (!i.activeProcessor) {
      i.processingAborted = !0, l(x.IDLE), a("process-abort"), A();
      return;
    }
    o = () => {
      A();
    }, i.activeProcessor.abort();
  }), S = (A, N) => new Promise((H, _) => {
    const F = i.serverFileReference !== null ? i.serverFileReference : i.transferId;
    if (F === null) {
      H();
      return;
    }
    A(
      F,
      () => {
        i.serverFileReference = null, i.transferId = null, H();
      },
      ($) => {
        if (!N) {
          H();
          return;
        }
        l(x.PROCESSING_REVERT_ERROR), a("process-revert-error"), _($);
      }
    ), l(x.IDLE), a("process-revert");
  }), b = (A, N, H) => {
    const _ = A.split("."), F = _[0], $ = _.pop();
    let R = s;
    _.forEach((Y) => R = R[Y]), JSON.stringify(R[$]) !== JSON.stringify(N) && (R[$] = N, a("metadata-update", {
      key: F,
      value: s[F],
      silent: H
    }));
  }, G = {
    id: { get: () => r },
    origin: { get: () => e, set: (A) => e = A },
    serverId: { get: () => i.serverFileReference },
    transferId: { get: () => i.transferId },
    status: { get: () => i.status },
    filename: { get: () => i.file.name },
    filenameWithoutExtension: { get: () => Or(i.file.name) },
    fileExtension: { get: d },
    fileType: { get: c },
    fileSize: { get: p },
    file: { get: m },
    relativePath: { get: () => i.file._relativePath },
    source: { get: () => i.source },
    getMetadata: (A) => yr(A ? s[A] : s),
    setMetadata: (A, N, H) => {
      if (se(A)) {
        const _ = A;
        return Object.keys(_).forEach((F) => {
          b(F, _[F], N);
        }), A;
      }
      return b(A, N, H), N;
    },
    extend: (A, N) => X[A] = N,
    abortLoad: E,
    retryLoad: f,
    requestProcessing: u,
    abortProcessing: D,
    load: g,
    process: L,
    revert: S,
    ...Rt(),
    freeze: () => i.frozen = !0,
    release: () => i.released = !0,
    released: { get: () => i.released },
    archive: () => i.archived = !0,
    archived: { get: () => i.archived }
  }, X = Pe(G);
  return X;
}, Ps = (e, t) => Ae(t) ? 0 : de(t) ? e.findIndex((n) => n.id === t) : -1, vn = (e, t) => {
  const n = Ps(e, t);
  if (!(n < 0))
    return e[n] || null;
}, Pn = (e, t, n, r, i, o) => {
  const s = Ue(null, e, {
    method: "GET",
    responseType: "blob"
  });
  return s.onload = (l) => {
    const a = l.getAllResponseHeaders(), d = en(a).name || et(e);
    t(K("load", l.status, $e(l.response, d), a));
  }, s.onerror = (l) => {
    n(K("error", l.status, l.statusText, l.getAllResponseHeaders()));
  }, s.onheaders = (l) => {
    o(K("headers", l.status, null, l.getAllResponseHeaders()));
  }, s.ontimeout = Be(n), s.onprogress = r, s.onabort = i, s;
}, Cn = (e) => (e.indexOf("//") === 0 && (e = location.protocol + e), e.toLowerCase().replace("blob:", "").replace(/([a-z])?:\/\//, "$1").split("/")[0]), Cs = (e) => (e.indexOf(":") > -1 || e.indexOf("//") > -1) && Cn(location.href) !== Cn(e), at = (e) => (...t) => Ge(e) ? e(...t) : e, Ms = (e) => !We(e.file), Nt = (e, t) => {
  clearTimeout(t.listUpdateTimeout), t.listUpdateTimeout = setTimeout(() => {
    e("DID_UPDATE_ITEMS", { items: be(t.items) });
  }, 0);
}, Mn = (e, ...t) => new Promise((n) => {
  if (!e)
    return n(!0);
  const r = e(...t);
  if (r == null)
    return n(!0);
  if (typeof r == "boolean")
    return n(r);
  typeof r.then == "function" && r.then(n);
}), Gt = (e, t) => {
  e.items.sort((n, r) => t(pe(n), pe(r)));
}, _e = (e, t) => ({
  query: n,
  success: r = () => {
  },
  failure: i = () => {
  },
  ...o
} = {}) => {
  const s = Fe(e.items, n);
  if (!s) {
    i({
      error: K("error", 0, "Item not found"),
      file: null
    });
    return;
  }
  t(s, r, i, o || {});
}, Ns = (e, t, n) => ({
  /**
   * Aborts all ongoing processes
   */
  ABORT_ALL: () => {
    be(n.items).forEach((r) => {
      r.freeze(), r.abortLoad(), r.abortProcessing();
    });
  },
  /**
   * Sets initial files
   */
  DID_SET_FILES: ({ value: r = [] }) => {
    const i = r.map((s) => ({
      source: s.source ? s.source : s,
      options: s.options
    }));
    let o = be(n.items);
    o.forEach((s) => {
      i.find((l) => l.source === s.source || l.source === s.file) || e("REMOVE_ITEM", { query: s, remove: !1 });
    }), o = be(n.items), i.forEach((s, l) => {
      o.find((a) => a.source === s.source || a.file === s.source) || e("ADD_ITEM", {
        ...s,
        interactionMethod: Te.NONE,
        index: l
      });
    });
  },
  DID_UPDATE_ITEM_METADATA: ({ id: r, action: i, change: o }) => {
    o.silent || (clearTimeout(n.itemUpdateTimeout), n.itemUpdateTimeout = setTimeout(() => {
      const s = vn(n.items, r);
      if (!t("IS_ASYNC")) {
        Re("SHOULD_PREPARE_OUTPUT", !1, {
          item: s,
          query: t,
          action: i,
          change: o
        }).then((c) => {
          const p = t("GET_BEFORE_PREPARE_FILE");
          p && (c = p(s, c)), c && e(
            "REQUEST_PREPARE_OUTPUT",
            {
              query: r,
              item: s,
              success: (m) => {
                e("DID_PREPARE_OUTPUT", { id: r, file: m });
              }
            },
            !0
          );
        });
        return;
      }
      s.origin === ie.LOCAL && e("DID_LOAD_ITEM", {
        id: s.id,
        error: null,
        serverFileReference: s.source
      });
      const l = () => {
        setTimeout(() => {
          e("REQUEST_ITEM_PROCESSING", { query: r });
        }, 32);
      }, a = (c) => {
        s.revert(
          Ke(n.options.server.url, n.options.server.revert),
          t("GET_FORCE_REVERT")
        ).then(c ? l : () => {
        }).catch(() => {
        });
      }, d = (c) => {
        s.abortProcessing().then(c ? l : () => {
        });
      };
      if (s.status === x.PROCESSING_COMPLETE)
        return a(n.options.instantUpload);
      if (s.status === x.PROCESSING)
        return d(n.options.instantUpload);
      n.options.instantUpload && l();
    }, 0));
  },
  MOVE_ITEM: ({ query: r, index: i }) => {
    const o = Fe(n.items, r);
    if (!o)
      return;
    const s = n.items.indexOf(o);
    i = Ir(i, 0, n.items.length - 1), s !== i && n.items.splice(i, 0, n.items.splice(s, 1)[0]);
  },
  SORT: ({ compare: r }) => {
    Gt(n, r), e("DID_SORT_ITEMS", {
      items: t("GET_ACTIVE_ITEMS")
    });
  },
  ADD_ITEMS: ({ items: r, index: i, interactionMethod: o, success: s = () => {
  }, failure: l = () => {
  } }) => {
    let a = i;
    if (i === -1 || typeof i > "u") {
      const g = t("GET_ITEM_INSERT_LOCATION"), f = t("GET_TOTAL_ITEMS");
      a = g === "before" ? 0 : f;
    }
    const d = t("GET_IGNORED_FILES"), c = (g) => We(g) ? !d.includes(g.name.toLowerCase()) : !Ae(g), m = r.filter(c).map(
      (g) => new Promise((f, E) => {
        e("ADD_ITEM", {
          interactionMethod: o,
          source: g.source || g,
          success: f,
          failure: E,
          index: a++,
          options: g.options || {}
        });
      })
    );
    Promise.all(m).then(s).catch(l);
  },
  /**
   * @param source
   * @param index
   * @param interactionMethod
   */
  ADD_ITEM: ({
    source: r,
    index: i = -1,
    interactionMethod: o,
    success: s = () => {
    },
    failure: l = () => {
    },
    options: a = {}
  }) => {
    if (Ae(r)) {
      l({
        error: K("error", 0, "No source"),
        file: null
      });
      return;
    }
    if (We(r) && n.options.ignoredFiles.includes(r.name.toLowerCase()))
      return;
    if (!ds(n)) {
      if (n.options.allowMultiple || !n.options.allowMultiple && !n.options.allowReplace) {
        const D = K("warning", 0, "Max files");
        e("DID_THROW_MAX_FILES", {
          source: r,
          error: D
        }), l({ error: D, file: null });
        return;
      }
      const u = be(n.items)[0];
      if (u.status === x.PROCESSING_COMPLETE || u.status === x.PROCESSING_REVERT_ERROR) {
        const D = t("GET_FORCE_REVERT");
        if (u.revert(
          Ke(n.options.server.url, n.options.server.revert),
          D
        ).then(() => {
          D && e("ADD_ITEM", {
            source: r,
            index: i,
            interactionMethod: o,
            success: s,
            failure: l,
            options: a
          });
        }).catch(() => {
        }), D)
          return;
      }
      e("REMOVE_ITEM", { query: u.id });
    }
    const d = a.type === "local" ? ie.LOCAL : a.type === "limbo" ? ie.LIMBO : ie.INPUT, c = vs(
      // where did this file come from
      d,
      // an input file never has a server file reference
      d === ie.INPUT ? null : r,
      // file mock data, if defined
      a.file
    );
    Object.keys(a.metadata || {}).forEach((u) => {
      c.setMetadata(u, a.metadata[u]);
    }), Ve("DID_CREATE_ITEM", c, { query: t, dispatch: e });
    const p = t("GET_ITEM_INSERT_LOCATION");
    n.options.itemInsertLocationFreedom || (i = p === "before" ? -1 : n.items.length), us(n.items, c, i), Ge(p) && r && Gt(n, p);
    const m = c.id;
    c.on("init", () => {
      e("DID_INIT_ITEM", { id: m });
    }), c.on("load-init", () => {
      e("DID_START_ITEM_LOAD", { id: m });
    }), c.on("load-meta", () => {
      e("DID_UPDATE_ITEM_META", { id: m });
    }), c.on("load-progress", (u) => {
      e("DID_UPDATE_ITEM_LOAD_PROGRESS", { id: m, progress: u });
    }), c.on("load-request-error", (u) => {
      const D = at(n.options.labelFileLoadError)(u);
      if (u.code >= 400 && u.code < 500) {
        e("DID_THROW_ITEM_INVALID", {
          id: m,
          error: u,
          status: {
            main: D,
            sub: `${u.code} (${u.body})`
          }
        }), l({ error: u, file: pe(c) });
        return;
      }
      e("DID_THROW_ITEM_LOAD_ERROR", {
        id: m,
        error: u,
        status: {
          main: D,
          sub: n.options.labelTapToRetry
        }
      });
    }), c.on("load-file-error", (u) => {
      e("DID_THROW_ITEM_INVALID", {
        id: m,
        error: u.status,
        status: u.status
      }), l({ error: u.status, file: pe(c) });
    }), c.on("load-abort", () => {
      e("REMOVE_ITEM", { query: m });
    }), c.on("load-skip", () => {
      e("COMPLETE_LOAD_ITEM", {
        query: m,
        item: c,
        data: {
          source: r,
          success: s
        }
      });
    }), c.on("load", () => {
      const u = (D) => {
        if (!D) {
          e("REMOVE_ITEM", {
            query: m
          });
          return;
        }
        c.on("metadata-update", (S) => {
          e("DID_UPDATE_ITEM_METADATA", { id: m, change: S });
        }), Re("SHOULD_PREPARE_OUTPUT", !1, { item: c, query: t }).then(
          (S) => {
            const b = t("GET_BEFORE_PREPARE_FILE");
            b && (S = b(c, S));
            const w = () => {
              e("COMPLETE_LOAD_ITEM", {
                query: m,
                item: c,
                data: {
                  source: r,
                  success: s
                }
              }), Nt(e, n);
            };
            if (S) {
              e(
                "REQUEST_PREPARE_OUTPUT",
                {
                  query: m,
                  item: c,
                  success: (G) => {
                    e("DID_PREPARE_OUTPUT", { id: m, file: G }), w();
                  }
                },
                !0
              );
              return;
            }
            w();
          }
        );
      };
      Re("DID_LOAD_ITEM", c, { query: t, dispatch: e }).then(() => {
        Mn(t("GET_BEFORE_ADD_FILE"), pe(c)).then(
          u
        );
      }).catch((D) => {
        if (!D || !D.error || !D.status)
          return u(!1);
        e("DID_THROW_ITEM_INVALID", {
          id: m,
          error: D.error,
          status: D.status
        });
      });
    }), c.on("process-start", () => {
      e("DID_START_ITEM_PROCESSING", { id: m });
    }), c.on("process-progress", (u) => {
      e("DID_UPDATE_ITEM_PROCESS_PROGRESS", { id: m, progress: u });
    }), c.on("process-error", (u) => {
      e("DID_THROW_ITEM_PROCESSING_ERROR", {
        id: m,
        error: u,
        status: {
          main: at(n.options.labelFileProcessingError)(u),
          sub: n.options.labelTapToRetry
        }
      });
    }), c.on("process-revert-error", (u) => {
      e("DID_THROW_ITEM_PROCESSING_REVERT_ERROR", {
        id: m,
        error: u,
        status: {
          main: at(n.options.labelFileProcessingRevertError)(u),
          sub: n.options.labelTapToRetry
        }
      });
    }), c.on("process-complete", (u) => {
      e("DID_COMPLETE_ITEM_PROCESSING", {
        id: m,
        error: null,
        serverFileReference: u
      }), e("DID_DEFINE_VALUE", { id: m, value: u });
    }), c.on("process-abort", () => {
      e("DID_ABORT_ITEM_PROCESSING", { id: m });
    }), c.on("process-revert", () => {
      e("DID_REVERT_ITEM_PROCESSING", { id: m }), e("DID_DEFINE_VALUE", { id: m, value: null });
    }), e("DID_ADD_ITEM", { id: m, index: i, interactionMethod: o }), Nt(e, n);
    const { url: g, load: f, restore: E, fetch: L } = n.options.server || {};
    c.load(
      r,
      // this creates a function that loads the file based on the type of file (string, base64, blob, file) and location of file (local, remote, limbo)
      Os(
        d === ie.INPUT ? (
          // input, if is remote, see if should use custom fetch, else use default fetchBlob
          de(r) && Cs(r) && L ? Mt(g, L) : Pn
        ) : (
          // limbo or local
          d === ie.LIMBO ? Mt(g, E) : Mt(g, f)
        )
        // local
      ),
      // called when the file is loaded so it can be piped through the filters
      (u, D, S) => {
        Re("LOAD_FILE", u, { query: t }).then(D).catch(S);
      }
    );
  },
  REQUEST_PREPARE_OUTPUT: ({ item: r, success: i, failure: o = () => {
  } }) => {
    const s = {
      error: K("error", 0, "Item not found"),
      file: null
    };
    if (r.archived)
      return o(s);
    Re("PREPARE_OUTPUT", r.file, { query: t, item: r }).then((l) => {
      Re("COMPLETE_PREPARE_OUTPUT", l, { query: t, item: r }).then((a) => {
        if (r.archived)
          return o(s);
        i(a);
      });
    });
  },
  COMPLETE_LOAD_ITEM: ({ item: r, data: i }) => {
    const { success: o, source: s } = i, l = t("GET_ITEM_INSERT_LOCATION");
    if (Ge(l) && s && Gt(n, l), e("DID_LOAD_ITEM", {
      id: r.id,
      error: null,
      serverFileReference: r.origin === ie.INPUT ? null : s
    }), o(pe(r)), r.origin === ie.LOCAL) {
      e("DID_LOAD_LOCAL_ITEM", { id: r.id });
      return;
    }
    if (r.origin === ie.LIMBO) {
      e("DID_COMPLETE_ITEM_PROCESSING", {
        id: r.id,
        error: null,
        serverFileReference: s
      }), e("DID_DEFINE_VALUE", {
        id: r.id,
        value: r.serverId || s
      });
      return;
    }
    t("IS_ASYNC") && n.options.instantUpload && e("REQUEST_ITEM_PROCESSING", { query: r.id });
  },
  RETRY_ITEM_LOAD: _e(n, (r) => {
    r.retryLoad();
  }),
  REQUEST_ITEM_PREPARE: _e(n, (r, i, o) => {
    e(
      "REQUEST_PREPARE_OUTPUT",
      {
        query: r.id,
        item: r,
        success: (s) => {
          e("DID_PREPARE_OUTPUT", { id: r.id, file: s }), i({
            file: r,
            output: s
          });
        },
        failure: o
      },
      !0
    );
  }),
  REQUEST_ITEM_PROCESSING: _e(n, (r, i, o) => {
    if (!// waiting for something
    (r.status === x.IDLE || // processing went wrong earlier
    r.status === x.PROCESSING_ERROR)) {
      const l = () => e("REQUEST_ITEM_PROCESSING", { query: r, success: i, failure: o }), a = () => document.hidden ? l() : setTimeout(l, 32);
      r.status === x.PROCESSING_COMPLETE || r.status === x.PROCESSING_REVERT_ERROR ? r.revert(
        Ke(n.options.server.url, n.options.server.revert),
        t("GET_FORCE_REVERT")
      ).then(a).catch(() => {
      }) : r.status === x.PROCESSING && r.abortProcessing().then(a);
      return;
    }
    r.status !== x.PROCESSING_QUEUED && (r.requestProcessing(), e("DID_REQUEST_ITEM_PROCESSING", { id: r.id }), e("PROCESS_ITEM", { query: r, success: i, failure: o }, !0));
  }),
  PROCESS_ITEM: _e(n, (r, i, o) => {
    const s = t("GET_MAX_PARALLEL_UPLOADS");
    if (t("GET_ITEMS_BY_STATUS", x.PROCESSING).length === s) {
      n.processingQueue.push({
        id: r.id,
        success: i,
        failure: o
      });
      return;
    }
    if (r.status === x.PROCESSING)
      return;
    const a = () => {
      const c = n.processingQueue.shift();
      if (!c)
        return;
      const { id: p, success: m, failure: g } = c, f = Fe(n.items, p);
      if (!f || f.archived) {
        a();
        return;
      }
      e("PROCESS_ITEM", { query: p, success: m, failure: g }, !0);
    };
    r.onOnce("process-complete", () => {
      i(pe(r)), a();
      const c = n.options.server;
      if (n.options.instantUpload && r.origin === ie.LOCAL && Ge(c.remove)) {
        const g = () => {
        };
        r.origin = ie.LIMBO, n.options.server.remove(r.source, g, g);
      }
      t("GET_ITEMS_BY_STATUS", x.PROCESSING_COMPLETE).length === n.items.length && e("DID_COMPLETE_ITEM_PROCESSING_ALL");
    }), r.onOnce("process-error", (c) => {
      o({ error: c, file: pe(r) }), a();
    });
    const d = n.options;
    r.process(
      ws(
        Ds(d.server.url, d.server.process, d.name, {
          chunkTransferId: r.transferId,
          chunkServer: d.server.patch,
          chunkUploads: d.chunkUploads,
          chunkForce: d.chunkForce,
          chunkSize: d.chunkSize,
          chunkRetryDelays: d.chunkRetryDelays
        }),
        {
          allowMinimumUploadDuration: t("GET_ALLOW_MINIMUM_UPLOAD_DURATION")
        }
      ),
      // called when the file is about to be processed so it can be piped through the transform filters
      (c, p, m) => {
        Re("PREPARE_OUTPUT", c, { query: t, item: r }).then((g) => {
          e("DID_PREPARE_OUTPUT", { id: r.id, file: g }), p(g);
        }).catch(m);
      }
    );
  }),
  RETRY_ITEM_PROCESSING: _e(n, (r) => {
    e("REQUEST_ITEM_PROCESSING", { query: r });
  }),
  REQUEST_REMOVE_ITEM: _e(n, (r) => {
    Mn(t("GET_BEFORE_REMOVE_FILE"), pe(r)).then((i) => {
      i && e("REMOVE_ITEM", { query: r });
    });
  }),
  RELEASE_ITEM: _e(n, (r) => {
    r.release();
  }),
  REMOVE_ITEM: _e(n, (r, i, o, s) => {
    const l = () => {
      const d = r.id;
      vn(n.items, d).archive(), e("DID_REMOVE_ITEM", { error: null, id: d, item: r }), Nt(e, n), i(pe(r));
    }, a = n.options.server;
    r.origin === ie.LOCAL && a && Ge(a.remove) && s.remove !== !1 ? (e("DID_START_ITEM_REMOVE", { id: r.id }), a.remove(
      r.source,
      () => l(),
      (d) => {
        e("DID_THROW_ITEM_REMOVE_ERROR", {
          id: r.id,
          error: K("error", 0, d, null),
          status: {
            main: at(n.options.labelFileRemoveError)(d),
            sub: n.options.labelTapToRetry
          }
        });
      }
    )) : ((s.revert && r.origin !== ie.LOCAL && r.serverId !== null || // if chunked uploads are enabled and we're uploading in chunks for this specific file
    // or if the file isn't big enough for chunked uploads but chunkForce is set then call
    // revert before removing from the view...
    n.options.chunkUploads && r.file.size > n.options.chunkSize || n.options.chunkUploads && n.options.chunkForce) && r.revert(
      Ke(n.options.server.url, n.options.server.revert),
      t("GET_FORCE_REVERT")
    ), l());
  }),
  ABORT_ITEM_LOAD: _e(n, (r) => {
    r.abortLoad();
  }),
  ABORT_ITEM_PROCESSING: _e(n, (r) => {
    if (r.serverId) {
      e("REVERT_ITEM_PROCESSING", { id: r.id });
      return;
    }
    r.abortProcessing().then(() => {
      n.options.instantUpload && e("REMOVE_ITEM", { query: r.id });
    });
  }),
  REQUEST_REVERT_ITEM_PROCESSING: _e(n, (r) => {
    if (!n.options.instantUpload) {
      e("REVERT_ITEM_PROCESSING", { query: r });
      return;
    }
    const i = (l) => {
      l && e("REVERT_ITEM_PROCESSING", { query: r });
    }, o = t("GET_BEFORE_REMOVE_FILE");
    if (!o)
      return i(!0);
    const s = o(pe(r));
    if (s == null)
      return i(!0);
    if (typeof s == "boolean")
      return i(s);
    typeof s.then == "function" && s.then(i);
  }),
  REVERT_ITEM_PROCESSING: _e(n, (r) => {
    r.revert(
      Ke(n.options.server.url, n.options.server.revert),
      t("GET_FORCE_REVERT")
    ).then(() => {
      (n.options.instantUpload || Ms(r)) && e("REMOVE_ITEM", { query: r.id });
    }).catch(() => {
    });
  }),
  SET_OPTIONS: ({ options: r }) => {
    const i = Object.keys(r), o = Gs.filter((l) => i.includes(l));
    [
      // add prioritized first if passed to options, else remove
      ...o,
      // prevent duplicate keys
      ...Object.keys(r).filter((l) => !o.includes(l))
    ].forEach((l) => {
      e(`SET_${Tt(l, "_").toUpperCase()}`, {
        value: r[l]
      });
    });
  }
}), Gs = [
  "server"
  // must be processed before "files"
], tn = (e) => e, we = (e) => document.createElement(e), Z = (e, t) => {
  let n = e.childNodes[0];
  n ? t !== n.nodeValue && (n.nodeValue = t) : (n = document.createTextNode(t), e.appendChild(n));
}, Nn = (e, t, n, r) => {
  const i = (r % 360 - 90) * Math.PI / 180;
  return {
    x: e + n * Math.cos(i),
    y: t + n * Math.sin(i)
  };
}, Fs = (e, t, n, r, i, o) => {
  const s = Nn(e, t, n, i), l = Nn(e, t, n, r);
  return ["M", s.x, s.y, "A", n, n, 0, o, 0, l.x, l.y].join(" ");
}, Us = (e, t, n, r, i) => {
  let o = 1;
  return i > r && i - r <= 0.5 && (o = 0), r > i && r - i >= 0.5 && (o = 0), Fs(
    e,
    t,
    n,
    Math.min(0.9999, r) * 360,
    Math.min(0.9999, i) * 360,
    o
  );
}, Bs = ({ root: e, props: t }) => {
  t.spin = !1, t.progress = 0, t.opacity = 0;
  const n = mt("svg");
  e.ref.path = mt("path", {
    "stroke-width": 2,
    "stroke-linecap": "round"
  }), n.appendChild(e.ref.path), e.ref.svg = n, e.appendChild(n);
}, xs = ({ root: e, props: t }) => {
  if (t.opacity === 0)
    return;
  t.align && (e.element.dataset.align = t.align);
  const n = parseInt(J(e.ref.path, "stroke-width"), 10), r = e.rect.element.width * 0.5;
  let i = 0, o = 0;
  t.spin ? (i = 0, o = 0.5) : (i = 0, o = t.progress);
  const s = Us(r, r, r - n, i, o);
  J(e.ref.path, "d", s), J(e.ref.path, "stroke-opacity", t.spin || t.progress > 0 ? 1 : 0);
}, Gn = ee({
  tag: "div",
  name: "progress-indicator",
  ignoreRectUpdate: !0,
  ignoreRect: !0,
  create: Bs,
  write: xs,
  mixins: {
    apis: ["progress", "spin", "align"],
    styles: ["opacity"],
    animations: {
      opacity: { type: "tween", duration: 500 },
      progress: {
        type: "spring",
        stiffness: 0.95,
        damping: 0.65,
        mass: 10
      }
    }
  }
}), Vs = ({ root: e, props: t }) => {
  e.element.innerHTML = (t.icon || "") + `<span>${t.label}</span>`, t.isDisabled = !1;
}, ks = ({ root: e, props: t }) => {
  const { isDisabled: n } = t, r = e.query("GET_DISABLED") || t.opacity === 0;
  r && !n ? (t.isDisabled = !0, J(e.element, "disabled", "disabled")) : !r && n && (t.isDisabled = !1, e.element.removeAttribute("disabled"));
}, Sr = ee({
  tag: "button",
  attributes: {
    type: "button"
  },
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  name: "file-action-button",
  mixins: {
    apis: ["label"],
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      translateX: "spring",
      translateY: "spring",
      opacity: { type: "tween", duration: 250 }
    },
    listeners: !0
  },
  create: Vs,
  write: ks
}), Dr = (e, t = ".", n = 1e3, r = {}) => {
  const {
    labelBytes: i = "bytes",
    labelKilobytes: o = "KB",
    labelMegabytes: s = "MB",
    labelGigabytes: l = "GB"
  } = r;
  e = Math.round(Math.abs(e));
  const a = n, d = n * n, c = n * n * n;
  return e < a ? `${e} ${i}` : e < d ? `${Math.floor(e / a)} ${o}` : e < c ? `${Fn(e / d, 1, t)} ${s}` : `${Fn(e / c, 2, t)} ${l}`;
}, Fn = (e, t, n) => e.toFixed(t).split(".").filter((r) => r !== "0").join(n), qs = ({ root: e, props: t }) => {
  const n = we("span");
  n.className = "filepond--file-info-main", J(n, "aria-hidden", "true"), e.appendChild(n), e.ref.fileName = n;
  const r = we("span");
  r.className = "filepond--file-info-sub", e.appendChild(r), e.ref.fileSize = r, Z(r, e.query("GET_LABEL_FILE_WAITING_FOR_SIZE")), Z(n, tn(e.query("GET_ITEM_NAME", t.id)));
}, Ht = ({ root: e, props: t }) => {
  Z(
    e.ref.fileSize,
    Dr(
      e.query("GET_ITEM_SIZE", t.id),
      ".",
      e.query("GET_FILE_SIZE_BASE"),
      e.query("GET_FILE_SIZE_LABELS", e.query)
    )
  ), Z(e.ref.fileName, tn(e.query("GET_ITEM_NAME", t.id)));
}, Un = ({ root: e, props: t }) => {
  if (Xe(e.query("GET_ITEM_SIZE", t.id))) {
    Ht({ root: e, props: t });
    return;
  }
  Z(e.ref.fileSize, e.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"));
}, Hs = ee({
  name: "file-info",
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  write: fe({
    DID_LOAD_ITEM: Ht,
    DID_UPDATE_ITEM_META: Ht,
    DID_THROW_ITEM_LOAD_ERROR: Un,
    DID_THROW_ITEM_INVALID: Un
  }),
  didCreateView: (e) => {
    Ve("CREATE_VIEW", { ...e, view: e });
  },
  create: qs,
  mixins: {
    styles: ["translateX", "translateY"],
    animations: {
      translateX: "spring",
      translateY: "spring"
    }
  }
}), Ar = (e) => Math.round(e * 100), Ys = ({ root: e }) => {
  const t = we("span");
  t.className = "filepond--file-status-main", e.appendChild(t), e.ref.main = t;
  const n = we("span");
  n.className = "filepond--file-status-sub", e.appendChild(n), e.ref.sub = n, wr({ root: e, action: { progress: null } });
}, wr = ({ root: e, action: t }) => {
  const n = t.progress === null ? e.query("GET_LABEL_FILE_LOADING") : `${e.query("GET_LABEL_FILE_LOADING")} ${Ar(t.progress)}%`;
  Z(e.ref.main, n), Z(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
}, zs = ({ root: e, action: t }) => {
  const n = t.progress === null ? e.query("GET_LABEL_FILE_PROCESSING") : `${e.query("GET_LABEL_FILE_PROCESSING")} ${Ar(t.progress)}%`;
  Z(e.ref.main, n), Z(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
}, $s = ({ root: e }) => {
  Z(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING")), Z(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
}, Ws = ({ root: e }) => {
  Z(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_ABORTED")), Z(e.ref.sub, e.query("GET_LABEL_TAP_TO_RETRY"));
}, Xs = ({ root: e }) => {
  Z(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_COMPLETE")), Z(e.ref.sub, e.query("GET_LABEL_TAP_TO_UNDO"));
}, Bn = ({ root: e }) => {
  Z(e.ref.main, ""), Z(e.ref.sub, "");
}, Ze = ({ root: e, action: t }) => {
  Z(e.ref.main, t.status.main), Z(e.ref.sub, t.status.sub);
}, js = ee({
  name: "file-status",
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  write: fe({
    DID_LOAD_ITEM: Bn,
    DID_REVERT_ITEM_PROCESSING: Bn,
    DID_REQUEST_ITEM_PROCESSING: $s,
    DID_ABORT_ITEM_PROCESSING: Ws,
    DID_COMPLETE_ITEM_PROCESSING: Xs,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: zs,
    DID_UPDATE_ITEM_LOAD_PROGRESS: wr,
    DID_THROW_ITEM_LOAD_ERROR: Ze,
    DID_THROW_ITEM_INVALID: Ze,
    DID_THROW_ITEM_PROCESSING_ERROR: Ze,
    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: Ze,
    DID_THROW_ITEM_REMOVE_ERROR: Ze
  }),
  didCreateView: (e) => {
    Ve("CREATE_VIEW", { ...e, view: e });
  },
  create: Ys,
  mixins: {
    styles: ["translateX", "translateY", "opacity"],
    animations: {
      opacity: { type: "tween", duration: 250 },
      translateX: "spring",
      translateY: "spring"
    }
  }
}), Yt = {
  AbortItemLoad: {
    label: "GET_LABEL_BUTTON_ABORT_ITEM_LOAD",
    action: "ABORT_ITEM_LOAD",
    className: "filepond--action-abort-item-load",
    align: "LOAD_INDICATOR_POSITION"
    // right
  },
  RetryItemLoad: {
    label: "GET_LABEL_BUTTON_RETRY_ITEM_LOAD",
    action: "RETRY_ITEM_LOAD",
    icon: "GET_ICON_RETRY",
    className: "filepond--action-retry-item-load",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  RemoveItem: {
    label: "GET_LABEL_BUTTON_REMOVE_ITEM",
    action: "REQUEST_REMOVE_ITEM",
    icon: "GET_ICON_REMOVE",
    className: "filepond--action-remove-item",
    align: "BUTTON_REMOVE_ITEM_POSITION"
    // left
  },
  ProcessItem: {
    label: "GET_LABEL_BUTTON_PROCESS_ITEM",
    action: "REQUEST_ITEM_PROCESSING",
    icon: "GET_ICON_PROCESS",
    className: "filepond--action-process-item",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  AbortItemProcessing: {
    label: "GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",
    action: "ABORT_ITEM_PROCESSING",
    className: "filepond--action-abort-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  RetryItemProcessing: {
    label: "GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",
    action: "RETRY_ITEM_PROCESSING",
    icon: "GET_ICON_RETRY",
    className: "filepond--action-retry-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  RevertItemProcessing: {
    label: "GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",
    action: "REQUEST_REVERT_ITEM_PROCESSING",
    icon: "GET_ICON_UNDO",
    className: "filepond--action-revert-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  }
}, zt = [];
Q(Yt, (e) => {
  zt.push(e);
});
const ge = (e) => {
  if ($t(e) === "right")
    return 0;
  const t = e.ref.buttonRemoveItem.rect.element;
  return t.hidden ? null : t.width + t.left;
}, Qs = (e) => e.ref.buttonAbortItemLoad.rect.element.width, lt = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.height / 4), Ks = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.left / 2), Zs = (e) => e.query("GET_STYLE_LOAD_INDICATOR_POSITION"), Js = (e) => e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION"), $t = (e) => e.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION"), eo = {
  buttonAbortItemLoad: { opacity: 0 },
  buttonRetryItemLoad: { opacity: 0 },
  buttonRemoveItem: { opacity: 0 },
  buttonProcessItem: { opacity: 0 },
  buttonAbortItemProcessing: { opacity: 0 },
  buttonRetryItemProcessing: { opacity: 0 },
  buttonRevertItemProcessing: { opacity: 0 },
  loadProgressIndicator: { opacity: 0, align: Zs },
  processProgressIndicator: { opacity: 0, align: Js },
  processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
  info: { translateX: 0, translateY: 0, opacity: 0 },
  status: { translateX: 0, translateY: 0, opacity: 0 }
}, xn = {
  buttonRemoveItem: { opacity: 1 },
  buttonProcessItem: { opacity: 1 },
  info: { translateX: ge },
  status: { translateX: ge }
}, Ft = {
  buttonAbortItemProcessing: { opacity: 1 },
  processProgressIndicator: { opacity: 1 },
  status: { opacity: 1 }
}, Ye = {
  DID_THROW_ITEM_INVALID: {
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ge },
    status: { translateX: ge, opacity: 1 }
  },
  DID_START_ITEM_LOAD: {
    buttonAbortItemLoad: { opacity: 1 },
    loadProgressIndicator: { opacity: 1 },
    status: { opacity: 1 }
  },
  DID_THROW_ITEM_LOAD_ERROR: {
    buttonRetryItemLoad: { opacity: 1 },
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ge },
    status: { opacity: 1 }
  },
  DID_START_ITEM_REMOVE: {
    processProgressIndicator: { opacity: 1, align: $t },
    info: { translateX: ge },
    status: { opacity: 0 }
  },
  DID_THROW_ITEM_REMOVE_ERROR: {
    processProgressIndicator: { opacity: 0, align: $t },
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ge },
    status: { opacity: 1, translateX: ge }
  },
  DID_LOAD_ITEM: xn,
  DID_LOAD_LOCAL_ITEM: {
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ge },
    status: { translateX: ge }
  },
  DID_START_ITEM_PROCESSING: Ft,
  DID_REQUEST_ITEM_PROCESSING: Ft,
  DID_UPDATE_ITEM_PROCESS_PROGRESS: Ft,
  DID_COMPLETE_ITEM_PROCESSING: {
    buttonRevertItemProcessing: { opacity: 1 },
    info: { opacity: 1 },
    status: { opacity: 1 }
  },
  DID_THROW_ITEM_PROCESSING_ERROR: {
    buttonRemoveItem: { opacity: 1 },
    buttonRetryItemProcessing: { opacity: 1 },
    status: { opacity: 1 },
    info: { translateX: ge }
  },
  DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
    buttonRevertItemProcessing: { opacity: 1 },
    status: { opacity: 1 },
    info: { opacity: 1 }
  },
  DID_ABORT_ITEM_PROCESSING: {
    buttonRemoveItem: { opacity: 1 },
    buttonProcessItem: { opacity: 1 },
    info: { translateX: ge },
    status: { opacity: 1 }
  },
  DID_REVERT_ITEM_PROCESSING: xn
}, to = ee({
  create: ({ root: e }) => {
    e.element.innerHTML = e.query("GET_ICON_DONE");
  },
  name: "processing-complete-indicator",
  ignoreRect: !0,
  mixins: {
    styles: ["scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      opacity: { type: "tween", duration: 250 }
    }
  }
}), no = ({ root: e, props: t }) => {
  const n = Object.keys(Yt).reduce((f, E) => (f[E] = { ...Yt[E] }, f), {}), { id: r } = t, i = e.query("GET_ALLOW_REVERT"), o = e.query("GET_ALLOW_REMOVE"), s = e.query("GET_ALLOW_PROCESS"), l = e.query("GET_INSTANT_UPLOAD"), a = e.query("IS_ASYNC"), d = e.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");
  let c;
  a ? s && !i ? c = (f) => !/RevertItemProcessing/.test(f) : !s && i ? c = (f) => !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(f) : !s && !i && (c = (f) => !/Process/.test(f)) : c = (f) => !/Process/.test(f);
  const p = c ? zt.filter(c) : zt.concat();
  if (l && i && (n.RevertItemProcessing.label = "GET_LABEL_BUTTON_REMOVE_ITEM", n.RevertItemProcessing.icon = "GET_ICON_REMOVE"), a && !i) {
    const f = Ye.DID_COMPLETE_ITEM_PROCESSING;
    f.info.translateX = Ks, f.info.translateY = lt, f.status.translateY = lt, f.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
  }
  if (a && !s && ([
    "DID_START_ITEM_PROCESSING",
    "DID_REQUEST_ITEM_PROCESSING",
    "DID_UPDATE_ITEM_PROCESS_PROGRESS",
    "DID_THROW_ITEM_PROCESSING_ERROR"
  ].forEach((f) => {
    Ye[f].status.translateY = lt;
  }), Ye.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX = Qs), d && i) {
    n.RevertItemProcessing.align = "BUTTON_REMOVE_ITEM_POSITION";
    const f = Ye.DID_COMPLETE_ITEM_PROCESSING;
    f.info.translateX = ge, f.status.translateY = lt, f.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
  }
  o || (n.RemoveItem.disabled = !0), Q(n, (f, E) => {
    const L = e.createChildView(Sr, {
      label: e.query(E.label),
      icon: e.query(E.icon),
      opacity: 0
    });
    p.includes(f) && e.appendChildView(L), E.disabled && (L.element.setAttribute("disabled", "disabled"), L.element.setAttribute("hidden", "hidden")), L.element.dataset.align = e.query(`GET_STYLE_${E.align}`), L.element.classList.add(E.className), L.on("click", (u) => {
      u.stopPropagation(), !E.disabled && e.dispatch(E.action, { query: r });
    }), e.ref[`button${f}`] = L;
  }), e.ref.processingCompleteIndicator = e.appendChildView(
    e.createChildView(to)
  ), e.ref.processingCompleteIndicator.element.dataset.align = e.query(
    "GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"
  ), e.ref.info = e.appendChildView(e.createChildView(Hs, { id: r })), e.ref.status = e.appendChildView(e.createChildView(js, { id: r }));
  const m = e.appendChildView(
    e.createChildView(Gn, {
      opacity: 0,
      align: e.query("GET_STYLE_LOAD_INDICATOR_POSITION")
    })
  );
  m.element.classList.add("filepond--load-indicator"), e.ref.loadProgressIndicator = m;
  const g = e.appendChildView(
    e.createChildView(Gn, {
      opacity: 0,
      align: e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")
    })
  );
  g.element.classList.add("filepond--process-indicator"), e.ref.processProgressIndicator = g, e.ref.activeStyles = [];
}, ro = ({ root: e, actions: t, props: n }) => {
  io({ root: e, actions: t, props: n });
  let r = t.concat().filter((i) => /^DID_/.test(i.type)).reverse().find((i) => Ye[i.type]);
  if (r) {
    e.ref.activeStyles = [];
    const i = Ye[r.type];
    Q(eo, (o, s) => {
      const l = e.ref[o];
      Q(s, (a, d) => {
        const c = i[o] && typeof i[o][a] < "u" ? i[o][a] : d;
        e.ref.activeStyles.push({ control: l, key: a, value: c });
      });
    });
  }
  e.ref.activeStyles.forEach(({ control: i, key: o, value: s }) => {
    i[o] = typeof s == "function" ? s(e) : s;
  });
}, io = fe({
  DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({ root: e, action: t }) => {
    e.ref.buttonAbortItemProcessing.label = t.value;
  },
  DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({ root: e, action: t }) => {
    e.ref.buttonAbortItemLoad.label = t.value;
  },
  DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({ root: e, action: t }) => {
    e.ref.buttonAbortItemRemoval.label = t.value;
  },
  DID_REQUEST_ITEM_PROCESSING: ({ root: e }) => {
    e.ref.processProgressIndicator.spin = !0, e.ref.processProgressIndicator.progress = 0;
  },
  DID_START_ITEM_LOAD: ({ root: e }) => {
    e.ref.loadProgressIndicator.spin = !0, e.ref.loadProgressIndicator.progress = 0;
  },
  DID_START_ITEM_REMOVE: ({ root: e }) => {
    e.ref.processProgressIndicator.spin = !0, e.ref.processProgressIndicator.progress = 0;
  },
  DID_UPDATE_ITEM_LOAD_PROGRESS: ({ root: e, action: t }) => {
    e.ref.loadProgressIndicator.spin = !1, e.ref.loadProgressIndicator.progress = t.progress;
  },
  DID_UPDATE_ITEM_PROCESS_PROGRESS: ({ root: e, action: t }) => {
    e.ref.processProgressIndicator.spin = !1, e.ref.processProgressIndicator.progress = t.progress;
  }
}), so = ee({
  create: no,
  write: ro,
  didCreateView: (e) => {
    Ve("CREATE_VIEW", { ...e, view: e });
  },
  name: "file"
}), oo = ({ root: e, props: t }) => {
  e.ref.fileName = we("legend"), e.appendChild(e.ref.fileName), e.ref.file = e.appendChildView(e.createChildView(so, { id: t.id })), e.ref.data = !1;
}, ao = ({ root: e, props: t }) => {
  Z(e.ref.fileName, tn(e.query("GET_ITEM_NAME", t.id)));
}, lo = ee({
  create: oo,
  ignoreRect: !0,
  write: fe({
    DID_LOAD_ITEM: ao
  }),
  didCreateView: (e) => {
    Ve("CREATE_VIEW", { ...e, view: e });
  },
  tag: "fieldset",
  name: "file-wrapper"
}), Vn = { type: "spring", damping: 0.6, mass: 7 }, co = ({ root: e, props: t }) => {
  [
    {
      name: "top"
    },
    {
      name: "center",
      props: {
        translateY: null,
        scaleY: null
      },
      mixins: {
        animations: {
          scaleY: Vn
        },
        styles: ["translateY", "scaleY"]
      }
    },
    {
      name: "bottom",
      props: {
        translateY: null
      },
      mixins: {
        animations: {
          translateY: Vn
        },
        styles: ["translateY"]
      }
    }
  ].forEach((n) => {
    fo(e, n, t.name);
  }), e.element.classList.add(`filepond--${t.name}`), e.ref.scalable = null;
}, fo = (e, t, n) => {
  const r = ee({
    name: `panel-${t.name} filepond--${n}`,
    mixins: t.mixins,
    ignoreRectUpdate: !0
  }), i = e.createChildView(r, t.props);
  e.ref[t.name] = e.appendChildView(i);
}, uo = ({ root: e, props: t }) => {
  if ((e.ref.scalable === null || t.scalable !== e.ref.scalable) && (e.ref.scalable = dr(t.scalable) ? t.scalable : !0, e.element.dataset.scalable = e.ref.scalable), !t.height)
    return;
  const n = e.ref.top.rect.element, r = e.ref.bottom.rect.element, i = Math.max(n.height + r.height, t.height);
  e.ref.center.translateY = n.height, e.ref.center.scaleY = (i - n.height - r.height) / 100, e.ref.bottom.translateY = i - r.height;
}, Lr = ee({
  name: "panel",
  read: ({ root: e, props: t }) => t.heightCurrent = e.ref.bottom.translateY,
  write: uo,
  create: co,
  ignoreRect: !0,
  mixins: {
    apis: ["height", "heightCurrent", "scalable"]
  }
}), po = (e) => {
  const t = e.map((r) => r.id);
  let n;
  return {
    setIndex: (r) => {
      n = r;
    },
    getIndex: () => n,
    getItemIndex: (r) => t.indexOf(r.id)
  };
}, kn = {
  type: "spring",
  stiffness: 0.75,
  damping: 0.45,
  mass: 10
}, qn = "spring", Hn = {
  DID_START_ITEM_LOAD: "busy",
  DID_UPDATE_ITEM_LOAD_PROGRESS: "loading",
  DID_THROW_ITEM_INVALID: "load-invalid",
  DID_THROW_ITEM_LOAD_ERROR: "load-error",
  DID_LOAD_ITEM: "idle",
  DID_THROW_ITEM_REMOVE_ERROR: "remove-error",
  DID_START_ITEM_REMOVE: "busy",
  DID_START_ITEM_PROCESSING: "busy processing",
  DID_REQUEST_ITEM_PROCESSING: "busy processing",
  DID_UPDATE_ITEM_PROCESS_PROGRESS: "processing",
  DID_COMPLETE_ITEM_PROCESSING: "processing-complete",
  DID_THROW_ITEM_PROCESSING_ERROR: "processing-error",
  DID_THROW_ITEM_PROCESSING_REVERT_ERROR: "processing-revert-error",
  DID_ABORT_ITEM_PROCESSING: "cancelled",
  DID_REVERT_ITEM_PROCESSING: "idle"
}, mo = ({ root: e, props: t }) => {
  if (e.ref.handleClick = (r) => e.dispatch("DID_ACTIVATE_ITEM", { id: t.id }), e.element.id = `filepond--item-${t.id}`, e.element.addEventListener("click", e.ref.handleClick), e.ref.container = e.appendChildView(e.createChildView(lo, { id: t.id })), e.ref.panel = e.appendChildView(e.createChildView(Lr, { name: "item-panel" })), e.ref.panel.height = null, t.markedForRemoval = !1, !e.query("GET_ALLOW_REORDER"))
    return;
  e.element.dataset.dragState = "idle";
  const n = (r) => {
    if (!r.isPrimary)
      return;
    let i = !1;
    const o = {
      x: r.pageX,
      y: r.pageY
    };
    t.dragOrigin = {
      x: e.translateX,
      y: e.translateY
    }, t.dragCenter = {
      x: r.offsetX,
      y: r.offsetY
    };
    const s = po(e.query("GET_ACTIVE_ITEMS"));
    e.dispatch("DID_GRAB_ITEM", { id: t.id, dragState: s });
    const l = (d) => {
      if (!d.isPrimary)
        return;
      d.stopPropagation(), d.preventDefault(), t.dragOffset = {
        x: d.pageX - o.x,
        y: d.pageY - o.y
      }, t.dragOffset.x * t.dragOffset.x + t.dragOffset.y * t.dragOffset.y > 16 && !i && (i = !0, e.element.removeEventListener("click", e.ref.handleClick)), e.dispatch("DID_DRAG_ITEM", { id: t.id, dragState: s });
    }, a = (d) => {
      d.isPrimary && (document.removeEventListener("pointermove", l), document.removeEventListener("pointerup", a), t.dragOffset = {
        x: d.pageX - o.x,
        y: d.pageY - o.y
      }, e.dispatch("DID_DROP_ITEM", { id: t.id, dragState: s }), i && setTimeout(() => e.element.addEventListener("click", e.ref.handleClick), 0));
    };
    document.addEventListener("pointermove", l), document.addEventListener("pointerup", a);
  };
  e.element.addEventListener("pointerdown", n);
}, Eo = fe({
  DID_UPDATE_PANEL_HEIGHT: ({ root: e, action: t }) => {
    e.height = t.height;
  }
}), go = fe(
  {
    DID_GRAB_ITEM: ({ root: e, props: t }) => {
      t.dragOrigin = {
        x: e.translateX,
        y: e.translateY
      };
    },
    DID_DRAG_ITEM: ({ root: e }) => {
      e.element.dataset.dragState = "drag";
    },
    DID_DROP_ITEM: ({ root: e, props: t }) => {
      t.dragOffset = null, t.dragOrigin = null, e.element.dataset.dragState = "drop";
    }
  },
  ({ root: e, actions: t, props: n, shouldOptimize: r }) => {
    e.element.dataset.dragState === "drop" && e.scaleX <= 1 && (e.element.dataset.dragState = "idle");
    let i = t.concat().filter((s) => /^DID_/.test(s.type)).reverse().find((s) => Hn[s.type]);
    i && i.type !== n.currentState && (n.currentState = i.type, e.element.dataset.filepondItemState = Hn[n.currentState] || "");
    const o = e.query("GET_ITEM_PANEL_ASPECT_RATIO") || e.query("GET_PANEL_ASPECT_RATIO");
    o ? r || (e.height = e.rect.element.width * o) : (Eo({ root: e, actions: t, props: n }), !e.height && e.ref.container.rect.element.height > 0 && (e.height = e.ref.container.rect.element.height)), r && (e.ref.panel.height = null), e.ref.panel.height = e.height;
  }
), ho = ee({
  create: mo,
  write: go,
  destroy: ({ root: e, props: t }) => {
    e.element.removeEventListener("click", e.ref.handleClick), e.dispatch("RELEASE_ITEM", { query: t.id });
  },
  tag: "li",
  name: "item",
  mixins: {
    apis: [
      "id",
      "interactionMethod",
      "markedForRemoval",
      "spawnDate",
      "dragCenter",
      "dragOrigin",
      "dragOffset"
    ],
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity", "height"],
    animations: {
      scaleX: qn,
      scaleY: qn,
      translateX: kn,
      translateY: kn,
      opacity: { type: "tween", duration: 150 }
    }
  }
});
var nn = (e, t) => Math.max(1, Math.floor((e + 1) / t));
const rn = (e, t, n) => {
  if (!n)
    return;
  const r = e.rect.element.width, i = t.length;
  let o = null;
  if (i === 0 || n.top < t[0].rect.element.top)
    return -1;
  const l = t[0].rect.element, a = l.marginLeft + l.marginRight, d = l.width + a, c = nn(r, d);
  if (c === 1) {
    for (let g = 0; g < i; g++) {
      const f = t[g], E = f.rect.outer.top + f.rect.element.height * 0.5;
      if (n.top < E)
        return g;
    }
    return i;
  }
  const p = l.marginTop + l.marginBottom, m = l.height + p;
  for (let g = 0; g < i; g++) {
    const f = g % c, E = Math.floor(g / c), L = f * d, u = E * m, D = u - l.marginTop, S = L + d, b = u + m + l.marginBottom;
    if (n.top < b && n.top > D) {
      if (n.left < S)
        return g;
      g !== i - 1 ? o = g : o = null;
    }
  }
  return o !== null ? o : i;
}, ct = {
  height: 0,
  width: 0,
  get getHeight() {
    return this.height;
  },
  set setHeight(e) {
    (this.height === 0 || e === 0) && (this.height = e);
  },
  get getWidth() {
    return this.width;
  },
  set setWidth(e) {
    (this.width === 0 || e === 0) && (this.width = e);
  },
  setDimensions: function(e, t) {
    (this.height === 0 || e === 0) && (this.height = e), (this.width === 0 || t === 0) && (this.width = t);
  }
}, Io = ({ root: e }) => {
  J(e.element, "role", "list"), e.ref.lastItemSpanwDate = Date.now();
}, _o = ({ root: e, action: t }) => {
  const { id: n, index: r, interactionMethod: i } = t;
  e.ref.addIndex = r;
  const o = Date.now();
  let s = o, l = 1;
  if (i !== Te.NONE) {
    l = 0;
    const a = e.query("GET_ITEM_INSERT_INTERVAL"), d = o - e.ref.lastItemSpanwDate;
    s = d < a ? o + (a - d) : o;
  }
  e.ref.lastItemSpanwDate = s, e.appendChildView(
    e.createChildView(
      // view type
      ho,
      // props
      {
        spawnDate: s,
        id: n,
        opacity: l,
        interactionMethod: i
      }
    ),
    r
  );
}, Yn = (e, t, n, r = 0, i = 1) => {
  e.dragOffset ? (e.translateX = null, e.translateY = null, e.translateX = e.dragOrigin.x + e.dragOffset.x, e.translateY = e.dragOrigin.y + e.dragOffset.y, e.scaleX = 1.025, e.scaleY = 1.025) : (e.translateX = t, e.translateY = n, Date.now() > e.spawnDate && (e.opacity === 0 && To(e, t, n, r, i), e.scaleX = 1, e.scaleY = 1, e.opacity = 1));
}, To = (e, t, n, r, i) => {
  e.interactionMethod === Te.NONE ? (e.translateX = null, e.translateX = t, e.translateY = null, e.translateY = n) : e.interactionMethod === Te.DROP ? (e.translateX = null, e.translateX = t - r * 20, e.translateY = null, e.translateY = n - i * 10, e.scaleX = 0.8, e.scaleY = 0.8) : e.interactionMethod === Te.BROWSE ? (e.translateY = null, e.translateY = n - 30) : e.interactionMethod === Te.API && (e.translateX = null, e.translateX = t - 30, e.translateY = null);
}, Ro = ({ root: e, action: t }) => {
  const { id: n } = t, r = e.childViews.find((i) => i.id === n);
  r && (r.scaleX = 0.9, r.scaleY = 0.9, r.opacity = 0, r.markedForRemoval = !0);
}, Ut = (e) => e.rect.element.height + e.rect.element.marginBottom * 0.5 + e.rect.element.marginTop * 0.5, bo = (e) => e.rect.element.width + e.rect.element.marginLeft * 0.5 + e.rect.element.marginRight * 0.5, Oo = ({ root: e, action: t }) => {
  const { id: n, dragState: r } = t, i = e.query("GET_ITEM", { id: n }), o = e.childViews.find((L) => L.id === n), s = e.childViews.length, l = r.getItemIndex(i);
  if (!o)
    return;
  const a = {
    x: o.dragOrigin.x + o.dragOffset.x + o.dragCenter.x,
    y: o.dragOrigin.y + o.dragOffset.y + o.dragCenter.y
  }, d = Ut(o), c = bo(o);
  let p = Math.floor(e.rect.outer.width / c);
  p > s && (p = s);
  const m = Math.floor(s / p + 1);
  ct.setHeight = d * m, ct.setWidth = c * p;
  var g = {
    y: Math.floor(a.y / d),
    x: Math.floor(a.x / c),
    getGridIndex: function() {
      return a.y > ct.getHeight || a.y < 0 || a.x > ct.getWidth || a.x < 0 ? l : this.y * p + this.x;
    },
    getColIndex: function() {
      const u = e.query("GET_ACTIVE_ITEMS"), D = e.childViews.filter((_) => _.rect.element.height), S = u.map(
        (_) => D.find((F) => F.id === _.id)
      ), b = S.findIndex((_) => _ === o), w = Ut(o), G = S.length;
      let X = G, A = 0, N = 0, H = 0;
      for (let _ = 0; _ < G; _++)
        if (A = Ut(S[_]), H = N, N = H + A, a.y < N) {
          if (b > _) {
            if (a.y < H + w) {
              X = _;
              break;
            }
            continue;
          }
          X = _;
          break;
        }
      return X;
    }
  };
  const f = p > 1 ? g.getGridIndex() : g.getColIndex();
  e.dispatch("MOVE_ITEM", { query: o, index: f });
  const E = r.getIndex();
  if (E === void 0 || E !== f) {
    if (r.setIndex(f), E === void 0)
      return;
    e.dispatch("DID_REORDER_ITEMS", {
      items: e.query("GET_ACTIVE_ITEMS"),
      origin: l,
      target: f
    });
  }
}, yo = fe({
  DID_ADD_ITEM: _o,
  DID_REMOVE_ITEM: Ro,
  DID_DRAG_ITEM: Oo
}), So = ({ root: e, props: t, actions: n, shouldOptimize: r }) => {
  yo({ root: e, props: t, actions: n });
  const { dragCoordinates: i } = t, o = e.rect.element.width, s = e.childViews.filter((S) => S.rect.element.height), l = e.query("GET_ACTIVE_ITEMS").map((S) => s.find((b) => b.id === S.id)).filter((S) => S), a = i ? rn(e, l, i) : null, d = e.ref.addIndex || null;
  e.ref.addIndex = null;
  let c = 0, p = 0, m = 0;
  if (l.length === 0)
    return;
  const g = l[0].rect.element, f = g.marginTop + g.marginBottom, E = g.marginLeft + g.marginRight, L = g.width + E, u = g.height + f, D = nn(o, L);
  if (D === 1) {
    let S = 0, b = 0;
    l.forEach((w, G) => {
      if (a) {
        let N = G - a;
        N === -2 ? b = -f * 0.25 : N === -1 ? b = -f * 0.75 : N === 0 ? b = f * 0.75 : N === 1 ? b = f * 0.25 : b = 0;
      }
      r && (w.translateX = null, w.translateY = null), w.markedForRemoval || Yn(w, 0, S + b);
      let A = (w.rect.element.height + f) * (w.markedForRemoval ? w.opacity : 1);
      S += A;
    });
  } else {
    let S = 0, b = 0;
    l.forEach((w, G) => {
      G === a && (c = 1), G === d && (m += 1), w.markedForRemoval && w.opacity < 0.5 && (p -= 1);
      const X = G + m + c + p, A = X % D, N = Math.floor(X / D), H = A * L, _ = N * u, F = Math.sign(H - S), $ = Math.sign(_ - b);
      S = H, b = _, !w.markedForRemoval && (r && (w.translateX = null, w.translateY = null), Yn(w, H, _, F, $));
    });
  }
}, Do = (e, t) => t.filter((n) => n.data && n.data.id ? e.id === n.data.id : !0), Ao = ee({
  create: Io,
  write: So,
  tag: "ul",
  name: "list",
  didWriteView: ({ root: e }) => {
    e.childViews.filter((t) => t.markedForRemoval && t.opacity === 0 && t.resting).forEach((t) => {
      t._destroy(), e.removeChildView(t);
    });
  },
  filterFrameActionsForChild: Do,
  mixins: {
    apis: ["dragCoordinates"]
  }
}), wo = ({ root: e, props: t }) => {
  e.ref.list = e.appendChildView(e.createChildView(Ao)), t.dragCoordinates = null, t.overflowing = !1;
}, Lo = ({ root: e, props: t, action: n }) => {
  e.query("GET_ITEM_INSERT_LOCATION_FREEDOM") && (t.dragCoordinates = {
    left: n.position.scopeLeft - e.ref.list.rect.element.left,
    top: n.position.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop)
  });
}, vo = ({ props: e }) => {
  e.dragCoordinates = null;
}, Po = fe({
  DID_DRAG: Lo,
  DID_END_DRAG: vo
}), Co = ({ root: e, props: t, actions: n }) => {
  if (Po({ root: e, props: t, actions: n }), e.ref.list.dragCoordinates = t.dragCoordinates, t.overflowing && !t.overflow && (t.overflowing = !1, e.element.dataset.state = "", e.height = null), t.overflow) {
    const r = Math.round(t.overflow);
    r !== e.height && (t.overflowing = !0, e.element.dataset.state = "overflow", e.height = r);
  }
}, Mo = ee({
  create: wo,
  write: Co,
  name: "list-scroller",
  mixins: {
    apis: ["overflow", "dragCoordinates"],
    styles: ["height", "translateY"],
    animations: {
      translateY: "spring"
    }
  }
}), Oe = (e, t, n, r = "") => {
  n ? J(e, t, r) : e.removeAttribute(t);
}, No = (e) => {
  if (!(!e || e.value === "")) {
    try {
      e.value = "";
    } catch {
    }
    if (e.value) {
      const t = we("form"), n = e.parentNode, r = e.nextSibling;
      t.appendChild(e), t.reset(), r ? n.insertBefore(e, r) : n.appendChild(e);
    }
  }
}, Go = ({ root: e, props: t }) => {
  e.element.id = `filepond--browser-${t.id}`, J(e.element, "name", e.query("GET_NAME")), J(e.element, "aria-controls", `filepond--assistant-${t.id}`), J(e.element, "aria-labelledby", `filepond--drop-label-${t.id}`), vr({ root: e, action: { value: e.query("GET_ACCEPTED_FILE_TYPES") } }), Pr({ root: e, action: { value: e.query("GET_ALLOW_MULTIPLE") } }), Cr({ root: e, action: { value: e.query("GET_ALLOW_DIRECTORIES_ONLY") } }), Wt({ root: e }), Mr({ root: e, action: { value: e.query("GET_REQUIRED") } }), Nr({ root: e, action: { value: e.query("GET_CAPTURE_METHOD") } }), e.ref.handleChange = (n) => {
    if (!e.element.value)
      return;
    const r = Array.from(e.element.files).map((i) => (i._relativePath = i.webkitRelativePath, i));
    setTimeout(() => {
      t.onload(r), No(e.element);
    }, 250);
  }, e.element.addEventListener("change", e.ref.handleChange);
}, vr = ({ root: e, action: t }) => {
  e.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE") && Oe(e.element, "accept", !!t.value, t.value ? t.value.join(",") : "");
}, Pr = ({ root: e, action: t }) => {
  Oe(e.element, "multiple", t.value);
}, Cr = ({ root: e, action: t }) => {
  Oe(e.element, "webkitdirectory", t.value);
}, Wt = ({ root: e }) => {
  const t = e.query("GET_DISABLED"), n = e.query("GET_ALLOW_BROWSE"), r = t || !n;
  Oe(e.element, "disabled", r);
}, Mr = ({ root: e, action: t }) => {
  t.value ? e.query("GET_TOTAL_ITEMS") === 0 && Oe(e.element, "required", !0) : Oe(e.element, "required", !1);
}, Nr = ({ root: e, action: t }) => {
  Oe(e.element, "capture", !!t.value, t.value === !0 ? "" : t.value);
}, zn = ({ root: e }) => {
  const { element: t } = e;
  e.query("GET_TOTAL_ITEMS") > 0 ? (Oe(t, "required", !1), Oe(t, "name", !1)) : (Oe(t, "name", !0, e.query("GET_NAME")), e.query("GET_CHECK_VALIDITY") && t.setCustomValidity(""), e.query("GET_REQUIRED") && Oe(t, "required", !0));
}, Fo = ({ root: e }) => {
  e.query("GET_CHECK_VALIDITY") && e.element.setCustomValidity(e.query("GET_LABEL_INVALID_FIELD"));
}, Uo = ee({
  tag: "input",
  name: "browser",
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  attributes: {
    type: "file"
  },
  create: Go,
  destroy: ({ root: e }) => {
    e.element.removeEventListener("change", e.ref.handleChange);
  },
  write: fe({
    DID_LOAD_ITEM: zn,
    DID_REMOVE_ITEM: zn,
    DID_THROW_ITEM_INVALID: Fo,
    DID_SET_DISABLED: Wt,
    DID_SET_ALLOW_BROWSE: Wt,
    DID_SET_ALLOW_DIRECTORIES_ONLY: Cr,
    DID_SET_ALLOW_MULTIPLE: Pr,
    DID_SET_ACCEPTED_FILE_TYPES: vr,
    DID_SET_CAPTURE_METHOD: Nr,
    DID_SET_REQUIRED: Mr
  })
}), $n = {
  ENTER: 13,
  SPACE: 32
}, Bo = ({ root: e, props: t }) => {
  const n = we("label");
  J(n, "for", `filepond--browser-${t.id}`), J(n, "id", `filepond--drop-label-${t.id}`), J(n, "aria-hidden", "true"), e.ref.handleKeyDown = (r) => {
    (r.keyCode === $n.ENTER || r.keyCode === $n.SPACE) && (r.preventDefault(), e.ref.label.click());
  }, e.ref.handleClick = (r) => {
    r.target === n || n.contains(r.target) || e.ref.label.click();
  }, n.addEventListener("keydown", e.ref.handleKeyDown), e.element.addEventListener("click", e.ref.handleClick), Gr(n, t.caption), e.appendChild(n), e.ref.label = n;
}, Gr = (e, t) => {
  e.innerHTML = t;
  const n = e.querySelector(".filepond--label-action");
  return n && J(n, "tabindex", "0"), t;
}, xo = ee({
  name: "drop-label",
  ignoreRect: !0,
  create: Bo,
  destroy: ({ root: e }) => {
    e.ref.label.addEventListener("keydown", e.ref.handleKeyDown), e.element.removeEventListener("click", e.ref.handleClick);
  },
  write: fe({
    DID_SET_LABEL_IDLE: ({ root: e, action: t }) => {
      Gr(e.ref.label, t.value);
    }
  }),
  mixins: {
    styles: ["opacity", "translateX", "translateY"],
    animations: {
      opacity: { type: "tween", duration: 150 },
      translateX: "spring",
      translateY: "spring"
    }
  }
}), Vo = ee({
  name: "drip-blob",
  ignoreRect: !0,
  mixins: {
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      translateX: "spring",
      translateY: "spring",
      opacity: { type: "tween", duration: 250 }
    }
  }
}), ko = ({ root: e }) => {
  const t = e.rect.element.width * 0.5, n = e.rect.element.height * 0.5;
  e.ref.blob = e.appendChildView(
    e.createChildView(Vo, {
      opacity: 0,
      scaleX: 2.5,
      scaleY: 2.5,
      translateX: t,
      translateY: n
    })
  );
}, qo = ({ root: e, action: t }) => {
  if (!e.ref.blob) {
    ko({ root: e });
    return;
  }
  e.ref.blob.translateX = t.position.scopeLeft, e.ref.blob.translateY = t.position.scopeTop, e.ref.blob.scaleX = 1, e.ref.blob.scaleY = 1, e.ref.blob.opacity = 1;
}, Ho = ({ root: e }) => {
  e.ref.blob && (e.ref.blob.opacity = 0);
}, Yo = ({ root: e }) => {
  e.ref.blob && (e.ref.blob.scaleX = 2.5, e.ref.blob.scaleY = 2.5, e.ref.blob.opacity = 0);
}, zo = ({ root: e, props: t, actions: n }) => {
  $o({ root: e, props: t, actions: n });
  const { blob: r } = e.ref;
  n.length === 0 && r && r.opacity === 0 && (e.removeChildView(r), e.ref.blob = null);
}, $o = fe({
  DID_DRAG: qo,
  DID_DROP: Yo,
  DID_END_DRAG: Ho
}), Wo = ee({
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  name: "drip",
  write: zo
}), Fr = (e, t) => {
  try {
    const n = new DataTransfer();
    t.forEach((r) => {
      r instanceof File ? n.items.add(r) : n.items.add(
        new File([r], r.name, {
          type: r.type
        })
      );
    }), e.files = n.files;
  } catch {
    return !1;
  }
  return !0;
}, Xo = ({ root: e }) => e.ref.fields = {}, Ot = (e, t) => e.ref.fields[t], sn = (e) => {
  e.query("GET_ACTIVE_ITEMS").forEach((t) => {
    e.ref.fields[t.id] && e.element.appendChild(e.ref.fields[t.id]);
  });
}, Wn = ({ root: e }) => sn(e), jo = ({ root: e, action: t }) => {
  const i = !(e.query("GET_ITEM", t.id).origin === ie.LOCAL) && e.query("SHOULD_UPDATE_FILE_INPUT"), o = we("input");
  o.type = i ? "file" : "hidden", o.name = e.query("GET_NAME"), o.disabled = e.query("GET_DISABLED"), e.ref.fields[t.id] = o, sn(e);
}, Qo = ({ root: e, action: t }) => {
  const n = Ot(e, t.id);
  if (!n || (t.serverFileReference !== null && (n.value = t.serverFileReference), !e.query("SHOULD_UPDATE_FILE_INPUT")))
    return;
  const r = e.query("GET_ITEM", t.id);
  Fr(n, [r.file]);
}, Ko = ({ root: e, action: t }) => {
  e.query("SHOULD_UPDATE_FILE_INPUT") && setTimeout(() => {
    const n = Ot(e, t.id);
    n && Fr(n, [t.file]);
  }, 0);
}, Zo = ({ root: e }) => {
  e.element.disabled = e.query("GET_DISABLED");
}, Jo = ({ root: e, action: t }) => {
  const n = Ot(e, t.id);
  n && (n.parentNode && n.parentNode.removeChild(n), delete e.ref.fields[t.id]);
}, ea = ({ root: e, action: t }) => {
  const n = Ot(e, t.id);
  n && (t.value === null ? n.removeAttribute("value") : n.value = t.value, sn(e));
}, ta = fe({
  DID_SET_DISABLED: Zo,
  DID_ADD_ITEM: jo,
  DID_LOAD_ITEM: Qo,
  DID_REMOVE_ITEM: Jo,
  DID_DEFINE_VALUE: ea,
  DID_PREPARE_OUTPUT: Ko,
  DID_REORDER_ITEMS: Wn,
  DID_SORT_ITEMS: Wn
}), na = ee({
  tag: "fieldset",
  name: "data",
  create: Xo,
  write: ta,
  ignoreRect: !0
}), ra = (e) => "getRootNode" in e ? e.getRootNode() : document, ia = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff"], sa = ["css", "csv", "html", "txt"], oa = {
  zip: "zip|compressed",
  epub: "application/epub+zip"
}, Ur = (e = "") => (e = e.toLowerCase(), ia.includes(e) ? "image/" + (e === "jpg" ? "jpeg" : e === "svg" ? "svg+xml" : e) : sa.includes(e) ? "text/" + e : oa[e] || ""), on = (e) => new Promise((t, n) => {
  const r = ma(e);
  if (r.length && !aa(e))
    return t(r);
  la(e).then(t);
}), aa = (e) => e.files ? e.files.length > 0 : !1, la = (e) => new Promise((t, n) => {
  const r = (e.items ? Array.from(e.items) : []).filter((i) => ca(i)).map((i) => da(i));
  if (!r.length) {
    t(e.files ? Array.from(e.files) : []);
    return;
  }
  Promise.all(r).then((i) => {
    const o = [];
    i.forEach((s) => {
      o.push.apply(o, s);
    }), t(
      o.filter((s) => s).map((s) => (s._relativePath || (s._relativePath = s.webkitRelativePath), s))
    );
  }).catch(console.error);
}), ca = (e) => {
  if (Br(e)) {
    const t = an(e);
    if (t)
      return t.isFile || t.isDirectory;
  }
  return e.kind === "file";
}, da = (e) => new Promise((t, n) => {
  if (pa(e)) {
    fa(an(e)).then(t).catch(n);
    return;
  }
  t([e.getAsFile()]);
}), fa = (e) => new Promise((t, n) => {
  const r = [];
  let i = 0, o = 0;
  const s = () => {
    o === 0 && i === 0 && t(r);
  }, l = (a) => {
    i++;
    const d = a.createReader(), c = () => {
      d.readEntries((p) => {
        if (p.length === 0) {
          i--, s();
          return;
        }
        p.forEach((m) => {
          m.isDirectory ? l(m) : (o++, m.file((g) => {
            const f = ua(g);
            m.fullPath && (f._relativePath = m.fullPath), r.push(f), o--, s();
          }));
        }), c();
      }, n);
    };
    c();
  };
  l(e);
}), ua = (e) => {
  if (e.type.length)
    return e;
  const t = e.lastModifiedDate, n = e.name, r = Ur(bt(e.name));
  return r.length && (e = e.slice(0, e.size, r), e.name = n, e.lastModifiedDate = t), e;
}, pa = (e) => Br(e) && (an(e) || {}).isDirectory, Br = (e) => "webkitGetAsEntry" in e, an = (e) => e.webkitGetAsEntry(), ma = (e) => {
  let t = [];
  try {
    if (t = ga(e), t.length)
      return t;
    t = Ea(e);
  } catch {
  }
  return t;
}, Ea = (e) => {
  let t = e.getData("url");
  return typeof t == "string" && t.length ? [t] : [];
}, ga = (e) => {
  let t = e.getData("text/html");
  if (typeof t == "string" && t.length) {
    const n = t.match(/src\s*=\s*"(.+?)"/);
    if (n)
      return [n[1]];
  }
  return [];
}, gt = [], xe = (e) => ({
  pageLeft: e.pageX,
  pageTop: e.pageY,
  scopeLeft: e.offsetX || e.layerX,
  scopeTop: e.offsetY || e.layerY
}), ha = (e, t, n) => {
  const r = Ia(t), i = {
    element: e,
    filterElement: n,
    state: null,
    ondrop: () => {
    },
    onenter: () => {
    },
    ondrag: () => {
    },
    onexit: () => {
    },
    onload: () => {
    },
    allowdrop: () => {
    }
  };
  return i.destroy = r.addListener(i), i;
}, Ia = (e) => {
  const t = gt.find((r) => r.element === e);
  if (t)
    return t;
  const n = _a(e);
  return gt.push(n), n;
}, _a = (e) => {
  const t = [], n = {
    dragenter: Ra,
    dragover: ba,
    dragleave: ya,
    drop: Oa
  }, r = {};
  Q(n, (o, s) => {
    r[o] = s(e, t), e.addEventListener(o, r[o], !1);
  });
  const i = {
    element: e,
    addListener: (o) => (t.push(o), () => {
      t.splice(t.indexOf(o), 1), t.length === 0 && (gt.splice(gt.indexOf(i), 1), Q(n, (s) => {
        e.removeEventListener(s, r[s], !1);
      }));
    })
  };
  return i;
}, Ta = (e, t) => ("elementFromPoint" in e || (e = document), e.elementFromPoint(t.x, t.y)), ln = (e, t) => {
  const n = ra(t), r = Ta(n, {
    x: e.pageX - window.pageXOffset,
    y: e.pageY - window.pageYOffset
  });
  return r === t || t.contains(r);
};
let xr = null;
const dt = (e, t) => {
  try {
    e.dropEffect = t;
  } catch {
  }
}, Ra = (e, t) => (n) => {
  n.preventDefault(), xr = n.target, t.forEach((r) => {
    const { element: i, onenter: o } = r;
    ln(n, i) && (r.state = "enter", o(xe(n)));
  });
}, ba = (e, t) => (n) => {
  n.preventDefault();
  const r = n.dataTransfer;
  on(r).then((i) => {
    let o = !1;
    t.some((s) => {
      const { filterElement: l, element: a, onenter: d, onexit: c, ondrag: p, allowdrop: m } = s;
      dt(r, "copy");
      const g = m(i);
      if (!g) {
        dt(r, "none");
        return;
      }
      if (ln(n, a)) {
        if (o = !0, s.state === null) {
          s.state = "enter", d(xe(n));
          return;
        }
        if (s.state = "over", l && !g) {
          dt(r, "none");
          return;
        }
        p(xe(n));
      } else
        l && !o && dt(r, "none"), s.state && (s.state = null, c(xe(n)));
    });
  });
}, Oa = (e, t) => (n) => {
  n.preventDefault();
  const r = n.dataTransfer;
  on(r).then((i) => {
    t.forEach((o) => {
      const { filterElement: s, element: l, ondrop: a, onexit: d, allowdrop: c } = o;
      if (o.state = null, !(s && !ln(n, l))) {
        if (!c(i))
          return d(xe(n));
        a(xe(n), i);
      }
    });
  });
}, ya = (e, t) => (n) => {
  xr === n.target && t.forEach((r) => {
    const { onexit: i } = r;
    r.state = null, i(xe(n));
  });
}, Sa = (e, t, n) => {
  e.classList.add("filepond--hopper");
  const { catchesDropsOnPage: r, requiresDropOnElement: i, filterItems: o = (c) => c } = n, s = ha(
    e,
    r ? document.documentElement : e,
    i
  );
  let l = "", a = "";
  s.allowdrop = (c) => t(o(c)), s.ondrop = (c, p) => {
    const m = o(p);
    if (!t(m)) {
      d.ondragend(c);
      return;
    }
    a = "drag-drop", d.onload(m, c);
  }, s.ondrag = (c) => {
    d.ondrag(c);
  }, s.onenter = (c) => {
    a = "drag-over", d.ondragstart(c);
  }, s.onexit = (c) => {
    a = "drag-exit", d.ondragend(c);
  };
  const d = {
    updateHopperState: () => {
      l !== a && (e.dataset.hopperState = a, l = a);
    },
    onload: () => {
    },
    ondragstart: () => {
    },
    ondrag: () => {
    },
    ondragend: () => {
    },
    destroy: () => {
      s.destroy();
    }
  };
  return d;
};
let Xt = !1;
const ze = [], Vr = (e) => {
  const t = document.activeElement;
  if (t && /textarea|input/i.test(t.nodeName)) {
    let n = !1, r = t;
    for (; r !== document.body; ) {
      if (r.classList.contains("filepond--root")) {
        n = !0;
        break;
      }
      r = r.parentNode;
    }
    if (!n)
      return;
  }
  on(e.clipboardData).then((n) => {
    n.length && ze.forEach((r) => r(n));
  });
}, Da = (e) => {
  ze.includes(e) || (ze.push(e), !Xt && (Xt = !0, document.addEventListener("paste", Vr)));
}, Aa = (e) => {
  Zt(ze, ze.indexOf(e)), ze.length === 0 && (document.removeEventListener("paste", Vr), Xt = !1);
}, wa = () => {
  const e = (n) => {
    t.onload(n);
  }, t = {
    destroy: () => {
      Aa(e);
    },
    onload: () => {
    }
  };
  return Da(e), t;
}, La = ({ root: e, props: t }) => {
  e.element.id = `filepond--assistant-${t.id}`, J(e.element, "role", "status"), J(e.element, "aria-live", "polite"), J(e.element, "aria-relevant", "additions");
};
let Xn = null, jn = null;
const Bt = [], yt = (e, t) => {
  e.element.textContent = t;
}, va = (e) => {
  e.element.textContent = "";
}, kr = (e, t, n) => {
  const r = e.query("GET_TOTAL_ITEMS");
  yt(
    e,
    `${n} ${t}, ${r} ${r === 1 ? e.query("GET_LABEL_FILE_COUNT_SINGULAR") : e.query("GET_LABEL_FILE_COUNT_PLURAL")}`
  ), clearTimeout(jn), jn = setTimeout(() => {
    va(e);
  }, 1500);
}, qr = (e) => e.element.parentNode.contains(document.activeElement), Pa = ({ root: e, action: t }) => {
  if (!qr(e))
    return;
  e.element.textContent = "";
  const n = e.query("GET_ITEM", t.id);
  Bt.push(n.filename), clearTimeout(Xn), Xn = setTimeout(() => {
    kr(e, Bt.join(", "), e.query("GET_LABEL_FILE_ADDED")), Bt.length = 0;
  }, 750);
}, Ca = ({ root: e, action: t }) => {
  if (!qr(e))
    return;
  const n = t.item;
  kr(e, n.filename, e.query("GET_LABEL_FILE_REMOVED"));
}, Ma = ({ root: e, action: t }) => {
  const r = e.query("GET_ITEM", t.id).filename, i = e.query("GET_LABEL_FILE_PROCESSING_COMPLETE");
  yt(e, `${r} ${i}`);
}, Qn = ({ root: e, action: t }) => {
  const r = e.query("GET_ITEM", t.id).filename, i = e.query("GET_LABEL_FILE_PROCESSING_ABORTED");
  yt(e, `${r} ${i}`);
}, ft = ({ root: e, action: t }) => {
  const r = e.query("GET_ITEM", t.id).filename;
  yt(e, `${t.status.main} ${r} ${t.status.sub}`);
}, Na = ee({
  create: La,
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  write: fe({
    DID_LOAD_ITEM: Pa,
    DID_REMOVE_ITEM: Ca,
    DID_COMPLETE_ITEM_PROCESSING: Ma,
    DID_ABORT_ITEM_PROCESSING: Qn,
    DID_REVERT_ITEM_PROCESSING: Qn,
    DID_THROW_ITEM_REMOVE_ERROR: ft,
    DID_THROW_ITEM_LOAD_ERROR: ft,
    DID_THROW_ITEM_INVALID: ft,
    DID_THROW_ITEM_PROCESSING_ERROR: ft
  }),
  tag: "span",
  name: "assistant"
}), Hr = (e, t = "-") => e.replace(new RegExp(`${t}.`, "g"), (n) => n.charAt(1).toUpperCase()), Yr = (e, t = 16, n = !0) => {
  let r = Date.now(), i = null;
  return (...o) => {
    clearTimeout(i);
    const s = Date.now() - r, l = () => {
      r = Date.now(), e(...o);
    };
    s < t ? n || (i = setTimeout(l, t - s)) : l();
  };
}, Ga = 1e6, ht = (e) => e.preventDefault(), Fa = ({ root: e, props: t }) => {
  const n = e.query("GET_ID");
  n && (e.element.id = n);
  const r = e.query("GET_CLASS_NAME");
  r && r.split(" ").filter((a) => a.length).forEach((a) => {
    e.element.classList.add(a);
  }), e.ref.label = e.appendChildView(
    e.createChildView(xo, {
      ...t,
      translateY: null,
      caption: e.query("GET_LABEL_IDLE")
    })
  ), e.ref.list = e.appendChildView(e.createChildView(Mo, { translateY: null })), e.ref.panel = e.appendChildView(e.createChildView(Lr, { name: "panel-root" })), e.ref.assistant = e.appendChildView(e.createChildView(Na, { ...t })), e.ref.data = e.appendChildView(e.createChildView(na, { ...t })), e.ref.measure = we("div"), e.ref.measure.style.height = "100%", e.element.appendChild(e.ref.measure), e.ref.bounds = null, e.query("GET_STYLES").filter((a) => !Ae(a.value)).map(({ name: a, value: d }) => {
    e.element.dataset[a] = d;
  }), e.ref.widthPrevious = null, e.ref.widthUpdated = Yr(() => {
    e.ref.updateHistory = [], e.dispatch("DID_RESIZE_ROOT");
  }, 250), e.ref.previousAspectRatio = null, e.ref.updateHistory = [];
  const i = window.matchMedia("(pointer: fine) and (hover: hover)").matches, o = "PointerEvent" in window;
  e.query("GET_ALLOW_REORDER") && o && !i && (e.element.addEventListener("touchmove", ht, { passive: !1 }), e.element.addEventListener("gesturestart", ht));
  const s = e.query("GET_CREDITS");
  if (s.length === 2) {
    const a = document.createElement("a");
    a.className = "filepond--credits", a.setAttribute("aria-hidden", "true"), a.href = s[0], a.tabindex = -1, a.target = "_blank", a.rel = "noopener noreferrer", a.textContent = s[1], e.element.appendChild(a), e.ref.credits = a;
  }
}, Ua = ({ root: e, props: t, actions: n }) => {
  if (qa({ root: e, props: t, actions: n }), n.filter((G) => /^DID_SET_STYLE_/.test(G.type)).filter((G) => !Ae(G.data.value)).map(({ type: G, data: X }) => {
    const A = Hr(G.substring(8).toLowerCase(), "_");
    e.element.dataset[A] = X.value, e.invalidateLayout();
  }), e.rect.element.hidden)
    return;
  e.rect.element.width !== e.ref.widthPrevious && (e.ref.widthPrevious = e.rect.element.width, e.ref.widthUpdated());
  let r = e.ref.bounds;
  r || (r = e.ref.bounds = Va(e), e.element.removeChild(e.ref.measure), e.ref.measure = null);
  const { hopper: i, label: o, list: s, panel: l } = e.ref;
  i && i.updateHopperState();
  const a = e.query("GET_PANEL_ASPECT_RATIO"), d = e.query("GET_ALLOW_MULTIPLE"), c = e.query("GET_TOTAL_ITEMS"), p = d ? e.query("GET_MAX_FILES") || Ga : 1, m = c === p, g = n.find((G) => G.type === "DID_ADD_ITEM");
  if (m && g) {
    const G = g.data.interactionMethod;
    o.opacity = 0, d ? o.translateY = -40 : G === Te.API ? o.translateX = 40 : G === Te.BROWSE ? o.translateY = 40 : o.translateY = 30;
  } else
    m || (o.opacity = 1, o.translateX = 0, o.translateY = 0);
  const f = Ba(e), E = xa(e), L = o.rect.element.height, u = !d || m ? 0 : L, D = m ? s.rect.element.marginTop : 0, S = c === 0 ? 0 : s.rect.element.marginBottom, b = u + D + E.visual + S, w = u + D + E.bounds + S;
  if (s.translateY = Math.max(0, u - s.rect.element.marginTop) - f.top, a) {
    const G = e.rect.element.width, X = G * a;
    a !== e.ref.previousAspectRatio && (e.ref.previousAspectRatio = a, e.ref.updateHistory = []);
    const A = e.ref.updateHistory;
    A.push(G);
    const N = 2;
    if (A.length > N * 2) {
      const _ = A.length, F = _ - 10;
      let $ = 0;
      for (let R = _; R >= F; R--)
        if (A[R] === A[R - 2] && $++, $ >= N)
          return;
    }
    l.scalable = !1, l.height = X;
    const H = (
      // the height of the panel minus the label height
      X - u - // the room we leave open between the end of the list and the panel bottom
      (S - f.bottom) - // if we're full we need to leave some room between the top of the panel and the list
      (m ? D : 0)
    );
    E.visual > H ? s.overflow = H : s.overflow = null, e.height = X;
  } else if (r.fixedHeight) {
    l.scalable = !1;
    const G = (
      // the height of the panel minus the label height
      r.fixedHeight - u - // the room we leave open between the end of the list and the panel bottom
      (S - f.bottom) - // if we're full we need to leave some room between the top of the panel and the list
      (m ? D : 0)
    );
    E.visual > G ? s.overflow = G : s.overflow = null;
  } else if (r.cappedHeight) {
    const G = b >= r.cappedHeight, X = Math.min(r.cappedHeight, b);
    l.scalable = !0, l.height = G ? X : X - f.top - f.bottom;
    const A = (
      // the height of the panel minus the label height
      X - u - // the room we leave open between the end of the list and the panel bottom
      (S - f.bottom) - // if we're full we need to leave some room between the top of the panel and the list
      (m ? D : 0)
    );
    b > r.cappedHeight && E.visual > A ? s.overflow = A : s.overflow = null, e.height = Math.min(
      r.cappedHeight,
      w - f.top - f.bottom
    );
  } else {
    const G = c > 0 ? f.top + f.bottom : 0;
    l.scalable = !0, l.height = Math.max(L, b - G), e.height = Math.max(L, w - G);
  }
  e.ref.credits && l.heightCurrent && (e.ref.credits.style.transform = `translateY(${l.heightCurrent}px)`);
}, Ba = (e) => {
  const t = e.ref.list.childViews[0].childViews[0];
  return t ? {
    top: t.rect.element.marginTop,
    bottom: t.rect.element.marginBottom
  } : {
    top: 0,
    bottom: 0
  };
}, xa = (e) => {
  let t = 0, n = 0;
  const r = e.ref.list, i = r.childViews[0], o = i.childViews.filter((D) => D.rect.element.height), s = e.query("GET_ACTIVE_ITEMS").map((D) => o.find((S) => S.id === D.id)).filter((D) => D);
  if (s.length === 0)
    return { visual: t, bounds: n };
  const l = i.rect.element.width, a = rn(i, s, r.dragCoordinates), d = s[0].rect.element, c = d.marginTop + d.marginBottom, p = d.marginLeft + d.marginRight, m = d.width + p, g = d.height + c, f = typeof a < "u" && a >= 0 ? 1 : 0, E = s.find((D) => D.markedForRemoval && D.opacity < 0.45) ? -1 : 0, L = s.length + f + E, u = nn(l, m);
  return u === 1 ? s.forEach((D) => {
    const S = D.rect.element.height + c;
    n += S, t += S * D.opacity;
  }) : (n = Math.ceil(L / u) * g, t = n), { visual: t, bounds: n };
}, Va = (e) => {
  const t = e.ref.measureHeight || null;
  return {
    cappedHeight: parseInt(e.style.maxHeight, 10) || null,
    fixedHeight: t === 0 ? null : t
  };
}, cn = (e, t) => {
  const n = e.query("GET_ALLOW_REPLACE"), r = e.query("GET_ALLOW_MULTIPLE"), i = e.query("GET_TOTAL_ITEMS");
  let o = e.query("GET_MAX_FILES");
  const s = t.length;
  return !r && s > 1 ? (e.dispatch("DID_THROW_MAX_FILES", {
    source: t,
    error: K("warning", 0, "Max files")
  }), !0) : (o = r ? o : 1, !r && n ? !1 : Xe(o) && i + s > o ? (e.dispatch("DID_THROW_MAX_FILES", {
    source: t,
    error: K("warning", 0, "Max files")
  }), !0) : !1);
}, ka = (e, t, n) => {
  const r = e.childViews[0];
  return rn(r, t, {
    left: n.scopeLeft - r.rect.element.left,
    top: n.scopeTop - (e.rect.outer.top + e.rect.element.marginTop + e.rect.element.scrollTop)
  });
}, Kn = (e) => {
  const t = e.query("GET_ALLOW_DROP"), n = e.query("GET_DISABLED"), r = t && !n;
  if (r && !e.ref.hopper) {
    const i = Sa(
      e.element,
      (o) => {
        const s = e.query("GET_BEFORE_DROP_FILE") || (() => !0);
        return e.query("GET_DROP_VALIDATION") ? o.every(
          (a) => Ve("ALLOW_HOPPER_ITEM", a, {
            query: e.query
          }).every((d) => d === !0) && s(a)
        ) : !0;
      },
      {
        filterItems: (o) => {
          const s = e.query("GET_IGNORED_FILES");
          return o.filter((l) => We(l) ? !s.includes(l.name.toLowerCase()) : !0);
        },
        catchesDropsOnPage: e.query("GET_DROP_ON_PAGE"),
        requiresDropOnElement: e.query("GET_DROP_ON_ELEMENT")
      }
    );
    i.onload = (o, s) => {
      const a = e.ref.list.childViews[0].childViews.filter((c) => c.rect.element.height), d = e.query("GET_ACTIVE_ITEMS").map((c) => a.find((p) => p.id === c.id)).filter((c) => c);
      Re("ADD_ITEMS", o, { dispatch: e.dispatch }).then((c) => {
        if (cn(e, c))
          return !1;
        e.dispatch("ADD_ITEMS", {
          items: c,
          index: ka(e.ref.list, d, s),
          interactionMethod: Te.DROP
        });
      }), e.dispatch("DID_DROP", { position: s }), e.dispatch("DID_END_DRAG", { position: s });
    }, i.ondragstart = (o) => {
      e.dispatch("DID_START_DRAG", { position: o });
    }, i.ondrag = Yr((o) => {
      e.dispatch("DID_DRAG", { position: o });
    }), i.ondragend = (o) => {
      e.dispatch("DID_END_DRAG", { position: o });
    }, e.ref.hopper = i, e.ref.drip = e.appendChildView(e.createChildView(Wo));
  } else
    !r && e.ref.hopper && (e.ref.hopper.destroy(), e.ref.hopper = null, e.removeChildView(e.ref.drip));
}, Zn = (e, t) => {
  const n = e.query("GET_ALLOW_BROWSE"), r = e.query("GET_DISABLED"), i = n && !r;
  i && !e.ref.browser ? e.ref.browser = e.appendChildView(
    e.createChildView(Uo, {
      ...t,
      onload: (o) => {
        Re("ADD_ITEMS", o, {
          dispatch: e.dispatch
        }).then((s) => {
          if (cn(e, s))
            return !1;
          e.dispatch("ADD_ITEMS", {
            items: s,
            index: -1,
            interactionMethod: Te.BROWSE
          });
        });
      }
    }),
    0
  ) : !i && e.ref.browser && (e.removeChildView(e.ref.browser), e.ref.browser = null);
}, Jn = (e) => {
  const t = e.query("GET_ALLOW_PASTE"), n = e.query("GET_DISABLED"), r = t && !n;
  r && !e.ref.paster ? (e.ref.paster = wa(), e.ref.paster.onload = (i) => {
    Re("ADD_ITEMS", i, { dispatch: e.dispatch }).then((o) => {
      if (cn(e, o))
        return !1;
      e.dispatch("ADD_ITEMS", {
        items: o,
        index: -1,
        interactionMethod: Te.PASTE
      });
    });
  }) : !r && e.ref.paster && (e.ref.paster.destroy(), e.ref.paster = null);
}, qa = fe({
  DID_SET_ALLOW_BROWSE: ({ root: e, props: t }) => {
    Zn(e, t);
  },
  DID_SET_ALLOW_DROP: ({ root: e }) => {
    Kn(e);
  },
  DID_SET_ALLOW_PASTE: ({ root: e }) => {
    Jn(e);
  },
  DID_SET_DISABLED: ({ root: e, props: t }) => {
    Kn(e), Jn(e), Zn(e, t), e.query("GET_DISABLED") ? e.element.dataset.disabled = "disabled" : e.element.removeAttribute("data-disabled");
  }
}), Ha = ee({
  name: "root",
  read: ({ root: e }) => {
    e.ref.measure && (e.ref.measureHeight = e.ref.measure.offsetHeight);
  },
  create: Fa,
  write: Ua,
  destroy: ({ root: e }) => {
    e.ref.paster && e.ref.paster.destroy(), e.ref.hopper && e.ref.hopper.destroy(), e.element.removeEventListener("touchmove", ht), e.element.removeEventListener("gesturestart", ht);
  },
  mixins: {
    styles: ["height"]
  }
}), Ya = (e = {}) => {
  let t = null;
  const n = Et(), r = si(
    // initial state (should be serializable)
    Yi(n),
    // queries
    [cs, Wi(n)],
    // action handlers
    [Ns, $i(n)]
  );
  r.dispatch("SET_OPTIONS", { options: e });
  const i = () => {
    document.hidden || r.dispatch("KICK");
  };
  document.addEventListener("visibilitychange", i);
  let o = null, s = !1, l = !1, a = null, d = null;
  const c = () => {
    s || (s = !0), clearTimeout(o), o = setTimeout(() => {
      s = !1, a = null, d = null, l && (l = !1, r.dispatch("DID_STOP_RESIZE"));
    }, 500);
  };
  window.addEventListener("resize", c);
  const p = Ha(r, { id: Kt() });
  let m = !1, g = !1;
  const f = {
    // necessary for update loop
    /**
     * Reads from dom (never call manually)
     * @private
     */
    _read: () => {
      s && (d = window.innerWidth, a || (a = d), !l && d !== a && (r.dispatch("DID_START_RESIZE"), l = !0)), g && m && (m = p.element.offsetParent === null), !m && (p._read(), g = p.rect.element.hidden);
    },
    /**
     * Writes to dom (never call manually)
     * @private
     */
    _write: (h) => {
      const O = r.processActionQueue().filter((C) => !/^SET_/.test(C.type));
      m && !O.length || (D(O), m = p._write(h, O, l), Qi(r.query("GET_ITEMS")), m && r.processDispatchQueue());
    }
  }, E = (h) => (O) => {
    const C = {
      type: h
    };
    if (!O)
      return C;
    if (O.hasOwnProperty("error") && (C.error = O.error ? { ...O.error } : null), O.status && (C.status = { ...O.status }), O.file && (C.output = O.file), O.source)
      C.file = O.source;
    else if (O.item || O.id) {
      const P = O.item ? O.item : r.query("GET_ITEM", O.id);
      C.file = P ? pe(P) : null;
    }
    return O.items && (C.items = O.items.map(pe)), /progress/.test(h) && (C.progress = O.progress), O.hasOwnProperty("origin") && O.hasOwnProperty("target") && (C.origin = O.origin, C.target = O.target), C;
  }, L = {
    DID_DESTROY: E("destroy"),
    DID_INIT: E("init"),
    DID_THROW_MAX_FILES: E("warning"),
    DID_INIT_ITEM: E("initfile"),
    DID_START_ITEM_LOAD: E("addfilestart"),
    DID_UPDATE_ITEM_LOAD_PROGRESS: E("addfileprogress"),
    DID_LOAD_ITEM: E("addfile"),
    DID_THROW_ITEM_INVALID: [E("error"), E("addfile")],
    DID_THROW_ITEM_LOAD_ERROR: [E("error"), E("addfile")],
    DID_THROW_ITEM_REMOVE_ERROR: [E("error"), E("removefile")],
    DID_PREPARE_OUTPUT: E("preparefile"),
    DID_START_ITEM_PROCESSING: E("processfilestart"),
    DID_UPDATE_ITEM_PROCESS_PROGRESS: E("processfileprogress"),
    DID_ABORT_ITEM_PROCESSING: E("processfileabort"),
    DID_COMPLETE_ITEM_PROCESSING: E("processfile"),
    DID_COMPLETE_ITEM_PROCESSING_ALL: E("processfiles"),
    DID_REVERT_ITEM_PROCESSING: E("processfilerevert"),
    DID_THROW_ITEM_PROCESSING_ERROR: [E("error"), E("processfile")],
    DID_REMOVE_ITEM: E("removefile"),
    DID_UPDATE_ITEMS: E("updatefiles"),
    DID_ACTIVATE_ITEM: E("activatefile"),
    DID_REORDER_ITEMS: E("reorderfiles")
  }, u = (h) => {
    const O = { pond: Y, ...h };
    delete O.type, p.element.dispatchEvent(
      new CustomEvent(`FilePond:${h.type}`, {
        // event info
        detail: O,
        // event behaviour
        bubbles: !0,
        cancelable: !0,
        composed: !0
        // triggers listeners outside of shadow root
      })
    );
    const C = [];
    h.hasOwnProperty("error") && C.push(h.error), h.hasOwnProperty("file") && C.push(h.file);
    const P = ["type", "error", "file"];
    Object.keys(h).filter((j) => !P.includes(j)).forEach((j) => C.push(h[j])), Y.fire(h.type, ...C);
    const z = r.query(`GET_ON${h.type.toUpperCase()}`);
    z && z(...C);
  }, D = (h) => {
    h.length && h.filter((O) => L[O.type]).forEach((O) => {
      const C = L[O.type];
      (Array.isArray(C) ? C : [C]).forEach((P) => {
        O.type === "DID_INIT_ITEM" ? u(P(O.data)) : setTimeout(() => {
          u(P(O.data));
        }, 0);
      });
    });
  }, S = (h) => r.dispatch("SET_OPTIONS", { options: h }), b = (h) => r.query("GET_ACTIVE_ITEM", h), w = (h) => new Promise((O, C) => {
    r.dispatch("REQUEST_ITEM_PREPARE", {
      query: h,
      success: (P) => {
        O(P);
      },
      failure: (P) => {
        C(P);
      }
    });
  }), G = (h, O = {}) => new Promise((C, P) => {
    N([{ source: h, options: O }], { index: O.index }).then((z) => C(z && z[0])).catch(P);
  }), X = (h) => h.file && h.id, A = (h, O) => (typeof h == "object" && !X(h) && !O && (O = h, h = void 0), r.dispatch("REMOVE_ITEM", { ...O, query: h }), r.query("GET_ACTIVE_ITEM", h) === null), N = (...h) => new Promise((O, C) => {
    const P = [], z = {};
    if (It(h[0]))
      P.push.apply(P, h[0]), Object.assign(z, h[1] || {});
    else {
      const j = h[h.length - 1];
      typeof j == "object" && !(j instanceof Blob) && Object.assign(z, h.pop()), P.push(...h);
    }
    r.dispatch("ADD_ITEMS", {
      items: P,
      index: z.index,
      interactionMethod: Te.API,
      success: O,
      failure: C
    });
  }), H = () => r.query("GET_ACTIVE_ITEMS"), _ = (h) => new Promise((O, C) => {
    r.dispatch("REQUEST_ITEM_PROCESSING", {
      query: h,
      success: (P) => {
        O(P);
      },
      failure: (P) => {
        C(P);
      }
    });
  }), F = (...h) => {
    const O = Array.isArray(h[0]) ? h[0] : h, C = O.length ? O : H();
    return Promise.all(C.map(w));
  }, $ = (...h) => {
    const O = Array.isArray(h[0]) ? h[0] : h;
    if (!O.length) {
      const C = H().filter(
        (P) => !(P.status === x.IDLE && P.origin === ie.LOCAL) && P.status !== x.PROCESSING && P.status !== x.PROCESSING_COMPLETE && P.status !== x.PROCESSING_REVERT_ERROR
      );
      return Promise.all(C.map(_));
    }
    return Promise.all(O.map(_));
  }, R = (...h) => {
    const O = Array.isArray(h[0]) ? h[0] : h;
    let C;
    typeof O[O.length - 1] == "object" ? C = O.pop() : Array.isArray(h[0]) && (C = h[1]);
    const P = H();
    return O.length ? O.map((j) => Ne(j) ? P[j] ? P[j].id : null : j).filter((j) => j).map((j) => A(j, C)) : Promise.all(P.map((j) => A(j, C)));
  }, Y = {
    // supports events
    ...Rt(),
    // inject private api methods
    ...f,
    // inject all getters and setters
    ...zi(r, n),
    /**
     * Override options defined in options object
     * @param options
     */
    setOptions: S,
    /**
     * Load the given file
     * @param source - the source of the file (either a File, base64 data uri or url)
     * @param options - object, { index: 0 }
     */
    addFile: G,
    /**
     * Load the given files
     * @param sources - the sources of the files to load
     * @param options - object, { index: 0 }
     */
    addFiles: N,
    /**
     * Returns the file objects matching the given query
     * @param query { string, number, null }
     */
    getFile: b,
    /**
     * Upload file with given name
     * @param query { string, number, null  }
     */
    processFile: _,
    /**
     * Request prepare output for file with given name
     * @param query { string, number, null  }
     */
    prepareFile: w,
    /**
     * Removes a file by its name
     * @param query { string, number, null  }
     */
    removeFile: A,
    /**
     * Moves a file to a new location in the files list
     */
    moveFile: (h, O) => r.dispatch("MOVE_ITEM", { query: h, index: O }),
    /**
     * Returns all files (wrapped in public api)
     */
    getFiles: H,
    /**
     * Starts uploading all files
     */
    processFiles: $,
    /**
     * Clears all files from the files list
     */
    removeFiles: R,
    /**
     * Starts preparing output of all files
     */
    prepareFiles: F,
    /**
     * Sort list of files
     */
    sort: (h) => r.dispatch("SORT", { compare: h }),
    /**
     * Browse the file system for a file
     */
    browse: () => {
      var h = p.element.querySelector("input[type=file]");
      h && h.click();
    },
    /**
     * Destroys the app
     */
    destroy: () => {
      Y.fire("destroy", p.element), r.dispatch("ABORT_ALL"), p._destroy(), window.removeEventListener("resize", c), document.removeEventListener("visibilitychange", i), r.dispatch("DID_DESTROY");
    },
    /**
     * Inserts the plugin before the target element
     */
    insertBefore: (h) => bn(p.element, h),
    /**
     * Inserts the plugin after the target element
     */
    insertAfter: (h) => On(p.element, h),
    /**
     * Appends the plugin to the target element
     */
    appendTo: (h) => h.appendChild(p.element),
    /**
     * Replaces an element with the app
     */
    replaceElement: (h) => {
      bn(p.element, h), h.parentNode.removeChild(h), t = h;
    },
    /**
     * Restores the original element
     */
    restoreElement: () => {
      t && (On(t, p.element), p.element.parentNode.removeChild(p.element), t = null);
    },
    /**
     * Returns true if the app root is attached to given element
     * @param element
     */
    isAttachedTo: (h) => p.element === h || t === h,
    /**
     * Returns the root element
     */
    element: {
      get: () => p.element
    },
    /**
     * Returns the current pond status
     */
    status: {
      get: () => r.query("GET_STATUS")
    }
  };
  return r.dispatch("DID_INIT"), Pe(Y);
}, zr = (e = {}) => {
  const t = {};
  return Q(Et(), (r, i) => {
    t[r] = i[0];
  }), Ya({
    // default options
    ...t,
    // custom options
    ...e
  });
}, za = (e) => e.charAt(0).toLowerCase() + e.slice(1), $a = (e) => Hr(e.replace(/^data-/, "")), $r = (e, t) => {
  Q(t, (n, r) => {
    Q(e, (i, o) => {
      const s = new RegExp(n);
      if (!s.test(i) || (delete e[i], r === !1))
        return;
      if (de(r)) {
        e[r] = o;
        return;
      }
      const a = r.group;
      se(r) && !e[a] && (e[a] = {}), e[a][za(i.replace(s, ""))] = o;
    }), r.mapping && $r(e[r.group], r.mapping);
  });
}, Wa = (e, t = {}) => {
  const n = [];
  Q(e.attributes, (i) => {
    n.push(e.attributes[i]);
  });
  const r = n.filter((i) => i.name).reduce((i, o) => {
    const s = J(e, o.name);
    return i[$a(o.name)] = s === o.name ? !0 : s, i;
  }, {});
  return $r(r, t), r;
}, Xa = (e, t = {}) => {
  const n = {
    // translate to other name
    "^class$": "className",
    "^multiple$": "allowMultiple",
    "^capture$": "captureMethod",
    "^webkitdirectory$": "allowDirectoriesOnly",
    // group under single property
    "^server": {
      group: "server",
      mapping: {
        "^process": {
          group: "process"
        },
        "^revert": {
          group: "revert"
        },
        "^fetch": {
          group: "fetch"
        },
        "^restore": {
          group: "restore"
        },
        "^load": {
          group: "load"
        }
      }
    },
    // don't include in object
    "^type$": !1,
    "^files$": !1
  };
  Ve("SET_ATTRIBUTE_TO_OPTION_MAP", n);
  const r = {
    ...t
  }, i = Wa(
    e.nodeName === "FIELDSET" ? e.querySelector("input[type=file]") : e,
    n
  );
  Object.keys(i).forEach((s) => {
    se(i[s]) ? (se(r[s]) || (r[s] = {}), Object.assign(r[s], i[s])) : r[s] = i[s];
  }), r.files = (t.files || []).concat(
    Array.from(e.querySelectorAll("input:not([type=file])")).map((s) => ({
      source: s.value,
      options: {
        type: s.dataset.type
      }
    }))
  );
  const o = zr(r);
  return e.files && Array.from(e.files).forEach((s) => {
    o.addFile(s);
  }), o.replaceElement(e), o;
}, ja = (...e) => ii(e[0]) ? Xa(...e) : zr(...e), Qa = ["fire", "_read", "_write"], er = (e) => {
  const t = {};
  return mr(e, t, Qa), t;
}, Ka = (e, t) => e.replace(/(?:{([a-zA-Z]+)})/g, (n, r) => t[r]), Za = (e) => {
  const t = new Blob(["(", e.toString(), ")()"], {
    type: "application/javascript"
  }), n = URL.createObjectURL(t), r = new Worker(n);
  return {
    transfer: (i, o) => {
    },
    post: (i, o, s) => {
      const l = Kt();
      r.onmessage = (a) => {
        a.data.id === l && o(a.data.message);
      }, r.postMessage(
        {
          id: l,
          message: i
        },
        s
      );
    },
    terminate: () => {
      r.terminate(), URL.revokeObjectURL(n);
    }
  };
}, Ja = (e) => new Promise((t, n) => {
  const r = new Image();
  r.onload = () => {
    t(r);
  }, r.onerror = (i) => {
    n(i);
  }, r.src = e;
}), Wr = (e, t) => {
  const n = e.slice(0, e.size, e.type);
  return n.lastModifiedDate = e.lastModifiedDate, n.name = t, n;
}, el = (e) => Wr(e, e.name), tr = [], tl = (e) => {
  if (tr.includes(e))
    return;
  tr.push(e);
  const t = e({
    addFilter: Zi,
    utils: {
      Type: I,
      forin: Q,
      isString: de,
      isFile: We,
      toNaturalFileSize: Dr,
      replaceInString: Ka,
      getExtensionFromFilename: bt,
      getFilenameWithoutExtension: Or,
      guesstimateMimeType: Ur,
      getFileFromBlob: $e,
      getFilenameFromURL: et,
      createRoute: fe,
      createWorker: Za,
      createView: ee,
      createItemAPI: pe,
      loadImage: Ja,
      copyFile: el,
      renameFile: Wr,
      createBlob: Tr,
      applyFilterChain: Re,
      text: Z,
      getNumericAspectRatioFromString: hr
    },
    views: {
      fileActionButton: Sr
    }
  });
  Ji(t.options);
}, nl = () => Object.prototype.toString.call(window.operamini) === "[object OperaMini]", rl = () => "Promise" in window, il = () => "slice" in Blob.prototype, sl = () => "URL" in window && "createObjectURL" in window.URL, ol = () => "visibilityState" in document, al = () => "performance" in window, ll = () => "supports" in (window.CSS || {}), cl = () => /MSIE|Trident/.test(window.navigator.userAgent), nr = (() => {
  const e = (
    // Has to be a browser
    lr() && // Can't run on Opera Mini due to lack of everything
    !nl() && // Require these APIs to feature detect a modern browser
    ol() && rl() && il() && sl() && al() && // doesn't need CSSSupports but is a good way to detect Safari 9+ (we do want to support IE11 though)
    (ll() || cl())
  );
  return () => e;
})(), ve = {
  // active app instances, used to redraw the apps and to find the later
  apps: []
}, dl = "filepond", ke = () => {
};
let rr = {}, pt = ke, xt = ke, ir = ke, sr = ke, or = ke, jt = ke, ar = ke;
if (nr()) {
  vi(
    () => {
      ve.apps.forEach((n) => n._read());
    },
    (n) => {
      ve.apps.forEach((r) => r._write(n));
    }
  );
  const e = () => {
    document.dispatchEvent(
      new CustomEvent("FilePond:loaded", {
        detail: {
          supported: nr,
          create: pt,
          destroy: xt,
          parse: ir,
          find: sr,
          registerPlugin: or,
          setOptions: ar
        }
      })
    ), document.removeEventListener("DOMContentLoaded", e);
  };
  document.readyState !== "loading" ? setTimeout(() => e(), 0) : document.addEventListener("DOMContentLoaded", e);
  const t = () => Q(Et(), (n, r) => {
    rr[n] = r[1];
  });
  rr = {}, t(), pt = (...n) => {
    const r = ja(...n);
    return r.on("destroy", xt), ve.apps.push(r), er(r);
  }, xt = (n) => {
    const r = ve.apps.findIndex((i) => i.isAttachedTo(n));
    return r >= 0 ? (ve.apps.splice(r, 1)[0].restoreElement(), !0) : !1;
  }, ir = (n) => Array.from(n.querySelectorAll(`.${dl}`)).filter(
    (o) => !ve.apps.find((s) => s.isAttachedTo(o))
  ).map((o) => pt(o)), sr = (n) => {
    const r = ve.apps.find((i) => i.isAttachedTo(n));
    return r ? er(r) : null;
  }, or = (...n) => {
    n.forEach(tl), t();
  }, jt = () => {
    const n = {};
    return Q(Et(), (r, i) => {
      n[r] = i[0];
    }), n;
  }, ar = (n) => (se(n) && (ve.apps.forEach((r) => {
    r.setOptions(n);
  }), es(n)), jt());
}
const fl = `/*!
 * FilePond 4.30.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */.filepond--assistant{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--browser.filepond--browser{position:absolute;margin:0;padding:0;left:1em;top:1.75em;width:calc(100% - 2em);opacity:0;font-size:0}.filepond--data{position:absolute;width:0;height:0;padding:0;margin:0;border:none;visibility:hidden;pointer-events:none;contain:strict}.filepond--drip{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;opacity:.1;pointer-events:none;border-radius:.5em;background:rgba(0,0,0,.01)}.filepond--drip-blob{-webkit-transform-origin:center center;transform-origin:center center;width:8em;height:8em;margin-left:-4em;margin-top:-4em;background:#292625;border-radius:50%}.filepond--drip-blob,.filepond--drop-label{position:absolute;top:0;left:0;will-change:transform,opacity}.filepond--drop-label{right:0;margin:0;color:#4f4f4f;display:flex;justify-content:center;align-items:center;height:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--drop-label.filepond--drop-label label{display:block;margin:0;padding:.5em}.filepond--drop-label label{cursor:default;font-size:.875em;font-weight:400;text-align:center;line-height:1.5}.filepond--label-action{text-decoration:underline;-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto;-webkit-text-decoration-color:#a7a4a4;text-decoration-color:#a7a4a4;cursor:pointer}.filepond--root[data-disabled] .filepond--drop-label label{opacity:.5}.filepond--file-action-button.filepond--file-action-button{font-size:1em;width:1.625em;height:1.625em;font-family:inherit;line-height:inherit;margin:0;padding:0;border:none;outline:none;will-change:transform,opacity}.filepond--file-action-button.filepond--file-action-button span{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--file-action-button.filepond--file-action-button svg{width:100%;height:100%}.filepond--file-action-button.filepond--file-action-button:after{position:absolute;left:-.75em;right:-.75em;top:-.75em;bottom:-.75em;content:""}.filepond--file-action-button{cursor:auto;color:#fff;border-radius:50%;background-color:#00000080;background-image:none;box-shadow:0 0 #fff0;transition:box-shadow .25s ease-in}.filepond--file-action-button:focus,.filepond--file-action-button:hover{box-shadow:0 0 0 .125em #ffffffe6}.filepond--file-action-button[disabled]{color:#ffffff80;background-color:#00000040}.filepond--file-action-button[hidden]{display:none}.filepond--action-edit-item.filepond--action-edit-item{width:2em;height:2em;padding:.1875em}.filepond--action-edit-item.filepond--action-edit-item[data-align*=center]{margin-left:-.1875em}.filepond--action-edit-item.filepond--action-edit-item[data-align*=bottom]{margin-bottom:-.1875em}.filepond--action-edit-item-alt{border:none;line-height:inherit;background:transparent;font-family:inherit;color:inherit;outline:none;padding:0;margin:0 0 0 .25em;pointer-events:all;position:absolute}.filepond--action-edit-item-alt svg{width:1.3125em;height:1.3125em}.filepond--action-edit-item-alt span{font-size:0;opacity:0}.filepond--file-info{position:static;display:flex;flex-direction:column;align-items:flex-start;flex:1;margin:0 .5em 0 0;min-width:0;will-change:transform,opacity;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--file-info *{margin:0}.filepond--file-info .filepond--file-info-main{font-size:.75em;line-height:1.2;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%}.filepond--file-info .filepond--file-info-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out;white-space:nowrap}.filepond--file-info .filepond--file-info-sub:empty{display:none}.filepond--file-status{position:static;display:flex;flex-direction:column;align-items:flex-end;flex-grow:0;flex-shrink:0;margin:0;min-width:2.25em;text-align:right;will-change:transform,opacity;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--file-status *{margin:0;white-space:nowrap}.filepond--file-status .filepond--file-status-main{font-size:.75em;line-height:1.2}.filepond--file-status .filepond--file-status-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out}.filepond--file-wrapper.filepond--file-wrapper{border:none;margin:0;padding:0;min-width:0;height:100%}.filepond--file-wrapper.filepond--file-wrapper>legend{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--file{position:static;display:flex;height:100%;align-items:flex-start;padding:.5625em;color:#fff;border-radius:.5em}.filepond--file .filepond--file-status{margin-left:auto;margin-right:2.25em}.filepond--file .filepond--processing-complete-indicator{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:3}.filepond--file .filepond--file-action-button,.filepond--file .filepond--processing-complete-indicator,.filepond--file .filepond--progress-indicator{position:absolute}.filepond--file [data-align*=left]{left:.5625em}.filepond--file [data-align*=right]{right:.5625em}.filepond--file [data-align*=center]{left:calc(50% - .8125em)}.filepond--file [data-align*=bottom]{bottom:1.125em}.filepond--file [data-align=center]{top:calc(50% - .8125em)}.filepond--file .filepond--progress-indicator{margin-top:.1875em}.filepond--file .filepond--progress-indicator[data-align*=right]{margin-right:.1875em}.filepond--file .filepond--progress-indicator[data-align*=left]{margin-left:.1875em}[data-filepond-item-state*=error] .filepond--file-info,[data-filepond-item-state*=invalid] .filepond--file-info,[data-filepond-item-state=cancelled] .filepond--file-info{margin-right:2.25em}[data-filepond-item-state~=processing] .filepond--file-status-sub{opacity:0}[data-filepond-item-state~=processing] .filepond--action-abort-item-processing~.filepond--file-status .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-error] .filepond--file-status-sub{opacity:0}[data-filepond-item-state=processing-error] .filepond--action-retry-item-processing~.filepond--file-status .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing svg{-webkit-animation:fall .5s linear .125s both;animation:fall .5s linear .125s both}[data-filepond-item-state=processing-complete] .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-complete] .filepond--file-info-sub,[data-filepond-item-state=processing-complete] .filepond--processing-complete-indicator:not([style*=hidden])~.filepond--file-status .filepond--file-status-sub{opacity:0}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing~.filepond--file-info .filepond--file-info-sub{opacity:.5}[data-filepond-item-state*=error] .filepond--file-wrapper,[data-filepond-item-state*=error] .filepond--panel,[data-filepond-item-state*=invalid] .filepond--file-wrapper,[data-filepond-item-state*=invalid] .filepond--panel{-webkit-animation:shake .65s linear both;animation:shake .65s linear both}[data-filepond-item-state*=busy] .filepond--progress-indicator svg{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translate(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translate(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translate(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translate(.25em)}}@keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translate(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translate(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translate(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translate(.25em)}}@-webkit-keyframes fall{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes fall{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.filepond--hopper[data-hopper-state=drag-over]>*{pointer-events:none}.filepond--hopper[data-hopper-state=drag-over]:after{content:"";position:absolute;left:0;top:0;right:0;bottom:0;z-index:100}.filepond--progress-indicator{z-index:103}.filepond--file-action-button{z-index:102}.filepond--file-status{z-index:101}.filepond--file-info{z-index:100}.filepond--item{position:absolute;top:0;left:0;right:0;z-index:1;padding:0;margin:.25em;will-change:transform,opacity}.filepond--item>.filepond--panel{z-index:-1}.filepond--item>.filepond--panel .filepond--panel-bottom{box-shadow:0 .0625em .125em -.0625em #00000040}.filepond--item>.filepond--file-wrapper,.filepond--item>.filepond--panel{transition:opacity .15s ease-out}.filepond--item[data-drag-state]{cursor:-webkit-grab;cursor:grab}.filepond--item[data-drag-state]>.filepond--panel{transition:box-shadow .125s ease-in-out;box-shadow:0 0 0 transparent}.filepond--item[data-drag-state=drag]{cursor:-webkit-grabbing;cursor:grabbing}.filepond--item[data-drag-state=drag]>.filepond--panel{box-shadow:0 .125em .3125em #00000053}.filepond--item[data-drag-state]:not([data-drag-state=idle]){z-index:2}.filepond--item-panel{background-color:#64605e}[data-filepond-item-state=processing-complete] .filepond--item-panel{background-color:#369763}[data-filepond-item-state*=error] .filepond--item-panel,[data-filepond-item-state*=invalid] .filepond--item-panel{background-color:#c44e47}.filepond--item-panel{border-radius:.5em;transition:background-color .25s}.filepond--list-scroller{position:absolute;top:0;left:0;right:0;margin:0;will-change:transform}.filepond--list-scroller[data-state=overflow] .filepond--list{bottom:0;right:0}.filepond--list-scroller[data-state=overflow]{overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling:touch;-webkit-mask:linear-gradient(180deg,#000 calc(100% - .5em),transparent);mask:linear-gradient(180deg,#000 calc(100% - .5em),transparent)}.filepond--list-scroller::-webkit-scrollbar{background:transparent}.filepond--list-scroller::-webkit-scrollbar:vertical{width:1em}.filepond--list-scroller::-webkit-scrollbar:horizontal{height:0}.filepond--list-scroller::-webkit-scrollbar-thumb{background-color:#0000004d;border-radius:99999px;border:.3125em solid transparent;background-clip:content-box}.filepond--list.filepond--list{position:absolute;top:0;margin:0;padding:0;list-style-type:none;will-change:transform}.filepond--list{left:.75em;right:.75em}.filepond--root[data-style-panel-layout~=integrated]{width:100%;height:100%;max-width:none;margin:0}.filepond--root[data-style-panel-layout~=circle] .filepond--panel-root,.filepond--root[data-style-panel-layout~=integrated] .filepond--panel-root{border-radius:0}.filepond--root[data-style-panel-layout~=circle] .filepond--panel-root>*,.filepond--root[data-style-panel-layout~=integrated] .filepond--panel-root>*{display:none}.filepond--root[data-style-panel-layout~=circle] .filepond--drop-label,.filepond--root[data-style-panel-layout~=integrated] .filepond--drop-label{bottom:0;height:auto;display:flex;justify-content:center;align-items:center;z-index:7}.filepond--root[data-style-panel-layout~=circle] .filepond--item-panel,.filepond--root[data-style-panel-layout~=integrated] .filepond--item-panel{display:none}.filepond--root[data-style-panel-layout~=compact] .filepond--list-scroller,.filepond--root[data-style-panel-layout~=integrated] .filepond--list-scroller{overflow:hidden;height:100%;margin-top:0;margin-bottom:0}.filepond--root[data-style-panel-layout~=compact] .filepond--list,.filepond--root[data-style-panel-layout~=integrated] .filepond--list{left:0;right:0;height:100%}.filepond--root[data-style-panel-layout~=compact] .filepond--item,.filepond--root[data-style-panel-layout~=integrated] .filepond--item{margin:0}.filepond--root[data-style-panel-layout~=compact] .filepond--file-wrapper,.filepond--root[data-style-panel-layout~=integrated] .filepond--file-wrapper{height:100%}.filepond--root[data-style-panel-layout~=compact] .filepond--drop-label,.filepond--root[data-style-panel-layout~=integrated] .filepond--drop-label{z-index:7}.filepond--root[data-style-panel-layout~=circle]{border-radius:99999rem;overflow:hidden}.filepond--root[data-style-panel-layout~=circle]>.filepond--panel{border-radius:inherit}.filepond--root[data-style-panel-layout~=circle]>.filepond--panel>*{display:none}.filepond--root[data-style-panel-layout~=circle] .filepond--file-info,.filepond--root[data-style-panel-layout~=circle] .filepond--file-status{display:none}.filepond--root[data-style-panel-layout~=circle] .filepond--action-edit-item{opacity:1!important;visibility:visible!important}@media not all and (min-resolution:.001dpcm){@supports (-webkit-appearance:none) and (stroke-color:transparent){.filepond--root[data-style-panel-layout~=circle]{will-change:transform}}}.filepond--panel-root{border-radius:.5em;background-color:#f1f0ef}.filepond--panel{position:absolute;left:0;top:0;right:0;margin:0;height:100%!important;pointer-events:none}.filepond-panel:not([data-scalable=false]){height:auto!important}.filepond--panel[data-scalable=false]>div{display:none}.filepond--panel[data-scalable=true]{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;background-color:transparent!important;border:none!important}.filepond--panel-bottom,.filepond--panel-center,.filepond--panel-top{position:absolute;left:0;top:0;right:0;margin:0;padding:0}.filepond--panel-bottom,.filepond--panel-top{height:.5em}.filepond--panel-top{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-bottom:none!important}.filepond--panel-top:after{content:"";position:absolute;height:2px;left:0;right:0;bottom:-1px;background-color:inherit}.filepond--panel-bottom,.filepond--panel-center{will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:translate3d(0,.5em,0);transform:translate3d(0,.5em,0)}.filepond--panel-bottom{border-top-left-radius:0!important;border-top-right-radius:0!important;border-top:none!important}.filepond--panel-bottom:before{content:"";position:absolute;height:2px;left:0;right:0;top:-1px;background-color:inherit}.filepond--panel-center{height:100px!important;border-top:none!important;border-bottom:none!important;border-radius:0!important}.filepond--panel-center:not([style]){visibility:hidden}.filepond--progress-indicator{position:static;width:1.25em;height:1.25em;color:#fff;margin:0;pointer-events:none;will-change:transform,opacity}.filepond--progress-indicator svg{width:100%;height:100%;vertical-align:top;transform-box:fill-box}.filepond--progress-indicator path{fill:none;stroke:currentColor}.filepond--list-scroller{z-index:6}.filepond--drop-label{z-index:5}.filepond--drip{z-index:3}.filepond--root>.filepond--panel{z-index:2}.filepond--browser{z-index:1}.filepond--root{box-sizing:border-box;position:relative;margin-bottom:1em;font-size:1rem;line-height:normal;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-weight:450;text-align:left;text-rendering:optimizeLegibility;direction:ltr;contain:layout style size}.filepond--root *{box-sizing:inherit;line-height:inherit}.filepond--root :not(text){font-size:inherit}.filepond--root[data-disabled]{pointer-events:none}.filepond--root[data-disabled] .filepond--list-scroller{pointer-events:all}.filepond--root[data-disabled] .filepond--list{pointer-events:none}.filepond--root .filepond--drop-label{min-height:4.75em}.filepond--root .filepond--list-scroller{margin-top:1em;margin-bottom:1em}.filepond--root .filepond--credits{position:absolute;right:0;opacity:.175;line-height:.85;font-size:11px;color:inherit;text-decoration:none;z-index:3;bottom:-14px}.filepond--root .filepond--credits[style]{top:0;bottom:auto;margin-top:14px}
`;
var ul = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xr = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(ul, () => (() => {
    var n, r = { 588: (l, a, d) => {
      d.d(a, { default: () => L });
      const c = (...u) => {
      }, p = (u) => u.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), m = (u) => u !== null && u.constructor.name === "Object", g = (u = "") => u.normalize("NFD").replace(/\p{Diacritic}/gu, ""), f = (u, D) => {
        const S = u.length;
        if (!S)
          return [];
        if (m(u[0])) {
          for (let b = 0; b < S; b++)
            if (!(D in u[b]))
              throw new Error("e03");
          return u;
        }
        return u.reduce(function(b, w) {
          return b.push({ [D]: w && typeof w == "string" ? w : JSON.stringify(w) }), b;
        }, []);
      }, E = async function(u, D) {
        return async function(S) {
          const b = await S.text(), w = b && JSON.parse(b);
          if (!S.ok) {
            const G = w && w.message || S.statusText;
            return Promise.reject(G);
          }
          return w;
        }(await fetch(u, D || { method: "GET" }));
      };
      function L(u) {
        var D;
        if (!u.input)
          throw new Error("e01");
        if (!u.source || !m(u.source))
          throw new Error("e02");
        const S = document, b = S.createElement("div"), w = b.style, G = u.debounceRemote || 100, X = u.preventSubmit || !1, A = u.minLength || 1, N = u.hint !== !1, H = u.autoSelect || !1, _ = u.templates, F = ((y = {}) => {
          const { hasDiacritics: v } = y;
          let U = {};
          const k = String.fromCharCode(0);
          function q(M = "") {
            return M = `${M}`, v && (M = g(M)), M.toLowerCase().trim().split(/\s+/);
          }
          return { add: function(M, B = "", re) {
            if (!M)
              return;
            let ae, ue = U;
            (M = M.constructor === Array ? M : [M]).forEach((he) => {
              q(typeof he == "string" ? he : he[B]).filter((Se) => Se).forEach((Se) => {
                ue = U;
                for (let De = 0, le = Se.length; De < le; De++)
                  ae = Se[De], ue = ue[ae] || (ue[ae] = {});
                const ye = typeof he == "string" ? he : re && re(he) || JSON.stringify(he);
                ue[k] ? ue[k][ye] = he : ue[k] = { [ye]: he };
              });
            });
          }, clear: function() {
            U = {};
          }, search: function(M, B) {
            const re = q(M), ae = [];
            let ue = {};
            re.forEach((Se) => {
              ae.push(function(ye) {
                let De, le = U, vt = {};
                for (let Ct = 0, ei = ye.length; Ct < ei; Ct++)
                  if (De = ye[Ct], le = le[De], le === void 0)
                    return {};
                const Pt = [le], gn = [ye];
                let it;
                for (; Pt.length; )
                  for (it in ye = gn.pop(), le = Pt.pop(), le)
                    it !== k ? (Pt.push(le[it]), gn.push(ye + it)) : vt = Object.assign(vt, le[k]);
                return vt;
              }(Se));
            }), ue = ae.reduce((Se, ye) => {
              const De = {};
              return Object.keys(Se).filter((le) => ye[le]).forEach((le) => {
                De[le] = Se[le];
              }), De;
            }), ue = Object.values(ue);
            const he = ue.length;
            return B && he > B && (ue.length = B), { suggestions: ue, count: he };
          } };
        })({ hasDiacritics: u.diacritics }), $ = u.source.identifier || "label", R = u.source.groupIdentifier || "", Y = (y) => `${y[$]}`, h = u.display || Y, O = u.source.identity || Y, C = u.onSubmit || c, P = ((D = u.source.dataTokens) === null || D === void 0 ? void 0 : D.constructor) === Array ? u.source.dataTokens : void 0, z = {}, j = {}, Ce = u.source.transform || ((y) => y), je = u.source.local || null, te = u.source.remote && u.source.remote.url && u.source.remote.wildcard ? u.source.remote : null, oe = u.source.prefetch && u.source.prefetch.url ? { when: "onInit", done: !1, ...u.source.prefetch } : null;
        if (!je && !oe && !te)
          throw new Error("e02");
        const T = { query: "", items: [], count: 0, limit: u.limit || 5 };
        let V, me, Ee = !1, ne = "";
        _ && (_.header = typeof _.header == "function" ? _.header : void 0, _.footer = typeof _.footer == "function" ? _.footer : void 0, _.notFound = typeof _.notFound == "function" ? _.notFound : void 0, _.group = typeof _.group == "function" ? _.group : void 0, _.suggestion = typeof _.suggestion == "function" ? _.suggestion : void 0, _.loader = typeof _.loader == "function" ? _.loader : void 0, _.empty = typeof _.empty == "function" ? _.empty : void 0), je && Lt(f(je, $));
        const W = u.input;
        W.classList.add("tt-input");
        const qe = S.createElement("span");
        qe.className = "typeahead-standalone" + (u.className ? ` ${u.className}` : ""), T.container = qe;
        const tt = W.parentNode, jr = [...tt.children].indexOf(W);
        tt.removeChild(W), qe.appendChild(W), tt.insertBefore(qe, tt.children[jr]);
        const nt = W.cloneNode();
        function dn() {
          if (!oe || oe.done)
            return;
          let y = [];
          E(typeof oe.url == "function" ? oe.url() : oe.url, oe == null ? void 0 : oe.requestOptions).then((v) => {
            y = Ce(v), y = f(y, $), Lt(y);
          }, (v) => {
            console.error("e04", v);
          }).finally(() => {
            typeof oe.process == "function" && oe.process(y);
          }), oe.done = !0;
        }
        N && function(y) {
          ["id", "name", "placeholder", "required"].forEach((v) => y.removeAttribute(v)), y.setAttribute("readonly", "true"), y.setAttribute("aria-hidden", "true"), y.tabIndex = -1, y.className = "tt-hint", W.after(y);
        }(nt), b.classList.add("tt-list", "tt-hide"), b.tabIndex = 0, b.setAttribute("aria-label", "menu-options"), b.setAttribute("role", "listbox"), w.position = "absolute", w.width = "100%", w.left = "0", qe.appendChild(b), oe && oe.when === "onInit" && dn();
        const St = () => {
          b.classList.remove("tt-hide");
        }, fn = () => {
          me && window.clearTimeout(me);
        }, Le = () => {
          T.items = [], nt.value = "", ne = "", b.classList.add("tt-hide");
        }, Dt = (y = !1) => {
          if (!T.items.length && T.query) {
            Le(), At();
            const v = (_ == null ? void 0 : _.notFound) && _.notFound(T);
            if (!v)
              return !0;
            const U = (k) => {
              const q = S.createElement("div");
              q.classList.add("tt-notFound"), Me(q, k), b.appendChild(q);
            };
            return te ? (z[JSON.stringify(T.query)] || y && !Ee) && U(v) : U(v), St(), !0;
          }
        }, At = () => {
          for (; b.firstChild; )
            b.firstChild.remove();
        }, un = () => {
          if (!(_ != null && _.loader))
            return;
          if (!Ee) {
            const v = b.querySelector(".tt-loader");
            return void (v && b.removeChild(v));
          }
          const y = S.createElement("div");
          y.classList.add("tt-loader"), Me(y, _.loader()), _ != null && _.footer ? b.insertBefore(y, b.querySelector(".tt-footer")) : b.appendChild(y);
        }, rt = () => {
          var y;
          if (Dt())
            return;
          At();
          const v = (M) => {
            const B = S.createElement("div");
            return B.classList.add("tt-suggestion"), B.setAttribute("role", "option"), B.setAttribute("aria-selected", "false"), B.setAttribute("aria-label", h(M)), _ != null && _.suggestion ? Me(B, _.suggestion(M, T)) : B.textContent = M[$] || "", B;
          }, U = (M) => {
            const B = S.createElement("div");
            return B.classList.add("tt-group"), B.setAttribute("role", "group"), B.setAttribute("aria-label", M), _ != null && _.group ? Me(B, _.group(M, T)) : B.textContent = M || "", B;
          }, k = S.createDocumentFragment(), q = [];
          if (_ != null && _.header) {
            const M = S.createElement("div");
            M.classList.add("tt-header"), M.setAttribute("role", "heading"), M.setAttribute("aria-level", "1"), Me(M, _.header(T)) && k.appendChild(M);
          }
          for (const [M, B] of T.items.entries()) {
            if (M === T.limit)
              break;
            if (B[R] && !q.includes(B[R])) {
              q.push(B[R]);
              const ae = U(B[R]);
              k.appendChild(ae);
            }
            const re = v(B);
            re.addEventListener("click", function(ae) {
              Le(), V = B, W.value = h(B, ae), ae.preventDefault();
            }), B === V && (re.classList.add("tt-selected"), re.setAttribute("aria-selected", "true")), k.appendChild(re), u.highlight && Zr(re, T.query);
          }
          if (_ != null && _.footer) {
            const M = S.createElement("div");
            M.classList.add("tt-footer"), M.setAttribute("role", "heading"), M.setAttribute("aria-level", "2"), Me(M, _.footer(T)) && k.appendChild(M);
          }
          b.appendChild(k), N && Jr(V || T.items[0]), (y = b.querySelector(".tt-selected")) === null || y === void 0 || y.scrollIntoView({ block: "nearest" }), St();
        }, pn = () => {
          var y, v;
          fn();
          const U = W.value.replace(/\s{2,}/g, " ").trim();
          if (_ != null && _.empty && !U.length) {
            const k = _.empty(T);
            if (T.query = "", (y = T.defaultItems) === null || y === void 0 ? void 0 : y.length)
              return T.items = f(Ce(T.defaultItems), $), rt();
            Le(), At();
            const q = S.createElement("div");
            return q.classList.add("tt-empty"), Me(q, k), k && b.appendChild(q), St();
          }
          if (U.length >= A) {
            T.query = U, wt();
            const k = JSON.stringify(T.query);
            te && T.items.length < T.limit && (!((v = j[k]) === null || v === void 0) && v.length) && wt(j[k]), rt(), me = window.setTimeout(function() {
              T.items.length < T.limit && !Ee && En();
            }, G);
          } else
            T.query = "", Le();
        }, mn = (y = "") => (u.diacritics && (y = g(y)), y.toLowerCase()), wt = (y) => {
          let { suggestions: v, count: U } = F.search(T.query, T.limit);
          if (y != null && y.length) {
            y.push(...v);
            const k = {};
            y.forEach((q) => {
              k[O(q)] = q;
            }), v = Object.values(k), U = v.length;
          }
          Qr(v), R && Kr(v), T.items = v, T.count = U, V = void 0, H && T.items.length && (V = T.items[0]);
        }, En = () => {
          if (!te)
            return;
          Ee = !0;
          const y = T.query, v = JSON.stringify(y);
          if (z[v] || !T.query.length)
            return Ee = !1, void Dt(!0);
          un();
          let U = [];
          E((typeof te.url == "function" ? te.url() : te.url).replace(te.wildcard, y), te == null ? void 0 : te.requestOptions).then((k) => {
            U = Ce(k), U = f(U, $), Lt(U);
          }, (k) => {
            console.error("e05", k);
          }).finally(() => {
            z[v] = !0, j[v] = U || [], Ee = !1, un(), U.length && T.query.length && (wt(U), rt()), T.query.length && y !== T.query && En(), Dt(!0);
          });
        };
        function Lt(y) {
          y.length && (F.add(y, $, O), P && P.forEach((v) => {
            F.add(y, v, O);
          }));
        }
        const Qr = (y) => {
          y.sort((v, U) => {
            const k = v[$].toLowerCase().startsWith(T.query.toLowerCase()), q = U[$].toLowerCase().startsWith(T.query.toLowerCase());
            return k && !q || k && v[$].length < U[$].length ? -1 : 0;
          });
        }, Kr = (y) => {
          y.sort((v, U) => !v[R] || v[R] < U[R] ? -1 : v[R] > U[R] ? 1 : 0);
        }, Zr = (y, v) => {
          const U = (q, M) => {
            let B;
            for (let re = 0; re < q.childNodes.length; re++)
              B = q.childNodes[re], B.nodeType === 3 ? re += M(B) ? 1 : 0 : U(B, M);
          }, k = ((q, M) => {
            const B = p(q);
            return new RegExp("(" + B + ")", "i");
          })(v);
          v && U(y, (q) => {
            var M;
            let B = k.exec(q.data);
            u.diacritics && !B && (B = k.exec(g(q.data)));
            const re = S.createElement("span");
            if (re.className = "tt-highlight", B) {
              const ae = q.splitText(B.index);
              ae.splitText(B[0].length), re.appendChild(ae.cloneNode(!0)), (M = q == null ? void 0 : q.parentNode) === null || M === void 0 || M.replaceChild(re, ae);
            }
            return !!B;
          });
        }, Jr = (y) => {
          const v = W.value;
          if (v && h(y) !== v && mn(h(y)).indexOf(mn(v).replace(/\s{2,}/g, " ").trimStart()) === 0) {
            const U = h(y), k = new RegExp(p(T.query), "i");
            let q = k.exec(U);
            u.diacritics && !q && (q = k.exec(g(U))), q && (nt.value = v.replace(/\s?$/, "") + U.substring(q[0].length));
          } else
            nt.value = "";
        }, Me = (y, v) => {
          const U = S.createElement("template");
          return U.innerHTML = v, y.appendChild(U.content), v;
        };
        return b.addEventListener("mousedown", function(y) {
          y.stopPropagation(), y.preventDefault();
        }), W.addEventListener("keydown", (y) => {
          if (!W.value.length)
            return void Le();
          const v = y.which || y.keyCode || 0;
          if (v === 38 || v === 40 || v === 27)
            return v === 27 ? Le() : T.items.length && (v === 38 ? ((k) => {
              const q = T.items.length >= T.limit ? T.limit : T.items.length;
              if (V === T.items[0])
                return V = void 0, void (W.value = ne);
              if (V) {
                for (let M = q - 1; M > 0; M--)
                  if (V === T.items[M] || M === 1) {
                    V = T.items[M - 1];
                    break;
                  }
              } else
                V = T.items[q - 1];
              W.value = h(V, k);
            })(y) : ((k) => {
              const q = T.items.length >= T.limit ? T.limit : T.items.length;
              if (!V)
                return V = T.items[0], void (W.value = h(V, k));
              if (V === T.items[q - 1])
                return V = void 0, void (W.value = ne);
              for (let M = 0; M < q - 1; M++)
                if (V === T.items[M]) {
                  V = T.items[M + 1];
                  break;
                }
              W.value = h(V, k);
            })(y), rt()), y.preventDefault(), void y.stopPropagation();
          const U = function(k = !1) {
            if (!V && k && T.items.length && (V = T.items[0]), V)
              return Le(), W.value = h(V, y), V;
          };
          if (v === 13)
            return X && y.preventDefault(), void C(y, U());
          v !== 9 || b.classList.contains("tt-hide") || (y.preventDefault(), U(!0));
        }), W.addEventListener("input", (y) => {
          (y.which || y.keyCode || 0) !== 40 && (ne = W.value, pn());
        }), W.addEventListener("blur", () => {
          setTimeout(() => {
            S.activeElement !== W && Le();
          }, 50);
        }), W.addEventListener("focus", () => {
          oe && oe.when === "onFocus" && dn(), pn();
        }), { destroy: () => {
          fn(), qe.replaceWith(W.cloneNode());
        } };
      }
    } }, i = {};
    function o(l) {
      var a = i[l];
      if (a !== void 0)
        return a.exports;
      var d = i[l] = { exports: {} };
      return r[l](d, d.exports, o), d.exports;
    }
    o.m = r, n = [], o.O = (l, a, d, c) => {
      if (!a) {
        var p = 1 / 0;
        for (E = 0; E < n.length; E++) {
          for (var [a, d, c] = n[E], m = !0, g = 0; g < a.length; g++)
            (!1 & c || p >= c) && Object.keys(o.O).every((S) => o.O[S](a[g])) ? a.splice(g--, 1) : (m = !1, c < p && (p = c));
          if (m) {
            n.splice(E--, 1);
            var f = d();
            f !== void 0 && (l = f);
          }
        }
        return l;
      }
      c = c || 0;
      for (var E = n.length; E > 0 && n[E - 1][2] > c; E--)
        n[E] = n[E - 1];
      n[E] = [a, d, c];
    }, o.d = (l, a) => {
      for (var d in a)
        o.o(a, d) && !o.o(l, d) && Object.defineProperty(l, d, { enumerable: !0, get: a[d] });
    }, o.o = (l, a) => Object.prototype.hasOwnProperty.call(l, a), (() => {
      var l = { 179: 0, 53: 0 };
      o.O.j = (c) => l[c] === 0;
      var a = (c, p) => {
        var m, g, [f, E, L] = p, u = 0;
        if (f.some((S) => l[S] !== 0)) {
          for (m in E)
            o.o(E, m) && (o.m[m] = E[m]);
          if (L)
            var D = L(o);
        }
        for (c && c(p); u < f.length; u++)
          g = f[u], o.o(l, g) && l[g] && l[g][0](), l[g] = 0;
        return o.O(D);
      }, d = this.webpackChunktypeahead = this.webpackChunktypeahead || [];
      d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d));
    })();
    var s = o.O(void 0, [53], () => o(588));
    return (s = o.O(s)).default;
  })());
})(Xr);
var ml = Xr.exports;
const El = /* @__PURE__ */ pl(ml), gl = `.typeahead-standalone{color:#000;position:relative;text-align:left}.typeahead-standalone .tt-input{background:transparent;position:relative;z-index:1}.typeahead-standalone .tt-hint{background:#fff;color:silver;cursor:default;left:0;position:absolute;user-select:none;z-index:0}.typeahead-standalone .tt-list{background:#fff;border:1px solid rgba(50,50,50,.6);box-sizing:border-box;overflow:auto;z-index:1000}.typeahead-standalone .tt-list.tt-hide{display:none}.typeahead-standalone .tt-list div[class^=tt-]{padding:0 4px}.typeahead-standalone .tt-list .tt-suggestion.tt-selected,.typeahead-standalone .tt-list .tt-suggestion:hover{background:#55acee;cursor:pointer}.typeahead-standalone .tt-list .tt-suggestion .tt-highlight{font-weight:900}.typeahead-standalone .tt-list .tt-group{background:#eee}
`, hl = `input{padding:.625rem;font-size:.875rem;border:1px solid #ccc;border-radius:.25rem;width:23.625rem}#fileUpload{padding:.625rem;width:auto;margin:2.5rem auto 4rem;border:none;background-color:#d9eaea;box-shadow:0 .125rem .3125rem #0000004d;transition:all .3s ease;font-size:1.5625rem;color:#f80abd;width:calc(90% - 2.125rem);margin-left:auto;margin-right:auto;height:9.375rem;text-align-last:center}button{display:block;margin:auto auto 0;border-radius:.3125rem;font-size:1.125rem;padding:.625rem 1.25rem;background-color:#346599;color:#fff;box-shadow:0 .125rem .3125rem #0000004d;transition:all .3s ease}button:hover{background-color:#317ed0;box-shadow:0 .25rem .5rem #0000004d;transform:translateY(-.125rem)}.mapping-container{max-width:37.5rem;margin:0 auto;text-align:center}.mapping-title{font-size:2rem;margin-bottom:1.25rem}.mapping-input-container{display:flex;align-items:center;max-width:25rem;margin:0 auto;background-color:#fff;border-radius:3.125rem;padding:.625rem 1.25rem;box-shadow:0 .125rem .3125rem #0000004d}.mapping-input{flex:1;border:none;outline:none;font-size:1.125rem;padding:.625rem}
`, Vt = ["base-url"];
class Il extends HTMLElement {
  // ---
  /**
   * Contruct element properties etc, without DOM access.
   *
   * "an element's attributes are unavailable until connected to the DOM"
   * So you may write to, but not read from it.
   *
   * Sources:
   * - https://andyogo.github.io/custom-element-reactions-diagram/
   * - https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks
   */
  constructor() {
    super();
    st(this, "shadowRoot");
    st(this, "testingFileChooser", null);
    // --- Attribute accessible from the HTML tag:
    st(this, "baseUrl", new URL("http://localhost:8090/"));
    this.shadowRoot = this.attachShadow({ mode: "open" }), this.addCssContent(fl), this.addCssContent(gl), this.addCssContent(hl);
    const n = document.createElement("template");
    n.innerHTML = ri, this.shadowRoot.append(n.content.cloneNode(!0));
  }
  // ---
  // --- Helper methods
  addCssContent(n) {
    let r = document.createElement("style");
    r.textContent = n, this.shadowRoot.append(r);
  }
  /**
   * Which attributes to notice change for.
   *
   * For all returned attributes, attributeChangedCallback might be called
   * due to add/remove/change events.
   */
  static get observedAttributes() {
    return Vt;
  }
  /**
   * Initialize your component.
   *
   * Invoked each time the custom element is appended into a document-connected element.
   * This will happen each time the node is moved, and may happen before the element's
   * contents have been fully parsed.
   *
   * Note: connectedCallback may be called once your element is no longer connected,
   * use Node.isConnected to make sure.
   *
   * Source: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks
   */
  connectedCallback() {
    if (!this.isConnected)
      return;
    let n = this.getAttribute(Vt[0]);
    n != null && (this.baseUrl = new URL(n));
    let r = this.shadowRoot.querySelector('input[type="file"]');
    if (r != null) {
      let o = jt();
      o.credits = !1, o.maxFiles = 1, this.testingFileChooser = pt(r, o);
    }
    let i = this.shadowRoot.getElementById("mappingchooser");
    i != null ? El({
      input: i,
      minLength: -1,
      highlight: !0,
      source: {
        prefetch: {
          url: this.baseUrl.toString() + "api/v1/mappingAdministration/",
          done: !1
        },
        identifier: "name",
        transform: (o) => {
          for (let s of o)
            typeof s == "object" && (s.name = s.title ? `${s.mappingId} - ${s.title}` : s.mappingId);
          return o;
        },
        dataTokens: ["description"],
        identity: (o) => `${o.mappingId}${o.title}`
      },
      preventSubmit: !0
    }) : console.error("Could not find element for mapping selector (typeahead).");
  }
  /**
   * Invoked each time the custom element is disconnected from the document's DOM.
   */
  disconnectedCallback() {
  }
  /**
   * Invoked each time the custom element is moved to a new document.
   */
  adoptedCallback() {
  }
  /**
   * Invoked each time one of the custom element's attributes is added, removed, or changed.
   * Which attributes to notice change for is specified in a static get observedAttributes method.
   *
   * @param name attributes name
   * @param oldValue attributes value before the change
   * @param newValue attributes value after the change
   */
  attributeChangedCallback(n, r, i) {
    n == Vt[0] && (this.baseUrl = i, this.connectedCallback());
  }
  async executeMapping(n = !1) {
    let r = this.shadowRoot.getElementById("mappingchooser");
    const i = r == null ? void 0 : r.value, o = i == null ? void 0 : i.split("-")[0].trim();
    if (this.testingFileChooser != null) {
      const s = this.testingFileChooser.getFile();
      if (s != null) {
        const l = this.baseUrl.toString() + "api/v1/mappingExecution/" + o, a = s.file;
        let d = new FormData();
        return a != null && d.append("document", a), fetch(l, {
          method: "POST",
          body: d
        }).then((c) => c.json()).then((c) => {
          n && this.triggerDownload(c);
        });
      }
    }
  }
  /**
   * In case if download is required triggerDownload can be used
   */
  triggerDownload(n) {
    const r = document.createElement("a");
    r.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(n))), r.setAttribute("download", "result.json"), r.style.display = "none", this.shadowRoot.appendChild(r), r.click(), this.shadowRoot.removeChild(r);
  }
}
window.customElements.define(
  "mapping-input",
  Il
  /* { extends: "ul" } */
);
//# sourceMappingURL=com_mapping-service-input.es.js.map
