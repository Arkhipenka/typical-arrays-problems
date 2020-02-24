
exports.min = function min (array) {
  if(array == 0 || array == undefined){
  	return 0;
  }
  let result = array.sort(function(a,b){
  	return a - b;
  })
  return result[0];
}

exports.max = function max (array) {
	if(array == 0 || array == undefined){
	 return 0;
	}
	let result = array.sort(function(a,b){
	 return b - a;
	})
  	return result[0];
}

exports.avg = function avg (array) {
	if(array == 0 || array == undefined){
		return 0;
	}

	let result = 0;
	for(let i = 0; i < array.length; i++ ){
		result += array[i];
	}
  return result / array.length;
}
