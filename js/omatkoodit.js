//aletaan suorittaa kun HTML-sivu on kokonaan luettu selaimeen
$(document).ready(function () {
//    $('#piilota').click(function(){
//        if ($(this).html() === "-"){
//            $(".sat-luvut").hide();
//            $(this).html("+");
//        }else {
//            $(".sat-luvut").show();
//            $(this).html("-");
//        }
//    });
//    

    $(".piilota").click(function () {
        var piilotus = $(this).attr("data-piilota");
        if ($(this).html() === "-") {
            $("." + piilotus).hide();
            $(this).html("+");
        } else {
            $("." + piilotus).show();
            $(this).html("-");
        }
    });

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    $("#heitto1").click(function () {
        var silmaluku = getRndInteger(1,6);
        $("#noppa1").html(silmaluku);
    });
    
    $("#heitto2").click(function () {
        var silmaluku = getRndInteger(1,6);
        if (silmaluku === 1) {
            $("#noppa2").html("<img src='img/noppa1.png' class='img-fluid'/>");
        }
        else if (silmaluku === 2) {
            $("#noppa2").html("<img src='img/noppa2.png' class='img-fluid'/>");
        } else if (silmaluku === 3){
            $("#noppa2").html("<img src='img/noppa3.png' class='img-fluid'/>");
        } else if (silmaluku === 4){
            $("#noppa2").html("<img src='img/noppa4.png' class='img-fluid'/>");
        } else if (silmaluku === 5){
            $("#noppa2").html("<img src='img/noppa5.png' class='img-fluid'/>");
        } else if (silmaluku === 6) {
           $("#noppa2").html("<img src='img/noppa6.png' class='img-fluid'/>");
        }
        
    });
    
    var nopat = ["",
        "<img src='img/noppa1.png' class='img-fluid'/>",
        "<img src='img/noppa2.png' class='img-fluid'/>",
        "<img src='img/noppa3.png' class='img-fluid'/>",
        "<img src='img/noppa4.png' class='img-fluid'/>",
        "<img src='img/noppa5.png' class='img-fluid'/>",
        "<img src='img/noppa6.png' class='img-fluid'/>"
    ];
    
    function arvonta (){
        var silmaluku = getRndInteger (1,6);
        $("#noppa3").html(nopat[silmaluku]);
    }
    
    $("#heitto3").click(function () {
  //  var silmaluku = getRndInteger (1,6);
  //      $("#noppa3").html(nopat[silmaluku]);
    setTimeout(arvonta, 2000);
    $("#noppa3").html("");
    });
    var yhteensa = 0;
    
    $("#arvonta").click(function(){
      var min = Number($("#minarvo").val()); //lukee min-arvo kentästä datan  
      var max = Number($("#maxarvo").val());
              var luku = getRndInteger (min, max);
              $("#luvut").append(luku + " ");
              
              yhteensa++;
              $("#lkm").html(yhteensa);
    });
    
    $(".vastaus").click(function(){
         //estaVastaus($(this), "vastaus");
    var vastaus = $(this).attr("data-vastaus");
    if(vastaus === "oikein") {
        //alert("oikein");
        $(this).addClass("oikein");
    }
    else {
        //alert("väärin");
        $(this).addClass("vaarin");
        
    }
    });
    
    $(".kuva-vastaus").click(function(){
        estaVastaus($(this), "kuva-vastaus");
        var vastaus = $(this).attr("data-vastaus");
    if(vastaus === "oikein") {
        //alert("oikein");
        $("#paikka").html("<img src='img/oikein.png' class='img-fluid'>");
    }
    else {
        //alert("väärin");
         $("#paikka").html("<img src='img/vaarin.png' class='img-fluid'>");  
    } 
    });
    
    function estaVastaus(elementti, luokka){
      var vanhempi = elementti.parent(); //hae vanhempi
      vanhempi.children().each(function(){ //hae lapset ja käy kaikki lapset läpi
     $(this).removeClass("klikkaa");
     $(this).removeClass(luokka);
         $(this).off("click"); 
      });
        
    }
    
    $(".kukat").click(function(){
        var kukka = $(this).html();
        $("#kaunein").html(kukka);
        
    });
    
    $("#peru").click(function(){
        $("#kaunein").html("");
    });
    
//    $("#taulukko").click(function(){
//        $(".numero-a").each(function(){
//            var luku = $(this).val();
//           if (luku == ""){
//               $(this).addClass("vaarin");
//              
//           } else {
//               luku = Number(luku);
//               if (luku > 10) {
//               $(this).addClass("oikein");
//           }
//        
//        });
       
        
        var edellinen = 2;
        
        $("#taulukko2").click(function(){
           $(".numero-b").each(function(){
               var luku = Number($(this).val());
               if(luku > edellinen){
                   $(this).addClass("oikein");
               } 
               else {
                   $(this).addClass("vaarin");
               }
               
               edellinen = luku; //seuraavaa kierrosta varten
           }); 
        });
        
    function tyhjennaTaulukko (luokka) {
    // $(".numero-a").each()...
        $(luokka).each(function(){
        $(this).removeClass("oikein");
        $(this).removeClass("vaarin");
        $(this).val("");
    });
    }
    
    $("#alusta2").click(function(){
        tyhjennaTaulukko(".numero-a");
           
    });
    
     $("#alusta2").click(function(){
        tyhjennaTaulukko(".numero-b");
    });    
});



