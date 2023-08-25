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
donates: false
---

<div class="about-avatar">
  <img src="/images/thiennguyen-figure.jpeg" class="img-fluid" alt="Thiện Nguyễn">
</div>
<h1 class="title is-3 is-size-4-mobile has-text-centered">
Thien Nguyen
</h1>
<h5 class="title is-3 is-size-8-mobile has-text-centered has-text-grey">Minimalism is not a lack of something.<br />It’s simply the perfect amount of something.</h5>

{% tabs align:centered style:boxed %}

<!-- tab id:about-me-vi "icon:fas fa-cubes" "title:Tiếng Việt" active -->

Xin chào 👋 👋🏻 👋🏽(vẫy tay x3,14),

Chào mừng bạn đến **"khu vườn trên mây 🌥️"** của mình. Mình gọi thế vì đây là nơi để mình nghỉ ngơi, suy ngẫm và sẻ chia những câu chuyện về cuộc sống và công việc.

😆 *Vì code bao năm vẫn chưa thoát nghèo nên mình chỉ đủ tiền mua "sổ đỏ" trên internet và xây nên khu vườn này
(so-called, **The garden in the clouds**)*.

## Về mình 👉 👈

Mình tên đầy đủ là Nguyễn Ngọc Phước Thiện.

Năm 2023, mình tròn 30 tuổi.

Hiện tại mình là kỹ sư phần mềm tại một [công ty phát triển Game của Singapore](/cv/#Work-Experience).

Mình luôn tìm thấy sự mâu thuẫn, ngay cả ở chính bản thân. Chẳng hạn, đề cao chủ nghĩa tối giản nhưng lại thường suy nghĩ theo hướng phức tạp. Thuận tay phải nhưng khi ăn thì dùng đũa tay trái.

Mình đã lập gia đình và đã có một con trai thường gọi là Cà rốt 🥕🥕 (tên cúng cơm do bà nội đặt)

<p style="text-align: center;">
    <img class="frame tilt-right" src="img/carrot-01.jpeg" alt="Cà rốt 🥕" title="Cà rốt" width="60%">
</p>


## Về blog này 🍻

Mình bắt đầu viết blog từ những năm 20 của thế kỷ 21. Trải qua gần 1/3 thập kỷ  hình thành và phát triển, tuy số lượng bài viết không đồ sộ nhưng chúng luôn mang giá trị hoài niệm vô cùng to lớn đối với bản thân mình.

Mình viết những gì mình muốn nên không có những đề tài cụ thể, chỉ đơn giản là đặt bút xuống và viết.

Tương lai, mình dự định sẽ xây dựng thêm chuyên mục Podcast 🎤, thay vì dùng chữ viết thì mình sẽ lời nói để chia sẻ.

## Lời kết

Dù bạn là ai, đến từ đâu, làm công việc gì, cảm ơn bạn đã ghé thăm **Khu vườn trên mây** của mình.

Mình không phải là người truyền cảm hứng (eo ưi...to tát quá), nhưng chắc chắn là người luôn sẵn sàng lắng nghe nếu bạn muốn chia sẻ câu chuyện của chính mình. Biết đâu chúng ta lại có điểm chung nào đó?

Hy vọng bạn tìm thấy điều gì đó thú vị khi đọc bài trên blog của mình.

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
I am a backend developer as well as a father of one child.
I work for Gamify Studios, a game development company located in Ho Chi Minh City, Vietnam.

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