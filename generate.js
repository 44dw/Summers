function generate(level) {
	clear();
	$('#level span')[0].textContent = level;
	let cards;
	if(level < 3) {
		(level == 1) ? cards = ["слагаемое", "+", "слагаемое", "=", "сумма", "уменьшаемое", "-", "вычитаемое", "=", "разность"] : 
		cards = ["множитель", "*", "множитель", "=", "произведение", "делимое", "/", "делитель", "=", "частное"];
		let length = cards.length;
		for(let i=0; i<length; i++) {
			let div = document.createElement('div');
			div.classList.add('card');
			let n = getRandomInt(0, cards.length-1);
			div.textContent = cards[n];
			if(div.textContent.length > 9) {
				div.style.fontSize = '13px';
			} else if(div.textContent.length == 1) {
				div.style.fontSize = '20px';
			}
			($('#deck')[0].getBoundingClientRect().width + $('#deck')[0].getBoundingClientRect().left) < document.documentElement.clientWidth ? $('#deck')[0].append(div) : $('#deck2')[0].append(div);
			cards.splice(n, 1);
		}
		for(let i=0; i<5; i++) {
			$('#row1')[0].innerHTML += '<div class="holder"></div>';
			$('#row2')[0].innerHTML += '<div class="holder"></div>';
		}
	}else if(level < 5) {
		if(level == 3) {
			$('body').append('<div id="row3" class="table"></div>');
			for(let i=0; i<$('.table').length; i++) {
				$('.table')[i].style.left = '25%';
			}
			$('#prize')[0].style.left = '25%';
		}
		(level == 3) ? cards = ["слагаемое", "+", "слагаемое", "=", "сумма", "уменьшаемое", "-", "вычитаемое", "=", "разность", "множитель", "*", "множитель" , "=", "произведение"] : 
		cards = ["делимое", "/", "делитель", "=", "частное", "уменьшаемое", "-", "вычитаемое", "=", "разность", "множитель", "*", "множитель" , "=", "произведение"];
		let length = cards.length;
		for(let i=0; i<length; i++) {
			let div = document.createElement('div');
			div.classList.add('card');
			div.style.marginRight = '1px';
			let n = getRandomInt(0, cards.length-1);
			div.textContent = cards[n];
			if(div.textContent.length > 9) {
				div.style.fontSize = '13px';
			} else if(div.textContent.length == 1) {
				div.style.fontSize = '20px';
			}
			$('#deck')[0].append(div);
			($('#deck')[0].getBoundingClientRect().width + $('#deck')[0].getBoundingClientRect().left) < document.documentElement.clientWidth ? $('#deck')[0].append(div) : $('#deck2')[0].append(div);
			cards.splice(n, 1);
		}
		for(let i=0; i<5; i++) {
			$('#row1')[0].innerHTML += '<div class="holder"></div>';
			$('#row2')[0].innerHTML += '<div class="holder"></div>';
			$('#row3')[0].innerHTML += '<div class="holder"></div>';
		}
	}else if(level == 5) {
		$('body').append('<div id="row4" class="table" style="left: 25%;"></div>');
		$('#deck')[0].style.left = '0';
		$('#deck2')[0].style.left = '0';
		cards = ["слагаемое", "+", "слагаемое", "=", "сумма", "уменьшаемое", "-", "вычитаемое", "=",
		"разность", "множитель", "*", "множитель" , "=", "произведение", "делимое", "/", "делитель", "=", "частное"];
		let length = cards.length;
		for(let i=0; i<length; i++) {
			let div = document.createElement('div');
			div.classList.add('card');
			div.style.marginRight = '-5px';
			let n = getRandomInt(0, cards.length-1);
			div.textContent = cards[n];
			if(div.textContent.length > 9) {
				div.style.fontSize = '13px';
			} else if(div.textContent.length == 1) {
				div.style.fontSize = '20px';
			}
			$('#deck')[0].append(div);
			($('#deck')[0].getBoundingClientRect().width + $('#deck')[0].getBoundingClientRect().left) < document.documentElement.clientWidth ? $('#deck')[0].append(div) : $('#deck2')[0].append(div);
			cards.splice(n, 1);
		}
		for(let i=0; i<5; i++) {
			$('#row1')[0].innerHTML += '<div class="holder"></div>';
			$('#row2')[0].innerHTML += '<div class="holder"></div>';
			$('#row3')[0].innerHTML += '<div class="holder"></div>';
			$('#row4')[0].innerHTML += '<div class="holder"></div>';
		}
		
	}else if(level == 6) {
		for(let i=0; i<$('.table').length; i++) {
			$('.table')[i].remove();
		}
		$('#prize')[0].style.display = 'block';
		$('#prize')[0].textContent = 'Игра окончена';
		$('#prize')[0].style.left = '20%'
		$('#basket')[0].style.top = '200px';
		$('#basket')[0].style.left = '21%';
		$('#counter')[0].style.display = 'none';
		$('#level')[0].style.display = 'none';
		$('#finalCount')[0].style.display = 'block';
		$('#restart')[0].style.display = 'block';
		$('#finalCount span')[0].textContent = $('#counter')[0].textContent;
	}
}