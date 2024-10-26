---
title: About
date: 2021-08-09 10:46:34
lang: en
toc: false
article:
  licenses: false
enableDate: false
cover: images/page-about-cover.jpeg
classNames: ['custom-page-about']
coverClassnames: ['custom-page-about-cover']
titleClassnames: ['custom-page-about-title']
useStyles: ['/assets/styles/img-tilt-effect.css','css/styles.css']
widgets: false
---

<div class="about-avatar">
  <img src="/images/thiennguyen-figure.jpeg" class="img-fluid" alt="Thiện Nguyễn">
</div>
<h1 class="title is-3 is-size-4-mobile has-text-centered" style="line-height: 1;">
Thien Nguyen <span class="verified-account-badge"><img src='/assets/img/verified-account.svg' class="img-reset-brightness not-gallery-item" /></span>
<div class="is-3 is-size-4-mobile has-text-centered"><span style="font-size:1rem">/tiːɛn ˈwɪn/</span></div>
</h1>
<h5 class="title is-3 is-size-8-mobile has-text-centered has-text-grey">Minimalism is not a lack of something.<br />It’s simply the perfect amount of something.</h5>

{% tabs align:centered style:boxed %}

<!-- tab id:about-me-vi "icon:fas fa-cubes" "title:Tiếng Việt" active -->

Xin chào 👋 👋🏻 👋🏽(vẫy tay x3,14),

Chào mừng bạn đến **"khu vườn trên mây 🌥️"** của tôi. Tôi gọi thế vì đây là nơi để tôi nghỉ ngơi, suy ngẫm và sẻ chia những câu chuyện về cuộc sống và công việc.

## Về tôi 👉 👈

Tôi tên đầy đủ là Nguyễn Ngọc Phước Thiện.

Năm 2023, tôi tròn 30 tuổi.

Hiện tại tôi là kỹ sư phần mềm tại một [công ty phát triển Game của Singapore](/cv/#Work-Experience).

Tôi luôn tìm thấy sự mâu thuẫn, ngay cả ở chính bản thân. Chẳng hạn, đề cao chủ nghĩa tối giản nhưng lại thường suy nghĩ theo hướng phức tạp. Thuận tay phải nhưng khi ăn thì dùng đũa tay trái.

Tôi đã lập gia đình và có một bé trai thường gọi là Cà rốt {% lotties_player className="is-inline-block animated-emoji" src="https://lottie.host/9711a9e1-d701-4f09-9da4-9bce347cc1a8/nX0h3fi6lA.lottie" width="1em" height="1em" autoplay loop %}{% lotties_player className="is-inline-block animated-emoji" src="https://lottie.host/9711a9e1-d701-4f09-9da4-9bce347cc1a8/nX0h3fi6lA.lottie" width="1em" height="1em" autoplay loop %} (tên cúng cơm do bà nội đặt)

<p style="text-align: center;">
    <img class="in-view-effect frame tilt-right lazy" src="/assets/pages/about/carrot-02_LQIP.webp" data-src="/assets/pages/about/carrot-02.jpeg" alt="Cà rốt {% lotties_player className="is-inline-block animated-emoji" src="https://lottie.host/9711a9e1-d701-4f09-9da4-9bce347cc1a8/nX0h3fi6lA.lottie" width="1em" height="1em" autoplay loop %}" title="Cà rốt" width="60%">
</p>


## Về blog này {% lotties_player className="is-inline-block animated-emoji" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f37b/lottie.json" width="1em" height="1em" autoplay loop %}

Tôi bắt đầu viết blog từ những năm 20 của thế kỷ 21. Trải qua gần 1/3 thập kỷ  hình thành và phát triển, tuy số lượng bài viết không đồ sộ nhưng chúng luôn mang giá trị hoài niệm vô cùng to lớn đối với bản thân tôi.

Tôi viết những gì tôi muốn nên không có những đề tài cụ thể, chỉ đơn giản là đặt bút xuống và viết.

Tương lai, tôi dự định sẽ xây dựng thêm chuyên mục Podcast 🎤, thay vì dùng chữ viết thì tôi sẽ lời nói để chia sẻ.

## Lời kết

Dù bạn là ai, đến từ đâu, làm công việc gì, cảm ơn bạn đã ghé thăm **Khu vườn trên mây** của tôi.

Tôi không phải là người truyền cảm hứng (eo ưi...to tát quá), nhưng chắc chắn là người luôn sẵn sàng lắng nghe nếu bạn muốn chia sẻ câu chuyện của chính mình. Biết đâu chúng ta lại có điểm chung nào đó?

Hy vọng bạn tìm thấy điều gì đó thú vị khi đọc bài trên blog này.

<br />
<p  style="text-align: right;">
<br />☀️🌈🚀
Chúc bạn một ngày tốt lành!
<br />
<strong>Thiện Nguyễn</strong>
tại <em>Khu vườn trên mây</em>
</p>
<!-- endtab -->

<!-- tab id:about-me-en "icon:fas fa-file-code" "title:English" -->

## About me

Hi 👋, I am Thien Nguyen, aka William Nguyen.
I am a dedicated backend developer and a proud father to a wonderful child.
Currently, I work for Gamify Studios, a game development company located in Ho Chi Minh City, Vietnam.

<!-- endtab -->

{% endtabs %}

<script>
  var tabVi = document.querySelector("a[href='#about-me-vi']");
  if (tabVi) {
    tabVi.dataset.href = tabVi.getAttribute("href");
    tabVi.href = "javascript:;";
  }

  var tabEn = document.querySelector("a[href='#about-me-en']");
  if (tabEn) {
    tabEn.dataset.href = tabEn.getAttribute("href");
    tabEn.href = "javascript:;";
  }

  var liEn = document.querySelector("a[data-href='#about-me-en']").parentElement;
  var liVi = document.querySelector("a[data-href='#about-me-vi']").parentElement;

  var tabContentVi = tabVi.dataset.href;
  tabVi.addEventListener("click", function (e) {
    liEn.classList.remove("is-active");
    liVi.classList.add("is-active");
    openTab(tabContentVi);
  });


  var tabContentEn = tabEn.dataset.href;
  tabEn.addEventListener("click", function (e) {
    liEn.classList.add("is-active");
    liVi.classList.remove("is-active");
    openTab(tabContentEn);
  });

  if (location.hash) {
    openTab(location.hash)
    liEn.classList.remove("is-active");
    liVi.classList.remove("is-active");
    (document.querySelector(`a[data-href='${location.hash}']`) || tabVi )?.parentElement?.classList.add("is-active");

  }

  function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
      x[i].classList.add("is-hidden");
    }
    var tab = document.querySelector(tabName) || document.querySelector(tabContentVi);
    if (tab) {
      tab.classList.remove("is-hidden");
    } 
    if(history.pushState) {
    history.pushState(null, null, tabName);
    }
    else {
        location.hash = tabName;
    }
  }

</script>