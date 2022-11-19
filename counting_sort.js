'use strict';

const fs = require('fs');

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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
  const MAX_LENGTH = arr.length;
  const MAX_VALUE = 100;

  function creatZeroArray(length){
    return new Array(length).fill(0);
  }
  
  let count = creatZeroArray(MAX_VALUE);

  for(let i = 0; i<MAX_LENGTH; i++){
    count[arr[i]]++;
  }
  // How to Counting Sort
  // let countingSum = creatZeroArray(MAX_VALUE);

  // for(let i = 0; i<count.length; i++){
  //   if(i===0){
  //     countingSum[i] = count[i];
  //   }
  //   else{
  //     countingSum[i] = countingSum[i-1] + count[i];
  //   }
  // }

  // let sortedArr = creatZeroArray(MAX_LENGTH);

  // for(let i = arr.length; i>=0; i--){
  //   sortedArr[countingSum[arr[i]]] = arr[i];
  //   countingSum[arr[i]]--;
  // }

  return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
