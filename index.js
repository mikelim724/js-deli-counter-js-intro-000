function takeANumber(currentLine, newperson) {
  currentLine.push(newperson) //add new person into line(array)
  return `Welcome, ${newperson}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if(currentLine.length > 0){
    var first = currentLine[0];
    currentLine.shift();
    return "Currently serving " + first + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(currentLine) {
  var counter = 0;
  var string = "The line is currently: "
  if(counter < currentLine.length){
    while (counter < currentLine.length) {
      if ((counter + 1)===currentLine.length) {
        string = string + `${counter+1}. ${currentLine[counter]}, `
        counter++;
      }
      else {
        string = string + `${counter+1}. ${currentLine[counter]}`
      }
    }
    return string
  }
  else {
    return "The line is currently empty."
  }
}
