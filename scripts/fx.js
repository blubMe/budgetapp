const Fx = (() => {
    return {
        _out: (props) => console.log(props),
        selectTarget: (props) => document.querySelector(props),
        doEvent: (elementTarget,event,functions) => {
            return document.querySelector(elementTarget).addEventListener(event,functions)
        }
    }
})()