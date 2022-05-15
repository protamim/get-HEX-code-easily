/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 */

window.onload = () => {
	main()
}

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function main() {
	const root = document.getElementById('root')
	const changeColor = document.getElementById('change-btn')
	const output = document.getElementById('output')
	const copy = document.getElementById('copy-btn')

	// Change background color and show the code in the input value
	changeColor.addEventListener('click', function() {
		let hexColor = generateHexColor()

		root.style.background = hexColor
		output.value = hexColor
	})
	// Copy the color code by click the Copy button
	copy.addEventListener('click', function() {
		navigator.clipboard.writeText(output.value)
	})
	
}

// Generate Hex code
function generateHexColor() {
	// #82756f : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
	let hexCode = '#'
	for(let i = 0; i < 6; i++) {
		let randomNumber = getRandomNumber()
		hexCode = hexCode + hex[randomNumber]
	}

	return hexCode
}

// Getting random integer number from the Array
function getRandomNumber() {
	return Math.floor(Math.random() * hex.length)
}