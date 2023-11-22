const div = require("./division");

test("4 / 2 should be 2", () => {
    const result = div(4, 2);
    expect(result).toBe(2);
  });

test("si los datos no son enteros me debe retornar un error", () => {
    const err = "datos invalidos";
    const result = div("4", "2");
    expect(result).toBe(err);
  });

test("18 / 7 should be approximately 2.5714285714285716", () => {
    const result = div(18, 7);
    expect(result).toBe(2.5714285714285716);
  });