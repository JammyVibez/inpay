document.addEventListener("DOMContentLoaded", function () {
    let balance = 5000;
    const balanceElement = document.getElementById("balance-amount");
    const transactionList = document.getElementById("transaction-list");

    function updateBalance() {
        balanceElement.textContent = `$ ${balance.toFixed(2)}`;
    }

    function addTransaction(type, amount) {
        const transactionItem = document.createElement("li");
        transactionItem.textContent = `${type}: $${amount.toFixed(2)}`;
        transactionList.prepend(transactionItem);
    }

    document.getElementById("deposit-btn").addEventListener("click", function () {
        const amount = parseFloat(prompt("Enter deposit amount:"));
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            addTransaction("Deposit", amount);
            updateBalance();
        } else {
            alert("Invalid amount.");
        }
    });

    document.getElementById("withdraw-btn").addEventListener("click", function () {
        const amount = parseFloat(prompt("Enter withdrawal amount:"));
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            addTransaction("Withdraw", amount);
            updateBalance();
        } else {
            alert("Invalid or insufficient funds.");
        }
    });

    document.getElementById("community-btn").addEventListener("click", function () {
        window.open("https://chat.whatsapp.com/YOUR_COMMUNITY_LINK", "_blank");
    });

    document.getElementById("admin-btn").addEventListener("click", function () {
        window.location.href = "mailto:admin@inpay.com";
    });

    updateBalance();
});
