function BMICalculator() {

}

BMICalculator.prototype.validNumber = function (obj) {
    if (obj.value <= 0) {
        alert("Value" + obj.name + "should be more than zero");
        return false;
    }
    console.log(obj.value);
    console.log();
    return true;
};

BMICalculator.prototype.calculateBMI = function () {
    var height = document.getElementsByName('height')[0];
    var weight = document.getElementsByName('weight')[0];
    console.log(height);
    if (this.validNumber(height) && this.validNumber(weight)){
    let bmi = parseInt(weight.value) / (parseInt(height.value) * parseInt(height.value));
    document.getElementById('output').textContent = bmi;
    }
};

const bmiCal = new BMICalculator();
document.getElementById("calculate").addEventListener("click", bmiCal.calculateBMI);