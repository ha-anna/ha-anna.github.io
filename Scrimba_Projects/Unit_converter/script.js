function unitConverter() {
    let inputValue = document.getElementById("input-el").value;

    const meterEl = document.getElementById("meter-el");
    meterEl.textContent = inputValue;
    const footEl = document.getElementById("foot-el");
    footEl.textContent = inputValue;
    const literEl = document.getElementById("liter-el");
    literEl.textContent = inputValue;
    const gallonEl = document.getElementById("gallon-el");
    gallonEl.textContent = inputValue;
    const kiloEl = document.getElementById("kilo-el");
    kiloEl.textContent = inputValue;
    const poundEl = document.getElementById("pound-el");
    poundEl.textContent = inputValue;

    function footDec() {
        return (inputValue * 3.28084).toFixed(3);
    }

    function meterDec() {
        return (inputValue * 0.3048).toFixed(3);
    }

    function gallonDec() {
        return (inputValue * 0.2641722).toFixed(3);
    }

    function literDec() {
        return (inputValue * 3.785).toFixed(3);
    }

    function poundDec() {
        return (inputValue * 0.45359237).toFixed(3);
    }

    function kiloDec() {
        return (inputValue * 2.20462).toFixed(3);
    }

    const footDecEl = document.getElementById("foot-dec-el");
    footDecEl.textContent = footDec();

    const meterDecEl = document.getElementById("meter-dec-el");
    meterDecEl.textContent = meterDec();
    
    const gallonDecEl = document.getElementById("gallon-dec-el");
    gallonDecEl.textContent = gallonDec();

    const literDecEl = document.getElementById("liter-dec-el");
    literDecEl.textContent = literDec();

    const poundDecEl = document.getElementById("pound-dec-el");
    poundDecEl.textContent = poundDec();

    const kiloDecEl = document.getElementById("kilo-dec-el");
    kiloDecEl.textContent = kiloDec();
}

