var but = document.querySelector(".button");
var d3 = document.querySelector(".d1");
var zn = document.querySelector(".zn");
var d4 = document.querySelector(".d2");
var res = document.querySelector(".res");
var but = document.querySelector(".but");
let d1 = ""
let d2 = ""
let znak = ""
let result = ""

    but.addEventListener('click', (e)=>{
        if (znak == "" && e.target.className.includes("znak") == false) {
            if (e.target.className.includes("op") == true) {
                if (e.target.innerHTML == "+/-") {
                    d1 *= -1
                }
                if (e.target.innerHTML == "%") {
                    d1 /= 100
                }
                if (e.target.innerHTML == "sqrt") {
                    if (d1 > 0) {
                        d1 = Math.sqrt(d1);
                    } else {
                        alert("нет корня из не положительного числа");
                    }
                }
                if (e.target.innerHTML == "1/x") {
                    if (d1 != 0) {
                        d1 = 1 / d1;
                    } else {
                        alert("нельзя делить на 0");
                    }
                }
                if (e.target.innerHTML == "x2") {
                    d1 *= d1;
                }
                if (e.target.innerHTML == ",") {
                    d1 += "."
                }
            } 
            if (e.target.className.includes("dig") == true) {
                d1 += e.target.innerHTML;
                
            } 
            if (e.target.className.includes("del") == true) {
                if (e.target.innerHTML == "CE") {
                        d1 = ""
                } else {
                    d1 = Math.floor(d1 / 10)
                }
            
            }
        d3.innerHTML = Number(d1);
        } else if (result == "") {
            if (e.target.className.includes("znak") == true) {
                znak = e.target.innerHTML
                zn.innerHTML = znak
            }
            if (e.target.className.includes("op") == true) {
                if (e.target.innerHTML == "+/-") {
                    d2 *= -1
                }
                if (e.target.innerHTML == "%") {
                    d2 /= 100
                }
                if (e.target.innerHTML == "sqrt") {
                    if (d2 > 0) {
                        d2 = Math.sqrt(d2);
                    } else {
                        alert("нет корня из не положительного числа");
                    }
                }
                if (e.target.innerHTML == "1/x") {
                    if (d2 != 0) {
                        d2 = 1 / d2;
                    } else {
                        alert("нельзя делить на 0");
                    }
                }
                if (e.target.innerHTML == "x2") {
                    d2 *= d2;
                }
                if (e.target.innerHTML == ",") {
                    d2 += "."
                }
            } 
            if (e.target.className.includes("dig") == true) {
                d2 += e.target.innerHTML;
                
            } 
            if (e.target.className.includes("del") == true) {
                if (e.target.innerHTML == "CE") {
                        d2 = ""
                } else {
                    d2 = Math.floor(d2 / 10)
                }
            
            }
            d4.innerHTML = Number(d2);
            }
            if (e.target.innerHTML == "=") {
                    if (znak == "+") {
                        result = Number(d1) + Number(d2)
                    } else if (znak == "-") {
                        result = Number(d1) - Number(d2)
                    } else if (znak == "X") {
                        result = Number(d1) * Number(d2)
                    } else {
                        if (d2 != 0) {
                            result = Number(d1) / Number(d2)
                        } else {
                            alert("Делить на 0 нельзя!")
                        }
                    }
                    res.innerHTML = Number(result);
            }
            if (e.target.innerHTML == "C") {
                location.reload();
            }
        });