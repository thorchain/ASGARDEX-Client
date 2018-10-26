import {Bridge} from '../modules/Bridge'
import {env} from './env'

export const bridge: Bridge = new Bridge(env.THORCHAIN_BRIDGE_BINARY_URI, env.THORCHAIN_NODE_URI)
