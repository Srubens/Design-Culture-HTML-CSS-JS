var numbers = [1,2,3,4,5,6,7,8,9,10];
var result = "";

for (var i = 0; i <= numbers.length - 1; i++){
	if(numbers[i]%2 === 0){
		if(i === numbers.length - 1){
			result += numbers[i] * 5;
		}else{
			result += numbers[i] * 5 + ", ";
		}
	}
}