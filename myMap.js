// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {

//  CODE INSIDE HERE   //
var myArray = []
for (var i = 0; i < arr.length; i++) {
	myArray.push(callback(arr[i], i , arr));
	}
	return myArray;
} 


/*
 myMap.map(function(add4){
	return add4 + 4
	})
return myMap;
}
*/

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/

/*
for (var i = 0; i < arr.length; i++) {
	callback(arr[i], i , arr);
	}
	return callback + 4;
}
*/



// export this function (you can ignore this for now)
module.exports = myMap;
