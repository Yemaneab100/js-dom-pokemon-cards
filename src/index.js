
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

// select the <ul> for placing pokemon cards
const ul = document.querySelector('ul');

 function createAndAppendPokemonCard(pokemonJSObject) {
  // create the HTML elements as defined in the template
  const li = document.createElement('li');
  console.log('create li ');

  const h2 = document.createElement('h2');
  console.log('header');

  const img = document.createElement('img');
  console.log('image')
  
  // ensure I put the right attribute values: class, src, width
  
 img.setAttribute('class', 'width : 256 ; src : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png');



  // ensure I append the right elements inside the correct ones

  // once the card <li> is created and fully built up
  // append it to the <ul>
  ul.appendChild(li);
  ul.appendChild(h2);
}
createAndAppendPokemonCard(data[0]);
// for loop, to go through each pokemon in `data`
// and for each pokemon, call createAndAppendPokemonCard