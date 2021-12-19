import { formatDate, formatCurrency } from "./utils.js";

const transactionsRowsWrapper = document.querySelector('.transactions__table-rows-wrapper');

// LIST TRANSACTIONS ON UI
function listTransaction(transaction, index) {
    const transactionRow = document.createElement('div');
    transactionRow.classList.add('transactions__table-row');
    transactionRow.innerHTML = transactionInnerHTML(transaction);
    transactionsRowsWrapper.appendChild(transactionRow);
}

function transactionInnerHTML(transaction) {
    const signStyle = transaction.amount < 0 ? 'minus-prefix' : 'plus-prefix';
    const transactionRowTemplate = `
        <p class="f-body-M f-one-liner transactions__title">${transaction.title}</p>
        <p class="f-body-M f-medium f-one-liner transactions__date">${formatDate(transaction.date)}</p>
        <p class="f-body-M f-medium f-one-liner transactions__amount ${signStyle}">${formatCurrency(transaction.amount)}</p>
    `;
    return transactionRowTemplate;
}

function listAllTransactions(transactionsData) {
    transactionsData.forEach(transaction => listTransaction(transaction));
}

function clearAllTransactions() {
    transactionsRowsWrapper.innerHTML = '';
}

// ADD A NEW TRANSACTION
function addTransaction(transactionData, transactionsData) {
    transactionsData.push(transactionData);
}

export { addTransaction, listAllTransactions, clearAllTransactions };