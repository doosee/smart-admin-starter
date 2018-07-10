import $ from 'jquery';

class Theme {
  constructor() {
    this.root = 'body';
    this.$root = $(this.root);
    this.styles = [
      { num: 0, name: "默认", key: "smart-style-0" },
      { num: 1, name: "丹青墨黑", key: "smart-style-1" },
      { num: 2, name: "象牙白", key: "smart-style-2" },
      { num: 5, name: "磨砂玻璃", key: "smart-style-5" },
      { num: 3, name: "Google", key: "smart-style-3" },
      { num: 4, name: "Pixel", key: "smart-style-4" },
      { num: 6, name: "Material", key: "smart-style-6" }
    ];
  }

  /**
   * 切换主题
   * @param theme {number | string}
   */
  toggle(theme) {
    this.removeAllTheme();

    if (typeof (+theme) === "number") {
      theme = (this.styles.find(item => item.num === theme) || {}).key
    }

    this.$root.addClass(theme)
  }

  removeAllTheme() {
    this.styles.map(item => this.$root.removeClass(item.key))
  }

  listener(){
    // todo theme listener
  }
}

export const theme = new Theme();