var importButton = document.querySelector("#import-patient");
importButton.addEventListener("click", function(){
    var xhr = new XMLHttpRequest(); //busca dados através de uma requisição hhttp

    fetch("https://thamiavicente.github.io/maria-nutrition/api/patients.json") //puxa a api
    .then(function(answer){ //entao...
        return answer.json() //retorne o conteudo e transforme em json
    })
    .then(function(patients){ //entao...
        patients.forEach(function(paciente){ //para cada paciente 
        addPatientInTable(paciente); //adicione o paciente na tabela
        })
    })
    .catch(function(erro){ //pegue os erros
        var ajaxError = document.querySelector("#ajax-error")
        ajaxError.classList.remove("invisible"); //e se houver remova a classe invisivel
    })

    // ----- Outro jeito de fazer isso: -----

    // xhr.open("GET", "https://thamiavicente.github.io/nutricionista-aparecida/api/patients.json"); //Abre o link e pega as informações

    // xhr.addEventListener("load", function(){ //quando o conteúdo é carregado, a função é executada
        
    //     var ajaxError = document.querySelector("#ajax-error")

    //     if (xhr.status == 200){
    //         var answer = xhr.responseText; //adiciona o que foi carregado a uma variável
    //         var patients = JSON.parse(answer); //converte o que foi carregado para um objeto javascript
    
    //         console.log(patients);
    
    //         patients.forEach(function(paciente){
    //             addPatientInTable(paciente);            
    //         });
    //     } else {
    //         ajaxError.classList.remove("invisible");
    //     }
        
       
    // });

    // xhr.send();
});

