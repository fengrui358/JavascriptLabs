<template>
  <div>
    <div>
      <div id="quill-toolbar-container" class="ql-toolbar ql-snow">
        <!-- 字体和字体大小 -->
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
        <!-- 颜色选择 -->
        <span class="ql-formats">
          <select class="ql-color">
            <option selected="selected" value="#000000"></option>
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
          <select class="ql-background">
            <option selected="selected" value="#00000000"></option>
            <option value="#000000"></option>
            <option value="#e60000"></option>
            <option value="#ff9900"></option>
            <option value="#ffff00"></option>
            <option value="#008a00"></option>
            <option value="#0066cc"></option>
            <option value="#9933ff"></option>
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
        <!-- 对齐 -->
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