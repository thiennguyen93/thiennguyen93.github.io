---
title: Macbook mới của mình có gì?
date: 2024/10/08
categories:
- Journal
language: en
toc: true
cover: /assets/img/2024-10-08-macbook-cua-minh-co-gi.webp
cover_lqip: /assets/img/lqip/2024-10-08-macbook-cua-minh-co-gi.webp
thumbnail: /assets/img/post/thumbnails/2024-10-08-macbook-cua-minh-co-gi-thumbnail.png
useStyles: ['/assets/styles/img-tilt-effect.css','/assets/styles/bulma-timeline.css','/assets/en/posts/2024-09-02-ky-nghi-le-quoc-khanh-2024/styles.css']
widgets:
  - type: toc
    position: left
    collapsed: true
    index: false
    depth: 2
sidebar:
  left:
    sticky: true
---
Trong năm 2024 này mình được xài đến tận ba em Macbook khác nhau theo thứ tự: M3 Pro (14 inch), M2 Pro (13 inch) và hiện đang dùng em M3 Air (13 inch). Haha thường thì người ta nâng cấp, còn mình thì hạ cấp dần từ bản Pro xuống bản Air. Cuộc sống mà... có lúc "lên voi, xuống chó" cũng là chuyện thường ngày. Nói vậy chứ thật ra thì công ty cấp gì xài nấy ^^, chứ có phải tiền của mình đâu mà đòi hỏi máy này hay máy kia.

{% lotties_player className="is-inline-block animated-emoji" src="https://lottie.host/272b60dd-462d-42a3-8ed6-fec4143633d6/X4FxBascRI.json" width="100px" autoplay loop background="red" %}

Bởi vì cấu hình máy không quá mạnh như "đàn anh" dòng Pro, **"Mac-Air"** không cần một "body 6 múi", không cần vai u thịt bắp. Thay vào đó, "ẻm" sở hữu một thân hình mảnh mai, nhẹ nhàng thanh thoát, có thể ví von như đứa em xinh gái trong nhà hay là cô người yêu mà bao chàng trai hằng mong ước 🥰

Máy của mình cấu hình bình thường, không nâng cấp gì cả (16Gb RAM, 512Gb SSD, Apple M3 Chip). Mình nghĩ cấu hình này cơ bản là đủ dùng cho dev, lâu lâu render vài shot video đăng youtube chắc cũng ổn 🙃. Nhân cơ hội được "unseal" (bóc tem - PV) máy mới, mình lên bài viết chia sẻ cách setup MacOS phục vụ công việc và sở thích cá nhân của mình. Hãy cùng khám phá nhé!

<!-- more -->

<p style="text-align: center">
    <img width="50%" class="in-view-effect frame transition-all lazy"  alt='"Siêu mẫu" Macbook Air M3' title="Siêu mẫu Macbook Air M3" src="/assets/img/20241008_macbook_air_box_1.jpg" data-src="/assets/img/20241008_macbook_air_box_1.jpg">
</p>

## Terminal là gì? Tại sao cần Terminal?
Nếu bạn là dev thì chắc hẳn đã quá quen với Terminal nhỉ? Vậy mình cũng xin cắt nghĩa đơn giản cho những bạn nào chưa biết nhé. 

Chắc hẳn bạn đã quen thuộc với việc tương tác với máy tính thông qua cửa sổ, nút bấm, trỏ chuột, thanh cuộn, bla bla,...rồi phải không? Tất cả chúng được gọi chung Graphical UI (giao diện người dùng đồ họa, GUI). Vậy trước khi những thứ này ra đời, thì người ta sử dụng máy tính bằng cách nào? Câu trả lời đó là nhập lệnh điều khiển. Cách điều khiển máy tính bằng lệnh được gọi là sử dụng Command-line Interface (giao diện dòng lệnh, CLI). 

<p style="text-align: center">
    <img class="in-view-effect transition-all lazy"  alt='Ảnh minh họa: CLI' title="Minh họa CLI" src="/assets/img/20241009_terminal_machine.png" data-src="/assets/img/20241009_terminal_machine.png" width="30%">
</p>

Đến ngày nay khi mà máy móc đã mạnh hơn trước, màn hình xịn hơn, to hơn, rõ đẹp hơn, dĩ nhiên người ta cũng ít dùng dòng lệnh hơn, thay vào đó là những giao diện đồ họa bắt mắt, trực quan và dễ sử dụng hơn và tất nhiên không còn phải nhớ thêm một dòng lệnh nào nữa. Nhưng đâu phải ai cũng vậy, có nhiều người như mình lại thích dùng CLI hơn nè và Terminal chính là ứng dụng mang giao diện dòng lệnh trở lại.

