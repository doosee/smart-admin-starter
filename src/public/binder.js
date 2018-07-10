import rv from 'rivets';

export class Binder {
  /**
   * @param el {jQuery|Element|string}
   * @param data {Object}
   * @param option? {Object}
   * @returns {*}
   */
  constructor(el,data,option){
    return this.instance = rv.bind(el,data,option)
  }
}
