$(function () {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let item = $('form > input').val();
        $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
        `)
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        let thing = $(event.target).closest('li');
        let word = thing.children('.shopping-item');
        word.toggleClass('shopping-item__checked');
    })

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        let thing = $(event.target).closest('li');
        thing.remove();
    })

});