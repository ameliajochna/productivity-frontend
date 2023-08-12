/*! For license information please see main.adeddae1.js.LICENSE.txt */
!(function () {
  var e = {
      4569: function (e, t, n) {
        e.exports = n(8036);
      },
      3381: function (e, t, n) {
        "use strict";
        var r = n(3589),
          o = n(7297),
          i = n(9301),
          a = n(9774),
          s = n(1804),
          l = n(9145),
          u = n(5411),
          c = n(6789),
          f = n(4531),
          d = n(6569),
          p = n(6261);
        e.exports = function (e) {
          return new Promise(function (t, n) {
            var h,
              m = e.data,
              v = e.headers,
              g = e.responseType;
            function y() {
              e.cancelToken && e.cancelToken.unsubscribe(h),
                e.signal && e.signal.removeEventListener("abort", h);
            }
            r.isFormData(m) &&
              r.isStandardBrowserEnv() &&
              delete v["Content-Type"];
            var b = new XMLHttpRequest();
            if (e.auth) {
              var w = e.auth.username || "",
                x = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              v.Authorization = "Basic " + btoa(w + ":" + x);
            }
            var k = s(e.baseURL, e.url);
            function A() {
              if (b) {
                var r =
                    "getAllResponseHeaders" in b
                      ? l(b.getAllResponseHeaders())
                      : null,
                  i = {
                    data:
                      g && "text" !== g && "json" !== g
                        ? b.response
                        : b.responseText,
                    status: b.status,
                    statusText: b.statusText,
                    headers: r,
                    config: e,
                    request: b,
                  };
                o(
                  function (e) {
                    t(e), y();
                  },
                  function (e) {
                    n(e), y();
                  },
                  i,
                ),
                  (b = null);
              }
            }
            if (
              (b.open(
                e.method.toUpperCase(),
                a(k, e.params, e.paramsSerializer),
                !0,
              ),
              (b.timeout = e.timeout),
              "onloadend" in b
                ? (b.onloadend = A)
                : (b.onreadystatechange = function () {
                    b &&
                      4 === b.readyState &&
                      (0 !== b.status ||
                        (b.responseURL &&
                          0 === b.responseURL.indexOf("file:"))) &&
                      setTimeout(A);
                  }),
              (b.onabort = function () {
                b &&
                  (n(new f("Request aborted", f.ECONNABORTED, e, b)),
                  (b = null));
              }),
              (b.onerror = function () {
                n(new f("Network Error", f.ERR_NETWORK, e, b, b)), (b = null);
              }),
              (b.ontimeout = function () {
                var t = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded",
                  r = e.transitional || c;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  n(
                    new f(
                      t,
                      r.clarifyTimeoutError ? f.ETIMEDOUT : f.ECONNABORTED,
                      e,
                      b,
                    ),
                  ),
                  (b = null);
              }),
              r.isStandardBrowserEnv())
            ) {
              var _ =
                (e.withCredentials || u(k)) && e.xsrfCookieName
                  ? i.read(e.xsrfCookieName)
                  : void 0;
              _ && (v[e.xsrfHeaderName] = _);
            }
            "setRequestHeader" in b &&
              r.forEach(v, function (e, t) {
                "undefined" === typeof m && "content-type" === t.toLowerCase()
                  ? delete v[t]
                  : b.setRequestHeader(t, e);
              }),
              r.isUndefined(e.withCredentials) ||
                (b.withCredentials = !!e.withCredentials),
              g && "json" !== g && (b.responseType = e.responseType),
              "function" === typeof e.onDownloadProgress &&
                b.addEventListener("progress", e.onDownloadProgress),
              "function" === typeof e.onUploadProgress &&
                b.upload &&
                b.upload.addEventListener("progress", e.onUploadProgress),
              (e.cancelToken || e.signal) &&
                ((h = function (e) {
                  b &&
                    (n(!e || (e && e.type) ? new d() : e),
                    b.abort(),
                    (b = null));
                }),
                e.cancelToken && e.cancelToken.subscribe(h),
                e.signal &&
                  (e.signal.aborted
                    ? h()
                    : e.signal.addEventListener("abort", h))),
              m || (m = null);
            var E = p(k);
            E && -1 === ["http", "https", "file"].indexOf(E)
              ? n(
                  new f(
                    "Unsupported protocol " + E + ":",
                    f.ERR_BAD_REQUEST,
                    e,
                  ),
                )
              : b.send(m);
          });
        };
      },
      8036: function (e, t, n) {
        "use strict";
        var r = n(3589),
          o = n(4049),
          i = n(3773),
          a = n(777);
        var s = (function e(t) {
          var n = new i(t),
            s = o(i.prototype.request, n);
          return (
            r.extend(s, i.prototype, n),
            r.extend(s, n),
            (s.create = function (n) {
              return e(a(t, n));
            }),
            s
          );
        })(n(1709));
        (s.Axios = i),
          (s.CanceledError = n(6569)),
          (s.CancelToken = n(6857)),
          (s.isCancel = n(5517)),
          (s.VERSION = n(7600).version),
          (s.toFormData = n(1397)),
          (s.AxiosError = n(4531)),
          (s.Cancel = s.CanceledError),
          (s.all = function (e) {
            return Promise.all(e);
          }),
          (s.spread = n(8089)),
          (s.isAxiosError = n(9580)),
          (e.exports = s),
          (e.exports.default = s);
      },
      6857: function (e, t, n) {
        "use strict";
        var r = n(6569);
        function o(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var n = this;
          this.promise.then(function (e) {
            if (n._listeners) {
              var t,
                r = n._listeners.length;
              for (t = 0; t < r; t++) n._listeners[t](e);
              n._listeners = null;
            }
          }),
            (this.promise.then = function (e) {
              var t,
                r = new Promise(function (e) {
                  n.subscribe(e), (t = e);
                }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e) {
              n.reason || ((n.reason = new r(e)), t(n.reason));
            });
        }
        (o.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (o.prototype.subscribe = function (e) {
            this.reason
              ? e(this.reason)
              : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
          }),
          (o.prototype.unsubscribe = function (e) {
            if (this._listeners) {
              var t = this._listeners.indexOf(e);
              -1 !== t && this._listeners.splice(t, 1);
            }
          }),
          (o.source = function () {
            var e;
            return {
              token: new o(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = o);
      },
      6569: function (e, t, n) {
        "use strict";
        var r = n(4531);
        function o(e) {
          r.call(this, null == e ? "canceled" : e, r.ERR_CANCELED),
            (this.name = "CanceledError");
        }
        n(3589).inherits(o, r, { __CANCEL__: !0 }), (e.exports = o);
      },
      5517: function (e) {
        "use strict";
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      3773: function (e, t, n) {
        "use strict";
        var r = n(3589),
          o = n(9774),
          i = n(7470),
          a = n(2733),
          s = n(777),
          l = n(1804),
          u = n(7835),
          c = u.validators;
        function f(e) {
          (this.defaults = e),
            (this.interceptors = { request: new i(), response: new i() });
        }
        (f.prototype.request = function (e, t) {
          "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = s(this.defaults, t)).method
              ? (t.method = t.method.toLowerCase())
              : this.defaults.method
              ? (t.method = this.defaults.method.toLowerCase())
              : (t.method = "get");
          var n = t.transitional;
          void 0 !== n &&
            u.assertOptions(
              n,
              {
                silentJSONParsing: c.transitional(c.boolean),
                forcedJSONParsing: c.transitional(c.boolean),
                clarifyTimeoutError: c.transitional(c.boolean),
              },
              !1,
            );
          var r = [],
            o = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((o = o && e.synchronous), r.unshift(e.fulfilled, e.rejected));
          });
          var i,
            l = [];
          if (
            (this.interceptors.response.forEach(function (e) {
              l.push(e.fulfilled, e.rejected);
            }),
            !o)
          ) {
            var f = [a, void 0];
            for (
              Array.prototype.unshift.apply(f, r),
                f = f.concat(l),
                i = Promise.resolve(t);
              f.length;

            )
              i = i.then(f.shift(), f.shift());
            return i;
          }
          for (var d = t; r.length; ) {
            var p = r.shift(),
              h = r.shift();
            try {
              d = p(d);
            } catch (m) {
              h(m);
              break;
            }
          }
          try {
            i = a(d);
          } catch (m) {
            return Promise.reject(m);
          }
          for (; l.length; ) i = i.then(l.shift(), l.shift());
          return i;
        }),
          (f.prototype.getUri = function (e) {
            e = s(this.defaults, e);
            var t = l(e.baseURL, e.url);
            return o(t, e.params, e.paramsSerializer);
          }),
          r.forEach(["delete", "get", "head", "options"], function (e) {
            f.prototype[e] = function (t, n) {
              return this.request(
                s(n || {}, { method: e, url: t, data: (n || {}).data }),
              );
            };
          }),
          r.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
              return function (n, r, o) {
                return this.request(
                  s(o || {}, {
                    method: e,
                    headers: t ? { "Content-Type": "multipart/form-data" } : {},
                    url: n,
                    data: r,
                  }),
                );
              };
            }
            (f.prototype[e] = t()), (f.prototype[e + "Form"] = t(!0));
          }),
          (e.exports = f);
      },
      4531: function (e, t, n) {
        "use strict";
        var r = n(3589);
        function o(e, t, n, r, o) {
          Error.call(this),
            (this.message = e),
            (this.name = "AxiosError"),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            o && (this.response = o);
        }
        r.inherits(o, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          },
        });
        var i = o.prototype,
          a = {};
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
        ].forEach(function (e) {
          a[e] = { value: e };
        }),
          Object.defineProperties(o, a),
          Object.defineProperty(i, "isAxiosError", { value: !0 }),
          (o.from = function (e, t, n, a, s, l) {
            var u = Object.create(i);
            return (
              r.toFlatObject(e, u, function (e) {
                return e !== Error.prototype;
              }),
              o.call(u, e.message, t, n, a, s),
              (u.name = e.name),
              l && Object.assign(u, l),
              u
            );
          }),
          (e.exports = o);
      },
      7470: function (e, t, n) {
        "use strict";
        var r = n(3589);
        function o() {
          this.handlers = [];
        }
        (o.prototype.use = function (e, t, n) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!n && n.synchronous,
              runWhen: n ? n.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (o.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (o.prototype.forEach = function (e) {
            r.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (e.exports = o);
      },
      1804: function (e, t, n) {
        "use strict";
        var r = n(4044),
          o = n(9549);
        e.exports = function (e, t) {
          return e && !r(t) ? o(e, t) : t;
        };
      },
      2733: function (e, t, n) {
        "use strict";
        var r = n(3589),
          o = n(2693),
          i = n(5517),
          a = n(1709),
          s = n(6569);
        function l(e) {
          if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
          )
            throw new s();
        }
        e.exports = function (e) {
          return (
            l(e),
            (e.headers = e.headers || {}),
            (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
            (e.headers = r.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers,
            )),
            r.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (t) {
                delete e.headers[t];
              },
            ),
            (e.adapter || a.adapter)(e).then(
              function (t) {
                return (
                  l(e),
                  (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
                  t
                );
              },
              function (t) {
                return (
                  i(t) ||
                    (l(e),
                    t &&
                      t.response &&
                      (t.response.data = o.call(
                        e,
                        t.response.data,
                        t.response.headers,
                        e.transformResponse,
                      ))),
                  Promise.reject(t)
                );
              },
            )
          );
        };
      },
      777: function (e, t, n) {
        "use strict";
        var r = n(3589);
        e.exports = function (e, t) {
          t = t || {};
          var n = {};
          function o(e, t) {
            return r.isPlainObject(e) && r.isPlainObject(t)
              ? r.merge(e, t)
              : r.isPlainObject(t)
              ? r.merge({}, t)
              : r.isArray(t)
              ? t.slice()
              : t;
          }
          function i(n) {
            return r.isUndefined(t[n])
              ? r.isUndefined(e[n])
                ? void 0
                : o(void 0, e[n])
              : o(e[n], t[n]);
          }
          function a(e) {
            if (!r.isUndefined(t[e])) return o(void 0, t[e]);
          }
          function s(n) {
            return r.isUndefined(t[n])
              ? r.isUndefined(e[n])
                ? void 0
                : o(void 0, e[n])
              : o(void 0, t[n]);
          }
          function l(n) {
            return n in t ? o(e[n], t[n]) : n in e ? o(void 0, e[n]) : void 0;
          }
          var u = {
            url: a,
            method: a,
            data: a,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            beforeRedirect: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: l,
          };
          return (
            r.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
              var t = u[e] || i,
                o = t(e);
              (r.isUndefined(o) && t !== l) || (n[e] = o);
            }),
            n
          );
        };
      },
      7297: function (e, t, n) {
        "use strict";
        var r = n(4531);
        e.exports = function (e, t, n) {
          var o = n.config.validateStatus;
          n.status && o && !o(n.status)
            ? t(
                new r(
                  "Request failed with status code " + n.status,
                  [r.ERR_BAD_REQUEST, r.ERR_BAD_RESPONSE][
                    Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n,
                ),
              )
            : e(n);
        };
      },
      2693: function (e, t, n) {
        "use strict";
        var r = n(3589),
          o = n(1709);
        e.exports = function (e, t, n) {
          var i = this || o;
          return (
            r.forEach(n, function (n) {
              e = n.call(i, e, t);
            }),
            e
          );
        };
      },
      1709: function (e, t, n) {
        "use strict";
        var r = n(3589),
          o = n(4341),
          i = n(4531),
          a = n(6789),
          s = n(1397),
          l = { "Content-Type": "application/x-www-form-urlencoded" };
        function u(e, t) {
          !r.isUndefined(e) &&
            r.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        var c = {
          transitional: a,
          adapter: (function () {
            var e;
            return (
              ("undefined" !== typeof XMLHttpRequest ||
                ("undefined" !== typeof process &&
                  "[object process]" ===
                    Object.prototype.toString.call(process))) &&
                (e = n(3381)),
              e
            );
          })(),
          transformRequest: [
            function (e, t) {
              if (
                (o(t, "Accept"),
                o(t, "Content-Type"),
                r.isFormData(e) ||
                  r.isArrayBuffer(e) ||
                  r.isBuffer(e) ||
                  r.isStream(e) ||
                  r.isFile(e) ||
                  r.isBlob(e))
              )
                return e;
              if (r.isArrayBufferView(e)) return e.buffer;
              if (r.isURLSearchParams(e))
                return (
                  u(t, "application/x-www-form-urlencoded;charset=utf-8"),
                  e.toString()
                );
              var n,
                i = r.isObject(e),
                a = t && t["Content-Type"];
              if ((n = r.isFileList(e)) || (i && "multipart/form-data" === a)) {
                var l = this.env && this.env.FormData;
                return s(n ? { "files[]": e } : e, l && new l());
              }
              return i || "application/json" === a
                ? (u(t, "application/json"),
                  (function (e, t, n) {
                    if (r.isString(e))
                      try {
                        return (t || JSON.parse)(e), r.trim(e);
                      } catch (o) {
                        if ("SyntaxError" !== o.name) throw o;
                      }
                    return (n || JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional || c.transitional,
                n = t && t.silentJSONParsing,
                o = t && t.forcedJSONParsing,
                a = !n && "json" === this.responseType;
              if (a || (o && r.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (s) {
                  if (a) {
                    if ("SyntaxError" === s.name)
                      throw i.from(
                        s,
                        i.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response,
                      );
                    throw s;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: n(3035) },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
        r.forEach(["delete", "get", "head"], function (e) {
          c.headers[e] = {};
        }),
          r.forEach(["post", "put", "patch"], function (e) {
            c.headers[e] = r.merge(l);
          }),
          (e.exports = c);
      },
      6789: function (e) {
        "use strict";
        e.exports = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        };
      },
      7600: function (e) {
        e.exports = { version: "0.27.2" };
      },
      4049: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
              n[r] = arguments[r];
            return e.apply(t, n);
          };
        };
      },
      9774: function (e, t, n) {
        "use strict";
        var r = n(3589);
        function o(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, n) {
          if (!t) return e;
          var i;
          if (n) i = n(t);
          else if (r.isURLSearchParams(t)) i = t.toString();
          else {
            var a = [];
            r.forEach(t, function (e, t) {
              null !== e &&
                "undefined" !== typeof e &&
                (r.isArray(e) ? (t += "[]") : (e = [e]),
                r.forEach(e, function (e) {
                  r.isDate(e)
                    ? (e = e.toISOString())
                    : r.isObject(e) && (e = JSON.stringify(e)),
                    a.push(o(t) + "=" + o(e));
                }));
            }),
              (i = a.join("&"));
          }
          if (i) {
            var s = e.indexOf("#");
            -1 !== s && (e = e.slice(0, s)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
          }
          return e;
        };
      },
      9549: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
      },
      9301: function (e, t, n) {
        "use strict";
        var r = n(3589);
        e.exports = r.isStandardBrowserEnv()
          ? {
              write: function (e, t, n, o, i, a) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)),
                  r.isNumber(n) &&
                    s.push("expires=" + new Date(n).toGMTString()),
                  r.isString(o) && s.push("path=" + o),
                  r.isString(i) && s.push("domain=" + i),
                  !0 === a && s.push("secure"),
                  (document.cookie = s.join("; "));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      4044: function (e) {
        "use strict";
        e.exports = function (e) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        };
      },
      9580: function (e, t, n) {
        "use strict";
        var r = n(3589);
        e.exports = function (e) {
          return r.isObject(e) && !0 === e.isAxiosError;
        };
      },
      5411: function (e, t, n) {
        "use strict";
        var r = n(3589);
        e.exports = r.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");
              function o(e) {
                var r = e;
                return (
                  t && (n.setAttribute("href", r), (r = n.href)),
                  n.setAttribute("href", r),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname:
                      "/" === n.pathname.charAt(0)
                        ? n.pathname
                        : "/" + n.pathname,
                  }
                );
              }
              return (
                (e = o(window.location.href)),
                function (t) {
                  var n = r.isString(t) ? o(t) : t;
                  return n.protocol === e.protocol && n.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      4341: function (e, t, n) {
        "use strict";
        var r = n(3589);
        e.exports = function (e, t) {
          r.forEach(e, function (n, r) {
            r !== t &&
              r.toUpperCase() === t.toUpperCase() &&
              ((e[t] = n), delete e[r]);
          });
        };
      },
      3035: function (e) {
        e.exports = null;
      },
      9145: function (e, t, n) {
        "use strict";
        var r = n(3589),
          o = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ];
        e.exports = function (e) {
          var t,
            n,
            i,
            a = {};
          return e
            ? (r.forEach(e.split("\n"), function (e) {
                if (
                  ((i = e.indexOf(":")),
                  (t = r.trim(e.substr(0, i)).toLowerCase()),
                  (n = r.trim(e.substr(i + 1))),
                  t)
                ) {
                  if (a[t] && o.indexOf(t) >= 0) return;
                  a[t] =
                    "set-cookie" === t
                      ? (a[t] ? a[t] : []).concat([n])
                      : a[t]
                      ? a[t] + ", " + n
                      : n;
                }
              }),
              a)
            : a;
        };
      },
      6261: function (e) {
        "use strict";
        e.exports = function (e) {
          var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return (t && t[1]) || "";
        };
      },
      8089: function (e) {
        "use strict";
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      1397: function (e, t, n) {
        "use strict";
        var r = n(3589);
        e.exports = function (e, t) {
          t = t || new FormData();
          var n = [];
          function o(e) {
            return null === e
              ? ""
              : r.isDate(e)
              ? e.toISOString()
              : r.isArrayBuffer(e) || r.isTypedArray(e)
              ? "function" === typeof Blob
                ? new Blob([e])
                : Buffer.from(e)
              : e;
          }
          return (
            (function e(i, a) {
              if (r.isPlainObject(i) || r.isArray(i)) {
                if (-1 !== n.indexOf(i))
                  throw Error("Circular reference detected in " + a);
                n.push(i),
                  r.forEach(i, function (n, i) {
                    if (!r.isUndefined(n)) {
                      var s,
                        l = a ? a + "." + i : i;
                      if (n && !a && "object" === typeof n)
                        if (r.endsWith(i, "{}")) n = JSON.stringify(n);
                        else if (r.endsWith(i, "[]") && (s = r.toArray(n)))
                          return void s.forEach(function (e) {
                            !r.isUndefined(e) && t.append(l, o(e));
                          });
                      e(n, l);
                    }
                  }),
                  n.pop();
              } else t.append(a, o(i));
            })(e),
            t
          );
        };
      },
      7835: function (e, t, n) {
        "use strict";
        var r = n(7600).version,
          o = n(4531),
          i = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          function (e, t) {
            i[e] = function (n) {
              return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          },
        );
        var a = {};
        (i.transitional = function (e, t, n) {
          function i(e, t) {
            return (
              "[Axios v" +
              r +
              "] Transitional option '" +
              e +
              "'" +
              t +
              (n ? ". " + n : "")
            );
          }
          return function (n, r, s) {
            if (!1 === e)
              throw new o(
                i(r, " has been removed" + (t ? " in " + t : "")),
                o.ERR_DEPRECATED,
              );
            return (
              t &&
                !a[r] &&
                ((a[r] = !0),
                console.warn(
                  i(
                    r,
                    " has been deprecated since v" +
                      t +
                      " and will be removed in the near future",
                  ),
                )),
              !e || e(n, r, s)
            );
          };
        }),
          (e.exports = {
            assertOptions: function (e, t, n) {
              if ("object" !== typeof e)
                throw new o(
                  "options must be an object",
                  o.ERR_BAD_OPTION_VALUE,
                );
              for (var r = Object.keys(e), i = r.length; i-- > 0; ) {
                var a = r[i],
                  s = t[a];
                if (s) {
                  var l = e[a],
                    u = void 0 === l || s(l, a, e);
                  if (!0 !== u)
                    throw new o(
                      "option " + a + " must be " + u,
                      o.ERR_BAD_OPTION_VALUE,
                    );
                } else if (!0 !== n)
                  throw new o("Unknown option " + a, o.ERR_BAD_OPTION);
              }
            },
            validators: i,
          });
      },
      3589: function (e, t, n) {
        "use strict";
        var r,
          o = n(4049),
          i = Object.prototype.toString,
          a =
            ((r = Object.create(null)),
            function (e) {
              var t = i.call(e);
              return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
            });
        function s(e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return a(t) === e;
            }
          );
        }
        function l(e) {
          return Array.isArray(e);
        }
        function u(e) {
          return "undefined" === typeof e;
        }
        var c = s("ArrayBuffer");
        function f(e) {
          return null !== e && "object" === typeof e;
        }
        function d(e) {
          if ("object" !== a(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        var p = s("Date"),
          h = s("File"),
          m = s("Blob"),
          v = s("FileList");
        function g(e) {
          return "[object Function]" === i.call(e);
        }
        var y = s("URLSearchParams");
        function b(e, t) {
          if (null !== e && "undefined" !== typeof e)
            if (("object" !== typeof e && (e = [e]), l(e)))
              for (var n = 0, r = e.length; n < r; n++)
                t.call(null, e[n], n, e);
            else
              for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) &&
                  t.call(null, e[o], o, e);
        }
        var w,
          x =
            ((w =
              "undefined" !== typeof Uint8Array &&
              Object.getPrototypeOf(Uint8Array)),
            function (e) {
              return w && e instanceof w;
            });
        e.exports = {
          isArray: l,
          isArrayBuffer: c,
          isBuffer: function (e) {
            return (
              null !== e &&
              !u(e) &&
              null !== e.constructor &&
              !u(e.constructor) &&
              "function" === typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t = "[object FormData]";
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                i.call(e) === t ||
                (g(e.toString) && e.toString() === t))
            );
          },
          isArrayBufferView: function (e) {
            return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && c(e.buffer);
          },
          isString: function (e) {
            return "string" === typeof e;
          },
          isNumber: function (e) {
            return "number" === typeof e;
          },
          isObject: f,
          isPlainObject: d,
          isUndefined: u,
          isDate: p,
          isFile: h,
          isBlob: m,
          isFunction: g,
          isStream: function (e) {
            return f(e) && g(e.pipe);
          },
          isURLSearchParams: y,
          isStandardBrowserEnv: function () {
            return (
              ("undefined" === typeof navigator ||
                ("ReactNative" !== navigator.product &&
                  "NativeScript" !== navigator.product &&
                  "NS" !== navigator.product)) &&
              "undefined" !== typeof window &&
              "undefined" !== typeof document
            );
          },
          forEach: b,
          merge: function e() {
            var t = {};
            function n(n, r) {
              d(t[r]) && d(n)
                ? (t[r] = e(t[r], n))
                : d(n)
                ? (t[r] = e({}, n))
                : l(n)
                ? (t[r] = n.slice())
                : (t[r] = n);
            }
            for (var r = 0, o = arguments.length; r < o; r++)
              b(arguments[r], n);
            return t;
          },
          extend: function (e, t, n) {
            return (
              b(t, function (t, r) {
                e[r] = n && "function" === typeof t ? o(t, n) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, n, r) {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: function (e, t, n) {
            var r,
              o,
              i,
              a = {};
            t = t || {};
            do {
              for (o = (r = Object.getOwnPropertyNames(e)).length; o-- > 0; )
                a[(i = r[o])] || ((t[i] = e[i]), (a[i] = !0));
              e = Object.getPrototypeOf(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: a,
          kindOfTest: s,
          endsWith: function (e, t, n) {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            var r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: function (e) {
            if (!e) return null;
            var t = e.length;
            if (u(t)) return null;
            for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
            return n;
          },
          isTypedArray: x,
          isFileList: v,
        };
      },
      371: function (e, t, n) {
        var r = n(1588).default,
          o = n(3808).default,
          i = n(6115).default,
          a = n(1655).default,
          s = n(6389).default,
          l = n(2122).default,
          u = n(6690).default,
          c = n(9728).default,
          f = n(4704).default,
          d = n(7424).default,
          p = n(861).default;
        e.exports = (function () {
          "use strict";
          var e = new Map(),
            t = {
              set: function (t, n, r) {
                e.has(t) || e.set(t, new Map());
                var o = e.get(t);
                o.has(n) || 0 === o.size
                  ? o.set(n, r)
                  : console.error(
                      "Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(
                        Array.from(o.keys())[0],
                        ".",
                      ),
                    );
              },
              get: function (t, n) {
                return (e.has(t) && e.get(t).get(n)) || null;
              },
              remove: function (t, n) {
                if (e.has(t)) {
                  var r = e.get(t);
                  r.delete(n), 0 === r.size && e.delete(t);
                }
              },
            },
            n = "transitionend",
            h = function (e) {
              return (
                e &&
                  window.CSS &&
                  window.CSS.escape &&
                  (e = e.replace(/#([^\s"#']+)/g, function (e, t) {
                    return "#".concat(CSS.escape(t));
                  })),
                e
              );
            },
            m = function (e) {
              e.dispatchEvent(new Event(n));
            },
            v = function (e) {
              return (
                !(!e || "object" != typeof e) &&
                (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType)
              );
            },
            g = function (e) {
              return v(e)
                ? e.jquery
                  ? e[0]
                  : e
                : "string" == typeof e && e.length > 0
                ? document.querySelector(h(e))
                : null;
            },
            y = function (e) {
              if (!v(e) || 0 === e.getClientRects().length) return !1;
              var t =
                  "visible" ===
                  getComputedStyle(e).getPropertyValue("visibility"),
                n = e.closest("details:not([open])");
              if (!n) return t;
              if (n !== e) {
                var r = e.closest("summary");
                if (r && r.parentNode !== n) return !1;
                if (null === r) return !1;
              }
              return t;
            },
            b = function (e) {
              return (
                !e ||
                e.nodeType !== Node.ELEMENT_NODE ||
                !!e.classList.contains("disabled") ||
                (void 0 !== e.disabled
                  ? e.disabled
                  : e.hasAttribute("disabled") &&
                    "false" !== e.getAttribute("disabled"))
              );
            },
            w = function e(t) {
              if (!document.documentElement.attachShadow) return null;
              if ("function" == typeof t.getRootNode) {
                var n = t.getRootNode();
                return n instanceof ShadowRoot ? n : null;
              }
              return t instanceof ShadowRoot
                ? t
                : t.parentNode
                ? e(t.parentNode)
                : null;
            },
            x = function () {},
            k = function (e) {
              e.offsetHeight;
            },
            A = function () {
              return window.jQuery &&
                !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null;
            },
            _ = [],
            E = function () {
              return "rtl" === document.documentElement.dir;
            },
            S = function (e) {
              var t;
              (t = function () {
                var t = A();
                if (t) {
                  var n = e.NAME,
                    r = t.fn[n];
                  (t.fn[n] = e.jQueryInterface),
                    (t.fn[n].Constructor = e),
                    (t.fn[n].noConflict = function () {
                      return (t.fn[n] = r), e.jQueryInterface;
                    });
                }
              }),
                "loading" === document.readyState
                  ? (_.length ||
                      document.addEventListener(
                        "DOMContentLoaded",
                        function () {
                          for (var e = 0, t = _; e < t.length; e++) (0, t[e])();
                        },
                      ),
                    _.push(t))
                  : t();
            },
            C = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : e;
              return "function" == typeof e ? e.apply(void 0, p(t)) : n;
            },
            j = function (e, t) {
              if (
                arguments.length > 2 &&
                void 0 !== arguments[2] &&
                !arguments[2]
              )
                C(e);
              else {
                var r =
                    (function (e) {
                      if (!e) return 0;
                      var t = window.getComputedStyle(e),
                        n = t.transitionDuration,
                        r = t.transitionDelay,
                        o = Number.parseFloat(n),
                        i = Number.parseFloat(r);
                      return o || i
                        ? ((n = n.split(",")[0]),
                          (r = r.split(",")[0]),
                          1e3 * (Number.parseFloat(n) + Number.parseFloat(r)))
                        : 0;
                    })(t) + 5,
                  o = !1,
                  i = function r(i) {
                    i.target === t &&
                      ((o = !0), t.removeEventListener(n, r), C(e));
                  };
                t.addEventListener(n, i),
                  setTimeout(function () {
                    o || m(t);
                  }, r);
              }
            },
            N = function (e, t, n, r) {
              var o = e.length,
                i = e.indexOf(t);
              return -1 === i
                ? !n && r
                  ? e[o - 1]
                  : e[0]
                : ((i += n ? 1 : -1),
                  r && (i = (i + o) % o),
                  e[Math.max(0, Math.min(i, o - 1))]);
            },
            T = /[^.]*(?=\..*)\.|.*/,
            P = /\..*/,
            O = /::\d+$/,
            L = {},
            R = 1,
            D = { mouseenter: "mouseover", mouseleave: "mouseout" },
            M = new Set([
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
          function I(e, t) {
            return (t && "".concat(t, "::").concat(R++)) || e.uidEvent || R++;
          }
          function F(e) {
            var t = I(e);
            return (e.uidEvent = t), (L[t] = L[t] || {}), L[t];
          }
          function B(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            return Object.values(e).find(function (e) {
              return e.callable === t && e.delegationSelector === n;
            });
          }
          function z(e, t, n) {
            var r = "string" == typeof t,
              o = r ? n : t || n,
              i = Q(e);
            return M.has(i) || (i = e), [r, o, i];
          }
          function U(e, t, n, r, o) {
            if ("string" == typeof t && e) {
              var i = z(t, n, r),
                a = d(i, 3),
                s = a[0],
                l = a[1],
                u = a[2];
              if (t in D) {
                var c = function (e) {
                  return function (t) {
                    if (
                      !t.relatedTarget ||
                      (t.relatedTarget !== t.delegateTarget &&
                        !t.delegateTarget.contains(t.relatedTarget))
                    )
                      return e.call(this, t);
                  };
                };
                l = c(l);
              }
              var p = F(e),
                h = p[u] || (p[u] = {}),
                m = B(h, l, s ? n : null);
              if (m) m.oneOff = m.oneOff && o;
              else {
                var v = I(l, t.replace(T, "")),
                  g = s
                    ? (function (e, t, n) {
                        return function r(o) {
                          for (
                            var i = e.querySelectorAll(t), a = o.target;
                            a && a !== this;
                            a = a.parentNode
                          ) {
                            var s,
                              l = f(i);
                            try {
                              for (l.s(); !(s = l.n()).done; )
                                if (s.value === a)
                                  return (
                                    q(o, { delegateTarget: a }),
                                    r.oneOff && V.off(e, o.type, t, n),
                                    n.apply(a, [o])
                                  );
                            } catch (u) {
                              l.e(u);
                            } finally {
                              l.f();
                            }
                          }
                        };
                      })(e, n, l)
                    : (function (e, t) {
                        return function n(r) {
                          return (
                            q(r, { delegateTarget: e }),
                            n.oneOff && V.off(e, r.type, t),
                            t.apply(e, [r])
                          );
                        };
                      })(e, l);
                (g.delegationSelector = s ? n : null),
                  (g.callable = l),
                  (g.oneOff = o),
                  (g.uidEvent = v),
                  (h[v] = g),
                  e.addEventListener(u, g, s);
              }
            }
          }
          function W(e, t, n, r, o) {
            var i = B(t[n], r, o);
            i &&
              (e.removeEventListener(n, i, Boolean(o)),
              delete t[n][i.uidEvent]);
          }
          function H(e, t, n, r) {
            for (
              var o = t[n] || {}, i = 0, a = Object.entries(o);
              i < a.length;
              i++
            ) {
              var s = d(a[i], 2),
                l = s[0],
                u = s[1];
              l.includes(r) && W(e, t, n, u.callable, u.delegationSelector);
            }
          }
          function Q(e) {
            return (e = e.replace(P, "")), D[e] || e;
          }
          var V = {
            on: function (e, t, n, r) {
              U(e, t, n, r, !1);
            },
            one: function (e, t, n, r) {
              U(e, t, n, r, !0);
            },
            off: function (e, t, n, r) {
              if ("string" == typeof t && e) {
                var o = z(t, n, r),
                  i = d(o, 3),
                  a = i[0],
                  s = i[1],
                  l = i[2],
                  u = l !== t,
                  c = F(e),
                  f = c[l] || {},
                  p = t.startsWith(".");
                if (void 0 === s) {
                  if (p)
                    for (var h = 0, m = Object.keys(c); h < m.length; h++)
                      H(e, c, m[h], t.slice(1));
                  for (var v = 0, g = Object.entries(f); v < g.length; v++) {
                    var y = d(g[v], 2),
                      b = y[0],
                      w = y[1],
                      x = b.replace(O, "");
                    (u && !t.includes(x)) ||
                      W(e, c, l, w.callable, w.delegationSelector);
                  }
                } else {
                  if (!Object.keys(f).length) return;
                  W(e, c, l, s, a ? n : null);
                }
              }
            },
            trigger: function (e, t, n) {
              if ("string" != typeof t || !e) return null;
              var r = A(),
                o = null,
                i = !0,
                a = !0,
                s = !1;
              t !== Q(t) &&
                r &&
                ((o = r.Event(t, n)),
                r(e).trigger(o),
                (i = !o.isPropagationStopped()),
                (a = !o.isImmediatePropagationStopped()),
                (s = o.isDefaultPrevented()));
              var l = q(new Event(t, { bubbles: i, cancelable: !0 }), n);
              return (
                s && l.preventDefault(),
                a && e.dispatchEvent(l),
                l.defaultPrevented && o && o.preventDefault(),
                l
              );
            },
          };
          function q(e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = function () {
                  var n = d(o[r], 2),
                    i = n[0],
                    a = n[1];
                  try {
                    e[i] = a;
                  } catch (t) {
                    Object.defineProperty(e, i, {
                      configurable: !0,
                      get: function () {
                        return a;
                      },
                    });
                  }
                },
                r = 0,
                o = Object.entries(t);
              r < o.length;
              r++
            )
              n();
            return e;
          }
          function Y(e) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e === Number(e).toString()) return Number(e);
            if ("" === e || "null" === e) return null;
            if ("string" != typeof e) return e;
            try {
              return JSON.parse(decodeURIComponent(e));
            } catch (t) {
              return e;
            }
          }
          function G(e) {
            return e.replace(/[A-Z]/g, function (e) {
              return "-".concat(e.toLowerCase());
            });
          }
          var K = {
              setDataAttribute: function (e, t, n) {
                e.setAttribute("data-bs-".concat(G(t)), n);
              },
              removeDataAttribute: function (e, t) {
                e.removeAttribute("data-bs-".concat(G(t)));
              },
              getDataAttributes: function (e) {
                if (!e) return {};
                var t,
                  n = {},
                  r = Object.keys(e.dataset).filter(function (e) {
                    return e.startsWith("bs") && !e.startsWith("bsConfig");
                  }),
                  o = f(r);
                try {
                  for (o.s(); !(t = o.n()).done; ) {
                    var i = t.value,
                      a = i.replace(/^bs/, "");
                    n[(a = a.charAt(0).toLowerCase() + a.slice(1, a.length))] =
                      Y(e.dataset[i]);
                  }
                } catch (s) {
                  o.e(s);
                } finally {
                  o.f();
                }
                return n;
              },
              getDataAttribute: function (e, t) {
                return Y(e.getAttribute("data-bs-".concat(G(t))));
              },
            },
            J = (function () {
              function e() {
                u(this, e);
              }
              return (
                c(
                  e,
                  [
                    {
                      key: "_getConfig",
                      value: function (e) {
                        return (
                          (e = this._mergeConfigObj(e)),
                          (e = this._configAfterMerge(e)),
                          this._typeCheckConfig(e),
                          e
                        );
                      },
                    },
                    {
                      key: "_configAfterMerge",
                      value: function (e) {
                        return e;
                      },
                    },
                    {
                      key: "_mergeConfigObj",
                      value: function (e, t) {
                        var n = v(t) ? K.getDataAttribute(t, "config") : {};
                        return l(
                          l(
                            l(
                              l({}, this.constructor.Default),
                              "object" == typeof n ? n : {},
                            ),
                            v(t) ? K.getDataAttributes(t) : {},
                          ),
                          "object" == typeof e ? e : {},
                        );
                      },
                    },
                    {
                      key: "_typeCheckConfig",
                      value: function (e) {
                        for (
                          var t,
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : this.constructor.DefaultType,
                            r = 0,
                            o = Object.entries(n);
                          r < o.length;
                          r++
                        ) {
                          var i = d(o[r], 2),
                            a = i[0],
                            s = i[1],
                            l = e[a],
                            u = v(l)
                              ? "element"
                              : null == (t = l)
                              ? "".concat(t)
                              : Object.prototype.toString
                                  .call(t)
                                  .match(/\s([a-z]+)/i)[1]
                                  .toLowerCase();
                          if (!new RegExp(s).test(u))
                            throw new TypeError(
                              ""
                                .concat(
                                  this.constructor.NAME.toUpperCase(),
                                  ': Option "',
                                )
                                .concat(a, '" provided type "')
                                .concat(u, '" but expected type "')
                                .concat(s, '".'),
                            );
                        }
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return {};
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return {};
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        throw new Error(
                          'You have to implement the static method "NAME", for each component!',
                        );
                      },
                    },
                  ],
                ),
                e
              );
            })(),
            X = (function (e) {
              a(r, e);
              var n = s(r);
              function r(e, o) {
                var a;
                return (
                  u(this, r),
                  (a = n.call(this)),
                  (e = g(e)) &&
                    ((a._element = e),
                    (a._config = a._getConfig(o)),
                    t.set(a._element, a.constructor.DATA_KEY, i(a))),
                  a
                );
              }
              return (
                c(
                  r,
                  [
                    {
                      key: "dispose",
                      value: function () {
                        t.remove(this._element, this.constructor.DATA_KEY),
                          V.off(this._element, this.constructor.EVENT_KEY);
                        var e,
                          n = f(Object.getOwnPropertyNames(this));
                        try {
                          for (n.s(); !(e = n.n()).done; ) this[e.value] = null;
                        } catch (r) {
                          n.e(r);
                        } finally {
                          n.f();
                        }
                      },
                    },
                    {
                      key: "_queueCallback",
                      value: function (e, t) {
                        j(
                          e,
                          t,
                          !(arguments.length > 2 && void 0 !== arguments[2]) ||
                            arguments[2],
                        );
                      },
                    },
                    {
                      key: "_getConfig",
                      value: function (e) {
                        return (
                          (e = this._mergeConfigObj(e, this._element)),
                          (e = this._configAfterMerge(e)),
                          this._typeCheckConfig(e),
                          e
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: "getInstance",
                      value: function (e) {
                        return t.get(g(e), this.DATA_KEY);
                      },
                    },
                    {
                      key: "getOrCreateInstance",
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        return (
                          this.getInstance(e) ||
                          new this(e, "object" == typeof t ? t : null)
                        );
                      },
                    },
                    {
                      key: "VERSION",
                      get: function () {
                        return "5.3.0";
                      },
                    },
                    {
                      key: "DATA_KEY",
                      get: function () {
                        return "bs.".concat(this.NAME);
                      },
                    },
                    {
                      key: "EVENT_KEY",
                      get: function () {
                        return ".".concat(this.DATA_KEY);
                      },
                    },
                    {
                      key: "eventName",
                      value: function (e) {
                        return "".concat(e).concat(this.EVENT_KEY);
                      },
                    },
                  ],
                ),
                r
              );
            })(J),
            Z = function (e) {
              var t = e.getAttribute("data-bs-target");
              if (!t || "#" === t) {
                var n = e.getAttribute("href");
                if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
                n.includes("#") &&
                  !n.startsWith("#") &&
                  (n = "#".concat(n.split("#")[1])),
                  (t = n && "#" !== n ? n.trim() : null);
              }
              return h(t);
            },
            $ = {
              find: function (e) {
                var t,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : document.documentElement;
                return (t = []).concat.apply(
                  t,
                  p(Element.prototype.querySelectorAll.call(n, e)),
                );
              },
              findOne: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : document.documentElement;
                return Element.prototype.querySelector.call(t, e);
              },
              children: function (e, t) {
                var n;
                return (n = []).concat
                  .apply(n, p(e.children))
                  .filter(function (e) {
                    return e.matches(t);
                  });
              },
              parents: function (e, t) {
                for (var n = [], r = e.parentNode.closest(t); r; )
                  n.push(r), (r = r.parentNode.closest(t));
                return n;
              },
              prev: function (e, t) {
                for (var n = e.previousElementSibling; n; ) {
                  if (n.matches(t)) return [n];
                  n = n.previousElementSibling;
                }
                return [];
              },
              next: function (e, t) {
                for (var n = e.nextElementSibling; n; ) {
                  if (n.matches(t)) return [n];
                  n = n.nextElementSibling;
                }
                return [];
              },
              focusableChildren: function (e) {
                var t = [
                  "a",
                  "button",
                  "input",
                  "textarea",
                  "select",
                  "details",
                  "[tabindex]",
                  '[contenteditable="true"]',
                ]
                  .map(function (e) {
                    return "".concat(e, ':not([tabindex^="-"])');
                  })
                  .join(",");
                return this.find(t, e).filter(function (e) {
                  return !b(e) && y(e);
                });
              },
              getSelectorFromElement: function (e) {
                var t = Z(e);
                return t && $.findOne(t) ? t : null;
              },
              getElementFromSelector: function (e) {
                var t = Z(e);
                return t ? $.findOne(t) : null;
              },
              getMultipleElementsFromSelector: function (e) {
                var t = Z(e);
                return t ? $.find(t) : [];
              },
            },
            ee = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "hide",
                n = "click.dismiss".concat(e.EVENT_KEY),
                r = e.NAME;
              V.on(
                document,
                n,
                '[data-bs-dismiss="'.concat(r, '"]'),
                function (n) {
                  if (
                    (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
                    !b(this))
                  ) {
                    var o =
                      $.getElementFromSelector(this) ||
                      this.closest(".".concat(r));
                    e.getOrCreateInstance(o)[t]();
                  }
                },
              );
            },
            te = (function (e) {
              a(n, e);
              var t = s(n);
              function n() {
                return u(this, n), t.apply(this, arguments);
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "close",
                      value: function () {
                        var e = this;
                        if (
                          !V.trigger(this._element, "close.bs.alert")
                            .defaultPrevented
                        ) {
                          this._element.classList.remove("show");
                          var t = this._element.classList.contains("fade");
                          this._queueCallback(
                            function () {
                              return e._destroyElement();
                            },
                            this._element,
                            t,
                          );
                        }
                      },
                    },
                    {
                      key: "_destroyElement",
                      value: function () {
                        this._element.remove(),
                          V.trigger(this._element, "closed.bs.alert"),
                          this.dispose();
                      },
                    },
                  ],
                  [
                    {
                      key: "NAME",
                      get: function () {
                        return "alert";
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e) {
                        return this.each(function () {
                          var t = n.getOrCreateInstance(this);
                          if ("string" == typeof e) {
                            if (
                              void 0 === t[e] ||
                              e.startsWith("_") ||
                              "constructor" === e
                            )
                              throw new TypeError(
                                'No method named "'.concat(e, '"'),
                              );
                            t[e](this);
                          }
                        });
                      },
                    },
                  ],
                ),
                n
              );
            })(X);
          ee(te, "close"), S(te);
          var ne = '[data-bs-toggle="button"]',
            re = (function (e) {
              a(n, e);
              var t = s(n);
              function n() {
                return u(this, n), t.apply(this, arguments);
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "toggle",
                      value: function () {
                        this._element.setAttribute(
                          "aria-pressed",
                          this._element.classList.toggle("active"),
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: "NAME",
                      get: function () {
                        return "button";
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e) {
                        return this.each(function () {
                          var t = n.getOrCreateInstance(this);
                          "toggle" === e && t[e]();
                        });
                      },
                    },
                  ],
                ),
                n
              );
            })(X);
          V.on(document, "click.bs.button.data-api", ne, function (e) {
            e.preventDefault();
            var t = e.target.closest(ne);
            re.getOrCreateInstance(t).toggle();
          }),
            S(re);
          var oe = {
              endCallback: null,
              leftCallback: null,
              rightCallback: null,
            },
            ie = {
              endCallback: "(function|null)",
              leftCallback: "(function|null)",
              rightCallback: "(function|null)",
            },
            ae = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e, r) {
                var o;
                return (
                  u(this, n),
                  ((o = t.call(this))._element = e),
                  e &&
                    n.isSupported() &&
                    ((o._config = o._getConfig(r)),
                    (o._deltaX = 0),
                    (o._supportPointerEvents = Boolean(window.PointerEvent)),
                    o._initEvents()),
                  o
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "dispose",
                      value: function () {
                        V.off(this._element, ".bs.swipe");
                      },
                    },
                    {
                      key: "_start",
                      value: function (e) {
                        this._supportPointerEvents
                          ? this._eventIsPointerPenTouch(e) &&
                            (this._deltaX = e.clientX)
                          : (this._deltaX = e.touches[0].clientX);
                      },
                    },
                    {
                      key: "_end",
                      value: function (e) {
                        this._eventIsPointerPenTouch(e) &&
                          (this._deltaX = e.clientX - this._deltaX),
                          this._handleSwipe(),
                          C(this._config.endCallback);
                      },
                    },
                    {
                      key: "_move",
                      value: function (e) {
                        this._deltaX =
                          e.touches && e.touches.length > 1
                            ? 0
                            : e.touches[0].clientX - this._deltaX;
                      },
                    },
                    {
                      key: "_handleSwipe",
                      value: function () {
                        var e = Math.abs(this._deltaX);
                        if (!(e <= 40)) {
                          var t = e / this._deltaX;
                          (this._deltaX = 0),
                            t &&
                              C(
                                t > 0
                                  ? this._config.rightCallback
                                  : this._config.leftCallback,
                              );
                        }
                      },
                    },
                    {
                      key: "_initEvents",
                      value: function () {
                        var e = this;
                        this._supportPointerEvents
                          ? (V.on(
                              this._element,
                              "pointerdown.bs.swipe",
                              function (t) {
                                return e._start(t);
                              },
                            ),
                            V.on(
                              this._element,
                              "pointerup.bs.swipe",
                              function (t) {
                                return e._end(t);
                              },
                            ),
                            this._element.classList.add("pointer-event"))
                          : (V.on(
                              this._element,
                              "touchstart.bs.swipe",
                              function (t) {
                                return e._start(t);
                              },
                            ),
                            V.on(
                              this._element,
                              "touchmove.bs.swipe",
                              function (t) {
                                return e._move(t);
                              },
                            ),
                            V.on(
                              this._element,
                              "touchend.bs.swipe",
                              function (t) {
                                return e._end(t);
                              },
                            ));
                      },
                    },
                    {
                      key: "_eventIsPointerPenTouch",
                      value: function (e) {
                        return (
                          this._supportPointerEvents &&
                          ("pen" === e.pointerType || "touch" === e.pointerType)
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return oe;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return ie;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "swipe";
                      },
                    },
                    {
                      key: "isSupported",
                      value: function () {
                        return (
                          "ontouchstart" in document.documentElement ||
                          navigator.maxTouchPoints > 0
                        );
                      },
                    },
                  ],
                ),
                n
              );
            })(J),
            se = "next",
            le = "prev",
            ue = "left",
            ce = "right",
            fe = "slid.bs.carousel",
            de = "carousel",
            pe = "active",
            he = { ArrowLeft: ce, ArrowRight: ue },
            me = {
              interval: 5e3,
              keyboard: !0,
              pause: "hover",
              ride: !1,
              touch: !0,
              wrap: !0,
            },
            ve = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              pause: "(string|boolean)",
              ride: "(boolean|string)",
              touch: "boolean",
              wrap: "boolean",
            },
            ge = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e, r) {
                var o;
                return (
                  u(this, n),
                  ((o = t.call(this, e, r))._interval = null),
                  (o._activeElement = null),
                  (o._isSliding = !1),
                  (o.touchTimeout = null),
                  (o._swipeHelper = null),
                  (o._indicatorsElement = $.findOne(
                    ".carousel-indicators",
                    o._element,
                  )),
                  o._addEventListeners(),
                  o._config.ride === de && o.cycle(),
                  o
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "next",
                      value: function () {
                        this._slide(se);
                      },
                    },
                    {
                      key: "nextWhenVisible",
                      value: function () {
                        !document.hidden && y(this._element) && this.next();
                      },
                    },
                    {
                      key: "prev",
                      value: function () {
                        this._slide(le);
                      },
                    },
                    {
                      key: "pause",
                      value: function () {
                        this._isSliding && m(this._element),
                          this._clearInterval();
                      },
                    },
                    {
                      key: "cycle",
                      value: function () {
                        var e = this;
                        this._clearInterval(),
                          this._updateInterval(),
                          (this._interval = setInterval(function () {
                            return e.nextWhenVisible();
                          }, this._config.interval));
                      },
                    },
                    {
                      key: "_maybeEnableCycle",
                      value: function () {
                        var e = this;
                        this._config.ride &&
                          (this._isSliding
                            ? V.one(this._element, fe, function () {
                                return e.cycle();
                              })
                            : this.cycle());
                      },
                    },
                    {
                      key: "to",
                      value: function (e) {
                        var t = this,
                          n = this._getItems();
                        if (!(e > n.length - 1 || e < 0))
                          if (this._isSliding)
                            V.one(this._element, fe, function () {
                              return t.to(e);
                            });
                          else {
                            var r = this._getItemIndex(this._getActive());
                            if (r !== e) {
                              var o = e > r ? se : le;
                              this._slide(o, n[e]);
                            }
                          }
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        this._swipeHelper && this._swipeHelper.dispose(),
                          r(o(n.prototype), "dispose", this).call(this);
                      },
                    },
                    {
                      key: "_configAfterMerge",
                      value: function (e) {
                        return (e.defaultInterval = e.interval), e;
                      },
                    },
                    {
                      key: "_addEventListeners",
                      value: function () {
                        var e = this;
                        this._config.keyboard &&
                          V.on(
                            this._element,
                            "keydown.bs.carousel",
                            function (t) {
                              return e._keydown(t);
                            },
                          ),
                          "hover" === this._config.pause &&
                            (V.on(
                              this._element,
                              "mouseenter.bs.carousel",
                              function () {
                                return e.pause();
                              },
                            ),
                            V.on(
                              this._element,
                              "mouseleave.bs.carousel",
                              function () {
                                return e._maybeEnableCycle();
                              },
                            )),
                          this._config.touch &&
                            ae.isSupported() &&
                            this._addTouchEventListeners();
                      },
                    },
                    {
                      key: "_addTouchEventListeners",
                      value: function () {
                        var e,
                          t = this,
                          n = f($.find(".carousel-item img", this._element));
                        try {
                          for (n.s(); !(e = n.n()).done; ) {
                            var r = e.value;
                            V.on(r, "dragstart.bs.carousel", function (e) {
                              return e.preventDefault();
                            });
                          }
                        } catch (i) {
                          n.e(i);
                        } finally {
                          n.f();
                        }
                        var o = {
                          leftCallback: function () {
                            return t._slide(t._directionToOrder(ue));
                          },
                          rightCallback: function () {
                            return t._slide(t._directionToOrder(ce));
                          },
                          endCallback: function () {
                            "hover" === t._config.pause &&
                              (t.pause(),
                              t.touchTimeout && clearTimeout(t.touchTimeout),
                              (t.touchTimeout = setTimeout(function () {
                                return t._maybeEnableCycle();
                              }, 500 + t._config.interval)));
                          },
                        };
                        this._swipeHelper = new ae(this._element, o);
                      },
                    },
                    {
                      key: "_keydown",
                      value: function (e) {
                        if (!/input|textarea/i.test(e.target.tagName)) {
                          var t = he[e.key];
                          t &&
                            (e.preventDefault(),
                            this._slide(this._directionToOrder(t)));
                        }
                      },
                    },
                    {
                      key: "_getItemIndex",
                      value: function (e) {
                        return this._getItems().indexOf(e);
                      },
                    },
                    {
                      key: "_setActiveIndicatorElement",
                      value: function (e) {
                        if (this._indicatorsElement) {
                          var t = $.findOne(".active", this._indicatorsElement);
                          t.classList.remove(pe),
                            t.removeAttribute("aria-current");
                          var n = $.findOne(
                            '[data-bs-slide-to="'.concat(e, '"]'),
                            this._indicatorsElement,
                          );
                          n &&
                            (n.classList.add(pe),
                            n.setAttribute("aria-current", "true"));
                        }
                      },
                    },
                    {
                      key: "_updateInterval",
                      value: function () {
                        var e = this._activeElement || this._getActive();
                        if (e) {
                          var t = Number.parseInt(
                            e.getAttribute("data-bs-interval"),
                            10,
                          );
                          this._config.interval =
                            t || this._config.defaultInterval;
                        }
                      },
                    },
                    {
                      key: "_slide",
                      value: function (e) {
                        var t = this,
                          n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                        if (!this._isSliding) {
                          var r = this._getActive(),
                            o = e === se,
                            i =
                              n || N(this._getItems(), r, o, this._config.wrap);
                          if (i !== r) {
                            var a = this._getItemIndex(i),
                              s = function (n) {
                                return V.trigger(t._element, n, {
                                  relatedTarget: i,
                                  direction: t._orderToDirection(e),
                                  from: t._getItemIndex(r),
                                  to: a,
                                });
                              };
                            if (
                              !s("slide.bs.carousel").defaultPrevented &&
                              r &&
                              i
                            ) {
                              var l = Boolean(this._interval);
                              this.pause(),
                                (this._isSliding = !0),
                                this._setActiveIndicatorElement(a),
                                (this._activeElement = i);
                              var u = o
                                  ? "carousel-item-start"
                                  : "carousel-item-end",
                                c = o
                                  ? "carousel-item-next"
                                  : "carousel-item-prev";
                              i.classList.add(c),
                                k(i),
                                r.classList.add(u),
                                i.classList.add(u),
                                this._queueCallback(
                                  function () {
                                    i.classList.remove(u, c),
                                      i.classList.add(pe),
                                      r.classList.remove(pe, c, u),
                                      (t._isSliding = !1),
                                      s(fe);
                                  },
                                  r,
                                  this._isAnimated(),
                                ),
                                l && this.cycle();
                            }
                          }
                        }
                      },
                    },
                    {
                      key: "_isAnimated",
                      value: function () {
                        return this._element.classList.contains("slide");
                      },
                    },
                    {
                      key: "_getActive",
                      value: function () {
                        return $.findOne(
                          ".active.carousel-item",
                          this._element,
                        );
                      },
                    },
                    {
                      key: "_getItems",
                      value: function () {
                        return $.find(".carousel-item", this._element);
                      },
                    },
                    {
                      key: "_clearInterval",
                      value: function () {
                        this._interval &&
                          (clearInterval(this._interval),
                          (this._interval = null));
                      },
                    },
                    {
                      key: "_directionToOrder",
                      value: function (e) {
                        return E() ? (e === ue ? le : se) : e === ue ? se : le;
                      },
                    },
                    {
                      key: "_orderToDirection",
                      value: function (e) {
                        return E() ? (e === le ? ue : ce) : e === le ? ce : ue;
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return me;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return ve;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "carousel";
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e) {
                        return this.each(function () {
                          var t = n.getOrCreateInstance(this, e);
                          if ("number" != typeof e) {
                            if ("string" == typeof e) {
                              if (
                                void 0 === t[e] ||
                                e.startsWith("_") ||
                                "constructor" === e
                              )
                                throw new TypeError(
                                  'No method named "'.concat(e, '"'),
                                );
                              t[e]();
                            }
                          } else t.to(e);
                        });
                      },
                    },
                  ],
                ),
                n
              );
            })(X);
          V.on(
            document,
            "click.bs.carousel.data-api",
            "[data-bs-slide], [data-bs-slide-to]",
            function (e) {
              var t = $.getElementFromSelector(this);
              if (t && t.classList.contains(de)) {
                e.preventDefault();
                var n = ge.getOrCreateInstance(t),
                  r = this.getAttribute("data-bs-slide-to");
                return r
                  ? (n.to(r), void n._maybeEnableCycle())
                  : "next" === K.getDataAttribute(this, "slide")
                  ? (n.next(), void n._maybeEnableCycle())
                  : (n.prev(), void n._maybeEnableCycle());
              }
            },
          ),
            V.on(window, "load.bs.carousel.data-api", function () {
              var e,
                t = $.find('[data-bs-ride="carousel"]'),
                n = f(t);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  ge.getOrCreateInstance(r);
                }
              } catch (o) {
                n.e(o);
              } finally {
                n.f();
              }
            }),
            S(ge);
          var ye = "show",
            be = "collapse",
            we = "collapsing",
            xe = '[data-bs-toggle="collapse"]',
            ke = { parent: null, toggle: !0 },
            Ae = { parent: "(null|element)", toggle: "boolean" },
            _e = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e, r) {
                var o;
                u(this, n),
                  ((o = t.call(this, e, r))._isTransitioning = !1),
                  (o._triggerArray = []);
                var i,
                  a = $.find(xe),
                  s = f(a);
                try {
                  for (s.s(); !(i = s.n()).done; ) {
                    var l = i.value,
                      c = $.getSelectorFromElement(l),
                      d = $.find(c).filter(function (e) {
                        return e === o._element;
                      });
                    null !== c && d.length && o._triggerArray.push(l);
                  }
                } catch (p) {
                  s.e(p);
                } finally {
                  s.f();
                }
                return (
                  o._initializeChildren(),
                  o._config.parent ||
                    o._addAriaAndCollapsedClass(o._triggerArray, o._isShown()),
                  o._config.toggle && o.toggle(),
                  o
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "toggle",
                      value: function () {
                        this._isShown() ? this.hide() : this.show();
                      },
                    },
                    {
                      key: "show",
                      value: function () {
                        var e = this;
                        if (!this._isTransitioning && !this._isShown()) {
                          var t = [];
                          if (
                            (this._config.parent &&
                              (t = this._getFirstLevelChildren(
                                ".collapse.show, .collapse.collapsing",
                              )
                                .filter(function (t) {
                                  return t !== e._element;
                                })
                                .map(function (e) {
                                  return n.getOrCreateInstance(e, {
                                    toggle: !1,
                                  });
                                })),
                            (!t.length || !t[0]._isTransitioning) &&
                              !V.trigger(this._element, "show.bs.collapse")
                                .defaultPrevented)
                          ) {
                            var r,
                              o = f(t);
                            try {
                              for (o.s(); !(r = o.n()).done; ) r.value.hide();
                            } catch (s) {
                              o.e(s);
                            } finally {
                              o.f();
                            }
                            var i = this._getDimension();
                            this._element.classList.remove(be),
                              this._element.classList.add(we),
                              (this._element.style[i] = 0),
                              this._addAriaAndCollapsedClass(
                                this._triggerArray,
                                !0,
                              ),
                              (this._isTransitioning = !0);
                            var a = "scroll".concat(
                              i[0].toUpperCase() + i.slice(1),
                            );
                            this._queueCallback(
                              function () {
                                (e._isTransitioning = !1),
                                  e._element.classList.remove(we),
                                  e._element.classList.add(be, ye),
                                  (e._element.style[i] = ""),
                                  V.trigger(e._element, "shown.bs.collapse");
                              },
                              this._element,
                              !0,
                            ),
                              (this._element.style[i] = "".concat(
                                this._element[a],
                                "px",
                              ));
                          }
                        }
                      },
                    },
                    {
                      key: "hide",
                      value: function () {
                        var e = this;
                        if (
                          !this._isTransitioning &&
                          this._isShown() &&
                          !V.trigger(this._element, "hide.bs.collapse")
                            .defaultPrevented
                        ) {
                          var t = this._getDimension();
                          (this._element.style[t] = "".concat(
                            this._element.getBoundingClientRect()[t],
                            "px",
                          )),
                            k(this._element),
                            this._element.classList.add(we),
                            this._element.classList.remove(be, ye);
                          var n,
                            r = f(this._triggerArray);
                          try {
                            for (r.s(); !(n = r.n()).done; ) {
                              var o = n.value,
                                i = $.getElementFromSelector(o);
                              i &&
                                !this._isShown(i) &&
                                this._addAriaAndCollapsedClass([o], !1);
                            }
                          } catch (a) {
                            r.e(a);
                          } finally {
                            r.f();
                          }
                          (this._isTransitioning = !0),
                            (this._element.style[t] = ""),
                            this._queueCallback(
                              function () {
                                (e._isTransitioning = !1),
                                  e._element.classList.remove(we),
                                  e._element.classList.add(be),
                                  V.trigger(e._element, "hidden.bs.collapse");
                              },
                              this._element,
                              !0,
                            );
                        }
                      },
                    },
                    {
                      key: "_isShown",
                      value: function () {
                        return (
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : this._element
                        ).classList.contains(ye);
                      },
                    },
                    {
                      key: "_configAfterMerge",
                      value: function (e) {
                        return (
                          (e.toggle = Boolean(e.toggle)),
                          (e.parent = g(e.parent)),
                          e
                        );
                      },
                    },
                    {
                      key: "_getDimension",
                      value: function () {
                        return this._element.classList.contains(
                          "collapse-horizontal",
                        )
                          ? "width"
                          : "height";
                      },
                    },
                    {
                      key: "_initializeChildren",
                      value: function () {
                        if (this._config.parent) {
                          var e,
                            t = this._getFirstLevelChildren(xe),
                            n = f(t);
                          try {
                            for (n.s(); !(e = n.n()).done; ) {
                              var r = e.value,
                                o = $.getElementFromSelector(r);
                              o &&
                                this._addAriaAndCollapsedClass(
                                  [r],
                                  this._isShown(o),
                                );
                            }
                          } catch (i) {
                            n.e(i);
                          } finally {
                            n.f();
                          }
                        }
                      },
                    },
                    {
                      key: "_getFirstLevelChildren",
                      value: function (e) {
                        var t = $.find(
                          ":scope .collapse .collapse",
                          this._config.parent,
                        );
                        return $.find(e, this._config.parent).filter(
                          function (e) {
                            return !t.includes(e);
                          },
                        );
                      },
                    },
                    {
                      key: "_addAriaAndCollapsedClass",
                      value: function (e, t) {
                        if (e.length) {
                          var n,
                            r = f(e);
                          try {
                            for (r.s(); !(n = r.n()).done; ) {
                              var o = n.value;
                              o.classList.toggle("collapsed", !t),
                                o.setAttribute("aria-expanded", t);
                            }
                          } catch (i) {
                            r.e(i);
                          } finally {
                            r.f();
                          }
                        }
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return ke;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return Ae;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "collapse";
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e) {
                        var t = {};
                        return (
                          "string" == typeof e &&
                            /show|hide/.test(e) &&
                            (t.toggle = !1),
                          this.each(function () {
                            var r = n.getOrCreateInstance(this, t);
                            if ("string" == typeof e) {
                              if (void 0 === r[e])
                                throw new TypeError(
                                  'No method named "'.concat(e, '"'),
                                );
                              r[e]();
                            }
                          })
                        );
                      },
                    },
                  ],
                ),
                n
              );
            })(X);
          V.on(document, "click.bs.collapse.data-api", xe, function (e) {
            ("A" === e.target.tagName ||
              (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
              e.preventDefault();
            var t,
              n = f($.getMultipleElementsFromSelector(this));
            try {
              for (n.s(); !(t = n.n()).done; ) {
                var r = t.value;
                _e.getOrCreateInstance(r, { toggle: !1 }).toggle();
              }
            } catch (o) {
              n.e(o);
            } finally {
              n.f();
            }
          }),
            S(_e);
          var Ee = "top",
            Se = "bottom",
            Ce = "right",
            je = "left",
            Ne = "auto",
            Te = [Ee, Se, Ce, je],
            Pe = "start",
            Oe = "end",
            Le = "clippingParents",
            Re = "viewport",
            De = "popper",
            Me = "reference",
            Ie = Te.reduce(function (e, t) {
              return e.concat([t + "-" + Pe, t + "-" + Oe]);
            }, []),
            Fe = [].concat(Te, [Ne]).reduce(function (e, t) {
              return e.concat([t, t + "-" + Pe, t + "-" + Oe]);
            }, []),
            Be = "beforeRead",
            ze = "read",
            Ue = "afterRead",
            We = "beforeMain",
            He = "main",
            Qe = "afterMain",
            Ve = "beforeWrite",
            qe = "write",
            Ye = "afterWrite",
            Ge = [Be, ze, Ue, We, He, Qe, Ve, qe, Ye];
          function Ke(e) {
            return e ? (e.nodeName || "").toLowerCase() : null;
          }
          function Je(e) {
            if (null == e) return window;
            if ("[object Window]" !== e.toString()) {
              var t = e.ownerDocument;
              return (t && t.defaultView) || window;
            }
            return e;
          }
          function Xe(e) {
            return e instanceof Je(e).Element || e instanceof Element;
          }
          function Ze(e) {
            return e instanceof Je(e).HTMLElement || e instanceof HTMLElement;
          }
          function $e(e) {
            return (
              "undefined" != typeof ShadowRoot &&
              (e instanceof Je(e).ShadowRoot || e instanceof ShadowRoot)
            );
          }
          var et = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
              var t = e.state;
              Object.keys(t.elements).forEach(function (e) {
                var n = t.styles[e] || {},
                  r = t.attributes[e] || {},
                  o = t.elements[e];
                Ze(o) &&
                  Ke(o) &&
                  (Object.assign(o.style, n),
                  Object.keys(r).forEach(function (e) {
                    var t = r[e];
                    !1 === t
                      ? o.removeAttribute(e)
                      : o.setAttribute(e, !0 === t ? "" : t);
                  }));
              });
            },
            effect: function (e) {
              var t = e.state,
                n = {
                  popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0",
                  },
                  arrow: { position: "absolute" },
                  reference: {},
                };
              return (
                Object.assign(t.elements.popper.style, n.popper),
                (t.styles = n),
                t.elements.arrow &&
                  Object.assign(t.elements.arrow.style, n.arrow),
                function () {
                  Object.keys(t.elements).forEach(function (e) {
                    var r = t.elements[e],
                      o = t.attributes[e] || {},
                      i = Object.keys(
                        t.styles.hasOwnProperty(e) ? t.styles[e] : n[e],
                      ).reduce(function (e, t) {
                        return (e[t] = ""), e;
                      }, {});
                    Ze(r) &&
                      Ke(r) &&
                      (Object.assign(r.style, i),
                      Object.keys(o).forEach(function (e) {
                        r.removeAttribute(e);
                      }));
                  });
                }
              );
            },
            requires: ["computeStyles"],
          };
          function tt(e) {
            return e.split("-")[0];
          }
          var nt = Math.max,
            rt = Math.min,
            ot = Math.round;
          function it() {
            var e = navigator.userAgentData;
            return null != e && e.brands && Array.isArray(e.brands)
              ? e.brands
                  .map(function (e) {
                    return e.brand + "/" + e.version;
                  })
                  .join(" ")
              : navigator.userAgent;
          }
          function at() {
            return !/^((?!chrome|android).)*safari/i.test(it());
          }
          function st(e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = !1);
            var r = e.getBoundingClientRect(),
              o = 1,
              i = 1;
            t &&
              Ze(e) &&
              ((o = (e.offsetWidth > 0 && ot(r.width) / e.offsetWidth) || 1),
              (i = (e.offsetHeight > 0 && ot(r.height) / e.offsetHeight) || 1));
            var a = (Xe(e) ? Je(e) : window).visualViewport,
              s = !at() && n,
              l = (r.left + (s && a ? a.offsetLeft : 0)) / o,
              u = (r.top + (s && a ? a.offsetTop : 0)) / i,
              c = r.width / o,
              f = r.height / i;
            return {
              width: c,
              height: f,
              top: u,
              right: l + c,
              bottom: u + f,
              left: l,
              x: l,
              y: u,
            };
          }
          function lt(e) {
            var t = st(e),
              n = e.offsetWidth,
              r = e.offsetHeight;
            return (
              Math.abs(t.width - n) <= 1 && (n = t.width),
              Math.abs(t.height - r) <= 1 && (r = t.height),
              { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
            );
          }
          function ut(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t)) return !0;
            if (n && $e(n)) {
              var r = t;
              do {
                if (r && e.isSameNode(r)) return !0;
                r = r.parentNode || r.host;
              } while (r);
            }
            return !1;
          }
          function ct(e) {
            return Je(e).getComputedStyle(e);
          }
          function ft(e) {
            return ["table", "td", "th"].indexOf(Ke(e)) >= 0;
          }
          function dt(e) {
            return ((Xe(e) ? e.ownerDocument : e.document) || window.document)
              .documentElement;
          }
          function pt(e) {
            return "html" === Ke(e)
              ? e
              : e.assignedSlot ||
                  e.parentNode ||
                  ($e(e) ? e.host : null) ||
                  dt(e);
          }
          function ht(e) {
            return Ze(e) && "fixed" !== ct(e).position ? e.offsetParent : null;
          }
          function mt(e) {
            for (
              var t = Je(e), n = ht(e);
              n && ft(n) && "static" === ct(n).position;

            )
              n = ht(n);
            return n &&
              ("html" === Ke(n) ||
                ("body" === Ke(n) && "static" === ct(n).position))
              ? t
              : n ||
                  (function (e) {
                    var t = /firefox/i.test(it());
                    if (
                      /Trident/i.test(it()) &&
                      Ze(e) &&
                      "fixed" === ct(e).position
                    )
                      return null;
                    var n = pt(e);
                    for (
                      $e(n) && (n = n.host);
                      Ze(n) && ["html", "body"].indexOf(Ke(n)) < 0;

                    ) {
                      var r = ct(n);
                      if (
                        "none" !== r.transform ||
                        "none" !== r.perspective ||
                        "paint" === r.contain ||
                        -1 !==
                          ["transform", "perspective"].indexOf(r.willChange) ||
                        (t && "filter" === r.willChange) ||
                        (t && r.filter && "none" !== r.filter)
                      )
                        return n;
                      n = n.parentNode;
                    }
                    return null;
                  })(e) ||
                  t;
          }
          function vt(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
          }
          function gt(e, t, n) {
            return nt(e, rt(t, n));
          }
          function yt(e) {
            return Object.assign(
              {},
              { top: 0, right: 0, bottom: 0, left: 0 },
              e,
            );
          }
          function bt(e, t) {
            return t.reduce(function (t, n) {
              return (t[n] = e), t;
            }, {});
          }
          var wt = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t,
                n = e.state,
                r = e.name,
                o = e.options,
                i = n.elements.arrow,
                a = n.modifiersData.popperOffsets,
                s = tt(n.placement),
                l = vt(s),
                u = [je, Ce].indexOf(s) >= 0 ? "height" : "width";
              if (i && a) {
                var c = (function (e, t) {
                    return yt(
                      "number" !=
                        typeof (e =
                          "function" == typeof e
                            ? e(
                                Object.assign({}, t.rects, {
                                  placement: t.placement,
                                }),
                              )
                            : e)
                        ? e
                        : bt(e, Te),
                    );
                  })(o.padding, n),
                  f = lt(i),
                  d = "y" === l ? Ee : je,
                  p = "y" === l ? Se : Ce,
                  h =
                    n.rects.reference[u] +
                    n.rects.reference[l] -
                    a[l] -
                    n.rects.popper[u],
                  m = a[l] - n.rects.reference[l],
                  v = mt(i),
                  g = v
                    ? "y" === l
                      ? v.clientHeight || 0
                      : v.clientWidth || 0
                    : 0,
                  y = h / 2 - m / 2,
                  b = c[d],
                  w = g - f[u] - c[p],
                  x = g / 2 - f[u] / 2 + y,
                  k = gt(b, x, w),
                  A = l;
                n.modifiersData[r] =
                  (((t = {})[A] = k), (t.centerOffset = k - x), t);
              }
            },
            effect: function (e) {
              var t = e.state,
                n = e.options.element,
                r = void 0 === n ? "[data-popper-arrow]" : n;
              null != r &&
                ("string" != typeof r ||
                  (r = t.elements.popper.querySelector(r))) &&
                ut(t.elements.popper, r) &&
                (t.elements.arrow = r);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
          };
          function xt(e) {
            return e.split("-")[1];
          }
          var kt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
          function At(e) {
            var t,
              n = e.popper,
              r = e.popperRect,
              o = e.placement,
              i = e.variation,
              a = e.offsets,
              s = e.position,
              l = e.gpuAcceleration,
              u = e.adaptive,
              c = e.roundOffsets,
              f = e.isFixed,
              d = a.x,
              p = void 0 === d ? 0 : d,
              h = a.y,
              m = void 0 === h ? 0 : h,
              v = "function" == typeof c ? c({ x: p, y: m }) : { x: p, y: m };
            (p = v.x), (m = v.y);
            var g = a.hasOwnProperty("x"),
              y = a.hasOwnProperty("y"),
              b = je,
              w = Ee,
              x = window;
            if (u) {
              var k = mt(n),
                A = "clientHeight",
                _ = "clientWidth";
              k === Je(n) &&
                "static" !== ct((k = dt(n))).position &&
                "absolute" === s &&
                ((A = "scrollHeight"), (_ = "scrollWidth")),
                (o === Ee || ((o === je || o === Ce) && i === Oe)) &&
                  ((w = Se),
                  (m -=
                    (f && k === x && x.visualViewport
                      ? x.visualViewport.height
                      : k[A]) - r.height),
                  (m *= l ? 1 : -1)),
                (o !== je && ((o !== Ee && o !== Se) || i !== Oe)) ||
                  ((b = Ce),
                  (p -=
                    (f && k === x && x.visualViewport
                      ? x.visualViewport.width
                      : k[_]) - r.width),
                  (p *= l ? 1 : -1));
            }
            var E,
              S = Object.assign({ position: s }, u && kt),
              C =
                !0 === c
                  ? (function (e, t) {
                      var n = e.x,
                        r = e.y,
                        o = t.devicePixelRatio || 1;
                      return { x: ot(n * o) / o || 0, y: ot(r * o) / o || 0 };
                    })({ x: p, y: m }, Je(n))
                  : { x: p, y: m };
            return (
              (p = C.x),
              (m = C.y),
              l
                ? Object.assign(
                    {},
                    S,
                    (((E = {})[w] = y ? "0" : ""),
                    (E[b] = g ? "0" : ""),
                    (E.transform =
                      (x.devicePixelRatio || 1) <= 1
                        ? "translate(" + p + "px, " + m + "px)"
                        : "translate3d(" + p + "px, " + m + "px, 0)"),
                    E),
                  )
                : Object.assign(
                    {},
                    S,
                    (((t = {})[w] = y ? m + "px" : ""),
                    (t[b] = g ? p + "px" : ""),
                    (t.transform = ""),
                    t),
                  )
            );
          }
          var _t = {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = n.gpuAcceleration,
                  o = void 0 === r || r,
                  i = n.adaptive,
                  a = void 0 === i || i,
                  s = n.roundOffsets,
                  l = void 0 === s || s,
                  u = {
                    placement: tt(t.placement),
                    variation: xt(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    At(
                      Object.assign({}, u, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: a,
                        roundOffsets: l,
                      }),
                    ),
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      At(
                        Object.assign({}, u, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: l,
                        }),
                      ),
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement },
                  ));
              },
              data: {},
            },
            Et = { passive: !0 },
            St = {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function () {},
              effect: function (e) {
                var t = e.state,
                  n = e.instance,
                  r = e.options,
                  o = r.scroll,
                  i = void 0 === o || o,
                  a = r.resize,
                  s = void 0 === a || a,
                  l = Je(t.elements.popper),
                  u = [].concat(
                    t.scrollParents.reference,
                    t.scrollParents.popper,
                  );
                return (
                  i &&
                    u.forEach(function (e) {
                      e.addEventListener("scroll", n.update, Et);
                    }),
                  s && l.addEventListener("resize", n.update, Et),
                  function () {
                    i &&
                      u.forEach(function (e) {
                        e.removeEventListener("scroll", n.update, Et);
                      }),
                      s && l.removeEventListener("resize", n.update, Et);
                  }
                );
              },
              data: {},
            },
            Ct = { left: "right", right: "left", bottom: "top", top: "bottom" };
          function jt(e) {
            return e.replace(/left|right|bottom|top/g, function (e) {
              return Ct[e];
            });
          }
          var Nt = { start: "end", end: "start" };
          function Tt(e) {
            return e.replace(/start|end/g, function (e) {
              return Nt[e];
            });
          }
          function Pt(e) {
            var t = Je(e);
            return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
          }
          function Ot(e) {
            return st(dt(e)).left + Pt(e).scrollLeft;
          }
          function Lt(e) {
            var t = ct(e),
              n = t.overflow,
              r = t.overflowX,
              o = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + o + r);
          }
          function Rt(e) {
            return ["html", "body", "#document"].indexOf(Ke(e)) >= 0
              ? e.ownerDocument.body
              : Ze(e) && Lt(e)
              ? e
              : Rt(pt(e));
          }
          function Dt(e, t) {
            var n;
            void 0 === t && (t = []);
            var r = Rt(e),
              o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
              i = Je(r),
              a = o ? [i].concat(i.visualViewport || [], Lt(r) ? r : []) : r,
              s = t.concat(a);
            return o ? s : s.concat(Dt(pt(a)));
          }
          function Mt(e) {
            return Object.assign({}, e, {
              left: e.x,
              top: e.y,
              right: e.x + e.width,
              bottom: e.y + e.height,
            });
          }
          function It(e, t, n) {
            return t === Re
              ? Mt(
                  (function (e, t) {
                    var n = Je(e),
                      r = dt(e),
                      o = n.visualViewport,
                      i = r.clientWidth,
                      a = r.clientHeight,
                      s = 0,
                      l = 0;
                    if (o) {
                      (i = o.width), (a = o.height);
                      var u = at();
                      (u || (!u && "fixed" === t)) &&
                        ((s = o.offsetLeft), (l = o.offsetTop));
                    }
                    return { width: i, height: a, x: s + Ot(e), y: l };
                  })(e, n),
                )
              : Xe(t)
              ? (function (e, t) {
                  var n = st(e, !1, "fixed" === t);
                  return (
                    (n.top = n.top + e.clientTop),
                    (n.left = n.left + e.clientLeft),
                    (n.bottom = n.top + e.clientHeight),
                    (n.right = n.left + e.clientWidth),
                    (n.width = e.clientWidth),
                    (n.height = e.clientHeight),
                    (n.x = n.left),
                    (n.y = n.top),
                    n
                  );
                })(t, n)
              : Mt(
                  (function (e) {
                    var t,
                      n = dt(e),
                      r = Pt(e),
                      o = null == (t = e.ownerDocument) ? void 0 : t.body,
                      i = nt(
                        n.scrollWidth,
                        n.clientWidth,
                        o ? o.scrollWidth : 0,
                        o ? o.clientWidth : 0,
                      ),
                      a = nt(
                        n.scrollHeight,
                        n.clientHeight,
                        o ? o.scrollHeight : 0,
                        o ? o.clientHeight : 0,
                      ),
                      s = -r.scrollLeft + Ot(e),
                      l = -r.scrollTop;
                    return (
                      "rtl" === ct(o || n).direction &&
                        (s += nt(n.clientWidth, o ? o.clientWidth : 0) - i),
                      { width: i, height: a, x: s, y: l }
                    );
                  })(dt(e)),
                );
          }
          function Ft(e) {
            var t,
              n = e.reference,
              r = e.element,
              o = e.placement,
              i = o ? tt(o) : null,
              a = o ? xt(o) : null,
              s = n.x + n.width / 2 - r.width / 2,
              l = n.y + n.height / 2 - r.height / 2;
            switch (i) {
              case Ee:
                t = { x: s, y: n.y - r.height };
                break;
              case Se:
                t = { x: s, y: n.y + n.height };
                break;
              case Ce:
                t = { x: n.x + n.width, y: l };
                break;
              case je:
                t = { x: n.x - r.width, y: l };
                break;
              default:
                t = { x: n.x, y: n.y };
            }
            var u = i ? vt(i) : null;
            if (null != u) {
              var c = "y" === u ? "height" : "width";
              switch (a) {
                case Pe:
                  t[u] = t[u] - (n[c] / 2 - r[c] / 2);
                  break;
                case Oe:
                  t[u] = t[u] + (n[c] / 2 - r[c] / 2);
              }
            }
            return t;
          }
          function Bt(e, t) {
            void 0 === t && (t = {});
            var n = t,
              r = n.placement,
              o = void 0 === r ? e.placement : r,
              i = n.strategy,
              a = void 0 === i ? e.strategy : i,
              s = n.boundary,
              l = void 0 === s ? Le : s,
              u = n.rootBoundary,
              c = void 0 === u ? Re : u,
              f = n.elementContext,
              d = void 0 === f ? De : f,
              p = n.altBoundary,
              h = void 0 !== p && p,
              m = n.padding,
              v = void 0 === m ? 0 : m,
              g = yt("number" != typeof v ? v : bt(v, Te)),
              y = d === De ? Me : De,
              b = e.rects.popper,
              w = e.elements[h ? y : d],
              x = (function (e, t, n, r) {
                var o =
                    "clippingParents" === t
                      ? (function (e) {
                          var t = Dt(pt(e)),
                            n =
                              ["absolute", "fixed"].indexOf(ct(e).position) >=
                                0 && Ze(e)
                                ? mt(e)
                                : e;
                          return Xe(n)
                            ? t.filter(function (e) {
                                return Xe(e) && ut(e, n) && "body" !== Ke(e);
                              })
                            : [];
                        })(e)
                      : [].concat(t),
                  i = [].concat(o, [n]),
                  a = i[0],
                  s = i.reduce(
                    function (t, n) {
                      var o = It(e, n, r);
                      return (
                        (t.top = nt(o.top, t.top)),
                        (t.right = rt(o.right, t.right)),
                        (t.bottom = rt(o.bottom, t.bottom)),
                        (t.left = nt(o.left, t.left)),
                        t
                      );
                    },
                    It(e, a, r),
                  );
                return (
                  (s.width = s.right - s.left),
                  (s.height = s.bottom - s.top),
                  (s.x = s.left),
                  (s.y = s.top),
                  s
                );
              })(
                Xe(w) ? w : w.contextElement || dt(e.elements.popper),
                l,
                c,
                a,
              ),
              k = st(e.elements.reference),
              A = Ft({
                reference: k,
                element: b,
                strategy: "absolute",
                placement: o,
              }),
              _ = Mt(Object.assign({}, b, A)),
              E = d === De ? _ : k,
              S = {
                top: x.top - E.top + g.top,
                bottom: E.bottom - x.bottom + g.bottom,
                left: x.left - E.left + g.left,
                right: E.right - x.right + g.right,
              },
              C = e.modifiersData.offset;
            if (d === De && C) {
              var j = C[o];
              Object.keys(S).forEach(function (e) {
                var t = [Ce, Se].indexOf(e) >= 0 ? 1 : -1,
                  n = [Ee, Se].indexOf(e) >= 0 ? "y" : "x";
                S[e] += j[n] * t;
              });
            }
            return S;
          }
          function zt(e, t) {
            void 0 === t && (t = {});
            var n = t,
              r = n.placement,
              o = n.boundary,
              i = n.rootBoundary,
              a = n.padding,
              s = n.flipVariations,
              l = n.allowedAutoPlacements,
              u = void 0 === l ? Fe : l,
              c = xt(r),
              f = c
                ? s
                  ? Ie
                  : Ie.filter(function (e) {
                      return xt(e) === c;
                    })
                : Te,
              d = f.filter(function (e) {
                return u.indexOf(e) >= 0;
              });
            0 === d.length && (d = f);
            var p = d.reduce(function (t, n) {
              return (
                (t[n] = Bt(e, {
                  placement: n,
                  boundary: o,
                  rootBoundary: i,
                  padding: a,
                })[tt(n)]),
                t
              );
            }, {});
            return Object.keys(p).sort(function (e, t) {
              return p[e] - p[t];
            });
          }
          var Ut = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                r = e.name;
              if (!t.modifiersData[r]._skip) {
                for (
                  var o = n.mainAxis,
                    i = void 0 === o || o,
                    a = n.altAxis,
                    s = void 0 === a || a,
                    l = n.fallbackPlacements,
                    u = n.padding,
                    c = n.boundary,
                    f = n.rootBoundary,
                    d = n.altBoundary,
                    p = n.flipVariations,
                    h = void 0 === p || p,
                    m = n.allowedAutoPlacements,
                    v = t.options.placement,
                    g = tt(v),
                    y =
                      l ||
                      (g !== v && h
                        ? (function (e) {
                            if (tt(e) === Ne) return [];
                            var t = jt(e);
                            return [Tt(e), t, Tt(t)];
                          })(v)
                        : [jt(v)]),
                    b = [v].concat(y).reduce(function (e, n) {
                      return e.concat(
                        tt(n) === Ne
                          ? zt(t, {
                              placement: n,
                              boundary: c,
                              rootBoundary: f,
                              padding: u,
                              flipVariations: h,
                              allowedAutoPlacements: m,
                            })
                          : n,
                      );
                    }, []),
                    w = t.rects.reference,
                    x = t.rects.popper,
                    k = new Map(),
                    A = !0,
                    _ = b[0],
                    E = 0;
                  E < b.length;
                  E++
                ) {
                  var S = b[E],
                    C = tt(S),
                    j = xt(S) === Pe,
                    N = [Ee, Se].indexOf(C) >= 0,
                    T = N ? "width" : "height",
                    P = Bt(t, {
                      placement: S,
                      boundary: c,
                      rootBoundary: f,
                      altBoundary: d,
                      padding: u,
                    }),
                    O = N ? (j ? Ce : je) : j ? Se : Ee;
                  w[T] > x[T] && (O = jt(O));
                  var L = jt(O),
                    R = [];
                  if (
                    (i && R.push(P[C] <= 0),
                    s && R.push(P[O] <= 0, P[L] <= 0),
                    R.every(function (e) {
                      return e;
                    }))
                  ) {
                    (_ = S), (A = !1);
                    break;
                  }
                  k.set(S, R);
                }
                if (A)
                  for (
                    var D = function (e) {
                        var t = b.find(function (t) {
                          var n = k.get(t);
                          if (n)
                            return n.slice(0, e).every(function (e) {
                              return e;
                            });
                        });
                        if (t) return (_ = t), "break";
                      },
                      M = h ? 3 : 1;
                    M > 0 && "break" !== D(M);
                    M--
                  );
                t.placement !== _ &&
                  ((t.modifiersData[r]._skip = !0),
                  (t.placement = _),
                  (t.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          };
          function Wt(e, t, n) {
            return (
              void 0 === n && (n = { x: 0, y: 0 }),
              {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x,
              }
            );
          }
          function Ht(e) {
            return [Ee, Ce, Se, je].some(function (t) {
              return e[t] >= 0;
            });
          }
          var Qt = {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  o = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  a = Bt(t, { elementContext: "reference" }),
                  s = Bt(t, { altBoundary: !0 }),
                  l = Wt(a, r),
                  u = Wt(s, o, i),
                  c = Ht(l),
                  f = Ht(u);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: u,
                  isReferenceHidden: c,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": c,
                      "data-popper-escaped": f,
                    },
                  ));
              },
            },
            Vt = {
              name: "offset",
              enabled: !0,
              phase: "main",
              requires: ["popperOffsets"],
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name,
                  o = n.offset,
                  i = void 0 === o ? [0, 0] : o,
                  a = Fe.reduce(function (e, n) {
                    return (
                      (e[n] = (function (e, t, n) {
                        var r = tt(e),
                          o = [je, Ee].indexOf(r) >= 0 ? -1 : 1,
                          i =
                            "function" == typeof n
                              ? n(Object.assign({}, t, { placement: e }))
                              : n,
                          a = i[0],
                          s = i[1];
                        return (
                          (a = a || 0),
                          (s = (s || 0) * o),
                          [je, Ce].indexOf(r) >= 0
                            ? { x: s, y: a }
                            : { x: a, y: s }
                        );
                      })(n, t.rects, i)),
                      e
                    );
                  }, {}),
                  s = a[t.placement],
                  l = s.x,
                  u = s.y;
                null != t.modifiersData.popperOffsets &&
                  ((t.modifiersData.popperOffsets.x += l),
                  (t.modifiersData.popperOffsets.y += u)),
                  (t.modifiersData[r] = a);
              },
            },
            qt = {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = Ft({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            Yt = {
              name: "preventOverflow",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name,
                  o = n.mainAxis,
                  i = void 0 === o || o,
                  a = n.altAxis,
                  s = void 0 !== a && a,
                  l = n.boundary,
                  u = n.rootBoundary,
                  c = n.altBoundary,
                  f = n.padding,
                  d = n.tether,
                  p = void 0 === d || d,
                  h = n.tetherOffset,
                  m = void 0 === h ? 0 : h,
                  v = Bt(t, {
                    boundary: l,
                    rootBoundary: u,
                    padding: f,
                    altBoundary: c,
                  }),
                  g = tt(t.placement),
                  y = xt(t.placement),
                  b = !y,
                  w = vt(g),
                  x = "x" === w ? "y" : "x",
                  k = t.modifiersData.popperOffsets,
                  A = t.rects.reference,
                  _ = t.rects.popper,
                  E =
                    "function" == typeof m
                      ? m(
                          Object.assign({}, t.rects, {
                            placement: t.placement,
                          }),
                        )
                      : m,
                  S =
                    "number" == typeof E
                      ? { mainAxis: E, altAxis: E }
                      : Object.assign({ mainAxis: 0, altAxis: 0 }, E),
                  C = t.modifiersData.offset
                    ? t.modifiersData.offset[t.placement]
                    : null,
                  j = { x: 0, y: 0 };
                if (k) {
                  if (i) {
                    var N,
                      T = "y" === w ? Ee : je,
                      P = "y" === w ? Se : Ce,
                      O = "y" === w ? "height" : "width",
                      L = k[w],
                      R = L + v[T],
                      D = L - v[P],
                      M = p ? -_[O] / 2 : 0,
                      I = y === Pe ? A[O] : _[O],
                      F = y === Pe ? -_[O] : -A[O],
                      B = t.elements.arrow,
                      z = p && B ? lt(B) : { width: 0, height: 0 },
                      U = t.modifiersData["arrow#persistent"]
                        ? t.modifiersData["arrow#persistent"].padding
                        : { top: 0, right: 0, bottom: 0, left: 0 },
                      W = U[T],
                      H = U[P],
                      Q = gt(0, A[O], z[O]),
                      V = b
                        ? A[O] / 2 - M - Q - W - S.mainAxis
                        : I - Q - W - S.mainAxis,
                      q = b
                        ? -A[O] / 2 + M + Q + H + S.mainAxis
                        : F + Q + H + S.mainAxis,
                      Y = t.elements.arrow && mt(t.elements.arrow),
                      G = Y
                        ? "y" === w
                          ? Y.clientTop || 0
                          : Y.clientLeft || 0
                        : 0,
                      K = null != (N = null == C ? void 0 : C[w]) ? N : 0,
                      J = L + q - K,
                      X = gt(p ? rt(R, L + V - K - G) : R, L, p ? nt(D, J) : D);
                    (k[w] = X), (j[w] = X - L);
                  }
                  if (s) {
                    var Z,
                      $ = "x" === w ? Ee : je,
                      ee = "x" === w ? Se : Ce,
                      te = k[x],
                      ne = "y" === x ? "height" : "width",
                      re = te + v[$],
                      oe = te - v[ee],
                      ie = -1 !== [Ee, je].indexOf(g),
                      ae = null != (Z = null == C ? void 0 : C[x]) ? Z : 0,
                      se = ie ? re : te - A[ne] - _[ne] - ae + S.altAxis,
                      le = ie ? te + A[ne] + _[ne] - ae - S.altAxis : oe,
                      ue =
                        p && ie
                          ? (function (e, t, n) {
                              var r = gt(e, t, n);
                              return r > n ? n : r;
                            })(se, te, le)
                          : gt(p ? se : re, te, p ? le : oe);
                    (k[x] = ue), (j[x] = ue - te);
                  }
                  t.modifiersData[r] = j;
                }
              },
              requiresIfExists: ["offset"],
            };
          function Gt(e, t, n) {
            void 0 === n && (n = !1);
            var r,
              o,
              i = Ze(t),
              a =
                Ze(t) &&
                (function (e) {
                  var t = e.getBoundingClientRect(),
                    n = ot(t.width) / e.offsetWidth || 1,
                    r = ot(t.height) / e.offsetHeight || 1;
                  return 1 !== n || 1 !== r;
                })(t),
              s = dt(t),
              l = st(e, a, n),
              u = { scrollLeft: 0, scrollTop: 0 },
              c = { x: 0, y: 0 };
            return (
              (i || (!i && !n)) &&
                (("body" !== Ke(t) || Lt(s)) &&
                  (u =
                    (r = t) !== Je(r) && Ze(r)
                      ? {
                          scrollLeft: (o = r).scrollLeft,
                          scrollTop: o.scrollTop,
                        }
                      : Pt(r)),
                Ze(t)
                  ? (((c = st(t, !0)).x += t.clientLeft), (c.y += t.clientTop))
                  : s && (c.x = Ot(s))),
              {
                x: l.left + u.scrollLeft - c.x,
                y: l.top + u.scrollTop - c.y,
                width: l.width,
                height: l.height,
              }
            );
          }
          function Kt(e) {
            var t = new Map(),
              n = new Set(),
              r = [];
            function o(e) {
              n.add(e.name),
                []
                  .concat(e.requires || [], e.requiresIfExists || [])
                  .forEach(function (e) {
                    if (!n.has(e)) {
                      var r = t.get(e);
                      r && o(r);
                    }
                  }),
                r.push(e);
            }
            return (
              e.forEach(function (e) {
                t.set(e.name, e);
              }),
              e.forEach(function (e) {
                n.has(e.name) || o(e);
              }),
              r
            );
          }
          var Jt = { placement: "bottom", modifiers: [], strategy: "absolute" };
          function Xt() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return !t.some(function (e) {
              return !(e && "function" == typeof e.getBoundingClientRect);
            });
          }
          function Zt(e) {
            void 0 === e && (e = {});
            var t = e,
              n = t.defaultModifiers,
              r = void 0 === n ? [] : n,
              o = t.defaultOptions,
              i = void 0 === o ? Jt : o;
            return function (e, t, n) {
              void 0 === n && (n = i);
              var o,
                a,
                s = {
                  placement: "bottom",
                  orderedModifiers: [],
                  options: Object.assign({}, Jt, i),
                  modifiersData: {},
                  elements: { reference: e, popper: t },
                  attributes: {},
                  styles: {},
                },
                l = [],
                u = !1,
                c = {
                  state: s,
                  setOptions: function (n) {
                    var o = "function" == typeof n ? n(s.options) : n;
                    f(),
                      (s.options = Object.assign({}, i, s.options, o)),
                      (s.scrollParents = {
                        reference: Xe(e)
                          ? Dt(e)
                          : e.contextElement
                          ? Dt(e.contextElement)
                          : [],
                        popper: Dt(t),
                      });
                    var a,
                      u,
                      d = (function (e) {
                        var t = Kt(e);
                        return Ge.reduce(function (e, n) {
                          return e.concat(
                            t.filter(function (e) {
                              return e.phase === n;
                            }),
                          );
                        }, []);
                      })(
                        ((a = [].concat(r, s.options.modifiers)),
                        (u = a.reduce(function (e, t) {
                          var n = e[t.name];
                          return (
                            (e[t.name] = n
                              ? Object.assign({}, n, t, {
                                  options: Object.assign(
                                    {},
                                    n.options,
                                    t.options,
                                  ),
                                  data: Object.assign({}, n.data, t.data),
                                })
                              : t),
                            e
                          );
                        }, {})),
                        Object.keys(u).map(function (e) {
                          return u[e];
                        })),
                      );
                    return (
                      (s.orderedModifiers = d.filter(function (e) {
                        return e.enabled;
                      })),
                      s.orderedModifiers.forEach(function (e) {
                        var t = e.name,
                          n = e.options,
                          r = void 0 === n ? {} : n,
                          o = e.effect;
                        if ("function" == typeof o) {
                          var i = o({
                            state: s,
                            name: t,
                            instance: c,
                            options: r,
                          });
                          l.push(i || function () {});
                        }
                      }),
                      c.update()
                    );
                  },
                  forceUpdate: function () {
                    if (!u) {
                      var e = s.elements,
                        t = e.reference,
                        n = e.popper;
                      if (Xt(t, n)) {
                        (s.rects = {
                          reference: Gt(
                            t,
                            mt(n),
                            "fixed" === s.options.strategy,
                          ),
                          popper: lt(n),
                        }),
                          (s.reset = !1),
                          (s.placement = s.options.placement),
                          s.orderedModifiers.forEach(function (e) {
                            return (s.modifiersData[e.name] = Object.assign(
                              {},
                              e.data,
                            ));
                          });
                        for (var r = 0; r < s.orderedModifiers.length; r++)
                          if (!0 !== s.reset) {
                            var o = s.orderedModifiers[r],
                              i = o.fn,
                              a = o.options,
                              l = void 0 === a ? {} : a,
                              f = o.name;
                            "function" == typeof i &&
                              (s =
                                i({
                                  state: s,
                                  options: l,
                                  name: f,
                                  instance: c,
                                }) || s);
                          } else (s.reset = !1), (r = -1);
                      }
                    }
                  },
                  update:
                    ((o = function () {
                      return new Promise(function (e) {
                        c.forceUpdate(), e(s);
                      });
                    }),
                    function () {
                      return (
                        a ||
                          (a = new Promise(function (e) {
                            Promise.resolve().then(function () {
                              (a = void 0), e(o());
                            });
                          })),
                        a
                      );
                    }),
                  destroy: function () {
                    f(), (u = !0);
                  },
                };
              if (!Xt(e, t)) return c;
              function f() {
                l.forEach(function (e) {
                  return e();
                }),
                  (l = []);
              }
              return (
                c.setOptions(n).then(function (e) {
                  !u && n.onFirstUpdate && n.onFirstUpdate(e);
                }),
                c
              );
            };
          }
          var $t = Zt(),
            en = Zt({ defaultModifiers: [St, qt, _t, et] }),
            tn = Zt({ defaultModifiers: [St, qt, _t, et, Vt, Ut, Yt, wt, Qt] }),
            nn = Object.freeze(
              Object.defineProperty(
                {
                  __proto__: null,
                  afterMain: Qe,
                  afterRead: Ue,
                  afterWrite: Ye,
                  applyStyles: et,
                  arrow: wt,
                  auto: Ne,
                  basePlacements: Te,
                  beforeMain: We,
                  beforeRead: Be,
                  beforeWrite: Ve,
                  bottom: Se,
                  clippingParents: Le,
                  computeStyles: _t,
                  createPopper: tn,
                  createPopperBase: $t,
                  createPopperLite: en,
                  detectOverflow: Bt,
                  end: Oe,
                  eventListeners: St,
                  flip: Ut,
                  hide: Qt,
                  left: je,
                  main: He,
                  modifierPhases: Ge,
                  offset: Vt,
                  placements: Fe,
                  popper: De,
                  popperGenerator: Zt,
                  popperOffsets: qt,
                  preventOverflow: Yt,
                  read: ze,
                  reference: Me,
                  right: Ce,
                  start: Pe,
                  top: Ee,
                  variationPlacements: Ie,
                  viewport: Re,
                  write: qe,
                },
                Symbol.toStringTag,
                { value: "Module" },
              ),
            ),
            rn = "dropdown",
            on = "ArrowUp",
            an = "ArrowDown",
            sn = "click.bs.dropdown.data-api",
            ln = "keydown.bs.dropdown.data-api",
            un = "show",
            cn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            fn = "".concat(cn, ".show"),
            dn = ".dropdown-menu",
            pn = E() ? "top-end" : "top-start",
            hn = E() ? "top-start" : "top-end",
            mn = E() ? "bottom-end" : "bottom-start",
            vn = E() ? "bottom-start" : "bottom-end",
            gn = E() ? "left-start" : "right-start",
            yn = E() ? "right-start" : "left-start",
            bn = {
              autoClose: !0,
              boundary: "clippingParents",
              display: "dynamic",
              offset: [0, 2],
              popperConfig: null,
              reference: "toggle",
            },
            wn = {
              autoClose: "(boolean|string)",
              boundary: "(string|element)",
              display: "string",
              offset: "(array|string|function)",
              popperConfig: "(null|object|function)",
              reference: "(string|element|object)",
            },
            xn = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e, r) {
                var o;
                return (
                  u(this, n),
                  ((o = t.call(this, e, r))._popper = null),
                  (o._parent = o._element.parentNode),
                  (o._menu =
                    $.next(o._element, dn)[0] ||
                    $.prev(o._element, dn)[0] ||
                    $.findOne(dn, o._parent)),
                  (o._inNavbar = o._detectNavbar()),
                  o
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "toggle",
                      value: function () {
                        return this._isShown() ? this.hide() : this.show();
                      },
                    },
                    {
                      key: "show",
                      value: function () {
                        if (!b(this._element) && !this._isShown()) {
                          var e = { relatedTarget: this._element };
                          if (
                            !V.trigger(this._element, "show.bs.dropdown", e)
                              .defaultPrevented
                          ) {
                            if (
                              (this._createPopper(),
                              "ontouchstart" in document.documentElement &&
                                !this._parent.closest(".navbar-nav"))
                            ) {
                              var t,
                                n,
                                r = f(
                                  (t = []).concat.apply(
                                    t,
                                    p(document.body.children),
                                  ),
                                );
                              try {
                                for (r.s(); !(n = r.n()).done; ) {
                                  var o = n.value;
                                  V.on(o, "mouseover", x);
                                }
                              } catch (i) {
                                r.e(i);
                              } finally {
                                r.f();
                              }
                            }
                            this._element.focus(),
                              this._element.setAttribute("aria-expanded", !0),
                              this._menu.classList.add(un),
                              this._element.classList.add(un),
                              V.trigger(this._element, "shown.bs.dropdown", e);
                          }
                        }
                      },
                    },
                    {
                      key: "hide",
                      value: function () {
                        if (!b(this._element) && this._isShown()) {
                          var e = { relatedTarget: this._element };
                          this._completeHide(e);
                        }
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        this._popper && this._popper.destroy(),
                          r(o(n.prototype), "dispose", this).call(this);
                      },
                    },
                    {
                      key: "update",
                      value: function () {
                        (this._inNavbar = this._detectNavbar()),
                          this._popper && this._popper.update();
                      },
                    },
                    {
                      key: "_completeHide",
                      value: function (e) {
                        if (
                          !V.trigger(this._element, "hide.bs.dropdown", e)
                            .defaultPrevented
                        ) {
                          if ("ontouchstart" in document.documentElement) {
                            var t,
                              n,
                              r = f(
                                (t = []).concat.apply(
                                  t,
                                  p(document.body.children),
                                ),
                              );
                            try {
                              for (r.s(); !(n = r.n()).done; ) {
                                var o = n.value;
                                V.off(o, "mouseover", x);
                              }
                            } catch (i) {
                              r.e(i);
                            } finally {
                              r.f();
                            }
                          }
                          this._popper && this._popper.destroy(),
                            this._menu.classList.remove(un),
                            this._element.classList.remove(un),
                            this._element.setAttribute(
                              "aria-expanded",
                              "false",
                            ),
                            K.removeDataAttribute(this._menu, "popper"),
                            V.trigger(this._element, "hidden.bs.dropdown", e);
                        }
                      },
                    },
                    {
                      key: "_getConfig",
                      value: function (e) {
                        if (
                          "object" ==
                            typeof (e = r(
                              o(n.prototype),
                              "_getConfig",
                              this,
                            ).call(this, e)).reference &&
                          !v(e.reference) &&
                          "function" != typeof e.reference.getBoundingClientRect
                        )
                          throw new TypeError(
                            "".concat(
                              rn.toUpperCase(),
                              ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.',
                            ),
                          );
                        return e;
                      },
                    },
                    {
                      key: "_createPopper",
                      value: function () {
                        if (void 0 === nn)
                          throw new TypeError(
                            "Bootstrap's dropdowns require Popper (https://popper.js.org)",
                          );
                        var e = this._element;
                        "parent" === this._config.reference
                          ? (e = this._parent)
                          : v(this._config.reference)
                          ? (e = g(this._config.reference))
                          : "object" == typeof this._config.reference &&
                            (e = this._config.reference);
                        var t = this._getPopperConfig();
                        this._popper = tn(e, this._menu, t);
                      },
                    },
                    {
                      key: "_isShown",
                      value: function () {
                        return this._menu.classList.contains(un);
                      },
                    },
                    {
                      key: "_getPlacement",
                      value: function () {
                        var e = this._parent;
                        if (e.classList.contains("dropend")) return gn;
                        if (e.classList.contains("dropstart")) return yn;
                        if (e.classList.contains("dropup-center")) return "top";
                        if (e.classList.contains("dropdown-center"))
                          return "bottom";
                        var t =
                          "end" ===
                          getComputedStyle(this._menu)
                            .getPropertyValue("--bs-position")
                            .trim();
                        return e.classList.contains("dropup")
                          ? t
                            ? hn
                            : pn
                          : t
                          ? vn
                          : mn;
                      },
                    },
                    {
                      key: "_detectNavbar",
                      value: function () {
                        return null !== this._element.closest(".navbar");
                      },
                    },
                    {
                      key: "_getOffset",
                      value: function () {
                        var e = this,
                          t = this._config.offset;
                        return "string" == typeof t
                          ? t.split(",").map(function (e) {
                              return Number.parseInt(e, 10);
                            })
                          : "function" == typeof t
                          ? function (n) {
                              return t(n, e._element);
                            }
                          : t;
                      },
                    },
                    {
                      key: "_getPopperConfig",
                      value: function () {
                        var e = {
                          placement: this._getPlacement(),
                          modifiers: [
                            {
                              name: "preventOverflow",
                              options: { boundary: this._config.boundary },
                            },
                            {
                              name: "offset",
                              options: { offset: this._getOffset() },
                            },
                          ],
                        };
                        return (
                          (this._inNavbar ||
                            "static" === this._config.display) &&
                            (K.setDataAttribute(this._menu, "popper", "static"),
                            (e.modifiers = [
                              { name: "applyStyles", enabled: !1 },
                            ])),
                          l(l({}, e), C(this._config.popperConfig, [e]))
                        );
                      },
                    },
                    {
                      key: "_selectMenuItem",
                      value: function (e) {
                        var t = e.key,
                          n = e.target,
                          r = $.find(
                            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                            this._menu,
                          ).filter(function (e) {
                            return y(e);
                          });
                        r.length && N(r, n, t === an, !r.includes(n)).focus();
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return bn;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return wn;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return rn;
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e) {
                        return this.each(function () {
                          var t = n.getOrCreateInstance(this, e);
                          if ("string" == typeof e) {
                            if (void 0 === t[e])
                              throw new TypeError(
                                'No method named "'.concat(e, '"'),
                              );
                            t[e]();
                          }
                        });
                      },
                    },
                    {
                      key: "clearMenus",
                      value: function (e) {
                        if (
                          2 !== e.button &&
                          ("keyup" !== e.type || "Tab" === e.key)
                        ) {
                          var t,
                            r = $.find(fn),
                            o = f(r);
                          try {
                            for (o.s(); !(t = o.n()).done; ) {
                              var i = t.value,
                                a = n.getInstance(i);
                              if (a && !1 !== a._config.autoClose) {
                                var s = e.composedPath(),
                                  l = s.includes(a._menu);
                                if (
                                  !(
                                    s.includes(a._element) ||
                                    ("inside" === a._config.autoClose && !l) ||
                                    ("outside" === a._config.autoClose && l)
                                  ) &&
                                  (!a._menu.contains(e.target) ||
                                    !(
                                      ("keyup" === e.type && "Tab" === e.key) ||
                                      /input|select|option|textarea|form/i.test(
                                        e.target.tagName,
                                      )
                                    ))
                                ) {
                                  var u = { relatedTarget: a._element };
                                  "click" === e.type && (u.clickEvent = e),
                                    a._completeHide(u);
                                }
                              }
                            }
                          } catch (c) {
                            o.e(c);
                          } finally {
                            o.f();
                          }
                        }
                      },
                    },
                    {
                      key: "dataApiKeydownHandler",
                      value: function (e) {
                        var t = /input|textarea/i.test(e.target.tagName),
                          r = "Escape" === e.key,
                          o = [on, an].includes(e.key);
                        if ((o || r) && (!t || r)) {
                          e.preventDefault();
                          var i = this.matches(cn)
                              ? this
                              : $.prev(this, cn)[0] ||
                                $.next(this, cn)[0] ||
                                $.findOne(cn, e.delegateTarget.parentNode),
                            a = n.getOrCreateInstance(i);
                          if (o)
                            return (
                              e.stopPropagation(),
                              a.show(),
                              void a._selectMenuItem(e)
                            );
                          a._isShown() &&
                            (e.stopPropagation(), a.hide(), i.focus());
                        }
                      },
                    },
                  ],
                ),
                n
              );
            })(X);
          V.on(document, ln, cn, xn.dataApiKeydownHandler),
            V.on(document, ln, dn, xn.dataApiKeydownHandler),
            V.on(document, sn, xn.clearMenus),
            V.on(document, "keyup.bs.dropdown.data-api", xn.clearMenus),
            V.on(document, sn, cn, function (e) {
              e.preventDefault(), xn.getOrCreateInstance(this).toggle();
            }),
            S(xn);
          var kn = "show",
            An = "mousedown.bs.backdrop",
            _n = {
              className: "modal-backdrop",
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: "body",
            },
            En = {
              className: "string",
              clickCallback: "(function|null)",
              isAnimated: "boolean",
              isVisible: "boolean",
              rootElement: "(element|string)",
            },
            Sn = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e) {
                var r;
                return (
                  u(this, n),
                  ((r = t.call(this))._config = r._getConfig(e)),
                  (r._isAppended = !1),
                  (r._element = null),
                  r
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "show",
                      value: function (e) {
                        if (this._config.isVisible) {
                          this._append();
                          var t = this._getElement();
                          this._config.isAnimated && k(t),
                            t.classList.add(kn),
                            this._emulateAnimation(function () {
                              C(e);
                            });
                        } else C(e);
                      },
                    },
                    {
                      key: "hide",
                      value: function (e) {
                        var t = this;
                        this._config.isVisible
                          ? (this._getElement().classList.remove(kn),
                            this._emulateAnimation(function () {
                              t.dispose(), C(e);
                            }))
                          : C(e);
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        this._isAppended &&
                          (V.off(this._element, An),
                          this._element.remove(),
                          (this._isAppended = !1));
                      },
                    },
                    {
                      key: "_getElement",
                      value: function () {
                        if (!this._element) {
                          var e = document.createElement("div");
                          (e.className = this._config.className),
                            this._config.isAnimated && e.classList.add("fade"),
                            (this._element = e);
                        }
                        return this._element;
                      },
                    },
                    {
                      key: "_configAfterMerge",
                      value: function (e) {
                        return (e.rootElement = g(e.rootElement)), e;
                      },
                    },
                    {
                      key: "_append",
                      value: function () {
                        var e = this;
                        if (!this._isAppended) {
                          var t = this._getElement();
                          this._config.rootElement.append(t),
                            V.on(t, An, function () {
                              C(e._config.clickCallback);
                            }),
                            (this._isAppended = !0);
                        }
                      },
                    },
                    {
                      key: "_emulateAnimation",
                      value: function (e) {
                        j(e, this._getElement(), this._config.isAnimated);
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return _n;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return En;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "backdrop";
                      },
                    },
                  ],
                ),
                n
              );
            })(J),
            Cn = ".bs.focustrap",
            jn = "backward",
            Nn = { autofocus: !0, trapElement: null },
            Tn = { autofocus: "boolean", trapElement: "element" },
            Pn = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e) {
                var r;
                return (
                  u(this, n),
                  ((r = t.call(this))._config = r._getConfig(e)),
                  (r._isActive = !1),
                  (r._lastTabNavDirection = null),
                  r
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "activate",
                      value: function () {
                        var e = this;
                        this._isActive ||
                          (this._config.autofocus &&
                            this._config.trapElement.focus(),
                          V.off(document, Cn),
                          V.on(document, "focusin.bs.focustrap", function (t) {
                            return e._handleFocusin(t);
                          }),
                          V.on(
                            document,
                            "keydown.tab.bs.focustrap",
                            function (t) {
                              return e._handleKeydown(t);
                            },
                          ),
                          (this._isActive = !0));
                      },
                    },
                    {
                      key: "deactivate",
                      value: function () {
                        this._isActive &&
                          ((this._isActive = !1), V.off(document, Cn));
                      },
                    },
                    {
                      key: "_handleFocusin",
                      value: function (e) {
                        var t = this._config.trapElement;
                        if (
                          e.target !== document &&
                          e.target !== t &&
                          !t.contains(e.target)
                        ) {
                          var n = $.focusableChildren(t);
                          0 === n.length
                            ? t.focus()
                            : this._lastTabNavDirection === jn
                            ? n[n.length - 1].focus()
                            : n[0].focus();
                        }
                      },
                    },
                    {
                      key: "_handleKeydown",
                      value: function (e) {
                        "Tab" === e.key &&
                          (this._lastTabNavDirection = e.shiftKey
                            ? jn
                            : "forward");
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return Nn;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return Tn;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "focustrap";
                      },
                    },
                  ],
                ),
                n
              );
            })(J),
            On = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            Ln = ".sticky-top",
            Rn = "padding-right",
            Dn = "margin-right",
            Mn = (function () {
              function e() {
                u(this, e), (this._element = document.body);
              }
              return (
                c(e, [
                  {
                    key: "getWidth",
                    value: function () {
                      var e = document.documentElement.clientWidth;
                      return Math.abs(window.innerWidth - e);
                    },
                  },
                  {
                    key: "hide",
                    value: function () {
                      var e = this.getWidth();
                      this._disableOverFlow(),
                        this._setElementAttributes(
                          this._element,
                          Rn,
                          function (t) {
                            return t + e;
                          },
                        ),
                        this._setElementAttributes(On, Rn, function (t) {
                          return t + e;
                        }),
                        this._setElementAttributes(Ln, Dn, function (t) {
                          return t - e;
                        });
                    },
                  },
                  {
                    key: "reset",
                    value: function () {
                      this._resetElementAttributes(this._element, "overflow"),
                        this._resetElementAttributes(this._element, Rn),
                        this._resetElementAttributes(On, Rn),
                        this._resetElementAttributes(Ln, Dn);
                    },
                  },
                  {
                    key: "isOverflowing",
                    value: function () {
                      return this.getWidth() > 0;
                    },
                  },
                  {
                    key: "_disableOverFlow",
                    value: function () {
                      this._saveInitialAttribute(this._element, "overflow"),
                        (this._element.style.overflow = "hidden");
                    },
                  },
                  {
                    key: "_setElementAttributes",
                    value: function (e, t, n) {
                      var r = this,
                        o = this.getWidth();
                      this._applyManipulationCallback(e, function (e) {
                        if (
                          !(
                            e !== r._element &&
                            window.innerWidth > e.clientWidth + o
                          )
                        ) {
                          r._saveInitialAttribute(e, t);
                          var i = window
                            .getComputedStyle(e)
                            .getPropertyValue(t);
                          e.style.setProperty(
                            t,
                            "".concat(n(Number.parseFloat(i)), "px"),
                          );
                        }
                      });
                    },
                  },
                  {
                    key: "_saveInitialAttribute",
                    value: function (e, t) {
                      var n = e.style.getPropertyValue(t);
                      n && K.setDataAttribute(e, t, n);
                    },
                  },
                  {
                    key: "_resetElementAttributes",
                    value: function (e, t) {
                      this._applyManipulationCallback(e, function (e) {
                        var n = K.getDataAttribute(e, t);
                        null !== n
                          ? (K.removeDataAttribute(e, t),
                            e.style.setProperty(t, n))
                          : e.style.removeProperty(t);
                      });
                    },
                  },
                  {
                    key: "_applyManipulationCallback",
                    value: function (e, t) {
                      if (v(e)) t(e);
                      else {
                        var n,
                          r = f($.find(e, this._element));
                        try {
                          for (r.s(); !(n = r.n()).done; ) t(n.value);
                        } catch (o) {
                          r.e(o);
                        } finally {
                          r.f();
                        }
                      }
                    },
                  },
                ]),
                e
              );
            })(),
            In = ".bs.modal",
            Fn = "hidden.bs.modal",
            Bn = "show.bs.modal",
            zn = "modal-open",
            Un = "show",
            Wn = "modal-static",
            Hn = { backdrop: !0, focus: !0, keyboard: !0 },
            Qn = {
              backdrop: "(boolean|string)",
              focus: "boolean",
              keyboard: "boolean",
            },
            Vn = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e, r) {
                var o;
                return (
                  u(this, n),
                  ((o = t.call(this, e, r))._dialog = $.findOne(
                    ".modal-dialog",
                    o._element,
                  )),
                  (o._backdrop = o._initializeBackDrop()),
                  (o._focustrap = o._initializeFocusTrap()),
                  (o._isShown = !1),
                  (o._isTransitioning = !1),
                  (o._scrollBar = new Mn()),
                  o._addEventListeners(),
                  o
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "toggle",
                      value: function (e) {
                        return this._isShown ? this.hide() : this.show(e);
                      },
                    },
                    {
                      key: "show",
                      value: function (e) {
                        var t = this;
                        this._isShown ||
                          this._isTransitioning ||
                          V.trigger(this._element, Bn, { relatedTarget: e })
                            .defaultPrevented ||
                          ((this._isShown = !0),
                          (this._isTransitioning = !0),
                          this._scrollBar.hide(),
                          document.body.classList.add(zn),
                          this._adjustDialog(),
                          this._backdrop.show(function () {
                            return t._showElement(e);
                          }));
                      },
                    },
                    {
                      key: "hide",
                      value: function () {
                        var e = this;
                        this._isShown &&
                          !this._isTransitioning &&
                          (V.trigger(this._element, "hide.bs.modal")
                            .defaultPrevented ||
                            ((this._isShown = !1),
                            (this._isTransitioning = !0),
                            this._focustrap.deactivate(),
                            this._element.classList.remove(Un),
                            this._queueCallback(
                              function () {
                                return e._hideModal();
                              },
                              this._element,
                              this._isAnimated(),
                            )));
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        V.off(window, In),
                          V.off(this._dialog, In),
                          this._backdrop.dispose(),
                          this._focustrap.deactivate(),
                          r(o(n.prototype), "dispose", this).call(this);
                      },
                    },
                    {
                      key: "handleUpdate",
                      value: function () {
                        this._adjustDialog();
                      },
                    },
                    {
                      key: "_initializeBackDrop",
                      value: function () {
                        return new Sn({
                          isVisible: Boolean(this._config.backdrop),
                          isAnimated: this._isAnimated(),
                        });
                      },
                    },
                    {
                      key: "_initializeFocusTrap",
                      value: function () {
                        return new Pn({ trapElement: this._element });
                      },
                    },
                    {
                      key: "_showElement",
                      value: function (e) {
                        var t = this;
                        document.body.contains(this._element) ||
                          document.body.append(this._element),
                          (this._element.style.display = "block"),
                          this._element.removeAttribute("aria-hidden"),
                          this._element.setAttribute("aria-modal", !0),
                          this._element.setAttribute("role", "dialog"),
                          (this._element.scrollTop = 0);
                        var n = $.findOne(".modal-body", this._dialog);
                        n && (n.scrollTop = 0),
                          k(this._element),
                          this._element.classList.add(Un),
                          this._queueCallback(
                            function () {
                              t._config.focus && t._focustrap.activate(),
                                (t._isTransitioning = !1),
                                V.trigger(t._element, "shown.bs.modal", {
                                  relatedTarget: e,
                                });
                            },
                            this._dialog,
                            this._isAnimated(),
                          );
                      },
                    },
                    {
                      key: "_addEventListeners",
                      value: function () {
                        var e = this;
                        V.on(
                          this._element,
                          "keydown.dismiss.bs.modal",
                          function (t) {
                            "Escape" === t.key &&
                              (e._config.keyboard
                                ? e.hide()
                                : e._triggerBackdropTransition());
                          },
                        ),
                          V.on(window, "resize.bs.modal", function () {
                            e._isShown &&
                              !e._isTransitioning &&
                              e._adjustDialog();
                          }),
                          V.on(
                            this._element,
                            "mousedown.dismiss.bs.modal",
                            function (t) {
                              V.one(
                                e._element,
                                "click.dismiss.bs.modal",
                                function (n) {
                                  e._element === t.target &&
                                    e._element === n.target &&
                                    ("static" !== e._config.backdrop
                                      ? e._config.backdrop && e.hide()
                                      : e._triggerBackdropTransition());
                                },
                              );
                            },
                          );
                      },
                    },
                    {
                      key: "_hideModal",
                      value: function () {
                        var e = this;
                        (this._element.style.display = "none"),
                          this._element.setAttribute("aria-hidden", !0),
                          this._element.removeAttribute("aria-modal"),
                          this._element.removeAttribute("role"),
                          (this._isTransitioning = !1),
                          this._backdrop.hide(function () {
                            document.body.classList.remove(zn),
                              e._resetAdjustments(),
                              e._scrollBar.reset(),
                              V.trigger(e._element, Fn);
                          });
                      },
                    },
                    {
                      key: "_isAnimated",
                      value: function () {
                        return this._element.classList.contains("fade");
                      },
                    },
                    {
                      key: "_triggerBackdropTransition",
                      value: function () {
                        var e = this;
                        if (
                          !V.trigger(this._element, "hidePrevented.bs.modal")
                            .defaultPrevented
                        ) {
                          var t =
                              this._element.scrollHeight >
                              document.documentElement.clientHeight,
                            n = this._element.style.overflowY;
                          "hidden" === n ||
                            this._element.classList.contains(Wn) ||
                            (t || (this._element.style.overflowY = "hidden"),
                            this._element.classList.add(Wn),
                            this._queueCallback(function () {
                              e._element.classList.remove(Wn),
                                e._queueCallback(function () {
                                  e._element.style.overflowY = n;
                                }, e._dialog);
                            }, this._dialog),
                            this._element.focus());
                        }
                      },
                    },
                    {
                      key: "_adjustDialog",
                      value: function () {
                        var e =
                            this._element.scrollHeight >
                            document.documentElement.clientHeight,
                          t = this._scrollBar.getWidth(),
                          n = t > 0;
                        if (n && !e) {
                          var r = E() ? "paddingLeft" : "paddingRight";
                          this._element.style[r] = "".concat(t, "px");
                        }
                        if (!n && e) {
                          var o = E() ? "paddingRight" : "paddingLeft";
                          this._element.style[o] = "".concat(t, "px");
                        }
                      },
                    },
                    {
                      key: "_resetAdjustments",
                      value: function () {
                        (this._element.style.paddingLeft = ""),
                          (this._element.style.paddingRight = "");
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return Hn;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return Qn;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "modal";
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e, t) {
                        return this.each(function () {
                          var r = n.getOrCreateInstance(this, e);
                          if ("string" == typeof e) {
                            if (void 0 === r[e])
                              throw new TypeError(
                                'No method named "'.concat(e, '"'),
                              );
                            r[e](t);
                          }
                        });
                      },
                    },
                  ],
                ),
                n
              );
            })(X);
          V.on(
            document,
            "click.bs.modal.data-api",
            '[data-bs-toggle="modal"]',
            function (e) {
              var t = this,
                n = $.getElementFromSelector(this);
              ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                V.one(n, Bn, function (e) {
                  e.defaultPrevented ||
                    V.one(n, Fn, function () {
                      y(t) && t.focus();
                    });
                });
              var r = $.findOne(".modal.show");
              r && Vn.getInstance(r).hide(),
                Vn.getOrCreateInstance(n).toggle(this);
            },
          ),
            ee(Vn),
            S(Vn);
          var qn = "show",
            Yn = "showing",
            Gn = "hiding",
            Kn = ".offcanvas.show",
            Jn = "hidePrevented.bs.offcanvas",
            Xn = "hidden.bs.offcanvas",
            Zn = { backdrop: !0, keyboard: !0, scroll: !1 },
            $n = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              scroll: "boolean",
            },
            er = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e, r) {
                var o;
                return (
                  u(this, n),
                  ((o = t.call(this, e, r))._isShown = !1),
                  (o._backdrop = o._initializeBackDrop()),
                  (o._focustrap = o._initializeFocusTrap()),
                  o._addEventListeners(),
                  o
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "toggle",
                      value: function (e) {
                        return this._isShown ? this.hide() : this.show(e);
                      },
                    },
                    {
                      key: "show",
                      value: function (e) {
                        var t = this;
                        this._isShown ||
                          V.trigger(this._element, "show.bs.offcanvas", {
                            relatedTarget: e,
                          }).defaultPrevented ||
                          ((this._isShown = !0),
                          this._backdrop.show(),
                          this._config.scroll || new Mn().hide(),
                          this._element.setAttribute("aria-modal", !0),
                          this._element.setAttribute("role", "dialog"),
                          this._element.classList.add(Yn),
                          this._queueCallback(
                            function () {
                              (t._config.scroll && !t._config.backdrop) ||
                                t._focustrap.activate(),
                                t._element.classList.add(qn),
                                t._element.classList.remove(Yn),
                                V.trigger(t._element, "shown.bs.offcanvas", {
                                  relatedTarget: e,
                                });
                            },
                            this._element,
                            !0,
                          ));
                      },
                    },
                    {
                      key: "hide",
                      value: function () {
                        var e = this;
                        this._isShown &&
                          (V.trigger(this._element, "hide.bs.offcanvas")
                            .defaultPrevented ||
                            (this._focustrap.deactivate(),
                            this._element.blur(),
                            (this._isShown = !1),
                            this._element.classList.add(Gn),
                            this._backdrop.hide(),
                            this._queueCallback(
                              function () {
                                e._element.classList.remove(qn, Gn),
                                  e._element.removeAttribute("aria-modal"),
                                  e._element.removeAttribute("role"),
                                  e._config.scroll || new Mn().reset(),
                                  V.trigger(e._element, Xn);
                              },
                              this._element,
                              !0,
                            )));
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        this._backdrop.dispose(),
                          this._focustrap.deactivate(),
                          r(o(n.prototype), "dispose", this).call(this);
                      },
                    },
                    {
                      key: "_initializeBackDrop",
                      value: function () {
                        var e = this,
                          t = Boolean(this._config.backdrop);
                        return new Sn({
                          className: "offcanvas-backdrop",
                          isVisible: t,
                          isAnimated: !0,
                          rootElement: this._element.parentNode,
                          clickCallback: t
                            ? function () {
                                "static" !== e._config.backdrop
                                  ? e.hide()
                                  : V.trigger(e._element, Jn);
                              }
                            : null,
                        });
                      },
                    },
                    {
                      key: "_initializeFocusTrap",
                      value: function () {
                        return new Pn({ trapElement: this._element });
                      },
                    },
                    {
                      key: "_addEventListeners",
                      value: function () {
                        var e = this;
                        V.on(
                          this._element,
                          "keydown.dismiss.bs.offcanvas",
                          function (t) {
                            "Escape" === t.key &&
                              (e._config.keyboard
                                ? e.hide()
                                : V.trigger(e._element, Jn));
                          },
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return Zn;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return $n;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "offcanvas";
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e) {
                        return this.each(function () {
                          var t = n.getOrCreateInstance(this, e);
                          if ("string" == typeof e) {
                            if (
                              void 0 === t[e] ||
                              e.startsWith("_") ||
                              "constructor" === e
                            )
                              throw new TypeError(
                                'No method named "'.concat(e, '"'),
                              );
                            t[e](this);
                          }
                        });
                      },
                    },
                  ],
                ),
                n
              );
            })(X);
          V.on(
            document,
            "click.bs.offcanvas.data-api",
            '[data-bs-toggle="offcanvas"]',
            function (e) {
              var t = this,
                n = $.getElementFromSelector(this);
              if (
                (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                !b(this))
              ) {
                V.one(n, Xn, function () {
                  y(t) && t.focus();
                });
                var r = $.findOne(Kn);
                r && r !== n && er.getInstance(r).hide(),
                  er.getOrCreateInstance(n).toggle(this);
              }
            },
          ),
            V.on(window, "load.bs.offcanvas.data-api", function () {
              var e,
                t = f($.find(Kn));
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var n = e.value;
                  er.getOrCreateInstance(n).show();
                }
              } catch (r) {
                t.e(r);
              } finally {
                t.f();
              }
            }),
            V.on(window, "resize.bs.offcanvas", function () {
              var e,
                t = f($.find("[aria-modal][class*=show][class*=offcanvas-]"));
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var n = e.value;
                  "fixed" !== getComputedStyle(n).position &&
                    er.getOrCreateInstance(n).hide();
                }
              } catch (r) {
                t.e(r);
              } finally {
                t.f();
              }
            }),
            ee(er),
            S(er);
          var tr = {
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
            nr = new Set([
              "background",
              "cite",
              "href",
              "itemtype",
              "longdesc",
              "poster",
              "src",
              "xlink:href",
            ]),
            rr = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            or = function (e, t) {
              var n = e.nodeName.toLowerCase();
              return t.includes(n)
                ? !nr.has(n) || Boolean(rr.test(e.nodeValue))
                : t
                    .filter(function (e) {
                      return e instanceof RegExp;
                    })
                    .some(function (e) {
                      return e.test(n);
                    });
            },
            ir = {
              allowList: tr,
              content: {},
              extraClass: "",
              html: !1,
              sanitize: !0,
              sanitizeFn: null,
              template: "<div></div>",
            },
            ar = {
              allowList: "object",
              content: "object",
              extraClass: "(string|function)",
              html: "boolean",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              template: "string",
            },
            sr = {
              entry: "(string|element|function|null)",
              selector: "(string|element)",
            },
            lr = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e) {
                var r;
                return (
                  u(this, n), ((r = t.call(this))._config = r._getConfig(e)), r
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "getContent",
                      value: function () {
                        var e = this;
                        return Object.values(this._config.content)
                          .map(function (t) {
                            return e._resolvePossibleFunction(t);
                          })
                          .filter(Boolean);
                      },
                    },
                    {
                      key: "hasContent",
                      value: function () {
                        return this.getContent().length > 0;
                      },
                    },
                    {
                      key: "changeContent",
                      value: function (e) {
                        return (
                          this._checkContent(e),
                          (this._config.content = l(
                            l({}, this._config.content),
                            e,
                          )),
                          this
                        );
                      },
                    },
                    {
                      key: "toHtml",
                      value: function () {
                        var e,
                          t = document.createElement("div");
                        t.innerHTML = this._maybeSanitize(
                          this._config.template,
                        );
                        for (
                          var n = 0, r = Object.entries(this._config.content);
                          n < r.length;
                          n++
                        ) {
                          var o = d(r[n], 2),
                            i = o[0],
                            a = o[1];
                          this._setContent(t, a, i);
                        }
                        var s = t.children[0],
                          l = this._resolvePossibleFunction(
                            this._config.extraClass,
                          );
                        return (
                          l && (e = s.classList).add.apply(e, p(l.split(" "))),
                          s
                        );
                      },
                    },
                    {
                      key: "_typeCheckConfig",
                      value: function (e) {
                        r(o(n.prototype), "_typeCheckConfig", this).call(
                          this,
                          e,
                        ),
                          this._checkContent(e.content);
                      },
                    },
                    {
                      key: "_checkContent",
                      value: function (e) {
                        for (
                          var t = 0, i = Object.entries(e);
                          t < i.length;
                          t++
                        ) {
                          var a = d(i[t], 2),
                            s = a[0],
                            l = a[1];
                          r(o(n.prototype), "_typeCheckConfig", this).call(
                            this,
                            { selector: s, entry: l },
                            sr,
                          );
                        }
                      },
                    },
                    {
                      key: "_setContent",
                      value: function (e, t, n) {
                        var r = $.findOne(n, e);
                        r &&
                          ((t = this._resolvePossibleFunction(t))
                            ? v(t)
                              ? this._putElementInTemplate(g(t), r)
                              : this._config.html
                              ? (r.innerHTML = this._maybeSanitize(t))
                              : (r.textContent = t)
                            : r.remove());
                      },
                    },
                    {
                      key: "_maybeSanitize",
                      value: function (e) {
                        return this._config.sanitize
                          ? (function (e, t, n) {
                              var r;
                              if (!e.length) return e;
                              if (n && "function" == typeof n) return n(e);
                              var o,
                                i = new window.DOMParser().parseFromString(
                                  e,
                                  "text/html",
                                ),
                                a = (r = []).concat.apply(
                                  r,
                                  p(i.body.querySelectorAll("*")),
                                ),
                                s = f(a);
                              try {
                                for (s.s(); !(o = s.n()).done; ) {
                                  var l,
                                    u = o.value,
                                    c = u.nodeName.toLowerCase();
                                  if (Object.keys(t).includes(c)) {
                                    var d,
                                      h = (l = []).concat.apply(
                                        l,
                                        p(u.attributes),
                                      ),
                                      m = [].concat(t["*"] || [], t[c] || []),
                                      v = f(h);
                                    try {
                                      for (v.s(); !(d = v.n()).done; ) {
                                        var g = d.value;
                                        or(g, m) ||
                                          u.removeAttribute(g.nodeName);
                                      }
                                    } catch (y) {
                                      v.e(y);
                                    } finally {
                                      v.f();
                                    }
                                  } else u.remove();
                                }
                              } catch (y) {
                                s.e(y);
                              } finally {
                                s.f();
                              }
                              return i.body.innerHTML;
                            })(
                              e,
                              this._config.allowList,
                              this._config.sanitizeFn,
                            )
                          : e;
                      },
                    },
                    {
                      key: "_resolvePossibleFunction",
                      value: function (e) {
                        return C(e, [this]);
                      },
                    },
                    {
                      key: "_putElementInTemplate",
                      value: function (e, t) {
                        if (this._config.html)
                          return (t.innerHTML = ""), void t.append(e);
                        t.textContent = e.textContent;
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return ir;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return ar;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "TemplateFactory";
                      },
                    },
                  ],
                ),
                n
              );
            })(J),
            ur = new Set(["sanitize", "allowList", "sanitizeFn"]),
            cr = "fade",
            fr = "show",
            dr = ".modal",
            pr = "hide.bs.modal",
            hr = "hover",
            mr = "focus",
            vr = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: E() ? "left" : "right",
              BOTTOM: "bottom",
              LEFT: E() ? "right" : "left",
            },
            gr = {
              allowList: tr,
              animation: !0,
              boundary: "clippingParents",
              container: !1,
              customClass: "",
              delay: 0,
              fallbackPlacements: ["top", "right", "bottom", "left"],
              html: !1,
              offset: [0, 6],
              placement: "top",
              popperConfig: null,
              sanitize: !0,
              sanitizeFn: null,
              selector: !1,
              template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
              title: "",
              trigger: "hover focus",
            },
            yr = {
              allowList: "object",
              animation: "boolean",
              boundary: "(string|element)",
              container: "(string|element|boolean)",
              customClass: "(string|function)",
              delay: "(number|object)",
              fallbackPlacements: "array",
              html: "boolean",
              offset: "(array|string|function)",
              placement: "(string|function)",
              popperConfig: "(null|object|function)",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              selector: "(string|boolean)",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
            },
            br = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e, r) {
                var o;
                if ((u(this, n), void 0 === nn))
                  throw new TypeError(
                    "Bootstrap's tooltips require Popper (https://popper.js.org)",
                  );
                return (
                  ((o = t.call(this, e, r))._isEnabled = !0),
                  (o._timeout = 0),
                  (o._isHovered = null),
                  (o._activeTrigger = {}),
                  (o._popper = null),
                  (o._templateFactory = null),
                  (o._newContent = null),
                  (o.tip = null),
                  o._setListeners(),
                  o._config.selector || o._fixTitle(),
                  o
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "enable",
                      value: function () {
                        this._isEnabled = !0;
                      },
                    },
                    {
                      key: "disable",
                      value: function () {
                        this._isEnabled = !1;
                      },
                    },
                    {
                      key: "toggleEnabled",
                      value: function () {
                        this._isEnabled = !this._isEnabled;
                      },
                    },
                    {
                      key: "toggle",
                      value: function () {
                        this._isEnabled &&
                          ((this._activeTrigger.click =
                            !this._activeTrigger.click),
                          this._isShown() ? this._leave() : this._enter());
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        clearTimeout(this._timeout),
                          V.off(
                            this._element.closest(dr),
                            pr,
                            this._hideModalHandler,
                          ),
                          this._element.getAttribute(
                            "data-bs-original-title",
                          ) &&
                            this._element.setAttribute(
                              "title",
                              this._element.getAttribute(
                                "data-bs-original-title",
                              ),
                            ),
                          this._disposePopper(),
                          r(o(n.prototype), "dispose", this).call(this);
                      },
                    },
                    {
                      key: "show",
                      value: function () {
                        var e = this;
                        if ("none" === this._element.style.display)
                          throw new Error(
                            "Please use show on visible elements",
                          );
                        if (this._isWithContent() && this._isEnabled) {
                          var t = V.trigger(
                              this._element,
                              this.constructor.eventName("show"),
                            ),
                            n = (
                              w(this._element) ||
                              this._element.ownerDocument.documentElement
                            ).contains(this._element);
                          if (!t.defaultPrevented && n) {
                            this._disposePopper();
                            var r = this._getTipElement();
                            this._element.setAttribute(
                              "aria-describedby",
                              r.getAttribute("id"),
                            );
                            var o = this._config.container;
                            if (
                              (this._element.ownerDocument.documentElement.contains(
                                this.tip,
                              ) ||
                                (o.append(r),
                                V.trigger(
                                  this._element,
                                  this.constructor.eventName("inserted"),
                                )),
                              (this._popper = this._createPopper(r)),
                              r.classList.add(fr),
                              "ontouchstart" in document.documentElement)
                            ) {
                              var i,
                                a,
                                s = f(
                                  (i = []).concat.apply(
                                    i,
                                    p(document.body.children),
                                  ),
                                );
                              try {
                                for (s.s(); !(a = s.n()).done; ) {
                                  var l = a.value;
                                  V.on(l, "mouseover", x);
                                }
                              } catch (u) {
                                s.e(u);
                              } finally {
                                s.f();
                              }
                            }
                            this._queueCallback(
                              function () {
                                V.trigger(
                                  e._element,
                                  e.constructor.eventName("shown"),
                                ),
                                  !1 === e._isHovered && e._leave(),
                                  (e._isHovered = !1);
                              },
                              this.tip,
                              this._isAnimated(),
                            );
                          }
                        }
                      },
                    },
                    {
                      key: "hide",
                      value: function () {
                        var e = this;
                        if (
                          this._isShown() &&
                          !V.trigger(
                            this._element,
                            this.constructor.eventName("hide"),
                          ).defaultPrevented
                        ) {
                          if (
                            (this._getTipElement().classList.remove(fr),
                            "ontouchstart" in document.documentElement)
                          ) {
                            var t,
                              n,
                              r = f(
                                (t = []).concat.apply(
                                  t,
                                  p(document.body.children),
                                ),
                              );
                            try {
                              for (r.s(); !(n = r.n()).done; ) {
                                var o = n.value;
                                V.off(o, "mouseover", x);
                              }
                            } catch (i) {
                              r.e(i);
                            } finally {
                              r.f();
                            }
                          }
                          (this._activeTrigger.click = !1),
                            (this._activeTrigger.focus = !1),
                            (this._activeTrigger.hover = !1),
                            (this._isHovered = null),
                            this._queueCallback(
                              function () {
                                e._isWithActiveTrigger() ||
                                  (e._isHovered || e._disposePopper(),
                                  e._element.removeAttribute(
                                    "aria-describedby",
                                  ),
                                  V.trigger(
                                    e._element,
                                    e.constructor.eventName("hidden"),
                                  ));
                              },
                              this.tip,
                              this._isAnimated(),
                            );
                        }
                      },
                    },
                    {
                      key: "update",
                      value: function () {
                        this._popper && this._popper.update();
                      },
                    },
                    {
                      key: "_isWithContent",
                      value: function () {
                        return Boolean(this._getTitle());
                      },
                    },
                    {
                      key: "_getTipElement",
                      value: function () {
                        return (
                          this.tip ||
                            (this.tip = this._createTipElement(
                              this._newContent || this._getContentForTemplate(),
                            )),
                          this.tip
                        );
                      },
                    },
                    {
                      key: "_createTipElement",
                      value: function (e) {
                        var t = this._getTemplateFactory(e).toHtml();
                        if (!t) return null;
                        t.classList.remove(cr, fr),
                          t.classList.add(
                            "bs-".concat(this.constructor.NAME, "-auto"),
                          );
                        var n = (function (e) {
                          do {
                            e += Math.floor(1e6 * Math.random());
                          } while (document.getElementById(e));
                          return e;
                        })(this.constructor.NAME).toString();
                        return (
                          t.setAttribute("id", n),
                          this._isAnimated() && t.classList.add(cr),
                          t
                        );
                      },
                    },
                    {
                      key: "setContent",
                      value: function (e) {
                        (this._newContent = e),
                          this._isShown() &&
                            (this._disposePopper(), this.show());
                      },
                    },
                    {
                      key: "_getTemplateFactory",
                      value: function (e) {
                        return (
                          this._templateFactory
                            ? this._templateFactory.changeContent(e)
                            : (this._templateFactory = new lr(
                                l(
                                  l({}, this._config),
                                  {},
                                  {
                                    content: e,
                                    extraClass: this._resolvePossibleFunction(
                                      this._config.customClass,
                                    ),
                                  },
                                ),
                              )),
                          this._templateFactory
                        );
                      },
                    },
                    {
                      key: "_getContentForTemplate",
                      value: function () {
                        return { ".tooltip-inner": this._getTitle() };
                      },
                    },
                    {
                      key: "_getTitle",
                      value: function () {
                        return (
                          this._resolvePossibleFunction(this._config.title) ||
                          this._element.getAttribute("data-bs-original-title")
                        );
                      },
                    },
                    {
                      key: "_initializeOnDelegatedTarget",
                      value: function (e) {
                        return this.constructor.getOrCreateInstance(
                          e.delegateTarget,
                          this._getDelegateConfig(),
                        );
                      },
                    },
                    {
                      key: "_isAnimated",
                      value: function () {
                        return (
                          this._config.animation ||
                          (this.tip && this.tip.classList.contains(cr))
                        );
                      },
                    },
                    {
                      key: "_isShown",
                      value: function () {
                        return this.tip && this.tip.classList.contains(fr);
                      },
                    },
                    {
                      key: "_createPopper",
                      value: function (e) {
                        var t = C(this._config.placement, [
                            this,
                            e,
                            this._element,
                          ]),
                          n = vr[t.toUpperCase()];
                        return tn(this._element, e, this._getPopperConfig(n));
                      },
                    },
                    {
                      key: "_getOffset",
                      value: function () {
                        var e = this,
                          t = this._config.offset;
                        return "string" == typeof t
                          ? t.split(",").map(function (e) {
                              return Number.parseInt(e, 10);
                            })
                          : "function" == typeof t
                          ? function (n) {
                              return t(n, e._element);
                            }
                          : t;
                      },
                    },
                    {
                      key: "_resolvePossibleFunction",
                      value: function (e) {
                        return C(e, [this._element]);
                      },
                    },
                    {
                      key: "_getPopperConfig",
                      value: function (e) {
                        var t = this,
                          n = {
                            placement: e,
                            modifiers: [
                              {
                                name: "flip",
                                options: {
                                  fallbackPlacements:
                                    this._config.fallbackPlacements,
                                },
                              },
                              {
                                name: "offset",
                                options: { offset: this._getOffset() },
                              },
                              {
                                name: "preventOverflow",
                                options: { boundary: this._config.boundary },
                              },
                              {
                                name: "arrow",
                                options: {
                                  element: ".".concat(
                                    this.constructor.NAME,
                                    "-arrow",
                                  ),
                                },
                              },
                              {
                                name: "preSetPlacement",
                                enabled: !0,
                                phase: "beforeMain",
                                fn: function (e) {
                                  t._getTipElement().setAttribute(
                                    "data-popper-placement",
                                    e.state.placement,
                                  );
                                },
                              },
                            ],
                          };
                        return l(l({}, n), C(this._config.popperConfig, [n]));
                      },
                    },
                    {
                      key: "_setListeners",
                      value: function () {
                        var e,
                          t = this,
                          n = this._config.trigger.split(" "),
                          r = f(n);
                        try {
                          for (r.s(); !(e = r.n()).done; ) {
                            var o = e.value;
                            if ("click" === o)
                              V.on(
                                this._element,
                                this.constructor.eventName("click"),
                                this._config.selector,
                                function (e) {
                                  t._initializeOnDelegatedTarget(e).toggle();
                                },
                              );
                            else if ("manual" !== o) {
                              var i =
                                  o === hr
                                    ? this.constructor.eventName("mouseenter")
                                    : this.constructor.eventName("focusin"),
                                a =
                                  o === hr
                                    ? this.constructor.eventName("mouseleave")
                                    : this.constructor.eventName("focusout");
                              V.on(
                                this._element,
                                i,
                                this._config.selector,
                                function (e) {
                                  var n = t._initializeOnDelegatedTarget(e);
                                  (n._activeTrigger[
                                    "focusin" === e.type ? mr : hr
                                  ] = !0),
                                    n._enter();
                                },
                              ),
                                V.on(
                                  this._element,
                                  a,
                                  this._config.selector,
                                  function (e) {
                                    var n = t._initializeOnDelegatedTarget(e);
                                    (n._activeTrigger[
                                      "focusout" === e.type ? mr : hr
                                    ] = n._element.contains(e.relatedTarget)),
                                      n._leave();
                                  },
                                );
                            }
                          }
                        } catch (s) {
                          r.e(s);
                        } finally {
                          r.f();
                        }
                        (this._hideModalHandler = function () {
                          t._element && t.hide();
                        }),
                          V.on(
                            this._element.closest(dr),
                            pr,
                            this._hideModalHandler,
                          );
                      },
                    },
                    {
                      key: "_fixTitle",
                      value: function () {
                        var e = this._element.getAttribute("title");
                        e &&
                          (this._element.getAttribute("aria-label") ||
                            this._element.textContent.trim() ||
                            this._element.setAttribute("aria-label", e),
                          this._element.setAttribute(
                            "data-bs-original-title",
                            e,
                          ),
                          this._element.removeAttribute("title"));
                      },
                    },
                    {
                      key: "_enter",
                      value: function () {
                        var e = this;
                        this._isShown() || this._isHovered
                          ? (this._isHovered = !0)
                          : ((this._isHovered = !0),
                            this._setTimeout(function () {
                              e._isHovered && e.show();
                            }, this._config.delay.show));
                      },
                    },
                    {
                      key: "_leave",
                      value: function () {
                        var e = this;
                        this._isWithActiveTrigger() ||
                          ((this._isHovered = !1),
                          this._setTimeout(function () {
                            e._isHovered || e.hide();
                          }, this._config.delay.hide));
                      },
                    },
                    {
                      key: "_setTimeout",
                      value: function (e, t) {
                        clearTimeout(this._timeout),
                          (this._timeout = setTimeout(e, t));
                      },
                    },
                    {
                      key: "_isWithActiveTrigger",
                      value: function () {
                        return Object.values(this._activeTrigger).includes(!0);
                      },
                    },
                    {
                      key: "_getConfig",
                      value: function (e) {
                        for (
                          var t = K.getDataAttributes(this._element),
                            n = 0,
                            r = Object.keys(t);
                          n < r.length;
                          n++
                        ) {
                          var o = r[n];
                          ur.has(o) && delete t[o];
                        }
                        return (
                          (e = l(l({}, t), "object" == typeof e && e ? e : {})),
                          (e = this._mergeConfigObj(e)),
                          (e = this._configAfterMerge(e)),
                          this._typeCheckConfig(e),
                          e
                        );
                      },
                    },
                    {
                      key: "_configAfterMerge",
                      value: function (e) {
                        return (
                          (e.container =
                            !1 === e.container
                              ? document.body
                              : g(e.container)),
                          "number" == typeof e.delay &&
                            (e.delay = { show: e.delay, hide: e.delay }),
                          "number" == typeof e.title &&
                            (e.title = e.title.toString()),
                          "number" == typeof e.content &&
                            (e.content = e.content.toString()),
                          e
                        );
                      },
                    },
                    {
                      key: "_getDelegateConfig",
                      value: function () {
                        for (
                          var e = {}, t = 0, n = Object.entries(this._config);
                          t < n.length;
                          t++
                        ) {
                          var r = d(n[t], 2),
                            o = r[0],
                            i = r[1];
                          this.constructor.Default[o] !== i && (e[o] = i);
                        }
                        return (e.selector = !1), (e.trigger = "manual"), e;
                      },
                    },
                    {
                      key: "_disposePopper",
                      value: function () {
                        this._popper &&
                          (this._popper.destroy(), (this._popper = null)),
                          this.tip && (this.tip.remove(), (this.tip = null));
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return gr;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return yr;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "tooltip";
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e) {
                        return this.each(function () {
                          var t = n.getOrCreateInstance(this, e);
                          if ("string" == typeof e) {
                            if (void 0 === t[e])
                              throw new TypeError(
                                'No method named "'.concat(e, '"'),
                              );
                            t[e]();
                          }
                        });
                      },
                    },
                  ],
                ),
                n
              );
            })(X);
          S(br);
          var wr = l(
              l({}, br.Default),
              {},
              {
                content: "",
                offset: [0, 8],
                placement: "right",
                template:
                  '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: "click",
              },
            ),
            xr = l(
              l({}, br.DefaultType),
              {},
              { content: "(null|string|element|function)" },
            ),
            kr = (function (e) {
              a(n, e);
              var t = s(n);
              function n() {
                return u(this, n), t.apply(this, arguments);
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "_isWithContent",
                      value: function () {
                        return this._getTitle() || this._getContent();
                      },
                    },
                    {
                      key: "_getContentForTemplate",
                      value: function () {
                        return {
                          ".popover-header": this._getTitle(),
                          ".popover-body": this._getContent(),
                        };
                      },
                    },
                    {
                      key: "_getContent",
                      value: function () {
                        return this._resolvePossibleFunction(
                          this._config.content,
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return wr;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return xr;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "popover";
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e) {
                        return this.each(function () {
                          var t = n.getOrCreateInstance(this, e);
                          if ("string" == typeof e) {
                            if (void 0 === t[e])
                              throw new TypeError(
                                'No method named "'.concat(e, '"'),
                              );
                            t[e]();
                          }
                        });
                      },
                    },
                  ],
                ),
                n
              );
            })(br);
          S(kr);
          var Ar = "click.bs.scrollspy",
            _r = "active",
            Er = "[href]",
            Sr = {
              offset: null,
              rootMargin: "0px 0px -25%",
              smoothScroll: !1,
              target: null,
              threshold: [0.1, 0.5, 1],
            },
            Cr = {
              offset: "(number|null)",
              rootMargin: "string",
              smoothScroll: "boolean",
              target: "element",
              threshold: "array",
            },
            jr = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e, r) {
                var o;
                return (
                  u(this, n),
                  ((o = t.call(this, e, r))._targetLinks = new Map()),
                  (o._observableSections = new Map()),
                  (o._rootElement =
                    "visible" === getComputedStyle(o._element).overflowY
                      ? null
                      : o._element),
                  (o._activeTarget = null),
                  (o._observer = null),
                  (o._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0,
                  }),
                  o.refresh(),
                  o
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "refresh",
                      value: function () {
                        this._initializeTargetsAndObservables(),
                          this._maybeEnableSmoothScroll(),
                          this._observer
                            ? this._observer.disconnect()
                            : (this._observer = this._getNewObserver());
                        var e,
                          t = f(this._observableSections.values());
                        try {
                          for (t.s(); !(e = t.n()).done; ) {
                            var n = e.value;
                            this._observer.observe(n);
                          }
                        } catch (r) {
                          t.e(r);
                        } finally {
                          t.f();
                        }
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        this._observer.disconnect(),
                          r(o(n.prototype), "dispose", this).call(this);
                      },
                    },
                    {
                      key: "_configAfterMerge",
                      value: function (e) {
                        return (
                          (e.target = g(e.target) || document.body),
                          (e.rootMargin = e.offset
                            ? "".concat(e.offset, "px 0px -30%")
                            : e.rootMargin),
                          "string" == typeof e.threshold &&
                            (e.threshold = e.threshold
                              .split(",")
                              .map(function (e) {
                                return Number.parseFloat(e);
                              })),
                          e
                        );
                      },
                    },
                    {
                      key: "_maybeEnableSmoothScroll",
                      value: function () {
                        var e = this;
                        this._config.smoothScroll &&
                          (V.off(this._config.target, Ar),
                          V.on(this._config.target, Ar, Er, function (t) {
                            var n = e._observableSections.get(t.target.hash);
                            if (n) {
                              t.preventDefault();
                              var r = e._rootElement || window,
                                o = n.offsetTop - e._element.offsetTop;
                              if (r.scrollTo)
                                return void r.scrollTo({
                                  top: o,
                                  behavior: "smooth",
                                });
                              r.scrollTop = o;
                            }
                          }));
                      },
                    },
                    {
                      key: "_getNewObserver",
                      value: function () {
                        var e = this,
                          t = {
                            root: this._rootElement,
                            threshold: this._config.threshold,
                            rootMargin: this._config.rootMargin,
                          };
                        return new IntersectionObserver(function (t) {
                          return e._observerCallback(t);
                        }, t);
                      },
                    },
                    {
                      key: "_observerCallback",
                      value: function (e) {
                        var t = this,
                          n = function (e) {
                            return t._targetLinks.get("#".concat(e.target.id));
                          },
                          r = function (e) {
                            (t._previousScrollData.visibleEntryTop =
                              e.target.offsetTop),
                              t._process(n(e));
                          },
                          o = (this._rootElement || document.documentElement)
                            .scrollTop,
                          i = o >= this._previousScrollData.parentScrollTop;
                        this._previousScrollData.parentScrollTop = o;
                        var a,
                          s = f(e);
                        try {
                          for (s.s(); !(a = s.n()).done; ) {
                            var l = a.value;
                            if (l.isIntersecting) {
                              var u =
                                l.target.offsetTop >=
                                this._previousScrollData.visibleEntryTop;
                              if (i && u) {
                                if ((r(l), !o)) return;
                              } else i || u || r(l);
                            } else
                              (this._activeTarget = null),
                                this._clearActiveClass(n(l));
                          }
                        } catch (c) {
                          s.e(c);
                        } finally {
                          s.f();
                        }
                      },
                    },
                    {
                      key: "_initializeTargetsAndObservables",
                      value: function () {
                        (this._targetLinks = new Map()),
                          (this._observableSections = new Map());
                        var e,
                          t = $.find(Er, this._config.target),
                          n = f(t);
                        try {
                          for (n.s(); !(e = n.n()).done; ) {
                            var r = e.value;
                            if (r.hash && !b(r)) {
                              var o = $.findOne(
                                decodeURI(r.hash),
                                this._element,
                              );
                              y(o) &&
                                (this._targetLinks.set(decodeURI(r.hash), r),
                                this._observableSections.set(r.hash, o));
                            }
                          }
                        } catch (i) {
                          n.e(i);
                        } finally {
                          n.f();
                        }
                      },
                    },
                    {
                      key: "_process",
                      value: function (e) {
                        this._activeTarget !== e &&
                          (this._clearActiveClass(this._config.target),
                          (this._activeTarget = e),
                          e.classList.add(_r),
                          this._activateParents(e),
                          V.trigger(this._element, "activate.bs.scrollspy", {
                            relatedTarget: e,
                          }));
                      },
                    },
                    {
                      key: "_activateParents",
                      value: function (e) {
                        if (e.classList.contains("dropdown-item"))
                          $.findOne(
                            ".dropdown-toggle",
                            e.closest(".dropdown"),
                          ).classList.add(_r);
                        else {
                          var t,
                            n = f($.parents(e, ".nav, .list-group"));
                          try {
                            for (n.s(); !(t = n.n()).done; ) {
                              var r,
                                o = t.value,
                                i = f(
                                  $.prev(
                                    o,
                                    ".nav-link, .nav-item > .nav-link, .list-group-item",
                                  ),
                                );
                              try {
                                for (i.s(); !(r = i.n()).done; )
                                  r.value.classList.add(_r);
                              } catch (a) {
                                i.e(a);
                              } finally {
                                i.f();
                              }
                            }
                          } catch (a) {
                            n.e(a);
                          } finally {
                            n.f();
                          }
                        }
                      },
                    },
                    {
                      key: "_clearActiveClass",
                      value: function (e) {
                        e.classList.remove(_r);
                        var t,
                          n = $.find("[href].active", e),
                          r = f(n);
                        try {
                          for (r.s(); !(t = r.n()).done; )
                            t.value.classList.remove(_r);
                        } catch (o) {
                          r.e(o);
                        } finally {
                          r.f();
                        }
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return Sr;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return Cr;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "scrollspy";
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e) {
                        return this.each(function () {
                          var t = n.getOrCreateInstance(this, e);
                          if ("string" == typeof e) {
                            if (
                              void 0 === t[e] ||
                              e.startsWith("_") ||
                              "constructor" === e
                            )
                              throw new TypeError(
                                'No method named "'.concat(e, '"'),
                              );
                            t[e]();
                          }
                        });
                      },
                    },
                  ],
                ),
                n
              );
            })(X);
          V.on(window, "load.bs.scrollspy.data-api", function () {
            var e,
              t = f($.find('[data-bs-spy="scroll"]'));
            try {
              for (t.s(); !(e = t.n()).done; ) {
                var n = e.value;
                jr.getOrCreateInstance(n);
              }
            } catch (r) {
              t.e(r);
            } finally {
              t.f();
            }
          }),
            S(jr);
          var Nr = "ArrowLeft",
            Tr = "ArrowRight",
            Pr = "ArrowUp",
            Or = "ArrowDown",
            Lr = "active",
            Rr = "fade",
            Dr = "show",
            Mr =
              '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            Ir =
              '.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), '.concat(
                Mr,
              ),
            Fr = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e) {
                var r;
                return (
                  u(this, n),
                  ((r = t.call(this, e))._parent = r._element.closest(
                    '.list-group, .nav, [role="tablist"]',
                  )),
                  r._parent &&
                    (r._setInitialAttributes(r._parent, r._getChildren()),
                    V.on(r._element, "keydown.bs.tab", function (e) {
                      return r._keydown(e);
                    })),
                  r
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "show",
                      value: function () {
                        var e = this._element;
                        if (!this._elemIsActive(e)) {
                          var t = this._getActiveElem(),
                            n = t
                              ? V.trigger(t, "hide.bs.tab", {
                                  relatedTarget: e,
                                })
                              : null;
                          V.trigger(e, "show.bs.tab", { relatedTarget: t })
                            .defaultPrevented ||
                            (n && n.defaultPrevented) ||
                            (this._deactivate(t, e), this._activate(e, t));
                        }
                      },
                    },
                    {
                      key: "_activate",
                      value: function (e, t) {
                        var n = this;
                        e &&
                          (e.classList.add(Lr),
                          this._activate($.getElementFromSelector(e)),
                          this._queueCallback(
                            function () {
                              "tab" === e.getAttribute("role")
                                ? (e.removeAttribute("tabindex"),
                                  e.setAttribute("aria-selected", !0),
                                  n._toggleDropDown(e, !0),
                                  V.trigger(e, "shown.bs.tab", {
                                    relatedTarget: t,
                                  }))
                                : e.classList.add(Dr);
                            },
                            e,
                            e.classList.contains(Rr),
                          ));
                      },
                    },
                    {
                      key: "_deactivate",
                      value: function (e, t) {
                        var n = this;
                        e &&
                          (e.classList.remove(Lr),
                          e.blur(),
                          this._deactivate($.getElementFromSelector(e)),
                          this._queueCallback(
                            function () {
                              "tab" === e.getAttribute("role")
                                ? (e.setAttribute("aria-selected", !1),
                                  e.setAttribute("tabindex", "-1"),
                                  n._toggleDropDown(e, !1),
                                  V.trigger(e, "hidden.bs.tab", {
                                    relatedTarget: t,
                                  }))
                                : e.classList.remove(Dr);
                            },
                            e,
                            e.classList.contains(Rr),
                          ));
                      },
                    },
                    {
                      key: "_keydown",
                      value: function (e) {
                        if ([Nr, Tr, Pr, Or].includes(e.key)) {
                          e.stopPropagation(), e.preventDefault();
                          var t = [Tr, Or].includes(e.key),
                            r = N(
                              this._getChildren().filter(function (e) {
                                return !b(e);
                              }),
                              e.target,
                              t,
                              !0,
                            );
                          r &&
                            (r.focus({ preventScroll: !0 }),
                            n.getOrCreateInstance(r).show());
                        }
                      },
                    },
                    {
                      key: "_getChildren",
                      value: function () {
                        return $.find(Ir, this._parent);
                      },
                    },
                    {
                      key: "_getActiveElem",
                      value: function () {
                        var e = this;
                        return (
                          this._getChildren().find(function (t) {
                            return e._elemIsActive(t);
                          }) || null
                        );
                      },
                    },
                    {
                      key: "_setInitialAttributes",
                      value: function (e, t) {
                        this._setAttributeIfNotExists(e, "role", "tablist");
                        var n,
                          r = f(t);
                        try {
                          for (r.s(); !(n = r.n()).done; ) {
                            var o = n.value;
                            this._setInitialAttributesOnChild(o);
                          }
                        } catch (i) {
                          r.e(i);
                        } finally {
                          r.f();
                        }
                      },
                    },
                    {
                      key: "_setInitialAttributesOnChild",
                      value: function (e) {
                        e = this._getInnerElement(e);
                        var t = this._elemIsActive(e),
                          n = this._getOuterElement(e);
                        e.setAttribute("aria-selected", t),
                          n !== e &&
                            this._setAttributeIfNotExists(
                              n,
                              "role",
                              "presentation",
                            ),
                          t || e.setAttribute("tabindex", "-1"),
                          this._setAttributeIfNotExists(e, "role", "tab"),
                          this._setInitialAttributesOnTargetPanel(e);
                      },
                    },
                    {
                      key: "_setInitialAttributesOnTargetPanel",
                      value: function (e) {
                        var t = $.getElementFromSelector(e);
                        t &&
                          (this._setAttributeIfNotExists(t, "role", "tabpanel"),
                          e.id &&
                            this._setAttributeIfNotExists(
                              t,
                              "aria-labelledby",
                              "".concat(e.id),
                            ));
                      },
                    },
                    {
                      key: "_toggleDropDown",
                      value: function (e, t) {
                        var n = this._getOuterElement(e);
                        if (n.classList.contains("dropdown")) {
                          var r = function (e, r) {
                            var o = $.findOne(e, n);
                            o && o.classList.toggle(r, t);
                          };
                          r(".dropdown-toggle", Lr),
                            r(".dropdown-menu", Dr),
                            n.setAttribute("aria-expanded", t);
                        }
                      },
                    },
                    {
                      key: "_setAttributeIfNotExists",
                      value: function (e, t, n) {
                        e.hasAttribute(t) || e.setAttribute(t, n);
                      },
                    },
                    {
                      key: "_elemIsActive",
                      value: function (e) {
                        return e.classList.contains(Lr);
                      },
                    },
                    {
                      key: "_getInnerElement",
                      value: function (e) {
                        return e.matches(Ir) ? e : $.findOne(Ir, e);
                      },
                    },
                    {
                      key: "_getOuterElement",
                      value: function (e) {
                        return e.closest(".nav-item, .list-group-item") || e;
                      },
                    },
                  ],
                  [
                    {
                      key: "NAME",
                      get: function () {
                        return "tab";
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e) {
                        return this.each(function () {
                          var t = n.getOrCreateInstance(this);
                          if ("string" == typeof e) {
                            if (
                              void 0 === t[e] ||
                              e.startsWith("_") ||
                              "constructor" === e
                            )
                              throw new TypeError(
                                'No method named "'.concat(e, '"'),
                              );
                            t[e]();
                          }
                        });
                      },
                    },
                  ],
                ),
                n
              );
            })(X);
          V.on(document, "click.bs.tab", Mr, function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              b(this) || Fr.getOrCreateInstance(this).show();
          }),
            V.on(window, "load.bs.tab", function () {
              var e,
                t = f(
                  $.find(
                    '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]',
                  ),
                );
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var n = e.value;
                  Fr.getOrCreateInstance(n);
                }
              } catch (r) {
                t.e(r);
              } finally {
                t.f();
              }
            }),
            S(Fr);
          var Br = "hide",
            zr = "show",
            Ur = "showing",
            Wr = { animation: "boolean", autohide: "boolean", delay: "number" },
            Hr = { animation: !0, autohide: !0, delay: 5e3 },
            Qr = (function (e) {
              a(n, e);
              var t = s(n);
              function n(e, r) {
                var o;
                return (
                  u(this, n),
                  ((o = t.call(this, e, r))._timeout = null),
                  (o._hasMouseInteraction = !1),
                  (o._hasKeyboardInteraction = !1),
                  o._setListeners(),
                  o
                );
              }
              return (
                c(
                  n,
                  [
                    {
                      key: "show",
                      value: function () {
                        var e = this;
                        V.trigger(this._element, "show.bs.toast")
                          .defaultPrevented ||
                          (this._clearTimeout(),
                          this._config.animation &&
                            this._element.classList.add("fade"),
                          this._element.classList.remove(Br),
                          k(this._element),
                          this._element.classList.add(zr, Ur),
                          this._queueCallback(
                            function () {
                              e._element.classList.remove(Ur),
                                V.trigger(e._element, "shown.bs.toast"),
                                e._maybeScheduleHide();
                            },
                            this._element,
                            this._config.animation,
                          ));
                      },
                    },
                    {
                      key: "hide",
                      value: function () {
                        var e = this;
                        this.isShown() &&
                          (V.trigger(this._element, "hide.bs.toast")
                            .defaultPrevented ||
                            (this._element.classList.add(Ur),
                            this._queueCallback(
                              function () {
                                e._element.classList.add(Br),
                                  e._element.classList.remove(Ur, zr),
                                  V.trigger(e._element, "hidden.bs.toast");
                              },
                              this._element,
                              this._config.animation,
                            )));
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        this._clearTimeout(),
                          this.isShown() && this._element.classList.remove(zr),
                          r(o(n.prototype), "dispose", this).call(this);
                      },
                    },
                    {
                      key: "isShown",
                      value: function () {
                        return this._element.classList.contains(zr);
                      },
                    },
                    {
                      key: "_maybeScheduleHide",
                      value: function () {
                        var e = this;
                        this._config.autohide &&
                          (this._hasMouseInteraction ||
                            this._hasKeyboardInteraction ||
                            (this._timeout = setTimeout(function () {
                              e.hide();
                            }, this._config.delay)));
                      },
                    },
                    {
                      key: "_onInteraction",
                      value: function (e, t) {
                        switch (e.type) {
                          case "mouseover":
                          case "mouseout":
                            this._hasMouseInteraction = t;
                            break;
                          case "focusin":
                          case "focusout":
                            this._hasKeyboardInteraction = t;
                        }
                        if (t) this._clearTimeout();
                        else {
                          var n = e.relatedTarget;
                          this._element === n ||
                            this._element.contains(n) ||
                            this._maybeScheduleHide();
                        }
                      },
                    },
                    {
                      key: "_setListeners",
                      value: function () {
                        var e = this;
                        V.on(this._element, "mouseover.bs.toast", function (t) {
                          return e._onInteraction(t, !0);
                        }),
                          V.on(
                            this._element,
                            "mouseout.bs.toast",
                            function (t) {
                              return e._onInteraction(t, !1);
                            },
                          ),
                          V.on(this._element, "focusin.bs.toast", function (t) {
                            return e._onInteraction(t, !0);
                          }),
                          V.on(
                            this._element,
                            "focusout.bs.toast",
                            function (t) {
                              return e._onInteraction(t, !1);
                            },
                          );
                      },
                    },
                    {
                      key: "_clearTimeout",
                      value: function () {
                        clearTimeout(this._timeout), (this._timeout = null);
                      },
                    },
                  ],
                  [
                    {
                      key: "Default",
                      get: function () {
                        return Hr;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return Wr;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return "toast";
                      },
                    },
                    {
                      key: "jQueryInterface",
                      value: function (e) {
                        return this.each(function () {
                          var t = n.getOrCreateInstance(this, e);
                          if ("string" == typeof e) {
                            if (void 0 === t[e])
                              throw new TypeError(
                                'No method named "'.concat(e, '"'),
                              );
                            t[e](this);
                          }
                        });
                      },
                    },
                  ],
                ),
                n
              );
            })(X);
          return (
            ee(Qr),
            S(Qr),
            {
              Alert: te,
              Button: re,
              Carousel: ge,
              Collapse: _e,
              Dropdown: xn,
              Modal: Vn,
              Offcanvas: er,
              Popover: kr,
              ScrollSpy: jr,
              Tab: Fr,
              Toast: Qr,
              Tooltip: br,
            }
          );
        })();
      },
      1694: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var i = typeof n;
                if ("string" === i || "number" === i) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var a = o.apply(null, n);
                    a && e.push(a);
                  }
                } else if ("object" === i) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes("[native code]")
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var s in n) r.call(n, s) && n[s] && e.push(s);
                }
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      4501: function (e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          o = n ? Symbol.for("react.portal") : 60106,
          i = n ? Symbol.for("react.fragment") : 60107,
          a = n ? Symbol.for("react.strict_mode") : 60108,
          s = n ? Symbol.for("react.profiler") : 60114,
          l = n ? Symbol.for("react.provider") : 60109,
          u = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          d = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          v = n ? Symbol.for("react.lazy") : 60116,
          g = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          w = n ? Symbol.for("react.scope") : 60119;
        function x(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case f:
                  case i:
                  case s:
                  case a:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case d:
                      case v:
                      case m:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function k(e) {
          return x(e) === f;
        }
        (t.isFragment = function (e) {
          return x(e) === i;
        }),
          (t.isMemo = function (e) {
            return x(e) === m;
          });
      },
      3873: function (e, t, n) {
        "use strict";
        e.exports = n(4501);
      },
      4463: function (e, t, n) {
        "use strict";
        var r = n(2791),
          o = n(5296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var a = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, o, i, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = a);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = v.hasOwnProperty(t) ? v[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          A = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          S = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          j = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function D(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          I = Object.assign;
        function F(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var B = !1;
        function z(e, t) {
          if (!e || B) return "";
          B = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var o = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  a = o.length - 1,
                  s = i.length - 1;
                1 <= a && 0 <= s && o[a] !== i[s];

              )
                s--;
              for (; 1 <= a && 0 <= s; a--, s--)
                if (o[a] !== i[s]) {
                  if (1 !== a || 1 !== s)
                    do {
                      if ((a--, 0 > --s || o[a] !== i[s])) {
                        var l = "\n" + o[a].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= a && 0 <= s);
                  break;
                }
            }
          } finally {
            (B = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case A:
              return "Fragment";
            case k:
              return "Portal";
            case E:
              return "Profiler";
            case _:
              return "StrictMode";
            case N:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case S:
                return (e._context.displayName || "Context") + ".Provider";
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return W(t);
            case 8:
              return t === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function Q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function J(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          X(e, t);
          var n = Q(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, Q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + Q(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: Q(n) };
        }
        function ie(e, t) {
          var n = Q(t.value),
            r = Q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ae(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
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
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = I(
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
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Ae = null,
          _e = null;
        function Ee(e) {
          if ((e = wo(e))) {
            if ("function" !== typeof ke) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = ko(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Se(e) {
          Ae ? (_e ? _e.push(e) : (_e = [e])) : (Ae = e);
        }
        function Ce() {
          if (Ae) {
            var e = Ae,
              t = _e;
            if (((_e = Ae = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function Ne() {}
        var Te = !1;
        function Pe(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return je(e, t, n);
          } finally {
            (Te = !1), (null !== Ae || null !== _e) && (Ne(), Ce());
          }
        }
        function Oe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ko(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            Le = !1;
          }
        function De(e, t, n, r, o, i, a, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Me = !1,
          Ie = null,
          Fe = !1,
          Be = null,
          ze = {
            onError: function (e) {
              (Me = !0), (Ie = e);
            },
          };
        function Ue(e, t, n, r, o, i, a, s, l) {
          (Me = !1), (Ie = null), De.apply(ze, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Qe(e) {
          if (We(e) !== e) throw Error(i(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return Qe(o), e;
                    if (a === r) return Qe(o), t;
                    a = a.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = o), (r = a);
                else {
                  for (var s = !1, l = o.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = o), (r = a);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = o), (n = a);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = a.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = a), (r = o);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = a), (n = o);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ye = o.unstable_scheduleCallback,
          Ge = o.unstable_cancelCallback,
          Ke = o.unstable_shouldYield,
          Je = o.unstable_requestPaint,
          Xe = o.unstable_now,
          Ze = o.unstable_getCurrentPriorityLevel,
          $e = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          it = null;
        var at = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            i = e.pingedLanes,
            a = 268435455 & n;
          if (0 !== a) {
            var s = a & ~o;
            0 !== s ? (r = ft(s)) : 0 !== (i &= a) && (r = ft(i));
          } else 0 !== (a = n & ~o) ? (r = ft(a)) : 0 !== i && (r = ft(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (i = t & -t) || (16 === o && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - at(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - at(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - at(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          At,
          _t,
          Et,
          St = !1,
          Ct = [],
          jt = null,
          Nt = null,
          Tt = null,
          Pt = new Map(),
          Ot = new Map(),
          Lt = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function Dt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              jt = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              Pt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, o, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function It(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      At(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Bt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function zt() {
          (St = !1),
            null !== jt && Ft(jt) && (jt = null),
            null !== Nt && Ft(Nt) && (Nt = null),
            null !== Tt && Ft(Tt) && (Tt = null),
            Pt.forEach(Bt),
            Ot.forEach(Bt);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            St ||
              ((St = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, zt)));
        }
        function Wt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Ct.length) {
            Ut(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && Ut(jt, e),
              null !== Nt && Ut(Nt, e),
              null !== Tt && Ut(Tt, e),
              Pt.forEach(t),
              Ot.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            It(n), null === n.blockedOn && Lt.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          Qt = !0;
        function Vt(e, t, n, r) {
          var o = bt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Yt(e, t, n, r);
          } finally {
            (bt = o), (Ht.transition = i);
          }
        }
        function qt(e, t, n, r) {
          var o = bt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Yt(e, t, n, r);
          } finally {
            (bt = o), (Ht.transition = i);
          }
        }
        function Yt(e, t, n, r) {
          if (Qt) {
            var o = Kt(e, t, n, r);
            if (null === o) Qr(e, t, r, Gt, n), Dt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (jt = Mt(jt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Nt = Mt(Nt, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Tt = Mt(Tt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var i = o.pointerId;
                    return Pt.set(i, Mt(Pt.get(i) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (i = o.pointerId),
                      Ot.set(i, Mt(Ot.get(i) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Dt(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== o; ) {
                var i = wo(o);
                if (
                  (null !== i && xt(i),
                  null === (i = Kt(e, t, n, r)) && Qr(e, t, r, Gt, n),
                  i === o)
                )
                  break;
                o = i;
              }
              null !== o && r.stopPropagation();
            } else Qr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Kt(e, t, n, r) {
          if (((Gt = null), null !== (e = bo((e = xe(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Jt(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Zt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Zt,
            r = n.length,
            o = "value" in Xt ? Xt.value : Xt.textContent,
            i = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
          return ($t = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, i) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          fn = I({}, un, { view: 0, detail: 0 }),
          dn = on(fn),
          pn = I({}, fn, {
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
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((an = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = an = 0),
                    (ln = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = on(pn),
          mn = on(I({}, pn, { dataTransfer: 0 })),
          vn = on(I({}, fn, { relatedTarget: 0 })),
          gn = on(
            I({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = I({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(yn),
          wn = on(I({}, un, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          An = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = An[e]) && !!t[e];
        }
        function En() {
          return _n;
        }
        var Sn = I({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = on(Sn),
          jn = on(
            I({}, pn, {
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
          ),
          Nn = on(
            I({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            }),
          ),
          Tn = on(
            I({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Pn = I({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          On = on(Pn),
          Ln = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          Dn = null;
        c && "documentMode" in document && (Dn = document.documentMode);
        var Mn = c && "TextEvent" in window && !Dn,
          In = c && (!Rn || (Dn && 8 < Dn && 11 >= Dn)),
          Fn = String.fromCharCode(32),
          Bn = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
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
        function Qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          Se(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Yn = null;
        function Gn(e) {
          Fr(e, 0);
        }
        function Kn(e) {
          if (Y(xo(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Zn;
          if (c) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Zn = $n;
          } else Zn = !1;
          Xn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), (Yn = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Kn(Yn)) {
            var t = [];
            Vn(t, Yn, e, xe(e)), Pe(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Yn = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(Yn);
        }
        function ir(e, t) {
          if ("click" === e) return Kn(t);
        }
        function ar(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!f.call(t, o) || !sr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  i = Math.min(r.start, o);
                (r = void 0 === r.end ? i : Math.min(r.end, o)),
                  !e.extend && i > r && ((o = r), (r = i), (i = o)),
                  (o = cr(n, i));
                var a = cr(n, r);
                o &&
                  a &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== a.node ||
                    e.focusOffset !== a.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(a.node, a.offset))
                    : (t.setEnd(a.node, a.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== G(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && lr(yr, r)) ||
              ((yr = r),
              0 < (r = qr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Ar = {},
          _r = {};
        function Er(e) {
          if (Ar[e]) return Ar[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (Ar[e] = n[t]);
          return e;
        }
        c &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Sr = Er("animationend"),
          Cr = Er("animationiteration"),
          jr = Er("animationstart"),
          Nr = Er("transitionend"),
          Tr = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Or(e, t) {
          Tr.set(e, t), l(t, [e]);
        }
        for (var Lr = 0; Lr < Pr.length; Lr++) {
          var Rr = Pr[Lr];
          Or(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Or(Sr, "onAnimationEnd"),
          Or(Cr, "onAnimationIteration"),
          Or(jr, "onAnimationStart"),
          Or("dblclick", "onDoubleClick"),
          Or("focusin", "onFocus"),
          Or("focusout", "onBlur"),
          Or(Nr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var Dr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Dr),
          );
        function Ir(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, a, s, l, u) {
              if ((Ue.apply(this, arguments), Me)) {
                if (!Me) throw Error(i(198));
                var c = Ie;
                (Me = !1), (Ie = null), Fe || ((Fe = !0), (Be = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var s = r[a],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== i && o.isPropagationStopped()))
                    break e;
                  Ir(o, s, u), (i = l);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((l = (s = r[a]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== i && o.isPropagationStopped())
                  )
                    break e;
                  Ir(o, s, u), (i = l);
                }
            }
          }
          if (Fe) throw ((e = Be), (Fe = !1), (Be = null), e);
        }
        function Br(e, t) {
          var n = t[vo];
          void 0 === n && (n = t[vo] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              a.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || zr(t, !1, e), zr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), zr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var o = Vt;
              break;
            case 4:
              o = qt;
              break;
            default:
              o = Yt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Qr(e, t, n, r, o) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var s = r.stateNode.containerInfo;
                if (s === o || (8 === s.nodeType && s.parentNode === o)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var l = a.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = a.stateNode.containerInfo) === o ||
                        (8 === l.nodeType && l.parentNode === o))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== s; ) {
                  if (null === (a = bo(s))) return;
                  if (5 === (l = a.tag) || 6 === l) {
                    r = i = a;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = i,
              o = xe(n),
              a = [];
            e: {
              var s = Tr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Cn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = vn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = Nn;
                    break;
                  case Sr:
                  case Cr:
                  case jr:
                    l = gn;
                    break;
                  case Nr:
                    l = Tn;
                    break;
                  case "scroll":
                    l = dn;
                    break;
                  case "wheel":
                    l = On;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = jn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Oe(h, d)) &&
                        c.push(Vr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, o)),
                  a.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!bo(u) && !u[mo])) &&
                  (l || s) &&
                  ((s =
                    o.window === o
                      ? o
                      : (s = o.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? bo(u)
                          : null) &&
                        (u !== (f = We(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = jn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == l ? s : xo(l)),
                  (p = null == u ? s : xo(u)),
                  ((s = new c(m, h + "leave", l, n, o)).target = f),
                  (s.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(d, h + "enter", u, n, o)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  l && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = l; p; p = Yr(p)) h++;
                    for (p = 0, m = d; m; m = Yr(m)) p++;
                    for (; 0 < h - p; ) (c = Yr(c)), h--;
                    for (; 0 < p - h; ) (d = Yr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Yr(c)), (d = Yr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Gr(a, s, l, c, !1),
                  null !== u && null !== f && Gr(a, f, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? xo(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var v = Jn;
              else if (Qn(s))
                if (Xn) v = ar;
                else {
                  v = or;
                  var g = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (v = ir);
              switch (
                (v && (v = v(e, r))
                  ? Vn(a, v, n, o)
                  : (g && g(e, s, r),
                    "focusout" === e &&
                      (g = s._wrapperState) &&
                      g.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (g = r ? xo(r) : window),
                e)
              ) {
                case "focusin":
                  (Qn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(a, n, o);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(a, n, o);
              }
              var y;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? zn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (In &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Wn && (y = en())
                    : ((Zt = "value" in (Xt = o) ? Xt.value : Xt.textContent),
                      (Wn = !0))),
                0 < (g = qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  a.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!Rn && zn(e, t))
                          ? ((e = en()), ($t = Zt = Xt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return In && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  a.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            Fr(a, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              i = o.stateNode;
            5 === o.tag &&
              null !== i &&
              ((o = i),
              null != (i = Oe(e, n)) && r.unshift(Vr(e, i, o)),
              null != (i = Oe(e, t)) && r.push(Vr(e, i, o))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, o) {
          for (var i = t._reactName, a = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              o
                ? null != (l = Oe(n, i)) && a.unshift(Vr(n, l, s))
                : o || (null != (l = Oe(n, i)) && a.push(Vr(n, l, s)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        var Kr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Kr, "\n")
            .replace(Jr, "");
        }
        function Zr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(i(425));
        }
        function $r() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" === typeof setTimeout ? setTimeout : void 0,
          oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
          io = "function" === typeof Promise ? Promise : void 0,
          ao =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof io
              ? function (e) {
                  return io.resolve(null).then(e).catch(so);
                }
              : ro;
        function so(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Wt(t);
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + fo,
          ho = "__reactProps$" + fo,
          mo = "__reactContainer$" + fo,
          vo = "__reactEvents$" + fo,
          go = "__reactListeners$" + fo,
          yo = "__reactHandles$" + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[po] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function ko(e) {
          return e[ho] || null;
        }
        var Ao = [],
          _o = -1;
        function Eo(e) {
          return { current: e };
        }
        function So(e) {
          0 > _o || ((e.current = Ao[_o]), (Ao[_o] = null), _o--);
        }
        function Co(e, t) {
          _o++, (Ao[_o] = e.current), (e.current = t);
        }
        var jo = {},
          No = Eo(jo),
          To = Eo(!1),
          Po = jo;
        function Oo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return jo;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in n) i[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Lo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ro() {
          So(To), So(No);
        }
        function Do(e, t, n) {
          if (No.current !== jo) throw Error(i(168));
          Co(No, t), Co(To, n);
        }
        function Mo(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(i(108, H(e) || "Unknown", o));
          return I({}, n, r);
        }
        function Io(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              jo),
            (Po = No.current),
            Co(No, e),
            Co(To, To.current),
            !0
          );
        }
        function Fo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Mo(e, t, Po)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              So(To),
              So(No),
              Co(No, e))
            : So(To),
            Co(To, n);
        }
        var Bo = null,
          zo = !1,
          Uo = !1;
        function Wo(e) {
          null === Bo ? (Bo = [e]) : Bo.push(e);
        }
        function Ho() {
          if (!Uo && null !== Bo) {
            Uo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Bo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Bo = null), (zo = !1);
            } catch (o) {
              throw (null !== Bo && (Bo = Bo.slice(e + 1)), Ye($e, Ho), o);
            } finally {
              (bt = t), (Uo = !1);
            }
          }
          return null;
        }
        var Qo = [],
          Vo = 0,
          qo = null,
          Yo = 0,
          Go = [],
          Ko = 0,
          Jo = null,
          Xo = 1,
          Zo = "";
        function $o(e, t) {
          (Qo[Vo++] = Yo), (Qo[Vo++] = qo), (qo = e), (Yo = t);
        }
        function ei(e, t, n) {
          (Go[Ko++] = Xo), (Go[Ko++] = Zo), (Go[Ko++] = Jo), (Jo = e);
          var r = Xo;
          e = Zo;
          var o = 32 - at(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var i = 32 - at(t) + o;
          if (30 < i) {
            var a = o - (o % 5);
            (i = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (o -= a),
              (Xo = (1 << (32 - at(t) + o)) | (n << o) | r),
              (Zo = i + e);
          } else (Xo = (1 << i) | (n << o) | r), (Zo = e);
        }
        function ti(e) {
          null !== e.return && ($o(e, 1), ei(e, 1, 0));
        }
        function ni(e) {
          for (; e === qo; )
            (qo = Qo[--Vo]), (Qo[Vo] = null), (Yo = Qo[--Vo]), (Qo[Vo] = null);
          for (; e === Jo; )
            (Jo = Go[--Ko]),
              (Go[Ko] = null),
              (Zo = Go[--Ko]),
              (Go[Ko] = null),
              (Xo = Go[--Ko]),
              (Go[Ko] = null);
        }
        var ri = null,
          oi = null,
          ii = !1,
          ai = null;
        function si(e, t) {
          var n = Ou(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function li(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ri = e), (oi = uo(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ri = e), (oi = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Jo ? { id: Xo, overflow: Zo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ou(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ri = e),
                (oi = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ui(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ci(e) {
          if (ii) {
            var t = oi;
            if (t) {
              var n = t;
              if (!li(e, t)) {
                if (ui(e)) throw Error(i(418));
                t = uo(n.nextSibling);
                var r = ri;
                t && li(e, t)
                  ? si(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ii = !1), (ri = e));
              }
            } else {
              if (ui(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ii = !1), (ri = e);
            }
          }
        }
        function fi(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ri = e;
        }
        function di(e) {
          if (e !== ri) return !1;
          if (!ii) return fi(e), (ii = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oi))
          ) {
            if (ui(e)) throw (pi(), Error(i(418)));
            for (; t; ) si(e, t), (t = uo(t.nextSibling));
          }
          if ((fi(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oi = uo(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oi = null;
            }
          } else oi = ri ? uo(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pi() {
          for (var e = oi; e; ) e = uo(e.nextSibling);
        }
        function hi() {
          (oi = ri = null), (ii = !1);
        }
        function mi(e) {
          null === ai ? (ai = [e]) : ai.push(e);
        }
        var vi = w.ReactCurrentBatchConfig;
        function gi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yi = Eo(null),
          bi = null,
          wi = null,
          xi = null;
        function ki() {
          xi = wi = bi = null;
        }
        function Ai(e) {
          var t = yi.current;
          So(yi), (e._currentValue = t);
        }
        function _i(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ei(e, t) {
          (bi = e),
            (xi = wi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ws = !0), (e.firstContext = null));
        }
        function Si(e) {
          var t = e._currentValue;
          if (xi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wi)
            ) {
              if (null === bi) throw Error(i(308));
              (wi = e), (bi.dependencies = { lanes: 0, firstContext: e });
            } else wi = wi.next = e;
          return t;
        }
        var Ci = null;
        function ji(e) {
          null === Ci ? (Ci = [e]) : Ci.push(e);
        }
        function Ni(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), ji(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Ti(e, r)
          );
        }
        function Ti(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Pi = !1;
        function Oi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Li(e, t) {
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
        function Ri(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Di(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Nl))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Ti(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), ji(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Ti(e, n)
          );
        }
        function Mi(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ii(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (o = i = a) : (i = i.next = a), (n = n.next);
              } while (null !== n);
              null === i ? (o = i = t) : (i = i.next = t);
            } else o = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fi(e, t, n, r) {
          var o = e.updateQueue;
          Pi = !1;
          var i = o.firstBaseUpdate,
            a = o.lastBaseUpdate,
            s = o.shared.pending;
          if (null !== s) {
            o.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === a ? (i = u) : (a.next = u), (a = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== a &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== i) {
            var f = o.baseState;
            for (a = 0, c = u = l = null, s = i; ; ) {
              var d = s.lane,
                p = s.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = s;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = I({}, f, d);
                      break e;
                    case 2:
                      Pi = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (d = o.effects) ? (o.effects = [s]) : d.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (l = f)) : (c = c.next = p),
                  (a |= d);
              if (null === (s = s.next)) {
                if (null === (s = o.shared.pending)) break;
                (s = (d = s).next),
                  (d.next = null),
                  (o.lastBaseUpdate = d),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (l = f),
              (o.baseState = l),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (a |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === i && (o.shared.lanes = 0);
            (Il |= a), (e.lanes = a), (e.memoizedState = f);
          }
        }
        function Bi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(i(191, o));
                o.call(r);
              }
            }
        }
        var zi = new r.Component().refs;
        function Ui(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Wi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              i = Ri(r, o);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Di(e, i, o)) && (ru(t, e, o, r), Mi(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              i = Ri(r, o);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Di(e, i, o)) && (ru(t, e, o, r), Mi(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              o = Ri(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Di(e, o, r)) && (ru(t, e, r, n), Mi(t, e, r));
          },
        };
        function Hi(e, t, n, r, o, i, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(o, i);
        }
        function Qi(e, t, n) {
          var r = !1,
            o = jo,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Si(i))
              : ((o = Lo(t) ? Po : No.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Oo(e, o)
                  : jo)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Wi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Vi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Wi.enqueueReplaceState(t, t.state, null);
        }
        function qi(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = zi), Oi(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (o.context = Si(i))
            : ((i = Lo(t) ? Po : No.current), (o.context = Oo(e, i))),
            (o.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (Ui(e, t, i, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Wi.enqueueReplaceState(o, o.state, null),
              Fi(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Yi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var o = r,
                a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === zi && (t = o.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Gi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function Ki(e) {
          return (0, e._init)(e._payload);
        }
        function Ji(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Ru(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === A
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === O &&
                    Ki(i) === t.type))
              ? (((r = o(t, n.props)).ref = Yi(e, t, n)), (r.return = e), r)
              : (((r = Du(n.type, n.key, n.props, null, e.mode, r)).ref = Yi(
                  e,
                  t,
                  n,
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Mu(n, e.mode, r, i)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Du(t.type, t.key, t.props, null, e.mode, n)).ref = Yi(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Bu(t, e.mode, n)).return = e), t;
                case O:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || D(t))
                return ((t = Mu(t, e.mode, n, null)).return = e), t;
              Gi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === o ? u(e, t, n, r) : null;
                case k:
                  return n.key === o ? c(e, t, n, r) : null;
                case O:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || D(n)) return null !== o ? null : f(e, t, n, r, null);
              Gi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  );
                case O:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || D(r))
                return f(t, (e = e.get(n) || null), r, o, null);
              Gi(t, r);
            }
            return null;
          }
          function m(o, i, s, l) {
            for (
              var u = null, c = null, f = i, m = (i = 0), v = null;
              null !== f && m < s.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(o, f, s[m], l);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && t(o, f),
                (i = a(g, i, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (f = v);
            }
            if (m === s.length) return n(o, f), ii && $o(o, m), u;
            if (null === f) {
              for (; m < s.length; m++)
                null !== (f = d(o, s[m], l)) &&
                  ((i = a(f, i, m)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return ii && $o(o, m), u;
            }
            for (f = r(o, f); m < s.length; m++)
              null !== (v = h(f, o, m, s[m], l)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (i = a(v, i, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              ii && $o(o, m),
              u
            );
          }
          function v(o, s, l, u) {
            var c = D(l);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (l = c.call(l))) throw Error(i(151));
            for (
              var f = (c = null), m = s, v = (s = 0), g = null, y = l.next();
              null !== m && !y.done;
              v++, y = l.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(o, m, y.value, u);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (s = a(b, s, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = g);
            }
            if (y.done) return n(o, m), ii && $o(o, v), c;
            if (null === m) {
              for (; !y.done; v++, y = l.next())
                null !== (y = d(o, y.value, u)) &&
                  ((s = a(y, s, v)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ii && $o(o, v), c;
            }
            for (m = r(o, m); !y.done; v++, y = l.next())
              null !== (y = h(m, o, v, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (s = a(y, s, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              ii && $o(o, v),
              c
            );
          }
          return function e(r, i, a, l) {
            if (
              ("object" === typeof a &&
                null !== a &&
                a.type === A &&
                null === a.key &&
                (a = a.props.children),
              "object" === typeof a && null !== a)
            ) {
              switch (a.$$typeof) {
                case x:
                  e: {
                    for (var u = a.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = a.type) === A) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = o(c, a.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === O &&
                            Ki(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = o(c, a.props)).ref = Yi(r, c, a)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    a.type === A
                      ? (((i = Mu(a.props.children, r.mode, l, a.key)).return =
                          r),
                        (r = i))
                      : (((l = Du(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          r.mode,
                          l,
                        )).ref = Yi(r, i, a)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case k:
                  e: {
                    for (c = a.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === a.containerInfo &&
                          i.stateNode.implementation === a.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = o(i, a.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Bu(a, r.mode, l)).return = r), (r = i);
                  }
                  return s(r);
                case O:
                  return e(r, i, (c = a._init)(a._payload), l);
              }
              if (te(a)) return m(r, i, a, l);
              if (D(a)) return v(r, i, a, l);
              Gi(r, a);
            }
            return ("string" === typeof a && "" !== a) || "number" === typeof a
              ? ((a = "" + a),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = o(i, a)).return = r), (r = i))
                  : (n(r, i), ((i = Fu(a, r.mode, l)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var Xi = Ji(!0),
          Zi = Ji(!1),
          $i = {},
          ea = Eo($i),
          ta = Eo($i),
          na = Eo($i);
        function ra(e) {
          if (e === $i) throw Error(i(174));
          return e;
        }
        function oa(e, t) {
          switch ((Co(na, t), Co(ta, e), Co(ea, $i), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          So(ea), Co(ea, t);
        }
        function ia() {
          So(ea), So(ta), So(na);
        }
        function aa(e) {
          ra(na.current);
          var t = ra(ea.current),
            n = le(t, e.type);
          t !== n && (Co(ta, e), Co(ea, n));
        }
        function sa(e) {
          ta.current === e && (So(ea), So(ta));
        }
        var la = Eo(0);
        function ua(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ca = [];
        function fa() {
          for (var e = 0; e < ca.length; e++)
            ca[e]._workInProgressVersionPrimary = null;
          ca.length = 0;
        }
        var da = w.ReactCurrentDispatcher,
          pa = w.ReactCurrentBatchConfig,
          ha = 0,
          ma = null,
          va = null,
          ga = null,
          ya = !1,
          ba = !1,
          wa = 0,
          xa = 0;
        function ka() {
          throw Error(i(321));
        }
        function Aa(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function _a(e, t, n, r, o, a) {
          if (
            ((ha = a),
            (ma = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (da.current = null === e || null === e.memoizedState ? ss : ls),
            (e = n(r, o)),
            ba)
          ) {
            a = 0;
            do {
              if (((ba = !1), (wa = 0), 25 <= a)) throw Error(i(301));
              (a += 1),
                (ga = va = null),
                (t.updateQueue = null),
                (da.current = us),
                (e = n(r, o));
            } while (ba);
          }
          if (
            ((da.current = as),
            (t = null !== va && null !== va.next),
            (ha = 0),
            (ga = va = ma = null),
            (ya = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Ea() {
          var e = 0 !== wa;
          return (wa = 0), e;
        }
        function Sa() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ga ? (ma.memoizedState = ga = e) : (ga = ga.next = e), ga
          );
        }
        function Ca() {
          if (null === va) {
            var e = ma.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = va.next;
          var t = null === ga ? ma.memoizedState : ga.next;
          if (null !== t) (ga = t), (va = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (va = e).memoizedState,
              baseState: va.baseState,
              baseQueue: va.baseQueue,
              queue: va.queue,
              next: null,
            }),
              null === ga ? (ma.memoizedState = ga = e) : (ga = ga.next = e);
          }
          return ga;
        }
        function ja(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Na(e) {
          var t = Ca(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = va,
            o = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== o) {
              var s = o.next;
              (o.next = a.next), (a.next = s);
            }
            (r.baseQueue = o = a), (n.pending = null);
          }
          if (null !== o) {
            (a = o.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = a;
            do {
              var f = c.lane;
              if ((ha & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = d), (s = r)) : (u = u.next = d),
                  (ma.lanes |= f),
                  (Il |= f);
              }
              c = c.next;
            } while (null !== c && c !== a);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (ws = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (a = o.lane), (ma.lanes |= a), (Il |= a), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ta(e) {
          var t = Ca(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var s = (o = o.next);
            do {
              (a = e(a, s.action)), (s = s.next);
            } while (s !== o);
            sr(a, t.memoizedState) || (ws = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function Pa() {}
        function Oa(e, t) {
          var n = ma,
            r = Ca(),
            o = t(),
            a = !sr(r.memoizedState, o);
          if (
            (a && ((r.memoizedState = o), (ws = !0)),
            (r = r.queue),
            Qa(Da.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              a ||
              (null !== ga && 1 & ga.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ba(9, Ra.bind(null, n, r, o, t), void 0, null),
              null === Tl)
            )
              throw Error(i(349));
            0 !== (30 & ha) || La(n, t, o);
          }
          return o;
        }
        function La(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ma.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ma.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ra(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ma(t) && Ia(e);
        }
        function Da(e, t, n) {
          return n(function () {
            Ma(t) && Ia(e);
          });
        }
        function Ma(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ia(e) {
          var t = Ti(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Fa(e) {
          var t = Sa();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: ja,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, ma, e)),
            [t.memoizedState, e]
          );
        }
        function Ba(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ma.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ma.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function za() {
          return Ca().memoizedState;
        }
        function Ua(e, t, n, r) {
          var o = Sa();
          (ma.flags |= e),
            (o.memoizedState = Ba(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Wa(e, t, n, r) {
          var o = Ca();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== va) {
            var a = va.memoizedState;
            if (((i = a.destroy), null !== r && Aa(r, a.deps)))
              return void (o.memoizedState = Ba(t, n, i, r));
          }
          (ma.flags |= e), (o.memoizedState = Ba(1 | t, n, i, r));
        }
        function Ha(e, t) {
          return Ua(8390656, 8, e, t);
        }
        function Qa(e, t) {
          return Wa(2048, 8, e, t);
        }
        function Va(e, t) {
          return Wa(4, 2, e, t);
        }
        function qa(e, t) {
          return Wa(4, 4, e, t);
        }
        function Ya(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ga(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Wa(4, 4, Ya.bind(null, t, e), n)
          );
        }
        function Ka() {}
        function Ja(e, t) {
          var n = Ca();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Aa(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xa(e, t) {
          var n = Ca();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Aa(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Za(e, t, n) {
          return 0 === (21 & ha)
            ? (e.baseState && ((e.baseState = !1), (ws = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (ma.lanes |= n), (Il |= n), (e.baseState = !0)),
              t);
        }
        function $a(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pa.transition;
          pa.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pa.transition = r);
          }
        }
        function es() {
          return Ca().memoizedState;
        }
        function ts(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rs(e))
          )
            os(t, n);
          else if (null !== (n = Ni(e, t, n, r))) {
            ru(n, e, r, tu()), is(n, t, r);
          }
        }
        function ns(e, t, n) {
          var r = nu(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rs(e)) os(t, o);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var a = t.lastRenderedState,
                  s = i(a, n);
                if (((o.hasEagerState = !0), (o.eagerState = s), sr(s, a))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((o.next = o), ji(t))
                      : ((o.next = l.next), (l.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (u) {}
            null !== (n = Ni(e, t, o, r)) &&
              (ru(n, e, r, (o = tu())), is(n, t, r));
          }
        }
        function rs(e) {
          var t = e.alternate;
          return e === ma || (null !== t && t === ma);
        }
        function os(e, t) {
          ba = ya = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function is(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var as = {
            readContext: Si,
            useCallback: ka,
            useContext: ka,
            useEffect: ka,
            useImperativeHandle: ka,
            useInsertionEffect: ka,
            useLayoutEffect: ka,
            useMemo: ka,
            useReducer: ka,
            useRef: ka,
            useState: ka,
            useDebugValue: ka,
            useDeferredValue: ka,
            useTransition: ka,
            useMutableSource: ka,
            useSyncExternalStore: ka,
            useId: ka,
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: Si,
            useCallback: function (e, t) {
              return (Sa().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Si,
            useEffect: Ha,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ua(4194308, 4, Ya.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ua(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ua(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Sa();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Sa();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ts.bind(null, ma, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Sa().memoizedState = e);
            },
            useState: Fa,
            useDebugValue: Ka,
            useDeferredValue: function (e) {
              return (Sa().memoizedState = e);
            },
            useTransition: function () {
              var e = Fa(!1),
                t = e[0];
              return (
                (e = $a.bind(null, e[1])), (Sa().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ma,
                o = Sa();
              if (ii) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Tl)) throw Error(i(349));
                0 !== (30 & ha) || La(r, t, n);
              }
              o.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (o.queue = a),
                Ha(Da.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                Ba(9, Ra.bind(null, r, a, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Sa(),
                t = Tl.identifierPrefix;
              if (ii) {
                var n = Zo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xo & ~(1 << (32 - at(Xo) - 1))).toString(32) + n)),
                  0 < (n = wa++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xa++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ls = {
            readContext: Si,
            useCallback: Ja,
            useContext: Si,
            useEffect: Qa,
            useImperativeHandle: Ga,
            useInsertionEffect: Va,
            useLayoutEffect: qa,
            useMemo: Xa,
            useReducer: Na,
            useRef: za,
            useState: function () {
              return Na(ja);
            },
            useDebugValue: Ka,
            useDeferredValue: function (e) {
              return Za(Ca(), va.memoizedState, e);
            },
            useTransition: function () {
              return [Na(ja)[0], Ca().memoizedState];
            },
            useMutableSource: Pa,
            useSyncExternalStore: Oa,
            useId: es,
            unstable_isNewReconciler: !1,
          },
          us = {
            readContext: Si,
            useCallback: Ja,
            useContext: Si,
            useEffect: Qa,
            useImperativeHandle: Ga,
            useInsertionEffect: Va,
            useLayoutEffect: qa,
            useMemo: Xa,
            useReducer: Ta,
            useRef: za,
            useState: function () {
              return Ta(ja);
            },
            useDebugValue: Ka,
            useDeferredValue: function (e) {
              var t = Ca();
              return null === va
                ? (t.memoizedState = e)
                : Za(t, va.memoizedState, e);
            },
            useTransition: function () {
              return [Ta(ja)[0], Ca().memoizedState];
            },
            useMutableSource: Pa,
            useSyncExternalStore: Oa,
            useId: es,
            unstable_isNewReconciler: !1,
          };
        function cs(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (i) {
            o = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function fs(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function ds(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ps = "function" === typeof WeakMap ? WeakMap : Map;
        function hs(e, t, n) {
          ((n = Ri(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vl || ((Vl = !0), (ql = r)), ds(0, t);
            }),
            n
          );
        }
        function ms(e, t, n) {
          (n = Ri(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                ds(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                ds(0, t),
                  "function" !== typeof r &&
                    (null === Yl ? (Yl = new Set([this])) : Yl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vs(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ps();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Su.bind(null, e, t, n)), t.then(e, e));
        }
        function gs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ys(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ri(-1, 1)).tag = 2), Di(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bs = w.ReactCurrentOwner,
          ws = !1;
        function xs(e, t, n, r) {
          t.child = null === e ? Zi(t, null, n, r) : Xi(t, e.child, n, r);
        }
        function ks(e, t, n, r, o) {
          n = n.render;
          var i = t.ref;
          return (
            Ei(t, o),
            (r = _a(e, t, n, r, i, o)),
            (n = Ea()),
            null === e || ws
              ? (ii && n && ti(t), (t.flags |= 1), xs(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Vs(e, t, o))
          );
        }
        function As(e, t, n, r, o) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Lu(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Du(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), _s(e, t, i, r, o));
          }
          if (((i = e.child), 0 === (e.lanes & o))) {
            var a = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(a, r) &&
              e.ref === t.ref
            )
              return Vs(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Ru(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function _s(e, t, n, r, o) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (lr(i, r) && e.ref === t.ref) {
              if (((ws = !1), (t.pendingProps = r = i), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), Vs(e, t, o);
              0 !== (131072 & e.flags) && (ws = !0);
            }
          }
          return Cs(e, t, n, r, o);
        }
        function Es(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Co(Rl, Ll),
                (Ll |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Co(Rl, Ll),
                  (Ll |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Co(Rl, Ll),
                (Ll |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Co(Rl, Ll),
              (Ll |= r);
          return xs(e, t, o, n), t.child;
        }
        function Ss(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cs(e, t, n, r, o) {
          var i = Lo(n) ? Po : No.current;
          return (
            (i = Oo(t, i)),
            Ei(t, o),
            (n = _a(e, t, n, r, i, o)),
            (r = Ea()),
            null === e || ws
              ? (ii && r && ti(t), (t.flags |= 1), xs(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Vs(e, t, o))
          );
        }
        function js(e, t, n, r, o) {
          if (Lo(n)) {
            var i = !0;
            Io(t);
          } else i = !1;
          if ((Ei(t, o), null === t.stateNode))
            Qs(e, t), Qi(t, n, r), qi(t, n, r, o), (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              s = t.memoizedProps;
            a.props = s;
            var l = a.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Si(u))
              : (u = Oo(t, (u = Lo(n) ? Po : No.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof a.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((s !== r || l !== u) && Vi(t, a, r, u)),
              (Pi = !1);
            var d = t.memoizedState;
            (a.state = d),
              Fi(t, r, a, o),
              (l = t.memoizedState),
              s !== r || d !== l || To.current || Pi
                ? ("function" === typeof c &&
                    (Ui(t, n, c, r), (l = t.memoizedState)),
                  (s = Pi || Hi(t, n, s, r, d, l, u))
                    ? (f ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (a.props = r),
                  (a.state = l),
                  (a.context = u),
                  (r = s))
                : ("function" === typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              Li(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : gi(t.type, s)),
              (a.props = u),
              (f = t.pendingProps),
              (d = a.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Si(l))
                : (l = Oo(t, (l = Lo(n) ? Po : No.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((s !== f || d !== l) && Vi(t, a, r, l)),
              (Pi = !1),
              (d = t.memoizedState),
              (a.state = d),
              Fi(t, r, a, o);
            var h = t.memoizedState;
            s !== f || d !== h || To.current || Pi
              ? ("function" === typeof p &&
                  (Ui(t, n, p, r), (h = t.memoizedState)),
                (u = Pi || Hi(t, n, u, r, d, h, l) || !1)
                  ? (c ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, h, l),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (a.props = r),
                (a.state = h),
                (a.context = l),
                (r = u))
              : ("function" !== typeof a.componentDidUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ns(e, t, n, r, i, o);
        }
        function Ns(e, t, n, r, o, i) {
          Ss(e, t);
          var a = 0 !== (128 & t.flags);
          if (!r && !a) return o && Fo(t, n, !1), Vs(e, t, i);
          (r = t.stateNode), (bs.current = t);
          var s =
            a && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = Xi(t, e.child, null, i)),
                (t.child = Xi(t, null, s, i)))
              : xs(e, t, s, i),
            (t.memoizedState = r.state),
            o && Fo(t, n, !0),
            t.child
          );
        }
        function Ts(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Do(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Do(0, t.context, !1),
            oa(e, t.containerInfo);
        }
        function Ps(e, t, n, r, o) {
          return hi(), mi(o), (t.flags |= 256), xs(e, t, n, r), t.child;
        }
        var Os,
          Ls,
          Rs,
          Ds,
          Ms = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Is(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fs(e, t, n) {
          var r,
            o = t.pendingProps,
            a = la.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (a |= 1),
            Co(la, 1 & a),
            null === e)
          )
            return (
              ci(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = o.children),
                  (e = o.fallback),
                  s
                    ? ((o = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & o) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = Iu(l, o, 0, null)),
                      (e = Mu(e, o, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Is(n)),
                      (t.memoizedState = Ms),
                      e)
                    : Bs(t, l))
            );
          if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
            return (function (e, t, n, r, o, a, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), zs(e, t, s, (r = fs(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((a = r.fallback),
                    (o = t.mode),
                    (r = Iu(
                      { mode: "visible", children: r.children },
                      o,
                      0,
                      null,
                    )),
                    ((a = Mu(a, o, s, null)).flags |= 2),
                    (r.return = t),
                    (a.return = t),
                    (r.sibling = a),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xi(t, e.child, null, s),
                    (t.child.memoizedState = Is(s)),
                    (t.memoizedState = Ms),
                    a);
              if (0 === (1 & t.mode)) return zs(e, t, s, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), zs(e, t, s, (r = fs((a = Error(i(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), ws || l)) {
                if (null !== (r = Tl)) {
                  switch (s & -s) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | s)) ? 0 : o) &&
                    o !== a.retryLane &&
                    ((a.retryLane = o), Ti(e, o), ru(r, e, o, -1));
                }
                return vu(), zs(e, t, s, (r = fs(Error(i(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = ju.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = a.treeContext),
                  (oi = uo(o.nextSibling)),
                  (ri = t),
                  (ii = !0),
                  (ai = null),
                  null !== e &&
                    ((Go[Ko++] = Xo),
                    (Go[Ko++] = Zo),
                    (Go[Ko++] = Jo),
                    (Xo = e.id),
                    (Zo = e.overflow),
                    (Jo = t)),
                  (t = Bs(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, o, r, a, n);
          if (s) {
            (s = o.fallback), (l = t.mode), (r = (a = e.child).sibling);
            var u = { mode: "hidden", children: o.children };
            return (
              0 === (1 & l) && t.child !== a
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = u),
                  (t.deletions = null))
                : ((o = Ru(a, u)).subtreeFlags = 14680064 & a.subtreeFlags),
              null !== r
                ? (s = Ru(r, s))
                : ((s = Mu(s, l, n, null)).flags |= 2),
              (s.return = t),
              (o.return = t),
              (o.sibling = s),
              (t.child = o),
              (o = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Is(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ms),
              o
            );
          }
          return (
            (e = (s = e.child).sibling),
            (o = Ru(s, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Bs(e, t) {
          return (
            ((t = Iu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function zs(e, t, n, r) {
          return (
            null !== r && mi(r),
            Xi(t, e.child, null, n),
            ((e = Bs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Us(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), _i(e.return, t, n);
        }
        function Ws(e, t, n, r, o) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = o));
        }
        function Hs(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if ((xs(e, t, r.children, n), 0 !== (2 & (r = la.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Us(e, n, t);
                else if (19 === e.tag) Us(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Co(la, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ua(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Ws(t, !1, o, n, i);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ua(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Ws(t, !0, n, null, i);
                break;
              case "together":
                Ws(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Qs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Il |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Ru((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ru(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function qs(e, t) {
          if (!ii)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ys(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Gs(e, t, n) {
          var r = t.pendingProps;
          switch ((ni(t), t.tag)) {
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
              return Ys(t), null;
            case 1:
            case 17:
              return Lo(t.type) && Ro(), Ys(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ia(),
                So(To),
                So(No),
                fa(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ai && (su(ai), (ai = null)))),
                Ls(e, t),
                Ys(t),
                null
              );
            case 5:
              sa(t);
              var o = ra(na.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Rs(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Ys(t), null;
                }
                if (((e = ra(ea.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var a = t.memoizedProps;
                  switch (
                    ((r[po] = t), (r[ho] = a), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Br("cancel", r), Br("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Br("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Dr.length; o++) Br(Dr[o], r);
                      break;
                    case "source":
                      Br("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Br("error", r), Br("load", r);
                      break;
                    case "details":
                      Br("toggle", r);
                      break;
                    case "input":
                      J(r, a), Br("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!a.multiple }),
                        Br("invalid", r);
                      break;
                    case "textarea":
                      oe(r, a), Br("invalid", r);
                  }
                  for (var l in (ye(n, a), (o = null), a))
                    if (a.hasOwnProperty(l)) {
                      var u = a[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== a.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (o = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== a.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (o = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Br("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), $(r, a, !0);
                      break;
                    case "textarea":
                      q(r), ae(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof a.onClick && (r.onclick = $r);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Os(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Br("cancel", e), Br("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Br("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < Dr.length; o++) Br(Dr[o], e);
                        o = r;
                        break;
                      case "source":
                        Br("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Br("error", e), Br("load", e), (o = r);
                        break;
                      case "details":
                        Br("toggle", e), (o = r);
                        break;
                      case "input":
                        J(e, r), (o = K(e, r)), Br("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = I({}, r, { value: void 0 })),
                          Br("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Br("invalid", e);
                    }
                    for (a in (ye(n, o), (u = o)))
                      if (u.hasOwnProperty(a)) {
                        var c = u[a];
                        "style" === a
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === a
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === a
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== a &&
                            "suppressHydrationWarning" !== a &&
                            "autoFocus" !== a &&
                            (s.hasOwnProperty(a)
                              ? null != c && "onScroll" === a && Br("scroll", e)
                              : null != c && b(e, a, c, l));
                      }
                    switch (n) {
                      case "input":
                        q(e), $(e, r, !1);
                        break;
                      case "textarea":
                        q(e), ae(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + Q(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (a = r.value)
                            ? ne(e, !!r.multiple, a, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ys(t), null;
            case 6:
              if (e && null != t.stateNode) Ds(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = ra(na.current)), ra(ea.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (a = r.nodeValue !== n) && null !== (e = ri))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  a && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[po] = t),
                    (t.stateNode = r);
              }
              return Ys(t), null;
            case 13:
              if (
                (So(la),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ii &&
                  null !== oi &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pi(), hi(), (t.flags |= 98560), (a = !1);
                else if (((a = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(i(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(i(317));
                    a[po] = t;
                  } else
                    hi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ys(t), (a = !1);
                } else null !== ai && (su(ai), (ai = null)), (a = !0);
                if (!a) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & la.current)
                        ? 0 === Dl && (Dl = 3)
                        : vu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ys(t),
                  null);
            case 4:
              return (
                ia(),
                Ls(e, t),
                null === e && Wr(t.stateNode.containerInfo),
                Ys(t),
                null
              );
            case 10:
              return Ai(t.type._context), Ys(t), null;
            case 19:
              if ((So(la), null === (a = t.memoizedState))) return Ys(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = a.rendering)))
                if (r) qs(a, !1);
                else {
                  if (0 !== Dl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ua(e))) {
                        for (
                          t.flags |= 128,
                            qs(a, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((a = n).flags &= 14680066),
                            null === (l = a.alternate)
                              ? ((a.childLanes = 0),
                                (a.lanes = e),
                                (a.child = null),
                                (a.subtreeFlags = 0),
                                (a.memoizedProps = null),
                                (a.memoizedState = null),
                                (a.updateQueue = null),
                                (a.dependencies = null),
                                (a.stateNode = null))
                              : ((a.childLanes = l.childLanes),
                                (a.lanes = l.lanes),
                                (a.child = l.child),
                                (a.subtreeFlags = 0),
                                (a.deletions = null),
                                (a.memoizedProps = l.memoizedProps),
                                (a.memoizedState = l.memoizedState),
                                (a.updateQueue = l.updateQueue),
                                (a.type = l.type),
                                (e = l.dependencies),
                                (a.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Co(la, (1 & la.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    Xe() > Hl &&
                    ((t.flags |= 128),
                    (r = !0),
                    qs(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ua(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      qs(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !l.alternate &&
                        !ii)
                    )
                      return Ys(t), null;
                  } else
                    2 * Xe() - a.renderingStartTime > Hl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      qs(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = a.last) ? (n.sibling = l) : (t.child = l),
                    (a.last = l));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = la.current),
                  Co(la, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ys(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ll) &&
                    (Ys(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ys(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Ks(e, t) {
          switch ((ni(t), t.tag)) {
            case 1:
              return (
                Lo(t.type) && Ro(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ia(),
                So(To),
                So(No),
                fa(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return sa(t), null;
            case 13:
              if (
                (So(la),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                hi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return So(la), null;
            case 4:
              return ia(), null;
            case 10:
              return Ai(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Os = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ls = function () {}),
          (Rs = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ra(ea.current);
              var i,
                a = null;
              switch (n) {
                case "input":
                  (o = K(e, o)), (r = K(e, r)), (a = []);
                  break;
                case "select":
                  (o = I({}, o, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (a = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (a = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (ye(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                    var l = o[c];
                    for (i in l)
                      l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? a || (a = [])
                        : (a = a || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (i in l)
                        !l.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          l[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else n || (a || (a = []), a.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (a = a || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (a = a || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Br("scroll", e),
                            a || l === u || (a = []))
                          : (a = a || []).push(c, u));
              }
              n && (a = a || []).push("style", n);
              var c = a;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ds = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Js = !1,
          Xs = !1,
          Zs = "function" === typeof WeakSet ? WeakSet : Set,
          $s = null;
        function el(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function tl(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var nl = !1;
        function rl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), void 0 !== i && tl(t, n, i);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function ol(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function il(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function al(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), al(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[ho],
              delete t[vo],
              delete t[go],
              delete t[yo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function sl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ll(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || sl(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var fl = null,
          dl = !1;
        function pl(e, t, n) {
          for (n = n.child; null !== n; ) hl(e, t, n), (n = n.sibling);
        }
        function hl(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(ot, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Xs || el(n, t);
            case 6:
              var r = fl,
                o = dl;
              (fl = null),
                pl(e, t, n),
                (dl = o),
                null !== (fl = r) &&
                  (dl
                    ? ((e = fl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fl.removeChild(n.stateNode));
              break;
            case 18:
              null !== fl &&
                (dl
                  ? ((e = fl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? lo(e.parentNode, n)
                      : 1 === e.nodeType && lo(e, n),
                    Wt(e))
                  : lo(fl, n.stateNode));
              break;
            case 4:
              (r = fl),
                (o = dl),
                (fl = n.stateNode.containerInfo),
                (dl = !0),
                pl(e, t, n),
                (fl = r),
                (dl = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var i = o,
                    a = i.destroy;
                  (i = i.tag),
                    void 0 !== a &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      tl(n, t, a),
                    (o = o.next);
                } while (o !== r);
              }
              pl(e, t, n);
              break;
            case 1:
              if (
                !Xs &&
                (el(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Eu(n, t, s);
                }
              pl(e, t, n);
              break;
            case 21:
              pl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xs = (r = Xs) || null !== n.memoizedState),
                  pl(e, t, n),
                  (Xs = r))
                : pl(e, t, n);
              break;
            default:
              pl(e, t, n);
          }
        }
        function ml(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zs()),
              t.forEach(function (t) {
                var r = Nu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var a = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (fl = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (fl = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === fl) throw Error(i(160));
                hl(a, s, o), (fl = null), (dl = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (c) {
                Eu(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gl(t, e), (t = t.sibling);
        }
        function gl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vl(t, e), yl(e), 4 & r)) {
                try {
                  rl(3, e, e.return), ol(3, e);
                } catch (v) {
                  Eu(e, e.return, v);
                }
                try {
                  rl(5, e, e.return);
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              break;
            case 1:
              vl(t, e), yl(e), 512 & r && null !== n && el(n, n.return);
              break;
            case 5:
              if (
                (vl(t, e),
                yl(e),
                512 & r && null !== n && el(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  de(o, "");
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var a = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : a,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === a.type &&
                      null != a.name &&
                      X(o, a),
                      be(l, s);
                    var c = be(l, a);
                    for (s = 0; s < u.length; s += 2) {
                      var f = u[s],
                        d = u[s + 1];
                      "style" === f
                        ? ve(o, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(o, d)
                        : "children" === f
                        ? de(o, d)
                        : b(o, f, d, c);
                    }
                    switch (l) {
                      case "input":
                        Z(o, a);
                        break;
                      case "textarea":
                        ie(o, a);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!a.multiple;
                        var h = a.value;
                        null != h
                          ? ne(o, !!a.multiple, h, !1)
                          : p !== !!a.multiple &&
                            (null != a.defaultValue
                              ? ne(o, !!a.multiple, a.defaultValue, !0)
                              : ne(o, !!a.multiple, a.multiple ? [] : "", !1));
                    }
                    o[ho] = a;
                  } catch (v) {
                    Eu(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((vl(t, e), yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (o = e.stateNode), (a = e.memoizedProps);
                try {
                  o.nodeValue = a;
                } catch (v) {
                  Eu(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (vl(t, e),
                yl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (v) {
                  Eu(e, e.return, v);
                }
              break;
            case 4:
            default:
              vl(t, e), yl(e);
              break;
            case 13:
              vl(t, e),
                yl(e),
                8192 & (o = e.child).flags &&
                  ((a = null !== o.memoizedState),
                  (o.stateNode.isHidden = a),
                  !a ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Wl = Xe())),
                4 & r && ml(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xs = (c = Xs) || f), vl(t, e), (Xs = c))
                  : vl(t, e),
                yl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for ($s = e, f = e.child; null !== f; ) {
                    for (d = $s = f; null !== $s; ) {
                      switch (((h = (p = $s).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rl(4, p, p.return);
                          break;
                        case 1:
                          el(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              Eu(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          el(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            kl(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), ($s = h)) : kl(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (o = d.stateNode),
                          c
                            ? "function" === typeof (a = o.style).setProperty
                              ? a.setProperty("display", "none", "important")
                              : (a.display = "none")
                            : ((l = d.stateNode),
                              (s =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = me("display", s)));
                      } catch (v) {
                        Eu(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (v) {
                        Eu(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vl(t, e), yl(e), 4 & r && ml(e);
            case 21:
          }
        }
        function yl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (sl(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (de(o, ""), (r.flags &= -33)),
                    cl(e, ll(e), o);
                  break;
                case 3:
                case 4:
                  var a = r.stateNode.containerInfo;
                  ul(e, ll(e), a);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (s) {
              Eu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bl(e, t, n) {
          ($s = e), wl(e, t, n);
        }
        function wl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== $s; ) {
            var o = $s,
              i = o.child;
            if (22 === o.tag && r) {
              var a = null !== o.memoizedState || Js;
              if (!a) {
                var s = o.alternate,
                  l = (null !== s && null !== s.memoizedState) || Xs;
                s = Js;
                var u = Xs;
                if (((Js = a), (Xs = l) && !u))
                  for ($s = o; null !== $s; )
                    (l = (a = $s).child),
                      22 === a.tag && null !== a.memoizedState
                        ? Al(o)
                        : null !== l
                        ? ((l.return = a), ($s = l))
                        : Al(o);
                for (; null !== i; ) ($s = i), wl(i, t, n), (i = i.sibling);
                ($s = o), (Js = s), (Xs = u);
              }
              xl(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== i
                ? ((i.return = o), ($s = i))
                : xl(e);
          }
        }
        function xl(e) {
          for (; null !== $s; ) {
            var t = $s;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xs || ol(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xs)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var a = t.updateQueue;
                      null !== a && Bi(t, a, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Bi(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Wt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Xs || (512 & t.flags && il(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              $s = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), ($s = n);
              break;
            }
            $s = t.return;
          }
        }
        function kl(e) {
          for (; null !== $s; ) {
            var t = $s;
            if (t === e) {
              $s = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), ($s = n);
              break;
            }
            $s = t.return;
          }
        }
        function Al(e) {
          for (; null !== $s; ) {
            var t = $s;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ol(4, t);
                  } catch (l) {
                    Eu(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Eu(t, o, l);
                    }
                  }
                  var i = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Eu(t, i, l);
                  }
                  break;
                case 5:
                  var a = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Eu(t, a, l);
                  }
              }
            } catch (l) {
              Eu(t, t.return, l);
            }
            if (t === e) {
              $s = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), ($s = s);
              break;
            }
            $s = t.return;
          }
        }
        var _l,
          El = Math.ceil,
          Sl = w.ReactCurrentDispatcher,
          Cl = w.ReactCurrentOwner,
          jl = w.ReactCurrentBatchConfig,
          Nl = 0,
          Tl = null,
          Pl = null,
          Ol = 0,
          Ll = 0,
          Rl = Eo(0),
          Dl = 0,
          Ml = null,
          Il = 0,
          Fl = 0,
          Bl = 0,
          zl = null,
          Ul = null,
          Wl = 0,
          Hl = 1 / 0,
          Ql = null,
          Vl = !1,
          ql = null,
          Yl = null,
          Gl = !1,
          Kl = null,
          Jl = 0,
          Xl = 0,
          Zl = null,
          $l = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Nl) ? Xe() : -1 !== $l ? $l : ($l = Xe());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Nl) && 0 !== Ol
            ? Ol & -Ol
            : null !== vi.transition
            ? (0 === eu && (eu = mt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Xl) throw ((Xl = 0), (Zl = null), Error(i(185)));
          gt(e, n, r),
            (0 !== (2 & Nl) && e === Tl) ||
              (e === Tl && (0 === (2 & Nl) && (Fl |= n), 4 === Dl && lu(e, Ol)),
              ou(e, r),
              1 === n &&
                0 === Nl &&
                0 === (1 & t.mode) &&
                ((Hl = Xe() + 500), zo && Ho()));
        }
        function ou(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var a = 31 - at(i),
                s = 1 << a,
                l = o[a];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (o[a] = pt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (i &= ~s);
            }
          })(e, t);
          var r = dt(e, e === Tl ? Ol : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (zo = !0), Wo(e);
                  })(uu.bind(null, e))
                : Wo(uu.bind(null, e)),
                ao(function () {
                  0 === (6 & Nl) && Ho();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Tu(n, iu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function iu(e, t) {
          if ((($l = -1), (eu = 0), 0 !== (6 & Nl))) throw Error(i(327));
          var n = e.callbackNode;
          if (Au() && e.callbackNode !== n) return null;
          var r = dt(e, e === Tl ? Ol : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var o = Nl;
            Nl |= 2;
            var a = mu();
            for (
              (Tl === e && Ol === t) ||
              ((Ql = null), (Hl = Xe() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (l) {
                hu(e, l);
              }
            ki(),
              (Sl.current = a),
              (Nl = o),
              null !== Pl ? (t = 0) : ((Tl = null), (Ol = 0), (t = Dl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = au(e, o))),
              1 === t)
            )
              throw ((n = Ml), pu(e, 0), lu(e, r), ou(e, Xe()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              i = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!sr(i(), o)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (a = ht(e)) &&
                    ((r = a), (t = au(e, a))),
                  1 === t))
              )
                throw ((n = Ml), pu(e, 0), lu(e, r), ou(e, Xe()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  ku(e, Ul, Ql);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = Wl + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(ku.bind(null, e, Ul, Ql), t);
                    break;
                  }
                  ku(e, Ul, Ql);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var s = 31 - at(r);
                    (a = 1 << s), (s = t[s]) > o && (o = s), (r &= ~a);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * El(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(ku.bind(null, e, Ul, Ql), r);
                    break;
                  }
                  ku(e, Ul, Ql);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return ou(e, Xe()), e.callbackNode === n ? iu.bind(null, e) : null;
        }
        function au(e, t) {
          var n = zl;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Ul), (Ul = n), null !== t && su(t)),
            e
          );
        }
        function su(e) {
          null === Ul ? (Ul = e) : Ul.push.apply(Ul, e);
        }
        function lu(e, t) {
          for (
            t &= ~Bl,
              t &= ~Fl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - at(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Nl)) throw Error(i(327));
          Au();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ou(e, Xe()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = au(e, r)));
          }
          if (1 === n) throw ((n = Ml), pu(e, 0), lu(e, t), ou(e, Xe()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Ul, Ql),
            ou(e, Xe()),
            null
          );
        }
        function cu(e, t) {
          var n = Nl;
          Nl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nl = n) && ((Hl = Xe() + 500), zo && Ho());
          }
        }
        function fu(e) {
          null !== Kl && 0 === Kl.tag && 0 === (6 & Nl) && Au();
          var t = Nl;
          Nl |= 1;
          var n = jl.transition,
            r = bt;
          try {
            if (((jl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (jl.transition = n), 0 === (6 & (Nl = t)) && Ho();
          }
        }
        function du() {
          (Ll = Rl.current), So(Rl);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Pl))
            for (n = Pl.return; null !== n; ) {
              var r = n;
              switch ((ni(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ro();
                  break;
                case 3:
                  ia(), So(To), So(No), fa();
                  break;
                case 5:
                  sa(r);
                  break;
                case 4:
                  ia();
                  break;
                case 13:
                case 19:
                  So(la);
                  break;
                case 10:
                  Ai(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Tl = e),
            (Pl = e = Ru(e.current, null)),
            (Ol = Ll = t),
            (Dl = 0),
            (Ml = null),
            (Bl = Fl = Il = 0),
            (Ul = zl = null),
            null !== Ci)
          ) {
            for (t = 0; t < Ci.length; t++)
              if (null !== (r = (n = Ci[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  i = n.pending;
                if (null !== i) {
                  var a = i.next;
                  (i.next = o), (r.next = a);
                }
                n.pending = r;
              }
            Ci = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Pl;
            try {
              if ((ki(), (da.current = as), ya)) {
                for (var r = ma.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ya = !1;
              }
              if (
                ((ha = 0),
                (ga = va = ma = null),
                (ba = !1),
                (wa = 0),
                (Cl.current = null),
                null === n || null === n.return)
              ) {
                (Dl = 1), (Ml = t), (Pl = null);
                break;
              }
              e: {
                var a = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Ol),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = l,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gs(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      ys(h, s, l, 0, t),
                      1 & h.mode && vs(a, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(u), (t.updateQueue = v);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vs(a, c, t), vu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ii && 1 & l.mode) {
                  var g = gs(s);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      ys(g, s, l, 0, t),
                      mi(cs(u, l));
                    break e;
                  }
                }
                (a = u = cs(u, l)),
                  4 !== Dl && (Dl = 2),
                  null === zl ? (zl = [a]) : zl.push(a),
                  (a = s);
                do {
                  switch (a.tag) {
                    case 3:
                      (a.flags |= 65536),
                        (t &= -t),
                        (a.lanes |= t),
                        Ii(a, hs(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var y = a.type,
                        b = a.stateNode;
                      if (
                        0 === (128 & a.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Yl || !Yl.has(b))))
                      ) {
                        (a.flags |= 65536),
                          (t &= -t),
                          (a.lanes |= t),
                          Ii(a, ms(a, l, t));
                        break e;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              xu(n);
            } catch (w) {
              (t = w), Pl === n && null !== n && (Pl = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Sl.current;
          return (Sl.current = as), null === e ? as : e;
        }
        function vu() {
          (0 !== Dl && 3 !== Dl && 2 !== Dl) || (Dl = 4),
            null === Tl ||
              (0 === (268435455 & Il) && 0 === (268435455 & Fl)) ||
              lu(Tl, Ol);
        }
        function gu(e, t) {
          var n = Nl;
          Nl |= 2;
          var r = mu();
          for ((Tl === e && Ol === t) || ((Ql = null), pu(e, t)); ; )
            try {
              yu();
              break;
            } catch (o) {
              hu(e, o);
            }
          if ((ki(), (Nl = n), (Sl.current = r), null !== Pl))
            throw Error(i(261));
          return (Tl = null), (Ol = 0), Dl;
        }
        function yu() {
          for (; null !== Pl; ) wu(Pl);
        }
        function bu() {
          for (; null !== Pl && !Ke(); ) wu(Pl);
        }
        function wu(e) {
          var t = _l(e.alternate, e, Ll);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (Pl = t),
            (Cl.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Gs(n, t, Ll))) return void (Pl = n);
            } else {
              if (null !== (n = Ks(n, t)))
                return (n.flags &= 32767), void (Pl = n);
              if (null === e) return (Dl = 6), void (Pl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Pl = t);
            Pl = t = e;
          } while (null !== t);
          0 === Dl && (Dl = 5);
        }
        function ku(e, t, n) {
          var r = bt,
            o = jl.transition;
          try {
            (jl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Au();
                } while (null !== Kl);
                if (0 !== (6 & Nl)) throw Error(i(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var a = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - at(n),
                        i = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
                    }
                  })(e, a),
                  e === Tl && ((Pl = Tl = null), (Ol = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Gl ||
                    ((Gl = !0),
                    Tu(tt, function () {
                      return Au(), null;
                    })),
                  (a = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || a)
                ) {
                  (a = jl.transition), (jl.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = Nl;
                  (Nl |= 4),
                    (Cl.current = null),
                    (function (e, t) {
                      if (((eo = Qt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                a = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, a.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== o && 3 !== d.nodeType) ||
                                    (l = s + o),
                                    d !== a ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = s + r),
                                    3 === d.nodeType &&
                                      (s += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === o && (l = s),
                                    p === a && ++f === r && (u = s),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Qt = !1,
                          $s = t;
                        null !== $s;

                      )
                        if (
                          ((e = (t = $s).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), ($s = e);
                        else
                          for (; null !== $s; ) {
                            t = $s;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : gi(t.type, v),
                                          g,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (x) {
                              Eu(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), ($s = e);
                              break;
                            }
                            $s = t.return;
                          }
                      (m = nl), (nl = !1);
                    })(e, n),
                    gl(n, e),
                    hr(to),
                    (Qt = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    bl(n, e, o),
                    Je(),
                    (Nl = l),
                    (bt = s),
                    (jl.transition = a);
                } else e.current = n;
                if (
                  (Gl && ((Gl = !1), (Kl = e), (Jl = o)),
                  (a = e.pendingLanes),
                  0 === a && (Yl = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ou(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if (Vl) throw ((Vl = !1), (e = ql), (ql = null), e);
                0 !== (1 & Jl) && 0 !== e.tag && Au(),
                  (a = e.pendingLanes),
                  0 !== (1 & a)
                    ? e === Zl
                      ? Xl++
                      : ((Xl = 0), (Zl = e))
                    : (Xl = 0),
                  Ho();
              })(e, t, n, r);
          } finally {
            (jl.transition = o), (bt = r);
          }
          return null;
        }
        function Au() {
          if (null !== Kl) {
            var e = wt(Jl),
              t = jl.transition,
              n = bt;
            try {
              if (((jl.transition = null), (bt = 16 > e ? 16 : e), null === Kl))
                var r = !1;
              else {
                if (((e = Kl), (Kl = null), (Jl = 0), 0 !== (6 & Nl)))
                  throw Error(i(331));
                var o = Nl;
                for (Nl |= 4, $s = e.current; null !== $s; ) {
                  var a = $s,
                    s = a.child;
                  if (0 !== (16 & $s.flags)) {
                    var l = a.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for ($s = c; null !== $s; ) {
                          var f = $s;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(8, f, a);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), ($s = d);
                          else
                            for (; null !== $s; ) {
                              var p = (f = $s).sibling,
                                h = f.return;
                              if ((al(f), f === c)) {
                                $s = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), ($s = p);
                                break;
                              }
                              $s = h;
                            }
                        }
                      }
                      var m = a.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      $s = a;
                    }
                  }
                  if (0 !== (2064 & a.subtreeFlags) && null !== s)
                    (s.return = a), ($s = s);
                  else
                    e: for (; null !== $s; ) {
                      if (0 !== (2048 & (a = $s).flags))
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(9, a, a.return);
                        }
                      var y = a.sibling;
                      if (null !== y) {
                        (y.return = a.return), ($s = y);
                        break e;
                      }
                      $s = a.return;
                    }
                }
                var b = e.current;
                for ($s = b; null !== $s; ) {
                  var w = (s = $s).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), ($s = w);
                  else
                    e: for (s = b; null !== $s; ) {
                      if (0 !== (2048 & (l = $s).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ol(9, l);
                          }
                        } catch (k) {
                          Eu(l, l.return, k);
                        }
                      if (l === s) {
                        $s = null;
                        break e;
                      }
                      var x = l.sibling;
                      if (null !== x) {
                        (x.return = l.return), ($s = x);
                        break e;
                      }
                      $s = l.return;
                    }
                }
                if (
                  ((Nl = o),
                  Ho(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(ot, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (jl.transition = t);
            }
          }
          return !1;
        }
        function _u(e, t, n) {
          (e = Di(e, (t = hs(0, (t = cs(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (gt(e, 1, t), ou(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) _u(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _u(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Yl || !Yl.has(r)))
                ) {
                  (t = Di(t, (e = ms(t, (e = cs(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (gt(t, 1, e), ou(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Su(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Tl === e &&
              (Ol & n) === n &&
              (4 === Dl ||
              (3 === Dl && (130023424 & Ol) === Ol && 500 > Xe() - Wl)
                ? pu(e, 0)
                : (Bl |= n)),
            ou(e, t);
        }
        function Cu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Ti(e, t)) && (gt(e, t, n), ou(e, n));
        }
        function ju(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cu(e, n);
        }
        function Nu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Cu(e, n);
        }
        function Tu(e, t) {
          return Ye(e, t);
        }
        function Pu(e, t, n, r) {
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
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ou(e, t, n, r) {
          return new Pu(e, t, n, r);
        }
        function Lu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ru(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ou(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Du(e, t, n, r, o, a) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Lu(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case A:
                return Mu(n.children, o, a, t);
              case _:
                (s = 8), (o |= 8);
                break;
              case E:
                return (
                  ((e = Ou(12, n, t, 2 | o)).elementType = E), (e.lanes = a), e
                );
              case N:
                return (
                  ((e = Ou(13, n, t, o)).elementType = N), (e.lanes = a), e
                );
              case T:
                return (
                  ((e = Ou(19, n, t, o)).elementType = T), (e.lanes = a), e
                );
              case L:
                return Iu(n, o, a, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case S:
                      s = 10;
                      break e;
                    case C:
                      s = 9;
                      break e;
                    case j:
                      s = 11;
                      break e;
                    case P:
                      s = 14;
                      break e;
                    case O:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ou(s, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Mu(e, t, n, r) {
          return ((e = Ou(7, e, r, t)).lanes = n), e;
        }
        function Iu(e, t, n, r) {
          return (
            ((e = Ou(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fu(e, t, n) {
          return ((e = Ou(6, e, null, t)).lanes = n), e;
        }
        function Bu(e, t, n) {
          return (
            ((t = Ou(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function zu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uu(e, t, n, r, o, i, a, s, l) {
          return (
            (e = new zu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Ou(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Oi(i),
            e
          );
        }
        function Wu(e) {
          if (!e) return jo;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Lo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Lo(n)) return Mo(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, o, i, a, s, l) {
          return (
            ((e = Uu(n, r, !0, e, 0, i, 0, s, l)).context = Wu(null)),
            (n = e.current),
            ((i = Ri((r = tu()), (o = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Di(n, i, o),
            (e.current.lanes = o),
            gt(e, o, r),
            ou(e, r),
            e
          );
        }
        function Qu(e, t, n, r) {
          var o = t.current,
            i = tu(),
            a = nu(o);
          return (
            (n = Wu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ri(i, a)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Di(o, t, a)) && (ru(e, o, a, i), Mi(e, o, a)),
            a
          );
        }
        function Vu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Yu(e, t) {
          qu(e, t), (e = e.alternate) && qu(e, t);
        }
        _l = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || To.current) ws = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ws = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ts(t), hi();
                        break;
                      case 5:
                        aa(t);
                        break;
                      case 1:
                        Lo(t.type) && Io(t);
                        break;
                      case 4:
                        oa(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        Co(yi, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Co(la, 1 & la.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Fs(e, t, n)
                            : (Co(la, 1 & la.current),
                              null !== (e = Vs(e, t, n)) ? e.sibling : null);
                        Co(la, 1 & la.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          Co(la, la.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Es(e, t, n);
                    }
                    return Vs(e, t, n);
                  })(e, t, n)
                );
              ws = 0 !== (131072 & e.flags);
            }
          else (ws = !1), ii && 0 !== (1048576 & t.flags) && ei(t, Yo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Qs(e, t), (e = t.pendingProps);
              var o = Oo(t, No.current);
              Ei(t, n), (o = _a(null, t, r, e, o, n));
              var a = Ea();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Lo(r) ? ((a = !0), Io(t)) : (a = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    Oi(t),
                    (o.updater = Wi),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    qi(t, r, e, n),
                    (t = Ns(null, t, r, !0, a, n)))
                  : ((t.tag = 0),
                    ii && a && ti(t),
                    xs(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Qs(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Lu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gi(r, e)),
                  o)
                ) {
                  case 0:
                    t = Cs(null, t, r, e, n);
                    break e;
                  case 1:
                    t = js(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ks(null, t, r, e, n);
                    break e;
                  case 14:
                    t = As(null, t, r, gi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Cs(e, t, r, (o = t.elementType === r ? o : gi(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                js(e, t, r, (o = t.elementType === r ? o : gi(r, o)), n)
              );
            case 3:
              e: {
                if ((Ts(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (o = (a = t.memoizedState).element),
                  Li(e, t),
                  Fi(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), a.isDehydrated)) {
                  if (
                    ((a = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = Ps(e, t, r, n, (o = cs(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Ps(e, t, r, n, (o = cs(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    oi = uo(t.stateNode.containerInfo.firstChild),
                      ri = t,
                      ii = !0,
                      ai = null,
                      n = Zi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((hi(), r === o)) {
                    t = Vs(e, t, n);
                    break e;
                  }
                  xs(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                aa(t),
                null === e && ci(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (s = o.children),
                no(r, o)
                  ? (s = null)
                  : null !== a && no(r, a) && (t.flags |= 32),
                Ss(e, t),
                xs(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ci(t), null;
            case 13:
              return Fs(e, t, n);
            case 4:
              return (
                oa(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xi(t, null, r, n)) : xs(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                ks(e, t, r, (o = t.elementType === r ? o : gi(r, o)), n)
              );
            case 7:
              return xs(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xs(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (a = t.memoizedProps),
                  (s = o.value),
                  Co(yi, r._currentValue),
                  (r._currentValue = s),
                  null !== a)
                )
                  if (sr(a.value, s)) {
                    if (a.children === o.children && !To.current) {
                      t = Vs(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (a = t.child) && (a.return = t);
                      null !== a;

                    ) {
                      var l = a.dependencies;
                      if (null !== l) {
                        s = a.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === a.tag) {
                              (u = Ri(-1, n & -n)).tag = 2;
                              var c = a.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (a.lanes |= n),
                              null !== (u = a.alternate) && (u.lanes |= n),
                              _i(a.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === a.tag)
                        s = a.type === t.type ? null : a.child;
                      else if (18 === a.tag) {
                        if (null === (s = a.return)) throw Error(i(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          _i(s, n, t),
                          (s = a.sibling);
                      } else s = a.child;
                      if (null !== s) s.return = a;
                      else
                        for (s = a; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (a = s.sibling)) {
                            (a.return = s.return), (s = a);
                            break;
                          }
                          s = s.return;
                        }
                      a = s;
                    }
                xs(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ei(t, n),
                (r = r((o = Si(o)))),
                (t.flags |= 1),
                xs(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = gi((r = t.type), t.pendingProps)),
                As(e, t, r, (o = gi(r.type, o)), n)
              );
            case 15:
              return _s(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : gi(r, o)),
                Qs(e, t),
                (t.tag = 1),
                Lo(r) ? ((e = !0), Io(t)) : (e = !1),
                Ei(t, n),
                Qi(t, r, o),
                qi(t, r, o, n),
                Ns(null, t, r, !0, e, n)
              );
            case 19:
              return Hs(e, t, n);
            case 22:
              return Es(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Gu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ku(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $u() {}
        function ec(e, t, n, r, o) {
          var i = n._reactRootContainer;
          if (i) {
            var a = i;
            if ("function" === typeof o) {
              var s = o;
              o = function () {
                var e = Vu(a);
                s.call(e);
              };
            }
            Qu(t, a, e, o);
          } else
            a = (function (e, t, n, r, o) {
              if (o) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Vu(a);
                    i.call(e);
                  };
                }
                var a = Hu(t, r, e, 0, null, !1, 0, "", $u);
                return (
                  (e._reactRootContainer = a),
                  (e[mo] = a.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  fu(),
                  a
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Vu(l);
                  s.call(e);
                };
              }
              var l = Uu(e, 0, !1, null, 0, !1, 0, "", $u);
              return (
                (e._reactRootContainer = l),
                (e[mo] = l.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                fu(function () {
                  Qu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, o, r);
          return Vu(a);
        }
        (Ju.prototype.render = Ku.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Qu(e, t, null, null);
          }),
          (Ju.prototype.unmount = Ku.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fu(function () {
                  Qu(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Ju.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && It(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ou(t, Xe()),
                    0 === (6 & Nl) && ((Hl = Xe() + 500), Ho()));
                }
                break;
              case 13:
                fu(function () {
                  var t = Ti(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Yu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ti(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Yu(e, 134217728);
            }
          }),
          (At = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Ti(e, t);
              if (null !== n) ru(n, e, t, tu());
              Yu(e, t);
            }
          }),
          (_t = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ko(r);
                      if (!o) throw Error(i(90));
                      Y(r), Z(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = cu),
          (Ne = fu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [wo, xo, ko, Se, Ce, cu],
          },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ve(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(rc)), (it = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(i(299));
            var n = !1,
              r = "",
              o = Gu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Uu(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Ku(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zu(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              a = "",
              s = Gu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, o, 0, a, s)),
              (e[mo] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Ju(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zu(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zu(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (fu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zu(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      1250: function (e, t, n) {
        "use strict";
        var r = n(4164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      4164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4463));
      },
      6374: function (e, t, n) {
        "use strict";
        var r = n(2791),
          o = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          a = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            a.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: s.current,
          };
        }
        (t.Fragment = i), (t.jsx = u), (t.jsxs = u);
      },
      9117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          A = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var o,
            i = {},
            a = null,
            s = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              k.call(t, o) && !_.hasOwnProperty(o) && (i[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) i.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (o in (l = e.defaultProps)) void 0 === i[o] && (i[o] = l[o]);
          return {
            $$typeof: n,
            type: e,
            key: a,
            ref: s,
            props: i,
            _owner: A.current,
          };
        }
        function S(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function j(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, o, i, a) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (a = a((l = e))),
              (e = "" === i ? "." + j(l, 0) : i),
              x(a)
                ? ((o = ""),
                  null != e && (o = e.replace(C, "$&/") + "/"),
                  N(a, t, o, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (S(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      o +
                        (!a.key || (l && l.key === a.key)
                          ? ""
                          : ("" + a.key).replace(C, "$&/") + "/") +
                        e,
                    )),
                  t.push(a)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + j((s = e[u]), u);
              l += N(s, t, o, c, a);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += N((s = s.value), t, o, (c = i + j(s, u++)), a);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return l;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var O = { current: null },
          L = { transition: null },
          R = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: A,
          };
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!S(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = o),
          (t.Profiler = a),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = m({}, e.props),
              i = e.key,
              a = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (s = A.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !_.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              o.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: a,
              props: o,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = S),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React.",
            );
          }),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return O.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      2791: function (e, t, n) {
        "use strict";
        e.exports = n(9117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(6374);
      },
      6813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < i(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, a = o >>> 1; r < a; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > i(l, n))
                u < o && 0 > i(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < o && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(u)) (m = !0), L(k);
            else {
              var t = r(c);
              null !== t && R(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), v && ((v = !1), y(S), (S = -1)), (h = !0);
          var i = p;
          try {
            for (
              w(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !N()));

            ) {
              var a = d.callback;
              if ("function" === typeof a) {
                (d.callback = null), (p = d.priorityLevel);
                var s = a(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (d.callback = s)
                    : d === r(u) && o(u),
                  w(n);
              } else o(u);
              d = r(u);
            }
            if (null !== d) var l = !0;
            else {
              var f = r(c);
              null !== f && R(x, f.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (d = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var A,
          _ = !1,
          E = null,
          S = -1,
          C = 5,
          j = -1;
        function N() {
          return !(t.unstable_now() - j < C);
        }
        function T() {
          if (null !== E) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? A() : ((_ = !1), (E = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof b)
          A = function () {
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            O = P.port2;
          (P.port1.onmessage = T),
            (A = function () {
              O.postMessage(null);
            });
        } else
          A = function () {
            g(T, 0);
          };
        function L(e) {
          (E = e), _ || ((_ = !0), A());
        }
        function R(e, n) {
          S = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, i) {
            var a = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? a + i : a)
                : (i = a),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > a
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (v ? (y(S), (S = -1)) : (v = !0), R(x, i - a)))
                : ((e.sortIndex = s), n(u, e), m || h || ((m = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      5296: function (e, t, n) {
        "use strict";
        e.exports = n(6813);
      },
      3897: function (e) {
        (e.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      5372: function (e) {
        (e.exports = function (e) {
          if (Array.isArray(e)) return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      3405: function (e, t, n) {
        var r = n(3897);
        (e.exports = function (e) {
          if (Array.isArray(e)) return r(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      6115: function (e) {
        (e.exports = function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      6690: function (e) {
        (e.exports = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      9728: function (e, t, n) {
        var r = n(4062);
        function o(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, r(o.key), o);
          }
        }
        (e.exports = function (e, t, n) {
          return (
            t && o(e.prototype, t),
            n && o(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      4704: function (e, t, n) {
        var r = n(6116);
        (e.exports = function (e, t) {
          var n =
            ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = r(e)) ||
              (t && e && "number" === typeof e.length)
            ) {
              n && (e = n);
              var o = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return o >= e.length
                    ? { done: !0 }
                    : { done: !1, value: e[o++] };
                },
                e: function (e) {
                  throw e;
                },
                f: i,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          }
          var a,
            s = !0,
            l = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (s = e.done), e;
            },
            e: function (e) {
              (l = !0), (a = e);
            },
            f: function () {
              try {
                s || null == n.return || n.return();
              } finally {
                if (l) throw a;
              }
            },
          };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      6389: function (e, t, n) {
        var r = n(3808),
          o = n(9617),
          i = n(4993);
        (e.exports = function (e) {
          var t = o();
          return function () {
            var n,
              o = r(e);
            if (t) {
              var a = r(this).constructor;
              n = Reflect.construct(o, arguments, a);
            } else n = o.apply(this, arguments);
            return i(this, n);
          };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      8416: function (e, t, n) {
        var r = n(4062);
        (e.exports = function (e, t, n) {
          return (
            (t = r(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      1588: function (e, t, n) {
        var r = n(1753);
        function o() {
          return (
            "undefined" !== typeof Reflect && Reflect.get
              ? ((e.exports = o = Reflect.get.bind()),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports))
              : ((e.exports = o =
                  function (e, t, n) {
                    var o = r(e, t);
                    if (o) {
                      var i = Object.getOwnPropertyDescriptor(o, t);
                      return i.get
                        ? i.get.call(arguments.length < 3 ? e : n)
                        : i.value;
                    }
                  }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports)),
            o.apply(this, arguments)
          );
        }
        (e.exports = o),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      3808: function (e) {
        function t(n) {
          return (
            (e.exports = t =
              Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      1655: function (e, t, n) {
        var r = n(6015);
        (e.exports = function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && r(e, t);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      9617: function (e) {
        (e.exports = function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      9498: function (e) {
        (e.exports = function (e) {
          if (
            ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      8872: function (e) {
        (e.exports = function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              o,
              i,
              a,
              s = [],
              l = !0,
              u = !1;
            try {
              if (((i = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = i.call(n)).done) &&
                  (s.push(r.value), s.length !== t);
                  l = !0
                );
            } catch (c) {
              (u = !0), (o = c);
            } finally {
              try {
                if (
                  !l &&
                  null != n.return &&
                  ((a = n.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (u) throw o;
              }
            }
            return s;
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      2218: function (e) {
        (e.exports = function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      2281: function (e) {
        (e.exports = function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      2122: function (e, t, n) {
        var r = n(8416);
        function o(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        (e.exports = function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  r(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
          }
          return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      4993: function (e, t, n) {
        var r = n(8698).default,
          o = n(6115);
        (e.exports = function (e, t) {
          if (t && ("object" === r(t) || "function" === typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return o(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      6015: function (e) {
        function t(n, r) {
          return (
            (e.exports = t =
              Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n, r)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      7424: function (e, t, n) {
        var r = n(5372),
          o = n(8872),
          i = n(6116),
          a = n(2218);
        (e.exports = function (e, t) {
          return r(e) || o(e, t) || i(e, t) || a();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      1753: function (e, t, n) {
        var r = n(3808);
        (e.exports = function (e, t) {
          for (
            ;
            !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e));

          );
          return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      861: function (e, t, n) {
        var r = n(3405),
          o = n(9498),
          i = n(6116),
          a = n(2281);
        (e.exports = function (e) {
          return r(e) || o(e) || i(e) || a();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      5036: function (e, t, n) {
        var r = n(8698).default;
        (e.exports = function (e, t) {
          if ("object" !== r(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" !== r(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      4062: function (e, t, n) {
        var r = n(8698).default,
          o = n(5036);
        (e.exports = function (e) {
          var t = o(e, "string");
          return "symbol" === r(t) ? t : String(t);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      8698: function (e) {
        function t(n) {
          return (
            (e.exports = t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      6116: function (e, t, n) {
        var r = n(3897);
        (e.exports = function (e, t) {
          if (e) {
            if ("string" === typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(e, t)
                : void 0
            );
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ("object" === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var a = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & o && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach(function (e) {
            a[e] = function () {
              return r[e];
            };
          });
        return (
          (a.default = function () {
            return r;
          }),
          n.d(i, a),
          i
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e = n(2791),
        t = n.t(e, 2),
        r = n(1250);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                s = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (c) {
                (u = !0), (o = c);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          i(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function s(e) {
        return (
          (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          s(e)
        );
      }
      function l() {
        l = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (T) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function f(e, t, n, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            s = new C(o || []);
          return r(a, "_invoke", { value: A(e, n, s) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = f;
        var p = {};
        function h() {}
        function m() {}
        function v() {}
        var g = {};
        c(g, i, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          b = y && y(y(j([])));
        b && b !== t && n.call(b, i) && (g = b);
        var w = (v.prototype = h.prototype = Object.create(g));
        function x(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          function o(r, i, a, l) {
            var u = d(e[r], e, i);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == s(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      o("next", e, a, l);
                    },
                    function (e) {
                      o("throw", e, a, l);
                    },
                  )
                : t.resolve(f).then(
                    function (e) {
                      (c.value = e), a(c);
                    },
                    function (e) {
                      return o("throw", e, a, l);
                    },
                  );
            }
            l(u.arg);
          }
          var i;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  o(e, n, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function A(e, t, n) {
          var r = "suspendedStart";
          return function (o, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === o) throw i;
              return N();
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var s = _(a, n);
                if (s) {
                  if (s === p) continue;
                  return s;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = d(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === p)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              p
            );
          var o = d(r, e.iterator, t.arg);
          if ("throw" === o.type)
            return (
              (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), p
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function C(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function j(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = v),
          r(w, "constructor", { value: v, configurable: !0 }),
          r(v, "constructor", { value: m, configurable: !0 }),
          (m.displayName = c(v, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), c(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          x(k.prototype),
          c(k.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new k(f(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          x(w),
          c(w, u, "Generator"),
          c(w, i, function () {
            return this;
          }),
          c(w, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = j),
          (C.prototype = {
            constructor: C,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (s && l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), S(n), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    S(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function u(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function c(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              u(i, r, o, a, s, "next", e);
            }
            function s(e) {
              u(i, r, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var f = n(184),
        d = function (e) {
          var t = e.message;
          return (0, f.jsx)("p", { className: "error-message", children: t });
        };
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function h(e) {
        var t = (function (e, t) {
          if ("object" !== s(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== s(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === s(t) ? t : String(t);
      }
      function m(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, h(r.key), r);
        }
      }
      function v(e, t, n) {
        return (
          t && m(e.prototype, t),
          n && m(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var g = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          p(this, e),
            (this.apiKey = void 0),
            (this.username = void 0),
            (this.password = void 0),
            (this.accessToken = void 0),
            (this.basePath = void 0),
            (this.baseOptions = void 0),
            (this.formDataCtor = void 0),
            (this.apiKey = t.apiKey),
            (this.username = t.username),
            (this.password = t.password),
            (this.accessToken = t.accessToken),
            (this.basePath = t.basePath),
            (this.baseOptions = t.baseOptions),
            (this.formDataCtor = t.formDataCtor);
        }
        return (
          v(e, [
            {
              key: "isJsonMime",
              value: function (e) {
                var t = new RegExp(
                  "^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$",
                  "i",
                );
                return (
                  null !== e &&
                  (t.test(e) ||
                    "application/json-patch+json" === e.toLowerCase())
                );
              },
            },
          ]),
          e
        );
      })();
      function y(e, t) {
        return (
          (y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          y(e, t)
        );
      }
      function b(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function",
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && y(e, t);
      }
      function w(e) {
        return (
          (w = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          w(e)
        );
      }
      function x() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function k(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function A(e) {
        var t = x();
        return function () {
          var n,
            r = w(e);
          if (t) {
            var o = w(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === s(t) || "function" === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return k(e);
          })(this, n);
        };
      }
      function _(e, t, n) {
        return (
          (t = h(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                _(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var C = n(4569),
        j = n.n(C);
      function N(e, t, n) {
        return (
          (N = x()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(e, r))();
                return n && y(o, n.prototype), o;
              }),
          N.apply(null, arguments)
        );
      }
      function T(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (T = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return N(e, arguments, w(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              y(r, e)
            );
          }),
          T(e)
        );
      }
      var P = "http://localhost".replace(/\/+$/, ""),
        O = v(function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : P,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : j();
          p(this, e),
            (this.basePath = n),
            (this.axios = r),
            (this.configuration = void 0),
            t &&
              ((this.configuration = t),
              (this.basePath = t.basePath || this.basePath));
        }),
        L = (function (e) {
          b(n, e);
          var t = A(n);
          function n(e, r) {
            var o;
            return (
              p(this, n),
              ((o = t.call(this, r)).field = e),
              (o.name = "RequiredError"),
              o
            );
          }
          return v(n);
        })(T(Error)),
        R = "https://example.com",
        D = function (e, t, n) {
          if (null === n || void 0 === n)
            throw new L(
              t,
              "Required parameter "
                .concat(t, " was null or undefined when calling ")
                .concat(e, "."),
            );
        },
        M = (function () {
          var e = c(
            l().mark(function e(t, n, r, o) {
              var i;
              return l().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!o || !o.accessToken) {
                        e.next = 12;
                        break;
                      }
                      if ("function" !== typeof o.accessToken) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 4), o.accessToken(n, r);
                    case 4:
                      (e.t0 = e.sent), (e.next = 10);
                      break;
                    case 7:
                      return (e.next = 9), o.accessToken;
                    case 9:
                      e.t0 = e.sent;
                    case 10:
                      (i = e.t0), (t.Authorization = "Bearer " + i);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t, n, r, o) {
            return e.apply(this, arguments);
          };
        })();
      function I(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        null != t &&
          ("object" === typeof t
            ? Array.isArray(t)
              ? t.forEach(function (t) {
                  return I(e, t, n);
                })
              : Object.keys(t).forEach(function (r) {
                  return I(
                    e,
                    t[r],
                    ""
                      .concat(n)
                      .concat("" !== n ? "." : "")
                      .concat(r),
                  );
                })
            : e.has(n)
            ? e.append(n, t)
            : e.set(n, t));
      }
      var F = function (e) {
          for (
            var t = new URLSearchParams(e.search),
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          I(t, r), (e.search = t.toString());
        },
        B = function (e, t, n) {
          var r = "string" !== typeof e;
          return (
            r && n && n.isJsonMime ? n.isJsonMime(t.headers["Content-Type"]) : r
          )
            ? JSON.stringify(void 0 !== e ? e : {})
            : e || "";
        },
        z = function (e) {
          return e.pathname + e.search + e.hash;
        },
        U = function (e, t, n, r) {
          return function () {
            var o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : t,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : n,
              a = S(
                S({}, e.options),
                {},
                {
                  url:
                    ((null === r || void 0 === r ? void 0 : r.basePath) || i) +
                    e.url,
                },
              );
            return o.request(a);
          };
        },
        W = function (e) {
          var t = (function (e) {
            return {
              askGptAskGptPost: (function () {
                var t = c(
                  l().mark(function t(n) {
                    var r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      c,
                      f = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                              D("askGptAskGptPost", "chatGPTRequest", n),
                              (o = new URL("/ask_gpt", R)),
                              e && (i = e.baseOptions),
                              (a = S(S({ method: "POST" }, i), r)),
                              (u = {}),
                              ((s = {})["Content-Type"] = "application/json"),
                              F(o, u),
                              (c = i && i.headers ? i.headers : {}),
                              (a.headers = S(S(S({}, s), c), r.headers)),
                              (a.data = B(n, a, e)),
                              t.abrupt("return", { url: z(o), options: a })
                            );
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              createCompanyApiCompaniesPost: (function () {
                var t = c(
                  l().mark(function t(n) {
                    var r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      c,
                      f = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                              D(
                                "createCompanyApiCompaniesPost",
                                "companyCreate",
                                n,
                              ),
                              (o = new URL("/api/companies", R)),
                              e && (i = e.baseOptions),
                              (a = S(S({ method: "POST" }, i), r)),
                              (u = {}),
                              ((s = {})["Content-Type"] = "application/json"),
                              F(o, u),
                              (c = i && i.headers ? i.headers : {}),
                              (a.headers = S(S(S({}, s), c), r.headers)),
                              (a.data = B(n, a, e)),
                              t.abrupt("return", { url: z(o), options: a })
                            );
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              createEmployeeApiEmployeesPost: (function () {
                var t = c(
                  l().mark(function t(n) {
                    var r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      c,
                      f = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                              D(
                                "createEmployeeApiEmployeesPost",
                                "employeeBase",
                                n,
                              ),
                              (o = new URL("/api/employees", R)),
                              e && (i = e.baseOptions),
                              (a = S(S({ method: "POST" }, i), r)),
                              (u = {}),
                              ((s = {})["Content-Type"] = "application/json"),
                              F(o, u),
                              (c = i && i.headers ? i.headers : {}),
                              (a.headers = S(S(S({}, s), c), r.headers)),
                              (a.data = B(n, a, e)),
                              t.abrupt("return", { url: z(o), options: a })
                            );
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              createTaskApiTasksPost: (function () {
                var t = c(
                  l().mark(function t(n) {
                    var r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      c,
                      f = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                              D("createTaskApiTasksPost", "taskCreate", n),
                              (o = new URL("/api/tasks", R)),
                              e && (i = e.baseOptions),
                              (a = S(S({ method: "POST" }, i), r)),
                              (s = {}),
                              (u = {}),
                              (t.next = 10),
                              M(s, "OAuth2PasswordBearer", [], e)
                            );
                          case 10:
                            return (
                              (s["Content-Type"] = "application/json"),
                              F(o, u),
                              (c = i && i.headers ? i.headers : {}),
                              (a.headers = S(S(S({}, s), c), r.headers)),
                              (a.data = B(n, a, e)),
                              t.abrupt("return", { url: z(o), options: a })
                            );
                          case 16:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              createUserApiUsersPost: (function () {
                var t = c(
                  l().mark(function t(n) {
                    var r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      c,
                      f = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                              D("createUserApiUsersPost", "userCreate", n),
                              (o = new URL("/api/users", R)),
                              e && (i = e.baseOptions),
                              (a = S(S({ method: "POST" }, i), r)),
                              (u = {}),
                              ((s = {})["Content-Type"] = "application/json"),
                              F(o, u),
                              (c = i && i.headers ? i.headers : {}),
                              (a.headers = S(S(S({}, s), c), r.headers)),
                              (a.data = B(n, a, e)),
                              t.abrupt("return", { url: z(o), options: a })
                            );
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              deleteTaskApiTasksTaskIdDelete: (function () {
                var t = c(
                  l().mark(function t(n) {
                    var r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      c,
                      f,
                      d = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = d.length > 1 && void 0 !== d[1] ? d[1] : {}),
                              D("deleteTaskApiTasksTaskIdDelete", "taskId", n),
                              (o = "/api/tasks/{task_id}".replace(
                                "{".concat("task_id", "}"),
                                encodeURIComponent(String(n)),
                              )),
                              (i = new URL(o, R)),
                              e && (a = e.baseOptions),
                              (s = S(S({ method: "DELETE" }, a), r)),
                              (u = {}),
                              (c = {}),
                              (t.next = 10),
                              M(u, "OAuth2PasswordBearer", [], e)
                            );
                          case 10:
                            return (
                              F(i, c),
                              (f = a && a.headers ? a.headers : {}),
                              (s.headers = S(S(S({}, u), f), r.headers)),
                              t.abrupt("return", { url: z(i), options: s })
                            );
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              generateTokenApiTokenPost: (function () {
                var t = c(
                  l().mark(function t(n, r, o, i, a, s, u) {
                    var c,
                      f,
                      d,
                      p,
                      h,
                      m,
                      v,
                      g,
                      y = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (c = y.length > 7 && void 0 !== y[7] ? y[7] : {}),
                              D("generateTokenApiTokenPost", "type", n),
                              D("generateTokenApiTokenPost", "username", r),
                              D("generateTokenApiTokenPost", "password", o),
                              (f = new URL("/api/token", R)),
                              e && (d = e.baseOptions),
                              (p = S(S({ method: "POST" }, d), c)),
                              (h = {}),
                              (m = {}),
                              (v = new URLSearchParams()),
                              void 0 !== n && (m.type = n),
                              void 0 !== i && v.set("grant_type", i),
                              void 0 !== r && v.set("username", r),
                              void 0 !== o && v.set("password", o),
                              void 0 !== a && v.set("scope", a),
                              void 0 !== s && v.set("client_id", s),
                              void 0 !== u && v.set("client_secret", u),
                              (h["Content-Type"] =
                                "application/x-www-form-urlencoded"),
                              F(f, m),
                              (g = d && d.headers ? d.headers : {}),
                              (p.headers = S(S(S({}, h), g), c.headers)),
                              (p.data = v.toString()),
                              t.abrupt("return", { url: z(f), options: p })
                            );
                          case 24:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e, n, r, o, i, a, s) {
                  return t.apply(this, arguments);
                };
              })(),
              getAllCompaniesApiCompaniesNamesGet: (function () {
                var t = c(
                  l().mark(function t() {
                    var n,
                      r,
                      o,
                      i,
                      a,
                      s,
                      u = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                              (r = new URL("/api/companies/names", R)),
                              e && (o = e.baseOptions),
                              (i = S(S({ method: "GET" }, o), n)),
                              (a = {}),
                              F(r, {}),
                              (s = o && o.headers ? o.headers : {}),
                              (i.headers = S(S(S({}, a), s), n.headers)),
                              t.abrupt("return", { url: z(r), options: i })
                            );
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
              getCompanyApiCompaniesMeGet: (function () {
                var t = c(
                  l().mark(function t() {
                    var n,
                      r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      c = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = c.length > 0 && void 0 !== c[0] ? c[0] : {}),
                              (r = new URL("/api/companies/me", R)),
                              e && (o = e.baseOptions),
                              (i = S(S({ method: "GET" }, o), n)),
                              (a = {}),
                              (s = {}),
                              (t.next = 9),
                              M(a, "OAuth2PasswordBearer", [], e)
                            );
                          case 9:
                            return (
                              F(r, s),
                              (u = o && o.headers ? o.headers : {}),
                              (i.headers = S(S(S({}, a), u), n.headers)),
                              t.abrupt("return", { url: z(r), options: i })
                            );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
              getEmployeesTasksApiEmployeesTasksGet: (function () {
                var t = c(
                  l().mark(function t() {
                    var n,
                      r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      c = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = c.length > 0 && void 0 !== c[0] ? c[0] : {}),
                              (r = new URL("/api/employees/tasks", R)),
                              e && (o = e.baseOptions),
                              (i = S(S({ method: "GET" }, o), n)),
                              (a = {}),
                              (s = {}),
                              (t.next = 9),
                              M(a, "OAuth2PasswordBearer", [], e)
                            );
                          case 9:
                            return (
                              F(r, s),
                              (u = o && o.headers ? o.headers : {}),
                              (i.headers = S(S(S({}, a), u), n.headers)),
                              t.abrupt("return", { url: z(r), options: i })
                            );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
              getTaskApiTasksTaskIdGet: (function () {
                var t = c(
                  l().mark(function t(n) {
                    var r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      c,
                      f,
                      d = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = d.length > 1 && void 0 !== d[1] ? d[1] : {}),
                              D("getTaskApiTasksTaskIdGet", "taskId", n),
                              (o = "/api/tasks/{task_id}".replace(
                                "{".concat("task_id", "}"),
                                encodeURIComponent(String(n)),
                              )),
                              (i = new URL(o, R)),
                              e && (a = e.baseOptions),
                              (s = S(S({ method: "GET" }, a), r)),
                              (u = {}),
                              (c = {}),
                              (t.next = 10),
                              M(u, "OAuth2PasswordBearer", [], e)
                            );
                          case 10:
                            return (
                              F(i, c),
                              (f = a && a.headers ? a.headers : {}),
                              (s.headers = S(S(S({}, u), f), r.headers)),
                              t.abrupt("return", { url: z(i), options: s })
                            );
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              getTasksApiTasksGet: (function () {
                var t = c(
                  l().mark(function t() {
                    var n,
                      r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      c = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = c.length > 0 && void 0 !== c[0] ? c[0] : {}),
                              (r = new URL("/api/tasks", R)),
                              e && (o = e.baseOptions),
                              (i = S(S({ method: "GET" }, o), n)),
                              (a = {}),
                              (s = {}),
                              (t.next = 9),
                              M(a, "OAuth2PasswordBearer", [], e)
                            );
                          case 9:
                            return (
                              F(r, s),
                              (u = o && o.headers ? o.headers : {}),
                              (i.headers = S(S(S({}, a), u), n.headers)),
                              t.abrupt("return", { url: z(r), options: i })
                            );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
              getUserApiUsersMeGet: (function () {
                var t = c(
                  l().mark(function t() {
                    var n,
                      r,
                      o,
                      i,
                      a,
                      s,
                      u,
                      c = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = c.length > 0 && void 0 !== c[0] ? c[0] : {}),
                              (r = new URL("/api/users/me", R)),
                              e && (o = e.baseOptions),
                              (i = S(S({ method: "GET" }, o), n)),
                              (a = {}),
                              (s = {}),
                              (t.next = 9),
                              M(a, "OAuth2PasswordBearer", [], e)
                            );
                          case 9:
                            return (
                              F(r, s),
                              (u = o && o.headers ? o.headers : {}),
                              (i.headers = S(S(S({}, a), u), n.headers)),
                              t.abrupt("return", { url: z(r), options: i })
                            );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
              updatePasswordApiUsersUserIdPut: (function () {
                var t = c(
                  l().mark(function t(n, r) {
                    var o,
                      i,
                      a,
                      s,
                      u,
                      c,
                      f,
                      d,
                      p = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (o = p.length > 2 && void 0 !== p[2] ? p[2] : {}),
                              D("updatePasswordApiUsersUserIdPut", "userId", n),
                              D(
                                "updatePasswordApiUsersUserIdPut",
                                "changePassword",
                                r,
                              ),
                              (i = "/api/users/{user_id}".replace(
                                "{".concat("user_id", "}"),
                                encodeURIComponent(String(n)),
                              )),
                              (a = new URL(i, R)),
                              e && (s = e.baseOptions),
                              (u = S(S({ method: "PUT" }, s), o)),
                              (c = {}),
                              (f = {}),
                              (t.next = 11),
                              M(c, "OAuth2PasswordBearer", [], e)
                            );
                          case 11:
                            return (
                              (c["Content-Type"] = "application/json"),
                              F(a, f),
                              (d = s && s.headers ? s.headers : {}),
                              (u.headers = S(S(S({}, c), d), o.headers)),
                              (u.data = B(r, u, e)),
                              t.abrupt("return", { url: z(a), options: u })
                            );
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })(),
              updateTaskApiTasksTaskIdPut: (function () {
                var t = c(
                  l().mark(function t(n, r) {
                    var o,
                      i,
                      a,
                      s,
                      u,
                      c,
                      f,
                      d,
                      p = arguments;
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (o = p.length > 2 && void 0 !== p[2] ? p[2] : {}),
                              D("updateTaskApiTasksTaskIdPut", "taskId", n),
                              D("updateTaskApiTasksTaskIdPut", "taskCreate", r),
                              (i = "/api/tasks/{task_id}".replace(
                                "{".concat("task_id", "}"),
                                encodeURIComponent(String(n)),
                              )),
                              (a = new URL(i, R)),
                              e && (s = e.baseOptions),
                              (u = S(S({ method: "PUT" }, s), o)),
                              (c = {}),
                              (f = {}),
                              (t.next = 11),
                              M(c, "OAuth2PasswordBearer", [], e)
                            );
                          case 11:
                            return (
                              (c["Content-Type"] = "application/json"),
                              F(a, f),
                              (d = s && s.headers ? s.headers : {}),
                              (u.headers = S(S(S({}, c), d), o.headers)),
                              (u.data = B(r, u, e)),
                              t.abrupt("return", { url: z(a), options: u })
                            );
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })(),
            };
          })(e);
          return {
            askGptAskGptPost: function (n, r) {
              return c(
                l().mark(function o() {
                  var i;
                  return l().wrap(function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (o.next = 2), t.askGptAskGptPost(n, r);
                        case 2:
                          return (
                            (i = o.sent), o.abrupt("return", U(i, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return o.stop();
                      }
                  }, o);
                }),
              )();
            },
            createCompanyApiCompaniesPost: function (n, r) {
              return c(
                l().mark(function o() {
                  var i;
                  return l().wrap(function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            (o.next = 2), t.createCompanyApiCompaniesPost(n, r)
                          );
                        case 2:
                          return (
                            (i = o.sent), o.abrupt("return", U(i, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return o.stop();
                      }
                  }, o);
                }),
              )();
            },
            createEmployeeApiEmployeesPost: function (n, r) {
              return c(
                l().mark(function o() {
                  var i;
                  return l().wrap(function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            (o.next = 2), t.createEmployeeApiEmployeesPost(n, r)
                          );
                        case 2:
                          return (
                            (i = o.sent), o.abrupt("return", U(i, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return o.stop();
                      }
                  }, o);
                }),
              )();
            },
            createTaskApiTasksPost: function (n, r) {
              return c(
                l().mark(function o() {
                  var i;
                  return l().wrap(function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (o.next = 2), t.createTaskApiTasksPost(n, r);
                        case 2:
                          return (
                            (i = o.sent), o.abrupt("return", U(i, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return o.stop();
                      }
                  }, o);
                }),
              )();
            },
            createUserApiUsersPost: function (n, r) {
              return c(
                l().mark(function o() {
                  var i;
                  return l().wrap(function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (o.next = 2), t.createUserApiUsersPost(n, r);
                        case 2:
                          return (
                            (i = o.sent), o.abrupt("return", U(i, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return o.stop();
                      }
                  }, o);
                }),
              )();
            },
            deleteTaskApiTasksTaskIdDelete: function (n, r) {
              return c(
                l().mark(function o() {
                  var i;
                  return l().wrap(function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            (o.next = 2), t.deleteTaskApiTasksTaskIdDelete(n, r)
                          );
                        case 2:
                          return (
                            (i = o.sent), o.abrupt("return", U(i, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return o.stop();
                      }
                  }, o);
                }),
              )();
            },
            generateTokenApiTokenPost: function (n, r, o, i, a, s, u, f) {
              return c(
                l().mark(function c() {
                  var d;
                  return l().wrap(function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          return (
                            (l.next = 2),
                            t.generateTokenApiTokenPost(n, r, o, i, a, s, u, f)
                          );
                        case 2:
                          return (
                            (d = l.sent), l.abrupt("return", U(d, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return l.stop();
                      }
                  }, c);
                }),
              )();
            },
            getAllCompaniesApiCompaniesNamesGet: function (n) {
              return c(
                l().mark(function r() {
                  var o;
                  return l().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.next = 2),
                            t.getAllCompaniesApiCompaniesNamesGet(n)
                          );
                        case 2:
                          return (
                            (o = r.sent), r.abrupt("return", U(o, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )();
            },
            getCompanyApiCompaniesMeGet: function (n) {
              return c(
                l().mark(function r() {
                  var o;
                  return l().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), t.getCompanyApiCompaniesMeGet(n);
                        case 2:
                          return (
                            (o = r.sent), r.abrupt("return", U(o, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )();
            },
            getEmployeesTasksApiEmployeesTasksGet: function (n) {
              return c(
                l().mark(function r() {
                  var o;
                  return l().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.next = 2),
                            t.getEmployeesTasksApiEmployeesTasksGet(n)
                          );
                        case 2:
                          return (
                            (o = r.sent), r.abrupt("return", U(o, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )();
            },
            getTaskApiTasksTaskIdGet: function (n, r) {
              return c(
                l().mark(function o() {
                  var i;
                  return l().wrap(function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (o.next = 2), t.getTaskApiTasksTaskIdGet(n, r);
                        case 2:
                          return (
                            (i = o.sent), o.abrupt("return", U(i, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return o.stop();
                      }
                  }, o);
                }),
              )();
            },
            getTasksApiTasksGet: function (n) {
              return c(
                l().mark(function r() {
                  var o;
                  return l().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), t.getTasksApiTasksGet(n);
                        case 2:
                          return (
                            (o = r.sent), r.abrupt("return", U(o, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )();
            },
            getUserApiUsersMeGet: function (n) {
              return c(
                l().mark(function r() {
                  var o;
                  return l().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), t.getUserApiUsersMeGet(n);
                        case 2:
                          return (
                            (o = r.sent), r.abrupt("return", U(o, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )();
            },
            updatePasswordApiUsersUserIdPut: function (n, r, o) {
              return c(
                l().mark(function i() {
                  var a;
                  return l().wrap(function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (i.next = 2),
                            t.updatePasswordApiUsersUserIdPut(n, r, o)
                          );
                        case 2:
                          return (
                            (a = i.sent), i.abrupt("return", U(a, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return i.stop();
                      }
                  }, i);
                }),
              )();
            },
            updateTaskApiTasksTaskIdPut: function (n, r, o) {
              return c(
                l().mark(function i() {
                  var a;
                  return l().wrap(function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (i.next = 2), t.updateTaskApiTasksTaskIdPut(n, r, o)
                          );
                        case 2:
                          return (
                            (a = i.sent), i.abrupt("return", U(a, j(), P, e))
                          );
                        case 4:
                        case "end":
                          return i.stop();
                      }
                  }, i);
                }),
              )();
            },
          };
        },
        H = (function (e) {
          b(n, e);
          var t = A(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            v(n, [
              {
                key: "askGptAskGptPost",
                value: function (e, t) {
                  var n = this;
                  return W(this.configuration)
                    .askGptAskGptPost(e, t)
                    .then(function (e) {
                      return e(n.axios, n.basePath);
                    });
                },
              },
              {
                key: "createCompanyApiCompaniesPost",
                value: function (e, t) {
                  var n = this;
                  return W(this.configuration)
                    .createCompanyApiCompaniesPost(e, t)
                    .then(function (e) {
                      return e(n.axios, n.basePath);
                    });
                },
              },
              {
                key: "createEmployeeApiEmployeesPost",
                value: function (e, t) {
                  var n = this;
                  return W(this.configuration)
                    .createEmployeeApiEmployeesPost(e, t)
                    .then(function (e) {
                      return e(n.axios, n.basePath);
                    });
                },
              },
              {
                key: "createTaskApiTasksPost",
                value: function (e, t) {
                  var n = this;
                  return W(this.configuration)
                    .createTaskApiTasksPost(e, t)
                    .then(function (e) {
                      return e(n.axios, n.basePath);
                    });
                },
              },
              {
                key: "createUserApiUsersPost",
                value: function (e, t) {
                  var n = this;
                  return W(this.configuration)
                    .createUserApiUsersPost(e, t)
                    .then(function (e) {
                      return e(n.axios, n.basePath);
                    });
                },
              },
              {
                key: "deleteTaskApiTasksTaskIdDelete",
                value: function (e, t) {
                  var n = this;
                  return W(this.configuration)
                    .deleteTaskApiTasksTaskIdDelete(e, t)
                    .then(function (e) {
                      return e(n.axios, n.basePath);
                    });
                },
              },
              {
                key: "generateTokenApiTokenPost",
                value: function (e, t, n, r, o, i, a, s) {
                  var l = this;
                  return W(this.configuration)
                    .generateTokenApiTokenPost(e, t, n, r, o, i, a, s)
                    .then(function (e) {
                      return e(l.axios, l.basePath);
                    });
                },
              },
              {
                key: "getAllCompaniesApiCompaniesNamesGet",
                value: function (e) {
                  var t = this;
                  return W(this.configuration)
                    .getAllCompaniesApiCompaniesNamesGet(e)
                    .then(function (e) {
                      return e(t.axios, t.basePath);
                    });
                },
              },
              {
                key: "getCompanyApiCompaniesMeGet",
                value: function (e) {
                  var t = this;
                  return W(this.configuration)
                    .getCompanyApiCompaniesMeGet(e)
                    .then(function (e) {
                      return e(t.axios, t.basePath);
                    });
                },
              },
              {
                key: "getEmployeesTasksApiEmployeesTasksGet",
                value: function (e) {
                  var t = this;
                  return W(this.configuration)
                    .getEmployeesTasksApiEmployeesTasksGet(e)
                    .then(function (e) {
                      return e(t.axios, t.basePath);
                    });
                },
              },
              {
                key: "getTaskApiTasksTaskIdGet",
                value: function (e, t) {
                  var n = this;
                  return W(this.configuration)
                    .getTaskApiTasksTaskIdGet(e, t)
                    .then(function (e) {
                      return e(n.axios, n.basePath);
                    });
                },
              },
              {
                key: "getTasksApiTasksGet",
                value: function (e) {
                  var t = this;
                  return W(this.configuration)
                    .getTasksApiTasksGet(e)
                    .then(function (e) {
                      return e(t.axios, t.basePath);
                    });
                },
              },
              {
                key: "getUserApiUsersMeGet",
                value: function (e) {
                  var t = this;
                  return W(this.configuration)
                    .getUserApiUsersMeGet(e)
                    .then(function (e) {
                      return e(t.axios, t.basePath);
                    });
                },
              },
              {
                key: "updatePasswordApiUsersUserIdPut",
                value: function (e, t, n) {
                  var r = this;
                  return W(this.configuration)
                    .updatePasswordApiUsersUserIdPut(e, t, n)
                    .then(function (e) {
                      return e(r.axios, r.basePath);
                    });
                },
              },
              {
                key: "updateTaskApiTasksTaskIdPut",
                value: function (e, t, n) {
                  var r = this;
                  return W(this.configuration)
                    .updateTaskApiTasksTaskIdPut(e, t, n)
                    .then(function (e) {
                      return e(r.axios, r.basePath);
                    });
                },
              },
            ]),
            n
          );
        })(O),
        Q = (0, e.createContext)(),
        V = function (t) {
          var n = a(
              (0, e.useState)(localStorage.getItem("productivityToken")),
              2,
            ),
            r = n[0],
            o = n[1],
            i = new g();
          (i.basePath = "https://productivity-pzaiolprqa-uc.a.run.app"),
            (i.baseOptions = {
              headers: {
                Authorization: "Bearer " + (null === r ? r : r.access_token),
              },
            });
          var s = new H(i);
          return (
            (0, e.useEffect)(
              function () {
                console.log("USER"), console.log(r);
                var e = (function () {
                  var e = c(
                    l().mark(function e() {
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              s
                                .getUserApiUsersMeGet()
                                .then(function () {})
                                .catch(function () {
                                  o(null);
                                }),
                                localStorage.setItem("productivityToken", r);
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                e();
              },
              [r],
            ),
            (0, f.jsx)(Q.Provider, { value: [r, o], children: t.children })
          );
        },
        q = function (t) {
          var n = t.setRegister,
            r = t.setCompanyLogIn,
            o = a((0, e.useState)(""), 2),
            i = o[0],
            s = o[1],
            u = a((0, e.useState)(""), 2),
            p = u[0],
            h = u[1],
            m = a((0, e.useState)(""), 2),
            v = m[0],
            y = m[1],
            b = a((0, e.useContext)(Q), 2)[1],
            w = a((0, e.useState)("password"), 2),
            x = w[0],
            k = w[1],
            A = new g();
          A.basePath = "https://productivity-pzaiolprqa-uc.a.run.app";
          var _ = new H(A),
            E = (function () {
              var e = c(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          _.generateTokenApiTokenPost("user", i, p)
                            .then(function (e) {
                              b(e.data);
                            })
                            .catch(function (e) {
                              y(e.response.data.detail);
                            });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            S = function (e) {
              e.preventDefault(),
                y(""),
                "" === p || "" === i
                  ? y("You need to fill both email and password")
                  : E();
            };
          return (0, f.jsxs)("div", {
            className: "login-form",
            children: [
              (0, f.jsx)("label", {
                className: "title-login",
                children: "Welcome back and be productive!",
              }),
              (0, f.jsxs)("div", {
                className: "field",
                children: [
                  (0, f.jsx)("label", {
                    className: "login-label",
                    children: "Email address *",
                  }),
                  (0, f.jsx)("div", {
                    className: "login-field",
                    style: {
                      border:
                        "" === v ? "1px solid #1B3D84" : "1px solid #AF3218",
                    },
                    children: (0, f.jsx)("input", {
                      name: "email",
                      type: "email",
                      placeholder: "E.g. productivity@email.com",
                      value: i,
                      onChange: function (e) {
                        return s(e.target.value);
                      },
                      className: "login-input",
                    }),
                  }),
                ],
              }),
              (0, f.jsxs)("div", {
                className: "field",
                children: [
                  (0, f.jsx)("label", {
                    className: "login-label",
                    children: "Password *",
                  }),
                  (0, f.jsxs)("div", {
                    className: "login-field",
                    style: {
                      border:
                        "" === v ? "1px solid #1B3D84" : "1px solid #AF3218",
                    },
                    onKeyUp: function (e) {
                      return (function (e) {
                        "Enter" === e.key && S(e);
                      })(e);
                    },
                    children: [
                      (0, f.jsx)("input", {
                        name: "password",
                        type: x,
                        placeholder: "Enter at least 8 digits",
                        value: p,
                        onChange: function (e) {
                          return h(e.target.value);
                        },
                        className: "login-input",
                      }),
                      (0, f.jsx)("button", {
                        className: "show-password ".concat(
                          "text" === x ? "show-closed" : "",
                        ),
                        onClick: function () {
                          k("password" === x ? "text" : "password");
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, f.jsx)(d, { message: v }),
              (0, f.jsx)("br", {}),
              (0, f.jsxs)("button", {
                className: "submit-login",
                onClick: function (e) {
                  return S(e);
                },
                children: [
                  "Log in",
                  (0, f.jsx)("span", { className: "login-icon" }),
                ],
              }),
              (0, f.jsxs)("div", {
                className: "no-account-info",
                children: [
                  "Don't have an account?",
                  (0, f.jsx)("button", {
                    className: "no-account-register",
                    onClick: function () {
                      return n(!0);
                    },
                    children: "Register",
                  }),
                ],
              }),
              (0, f.jsxs)("div", {
                className: "no-account-info",
                style: { marginTop: "2%" },
                children: [
                  "Are you a company?",
                  (0, f.jsx)("button", {
                    className: "no-account-register",
                    onClick: function () {
                      return r(!0);
                    },
                    children: "Log in as a company",
                  }),
                ],
              }),
            ],
          });
        };
      var Y = function () {
        return (0, f.jsxs)("div", {
          className: "rules-text",
          children: [
            (0, f.jsx)("h2", { children: "Welcome to Productivity" }),
            (0, f.jsx)("p", {
              children:
                "An online platform that provides a to-do list feature.",
            }),
            (0, f.jsx)("p", {
              children:
                "By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.",
            }),
            (0, f.jsx)("p", {
              children:
                "Please read these terms carefully before using our services.",
            }),
            (0, f.jsx)("h2", { children: "Acceptance of Terms" }),
            (0, f.jsx)("p", {
              children:
                "By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree to these terms, please refrain from using our website.",
            }),
            (0, f.jsx)("h2", { children: "Use of Services" }),
            (0, f.jsx)("h3", { children: "2.1 Registration" }),
            (0, f.jsx)("p", {
              children:
                "To access certain features of our website, you may be required to create an account. You must provide accurate, current, and complete information during the registration process. You are solely responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.",
            }),
            (0, f.jsx)("h3", { children: "2.2 Prohibited Activities" }),
            (0, f.jsx)("p", { children: "You agree not to:" }),
            (0, f.jsxs)("ol", {
              children: [
                (0, f.jsx)("li", {
                  children:
                    "Use our website for any unlawful purpose or in any way that violates any applicable laws or regulations.",
                }),
                (0, f.jsx)("li", {
                  children:
                    "Impersonate any person or entity, or falsely state or otherwise misrepresent yourself or your affiliation with any person or entity.",
                }),
                (0, f.jsx)("li", {
                  children:
                    "Interfere with or disrupt the functionality of our website or any servers or networks connected to our website.",
                }),
                (0, f.jsx)("li", {
                  children:
                    "Collect or store personal information about other users without their consent.",
                }),
                (0, f.jsx)("li", {
                  children:
                    "Engage in any activity that may harm, damage, or impair our website or its users.",
                }),
              ],
            }),
            (0, f.jsx)("h2", { children: "Intellectual Property Rights" }),
            (0, f.jsx)("p", {
              children:
                "All intellectual property rights, including copyrights, trademarks, and any other proprietary rights related to our website and its content, are the property of [Website Name] or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the website solely for your personal and non-commercial purposes.",
            }),
            (0, f.jsx)("h2", { children: "User Content" }),
            (0, f.jsx)("h3", { children: "4.1 Submission of Content" }),
            (0, f.jsx)("p", {
              children:
                "By submitting or posting any content on our website, you grant [Website Name] a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content for the purpose of providing our services.",
            }),
            (0, f.jsx)("h3", { children: "4.2 Responsibility for Content" }),
            (0, f.jsx)("p", {
              children:
                "You are solely responsible for the content you submit or post on our website. You represent and warrant that you have the necessary rights to the content and that it does not infringe upon the intellectual property or other rights of any third party.",
            }),
            (0, f.jsx)("h2", { children: "Disclaimer of Warranties" }),
            (0, f.jsx)("p", {
              children:
                'Our website and its services are provided on an "as is" and "as available" basis without any warranties, expressed or implied. We do not guarantee the accuracy, reliability, or completeness of any content or information provided on our website. Your use of our website is at your own risk.',
            }),
            (0, f.jsx)("h2", { children: "Limitation of Liability" }),
            (0, f.jsx)("p", {
              children:
                "To the extent permitted by applicable law, [Website Name] shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use or inability to use our website or its services.",
            }),
            (0, f.jsx)("h2", { children: "Modification of Terms" }),
            (0, f.jsx)("p", {
              children:
                "We reserve the right to modify these terms and conditions at any time without prior notice. By continuing to use our website after any modifications, you agree to be bound by the updated terms.",
            }),
            (0, f.jsx)("h2", { children: "Governing Law and Jurisdiction" }),
            (0, f.jsx)("p", {
              children:
                "These terms and conditions shall be governed by and construed in accordance with the laws. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts.",
            }),
          ],
        });
      };
      var G = function () {
          return (0, f.jsxs)("div", {
            className: "rules-text",
            children: [
              (0, f.jsx)("h2", { children: "Privacy Policy" }),
              (0, f.jsx)("p", {
                children:
                  'This Privacy Policy governs the manner in which Productivity collects, uses, maintains, and discloses information collected from users (each, a "User") of the Productivity website ("Site"). This privacy policy applies to the Site and all products and services offered by Productivity.',
              }),
              (0, f.jsx)("h3", { children: "Information Collection" }),
              (0, f.jsx)("p", {
                children:
                  "We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, and credit card information.",
              }),
              (0, f.jsx)("h3", { children: "Use of Collected Information" }),
              (0, f.jsx)("p", {
                children:
                  "The information we collect from Users may be used for the following purposes:",
              }),
              (0, f.jsxs)("ul", {
                children: [
                  (0, f.jsx)("li", { children: "To improve customer service" }),
                  (0, f.jsx)("li", {
                    children: "To personalize user experience",
                  }),
                  (0, f.jsx)("li", { children: "To process payments" }),
                  (0, f.jsx)("li", { children: "To send periodic emails" }),
                  (0, f.jsx)("li", {
                    children:
                      "To administer a contest, promotion, survey, or other site feature",
                  }),
                ],
              }),
              (0, f.jsx)("h3", { children: "Protection of Information" }),
              (0, f.jsx)("p", {
                children:
                  "We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.",
              }),
              (0, f.jsx)("h3", { children: "Sharing Personal Information" }),
              (0, f.jsx)("p", {
                children:
                  "We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.",
              }),
              (0, f.jsx)("h3", { children: "Changes to this Privacy Policy" }),
              (0, f.jsx)("p", {
                children:
                  "Productivity has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.",
              }),
              (0, f.jsx)("p", {
                children:
                  "This Privacy Policy was last updated on June 10, 2023.",
              }),
            ],
          });
        },
        K = function (e) {
          var t = e.type,
            n = e.setWindow;
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)("div", { className: "page-blur" }),
              (0, f.jsxs)("div", {
                className: "document-window",
                children: [
                  (0, f.jsx)("button", {
                    className: "btn-close-document",
                    id: "btn",
                    onClick: function () {
                      return n(!1);
                    },
                  }),
                  (0, f.jsxs)("div", {
                    className: "document-title",
                    children: [
                      (0, f.jsx)("div", { className: "document-icon" }),
                      (0, f.jsx)("h1", {
                        className: "document-text-title",
                        children:
                          0 === t ? "Terms of Service" : "Privacy Policy",
                      }),
                    ],
                  }),
                  (0, f.jsx)("div", {
                    className: "rules-block",
                    children: 0 === t ? (0, f.jsx)(Y, {}) : (0, f.jsx)(G, {}),
                  }),
                ],
              }),
            ],
          });
        },
        J = function (e) {
          var t = e.name,
            n = e.handleClick,
            r = e.clicked,
            o = e.place;
          return (0, f.jsx)("ul", {
            id: t,
            className: "dropdown-element",
            onClick: function () {
              return n("reg" === o ? t : t === r ? "" : t);
            },
            children: (0, f.jsx)("p", {
              className: "dropdown-text",
              children: "reg" === o ? t : r === t ? "None" : t,
            }),
          });
        },
        X = function (t) {
          var n = t.place,
            r = t.changeClick,
            o = t.defaultPriority,
            i = t.error,
            s = t.list,
            l = t.title,
            u = t.isOpen,
            c = t.setIsOpen,
            d = t.companyName,
            p = t.setCompanyName,
            h = a((0, e.useState)(""), 2),
            m = h[0],
            v = h[1];
          (0, e.useEffect)(
            function () {
              v(o);
            },
            [o],
          );
          var g = function (e) {
            v(e), r(e), c(!1), "reg" === n && p(e);
          };
          return (0, f.jsxs)(f.Fragment, {
            children: [
              m && "reg" !== n
                ? (0, f.jsx)("p", {
                    className: "drop-down-description",
                    id: n,
                    children: l,
                  })
                : (0, f.jsx)(f.Fragment, {}),
              (0, f.jsxs)("div", {
                className: "dropdown-bar",
                id: n,
                children: [
                  (0, f.jsxs)("button", {
                    className: "dropdown-btn "
                      .concat(m ? "dropdown-clicked" : "", " ")
                      .concat(u ? "dropdown-open" : "", " ")
                      .concat(i ? "dropdown-error" : "", " "),
                    id: n,
                    onClick: function () {
                      return c(!u);
                    },
                    children: [
                      "reg" === n
                        ? (0, f.jsx)("input", {
                            name: "companyName",
                            type: "name",
                            value: d,
                            onChange: function (e) {
                              return (function (e) {
                                p(e.target.value), c(!0);
                              })(e);
                            },
                            placeholder: "E.g Productivity Ltd",
                            className: "login-input",
                            id: "company",
                          })
                        : (0, f.jsx)("p", {
                            className: "dropdown-bar-text  ".concat(
                              m ? "dropdown-bar-text-clicked" : "",
                            ),
                            children: m || l,
                          }),
                      (0, f.jsx)("img", {
                        className: "dropdown-atom",
                        src: u
                          ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJCAYAAAACTR1pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB4SURBVHgBlcuxFUAwFIXh9/IcJWqFHSzgHDaxgQlQGMgIsUk6dBoVEToOQfJXt7gfgqYwaSpUUADgJGlJB16L+wdfUH25CB3Gb/SO8R/pMZqhJ0ZzdOKZlpi8KONgV+AqNrJjcLBsIyUcSWtOGxWgmG/GZNfzst0BQJVDMkBPZ30AAAAASUVORK5CYII="
                          : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJCAYAAAACTR1pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVHgBndA9CsJAEAXgtztgJ1imEMlJxD2RXkBZC+9h6S0s9AA5goUWdjZ22bz8QEJ+lmTJq2aG+RgYtd5e9iQtgBVCopD8dWpkuTG3oosQnmhB/dWYleynnTgD8BVKFHn+PE5XVd3e2Vic3ItxPIXez6Ot6no4hduoA8dwHw2gD/uQFzY4kwPIpHyEbycHAww+dHZWaqoAAAAASUVORK5CYII=",
                        alt: "",
                      }),
                    ],
                  }),
                  u
                    ? (0, f.jsx)("div", {
                        className: "dropdown-list",
                        id: n,
                        children: s.map(function (e, t) {
                          return (0, f.jsx)(
                            J,
                            {
                              name: e,
                              handleClick: g,
                              clicked: m,
                              place: "reg",
                            },
                            t,
                          );
                        }),
                      })
                    : (0, f.jsx)(f.Fragment, {}),
                ],
              }),
            ],
          });
        };
      function Z() {
        return (
          (Z = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Z.apply(this, arguments)
        );
      }
      function $(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var ee = n(4164);
      function te() {
        return !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        );
      }
      var ne = {},
        re = [];
      function oe(e, t) {}
      function ie(e, t) {}
      function ae(e, t, n) {
        t || ne[n] || (e(!1, n), (ne[n] = !0));
      }
      function se(e, t) {
        ae(oe, e, t);
      }
      (se.preMessage = function (e) {
        re.push(e);
      }),
        (se.resetWarned = function () {
          ne = {};
        }),
        (se.noteOnce = function (e, t) {
          ae(ie, e, t);
        });
      var le = n(3873);
      function ue(e, t) {
        "function" === typeof e
          ? e(t)
          : "object" === s(e) && e && "current" in e && (e.current = t);
      }
      function ce() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var r = t.filter(function (e) {
          return e;
        });
        return r.length <= 1
          ? r[0]
          : function (e) {
              t.forEach(function (t) {
                ue(t, e);
              });
            };
      }
      function fe() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return (function (t, n, r) {
          var o = e.useRef({});
          return (
            ("value" in o.current && !r(o.current.condition, n)) ||
              ((o.current.value = t()), (o.current.condition = n)),
            o.current.value
          );
        })(
          function () {
            return ce.apply(void 0, n);
          },
          n,
          function (e, t) {
            return (
              e.length === t.length &&
              e.every(function (e, n) {
                return e === t[n];
              })
            );
          },
        );
      }
      function de(e) {
        var t,
          n,
          r = (0, le.isMemo)(e) ? e.type.type : e.type;
        return (
          !!(
            "function" !== typeof r ||
            (null !== (t = r.prototype) && void 0 !== t && t.render)
          ) &&
          !!(
            "function" !== typeof e ||
            (null !== (n = e.prototype) && void 0 !== n && n.render)
          )
        );
      }
      var pe = e.createContext(null);
      function he(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var me = te() ? e.useLayoutEffect : e.useEffect,
        ve = me,
        ge = [];
      var ye,
        be = "data-rc-order",
        we = "rc-util-key",
        xe = new Map();
      function ke() {
        var e = (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ).mark;
        return e ? (e.startsWith("data-") ? e : "data-".concat(e)) : we;
      }
      function Ae(e) {
        return e.attachTo
          ? e.attachTo
          : document.querySelector("head") || document.body;
      }
      function _e(e) {
        return Array.from((xe.get(e) || e).children).filter(function (e) {
          return "STYLE" === e.tagName;
        });
      }
      function Ee(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!te()) return null;
        var n = t.csp,
          r = t.prepend,
          o = document.createElement("style");
        o.setAttribute(
          be,
          (function (e) {
            return "queue" === e ? "prependQueue" : e ? "prepend" : "append";
          })(r),
        ),
          null !== n &&
            void 0 !== n &&
            n.nonce &&
            (o.nonce = null === n || void 0 === n ? void 0 : n.nonce),
          (o.innerHTML = e);
        var i = Ae(t),
          a = i.firstChild;
        if (r) {
          if ("queue" === r) {
            var s = _e(i).filter(function (e) {
              return ["prepend", "prependQueue"].includes(e.getAttribute(be));
            });
            if (s.length)
              return i.insertBefore(o, s[s.length - 1].nextSibling), o;
          }
          i.insertBefore(o, a);
        } else i.appendChild(o);
        return o;
      }
      function Se(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return _e(Ae(t)).find(function (n) {
          return n.getAttribute(ke(t)) === e;
        });
      }
      function Ce(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = Se(e, t);
        n && Ae(t).removeChild(n);
      }
      function je(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        !(function (e, t) {
          var n = xe.get(e);
          if (
            !n ||
            !(function (e, t) {
              if (!e) return !1;
              if (e.contains) return e.contains(t);
              for (var n = t; n; ) {
                if (n === e) return !0;
                n = n.parentNode;
              }
              return !1;
            })(document, n)
          ) {
            var r = Ee("", t),
              o = r.parentNode;
            xe.set(e, o), e.removeChild(r);
          }
        })(Ae(n), n);
        var r = Se(t, n);
        if (r) {
          var o, i, a;
          if (
            null !== (o = n.csp) &&
            void 0 !== o &&
            o.nonce &&
            r.nonce !==
              (null === (i = n.csp) || void 0 === i ? void 0 : i.nonce)
          )
            r.nonce = null === (a = n.csp) || void 0 === a ? void 0 : a.nonce;
          return r.innerHTML !== e && (r.innerHTML = e), r;
        }
        var s = Ee(e, n);
        return s.setAttribute(ke(n), t), s;
      }
      function Ne(e) {
        if ("undefined" === typeof document) return 0;
        if (e || void 0 === ye) {
          var t = document.createElement("div");
          (t.style.width = "100%"), (t.style.height = "200px");
          var n = document.createElement("div"),
            r = n.style;
          (r.position = "absolute"),
            (r.top = "0"),
            (r.left = "0"),
            (r.pointerEvents = "none"),
            (r.visibility = "hidden"),
            (r.width = "200px"),
            (r.height = "150px"),
            (r.overflow = "hidden"),
            n.appendChild(t),
            document.body.appendChild(n);
          var o = t.offsetWidth;
          n.style.overflow = "scroll";
          var i = t.offsetWidth;
          o === i && (i = n.clientWidth),
            document.body.removeChild(n),
            (ye = o - i);
        }
        return ye;
      }
      var Te = "rc-util-locker-".concat(Date.now()),
        Pe = 0;
      function Oe(t) {
        var n = !!t,
          r = a(
            e.useState(function () {
              return (Pe += 1), "".concat(Te, "_").concat(Pe);
            }),
            1,
          )[0];
        ve(
          function () {
            if (n) {
              var e = Ne(),
                t =
                  document.body.scrollHeight >
                    (window.innerHeight ||
                      document.documentElement.clientHeight) &&
                  window.innerWidth > document.body.offsetWidth;
              je(
                "\nhtml body {\n  overflow-y: hidden;\n  ".concat(
                  t ? "width: calc(100% - ".concat(e, "px);") : "",
                  "\n}",
                ),
                r,
              );
            } else Ce(r);
            return function () {
              Ce(r);
            };
          },
          [n, r],
        );
      }
      var Le = !1;
      var Re = function (e) {
          return (
            !1 !== e &&
            (te() && e
              ? "string" === typeof e
                ? document.querySelector(e)
                : "function" === typeof e
                ? e()
                : e
              : null)
          );
        },
        De = e.forwardRef(function (t, n) {
          var r = t.open,
            o = t.autoLock,
            i = t.getContainer,
            s = (t.debug, t.autoDestroy),
            l = void 0 === s || s,
            u = t.children,
            c = a(e.useState(r), 2),
            f = c[0],
            d = c[1],
            p = f || r;
          e.useEffect(
            function () {
              (l || r) && d(r);
            },
            [r, l],
          );
          var h = a(
              e.useState(function () {
                return Re(i);
              }),
              2,
            ),
            m = h[0],
            v = h[1];
          e.useEffect(function () {
            var e = Re(i);
            v(null !== e && void 0 !== e ? e : null);
          });
          var g = (function (t, n) {
              var r = a(
                  e.useState(function () {
                    return te() ? document.createElement("div") : null;
                  }),
                  1,
                )[0],
                o = e.useRef(!1),
                i = e.useContext(pe),
                s = a(e.useState(ge), 2),
                l = s[0],
                u = s[1],
                c =
                  i ||
                  (o.current
                    ? void 0
                    : function (e) {
                        u(function (t) {
                          return [e].concat(he(t));
                        });
                      });
              function f() {
                r.parentElement || document.body.appendChild(r),
                  (o.current = !0);
              }
              function d() {
                var e;
                null === (e = r.parentElement) ||
                  void 0 === e ||
                  e.removeChild(r),
                  (o.current = !1);
              }
              return (
                ve(
                  function () {
                    return t ? (i ? i(f) : f()) : d(), d;
                  },
                  [t],
                ),
                ve(
                  function () {
                    l.length &&
                      (l.forEach(function (e) {
                        return e();
                      }),
                      u(ge));
                  },
                  [l],
                ),
                [r, c]
              );
            })(p && !m),
            y = a(g, 2),
            b = y[0],
            w = y[1],
            x = null !== m && void 0 !== m ? m : b;
          Oe(o && r && te() && (x === b || x === document.body));
          var k = null;
          u && de(u) && n && (k = u.ref);
          var A = fe(k, n);
          if (!p || !te() || void 0 === m) return null;
          var _,
            E = !1 === x || ("boolean" === typeof _ && (Le = _), Le),
            S = u;
          return (
            n && (S = e.cloneElement(u, { ref: A })),
            e.createElement(
              pe.Provider,
              { value: w },
              E ? S : (0, ee.createPortal)(S, x),
            )
          );
        });
      var Me = De,
        Ie = n(1694),
        Fe = n.n(Ie);
      function Be(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = [];
        return (
          e.Children.forEach(t, function (e) {
            ((void 0 !== e && null !== e) || n.keepEmpty) &&
              (Array.isArray(e)
                ? (r = r.concat(Be(e)))
                : (0, le.isFragment)(e) && e.props
                ? (r = r.concat(Be(e.props.children, n)))
                : r.push(e));
          }),
          r
        );
      }
      function ze(e) {
        return e instanceof HTMLElement || e instanceof SVGElement;
      }
      function Ue(t) {
        return ze(t) ? t : t instanceof e.Component ? ee.findDOMNode(t) : null;
      }
      var We = (function () {
          if ("undefined" !== typeof Map) return Map;
          function e(e, t) {
            var n = -1;
            return (
              e.some(function (e, r) {
                return e[0] === t && ((n = r), !0);
              }),
              n
            );
          }
          return (function () {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var n = e(this.__entries__, t),
                  r = this.__entries__[n];
                return r && r[1];
              }),
              (t.prototype.set = function (t, n) {
                var r = e(this.__entries__, t);
                ~r
                  ? (this.__entries__[r][1] = n)
                  : this.__entries__.push([t, n]);
              }),
              (t.prototype.delete = function (t) {
                var n = this.__entries__,
                  r = e(n, t);
                ~r && n.splice(r, 1);
              }),
              (t.prototype.has = function (t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                  var o = r[n];
                  e.call(t, o[1], o[0]);
                }
              }),
              t
            );
          })();
        })(),
        He =
          "undefined" !== typeof window &&
          "undefined" !== typeof document &&
          window.document === document,
        Qe =
          "undefined" !== typeof n.g && n.g.Math === Math
            ? n.g
            : "undefined" !== typeof self && self.Math === Math
            ? self
            : "undefined" !== typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        Ve =
          "function" === typeof requestAnimationFrame
            ? requestAnimationFrame.bind(Qe)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              };
      var qe = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        Ye = "undefined" !== typeof MutationObserver,
        Ge = (function () {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (e, t) {
                var n = !1,
                  r = !1,
                  o = 0;
                function i() {
                  n && ((n = !1), e()), r && s();
                }
                function a() {
                  Ve(i);
                }
                function s() {
                  var e = Date.now();
                  if (n) {
                    if (e - o < 2) return;
                    r = !0;
                  } else (n = !0), (r = !1), setTimeout(a, t);
                  o = e;
                }
                return s;
              })(this.refresh.bind(this), 20));
          }
          return (
            (e.prototype.addObserver = function (e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function (e) {
              var t = this.observers_,
                n = t.indexOf(e);
              ~n && t.splice(n, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function (e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (e.prototype.connect_ = function () {
              He &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_,
                ),
                window.addEventListener("resize", this.refresh),
                Ye
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh,
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh,
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
              He &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_,
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh,
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (e) {
              var t = e.propertyName,
                n = void 0 === t ? "" : t;
              qe.some(function (e) {
                return !!~n.indexOf(e);
              }) && this.refresh();
            }),
            (e.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        Ke = function (e, t) {
          for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            Object.defineProperty(e, o, {
              value: t[o],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        Je = function (e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || Qe;
        },
        Xe = rt(0, 0, 0, 0);
      function Ze(e) {
        return parseFloat(e) || 0;
      }
      function $e(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t.reduce(function (t, n) {
          return t + Ze(e["border-" + n + "-width"]);
        }, 0);
      }
      function et(e) {
        var t = e.clientWidth,
          n = e.clientHeight;
        if (!t && !n) return Xe;
        var r = Je(e).getComputedStyle(e),
          o = (function (e) {
            for (
              var t = {}, n = 0, r = ["top", "right", "bottom", "left"];
              n < r.length;
              n++
            ) {
              var o = r[n],
                i = e["padding-" + o];
              t[o] = Ze(i);
            }
            return t;
          })(r),
          i = o.left + o.right,
          a = o.top + o.bottom,
          s = Ze(r.width),
          l = Ze(r.height);
        if (
          ("border-box" === r.boxSizing &&
            (Math.round(s + i) !== t && (s -= $e(r, "left", "right") + i),
            Math.round(l + a) !== n && (l -= $e(r, "top", "bottom") + a)),
          !(function (e) {
            return e === Je(e).document.documentElement;
          })(e))
        ) {
          var u = Math.round(s + i) - t,
            c = Math.round(l + a) - n;
          1 !== Math.abs(u) && (s -= u), 1 !== Math.abs(c) && (l -= c);
        }
        return rt(o.left, o.top, s, l);
      }
      var tt =
        "undefined" !== typeof SVGGraphicsElement
          ? function (e) {
              return e instanceof Je(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof Je(e).SVGElement && "function" === typeof e.getBBox
              );
            };
      function nt(e) {
        return He
          ? tt(e)
            ? (function (e) {
                var t = e.getBBox();
                return rt(0, 0, t.width, t.height);
              })(e)
            : et(e)
          : Xe;
      }
      function rt(e, t, n, r) {
        return { x: e, y: t, width: n, height: r };
      }
      var ot = (function () {
          function e(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = rt(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (e.prototype.isActive = function () {
              var e = nt(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function () {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            e
          );
        })(),
        it = function (e, t) {
          var n = (function (e) {
            var t = e.x,
              n = e.y,
              r = e.width,
              o = e.height,
              i =
                "undefined" !== typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object,
              a = Object.create(i.prototype);
            return (
              Ke(a, {
                x: t,
                y: n,
                width: r,
                height: o,
                top: n,
                right: t + r,
                bottom: o + n,
                left: t,
              }),
              a
            );
          })(t);
          Ke(this, { target: e, contentRect: n });
        },
        at = (function () {
          function e(e, t, n) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new We()),
              "function" !== typeof e)
            )
              throw new TypeError(
                "The callback provided as parameter 1 is not a function.",
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = n);
          }
          return (
            (e.prototype.observe = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" !== typeof Element && Element instanceof Object) {
                if (!(e instanceof Je(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new ot(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" !== typeof Element && Element instanceof Object) {
                if (!(e instanceof Je(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t.delete(e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function () {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (e.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new it(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        st = "undefined" !== typeof WeakMap ? new WeakMap() : new We(),
        lt = function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var n = Ge.getInstance(),
            r = new at(t, n, this);
          st.set(this, r);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (e) {
        lt.prototype[e] = function () {
          var t;
          return (t = st.get(this))[e].apply(t, arguments);
        };
      });
      var ut =
          "undefined" !== typeof Qe.ResizeObserver ? Qe.ResizeObserver : lt,
        ct = new Map();
      var ft = new ut(function (e) {
        e.forEach(function (e) {
          var t,
            n = e.target;
          null === (t = ct.get(n)) ||
            void 0 === t ||
            t.forEach(function (e) {
              return e(n);
            });
        });
      });
      var dt = (function (e) {
          b(n, e);
          var t = A(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            v(n, [
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(e.Component),
        pt = e.createContext(null);
      function ht(t, n) {
        var r = t.children,
          o = t.disabled,
          i = e.useRef(null),
          a = e.useRef(null),
          s = e.useContext(pt),
          l = "function" === typeof r,
          u = l ? r(i) : r,
          c = e.useRef({
            width: -1,
            height: -1,
            offsetWidth: -1,
            offsetHeight: -1,
          }),
          f = !l && e.isValidElement(u) && de(u),
          d = f ? u.ref : null,
          p = e.useMemo(
            function () {
              return ce(d, i);
            },
            [d, i],
          ),
          h = function () {
            return Ue(i.current) || Ue(a.current);
          };
        e.useImperativeHandle(n, function () {
          return h();
        });
        var m = e.useRef(t);
        m.current = t;
        var v = e.useCallback(function (e) {
          var t = m.current,
            n = t.onResize,
            r = t.data,
            o = e.getBoundingClientRect(),
            i = o.width,
            a = o.height,
            l = e.offsetWidth,
            u = e.offsetHeight,
            f = Math.floor(i),
            d = Math.floor(a);
          if (
            c.current.width !== f ||
            c.current.height !== d ||
            c.current.offsetWidth !== l ||
            c.current.offsetHeight !== u
          ) {
            var p = { width: f, height: d, offsetWidth: l, offsetHeight: u };
            c.current = p;
            var h = l === Math.round(i) ? i : l,
              v = u === Math.round(a) ? a : u,
              g = S(S({}, p), {}, { offsetWidth: h, offsetHeight: v });
            null === s || void 0 === s || s(g, e, r),
              n &&
                Promise.resolve().then(function () {
                  n(g, e);
                });
          }
        }, []);
        return (
          e.useEffect(
            function () {
              var e,
                t,
                n = h();
              return (
                n &&
                  !o &&
                  ((e = n),
                  (t = v),
                  ct.has(e) || (ct.set(e, new Set()), ft.observe(e)),
                  ct.get(e).add(t)),
                function () {
                  return (function (e, t) {
                    ct.has(e) &&
                      (ct.get(e).delete(t),
                      ct.get(e).size || (ft.unobserve(e), ct.delete(e)));
                  })(n, v);
                }
              );
            },
            [i.current, o],
          ),
          e.createElement(dt, { ref: a }, f ? e.cloneElement(u, { ref: p }) : u)
        );
      }
      var mt = e.forwardRef(ht);
      function vt(t, n) {
        var r = t.children;
        return ("function" === typeof r ? [r] : Be(r)).map(function (r, o) {
          var i =
            (null === r || void 0 === r ? void 0 : r.key) ||
            "".concat("rc-observer-key", "-").concat(o);
          return e.createElement(
            mt,
            Z({}, t, { key: i, ref: 0 === o ? n : void 0 }),
            r,
          );
        });
      }
      var gt = e.forwardRef(vt);
      gt.Collection = function (t) {
        var n = t.children,
          r = t.onBatchResize,
          o = e.useRef(0),
          i = e.useRef([]),
          a = e.useContext(pt),
          s = e.useCallback(
            function (e, t, n) {
              o.current += 1;
              var s = o.current;
              i.current.push({ size: e, element: t, data: n }),
                Promise.resolve().then(function () {
                  s === o.current &&
                    (null === r || void 0 === r || r(i.current),
                    (i.current = []));
                }),
                null === a || void 0 === a || a(e, t, n);
            },
            [r, a],
          );
        return e.createElement(pt.Provider, { value: s }, n);
      };
      var yt = gt;
      function bt(e) {
        var t;
        return null === e ||
          void 0 === e ||
          null === (t = e.getRootNode) ||
          void 0 === t
          ? void 0
          : t.call(e);
      }
      function wt(e) {
        return (function (e) {
          return (
            bt(e) !== (null === e || void 0 === e ? void 0 : e.ownerDocument)
          );
        })(e)
          ? bt(e)
          : null;
      }
      function xt(t) {
        var n = e.useRef();
        n.current = t;
        var r = e.useCallback(function () {
          for (var e, t = arguments.length, r = new Array(t), o = 0; o < t; o++)
            r[o] = arguments[o];
          return null === (e = n.current) || void 0 === e
            ? void 0
            : e.call.apply(e, [n].concat(r));
        }, []);
        return r;
      }
      var kt = 0;
      function At(n) {
        var r = a(e.useState("ssr-id"), 2),
          o = r[0],
          i = r[1],
          s = S({}, t).useId,
          l = null === s || void 0 === s ? void 0 : s();
        return (
          e.useEffect(function () {
            if (!s) {
              var e = kt;
              (kt += 1), i("rc_unique_".concat(e));
            }
          }, []),
          n || l || o
        );
      }
      var _t = e.createContext(null);
      function Et(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      var St = function (e) {
        if (!e) return !1;
        if (e instanceof Element) {
          if (e.offsetParent) return !0;
          if (e.getBBox) {
            var t = e.getBBox(),
              n = t.width,
              r = t.height;
            if (n || r) return !0;
          }
          if (e.getBoundingClientRect) {
            var o = e.getBoundingClientRect(),
              i = o.width,
              a = o.height;
            if (i || a) return !0;
          }
        }
        return !1;
      };
      function Ct() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return (arguments.length > 2 ? arguments[2] : void 0)
          ? e[0] === t[0]
          : e[0] === t[0] && e[1] === t[1];
      }
      function jt(e, t, n, r) {
        return (
          t ||
          (n
            ? { motionName: "".concat(e, "-").concat(n) }
            : r
            ? { motionName: r }
            : null)
        );
      }
      function Nt(e) {
        return e.ownerDocument.defaultView;
      }
      function Tt(e) {
        for (
          var t = [],
            n = null === e || void 0 === e ? void 0 : e.parentElement,
            r = ["hidden", "scroll", "clip", "auto"];
          n;

        ) {
          var o = Nt(n).getComputedStyle(n);
          [o.overflowX, o.overflowY, o.overflow].some(function (e) {
            return r.includes(e);
          }) && t.push(n),
            (n = n.parentElement);
        }
        return t;
      }
      function Pt(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return Number.isNaN(e) ? t : e;
      }
      function Ot(e) {
        return Pt(parseFloat(e), 0);
      }
      function Lt(e, t) {
        var n = S({}, e);
        return (
          (t || []).forEach(function (e) {
            if (!(e instanceof HTMLBodyElement)) {
              var t = Nt(e).getComputedStyle(e),
                r = t.overflow,
                o = t.overflowClipMargin,
                i = t.borderTopWidth,
                a = t.borderBottomWidth,
                s = t.borderLeftWidth,
                l = t.borderRightWidth,
                u = e.getBoundingClientRect(),
                c = e.offsetHeight,
                f = e.clientHeight,
                d = e.offsetWidth,
                p = e.clientWidth,
                h = Ot(i),
                m = Ot(a),
                v = Ot(s),
                g = Ot(l),
                y = Pt(Math.round((u.width / d) * 1e3) / 1e3),
                b = Pt(Math.round((u.height / c) * 1e3) / 1e3),
                w = (d - p - v - g) * y,
                x = (c - f - h - m) * b,
                k = h * b,
                A = m * b,
                _ = v * y,
                E = g * y,
                S = 0,
                C = 0;
              if ("clip" === r) {
                var j = Ot(o);
                (S = j * y), (C = j * b);
              }
              var N = u.x + _ - S,
                T = u.y + k - C,
                P = N + u.width + 2 * S - _ - E - w,
                O = T + u.height + 2 * C - k - A - x;
              (n.left = Math.max(n.left, N)),
                (n.top = Math.max(n.top, T)),
                (n.right = Math.min(n.right, P)),
                (n.bottom = Math.min(n.bottom, O));
            }
          }),
          n
        );
      }
      function Rt(e) {
        var t = "".concat(
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ),
          n = t.match(/^(.*)\%$/);
        return n ? e * (parseFloat(n[1]) / 100) : parseFloat(t);
      }
      function Dt(e, t) {
        var n = a(t || [], 2),
          r = n[0],
          o = n[1];
        return [Rt(e.width, r), Rt(e.height, o)];
      }
      function Mt() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return [e[0], e[1]];
      }
      function It(e, t) {
        var n,
          r = t[0],
          o = t[1];
        return (
          (n =
            "t" === r ? e.y : "b" === r ? e.y + e.height : e.y + e.height / 2),
          {
            x: "l" === o ? e.x : "r" === o ? e.x + e.width : e.x + e.width / 2,
            y: n,
          }
        );
      }
      function Ft(e, t) {
        var n = { t: "b", b: "t", l: "r", r: "l" };
        return e
          .map(function (e, r) {
            return r === t ? n[e] || "c" : e;
          })
          .join("");
      }
      function Bt(t) {
        var n = e.useRef(!1),
          r = a(e.useState(t), 2),
          o = r[0],
          i = r[1];
        return (
          e.useEffect(function () {
            return (
              (n.current = !1),
              function () {
                n.current = !0;
              }
            );
          }, []),
          [
            o,
            function (e, t) {
              (t && n.current) || i(e);
            },
          ]
        );
      }
      var zt = function (e) {
          return +setTimeout(e, 16);
        },
        Ut = function (e) {
          return clearTimeout(e);
        };
      "undefined" !== typeof window &&
        "requestAnimationFrame" in window &&
        ((zt = function (e) {
          return window.requestAnimationFrame(e);
        }),
        (Ut = function (e) {
          return window.cancelAnimationFrame(e);
        }));
      var Wt = 0,
        Ht = new Map();
      function Qt(e) {
        Ht.delete(e);
      }
      var Vt = function (e) {
        var t = (Wt += 1);
        return (
          (function n(r) {
            if (0 === r) Qt(t), e();
            else {
              var o = zt(function () {
                n(r - 1);
              });
              Ht.set(t, o);
            }
          })(
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ),
          t
        );
      };
      Vt.cancel = function (e) {
        var t = Ht.get(e);
        return Qt(t), Ut(t);
      };
      var qt = Vt;
      var Yt = e.createContext({});
      var Gt = (function (e) {
          b(n, e);
          var t = A(n);
          function n() {
            return p(this, n), t.apply(this, arguments);
          }
          return (
            v(n, [
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(e.Component),
        Kt = Gt,
        Jt = "none",
        Xt = "appear",
        Zt = "enter",
        $t = "leave",
        en = "none",
        tn = "prepare",
        nn = "start",
        rn = "active",
        on = "end",
        an = "prepared";
      function sn(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit".concat(e)] = "webkit".concat(t)),
          (n["Moz".concat(e)] = "moz".concat(t)),
          (n["ms".concat(e)] = "MS".concat(t)),
          (n["O".concat(e)] = "o".concat(t.toLowerCase())),
          n
        );
      }
      var ln = (function (e, t) {
          var n = {
            animationend: sn("Animation", "AnimationEnd"),
            transitionend: sn("Transition", "TransitionEnd"),
          };
          return (
            e &&
              ("AnimationEvent" in t || delete n.animationend.animation,
              "TransitionEvent" in t || delete n.transitionend.transition),
            n
          );
        })(te(), "undefined" !== typeof window ? window : {}),
        un = {};
      if (te()) {
        var cn = document.createElement("div");
        un = cn.style;
      }
      var fn = {};
      function dn(e) {
        if (fn[e]) return fn[e];
        var t = ln[e];
        if (t)
          for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
            var i = n[o];
            if (Object.prototype.hasOwnProperty.call(t, i) && i in un)
              return (fn[e] = t[i]), fn[e];
          }
        return "";
      }
      var pn = dn("animationend"),
        hn = dn("transitionend"),
        mn = !(!pn || !hn),
        vn = pn || "animationend",
        gn = hn || "transitionend";
      function yn(e, t) {
        return e
          ? "object" === s(e)
            ? e[
                t.replace(/-\w/g, function (e) {
                  return e[1].toUpperCase();
                })
              ]
            : "".concat(e, "-").concat(t)
          : null;
      }
      var bn = function (t) {
          var n = (0, e.useRef)(),
            r = (0, e.useRef)(t);
          r.current = t;
          var o = e.useCallback(function (e) {
            r.current(e);
          }, []);
          function i(e) {
            e && (e.removeEventListener(gn, o), e.removeEventListener(vn, o));
          }
          return (
            e.useEffect(function () {
              return function () {
                i(n.current);
              };
            }, []),
            [
              function (e) {
                n.current && n.current !== e && i(n.current),
                  e &&
                    e !== n.current &&
                    (e.addEventListener(gn, o),
                    e.addEventListener(vn, o),
                    (n.current = e));
              },
              i,
            ]
          );
        },
        wn = te() ? e.useLayoutEffect : e.useEffect,
        xn = [tn, nn, rn, on],
        kn = [tn, an],
        An = !1,
        _n = !0;
      function En(e) {
        return e === rn || e === on;
      }
      var Sn = function (t, n, r) {
        var o = a(Bt(en), 2),
          i = o[0],
          s = o[1],
          l = (function () {
            var t = e.useRef(null);
            function n() {
              qt.cancel(t.current);
            }
            return (
              e.useEffect(function () {
                return function () {
                  n();
                };
              }, []),
              [
                function e(r) {
                  var o =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 2;
                  n();
                  var i = qt(function () {
                    o <= 1
                      ? r({
                          isCanceled: function () {
                            return i !== t.current;
                          },
                        })
                      : e(r, o - 1);
                  });
                  t.current = i;
                },
                n,
              ]
            );
          })(),
          u = a(l, 2),
          c = u[0],
          f = u[1];
        var d = n ? kn : xn;
        return (
          wn(
            function () {
              if (i !== en && i !== on) {
                var e = d.indexOf(i),
                  t = d[e + 1],
                  n = r(i);
                n === An
                  ? s(t, !0)
                  : t &&
                    c(function (e) {
                      function r() {
                        e.isCanceled() || s(t, !0);
                      }
                      !0 === n ? r() : Promise.resolve(n).then(r);
                    });
              }
            },
            [t, i],
          ),
          e.useEffect(function () {
            return function () {
              f();
            };
          }, []),
          [
            function () {
              s(tn, !0);
            },
            i,
          ]
        );
      };
      var Cn = (function (t) {
          var n = t;
          "object" === s(t) && (n = t.transitionSupport);
          var r = e.forwardRef(function (t, r) {
            var o = t.visible,
              i = void 0 === o || o,
              s = t.removeOnLeave,
              l = void 0 === s || s,
              u = t.forceRender,
              c = t.children,
              f = t.motionName,
              d = t.leavedClassName,
              p = t.eventProps,
              h = (function (e, t) {
                return !(!e.motionName || !n || !1 === t);
              })(t, e.useContext(Yt).motion),
              m = (0, e.useRef)(),
              v = (0, e.useRef)();
            var g = (function (t, n, r, o) {
                var i = o.motionEnter,
                  s = void 0 === i || i,
                  l = o.motionAppear,
                  u = void 0 === l || l,
                  c = o.motionLeave,
                  f = void 0 === c || c,
                  d = o.motionDeadline,
                  p = o.motionLeaveImmediately,
                  h = o.onAppearPrepare,
                  m = o.onEnterPrepare,
                  v = o.onLeavePrepare,
                  g = o.onAppearStart,
                  y = o.onEnterStart,
                  b = o.onLeaveStart,
                  w = o.onAppearActive,
                  x = o.onEnterActive,
                  k = o.onLeaveActive,
                  A = o.onAppearEnd,
                  E = o.onEnterEnd,
                  C = o.onLeaveEnd,
                  j = o.onVisibleChanged,
                  N = a(Bt(), 2),
                  T = N[0],
                  P = N[1],
                  O = a(Bt(Jt), 2),
                  L = O[0],
                  R = O[1],
                  D = a(Bt(null), 2),
                  M = D[0],
                  I = D[1],
                  F = (0, e.useRef)(!1),
                  B = (0, e.useRef)(null);
                function z() {
                  return r();
                }
                var U = (0, e.useRef)(!1);
                function W() {
                  R(Jt, !0), I(null, !0);
                }
                function H(e) {
                  var t = z();
                  if (!e || e.deadline || e.target === t) {
                    var n,
                      r = U.current;
                    L === Xt && r
                      ? (n = null === A || void 0 === A ? void 0 : A(t, e))
                      : L === Zt && r
                      ? (n = null === E || void 0 === E ? void 0 : E(t, e))
                      : L === $t &&
                        r &&
                        (n = null === C || void 0 === C ? void 0 : C(t, e)),
                      L !== Jt && r && !1 !== n && W();
                  }
                }
                var Q = a(bn(H), 1)[0],
                  V = function (e) {
                    var t, n, r;
                    switch (e) {
                      case Xt:
                        return _((t = {}), tn, h), _(t, nn, g), _(t, rn, w), t;
                      case Zt:
                        return _((n = {}), tn, m), _(n, nn, y), _(n, rn, x), n;
                      case $t:
                        return _((r = {}), tn, v), _(r, nn, b), _(r, rn, k), r;
                      default:
                        return {};
                    }
                  },
                  q = e.useMemo(
                    function () {
                      return V(L);
                    },
                    [L],
                  ),
                  Y = a(
                    Sn(L, !t, function (e) {
                      if (e === tn) {
                        var t = q[tn];
                        return t ? t(z()) : An;
                      }
                      var n;
                      return (
                        K in q &&
                          I(
                            (null === (n = q[K]) || void 0 === n
                              ? void 0
                              : n.call(q, z(), null)) || null,
                          ),
                        K === rn &&
                          (Q(z()),
                          d > 0 &&
                            (clearTimeout(B.current),
                            (B.current = setTimeout(function () {
                              H({ deadline: !0 });
                            }, d)))),
                        K === an && W(),
                        _n
                      );
                    }),
                    2,
                  ),
                  G = Y[0],
                  K = Y[1],
                  J = En(K);
                (U.current = J),
                  wn(
                    function () {
                      P(n);
                      var e,
                        r = F.current;
                      (F.current = !0),
                        !r && n && u && (e = Xt),
                        r && n && s && (e = Zt),
                        ((r && !n && f) || (!r && p && !n && f)) && (e = $t);
                      var o = V(e);
                      e && (t || o[tn]) ? (R(e), G()) : R(Jt);
                    },
                    [n],
                  ),
                  (0, e.useEffect)(
                    function () {
                      ((L === Xt && !u) ||
                        (L === Zt && !s) ||
                        (L === $t && !f)) &&
                        R(Jt);
                    },
                    [u, s, f],
                  ),
                  (0, e.useEffect)(function () {
                    return function () {
                      (F.current = !1), clearTimeout(B.current);
                    };
                  }, []);
                var X = e.useRef(!1);
                (0, e.useEffect)(
                  function () {
                    T && (X.current = !0),
                      void 0 !== T &&
                        L === Jt &&
                        ((X.current || T) &&
                          (null === j || void 0 === j || j(T)),
                        (X.current = !0));
                  },
                  [T, L],
                );
                var Z = M;
                return (
                  q[tn] && K === nn && (Z = S({ transition: "none" }, Z)),
                  [L, K, Z, null !== T && void 0 !== T ? T : n]
                );
              })(
                h,
                i,
                function () {
                  try {
                    return m.current instanceof HTMLElement
                      ? m.current
                      : Ue(v.current);
                  } catch (e) {
                    return null;
                  }
                },
                t,
              ),
              y = a(g, 4),
              b = y[0],
              w = y[1],
              x = y[2],
              k = y[3],
              A = e.useRef(k);
            k && (A.current = !0);
            var E,
              C = e.useCallback(
                function (e) {
                  (m.current = e), ue(r, e);
                },
                [r],
              ),
              j = S(S({}, p), {}, { visible: i });
            if (c)
              if (b === Jt)
                E = k
                  ? c(S({}, j), C)
                  : !l && A.current && d
                  ? c(S(S({}, j), {}, { className: d }), C)
                  : u || (!l && !d)
                  ? c(S(S({}, j), {}, { style: { display: "none" } }), C)
                  : null;
              else {
                var N, T;
                w === tn
                  ? (T = "prepare")
                  : En(w)
                  ? (T = "active")
                  : w === nn && (T = "start");
                var P = yn(f, "".concat(b, "-").concat(T));
                E = c(
                  S(
                    S({}, j),
                    {},
                    {
                      className: Fe()(
                        yn(f, b),
                        ((N = {}),
                        _(N, P, P && T),
                        _(N, f, "string" === typeof f),
                        N),
                      ),
                      style: x,
                    },
                  ),
                  C,
                );
              }
            else E = null;
            e.isValidElement(E) &&
              de(E) &&
              (E.ref || (E = e.cloneElement(E, { ref: C })));
            return e.createElement(Kt, { ref: v }, E);
          });
          return (r.displayName = "CSSMotion"), r;
        })(mn),
        jn = "add",
        Nn = "keep",
        Tn = "remove",
        Pn = "removed";
      function On(e) {
        var t;
        return S(
          S({}, (t = e && "object" === s(e) && "key" in e ? e : { key: e })),
          {},
          { key: String(t.key) },
        );
      }
      function Ln() {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
        ).map(On);
      }
      var Rn = ["component", "children", "onVisibleChanged", "onAllRemoved"],
        Dn = ["status"],
        Mn = [
          "eventProps",
          "visible",
          "children",
          "motionName",
          "motionAppear",
          "motionEnter",
          "motionLeave",
          "motionLeaveImmediately",
          "motionDeadline",
          "removeOnLeave",
          "leavedClassName",
          "onAppearStart",
          "onAppearActive",
          "onAppearEnd",
          "onEnterStart",
          "onEnterActive",
          "onEnterEnd",
          "onLeaveStart",
          "onLeaveActive",
          "onLeaveEnd",
        ];
      !(function (t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cn,
          r = (function (t) {
            b(o, t);
            var r = A(o);
            function o() {
              var e;
              p(this, o);
              for (
                var t = arguments.length, n = new Array(t), i = 0;
                i < t;
                i++
              )
                n[i] = arguments[i];
              return (
                _(k((e = r.call.apply(r, [this].concat(n)))), "state", {
                  keyEntities: [],
                }),
                _(k(e), "removeKey", function (t) {
                  var n = e.state.keyEntities.map(function (e) {
                    return e.key !== t ? e : S(S({}, e), {}, { status: Pn });
                  });
                  return (
                    e.setState({ keyEntities: n }),
                    n.filter(function (e) {
                      return e.status !== Pn;
                    }).length
                  );
                }),
                e
              );
            }
            return (
              v(
                o,
                [
                  {
                    key: "render",
                    value: function () {
                      var t = this,
                        r = this.state.keyEntities,
                        o = this.props,
                        i = o.component,
                        a = o.children,
                        s = o.onVisibleChanged,
                        l = o.onAllRemoved,
                        u = $(o, Rn),
                        c = i || e.Fragment,
                        f = {};
                      return (
                        Mn.forEach(function (e) {
                          (f[e] = u[e]), delete u[e];
                        }),
                        delete u.keys,
                        e.createElement(
                          c,
                          u,
                          r.map(function (r) {
                            var o = r.status,
                              i = $(r, Dn),
                              u = o === jn || o === Nn;
                            return e.createElement(
                              n,
                              Z({}, f, {
                                key: i.key,
                                visible: u,
                                eventProps: i,
                                onVisibleChanged: function (e) {
                                  (null === s ||
                                    void 0 === s ||
                                    s(e, { key: i.key }),
                                  e) ||
                                    (0 === t.removeKey(i.key) && l && l());
                                },
                              }),
                              a,
                            );
                          }),
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "getDerivedStateFromProps",
                    value: function (e, t) {
                      var n = e.keys,
                        r = t.keyEntities,
                        o = Ln(n),
                        i = (function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [],
                            n = [],
                            r = 0,
                            o = t.length,
                            i = Ln(e),
                            a = Ln(t);
                          i.forEach(function (e) {
                            for (var t = !1, i = r; i < o; i += 1) {
                              var s = a[i];
                              if (s.key === e.key) {
                                r < i &&
                                  ((n = n.concat(
                                    a.slice(r, i).map(function (e) {
                                      return S(S({}, e), {}, { status: jn });
                                    }),
                                  )),
                                  (r = i)),
                                  n.push(S(S({}, s), {}, { status: Nn })),
                                  (r += 1),
                                  (t = !0);
                                break;
                              }
                            }
                            t || n.push(S(S({}, e), {}, { status: Tn }));
                          }),
                            r < o &&
                              (n = n.concat(
                                a.slice(r).map(function (e) {
                                  return S(S({}, e), {}, { status: jn });
                                }),
                              ));
                          var s = {};
                          return (
                            n.forEach(function (e) {
                              var t = e.key;
                              s[t] = (s[t] || 0) + 1;
                            }),
                            Object.keys(s)
                              .filter(function (e) {
                                return s[e] > 1;
                              })
                              .forEach(function (e) {
                                (n = n.filter(function (t) {
                                  var n = t.key,
                                    r = t.status;
                                  return n !== e || r !== Tn;
                                })).forEach(function (t) {
                                  t.key === e && (t.status = Nn);
                                });
                              }),
                            n
                          );
                        })(r, o);
                      return {
                        keyEntities: i.filter(function (e) {
                          var t = r.find(function (t) {
                            var n = t.key;
                            return e.key === n;
                          });
                          return !t || t.status !== Pn || e.status !== Tn;
                        }),
                      };
                    },
                  },
                ],
              ),
              o
            );
          })(e.Component);
        _(r, "defaultProps", { component: "div" });
      })(mn);
      var In = Cn;
      function Fn(t) {
        var n = t.prefixCls,
          r = t.align,
          o = t.arrow,
          i = t.arrowPos,
          a = o || {},
          s = a.className,
          l = a.content,
          u = i.x,
          c = void 0 === u ? 0 : u,
          f = i.y,
          d = void 0 === f ? 0 : f,
          p = e.useRef();
        if (!r || !r.points) return null;
        var h = { position: "absolute" };
        if (!1 !== r.autoArrow) {
          var m = r.points[0],
            v = r.points[1],
            g = m[0],
            y = m[1],
            b = v[0],
            w = v[1];
          g !== b && ["t", "b"].includes(g)
            ? "t" === g
              ? (h.top = 0)
              : (h.bottom = 0)
            : (h.top = d),
            y !== w && ["l", "r"].includes(y)
              ? "l" === y
                ? (h.left = 0)
                : (h.right = 0)
              : (h.left = c);
        }
        return e.createElement(
          "div",
          { ref: p, className: Fe()("".concat(n, "-arrow"), s), style: h },
          l,
        );
      }
      function Bn(t) {
        var n = t.prefixCls,
          r = t.open,
          o = t.zIndex,
          i = t.mask,
          a = t.motion;
        return i
          ? e.createElement(
              In,
              Z({}, a, { motionAppear: !0, visible: r, removeOnLeave: !0 }),
              function (t) {
                var r = t.className;
                return e.createElement("div", {
                  style: { zIndex: o },
                  className: Fe()("".concat(n, "-mask"), r),
                });
              },
            )
          : null;
      }
      var zn = e.memo(
          function (e) {
            return e.children;
          },
          function (e, t) {
            return t.cache;
          },
        ),
        Un = e.forwardRef(function (t, n) {
          var r = t.popup,
            o = t.className,
            i = t.prefixCls,
            s = t.style,
            l = t.target,
            u = t.onVisibleChanged,
            c = t.open,
            f = t.keepDom,
            d = t.onClick,
            p = t.mask,
            h = t.arrow,
            m = t.arrowPos,
            v = t.align,
            g = t.motion,
            y = t.maskMotion,
            b = t.forceRender,
            w = t.getPopupContainer,
            x = t.autoDestroy,
            k = t.portal,
            A = t.zIndex,
            _ = t.onMouseEnter,
            E = t.onMouseLeave,
            C = t.ready,
            j = t.offsetX,
            N = t.offsetY,
            T = t.onAlign,
            P = t.onPrepare,
            O = t.stretch,
            L = t.targetWidth,
            R = t.targetHeight,
            D = "function" === typeof r ? r() : r,
            M = c || f,
            I = (null === w || void 0 === w ? void 0 : w.length) > 0,
            F = a(e.useState(!w || !I), 2),
            B = F[0],
            z = F[1];
          if (
            (ve(
              function () {
                !B && I && l && z(!0);
              },
              [B, I, l],
            ),
            !B)
          )
            return null;
          var U =
              C || !c
                ? { left: j, top: N }
                : { left: "-1000vw", top: "-1000vh" },
            W = {};
          return (
            O &&
              (O.includes("height") && R
                ? (W.height = R)
                : O.includes("minHeight") && R && (W.minHeight = R),
              O.includes("width") && L
                ? (W.width = L)
                : O.includes("minWidth") && L && (W.minWidth = L)),
            c || (W.pointerEvents = "none"),
            e.createElement(
              k,
              {
                open: b || M,
                getContainer:
                  w &&
                  function () {
                    return w(l);
                  },
                autoDestroy: x,
              },
              e.createElement(Bn, {
                prefixCls: i,
                open: c,
                zIndex: A,
                mask: p,
                motion: y,
              }),
              e.createElement(yt, { onResize: T, disabled: !c }, function (t) {
                return e.createElement(
                  In,
                  Z(
                    {
                      motionAppear: !0,
                      motionEnter: !0,
                      motionLeave: !0,
                      removeOnLeave: !1,
                      forceRender: b,
                      leavedClassName: "".concat(i, "-hidden"),
                    },
                    g,
                    {
                      onAppearPrepare: P,
                      onEnterPrepare: P,
                      visible: c,
                      onVisibleChanged: function (e) {
                        var t;
                        null === g ||
                          void 0 === g ||
                          null === (t = g.onVisibleChanged) ||
                          void 0 === t ||
                          t.call(g, e),
                          u(e);
                      },
                    },
                  ),
                  function (r, a) {
                    var l = r.className,
                      u = r.style,
                      f = Fe()(i, l, o);
                    return e.createElement(
                      "div",
                      {
                        ref: ce(t, n, a),
                        className: f,
                        style: S(
                          S(
                            S(
                              S(
                                {
                                  "--arrow-x": "".concat(m.x || 0, "px"),
                                  "--arrow-y": "".concat(m.y || 0, "px"),
                                },
                                U,
                              ),
                              W,
                            ),
                            u,
                          ),
                          {},
                          { boxSizing: "border-box", zIndex: A },
                          s,
                        ),
                        onMouseEnter: _,
                        onMouseLeave: E,
                        onClick: d,
                      },
                      h &&
                        e.createElement(Fn, {
                          prefixCls: i,
                          arrow: h,
                          arrowPos: m,
                          align: v,
                        }),
                      e.createElement(zn, { cache: !c }, D),
                    );
                  },
                );
              }),
            )
          );
        });
      var Wn = Un;
      var Hn = e.forwardRef(function (t, n) {
          var r = t.children,
            o = t.getTriggerDOMNode,
            i = de(r),
            a = fe(
              e.useCallback(
                function (e) {
                  ue(n, o ? o(e) : e);
                },
                [o],
              ),
              r.ref,
            );
          return i ? e.cloneElement(r, { ref: a }) : r;
        }),
        Qn = [
          "prefixCls",
          "children",
          "action",
          "showAction",
          "hideAction",
          "popupVisible",
          "defaultPopupVisible",
          "onPopupVisibleChange",
          "afterPopupVisibleChange",
          "mouseEnterDelay",
          "mouseLeaveDelay",
          "focusDelay",
          "blurDelay",
          "mask",
          "maskClosable",
          "getPopupContainer",
          "forceRender",
          "autoDestroy",
          "destroyPopupOnHide",
          "popup",
          "popupClassName",
          "popupStyle",
          "popupPlacement",
          "builtinPlacements",
          "popupAlign",
          "zIndex",
          "stretch",
          "getPopupClassNameFromAlign",
          "alignPoint",
          "onPopupClick",
          "onPopupAlign",
          "arrow",
          "popupMotion",
          "maskMotion",
          "popupTransitionName",
          "popupAnimation",
          "maskTransitionName",
          "maskAnimation",
          "className",
          "getTriggerDOMNode",
        ];
      var Vn = (function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Me,
            n = e.forwardRef(function (n, r) {
              var o = n.prefixCls,
                i = void 0 === o ? "rc-trigger-popup" : o,
                s = n.children,
                l = n.action,
                u = void 0 === l ? "hover" : l,
                c = n.showAction,
                f = n.hideAction,
                d = n.popupVisible,
                p = n.defaultPopupVisible,
                h = n.onPopupVisibleChange,
                m = n.afterPopupVisibleChange,
                v = n.mouseEnterDelay,
                g = n.mouseLeaveDelay,
                y = void 0 === g ? 0.1 : g,
                b = n.focusDelay,
                w = n.blurDelay,
                x = n.mask,
                k = n.maskClosable,
                A = void 0 === k || k,
                _ = n.getPopupContainer,
                E = n.forceRender,
                C = n.autoDestroy,
                j = n.destroyPopupOnHide,
                N = n.popup,
                T = n.popupClassName,
                P = n.popupStyle,
                O = n.popupPlacement,
                L = n.builtinPlacements,
                R = void 0 === L ? {} : L,
                D = n.popupAlign,
                M = n.zIndex,
                I = n.stretch,
                F = n.getPopupClassNameFromAlign,
                B = n.alignPoint,
                z = n.onPopupClick,
                U = n.onPopupAlign,
                W = n.arrow,
                H = n.popupMotion,
                Q = n.maskMotion,
                V = n.popupTransitionName,
                q = n.popupAnimation,
                Y = n.maskTransitionName,
                G = n.maskAnimation,
                K = n.className,
                J = n.getTriggerDOMNode,
                X = $(n, Qn),
                Z = C || j || !1,
                ee = a(e.useState(!1), 2),
                te = ee[0],
                ne = ee[1];
              ve(function () {
                ne(
                  (function () {
                    if (
                      "undefined" === typeof navigator ||
                      "undefined" === typeof window
                    )
                      return !1;
                    var e =
                      navigator.userAgent || navigator.vendor || window.opera;
                    return (
                      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                        e,
                      ) ||
                      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                        null === e || void 0 === e ? void 0 : e.substr(0, 4),
                      )
                    );
                  })(),
                );
              }, []);
              var re = e.useRef({}),
                oe = e.useContext(_t),
                ie = e.useMemo(
                  function () {
                    return {
                      registerSubPopup: function (e, t) {
                        (re.current[e] = t),
                          null === oe ||
                            void 0 === oe ||
                            oe.registerSubPopup(e, t);
                      },
                    };
                  },
                  [oe],
                ),
                ae = At(),
                se = a(e.useState(null), 2),
                le = se[0],
                ue = se[1],
                ce = xt(function (e) {
                  ze(e) && le !== e && ue(e),
                    null === oe || void 0 === oe || oe.registerSubPopup(ae, e);
                }),
                fe = a(e.useState(null), 2),
                de = fe[0],
                pe = fe[1],
                me = xt(function (e) {
                  ze(e) && de !== e && pe(e);
                }),
                ge = e.Children.only(s),
                ye = (null === ge || void 0 === ge ? void 0 : ge.props) || {},
                be = {},
                we = xt(function (e) {
                  var t,
                    n,
                    r = de;
                  return (
                    (null === r || void 0 === r ? void 0 : r.contains(e)) ||
                    (null === (t = wt(r)) || void 0 === t ? void 0 : t.host) ===
                      e ||
                    e === r ||
                    (null === le || void 0 === le ? void 0 : le.contains(e)) ||
                    (null === (n = wt(le)) || void 0 === n
                      ? void 0
                      : n.host) === e ||
                    e === le ||
                    Object.values(re.current).some(function (t) {
                      return (
                        (null === t || void 0 === t ? void 0 : t.contains(e)) ||
                        e === t
                      );
                    })
                  );
                }),
                xe = jt(i, H, q, V),
                ke = jt(i, Q, G, Y),
                Ae = a(e.useState(p || !1), 2),
                _e = Ae[0],
                Ee = Ae[1],
                Se = null !== d && void 0 !== d ? d : _e,
                Ce = xt(function (e) {
                  void 0 === d && Ee(e);
                });
              ve(
                function () {
                  Ee(d || !1);
                },
                [d],
              );
              var je = e.useRef(Se);
              je.current = Se;
              var Ne = xt(function (e) {
                  Se !== e && (Ce(e), null === h || void 0 === h || h(e));
                }),
                Te = e.useRef(),
                Pe = function () {
                  clearTimeout(Te.current);
                },
                Oe = function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                  Pe(),
                    0 === t
                      ? Ne(e)
                      : (Te.current = setTimeout(function () {
                          Ne(e);
                        }, 1e3 * t));
                };
              e.useEffect(function () {
                return Pe;
              }, []);
              var Le = a(e.useState(!1), 2),
                Re = Le[0],
                De = Le[1],
                Me = e.useRef(!0);
              ve(
                function () {
                  (Me.current && !Se) || De(!0), (Me.current = !0);
                },
                [Se],
              );
              var Ie = a(e.useState(null), 2),
                Be = Ie[0],
                Ue = Ie[1],
                We = a(e.useState([0, 0]), 2),
                He = We[0],
                Qe = We[1],
                Ve = function (e) {
                  Qe([e.clientX, e.clientY]);
                },
                qe = (function (t, n, r, o, i, s, l) {
                  var u = a(
                      e.useState({
                        ready: !1,
                        offsetX: 0,
                        offsetY: 0,
                        arrowX: 0,
                        arrowY: 0,
                        scaleX: 1,
                        scaleY: 1,
                        align: i[o] || {},
                      }),
                      2,
                    ),
                    c = u[0],
                    f = u[1],
                    d = e.useRef(0),
                    p = e.useMemo(
                      function () {
                        return n ? Tt(n) : [];
                      },
                      [n],
                    ),
                    h = e.useRef({});
                  t || (h.current = {});
                  var m = xt(function () {
                      if (n && r && t) {
                        var e,
                          u = function (e, t) {
                            var n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : V,
                              r = x.x + e,
                              o = x.y + t,
                              i = r + R,
                              a = o + L,
                              s = Math.max(r, n.left),
                              l = Math.max(o, n.top),
                              u = Math.min(i, n.right),
                              c = Math.min(a, n.bottom);
                            return Math.max(0, (u - s) * (c - l));
                          },
                          c = function () {
                            (re = x.y + me),
                              (oe = re + L),
                              (ie = x.x + he),
                              (ae = ie + R);
                          },
                          d = n,
                          m = d.style.left,
                          v = d.style.top,
                          g = d.ownerDocument,
                          y = Nt(d),
                          b = S(S({}, i[o]), s);
                        if (
                          ((d.style.left = "0"),
                          (d.style.top = "0"),
                          Array.isArray(r))
                        )
                          e = { x: r[0], y: r[1], width: 0, height: 0 };
                        else {
                          var w = r.getBoundingClientRect();
                          e = {
                            x: w.x,
                            y: w.y,
                            width: w.width,
                            height: w.height,
                          };
                        }
                        var x = d.getBoundingClientRect(),
                          k = y.getComputedStyle(d),
                          A = k.width,
                          _ = k.height,
                          E = g.documentElement,
                          C = E.clientWidth,
                          j = E.clientHeight,
                          N = E.scrollWidth,
                          T = E.scrollHeight,
                          P = E.scrollTop,
                          O = E.scrollLeft,
                          L = x.height,
                          R = x.width,
                          D = e.height,
                          M = e.width,
                          I = { left: 0, top: 0, right: C, bottom: j },
                          F = {
                            left: -O,
                            top: -P,
                            right: N - O,
                            bottom: T - P,
                          },
                          B = b.htmlRegion,
                          z = "visible",
                          U = "visibleFirst";
                        "scroll" !== B && B !== U && (B = z);
                        var W = B === U,
                          H = Lt(F, p),
                          Q = Lt(I, p),
                          V = B === z ? Q : H,
                          q = W ? Q : V;
                        (d.style.left = m), (d.style.top = v);
                        var Y = Pt(Math.round((R / parseFloat(A)) * 1e3) / 1e3),
                          G = Pt(Math.round((L / parseFloat(_)) * 1e3) / 1e3);
                        if (0 === Y || 0 === G || (ze(r) && !St(r))) return;
                        var K = b.offset,
                          J = b.targetOffset,
                          X = a(Dt(x, K), 2),
                          Z = X[0],
                          $ = X[1],
                          ee = a(Dt(e, J), 2),
                          te = ee[0],
                          ne = ee[1];
                        (e.x -= te), (e.y -= ne);
                        var re,
                          oe,
                          ie,
                          ae,
                          se = a(b.points || [], 2),
                          le = se[0],
                          ue = Mt(se[1]),
                          ce = Mt(le),
                          fe = It(e, ue),
                          de = It(x, ce),
                          pe = S({}, b),
                          he = fe.x - de.x + Z,
                          me = fe.y - de.y + $,
                          ve = u(he, me),
                          ge = u(he, me, Q),
                          ye = It(e, ["t", "l"]),
                          be = It(x, ["t", "l"]),
                          we = It(e, ["b", "r"]),
                          xe = It(x, ["b", "r"]),
                          ke = b.overflow || {},
                          Ae = ke.adjustX,
                          _e = ke.adjustY,
                          Ee = ke.shiftX,
                          Se = ke.shiftY,
                          Ce = function (e) {
                            return "boolean" === typeof e ? e : e >= 0;
                          };
                        c();
                        var je = Ce(_e),
                          Ne = ce[0] === ue[0];
                        if (
                          je &&
                          "t" === ce[0] &&
                          (oe > q.bottom || h.current.bt)
                        ) {
                          var Te = me;
                          Ne ? (Te -= L - D) : (Te = ye.y - xe.y - $);
                          var Pe = u(he, Te),
                            Oe = u(he, Te, Q);
                          Pe > ve || (Pe === ve && (!W || Oe >= ge))
                            ? ((h.current.bt = !0),
                              (me = Te),
                              (pe.points = [Ft(ce, 0), Ft(ue, 0)]))
                            : (h.current.bt = !1);
                        }
                        if (
                          je &&
                          "b" === ce[0] &&
                          (re < q.top || h.current.tb)
                        ) {
                          var Le = me;
                          Ne ? (Le += L - D) : (Le = we.y - be.y - $);
                          var Re = u(he, Le),
                            De = u(he, Le, Q);
                          Re > ve || (Re === ve && (!W || De >= ge))
                            ? ((h.current.tb = !0),
                              (me = Le),
                              (pe.points = [Ft(ce, 0), Ft(ue, 0)]))
                            : (h.current.tb = !1);
                        }
                        var Me = Ce(Ae),
                          Ie = ce[1] === ue[1];
                        if (
                          Me &&
                          "l" === ce[1] &&
                          (ae > q.right || h.current.rl)
                        ) {
                          var Fe = he;
                          Ie ? (Fe -= R - M) : (Fe = ye.x - xe.x - Z);
                          var Be = u(Fe, me),
                            Ue = u(Fe, me, Q);
                          Be > ve || (Be === ve && (!W || Ue >= ge))
                            ? ((h.current.rl = !0),
                              (he = Fe),
                              (pe.points = [Ft(ce, 1), Ft(ue, 1)]))
                            : (h.current.rl = !1);
                        }
                        if (
                          Me &&
                          "r" === ce[1] &&
                          (ie < q.left || h.current.lr)
                        ) {
                          var We = he;
                          Ie ? (We += R - M) : (We = we.x - be.x - Z);
                          var He = u(We, me),
                            Qe = u(We, me, Q);
                          He > ve || (He === ve && (!W || Qe >= ge))
                            ? ((h.current.lr = !0),
                              (he = We),
                              (pe.points = [Ft(ce, 1), Ft(ue, 1)]))
                            : (h.current.lr = !1);
                        }
                        c();
                        var Ve = !0 === Ee ? 0 : Ee;
                        "number" === typeof Ve &&
                          (ie < V.left &&
                            ((he -= ie - V.left),
                            e.x + M < V.left + Ve &&
                              (he += e.x - V.left + M - Ve)),
                          ae > V.right &&
                            ((he -= ae - V.right),
                            e.x > V.right - Ve && (he += e.x - V.right + Ve)));
                        var qe = !0 === Se ? 0 : Se;
                        "number" === typeof qe &&
                          (re < V.top &&
                            ((me -= re - V.top),
                            e.y + D < V.top + qe &&
                              (me += e.y - V.top + D - qe)),
                          oe > V.bottom &&
                            ((me -= oe - V.bottom),
                            e.y > V.bottom - qe &&
                              (me += e.y - V.bottom + qe)));
                        var Ye = x.x + he,
                          Ge = Ye + R,
                          Ke = x.y + me,
                          Je = Ke + L,
                          Xe = e.x,
                          Ze = Xe + M,
                          $e = e.y,
                          et = $e + D,
                          tt = (Math.max(Ye, Xe) + Math.min(Ge, Ze)) / 2 - Ye,
                          nt = (Math.max(Ke, $e) + Math.min(Je, et)) / 2 - Ke;
                        null === l || void 0 === l || l(n, pe),
                          f({
                            ready: !0,
                            offsetX: he / Y,
                            offsetY: me / G,
                            arrowX: tt / Y,
                            arrowY: nt / G,
                            scaleX: Y,
                            scaleY: G,
                            align: pe,
                          });
                      }
                    }),
                    v = function () {
                      f(function (e) {
                        return S(S({}, e), {}, { ready: !1 });
                      });
                    };
                  return (
                    ve(v, [o]),
                    ve(
                      function () {
                        t || v();
                      },
                      [t],
                    ),
                    [
                      c.ready,
                      c.offsetX,
                      c.offsetY,
                      c.arrowX,
                      c.arrowY,
                      c.scaleX,
                      c.scaleY,
                      c.align,
                      function () {
                        d.current += 1;
                        var e = d.current;
                        Promise.resolve().then(function () {
                          d.current === e && m();
                        });
                      },
                    ]
                  );
                })(Se, le, B ? He : de, O, R, D, U),
                Ye = a(qe, 9),
                Ge = Ye[0],
                Ke = Ye[1],
                Je = Ye[2],
                Xe = Ye[3],
                Ze = Ye[4],
                $e = Ye[5],
                et = Ye[6],
                tt = Ye[7],
                nt = Ye[8],
                rt = xt(function () {
                  Re || nt();
                });
              !(function (e, t, n, r) {
                ve(
                  function () {
                    if (e && t && n) {
                      var o = function () {
                          r();
                        },
                        i = n,
                        a = Tt(t),
                        s = Tt(i),
                        l = Nt(i),
                        u = new Set([l].concat(he(a), he(s)));
                      return (
                        u.forEach(function (e) {
                          e.addEventListener("scroll", o, { passive: !0 });
                        }),
                        l.addEventListener("resize", o, { passive: !0 }),
                        r(),
                        function () {
                          u.forEach(function (e) {
                            e.removeEventListener("scroll", o),
                              l.removeEventListener("resize", o);
                          });
                        }
                      );
                    }
                  },
                  [e, t, n],
                );
              })(Se, de, le, rt),
                ve(
                  function () {
                    rt();
                  },
                  [He, O],
                ),
                ve(
                  function () {
                    !Se || (null !== R && void 0 !== R && R[O]) || rt();
                  },
                  [JSON.stringify(D)],
                );
              var ot = e.useMemo(
                function () {
                  var e = (function (e, t, n, r) {
                    for (
                      var o = n.points, i = Object.keys(e), a = 0;
                      a < i.length;
                      a += 1
                    ) {
                      var s,
                        l = i[a];
                      if (
                        Ct(
                          null === (s = e[l]) || void 0 === s
                            ? void 0
                            : s.points,
                          o,
                          r,
                        )
                      )
                        return "".concat(t, "-placement-").concat(l);
                    }
                    return "";
                  })(R, i, tt, B);
                  return Fe()(e, null === F || void 0 === F ? void 0 : F(tt));
                },
                [tt, F, R, i, B],
              );
              e.useImperativeHandle(r, function () {
                return { forceAlign: rt };
              });
              ve(
                function () {
                  Be && (nt(), Be(), Ue(null));
                },
                [Be],
              );
              var it = a(e.useState(0), 2),
                at = it[0],
                st = it[1],
                lt = a(e.useState(0), 2),
                ut = lt[0],
                ct = lt[1],
                ft = (function (t, n, r, o) {
                  return e.useMemo(
                    function () {
                      var e = Et(null !== r && void 0 !== r ? r : n),
                        i = Et(null !== o && void 0 !== o ? o : n),
                        a = new Set(e),
                        s = new Set(i);
                      return (
                        t &&
                          (a.has("hover") &&
                            (a.delete("hover"), a.add("click")),
                          s.has("hover") &&
                            (s.delete("hover"), s.add("click"))),
                        [a, s]
                      );
                    },
                    [t, n, r, o],
                  );
                })(te, u, c, f),
                dt = a(ft, 2),
                pt = dt[0],
                ht = dt[1],
                mt = function (e, t, n, r) {
                  be[e] = function (o) {
                    var i;
                    null === r || void 0 === r || r(o), Oe(t, n);
                    for (
                      var a = arguments.length,
                        s = new Array(a > 1 ? a - 1 : 0),
                        l = 1;
                      l < a;
                      l++
                    )
                      s[l - 1] = arguments[l];
                    null === (i = ye[e]) ||
                      void 0 === i ||
                      i.call.apply(i, [ye, o].concat(s));
                  };
                },
                vt = pt.has("click"),
                gt = ht.has("click") || ht.has("contextMenu");
              (vt || gt) &&
                (be.onClick = function (e) {
                  var t;
                  je.current && gt
                    ? Oe(!1)
                    : !je.current && vt && (Ve(e), Oe(!0));
                  for (
                    var n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      o = 1;
                    o < n;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  null === (t = ye.onClick) ||
                    void 0 === t ||
                    t.call.apply(t, [ye, e].concat(r));
                }),
                (function (t, n, r, o, i, a, s, l) {
                  var u = e.useRef(t),
                    c = e.useRef(!1);
                  u.current !== t && ((c.current = !0), (u.current = t)),
                    e.useEffect(
                      function () {
                        var e = qt(function () {
                          c.current = !1;
                        });
                        return function () {
                          qt.cancel(e);
                        };
                      },
                      [t],
                    ),
                    e.useEffect(
                      function () {
                        if (n && o && (!i || a)) {
                          var e = !1,
                            t = function (t) {
                              var n = t.target;
                              e = s(n);
                            },
                            f = function (t) {
                              var n = t.target;
                              c.current || !u.current || e || s(n) || l(!1);
                            },
                            d = Nt(o);
                          d.addEventListener("mousedown", t),
                            d.addEventListener("click", f);
                          var p = wt(r);
                          return (
                            p &&
                              (p.addEventListener("mousedown", t),
                              p.addEventListener("click", f)),
                            function () {
                              d.removeEventListener("mousedown", t),
                                d.removeEventListener("click", f),
                                p &&
                                  (p.removeEventListener("mousedown", t),
                                  p.removeEventListener("click", f));
                            }
                          );
                        }
                      },
                      [n, r, o, i, a],
                    );
                })(Se, gt, de, le, x, A, we, Oe);
              var bt,
                kt,
                Ot = pt.has("hover"),
                Rt = ht.has("hover");
              Ot &&
                (mt("onMouseEnter", !0, v, function (e) {
                  Ve(e);
                }),
                (bt = function () {
                  Oe(!0, v);
                }),
                B &&
                  (be.onMouseMove = function (e) {
                    var t;
                    null === (t = ye.onMouseMove) ||
                      void 0 === t ||
                      t.call(ye, e);
                  })),
                Rt &&
                  (mt("onMouseLeave", !1, y),
                  (kt = function () {
                    Oe(!1, y);
                  })),
                pt.has("focus") && mt("onFocus", !0, b),
                ht.has("focus") && mt("onBlur", !1, w),
                pt.has("contextMenu") &&
                  (be.onContextMenu = function (e) {
                    var t;
                    Ve(e), Oe(!0), e.preventDefault();
                    for (
                      var n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    null === (t = ye.onContextMenu) ||
                      void 0 === t ||
                      t.call.apply(t, [ye, e].concat(r));
                  }),
                K && (be.className = Fe()(ye.className, K));
              var Bt = S(S({}, ye), be),
                zt = {};
              [
                "onContextMenu",
                "onClick",
                "onMouseDown",
                "onTouchStart",
                "onMouseEnter",
                "onMouseLeave",
                "onFocus",
                "onBlur",
              ].forEach(function (e) {
                X[e] &&
                  (zt[e] = function () {
                    for (
                      var t, n = arguments.length, r = new Array(n), o = 0;
                      o < n;
                      o++
                    )
                      r[o] = arguments[o];
                    null === (t = Bt[e]) ||
                      void 0 === t ||
                      t.call.apply(t, [Bt].concat(r)),
                      X[e].apply(X, r);
                  });
              });
              var Ut = e.cloneElement(ge, S(S({}, Bt), zt)),
                Wt = { x: Xe, y: Ze },
                Ht = W ? S({}, !0 !== W ? W : {}) : null;
              return e.createElement(
                e.Fragment,
                null,
                e.createElement(
                  yt,
                  {
                    disabled: !Se,
                    ref: me,
                    onResize: function (e, t) {
                      if ((rt(), I)) {
                        var n = t.getBoundingClientRect();
                        st(n.width), ct(n.height);
                      }
                    },
                  },
                  e.createElement(Hn, { getTriggerDOMNode: J }, Ut),
                ),
                e.createElement(
                  _t.Provider,
                  { value: ie },
                  e.createElement(Wn, {
                    portal: t,
                    ref: ce,
                    prefixCls: i,
                    popup: N,
                    className: Fe()(T, ot),
                    style: P,
                    target: de,
                    onMouseEnter: bt,
                    onMouseLeave: kt,
                    zIndex: M,
                    open: Se,
                    keepDom: Re,
                    onClick: z,
                    mask: x,
                    motion: xe,
                    maskMotion: ke,
                    onVisibleChanged: function (e) {
                      De(!1), nt(), null === m || void 0 === m || m(e);
                    },
                    onPrepare: function () {
                      return new Promise(function (e) {
                        Ue(function () {
                          return e;
                        });
                      });
                    },
                    forceRender: E,
                    autoDestroy: Z,
                    getPopupContainer: _,
                    align: tt,
                    arrow: Ht,
                    arrowPos: Wt,
                    ready: Ge,
                    offsetX: Ke,
                    offsetY: Je,
                    onAlign: rt,
                    stretch: I,
                    targetWidth: at / $e,
                    targetHeight: ut / et,
                  }),
                ),
              );
            });
          return n;
        })(Me),
        qn = { shiftX: 64, adjustY: 1 },
        Yn = { adjustX: 1, shiftY: !0 },
        Gn = [0, 0],
        Kn = {
          left: {
            points: ["cr", "cl"],
            overflow: Yn,
            offset: [-4, 0],
            targetOffset: Gn,
          },
          right: {
            points: ["cl", "cr"],
            overflow: Yn,
            offset: [4, 0],
            targetOffset: Gn,
          },
          top: {
            points: ["bc", "tc"],
            overflow: qn,
            offset: [0, -4],
            targetOffset: Gn,
          },
          bottom: {
            points: ["tc", "bc"],
            overflow: qn,
            offset: [0, 4],
            targetOffset: Gn,
          },
          topLeft: {
            points: ["bl", "tl"],
            overflow: qn,
            offset: [0, -4],
            targetOffset: Gn,
          },
          leftTop: {
            points: ["tr", "tl"],
            overflow: Yn,
            offset: [-4, 0],
            targetOffset: Gn,
          },
          topRight: {
            points: ["br", "tr"],
            overflow: qn,
            offset: [0, -4],
            targetOffset: Gn,
          },
          rightTop: {
            points: ["tl", "tr"],
            overflow: Yn,
            offset: [4, 0],
            targetOffset: Gn,
          },
          bottomRight: {
            points: ["tr", "br"],
            overflow: qn,
            offset: [0, 4],
            targetOffset: Gn,
          },
          rightBottom: {
            points: ["bl", "br"],
            overflow: Yn,
            offset: [4, 0],
            targetOffset: Gn,
          },
          bottomLeft: {
            points: ["tl", "bl"],
            overflow: qn,
            offset: [0, 4],
            targetOffset: Gn,
          },
          leftBottom: {
            points: ["br", "bl"],
            overflow: Yn,
            offset: [-4, 0],
            targetOffset: Gn,
          },
        };
      function Jn(t) {
        var n = t.children,
          r = t.prefixCls,
          o = t.id,
          i = t.overlayInnerStyle,
          a = t.className,
          s = t.style;
        return e.createElement(
          "div",
          { className: Fe()("".concat(r, "-content"), a), style: s },
          e.createElement(
            "div",
            {
              className: "".concat(r, "-inner"),
              id: o,
              role: "tooltip",
              style: i,
            },
            "function" === typeof n ? n() : n,
          ),
        );
      }
      var Xn = [
          "overlayClassName",
          "trigger",
          "mouseEnterDelay",
          "mouseLeaveDelay",
          "overlayStyle",
          "prefixCls",
          "children",
          "onVisibleChange",
          "afterVisibleChange",
          "transitionName",
          "animation",
          "motion",
          "placement",
          "align",
          "destroyTooltipOnHide",
          "defaultVisible",
          "getTooltipContainer",
          "overlayInnerStyle",
          "arrowContent",
          "overlay",
          "id",
          "showArrow",
        ],
        Zn = function (t, n) {
          var r = t.overlayClassName,
            o = t.trigger,
            i = void 0 === o ? ["hover"] : o,
            a = t.mouseEnterDelay,
            s = void 0 === a ? 0 : a,
            l = t.mouseLeaveDelay,
            u = void 0 === l ? 0.1 : l,
            c = t.overlayStyle,
            f = t.prefixCls,
            d = void 0 === f ? "rc-tooltip" : f,
            p = t.children,
            h = t.onVisibleChange,
            m = t.afterVisibleChange,
            v = t.transitionName,
            g = t.animation,
            y = t.motion,
            b = t.placement,
            w = void 0 === b ? "right" : b,
            x = t.align,
            k = void 0 === x ? {} : x,
            A = t.destroyTooltipOnHide,
            _ = void 0 !== A && A,
            E = t.defaultVisible,
            C = t.getTooltipContainer,
            j = t.overlayInnerStyle,
            N = (t.arrowContent, t.overlay),
            T = t.id,
            P = t.showArrow,
            O = void 0 === P || P,
            L = $(t, Xn),
            R = (0, e.useRef)(null);
          (0, e.useImperativeHandle)(n, function () {
            return R.current;
          });
          var D = S({}, L);
          "visible" in t && (D.popupVisible = t.visible);
          return e.createElement(
            Vn,
            Z(
              {
                popupClassName: r,
                prefixCls: d,
                popup: function () {
                  return e.createElement(
                    Jn,
                    {
                      key: "content",
                      prefixCls: d,
                      id: T,
                      overlayInnerStyle: j,
                    },
                    N,
                  );
                },
                action: i,
                builtinPlacements: Kn,
                popupPlacement: w,
                ref: R,
                popupAlign: k,
                getPopupContainer: C,
                onPopupVisibleChange: h,
                afterPopupVisibleChange: m,
                popupTransitionName: v,
                popupAnimation: g,
                popupMotion: y,
                defaultPopupVisible: E,
                autoDestroy: _,
                mouseLeaveDelay: u,
                popupStyle: c,
                mouseEnterDelay: s,
                arrow: O,
              },
              D,
            ),
            p,
          );
        },
        $n = (0, e.forwardRef)(Zn),
        er = function (t) {
          var n = t.setRegister,
            r = t.setCompanyRegister,
            o = new g();
          o.basePath = "https://productivity-pzaiolprqa-uc.a.run.app";
          var i = new H(o),
            s = a((0, e.useState)(""), 2),
            u = (s[0], s[1]),
            p = a((0, e.useState)(""), 2),
            h = p[0],
            m = p[1],
            v = a((0, e.useState)(""), 2),
            y = v[0],
            b = v[1],
            w = a((0, e.useState)(""), 2),
            x = w[0],
            k = w[1],
            A = a((0, e.useState)(!1), 2),
            _ = A[0],
            E = A[1],
            S = a((0, e.useState)(["", "", "", "", ""]), 2),
            C = S[0],
            j = S[1],
            N = a((0, e.useContext)(Q), 2),
            T = (N[0], N[1]),
            P = a((0, e.useState)("password"), 2),
            O = P[0],
            L = P[1],
            R = a((0, e.useState)(!1), 2),
            D = R[0],
            M = R[1],
            I = a((0, e.useState)(!1), 2),
            F = I[0],
            B = I[1],
            z = (function () {
              var e = c(
                l().mark(function e() {
                  var t;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = x),
                            console.log(h, t, y),
                            i
                              .createUserApiUsersPost({
                                email: h,
                                hashed_password: t,
                                name: y,
                              })
                              .then(function (e) {
                                if ((T(e.data), "" !== ne)) {
                                  var t = W.filter(function (e) {
                                    return e.name === ne;
                                  });
                                  if (t.length > 0) {
                                    var n = t[0].id,
                                      r = h;
                                    i.createEmployeeApiEmployeesPost({
                                      company_id: n,
                                      user_email: r,
                                    })
                                      .then(function (e) {
                                        console.log(e);
                                      })
                                      .catch(function (e) {
                                        console.log(e.response.data.detail);
                                      });
                                  }
                                }
                              })
                              .catch(function (e) {
                                j(e.response.data.detail),
                                  console.log(e.response.data.detail);
                              });
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            U = a((0, e.useState)([]), 2),
            W = U[0],
            V = U[1],
            q = a((0, e.useState)([]), 2),
            Y = q[0],
            G = q[1],
            J = (function () {
              var e = c(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          i.getAllCompaniesApiCompaniesNamesGet()
                            .then(function (e) {
                              G(e.data), V(e.data);
                            })
                            .catch(function (e) {
                              console.log(e.response.data.detail);
                            });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          (0, e.useEffect)(function () {
            J();
          }, []);
          var Z = a((0, e.useState)(!1), 2),
            $ = Z[0],
            ee = Z[1],
            te = a((0, e.useState)(""), 2),
            ne = te[0],
            re = te[1],
            oe = a((0, e.useState)([]), 2),
            ie = oe[0],
            ae = oe[1];
          (0, e.useEffect)(
            function () {
              var e = (Y.length > 3 ? Y.slice(0, 3) : Y).map(function (e) {
                return e.name;
              });
              ae(e);
            },
            [Y],
          ),
            (0, e.useEffect)(
              function () {
                var e = W;
                "" !== ne &&
                  (e = W.filter(function (e) {
                    return e.name.startsWith(ne);
                  })),
                  G(e);
              },
              [ne],
            );
          var se = a((0, e.useState)(!1), 2),
            le = se[0],
            ue = se[1];
          return (
            (0, e.useEffect)(
              function () {
                "" !== C[4] ? ue(!0) : ue(!1);
              },
              [C],
            ),
            (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsxs)("div", {
                  className: "register-form",
                  children: [
                    (0, f.jsx)("h3", {
                      className: "title-login",
                      style: { marginTop: "-2%" },
                      children: "Complete the form below to get started",
                    }),
                    (0, f.jsxs)("div", {
                      className: "field",
                      style: { marginTop: "-2%" },
                      children: [
                        (0, f.jsx)("label", {
                          className: "login-label",
                          children: "Company's name (optional)",
                        }),
                        (0, f.jsx)($n, {
                          placement: "right",
                          overlay: (0, f.jsxs)("span", {
                            children: [
                              "Your employer will be able to see all your tasks",
                              (0, f.jsx)("br", {}),
                              "and your progress.",
                            ],
                          }),
                          overlayClassName: "custom-tooltip",
                          children: (0, f.jsx)("div", {
                            className: "login-field",
                            id: "company",
                            children: (0, f.jsx)(X, {
                              place: "reg",
                              changeClick: u,
                              defaultPriority: "",
                              error: le,
                              list: ie,
                              title: "E.g. Productivity",
                              isOpen: $,
                              setIsOpen: ee,
                              companyName: ne,
                              setCompanyName: re,
                            }),
                          }),
                        }),
                        "" !== C[4]
                          ? (0, f.jsx)(d, { message: C[4] })
                          : (0, f.jsx)(f.Fragment, {}),
                        (0, f.jsxs)("div", {
                          className: "field",
                          children: [
                            (0, f.jsx)("label", {
                              className: "login-label",
                              children: "Name *",
                            }),
                            (0, f.jsx)("div", {
                              className: "login-field",
                              style: {
                                border:
                                  "" === C[0]
                                    ? "1px solid #1B3D84"
                                    : "1px solid #AF3218",
                              },
                              children: (0, f.jsx)("input", {
                                name: "name",
                                type: "name",
                                placeholder: "E.g. Emilie",
                                value: y,
                                onChange: function (e) {
                                  return b(e.target.value);
                                },
                                className: "login-input",
                              }),
                            }),
                            "" !== C[0]
                              ? (0, f.jsx)(d, { message: C[0] })
                              : (0, f.jsx)(f.Fragment, {}),
                          ],
                        }),
                        (0, f.jsx)("label", {
                          className: "login-label",
                          children: "Email address *",
                        }),
                        (0, f.jsx)("div", {
                          className: "login-field",
                          style: {
                            border:
                              "" === C[1]
                                ? "1px solid #1B3D84"
                                : "1px solid #AF3218",
                          },
                          children: (0, f.jsx)("input", {
                            name: "email",
                            type: "email",
                            placeholder: "E.g. productivity@email.com",
                            value: h,
                            onChange: function (e) {
                              return m(e.target.value);
                            },
                            className: "login-input",
                          }),
                        }),
                        "" !== C[1]
                          ? (0, f.jsx)(d, { message: C[1] })
                          : (0, f.jsx)(f.Fragment, {}),
                      ],
                    }),
                    (0, f.jsxs)("div", {
                      className: "field",
                      children: [
                        (0, f.jsx)("label", {
                          className: "login-label",
                          children: "Password *",
                        }),
                        (0, f.jsxs)("div", {
                          className: "login-field",
                          style: {
                            border:
                              "" === C[2]
                                ? "1px solid #1B3D84"
                                : "1px solid #AF3218",
                          },
                          children: [
                            (0, f.jsx)("input", {
                              name: "password",
                              type: O,
                              placeholder: "Enter at least 8 digits",
                              value: x,
                              onChange: function (e) {
                                return k(e.target.value);
                              },
                              className: "login-input",
                            }),
                            (0, f.jsx)("button", {
                              className: "show-password ".concat(
                                "text" === O ? "show-closed" : "",
                              ),
                              onClick: function () {
                                L("password" === O ? "text" : "password");
                              },
                            }),
                          ],
                        }),
                        "" !== C[2]
                          ? (0, f.jsx)(d, { message: C[2] })
                          : (0, f.jsx)(f.Fragment, {}),
                      ],
                    }),
                    (0, f.jsx)("div", {
                      children: (0, f.jsxs)("label", {
                        className: "terms",
                        style: {
                          border: "" === C[3] ? "none" : "1px solid #AF3218",
                        },
                        children: [
                          (0, f.jsx)("input", {
                            name: "rules",
                            type: "checkbox",
                            className: "terms-checkbox",
                            onClick: function () {
                              return E(!_);
                            },
                          }),
                          (0, f.jsx)("span", { className: "checkmark" }),
                          (0, f.jsxs)("p", {
                            className: "agreement",
                            children: [
                              "I agree to",
                              " ",
                              (0, f.jsx)("button", {
                                className: "no-account-register",
                                onClick: function () {
                                  return B(!0);
                                },
                                children: "Terms of Service",
                              }),
                              " ",
                              "and",
                              " ",
                              (0, f.jsx)("button", {
                                className: "no-account-register",
                                onClick: function () {
                                  return M(!0);
                                },
                                children: "Privacy Policy.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    "" !== C[3]
                      ? (0, f.jsx)(d, { message: C[3] })
                      : (0, f.jsx)(f.Fragment, {}),
                    (0, f.jsx)("br", {}),
                    (0, f.jsxs)("button", {
                      className: "submit-login",
                      onClick: function (e) {
                        return (function (e) {
                          e.preventDefault();
                          var t = ["", "", "", "", ""],
                            n = !1;
                          if (
                            (_ ||
                              ((n = !0),
                              (t[3] =
                                "You must agree to our terms and conditions to create an account. Please check this box.")),
                            x.length < 8 &&
                              ((n = !0),
                              (t[2] = "Please enter at least 8 characters.")),
                            h.includes("@") ||
                              ((n = !0),
                              (t[1] =
                                "The email is missing an @. Please complete the email with the missing character.")),
                            0 === h.length &&
                              ((n = !0), (t[1] = "Please enter your email.")),
                            0 === y.length &&
                              ((n = !0), (t[0] = "Please enter your name.")),
                            "" !== ne)
                          ) {
                            var r = W.filter(function (e) {
                              return e.name === ne;
                            });
                            console.log(r),
                              0 === r.length &&
                                (t[4] = "There is no such company registered.");
                          }
                          j(t), n || z();
                        })(e);
                      },
                      children: [
                        "Sign in",
                        (0, f.jsx)("span", { className: "login-icon" }),
                      ],
                    }),
                    (0, f.jsxs)("p", {
                      className: "account-info",
                      children: [
                        "Do you already have an account?",
                        (0, f.jsx)("button", {
                          className: "no-account-register",
                          onClick: function () {
                            return n(!1);
                          },
                          children: "Log in",
                        }),
                      ],
                    }),
                    (0, f.jsxs)("p", {
                      className: "account-info",
                      style: { marginTop: "-10px" },
                      children: [
                        "Do you want to register as a company?",
                        (0, f.jsx)("button", {
                          className: "no-account-register",
                          onClick: function () {
                            return n(!1), void r(!0);
                          },
                          children: "Register",
                        }),
                      ],
                    }),
                  ],
                }),
                F
                  ? (0, f.jsx)(K, { type: 0, setWindow: B })
                  : (0, f.jsx)(f.Fragment, {}),
                D
                  ? (0, f.jsx)(K, { type: 1, setWindow: M })
                  : (0, f.jsx)(f.Fragment, {}),
              ],
            })
          );
        },
        tr = function (t) {
          var n = t.setCompanyRegister,
            r = t.setCompanyLogIn,
            o = a((0, e.useState)(""), 2),
            i = o[0],
            s = o[1],
            u = a((0, e.useState)(""), 2),
            p = u[0],
            h = u[1],
            m = a((0, e.useState)(""), 2),
            v = m[0],
            y = m[1],
            b = a((0, e.useContext)(Q), 2),
            w = (b[0], b[1]),
            x = a((0, e.useState)("password"), 2),
            k = x[0],
            A = x[1],
            _ = new g();
          _.basePath = "https://productivity-pzaiolprqa-uc.a.run.app";
          var E = new H(_),
            S = (function () {
              var e = c(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          console.log("submit"),
                            E.generateTokenApiTokenPost("company", i, p)
                              .then(function (e) {
                                w(e.data);
                              })
                              .catch(function (e) {
                                y(e.response.data.detail);
                              });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            C = function (e) {
              e.preventDefault(),
                y(""),
                "" === p || "" === i
                  ? y("You need to fill both email and password")
                  : S();
            };
          return (0, f.jsxs)("div", {
            className: "login-form",
            children: [
              (0, f.jsx)("label", {
                className: "title-login",
                children: "Let's track your emloyees' productivity!",
              }),
              (0, f.jsxs)("div", {
                className: "field",
                children: [
                  (0, f.jsx)("label", {
                    className: "login-label",
                    children: "Company's Email address *",
                  }),
                  (0, f.jsx)("div", {
                    className: "login-field",
                    style: {
                      border:
                        "" === v ? "1px solid #1B3D84" : "1px solid #AF3218",
                    },
                    children: (0, f.jsx)("input", {
                      name: "email",
                      type: "email",
                      placeholder: "E.g. productivity@email.com",
                      value: i,
                      onChange: function (e) {
                        return s(e.target.value);
                      },
                      className: "login-input",
                    }),
                  }),
                ],
              }),
              (0, f.jsxs)("div", {
                className: "field",
                children: [
                  (0, f.jsx)("label", {
                    className: "login-label",
                    children: "Password *",
                  }),
                  (0, f.jsxs)("div", {
                    className: "login-field",
                    style: {
                      border:
                        "" === v ? "1px solid #1B3D84" : "1px solid #AF3218",
                    },
                    onKeyUp: function (e) {
                      return (function (e) {
                        "Enter" === e.key && C(e);
                      })(e);
                    },
                    children: [
                      (0, f.jsx)("input", {
                        name: "password",
                        type: k,
                        placeholder: "Enter at least 8 digits",
                        value: p,
                        onChange: function (e) {
                          return h(e.target.value);
                        },
                        className: "login-input",
                      }),
                      (0, f.jsx)("button", {
                        className: "show-password ".concat(
                          "text" === k ? "show-closed" : "",
                        ),
                        onClick: function () {
                          A("password" === k ? "text" : "password");
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, f.jsx)(d, { message: v }),
              (0, f.jsx)("br", {}),
              (0, f.jsxs)("button", {
                className: "submit-login",
                onClick: function (e) {
                  return C(e);
                },
                children: [
                  "Log in",
                  (0, f.jsx)("span", { className: "login-icon" }),
                ],
              }),
              (0, f.jsxs)("div", {
                className: "no-account-info",
                children: [
                  "Don't have an account?",
                  (0, f.jsx)("button", {
                    className: "no-account-register",
                    onClick: function () {
                      return r(!1), void n(!0);
                    },
                    children: "Register",
                  }),
                ],
              }),
              (0, f.jsxs)("div", {
                className: "no-account-info",
                style: { marginTop: "2%" },
                children: [
                  "Do you want to log in as an individual?",
                  (0, f.jsx)("button", {
                    className: "no-account-register",
                    onClick: function () {
                      return r(!1);
                    },
                    children: "Log in",
                  }),
                ],
              }),
            ],
          });
        },
        nr = function (t) {
          var n = t.setCompanyRegister,
            r = t.setRegister,
            o = a((0, e.useState)(""), 2),
            i = o[0],
            s = o[1],
            u = a((0, e.useState)(""), 2),
            p = u[0],
            h = u[1],
            m = a((0, e.useState)(""), 2),
            v = m[0],
            y = m[1],
            b = a((0, e.useState)(!1), 2),
            w = b[0],
            x = b[1],
            k = a((0, e.useState)(["", "", "", ""]), 2),
            A = k[0],
            _ = k[1],
            E = a((0, e.useContext)(Q), 2)[1],
            S = a((0, e.useState)("password"), 2),
            C = S[0],
            j = S[1],
            N = a((0, e.useState)(!1), 2),
            T = N[0],
            P = N[1],
            O = a((0, e.useState)(!1), 2),
            L = O[0],
            R = O[1],
            D = new g();
          D.basePath = "https://productivity-pzaiolprqa-uc.a.run.app";
          var M = new H(D),
            I = (function () {
              var e = c(
                l().mark(function e() {
                  var t;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = v),
                            M.createCompanyApiCompaniesPost({
                              email: i,
                              hashed_password: t,
                              name: p,
                            })
                              .then(function (e) {
                                console.log(e.data), E(e.data);
                              })
                              .catch(function (e) {
                                _(["", "", "", e.response.data.detail]);
                              });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsxs)("div", {
                className: "register-form",
                children: [
                  (0, f.jsx)("h3", {
                    className: "title-login",
                    style: { marginTop: "-2%" },
                    children: "Complete the form below to get started",
                  }),
                  (0, f.jsxs)("div", {
                    className: "field",
                    style: { marginTop: "-2%" },
                    children: [
                      (0, f.jsx)("label", {
                        className: "login-label",
                        children: "Company's Name *",
                      }),
                      (0, f.jsx)("div", {
                        className: "login-field",
                        style: {
                          border:
                            "" === A[0]
                              ? "1px solid #1B3D84"
                              : "1px solid #AF3218",
                        },
                        children: (0, f.jsx)("input", {
                          name: "name",
                          type: "name",
                          placeholder: "E.g. Productivity",
                          value: p,
                          onChange: function (e) {
                            return h(e.target.value);
                          },
                          className: "login-input",
                        }),
                      }),
                      "" !== A[0]
                        ? (0, f.jsx)(d, { message: A[0] })
                        : (0, f.jsx)(f.Fragment, {}),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    className: "field",
                    children: [
                      (0, f.jsx)("label", {
                        className: "login-label",
                        children: "Email address *",
                      }),
                      (0, f.jsx)("div", {
                        className: "login-field",
                        style: {
                          border:
                            "" === A[1]
                              ? "1px solid #1B3D84"
                              : "1px solid #AF3218",
                        },
                        children: (0, f.jsx)("input", {
                          name: "email",
                          type: "email",
                          placeholder: "E.g. productivity@email.com",
                          value: i,
                          onChange: function (e) {
                            return s(e.target.value);
                          },
                          className: "login-input",
                        }),
                      }),
                      "" !== A[1]
                        ? (0, f.jsx)(d, { message: A[1] })
                        : (0, f.jsx)(f.Fragment, {}),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    className: "field",
                    children: [
                      (0, f.jsx)("label", {
                        className: "login-label",
                        children: "Password *",
                      }),
                      (0, f.jsxs)("div", {
                        className: "login-field",
                        style: {
                          border:
                            "" === A[2]
                              ? "1px solid #1B3D84"
                              : "1px solid #AF3218",
                        },
                        children: [
                          (0, f.jsx)("input", {
                            name: "password",
                            type: C,
                            placeholder: "Enter at least 8 digits",
                            value: v,
                            onChange: function (e) {
                              return y(e.target.value);
                            },
                            className: "login-input",
                          }),
                          (0, f.jsx)("button", {
                            className: "show-password ".concat(
                              "text" === C ? "show-closed" : "",
                            ),
                            onClick: function () {
                              j("password" === C ? "text" : "password");
                            },
                          }),
                        ],
                      }),
                      "" !== A[2]
                        ? (0, f.jsx)(d, { message: A[2] })
                        : (0, f.jsx)(f.Fragment, {}),
                    ],
                  }),
                  (0, f.jsx)("div", {
                    children: (0, f.jsxs)("label", {
                      className: "terms",
                      style: {
                        border: "" === A[3] ? "none" : "1px solid #AF3218",
                      },
                      children: [
                        (0, f.jsx)("input", {
                          name: "rules",
                          type: "checkbox",
                          className: "terms-checkbox",
                          onClick: function () {
                            return x(!w);
                          },
                        }),
                        (0, f.jsx)("span", { className: "checkmark" }),
                        (0, f.jsxs)("p", {
                          className: "agreement",
                          children: [
                            "I agree to",
                            " ",
                            (0, f.jsx)("button", {
                              className: "no-account-register",
                              onClick: function () {
                                return R(!0);
                              },
                              children: "Terms of Service",
                            }),
                            " ",
                            "and",
                            " ",
                            (0, f.jsx)("button", {
                              className: "no-account-register",
                              onClick: function () {
                                return P(!0);
                              },
                              children: "Privacy Policy.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  "" !== A[3]
                    ? (0, f.jsx)(d, { message: A[3] })
                    : (0, f.jsx)(f.Fragment, {}),
                  (0, f.jsx)("br", {}),
                  (0, f.jsxs)("button", {
                    className: "submit-login",
                    onClick: function (e) {
                      return (function (e) {
                        e.preventDefault();
                        var t = ["", "", "", ""],
                          n = !1;
                        w ||
                          ((n = !0),
                          (t[3] =
                            "You must agree to our terms and conditions to create an account. Please check this box.")),
                          v.length < 8 &&
                            ((n = !0),
                            (t[2] = "Please enter at least 8 characters.")),
                          i.includes("@") ||
                            ((n = !0),
                            (t[1] =
                              "The email is missing an @. Please complete the email with the missing character.")),
                          0 === i.length &&
                            ((n = !0), (t[1] = "Please enter your email.")),
                          0 === p.length &&
                            ((n = !0), (t[0] = "Please enter your name.")),
                          _(t),
                          n || I();
                      })(e);
                    },
                    children: [
                      "Sign in",
                      (0, f.jsx)("span", { className: "login-icon" }),
                    ],
                  }),
                  (0, f.jsxs)("p", {
                    className: "account-info",
                    children: [
                      "Do you already have an account?",
                      (0, f.jsx)("button", {
                        className: "no-account-register",
                        onClick: function () {
                          return n(!1);
                        },
                        children: "Log in",
                      }),
                    ],
                  }),
                  (0, f.jsxs)("p", {
                    className: "account-info",
                    style: { marginTop: "-10px" },
                    children: [
                      "Do you want to register as an individual?",
                      (0, f.jsx)("button", {
                        className: "no-account-register",
                        onClick: function () {
                          return n(!1), void r(!0);
                        },
                        children: "Register",
                      }),
                    ],
                  }),
                ],
              }),
              L
                ? (0, f.jsx)(K, { type: 0, setWindow: R })
                : (0, f.jsx)(f.Fragment, {}),
              T
                ? (0, f.jsx)(K, { type: 1, setWindow: P })
                : (0, f.jsx)(f.Fragment, {}),
            ],
          });
        },
        rr = n.p + "static/media/ellipses.7b41fbc2b77417f949c9.png",
        or = function () {
          var t = a((0, e.useState)(!1), 2),
            n = t[0],
            r = t[1],
            o = a((0, e.useState)(!1), 2),
            i = o[0],
            s = o[1],
            l = a((0, e.useState)(!1), 2),
            u = l[0],
            c = l[1];
          return (0, f.jsxs)("div", {
            className: "front-page",
            children: [
              (0, f.jsxs)("div", {
                className: "demo",
                children: [
                  (0, f.jsx)("h2", {
                    className: "motto",
                    children:
                      "Unlock a world of productivity and organization!",
                  }),
                  (0, f.jsx)("img", { className: "demo-screenshot" }),
                  (0, f.jsx)("img", {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAYAAADHcWrDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACAhSURBVHgB1V3Pr2RXca463QMOisTLP4A7iRShbJhEWaAohAax8CKSx1GEABHNeJNVIswSRWHeGBBSNgElC5SNx1IkIiUSYwVhK/yY51XYxV5nwTPKIssHK9C8eyrnnKqvqs7tN/ab8cwYrqan77t9f5z7naqvvqpz+jbTr8lyvD8+am9HdKW9hI42tn3bXpXprNyjsy+dHJ/Sr8HC9Cu2vNDAfd/7aF+E94X5aZJ6dUt8xCRHvbElv1hvgCXWN8ynheS0bXqzVP4Jibz5Nz84PqFfoeU9B72D3Mz1KjNfa0A+W4h3RcRAFdq0JpbRUOmAjvciAHgGvb9oHMvSdx2fxeukvV7hSid/9f3jN+g9XN4z0P/6U8d7lnK9IdPBPiqkQHfa6GAO4FktuoEqbRv737ZPB7vtrwCLfWYdUcZVRgco+u18/ZPeaTy8gW63DS8//9qTp6QnCvqNTh2lfKEh9MKWufGyAd1QgXVvGPQRnVA6qiLS/uZNAhUvpgT+8ITWBc3Yy/hEz0PDS8jAJ+uI8X7Szv/Nv3z1+A49oeWJgN7B3g6w6YWNWfW2Az0Ba+9GI2rhYlaPz/UYTtsCeLNqOxcLrN5Axt/9v7FJKDlAX07bvseff+3Fl+kxL48V9A42NbAbCC80sD64GZaqVr0x0DuoG8mgJ3rJfwNoCm+YLB5AK32Mc48bFPWUji6oZ7p529DB7zTWDnyr+dTx5167+djAf2ygf35/vN9syksNkN2aq7dKF7QtCuQmWTc6wj0gveARk4JpQJXSOV2iEzhohY1WhsVL3LC/w/BpHOLrLYDcXird+uxj4PxHDvq1Zt0fKJuXNizXBqCJNrbZmglcXse7U4tRSFntC2ted8SgGwuQuq+SORt3q5TsnVy9A/zGewSodXxKagckRvQG/tlC9dZnXv3KN+gRLo8U9L9o1n2lWXe78V0xPkaw7EmMg1hYrTvRxRRUB/j5M1MqrLwdHhFgw8JVQsLKdR1gl/WNWzDNG1u8HpvEo8HY5c494S8+Kqt/ZKB/+pMv3mw3d9zBDcCDVrAOQJ1u0t8Z5EwpxvtSTP1tLAh2xYJt64QJwZXJARcVOGr5ZB2SMW8fS/unIsfg6UdU3e/0nPm5T3/v3Wv8dw16p5NNo5MG3rVhzcxh3YmbN0YdG3C2cbtLxNRR+dhML9EZ4pZdsqUPWkIyFcEWOl3X2TtDzAusP5RiSK1drb4BPgiHzfqHB3zxuVeP3xXdvCvQG+A7LuVOA/Mjm2zB5vrTO9HKwrv1GtCuaDoN8chENcDSKqjKoCau4tno5gL56GATLD94329YIB9l4hpBMDVer7Z7te2LqqPjZ7936xY95LKhh1w64C1i3W2AfThbm4NUeFYenIDhFEjpkFa0I9J+ZBkpqVYf57bgi30zfU2B2j0MbeHIC8bnPJIu7aDQ+aT7ihKMdohK0fHh/jO/t6d//Z/XX6eHWB4K9A545c3dLgfd2ihJOktkoEpGIOQIfvCGoJ4V6HaebfzNBl7jcOFMWSUrH2bvSAd8pe2DliyhWsUE5ik2cEnKiFHQGTbP+8814L/9EMA/MOjPDAtXwHvjt2bRs6xjq42oTAyrLEobhWbAEyhbSpZOOYmyWOEWTxeqHVgwYkjhQ+op07GUgq/xvgOtJp9jAZHlAap0Hgr4BwJ934LmFS7/NSqBGRCa1YNLugRK42xpgdOLVrDKTCNr/Q3NvomO5ExVmT7WNBUUQpPEdE+0YD4FY2b3ArdwYfCLx4lYV6r57AMCX+gBlvfT5qV2oZ2m2n1L5HJQCUzTS5JrsmeJQy2IamhZuTWh41Ya3KywrAIr9t923qeZoga1SPKc7nk9SWufbVvM3Fq+0IO3eqxY8LdErhtF0SLbkKyUY0dcv+1+/N1nbl2nSy6XBv1T+xdvtrZd84AjCoyBwp6I0KQemNOFdF2SqkgdJXSgsbMFwwInDZ/4vNPOJu2DWIMseEs8B9tmwL1TNGkT6xA6yCdUzpKCT3OnuxcP66rfePXa8Y4usfBldtrvv7K/QnQXmeOVVIq9AotI6fy4SbvhIQXtxraTjKRJSm4t0ZkCq6hE3KSy71qWTpVKmi0QsYQkslfnZysTeFbKqDjyUOYqEdllYl/v8rEXDZa2o663z2QMF+q70E/Of1H+8LmT47O3w/MdLb3xeAuY9FIMDlhwMX4c6xKZH6OpIpGQ+EtW61miyawicKy9ux6nsPyR7ssqiMMImFJn0yQtEay3SkvhDalTzeolnyfHqkjoOCuf3978htx8J0wvQS+bm+26ux6qQQ/+EkWKrUci8g+r1Q4hOiip4lzG2VpjIs60pG5crFNEsxYr70rm8hyYoxwsSVImzxAAC6+jw1f3WEInNXkqMscJis6LIJyAJ3nhP/7seE8PC/rH9i/eaOe9oQMAbNiOeKgXsmEy8kxPXN86iPAQTzys8hFlVgZ48JLxkihc9dJtAT342KekG037UsoRBrArZYNOMjC3PFn2RJFZyrpqygHdGjOXIhrNLPWl7+jshQcHvZ3ypqbLBlCr/LBdzEtCqOyRUY+k2py9oUPCinmiHXUcWAy7d/i6nlsKIXBFAuQAUFI1FksUjBRLiCJgTnQj6e+5ZFFSx7jaQhVTYpBcPR4BvEnqp+oL9KCg/8n+q71quOME3LB1kdQps3YF2q5MphenfSWAT55weN4pBnCcV7yDB90M5RNyNA9qbyQBP3h85vugi1m9YLsX7fK7d/qsuOylNMz8he88c7yjy4L+0Z51ktyIYlAsKBIBRB/oNTCtw8MDmKbBg0xFKjMPdT0bd+cOK3atwjxr+DISJvWCnHBR8G7+u+vtWTnJoUxk8xLofDoE3tsmNMWiwTga/I9aQLh5adALba/3JIgoQNFCJyVFcpHFY0+aO6NWoinFDlpBx/h50EFm+jr2qScDrbmyQafl+ol11qR0JGtrYpSVh3Ih1fBYn+v5MnkbgjfWYSD581S/70298e0LrP0A9KstAHQrDyoAIGG6Cox+qtBgT0lFIWyS2dJl5vqcVA2nMCXDWW72TNwkaEmXywkVG3/rvjRVNHU96Gdkn6me3zNQBFBXNU4j4SkI7kF9czvJtwdtvr8NytM7gf4UXbnW3nZ5m4MoQQ0CmhDVjq5saHI1GySwiyVpWVDes4Qk049as8lRsvNyvjHXxUS0ygUOOsK53dP4YoU4VzDts00OjpQtOzrbFYvRq2fKPF8/sBr3cv2llZI5AL1SvZmByubOK9Vin+vWpHKmZE9kGhELahE/huZd3JBZ4pNy0KHsNzkF3AyAA9GNojCKZ6pGWHTQZMQJ3vKcHEVmyxOw0Ya5/uRw8LqNcvSbH5itfQL9j1q6P7hc0snyDmqEolp9/hxAgmLwZ1F5T36MRAsLURoyIz92nKZ47uUXgMKJa5F7yQzIml9ZyqTrBxUxAut2AjqoKXec02E2EHh+ijEEsIfgcKp8lu4Hetvnhq+lJRicJr4An0vaIJKPF5oI3vheqvhVMrFMNyD4LJUVVvuvrk5heHF9pSFhxBrrhFAro94jybJVMPjUjXRt3H7uZGwzg7TLitOuLVf/7ZnIUtf08vG4gcyyCURRPve8sKXNa+3uVpE8glJ7slqhvK53sHKvbMPpzhhWx2EUjO3KrIw224WzssAs4JgtBhHAPgrNF7TCmwivEz6gT7MazjRdk7U76FcbtdAIoOKXmLjd75QdTFCD75fIPFVobJGDDvA7mYPAitKsPev+S1Yla2tfuwPN15HDTQftMibVP5kJs2GiD21GAZuiZWCiB6rYknzOa1hNls7PJgZTfSITZLiYHN4LkGI3Y6akTi68ofSZd9pkm3Y6noLtdHWO6+XzydzV5DoijLiVa0nns7RtCwVeNsdlosW4ZZ+OSpQ6ImYVcNgrHSw7aPaSWrfH7Ca/4wsW+IzEceGSfotBadqefNbgxLXhykxkY0MFGmbtaJbvazVKSIkqAEcM5MnFqdq5+/t5W7nXti00gOdFrIMkzj/2Zy9Ym9HI1BHjwhwNt445MM4qdVDMAL0nRO3Yq3ygl+OkNAGUaASgcm5wnKGidW5lks+suKHDVvYx9aft5wLIrlVJfIKQ2J0KPMD2x6CDztYit+w6rFwtfTFQ+zbkzw703KaU39k9CebLJM/jSbIPnJpoveqgN8F0VRLfSQIArsZTD+fgRhNYEQc8LrCqGnHg/Trc5w1FhymaQQGU3mvuaCK32Ghzplsd+ak4zoCEpXeLPm8bz0k7YGn9tnDfZh0kQx5QlZh8VNM1xTtGXcKzOBKjLOsY4XEeuHVry77/udUb4qvFOUr3kshckvUioBmAUr13RRQ+7dU4F3o5eNsB93OiHz3PFZ0p2k85WUwQly/B0zoFjr3eHq/FrhNZHGE+Ohknc03giv1d7dyLzB0bk0zHUB3P1g+UyYNsauOuZ6dbBYY/0htcmLIriw/p4GS50ZQtXhxVSTYncX3vOAAO8IOj1TL69TplFFcGaq1l6hS1pg7QSNs1PxADntHHCrrewOKezLgF+yuCoCTv6Odb+nAzaAcvwVQ7nsDP3ic4BzoAHtwPfoqvbg2oXRbsY5+4kylIGFUM85AE8QCGyKO6pEMQmHIfQajAOyw+xHqyyHzOKlb6TcFStzHnAF0lAx/gAxyrAkb2XMMiq3UeBqMXbIPVdgpidIDY/pPBks4AHvPyfB6k3fMO9LIrNAutVXB28AVSwq1V/LbA+aCO/LookLaG8mbQk6zcl0ZKWEUcKMH5CTft3xkyCyfONZjU9HGCYj0NL1BiZO3SBGZMjeaJxyMeiFu8B1Lcn+jMADNCo1pFtlYB6E9vrXG71L5EAxwWl3h5nLSKp8rRWWyOaV4LAAEWPIPD2gBs4cSXTDPgyDk615LWUnqrzOqThStQyC5r8AhoJb7+6DUMuFZQzwGdsIE5ppN6gO1BkqF0qghFXDDlk+Kf0UTfZ7fd9fq5ZCaGjXQSkXFLVYJTx3ruIAuovRhQWMvhOUjScL8xO4rdWyh5DlFSJMbP3vGulTmoQizQiVlsUIgnKGk97q17BzMKWdX7Ay7LHrTRQX3/xbxe5SUsXXV9hQFVoxvHYzbc6mpqAH+0fYrefyQW34kyH5tI9MBJU5Kyylall07FTpspwHie4YJ+RKIgANDdo7JSQTVrFO00r5OPDBLSX2gFfJN+IpwpscCYWP1DmNLXHeGD6rLVKVTvc1g6B58v1tbFeFyyJwh5HuD7OlXhvMP6j7YL1aPN6FUdxkLQxI14o5MTGFjh4mRBVTUrT3ITVk1h2QC5cLjyRts0Sawa/UMISNaHTj9eifRzsk/kzwajzG/zzTnxPcXQi3B4V28FpOKwVAbwWndUahmqlmsynqoeFR4GrpcQAttNA51Saj+pldQwWFzB55N+NhWWzqOUFLw2B9dkwdaxFd3EwcvKi6a/KWikGg+77iZyroCXjQzQ2gfD6TV0H/NF9i2o4SPuUHpH2aB5EOkDB0wysklLdu6nrG5YO6V2Y5aUA3QP5l2z9HK2oehhtwxKIFnEVvcm17PjZor6jW/DOJvxv4Nlbghe9oJR97JC/t1+WLgfxzAEBV8PdYRXpkHjK4riAZ9nA/CtKaPhNfC6LJKDvslHSQGWtHQQ0jFKCNXqvQN4oVRWGKCdNksvZ+BiAE3pxikrmBQgAFpNbg2GtDSaAzDrVIHlK50NqzU1AfqA9RZ3S3Mq4+r++WJtcIdkxpjqVGXemJeVRFeF2LqQPcbosOBge7dwIQreRjCl/OKgk27ZrNa/yGEileVn37b9RVt5XwJXkkWCp4rZkWQ97WDiJjOFOMevorhRCRPPo/1OMRbkPOHRQCk6IFCNu8noZoFY1G1qIwQq0ZWSrssaAGNiA3pnKKskEJjdCKC1g5PJZulKtm5enPfbNssxAnAYox7bdPovm6VfCQqhHDh5cvcyDqxkIoJL5np0UGF38egE8YtXAzVbVP9sMZeJjjA3oaR4aMXHBpo4dYypFWJ9Z3IuAnYZ05IEnUQYc3K9ZlxMdi9kHokCGihOLVipZakG9lBOzdqtQ8LiLamCxxCfldOT4wY6nTnQyRXdSiEBjYsxl6JKLgPosbVqmIvjYSH14Lx1/ZKVW+a0fFANh2wTzA2f9xl1cbtJlW2xfm5SDmn92Ebk5d3zrlhI6+xjv0EZ7PKvS8XF9xe/Pq4bGSz7q5oYcG8nesvKAHTWbOCD4hIQlJAzyVnBQFFMmSYZtRiHd5BKogriWbUwgTIsg6RZpeRkB0PE1WS1L6LXKkaP0PbFDq8cE4VKyhMQM+wE7lAY9AjDAJ8Hz+fywCLr4GoSM+0Xls90zi2QqlvRm60XdpkqYOEAooCjjVvQVudeO5Yo8bNZA6eLm0O4imGiSa34NcWBHtdcFBh/cM6FQPEs+fB4KbHgWXxvKxFg4ehf8Vwle3Li5WTN2qbgb6edTCmW2fpxYqBLqad9WqW4HcwBc1XlG5oVgFG6UXiJBsRINgCqB2kJ3nZxZ2n9FFEYFh+B0dFmtJTsSwM0JpPCKjfm9uZNHHWe+4zdAvnUiZnHXX5SokamCJg6EOIScYGheaarmfQvtwZ6XcobLR0lq2u4RVcDxqQWaIbRsCzzJG1LNROXk3ouvalZqWSamcFeEsYODWok0NRqEIz8AdcjXNvWxKHVm4s9bNFbc1YDB4elh2cjaVsmC9eGuX6niE9LHHf2t9+7+cYAnTblpAe6oU6q1atBJdYmBdAl3EQPMdhsV19X/gwMWXG6Ai+R7Jg/MB0YfWTKTFwcMK0Nbayq0q+zMfBdURn1LU6DMSrDGXOOwoV49yDLtE6oShWSqKfHrSlBSi/wvXuGyBswOjo9+dJpu8hZTYFrXeaMoIJB3hylYQVqLQeqhEI+Ic1396QYCLakg2Edy6rx07ofO5QEq4Rj8nFPSorFVMYi2KYav7/3/c8J46Zj7LRt1/NA7VTj704VqppsBoFuc4tfUrundbJOKfRmx1YtXXv4pB34rCYi2s8l0cf4G24Kax/8rPVfKxGwFanEHlZh1CJhyTKvuz/DeJNlO3Vna7f1YdVmjxp7lK9NxYgO92lBwKmM/CVowsTlmmh4kgT6yomR3rsWumRlMAuFkS6TsfGouJ4vdGcCvZ3p9XaBaxh2Ax+xvReXdDxJPKuhpwqg3s5wa1G3JuOLZeLsHMk4gmbeivIDxQtLzjhhBBsi1PsZzK0cPq6gj5lSeIeujfBIkc8CbD1sjCnkehNCQpUo7Q5+r5nfowPUM7UsspxT0MtYNue3MTo0DUVNyVLIIUxPyPQxc50W9hFsl0RVoAWnLXVRgaycNS8dWBMSo+HapHQxNLCd25OdThmCeS3E5+1koJuZUnpmSZH44HO2aRqC4MhGS5ISq5R08Uq5EGhwJGwnx/alXgfdMtOTnAmmRymtgM/BgSaOVs5mmjNL6/XUYRPXK2h8LjSrAiKk2K55M086+PbZ+FxGrduyy8gg2zbxY5TfZbzTzPUDQFwTXE0cMaIqn59Lur5Ee85lbhva3m7vNrAOeqHhk3caQHtY6kIcxSfRZGNSHumdifL3k8icJsqvLg3tcw/aMomUxYqsZEOFubbSjwjpGh1fjEGmwhlx5vBhbZ5uefKR01svNVsLsW2mt2qSutpRoBEYi3iAFy/19n1KafRtyzxVutx7uR13Fi6dZiwxuYUnpRHUkmgISmKdIufA4oFmpp2mDqoqGObk7uIuHuuUaiLkljdZGqW/KegDdRRQUqajJSmg9Xs+b83bjXKqnkMW0I2Q1eXL7eP0pLsJdKUYeSUyMJ4lXrp4pMZGD+ZKVefETBIvRlyCdjJfRzIRNQs0ODopF6tSW8QHimlV4JKL3L4Dda/qNSdeF9CGTFLzPHVy7sCpMyXuVfk7UeyQ3vXljPNEL32pRW5varkuBgAflFyDn6GtmLWebDtwTnrEEhNVBMhp2axM/CkV422lVMSkSx56m0aDDPz+7ThXU+LKpstYUUqaLSymNvtJKfQp+0gVmaHEdVN5ZPL8ObZJMp5mBKdf//78/PaDL3r978nfnbQbOrHANAXPKTiGuukgS1BEWF9NwSRr2oXSeS2YIWBO16Ls0nygfUMlzCVfpYlkgZQDpVrvWr2c588p3oO6JB1PlGf7IvhO7QkPOV5jfGDpfdls5FZLL+6qxXIORhFM1XRhIIxv3nn6zm74HnSQ8CBYceQlpotlTog00bHkh9Jsgviau3hhS7f1A4rFy2KRsKQEgNfvPhDozSafZOV3JKOkDKv2hAl1KmJazwrTOjqd/v1/Hj4o+cJvTJ82a29nOcmFrzzPQ6M4gieTj4SLaXyeLRVjiS4nmafYkHStnItbrETKz1M6Hin9qBUJPhvBrE8QEpqusS4NZMu/RzboYXIUVh18PbyCc+AOuZj5n0Nyih1bD628Lxdael+WZu3tSh9nM2KXhpZpum1oB5vhqHX4XJTByVlUmjWLfrtN69H6AIW+dRPDysGddgkMUvQd9CkU+m3mXLb18i1TPJ2CrNyQ3CqVdgUK1SuM1m7Mw88DOB5jRp6qsQv87wlj4vJ/+MHFjwO/79Pqfn569/Todz7xW635H8U21+FWb7HRIGT+5CPsYiPJ5rAZci/tMQe1kJ5NfD8m1B5tF1P1OQugdC47H7PXIVCQixGf7JkEZcYx38X3G8+f1vc0V5EC2Orz15NaSipqlETO5Q9+fHpy4WOl7mvpfSm0HDf7ebZdbKfcaCMuOo868aMCrSbCDodIwkrJkry2QTR9C9k4WOsoZLNsyQux+mwAxigWebaslh++hK+v4zsxuMRoccVwHorIvkbJE93yxbaj+iroOAkvnHIX9wC+/Y8nN0/vj+vbLF23t1M8X134SxoINg1ukVqHpJB0uG5nTKxEbaMyp1IBr3g2j6JnTo7U22srNUoF56R83M99jyRp6Mbvpo4uTHR822qQmlHa5am+krW+8b+sEq+u0X+yWeqtt8P1HR+GedZp5ulPHjWLcJrJCoP9/4PBiLx7Mmks0PGenBNDUWfqARVz1O7H0XYtLbfqwIIN3nk8gGaOJE8o146wPrwLAsBoIieFXeknyTy41Z5SZzO5gn4Wlj//px+9/eO+35ZesJRyfqvWK9daI3c5qBKpHi4WqIYaUZGCKfvj/8XPxIBBgCx+ryINIseovmihGdEhBswpzdPSgRXmGL1CjNeqb5qzCGuR3BqC8tXOBM24ZFytm8n1ajo6isg77da3LvFDVkyXXHb7r+9qrf/dVo/yTy74w2soHmYwHsdN/nQ5ip9bsF9vkXiGFuYw2gPJ7OnRTP6AMjsnplAwxXNb9HN2Dtd38dp89rh5/RAE42h7iMAMNKUjFXiBh8WYKdGdf/7hl5+jSyyFLrn0Ib0G+jhpFRRyQg3kbPE8F3wozesWDJ0ha6OIATTGGvl+tQ3dVsWKSsbDPDwt10vOiQ8yS22f5HzAs8nM9/gSQOjvoWSm/VCjx7oN+51+YKnP0yWXB3rA8c9/evf0tz70qZ+1rnpGjCNCyIG7g/B5ZVP+l4lBcLUu4nIP+7ir+2GFQy4G1YCSYirfPPDi+6iBiGBaBI7nqLdgRF/Ppd/4iOKVJBnqxbtujJ/41snx/9EllwcCvS9nP/3hjz/49Cc6CezzPEDybIimgDrlTmvHZhy4+swBtQTFTiKpLDCOWwPPwcE1dLpYZg1tzVFBLQnAVKYmjJAx0nnPniNwjvdTaYDffsBfh3xg0Pvys7funnTgWyP2OrNWQ1wyes/6xP9IKoXYt98vqGDMUjxbxAA3kh8DDsomdUAkQtoqVSBtQykJ2EPL9eNFpizTJx3B6jX2n/JDAN6XhwK9LwE87QdINFs5FmTZQSMXwOz7kOcpgl2ZJ08Iy5bwAMqAuzCi9P2h+D6nBUkFMWWuCWgfkAHYZu0uJfvUuIcEvC8PDXpfOvCd41vPP5NKAAfAjyWoOFk7xxaO6R1QCURJ7U9UYtLO6h9E4fpESYd7FhkAoiqI0TDPLjmG4fK6FupKHuEaHP4v7+IHZy8tGd9u2f3x167WLX2nNXVnEnIUr5j0YZP93nqZFQ+nVNkn/linkH9JIpI+daibIH6SoUNUSKs9OlCh8WIUuPTzeWqe0FSemW9aguYIHimEb4PHzhGk23Lnl8vy/J13eFT3Oy2PBPS+dB3fkpkGPF9VLT4/3/yih5JB23cANpQ1uD5HF0nT9BAzr6Ub4NO76uwMqt6k3EdHiXtebGUP4P2fTjMc27747z/68iP5ObVHBjqWD/3pV2+2Rh7Hz1kOoCR+QER/x0gBjEeoAtjZ2g0wCxj5Zxv0b/aOIOzrQZvME8ai8yM5gw0rj+TJvxvLvt5P+Fatw7pP6BEtjxz0vnSrb62+2+mGU0aK7DXAjREgbIflrmnHLZ3n7JTTZ2PUCN8/TxVED+EAXcTjiu4iHo8oxyOhb7aS1vG7pZP18lhAx7L72NduNMRuNtB2QTfkNLKmG2zjg7+tc8z4ALhJJikxKzE6gOZ0GzvEMKOBnCBIAuqkgX3ruyeP5wfBHyvofdntj3dUNzcaLh388fyAAFkuBP7Augm1mfxrAkoFXpM3HBO/H9xkfp/hJhTZTlqnNLDbcOVjXB476FgG5dD5jSLlerf8yYqJgqNtnnw8vVkhmrl8ZdUDcAwPygXKJWiFna+nUnQDW2699pjBxvLEQM/L7+4b7YhcL8L7UsC/iU6yYhkUoiNA+IFv6yCmzOnMfp58YxdZPOn+Z62Db7e1V37whMC+qB1PfOnWf6XWZ0l/pXfPPMtGLdvGrwJkK/eJQ5R5HJ2Qqj3gEqWns27VrZLyShODd04ecYC87PKegp6XD7cOuEfnV0ulfQu4Hym9rkOzgiEK6UiSfuIhfcZzbtO/qvlGO8frbf1kS8sb7xXQefmVAf2i5ff3X7vaSky7TS1Pd/nZUO4/f7/rn80qhU+15Canlepb2/6t5Abwj08e/Y9yP4rl/wH1X5QZHiXNZAAAAABJRU5ErkJggg==",
                    alt: "",
                    className: "big-ellipse-demo",
                  }),
                  (0, f.jsx)("img", {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVXSURBVHgBzVe9biRFEK7qmfV6fUL4DW55gnN4ERqfCEBCcIQX4RQi8wDI65MQ4Z0zJALuspMIzo44ISQvb+BHWDLCDUDn3dnp4qufnl1jYxzeSO3e7unpr+qrr6rbTHd4Js1kt6vpYIvpAVozJNqt0fB7XpPMauJZxXSWiKZP3kxmd9mTb3v5dfPd3miwegYgBaMRC2k/RD9Ar61mbym+qYReYNvjL/7HgP8E/uqjp88GJIcjrBiRyDYTjwJ0iDk1AB4DXKhSQMZABDsydegz8fPPfjn+5s7AB81kzFU6BdiDEdzYwdw2NlcDdtC2DVSs30Kv4KDdPFbsDOyM3yu0VmiWJO1/coP3V4AfA3QnpXMAjBVEqd0JwB0FCwMUdLuAs1Oe4CUnNqcDlJakjWec+Rp4ujJI6RQiGVdGn8cR4rFm46DW4+wtQkH3sNM9UkPFjYyQYP24S/L6NQR6I/CnzdMjDB4k8UkY4LEjE0wYAQ/h1VbQrJQP4eKOhmSDnVE0fb/lxu+loRxdA25AsTBNdJDYG4vHoRiReiPc+9rA3estcdB74X0B3MIOzpjF4vDnjyfNFeCKqiPeCHrCX0TLWgpQLgZAQcm8YE+lAN8m1UG2uA/6FBNTe+qpXXudzFuImQzMH1GhlFHG1/3js8y8MSPBhmqA+9RikWBOeoeg9uaniHVaAts25LKNrxL7hbHt4bxnzc9o4hspL6IqhnrpEpMt+pXnsb+3jdlzTVkY8pcG3FF6rE5p/knAibB9kMuYg3gF1/lImZWnDC/w7i1e/o3x2wBv7T3bGi0o1juBjQLXGN8nA8mSXVPYPAqB9uGBAUVr2T9chh7UvFUEohSPhb43I7wpaCdm0J4BY2KczRLm3C8Q6tgXrnRT9nmjVFxQNa9VoZ7Vxomz08LqFv2CvJD0DLgR4wK8azSUzcWBfJH+dvBWXMkVOFmIQ6qnnbiKqxCdGKUclQvgmFhg3RLfLPG7DWNrfDgH6G5X4tYbwPa7DQ+XJa38HAjBezFRY5Mr0gTk7AAIni/VcwWNEC0jR2osmHcku6tYHHQYdQNyK0sBSVKKO5uyO0y22dOn8kQ0YeYQnlFsnlrMZQFKsP+Fi4tpCq8OlC6ldhCC0BguonyqNynSWQqd7Iq1Op4Z0/qG+zTrnHJpVfUKHD0w/jDgZaaLxG5dLWKUam2uteJA58mziFNsqjmdea30isxbTuJRJ1p7jPdcBOknlbF6bsA5tS/bPHjeWv1lq8U13LxEfNjLHZfqk0uqhVprcWaqUtuDjRxrV0XhG+BtLWe6VzWfTS/fHz9q8O04RS02zVq5KiH1OYm8lhBWSbFVn6/cAywMLOKr89bo7OTXyQ/mscdNjrGoqaQv5mq9izfKo8oGMeNVFIvaaCYBS1wOkVJvYbOt7TYFq0x0ckjxmBjns/PZe/cfoXjzw/UhUJztyyV7hYvSp3crM6QvDN7YPONleKmptHDwkx/PJ68KcF1+pLQ6bmUAynmP4lAQt97iauUOgyFiUUfMqhBX77F+k9cHSBEZ+lmVZUIbD28Oxs33Y3x5jkN8bLeLuGno7aPcrepy/EV++3lrJ0xUMzc7r9MKF768/2p69c51BdjBJwAfnCO1xg6soH6LsLu0FQspMTZQF6SXUBYPg3kNUJZu/3R6/ZZZ/XsCKp/vfvDhS5TMEZT7sCgZTbAhBCN+kEQBsZ42Ve3VDvE/+Uu6J2+mkz/phofplkepB01HuLoe+A3TD4kr3tochaLt5jJFOI5/m347vW3vW4E3Dai6tqlS9XnNglDQXrmBJtb/ndIFyP19RKsX0+lkTu/y8w9a2ttjIYLlEgAAAABJRU5ErkJggg==",
                    alt: "",
                    className: "small-ellipse-demo",
                  }),
                ],
              }),
              (0, f.jsxs)("div", {
                className: "front-login",
                children: [
                  (0, f.jsxs)("span", {
                    children: [
                      (0, f.jsx)("img", {
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAABtCAYAAAC89r3aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABpdSURBVHgB7Z19kBzFdcBfz+zpBBLS8YeNQJJZKpjEkkFLXBjzIWnPH3yUP7TYyEAVrrtDIimclHVHSIUgwa2QZKgyoFMF25UgrLuCVCAixalMFQiXSwvCFraT4kRFwgRcWoJkCZIKq++73ZnpvNfzsb1zM7uze7t7t3f9q9rbvZ2enp7Zfv1ev/emB0ChUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFIopCYNpREcy3dGBb/J32Uw6CwrFFKdlBZGEbi7oCW5BCjhbhl8lwCeEEjl8jQDj+y0NMmfBzOQy6RwoFFOElhNEEsBzrdg6xqEXwgUvChkAa8jUrcwxpTUVk0xLCeLCFZu6UPsNwMQEMAA2yHRr6HDmwQwoFJNAywjiRSs296MWTENDYVkAc+ORvQ8NgkLRRKa8IPLUA4mr/m9211Gu9ULTUAKpaC5TShB5Ko0mp5EAy0oBsx0wu/N6x5pTs2ByUAKpaA6TLoi28BW6gcMq/Dcpb/vQYvDdE+3ifXJRAqloLJPWw3lqQxIs3o0tIAEMdL70nWqDnfkYTBkYjPTOMvrumwsjbFiFPxT1o+mCiBowDrywA3zazw9pwWtys2Eqcu85Br4KI3g2WWDaftSWI6Q12fAPR0ChqIGmCiJqwXXAeRoihB9ICCffJA1nscbhX+eNiXcJO3GA8/2g8QxAO2nOLCgUFWhaT+erHkAtyLqjlN05pkPf6cly0FSHox3LlKD5JWTwSg+x4c0ZUCgCaIogViOExFTXhn6uiVnwxNy8XzsGgELJrI1owg6CQiHR8N6OccB+4CwdtfwTZ9vwNYUcNBEJMVVDUAKpKKWhgug4Zg5FLT+VHTRRSZ9bgLWzjYil2SCwWJ/ywCo0aCRWIV1NcYoZtjrpM21Cq0cDwze8sMeOpSpmMg0TRNG5GHRFLU8duJXmheUg0zq6MEJCCaOigRrRSEYtSZ12+2jrzQvLQcLYFz01L4HWQz8oZiyNNE0TUQq1qnMmCjvzenRhZNArso0UM5IGCiKPl9t6gjNnPjU9hdClKmHkXGnFGUojNeLFYRtoLrgaHTPTzRwNowphTKq54syksV5TH6QFyRS98Xg7HDCn1bpVFSFhjObAKXSDYsbRNJW0r6DDvaenj2e0FlwzvEJK3DJQzDgaKYgf0B8SQOqA+4ymKt8pC12LpboFN84ygwvw8nelKKYnDRPE/8jruZ+M6rAbBVFRSh9aBrtjVkg6HFdzxBlI3QXRXe5w1UlYB4pAaK5MWUQhualKEGcgdbUXF63Ysm6OGTvU+NXWWp+pswyIYipQF424IJmO62ZsB+c8CYrIuMLo04wqAXwGMmGNSFoQhfAtAOVkqIXxmpEpQZyBTEgj0qK/3F76QvClxMWR9jtxahQOvv8RTDduvekKePz+b4rPHBXckY+Ow3W3P1lxv1LNCFloAcSzR8y2HRx4SqzXw/jg4dc3bIQGQQO+BdCL0x7geKw/NvBYk0HNghi08vbzA3dCNbw58gG8sPtt2Pny2zCdYDVM+1xhfGRO/ji0AHNMfSswFEJhUfM4DciLrt/02uE36v/YgoXLH+7GYwwwx3qnfrdw+ebjR/ZuGIBpQk2CWG75e9IEckekaxfWL0mD0qu3awXc1vsMHD7WEn0wHOdEebmTLgMJ450n21fSMz6OvP7gEDSZRclNSbDsKYahmYMVHs6T5I5goBDib85QUzG67S0DdUfr4t5Ftd/xEy3DGSiIi5ObUtyChGUxfiZmbGuFJ39VPUckx0w5r2iJNmDOpePlyy5aMB9e3r4Wllx6AbQ0bl9x+0ttdGCPHqTBDpoMN2EP/lY43WD9MUOPly9N5qj9SdPcE+b7oRHtomUrvZHNfg/rUwuv3ZLgFnuRzgHbl57dIuGgqjWiburpqGUPvvcRPP3Cb0u+mz93ttCCN1x/WcnFnIffP7V5Ndy89imcQ45By8JL3mqGBjsURmjWXAjNyiQnTcNsDVcJxvlGLhx0TJTHfQ9ZujEMDcDSzY261ZbEA8Wdr3JmzOgJKqvpVpzbbUIFXcskYXKoShDjOEEvmCz0rnu/WXocnTIvvDJ+/kfCSVrw+YHviXd3X/p8161fhIHBvdDq1KMHNFcYtWVC9wgZxNbHygsjzQXROroEPeborOG5M7o53CgTkEzkBclHOjWj0MWYdtxEgQ8zmy1gKyc8Ck4CVQmiaerJcturGX9oPvg3j/7cc/Awx6S7BrXlALS+IBK8Dh2iacKoWZegSWzP9ajhEda/coShKQ6TY5m/z+JblGuQoAGFMVsftspSZFUJIv5OiXqONuQ1PYDm69LPOnNDrLuaeSKVJZM2SjiEtC2VjVq+Ul2LFthTj3J11cswImG8EL2ERyN6CXvTe7Bxox2nwIgbowbkRnMjwwM9ZbUVF48/53UZPCYTbP8y1yKlcxmF1qDaOWKkia9rokbphwf/cMwWRGe+T4Li8qXEZ4T5SvWdPD0Gd2/YKYSXBLD/r78m5pquf4S0q98MFqbud74Iq29ehvWOXyHu1TfeRTP5d6LOKNC8dg2azv546YdHj8O2odcjjVEfZNaLdxODYobJ4c77noXf7v/vwLI/euA2WHLZIigYnMpuHcv/YFkyMa8nrO6Hf7qve8wwukZHC8mxPPrhxhjgrjBLmwvf+qt/HhkdNQZefbrL88ZedsNjqXyhkMwbBp1QUv7FuMa2YohAEl737Ep/Vc9NAyz3x73rb6HvFq3YlMYt/by4y8hpzegsZ7qK7Cwr9iLWl+BemIJ32ibwI3HdNA7Jx3a30eeFy7d0Y39LWBwu1hg/X7TWqQN9GjvwPKSz4DmNwzbQ2B7vOAznnMDSR19fvw3KsEjEze1HxjP7xDOH927ohDpQnUbk0e6Vq0YTLHY0S5ij0a2LBOlGFITDx3LwHArnfEewwg5FAtPbvQLmndce6jm54fo/Fa+dKMAPP/lqWSfR4/d/AwP2AaePDVh84Xx4DAP5UbWsGKiilIPScu8dOhq4DtDWHW/FDcZ3jObzSSiIUVDsSppBOF8siypLYO8dXPm97WlWKHRmnrsnyzSRmJ9kQUem8t7R/S0p/s+9cIKVdbfGNHPAsNr6Jc9VYq6hJ3JlQhu6qSWBhNA7AsseeWODVN4+nu1M8u9t4bFYXPbQF8uxpNxe/JslAUbhpLqTYO/ToYFITCkriNgmFHjeQfXSy9J52fLVUPebBF3BERciQnky8ais5RT2xxLli77QcfDMP6+o3dzN8n593cvhIdSYJLzy/v74psvqm64Q9QZpTYLqChPCYiwtulntXaNK5cC+Lm75Yx9/krCD20V++i/vxPXZ+h4UspXc2UtE9EpqZ9Lp8vgYZ+Lpyxhry5W2hAuKMRj32Gx821lpOAFYsStlSfMxErri1ccW9UNZtC63XtuaMjcWt7kDZHCP4nhs+0jydttzap9VcQNzrgV5fd3zcU6lQ8RRQyCtS15bzyHJWPZo5sG6eYmrFMTyC0IJgbKckhFGffKQkvkolx1nJkqV3IjaS3hZncv6IWrHk44Wo7kaQWlmpAnl3UlI797wAlx724/hutt/DLf1PjvOjCUh6pP2c7lhuW2OesF6pz6q4/KvP4ae5C0YctkuMoSqJcp8TDIWnS+0ktvLWBtqAw5xcPSg06ky3DI757D8+fpsON8C/m0U6BG7CpZtZ1zMNTWt0IffdWI3vsUROFsOqHOisJL5hyNBJ727L/t/6OTcGrTPwTkLbpW227K2oYdT7gJJSouDAMgsBU87cfEydSsz7lq4jiQfllZw2sb6vKslkgzo8lk92Mm/zHS7/TGTfZu2O2ZtTq6Om+GDBR65SxJsKrwR6kjd70dkUoct189ICGme52enP9wRUEk5U9IvTCQ0/tgkmbck8PTdmluv8gwXatPWwddLyq7BOaZoBi8K9e2+LCAySe/DOapbXyXsa8MrmvDFU5e0E5p5FPOjjrTjxUPxAh/tBmZK2Tzatsfu+3KvryoauYe/smZHiun6SOaZtVn68vevCE9k1rl7xjHn3EZZ+8ulq110/eaVtjYJPgtdNzMY6srh1g63s88xY925AC9rzNJ7S39mbfBY5sGs/I1kao47luO9zS66Po2Xp6RLcxLosFAH1jnARXKKfWHBGSz8c1m6PtyEJCUuuOcSNFBMhLoKYokZiK+lqGVo7uS/dDQvCzIDScCCHCfuj0Dv+976QHT6IMi548Yl3Ub4BUtmALeRWSq3RY5jUl1X+xwz23CfsFS8g+8fgyjYhp/344fjCJeb3uVaWGjm0VwxA21mv7DaihOrbCyWD/Ws/vLpnhBTqh2vrelVQsJYyZrRNM7CBIMg8/Si6zeiVtSFlnF+w8C0NA7aKooAegMOt4bGlYmSNxjTURODZ6ZWCujHNGNbwYz1Yt2epp6LgwJKYVouhw6ffrsN7jesUvpf1dR1jujvVuQBpY5+q+8VJISkVUjL+SmZ1+EBNj75CwjD7808cTI4ocDbjubsAZ/wyHUsuXSBL7EKB4KIHtYoVLJM5fm240Bxt4gJqwZCIKnDiS2armXS93RmoZa2cJ/GiTRElxcMZsWGLWfy71h1SccM9SDtbmfMMG/uNV4TR38mSnGuyCqa/jRY4KUbkkcy3G/cyhJcusWP2mjqhbqapURdBbHSKBoGZdpQ0neQ5uK8tMOW80wuRcGRORDBi+nW5/5oSyWHy5JLP10syGzBLZuYXvRxVESYphXLBNRvb4mLfzV7NXVOEV6hyYwacz1tteoJPBH1gVZlOPLr9SM4SGTs/+zGa0asSy7DpeejOFovDYHt83ttyxG9Jxro4QVpuCUP6oXJTSl3++Llm1I4RMRZ0YGcqbc2JKoSRGxQxR86igOCBI40y1Y0AS//xmOoCX9RPr80Qp3EeXOrf5qU6+QphkmKcUwKS8htOH6yQg6sNDEOM4ok8yZad+Il/3ns2HOog5d4xMhXqn8CNdEOrgZhLILJHAQL7kroCBIu/qJ2592+HVPSZzC1/GsQ2D6pVBmLs3RT5fNwhCojf6cZxfWWuOPN9XxSGAKCBlDdHJHxLPDwiyDnmlKzab5336MvlZQ5cepsw5K6a9XIYfhjUtXERyvdcRKlKqEfyEFgOhLuheXguF0Hc76b6JnT7xEDd34oqNAz6Baj4vXgoSdMThtuxsg76c7D4q6zSYQEwOoALybJQnJI3fY5R+MhZ2yA0z3d+WS064Ie1Y3ocU26deOPlFyY3JIwoZDjppXy6kKz+cjrG4agAVSlEXFUGCm33Y3JyBeKPJTyq5F3VlA4w26n/Zo/t3Kmod/gOXm6mBRFbZUDyFH1RBSB5RFqE7rJDbBKLdUYH+npvCTnjtKubmXcPB9qot357aQZcQXTlJw1UNLSYGgehq0btP9z5m4aOFrQ8sxSO+5shXbySJouVnTqVJX3nHkwg7tl7H7jXFTL6naSDKRjRn/ydbVUJYhtuhUpgCkFSSdOFfW88/7HJccv8aCGsESaV9Kh/vO94ryS5oPyQL9Y5KtWNn+jxQftE5s3J3ywGK/s7H9MDcSAiKKQ9Y5HliWL1bhKuD04SuH3invY8WIeqSxqnF3OJ7s8Z11xEVMkLeRpw+zRveEB8tKAfWXT1JWnqEnfqN+HnXmya52vwhFjnSzUwWZzfahKELN2fCVTroycaVIXKsy5ZGTnDB1/nnPvYxgkqJQ/KiOHTzxHjrR9ic8hJDMvggb2WwTnVdjHdiS6/znzFDBtQTT5sFeIfD+WmUpv3VPDjbDtAUetBONRzT/SOOD1GxGUn28YbV3FEpw0/yCUaZ9jmUQa4krfoxGLFVAbs5yTT0D7x4E5zjB7VjDYCCeNSw1e06jmQ31wb4/ivLJwkxBRnNHbD+l3Ut2CuEvKmHGRwx0kiMfJPJW2PxSQhEBQDLPXl0wQ1NzDx4qxYmpj6quXQxCJJYvh0os/7RqdxdoYjHgdgsEu90SZsE9Zh9lGOZ7B3HDXUH/yzu0BCz/7pwso6qx8gn+paRpp1N3lfhDxPc1ddMxW51bMGArfdcx1JDWgh9kIE5rDAHPvn/JBNydDA6k6oH9k70ODC5dv6hcjhg+/oNTjqrlx3Kg/wcDQXrjmyqIWpNS1l7ffLQL7rrazb0C+2taGUpspjCKHJ8ij+rMXfuNl61AbKLxB91C6ZakuSr279eYrxvXHoCa/+qt34XN/coFt1OGfq674DGzu+zo8s+vf4SQ6shZ8CrX0is/DDcs/L+7OoBcvJjjSpNFLNO755mcz//hvB4exshR3oiFYtvdvH9/TcfaMMfTkg1/LdPfu6DgFsxNjY+bAWMFYRuJz9W0/Yb95/vteYJ0E275DwVl7hgL6nPcvSm7KYZi/Q+d6l8HyfaUaQc5flQaKENp0Y9AwY/3ceaQAOW+Y42m1OBuOpm14cR4bcDgDzGyMtYHtdLK/y5ttW/E8tnGTJXDvlWf0Qk/YXSCzYiLAnw5Io8s0UhsSNWbWUMIs21G2CIs4TkY5WhUVvemERSjx24WExV3mUDSNja/TTigYnyzwsxd+B2tQaOUE8qudRa+KFYI4WRLMhRfMLzto0Ip1Pd+5Guae2+4J6re+egXc3Hk5mCh0BRI+AzUSSsCpM6PQ3t7uCIcljuNPrbLylF/JyYSK0/9OrmY3apzutf0vwdhYARi9mJ0LKsw7zn4A4zNcMnicZNFTjB3X5Hs04QqysKPESIA6i8V5Ff5fW+MsWrFpCEV8nTwXtc0+ayhKHfZ1sPcLOioJy6Llm8k55Glz3COFQpiy9+F8jqn1oxT2hbVx4YrN2EboKsnkaVDIQqamgD5pRQiYK5a4+eslhax6zUqpa/7lNmTHh18Id7/xXyKhIAjSirSN7oeUmgT+yl/FOiin1SsX0mgSVjeDyPaUO4nMkmuWvtv/+w/hR//0ihMZsDveFX+2eJd/ZL7njs9lTWZ1YpGsuy+4jg1e0kQBRkNeOyc/+8/97RJr0Hjze08c5f2FS9+3l/036g9kwbDsdHHWuinrpBkPLxtHxPFqo798sa3Cjdf7qXHnUUTjnLKBuORBzjZjRb3aM2tMkeleouL9ccR6UG38zoVMUVrcl/JXPXNTMnPJaULak+6i+IsNO8uGVUhb3rTmqcB0uQNOwvfdTh2733i3eKwQqJ477n0W3vnDR+AuRej+8Mf+9wT8w9AvoW/Tc/D2Ox/CR/i/e/7z580NDNj33XFl9u96vnAJOjx6KN/UNWOlDpvTGMtgcL0z88zazszw+Lv1Ka5Hd2FQrMw/SWKkLTnvPJJZ74WvKI7ofo5qsYjUNc4zRQEWt2xFEML2kqTvcsc78itaxcDqsVd+s8uXngd0/o90Hn7QblhF5+8dg1lpaAITmsYtvG5zL4ryVmgB6L5HN5xBgllrYgGZqK7nlOqRnS+1QKbsRRfYt4LRyuBHPw5OoSONhR05HaXO3kf2xA1jND46ZqCZa2QHH70lC1UQv3ZLwtCsDm5pudOzCtlWWBc0CFpakeF5xPA8chHOw1kJYA9+jLtmsKkblzR6fkhM2J/yl1/Z+MlLeb0Gl7kiOmge7V1/CSgaSlGxOKaTxgaPvLa+B5rAhG6D4qkN605YhY79hqYeL9ZATL3QCYrGo7N1IDlpTFb/uyzCqHmOyFPpOA4cvfPQ6A554KaiDpBJ2gzTaKYjliDhJStQZJp53SdwG1Q+Cc7tOCSEShjrD7oyhqPOCxUTxLmBWXwUCpE13FMqU7sgcq1f/tcVxtXtdbiRTQE0LzT0Qh8oGg7dcyg+0N1F6DWmBHCckw9CE6lpYodmaQJ44a2w7TvHdHjibJuaN9ZODr11VyqTdOZQo0bMJ8ptXd1uwr6OUdg6Jw/XxCxQVEeyzVLzwhlGjYKoxaOUIoHcieYqCWX63AIs1ZVQVuLecwrw7LxCS8btFLVTa65pVR2F5o9rZxviRebqQQx3vFLQxPsBs+5rHLcsJIT3niPm2CouO8OoURDZSK1JbCSUi2eZcOMse/m+E5zBPhTKfSSUhv0+E1k9y3CFENGURpxh1OxN4avWU95jQ0ZuEsbdeV0I6EzQmEt1Lkz4ed5D4lknGxbPZlDMEGrPrGG8D3iFW6FqhBw8rpOHTNk3USC3j8ampVCShbD9PEkIBZbSiDOMCcUXeGrDi8B5CprEAZMJgdw5VvcnBUwKJHy75/sTIViW7dqs8kpnGBNUMTFKiB2BJkEm3NY5BeGFnQ4eWDqXcdlIrPyaQIrpyYQEkQ3T47faKCG5acJIUOclTUJxylZNqyMPqeuwKsVoWqKxYupQt9QXNFPTaKb2Q5OhOeQTZ1vLXCUBfHpufvwGxgbRSdOU224UU4u6eT+wA6XRgdNDcxxoIqQRycRrFe1IbaTkhvHQdVPacKZS92RQnqKFY41epR2D2Yke0mvaAua3jF/Jhn/YVBNfMXVoWFY2T90fB9DRXC0+7adZkGf1CXydmGJJ51LmjAzOs60eNvxIFQsoKaYbDe+ptkDGum2BLP/o73pC2vG7J9qnzB0g5PHdPX+09EsO+0EzU2z40SwoZjRN7aU89UA30GOuOE9CkyBTlW7JmkzG3ziN80HGt7HhLQOgUECTBdHF1pJaEujprBwS0GAmWzuSJkSNiCYoPZ1WG1bpawo/k263FYWy8ZpyMrTjF2Lmtl3z+QDGXLOgUIQwpbwZjsc1SZ+As5WNmFM2UztWsxapYmYzpdeywDklma340lbZJmz9BLPhy3lY0GevOq1QVKalFpUpCqZ4zPKy2uaX5CihlDzrg5+P6iPfPzUrwRlbB3UD6zfhliO/Xq9igorItPTqTo4pS8LYYWtL5rs/klYSoBfdaBsjwciJ/FgfC5LpuG5izBPYRGKeOTRFt52KmQOtukS9YvJQy6xJ2AKpJYFpkb259LATjEoMKQFUTAQliCG4QslAX0UP1+TO/JQxlkNHEi0Vsr9NN4azarU1hUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKKY3/w/LUA2YSKnJAQAAAABJRU5ErkJggg==",
                        alt: "",
                        className: "login-logo",
                      }),
                      (0, f.jsx)("img", {
                        src: rr,
                        alt: "",
                        className: "login-ellipse",
                      }),
                    ],
                  }),
                  n
                    ? (0, f.jsx)(er, { setRegister: r, setCompanyRegister: c })
                    : i
                    ? (0, f.jsx)(tr, {
                        setCompanyLogIn: s,
                        setCompanyRegister: c,
                      })
                    : u
                    ? (0, f.jsx)(nr, { setCompanyRegister: c, setRegister: r })
                    : (0, f.jsx)(q, { setRegister: r, setCompanyLogIn: s }),
                ],
              }),
            ],
          });
        },
        ir = function (e) {
          var t = e.percent;
          return (0, f.jsxs)("div", {
            className: "progress-block",
            children: [
              (0, f.jsx)("div", {
                className: "progress",
                style: { height: "25px" },
                children: (0, f.jsx)("div", {
                  className: "progress-bar",
                  style: { width: t + "%" },
                }),
              }),
              (0, f.jsxs)("div", {
                children: [
                  (0, f.jsx)("img", {
                    className: "percent-dot",
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA0CAYAAAA5bTAhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOlSURBVHgB3ZpBbxJBFMffm2mNiYnhaKSN9BOIVyN2G78A/QSln6Debe1W2nPboyfab9B+gbKKJt6KR0/QKtHEg5hG07TMjm+WhQCyMMACy/wSsrszwyb/fW/ezLwZhBBYsLKWFJiUgMsAbhIBY1Qca20jQZYRsUo3VWpXRXQvEKAqGBQliOIPxy7DhEAYgXjqTQaQbZCQJIwKQhGkeyi464z7Awwl+oFlJ7iYy9GtBWMBjwS/3RmX+IFFx5/uJYHLPHS473gYj/iBRNctzEkwJmCCSAT7L6sdVh27CiHABmlMgu1JC1agBPuemD/3YkgY79NtmLDs2K2Y+wXThgKeYLXVUVxe29JCcAuiAI0UFERL8dReTnU3GAJt0dSvRh+WQkVmGuLVPGGQf+qLJg+HSCIzNDHKx1O7ed0+rx/IJD6CaGORnBxZvtRPvHYgi6eypWlE7uHBMo3xK90CnpalVeSeLcEKqWaNpYfPd7c7a7RERyZyD4Ea48lLc61lWqJdgDTMNJhpFd63T/uLi3OYyFx7vLggV78Xtk76Wpq5c2tggGAFA9xQ156WNsnKDW44Pulp6foCwxzBijtCJANF1wd4XAPDoJRVoqvo+kQet8FQuoqe1rp5EqhE5H+BrO7WLAeGInhtqU30tNJBE4MSEJX3m+3R22S39pBwrC5N0YtWNm1itG6FXPtEXZuiXQH7YDR41FhmeqL9MTkBBqPy541739LMaLemVNdpazKB+RlFCwyGSXnQ9jwveMSynCFDw9S3D1tOaxGLXmo3ZGgntLNooG2dGaRaKbw+6ixklEMqgrHgSbdSxrlw6BrKbmD0EO+6lbJyffvTSGvfcN5Vl9enUcodMJCfzqtg0X5Id8AoZDmophm9aTK+Dkb1bSwH1TRFe9M0F4xxc5p6/g6qaxunKx83D0zp34ga7t2A+rdtgnDs0VW7zsiUcEZbIL2CQdRRCcCgusBp6Ffa8xFcrJDwY5hBeC3Y0lqb8oupbJp2LvdnKdFQKWwGatNacCirVwpbS5RUWvfOcEYfp1clhwG4uswXry7O3t5feHFKn+sLAl7TR7imqrv+LyocXl2efQqqHOkUcCcJjXNdtRr32iBCzAWke6nW88thdh2V0O91uC5U0aNQP2jrvoQRP4AabtXo07MNRBB/a0klKy0YCPmZYk/fTFAkRTfwt5ls0LO+84fXVnVOCkdadCsLz7KWZJAGiY/pUVlTHRbwcgG+Szu67/oH0NtTlJxuMAkAAAAASUVORK5CYII=",
                    alt: "",
                    style: { marginTop: 120 - parseInt(t, 10) + "%" },
                  }),
                  (0, f.jsx)("p", {
                    className: "percent-text",
                    style: { marginTop: "-40px" },
                    children: t + "%",
                  }),
                ],
              }),
            ],
          });
        },
        ar = function (t) {
          var n = t.percent,
            r = t.setMyProfile,
            o = a((0, e.useContext)(Q), 2),
            i = (o[0], o[1]),
            s = a((0, e.useState)(!0), 2),
            l = s[0],
            u = s[1],
            c = a((0, e.useState)(window.innerWidth), 2),
            d = c[0],
            p = c[1],
            h = function () {
              p(window.innerWidth);
            },
            m = function () {
              u(!l);
            };
          return (
            (0, e.useEffect)(function () {
              return (
                window.addEventListener("resize", h),
                function () {
                  window.removeEventListener("resize", h);
                }
              );
            }, []),
            (0, e.useEffect)(
              function () {
                u(d >= 1250);
              },
              [d],
            ),
            (0, e.useEffect)(function () {
              p(window.innerWidth);
            }, []),
            (0, f.jsxs)(f.Fragment, {
              children: [
                d <= 1250 &&
                  !l &&
                  (0, f.jsxs)("button", {
                    className: "open-sidebar",
                    onClick: m,
                    children: [
                      (0, f.jsx)("img", {
                        className: "open-sidebar-image",
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAApSURBVHgB7dFBDQAACMPABqXzbwIQwWMhu6QKCqCtj1IRlkQu/yecLw/BIDgRBAOmwAAAAABJRU5ErkJggg==",
                        alt: "",
                      }),
                      (0, f.jsx)("div", { className: "navbar-red-line" }),
                    ],
                  }),
                (l || d >= 1250) &&
                  (0, f.jsxs)(f.Fragment, {
                    children: [
                      (0, f.jsx)("div", { className: "filler" }),
                      (0, f.jsxs)("div", {
                        className: "logo-corner",
                        children: [
                          (0, f.jsx)("div", { className: "sidebar-logo" }),
                          d <= 1250 &&
                            (0, f.jsx)("button", {
                              className: "btn-close-document",
                              id: "btn",
                              style: { top: "20px", left: "160px" },
                              onClick: m,
                            }),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className: "side-bar",
                        children: [
                          (0, f.jsx)("p", {
                            className: "my-progress",
                            children: "My progress",
                          }),
                          (0, f.jsx)(ir, { percent: n }),
                          (0, f.jsxs)("div", {
                            className: "buttons-group",
                            children: [
                              (0, f.jsxs)("button", {
                                className: "log-out-button",
                                onClick: function () {
                                  i(null);
                                },
                                children: [
                                  (0, f.jsx)("div", {
                                    className: "log-out-icon",
                                  }),
                                  (0, f.jsx)("p", {
                                    className: "log-out-text",
                                    children: "Log Out",
                                  }),
                                ],
                              }),
                              (0, f.jsxs)("button", {
                                className: "my-profile-button",
                                onClick: function () {
                                  return r(!0);
                                },
                                children: [
                                  (0, f.jsx)("img", {
                                    className: "profile-pink-dot",
                                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAYAAABe6Vn9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALvSURBVHgB3ZpdUtswEMd3RYa+5gb1DZKcoMkFim9AeoK2b6VlBmeG0L6FnoD0BoYL4N4gPQHuCZp3G21XUhvy4c/ECRK/GWMj2SR/Vrtaa4WwI+QHHkDiA2AHiLrc0uZrb+2umNvMgY+3AK8iDIM57AGELWAR/KWTIRCc8K992AqcArZGLCyGBqktiPwzH+howlceNEKzwmoJordfJvzEB2ieOQ/Xa7y7GsGOVBa0RzFLKB9rDXaxViVB5J+/V/9BOBjbD8NSQTqKUXrfnM9URVlLsqiraZ2nRPktKiQfWoyCP5Pwhk7OH8j/PKz6VLmF+A8+j6B1qlmsUBD7Tp995x6solhY2ZDzwTqWh6LKUlYpEUQdsBYlLGFRZytTSe6Q0+kNJX/ABVB+xPCrnlYKLJT2wRVITLS/Q5EgSRb6TwFEF+qUP+SsCdc1QBxkWoj9p+ucGA11s4ecTPachO4LbG8I0rEd4RQcZdNCMgnAWWS8EhRMZp08gKsg9VYt5LR1MOb8brYQpCcmh31HJazq9GQhghtwGhmpn1qQeYFycd75B+IUw2+xujQWInEBTpMuVouESepehnUUgpPQIThNurKWJziyWfwSVwZGy9ZRKB/qgqug/LHeVGEZy2aOw/UWYcocLoKZJRn2IfoJLkLyV1az0OvILiKyR5bA8DJyc9jJOKvVBAWEd+AcR5klTS1IWwlx52LTYZH5ghQsKnBL1HGc1bqxjMW5XfB/jctm8HacuQS3MbEaS5Hyqb2U3RtilteRmSnoUgU+9th+EdgI0u+8rtzURyV9GI4Hxlq2hXWM8npKczljrZSF4XewBoryeurtU/A/eRz/OWg862LKjANCL69zy60xSpjo83Fq9vdAGw4FL8ib7CanGxqAF1lYlPDMq7w6xGvQIomLZuBBU4IJR3h3GRTd0oigKph6aOqpCgF/7BsWWqfCMedvyoXicenmj4MJyuLJsrLP546x5kIki0A13/DrTeu66na0v4KqF0B5RlDOAAAAAElFTkSuQmCC",
                                    alt: "",
                                  }),
                                  (0, f.jsx)("img", {
                                    className: "my-profile-icon",
                                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABCFSURBVHgBrVlpbBzneX5mZ2bv5R48xEOkSIoSddgVZSOWldgx3QZtnRQwjaJIGxS1/c/5UbhBgwL9ZbtGgfyUC/S3ZaBB0SJt5cIFEh8RfcSRDdmmdV8ml+SSXJJ7zJ5zz/T5PsqGHdmtrGSg4ewulzPP977v87zP+0nB7+AIw3CGl3GeuSAIcr7vi48NXovxeHxBURQDv+Wh4A4OAhOAnuD1UYKY4Zn79Heu66FuGLAsC9VqBf39/cik00VVVec3NjZenp6ePoU7OL4WUAKb5eUZcXVdF92uiWQyAU3T5O9FJNfWN/D2O2+h02mj2Wzi8KG7kM/lwIWhWqtiaWmp6LneyWp17aWf/ORE8XaffVtATdMcVxX1RUVVZhk9Cai8uY3Lly/BtEzsnZzEQP8AlldW8Prrr8N1LERjGiNaRU82h6gew/r6KsF3oUYAXddgdrvFulF77tSpn5+8HQz/L9Dnn3/+8dHRsRNDIyO5fC6LVCqFBiN1/tzHMmo1RqnbaSKVzqLdMrmATYLOoSeTRLtjwra6XIyDnbpVkEjEEItFYTSaqGxXwHXP63rqyVOnThXvGOiP/+7Hzzi2+azNqMXjMUQiGlSmWY2orMEu0+khCEXEHZbFztV2HBRyGQJNCRCyXh3XEXWDgPeMxeJIEmiz1cLmVgVJ3jcW14uO4zzM6Ba/NtC5ubkXU+nYEwpCeH6AWJRAmbfADwmWVyIUxEEYyN9rqk7QIQr5PO49OoMDBw+C5MFGeQM3PrmOWnWbC7ERjepIEJxl2ajUaojzvapq6JpdwzSth+fn3124baB/9Zdzz/genk0looyKAKEiKVLG2lIUAmVkQxGhwIdYSCSi8Iwg3z+K49/+DkZ3j8El6zO5PHx+p0uAH3/0Pi5++DYss7UTXWaj3emIdSJUIiwPG7ZtGz0x9eiJk7dG9hag//i333/a9cITOqMWj+mIaSp0nlFdJwm4eglK5c3FH/M1gQuwsUQOB+7/HobHJlFa+DVaTO3uQ0eRLvTC9XxmQ5effXT6X9GubcBzOvA8UToBwSpwGRnbdvneLyqJ4OiPnj31Be3VPv/mxWf/fNwLlBMqUywkR+epEaSIKHWQVwLjVayOeCXYiACrxXDgoT9DIpbA1genkeHfx/QAQcdAQPnyKU2+6pFwaRx98DGUrryHWvEsfM/iTcDaVWRJCeB+EI4zCy/yEY99Hpv6+Td/eN/kaTUSDEbACPBUQjJVnExf6DtMl8srV83TF+95hqzVwtjdGBo7DKe8ggTLQo+mJOmsZh1I9cA2TYqsw8VxAXyvajqam5+wjKhVoSczI2oglJBDvvQP/MmD02++PH+peAvQf3hqVhDnKaKR4ixqSP6xAMmbCXnZeS1uxAgJxjMK0XQvDn/7L9BeX2IEm3yMDte2mW6PQKtw+IhOuy1ixrZly0zEMgWo8Sy6LQNmu05Siu87EE3E49WhDtu2NfvKO9dfuAXosUO7/osQcv5NkghWh2Egr/K9/+nrm1emLJ4dxtCBB6Hzs1a9gq21TUZJhdlq48LZ99CwSaS2QYmqIxpPsMapForGhuAg3tOLdrsDo7qMDiNvO6Zsu5bdRYfXtmnmHjgyvDz/YWnhsxp9am5mtms64wKEq3s36zIC3WMaWZf6TVYLdiu8ipoVHUrPhBgcncK1t18h+Di2i0W4QwNwTQtC3tsuUHz3TaSHhhFPZ5BIJtG1awyPzs4Vw+T0DF/GcOX9/0G3tgrHY0RJKsdhNuTpP87bnPwsotMTvc+yiGeEDnpeCD8MJAEEW0UKHabdZlpsvhY3chnhaLIPEzO/j6hno3z9LJZWm7iyvIF9e/eBlIYVRHH+8kW54AyJ1Lv3ILuRASWWhFHZoppE0KptE3wPtFQvTMdFpbIBk2Vj8bUAyueNH9nX9/KHV7bLMqL88CGqoSwBX2PKZUUJppNSISNI0FQkqIEqlzZ58GFMHn6A4t6H2o2zULmgB4/dh+NHXaxevwqPtTo2dRATA9+EQ+Zvb69gc+UTCTSZXYXGbHQry0gWhpHN6RjqG4Dd2YeVpQsMSIfBCWWnk2rhSiO0oM3N7pthzY3L7hIh01l8ahCBSu2JhJB16gt0fK/FVOwiw/dM34c8zUa3VkZza50rFwuJ8rsOPEbeClVGPYDVpYPaWMZ6uYhWmfWb6Ufp2nn05tLI5wegsj4cRtQ1u8gV+rFreB/c5Uvw2g0pfb7ofkrwKIGe0EiTcda47DYRNZTuhhJFdqo7Yk6MikK2E+zuiXtx5NgjyLLW7G6HbGYfDzUssTZ3T9GgrGxg88ISH84aT/DvrTbqBLlB8xEdHEdltYzlxUUc/8YMZu/5FkSaylxoEI3zOT7qjLJtNfjATyMqhEeackRIlBlRRztE4QN0MkyPSHEXoIXGCRMiWufK9ffR2FyGy9bXabJxkMFdMrS4vIwGo+tQxnp25ZCOR1Gv1emyqrCFelAvtysGEqGNPrbV6UMzMEW3Yqeb2L1bLpzUxd3feETWtHiWkEMBlAqYm5sdz2n0mOMSpKrsNFQZwoj4J9qONCJaVKN1G8f+qXsxNLCH2mcgEk3CY6qXLi1gcaWCG0tLuHvmPmTYMlv1LS6gjco6rVzXwpphYrFcRt1X8cPvP4rAbOBGMYSlJnD/vhH0pZJsoRE40ShG9hzF0idnGVGhGzsSySOnCdRUI6aZck/iCEMkQEfYfwd6hzE9eTcmRqYRUDos9uKVy+eQzGSQGYjDrK6j2TbZCiN4761fISMe2OzQMG/BaNWwTnNtUOwNM4DJyNoEf+HcB/iAFtFO9GL/Xfeg0ptGKmnTy3pswTp6d3+LJDuMG5dOo1O6JvqP0NBxTQi5x/rUWL2qiKQWxSTBzew/jHwqC4c3rW6uoUnRblGYAzWGgYlpdEtFXDxzGqWVdYwO9UGno3/tjdeQIuEa9KCm7E5cPGuJfp8dysHoYA6bbAzZvl2IkbhtqsHCjTiOHZzAcI+O88yMyOBumm5v70MsjTyuXv41PCH4DhEH/JFIxnHvzDEcoQgr7BKirW1vrMGg1q2tLUtvuW004PHBYyvnkO7pkV4zko5h78EjGJ6YQN+uUXz8i59hpJBGi2PHSsVEtRuiJ63DbwnBC9DXl8HYaB8SGY4omTzKpUWcS8Sxf7ifHdbC1GAWUWb4UH8cI6kZxKg5H19+19ACzy9OTu3HHz3wB4hTj9qVTUbRpCWrY2N9DSulErZIjC5lZ3RqCIW+pLR6JvWuMJiRJjiZDVm3JUSG92Dq4FFsXf2I2aFE+dTIXQlUmzsLj6kBOqzZJsmoJFJwWyWmdhPnGdVhStbEQBoKSWRarjRAGtvpWDqPke8+UdSe/NMnioJ1DtPaZZdxOFmurZewWFpDmbIiWD2wO8eV7mID2Jk0FbLdZ8mEZKdJrbTMa9JYt1vb6O8ZQ5Z9XCGro9EEUoVdWKR8BUESZQLu7eunwR6gsoTs8yW6MXY6s4hfLsQxPdKHyUKGo4uNJrvX5YvnsVVvGP/8xoeGBseYr5PFrm1yvG1geXUFxfI26jQW8XgEB48MMmpRWGyfIbVCaFyEjExRwmgxpEkRchJhIdW21yjWFiayE4jTsfdmsyRVAwmdDorRTaRU1Du0hdY25a0qOSEWy1EP1a1VNGIeymZVTrHrLLtrHL1rLXPhM4f/T3/9g3qz2cqVuYqNqkH9a6GXGwf7Dg3SilXJRrZSAtGCGKL0mW6HNZ2iaWiFSPaxyNkgFDH3uD7uv2cO5mqJnsGlFe1BabnIMiGVyPoyFyFataUlMFBw4RoVrJfEZwnEhodBCqGgWChVKihXathsdNhS/R8trNROyF6/tLryUr3ZfnrbaKLWaJN5Ggosh4ncJAp770en1sR///vbKDVK7NM0vxFdWj+bnnSUqRwoJOneY9j34BFkEnm2vS2EokmwFWdolOM0KVHOXwM9Npa2Gli9VsL5tQa9tAOTEZj7wfew3upgmZ62pXSxXmuQuC3aPRdm6Jz6zOatliunNo3m08Jx3HNgig/OIcexwWbdbgtx54CXHAQ2NpsyBYUIIxsR81QU1yhdqj0M7fgI9u87DI9R0lmfmmi71M24MMpsGGJauHB1Db/84BNGG+gQfJqyODjSj/5cHKpbQ9lq4Sq3gTosG9MRTg0LxS2riJ3eA/zszJV5J1Tn754cQYYyJeYYYbtsNlyb3+7yD/eOZml6hQUUyVORpgnp+Db6oxkM7Mlh7jvHQd+GsMvxQ/c57Gnc7okjnU2x1hN461eLeOPMIjRfQ8u3qDAamiENK8uqQaUxGRSdGRLPtVhCHvmghOELtwx3CT187vxiaTZJ4mSoa+lEAlkKbyoelzOT5djUWp0y5JIECu+vsVuZyOspDI1yj4xjsEs5ifewOwUO3XyM4xA3JFpd/Nt/vo/SpsHvJrDmNJkRDoFBh4A9qJsb7GQ9qFKjhbOXnpiKQpzFpe3WyVuAzl8ozU8NZedjLW02EetAAE7WdTmJBkLbHNYkIyi8qk6NjHPyzHEB4nWhP02XwwGOZHAZfRFB4SWvXizitdcuUb5c9LCjFZ06BTyCNhfiEZBJrVxjLb7y3kXs7ktzzu8KV0/9lUCfw+eOL4zLd03nn+x0vY+aLTdXabalBxXbMmJ6FDOikBLRzuKsT4W/yzBCFo1JLk2PYLF+xZYPo6UQ6Pu/OIu33jgna0sMhGW/hSh9apJjSNmhHIqJU2y48Xdr1Y6Y59kQgK4jZv3w5Gq1e/Lz2L4wLl8pGsaxg312Phf74xF2nUxGR4Y9WFg+jVpotBxJhNF4jiZbkw3CorW768gwYoqY71km3Po58+ZFnH71Qyl+FgGYIoJChBQdm35HgrRYn4rYFeB3RHQ7pietn+0HRcUKn2x7nvGVQMVxYbF+ZmpPVuEGxKxKUc9lYqxZBfnejASXz6hImEnJWocgRE1FMgmMD3APlJGv1h38y09flVlwCUZImC32pwjO5E8jsGRmRCQVOcVD/qRZE07JsP3wuGHtMP3/BCoju2TM33uokOe0eb8qd0cich7vL9CXZqOolkISge3WF48nAHrD3zs0JtvqT//jHRKuKyPYZQ1yw/GzsxnYcmfFZm2LUIrUhzdLgPc3fM972HScK1+G6UuBimPhau3nd+0tKCTSrMeuIjaVBal8Dl7ba5xQQ/9mNFhX7Dj5/gTtnYlXz5yHTZgt39wBxe+J98L9Cwvsyh2RUCqHSHsob6JwznYfabnuwlfh+Uqg4jh3vTo/PZpfttzITFSL5DqWiIRLf0rGskWKZ4gUd7jF0y5b+OBqER3XkRsUoo+L6V58yyNIUYdycwOBNOky7TtbdPMMwGPGV0TytoCK49JSfWF8MPpyNKrlWx1vRmxDuqaCRpfCzPprULxzdElbnRbabIltqoCIlIibiKGIvCgD4Wd8JZTNRI1IEhn84O+3u60fWr9BnC87vtZ/Nnz3m+MzalT5G7eqPr6y0pZRiio7W5AWmS3Ga5Fqoa0ictJs3SSOPOVuQcRgTb7Q1XDC4HG7z76j/76ZzR0YdzVnrup2HyWo2QpNdIp9XxScYLlIe0TQhCsQJGJdGlSHU9wzeKlitedxB8cdAf3Noz+VmxmJZ8YNp5vzQn88G0kYThgaFo1cy+0sfJncfN3jfwHDPmDt4RZgmQAAAABJRU5ErkJggg==",
                                    alt: "",
                                  }),
                                  (0, f.jsx)("p", {
                                    className: "my-profile-text",
                                    children: "My Profile",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, f.jsx)("div", { className: "red-line" }),
                      (0, f.jsx)("div", { className: "page-blur-sidebar" }),
                    ],
                  }),
              ],
            })
          );
        },
        sr = function (t) {
          var n = t.token,
            r = t.closePopUp,
            o = t.setErrorMessage,
            i = t.grpI,
            s = t.edit,
            u = t.item,
            d = t.handleUpdate,
            p = t.setSearchName,
            h = t.setFilterPriority,
            m = new g();
          (m.basePath = "https://productivity-pzaiolprqa-uc.a.run.app"),
            (m.baseOptions = {
              headers: {
                Authorization:
                  "Bearer " +
                  (null !== n && "user" === n.account_type
                    ? n.access_token
                    : n),
              },
            });
          var v = new H(m),
            y = a((0, e.useState)(""), 2),
            b = y[0],
            w = y[1],
            x = a((0, e.useState)(""), 2),
            k = x[0],
            A = x[1],
            _ = a((0, e.useState)(""), 2),
            E = _[0],
            S = _[1],
            C = a((0, e.useState)(!1), 2),
            j = C[0],
            N = C[1],
            T = a((0, e.useState)(!1), 2),
            P = T[0],
            O = T[1],
            L = a((0, e.useState)(!1), 2),
            R = L[0],
            D = L[1],
            M = (function () {
              var e = c(
                l().mark(function e(t) {
                  var n;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            (n =
                              0 === i
                                ? "To do"
                                : 1 === i
                                ? "In progress"
                                : "Done"),
                            v
                              .createTaskApiTasksPost({
                                state: n,
                                title: b,
                                description: k,
                                priority: E,
                              })
                              .then(function (e) {
                                console.log(e);
                              })
                              .catch(function (e) {
                                o("Something went wrong while adding a task");
                              });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            I = function () {
              r(), h(""), p("");
            },
            F = function (e) {
              "" === E && N(!0),
                "" === k && "" === b && D(!0),
                "" === E ||
                  ("" === k && "" === b) ||
                  (s
                    ? ((u.title = b),
                      (u.description = k),
                      (u.priority = E),
                      d(u))
                    : M(e),
                  I());
            };
          (0, e.useEffect)(function () {
            "" !== E && N(""), ("" === b && "" === k) || D("");
          });
          var B = a((0, e.useState)(!1), 2),
            z = B[0],
            U = B[1];
          return (0, f.jsx)(f.Fragment, {
            children: P
              ? (0, f.jsxs)("div", {
                  className: "popup-window",
                  onKeyUp: function (e) {
                    return (function (e) {
                      "Enter" === e.key ? F(e) : "Escape" === e.key && I();
                    })(e);
                  },
                  children: [
                    (0, f.jsx)("button", {
                      className: "btn-close-document",
                      id: "btn",
                      onClick: function () {
                        return I();
                      },
                    }),
                    (0, f.jsx)("br", {}),
                    (0, f.jsx)(X, {
                      place: "pu",
                      changeClick: S,
                      defaultPriority: E,
                      error: j,
                      list: ["Low", "Medium", "High"],
                      title: "Priority",
                      isOpen: z,
                      setIsOpen: U,
                    }),
                    (0, f.jsxs)("div", {
                      className: "popup-form",
                      children: [
                        j
                          ? (0, f.jsx)("p", {
                              className: "error-input",
                              children: "Please choose priority of the task",
                            })
                          : (0, f.jsx)(f.Fragment, {}),
                        "" !== b
                          ? (0, f.jsx)("p", {
                              className: "drop-down-description",
                              id: "title",
                              children: "Title",
                            })
                          : (0, f.jsx)(f.Fragment, {}),
                        (0, f.jsx)("div", {
                          className: "add-title",
                          style: {
                            border:
                              "" !== b
                                ? "1px solid #FF4F7B"
                                : R
                                ? "1px solid #AF3218"
                                : "1px solid #1B3D84",
                          },
                          children: (0, f.jsx)("input", {
                            type: "text",
                            required: !0,
                            placeholder: "Add title...",
                            value: b,
                            onChange: function (e) {
                              return w(e.target.value);
                            },
                            className: "input-title",
                          }),
                        }),
                        "" !== k
                          ? (0, f.jsx)("p", {
                              className: "drop-down-description",
                              id: "description",
                              children: "Description",
                            })
                          : (0, f.jsx)(f.Fragment, {}),
                        (0, f.jsx)("div", {
                          className: "add-description",
                          style: {
                            border:
                              "" !== k
                                ? "1px solid #FF4F7B"
                                : R
                                ? "1px solid #AF3218"
                                : "1px solid #1B3D84",
                          },
                          children: (0, f.jsx)("textarea", {
                            type: "text",
                            required: !0,
                            placeholder: "Add description...",
                            value: k,
                            onChange: function (e) {
                              return A(e.target.value);
                            },
                            className: "input-description",
                          }),
                        }),
                        R
                          ? (0, f.jsx)("p", {
                              className: "error-input",
                              style: { marginRight: "110px" },
                              children:
                                "Please type in title or description of the task",
                            })
                          : (0, f.jsx)(f.Fragment, {}),
                        (0, f.jsx)("button", {
                          className: "submit-login",
                          style: {
                            width: "205px",
                            height: "35px",
                            marginTop: "32px",
                            marginBottom: "44px",
                          },
                          onClick: function (e) {
                            return F(e);
                          },
                          children: "Create a new task",
                        }),
                      ],
                    }),
                  ],
                })
              : (s && (w(u.title), A(u.description), S(u.priority)),
                void O(!0)),
          });
        },
        lr = function (t) {
          var n = t.token,
            r = t.setMyProfile,
            o = new g();
          (o.basePath = "https://productivity-pzaiolprqa-uc.a.run.app"),
            (o.baseOptions = {
              headers: {
                Authorization:
                  "Bearer " +
                  (null !== n && "user" === n.account_type
                    ? n.access_token
                    : n),
              },
            });
          var i = new H(o),
            s = a((0, e.useState)(null), 2),
            u = s[0],
            p = s[1],
            h = a((0, e.useState)(""), 2),
            m = h[0],
            v = h[1],
            y = a((0, e.useState)(""), 2),
            b = y[0],
            w = y[1],
            x = a((0, e.useState)(""), 2),
            k = x[0],
            A = x[1],
            _ = a((0, e.useState)(""), 2),
            E = _[0],
            S = _[1],
            C = a((0, e.useState)(""), 2),
            j = C[0],
            N = C[1],
            T = a((0, e.useState)(""), 2),
            P = T[0],
            O = T[1],
            L = (function () {
              var e = c(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          i.getUserApiUsersMeGet().then(function (e) {
                            v(e.data.email), p(e.data.id);
                          });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          (0, e.useEffect)(function () {
            L();
          }, []);
          var R = (function () {
            var e = c(
              l().mark(function e() {
                var t, n;
                return l().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (t = k),
                          (n = E),
                          console.log(u),
                          i
                            .updatePasswordApiUsersUserIdPut(u, {
                              email: m,
                              password: b,
                              new_password: t,
                              confirm_password: n,
                            })
                            .then(function () {
                              O("Password successfully changed.");
                            })
                            .catch(function (e) {
                              N(e.response.data.detail);
                            });
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (0, f.jsx)("div", {
            className: "page-blur",
            children: (0, f.jsxs)("div", {
              className: "popup-window",
              children: [
                (0, f.jsx)("button", {
                  className: "btn-close-document",
                  id: "btn",
                  onClick: function () {
                    return r(!1);
                  },
                }),
                (0, f.jsx)("br", {}),
                (0, f.jsxs)("div", {
                  className: "popup-form",
                  children: [
                    (0, f.jsxs)("div", {
                      className: "login-label",
                      style: { marginTop: "20px", marginBottom: "20px" },
                      children: ["Current email: ", m],
                    }),
                    (0, f.jsxs)("div", {
                      className: "field",
                      children: [
                        (0, f.jsx)("label", {
                          className: "login-label",
                          children: "Password",
                        }),
                        (0, f.jsx)("div", {
                          className: "login-field",
                          children: (0, f.jsx)("input", {
                            type: "password",
                            placeholder: "Enter Current Password",
                            value: b,
                            onChange: function (e) {
                              return w(e.target.value);
                            },
                            className: "login-input",
                          }),
                        }),
                      ],
                    }),
                    (0, f.jsxs)("div", {
                      className: "field",
                      children: [
                        (0, f.jsx)("label", {
                          className: "login-label",
                          children: "New Password",
                        }),
                        (0, f.jsx)("div", {
                          className: "login-field",
                          children: (0, f.jsx)("input", {
                            type: "password",
                            placeholder: "Enter New Password",
                            value: k,
                            onChange: function (e) {
                              return A(e.target.value);
                            },
                            className: "login-input",
                          }),
                        }),
                      ],
                    }),
                    (0, f.jsxs)("div", {
                      className: "field",
                      children: [
                        (0, f.jsx)("label", {
                          className: "login-label",
                          children: "Confirm New Password",
                        }),
                        (0, f.jsx)("div", {
                          className: "login-field",
                          children: (0, f.jsx)("input", {
                            type: "password",
                            placeholder: "Enter New Password",
                            value: E,
                            onChange: function (e) {
                              return S(e.target.value);
                            },
                            className: "login-input",
                          }),
                        }),
                      ],
                    }),
                    (0, f.jsx)("button", {
                      onClick: function () {
                        return R();
                      },
                      style: { marginTop: "40px", marginBottom: "20px" },
                      className: "submit-login",
                      children: "Change my password",
                    }),
                    (0, f.jsx)(d, { message: j }),
                    "" === j
                      ? (0, f.jsx)("div", {
                          className: "login-label",
                          children: P,
                        })
                      : (0, f.jsx)(f.Fragment, {}),
                    (0, f.jsx)("br", {}),
                  ],
                }),
              ],
            }),
          });
        },
        ur = function (t) {
          var n = t.searchName,
            r = t.setSearch,
            o = t.mode,
            i = a((0, e.useState)(!1), 2),
            s = i[0],
            l = i[1];
          return (0, f.jsxs)(f.Fragment, {
            children: [
              n
                ? (0, f.jsx)("h4", {
                    className: "search-bar-title",
                    children: "Search",
                  })
                : (0, f.jsx)(f.Fragment, {}),
              (0, f.jsxs)("div", {
                className: "search-bar-object search-bar-object-".concat(o),
                children: [
                  (0, f.jsx)("input", {
                    name: "search",
                    type: "text",
                    required: !0,
                    placeholder: "Search",
                    value: n,
                    onChange: function (e) {
                      return r(e.target.value);
                    },
                    className: "search-bar",
                    onFocus: function () {
                      l(!0);
                    },
                    onBlur: function () {
                      l(!1);
                    },
                    style: {
                      border:
                        s || n ? "2px solid #FF4F7B" : "2px solid #C8D7F5",
                    },
                  }),
                  (0, f.jsx)("div", {
                    className: "search-atom".concat(s ? " active" : ""),
                  }),
                ],
              }),
            ],
          });
        },
        cr = function (t) {
          var n = t.title,
            r = (t.tasks, t.searchName),
            o = t.setSearch,
            i = t.setPriority,
            s = t.filterPriority,
            l = t.mode,
            u = a((0, e.useState)(!1), 2),
            c = u[0],
            d = u[1];
          return (0, f.jsxs)("div", {
            className: "navigation-bar",
            children: [
              (0, f.jsx)("div", {
                className: "my-task-text my-task-text-".concat(l),
                children: n,
              }),
              "user" === l
                ? (0, f.jsx)(ur, { searchName: r, setSearch: o, mode: l })
                : (0, f.jsx)(f.Fragment, {}),
              "user" === l
                ? (0, f.jsx)(X, {
                    place: "nb",
                    changeClick: i,
                    defaultPriority: s,
                    error: "",
                    list: ["Low", "Medium", "High"],
                    title: "Priority",
                    isOpen: c,
                    setIsOpen: d,
                  })
                : (0, f.jsx)(f.Fragment, {}),
            ],
          });
        },
        fr = function (t) {
          var n = t.filterName,
            r = t.filterPriority,
            o = t.setFilterName,
            i = t.setFilterPriority,
            a = t.data,
            s = t.setList,
            l = function (e) {
              return (
                n &&
                  (e = e.filter(function (e) {
                    return (
                      e.description.toLowerCase().includes(n.toLowerCase()) ||
                      e.title.toLowerCase().includes(n.toLowerCase())
                    );
                  })),
                r &&
                  (e = e.filter(function (e) {
                    return e.priority.includes(r);
                  })),
                e
              );
            };
          (0, e.useEffect)(
            function () {
              u();
            },
            [n, r],
          );
          var u = function () {
            var e = he(a),
              t = e.filter(function (e) {
                return "To do" === e.state;
              }),
              n = e.filter(function (e) {
                return "In progress" === e.state;
              }),
              r = e.filter(function (e) {
                return "Done" === e.state;
              });
            (t = l(t)),
              (n = l(n)),
              (r = l(r)),
              s([
                { title: "To do", items: t },
                { title: "In progress", items: n },
                { title: "Done", items: r },
              ]);
          };
          return (0, f.jsx)(f.Fragment, {
            children:
              n || r
                ? (0, f.jsxs)("div", {
                    className: "filter-area",
                    children: [
                      (0, f.jsx)("h4", {
                        className: "filter-title",
                        children: "Your searches and filters:",
                      }),
                      n
                        ? (0, f.jsxs)("button", {
                            className: "filter-label",
                            id: "name",
                            onClick: function () {
                              o("");
                            },
                            children: [
                              n,
                              (0, f.jsx)("div", {
                                className: "btn-close-document",
                                id: "filter",
                              }),
                            ],
                          })
                        : (0, f.jsx)(f.Fragment, {}),
                      r
                        ? (0, f.jsxs)("button", {
                            className: "filter-label",
                            id: "priority",
                            onClick: function () {
                              i("");
                            },
                            children: [
                              r,
                              (0, f.jsx)("div", {
                                className: "btn-close-document",
                                id: "filter",
                                style: { backgroundColor: "#FCFDFF" },
                              }),
                            ],
                          })
                        : (0, f.jsx)(f.Fragment, {}),
                    ],
                  })
                : (0, f.jsx)(f.Fragment, {}),
          });
        },
        dr = function () {
          return (0, f.jsx)("div", {
            className: "loadingio-spinner-spinner-8vtssc8rw4e",
            children: (0, f.jsxs)("div", {
              className: "ldio-hommi1yfdcw",
              children: [
                (0, f.jsx)("div", {}),
                (0, f.jsx)("div", {}),
                (0, f.jsx)("div", {}),
                (0, f.jsx)("div", {}),
                (0, f.jsx)("div", {}),
                (0, f.jsx)("div", {}),
                (0, f.jsx)("div", {}),
                (0, f.jsx)("div", {}),
                (0, f.jsx)("div", {}),
                (0, f.jsx)("div", {}),
                (0, f.jsx)("div", {}),
                (0, f.jsx)("div", {}),
              ],
            }),
          });
        },
        pr = function () {
          var t = a((0, e.useState)(!1), 2),
            n = t[0],
            r = t[1],
            o = a((0, e.useState)(""), 2),
            i = o[0],
            s = o[1],
            l = a((0, e.useState)(""), 2),
            u = l[0],
            c = l[1],
            d = new g();
          d.basePath = "https://productivity-pzaiolprqa-uc.a.run.app";
          var p = new H(d);
          return (0, f.jsx)(f.Fragment, {
            children: n
              ? (0, f.jsx)("div", {
                  className: "page-blur",
                  children: (0, f.jsxs)("div", {
                    className: "popup-window popup-window-gpt",
                    children: [
                      (0, f.jsxs)("div", {
                        className: "response-area",
                        children: [
                          u
                            ? (0, f.jsxs)(f.Fragment, {
                                children: [
                                  (0, f.jsx)("div", { className: "gpt-icon" }),
                                  (0, f.jsx)("div", {
                                    className: "response-message",
                                    children: u,
                                  }),
                                ],
                              })
                            : (0, f.jsx)(f.Fragment, {}),
                          (0, f.jsx)("button", {
                            className: "btn-close-document",
                            id: "chatgpt",
                            onClick: function () {
                              return r(!1);
                            },
                          }),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className: "question-area",
                        children: [
                          (0, f.jsx)("textarea", {
                            type: "text",
                            placeholder: "Can you give me a few dinner ideas?",
                            value: i,
                            onChange: function (e) {
                              return s(e.target.value);
                            },
                            className: "question-textarea",
                          }),
                          (0, f.jsx)("button", {
                            className: "ask-chatgpt",
                            onClick: function () {
                              c(""),
                                p
                                  .askGptAskGptPost({ question: i })
                                  .then(function (e) {
                                    c(e.data.response);
                                  })
                                  .catch(function (e) {
                                    console.log(e);
                                  });
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : (0, f.jsx)("div", {
                  className: "submit-login chatgpt-icon",
                  onClick: function () {
                    r(!0);
                  },
                  children: "Need some help? Ask ChatGPT",
                }),
          });
        },
        hr = function () {
          var t = a((0, e.useContext)(Q), 1)[0],
            n = a((0, e.useState)(!1), 2),
            r = n[0],
            o = n[1],
            i = a((0, e.useState)(0), 2),
            s = i[0],
            u = i[1],
            d = a((0, e.useState)(""), 2)[1],
            p = a((0, e.useState)([]), 2),
            h = p[0],
            m = p[1],
            v = a((0, e.useState)(""), 2),
            y = v[0],
            b = v[1],
            w = a((0, e.useState)(""), 2),
            x = w[0],
            k = w[1];
          (0, e.useEffect)(function () {
            S();
          }, []);
          var A = new g();
          (A.basePath = "https://productivity-pzaiolprqa-uc.a.run.app"),
            (A.baseOptions = {
              headers: {
                Authorization:
                  "Bearer " +
                  (null !== t && "user" === t.account_type
                    ? t.access_token
                    : t),
              },
            });
          var _ = new H(A),
            E = (function () {
              var e = c(
                l().mark(function e(t) {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          _.deleteTaskApiTasksTaskIdDelete(t)
                            .then(function () {
                              S();
                            })
                            .catch(function () {
                              d("Failed to delete");
                            });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            S = (function () {
              var e = c(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          _.getTasksApiTasksGet()
                            .then(function (e) {
                              m(e.data), P(e.data), o(!0);
                            })
                            .catch(function () {
                              d(
                                "Something went wrong. Couldn't load the tasks",
                              );
                            });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          (0, e.useEffect)(function () {
            S();
          }, []);
          var C,
            j = a((0, e.useState)([]), 2),
            N = j[0],
            T = j[1],
            P = function (e) {
              m(e);
              var t,
                n = he(e),
                r = n.filter(function (e) {
                  return "To do" === e.state;
                }),
                o = n.filter(function (e) {
                  return "In progress" === e.state;
                }),
                i = n.filter(function (e) {
                  return "Done" === e.state;
                });
              T([
                { title: "To do", items: r },
                { title: "In progress", items: o },
                { title: "Done", items: i },
              ]),
                (t =
                  0 === n.length ? 0 : Math.round((i.length / n.length) * 100)),
                u(t);
            },
            O = a((0, e.useState)(!1), 2),
            L = O[0],
            R = O[1],
            D = (0, e.useRef)(),
            M = (0, e.useRef)(),
            I = a((0, e.useState)(!1), 2),
            F = I[0],
            B = I[1],
            z = (0, e.useRef)();
          (0, e.useEffect)(function () {
            (C = new Image(0, 0)).src =
              "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
          });
          var U = function (e, t) {
              e.dataTransfer.setDragImage(C, 0, 0),
                (M.current = e.target),
                M.current.addEventListener("dragend", Y),
                (D.current = t),
                setTimeout(function () {
                  R(!0);
                }, 0);
            },
            W = function (e) {
              h.map(function (t) {
                if (t.id === e.id) return e;
              }),
                P(h),
                V(e);
            },
            V = (function () {
              var e = c(
                l().mark(function e(t) {
                  var n, r, o, i;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = t.state),
                            (r = t.title),
                            (o = t.description),
                            (i = t.priority),
                            _.updateTaskApiTasksTaskIdPut(t.id, {
                              state: n,
                              title: r,
                              description: o,
                              priority: i,
                            })
                              .then(function (e) {
                                console.log(e);
                              })
                              .catch(function () {
                                d("Couldn't update");
                              });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            q = function (e, t) {
              if (L && M.current && D.current && t.grpI !== D.current.grpI) {
                var n = he(N)[D.current.grpI].items[D.current.itemI];
                0 === t.grpI
                  ? (n.state = "To do")
                  : 1 === t.grpI
                  ? (n.state = "In progress")
                  : (n.state = "Done"),
                  h.map(function (e) {
                    return e.id === n.id ? n : e;
                  }),
                  P(h),
                  W(n),
                  (D.current = t);
              }
            },
            Y = function e() {
              R(!1),
                (D.current = null),
                M.current.removeEventListener("dragend", e),
                (M.current = null);
            },
            G = function (e) {
              return "Low" === e
                ? "#6D7C1D"
                : "Medium" === e
                ? "#C25600"
                : "#AF3218";
            },
            K = a((0, e.useState)(null), 2),
            J = K[0],
            X = K[1],
            Z = a((0, e.useState)(!1), 2),
            $ = Z[0],
            ee = Z[1],
            te = function (e) {
              B(!0), (z.current = e);
            },
            ne = function (e) {
              ee(!0), X(e), B(!0);
            },
            re = function (e, t) {
              var n = N[e].items[t];
              if ("To do" === n.state) n.state = "In progress";
              else {
                if ("In progress" !== n.state) return;
                n.state = "Done";
              }
              h.map(function (e) {
                return e.id === n.id ? n : e;
              }),
                P(h),
                W(n);
            },
            oe = (function () {
              var e = c(
                l().mark(function e(t) {
                  var n, r, o;
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = N[t].items.length), (r = n - 1);
                        case 2:
                          if (!(r >= 0)) {
                            e.next = 9;
                            break;
                          }
                          return (o = N[t].items[r].id), (e.next = 6), E(o);
                        case 6:
                          r--, (e.next = 2);
                          break;
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ie = a((0, e.useState)(!1), 2),
            ae = ie[0],
            se = ie[1];
          return (0, f.jsx)(f.Fragment, {
            children:
              r && N
                ? (0, f.jsxs)(f.Fragment, {
                    children: [
                      (0, f.jsxs)("div", {
                        className: "table-backgroud",
                        children: [
                          (0, f.jsx)(fr, {
                            filterName: y,
                            filterPriority: x,
                            setFilterName: b,
                            setFilterPriority: k,
                            data: h,
                            setList: T,
                          }),
                          (0, f.jsx)("div", {
                            className: "table-group",
                            children: N.map(function (e, t) {
                              return (0, f.jsxs)(
                                "div",
                                {
                                  onDragOver:
                                    L && !e.items.length
                                      ? function (e) {
                                          return q(0, { grpI: t, itemI: 0 });
                                        }
                                      : null,
                                  onDrop:
                                    L && !e.items.length
                                      ? function (e) {
                                          return q(0, { grpI: t, itemI: 0 });
                                        }
                                      : null,
                                  id: t,
                                  className: "table",
                                  style: {
                                    height: y || x ? "95%" : "100%",
                                    marginTop: y || x ? "35px" : "0px",
                                  },
                                  children: [
                                    (0, f.jsxs)("div", {
                                      className: "menu",
                                      children: [
                                        (0, f.jsxs)("div", {
                                          className: "menu-text",
                                          children: [
                                            (0, f.jsx)("header", {
                                              className: "title",
                                              children: e.title,
                                            }),
                                            (0, f.jsxs)("p", {
                                              className: "description",
                                              children: [
                                                e.items.length,
                                                " ",
                                                1 === e.items.length
                                                  ? "task"
                                                  : "tasks",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, f.jsx)($n, {
                                          placement: "top",
                                          overlay: (0, f.jsx)("span", {
                                            children: "Add a task",
                                          }),
                                          overlayClassName: "custom-tooltip",
                                          children: (0, f.jsx)("button", {
                                            className: "plus-button",
                                            onClick: function () {
                                              return te(t);
                                            },
                                            id: t,
                                          }),
                                        }),
                                        (0, f.jsx)($n, {
                                          placement: "top",
                                          overlay: (0, f.jsx)("span", {
                                            children: "More options",
                                          }),
                                          overlayClassName: "custom-tooltip",
                                          children: (0, f.jsx)("button", {
                                            className: "item-button-block",
                                            "data-bs-toggle": "dropdown",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false",
                                            style: { marginTop: "40px" },
                                            id: t,
                                          }),
                                        }),
                                        (0, f.jsxs)("div", {
                                          className: "dropdown-menu",
                                          id: "mainoptions",
                                          "aria-labelledby":
                                            "dropdownMenuButton",
                                          children: [
                                            2 !== t
                                              ? (0, f.jsxs)("button", {
                                                  className: "item-options",
                                                  id: "first",
                                                  onClick: function () {
                                                    return (function (e) {
                                                      for (
                                                        var t =
                                                          N[e].items.length - 1;
                                                        t >= 0;
                                                        t--
                                                      )
                                                        re(e, t);
                                                    })(t);
                                                  },
                                                  children: [
                                                    "Move all to ",
                                                    0 === t
                                                      ? "In progress"
                                                      : "Done",
                                                    (0, f.jsx)("div", {
                                                      className:
                                                        "dropdown-icon",
                                                      id: "changemenu",
                                                    }),
                                                  ],
                                                })
                                              : (0, f.jsx)(f.Fragment, {}),
                                            (0, f.jsxs)("button", {
                                              className:
                                                "item-options item-options-delete",
                                              id: t,
                                              onClick: function () {
                                                return oe(t);
                                              },
                                              children: [
                                                "Delete all",
                                                (0, f.jsx)("div", {
                                                  className: "dropdown-icon",
                                                  id: "deletemenu",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    0 === e.items.length
                                      ? (0, f.jsx)(vr, {
                                          grpI: t,
                                          openPopUp: te,
                                        })
                                      : (0, f.jsx)(f.Fragment, {}),
                                    e.items.map(function (e, n) {
                                      return (0, f.jsx)(
                                        mr,
                                        {
                                          item: e,
                                          itemI: n,
                                          grpI: t,
                                          handleDragStart: U,
                                          dragging: L,
                                          handleDragEnter: q,
                                          defineColor: G,
                                          moveToNext: re,
                                          handleEdit: ne,
                                          handleDelete: E,
                                          handleDragEnd: Y,
                                        },
                                        n,
                                      );
                                    }),
                                  ],
                                },
                                t,
                              );
                            }),
                          }),
                        ],
                      }),
                      (0, f.jsx)(pr, {}),
                      (0, f.jsx)(cr, {
                        title: "My tasks",
                        tasks: h,
                        searchName: y,
                        setSearch: b,
                        setPriority: k,
                        filterPriority: x,
                        mode: "user",
                      }),
                      (0, f.jsx)(ar, { percent: s, setMyProfile: se }),
                      F
                        ? (0, f.jsx)(f.Fragment, {
                            children: (0, f.jsx)("div", {
                              className: "page-blur",
                              children: (0, f.jsx)(sr, {
                                token: t,
                                closePopUp: function () {
                                  B(!1), ee(!1), X(null), S();
                                },
                                grpI: z.current,
                                edit: $,
                                item: J,
                                handleUpdate: W,
                                setSearchName: b,
                                setFilterPriority: k,
                              }),
                            }),
                          })
                        : ae
                        ? (0, f.jsx)(lr, { token: t, setMyProfile: se })
                        : (0, f.jsx)(f.Fragment, {}),
                    ],
                  })
                : (0, f.jsx)(dr, {}),
          });
        },
        mr = function (e) {
          var t = e.item,
            n = e.itemI,
            r = e.grpI,
            o = e.handleDragStart,
            i = e.dragging,
            a = e.handleDragEnter,
            s = e.defineColor,
            l = e.moveToNext,
            u = e.handleEdit,
            c = e.handleDelete,
            d = e.handleDragEnd;
          return (0, f.jsxs)(
            "div",
            {
              draggable: !0,
              onDragStart: function (e) {
                return o(e, { grpI: r, itemI: n });
              },
              onDragOver: i
                ? function (e) {
                    a(e, { grpI: r, itemI: n });
                  }
                : null,
              onDrop: function () {
                return d();
              },
              className: "table-item table-item-".concat(r),
              "data-cy": "draggable",
              children: [
                (0, f.jsxs)("div", {
                  className: "priority-block",
                  children: [
                    (0, f.jsx)("div", {
                      className: "item-priority",
                      style: { border: "1px solid " + s(t.priority) },
                      children: (0, f.jsx)("p", {
                        className: "priority-text",
                        style: { color: s(t.priority) },
                        children: t.priority,
                      }),
                    }),
                    (0, f.jsx)($n, {
                      placement: "top",
                      overlay: (0, f.jsx)("span", { children: "More options" }),
                      overlayClassName: "custom-tooltip",
                      children: (0, f.jsx)("button", {
                        className: "item-button-block item-button-block-task",
                        "data-bs-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                      }),
                    }),
                    (0, f.jsxs)("div", {
                      className: "dropdown-menu",
                      id: "delate",
                      "aria-labelledby": "dropdownMenuButton",
                      children: [
                        2 === r
                          ? (0, f.jsx)(f.Fragment, {})
                          : (0, f.jsxs)("button", {
                              className: "item-options",
                              id: "first",
                              onClick: function () {
                                return l(r, n);
                              },
                              children: [
                                0 === r
                                  ? "Move to In Progress"
                                  : "Move to Done",
                                (0, f.jsx)("div", {
                                  className: "dropdown-icon",
                                  id: "dragging",
                                  style: {
                                    position: "absolute",
                                    marginTop: "2px",
                                    right: "17px",
                                  },
                                }),
                              ],
                            }),
                        (0, f.jsx)("div", {
                          className: "divider",
                          style: { borderColor: "#C8D7F5" },
                        }),
                        (0, f.jsxs)("button", {
                          className: "item-options",
                          onClick: function () {
                            return u(t);
                          },
                          children: [
                            "Change this task",
                            (0, f.jsx)("div", {
                              className: "dropdown-icon",
                              id: "change",
                            }),
                          ],
                        }),
                        (0, f.jsx)("div", {
                          className: "divider",
                          style: { borderColor: "#C8D7F5" },
                        }),
                        (0, f.jsxs)("button", {
                          className: "item-options",
                          id: 2 === r ? "first" : "second",
                          onClick: function () {
                            return c(t.id);
                          },
                          children: [
                            "Delete this task",
                            (0, f.jsx)("div", {
                              className: "dropdown-icon",
                              id: "delete",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)("div", {
                  className: "item-text",
                  children: [
                    t.title
                      ? (0, f.jsx)("div", {
                          className: "item-title",
                          children: t.title,
                        })
                      : (0, f.jsx)(f.Fragment, {}),
                    t.description
                      ? (0, f.jsx)("div", {
                          className: "item-description",
                          children: t.description,
                        })
                      : (0, f.jsx)(f.Fragment, {}),
                  ],
                }),
              ],
            },
            t.id,
          );
        },
        vr = function (e) {
          var t = e.grpI,
            n = e.openPopUp;
          return (0, f.jsx)("div", {
            className: "empty-description",
            style: { flexDirection: 0 === t ? "column" : "row" },
            children:
              0 === t
                ? (0, f.jsxs)(f.Fragment, {
                    children: [
                      (0, f.jsx)("h4", {
                        className: "inprogress-empty",
                        style: { margin: "auto", display: "" },
                        children: "You don't have any tasks here",
                      }),
                      (0, f.jsxs)("button", {
                        className: "btn-add-to-do",
                        onClick: function () {
                          return n(t);
                        },
                        children: [
                          (0, f.jsx)("h4", {
                            className: "add-to-do-desc",
                            children: "Add new To Do task",
                          }),
                          (0, f.jsx)("div", { className: "add-to-do-icon" }),
                        ],
                      }),
                    ],
                  })
                : (0, f.jsxs)(f.Fragment, {
                    children: [
                      (0, f.jsx)("div", { className: "dragging-icon" }),
                      (0, f.jsx)("h4", {
                        className: "inprogress-empty",
                        children:
                          1 === t
                            ? "If you are working on a task, drag and drop it here"
                            : "If you have finished the task, drag and drop it here",
                      }),
                    ],
                  }),
          });
        },
        gr = function (e) {
          var t = e.item,
            n = e.grpI,
            r = function (e) {
              return "Low" === e
                ? "#6D7C1D"
                : "Medium" === e
                ? "#C25600"
                : "#AF3218";
            };
          return (0, f.jsxs)(
            "div",
            {
              className: "table-item table-item-".concat(n),
              "data-cy": "draggable",
              children: [
                (0, f.jsxs)("div", {
                  className: "priority-block",
                  children: [
                    (0, f.jsx)("div", {
                      className: "item-priority",
                      style: { border: "1px solid " + r(t.priority) },
                      children: (0, f.jsx)("p", {
                        className: "priority-text",
                        style: { color: r(t.priority) },
                        children: t.priority,
                      }),
                    }),
                    (0, f.jsx)("button", {
                      className: "item-button-block item-button-block-task",
                      "data-bs-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false",
                    }),
                    (0, f.jsxs)("div", {
                      className: "dropdown-menu",
                      id: "delate",
                      "aria-labelledby": "dropdownMenuButton",
                      children: [
                        2 === n
                          ? (0, f.jsx)(f.Fragment, {})
                          : (0, f.jsxs)("button", {
                              className: "item-options",
                              id: "first",
                              children: [
                                0 === n
                                  ? "Move to In Progress"
                                  : "Move to Done",
                                (0, f.jsx)("div", {
                                  className: "dropdown-icon",
                                  id: "dragging",
                                  style: {
                                    position: "absolute",
                                    marginTop: "2px",
                                    right: "17px",
                                  },
                                }),
                              ],
                            }),
                        (0, f.jsx)("div", {
                          className: "divider",
                          style: { borderColor: "#C8D7F5" },
                        }),
                        (0, f.jsxs)("button", {
                          className: "item-options",
                          children: [
                            "Change this task",
                            (0, f.jsx)("div", {
                              className: "dropdown-icon",
                              id: "change",
                            }),
                          ],
                        }),
                        (0, f.jsx)("div", {
                          className: "divider",
                          style: { borderColor: "#C8D7F5" },
                        }),
                        (0, f.jsxs)("button", {
                          className: "item-options",
                          id: 2 === n ? "first" : "second",
                          children: [
                            "Delete this task",
                            (0, f.jsx)("div", {
                              className: "dropdown-icon",
                              id: "delete",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)("div", {
                  className: "item-text",
                  children: [
                    t.title
                      ? (0, f.jsx)("div", {
                          className: "item-title",
                          children: t.title,
                        })
                      : (0, f.jsx)(f.Fragment, {}),
                    t.description
                      ? (0, f.jsx)("div", {
                          className: "item-description",
                          children: t.description,
                        })
                      : (0, f.jsx)(f.Fragment, {}),
                  ],
                }),
              ],
            },
            t.id,
          );
        },
        yr = function (e) {
          var t = e.grpI;
          return (0, f.jsx)("div", {
            className: "empty-description",
            style: { flexDirection: 0 === t ? "column" : "row" },
            children:
              0 === t
                ? (0, f.jsxs)(f.Fragment, {
                    children: [
                      (0, f.jsx)("h4", {
                        className: "inprogress-empty",
                        style: { margin: "auto", display: "" },
                        children: "You don't have any tasks here",
                      }),
                      (0, f.jsxs)("button", {
                        className: "btn-add-to-do",
                        children: [
                          (0, f.jsx)("h4", {
                            className: "add-to-do-desc",
                            children: "Add new To Do task",
                          }),
                          (0, f.jsx)("div", { className: "add-to-do-icon" }),
                        ],
                      }),
                    ],
                  })
                : (0, f.jsxs)(f.Fragment, {
                    children: [
                      (0, f.jsx)("div", { className: "dragging-icon" }),
                      (0, f.jsx)("h4", {
                        className: "inprogress-empty",
                        children:
                          1 === t
                            ? "If you are working on a task, drag and drop it here"
                            : "If you have finished the task, drag and drop it here",
                      }),
                    ],
                  }),
          });
        },
        br = function (t) {
          var n = t.tasks,
            r = t.ind,
            o = t.setSingleUser,
            i = t.name,
            s = a((0, e.useState)(null), 2),
            l = s[0],
            u = s[1];
          (0, e.useEffect)(
            function () {
              null !== n && null !== r && u(n[r].tasks);
            },
            [n],
          );
          var c = a((0, e.useState)(null), 2),
            d = c[0],
            p = c[1];
          return (
            (0, e.useEffect)(
              function () {
                if (null !== l) {
                  var e = he(l),
                    t = [
                      {
                        title: "To do",
                        items: e.filter(function (e) {
                          return "To do" === e.state;
                        }),
                      },
                      {
                        title: "In progress",
                        items: e.filter(function (e) {
                          return "In progress" === e.state;
                        }),
                      },
                      {
                        title: "Done",
                        items: e.filter(function (e) {
                          return "Done" === e.state;
                        }),
                      },
                    ];
                  p(t), console.log(t);
                }
              },
              [l],
            ),
            (0, f.jsx)(f.Fragment, {
              children:
                null !== d
                  ? (0, f.jsxs)(f.Fragment, {
                      children: [
                        (0, f.jsx)("div", {
                          className: "table-group",
                          children: d.map(function (e, t) {
                            return (0, f.jsxs)(
                              "div",
                              {
                                id: t,
                                className: "table",
                                children: [
                                  (0, f.jsxs)("div", {
                                    className: "menu",
                                    children: [
                                      (0, f.jsxs)("div", {
                                        className: "menu-text",
                                        children: [
                                          (0, f.jsx)("header", {
                                            className: "title",
                                            children: e.title,
                                          }),
                                          (0, f.jsxs)("p", {
                                            className: "description",
                                            children: [
                                              e.items.length,
                                              " ",
                                              1 === e.items.length
                                                ? "task"
                                                : "tasks",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, f.jsx)("button", {
                                        className: "plus-button",
                                        id: t,
                                      }),
                                      (0, f.jsx)("button", {
                                        className: "item-button-block",
                                        style: { marginTop: "40px" },
                                        id: t,
                                      }),
                                    ],
                                  }),
                                  0 === e.items.length
                                    ? (0, f.jsx)(yr, { grpI: t })
                                    : (0, f.jsx)(f.Fragment, {}),
                                  e.items.map(function (e, n) {
                                    return (0, f.jsx)(
                                      gr,
                                      { item: e, itemI: n, grpI: t },
                                      n,
                                    );
                                  }),
                                ],
                              },
                              t,
                            );
                          }),
                        }),
                        (0, f.jsx)("div", {
                          className: "page-blur",
                          id: "company",
                        }),
                        (0, f.jsxs)("div", {
                          className: "name-label",
                          children: [
                            "" === i ? "Your employee" : i,
                            (0, f.jsx)("br", {}),
                            (0, f.jsx)("p", {
                              className: "view-mode-info",
                              children: "View mode",
                            }),
                            (0, f.jsx)("button", {
                              className: "btn-close-document",
                              id: "company",
                              onClick: function () {
                                return o(null);
                              },
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, f.jsx)(f.Fragment, {}),
            })
          );
        },
        wr = function (e) {
          var t = e.name,
            n = e.id,
            r = e.stats;
          return (0, f.jsxs)("div", {
            className: "tasks-column",
            id: n,
            children: [
              (0, f.jsx)("div", { className: "name-in-column", children: t }),
              (0, f.jsx)("div", { className: "number-tasks", children: r }),
            ],
          });
        },
        xr = function () {
          var t = a((0, e.useState)([]), 2),
            n = t[0],
            r = t[1],
            o = a((0, e.useContext)(Q), 1)[0],
            i = a((0, e.useState)(""), 2),
            s = (i[0], i[1]),
            u = a((0, e.useState)(!1), 2),
            d = u[0],
            p = u[1],
            h = new g();
          (h.basePath = "https://productivity-pzaiolprqa-uc.a.run.app"),
            (h.baseOptions = {
              headers: {
                Authorization:
                  "Bearer " +
                  (null !== o && "company" === o.account_type
                    ? o.access_token
                    : o),
              },
            });
          var m = new H(h),
            v = (function () {
              var e = c(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          m.getEmployeesTasksApiEmployeesTasksGet()
                            .then(function (e) {
                              r(e.data);
                            })
                            .catch(function () {
                              s(
                                "Something went wrong. Couldn't load the tasks",
                              );
                            });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          (0, e.useEffect)(function () {
            v();
          }, []);
          var y = a((0, e.useState)(null), 2),
            b = y[0],
            w = y[1],
            x = a((0, e.useState)(0), 2),
            k = x[0],
            A = x[1],
            _ = a((0, e.useState)(""), 2),
            E = _[0],
            S = _[1];
          (0, e.useEffect)(
            function () {
              var e = 0,
                t = 0,
                r = 0,
                o = n.map(function (n) {
                  var o = 0,
                    i = 0,
                    a = 0;
                  return (
                    n.tasks.forEach(function (e) {
                      "To do" === e.state && o++,
                        "In progress" === e.state && i++,
                        "Done" === e.state && a++;
                    }),
                    (e += o),
                    (t += i),
                    (r += a),
                    [o, i, a]
                  );
                });
              if ((w(o), p(!0), e + t + r !== 0)) {
                var i = Math.round((r / (e + t + r)) * 100);
                A(i);
              }
            },
            [n],
          );
          var C = a((0, e.useState)(null), 2),
            j = C[0],
            N = C[1];
          return (0, f.jsx)(f.Fragment, {
            children:
              d && n && b.length > 0
                ? (0, f.jsxs)(f.Fragment, {
                    children: [
                      (0, f.jsx)("div", {
                        className: "table-background",
                        children: (0, f.jsx)("div", {
                          className: "page-middle",
                          children:
                            null !== j
                              ? (0, f.jsx)(br, {
                                  tasks: n,
                                  ind: j,
                                  setSingleUser: N,
                                  name: n[j].name,
                                })
                              : n.map(function (e, t) {
                                  return (0, f.jsx)(
                                    $n,
                                    {
                                      placement: "top",
                                      overlay: (0, f.jsx)("span", {
                                        children: "Click to see more details",
                                      }),
                                      overlayClassName: "custom-tooltip",
                                      children: (0, f.jsxs)(
                                        "div",
                                        {
                                          className: "employee-grid-element",
                                          onClick: function () {
                                            return (function (e) {
                                              N(e);
                                            })(t);
                                          },
                                          children: [
                                            (0, f.jsx)("div", {
                                              className: "name-block",
                                              children:
                                                "" === e.name
                                                  ? "Your employee"
                                                  : e.name,
                                            }),
                                            (0, f.jsxs)("div", {
                                              className: "tasks-block",
                                              children: [
                                                (0, f.jsx)(wr, {
                                                  name: "To do",
                                                  id: "todo",
                                                  stats: b[t][0],
                                                }),
                                                (0, f.jsx)(wr, {
                                                  name: "In progress",
                                                  id: "inprogress",
                                                  stats: b[t][1],
                                                }),
                                                (0, f.jsx)(wr, {
                                                  name: "Done",
                                                  id: "done",
                                                  stats: b[t][2],
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        t,
                                      ),
                                    },
                                    t,
                                  );
                                }),
                        }),
                      }),
                      (0, f.jsx)(cr, {
                        title: "My employees",
                        mode: "company",
                        searchName: E,
                        setSearch: S,
                      }),
                      (0, f.jsx)(ar, {
                        percent: k,
                        setMyProfile: function () {},
                      }),
                    ],
                  })
                : (0, f.jsx)(f.Fragment, {}),
          });
        },
        kr = function () {
          var t = a((0, e.useContext)(Q), 1)[0];
          return (0, f.jsx)(e.Fragment, {
            children: t
              ? "user" === t.account_type
                ? (0, f.jsx)(hr, {})
                : (0, f.jsx)(xr, {})
              : (0, f.jsx)(or, {}),
          });
        };
      n(371);
      r.createRoot(document.getElementById("root")).render(
        (0, f.jsx)(V, { children: (0, f.jsx)(kr, {}) }),
      );
    })();
})();
//# sourceMappingURL=main.adeddae1.js.map
