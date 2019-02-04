function iterativeLog( array ) {
  array.forEach(( element, index, array ) => {
    console.log(`${index}: ${element}`);
  } );
}

function iterate( callback ) {
  var colors = ["purple", "blue", "green", "red"]

  colors.forEach( callback );

  return colors;
}

function doToArray( array, callback ) {
  array.forEach( callback );
}
