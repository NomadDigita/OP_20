import { OP20 } from "../OP20";
import { u256 } from '@btc-vision/btc-runtime/runtime/int';

export class MyToken extends OP20 {
    constructor() {
        super("FurWhisk", "FUR", 18, u256.fromString("1000000000000000000000000"));
    }
}
