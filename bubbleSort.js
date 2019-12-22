bubbleSort = array => {
  let swapped = false
  do {
    swapped = false
    array.forEach((current, i) => {
      console.log(array.join(' '))
      if (current > array[i + 1]) {
        const temp = current
        console.log(array.join(' '))

        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }
    })
  } while (swapped)
  console.log(array.join(' '))
  return array
}

const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
bubbleSort(numbers)

// recursive version
let bubbleSort = (arr, n) => {
  // create exit condition
  if (n <= 1) {
    return arr
  }

  // looping the array
  arr.forEach((current, i) => {
    // if the current value is greater than ( > ) the next value, do this
    if (current > arr[i + 1]) {
      // save the current value
      const temp = current

      // swap the position with the next value
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
  })

  // call the function until it meet the exit condition
  return bubbleSort(arr, n - 1)
}

let numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
bubbleSort(numbers, numbers.length)
