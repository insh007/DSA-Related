// Move all negative numbers to beginning and positive to end with constant extra space

// example:
// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]

function moveNegativesToBeginning(arr) {
    let left = 0; // pointer starting from beginning of array
    let right = arr.length - 1; // pointer starting from end of array
  
    while (left <= right) {
        if (arr[left] >= 0 && arr[right] < 0) { // found two numbers to swap
          let temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
        } else if (arr[left] < 0) { // left pointer found a negative number, move it forward
          left++;
        } else if (arr[right] >= 0) { // right pointer found a positive number, move it backward
          right--;
        }
      }

    return arr;
  }
  
console.log(moveNegativesToBeginning(arr)); // [-12, -13, -5, -7, -3, -6, 11, 6, 5]
  