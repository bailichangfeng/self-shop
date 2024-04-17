<template>
  <el-cascader
    v-model="selectedOptions"
    filterable
    :options="options"
    :filter-method="filterMethod"
    clearable
    placeholder="请选择"
  ></el-cascader>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const selectedOptions = ref([]);

    const options = [
      {
        value: "1",
        label: "Option 1",
        children: [
          {
            value: "1-1",
            label: "Option 1-1"
          },
          {
            value: "1-2",
            label: "Option 1-2"
          }
        ]
      },
      {
        value: "2",
        label: "Option 2",
        children: [
          {
            value: "2-1",
            label: "Option 2-1"
          },
          {
            value: "2-2",
            label: "Option 2-2"
          }
        ]
      }
    ];

    const filterMethod = (node, value, option) => {
      // 自定义过滤方法，根据标签和选项值进行过滤
      return option.label.toLowerCase().includes(value.toLowerCase()) || option.value.toLowerCase().includes(value.toLowerCase());
    };

    return {
      selectedOptions,
      options,
      filterMethod
    };
  }
};
</script>
