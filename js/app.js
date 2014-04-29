window.onload = function()
{

	init();

	function init()
	{

		Dog.CanvasCtrl.init();

		document.body.addEventListener("keyup", function(event)
		{
			console.info('event.keyCode', event.keyCode);
			switch (event.keyCode)
			{
				case 32: // space
					draw();
					break;

				case 80: // p
					Dog.CanvasCtrl.popImage();
					break;

				default:
					break;
			}
		});
	}

	function draw()
	{
		var x = Math.random() * (Dog.CanvasCtrl.width - 100),
			y = Math.random() * (Dog.CanvasCtrl.height - 100),
			w = 20 + Math.random() * 100,
			h = 20 + Math.random() * 100,
			r = Math.floor(Math.random() * 256),
			g = Math.floor(Math.random() * 256),
			b = Math.floor(Math.random() * 256);

		Dog.CanvasCtrl.context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
		Dog.CanvasCtrl.context.fillRect(x, y, w, h);
	}
};