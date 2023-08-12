import Chance from "chance";
const chance = new Chance();

describe("End to end testing", () => {
  const name = chance.name();
  const email = chance.email();
  const password = chance.word({ length: 10 });

  beforeEach(() => {
    cy.viewport(1000, 660);
    cy.visit("http://127.0.0.1:3000");
  });

  it("Register", () => {
    cy.contains("Register").click({ force: true });
    cy.get('input[name="name"]').type(name, { force: true });
    cy.get('input[name="email"]').type(email, { force: true });
    cy.get('input[name="password"]').type(password, { force: true });
    cy.get('input[name="rules"]').click({ force: true });
    cy.contains("Sign in").click({ force: true });
    cy.wait(1000);
  });

  it("Add tasks", () => {
    cy.login(email, password);

    const taskTitle1 = chance.sentence({ words: 2 });
    const taskDescription1 = chance.sentence({ words: 15 });

    cy.contains("Add new To Do task").click({ force: true });
    cy.get("#pu.dropdown-btn").click({ force: true });
    cy.get("ul#Medium.dropdown-element > p.dropdown-text").click({
      force: true,
    });
    cy.get(".input-title").type(taskTitle1, { force: true });
    cy.get(".input-description").type(taskDescription1, { force: true });
    cy.contains("Create a new task").click({ force: true });

    const taskTitle2 = chance.sentence({ words: 5 });

    cy.get("#0.plus-button").click({ force: true });
    cy.get("#pu.dropdown-btn").click({ force: true });
    cy.get("ul#High.dropdown-element > p.dropdown-text").click({ force: true });
    cy.get(".input-title").type(taskTitle2, { force: true });
    cy.contains("Create a new task").click({ force: true });

    const taskTitle3 = chance.sentence({ words: 7 });

    cy.get("#1.plus-button").click({ force: true });
    cy.get("#pu.dropdown-btn").click({ force: true });
    cy.get("ul#Low.dropdown-element > p.dropdown-text").click({ force: true });
    cy.get(".input-title").type(taskTitle3, { force: true });
    cy.contains("Create a new task").click({ force: true });

    cy.wait(4000);

    cy.get("#0.table")
      .should("contain", taskTitle1)
      .and("contain", taskDescription1);
    cy.get("#0.table").should("contain", taskTitle2);
    cy.get("#1.table").should("contain", taskTitle3);
  });

  it("Add filters", () => {
    cy.login(email, password);
    const search = chance.word();

    cy.get('input[name="search"]').type(search, { force: true });
    cy.get("#name.filter-label").should("be.visible");

    cy.contains("Priority").click({ force: true });
    cy.contains("High").click({ force: true });
    cy.get("#priority.filter-label").should("be.visible");

    cy.contains(search).click({ force: true });
    cy.contains("High").click({ force: true });
    cy.get(".filter-area").should("not.exist");
  });

  it("Delate task and log out", () => {
    cy.login(email, password);
    cy.get("#0.item-button-block").click({ force: true });
    cy.get("#0.item-options-delete").click({ force: true });

    cy.get("#1.item-button-block").click({ force: true });
    cy.get("#1.item-options-delete").click({ force: true });

    cy.get("#2.item-button-block").click({ force: true });
    cy.get("#2.item-options-delete").click({ force: true });

    cy.wait(5000);

    cy.get("#0.table").should("contain", "0 tasks");
    cy.get("#1.table").should("contain", "0 tasks");
    cy.get("#2.table").should("contain", "0 tasks");

    cy.get(".open-sidebar").click({ force: true });
    cy.contains("Log Out").click({ force: true });
  });
});
