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

//Error Check

const checkBillError = () => {
	if (billInput.value == '' || billInput.value < 0) {
		billError.style.display = 'block'
	}

	if (peopleInput.value == '' || peopleInput.value < 0) {
		peopleError.style.display = 'block'
	}
}

const countBill = () => {
	let price = parseInt(billInput.value)
	let people = parseInt(peopleInput.value)
	const tip = parseFloat((customInput.value / 100) * billInput.value)

	const sum = ((price + tip) / people).toFixed(2)

	const tipSum = (tip / people).toFixed(2)

	if ((billInput.value !== '') & (billInput.value > 0) & ((peopleInput.value !== '') & (peopleInput.value > 0))) {
		totalCost.textContent = `$` + sum
		tipCost.textContent = `$` + tipSum
		peopleError.style.display = 'none'
		billError.style.display = 'none'
	} else {
		checkBillError()
	}
}


buttons.forEach(button => {
	button.addEventListener('click', e => {
		let tipValue = parseInt(e.target.innerText)

		let price = parseInt(billInput.value)
		let people = parseInt(peopleInput.value)

		let valuesBtn = parseFloat((tipValue / 100) * billInput.value)

		const sum = ((price + valuesBtn) / people).toFixed(2)

		const tipSum = (valuesBtn / people).toFixed(2)

		if ((billInput.value !== '') & (billInput.value > 0) & ((peopleInput.value !== '') & (peopleInput.value > 0))) {
			totalCost.textContent = `$` + sum
			tipCost.textContent = `$` + tipSum
			peopleError.style.display = 'none'
			billError.style.display = 'none'
		} else {
			checkBillError()
		}
	})
})

// Reset

const reset = () => {
	billInput.value = ''
	peopleInput.value = ''
	customInput.value = ''
	totalCost.textContent = '$0.00'
	tipCost.textContent = '$0.00'
	peopleError.style.display = 'none'
	billError.style.display = 'none'
}

btnReset.addEventListener('click', reset)
billInput.addEventListener('input', countBill)
peopleInput.addEventListener('input', countBill)
customInput.addEventListener('input', countBill)
