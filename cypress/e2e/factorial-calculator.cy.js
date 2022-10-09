describe("Testing factorial calculator", () => {
  before(() => {
    cy.visit("https://qainterview.pythonanywhere.com/");
  });
  beforeEach(() => {
    cy.get('input#number[type="text"]').clear();
  });
  it("Verifies factorial of 10", () => {
    cy.get('input#number[type="text"]').type("10");
    cy.get('button#getFactorial[type="submit"]').click();
    cy.get("p#resultDiv", { timeout: 2000 })
      .should("be.visible")
      .should("contain", "The factorial of 10 is: 3628800");
  });
  it("Verifies factorial of 50", () => {
    cy.get('input#number[type="text"]').type("50");
    cy.get('button#getFactorial[type="submit"]').click();
    cy.get("p#resultDiv", { timeout: 2000 })
      .should("be.visible")
      .should("contain", "The factorial of 50 is: 3.0414093201713378e+64");
  });
  it("Verifies factorial of 100", () => {
    cy.get('input#number[type="text"]').type("100");
    cy.get('button#getFactorial[type="submit"]').click();
    cy.get("p#resultDiv", { timeout: 2000 })
      .should("be.visible")
      .should("contain", "The factorial of 100 is: 9.332621544394415e+157");
  });
  it("Verifies factorial with random number between 10 and 100", () => {
    const randomNumber = function interval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const validNumber = randomNumber(10, 100);
    const factorialCalculator = function (num) {
      let fac = 1;
      for (let i = 1; i <= num; i++) {
        fac = fac * i;
      }
      return fac;
    };

    cy.get('input#number[type="text"]').type(validNumber);
    cy.get('button#getFactorial[type="submit"]').click();
    cy.get("p#resultDiv", { timeout: 2000 })
      .should("be.visible")
      .should(
        "contain",
        `The factorial of ${validNumber} is: ${factorialCalculator(
          validNumber
        )}`
      );
  });
});
