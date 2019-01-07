import * as os from 'os';
import { execSync } from 'child_process'
import { statSync } from 'fs'

export default {
    darwin: darwin,
    freebsd: unix,
    linux: unix,
    sunos: unix,
    win32: windows
}[os.platform()];

export const darwin = () => {
  return `${process.env.HOME}/Documents`;
};

export const unix = () => {
  let dir;
  try {
    dir = execSync('xdg-user-dir DOCUMENTS', { stdio: [0, 3, 3] });
  } catch (_) {}
  if (dir) return dir;

  let stat;
  const homeDownloads = `${process.env.HOME}/Documents`;
  try {
    stat = statSync(homeDownloads);
  } catch (_) {}
  if (stat) return homeDownloads;

  return '/tmp/';
};

export const windows = () => {
  return `${process.env.USERPROFILE}/Documents`;
};
