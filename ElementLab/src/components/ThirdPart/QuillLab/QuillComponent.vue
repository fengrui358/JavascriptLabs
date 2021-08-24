<template>
  <div ref="quillContainer"></div>
</template>

<script>
import quill from "quill";

export default {
  mounted() {
    var options = {
      debug: "info",
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image"],
        ],
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
@import '~quill/dist/quill.snow.css';
</style>