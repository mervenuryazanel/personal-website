function formuDenetle1() {


    var kullanciAdi = document.forms["Form"]["fkadi"].value;

    var sifre = document.forms["Form"]["fsifre"].value;


    if (kullanciAdi == "") {

        alert("Bu alan boş bırakılamaz.");

        return false;

    }


    else if (sifre == "") {

        alert("Bu alan boş bırakılamaz.");

        return false;

    }


    var y = document.getElementById("myEmail").pattern;

    document.getElementById("demo").innerHTML =y;        

}   
