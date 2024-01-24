var s = "";

for (var i = 0; i < 12; i++) {
  for (var j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);
