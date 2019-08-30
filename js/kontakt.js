  let greska_mail = true;
  let greska_ime = true;
  let greska_poruka = true;
    function mail() {
      var test_mail = /^[a-z0-9]+_?([.]?[a-z0-9]+)*@[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,6}$/;
      var tekst_mail = document.getElementById("inputEmail").value;
      var rezultat_mail = tekst_mail.match(test_mail);
      var poruka_mail = "Pogrešno ste uneli e-mail adresu!";
      if(rezultat_mail === null) {
        document.getElementById("notregex_mail").innerHTML = poruka_mail;
        document.getElementById("inputEmail").style.borderColor = "#ff0000";
        greska_mail = true; //postoji greska u mail-u
      }
      else {
        document.getElementById("notregex_mail").innerHTML = "";
        document.getElementById("inputEmail").style.borderColor = "#777";
        greska_mail = false; //mail je dobar
      }
    }
    function ime() {
      var test_ime = /^[a-zA-Z ]{2,40}$/;
      var tekst_ime = document.getElementById("inputName").value;
      var rezultat_ime = tekst_ime.match(test_ime);
      var poruka_ime = "Pogrešno ste uneli ime! Molimo unesite Vaše ime.";
      if(rezultat_ime == null) {
        document.getElementById("notregex_ime").innerHTML = poruka_ime;
        document.getElementById("inputName").style.borderColor = "#ff0000";
        greska_ime = true; //postoji greska u imenu
      }
      else {
        document.getElementById("notregex_ime").innerHTML = "";
        document.getElementById("inputName").style.borderColor = "#777";
        greska_ime = false; //ime je dobro
      }
    }

    function poruka() {
      var test_poruka = /^[ -~\n]{1,800}$/;
      var tekst_poruka = document.getElementById("inputMsg").value;
      var rezultat_poruka = tekst_poruka.match(test_poruka);
      var poruka_poruka = "Pravilno unesite tekst poruke.";
      if(rezultat_poruka == null) {
        document.getElementById("notregex_poruka").innerHTML = poruka_poruka;
        document.getElementById("inputMsg").style.borderColor = "#ff0000";
        greska_poruka = true; //postoji greska u poruci
      }
      else {
        document.getElementById("notregex_poruka").innerHTML = "";
        document.getElementById("inputMsg").style.borderColor = "#777";
        greska_poruka = false; //poruka je dobra
      }
    }

  function proveri(){
if (greska_poruka||greska_ime||greska_mail) { //ako postoji bar jedna greska odradi sledecu liniju koda
  event.preventDefault();//nemoj da submitujes
    mail();
    ime();
    poruka();
}
else {  //ako je sve ok submituj formu
    mail();
    ime();
    poruka();
    }
  }