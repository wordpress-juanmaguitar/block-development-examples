(()=>{class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.hasAttribute("value")||this.setAttribute("value",0),this.hasAttribute("increment")||this.setAttribute("increment",1),this.shadowRoot.innerHTML=`\n\t<button class="decrement">-</button>\n\t<input value="${this.getAttribute("value")}" />\n\t<button class="increment">+</button>\n`,this.increment=this.shadowRoot.querySelector(".increment"),this.decrement=this.shadowRoot.querySelector(".decrement"),this.input=this.shadowRoot.querySelector("input"),this.increment.addEventListener("click",(()=>{const t=parseInt(this.getAttribute("value"),10),e=parseInt(this.getAttribute("increment"),10);this.setAttribute("value",t+e),this.replaceValue()})),this.decrement.addEventListener("click",(()=>{const t=parseInt(this.getAttribute("value"),10),e=parseInt(this.getAttribute("increment"),10);this.setAttribute("value",t-e),this.replaceValue()}))}attributeChangedCallback(t,e,i){"value"===t&&i!==e&&(this.setAttribute("value",i),this.replaceValue())}replaceValue(){this.input.value=this.getAttribute("value")}}window.customElements.define("gutenberg-counter",t)})();