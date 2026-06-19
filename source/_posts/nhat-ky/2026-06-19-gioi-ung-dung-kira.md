---
title: Kira - Ứng dụng truy cập các dịch vụ AWS cho MacOS
description: Mình viết ứng dụng desktop truy cập AWS phục vụ cho công việc hằng ngày của mình
date: 2026/06/19
categories:
- Journal
language: en
toc: true
hide: false
---

Công ty mình hiện đang sử dụng các dịch vụ Cloud Services của AWS nên mình cũng thường xuyên truy cập vào AWS khi làm việc, chủ yếu là sử dụng trình duyệt web. Cảm giác duyệt một đống tab, đi lòng vòng từng mục từ ngoài vào trong để vào đúng chỗ cần kiểm tra quả là bất tiện. Chưa hết…, mỗi lần switch account hoặc để lâu một vài phút session tự timeout, mình bắt buộc phải đăng nhập lại thông qua tài khoản SSO của công ty và việc này khá là mất thời gian. Bỗng ngày nọ, một ý tưởng xuất hiện trong đầu: tại sao mình không viết một ứng dụng chỉ gom những mục mình hay sử dụng vào một chỗ và có thể truy cập bất kỳ lúc nào? Từ ý tưởng đó đơn giản đó, Kira chào đời.

<div style="text-align: center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wBuZkzd5PNY?si=7CY6T1GWEa3uuA09" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<!-- more -->

Kira thuở ban đầu mình viết chỉ là để mình kiểm tra version của các services nằm trong một Cluster của team mình thôi, nhưng về sau mình tích hợp thêm nhiều tiện ích khác nữa. Sau một thời gian phát triển, mình thấy chức năng cũng kha khá nên muốn chia sẽ cùng các bạn. Mong nhận được feedback từ các bạn để Kira ngày càng hoàn thiện hơn.

## Cài đặt
Để cài đặt, bạn truy cập vào trang chủ của Kira tại https://kira.thiennguyen.dev, sau đó bấm nút Download để tải file cài đặt về và cài đặt như một ứng dụng bình thường.

<p style="text-align: center">
    <img width="40%" class="only-in-night-mode in-view-effect frame transition-all lazy" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-welcome-screen-dark.png
    " data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-setup-dark.png"/>
    <img width="40%" class="only-in-light-mode in-view-effect frame transition-all lazy" alt="Kéo thả icon Kira vào mục Applications để cài đặt" title="Kéo thả icon Kira vào mục Applications để cài đặt" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-setup-light.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-setup-light.png"/>
</p>

## Hướng dẫn sử dụng

### 1. Setup AWS Start URL
<p style="text-align: center">
</p>

Lần đầu mở app, Kira sẽ hướng dẫn bạn thêm Start URL. URL này dùng để truy cập AWS Console và thường có dạng https://your-org.awsapps.com/start, như hình bên dưới.

<p style="text-align: center">
    <img width="45%" class="only-in-night-mode in-view-effect frame transition-all lazy" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-welcome-screen-dark.png
" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-welcome-screen-dark.png"/>
    <img width="45%" class="only-in-light-mode in-view-effect frame transition-all lazy" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-welcome-screen-light.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-welcome-screen-light.png"/>
    <img width="45%" class="only-in-night-mode in-view-effect frame transition-all lazy" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-sso-start-url-dark.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-sso-start-url-dark.png"/>
    <img width="45%" class="only-in-light-mode in-view-effect frame transition-all lazy" alt="Hướng dẫn tìm Start SSO Url" title="Hướng dẫn tìm Start SSO Url" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-sso-start-url-light.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-sso-start-url-light.png"/>
</p>

### 2. Đăng nhập vào Account AWS của bạn

Sau khi hoàn tất bước 1, Kira sẽ chuyển đến màn hình đăng nhập. Bạn bấm Login with SSO, đăng nhập tài khoản AWS trong cửa sổ trình duyệt hiện ra, rồi chọn Allow access để cấp quyền cho Kira. 

<p style="text-align: center">
    <img width="45%" class="in-view-effect frame transition-all lazy" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-login-flow-light.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-login-flow-light.png"/>
    <img width="45%" class="in-view-effect frame transition-all lazy" alt="Chọn account và role mà bạn muốn truy cập" title="Chọn account và role mà bạn muốn truy cập" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-aws-accounts-and-roles-dark.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-aws-accounts-and-roles-dark.png"/>
</p>

Sau khi đăng nhập thành công, Kira sẽ hiển thị toàn bộ Accounts và Roles mà bạn được phép truy cập. Kira tự động phân loại theo môi trường ví dụ Production/Staging/Development. Bạn có thể cấu hình lại cách phân loại này trong Settings, nhưng vì khuôn khổ bài viết có giới hạn, mình xin phép không đi quá chi tiết.

### 3. Hướng dẫn sử dụng các chức năng chính
#### **3.1. ECS**

Trong tab ECS, bạn sẽ thấy toàn bộ Clusters và các services của nó. Mình sẽ mình họa các tính năng của Kira thông qua album screenshot để bạn dễ theo dõi.

