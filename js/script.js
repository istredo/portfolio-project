function testArray(a, b) {
	var sum = 0
	a.forEach(element => sum += element);
	b.forEach(element => sum += element);
	return sum
}
testArray([0, 1, 5, 3], [3])
//---------------------------

