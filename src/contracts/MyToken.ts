import { OP20 } from "../OP20";

export class MyToken extends OP20 {
  constructor() {
    super("FurWhisk", "FUR", 18, 1000000000000000000000000); // 1M with 18 decimals
  }
}
