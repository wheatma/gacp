/**
 * @since 2016-11-27 14:02
 * @author vivaxy
 */

import getInfoFromShell from '../../lib/getInfoFromShell';

export default getInfoFromShell(`git symbolic-ref --short HEAD`);
