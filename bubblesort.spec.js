describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('handles an array', function(){
    expect( bubbleSort([1,8,4,5,6]) ).toEqual( [8,6,5,4,1] );
  });
});