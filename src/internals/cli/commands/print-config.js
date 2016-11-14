import frameworkConfig from '../../../shared/framework-config';
import { info } from '../stdio';

export default function printConfig() {
  info(JSON.stringify(frameworkConfig, null, 2)); // eslint-disable-line
}