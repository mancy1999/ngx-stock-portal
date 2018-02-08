// export const menu = [{
//   "text": "ADMIN",
//   "translate": "ADMIN",
//   "group": true,
//   "children": [{
//     "text": "供應商管理",
//     "translate": "供應商管理",
//     "link": "/供應商管理",
//     "icon": "icon-speedometer",
//     "children": [{
//       "text": "供應商",
//       "translate": "供應商",
//       "link": "/cps/admin/supplier",
//       "icon": "icon-grid"
//     }, {
//       "text": "供應商帳戶",
//       "translate": "供應商帳戶",
//       "link": "/cps/admin/supplier-account",
//       "icon": "icon-grid"
//     }, {
//       "text": "供應商報價",
//       "translate": "供應商報價",
//       "link": "/cps/admin/supplier-quotation",
//       "icon": "icon-grid"
//     }]
//   }]


export class Menu {
  text: string;
  translate: string;
  link: string;
  icon: string;
  constructor(Text: string, Translate: string, Link: string, Icon: string) {
    this.text = Text;
    this.translate = Translate;
    this.link = Link;
    this.icon = Icon;
  }
}

export const headerMenu = [
  new Menu('即時報價', '即時報價', 'quote', 'anticon anticon-mail'),
  new Menu('排行榜', '排行榜', 'rank', 'anticon anticon-appstore'),
  new Menu('投資組合', '投資組合', 'portfolio', 'anticon anticon-mail'),
  new Menu('回測', '回測', 'hkej', 'anticon anticon-mail'),
];

