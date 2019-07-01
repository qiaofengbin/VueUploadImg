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
        <div class="upload-container">
          <p>
            <i class="el-icon-camera"></i>
          </p>
          <UploadBtn>上传身份证人像面</UploadBtn>
        </div>
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
        <div class="upload-container">
          <p>
            <i class="el-icon-camera"></i>
          </p>
          <UploadBtn>上传身份证人像面</UploadBtn>
        </div>
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
  p {
    width: 60px;
    height: 60px;
    background: #ccc;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -20px;
    border-radius: 50%;
    padding-top: 10px;
    i {
      font-size: 40px;
      display: block;
      text-align: center;
      color: #fff;
    }
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
