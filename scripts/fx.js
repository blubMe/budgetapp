// use this when ur app fully needed this

const Fx = (() => {
    return {
        selectTarget: (props) => document.querySelector(props),
        doEvent: (elementTarget,event,functions) => {
            return document.querySelector(elementTarget).addEventListener(event,functions)
        }
    }
})()

const _out = (props) => console.log(props)