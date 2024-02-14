'use strict'
function calculateLove() {
    let person = document.getElementById("personName").value.trim();
    let partner = document.getElementById("patnerName").value.trim();
    let randRange = Math.floor(Math.random() * 101);
    //validate

    try {
        if (person == "" || partner == "") throw "Input required";
        if (!isNaN(person) || !isNaN(partner)) throw "Enter correct details";
        if (person.length <= "5" || partner.length <= "5")
            throw "person name is short";

        function bothName(pname, ptner) {
            return pname + " love for " + ptner;
        }

        let profile = bothName(person, partner);

        function lovecalculator(rand) {
            return rand;
        }

        let loveRange = lovecalculator(randRange);

        function fullres(pname, range) {
            return pname + " is " +  "<b>" + range + "%" + "<b>";
        }

        let fullresponse = fullres(profile, loveRange);

        function checkscore() {
            let randur = Math.floor(Math.random() * 4)
            let randing = Math.floor(Math.random() * 4)
            document.getElementById("err").innerHTML = "";
            document.getElementById("rsa").style.display = "block"
            if (randRange <= 40) {
                document.getElementById("parares").innerHTML = fullresponse;
                if (randur == "3") {
                    document.getElementById("resultimage").src = "lachen-geburtstag.gif";
                } else if (randur == "2") {
                    document.getElementById("resultimage").src = "triste.gif";
                } else if (randur == "1") {
                    document.getElementById("resultimage").src = "crying-53.gif";
                } else {
                    document.getElementById("resultimage").src = "lachen-geburtstag.gif";
                }
            } else if (randRange <= 60) {
                document.getElementById("parares").innerHTML = fullresponse;
                document.getElementById("resultimage").src = "freaking-out-emoji.gif";
            } else if (randRange <= 80) {
                document.getElementById("parares").innerHTML = fullresponse;
                document.getElementById("resultimage").src = "hearts-heart.gif";
            } else {
                document.getElementById("parares").innerHTML = fullresponse;
                if (randing == "3") {
                    document.getElementById("resultimage").src = "winnie-the-pooh-pooh-bear.gif";
                } else if (randur == "2") {
                    document.getElementById("resultimage").src = "love-virtual.gif";
                } else if (randur == "1") {
                    document.getElementById("resultimage").src = "giphy.gif";
                } else {
                    document.getElementById("resultimage").src = "winnie-the-pooh-pooh-bear.gif";
                }
            }
        }

        checkscore();
    } catch (error) {
        document.getElementById("err").innerHTML = error;
    } finally {
        document.getElementById("personName").value = '';
        document.getElementById("patnerName").value = '';
    }
}

function opendiv() {
    let div = document.getElementById("devlo");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function closediv() {
    let div = document.getElementById("devlo");
    if (div.style.display === "block") {
        div.style.display = "none";
    }
}

function chage(){
    let btn = document.querySelector('body');
    if (btn.style.backgroundColor === 'lightgrey') {
        document.getElementById('netstatue').src = 'eye.svg'
        btn.style.backgroundColor = '#141414'
    } else {
        document.getElementById('netstatue').src = 'eye-slash.svg'
        btn.style.backgroundColor = 'lightgrey'
        
    }
}




