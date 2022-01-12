// INSERT JS HERE


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');
const start_btn = document.getElementById('start_btn');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

start_btn.addEventListener('click', () => {
	screens[0].classList.add('up');
}); 

/* const music = new Audio('music/dontstop.mp3');
music.play();
music.loop =true;
music.playbackRate = 2;
music.pause();  */
// qqazszdgfbgtyj
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js"></script> */}
	
		var sound = new Howl({
		  src: ['music/dontstop.mp3'],
		  volume: 1.0,
		  onend: function () {
			alert('We finished with the setup!');
		  }
		});
		sound.play()
