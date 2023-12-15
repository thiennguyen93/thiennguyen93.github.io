---
title: Thử làm mini game vui vẻ với HTML, CSS và JS
date: 2023/12/15
categories:
- Journal
language: en
toc: false
cover: /assets/img/2023-12-15-thu-lam-mini-game-vui-ve-voi-html-css-javascript-cover.png
cover_lqip: /assets/img/lqip/2023-12-15-thu-lam-mini-game-vui-ve-voi-html-css-javascript-cover.webp
thumbnail: /assets/img/post/thumbnails/2023-12-10-gdg-devfest-hcmc-2023.png
useStyles: ['/assets/styles/img-tilt-effect.css','/assets/styles/bulma-timeline.css']
---
Không giống nhiều bạn trẻ khác, mình không có sở thích chơi game mặc dù đang là Kỹ sư phần mềm tại một công ty phát triển game. Ở công ty ngoài việc đóng góp tiếng cười nhiều khi rất là "voo-tree", mình còn xây dựng hệ thống back-end Back-office dùng để quản lý các tựa game, người chơi và các tính năng có trong game, chứ thật ra hổng có làm game. Game thì có team khác làm.

Ngày xưa, lúc còn học cấp 2, cấp 3 trường làng, mình cũng thử "ra net" chơi FIFA Online, đá PES hay Counter-strike. Hihi, mà chắc là do kỹ năng kém, trình "gà" nên chơi toàn thua và bị ăn chửi. Từ đó, cay ... nên không chơi game nữa 😆😂🤣 chuyển sang mày mò tự học lập trình.

Mấy nay tự nhiên mình lại nảy ra ý tưởng làm con mini game vui vui để học, giống mấy như game của MiniClip ngày xưa á, cái thời mà game viết bằng Flash còn thịnh hành. Chắc chỉ còn dân 8x, 9x mới biết flash game là gì ^⍜^.

Cùng đọc bài viết về con game đầu tay của mình nha...

<!-- more -->

## Demo và ý tưởng
Mời bạn bấm <a href="/games/world-flags-quiz/" target="_blank">vào đây</a> để chơi thử.

Ý tưởng game khá là đơn giản được bắt nguồn từ một short video của kênh **Street interviews** mà mình tình cờ lướt thấy trên Youtube. Người chơi sẽ được xem nhiều hình ảnh quốc kỳ và phải trả lời được tên quốc gia tương ứng.

<div class="card has-text-centered">
<iframe height="320"
src="https://youtube.com/embed/PpQZ76KvfJo"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture;
web-share"
allowfullscreen></iframe>
</div>

Từ ý tưởng trên, mình xây dựng game của mình có hai "mode" chơi
1. Tìm hình ảnh của quốc kỳ theo tên quốc gia. (đã có thể chơi được trên game demo ở trên)
2. Tìm tên quốc gia theo hình ảnh quốc kỳ. (chưa thực hiện)

<p style="text-align: center;">
    <!-- <img width="50%" src="mini-game-screenshot-game-play.png"> -->
    <img class="only-in-light-mode" src="mini-game-screenshot-game-play-light.png" width="50%" >
    <img class="only-in-night-mode" src="mini-game-screenshot-game-play-dark.png" width="50%" >
</p>

Các mode chơi khác có thể được xây dựng trong tương lai
- Xác định vị trí của quốc gia trên bản đồ theo tên hoặc hình ảnh quốc kỳ. Việc chơi theo quốc kỳ ở mode này sẽ khó hơn một chút, bởi bạn phải nhớ được tên quốc gia rồi mới chỉ được quốc gia đó nằm ở đâu.
- Đoán tên quốc gia theo hình ảnh quốc kỳ mà không có gợi ý như mode chơi đầu tiên. Mode này sẽ khá thú vị để đi đố người khác như trong video ở trên.

## Những thứ mình đã dùng để xây dựng game Flags of World

Game của mình chỉ nằm ở mức độ đơn giản, vui vui, vừa chơi giải trí lại biết thêm một vài kiến thức địa lý về quốc gia, quốc kỳ. Phần đồ họa chỉ là vài hiệu ứng chuyển động cơ bản, chứ không thể làm như phim Hollywood được vì làm front-end web còn chưa phải là thế mạnh của mình, chứ chưa nói đến đồ họa làm game.

Mình sẽ liệt kê những thứ mình đã sử dụng để viết con game này nhé

