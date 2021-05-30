(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{596:function(s,n,e){"use strict";e.r(n);var t=e(44),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("This command shows information about system processes.")]),s._v(" "),e("p",[s._v("Syntax: "),e("code",[s._v("ps")])]),s._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n━━━━┯━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ pid   │ name                                                               │ status  │ cpu")]),s._v("\n────┼───────┼────────────────────────────────────────────────────────────────────┼─────────┼───────────────────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10184")]),s._v(" │ firefox.exe                                                        │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000000000000000")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11584")]),s._v(" │ WindowsTerminal.exe                                                │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000000000000000")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11052")]),s._v(" │ conhost.exe                                                        │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000000000000000")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7076")]),s._v(" │ nu.exe                                                             │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000000000000000")]),s._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("66")]),s._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(" │ Code.exe                                                           │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000000000000000")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("67")]),s._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5388")]),s._v(" │ conhost.exe                                                        │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000000000000000")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("68")]),s._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6268")]),s._v(" │ firefox.exe                                                        │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000000000000000")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("69")]),s._v(" │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8972")]),s._v(" │ nu_plugin_ps.exe                                                   │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("58.00986000000000")]),s._v("\n━━━━┷━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━\n")])])]),e("p",[s._v("Find processes with the highest cpu time")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -l "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sort-by cpu_time "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" last "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ pid │       name       │ status  │  cpu   │   mem    │ virtual │     cpu_time      │ parent │         exe          │       command")]),s._v("\n───┼─────┼──────────────────┼─────────┼────────┼──────────┼─────────┼───────────────────┼────────┼──────────────────────┼──────────────────────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("396")]),s._v(" │ Google Chrome    │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0000")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("271.6")]),s._v(" MB │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.8")]),s._v(" GB │ 6hr 20min 28sec   │      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ /Applications/Google │ /Applications/Google\n   │     │                  │         │        │          │         │ 173ms 641us 315ns │        │ Chrome.app/Contents/ │ Chrome.app/Contents/\n   │     │                  │         │        │          │         │                   │        │ MacOS/Google         │ MacOS/Google\n   │     │                  │         │        │          │         │                   │        │ Chrome               │ Chrome\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("444")]),s._v(" │ Google Chrome He │ Running │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0000")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("398.9")]),s._v(" MB │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.3")]),s._v(" GB │ 10hr 36min 17sec  │    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("396")]),s._v(" │ /Applications/Google │ /Applications/Google\n   │     │                  │         │        │          │         │ 304ms 66us 889ns  │        │ Chrome.app/Contents/ │ Chrome.app/Contents/\n   │     │                  │         │        │          │         │                   │        │ Frameworks/Google    │ Frameworks/Google\n   │     │                  │         │        │          │         │                   │        │ Chrome               │ Chrome\n   │     │                  │         │        │          │         │                   │        │ Framework.framework/ │ Framework.framework/\n   │     │                  │         │        │          │         │                   │        │ Versions/84.0.4147.1 │ Versions/84.0.4147.1\n   │     │                  │         │        │          │         │                   │        │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("/Helpers/Google    │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("/Helpers/Google\n   │     │                  │         │        │          │         │                   │        │ Chrome Helper        │ Chrome Helper\n   │     │                  │         │        │          │         │                   │        │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPU"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".app/Contents/M │ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPU"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".app/Contents/M\n   │     │                  │         │        │          │         │                   │        │ acOS/Google          │ acOS/Google\n   │     │                  │         │        │          │         │                   │        │ Chrome Helper "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPU"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  │ Chrome Helper "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GPU"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n───┴─────┴──────────────────┴─────────┴────────┴──────────┴─────────┴───────────────────┴────────┴──────────────────────┴──────────────────────\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);