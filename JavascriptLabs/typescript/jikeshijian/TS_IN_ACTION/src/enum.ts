// 数字枚举
enum Role {
    Reporter = 3,
    Developer,
    Maintainer,
    Owner,
    Guest
}

// 字符串枚举
enum stringEnum {
    Success = '成功',
    Fail = '失败'
}



// 异构枚举
enum Answer {
    N,
    Y = 'Yes',
    C = 5,
    B
}

enum Char {
    // const
    a,
    b = Char.a,
    C = 1 + 3,
    // computed
    d = Math.random(),
    e = '1324'.length,
    // 计算枚举后的值必须手动赋值
    //f
}

// 常量枚举
const enum Month {
    Jan = 1,
    Feb,
    Mar
}
// 常量枚举会在编译阶段被移除
const month = [Month.Jan, Month.Feb, Month.Mar]

export default {
    Role,
    stringEnum,
    Answer,
    Char,
    month
}