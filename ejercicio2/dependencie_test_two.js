let asciichart = require('asciichart');
let s0 = new Array(120);
for (let i = 0; i < s0.length; i++)
    s0[i] = 15 * Math.sin(i * ((Math.PI * 4) / s0.length));

console.log(asciichart.plot(s0, { height: 5 }));