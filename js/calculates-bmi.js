var patients = document.querySelectorAll(".patient");

for (var i = 0; i < patients.length; i++){ 

    var patient = patients[i];

    var tdWeight = patient.querySelector(".info-weight");
    var weight = tdWeight.textContent;

    var tdHeight = patient.querySelector(".info-height");
    var height = tdHeight.textContent;

    var tdBmi = patient.querySelector(".info-bmi") // busca a td de bmi

    var validHeight = validatesHeight(height);
    var validWeight = validatesWeight(weight);

    if(!validWeight) {
        validWeight = false;
        tdBmi.textContent = "invalid weight";
        patient.classList.add("patient-invalid");
    }
    
    if(!validHeight) {
        validHeight = false;
        tdBmi.textContent = "invalid height";
        patient.classList.add("patient-invalidd");
    }
    
    if(validWeight && validHeight) {
        var bmi = calculatesBmi(weight, height); // calcula o bmi
        tdBmi.textContent = bmi; // sobe o bmi para a tabela com apenas 2 casa decimais
    }
 
}

function calculatesBmi (weight, height) {
    var bmi = 0;
    bmi = weight / (height * height);
    return bmi.toFixed(2);
}

function validatesWeight (weight){
    if (weight > 0 && weight < 300){
        return true;
    }else{
        return false;
    }
}

function validatesHeight (height){
    if (height > 0 && height <= 3.00){
        return true;
    }else{
        return false;
    }
}