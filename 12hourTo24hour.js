/*
12시간 표기법을 24시간 표기법으로 변경
*/

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
     const array12 = s.split('');
    let array24 = [];
    if(array12[array12.length - 2] =='A'){
      let i = 0;
      if(array12[0] == 1 && array12[1] == 2){
        array24[0] = 0;
        array24[1] = 0;
        i = 2;
      }
      else{
        i = 0;
      }
      for(i; i<array12.length - 2; i++){
        array24[i] = array12[i];
      }
    }
    else if(array12[array12.length - 2] =='P'){
      array24[1] = Number(array12[1]) + 2;
      if(array12[0] == 1 && array12[1] == 2){
        array24[0] = 0;
        array24[1] = 0;
      }
      else if(array24[1] >= 10){
        array24[1] = Number(array24[1]) - 10;
        array24[0] = Number(array12[0]) + 1;
      }
      else if(array24[1] < 10){
        array24[0] = Number(array12[0])+1;
      }
      for(let i = 2; i<array12.length - 2; i++){
        array24[i] = array12[i];
      }
    }
    else{
        return "not thing";
    }
    console.log(array24);
    return array24.join('');

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
