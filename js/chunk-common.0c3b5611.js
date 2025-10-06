(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	[1], {
		"27d4": function (t, a, e) {
			"use strict";
			var s = function () {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("q-card-section", {
					staticClass: "col-md-8 q-pa-none"
				}, [e("div", {
					staticClass: "text-h5  q-mt-sm q-mb-md"
				}, [t._v("FRAÇÃO E PORCENTAGEM")]), e("q-banner", {
					staticClass: "bg-dark text-white text-bold q-mb-md",
					attrs: {
						dense: "",
						rounded: ""
					}
				}, [t._v("\n    Converta os dias em frações e porcentagens.\n    ")]), e("q-card-section", {
					staticClass: "row"
				}, [e("div", {
					staticClass: "col-12 flex justify-end items-center"
				}, [e("q-input", {
					staticStyle: {
						width: "200px"
					},
					attrs: {
						color: "dark",
						type: "number",
						label: "Dias",
						hint: ""
					},
					scopedSlots: t._u([{
						key: "append",
						fn: function () {
							return [e("q-icon", {
								staticClass: "cursor-pointer",
								attrs: {
									name: "cancel"
								},
								on: {
									click: function (a) {
										t.diasInput = "0"
									}
								}
							})]
						},
						proxy: !0
					}]),
					model: {
						value: t.diasInput,
						callback: function (a) {
							t.diasInput = a
						},
						expression: "diasInput"
					}
				}), e("q-btn", {
					staticClass: "bg-dark q-ml-md",
					staticStyle: {
						width: "100px",
						height: "40px"
					},
					attrs: {
						flat: "",
						label: "Calcular",
						color: "white"
					},
					on: {
						click: t.calcula
					}
				})], 1), e("div", {
					staticClass: "col-12"
				}, [e("q-tabs", {
					staticClass: "text-grey",
					attrs: {
						dense: "",
						"active-color": "dark",
						"indicator-color": "dark",
						align: "justify",
						"narrow-indicator": ""
					},
					model: {
						value: t.tab,
						callback: function (a) {
							t.tab = a
						},
						expression: "tab"
					}
				}, [e("q-tab", {
					attrs: {
						name: "fracao",
						label: "Fração"
					}
				}), e("q-tab", {
					attrs: {
						name: "porcentagem",
						label: "Porcentagem"
					}
				})], 1), e("q-separator"), e("q-tab-panels", {
					attrs: {
						animated: ""
					},
					model: {
						value: t.tab,
						callback: function (a) {
							t.tab = a
						},
						expression: "tab"
					}
				}, [e("q-tab-panel", {
					staticClass: "row justify-center",
					attrs: {
						name: "fracao"
					}
				}, [e("q-carousel", {
					staticClass: "col-12 rounded-borders desktop-only",
					attrs: {
						"transition-prev": "jump-right",
						"transition-next": "jump-left",
						animated: "",
						"control-color": "dark",
						padding: "",
						arrows: "",
						height: "350px"
					},
					on: {
						transition: t.calcula
					},
					model: {
						value: t.slideFracao,
						callback: function (a) {
							t.slideFracao = a
						},
						expression: "slideFracao"
					}
				}, [e("q-carousel-slide", {
					staticClass: "no-wrap flex-center",
					attrs: {
						name: "1"
					}
				}, [e("div", {
					staticClass: "q-mt-md text-center row justify-center"
				}, [e("Fracao", {
					attrs: {
						fracao: "1/6",
						valor: t.dias
					}
				}), e("Fracao", {
					attrs: {
						fracao: "1/5",
						valor: t.dias
					}
				}), e("Fracao", {
					attrs: {
						fracao: "1/4",
						valor: t.dias
					}
				}), e("Fracao", {
					attrs: {
						fracao: "1/3",
						valor: t.dias
					}
				})], 1)]), e("q-carousel-slide", {
					staticClass: "no-wrap flex-center",
					attrs: {
						name: "2"
					}
				}, [e("div", {
					staticClass: "q-mt-md text-center row justify-center"
				}, [e("Fracao", {
					attrs: {
						fracao: "3/8",
						valor: t.dias
					}
				}), e("Fracao", {
					attrs: {
						fracao: "2/5",
						valor: t.dias
					}
				}), e("Fracao", {
					attrs: {
						fracao: "5/12",
						valor: t.dias
					}
				}), e("Fracao", {
					attrs: {
						fracao: "11/24",
						valor: t.dias
					}
				})], 1)]), e("q-carousel-slide", {
					staticClass: "no-wrap flex-center",
					attrs: {
						name: "3"
					}
				}, [e("div", {
					staticClass: "q-mt-md text-center row justify-center"
				}, [e("Fracao", {
					attrs: {
						fracao: "1/2",
						valor: t.dias
					}
				}), e("Fracao", {
					attrs: {
						fracao: "3/5",
						valor: t.dias
					}
				}), e("Fracao", {
					attrs: {
						fracao: "2/3",
						valor: t.dias
					}
				})], 1)])], 1), e("Fracao", {
					staticClass: "mobile-only",
					attrs: {
						fracao: "1/6",
						valor: t.dias
					}
				}), e("Fracao", {
					staticClass: "mobile-only",
					attrs: {
						fracao: "1/5",
						valor: t.dias
					}
				}), e("Fracao", {
					staticClass: "mobile-only",
					attrs: {
						fracao: "1/4",
						valor: t.dias
					}
				}), e("Fracao", {
					staticClass: "mobile-only",
					attrs: {
						fracao: "1/3",
						valor: t.dias
					}
				}), e("Fracao", {
					staticClass: "mobile-only",
					attrs: {
						fracao: "3/8",
						valor: t.dias
					}
				}), e("Fracao", {
					staticClass: "mobile-only",
					attrs: {
						fracao: "2/5",
						valor: t.dias
					}
				}), e("Fracao", {
					staticClass: "mobile-only",
					attrs: {
						fracao: "5/12",
						valor: t.dias
					}
				}), e("Fracao", {
					staticClass: "mobile-only",
					attrs: {
						fracao: "11/24",
						valor: t.dias
					}
				}), e("Fracao", {
					staticClass: "mobile-only",
					attrs: {
						fracao: "1/2",
						valor: t.dias
					}
				}), e("Fracao", {
					staticClass: "mobile-only",
					attrs: {
						fracao: "3/5",
						valor: t.dias
					}
				}), e("Fracao", {
					staticClass: "mobile-only",
					attrs: {
						fracao: "2/3",
						valor: t.dias
					}
				})], 1), e("q-tab-panel", {
					staticClass: "row justify-center",
					attrs: {
						name: "porcentagem"
					}
				}, [e("q-carousel", {
					staticClass: "col-12 rounded-borders desktop-only",
					attrs: {
						"transition-prev": "jump-right",
						"transition-next": "jump-left",
						animated: "",
						"control-color": "dark",
						padding: "",
						arrows: "",
						height: "300px"
					},
					on: {
						transition: t.calcula
					},
					model: {
						value: t.slidePorcent,
						callback: function (a) {
							t.slidePorcent = a
						},
						expression: "slidePorcent"
					}
				}, [e("q-carousel-slide", {
					staticClass: "no-wrap flex-center",
					attrs: {
						name: "1"
					}
				}, [e("div", {
					staticClass: "q-mt-md text-center row justify-center"
				}, [e("Porcentagem", {
					attrs: {
						porcentagem: 16,
						valor: t.dias
					}
				}), e("Porcentagem", {
					attrs: {
						porcentagem: 20,
						valor: t.dias
					}
				}), e("Porcentagem", {
					attrs: {
						porcentagem: 25,
						valor: t.dias
					}
				}), e("Porcentagem", {
					attrs: {
						porcentagem: 30,
						valor: t.dias
					}
				})], 1)]), e("q-carousel-slide", {
					staticClass: "no-wrap flex-center",
					attrs: {
						name: "2"
					}
				}, [e("div", {
					staticClass: "q-mt-md text-center row justify-center"
				}, [e("Porcentagem", {
					attrs: {
						porcentagem: 40,
						valor: t.dias
					}
				}), e("Porcentagem", {
					attrs: {
						porcentagem: 50,
						valor: t.dias
					}
				}), e("Porcentagem", {
					attrs: {
						porcentagem: 60,
						valor: t.dias
					}
				}), e("Porcentagem", {
					attrs: {
						porcentagem: 70,
						valor: t.dias
					}
				})], 1)])], 1), e("Porcentagem", {
					staticClass: "mobile-only",
					attrs: {
						porcentagem: 16,
						valor: t.dias
					}
				}), e("Porcentagem", {
					staticClass: "mobile-only",
					attrs: {
						porcentagem: 20,
						valor: t.dias
					}
				}), e("Porcentagem", {
					staticClass: "mobile-only",
					attrs: {
						porcentagem: 25,
						valor: t.dias
					}
				}), e("Porcentagem", {
					staticClass: "mobile-only",
					attrs: {
						porcentagem: 30,
						valor: t.dias
					}
				}), e("Porcentagem", {
					staticClass: "mobile-only",
					attrs: {
						porcentagem: 40,
						valor: t.dias
					}
				}), e("Porcentagem", {
					staticClass: "mobile-only",
					attrs: {
						porcentagem: 50,
						valor: t.dias
					}
				}), e("Porcentagem", {
					staticClass: "mobile-only",
					attrs: {
						porcentagem: 60,
						valor: t.dias
					}
				}), e("Porcentagem", {
					staticClass: "mobile-only",
					attrs: {
						porcentagem: 70,
						valor: t.dias
					}
				})], 1)], 1)], 1)])], 1)
			},
				o = [],
				r = function () {
					var t = this,
						a = t.$createElement,
						e = t._self._c || a;
					return e("div", {
						staticClass: "col-md-4 col-12 q-ma-sm"
					}, [e("q-card", [e("q-card-section", {
						staticClass: "bg-dark text-white"
					}, [e("div", {
						staticClass: "text-center text-bold"
					}, [t._v(t._s(t.fracao))])]), e("q-card-actions", {
						staticClass: "text-h5",
						attrs: {
							vertical: "",
							align: "center"
						}
					}, [t._v("\n            " + t._s(t.result) + " "), e("small", [t._v("dias")])])], 1)], 1)
				},
				n = [],
				l = {
					name: "Fracao",
					props: {
						fracao: String,
						valor: String
					},
					created() {
						this.valor % this.denominador === 0 ? this.result = Math.floor(this.valor / this.denominador * this.numerador) : this.result = Math.floor(this.valor * this.numerador / this.denominador)
					},
					data() {
						return {
							result: 0,
							numerador: Number(this.fracao.split("/")[0]),
							denominador: Number(this.fracao.split("/")[1])
						}
					},
					watch: {
						valor: function () {
							this.valor % this.denominador === 0 ? this.result = Math.floor(this.valor / this.denominador * this.numerador) : this.result = Math.floor(this.valor * this.numerador / this.denominador)
						}
					}
				},
				i = l,
				c = e("2877"),
				d = e("f09f"),
				u = e("a370"),
				m = e("4b7e"),
				p = e("eebe"),
				b = e.n(p),
				v = Object(c["a"])(i, r, n, !1, null, null, null),
				f = v.exports;
			b()(v, "components", {
				QCard: d["a"],
				QCardSection: u["a"],
				QCardActions: m["a"]
			});
			var h = function () {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("div", {
					staticClass: "col-md-3 col-sm-12 text-center"
				}, [e("q-knob", {
					staticClass: "text-dark q-ma-md",
					attrs: {
						readonly: "",
						"show-value": "",
						size: "90px",
						thickness: .22,
						color: "dark",
						"track-color": "grey-3"
					},
					model: {
						value: t.porcentagem,
						callback: function (a) {
							t.porcentagem = a
						},
						expression: "porcentagem"
					}
				}, [t._v("\n    " + t._s(t.porcentagem) + "%\n")]), e("div", {
					staticClass: "text-bold text-h5"
				}, [t._v("\n        " + t._s(t.result) + " "), e("small", [t._v("dias")])])], 1)
			},
				x = [],
				g = {
					props: {
						porcentagem: Number,
						valor: String
					},
					created() {
						console.log("CRIOU PORCENTAGEM"), this.result = Math.round(Number(this.valor) * this.porcentagem) / 100
					},
					data() {
						return {
							result: 0
						}
					},
					watch: {
						valor: function () {
							this.result = Math.round(Number(this.valor) * this.porcentagem) / 100
						}
					}
				},
				C = g,
				q = e("3845"),
				D = Object(c["a"])(C, h, x, !1, null, null, null),
				k = D.exports;
			b()(D, "components", {
				QKnob: q["a"]
			});
			var y = e("cdde"),
				w = {
					components: {
						Fracao: f,
						Porcentagem: k
					},
					data() {
						return {
							dias: "0",
							diasInput: "0",
							tab: "fracao",
							slideFracao: "1",
							slidePorcent: "1"
						}
					},
					methods: {
						calcula: function () {
							this.dias = this.diasInput
						},
						clipBoard: function () {
							Object(y["a"])(this.resultado).then((() => {
								this.$root.$emit("openClipboardModal")
							}))
						}
					}
				},
				_ = w,
				Q = (e("ee60"), e("54e1")),
				S = e("27f9"),
				A = e("0016"),
				F = e("9c40"),
				I = e("429b"),
				P = e("7460"),
				M = e("eb85"),
				j = e("adad"),
				O = e("823b"),
				$ = e("880c"),
				B = e("62cd"),
				E = Object(c["a"])(_, s, o, !1, null, null, null);
			a["a"] = E.exports;
			b()(E, "components", {
				QCardSection: u["a"],
				QBanner: Q["a"],
				QInput: S["a"],
				QIcon: A["a"],
				QBtn: F["a"],
				QTabs: I["a"],
				QTab: P["a"],
				QSeparator: M["a"],
				QTabPanels: j["a"],
				QTabPanel: O["a"],
				QCarousel: $["a"],
				QCarouselSlide: B["a"]
			})
		},
		"3b2d": function (t, a, e) {
			"use strict";
			e("5c31")
		},
		"3f6c": function (t, a, e) {
			"use strict";
			e.r(a);
			var s = function () {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("div", {
					staticClass: " mobile-only"
				}, [e("q-layout", {
					staticClass: "shadow-2 rounded-borders",
					staticStyle: {
						height: "300px"
					},
					attrs: {
						view: "hHh Lpr lff"
					}
				}, [e("q-drawer", {
					attrs: {
						"show-if-above": "",
						width: 200,
						breakpoint: 500,
						bordered: "",
						"content-class": "bg-grey-3"
					},
					model: {
						value: t.drawer,
						callback: function (a) {
							t.drawer = a
						},
						expression: "drawer"
					}
				}, [e("q-img", {
					staticClass: "absolute-top bg-dark",
					staticStyle: {
						height: "220px"
					}
				}, [e("div", {
					staticClass: "absolute-bottom bg-transparent"
				}, [e("h5", {
					staticClass: "text-h5"
				}, [t._v("Calculadora de Execução Penal")])])]), e("q-list", {
					staticStyle: {
						"margin-top": "230px"
					},
					attrs: {
						padding: ""
					}
				}, [e("q-expansion-item", {
					attrs: {
						"expand-separator": "",
						icon: "change_circle",
						label: "Conversor"
					}
				}, [t._l(t.menuList, (function (a, s) {
					return ["conversor" === a.type ? e("q-item", {
						directives: [{
							name: "ripple",
							rawName: "v-ripple"
						}],
						key: s,
						attrs: {
							active: a.label === t.activeItem,
							clickable: ""
						},
						on: {
							click: function (e) {
								return t.setActive(a.label)
							}
						}
					}, [e("q-item-section", {
						attrs: {
							avatar: ""
						}
					}, [e("q-icon", {
						attrs: {
							name: a.icon
						}
					})], 1), e("q-item-section", {}, [t._v("\n                  " + t._s(a.label) + "\n                  ")])], 1) : t._e()]
				}))], 2), e("q-expansion-item", {
					attrs: {
						"expand-separator": "",
						icon: "calculate",
						label: "Calculos"
					}
				}, [t._l(t.menuList, (function (a, s) {
					return ["calculos" === a.type ? e("q-item", {
						directives: [{
							name: "ripple",
							rawName: "v-ripple"
						}],
						key: s,
						attrs: {
							active: a.label === t.activeItem,
							clickable: ""
						},
						on: {
							click: function (e) {
								return t.setActive(a.label)
							}
						}
					}, [e("q-item-section", {
						attrs: {
							avatar: ""
						}
					}, [e("q-icon", {
						attrs: {
							name: a.icon
						}
					})], 1), e("q-item-section", {}, [t._v("\n                " + t._s(a.label) + "\n                ")])], 1) : t._e()]
				}))], 2)], 1)], 1), e("q-page-container", [e("q-page", {
					staticClass: "q-pa-md row justify-center q-gutter-md",
					attrs: {
						padding: ""
					}
				}, ["Anos para dias" === t.activeItem ? e("DiasAnos", {
					staticStyle: {
						width: "100%"
					}
				}) : t._e(), "Fração/Porcent" === t.activeItem ? e("FracaoPorcent") : t._e(), "Datas e dias" === t.activeItem ? e("DataDias") : t._e(), "Subtrair Datas" === t.activeItem ? e("SubtrairData") : t._e()], 1)], 1)], 1)], 1)
			},
				o = [],
				r = e("81e9"),
				n = e("27d4"),
				l = e("a9815"),
				i = e("89fc"),
				c = {
					components: {
						DiasAnos: r["a"],
						FracaoPorcent: n["a"],
						DataDias: l["a"],
						SubtrairData: i["a"]
					},
					data() {
						return {
							drawer: !1,
							menuList: [{
								label: "Anos para dias",
								icon: "remove",
								type: "conversor"
							}, {
								label: "Fração/Porcent",
								icon: "remove",
								type: "conversor"
							}, {
								label: "Datas e dias",
								icon: "remove",
								type: "calculos"
							}, {
								label: "Subtrair Datas",
								icon: "remove",
								type: "calculos"
							}],
							activeItem: "Anos para dias"
						}
					},
					mounted() {
						this.$root.$on("changeDrawer", (() => this.drawer = !this.drawer))
					},
					methods: {
						setActive: function (t) {
							this.activeItem = t
						}
					}
				},
				d = c,
				u = e("2877"),
				m = e("4d5a"),
				p = e("9404"),
				b = e("068f"),
				v = e("1c1c"),
				f = e("3b73"),
				h = e("66e5"),
				x = e("4074"),
				g = e("0016"),
				C = e("09e3"),
				q = e("9989"),
				D = e("714f"),
				k = e("eebe"),
				y = e.n(k),
				w = Object(u["a"])(d, s, o, !1, null, null, null);
			a["default"] = w.exports;
			y()(w, "components", {
				QLayout: m["a"],
				QDrawer: p["a"],
				QImg: b["a"],
				QList: v["a"],
				QExpansionItem: f["a"],
				QItem: h["a"],
				QItemSection: x["a"],
				QIcon: g["a"],
				QPageContainer: C["a"],
				QPage: q["a"]
			}), y()(w, "directives", {
				Ripple: D["a"]
			})
		},
		"5c31": function (t, a, e) { },
		"81e9": function (t, a, e) {
			"use strict";
			var s = function () {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("q-card-section", {
					staticClass: "col-md-4 col-sm-12"
				}, [e("div", {
					staticClass: "text-h5 q-mt-sm q-mb-md"
				}, [t._v("ANOS E DIAS")]), e("q-banner", {
					staticClass: "bg-dark text-white text-bold q-mb-md",
					attrs: {
						dense: "",
						rounded: ""
					}
				}, [t._v("\nConverta anos, meses e dias para dias.\n")]), e("q-select", {
					staticClass: "q-mb-lg",
					attrs: {
						color: "dark",
						options: t.options,
						label: "Converter de:"
					},
					model: {
						value: t.selectedOption,
						callback: function (a) {
							t.selectedOption = a
						},
						expression: "selectedOption"
					}
				}), "Anos para dias" === t.selectedOption ? e("div", [e("q-input", {
					attrs: {
						color: "dark",
						type: "number",
						outlined: "",
						"bottom-slots": "",
						label: "Anos"
					},
					scopedSlots: t._u([{
						key: "append",
						fn: function () {
							return [e("q-icon", {
								staticClass: "cursor-pointer",
								attrs: {
									name: "cancel"
								},
								on: {
									click: function (a) {
										t.textAnos = ""
									}
								}
							})]
						},
						proxy: !0
					}], null, !1, 1134769307),
					model: {
						value: t.textAnos,
						callback: function (a) {
							t.textAnos = a
						},
						expression: "textAnos"
					}
				}), e("q-input", {
					attrs: {
						color: "dark",
						type: "number",
						outlined: "",
						"bottom-slots": "",
						label: "Meses",
						hint: ""
					},
					scopedSlots: t._u([{
						key: "append",
						fn: function () {
							return [e("q-icon", {
								staticClass: "cursor-pointer",
								attrs: {
									name: "cancel"
								},
								on: {
									click: function (a) {
										t.textMeses = ""
									}
								}
							})]
						},
						proxy: !0
					}], null, !1, 3040727205),
					model: {
						value: t.textMeses,
						callback: function (a) {
							t.textMeses = a
						},
						expression: "textMeses"
					}
				}), e("q-input", {
					attrs: {
						color: "dark",
						type: "number",
						outlined: "",
						"bottom-slots": "",
						label: "Dias",
						hint: ""
					},
					scopedSlots: t._u([{
						key: "append",
						fn: function () {
							return [e("q-icon", {
								staticClass: "cursor-pointer",
								attrs: {
									name: "cancel"
								},
								on: {
									click: function (a) {
										t.textDias = ""
									}
								}
							})]
						},
						proxy: !0
					}], null, !1, 2993044407),
					model: {
						value: t.textDias,
						callback: function (a) {
							t.textDias = a
						},
						expression: "textDias"
					}
				})], 1) : "Dias para anos" === t.selectedOption ? e("div", [e("q-input", {
					attrs: {
						color: "dark",
						outlined: "",
						"bottom-slots": "",
						label: "Dias"
					},
					scopedSlots: t._u([{
						key: "append",
						fn: function () {
							return [e("q-icon", {
								staticClass: "cursor-pointer",
								attrs: {
									name: "cancel"
								},
								on: {
									click: function (a) {
										t.textDiasAnos = ""
									}
								}
							})]
						},
						proxy: !0
					}]),
					model: {
						value: t.textDiasAnos,
						callback: function (a) {
							t.textDiasAnos = a
						},
						expression: "textDiasAnos"
					}
				})], 1) : t._e(), e("q-btn-group", {
					attrs: {
						push: "",
						spread: ""
					}
				}, [e("q-btn", {
					staticClass: "bg-dark",
					attrs: {
						flat: "",
						size: "100",
						label: "Calcular",
						color: "white"
					},
					on: {
						click: t.calculaData
					}
				}), e("q-btn", {
					attrs: {
						flat: "",
						label: t.resultado,
						color: "dark"
					},
					on: {
						click: t.clipBoard
					}
				})], 1)], 1)
			},
				o = [],
				r = e("cdde"),
				n = {
					data() {
						return {
							textAnos: "0",
							textMeses: "0",
							textDias: "0",
							resultado: "",
							textDiasAnos: "",
							options: ["Anos para dias", "Dias para anos"],
							selectedOption: "Anos para dias"
						}
					},
					methods: {
						calculaData() {
							if (this.resultado = "", "Anos para dias" == this.selectedOption) {
								let
									t = !isNaN(parseInt(this.textAnos)) ? 360 * parseInt(this.textAnos) : 0,
									a = !isNaN(parseInt(this.textMeses)) ? 30 * parseInt(this.textMeses) : 0,
									e = !isNaN(parseInt(this.textDias)) ? parseInt(this.textDias) : 0;

								this.resultado = t + a + e
							} else this.resultado = this.getFormatedStringFromDays(parseInt(this.textDiasAnos))
						},
						getFormatedStringFromDays(t) {
							let a = Math.floor(t / 360),
								e = Math.floor(t % 360 / 30),
								s = Math.floor(t % 360 % 30),
								o = a > 0 ? a + (1 == a ? " Ano" : " Anos") + ((s > 0 || e > 0) ? ", " : "") : "",
								r = e > 0 ? e + (1 == e ? " Mes" : " Meses") + (s > 0 ? ", " : "") : "",
								n = s > 0 ? s + (1 == s ? " Dia" : " Dias") : "";
							return o + r + n
						},
						clipBoard: function () {
							Object(r["a"])(this.resultado).then((() => {
								this.$root.$emit("openClipboardModal")
							}))
						}
					}
				},
				l = n,
				i = (e("3b2d"), e("2877")),
				c = e("a370"),
				d = e("54e1"),
				u = e("ddd8"),
				m = e("27f9"),
				p = e("0016"),
				b = e("e7a9"),
				v = e("9c40"),
				f = e("eebe"),
				h = e.n(f),
				x = Object(i["a"])(l, s, o, !1, null, null, null);
			a["a"] = x.exports;
			h()(x, "components", {
				QCardSection: c["a"],
				QBanner: d["a"],
				QSelect: u["a"],
				QInput: m["a"],
				QIcon: p["a"],
				QBtnGroup: b["a"],
				QBtn: v["a"]
			})
		},
		"89fc": function (t, a, e) {
			"use strict";
			var s = function () {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("q-card-section", {
					staticClass: "col-12 col-md-6"
				}, [e("div", {
					staticClass: "text-h5 text-uppercase q-mt-sm q-mb-md"
				}, [t._v("Subtrair Datas")]), e("q-banner", {
					staticClass: "bg-dark text-white text-bold q-mb-md",
					attrs: {
						dense: "",
						rounded: ""
					}
				}, [t._v("\nCalcule a diferença entre duas data.\n")]), e("q-input", {
					attrs: {
						color: "dark",
						outlined: "",
						"bottom-slots": "",
						label: "Data 1",
						"stack-label": "",
						type: "date"
					},
					model: {
						value: t.date1,
						callback: function (a) {
							t.date1 = a
						},
						expression: "date1"
					}
				}), e("q-input", {
					attrs: {
						color: "dark",
						outlined: "",
						"bottom-slots": "",
						label: "Data 2",
						"stack-label": "",
						type: "date"
					},
					model: {
						value: t.date2,
						callback: function (a) {
							t.date2 = a
						},
						expression: "date2"
					}
				}), e("q-btn-group", {
					attrs: {
						push: "",
						spread: ""
					}
				}, [e("q-btn", {
					staticClass: "bg-dark",
					attrs: {
						flat: "",
						size: "100",
						label: "Calcular",
						color: "white"
					},
					on: {
						click: t.calculaData
					}
				}), e("q-btn", {
					attrs: {
						flat: "",
						label: t.resultado,
						color: "dark"
					},
					on: {
						click: t.clipBoard
					}
				})], 1)], 1)
			},
				o = [],
				r = e("cdde"),
				n = {
					data() {
						return {
							date1: "",
							date2: "",
							resultado: ""
						}
					},
					methods: {
						calculaData() {
							this.resultado = "";
							let t = new Date(this.date1),
								a = new Date(this.date2);
							if (t < a) this.resultado = "A Data 1 não pode ser menor que a data 2";
							else {
								let e = Math.abs(t.getTime() - a.getTime()),
									s = Math.ceil(e / 864e5);
								this.resultado = s + " dias"
							}
						},
						clipBoard: function () {
							Object(r["a"])(this.resultado).then((() => {
								this.$root.$emit("openClipboardModal")
							}))
						}
					}
				},
				l = n,
				i = e("2877"),
				c = e("a370"),
				d = e("54e1"),
				u = e("27f9"),
				m = e("e7a9"),
				p = e("9c40"),
				b = e("eebe"),
				v = e.n(b),
				f = Object(i["a"])(l, s, o, !1, null, null, null);
			a["a"] = f.exports;
			v()(f, "components", {
				QCardSection: c["a"],
				QBanner: d["a"],
				QInput: u["a"],
				QBtnGroup: m["a"],
				QBtn: p["a"]
			})
		},
		a6cd: function (t, a, e) {
			"use strict";
			e("e92c")
		},
		a9815: function (t, a, e) {
			"use strict";
			var s = function () {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("q-card-section", {
					staticClass: "col-12 col-md-6"
				}, [e("div", {
					staticClass: "text-h5  q-mt-sm q-mb-md"
				}, [t._v("DATAS E DIAS")]), e("q-banner", {
					staticClass: "bg-dark text-white text-bold q-mb-md",
					attrs: {
						dense: "",
						rounded: ""
					}
				}, [t._v("\n    Some ou subtraía dias de uma data.\n    ")]), e("q-input", {
					attrs: {
						color: "dark",
						outlined: "",
						"bottom-slots": "",
						label: "Data",
						"stack-label": "",
						type: "date"
					},
					model: {
						value: t.textData,
						callback: function (a) {
							t.textData = a
						},
						expression: "textData"
					}
				}), e("q-input", {
					attrs: {
						color: "dark",
						outlined: "",
						"bottom-slots": "",
						type: "number",
						label: "Dias",
						hint: ""
					},
					scopedSlots: t._u([{
						key: "append",
						fn: function () {
							return [e("q-icon", {
								staticClass: "cursor-pointer",
								attrs: {
									name: "cancel"
								},
								on: {
									click: t.zeraDias
								}
							})]
						},
						proxy: !0
					}]),
					model: {
						value: t.textDias,
						callback: function (a) {
							t.textDias = a
						},
						expression: "textDias"
					}
				}), e("div", {
					staticClass: "q-mb-sm"
				}, [t._v("\n        *Selecione o tipo do cálculo\n    ")]), e("q-btn-toggle", {
					staticClass: "q-mb-md",
					attrs: {
						"no-caps": "",
						rounded: "",
						"toggle-color": "dark",
						color: "white",
						"text-color": "dark",
						options: [{
							value: "adiciona",
							slot: "one"
						}, {
							value: "subtrai",
							slot: "two"
						}]
					},
					scopedSlots: t._u([{
						key: "one",
						fn: function () {
							return [e("div", {
								staticClass: "row items-center no-wrap"
							}, [e("div", [t._v("Somar")]), e("q-icon", {
								attrs: {
									right: "",
									name: "add_circle"
								}
							})], 1)]
						},
						proxy: !0
					}, {
						key: "two",
						fn: function () {
							return [e("div", {
								staticClass: "row items-center no-wrap"
							}, [e("div", [t._v("Subtrair")]), e("q-icon", {
								attrs: {
									right: "",
									name: "remove_circle"
								}
							})], 1)]
						},
						proxy: !0
					}]),
					model: {
						value: t.operacao,
						callback: function (a) {
							t.operacao = a
						},
						expression: "operacao"
					}
				}), e("q-btn-group", {
					attrs: {
						push: "",
						spread: ""
					}
				}, [e("q-btn", {
					staticClass: "bg-dark",
					attrs: {
						flat: "",
						size: "100",
						label: "Calcular",
						color: "white"
					},
					on: {
						click: t.calculaData
					}
				}), e("q-btn", {
					attrs: {
						flat: "",
						label: t.resultado,
						color: "dark"
					},
					on: {
						click: t.clipBoard
					}
				})], 1)], 1)
			},
				o = [],
				r = e("cdde"),
				n = {
					data() {
						return {
							textData: "",
							textDias: 0,
							resultado: "",
							operacao: "adiciona"
						}
					},
					methods: {
						zeraDias() {
							this.textDias = 0
						},
						calculaData: function () {
							let t, a = new Date(`${this.textData}T00:00:00`);
							t = "adiciona" === this.operacao ? a.setDate(a.getDate() + Number(this.textDias)) : a.setDate(a.getDate() - Number(this.textDias));
							let e = new Date(t).getDate() <= 9 ? "0" + new Date(t).getDate() : new Date(t).getDate(),
								s = new Date(t).getMonth() + 1 <= 9 ? `0${new Date(t).getMonth() + 1}` : new Date(t).getMonth() + 1,
								o = new Date(t).getFullYear();
							this.resultado = `${e}/${s}/${o}`
						},
						clipBoard: function () {
							Object(r["a"])(this.resultado).then((() => {
								this.$root.$emit("openClipboardModal")
							}))
						}
					}
				},
				l = n,
				i = (e("a6cd"), e("2877")),
				c = e("a370"),
				d = e("54e1"),
				u = e("27f9"),
				m = e("0016"),
				p = e("6a67"),
				b = e("e7a9"),
				v = e("9c40"),
				f = e("eebe"),
				h = e.n(f),
				x = Object(i["a"])(l, s, o, !1, null, null, null);
			a["a"] = x.exports;
			h()(x, "components", {
				QCardSection: c["a"],
				QBanner: d["a"],
				QInput: u["a"],
				QIcon: m["a"],
				QBtnToggle: p["a"],
				QBtnGroup: b["a"],
				QBtn: v["a"]
			})
		},
		cc15: function (t, a, e) {
			"use strict";
			e.r(a);
			var s = function () {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("div", {
					staticClass: "desktop-only"
				}, [e("q-page", {
					staticClass: "q-pa-md row justify-center q-gutter-md "
				}, [e("q-card", {
					staticClass: "col-12",
					attrs: {
						flat: "",
						bordered: "",
						border: ""
					}
				}, [e("q-item-section", {
					staticClass: "bg-dark text-white"
				}, [e("q-item-label", [e("q-icon", {
					attrs: {
						name: "calculate",
						size: "30px"
					}
				}), t._v("\n              CONVERSOR\n            ")], 1)], 1), e("q-card-section", {
					staticClass: "row items-baseline"
				}, [e("DiasAnos"), e("FracaoPorcent")], 1)], 1), e("q-card", {
					staticStyle: {
						width: "100%",
						height: "450px"
					},
					attrs: {
						flat: "",
						bordered: "",
						border: ""
					}
				}, [e("q-item-section", {
					staticClass: "bg-dark text-white"
				}, [e("q-item-label", [e("q-icon", {
					attrs: {
						name: "calculate",
						size: "30px"
					}
				}), t._v("\n              CALCULOS\n            ")], 1), e("q-item-label", {
					attrs: {
						caption: ""
					}
				})], 1), e("q-card-section", {
					staticClass: "row"
				}, [e("DataDias"), e("SubtrairData")], 1)], 1)], 1)], 1)
			},
				o = [],
				r = e("81e9"),
				n = e("27d4"),
				l = e("a9815"),
				i = e("89fc"),
				c = {
					name: "Index",
					components: {
						DiasAnos: r["a"],
						FracaoPorcent: n["a"],
						DataDias: l["a"],
						SubtrairData: i["a"]
					},
					data() {
						return {}
					}
				},
				d = c,
				u = e("2877"),
				m = e("9989"),
				p = e("f09f"),
				b = e("4074"),
				v = e("0170"),
				f = e("0016"),
				h = e("a370"),
				x = e("eebe"),
				g = e.n(x),
				C = Object(u["a"])(d, s, o, !1, null, null, null);
			a["default"] = C.exports;
			g()(C, "components", {
				QPage: m["a"],
				QCard: p["a"],
				QItemSection: b["a"],
				QItemLabel: v["a"],
				QIcon: f["a"],
				QCardSection: h["a"]
			})
		},
		e92c: function (t, a, e) { },
		edeb: function (t, a, e) { },
		ee60: function (t, a, e) {
			"use strict";
			e("edeb")
		}
	}
]);