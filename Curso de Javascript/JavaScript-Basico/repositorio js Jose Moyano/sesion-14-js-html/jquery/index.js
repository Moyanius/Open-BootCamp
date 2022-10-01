//$("selector").accion()

//ej
//$("h1").hide() 


//Para no tener problemas deberiamos utilizar de las siguientes formas
//Normal
//$(document).ready(() => {
//reducida
$(() => {
	// Selectores
	// id="el-1" => "#el-1"
	// class="el-1" => "-el-1"
	//$("#el-1").hide()
	//$(".hide-btn").hide()
	$(".hide-btn").click (() => {
		//$("h1").hide()
		$("h1").fadeOut()
	})
	$(".show-btn").click (() => {
		//$("h1").show()
		$("h1").fadeIn()
	})
	$("li").dblclick(() => {
		$("h1").css({ color: "red"})
	})
	$(".new-element").click(() => {
		$("ul").append("<li>New Element</li>") // lo agraga al final
		$("ul").prepend("<li>New Element</li>") // lo grrega al principio
	})
	$("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })

    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })
})
