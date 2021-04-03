

$(".box").on("click",function(){
    $(this).nextUntil(".box-option").toggle()
})
$(".box-options li").on("click",function(){
    var texto = $(this).children('span').text();
    $(this).addClass("selected").siblings().removeClass("selected").parent().parent().hide().prev('.box').children('h2').text(texto);
})

$("#box-options-principal li").on('click', function(){
    var texto = $(this).children('span').text();
    var tema;
    if(texto == 'Salud'){
        tema = $(".box-select.salud .box h2").attr('data-tema');
    }
    if(texto == 'Economía'){
        tema = $(".box-select.economia .box h2").attr('data-tema');
    }
    if(texto == 'Educación'){
        tema = $(".box-select.educacion .box h2").attr('data-tema');
    }
    if(texto == 'Institucional'){
        tema = $(".box-select.institucional .box h2").attr('data-tema');
    }
    if(texto == 'Seguridad'){
        tema = $(".box-select.seguridad .box h2").attr('data-tema');
    }
    if(texto == 'Social'){
        tema = $(".box-select.social .box h2").attr('data-tema');
    }
    $(this).siblings().parent().parent().prev('.box').children('h2').attr('data-categoria', texto).attr('data-tema', tema);

})

$(".next-box .box-options li").on('click', function(){
    var dataid = $(this).attr('data-id');
    $("#selectedbox1").attr('data-tema',dataid);
    $(this).siblings().parent().parent().prev('.box').children('h2').attr('data-tema', dataid);
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
        $('#candidato1 .photo').css('background-color', '#FFFFFF').prepend('<img src="'+foto+'" />')
        $('#contTextPropuesta1 p').hide();
        $('#contTextPropuesta1 p[data-partido="'+texto+'"]').show();
    }
  
    if(contador == 2 && selec1 == 1 && selec2 == 0){
        selec2++
        if(selec2 == 1){
            $(this).addClass('selected2')
            $("#candidato2").addClass('selected')
            $("#candidato2 .cerrar").show();
            $("#candidato2 h4").text(texto);
            $("#candidato2 h2").text(candidato);
            $('#candidato2 .photo').css('background-color', '#FFFFFF').prepend('<img src="'+foto+'" />')
            $('#contTextPropuesta2 p').hide();
            $('#contTextPropuesta2 p[data-partido="'+texto+'"]').show();
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
    $(".box-select.salud").show().addClass('tema-activo').siblings('.box-select').removeClass('tema-activo').hide();
})
$("#economia-tema").on('click',function(){
    $(".box-select.economia").show().addClass('tema-activo').siblings('.box-select').removeClass('tema-activo').hide();
})
$("#educacion-tema").on('click',function(){
    $(".box-select.educacion").show().addClass('tema-activo').siblings('.box-select').removeClass('tema-activo').hide();
})
$("#seguridad-tema").on('click',function(){
    $(".box-select.seguridad").show().addClass('tema-activo').siblings('.box-select').removeClass('tema-activo').hide();
})
$("#institucional-tema").on('click',function(){
    $(".box-select.institucional").show().addClass('tema-activo').siblings('.box-select').removeClass('tema-activo').hide();
})
$("#social-tema").on('click',function(){
    $(".box-select.social").show().addClass('tema-activo').siblings('.box-select').removeClass('tema-activo').hide();
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




class Plan{
    constructor(partido, texto){
        this.partido = partido;
        this.texto = texto;
    }
}
class UI{
    llenarTexto(plan, contenido){
        const contenidoPartido = document.getElementById(contenido);
        const element = document.createElement('p')
        element.setAttribute("data-partido", plan.partido);
        element.innerHTML = `
            ${plan.texto}
        `
        contenidoPartido.appendChild(element);
    }
}


const urlExcel = "xlsx/";


/* CANDIDATOS A LA Propuestas */
/* set up XMLHttpRequest */
var urlPropuestas = urlExcel+"planes.xlsx";
var oReqPropuestas = new XMLHttpRequest();
oReqPropuestas.open("GET", urlPropuestas, true);
oReqPropuestas.responseType = "arraybuffer";

oReqPropuestas.onload = function(e) {
    var arraybufferPropuestas = oReqPropuestas.response;

    /* convert data to binary string */
    var data = new Uint8Array(arraybufferPropuestas);
    var arrPropuestas = new Array();
    for(var i = 0; i != data.length; ++i) arrPropuestas[i] = String.fromCharCode(data[i]);
    var bstr = arrPropuestas.join("");

    /* Call XLSX */
    var workbookPropuestas = XLSX.read(bstr, {type:"binary"});


    /* pestañas */
    let pestanaSalud = workbookPropuestas.SheetNames[0];
    let pestanaEconomia = workbookPropuestas.SheetNames[1];
    let pestanaEducacion = workbookPropuestas.SheetNames[2];
    let pestanaInstitucional = workbookPropuestas.SheetNames[3];
    let pestanaSeguridad = workbookPropuestas.SheetNames[4];
    let pestanaSocial = workbookPropuestas.SheetNames[5];
     
    /* Get worksheet */

    let worksheetPropuestas_partido_Salud = workbookPropuestas.Sheets[pestanaSalud];
    let jsonPropuestasPartidoSalud = XLSX.utils.sheet_to_json(worksheetPropuestas_partido_Salud,{raw:true});
    
    let worksheetPropuestas_partido_Economia = workbookPropuestas.Sheets[pestanaEconomia];
    let jsonPropuestasPartidoEconomia = XLSX.utils.sheet_to_json(worksheetPropuestas_partido_Economia,{raw:true});
    
    let worksheetPropuestas_partido_Educacion = workbookPropuestas.Sheets[pestanaEducacion];
    let jsonPropuestasPartidoEducacion = XLSX.utils.sheet_to_json(worksheetPropuestas_partido_Educacion,{raw:true});
    
    let worksheetPropuestas_partido_Institucional = workbookPropuestas.Sheets[pestanaInstitucional];
    let jsonPropuestasPartidoInstitucional = XLSX.utils.sheet_to_json(worksheetPropuestas_partido_Institucional,{raw:true});
    
    let worksheetPropuestas_partido_Seguridad = workbookPropuestas.Sheets[pestanaSeguridad];
    let jsonPropuestasPartidoSeguridad = XLSX.utils.sheet_to_json(worksheetPropuestas_partido_Seguridad,{raw:true});

    let worksheetPropuestas_partido_Social = workbookPropuestas.Sheets[pestanaSocial];
    let jsonPropuestasPartidoSocial = XLSX.utils.sheet_to_json(worksheetPropuestas_partido_Social,{raw:true});

    $("#comparar").on('click',function(){
        let datacategoria = $("#selectedbox1").attr('data-categoria');
        let datatema = $("#selectedbox1").attr('data-tema');

        if(datacategoria == 'Salud'){
            for(i in jsonPropuestasPartidoSalud){
                let salud_partidos = jsonPropuestasPartidoSalud[i]['Partidos']
                let salud_tema1 = jsonPropuestasPartidoSalud[i]['Lucha contra el COVID-19']
                let salud_tema2 = jsonPropuestasPartidoSalud[i]['Redes primarias de atención']
                let salud_tema3 = jsonPropuestasPartidoSalud[i]['Salud infantil y anemia']
                let salud_tema4 = jsonPropuestasPartidoSalud[i]['Sectores productivos']
                let salud_tema5 = jsonPropuestasPartidoSalud[i]['Mejoras para personal sanitario']
                let salud_tema6 = jsonPropuestasPartidoSalud[i]['Otras propuestas']
                let salud_tema7 = jsonPropuestasPartidoSalud[i]['Análisis por partido']

                if($("#candidato1 h4").text() == salud_partidos){
                    if(datatema == 'salud-tema1'){
                        const plan = new Plan(salud_partidos,salud_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'salud-tema2'){
                        const plan = new Plan(salud_partidos,salud_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'salud-tema3'){
                        const plan = new Plan(salud_partidos,salud_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'salud-tema4'){
                        const plan = new Plan(salud_partidos,salud_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'salud-tema5'){
                        const plan = new Plan(salud_partidos,salud_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'salud-tema6'){
                        const plan = new Plan(salud_partidos,salud_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'salud-tema7'){
                        const plan = new Plan(salud_partidos,salud_tema7)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                }
                if($("#candidato2 h4").text() == salud_partidos){
                    if(datatema == 'salud-tema1'){
                        const plan = new Plan(salud_partidos,salud_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'salud-tema2'){
                        const plan = new Plan(salud_partidos,salud_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'salud-tema3'){
                        const plan = new Plan(salud_partidos,salud_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'salud-tema4'){
                        const plan = new Plan(salud_partidos,salud_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'salud-tema5'){
                        const plan = new Plan(salud_partidos,salud_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'salud-tema6'){
                        const plan = new Plan(salud_partidos,salud_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'salud-tema7'){
                        const plan = new Plan(salud_partidos,salud_tema7)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                }
            }
        }
        if(datacategoria == 'Economía'){
            for(i in jsonPropuestasPartidoEconomia){
                let economia_partidos = jsonPropuestasPartidoEconomia[i]['Partidos']
                let economia_tema1 = jsonPropuestasPartidoEconomia[i]['Creación de empleo']
                let economia_tema2 = jsonPropuestasPartidoEconomia[i]['Informalidad']
                let economia_tema3 = jsonPropuestasPartidoEconomia[i]['Sectores productivos']
                let economia_tema4 = jsonPropuestasPartidoEconomia[i]['Infraestructura']
                let economia_tema5 = jsonPropuestasPartidoEconomia[i]['Reforma tributaria']
                let economia_tema6 = jsonPropuestasPartidoEconomia[i]['Otros']
                let economia_tema7 = jsonPropuestasPartidoEconomia[i]['Análisis por partido']

                if($("#candidato1 h4").text() == economia_partidos){
                    if(datatema == 'economia-tema1'){
                        const plan = new Plan(economia_partidos,economia_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'economia-tema2'){
                        const plan = new Plan(economia_partidos,economia_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'economia-tema3'){
                        const plan = new Plan(economia_partidos,economia_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'economia-tema4'){
                        const plan = new Plan(economia_partidos,economia_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'economia-tema5'){
                        const plan = new Plan(economia_partidos,economia_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'economia-tema6'){
                        const plan = new Plan(economia_partidos,economia_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'economia-tema7'){
                        const plan = new Plan(economia_partidos,economia_tema7)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                }
                if($("#candidato2 h4").text() == economia_partidos){
                    if(datatema == 'economia-tema1'){
                        const plan = new Plan(economia_partidos,economia_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'economia-tema2'){
                        const plan = new Plan(economia_partidos,economia_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'economia-tema3'){
                        const plan = new Plan(economia_partidos,economia_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'economia-tema4'){
                        const plan = new Plan(economia_partidos,economia_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'economia-tema5'){
                        const plan = new Plan(economia_partidos,economia_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'economia-tema6'){
                        const plan = new Plan(economia_partidos,economia_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'economia-tema7'){
                        const plan = new Plan(economia_partidos,economia_tema7)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                }
            }
        }

        if(datacategoria == 'Educación'){
            for(i in jsonPropuestasPartidoEducacion){
                let educacion_partidos = jsonPropuestasPartidoEducacion[i]['Partidos']
                let educacion_tema1 = jsonPropuestasPartidoEducacion[i]['Educación a distancia']
                let educacion_tema2 = jsonPropuestasPartidoEducacion[i]['Acompañamiento docente']
                let educacion_tema3 = jsonPropuestasPartidoEducacion[i]['Enfoque de igualdad de género']
                let educacion_tema4 = jsonPropuestasPartidoEducacion[i]['Licenciamiento E.S.']
                let educacion_tema5 = jsonPropuestasPartidoEducacion[i]['Otros']
                let educacion_tema6 = jsonPropuestasPartidoEducacion[i]['Análisis por partido']

                if($("#candidato1 h4").text() == educacion_partidos){
                    if(datatema == 'educacion-tema1'){
                        const plan = new Plan(educacion_partidos,educacion_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'educacion-tema2'){
                        const plan = new Plan(educacion_partidos,educacion_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'educacion-tema3'){
                        const plan = new Plan(educacion_partidos,educacion_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'educacion-tema4'){
                        const plan = new Plan(educacion_partidos,educacion_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'educacion-tema5'){
                        const plan = new Plan(educacion_partidos,educacion_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'educacion-tema6'){
                        const plan = new Plan(educacion_partidos,educacion_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                  
                }
                if($("#candidato2 h4").text() == educacion_partidos){
                    if(datatema == 'educacion-tema1'){
                        const plan = new Plan(educacion_partidos,educacion_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'educacion-tema2'){
                        const plan = new Plan(educacion_partidos,educacion_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'educacion-tema3'){
                        const plan = new Plan(educacion_partidos,educacion_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'educacion-tema4'){
                        const plan = new Plan(educacion_partidos,educacion_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'educacion-tema5'){
                        const plan = new Plan(educacion_partidos,educacion_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'educacion-tema6'){
                        const plan = new Plan(educacion_partidos,educacion_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                }
            }
        }
        if(datacategoria == 'Institucional'){
            for(i in jsonPropuestasPartidoInstitucional){
                let institucional_partidos = jsonPropuestasPartidoInstitucional[i]['Partidos']
                let institucional_tema1 = jsonPropuestasPartidoInstitucional[i]['Lucha Anticorrupción']
                let institucional_tema2 = jsonPropuestasPartidoInstitucional[i]['Reformas constitucionales']
                let institucional_tema3 = jsonPropuestasPartidoInstitucional[i]['Reforma de Justicia']
                let institucional_tema4 = jsonPropuestasPartidoInstitucional[i]['Reforma del servicio civil']
                let institucional_tema5 = jsonPropuestasPartidoInstitucional[i]['Descentralización']
                let institucional_tema6 = jsonPropuestasPartidoInstitucional[i]['Análisis por partido']

                if($("#candidato1 h4").text() == institucional_partidos){
                    if(datatema == 'institucional-tema1'){
                        const plan = new Plan(institucional_partidos,institucional_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'institucional-tema2'){
                        const plan = new Plan(institucional_partidos,institucional_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'institucional-tema3'){
                        const plan = new Plan(institucional_partidos,institucional_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'institucional-tema4'){
                        const plan = new Plan(institucional_partidos,institucional_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'institucional-tema5'){
                        const plan = new Plan(institucional_partidos,institucional_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'institucional-tema6'){
                        const plan = new Plan(institucional_partidos,institucional_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                   
                }
                if($("#candidato2 h4").text() == economia_partidos){
                    if(datatema == 'institucional-tema1'){
                        const plan = new Plan(institucional_partidos,institucional_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'institucional-tema2'){
                        const plan = new Plan(institucional_partidos,institucional_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'institucional-tema3'){
                        const plan = new Plan(institucional_partidos,institucional_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'institucional-tema4'){
                        const plan = new Plan(institucional_partidos,institucional_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'institucional-tema5'){
                        const plan = new Plan(institucional_partidos,institucional_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'institucional-tema6'){
                        const plan = new Plan(institucional_partidos,institucional_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                }
            }
        }
        if(datacategoria == 'Seguridad'){
            for(i in jsonPropuestasPartidoSeguridad){
                let seguridad_partidos = jsonPropuestasPartidoSeguridad[i]['Partidos']
                let seguridad_tema1 = jsonPropuestasPartidoSeguridad[i]['Prevención del delito']
                let seguridad_tema2 = jsonPropuestasPartidoSeguridad[i]['Crimen Organizado']
                let seguridad_tema3 = jsonPropuestasPartidoSeguridad[i]['Reformas PNP']
                let seguridad_tema4 = jsonPropuestasPartidoSeguridad[i]['Prevención y atención a la violencia de género']
                let seguridad_tema5 = jsonPropuestasPartidoSeguridad[i]['Otras propuestas']
                let seguridad_tema6 = jsonPropuestasPartidoSeguridad[i]['Análisis por partido']

                if($("#candidato1 h4").text() == seguridad_partidos){
                    if(datatema == 'seguridad-tema1'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'seguridad-tema2'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'seguridad-tema3'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'seguridad-tema4'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'seguridad-tema5'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'seguridad-tema6'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }

                }
                if($("#candidato2 h4").text() == seguridad_partidos){
                    if(datatema == 'seguridad-tema1'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'seguridad-tema2'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'seguridad-tema3'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'seguridad-tema4'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'seguridad-tema5'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'seguridad-tema6'){
                        const plan = new Plan(seguridad_partidos,seguridad_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }

                }
            }
        }
        if(datacategoria == 'Social'){
            for(i in jsonPropuestasPartidoSocial){
                let social_partidos = jsonPropuestasPartidoSocial[i]['Partidos']
                let social_tema1 = jsonPropuestasPartidoSocial[i]['Protección social (pensiones, seguro de desempleo)']
                let social_tema2 = jsonPropuestasPartidoSocial[i]['Igualdad de oportunidades para Hombres y Mujeres']
                let social_tema3 = jsonPropuestasPartidoSocial[i]['Reconocimiento de Derechos (LGTB)']
                let social_tema4 = jsonPropuestasPartidoSocial[i]['Inclusión de poblaciones vulnerables']
                let social_tema5 = jsonPropuestasPartidoSocial[i]['Medio ambiente']
                let social_tema6 = jsonPropuestasPartidoSocial[i]['Análisis por partido']

                if($("#candidato1 h4").text() == social_partidos){
                    if(datatema == 'social-tema1'){
                        const plan = new Plan(social_partidos,social_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'social-tema2'){
                        const plan = new Plan(social_partidos,social_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'social-tema3'){
                        const plan = new Plan(social_partidos,social_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'social-tema4'){
                        const plan = new Plan(social_partidos,social_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'social-tema5'){
                        const plan = new Plan(social_partidos,social_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                    if(datatema == 'social-tema6'){
                        const plan = new Plan(social_partidos,social_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta1')
                    }
                }
                if($("#candidato2 h4").text() == social_partidos){
                    if(datatema == 'social-tema1'){
                        const plan = new Plan(social_partidos,social_tema1)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'social-tema2'){
                        const plan = new Plan(social_partidos,social_tema2)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'social-tema3'){
                        const plan = new Plan(social_partidos,social_tema3)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'social-tema4'){
                        const plan = new Plan(social_partidos,social_tema4)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'social-tema5'){
                        const plan = new Plan(social_partidos,social_tema5)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                    if(datatema == 'social-tema6'){
                        const plan = new Plan(social_partidos,social_tema6)
                        const ui = new UI()
                        ui.llenarTexto(plan, 'contTextPropuesta2')
                    }
                }
            }
        }
  
        
    })





}
oReqPropuestas.send();
