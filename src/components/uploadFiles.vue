<template>
  <div class="upload">
    <template v-if="capture">
      <!-- 拍照-->
      <input type="file" @change="onUpload($event,{img})" :accept="accept" :capture="capture">
    </template>
    <template v-else>
      <input type="file" @change="onUpload($event,{img})" :accept="accept">
    </template>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UploadFiles",
  data() {
    return {
      formInline: {
        CertificatesImgFront: "",
        CertificatesImgBack: ""
      }
    };
  },
  props: {
    accept: {
      type: String,
      default: "image/*"
    },
    capture: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    }
  },
  methods: {
    onUpload(e, img) {
      // 利用fileReader对象获取file
      var file = e.target.files[0];
        var filesize = file.size;
        var filename = file.name;
        // 2,621,440   2M
        if (filesize > 2101440) {
          // 图片大于2MB
          console.log("大于2101440");
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
      if (img.img == "CertificatesImgFront") {
        reader.onload = e => {
          // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
          var imgcode = e.target.result;
          this.$emit("uploadCertificatesFront", imgcode);
        };
      } else {
        reader.onload = e => {
          // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
          var imgcode = e.target.result;
          this.$emit("uploadCertificatesBack", imgcode);
        };
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 100%;
  font-size: 100px;
  opacity: 0;
  z-index: 1;
  position: relative;
}
</style>
