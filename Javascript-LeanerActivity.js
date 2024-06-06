// Instructions
// You will create a script that gathers data, processes it, and then outputs a consistent result as described by a specification. This is a very typical situation in industry, and this particular scenario has been modified from a real application. The data you will use is provided below.
// You will be provided with four different types of data:
// A CourseInfo object, which looks like this:
// {

// Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
// {
//     // the ID of the learner for which this data has been collected
//     "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,
//     // each assignment should have a key with its ID,
//     // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
//     <assignment_id>: number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }

// if an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.

// You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string?
// Use try/catch and other logic to handle these types of errors gracefully.

// If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.

// Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.
// You may use as many helper functions as you see fit.

// // Part 1: Main rules
// This code is to first validate that AssignmentGroup belongs to the correct Course Information

const CourseInfo = {
  id: 102,
  name: "Fundamentals of Javascript ",
};

// The provided assignment group.

const AssignmentGroup = {
  id: 23456,
  name: "Javascritpt basics",
  course_id: 200,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Using Loops",
      due_at: "10-05-2024",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Reusable Functions",
      due_at: "11-07-2024",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Uno Coding Game",
      due_at: "12-09-2024",
      points_possible: 300,
    },
  ],
};

// The provided learner submission data.

const LearnerSubmissions = [
  {
    learner_id: 121,
    assignment_id: 1,
    submission: {
      submitted_at: "10-04-2024",
      score: 47,
    },
  },
  {
    learner_id: 121,
    assignment_id: 2,
    submission: {
      submitted_at: "11-07-2024",
      score: 150,
    },
  },
  {
    learner_id: 121,
    assignment_id: 3,
    submission: {
      submitted_at: "12-09-2024",
      score: 300,
    },
  },
  {
    learner_id: 122,
    assignment_id: 1,
    submission: {
      submitted_at: "10-07-2024",
      score: 45,
    },
  },
  {
    learner_id: 122,
    assignment_id: 2,
    submission: {
      submitted_at: "11-07-2024",
      score: 150,
    },
  },
  {
    learner_id: 122,
    assignment_id: 3,
    submission: {
      submitted_at: "12-9-2024",
      score: 250,
    },
  },
  {
    learner_id: 123,
    assignment_id: 1,
    submission: {
      submitted_at: "10-05-2024",
      score: 30,
    },
  },
  {
    learner_id: 123,
    assignment_id: 2,
    submission: {
      submitted_at: "11-8-2024",
      score: 100,
    },
  },
  {
    learner_id: 123,
    assignment_id: 3,
    submission: {
      submitted_at: "12-9-2024",
      score: 150,
    },
  },
  {
    learner_id: 124,
    assignment_id: 1,
    submission: {
      submitted_at: "10-05-2024",
      score: 20,
    },
  },
  {
    learner_id: 124,
    assignment_id: 2,
    submission: {
      submitted_at: "11-10-2024",
      score: 140,
    },
  },
  {
    learner_id: 124,
    assignment_id: 3,
    submission: {
      submitted_at: "12-09-2024",
      score: 280,
    },
  },
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "10-05-2024",
      score: 50,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "11-7-2024",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "12-09-2024",
      score: 300,
    },
  },
];

function getLearnerData(CourseInfo, AssignmentGroup, learnerSubmissions) {
  if (AssignmentGroup.course_id !== CourseInfo.id) {
    throw new Error(
      "AssignmentGroup does not belong to its course (mismatching course_id with CourseInfo.id)"
    );
  }
}
function validateAssignment(assignment) {
  if (isNaN(assignment.points_possible) || assignment.points_possible <= 0) {
    throw new Error(`Invalid points possible for assignment ${assignment.id}`);
  }
}

const assignments = {};

for (const assignment of AssignmentGroup.assignments) {
  try {
    validateAssignment(assignment);
    assignments[assignment.id] = assignment;
  } catch (error) {
    console.error(error.message);
    break;
  }
}

function calculatePercentage(score, pointsPossible) {
  if (pointsPossible === 0) {
    throw new Error("point possible cannot be zero");
  }
  return (score / pointsPossible) * 100;
}

// learner data important info

function getLearnerData(CourseInfo, AssignmentGroup, learnerSubmissions) {
  if (AssignmentGroup.course_id !== CourseInfo.id) {
    throw new Error(
      "AssignmentGroup does not belong to its course (mismatching course_id with CourseInfo.id)"
    );
  }

  function validateAssignment(assignment) {
    if (isNaN(assignment.points_possible) || assignment.points_possible <= 0) {
      throw new Error(
        `Invalid points possible for assignment ${assignment.id}`
      );
    }
  }

  const assignments = {};

  for (const assignment of AssignmentGroup.assignments) {
    try {
      validateAssignment(assignment);
      assignments[assignment.id] = assignment;
    } catch (error) {
      console.error(error.message);
      break;
    }
  }

  function calculatePercentage(score, pointsPossible) {
    if (pointsPossible === 0) {
      throw new Error("Points possible cannot be zero");
    }
    return (score / pointsPossible) * 100;
  }
  // Important Due Date

  const now = new Date();
  const validAssignments = AssignmentGroup.assignments.filter(
    (assignment) => new Date(assignment.due_at) <= now
  );

  const learnerData = {};

  function initializeLearnerData(learnerId) {
    if (!learnerData[learnerId]) {
      learnerData[learnerId] = {
        id: learnerId,
        avg: 0,
        totalPointsEarned: 0,
        totalPointsPossible: 0,
        assignments: {},
      };
    }
  }

  // Information about late penalty
  function applyLatePenalty(submission, dueDate, pointsPossible) {
    let score = submission.score;
    if (new Date(submission.submitted_at) > new Date(dueDate)) {
      score -= pointsPossible * 0.01;
    }
    return score < 0 ? 0 : score;
  }

  for (const submission of learnerSubmissions) {
    const { learner_id, assignment_id, submission: sub } = submission;

    const assignment = validAssignments.find((a) => a.id === assignment_id);
    if (!assignment) {
      continue;
    }

    initializeLearnerData(learner_id);

    const pointsPossible = assignment.points_possible;
    const score = applyLatePenalty(sub, assignment.due_at, pointsPossible);
    const percentage = calculatePercentage(score, pointsPossible);

    const learner = learnerData[learner_id];
    learner.totalPointsEarned += score;
    learner.totalPointsPossible += pointsPossible;
    learner.assignments[assignment_id] = percentage;
  }

  function calculateWeightedAverage(learnerData) {
    for (const learnerId in learnerData) {
      const learner = learnerData[learnerId];
      learner.avg =
        (learner.totalPointsEarned / learner.totalPointsPossible) * 100;
      delete learner.totalPointsEarned;
      delete learner.totalPointsPossible;
    }
  }

  calculateWeightedAverage(learnerData);
  return Object.values(learnerData);
}

const result = getLearnerData(CourseInfo, AssignmentGroup, learnerSubmissions);
console.log(result);


