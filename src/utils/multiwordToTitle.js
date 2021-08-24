const multiwordToTitle = multiword => {
  const arr = multiword.split(" ")
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  const properTitle = arr.join(" ")

  return properTitle
}

export default multiwordToTitle
