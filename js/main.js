$(".box").on("click",function(){
    $(this).nextUntil(".box-option").toggle()
})
$(".box-options li").on("click",function(){
    var texto = $(this).children('span').text();
    $(this).addClass("selected").siblings().removeClass("selected").parent().parent().hide().prev('.box').children('h2').text(texto);
})


var contador = 0;
var selec1 = 0;
var selec2 = 0;
$(".partido").on("click",function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    contador++;

    var texto = $(this).data("text")
    var candidato = $(this).data("candidato")
    var foto = $(this).data("foto")
    if(contador == 2){
        $(".partido").addClass("none")
        $('.button-dark').removeClass('inactive');
    }
    if(contador == 1 && selec2 == 0 || selec2 == 1 && selec1 == 0){
        selec1++
        $(this).addClass('selected1')
        $("#candidato1").addClass('selected')
        $("#candidato1 .cerrar").show();
        $("#candidato1 h4").text(texto);
        $("#candidato1 h2").text(candidato);
        $('#candidato1 .photo').prepend('<img src="'+foto+'" />')
    }
  
    if(contador == 2 && selec1 == 1 && selec2 == 0){
        selec2++
        if(selec2 == 1){
            $(this).addClass('selected2')
            $("#candidato2").addClass('selected')
            $("#candidato2 .cerrar").show();
            $("#candidato2 h4").text(texto);
            $("#candidato2 h2").text(candidato);
            $('#candidato2 .photo').prepend('<img src="'+foto+'" />')
            if(selec1 == 0 && selec2 ==1){
                $(this).addClass('selected1')
            }
        }
    }  
   
})


$(".candidato .cerrar").on("click",function(){
    if(contador < 2){  
        $('.button-dark').addClass('inactive');
    } 
    $(this).hide().siblings().empty();
})
$("#candidato1 .cerrar").on("click",function(){
    selec1 = selec1 - 1;
    contador = contador - 1;
    $(".partido").removeClass("none")
    if(selec1 == 0){
        $('.selected1').removeClass("selected").removeClass("selected1");
    }
})
$("#candidato2 .cerrar").on("click",function(){
    selec2 = selec2 - 1;
    contador = contador - 1;
    $(".partido").removeClass("none")
    if(selec2 == 0){
        $('.selected2').removeClass("selected").removeClass("selected2");
    }
})



$("#salud-tema").on('click',function(){
    $(".box-select.salud").show().siblings('.box-select').hide();
})
$("#economia-tema").on('click',function(){
    $(".box-select.economia").show().siblings('.box-select').hide();
})
$("#educacion-tema").on('click',function(){
    $(".box-select.educacion").show().siblings('.box-select').hide();
})
$("#seguridad-tema").on('click',function(){
    $(".box-select.seguridad").show().siblings('.box-select').hide();
})
$("#institucional-tema").on('click',function(){
    $(".box-select.institucional").show().siblings('.box-select').hide();
})
$("#social-tema").on('click',function(){
    $(".box-select.social").show().siblings('.box-select').hide();
})

$("#comparar, .cont-partidos li a").on("click",function(e){
    e.preventDefault();
    var partido1 = $(".selected1").data("text")
    var candidato1 = $(".selected1").data("candidato")
    var foto1 = $(".selected1").data("foto")
    var partidoimagen1 = $(".selected1 img").attr('src');

    $("#propuesta1 .candidato-perfil h4").text(candidato1);
    $("#propuesta1 .candidato-perfil span").text(partido1);
    $("#propuesta1 .candidato-perfil .foto-candidato img").attr("src",foto1);
    $("#propuesta1 .candidato-perfil .partido-icono").attr("src",partidoimagen1);


    var partido2 = $(".selected2").data("text")
    var candidato2 = $(".selected2").data("candidato")
    var foto2 = $(".selected2").data("foto")
    var partidoimagen2 = $(".selected2 img").attr('src');

    $("#propuesta2 .candidato-perfil h4").text(candidato2);
    $("#propuesta2 .candidato-perfil span").text(partido2);
    $("#propuesta2 .candidato-perfil .foto-candidato img").attr("src",foto2);
    $("#propuesta2 .candidato-perfil .partido-icono").attr("src",partidoimagen2);


})
$("#comparar").on("click",function(){
    $(".cont-escena2").show();
    $(".cont-escena1").hide();
})
$("#cerrarEscena2").on("click",function(){
    $(".cont-escena2").hide();
    $(".cont-escena1").show();
})