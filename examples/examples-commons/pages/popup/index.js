'use strict'; // eslint-disable-line

chrome.runtime.getBackgroundPage(async (bgWindow) => {
  await bgWindow.Weer.installGlobalHandlersOnAsync(
    { hostWindow: window, nameForDebug: 'PUP' },
  );
  const { timeouted } = bgWindow.Weer.Utils;

  document.getElementById('btn').onclick = () => {

    throw new Error('ONCLK!');

  };

  throw new TypeError('FROM POPUP!');
});