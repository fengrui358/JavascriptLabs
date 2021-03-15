import enumbase from './enumbase'

/** 颜色枚举 */
class Color extends enumbase {
    constructor(flag) {
        super()

        // this.flag = function(){
        //     return flag !== undefined ? flag : this.enumOrdinal;
        // }

        Object.defineProperty(this, 'flag', {
            enumerable: true,
            configurable: false,
            get: function () {
                return flag !== undefined ? flag : this.enumOrdinal;
            }
        });
    }

    /** 红色 */
    static red = new Color(0x1);
    /** 橘色 */
    static orange = new Color(0x2);
    /** 黄色 */
    static yellow = new Color(0x4);
    static green = new Color(0x8);
    static blue = new Color(0x10);
    static purple = new Color(0x20);
    static _ = this.closeEnum(); // TypeScript: Color.closeEnum()
}

export default Color;