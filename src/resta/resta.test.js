const resta = require("./resta");

test("40 - 15 should be 25", () => {
    const result = resta(40, 15);
    expect(result).toBe(25);
  });

test("si los datos no son enteros me debe retornar un error", () => {
    const err = "datos invalidos";
    const result = resta("40", "15");
    expect(result).toBe(err);
  });

test("0 - 0 should be 0", () => {
    const result = resta(0, 0);
    expect(result).toBe(0);
  });
  