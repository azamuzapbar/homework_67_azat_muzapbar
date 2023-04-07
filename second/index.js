let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');

$.get(`https://rickandmortyapi.com/api/character/${id}`, function(character) {
  let characterCard = `
    <div class="character-details">
      <img src="${character.image}">
      <h2>${character.name}</h2>
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
      <p>Type: ${character.type}</p>
      <p>Gender: ${character.gender}</p>
      <p>Origin: ${character.origin.name}</p>
      <p>Location: ${character.location.name}</p>
    </div>
  `;
  $('#character-details').html(characterCard);
});
