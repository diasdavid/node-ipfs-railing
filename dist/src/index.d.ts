export = Bootstrap;
/**
 * Emits 'peer' events on a regular interval for each peer in the provided list.
 */
declare class Bootstrap extends EventEmitter {
    /**
     * Constructs a new Bootstrap.
     *
     * @param {Object} options
     * @param {Array<string>} options.list - the list of peer addresses in multi-address format
     * @param {number} [options.interval] - the interval between emitting addresses in milliseconds (default: 10000)
     *
     */
    constructor(options?: {
        list: Array<string>;
        interval: number | undefined;
    });
    _list: string[];
    _interval: number;
    _timer: NodeJS.Timeout | null;
    /**
     * Start emitting events.
     */
    start(): void;
    /**
     * Emit each address in the list as a PeerInfo.
     */
    _discoverBootstrapPeers(): void;
    /**
     * Stop emitting events.
     */
    stop(): void;
}
declare namespace Bootstrap {
    export { tag };
}
import { EventEmitter } from "node/events";
declare var tag: string;
//# sourceMappingURL=index.d.ts.map