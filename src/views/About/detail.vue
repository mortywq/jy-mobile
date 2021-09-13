<template>
  <div >
    <top-nav-bar>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </top-nav-bar>
    <div>{{ $route.meta.title }}</div>
    <button @click="toImg">导出</button>
    <div id="formContent" style="color: red">
      测试一下
    </div>
  </div>
</template>

<script>
import TopNavBar from "@/components/common/nav-bar";
import html2canvas from "html2canvas";
import printJS from "print-js"
export default {
  name: "about-detail",
  components: {
    TopNavBar
  },
  setup() {
    const toImg = () => {
      // 转图片打印
      const targetDom = document.querySelector("#formContent");
      // const copyDom = targetDom.cloneNode(true)
      // copyDom.style.width = targetDom.scrollWidth + 'px'
      // copyDom.style.height = targetDom.scrollHeight + 'px'
      // document.body.appendChild(copyDom)
      html2canvas(targetDom, {
        backgroundColor: null,
        useCORS: true,
        height: targetDom.scrollHeight,
        width: targetDom.scrollWidth
      }).then((canvas) => {
        // let url = canvas.toDataURL('image/jpeg', 1.0)
        const url = canvas.toDataURL();
        printJS({
          printable: url,
          type: "image",
          documentTitle: "打印图片"
        });
      });
    };
    return {
      toImg
    };
  }
};
</script>
<style lang="less" scoped></style>
