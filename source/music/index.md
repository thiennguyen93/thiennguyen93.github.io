---
title: Music
date: 2021-08-14 10:16:35
toc: false
lang: en
layout: page
article:
  licenses: false
donates: false
comment: false
widgets: 
  - type: profile
    position: left
    author: Thien Nguyen
    author_tooltip: "Thiện Nguyễn \nIPA /tiːɛn ˈwɪn/"
    author_title: Software Engineer
    avatar_rounded: true
    avatar_has_border: true
    counter: false
    location: Ho Chi Minh City, Vietnam
    gravatar: info@thiennguyenpro.com
    follow_link: "https://www.linkedin.com/in/thiennguyendev/"
    follow_title: "Follow me on LinkedIn"
    # Links to be shown on the bottom of the profile widget
    social_links:
      Github:
        icon: fab fa-github
        url: "https://github.com/thiennguyen93"
        tooltip: "Github Profile"
        classNames: [has-tooltip-arrow, has-tooltip-bottom]
      LinkedIn:
        icon: fab fa-linkedin-in
        url: "https://www.linkedin.com/in/thiennguyendev/"
        tooltip: "LinkedIn Profile"
        classNames: [has-tooltip-arrow, has-tooltip-bottom]
      MobilePhone:
        icon: fas fa-phone
        url: "tel:+84395443490"
        tooltip: "Give me a phone call"
        classNames: [has-tooltip-arrow, has-tooltip-bottom]
      Email:
        icon: fas fa-at
        url: "/contact"
        tooltip: "Send me a message"
        classNames: [has-tooltip-arrow, has-tooltip-bottom]
      CV:
        icon: fas fa-download
        url: "/assets/documents/pdf/THIEN_NGUYEN_CV.pdf"
        tooltip: "Download CV as PDF"
        classNames: [has-tooltip-arrow, has-tooltip-bottom]
  - type: toc
    position: left
    collapsed: true
    index: false
    depth: 1
sidebar:
  right:
    sticky: true
thumbnail: https://thiennguyenpro.files.wordpress.com/2021/08/logo-hcmus.png
useStyles: ["/assets/pages/music/css/style.css"]
override_class:
    card: "custom-card"
    card_content: "custom-card-content"
---

{% aplayerlist %}
{
    "showlrc": 3,
    "theme": "#e6d0b2",
    "mutex": true,
    "mode": "order",
    "loop":"none",
    "fixed":false,
    "autoplay": true,
    "preload": true,
    "music": [
        {
            "title": "Nấu Ăn Cho Em",
            "author": "Đen ft. Pia Linh",
            "url": "/assets/media/nau-an-cho-em/Nau-An-Cho-Em-Den-ft-Pia-Linh.mp3",
            "pic": "/assets/media/nau-an-cho-em/album.jpeg",
            "lrc": "/assets/media/nau-an-cho-em/lyric.lrc"
        },
        {
            "title": "Tình bạn diệu kì",
            "author": "Ricky Star x Lăng LD x Amee",
            "url": "/assets/media/tinh-ban-dieu-ky/tinh-ban-dieu-ky.mp3",
            "pic": "/assets/media/tinh-ban-dieu-ky/album.webp",
            "lrc": "/assets/media/tinh-ban-dieu-ky/lyric.lrc"
        },
        {
            "title": "Gác Lại Âu Lo",
            "author": "Da LAB ft. Miu  Lê",
            "url": "/assets/media/gac-lai-au-lo/gac-lai-au-lo.mp3",
            "pic": "/assets/media/gac-lai-au-lo/album.jpeg",
            "lrc": "/assets/media/gac-lai-au-lo/lyric.lrc"
        },
        {
            "title": "Shay Nắnggg",
            "author": "Amee, Obito, Hứa Kim Tuyền",
            "url": "/assets/media/shay-nanggg/shayy-nanggg.mp3",
            "pic": "/assets/media/shay-nanggg/album.jpeg",
            "lrc": "/assets/media/shay-nanggg/lyric.lrc"
        }
    ]
}
{% endaplayerlist %}