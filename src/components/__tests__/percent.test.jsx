import { calculatePercent } from "../center/center";
import { dataToList } from "../center/center";

describe("calculatePercent function", () => {
  it("calculates the percentage correctly", () => {
    const toDo = [
      {
        state: "To do",
        title: "Task 1",
        description: "Task description 1",
        priority: "Low",
        id: 1,
        owner_id: 1,
      },
      {
        state: "To do",
        title: "Task 4",
        description: "Task description 4",
        priority: "Medium",
        id: 4,
        owner_id: 4,
      },
    ];
    const inProgress = [
      {
        state: "In progress",
        title: "Task 2",
        description: "Task description 2",
        priority: "Medium",
        id: 2,
        owner_id: 1,
      },
    ];
    const done = [
      {
        state: "Done",
        title: "Task 3",
        description: "Task description 3",
        priority: "High",
        id: 3,
        owner_id: 1,
      },
    ];

    const expectedPercent = Math.round(
      (done.length / (toDo.length + inProgress.length + done.length)) * 100,
    );

    const calculatedPercent = calculatePercent(toDo, inProgress, done);

    expect(calculatedPercent).toEqual(expectedPercent);
  });

  it("returns 0 percent when the tasks list is empty", () => {
    const emptyList = [];
    const calculatedPercent = calculatePercent(emptyList, emptyList, emptyList);

    expect(calculatedPercent).toEqual(0);
  });
});

describe("converting data to list function", () => {
  it("converts data correctly", () => {
    const toDo = [
      {
        state: "To do",
        title: "Task 1",
        description: "Task description 1",
        priority: "Low",
        id: 1,
        owner_id: 1,
      },
      {
        state: "To do",
        title: "Task 4",
        description: "Task description 4",
        priority: "Medium",
        id: 4,
        owner_id: 4,
      },
    ];
    const inProgress = [
      {
        state: "In progress",
        title: "Task 2",
        description: "Task description 2",
        priority: "Medium",
        id: 2,
        owner_id: 1,
      },
    ];
    const done = [
      {
        state: "Done",
        title: "Task 3",
        description: "Task description 3",
        priority: "High",
        id: 3,
        owner_id: 1,
      },
    ];

    const expectedList = [
      { title: "To do", items: toDo },
      { title: "In progress", items: inProgress },
      { title: "Done", items: done },
    ];

    const calculatedList = dataToList(toDo, inProgress, done);

    expect(calculatedList).toEqual(expectedList);
  });
});
