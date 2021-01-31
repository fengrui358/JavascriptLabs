<template>
  <div class="computed-lab">
    测试 层层嵌套的计算属性会不会触发getter
    <div>
      <div>{{ `sum: ${leve1Count + leve2Count}` }}</div>
      <div>{{ `leve1Count: ${leve1Count}` }}</div>
      <div>{{ `leve2Count: ${leve2Count}` }}</div>
      <div>
        <span v-for="item in itemsLevel2" :key="item.name">{{
          item.name
        }}</span>
      </div>
      <input type="button" @click="changeLevel" value="改变数值" />
      <input type="button" @click="deleteOne" value="删除一个" />
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      items: [
        {
          name: "item1",
          items: [
            {
              name: "subItem1",
              level: 1,
            },
            {
              name: "subItem2",
              level: 1,
            },
            {
              name: "subItem3",
              level: 2,
            },
            {
              name: "subItem4",
              level: 2,
            },
            {
              name: "subItem5",
              level: 1,
            },
            {
              name: "subItem6",
              level: 2,
            },
          ],
        },
        {
          name: "item2",
          items: [
            {
              name: "subItem11",
              level: 1,
            },
            {
              name: "subItem12",
              level: 1,
            },
            {
              name: "subItem13",
              level: 2,
            },
            {
              name: "subItem14",
              level: 2,
            },
            {
              name: "subItem15",
              level: 1,
            },
          ],
        },
      ],
    };
  },
  computed: {
    itemsLevel2: function () {
      let result = [];
      this.items.forEach((s) => {
        s.items.forEach((sub) => {
          if (sub.level === 1) {
            result.push(sub);
          }
        });
      });

      return result;
    },
    leve1Count: function () {
      let count = 0;
      this.items.forEach((s) => {
        s.items.forEach((sub) => {
          if (sub.level === 1) {
            count++;
          }
        });
      });
      return count;
    },
    leve2Count: function () {
      let count = 0;
      this.items.forEach((s) => {
        s.items.forEach((sub) => {
          if (sub.level === 2) {
            count++;
          }
        });
      });
      return count;
    },
  },
  methods: {
    changeLevel: function () {
      let changed = false;

      for (let i = 0; i < this.items.length; i++) {
        const s = this.items[i];
        if (changed) {
          break;
        }

        for (let j = 0; j < s.items.length; j++) {
          const item = s.items[j];
          if (changed) {
            break;
          }

          if (item.level === 1) {
            item.level = 2;
            changed = true;
          }
        }
      }
    },
    deleteOne: function () {
      let del = false;

      for (let index = 0; index < this.items.length; index++) {
        if (del) {
          break;
        }

        const item = this.items[index];
        for (let j = 0; j < item.items.length; j++) {
          if (del) {
            break;
          }

          item.items.splice(j, 1);
          del = true;
        }
      }
    },
  },
};
</script>

