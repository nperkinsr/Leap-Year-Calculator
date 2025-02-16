function isLeap(year) {
    
    var isDividedByFour = year % 4 === 0;
    
    if (isDividedByFour) {
        var isDividedByOneHundred = year % 100 === 0;
        
        if (isDividedByOneHundred) {
            var isDividedByFourHundred = year % 400 === 0;

            if (isDividedByFourHundred) {
                return "🐸 Leap year.";
            } else {
                return "❌ Not leap year.";
            }
        } else {
            return "🐸 Leap year.";
        }
    } else {
        return "❌ Not leap year.";
    }
}

function checkLeapYear() {
    let input = document.getElementById("yearInput").value;
    let result = document.getElementById("result");

    if (!/^\d+$/.test(input)) {
        result.innerHTML = "🙈 Please enter a valid whole number!";
        result.style.color = "#EAEAEA";
        return;
    }

    let year = Number(input);

    if (year <= 0) {
        result.innerHTML = "🙈 Please enter a positive year!";
        result.style.color = "#EAEAEA"; 
        return;
    }

    let message = isLeap(year);
    result.innerHTML = message;
    result.style.color = message === "🎉  Leap Year!" ? "#9DC08B" : "#FF2E63";  // Green for leap year, red for not a leap year
}
