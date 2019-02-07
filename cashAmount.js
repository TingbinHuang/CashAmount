class CashAmount {

	constructor(amount) {
		this.amount = amount; 
		this.currentAmount = amount; 
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

	}

}



