describe('The game of Rock Paper Sissors has', function() {
  
  describe('gestures like this', function() {
    it('a rock is a Rock', function() {
      rock = new Rock;
      expect(rock.is).toEqual('Rock')
    })
  })

})

describe('Different gestures win over other gestures', function() {

  beforeEach(function(){
    rock = new Rock
    sissors = new Sissors
    paper = new Paper
  })

  it('for example Rock blunts Sissors', function() {
    expect(rock.against(sissors)).toEqual(true)
  })

  it('but losses against paper', function(){
    expect(rock.against(paper)).toEqual(false)
  })

  it('works for sissors winning against paper', function() {
    expect(sissors.against(paper)).toEqual(true)
  })

  it('works for paper lossing against sissors', function() {
    expect(paper.against(sissors)).toEqual(false)
  })

})

describe('Deals with a draw', function() {
  it('by returning Draw', function() {
    expect(paper.against(paper)).toEqual('Draw')
  })
})