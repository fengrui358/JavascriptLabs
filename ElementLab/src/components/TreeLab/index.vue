<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 render-content</p>
      <el-tree
        ref="tree1"
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        highlight-current
        :current-node-key="currentNodeKey"
        :render-content="renderContent"
      ></el-tree>
    </div>
    <div class="block">
      <p>使用 scoped slot</p>
      <el-tree
        ref="tree2"
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        highlight-current
        :current-node-key="currentNodeKey"
        :expand-on-click-node="false"
        @current-change="currentChange"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button type="text" size="mini" @click="() => append(data)">Append</el-button>
            <el-button type="text" size="mini" @click="() => remove(node, data)">Delete</el-button>
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
let id = 1000;

export default {
  data() {
    const data = [
      {
        id: 1,
        label: "一级 1",
        children: [
          {
            id: 4,
            label: "二级 1-1",
            children: [
              {
                id: 9,
                label: "三级 1-1-1",
              },
              {
                id: 10,
                label: "三级 1-1-2",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: "一级 2",
        children: [
          {
            id: 5,
            label: "二级 2-1",
          },
          {
            id: 6,
            label: "二级 2-2",
          },
        ],
      },
      {
        id: 3,
        label: "一级 3",
        children: [
          {
            id: 7,
            label: "二级 3-1",
          },
          {
            id: 8,
            label: "二级 3-2",
          },
        ],
      },
    ];
    return {
      data: JSON.parse(JSON.stringify(data)),
      currentNodeKey: 2,
    };
  },
  watch: {
    currentNodeKey: function (newValue, oldValue) {
      console.log(`${newValue} -- ${oldValue}`);
    },
  },
  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },

    renderContent(h, { node, data }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              Append
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      );
    },

    currentChange(data, node) {
      //使用current-node-key数据更改推动选中项数据变化无效
      this.currentNodeKey = data.id;
      console.log(this.$refs.tree1.getCurrentKey());

      this.$refs.tree1.setCurrentKey(data.id)
      //this.$refs.tree2.setCurrentKey = 0;
      console.log(data);
      console.log(node);
    },
  },
};
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>