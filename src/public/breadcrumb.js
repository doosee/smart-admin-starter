import $ from 'jquery'

class Breadcrumb {
  constructor() {
    this.element = '#ribbon > .breadcrumb';
  }

  /**
   * @param args.title {string}
   * @param args.link {string}
   */
  render(...args) {
    console.log(args);
    $(this.element).empty();
    args.forEach(arg => {
      $(this.element).append(`<li><a link="${arg.link}">${arg.title}</a></li>`)
    })
  }
}


export const breadcrumb = new Breadcrumb();