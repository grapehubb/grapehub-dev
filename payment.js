// Aktuell gewählte Zahlungsmethode
let chosenMethod = null;

// Funktion: Zahlungsmethode auswählen
function selectMethod(method, element) {
    chosenMethod = method;

    // Alle Ränder zurücksetzen
    document.querySelectorAll('.pay-option').forEach(el => el.style.border = "none");

    // Den ausgewählten hervorheben
    element.style.border = "2px solid #8b5cf6";
}

// Funktion: Fake-Payment durchführen
function makeFakePayment() {
    const amountInput = document.getElementById('payment-amount');
    const amount = parseFloat(amountInput.value);

    if (!chosenMethod) {
        alert('Please select a payment method!');
        return;
    }

    if (!amount || amount <= 0) {
        alert('Enter a valid amount!');
        return;
    }

    // Balance aus localStorage holen
    let currentBalance = parseFloat(localStorage.getItem('balance')) || 0;

    // Balance erhöhen
    currentBalance += amount;
    localStorage.setItem('balance', currentBalance);

    alert('Payment successful via ' + chosenMethod + '!\nBalance updated.');

    // Zurück zum Dashboard
    window.location.href = 'index.html';
}
