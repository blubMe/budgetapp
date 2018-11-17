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
                amount: parseFloat(Fx.selectTarget(inputAmount).value)
            }
        },
        getDomElement: () => domElement,
        addListItem: (obj,type) => {
            let element,res

            // create HTML blueprint
            const {id,description,amount} = obj
            const html = params => `
            <div class="list" id="${params}-${id}">
                <p>${description}</p>
                <h3>${amount}</h3>
            </div>`
            if(type === 'income'){
                element = domElement.incomeContainer
                res = html(type)
            }
            else if(type === 'outcome'){
                element = domElement.outcomeContainer
                res = html(type)
            }

            // insert html with the DOM
            Fx.injectHTML(element,'beforeend',res)
        },
        clearField: () => {
            const field =  Fx.selectTargetAll(domElement.inputDesc + ', ' + domElement.inputAmount)
            const fieldArray = Array.prototype.slice.call(field)
            fieldArray.forEach((current,index,array) => {
                current.value = ''
            });
            fieldArray[0].focus()
        }
    }
})()
const controller = ((budgetCtrl) => {
    const setupEventListener = () => {
        const Dom = uiController.getDomElement()
        Fx.doEvent(Dom.inputButton,'click',ctrlAddItem)
    }

    const updateBudget = () => {
        // 1. calculate the budget
        // 2. Return the budget
        // 3. Display the budget on the UI
    }

    const ctrlAddItem = () => {
        let input,newItem

        // 1.get the field input data
        input = uiController.getInput()
        const {description,amount,type} = input
        if(description !== "" && !isNaN(amount) && amount > 0 ){
            // 2. Add item to the budget controller
            newItem = budgetController.addItem(type,description,amount)

            // 3.Add item to the UI
            uiController.addListItem(newItem,type)

            // 4.Clear the fields
            uiController.clearField()

            // 5.Calculate and update budget
            updateBudget()
        }
    }

    return {
        init: () => {
            _out('application has started')
            setupEventListener()
        }
    }

})(budgetController,uiController)

controller.init()