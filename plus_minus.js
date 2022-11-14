/*
입력할 수를 선 입력, 각각의 숫자 입력
양수, 음수, 0의 비율을 구하는 문제
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const arrLength = arr.length
    let plusNum = 0;
    let minusNum = 0;
    let zeroNum = 0;
    for(let i = 0; i<arrLength; i++){
      if(arr[i]>0){
        plusNum += 1;
      }
      else if(arr[i]<0){
        minusNum += 1;
      }
      else if(arr[i] === 0){
        zeroNum +=1;
      }
    }
    console.log(`${plusNum/arrLength}\n${minusNum/arrLength}\n${zeroNum/arrLength}`)

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
