<template>
  <div>
    <div>
      <div id="quill-toolbar-container" class="ql-toolbar ql-snow">
        <span class="ql-formats">
          <select class="ql-font">
            <option selected="selected"></option>
            <option value="serif"></option>
            <option value="monospace"></option>
          </select>
          <select class="ql-size">
            <option value="small"></option>
            <!-- Note a missing, thus falsy value, is used to reset to default -->
            <option selected value="normal"></option>
            <option value="large"></option>
            <option value="huge"></option>
          </select>
        </span>
        <!-- 基础格式化 -->
        <span class="ql-formats">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          <button class="ql-strike"></button>
        </span>
        <span class="ql-formats">
          <span class="ql-color ql-picker ql-color-picker"
            ><span
              class="ql-picker-label"
              tabindex="0"
              role="button"
              aria-expanded="false"
              aria-controls="ql-picker-options-2"
              ><svg viewBox="0 0 18 18">
                <line
                  class="ql-color-label ql-stroke ql-transparent"
                  x1="3"
                  x2="15"
                  y1="15"
                  y2="15"
                ></line>
                <polyline
                  class="ql-stroke"
                  points="5.5 11 9 3 12.5 11"
                ></polyline>
                <line
                  class="ql-stroke"
                  x1="11.63"
                  x2="6.38"
                  y1="9"
                  y2="9"
                ></line></svg></span
            ><span
              class="ql-picker-options"
              aria-hidden="true"
              tabindex="-1"
              id="ql-picker-options-2"
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#e60000"
                style="background-color: rgb(230, 0, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#ff9900"
                style="background-color: rgb(255, 153, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#ffff00"
                style="background-color: rgb(255, 255, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#008a00"
                style="background-color: rgb(0, 138, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#0066cc"
                style="background-color: rgb(0, 102, 204)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#9933ff"
                style="background-color: rgb(153, 51, 255)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#ffffff"
                style="background-color: rgb(255, 255, 255)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#facccc"
                style="background-color: rgb(250, 204, 204)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#ffebcc"
                style="background-color: rgb(255, 235, 204)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#ffffcc"
                style="background-color: rgb(255, 255, 204)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#cce8cc"
                style="background-color: rgb(204, 232, 204)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#cce0f5"
                style="background-color: rgb(204, 224, 245)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#ebd6ff"
                style="background-color: rgb(235, 214, 255)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#bbbbbb"
                style="background-color: rgb(187, 187, 187)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#f06666"
                style="background-color: rgb(240, 102, 102)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#ffc266"
                style="background-color: rgb(255, 194, 102)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#ffff66"
                style="background-color: rgb(255, 255, 102)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#66b966"
                style="background-color: rgb(102, 185, 102)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#66a3e0"
                style="background-color: rgb(102, 163, 224)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#c285ff"
                style="background-color: rgb(194, 133, 255)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#888888"
                style="background-color: rgb(136, 136, 136)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#a10000"
                style="background-color: rgb(161, 0, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#b26b00"
                style="background-color: rgb(178, 107, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#b2b200"
                style="background-color: rgb(178, 178, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#006100"
                style="background-color: rgb(0, 97, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#0047b2"
                style="background-color: rgb(0, 71, 178)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#6b24b2"
                style="background-color: rgb(107, 36, 178)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#444444"
                style="background-color: rgb(68, 68, 68)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#5c0000"
                style="background-color: rgb(92, 0, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#663d00"
                style="background-color: rgb(102, 61, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#666600"
                style="background-color: rgb(102, 102, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#003700"
                style="background-color: rgb(0, 55, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#002966"
                style="background-color: rgb(0, 41, 102)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#3d1466"
                style="background-color: rgb(61, 20, 102)"
              ></span></span></span
          ><select class="ql-color" style="display: none">
            <option selected="selected"></option>
            <option value="#e60000"></option>
            <option value="#ff9900"></option>
            <option value="#ffff00"></option>
            <option value="#008a00"></option>
            <option value="#0066cc"></option>
            <option value="#9933ff"></option>
            <option value="#ffffff"></option>
            <option value="#facccc"></option>
            <option value="#ffebcc"></option>
            <option value="#ffffcc"></option>
            <option value="#cce8cc"></option>
            <option value="#cce0f5"></option>
            <option value="#ebd6ff"></option>
            <option value="#bbbbbb"></option>
            <option value="#f06666"></option>
            <option value="#ffc266"></option>
            <option value="#ffff66"></option>
            <option value="#66b966"></option>
            <option value="#66a3e0"></option>
            <option value="#c285ff"></option>
            <option value="#888888"></option>
            <option value="#a10000"></option>
            <option value="#b26b00"></option>
            <option value="#b2b200"></option>
            <option value="#006100"></option>
            <option value="#0047b2"></option>
            <option value="#6b24b2"></option>
            <option value="#444444"></option>
            <option value="#5c0000"></option>
            <option value="#663d00"></option>
            <option value="#666600"></option>
            <option value="#003700"></option>
            <option value="#002966"></option>
            <option value="#3d1466"></option>
          </select>
          <span class="ql-background ql-picker ql-color-picker"
            ><span
              class="ql-picker-label"
              tabindex="0"
              role="button"
              aria-expanded="false"
              aria-controls="ql-picker-options-3"
              ><svg viewBox="0 0 18 18">
                <g class="ql-fill ql-color-label">
                  <polygon
                    points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"
                  ></polygon>
                  <rect height="1" width="1" x="4" y="4"></rect>
                  <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon>
                  <rect height="1" width="1" x="2" y="6"></rect>
                  <rect height="1" width="1" x="3" y="5"></rect>
                  <rect height="1" width="1" x="4" y="7"></rect>
                  <polygon
                    points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"
                  ></polygon>
                  <rect height="1" width="1" x="2" y="12"></rect>
                  <rect height="1" width="1" x="2" y="9"></rect>
                  <rect height="1" width="1" x="2" y="15"></rect>
                  <polygon
                    points="4.63 10 4 10 4 11 4.192 11 4.63 10"
                  ></polygon>
                  <rect height="1" width="1" x="3" y="8"></rect>
                  <path
                    d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"
                  ></path>
                  <path
                    d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"
                  ></path>
                  <path
                    d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"
                  ></path>
                  <rect height="1" width="1" x="12" y="2"></rect>
                  <rect height="1" width="1" x="11" y="3"></rect>
                  <path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"></path>
                  <rect height="1" width="1" x="2" y="3"></rect>
                  <rect height="1" width="1" x="6" y="2"></rect>
                  <rect height="1" width="1" x="3" y="2"></rect>
                  <rect height="1" width="1" x="5" y="3"></rect>
                  <rect height="1" width="1" x="9" y="2"></rect>
                  <rect height="1" width="1" x="15" y="14"></rect>
                  <polygon
                    points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"
                  ></polygon>
                  <rect height="1" width="1" x="13" y="7"></rect>
                  <rect height="1" width="1" x="15" y="5"></rect>
                  <rect height="1" width="1" x="14" y="6"></rect>
                  <rect height="1" width="1" x="15" y="8"></rect>
                  <rect height="1" width="1" x="14" y="9"></rect>
                  <path
                    d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"
                  ></path>
                  <rect height="1" width="1" x="14" y="3"></rect>
                  <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon>
                  <rect height="1" width="1" x="15" y="2"></rect>
                  <rect height="1" width="1" x="12" y="5"></rect>
                  <rect height="1" width="1" x="13" y="4"></rect>
                  <polygon
                    points="12.933 9 13 9 13 8 12.495 8 12.933 9"
                  ></polygon>
                  <rect height="1" width="1" x="9" y="14"></rect>
                  <rect height="1" width="1" x="8" y="15"></rect>
                  <path
                    d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"
                  ></path>
                  <rect height="1" width="1" x="5" y="15"></rect>
                  <path
                    d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"
                  ></path>
                  <rect height="1" width="1" x="11" y="15"></rect>
                  <path
                    d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"
                  ></path>
                  <rect height="1" width="1" x="14" y="15"></rect>
                  <rect height="1" width="1" x="15" y="11"></rect>
                </g>
                <polyline
                  class="ql-stroke"
                  points="5.5 13 9 5 12.5 13"
                ></polyline>
                <line
                  class="ql-stroke"
                  x1="11.63"
                  x2="6.38"
                  y1="11"
                  y2="11"
                ></line></svg></span
            ><span
              class="ql-picker-options"
              aria-hidden="true"
              tabindex="-1"
              id="ql-picker-options-3"
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#000000"
                style="background-color: rgb(0, 0, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#e60000"
                style="background-color: rgb(230, 0, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#ff9900"
                style="background-color: rgb(255, 153, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#ffff00"
                style="background-color: rgb(255, 255, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#008a00"
                style="background-color: rgb(0, 138, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#0066cc"
                style="background-color: rgb(0, 102, 204)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item ql-primary"
                data-value="#9933ff"
                style="background-color: rgb(153, 51, 255)"
              ></span
              ><span tabindex="0" role="button" class="ql-picker-item"></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#facccc"
                style="background-color: rgb(250, 204, 204)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#ffebcc"
                style="background-color: rgb(255, 235, 204)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#ffffcc"
                style="background-color: rgb(255, 255, 204)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#cce8cc"
                style="background-color: rgb(204, 232, 204)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#cce0f5"
                style="background-color: rgb(204, 224, 245)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#ebd6ff"
                style="background-color: rgb(235, 214, 255)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#bbbbbb"
                style="background-color: rgb(187, 187, 187)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#f06666"
                style="background-color: rgb(240, 102, 102)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#ffc266"
                style="background-color: rgb(255, 194, 102)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#ffff66"
                style="background-color: rgb(255, 255, 102)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#66b966"
                style="background-color: rgb(102, 185, 102)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#66a3e0"
                style="background-color: rgb(102, 163, 224)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#c285ff"
                style="background-color: rgb(194, 133, 255)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#888888"
                style="background-color: rgb(136, 136, 136)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#a10000"
                style="background-color: rgb(161, 0, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#b26b00"
                style="background-color: rgb(178, 107, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#b2b200"
                style="background-color: rgb(178, 178, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#006100"
                style="background-color: rgb(0, 97, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#0047b2"
                style="background-color: rgb(0, 71, 178)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#6b24b2"
                style="background-color: rgb(107, 36, 178)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#444444"
                style="background-color: rgb(68, 68, 68)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#5c0000"
                style="background-color: rgb(92, 0, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#663d00"
                style="background-color: rgb(102, 61, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#666600"
                style="background-color: rgb(102, 102, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#003700"
                style="background-color: rgb(0, 55, 0)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#002966"
                style="background-color: rgb(0, 41, 102)"
              ></span
              ><span
                tabindex="0"
                role="button"
                class="ql-picker-item"
                data-value="#3d1466"
                style="background-color: rgb(61, 20, 102)"
              ></span></span></span
          ><select class="ql-background" style="display: none">
            <option value="#000000"></option>
            <option value="#e60000"></option>
            <option value="#ff9900"></option>
            <option value="#ffff00"></option>
            <option value="#008a00"></option>
            <option value="#0066cc"></option>
            <option value="#9933ff"></option>
            <option selected="selected"></option>
            <option value="#facccc"></option>
            <option value="#ffebcc"></option>
            <option value="#ffffcc"></option>
            <option value="#cce8cc"></option>
            <option value="#cce0f5"></option>
            <option value="#ebd6ff"></option>
            <option value="#bbbbbb"></option>
            <option value="#f06666"></option>
            <option value="#ffc266"></option>
            <option value="#ffff66"></option>
            <option value="#66b966"></option>
            <option value="#66a3e0"></option>
            <option value="#c285ff"></option>
            <option value="#888888"></option>
            <option value="#a10000"></option>
            <option value="#b26b00"></option>
            <option value="#b2b200"></option>
            <option value="#006100"></option>
            <option value="#0047b2"></option>
            <option value="#6b24b2"></option>
            <option value="#444444"></option>
            <option value="#5c0000"></option>
            <option value="#663d00"></option>
            <option value="#666600"></option>
            <option value="#003700"></option>
            <option value="#002966"></option>
            <option value="#3d1466"></option>
          </select>
        </span>
        <!-- 上下标 -->
        <span class="ql-formats">
          <button class="ql-script" value="sub"></button>
          <button class="ql-script" value="super"></button>
        </span>
        <!-- 段落控制 -->
        <span class="ql-formats">
          <button class="ql-header" value="1"></button>
          <button class="ql-header" value="2"></button>
          <button class="ql-blockquote"></button>
          <button class="ql-code-block"></button>
        </span>
        <!-- 列表和缩进 -->
        <span class="ql-formats">
          <button class="ql-list" value="ordered"></button>
          <button class="ql-list" value="bullet"></button>
          <button class="ql-indent" value="-1"></button>
          <button class="ql-indent" value="+1"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-direction" value="rtl"></button>
          <select class="ql-align">
            <option selected="selected"></option>
            <option value="center"></option>
            <option value="right"></option>
            <option value="justify"></option>
          </select>
        </span>
        <span class="ql-formats">
          <button class="ql-link" type="button">
            <svg viewBox="0 0 18 18">
              <line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line>
              <path
                class="ql-even ql-stroke"
                d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
              ></path>
              <path
                class="ql-even ql-stroke"
                d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
              ></path>
            </svg>
          </button>
          <button class="ql-image" type="button">
            <svg viewBox="0 0 18 18">
              <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>
              <circle class="ql-fill" cx="6" cy="7" r="1"></circle>
              <polyline
                class="ql-even ql-fill"
                points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
              ></polyline>
            </svg>
          </button>
          <button class="ql-video" type="button">
            <svg viewBox="0 0 18 18">
              <rect class="ql-stroke" height="12" width="12" x="3" y="3"></rect>
              <rect class="ql-fill" height="12" width="1" x="5" y="3"></rect>
              <rect class="ql-fill" height="12" width="1" x="12" y="3"></rect>
              <rect class="ql-fill" height="2" width="8" x="5" y="8"></rect>
              <rect class="ql-fill" height="1" width="3" x="3" y="5"></rect>
              <rect class="ql-fill" height="1" width="3" x="3" y="7"></rect>
              <rect class="ql-fill" height="1" width="3" x="3" y="10"></rect>
              <rect class="ql-fill" height="1" width="3" x="3" y="12"></rect>
              <rect class="ql-fill" height="1" width="3" x="12" y="5"></rect>
              <rect class="ql-fill" height="1" width="3" x="12" y="7"></rect>
              <rect class="ql-fill" height="1" width="3" x="12" y="10"></rect>
              <rect class="ql-fill" height="1" width="3" x="12" y="12"></rect>
            </svg>
          </button>
          <button class="ql-formula" type="button">
            <svg viewBox="0 0 18 18">
              <path
                class="ql-fill"
                d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"
              ></path>
              <rect
                class="ql-fill"
                height="1.6"
                rx="0.8"
                ry="0.8"
                width="5"
                x="5.15"
                y="6.2"
              ></rect>
              <path
                class="ql-fill"
                d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"
              ></path>
            </svg>
          </button>
        </span>
        <span class="ql-formats">
          <button class="ql-clean" type="button">
            <svg class="" viewBox="0 0 18 18">
              <line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line>
              <line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line>
              <line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line>
              <line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line>
              <rect
                class="ql-fill"
                height="1"
                rx="0.5"
                ry="0.5"
                width="7"
                x="2"
                y="14"
              ></rect>
            </svg>
          </button>
        </span>
      </div>
      <div ref="quillContainer"></div>
    </div>
  </div>
</template>

<script>
import quill from "quill";

export default {
  mounted() {
    var options = {
      debug: "info",
      modules: {
        toolbar: "#quill-toolbar-container",
      },
      placeholder: "Compose an epic...",
      readOnly: false,
      theme: "snow",
    };

    this.quillEl = new quill(this.$refs.quillContainer, options);
    console.log("quill", this.quillEl);
  },
};
</script>

<style lang="scss" scoped>
@import "~quill/dist/quill.snow.css";
</style>