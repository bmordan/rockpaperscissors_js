function     Rock() { this.is = 'Rock'     }
function Scissors() { this.is = 'Scissors' }
function    Paper() { this.is = 'Paper'    }

Rock.prototype.against = function(gesture) {
  if (gesture.is === this.is)   return 'Draw'
  if (gesture.is === 'Scissors') return true
    return false
}
Scissors.prototype.against = function(gesture) {
  if (gesture.is === this.is) return 'Draw'
  if (gesture.is === 'Paper') return true
    return false
}
Paper.prototype.against = function(gesture) {
  if (gesture.is === this.is) return 'Draw'
  if (gesture.is === 'Rock')  return true  
    return false
}
