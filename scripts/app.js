const budgetController = (() => {
    class Outcome {
        constructor(id, description, amount) {
            this.id = id;
            this.description = description;
            this.amount = amount;
        }
    }
    class Income {
        constructor(id, description, amount) {
            this.id = id;
            this.description = description;
            this.amount = amount;
        }
    }
    const data = {
        allItems: {
            outcome: [],
            income: []
        },
        totals: {
            outcome: 0,
            income: 0
        }

    }
    // public api
    return {
        addItem: (type,des,val) => {
            let newItem,id

            // create new id
            data.allItems[type].length > 0
            ? id = data.allItems[type][data.allItems[type].length - 1].id + 1
            : id = 0

            // create new item out or inc
            type === 'outcome'
            ? newItem = new Outcome(id,des,val)
            : type === 'income'
            ? newItem = new Income(id,des,val)
            : null

            data.allItems[type].push(newItem)

            // set public data of newItem
            return newItem
        },
        testing: () => _out(data)
    }
})()
const uiController = (() => {
    const domElement = {
        inputType: '.input__add',
        inputDesc: '#description',
        inputAmount: '#amount',
        inputButton: '#fire',
        incomeContainer: '#income-section',
        outcomeContainer: '#outcome-section'
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
        getDomElement: () => domElement,
        addListItem: (obj,type) => {
            let element,html

            // create HTML blueprint
            const {id,description,amount} = obj
            if(type === 'income'){
                element = domElement.incomeContainer
                html = `
                <div class="list" id="income-${id}">
                    <p>${description}</p>
                    <h3>${amount}</h3>
                </div>`}
            else if(type === 'outcome'){
                element = domElement.outcomeContainer
                html = `
                <div class="list" id="outcome-${id}">
                    <p>${description}</p>
                    <h3>${amount}</h3>
                </div>`
            }

            // insert html with the DOM
            Fx.injectHTML(element,'beforeend',html)
        }
    }
})()
const controller = ((budgetCtrl) => {
    const setupEventListener = () => {
        const Dom = uiController.getDomElement()
        Fx.doEvent(Dom.inputButton,'click',ctrlAddItem)
    }
    const ctrlAddItem = () => {
        let input,newItem

        // 1.get the field input data
        input = uiController.getInput()
        _out(input)

        // 2. Add item to the budget controller
        newItem = budgetController.addItem(input.type,input.description,input.amount)
        
        // 3.Add item to the UI
        uiController.addListItem(newItem,input.type)
    }

    return {
        init: () => {
            _out('application has started')
            setupEventListener()
        }
    }

})(budgetController,uiController)

controller.init()