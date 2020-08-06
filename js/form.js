var addButton = document.querySelector("#add-patient");

addButton.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-add");
    
    var patient = getPatientFromForm(form); //Cria o objeto paciente com os valores inputados

    var errors = validatesPatient(patient);

    if (errors.length > 0){
        showErrorMessages(errors);
        return;
    }

    addPatientInTable(patient);

    form.reset();

    var errorMessage = document.querySelector("#errors-message");
    errorMessage.innerHTML = "";
});

function addPatientInTable(paciente){
    var patientTr = setUpTr(paciente);
    var table = document.querySelector("#table-patients");
    table.appendChild(patientTr);
}

function getPatientFromForm(form){
    var patient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        bmi: calculatesBmi(form.weight.value, form.height.value)     
    }

    return patient;
}

function setUpTd (data, className){
    var td = document.createElement("td");
    td.classList.add(className);
    td.textContent = data;

    return td;
}

function setUpTr (paciente){
    //Cria a TR
    var patientTr = document.createElement("tr");
    patientTr.classList.add("patient");
    // var patientTr = document.createElement("tr");
    // patientTr.classList.add("patient");

    //Cria as TDs e adiciona dentro da TR
    // patientTr.appendChild(setUpTd(paciente.nome, "info-name"));
    // patientTr.appendChild(setUpTd(paciente.peso, "info-weight"));
    // patientTr.appendChild(setUpTd(paciente.altura, "info-height"));
    // patientTr.appendChild(setUpTd(paciente.gordura, "info-fat"));
    // patientTr.appendChild(setUpTd(paciente.imc, "info-bmi"));
    patientTr.appendChild(setUpTd(patient.name, "info-name"));
    patientTr.appendChild(setUpTd(patient.weight, "info-weight"));
    patientTr.appendChild(setUpTd(patient.height, "info-height"));
    patientTr.appendChild(setUpTd(patient.fat, "info-fat"));
    patientTr.appendChild(setUpTd(patient.bmi, "info-bmi"));

    //Retorna a TR
    return patientTr;

}

function validatesPatient(patient){
    var errors = [];

    if (patient.name.length == 0){
        errors.push("The name field can't be empty.")
    }

    if (patient.weight.length == 0){
        errors.push("The weight field can't be empty.")
    }

    if (patient.height.length == 0){
        errors.push("The height field can't be empty.")
    }

    if (patient.fat.length == 0){
        errors.push("The fat field can't be empty.")
    }

    if (!validatesWeight(patient.weight)){
        errors.push("Invalid weight.")
    }

    if (!validatesHeight(patient.height)){
        errors.push("Invalid height.")
    }

    return errors;
}

function showErrorMessages(errors){
    var ul = document.querySelector("#errors-message");
    ul.innerHTML = "";

    errors.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}