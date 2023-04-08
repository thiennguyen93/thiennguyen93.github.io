---
title: Liên hệ
date: 2021-08-12 13:05:03
article:
  licenses: false
donates: false
comment: false
excerpt: Gửi ý kiến đóng góp của bạn cho blog
---
<span>
Mình mong nhận được ý kiến đóng góp của các bạn để xây dựng blog ngày càng có nhiều nội dung hữu ích hơn
</span>

<div>
<style>
.card_contact_page {
margin: 100px auto;
text-align: center;
}

.card_contact_page p {
margin-bottom: 72px;
font-size: 18px;
color: #151515;
margin-top: 0;
}

.success {
width: 64px;
}

.path {
stroke-dasharray: 1000;
stroke-dashoffset: 0;
}

.path .circle {
-webkit-animation: dash 2s ease-in-out;
animation: dash 2s ease-in-out;
}

.path .line {
stroke-dashoffset: 1000;
-webkit-animation: dash 4.4s ease-in-out forwards;
animation: dash 4.4s ease-in-out forwards;
}

.path .check {
stroke-dasharray: 700;
animation-delay: 0;
-webkit-animation: dash-check 1s ease-in-out forwards;
animation: dash-check 1s ease-in-out forwards;
}

@-webkit-keyframes dash {
0% {
stroke-dashoffset: 1000;
}

100% {
stroke-dashoffset: 0;
}
}

@keyframes  dash {
0% {
stroke-dashoffset: 1000;
}

100% {
stroke-dashoffset: 0;
}
}

@-webkit-keyframes dash-check {
from {
stroke-dashoffset: 700;
}

to {
stroke-dashoffset: 1400;
}
}

@keyframes  dash-check {
from {
stroke-dashoffset: 700;
}

to {
stroke-dashoffset: 1400;
}
}

.file {
max-width: 541px;
margin: 75px auto;
}
.file span {
text-align: left;
font-size: 13px;
font-weight: 600;
color: #999999;
margin-bottom: 5px;
display: inline-block;
width: 100%;
}
.file-content {
border: 1px solid #E7E7E7;
border-bottom: 0 !important;
}
.file p {
margin-top: 0;
margin-bottom: 0;
}
.file .file-box {
padding: 7px 11px;
border-bottom: 1px solid #E7E7E7;
display: flex;
align-items: center;
justify-content: space-between;
}

.file-box-container {
display: flex;
align-items: center;
}
.file .file-tag {
color: #999999;
font-size: 10px;
font-weight: 700;
background: #E7E7E7;
border-radius: 19px;
padding: 4px 8px;
}
.file .file-name {
font-size: 14px;
font-weight: 500;
color: #000;
margin-left: 7px;
margin-right: 8px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
max-width: 300px;
text-align: left;
}
.file .file-size {
font-size: 13px;
color: #999999;
}
.file .file-btn {
padding: 7px 12px;
letter-spacing: -0.04px;
font-weight: 600;
font-size: 14px;
color: #151515;
background: #E7E7E7;
border-radius: 6px;
text-decoration: none;
}
.file .file-btn:hover {
background: #E0E0E0;
}
@media (max-width: 576px) {
.card_contact_page {
margin: 30px auto 110px;
}
.card_contact_page-p {
margin-bottom: 24px !important;
}
.file {
max-width: 90%;
margin: 45px auto;
}
.file-box {
padding: 14px 11px !important;
align-items: normal !important;
flex-direction: column;
}

.file-box-container {
margin-bottom: 9px;
}

.file .file-name {
max-width: 195px;
}
}
</style>
<!--[if lte IE 9]>
<style>
.path {stroke-dasharray: 0 !important;}
</style>
<![endif]-->
</div>

<div id="feedback-form">
<form id="form" action="">
  <div class="field">
    <label class="label">Họ tên</label>
    <div class="control">
      <input required class="input" type="text" placeholder="Vui lòng nhập họ tên" name="full-name" />
    </div>
  </div>

  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input required class="input" type="email" placeholder="Vui lòng nhập địa chỉ email" value="" name="email" />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <!-- <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span> -->
    </div>
    <!-- <p class="help is-danger">This email is invalid</p> -->
  </div>

  <div class="field">
    <label class="label">Tin nhắn</label>
    <div class="control">
      <textarea required class="textarea" placeholder="Nội dung tin nhắn" name="message"></textarea>
    </div>
  </div>
<article id="error-message" class="message is-danger is-hidden">
  <div class="message-body">
    Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại.
  </div>
</article>
  <div class="field is-grouped">
    <div class="control">
      <button id="submitBtn" type="submit" class="button is-link">Gửi</button>
    </div>
  </div>
</form>
</div>


<!-- BOX THANK YOU -->
<div id="thank-you-box" class="is-hidden">
<div class="card_contact_page">
<svg width="70px" height="70px" class="success" viewBox="0 0 70 70" version="1.1"
xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g transform="translate(-1233.000000, -901.000000)" stroke="#34D183" stroke-width="4">
<g transform="translate(1237.000000, 905.000000)" class="path circle">
<circle class="path circle" cx="32" cy="32" r="32"></circle>
<polyline class="path check" points="48 22.7096774 26.6484279 42.3225806 15.483871 31.5557034">
</polyline>
</g>
</g>
</g>
</svg>
<h1>Cám ơn phản hồi của bạn!</h1>
<p class="card_contact_page-p"><button id="goBackBtn" class="button is-primary is-light">Bấm vào đây để quay lại</button></p>
</div>
</div>
<!-- END BOX THANNK-YOU -->

<script>
  // Get feedbackForm
  var feedBackForm = document.getElementById("feedback-form");

  // Get thankbox
  var thankBox = document.getElementById("thank-you-box");
  
  // Get error message
  var errMsg = document.getElementById("error-message")
  
  // Get main form 
  var form = document.getElementById("form");
  form.addEventListener("submit", formSubmit);
  var url = "https://getform.io/f/3b706801-81e4-46a2-be69-3bde70752114"
  
  // Get button go backk
  var goBackBtn = document.getElementById("goBackBtn")
  goBackBtn.addEventListener("click", goBack);
  
  function goBack() {
    // Hide
    thankBox.classList.add("is-hidden");
    errMsg.classList.add("is-hidden");
  
    // Show
    feedBackForm.classList.remove("is-hidden");
  
    // Clear all inputs/textarea
    const inputs = document.querySelectorAll('input[name="full-name"], input[name="email"], textarea[name="message"]');
    inputs.forEach(input => {
      input.value = '';
    });
  
  }
  
  function formSubmit(e) {
    e.preventDefault()

    const formData = new FormData();
    formData.append(
      'full-name',
      document.querySelector('input[name="full-name"]').value
    )
    formData.append(
      'email',
      document.querySelector('input[name="email"]').value
    )

    formData.append(
      'message',
      document.querySelector('textarea[name="message"]').value
    )

    var submitBtn = document.getElementById("submitBtn");
    submitBtn.innerHTML = "Đang gửi..."
    submitBtn.setAttribute("disabled", "");
  
    errMsg.classList.add("is-hidden")
  

  
  
    fetch(url,
      {
        method: "POST",
        body: formData,
      })
      .then(response => {
        // hide feedback form
        feedBackForm.classList.add("is-hidden");
  
        // show thank box
        thankBox.classList.remove("is-hidden");
      })
      .catch(error => {
        console.log(error);
        errMsg.classList.remove("is-hidden")
      })
      .finally(() => {
        submitBtn.innerHTML = "Gửi"
        submitBtn.removeAttribute("disabled");
      })
  }

</script>
