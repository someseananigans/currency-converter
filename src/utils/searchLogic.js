const relevantSearch = (search) => {
  array = ['cheese', 'banana', 'potato', 'chia']

  let totalResults = []

  // want to push matching searches to array
  // remove them from original array 
  // totalResults.concat(array)

  // array of filtered results
  let searchResults = array.filter(item => item.includes(search))

  // array without filtered results
  let filtered = array.filter(n => !searchResults.includes(n))

  totalResults = searchResults.concat(filtered)

  return totalResults
}
