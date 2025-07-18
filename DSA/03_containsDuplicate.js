function containsDuplicate(nums) {
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true; // duplicate found
    }
    seen.add(num);
  }

  return false; // no duplicate
}

// Sample Tests
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([10, 20, 10, 30])); // true
