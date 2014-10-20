function    Rock() { this.is = 'Rock'    }
function Sissors() { this.is = 'Sissors' }
function   Paper() { this.is = 'Paper'   }

Rock.prototype.against = function(gesture) {
  if (gesture.is === this.is)   return 'Draw'
  if (gesture.is === 'Sissors') return true
    return false
}
Sissors.prototype.against = function(gesture) {
  if (gesture.is === this.is) return 'Draw'
  if (gesture.is === 'Paper') return true
    return false
}
Paper.prototype.against = function(gesture) {
  if (gesture.is === this.is) return 'Draw'
  if (gesture.is === 'Rock')  return true  
    return false
}
