export default function clearPhoneNumber(number) {
	return number.replace(/[^+\d]/g, '').replace(/^8/, "+7");
}

  