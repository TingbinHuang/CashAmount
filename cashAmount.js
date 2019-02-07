class CashAmount {

	constructor(amount) {
		this.amount = amount; 
		this.currentAmount = amount; 
		this.obj = {};
	}

	current() { // function for debugging 
		return this.currentAmount;
	}

	totalInPennies() {
		return this.currentAmount * 100; 
	}

	addDoubleAmount(newAmount) {
		this.currentAmount = Number((newAmount + this.currentAmount).toFixed(2));
	}

	toDouble() {
		return this.currentAmount;
	}

	toDoubleString() {
		return this.currentAmount.toString();
	}

	quantityOfEachDenomination() {
		let len = (Math.floor(this.currentAmount)).toString().length;

		// I assume the maximum amount is up to 'hundreds'

		this.obj.hundreds = Math.floor(len / 100); 

	}

}

const cash = new CashAmount(967.93);

console.log(cash.quantityOfEachDenomination());


