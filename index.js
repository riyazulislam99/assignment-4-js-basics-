function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return 'Invalid Number';
    }
    const ticketPrice = 120;
    const gatemanCost = 500;
    const staffLunchCost = 8 * 50;

    const ticketsIncome = ticketPrice * ticketSale;
    const expense = gatemanCost + staffLunchCost;
    const income = ticketsIncome - expense;
    return income;
}

function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid';
    }
    if (name[name.length - 1] === 'a' || name[name.length - 1] === 'y' || name[name.length - 1] === 'i' || name[name.length - 1] === 'e' || name[name.length - 1] === 'o' || name[name.length - 1] === 'u' || name[name.length - 1] === 'w') {
        return 'Good Name';
    }
    else if (name[name.length - 1] === 'A' || name[name.length - 1] === 'Y' || name[name.length - 1] === 'I' || name[name.length - 1] === 'E' || name[name.length - 1] === 'O' || name[name.length - 1] === 'U' || name[name.length - 1] === 'W') {
        return 'Good Name';
    }
    return 'Bad Name';
}

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }
    let validNumber = [];
    for (const item of array) {
        if (typeof item === 'number' && !isNaN(item)) {
            validNumber.push(item);
        }
    }
    return validNumber;
}

function password(obj) {
    if (!obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    }
    const username = obj.name;
    const dateOfBirth = obj.birthYear;
    const firstChar = obj.siteName.charAt(0).toUpperCase();
    const part = obj.siteName.slice(1);
    const websiteName = firstChar + part;
    return websiteName + '#' + username + '@' + dateOfBirth;
}

function monthlySavings(arrays, livingCost) {
    if (Array.isArray(arrays) === false && livingCost !== 'number') {
        return 'invalid input';
    }
    let totalIncome = 0;
    let tax = 0;
    for (arr of arrays) {
        if (arr >= 3000) {
            tax = arr * 20 / 100;
        }
        totalIncome = totalIncome + arr;
    }
    const savings = totalIncome - (tax + livingCost);
    if (savings < 0) {
        return 'earn more';
    }
    return savings;
}