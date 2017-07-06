'use strict';

const render = root => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const list = state.pins;

  wrapper.append(BoardGrid(_ => {
    render(root);
  }));

  root.append(wrapper);
};
const state = {
  pins: null,
  id: null
};

$(_ => {
  getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AR1ezCPQvOjgIniGPFyboS_ooLgIFM42OdzL6V9EI3AfhAAp8AAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Ccreator%2Cimage%2Cmedia%2Cmetadata%2Coriginal_link', (err, json) => {
    if (err) {
      return alert(err.message);
    }
    state.pins = json.data;
    console.log(json);
    console.log(state.pins);
    const root = $('#root');
    render(root);
  });
});