/**
 * @since 2016-11-22 16:04
 * @author vivaxy
 */

import * as execa from 'execa';

export default async function getInfoFromShell(
  file: string,
  args: string[],
): Promise<string> {
  const { code, stdout } = await execa(file, args);
  if (code === 0) {
    return stdout.split('\n')[0];
  }
  return '';
}
