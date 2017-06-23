exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#efefef',
    backgroundColor: '#282236',
    borderColor: '#282236 ',
    cursorColor: config.cursorColor || 'rgba(176, 47, 68, 1)',
    colors: {
      black: '#fafafa',
      red: '#a11c37',
      green: '#72a958',
      yellow: '#ffff9b',
      blue: '#255593',
      magenta: '#bf61a0',
      cyan: '#60cccc',
      white: '#efefef',
      lightBlack: '#efefef',
      lightRed: '#ce264a',
      lightGreen: '#b3d581',
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
      .tab_icon {
        right: 18px;
        width: 18px;
        height: 18px;
        border-radius: 0px;
        color: white;
        font-weight: 700;
        font-size: 18px;
      }
      .tab_icon:hover {
        background-color: rgba(176, 47, 68, 1) !important;
      }
      .tab_shape {
        left: 5px;
        top: 5px;
        width: 8px;
        height: 8px;
        shape-rendering: initial !important;
      }
    `
  });
}
