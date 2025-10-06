(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	[3], {
		"216e": function (module, __webpack_exports__, __webpack_require__) {
			"use strict";
			var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c975"),
				core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
			__webpack_exports__["a"] = {
				data() {
					return {
						logList: "",
						current: "",
						answer: "",
						reset: !1,
						operatorClicked: !0
					}
				},
				methods: {
					append(t) {
						this.operatorClicked && (this.current = "", this.operatorClicked = !1), this.current += `${t}`, this.answer += `${t}`
					},
					addtoLog(t) {
						0 == this.operatorClicked && (this.answer += `${t}`, this.current = "", this.operatorClicked = !0)
					},
					clear() {
						this.current = "", this.answer = "", this.logList = "", this.operatorClicked = !1
					},
					percent() {
						"" != this.answer && (this.answer = "" + parseFloat(this.answer) / 100)
					},
					dot() {
						-1 === this.current.indexOf(".") && this.append(".")
					},
					divide() {
						this.addtoLog("/")
					},
					times() {
						this.addtoLog("*")
					},
					minus() {
						this.addtoLog("-")
					},
					plus() {
						this.addtoLog("+")
					},
					equal() {
						0 == this.operatorClicked ? (this.answer = eval(this.answer), this.reset = !0) : this.answer = "???"
					}
				}
			}
		},
		"713b": function (t, a, e) {
			"use strict";
			e.r(a);
			var s = function () {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("q-layout", {
					attrs: {
						view: "lHh Lpr lFf"
					}
				}, [e("ModalCalc"), e("ClipboardDialog"), e("ValidatorModal"), e("q-header", {
					attrs: {
						elevated: ""
					}
				}, [e("q-toolbar", {
					staticClass: "bg-dark"
				}, [e("q-btn", {
					staticClass: "mobile-only",
					attrs: {
						flat: "",
						round: "",
						dense: "",
						icon: "menu"
					},
					on: {
						click: t.drawerSetter
					}
				}), e("q-toolbar-title", [t._v("\nEMANOEL GEORGIO DE OLIVEIRA | "), e("small", [t._v("Calculadora de Execução Penal")])])], 1)], 1), e("q-page-container", [e("Desktop"), e("Mobile"), e("q-page-sticky", {
					attrs: {
						position: "bottom-right",
						offset: [50, 18]
					}
				}, [e("q-btn", {
					attrs: {
						fab: "",
						out: "",
						icon: "fas fa-calculator",
						color: "dark"
					},
					on: {
						click: t.modalCalculadora
					}
				})], 1)], 1)], 1)
			},
				i = [],
				o = e("cc15"),
				l = e("3f6c"),
				r = function () {
					var t = this,
						a = t.$createElement,
						e = t._self._c || a;
					return e("q-dialog", {
						attrs: {
							seamless: "",
							position: "right"
						},
						on: {
							hide: function (a) {
								t.dialog = !1
							}
						},
						model: {
							value: t.dialog,
							callback: function (a) {
								t.dialog = a
							},
							expression: "dialog"
						}
					}, [e("Calculadora")], 1)
				},
				c = [],
				n = function () {
					var t = this,
						a = t.$createElement,
						e = t._self._c || a;
					return e("q-card", {
						staticStyle: {
							width: "350px"
						},
						attrs: {
							bordered: ""
						}
					}, [e("q-card-section", {
						staticClass: "row items-center"
					}, [e("q-card-section", {
						staticClass: "col-12"
					}, [e("q-input", {
						staticClass: "text-right",
						attrs: {
							outlined: "",
							disable: ""
						},
						model: {
							value: t.answer,
							callback: function (a) {
								t.answer = a
							},
							expression: "answer"
						}
					})], 1), e("q-card-section", {
						staticClass: "col-12 row justify-center"
					}, [e("div", {
						staticClass: "row col-12 q-mt-sm justify-center  no-wrap"
					}, [e("div", {
						staticClass: "col-3",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "C"
						},
						on: {
							click: t.clear
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							label: "%",
							color: "dark"
						},
						on: {
							click: t.percent
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							label: "*",
							color: "dark"
						},
						on: {
							click: t.times
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "/"
						},
						on: {
							click: t.divide
						}
					})], 1)]), e("div", {
						staticClass: "row col-12 q-mt-sm justify-center  no-wrap"
					}, [e("div", {
						staticClass: "col-3",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "9"
						},
						on: {
							click: function (a) {
								return t.append("9")
							}
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "8"
						},
						on: {
							click: function (a) {
								return t.append("8")
							}
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "7"
						},
						on: {
							click: function (a) {
								return t.append("7")
							}
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "-"
						},
						on: {
							click: t.minus
						}
					})], 1)]), e("div", {
						staticClass: "row col-12 q-mt-sm justify-center  no-wrap"
					}, [e("div", {
						staticClass: "col-3",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "6"
						},
						on: {
							click: function (a) {
								return t.append("6")
							}
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "5"
						},
						on: {
							click: function (a) {
								return t.append("5")
							}
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "4"
						},
						on: {
							click: function (a) {
								return t.append("4")
							}
						}
					})], 1), e("div", {
						staticClass: "col-3",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "+"
						},
						on: {
							click: t.plus
						}
					})], 1)]), e("div", {
						staticClass: "row col-12 q-mt-sm justify-center  no-wrap"
					}, [e("div", {
						staticClass: "col-3",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "3"
						},
						on: {
							click: function (a) {
								return t.append("3")
							}
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "2"
						},
						on: {
							click: function (a) {
								return t.append("2")
							}
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "1"
						},
						on: {
							click: function (a) {
								return t.append("1")
							}
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "="
						},
						on: {
							click: t.equal
						}
					})], 1)]), e("div", {
						staticClass: "row col-12 q-mt-sm justify-center no-wrap"
					}, [e("div", {
						staticClass: "col-9 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "0"
						},
						on: {
							click: function (a) {
								return t.append("0")
							}
						}
					})], 1), e("div", {
						staticClass: "col-3 ",
						staticStyle: {
							margin: "0 1px"
						}
					}, [e("q-btn", {
						staticStyle: {
							width: "100%"
						},
						attrs: {
							color: "dark",
							label: "."
						},
						on: {
							click: t.dot
						}
					})], 1)])])], 1)], 1)
				},
				d = [],
				u = e("216e"),
				p = u["a"],
				h = e("2877"),
				_ = e("f09f"),
				b = e("a370"),
				m = e("27f9"),
				w = e("9c40"),
				C = e("eebe"),
				k = e.n(C),
				f = Object(h["a"])(p, n, d, !1, null, null, null),
				g = f.exports;
			k()(f, "components", {
				QCard: _["a"],
				QCardSection: b["a"],
				QInput: m["a"],
				QBtn: w["a"]
			});
			var q = {
				components: {
					Calculadora: g
				},
				mounted() {
					this.$root.$on("openCalculatorModal", (() => this.dialog = !this.dialog))
				},
				data() {
					return {
						dialog: !1
					}
				}
			},
				y = q,
				v = e("24e8"),
				S = Object(h["a"])(y, r, c, !1, null, null, null),
				x = S.exports;
			k()(S, "components", {
				QDialog: v["a"]
			});
			var Q = function () {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("q-dialog", {
					attrs: {
						"auto-close": "",
						seamless: "",
						position: "top"
					},
					on: {
						hide: function (a) {
							t.seamless = !1
						}
					},
					model: {
						value: t.seamless,
						callback: function (a) {
							t.seamless = a
						},
						expression: "seamless"
					}
				}, [e("q-card", {
					staticStyle: {
						width: "350px"
					}
				}, [e("q-card-section", {
					staticClass: "row items-center no-wrap"
				}, [t._v("\n        Valor copiado para área de tranferência.\n      ")])], 1)], 1)
			},
				$ = [],
				j = {
					created() {
						this.$root.$on("openClipboardModal", (() => this.seamless = !0))
					},
					data() {
						return {
							seamless: !1
						}
					}
				},
				E = j,
				D = Object(h["a"])(E, Q, $, !1, null, null, null),
				M = D.exports;
			k()(D, "components", {
				QDialog: v["a"],
				QCard: _["a"],
				QCardSection: b["a"]
			});
			var A = e("4b7e"),
				B = Object(h["a"])(!1, null, null, null),
				R = B.exports;
			k()(B, "components", {
				QDialog: v["a"],
				QCard: _["a"],
				QCardSection: b["a"],
				QCardActions: A["a"],
				QBtn: w["a"]
			});
			var I = {
				components: {
					Desktop: o["default"],
					Mobile: l["default"],
					ModalCalc: x,
					ClipboardDialog: M,
					ValidatorModal: R
				},
				data() {
					return {
						render: !1,
						changeDrawer: !1,
						password: this.$route.query.senha
					}
				},
				methods: {
					drawerSetter: function () {
						this.$root.$emit("changeDrawer")
					},
					modalCalculadora: function () {
						this.$root.$emit("openCalculatorModal")
					}
				}
			},
				U = I,
				V = e("4d5a"),
				F = e("e359"),
				K = e("65c6"),
				N = e("6ac5"),
				W = e("09e3"),
				H = e("de5e"),
				J = Object(h["a"])(U, s, i, !1, null, null, null);
			a["default"] = J.exports;
			k()(J, "components", {
				QLayout: V["a"],
				QHeader: F["a"],
				QToolbar: K["a"],
				QBtn: w["a"],
				QToolbarTitle: N["a"],
				QPageContainer: W["a"],
				QPageSticky: H["a"]
			})
		}
	}
]);