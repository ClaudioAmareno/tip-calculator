// Inputs
const billInput = document.querySelector('#bill-amount')
const peopleInput = document.querySelector('#people-amount')
const customInput = document.querySelector('#custom')

// Prices
const totalCost = document.querySelector('.cost__total')
const tipCost = document.querySelector('.cost__first-cost')

// Errors
const billError = document.querySelector('.error-bill')
const peopleError = document.querySelector('.error-people')

// Btns
const buttons = document.querySelectorAll('.tip-btn')
const btnReset = document.querySelector('.reset')

// Table input
const inputs = [billInput, peopleInput, customInput]

//Error Check
const checkBillError = () => {
	if (billInput.value == '' || billInput.value < 0) {
		billError.style.display = 'block'
	}

	if (peopleInput.value == '' || peopleInput.value < 0) {
		peopleError.style.display = 'block'
	}
}

// Maths
buttons.forEach(button => {
	button.addEventListener('click', e => {
		const tipValue = parseInt(e.target.dataset.set)

		const price = billInput.valueAsNumber
		const people = peopleInput.valueAsNumber

		const valuesBtn = (tipValue / 100) * billInput.value

		if (billInput.value !== '' && peopleInput.value !== '' && peopleInput.value > 0) {
			const sum = ((price + valuesBtn) / people).toFixed(2)

			const tipSum = (valuesBtn / people).toFixed(2)
			totalCost.textContent = `$${sum}`
			tipCost.textContent = `$${tipSum}`
			peopleError.style.display = 'none'
			billError.style.display = 'none'
			customInput.value = ''
		} else {
			checkBillError()
		}
	})
})

inputs.forEach(input => {
	input.addEventListener('input', () => {
		const price = billInput.valueAsNumber
		const people = peopleInput.valueAsNumber
		const tip = (customInput.value / 100) * billInput.value

		if (billInput.value !== '' && peopleInput.value !== '' && peopleInput.value > 0) {
			const sum = ((price + tip) / people).toFixed(2)

			const tipSum = (tip / people).toFixed(2)

			totalCost.textContent = `$${sum}`
			tipCost.textContent = `$${tipSum}`
			peopleError.style.display = 'none'
			billError.style.display = 'none'
		} else {
			checkBillError()
		}
	})
})

// Reset
btnReset.addEventListener('click', () => {
	billInput.value = ''
	peopleInput.value = ''
	customInput.value = ''
	totalCost.textContent = '$0.00'
	tipCost.textContent = '$0.00'
	peopleError.style.display = 'none'
	billError.style.display = 'none'
})
