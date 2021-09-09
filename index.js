const Output_1 = document.querySelector('.previousNumberElement')
const Output_2 = document.querySelector('.currentNumberElement')
const number_button = document.querySelectorAll('.btn-Number')
const oprator_button = document.querySelectorAll('.btn-operator')
const clear = document.querySelector('.btn-clear')
const clearLE = document.querySelector('.btn-clearLast')


let num1 = ""
let num2 = ""
let operator_val = ""
let havDot = false;
let is_oprator = false
let lastoperand = ""
let result = ''
let display_result
number_button.forEach(number => {
	number.addEventListener('click', (e) => {
		if (e.target.innerText == '.' && Output_2.innerHTML.includes('.')) {
			return;
		} else {
			havDot = false;
		}
		num2 += e.target.innerText
		Output_2.innerHTML = num2;
		// console.log()
	})
})

oprator_button.forEach(Operator => {
	Operator.addEventListener('click', e => {
		if (!num2) return;
		haveDot = true
		operator_val = e.target.innerText
		if (num1 && num2 && lastoperand) {
			mathOperation()
		} else {
			result = parseFloat(num2)
		}
		clearCounter(operator_val)
		lastoperand = operator_val


	})
})

function clearCounter(props = '') {
	num1 += num2 + ' ' + props + ' ';
	// console.log(num1)
	Output_1.innerHTML = num1;
	Output_2.innerHTML = '';
	num2 = ''
}

function mathOperation() {
	// result = eval(Output_1.innerHTML)
	if (lastoperand === '×') {
		result = parseFloat(result) * parseFloat(num2)
	} else if (lastoperand === '+') {
		result = parseFloat(result) + parseFloat(num2)
	} else if (lastoperand === '-') {
		result = parseFloat(result) - parseFloat(num2)
	} else if (lastoperand === '/') {
		result = parseFloat(result) / parseFloat(num2)
	} else if (lastoperand === '%') {
		result = parseFloat(result) % parseFloat(num2)
	}
	return result
}

const isEqual = document.querySelector('.btn-equalTo');
isEqual.addEventListener('click', (e) => {

	if (!num1 || !num2) result;

	// Output_1.innerHTML = '0'
	havDot = false;
	mathOperation()
	clearCounter()
	num2 = result
	num1 = '';
	Output_1.innerHTML = 0;
	Output_2.innerHTML = result;
})



clear.addEventListener('click', () => {
	Output_1.innerHTML = '0';
	Output_2.innerHTML = '0';
	num1 = ''
	num2 = ''
	result = ''
})

clearLE.addEventListener('click', () => {
	Output_2.innerHTML = '';
	num2 = ''
})


window.addEventListener('keyup', (e) => {

	if (
		e.key === '0' ||
		e.key === '1' ||
		e.key === '2' ||
		e.key === '3' ||
		e.key === '4' ||
		e.key === '5' ||
		e.key === '6' ||
		e.key === '7' ||
		e.key === '8' ||
		e.key === '9' ||
		e.key === '.'
	) {
		clickButtonElement(e.key)
	} else if (
		e.key === '+' ||
		e.key === '-' ||
		e.key === '/' ||
		e.key === '%'
	) {
		clickOperationElement(e.key)
	} else if (e.keyCode == 13) {

		if (!num1 || !num2) result;

		// Output_1.innerHTML = '0'
		havDot = false;
		mathOperation()
		clearCounter()
		num2 = result
		num1 = '';
		Output_1.innerHTML = 0;
		Output_2.innerHTML = result;
	} else if (e.key === '*') {
		clickOperationElement('×')
	}
})

function clickButtonElement(key) {
	number_button.forEach(button => {
		if (button.innerText === key) {
			button.click()
		}
	})
}

function clickOperationElement(key) {
	oprator_button.forEach(button => {
		if (button.innerText === key) {
			button.click()
		}
	})
}