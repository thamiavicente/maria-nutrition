var searchField = document.querySelector("#search-table");
searchField.addEventListener("input", function(){
    var patients = document.querySelectorAll(".patient");
   
    if (this.value.length > 0){
        for (var i = 0; i < patients.length; i++){
            var patient = patients[i];

            var tdName = patient.querySelector(".info-name");
            var name = tdName.textContent;

            var expression = new RegExp(this.value, "i");

            if (!expression.test(name)){
                patient.classList.add("invisible");
            } else {
                patient.classList.remove("invisible");
            }

            /* ----- Outro jeito de fazer isso -----
            var comparation = name.substr(0,this.value.lenght);
            var comparationSmallLetters = comparation.toLowerCase();
            var textInputSmallLetters = this.value.toLowerCase();
            if (!(this.value == comparation)) {
                patient.classList.add("invisible");
            } else {
                patient.classList.remove("invisible");
            }
            */
        }
    } else {
        for (var i = 0; i < patients.length; i++){
            var patient = patients[i];
            patient.classList.remove("invisible");
        }
    }
});