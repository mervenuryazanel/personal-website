    function formuDenetle() {

    var adSoyad = document.forms["Form"]["fadsoyad"].value;

    var email = document.forms["Form"]["femail"].value;

    var kullanciAdi = document.forms["Form"]["fkadi"].value;

    var sifre = document.forms["Form"]["fsifre"].value;

    var telNo= document.forms["Form"]["ftelNo"].value;

    var dogumTarihi = document.forms["Form"]["fdogumTarihi"].value;

    var yorum = document.forms["Form"]["fyorum"].value;

 

    if (adSoyad == " ") {

        alert("Bu alan boş bırakılamaz.");

        return false;

    }

    else if (email == " ") {

        alert("Bu alan boş bırakılamaz.");

        return false;

    }

    else if (kullanciAdi == " ") {

        alert("Bu alan boş bırakılamaz.");

        return false;

    }

    else if (sifre == " ") {

        alert("Bu alan boş bırakılamaz.");

        return false;

    }

    else if (telNo == " ") {

        alert("Bu alan boş bırakılamaz.");

        return false;

    }

    else if (dogumTarihi == " ") {

        alert("Bu alan boş bırakılamaz.");

        return false;

    }

    else if (yorum == " ") {

        alert("Bu alan boş bırakılamaz.");

        return false;

    }

 

    var y = document.getElementById("myEmail").pattern;

    document.getElementById("demo").innerHTML =y;        

}   
