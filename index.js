let addOne = document.getElementById("number-el")
let addScore = document.getElementById("number-el-2")

let count = 0
let goal = 0

function score1el() {
  count += 1
  addOne.textContent = count
}
function score2el() {
  count += 2
  addOne.textContent = count
}
function score3el() {
  count += 3
  addOne.textContent = count
}

function score11el() {
  goal += 1
  addScore.textContent = goal
}
function score22el() {
  goal += 2
  addScore.textContent = goal
}
function score33el() {
  goal += 3
  addScore.textContent = goal
}
function resetel() {
  count = 0
  goal = 0

  addOne.textContent = count
  addScore.textContent = goal
}

