// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '帮助&反馈',
    path: 'https://github.com/kun368/NasKaoQin/issues/new',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '联系开发者',
    path: 'http://www.zzkun.com',
    external: true,
    newWindow: true,
    icon: 'yonghu',
  },
  {
    name: '下载Chrome扩展',
    path: 'https://github.com/ChengOrangeJu/WebExtensionWallet',
    external: true,
    newWindow: true,
    icon: 'key',
  },
  {
    name: '下载手机钱包',
    path: 'https://nano.nebulas.io/index_cn.html',
    external: true,
    newWindow: true,
    icon: 'phone',
  },
];

const asideMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '创建考勤',
    path: '/Create',
    icon: 'activity',
  },
  {
    name: '我的考勤',
    path: '/MyCenter',
    icon: 'yonghu',
  },
  {
    name: '使用帮助',
    path: '/Help',
    icon: 'bell',
  },
  {
    name: 'PunchCard',
    path: '/PunchCard/0',
    icon: 'home',
  },
  {
    name: 'PunchDetail',
    path: '/PunchDetail/0',
    icon: 'home',
  },
];

export { headerMenuConfig, asideMenuConfig };
