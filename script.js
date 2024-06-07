


function calculateSalary() {
    let hra, da, pf, pt, hi
   
    const basicSalary = parseFloat(prompt("Enter Basic salary:"))
document.getElementById("basicSalary").textContent=basicSalary



    if (basicSalary <= 10000) {
        hra = basicSalary * 0.2
        da = basicSalary * 0.8
        pf = basicSalary * 0.08
    } else if (basicSalary > 10000 && basicSalary <= 20000) {
        hra = basicSalary * 0.25
        da = basicSalary * 0.9
        pf = basicSalary * 0.12
    } else {
        hra = basicSalary * 0.3
        da = basicSalary * 0.95
        pf = 0
    }

    pt = 200
    hi = 1800;
    document.getElementById("hra").textContent=hra
    document.getElementById("da").textContent=da
    document.getElementById("pf").textContent=pf
    document.getElementById("pt").textContent=pt
    document.getElementById("hi").textContent=hi

    let gross=basicSalary+hra+da
    document.getElementById("gross").textContent=gross

    let deduction=pf+pt+hi
    document.getElementById("deduction").textContent=deduction

    let net=gross-deduction
    document.getElementById("net").textContent=net

    function numberToWords(number) {
        const ones = ["", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "];
        const tens = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];

        if (number < 20) return ones[number];
        if (number < 100) return tens[Math.floor(number / 10)] + ones[number % 10];
        if (number < 1000) return ones[Math.floor(number / 100)] + "hundred " + numberToWords(number % 100);
        if (number < 1000000) return numberToWords(Math.floor(number / 1000)) + "thousand " + numberToWords(number % 1000);
        if (number < 1000000000) return numberToWords(Math.floor(number / 1000000)) + "million " + numberToWords(number % 1000000);
    }
    document.getElementById("word").textContent=numberToWords(net)
    
}
calculateSalary()
let gross=basicSalary+hra+da
