 function calculateLove() {
    let person = document.getElementById("personName").value.trim();
    let partner = document.getElementById("patnerName").value.trim();
    let randRange = Math.floor(Math.random() * 101)
    //validate

    try {
        if (person == "" || partner == "") throw "Input required";
        if (!isNaN(person) || !isNaN(partner)) throw "Enter correct details"
        if(person.length <= "5" || partner.length <= "5") throw "person name is short" 

        function bothName(pname, ptner) {
            return pname + " and " + ptner;
        }

        let profile = bothName(person, partner);

        function lovecalculator(rand) {
            return rand
        }
 
        let loveRange = lovecalculator(randRange);

        function fullres(pname, range) {
            return "love percentage between " + pname + " is " + range + "%";
        }

        let fullresponse = fullres(profile, loveRange)

        function checkscore() {
            document.getElementById('err').innerHTML = "";
            if (randRange <= 40) {
                document.getElementById("parares").innerHTML = fullresponse
                document.getElementById("resultimage").src = 'crying-53.gif'
            } else if (randRange <=60 ) {
                document.getElementById("parares").innerHTML = fullresponse
                document.getElementById("resultimage").src = 'freaking-out-emoji.gif'
            } else if (randRange <= 80) {
                document.getElementById("parares").innerHTML = fullresponse
                document.getElementById("resultimage").src = 'hearts-heart.gif'
            } else {
                document.getElementById("parares").innerHTML = fullresponse
                document.getElementById("resultimage").src = 'winnie-the-pooh-pooh-bear.gif'
            }
        }

        checkscore()


    } catch (error) {
        document.getElementById("err").innerHTML = error;
    } finally {
        document.getElementById("personName").value = person
        document.getElementById("patnerName").value = partner
    }

  
 }

 function opendiv() {
    let div = document.getElementById('devlo')
    if (div.style.display === "none") {
        div.style.display = "block"
    } else {
        div.style.display = "none"
    }
}