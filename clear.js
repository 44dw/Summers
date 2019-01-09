function clear() {
	if($('.table')[0].children.length) {
		while($('.holder').length) { //очищаем поле
			$('.holder')[0].remove();
		}
		$('#prize')[0].textContent = 'Лови яблочко!';
		$('#prize')[0].style.display = 'none';
	}
	if($('#deck')[0].children.length) {
		while($('#deck')[0].children.length) {
			$('#deck')[0].children[0].remove();
		}
	}
}