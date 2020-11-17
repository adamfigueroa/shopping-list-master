function main() {

    // capture the submitted information
    $('#js-shopping-list-form').on('submit', function (event) {
        event.preventDefault();
        const temp = $('#shopping-list-entry').val();
        console.log(temp)
        const result = []
        result.push(temp)
        console.log(result)

        // take the submitted information and append it onto the page
        $('.shopping-list').append($(`<li>
        <span class="shopping-item">${result}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
        </div>
  </li>`))

    });

    // use toggleClass to create check functionality
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked')
    });

    // use remove to create delete functionality
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        $(this).closest('li').remove();
      });
    
}

$(main);
