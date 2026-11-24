
browser.commands.onCommand.addListener(async function(command) {
  let key = parseInt(command) - 1;
  const tabs = await browser.tabs.query({ currentWindow: true, hidden: false});
  const pinned = await browser.tabs.query({ currentWindow: true, pinned: true});
  let idx = key + pinned.length;

  if (key == 8 || idx > tabs.length) {
    idx = tabs.length - 1;
  }
  browser.tabs.update(tabs[idx].id, { active: true });
});

