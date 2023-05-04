function QuickSort(realArray) {
	if (realArray.length <= 1) { 
		return realArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = realArray.pop();
		var length = realArray.length;

		for (var i = 0; i < length; i++) {
			if (realArray[i] <= pivot) {
				left.push(realArray[i]);
			} else {
				right.push(realArray[i]);
			}
		}

		return newArray.concat(QuickSort(left), pivot, QuickSort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1, 10, 23, 15, 20, 12];

console.log("Real array: " + myArray);
var sortedArray = QuickSort(myArray);
console.log("Sorted array: " + sortedArray);