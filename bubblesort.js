function bubbleSort(array) {

  /* your code here */
  //[1,8,4,5,6]
var answer = [];
while (array.length > 1) {
	for (var i = 0; i < array.length; i++) {
		if (array[i+1]) {
			if (array[i] > array[i + 1]) {
				var greater = array[i];
				array[i] = array[i+1];
				array[i+1] = greater;
			}
		}
	}
	answer.push(array[array.length -1]);
	array = array.slice(0,array.length-1)
}
if (array.length > 0) {answer.push(array[0])};

//console.log(answer);



 return answer;

}