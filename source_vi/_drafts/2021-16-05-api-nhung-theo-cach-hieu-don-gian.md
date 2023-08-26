---
title: API nhưng theo cách hiểu đơn giản
date: 2021/5/16
categories:
- Technology
language: en
toc: false
cover: /gallery/covers/api-nhung-theo-cach-hieu-don-gian.jpg
thumbnail: /gallery/thumbnails/api-nhung-theo-cach-hieu-don-gian_thumbnail.jpg
---
Hôm nọ có một bạn Tester hỏi mình API là gì, dùng để làm gì. Thiệt sự lúc đó không biết trả lời sao cho dễ hiểu. Mình về “ngâm cứu” tìm cách vận dụng chút xíu năng khiếu có hạn về văn học nghệ thuật để viết bài này, giải thích về khái niệm API theo cách hiểu vu vơ của mình. Nếu bạn đọc thấy chỗ nào chưa ưng thì “bình loạn” góp ý nhé. Trân trọng cám ơn!

<!-- more -->
## API là gì?
API viết tắt từ Application Programming Interface dịch sang tiếng Việt nghĩa là “giao diện lập trình ứng dụng“. Định nghĩa về API dễ dàng được tìm thấy trên bất kỳ trang nào từ kết quả tìm kiếm của Google và Wikipedia là một ví dụ điển hình.

> Một giao diện lập trình ứng dụng (tiếng Anh Application Programming Interface, viết tắt API) là một giao diện mà một hệ thống máy tính hay ứng dụng cung cấp để cho phép các yêu cầu dịch vụ có thể được tạo ra từ các chương trình máy tính khác, và/hoặc cho phép dữ liệu có thể được trao đổi qua lại giữa chúng. (Nguồn: Wikipedia)

Đọc định nghĩa trên xong, nếu bạn lại tự hỏi “Vậy ai dùng API và dùng để làm gì?“. Mình trả lời luôn: Người sử dụng API chủ yếu là các Developers và dùng API như một cách để giao tiếp/communicate với các Developers khác. Vậy nên mình sẽ giải thích khái niệm này ở vị trí là một người sử dụng API.

Cái gọi là “Giao diện lập trình ứng dụng” hoặc API nói cho nôm na dễ hiểu chính là công cụ giúp ứng dụng của mình tương tác với ứng dụng của người khác xây dựng. Lúc đó, mình sẽ là người sử dụng API do ứng dụng khác cung cấp và tất nhiên phải có cái gật đầu của họ. Cũng có khi là ngược lại, mình đi xây dựng API cho người khác sử dụng để phần mềm của họ tương tác với phần mềm ứng dụng của mình. Điều quan trọng nhất đó là hai ứng dụng này có thể cùng hoặc khác nhau hoàn toàn về nền tảng, ví dụ: một ứng dụng Windows viết bằng C++ có thể kết nối với cơ sở dữ liệu của Oracle chẳng hạn.

Phần mơ hồ nhất của khái niệm về API có lẽ đến từ chữ “Interface”, nghĩa là “giao diện” trong tiếng Việt. Để dễ hình dùng mình sẽ sử dụng biện pháp tu từ “hoán dụ” được học trong chương trình ngữ văn phổ thông, tức là liên hệ với một khái niệm khác có nét tương cận để làm tăng sức gọi hình, gợi cảm cho sự diễn đạt. Đùa thôi, quay trở lại vấn đề chính thì khái niệm liên hệ mình muốn nhắc đến ở đây chính là “User Interface”/UI hay “Giao diện người dùng”. Chẳng mấy xa lạ phải không? Ngày nay khi nghe đến UI bạn nghĩ ngay đến những gì bạn thấy trên màn hình như cửa sổ, nút bấm, thanh cuộn, checkbox, dropbox, menu, vân vân và mây mây. Chắc bạn đã từng mở một tập văn bản word ra, gõ vài chữ rồi bấm cái nút Save với biểu tượng chiếc đĩa mềm bé bé xinh xinh để lưu lại những thay đổi. Vậy có bao giờ bạn nghĩ ứng dụng Word sẽ làm gì khi bạn bấm cái nút ấy không? Không. Mình tin bạn sẽ chẳng mảy may quan tâm đến điều đó, tất nhiên rồi vì bạn đã có UI. Chỉ cần biết nút ấy là lưu, không cần biết ứng dụng Word phải làm gì hay sâu hơn nữa hệ thống sẽ làm gì để điều khiển ổ cứng đọc/ghi từng bit dữ liệu.

Chữ “Interface” trong API cũng mang ý nghĩa như thế và người dùng ở đây chính là các Dev như mình. Trong khi User Interface là tương tác giữa người dùng và ứng dụng, thì API là tương tác giữa ứng dụng và ứng dụng. Khi dùng API để tương tác với một ứng dụng khác, mình cũng không quan tâm ứng dụng bên kia thực hiện bên dưới như thế nào (đi truy vấn, đi trích xuất dữ liệu gì đó mặc kệ), chỉ mình cần đặt ra yêu cầu, chờ bên kia thực hiện, nhận kết quả trả về vì có phải yêu cầu nào cũng được đáp ứng hết đâu chứ. Cứ như thế mình có thể điều khiển được ứng dụng kia bằng cách gọi API yêu cầu bên kia thực hiện thao tác gì đó. Đây cũng là cách thức mà các ứng dụng tương tác với nhau dù là cùng hay khác nền tảng hệ thống.

Đôi lúc cái mà chúng ta tương tác ở đây không hẳn phải là một ứng dụng hoàn chỉnh, mà có thể là một thư viện hỗ trợ người lập trình thực hiện một chức năng nào đó thôi. Lúc này, người lập trình sẽ sử dụng các hàm mà thư viện đó cung cấp sẵn mà không quan tâm đến “code nhà người ta” viết và chạy như thế nào, miễn là cho ra kết quả mong muốn là được. Vậy các hàm này cũng được gọi là API của thư viện. Việc ta gọi các hàm này cũng được gọi là sử dụng API của thư viện.

## Tóm tại
- **API** viết tắt từ “***Appliction Programming Interface***” hay “Giao diện lập trình ứng dụng”.
- Đối tượng sử dụng của API chủ yếu là các developer/lập trình viên.
- API giúp ứng dụng của mình xây dựng tương tác với ứng dụng/thư viện của người khác xây dựng.
- Người dùng API không quan tâm đến code của người ta viết như thế nào, chỉ cần biết người ta đã viết sẵn những hàm/thủ tục nào hỗ trợ để gọi. Nói cách khác, những hàm/thủ tục này cũng chính là API.
- Sử dụng API cũng giống như dùng cái remote để điều khiển chiếc tivi vậy đó, bấm nút và chờ chuyển kênh, không cần biết về nguyên lý hoạt động của chiếc tivi như thế nào. 

Bài viết trên là cách hiểu của riêng mình về API dưới góc độ một nhà phát triển ứng dụng (nói cho sang mồm hay “nổ” chứ thiệt ra là “một người ngáo code”). Trong thời gian sắp tới, mình sẽ viết một bài về các loại API, các bạn nhớ đón đọc nhé!
