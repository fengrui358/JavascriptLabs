import { Enumify } from 'enumify'

class enumbase extends Enumify {
    constructor(flag, label) {
        super()
        this.flag = flag
        this.label = label
    }

    static enumFlagOf(flag) {
        if (flag !== null && flag !== undefined) {
            for (let index = 0; index < this.enumValues.length; index++) {
                const element = this.enumValues[index];
                if (element.flag === flag) {
                    return element
                }
            }
        }

        return null
    }

    static enumLabelOf(label) {
        if (label !== null && label !== undefined) {
            for (let index = 0; index < this.enumValues.length; index++) {
                const element = this.enumValues[index];
                if (element.label === label) {
                    return element
                }
            }
        }

        return null
    }
}

export default enumbase