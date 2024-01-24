function rekursif(a) {
  if (a == 0) return 1;

  return a * rekursif(a - 1);
}

console.log(rekursif(10));
