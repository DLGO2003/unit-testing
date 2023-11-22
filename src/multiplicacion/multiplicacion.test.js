const mult = require("./multiplicacion");

test("6 * 6 should be 36", () => {
    const result = mult(6, 6);
    expect(result).toBe(36);
  });

test("si los datos no son enteros me debe retornar un error", () => {
    const err = "datos invalidos";
    const result = mult("6", "6");
    expect(result).toBe(err);
  });

test("Todo numero multiplicado por 0 da 0", () => {
    const result = mult(7, 0);
    expect(result).toBe(0);
  });