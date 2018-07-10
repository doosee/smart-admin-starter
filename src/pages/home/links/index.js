/**
 * @name 可复用型组件示例
 * @author DOU
 */

import template from './index.html';
import { Binder } from "../../../public/binder";

/**
 * 定义一个组件
 * @type {{template(): string, static: string[], initialize(Element, Object): void}}
 * @用法
 * 父组件：<home-card-link data="abcd"></home-card-link>
 */
class LinkComponent {
  constructor() {
    this.$el = $(template);
    this.dataBinder = null;
  }

  // 父组件渲染时，传入的数据
  render(data) {
    this.dataBinder = new Binder(this.$el, { data });
    return this.$el
  }

  destroy() {
    this.dataBinder.unbind()
  }
}

export const linkComponent = new LinkComponent();