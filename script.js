let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let j = 2; j <= 20; j++) {
    if (j % 2 !== 0) continue;
    console.log(j);
}

for (let k = 1; k <= 10; k++) {
    console.log(`7 * ${k} = ${7 * k}`);
}

let arr1 = [1, 2, 3, 4, 5];
let l = 0;
while (l < arr1.length) {
    console.log(arr1[l]);
    l++;
}

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let m = 0; m < arr2.length; m++) {
    if (arr2[m] === 7) break;
    console.log(arr2[m]);
}

let n = 15;
for (let p = 1; p < n; p++) {
    if (p >= n) break;
    console.log(p);
}

let q = 1;
while (q <= 20) {
    if (q % 3 === 0) {
        q++;
        continue;
    }
    console.log(q);
    q++;
}
