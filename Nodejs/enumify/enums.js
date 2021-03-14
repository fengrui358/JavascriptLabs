const Enumify = (require('Enumify')).Enumify

class Color extends Enumify {
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

    static red = new Color(0x1);
    static orange = new Color(0x2);
    static yellow = new Color(0x4);
    static green = new Color(0x8);
    static blue = new Color(0x10);
    static purple = new Color(0x20);
    static _ = this.closeEnum(); // TypeScript: Color.closeEnum()
}

exports.Color = Color