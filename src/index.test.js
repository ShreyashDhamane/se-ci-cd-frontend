// import files
var validateEmail = require("./components/pages/validator/validateEmail");
var validatePassword = require("./components/pages/validator/validatePassword");

// Test Case 1 (Addition)
test("validate email address", () => {
  expect(validateEmail("shreyash")).toBe(false);
});
test("validate email address", () => {
  expect(validateEmail("shreyash@")).toBe(false);
});
test("validate email address", () => {
  expect(validateEmail("shreyash@shreyash")).toBe(false);
});
test("validate email address", () => {
  expect(validateEmail("shreyash@gmail.com")).toBe(true);
});

// Test Case 2 (Subtraction)
test("validate password", () => {
  expect(validatePassword("shubham")).toBe(false);
});
test("validate password", () => {
  expect(validatePassword("shubham123")).toBe(false);
});
test("validate password", () => {
  expect(validatePassword("shubh@m")).toBe(false);
});
test("validate password", () => {
  expect(validatePassword("shubh@m123")).toBe(false);
});
test("validate password", () => {
  expect(validatePassword("Shubh@m123")).toBe(true);
});
