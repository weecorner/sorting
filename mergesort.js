function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var firstHalf = [];
  var secondHalf = [];
  for(i=0; i<wholeArray.length; i++) {
  	if(i<wholeArray.length/2) {
  		firstHalf.push(wholeArray[i]);
  	} else {
  		secondHalf.push(wholeArray[i]);
  	}
  }

  return [firstHalf, secondHalf];
}

//test: [1][8]
//test: [1,4,8], [5,6]
function merge(arr1, arr2) {
	var result = [];
	var i = 0;
	var j = 0;

	while(i<arr1.length && j<arr2.length) {
		if(arr1[i] > arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	} 

	if(i < arr1.length) { 
		var remainder = arr1.slice(i);
		remainder.forEach(function(val) {
			result.push(val);
		}); 
	}
	if(j < arr2.length) { 
		var remainder = arr2.slice(j);
		remainder.forEach(function(val) {
			result.push(val);
		}); 
	}

	return result;
}

//Test case: [1,8,4,5,6]
function mergeSort(arr) {
	//var result = [];
	if (arr.length < 2)
        return arr;
	var splitArr = split(arr);
	var left = splitArr[0];
	var right = splitArr[1];

	return merge(mergeSort(left), mergeSort(right));

	// if (splitArr[0].length !== 1) {
	// 	splitArr = split(splitArr[0]);
	// 	mergeSort(splitArr);
	// } else {
	// 	result.push(splitArr[0]);
	// }

	//return result;
}

//Test case: [1,8,4,5,6]
// function mergeSort(arr) {
// 	var result = [];
// 	console.log(split(arr)[0]);
// 	if (Array.isArray(arr[0])) {
// 		if (arr[0].length === 1) {
// 			//result = result.concat(arr[0][0]);
// 			if (arr[0][0] > arr[1][0]) {
// 				result = result.concat(arr[0][0]);
// 				result = result.concat(arr[1][0]);
// 			} else {
// 				result = result.concat(arr[1][0]);
// 				result = result.concat(arr[0][0]);
// 			}
// 		} else {
// 			mergeSort(split(arr[0]));
// 			mergeSort(split(arr[1]));
// 		}

// 	} else {
// 		mergeSort(split(arr));
// 	}

	// //if((arr)[0].length == 1 && arr[1].length == 1) {
	// //	if(split(arr)[0][0] > split(arr)[1][0]) {
	// //		return result = result.concat([split(arr)[0][0], split(arr)[1][0]]);
	// 	} else {
	// 		return result = result.concat([split(arr)[1][0], split(arr)[0][0]]);
	// 	}
	// } else {
	// 	mergeSort(split(arr)[0]); 
	// 	mergeSort(split(arr)[1]);
	// }{
	// 	result = result.concat(mergeSort(split(arr)[0]));
	// 	result = result.concat(mergeSort(split(arr)[1]));
	// }
	
// 	return result;
// }