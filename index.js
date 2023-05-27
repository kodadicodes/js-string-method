let youtube = "Bilgisayar Genetiği";
let result;
// `toLowerCase` metodu, bir string'in tüm karakterlerini küçük harfe dönüştürür.
result = youtube.toLowerCase();
console.log(result); // "bilgisayar genetiği"

// `toUpperCase` metodu, bir string'in tüm karakterlerini büyük harfe dönüştürür.
result = youtube.toUpperCase();
console.log(result); // "BILGISAYAR GENETIĞI"

// `length` özelliği, bir string'in uzunluğunu (karakter sayısını) verir.
result = youtube.length;
console.log(result); // 18

// `trim` metodu, bir string'in başındaki ve sonundaki boşlukları kaldırır.
result = youtube.trim();
console.log(result); // "Bilgisayar Genetiği"

// `slice` metodu, bir string'in belirtilen aralıktaki bir parçasını alır.
result = youtube.slice(0, 6);
console.log(result); // "Bilgis"

// `split` metodu, bir string'i belirtilen ayraç karakterine göre bölerek bir diziye dönüştürür.
result = youtube.split(" ");
console.log(result); // [ 'Bilgisayar', 'Genetiği' ]
