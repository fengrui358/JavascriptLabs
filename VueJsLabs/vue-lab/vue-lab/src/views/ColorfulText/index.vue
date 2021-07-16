<script>
function getRenderSpanStyle(segment) {
  if (segment && typeof(segment) != 'string') {
    if (segment.color) {
      return {
        style: `color: ${segment.color};`
      }
    }
  }
}

function getRenderSpanText(segment) {
  if (segment) {
    if (typeof(segment) === 'string') {
      return segment;
    }
    else if (segment.text) {
      return segment.text
    }
  }
}

export default {
  render(h) {
    let rederSpans = [];
    this.spans.forEach((s) => {
      const style = getRenderSpanStyle(s);
      const text = getRenderSpanText(s);
      if (style) {
        rederSpans.push(h("span", { attrs: getRenderSpanStyle(s) }, text));
      } else {
        rederSpans.push(h("span", text));
      }
    });
    return h("span", rederSpans);
  },
  props: {
    textFormat: {
      type: String,
      default: "",
    },
    params: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    spans: function () {
      let arr = [];
      let regex = /{[^{}]+?}/g;
      let remaining = this.textFormat;
      let regexMatch = regex.exec(this.textFormat);
      let lastIndex = 0;
      const paramsEntries = Object.entries(this.params);

      while (regexMatch) {
        const key = this.textFormat.slice(
          regexMatch.index + 1,
          regex.lastIndex - 1
        );

        // 查找匹配的键是否有对应参数对象
        let param = paramsEntries.find((s) => s[0] === key);
        if (param) {
          const prefixes = this.textFormat.slice(lastIndex, regexMatch.index);
          arr.push(prefixes);

          // 替换
          arr.push(param[1]);
        } else {
          const prefixes = this.textFormat.slice(lastIndex, regex.lastIndex);
          arr.push(prefixes);
        }

        remaining = this.textFormat.slice(regex.lastIndex);

        lastIndex = regex.lastIndex;
        regexMatch = regex.exec(this.textFormat);
      }

      if (remaining) {
        arr.push(remaining);
      }

      console.log("原始", this.textFormat, arr);
      return arr;
    },
  },
};
</script>