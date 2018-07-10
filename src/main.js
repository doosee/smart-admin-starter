// 核心依赖
import './public/bootstrap'
import 'babel-polyfill';

// 样式文件
import './styles/main.scss';
import './styles/index.css'

import { layout } from "./layout";
import { router } from "./public/router";
import { commands } from "./config";


class Project {
  constructor() {
    this.init().then(() => console.log('工程初始化完成'))
  }

  async init() {
    layout.render();
    await router.init();
  }
}

export const pro = new Project();