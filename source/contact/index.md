---
title: Liên hệ
date: 2021-08-12 13:05:03
article:
  licenses: false
donates: false
comment: false
excerpt: Gửi ý kiến đóng góp của bạn cho blog
---
Mình mong nhận được ý kiến đóng góp của các bạn để xây dựng blog ngày càng có nhiều nội dung hữu ích hơn

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

  <div class="field is-grouped">
    <div class="control">
      <button type="sumit" class="button is-link">Gửi</button>
    </div>
  </div>
</form>

<script>
  var form = document.getElementById("form");
  form.addEventListener("submit", formSubmit);
  // https://getform.io/f/3b706801-81e4-46a2-be69-3bde70752114
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

    fetch("https://getform.io/f/{your-form-endpoint}",
      {
        method: "POST",
        body: formData,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

</script>
