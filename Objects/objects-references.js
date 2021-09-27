let myAccount = {
    name: 'Aaron',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount){
    account.expenses = account.expenses + amount
    //console.log(account)
}

let addIncome = function (account, amount){
    account.income = account.income + amount
    //console.log(account)
}

let resetAccount = function (account){
    account.income = 0
    account.expenses = 0
    //console.log(account)
}

let getAccountSummary = function (account){
    console.log(`The account of ${account.name} has $${account.income - account.expenses}. Income = $${account.income}. Expense + $${account.expenses}`)
}

addIncome(myAccount, 1000)
addExpense(myAccount, 200)
addExpense(myAccount, 300)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)