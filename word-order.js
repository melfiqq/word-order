function order(words){
    if (words === "") return "";
  
    // Split the string into an array of words
    const wordsArray = words.split(" ");
    // Initialize an array to hold the sorted words
    const sortedArray = [];
  
    // For each word in the array, find its position and place it in the sorted array
    wordsArray.forEach(word => {
      // Find the number in the word
      const position = word.match(/\d/); // This regex matches any digit
      // Use the number as the index to place the word in the sorted array
      // Subtract 1 from the position because array indices start at 0
      sortedArray[position[0] - 1] = word;
    });
  
    // Join the sorted array into a string and return it
    return sortedArray.join(" ");
  }
  
  // Test examples
  console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
  console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"
  console.log(order("")); // ""