var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function g(e,t,n){var r,i,o,a,f,u,c=0,l=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(S,t),l?b(e):a}function x(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=o}function S(){var e=d();if(x(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-u);return g?m(n,o-(e-c)):n}(e))}function T(e){return f=void 0,y&&r?b(e):(r=i=void 0,a)}function h(){var e=d(),n=x(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(g)return f=setTimeout(S,t),b(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=v(t)||0,p(n)&&(l=!!n.leading,o=(g="maxWait"in n)?s(v(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},h.flush=function(){return void 0===f?a:T(d())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")},b={},j=localStorage.getItem("feedback-form-state");if(y.form.addEventListener("input",t((function(e){b[e.target.name]=e.target.value;const t=JSON.stringify(b);localStorage.setItem("feedback-form-state",t)}),500)),y.form.addEventListener("submit",t((function(e){e.preventDefault(),console.log(`email: ${b.email},\n    message: ${b.message}`),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}),500)),j){const e=JSON.parse(j);y.input.value=e.email,y.textarea.value=e.message,b.email=e.email,b.message=e.message}
//# sourceMappingURL=03-feedback.1f4e56a4.js.map