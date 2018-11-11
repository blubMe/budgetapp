"use strict"

// static init components
const Fx = (() => {
    return {
        createPureComponent: (el,status) => {
            return ((content) => ((style) => customElements.define(el, class extends HTMLElement {
                constructor(){
                    super()
                    this._shadowRoot = this.attachShadow({mode: status})
                    style === undefined
                    ? this._shadowRoot.innerHTML = content
                    : this._shadowRoot.innerHTML = style + content
                }
            })))
        },
        createComponent: (el,status) => {
            return ((content) => ((style) => customElements.define(el, class extends HTMLElement {
                constructor(){
                    super()
                    this._shadowRoot = this.attachShadow({mode: status})
                    style === undefined
                    ? this._shadowRoot.innerHTML = content
                    : this._shadowRoot.innerHTML = style + content
                }
                static get observedAttributes(){
                    return ['text','stats']
                }
                get text(){return this.getAttribute('text')}
                get style(){return this.getAttribute('stats')}
                set text(newValue){this.setAttribute('text', newValue)}
                set style(newStyle){this.setAttribute('style',newStyle)}
                attributeChangedCallback(name, oldValue, newValue) {
                    console.log(name)
                    if (name === 'stats') {
                        console.log(newValue)
                        newValue === 'income'
                        ? this.shadowRoot.querySelector('.card').classList.add('blue')
                        : this.shadowRoot.querySelector('.card').classList.add('red')
                    }
                    if (name === 'text') {
                        this.shadowRoot.querySelector('h3').textContent = newValue;
                        this.shadowRoot.querySelector('p').textContent = newValue;
                    }
                }
            })))
        },
    }
})()

Fx.createPureComponent('header-desc','open')(headercontent)(headercontentStyle)
Fx.createComponent('text-set','open')(cardcontent)(cardcontentStyle)
Fx.createPureComponent('footer-app','open')(footer)()