<div class="justified-gallery mb-4">
    <img class="lazy" src="https://photos.thiennguyen.dev/h=120,q=90,f=webp/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-ecs-legends-dark.png" alt="Bấm vào metrics để mở drawer Service Health (slide kế tiếp)" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-ecs-legends-dark.png" />
    <img class="lazy" src="https://photos.thiennguyen.dev/h=120,q=90,f=webp/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-ecs-service-health-dark.png" alt="Service Health" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-ecs-service-health-dark.png" />
    <img class="lazy" src="https://photos.thiennguyen.dev/h=120,q=90,f=webp/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-task-definition-1-dark.png" alt="Task Definition. Góc trái là nút Compare Task Def (slide tiếp theo)" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-task-definition-1-dark.png" />
    <img class="lazy" src="https://photos.thiennguyen.dev/h=120,q=90,f=webp/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-compare-task-definition-dark.png" alt="So sảnh Task Definitions" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-compare-task-definition-dark.png" />
    <!-- 2026-06-19-gioi-ung-dung-kira-logs-dark -->
    <img class="lazy" src="https://photos.thiennguyen.dev/h=120,q=90,f=webp/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-logs-dark.png" alt="So sảnh Task Definitions" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-logs-dark.png" />
</div>


#### **3.2. Secrets**

Bên trái là cây thư mục để bạn duyệt các secrets, bên phải là chi tiết. Bạn cũng có thể export secret xuống nhiều định dạng khác nhau (JSON, YAML, HTML, .env, Markdown).

<p style="text-align: center">
    <img width="40%" class="in-view-effect frame transition-all lazy" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-secrets-dark.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-secrets-dark.png"/>
    <img width="40%" class="in-view-effect frame transition-all lazy" alt="Kira cho phép bạn export secrets ra nhiều định dạng khác nhau" title="Kira cho phép bạn export secrets ra nhiều định dạng khác nhau" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-export-secrets-dark.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-export-secrets-dark.png"/>
</p>

#### **3.3. S3**

Tính năng chính là quản lý bucket, preview (hỗ trợ các định dạng image/text/pdf), upload, download, copy, paste, rename.

<p style="text-align: center">
    <img width="40%" class="in-view-effect frame transition-all lazy" alt="Kira cho phép bạn preview file trực tiếp nếu định dạng hỗ trợ (text, image, pdf)" title="Kira cho phép bạn preview file trực tiếp nếu định dạng hỗ trợ (text, image, pdf)" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-s3-file-detail-dark.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-s3-file-detail-dark.png"/>
</p>


#### **3.4. Databases**
Kira tự động phát hiện DYNAMODB/RDS connections mà không cần thêm thủ công. Mình chọn Secrets Manager làm credential cho Kira - khi RDS password tự động rotate, secret cũng cập nhật nên Kira vẫn kết nối bình thường. 

Tính năng AI chỉ hoạt động khi bạn đã cài Claude CLI và có tài khoản Claude (xem trong Settings).

Một số tính năng khác: 
- Generate Diagram cho table / schema
- Chỉnh sửa dữ liệu của bảng (table) trực tiếp (Inline edit)
- Shift + Click lên khóa ngoại để link đến bảng có quan hệ
- Ẩn hiện schema / tables

<div class="justified-gallery mb-4">
    <img width="40%" class="in-view-effect frame transition-all lazy" alt="Kira tự động nhận diện RDS/DYNAMODB, có thể chọn secret làm credential" title="Kira tự động nhận diện RDS/DYNAMODB, có thể chọn secret làm credential" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-database-02-dark.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-database-02-dark.png"/>
    <img width="40%" class="in-view-effect frame transition-all lazy" alt="Demo tính năng Ask AI - Smart Query Generator"  src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-database-ai-03-dark.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-database-ai-03-dark.png"/>
    <img width="40%" class="in-view-effect frame transition-all lazy" alt="Bật tính năng Ask AI trong Settings" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-database-ai-04-dark.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-database-ai-04-dark.png"/>
    <img width="40%" class="in-view-effect frame transition-all lazy" alt="Tính năng vẽ ERD Diagram (table)" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-database-06-dark.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-database-06-dark.png"/>
    <img width="40%" class="in-view-effect frame transition-all lazy" alt="Tính năng vẽ ERD Diagram (table)" src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-database-05-dark.png" data-src="https://photos.thiennguyen.dev/f=webp,h=1024/album/blog/2026-06-19-gioi-ung-dung-kira/2026-06-19-gioi-ung-dung-kira-database-05-dark.png"/>
</div>


### 3. Lời kết

Kira ra đời từ nhu cầu rất thực tế của chính mình.
Sau nhiều năm làm developer, mình cũng tích lũy được vài sản phẩm tự viết như [Ripplify](https://ripplify.thiennguyen.dev/) (2021), [FSC Utilities Plugins](https://fsc-utilities-plugin.netlify.app/) (2015),cũ hơn thì có [vCapture](https://thiennguyenpro.com/vcapture/)(2014) và [vNet Personal Firewall](2020/05/27/nhat-ky/2020-05-27-viet-ve-nhung-to-tap-chi-ngay-xua/)(2010). Kira là mảnh ghép mới nhất trong bộ sưu tập đó.

Cảm ơn các bạn đã đọc bài viết. Mình rất mong nhận được feedback từ các bạn để Kira ngày càng hoàn thiện hơn. 🙏🎉🚀