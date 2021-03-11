function main() {
  const ageMom = 39;
  const ageDad = 41;
  let maxAge = Math.max(ageMom, ageDad);
  const ageGrandma = 63;
  maxAge = Math.max(maxAge, ageGrandma);
  console.log(`MaxAge = ${maxAge}\n`);
}

main();