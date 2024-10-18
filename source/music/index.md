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
# Profile widget configurations
- # Where should the widget be placed, left sidebar or right sidebar
  position: left
  type: profile
  # Author name
  author: Thien Nguyen
  author_tooltip: "Thiện Nguyễn \nIPA /tiːɛn ˈwɪn/"
  # Author title
  author_title: Software Engineer
  # Author's current location
  location: Ho Chi Minh City, Vietnam
  # URL or path to the avatar image
  avatar:
  # Whether show the rounded avatar image
  avatar_rounded: true
  avatar_has_border: true
  # Email address for the Gravatar
  gravatar: phuocthien@outlook.com
  # URL or path for the follow button
  follow_link: "/cv"
  follow_title: "View my CV"
  # target of link: _self, _blank
  target: "_self"
  # Links to be shown on the bottom of the profile widget
  social_links:
      Github:
        icon: fab fa-github
        url: "https://github.com/thiennguyen93"
        tooltip: "Github Profile"
        classNames: [has-tooltip-arrow, has-tooltip-bottom]
      LinkedIn:
        icon: fab fa-linkedin-in
        url: "https://www.linkedin.com/in/thiennguyendev"
        tooltip: "LinkedIn Profile"
        classNames: [has-tooltip-arrow, has-tooltip-bottom]
      Youtube:
        icon: fa-brands fa-youtube
        url: "https://www.youtube.com/thiennguyenpro"
        tooltip: "Youtube Channel"
        classNames: [has-tooltip-arrow, has-tooltip-bottom]
      Contact:
        icon: fas fa-at
        url: "/contact"
        tooltip: "Contact me"
        target:  "_self"
        classNames: [has-tooltip-arrow, has-tooltip-bottom]
# Table of contents widget configurations
- # Where should the widget be placed, left sidebar or right sidebar
  position: left
  type: toc
  # Whether to show the index of each heading
  index: true
  # Whether to collapse sub-headings when they are out-of-view
  collapsed: true
  # Maximum level of headings to show (1-6)
  depth: 3

# Recommendation links widget configurations
-
    # Where should the widget be placed, left sidebar or right sidebar
    position: left
    type: links
    # Names and URLs of the sites
    links:
        World Flags Quiz: '/games/world-flags-quiz/'

# Categories widget configurations
- # Where should the widget be placed, left sidebar or right sidebar
  position: left
  type: categories
# Recent posts widget configurations
- # Where should the widget be placed, left sidebar or right sidebar
  position: left
  type: recent_posts
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