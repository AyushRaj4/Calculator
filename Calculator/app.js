const display = document.querySelector("#div1");
const allButtons = document.querySelectorAll("button");
let ans = "";

for (let button of allButtons) {
    button.addEventListener("click", function () {
        if (this.innerText === "AC" || this.innerText === "DEL") {
            if (this.innerText == "AC") {
                display.innerText = "";
                ans = "";
            }
            else {
                ans = ans.slice(0, ans.length - 1);
                display.innerText = display.innerText.slice(0, display.innerText.length - 1);
            }
        }
        
        else if (this.innerText === "=") {
            if (display.innerText === "ERROR" || display.innerText === "ERRO" || display.innerText === "ERR" || display.innerText === "ER" || display.innerText === "E")
                return;
            try {
                ans = eval(ans).toString();
                display.innerText = ans;
            }
            catch (e) {
                ans = "";
                display.innerText = "ERROR";
            }
        }

        else {
            if (display.innerText === "ERROR" || display.innerText === "ERRO" || display.innerText === "ERR" || display.innerText === "ER" || display.innerText === "E")
                return;
            if (!isNaN(parseInt(this.innerText))) {     // checking if string is number
                ans += this.innerText;
                display.append(this.innerText);
            }
            else {
                if (this.innerText === "×")
                    ans += "*"
                else if (this.innerText === "÷")
                    ans += "/";
                else if (this.innerText === "-" || this.innerText === "+")
                    ans += this.innerText;
                else {
                    if (this.innerText === "π")
                        ans += "3.14159";
                    else if (this.innerText === ".")
                        ans += ".";
                    else
                        ans += "2.718";
                    display.append(this.innerText);
                    return;
                }
                display.append(" " + this.innerText + " ");
            }
        }
    });
}
