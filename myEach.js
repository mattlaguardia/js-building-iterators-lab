// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach

function myEach(arr, callback) {

//  CODE INSIDE HERE   //
for (var i = 0; i < arr.length; i++) {
	callback(arr[i], i, arr);
	}
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!

1. Takes a functino as the second argument and calls that function (callback)
2. Passes each value in the array to the callback 
3. Passes each value in the array to the callback, even non-integers
4. Passes each index in th array to the callback as argument 2
5.


*/







// export this function (you can ignore this for now)
module.exports = myEach;
