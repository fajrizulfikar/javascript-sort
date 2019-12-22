insertionSort = array => {
  for (outer = 1; outer < array.length; outer++) {
    for (inner = 0; inner < outer; inner++) {
      console.log(array.join(' '))
      if (array[outer] < array[inner]) {
        const [element] = array.splice(outer, 1)
        array.splice(inner, 0, element)
      }
    }
  }
  console.log(array.join(' '))
  return array
}
const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
insertionSort(numbers)

// recursive version
let insertionSort = (arr, n) => {
  // create the exit condition
  if (n <= 1) {
    return arr
  }

  // call the function until it meet the exit condition
  insertionSort(arr, n - 1)

  // save the outer value in variable
  let key = arr[n - 1]
  // save the inner position
  let j = n - 2

  // while the inner position is greater or equals than ( >= ) first index
  // and inner value is greater than ( > ) the outer value, do this
  while (j >= 0 && arr[j] > key) {
    // swap the outer value with the inner value
    arr[j + 1] = arr[j]
    // reset the position
    j--
  }

  // update the key variable for the next comparison
  arr[j + 1] = key

  return arr
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
insertionSort(numbers)
