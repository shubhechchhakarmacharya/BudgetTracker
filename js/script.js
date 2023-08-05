document.getElementById('incomeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const incomeDesc = document.getElementById('incomeDesc').value;
    const incomeAmt = document.getElementById('incomeAmt').value;
    addTransaction('income', incomeDesc, incomeAmt);
  });
  
  document.getElementById('expenseForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const expenseDesc = document.getElementById('expenseDesc').value;
    const expenseAmt = document.getElementById('expenseAmt').value;
    addTransaction('expense', expenseDesc, expenseAmt);
  });
  
//   function addTransaction(type, description, amount) {
//     // Send a POST request to your server to add the transaction to the database
//     // Update the UI to display the newly added transaction in the table
//   }
  