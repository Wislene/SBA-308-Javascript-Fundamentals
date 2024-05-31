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

 function getLearnerData(CourseInfo, AssignmentGroup, learnerSubmissions) {
 
  if (AssignmentGroup.course_id !== CourseInfo.id) {
    throw new Error("AssignmentGroup does not belong to its course (mismatching course_id with CourseInfo.id)");
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

  return assignments;
}

function calculatePercentage(score, pointsPossible){
  if (pointsPossible === 0){
    throw new Error ("point possible cannot be zero")
  }
  return (score/pointsPossible) * 100;
}

// Validate assignment: 

let now = new Date ();
let validAssignments = [];
for (let i = 0; i < learnerGroup.assignments.length; i++) {
  let assignment = assignmentGroup.assignments[i];
  if (new Date(assignment.due_at) <= now) {
    validateAssignments.push(assignment);
}
}
let learnerData = {};

for (let i = 0; i < learnerSubmission.length; i++) {
const submissin = learnerSubmissions[i];
const { learner_id, assignment_id, submission: sub } = submission;
}

let assignment = null;
for (let i = 0; j < validAssignments.length; i++){
if (validAssignments[j].id === assignment_id) {
  assignment = validAssignments[j];
  assignmentFound = true;
  break;
}
}
// final results
if (assignment) {
  const pointsPossible = assignment.points_possible;
  const percentage = calculatePercentage(score,pointsPossible);
  // const score penalty
}

learnerData[learner_id] = learnerData[learner_id] || {
  id: learner_id,
  avg: 0,
  totalPointsPossible: 0,
  totalPointsEarned: 0
  assignments: {}
};



// Apply Late penalty:

// valid assignmen with date:



const result= getLearnerData (CourseInfo, AssignmentGroup, [])
console.log (result);
