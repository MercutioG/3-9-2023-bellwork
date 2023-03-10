//Question 1 (reverse the string)

function solution(str) {
    let tempArray = str.split('')
    let finalArray = []
    for(i = 0; i < tempArray.length; i++) {
        finalArray.push(tempArray[tempArray.length - i - 1])
    }
    let answer = finalArray.join('')
    return answer
}

console.log(solution('world'))

//Question 2 (water calculations)

function liters(time) {
    return Math.floor(0.5 * time);
}

console.log(liters(5))

//Question 3 (array differences)

function arrayDiff(numArray1, numArray2) {
    let finalDifferenceArray = [];
    for(i = 0; i < numArray1.length; i++) {
        for(j = 0; j < numArray2.length; j++) {
            if(numArray2[j] == numArray1[i]) {
                continue
            }
        }
        finalDifferenceArray.push(numArray1[i])
    }
    return finalDifferenceArray
}

console.log(arrayDiff([1,2], [1,2]))