<p style="text-align: center">
    <img width="80%" class="only-in-night-mode in-view-effect frame transition-all lazy" src="/assets/img/SCR-20241009-terminal-dark-bg.jpeg" data-src="/assets/img/SCR-20241009-terminal-dark-bg.jpeg">
    <img width="80%" class="only-in-light-mode in-view-effect frame transition-all lazy" alt="Ứng dụng Terminal mặc định trong MacOS" title="Ứng dụng Terminal mặc định trong MacOS" src="/assets/img/SCR-20241009-terminal-light-bg.jpeg" data-src="/assets/img/SCR-20241009-terminal-light-bg.jpeg">
</p>

### :point_right: Tại sao mình lại dành nhiều đất để viết về terminal vậy? 
Bởi vì mình sẽ dùng terminal để cài đặt hầu hết các ứng dụng trên máy.

### :point_right: Ủa vậy chứ tại sao không cài đặt một cách bình thường hay là muốn làm màu chăng?
Để cho bạn dễ so sánh, mình sẽ minh họa cách bằng cả hai cách luôn.

Cách 1: Mình cài trình duyệt **Google Chrome** một cách bình thường nè:

1. Mở Safari (trình duyệt mặc định của MacOS)
2. Gõ hoặc copy/paste vào thanh địa chỉ từ khóa `Google Chrome` và bấm enter để search
3. Nhấp vào liên kết đầu tiên trong kết quả tìm kiếm.
4. Bấm nút download để tải về
5. Chờ quá trình tải về hoàn tất, kích hoạt file cài đặt đó, đôi khi sẽ cần thêm thao tác xác nhận
6. Tiến hành cài đặt
7. Mở Chrome lên và xài thôi

Cách 2: Dùng terminal để cài **Google Chrome** mình chỉ cần
1. Mở Terminal lên
2. Gõ hoặc copy/paste `brew install --cask google-chrome`, dán vào cửa sổ dòng lệnh (CLI) và bấm enter
3. Ngoáy mũi
4. Rung đùi
5. Nhịp giò
6. Mở Chrome lên và xài thôi

Ahhh, vậy là chỉ có 6 bước (thay vì 7) để cài Chrome bằng Terminal. Tuy chỉ tiết kiệm được một bước thao tác, nhưng cũng tính là nhanh hơn còn gì.

## Cài đặt Homebrew

Nè he... đừng thử gõ lệnh `brew install --cask google-chrome` để install Cờ-rôm nha. Nhiều khả năng là không được đâu, vì trước đó mình cài Homebrew rồi mới gõ lệnh đó được. Cũng hơi "ăn gian" một xíu, nhưng mà mình chỉ cần cài Homebrew lần đầu thôi. Khi Homebrew đã được cài vào máy rồi, cần phần mềm gì thì cũng chỉ là gõ lệnh tương ứng thôi.

### :point_right: Homebrew là gì? Tại sao cần nó?

Homebrew đơn giản chỉ là một ứng dụng quản lý các gói cài đặt (package manager) dành cho MacOS. Ứng dụng này không có giao diện đồ họa mà chủ yếu sẽ là các thao tác qua CLI giúp mình tìm kiếm, cài đặt các phần mềm trong bộ sưu tập đồ sộ của nó.

### :point_right: Cách cài đặt Homebrew


<p style="text-align: center">
    <img width="80%" class="only-in-night-mode in-view-effect transition-all lazy" src="/assets/img/SCR-20241009-homebrew-dark.png" data-src="/assets/img/SCR-20241009-homebrew-dark.png" alt="">
    <img width="80%" class="only-in-light-mode in-view-effect transition-all lazy" src="/assets/img/SCR-20241009-homebrew-light.png" data-src="/assets/img/SCR-20241009-homebrew-light.png" alt="">
</p>

Vào trang chủ https://brew.sh/ và copy dòng lệnh Install Homebrew và paste vào terminal để chạy

{% codeblock Terminal %}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
{% endcodeblock %}

Sau khi cài đặt xong dùng lệnh `brew -v` để kiểm tra. Nếu hiện version đã cài đặt là oke nhé, có thể version sẽ khác tại thời điểm mình cài nhưng không báo lỗi gì là được.

{% codeblock Terminal %}
❯ brew -v
Homebrew 4.4.0
{% endcodeblock %}

