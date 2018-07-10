import config, { commands } from '../config.json';

export const get = (command) => {
  return commands[command] || console.error(`${command} 未定义`)
};

export const set = (command, url) => {
  commands[command] = url;
  return config
};

