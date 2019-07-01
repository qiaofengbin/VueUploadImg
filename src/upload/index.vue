<template>
  <div>
    <h3>请上传您的身份证照片</h3>
    <div>
      <UploadFiles
        @successFn="successFn"
        accept="image/*"
        @uploadCertificatesFront="uploadCertificatesFront"
        img="CertificatesImgFront"
      >
        <img :src="formInline.CertificatesImgFront" alt>
        <i class="el-icon-camera"></i>
        <UploadBtn>上传身份证人像面</UploadBtn>
      </UploadFiles>
    </div>
    <div>
      <UploadFiles
        @successFn="successFn"
        accept="image/*"
        img="CertificatesImgBack"
        @uploadCertificatesBack="uploadCertificatesBack"
      >
        <img :src="formInline.CertificatesImgBack" alt>
        <i class="el-icon-camera"></i>
        <UploadBtn>上传身份证人像面</UploadBtn>
      </UploadFiles>
    </div>
  </div>
</template>
<script>
import UploadFiles from "@/components/uploadFiles";
import UploadBtn from "@/components/uploadBtn";
export default {
  data() {
    return {
      formInline: {
        CertificatesImgFront: "",
        CertificatesImgBack: ""
      }
    };
  },
  components: {
    UploadFiles,
    UploadBtn
  },
  methods: {
    successFn(data) {
      console.log(data);
    },
    uploadCertificatesFront(uploadFilesValue) {
      this.formInline.CertificatesImgFront = uploadFilesValue;
    },
    uploadCertificatesBack(uploadFilesValue) {
      this.formInline.CertificatesImgBack = uploadFilesValue;
    }
  }
};
</script>
<style lang="less" scoped>
h3 {
  line-height: 3.4rem;
  font-size: 1.4rem;
  text-align: center;
}
.upload {
  width: 80%;
  overflow: hidden;
  background: lavender;
  margin: 0 auto;
  border-radius: 4px;
  margin-bottom: 2rem;
  height: 10rem;
  position: relative;
  img {
    position: absolute;
    top: 0;
    width: 100%;
  }
  i {
    font-size: 40px;
    display: block;
    /* margin: 0 auto; */
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -20px;
  }
  .btn-group {
    font-size: 20px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -25%;
  }
}
</style>
