// Register event listener for the 'push' event.
self.addEventListener('push',
  /** @param {PushEvent} event*/
  function(event) {
    if (!(self.Notification && self.Notification.permission === "granted")) {
      return;
    }
    const message = event.data.text();
    new self.Notification(message, {
      body: message,
      tag: "server-message",
    });
  });
