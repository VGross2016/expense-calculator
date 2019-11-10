'use strict';

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц? \n(Введите число. Не может быть пустым!)", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");

        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

            console.log ("done");
            appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }
      }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья НЕобязательных расходов");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    checkSavings: function() {
        if( appData.savings == true) {
            let save = +prompt ("Какова сумма накоплений?"),
                procent = +prompt("Под какой процент?");

            appData.monthInCome = save/100/12*procent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthInCome);
        }
    },
    chooseIncome: function() {
        let items = prompt(`Что принесёт дополнительный доход? \n(Перечислите через запятую)`, '');
                while(typeof(items) != 'string' || items == "" || items == null){
                    items = prompt (`Дополнительный доход: \n(Не может быть пустым!)`, '');
                }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что то ещё?"));
        appData.income.sort();
        appData.income.forEach(function(items, i, income) {
            document.write(`Вы указали дополнительные источники: ` + (i+1) + ': ' + items + '<br>');
        });
    }
    
//    aboutData: function() {
//        for (let key in appData) {
//        document.write("Наша программа включает в себя данные: " + key + " - " + appData[key] + '<br>');
//        }
//    }
};





























