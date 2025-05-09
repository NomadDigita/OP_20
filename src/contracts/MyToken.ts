import { OP20 } from "./OP20";  // Adjust path based on actual location
import { u128, u256 } from '@btc-vision/btc-runtime/runtime/utils/int';

export class MyToken extends OP20 {
    constructor() {
        // Use u128 and u256 to handle large number literals
        super("FurWhisk", "FUR", 18, u128.fromString("1000000000000000000000000").toU256());
    }
}
