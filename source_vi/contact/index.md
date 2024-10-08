---
title: Liên hệ
date: 2021-08-12 13:05:03
article:
  licenses: false
donates: false
comment: false
excerpt: Gửi ý kiến đóng góp của bạn cho blog
widgets: false
---
<p id="form-caption">
Hoan nghênh mọi ý kiến đóng góp các bạn để xây dựng blog ngày một chất lượng hơn.
<br /> Cảm ơn bạn đã ủng hộ <strong>Khu vườn trên mây 🌥️</strong>!
</p>

<div>
<style>
.card_contact_page {
margin: 100px auto;
text-align: center;
}
body:not(.light) input::placeholder, 
body:not(.light) textarea::placeholder {
  color: #c0c0c0;
}
body:not(.light) .control.has-icons-left .input:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon, .control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .select:focus ~ .icon {
    color: unset;
}
</style>
</div>

<div id="feedback-form">
<form id="form" action="">
<fieldset id="form-fieldset">
  <!-- NAME  -->
  <div class="field">
    <label class="label has-text-grey">Tên</label>
    <div class="control">
      <input required class="input" type="text" placeholder="Nhập tên của bạn" name="full-name" />
    </div>
  </div>

  <div class="field">
    <label class="label has-text-grey">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input required class="input" type="email" placeholder="Nhập địa chỉ email của bạn" value="" name="email" />
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
    <label class="label has-text-grey">Lời nhắn</label>
    <div class="control">
      <textarea required class="textarea" placeholder="Hãy viết điều gì đó cho tôi..." name="message"></textarea>
    </div>
  </div>
<article id="error-message" class="message is-danger is-hidden">
  <div class="message-body">
    Oops, đã có lỗi xảy ra. Xin vui lòng thử lại.
  </div>
</article>
  <div class="field is-grouped">
    <div class="control">
      <button id="submitBtn" type="submit" class="button is-link">Gửi</button>
    </div>
  </div>
</fieldset>
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
<h1>Cám ơn bạn!</h1>
<p class="card_contact_page-p"><button id="goBackBtn" class="button is-primary is-light">Click here to go back</button></p>
</div>
</div>
<!-- END BOX THANNK-YOU -->

<script>
  var classIsHidden = "is-hidden"
  var attributeDisabled = "disabled"
  
  // Get feedbackForm
  var feedBackForm = document.getElementById("feedback-form");
  var formFieldset = document.getElementById("form-fieldset");

  // Get thankbox
  var thankBox = document.getElementById("thank-you-box");
  
  // Get error message
  var errMsg = document.getElementById("error-message")
  
  // Get main form 
  var form = document.getElementById("form");
  form.addEventListener("submit", formSubmitTallyForm);
  var url = "https://getform.io/f/alljneva"
  
  // Get button go backk
  var goBackBtn = document.getElementById("goBackBtn")
  goBackBtn.addEventListener("click", goBack);
  
  // Get caption 
  var formCaption = document.getElementById("form-caption")
  
  function goBack() {
    // Hide
    thankBox.classList.add(classIsHidden);
    errMsg.classList.add(classIsHidden);
  
    // Show
    feedBackForm.classList.remove(classIsHidden);
    formCaption.classList.remove(classIsHidden);

    // Enable fieldset
    formFieldset.removeAttribute(attributeDisabled);
  
    // Clear all inputs/textarea
    const inputs = document.querySelectorAll('input[name="full-name"], input[name="email"], textarea[name="message"]');
    inputs.forEach(input => {
      input.value = '';
    });
  
  }

  function submitGoogleForm(e) {
    e.preventDefault()

    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScp3Y7X1XN7iaCtbZuoFaXv9JP-ArwKYfhdMp3b7EcL5AI3cA/formResponse?&submit=Submit"

    const fullname = document.querySelector('input[name="full-name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value
    // Build form headers
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Access-Control-Allow-Origin","*")

    // Build form data
    var urlencoded = new URLSearchParams();
    urlencoded.append("entry.1716012579", message);
    urlencoded.append("entry.869462205", fullname);
    urlencoded.append("entry.87127782", email);

    // Request options
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
      mode: "no-cors"
    };

    var submitBtn = document.getElementById("submitBtn");
    submitBtn.innerHTML = "Sending..."
    submitBtn.setAttribute(attributeDisabled, "");
  
    errMsg.classList.add(classIsHidden)

    // Disabled 
    formFieldset.setAttribute(attributeDisabled, "");
  
    fetch(googleFormUrl,
      requestOptions)
      .then(response => {
        // hide feedback form
        feedBackForm.classList.add(classIsHidden);
        formCaption.classList.add(classIsHidden);
  
        // show thank box
        thankBox.classList.remove(classIsHidden);
      })
      .catch(error => {
        console.log(error);
        errMsg.classList.remove(classIsHidden)
      })
      .finally(() => {
        submitBtn.innerHTML = "Send"
        submitBtn.removeAttribute(attributeDisabled);
        formFieldset.removeAttribute(attributeDisabled);
      })
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
    submitBtn.innerHTML = "Sending..."
    submitBtn.setAttribute(attributeDisabled, "");
  
    errMsg.classList.add(classIsHidden)

    // Disabled 
    formFieldset.setAttribute(attributeDisabled, "");
  
    fetch(url,
      {
        method: "POST",
        body: formData,
      })
      .then(response => {
        // hide feedback form
        feedBackForm.classList.add(classIsHidden);
        formCaption.classList.add(classIsHidden);
  
        // show thank box
        thankBox.classList.remove(classIsHidden);
      })
      .catch(error => {
        console.log(error);
        errMsg.classList.remove(classIsHidden)
      })
      .finally(() => {
        submitBtn.innerHTML = "Send"
        submitBtn.removeAttribute(attributeDisabled);
        formFieldset.removeAttribute(attributeDisabled);
      })
  }

  function formSubmitTallyForm(e) {
    e.preventDefault()

    const tallyFormUrl = "https://api.tally.so/forms/mVYlvv/respond"
    // Tally.so Form account: hi[at]thiennguyen.dev

    const fullname = document.querySelector('input[name="full-name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value
    // Build form headers
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin","*")

    // Request options
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        "sessionUuid": crypto.randomUUID(),
        "respondentUuid": crypto.randomUUID(),
        "responses": {
            "4dac5065-59ab-48f2-b7c7-f560616bd969": fullname,
            "83fc9110-3216-457a-844a-623dfdb03aca": email,
            "a958e6ae-d2d3-472b-8cb8-a6fa5fbc12b1": message
        },
        "isCompleted": true
      }),
      redirect: 'follow'
    };

  var submitBtn = document.getElementById("submitBtn");
  submitBtn.innerHTML = "Sending..."
  submitBtn.setAttribute(attributeDisabled, "");

  errMsg.classList.add(classIsHidden)

  // Disabled 
  formFieldset.setAttribute(attributeDisabled, "");

  fetch(tallyFormUrl,
    requestOptions)
    .then(response => {
      // hide feedback form
      feedBackForm.classList.add(classIsHidden);
      formCaption.classList.add(classIsHidden);

      // show thank box
      thankBox.classList.remove(classIsHidden);
    })
    .catch(error => {
      console.log(error);
      errMsg.classList.remove(classIsHidden)
    })
    .finally(() => {
      submitBtn.innerHTML = "Send"
      submitBtn.removeAttribute(attributeDisabled);
      formFieldset.removeAttribute(attributeDisabled);
    })


  }

</script>
