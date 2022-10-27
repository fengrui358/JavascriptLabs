// 参考 https://github.com/hujiulong/gcoord

var gcoord = require('gcoord');

var result = gcoord.transform(
  [104.084988, 30.515381], // 经纬度坐标
  gcoord.BD09,
  gcoord.WGS84
);

console.log(result);
