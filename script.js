const canvasHeight = 1000;
const canvasWidth = canvasHeight;
const SpiraleSize = 1000;

var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');
//ctx.fillRect(cvW, cvH, 1, 1)

var numbers = [];

for (let n = 1; n <= Math.pow(SpiraleSize,2); n++) {
	if (isPrime(n)) {
		numbers.push(GetCartesianCoord(n))
	}
}
Draw(numbers);
console.log(numbers);

function GetCartesianCoord(n){
	var jump = 1;
	var addJump = true;
	var xC = 0;
	var yC = 0;
	var jumpDir = 0;
	var jumpCounter = 0;
	for (let i = 1; i < n; i++) {
		if (jumpDir%4==0) {
			xC+=1;
		}
		if (jumpDir%4==1) {
			yC+=1;
		}
		if (jumpDir%4==2) {
			xC-=1;
		}
		if (jumpDir%4==3) {
			yC-=1;
		}
		jumpCounter +=1
		if(jumpCounter == jump){
			jumpCounter = 0
			jumpDir+=1;
			addJump = !addJump;
			if (addJump) {
				jump +=1;
			}
		}
	}
	return{num:n,x:xC,y:yC}

}
function isPrime(n){
	if (n <=1){
		return false
	}
	if (n <= 3) {
		return true
	}
	if (n%2 ==0) {
		return false
	}
	var ceilRoot = Math.ceil(Math.sqrt(n));
	for (let i = 2; i < ceilRoot; i++) {
		if(n % i == 0){
			return false
		}
	}
	return true
}
function Draw(nums){
	var scale = Math.floor(canvasHeight/SpiraleSize);
	ctx.fillStyle ="Red";
	ctx.fillRect(canvasHeight/2,canvasHeight/2,scale,scale)
	ctx.fillStyle ="Black";
	nums.forEach(num => {
		ctx.fillRect((num.x*scale + canvasHeight / 2), (num.y*scale + canvasHeight / 2), scale, scale);
	});
}
