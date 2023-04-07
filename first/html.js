let button = document.getElementById('add-item-btn');
button.addEventListener('click', createNotification);

function createNotification() {
  let notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = 'закрой окошко, на всё про все 5сек <input class="close" id="close" type="button" value="Закрыть">';
  document.getElementById('container').appendChild(notification);
  let closeButton = notification.querySelector('#close');
  closeButton.addEventListener('click', function() {
    notification.remove();
  });
  setTimeout(function() {
    notification.remove();
  }, 5000);
}

