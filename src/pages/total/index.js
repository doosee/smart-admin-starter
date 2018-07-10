import html from './index.html';


class TotalPage {
  constructor() {
    this.template = html;
    this.data = {
      title: "详情页",
      breadcrumb: [{ link: '/', title: '详情页' }, { title: '详情页' }]
    }
  }

  render() {
    console.count($('[dev-data]').text());
    this.data.title = "详情页" + Math.random()
  }
}

export const page = new TotalPage();
export const template = page.template;
export const data = page.data;
export const render = page.render;
