let money = 1000
let cash = 1000
let log = ""
let curr_count = 0
let curr_log = ""
window.addEventListener('DOMContentLoaded', () => {
    let dom_account = document.getElementById('money');
    let dom_cash = document.getElementById('cash');
    dom_account.value = money
    dom_cash.value = cash
})

function Change() {
    let Current_account = document.querySelector('input[name=Current-account]').value
    let dom_account = document.getElementById('money')
    dom_account.value = Current_account

    let Current_balance = document.querySelector('input[name=Current-balance]').value
    let dom_cash = document.getElementById('cash')
    dom_cash.value = Current_balance

    money = Current_account
    cash = Current_balance
    console.log(money)
    console.log(cash)
    curr_count += 1
    logarithm("success")
}

function logarithm(action) {
    let dom_log = document.getElementById('log_area')
    if (action=="error_withdraw") {
        dom_log.value += `${curr_count}, Couldn't withdraw entered balance. (Insufficient account balance)\n`
        console.log("error_withdraw")
    }else if (action=="error_deposite"){
        dom_log.value += `${curr_count}, Couldn't deposite entered balance. (Insufficient account balance)\n`
        console.log("error_deposite")
    }else {
        dom_log.value += `${curr_count}, Current account balance: ${money}, Current cash balance: ${cash}\n`
    }
}

function Proceed() {
    let selectMode = document.getElementById('selecter')
    let Mode = selectMode.value
    console.log(Mode)
    let balance = document.querySelector('input[name=oper_balance').value
    console.log(balance)

    let dom_account = document.getElementById('money')
    let dom_cash = document.getElementById('cash')
    if (!balance || balance <= 0){
        return
    }
    curr_count += 1
    //validation and deposite / withdraw
    if (Mode == "Deposite" && Number(balance)<=Number(cash)) {
        money = Number(money) + Number(balance)
        cash = Number(cash) - Number(balance)
        dom_account.value = money
        dom_cash.value = cash
        logarithm("success")
    } else if (Mode == "Withdraw" && Number(balance)<=Number(money) ) {
        money = Number(money) - Number(balance)
        cash = Number(cash) + Number(balance)
        dom_account.value = money
        dom_cash.value = cash
        logarithm("success")
    } else{
        if (Mode == "Withdraw") {
            logarithm("error_withdraw")
        }else if (Mode == "Deposite"){
            logarithm("error_deposite")
        }
    }

}