## List các phần mềm có trên máy của mình

### 1. Google Chrome

Kẻ mà ai cũng biết là ai

{% codeblock Terminal %}
brew install --cask google-chrome
{% endcodeblock %}

### 2. OpenKey
Bộ gõ tiếng Việt mã nguồn mở khá xịn xò
{% codeblock Terminal %}
brew install --cask openkey
{% endcodeblock %}
<p style="text-align: center">
    <img width="80%" class="only-in-night-mode in-view-effect transition-all lazy" src="/assets/img/SCR-20241009-openkey-dark.png" data-src="/assets/img/SCR-20241009-openkey-dark.png">
    <img width="80%" class="only-in-light-mode in-view-effect transition-all lazy" alt="Giao diện bảng điều khiển của OpenKey" src="/assets/img/SCR-20241009-openkey-light.png" data-src="/assets/img/SCR-20241009-openkey-light.png">
</p>

### 3. Wezterm
Trình Terminal thay thế cái mặc định xấu "đau đớn" trong macOS. Mình có thể tùy chỉnh hình nền, độ mờ cửa sổ.
{% codeblock Terminal %}
brew install --cask wezterm
{% endcodeblock %}

<p style="text-align: center">
    <img width="80%" class="only-in-night-mode in-view-effect frame transition-all lazy" src="/assets/img/SCR-20241009-wezterm-dark.jpeg" data-src="/assets/img/SCR-20241009-wezterm-dark.jpeg">
    <img width="80%" class="only-in-light-mode in-view-effect frame transition-all lazy" alt="Giao diện Wezterm do mình tùy chỉnh nè" src="/assets/img/SCR-20241009-wezterm-light.jpeg" data-src="/assets/img/SCR-20241009-wezterm-light.jpeg">
</p>

### 4. Git
Git là một hệ thống quản lý source code không thể thiếu với dev được ^^
{% codeblock Terminal %}
brew install git
{% endcodeblock %}
Công ty mình đang dùng Github nên mình cài thêm Github CLI nữa
{% codeblock Terminal %}
brew install gh
{% endcodeblock %}

### 5. Microsoft Visual Studio Code
Editor siêu kinh điển của anh em dev, trừ mấy ông xài NeoVim 😇
{% codeblock Terminal %}
brew install --cask visual-studio-code
{% endcodeblock %}

### 6. Datagrip
Công cụ quản trị Database tiện dụng, hỗ trợ rất nhiều loại CSDL khác nhau (PostgreSQL, MongoDB, Redis, MySQL, v.v..)
License Edu đang mượn của ***Ms Sương (Khoa Ngoại ngữ - ĐH Sư Phạm Kỹ Thuật TP.HCM)*** 🥰 :cherry_blossom: Cảm ơn Ms Sương nếu cô có tình cờ đọc bài viết này của em.

{% codeblock Terminal %}
brew install --cask datagrip
{% endcodeblock %}

### 7. Shottr
Ứng dụng screenshot với nhiều chức năng tiện dụng. 
Phần lớn các ảnh minh họa trên blog đều được chụp bằng phần mềm này hihi 😊
{% codeblock Terminal %}
brew install --cask shottr
{% endcodeblock %}

### 8. Postman
Ứng dụng phục vụ kiểm thử API
{% codeblock Terminal %}
brew install --cask postman
{% endcodeblock %}

### 9. Hammerspoon
Nếu bên Windows có AutoHotkey thì bên MacOS có Hammerspoon. Ứng dụng cho phép cài đặt phím tắt tùy ý để thao tác với cửa sổ, trỏ chuột, bàn phím, v.v...
{% codeblock Terminal %}
brew install --cask hammerspoon
{% endcodeblock %}

## Kết
Qua bài viết mình trình bày một số khái niệm về UI, CLI, Terminal cũng như sự tiện lợi khi mình dùng Terminal để cài đặt các ứng dụng. Mình cũng liệt kê một số phần mềm *<ins>không thể không có</ins>* trên máy tính của mình. Thật ra còn hàng tá thứ "linh ta, linh tinh" khác nữa, nhưng để giữ khuôn khổ bài viết được ngắn gọn mình không đề cập hết, mong các bạn thông cảm 😌. 

Nếu bạn thấy hay, hãy ~like (quên mất! Mình không câu like ^^) và~ share bài viết này và tiếp tục ủng hộ blog của mình nữa nhé.

<p style='text-align: right;'> Hihi 🥰 </p>
