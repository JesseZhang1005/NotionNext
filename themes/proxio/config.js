/**
 * 另一个落地页主题
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: 'Welcome,Jesse Blog', // 欢迎文字，留空则不启用

  // 英雄区块导航
  PROXIO_HERO_ENABLE: true, // 开启英雄区
  PROXIO_HERO_TITLE_1: '开源且免费的基于 Notion 笔记的网站构建工具', // 英雄区文字
  PROXIO_HERO_TITLE_2: '通过笔记无感知地建站、成倍放大您的价值', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  PROXIO_HERO_BUTTON_1_TEXT: '开始体验', // 英雄区按钮
  PROXIO_HERO_BUTTON_1_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github-mark.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
  PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/

  // 文章区块
  PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
  PROXIO_BLOG_TITLE: '作品',
  PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
  PROXIO_BLOG_TEXT_1: '最新动态',

  // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

  // 特性区块
  PROXIO_FEATURE_ENABLE: true, // 特性区块开关
  PROXIO_FEATURE_TITLE: '特点',
  PROXIO_FEATURE_TEXT_1: '动漫设计+电影摄影专业基础',
  PROXIO_FEATURE_TEXT_2: '丰富的案例经验，专业的技术服务，优质的沟通效率',

  // 特性1
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
  PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
  PROXIO_FEATURE_1_TITLE_1: '高效工作流程',
  PROXIO_FEATURE_1_TEXT_1:
    '精简的设计流程确保快速交付，在紧迫的工期下仍能保证品质与细节不打折扣。',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '协作式流程',
  PROXIO_FEATURE_2_TEXT_1: '与你紧密合作，融合反馈意见，打造超越预期的设计',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '细节把控',
  PROXIO_FEATURE_3_TEXT_1:
    '精益求精雕琢每个元素，确保成品精致统一，令人过目难忘',

  PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
  PROXIO_FEATURE_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 按钮跳转

  // 首页生涯区块
  PROXIO_CAREER_ENABLE: true, // 区块开关
  PROXIO_CAREER_TITLE: '工作经历',
  PROXIO_CAREER_TEXT: '我的职业路径',

  // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
  PROXIO_CAREERS: [
    {
      title: '元熹互动',
      bio: '2023.08-2025.12',
      text: 'CG动画导演/虚拟偶像制作人'
    },
    {
      title: '腾讯天美工作室',
      bio: '2021.02-2022.05',
      text: 'CG动画导演'
    },
    {
      title: '完美世界游戏',
      bio: '2019.12-2021.01',
      text: '青云工作室-游戏灯光组长'
    },
    {
      title: '祖龙游戏',
      bio: '2019.8-2019.12',
      text: 'CG动画导演'
    },
    {
      title: '匠人影视',
      bio: '2015.08-2018.12',
      text: '动画导演/视效总监'
    },
    {
      title: '天工异彩',
      bio: '2014.07-2014.12',
      text: '高级灯光师'
    },
    {
      title: '金海岸影业',
      bio: '2012.05-2014.06',
      text: '灯光监制/视效制片'
    }
    
  ],

  // 首页用户测评区块
  PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
  PROXIO_TESTIMONIALS_TITLE: '项目',
  PROXIO_TESTIMONIALS_TEXT_1: '我的项目经历',
  PROXIO_TESTIMONIALS_TEXT_2:
   ` 游戏项目：
   腾讯天美工作室《穿越火线》、
   完美世界《新诛仙世界》、
   祖龙游戏《龙族幻想》、
   《石器》游戏CG、
   《坦克争霸2》游戏CG；
   
   影视项目：
   电影《猛虫过江》、
   电影《阿修罗》、网络电影《上位2》、
   电影《铁道飞虎》、
   电视剧《幻城》、
   电影《鬼吹灯之寻龙诀》、
   电影《3D食人虫》、
   电影《西游记大闹天宫》、
   电影《西游记之孙悟空三打白骨精》、
   动画电影《摇滚藏獒》。`,

  // 用户测评处的跳转按钮
  PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
  PROXIO_TESTIMONIALS_BUTTON_TEXT: '联系我',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  PROXIO_TESTIMONIALS_ITEMS: [
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '担任：CG灯光监制；负责灯光制作，渲染流程搭建，外包供应商品质监督。 ',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '电影《西游记大闹天宫》《西游记之孙悟空三打白骨精》',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '电影奖项：第36届香港电影金像奖最佳视觉效果奖',
      PROXIO_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '担任：高级灯光师；负责后期CG灯光制作。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '电影《鬼吹灯之寻龙诀》',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '电影奖项：第53届金马奖最佳视觉效果奖',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '担任：场次视效总监；负责场次视觉效果把控，制作流程管理。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '电影《铁道飞虎》',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '电影奖项：第11届亚洲电影大奖最佳视觉特效奖提名',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '负责穿越火线手游CG动画项目管理工作，游戏版本CG视频规划，虚拟女团视频生产管理，制定生产方案，管理供应商制作，监督品质。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '《穿越火线》手游',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '职位：CG动画导演',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '负责游戏地图灯光设计制作、游戏内cg过场动画镜头灯光设计制作，与TA配合优化游戏渲染性能，开发灯光工具。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '游戏《新诛仙世界》',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '职位：灯光组长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '负责游戏过场动画导演工作，撰写内容脚本，制作Layout预演，管理动画小组，把控生产品质。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '《龙族幻想》手游',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '职位：动画导演',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  PROXIO_FAQ_ENABLE: false, // 常见问题模块开关
  PROXIO_FAQ_TITLE: '常见问题解答',
  PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
  PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
  PROXIO_FAQS: [
    {
      q: 'NotionNext有帮助文档吗？',
      a: 'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署'
    },
    {
      q: '部署后要如何编写文章？',
      a: '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>'
    },
    {
      q: '站点部署失败，更新失败？',
      a: '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助'
    },
    {
      q: '文章没有实时同步？',
      a: '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决'
    }
  ],

  // 关于作者区块
  PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
  PROXIO_ABOUT_TITLE: 'Jesse',
  PROXIO_ABOUT_TEXT_1: 'CG导演/视效管理/高级灯光师',
  PROXIO_ABOUT_TEXT_2:
    '我是一名经验丰富且技术全面的CG动画创作者，有14年行业经验，参与过多部院线电影，在电影后期的职业经历中，早期主要专注灯光设计与制作，后期为视效制片/视效指导工作，参与作品中也包含多部知名获奖电影作品；在游戏的职业经历中负责游戏灯光设计制作、游戏内过场导演，游戏PV动画导演。',
  PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
  PROXIO_ABOUT_KEY_1: '经验年限',
  PROXIO_ABOUT_VAL_1: '14年+',
  PROXIO_ABOUT_KEY_2: '性别',
  PROXIO_ABOUT_VAL_2: '男',
  PROXIO_ABOUT_KEY_3: '现居住地',
  PROXIO_ABOUT_VAL_3: '深圳',
  PROXIO_ABOUT_KEY_4: '年龄',
  PROXIO_ABOUT_VAL_4: '37',

  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: '关于我',

  // 横向滚动文字
  PROXIO_BRANDS_ENABLE: true, // 滚动文字
  PROXIO_BRANDS: [
    '软件能力:',
    'Maya',
    'Unreal Engine',
    'DaVinci Resolve',
    'Premiere',
    'PhotoShop',
    'Nuke',
    'AIGC'
  ],

  PROXIO_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  // 页脚菜单
  PROXIO_FOOTER_LINKS: [
    {
      name: '友情链接',
      menus: [
        {
          title: 'Tangly的学习笔记',
          href: 'https://blog.tangly1024.com'
        },
        {
          title: 'NotionNext',
          href: 'https://www.tangly1024.com'
        }
      ]
    },
    {
      name: '开发者',
      menus: [
        { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
        {
          title: '开发帮助',
          href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
        },
        {
          title: '功能反馈',
          href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
        },
        {
          title: '技术讨论',
          href: 'https://github.com/tangly1024/NotionNext/discussions'
        },
        {
          title: '关于作者',
          href: 'https://blog.tangly1024.com/about'
        }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
  PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  PROXIO_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  PROXIO_CTA_ENABLE: true,
  PROXIO_CTA_TITLE: '与我建立联系',
  PROXIO_CTA_TITLE_2: '让我们立刻启动您的项目',
  PROXIO_CTA_DESCRIPTION:
    '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
  PROXIO_CTA_BUTTON: true, // 是否显示按钮
  PROXIO_CTA_BUTTON_URL: '/about',
  PROXIO_CTA_BUTTON_TEXT: '联系我',

  PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
