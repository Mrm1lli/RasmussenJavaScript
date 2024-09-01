// Function to verify service quality input
function verifyServiceQuality(serviceQuality) {
    const validQualities = ['great', 'ok', 'poor'];
    if (validQualities.includes(serviceQuality.toLowerCase())) {
        return true;
    } else {
        alert("Invalid service quality entered. Please enter 'great', 'ok', or 'poor'.");
        return false;
    }
}

// Function to verify service amount input
function verifyServiceAmount(serviceAmount) {
    if (serviceAmount >= 5 && serviceAmount <= 500) {
        return true;
    } else {
        alert("Invalid service amount entered. Please enter an amount between $5.00 and $500.00.");
        return false;
    }
}

// Function to calculate tip based on service quality and amount
function calculateTip(serviceAmount, serviceQuality) {
    let tipPercentage;

    switch (serviceQuality.toLowerCase()) {
        case 'great':
            tipPercentage = 0.20;
            break;
        case 'ok':
            tipPercentage = 0.15;
            break;
        case 'poor':
            tipPercentage = 0.10;
            break;
        default:
            tipPercentage = 0;
    }

    return serviceAmount * tipPercentage;
}

// Main program
function main() {
    let serviceAmount = parseFloat(prompt("Please enter the dollar amount of the service:"));
    if (!verifyServiceAmount(serviceAmount)) {
        return;
    }

    let serviceQuality = prompt("Please enter the service quality ('great', 'ok', or 'poor'):");
    if (!verifyServiceQuality(serviceQuality)) {
        return;
    }

    let tipAmount = calculateTip(serviceAmount, serviceQuality);

    document.write("Service Amount: $" + serviceAmount.toFixed(2) + "<br>");
    document.write("Service Quality: " + serviceQuality + "<br>");
    document.write("Recommended Tip: $" + tipAmount.toFixed(2) + "<br>");
}

// Call the main function to run the program
main();
