
let numero = 1;

	function adicionar() {
		if (numero >=3) {
			numero = 1;
			document.getElementById('slide').src ='imagens/mais_avaliado/'+ numero + '.png';
		}else{
			numero += 1;
				
			document.getElementById('slide').src = 'imagens/mais_avaliado/'+ numero + '.png';
			
		}
		setTimeout(adicionar,2000);
	}

	adicionar()

	function mouse(){

		document.getElementById('slide').style.boxShadow = "3px 3px 10px black" ;
		document.getElementById('slide').style.transition = "box-shadow 1s";

	}

	function mouseDown(){

		document.getElementById('slide').style.boxShadow = "none" ;

}