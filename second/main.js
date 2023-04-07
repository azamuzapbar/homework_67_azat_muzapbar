$.get('https://rickandmortyapi.com/api/character', function(data) {
      data.results.forEach(function(character) {
        let card = `
          <div class="character-card" data-id="${character.id}">
            <img src="${character.image}">
            <h2>${character.name}</h2>
          </div>
        `;
        $('#characters-container').append(card);
      });

      $('.character-card').click(function() {
        let id = $(this).data('id');
        window.location.href = `character.html?id=${id}`;
      });
    });