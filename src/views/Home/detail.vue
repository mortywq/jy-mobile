<template>
  <top-nav-bar>
    <!-- 需要右边的按钮或者别的就传入slot插槽 -->
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </top-nav-bar>
  <van-button @click="onClick">唤起人脸识别</van-button>
  <div class="demo-container">
    <video
      id="video"
      ref="video"
      :width="winWidth"
      :height="400"
      style="border: 1px solid red"
      preload
      autoplay
      loop
      muted
    ></video>
    <canvas id="canvas" ref="canvas" :width="winWidth" :height="400"></canvas>
  </div>
  <div>下面是你的鬼样子</div>
  <canvas id="canvas2" ref="canvas2" :width="winWidth" :height="400"></canvas>
</template>

<script>
import TopNavBar from "@/components/common/nav-bar";
import { ref, watch } from "vue";

require("../build/tracking.js");
require("../build/data/face-min.js");
export default {
  name: "home-detail",
  components: {
    TopNavBar
  },
  setup() {
    const count = ref(0);
    const isdetected = ref("请您保持脸部在画面中央"); //检测结果提文字
    const winWidth = ref(window.innerWidth); //宽
    const winHeight = ref(window.innerHeight * 0.7); //高
    const video = ref(null); //video
    const canvas = ref(null); //canvas
    const context = ref();
    const canvas2 = ref(null); //截图canvas

    // 停止监听
    const onStopTracking = () => {
      isdetected.value = "";
      context.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
      const ctx = canvas2.value.getContext("2d");
      ctx.drawImage(
        video.value,
        0,
        0,
        canvas2.value.width,
        canvas2.value.height
      ); //这里可以通过canvas生成图片base64 然后发送给后台
      count.value = 0;

      video.value.pause();
      // 关闭摄像头
      video.value.srcObject = null;
    };

    //开始监听
    const onTracked = (event) => {
      if (count.value >= 21) {
        onStopTracking();
        return;
      }
      context.value.clearRect(0, 0, canvas.value.width, canvas.value.height);

      event.data.forEach(function (rect) {
        context.value.strokeStyle = "#a64ceb";
        context.value.strokeRect(rect.x, rect.y, rect.width, rect.height);
        context.value.font = "11px Helvetica";
        context.value.fillStyle = "#fff";
        context.value.fillText(
          "正在检测中",
          rect.x + rect.width + 5,
          rect.y + 11
        );
        if (event.data.length > 0 && count.value <= 20) {
          if (count.value < 0) {
            count.value = 0;
          }
          count.value += 1;
          if (count.value > 20) {
            isdetected.value = "已检测到人脸，正在识别";
          }
        } else {
          count.value -= 1;
          if (count.value < 0) {
            isdetected.value = "请您保持脸部在画面中央";
          }
        }
      });

      // 视频中心展示文字
      context.value.fillText(isdetected.value, 100, 60);
    };

    const onClick = () => {
      context.value = canvas.value.getContext("2d");
      const tracker = new tracking.ObjectTracker("face");
      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);

      tracking.track("#video", tracker, { camera: true });

      tracker.on("track", onTracked);
    };
    return {
      onClick,
      winWidth,
      winHeight,
      video,
      canvas,
      canvas2
    };
  }
};
</script>
<style lang="less" scoped>
.demo-container {
  position: relative;
  height: 400px;
}
video {
  object-fit: fill;
}
#video,
#canvas {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
