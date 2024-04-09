function findMatching(arr , str){
   return arr.filter(e => e.toLowerCase() === str.toLowerCase())
}
function fuzzyMatch(arr , str){
    return arr.filter(e => e.toLowerCase().startsWith(str.toLowerCase()))
}
function matchName(obj , str){
   return obj.filter(e => e.name === str)
}
// Code your solution here
