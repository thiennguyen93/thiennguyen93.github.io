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

<script>
  $(function() {
    $("#ajaxForm").on('submit', function(event) {
      var $form = $(this);
      console.log("Form submit");
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        success: function() {
          $("#feedback-form").toggle("slide").find("textarea").val('');
        }
      });
      event.preventDefault();
	});
});


</script>

<form id="ajaxForm" action="https://getform.io/f/3b706801-81e4-46a2-be69-3bde70752114" method="POST">
<div class="field">
  <label class="label">Họ tên</label>
  <div class="control">
    <input required class="input" type="text" placeholder="Vui lòng nhập họ tên" name="full-name">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input required class="input" type="email" placeholder="Vui lòng nhập địa chỉ email" value="" name="email">
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
    <textarea required class="textarea" placeholder="Nội dung tin nhắn"  name="message"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button type="sumit" class="button is-link">Gửi</button>
  </div>
</div>
</form>
