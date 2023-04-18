var canvas = document.getElementById('canvas');
console.log(canvas);
var ctx = canvas.getContext('2d');
var luminanceElem = document.getElementById('luminance');
var luminance = 0;
var rotation = 0;

// 初始化

function updateLuminance() {
	// 設定要 pull 的裝置和資訊
	var mac_addr = 'bulb111';
	var odf_name = 'Luminance';

	// 呼叫 csmapi.js 的 pull 函式
	csmapi.pull(mac_addr, odf_name, function(data, error) {
		if (error) {
			console.error('Failed to pull Luminance:', error);
			return;
		}

		// 取出最新一筆資料的值
		console.log(data);
		var luminance = data[0][1][0];

		// 更新顯示在頁面上的資訊
		var luminanceElement = document.getElementById('luminance');
		luminanceElement.textContent = 'Luminance: ' + luminance;

		// 每 1 秒更新一次
		setTimeout(updateLuminance, 1000);
	});
	
}

function drawImage() {
	var img = new Image();
	img.onload = function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.translate(canvas.width / 2, canvas.height / 2);
		ctx.rotate(rotation);
		ctx.drawImage(img, -img.width / 2, -img.height / 2);
	};
	img.src = 'image.png';
}

function updateRotation() {
	rotation += luminance / 100;
	drawImage();
}

updateLuminance();
drawImage();
setInterval(function() {
	updateLuminance();
	updateRotation();
}, 5000);
