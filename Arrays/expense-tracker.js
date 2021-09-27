const account = {
    name : 'Aaron Fernandez',
    expenses : [],
    incomes: [],
    addExpense: function (descri, amnt){
        let expense={description : descri,
            amount: amnt
        }
        this.expenses.push(expense)
    },
    getAccountSummary: function (){ 
        let totalExpenses = 0
        let totalIncomes = 0
        this.expenses.forEach(function(value,index){
            totalExpenses = totalExpenses + value.amount
        })
        this.incomes.forEach(function(value,index){
            totalIncomes = totalIncomes + value.amount
        })
        return `${this.name} has $${totalIncomes-totalExpenses} in balance. $${totalIncomes} in incomes and $${totalExpenses} in Expenses`;
    },
    addIncome: function (descri, amnt){
        let expense={description : descri,
            amount: amnt
        }
        this.incomes.push(expense)
    }
}


// Expense -> description, amount 
// Add Expense -> description, amount
// getAccountSummary  ->total up all expenses  

account.addExpense('Rent',950)
account.addExpense('Coffe',250)
account.addIncome('Salary',3400)
console.log(account.getAccountSummary())
