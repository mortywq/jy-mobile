<template>
  <div>
    <top-nav-bar>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </top-nav-bar>
    <div>{{ $route.meta.title }}</div>
    <button @click="toImg">导出</button>
    <div id="formContent" style="color: red">测试一下</div>
  </div>
</template>

<script>
import TopNavBar from "@/components/common/nav-bar";
import html2canvas from "html2canvas";
import printJS from "print-js";
import jsPDF from "jspdf";
import { ref } from "vue";

export default {
  name: "about-detail",
  components: {
    TopNavBar
  },
  setup() {
    const toImg = () => {
      const formContent = document.querySelector("#formContent");
      var target = formContent;

      html2canvas(target).then(function (canvas) {
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;

        //一页pdf显示html页面生成的canvas高度;
        var pageHeight = (contentWidth / 592.28) * 841.89;
        //未生成pdf的html页面高度
        var leftHeight = contentHeight;
        //页面偏移
        var position = 0;
        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = 595.28;
        var imgHeight = (592.28 / contentWidth) * contentHeight;

        var pageData = canvas.toDataURL("image/jpeg", 1.0);

        var pdf = new jsPDF("", "pt", "a4");

        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        //当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            //避免添加空白页
            if (leftHeight > 0) {
              pdf.addPage();
            }
          }
        }
        let pdfData = pdf.output("datauristring");
        console.log(pdfData);
        return new Promise(async (reslove) => {
          reslove(pdfData);
        }).then((res) => {
          printJS({
            printable: res,
            type: "pdf",
            base64: true
          });
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