1. HTML, CSS
Phần này chắc chắn không thể thiếu được để xây dựng "mặt tiền" cho game. HTML và CSS không phải là ngôn ngữ lập trình, chúng giúp chúng ta thiết kế dược giao diện nhìn thấy được trên trình duyệt như text (chữ), các nút bấm, quy định về màu sắc, kích thước, vị trí và các chuyển động.
Thư viện CSS mình tận dụng lại luôn thằng <a href="https://bulma.io/" target="_blank">Bulma.io</a> đang dùng trên blog.

2. JavaScript (JS)
JS dùng để viết các function xử lý các hành động của người chơi như các nút bấm qua màn, chọn mode, random câu hỏi, tạo các câu trả lời trắc nghiệm, check lựa chọn người dùng có chính xác không để cộng điểm, điều khiển trình phát âm thanh click, chúc mừng khi chọn đúng đáp án, v.v...
Cái này cũng đơn giản, không cần gì cao siêu, chủ yếu để thêm, bớt css class, thay đổi các thuộc tính như `src=` của thẻ `<img />` khi nạp ảnh là cờ chẳng hạn, thêm một vài chỗ dùng `setTimeout` để canh thời gian chạy kết hợp các hiệu ứng. Gần như chỉ cần biết JS căn bản thì cũng đã đủ dùng.

3. Animation
Hai thư viện mình dùng là: 
✅ <a href="https://cssanimation.io/" target="_blank">CSSanimation.io</a> giúp tạo các hoạt cảnh chuyển màn chơi, hiệu ứng xuất hiện và biến mất, ...
✅ <a href="https://animate.style/" target="_blank">Animate.css</a> chủ yếu mình dùng 02 hiệu ứng  là `tada` khi người chơi nhấp vào đáp án đúng, và hiệu ứng `wobby` khi nhấp vào một đáp an sai.

4. Các hiệu ứng trời sao, pháo hoa khác
Mình dùng  <a href="https://party.js.org/" target="_blank">party.js</a> để tạo hiệu ứng trời đầy sao và hiệu ứng "tung bông tung hoa" khi người dùng chọn đúng đáp án.

<div class="card has-text-centered">
  <button class="button is-primary" onclick="party.confetti(this)">🎉 Tung bông, tung hoa</button>
  <button class="button is-primary" onclick="sparkles()">⭐️ Bầu trời đầy sao</button>
</div>

5. Nguồn dữ liệu
Mình không cần tự chuẩn bị câu hỏi về quốc gia hay hình ảnh quốc kỳ các nước, chứ hơn 200 quốc gia và vùng lãnh thổ mà tự chuẩn bị thì tới mùa quýt mới "release" được nhé. Cụ thể, dữ liệu câu hói trong game được lấy từ 02 trang <a href="https://restcountries.com/" target="_blank">restcountries.com</a> và <a href="https://flagpedia.net/download/api" target="_blank">flagpedia.net</a>. Chân thành cám ơn hai "nhà" trên đã cung cấp miễn phí và đầy đủ dữ liệu để mình sử dụng.
Phần âm thanh trong game thì mình search từ nhiều nguồn miễn phí trên Internet như
<a href="https://pixabay.com" target="_blank">pixabay.com</a> và một vài trang nữa không nhớ rõ T.T. Sound effects license free ráp vô game cho vui tai thôi chứ nghe rất là "chuối" luôn 🍌

## Kết
Sau vài hôm nghiên cứu và "code lách", mình đã xong được mode chơi đầu tiên của game. 
Mời bạn chơi xả "xì-trét" và cũng là để ủng hộ "nhà phát triển" bạn nhé nhé ^^.
Gameplay thì cực kỳ  đơn giản, bạn được chọn đáp án nhiều lần nếu chọn sai (chỉ tính điểm khi bạn chọn đúng ngay lần đầu tiên). Nghĩa là bạn sẽ không bao giờ thua nên cũng không cần lo bị "xử" giống trong Squid Game series đâu heng ^^.

<a href="https://www.imdb.com/title/tt10919420/"><span data-tooltip="Original title: Ojing-eo geim
 - TV Series 2021">Squid Game</span></a>

Cám ơn bạn đã dành thời gian đọc bài này! 🥰😇😍

<p style="text-align: center;">
    <img style="filter: brightness(1); -webkit-filter: brightness(1); height: 150px" src="dalgona-meme.webp">
    <img style="filter: brightness(1); -webkit-filter: brightness(1); height: 150px" src="squid-game-tonton-01.jpeg">
</p>

<script src="/assets/pages/games/world-flags-quiz/js/confetti-effect.js"></script>
<script src="https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"></script>
<script>
sparkles()
</script>