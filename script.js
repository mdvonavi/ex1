var money = +(prompt("Ваш бюджет на месяц?", "100000"));
var time = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");
var exp1 = prompt("Введите обязательную статью расходов в этом месяце", "Еда");
var val1 = +(prompt("Во сколько обойдется?", "1000"));
var exp2 = prompt("Введите обязательную статью расходов в этом месяце", "Аренда");
var val2 = +(prompt("Во сколько обойдется?", "1000"));
var appData = {
    budget : money,
    timeData : time,
    expenses : {
        exp1 : val1,
        exp2 : val2
    },
    optionalExpenses : {},
    income : {},
    savings : false
};
alert("В день Вы можете потратить " + ((appData.budget - appData.expenses.exp1 - appData.expenses.exp2)/30).toFixed(2) + " рублей");