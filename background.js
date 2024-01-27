chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF'
  })
})

chrome.action.onClicked.addListener(async tab => {
  // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
  const prevState = await chrome.action.getBadgeText({ tabId: tab.id })
  // Next state will always be the opposite
  const nextState = prevState === 'ON' ? 'OFF' : 'ON'

  // Set the action badge to the next state
  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: nextState
  })

  if (nextState === 'ON') {
    // Insert the CSS file when the user turns the extension on
    await chrome.scripting.insertCSS({
      files: ["storypact-styles.css"],
      target: { tabId: tab.id }
    });
    await chrome.scripting
      .executeScript({
        target : { tabId: tab.id },
        files : [ "dist/main.js" ],
      });
  } else if (nextState === 'OFF') {
    console.log('remove script');
    
    // Run clean up Task
    // Remove the CSS file when the user turns the extension off
    await chrome.scripting.removeCSS({
      files: ["storypact-styles.css"],
      target: { tabId: tab.id }
    });
    await chrome.scripting
      .executeScript({
        target : { tabId: tab.id },
        files : [ "detach.js" ],
      });
  }
})
