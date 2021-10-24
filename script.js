const container = document.querySelector('.container');
const titan = document.querySelector('.titan');
const tyni = document.querySelectorAll('.tyni')

container.addEventListener('click', function(e){
	if (e.target.className == 'tyni') {
		titan.src = e.target.src;
		titan.classList.add('fade');
		setTimeout(function() {
			titan.classList.remove('fade');
		}, 100);

		tyni.forEach(function(tiny){
			if(tiny.classList.contains('active')){
				tiny.classList.remove('active');
			}
		});

		e.target.classList.add('active');
	}
});