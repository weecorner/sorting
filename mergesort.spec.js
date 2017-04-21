describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    expect( split([1,8,4,5,6]) ).toEqual( [[1,8,4], [5,6]] );
    expect( split([1,8,4,5]) ).toEqual( [[1,8], [4,5]] );

  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([1], [8]) ).toEqual( [8,1] );
    expect( merge([8,4,1], [6,5]) ).toEqual( [8,6,5,4,1] );
  });
});

describe('Merge Sort Array function', function() {
  it('is able to merge sort', function() {
    // your code here 
    expect( mergeSort([1,8,4,5,6]) ).toEqual( [8,6,5,4,1] );
    expect( mergeSort([1,8,4,5]) ).toEqual( [8,5,4,1] );

  });
});