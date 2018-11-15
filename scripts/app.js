const budgetController = (() => {
    // some code
})()
const uiController = (() => {
    const domElement = {
        inputType: '.input__add',
        inputDesc: '#description',
        inputAmount: '#amount',
        inputButton: '#fire'
    }

    return {
        getInput: () => {
            const { inputType,inputDesc,inputAmount } = domElement
            return {
                type: Fx.selectTarget(inputType).value,
                description: Fx.selectTarget(inputDesc).value,
                amount: Fx.selectTarget(inputAmount).value
            }
        },
        getDomElement: () => domElement
    }
})()
const controller = ((budgetCtrl,uiCtrl) => {
    const setupEventListener = () => {
        const Dom = uiController.getDomElement()
        Fx.doEvent(Dom.inputButton,'click',ctrlAddItem)
    }
    const ctrlAddItem = () => {
        const input = uiController.getInput()
        _out(input)
    }

    return {
        init: () => {
            _out('application has started')
            setupEventListener()
        }
    }

})(budgetController,uiController)

controller.init()