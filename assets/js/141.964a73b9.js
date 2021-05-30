(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{542:function(a,s,t){"use strict";t.r(s);var e=t(44),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Convert value to a binary primitive")]),a._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" into binary "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".args "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n")])])]),t("h2",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[a._v("#")]),a._v(" Parameters")]),a._v(" "),t("ul",[t("li",[a._v("...args: column paths to convert to binary (for table input)")])]),a._v(" "),t("h2",{attrs:{id:"flags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[a._v("#")]),a._v(" Flags")]),a._v(" "),t("ul",[t("li",[a._v("-h, --help: Display this help message")]),a._v(" "),t("li",[a._v("-s, --skip "),t("integer",[a._v(": skip x number of bytes")])],1),a._v(" "),t("li",[a._v("-b, --bytes "),t("integer",[a._v(": show y number of bytes")])],1)]),a._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("p",[a._v("convert string to a nushell binary primitive")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'This is a string that is exactly 52 characters long.'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" into binary\n")])])]),t("p",[a._v("convert string to a nushell binary primitive")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'This is a string that is exactly 52 characters long.'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" into binary --skip "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])]),t("p",[a._v("convert string to a nushell binary primitive")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'This is a string that is exactly 52 characters long.'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" into binary --skip "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" --bytes "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])]),t("p",[a._v("convert a number to a nushell binary primitive")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" into binary\n")])])]),t("p",[a._v("convert a boolean to a nushell binary primitive")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" into binary\n")])])]),t("p",[a._v("convert a filesize to a nushell binary primitive")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" where name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" LICENSE "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" get size "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" into binary\n")])])]),t("p",[a._v("convert a filepath to a nushell binary primitive")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" where name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" LICENSE "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" get name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" path "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("expand")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" into binary\n")])])]),t("p",[a._v("convert a decimal to a nushell binary primitive")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.234")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" into binary\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);