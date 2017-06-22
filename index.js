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
        background: #1e1b26 !important;
        top: 0;
        left: 0;
        right: 0;
      }
      .borderShim_nfs {
        display: none;
      }
      .tabs_nav {
        height: 38px;
        line-height: 38px;
      }
      ul.tabs_list {
        max-height: 38px;
        margin-left: 80px;
      }
      .tab_tab {
        padding-left: 0;
        border: none;
        border-left: 3px solid transparent;
        background-color: #1e1b26;
        transition: background-color .2s ease, border-color .2s ease;
      }
      .tab_active {
        background-color: #282236 !important;
        border-color: rgba(176, 47, 68, 1) !important;
      }
      .tab_text {
        height: 38px;
        color: rgba(255, 255, 255, 0.5);
      }
      .tab_textActive {
        color: rgba(255, 255, 255, 1);
      }
      .tab_text, .tab_textActive {
        font-weight: 700;
      }
      .tab_hasActivity .tab_text, .tab_hasActivity:hover .tab_text {
        color: rgba(255, 255, 156, 0.8);
      }
    `
  });
}
