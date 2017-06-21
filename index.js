exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#efefef',
    backgroundColor: '#282236',
    borderColor: '#282236 ',
    cursorColor: config.cursorColor || 'rgba(176, 47, 68, 1)',
    colors: {
      black: '#0f0f0f',
      red: '#a11c37',
      green: '#2d815d',
      yellow: '#ffff9b',
      blue: '#255593',
      magenta: '#bf61a0',
      cyan: '#60cccc',
      white: '#efefef',
      lightBlack: '#131617',
      lightRed: '#ce264a',
      lightGreen: '#61a95f',
      lightYellow: '#ffffbf',
      lightBlue: '#23b9f6',
      lightMagenta: '#c375b7',
      lightCyan: '#78ffff',
      lightWhite: '#ffffff'
    },
    css: `
      ${config.css || ''}
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background: #282236 !important;
      }
      .tab_tab {
        padding-left: 0;
        border: 0;
        border-bottom: 2px solid rgba(73, 56, 87, 1) !important;
        transition: border-color .2s ease;
      }
      .tab_active {
        border-bottom: 2px solid rgba(176, 47, 68, 1) !important;
      }
      .tab_text {
        color: rgba(255, 255, 255, 0.5);
      }
      .tab_textActive {
        color: rgba(255, 255, 255, 1);
      }
      .tab_text, .tab_textActive {
        font-weight: 700;
      }
      .tab_hasActivity, .tab_hasActivity:hover {
        color: #ffff9c;
      }
    `
  });
}
