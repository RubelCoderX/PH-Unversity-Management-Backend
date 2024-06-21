export const calculateGradeAndPoints = (totalMarks: number) => {
  let result = {
    grade: 'NA',
    gradePoints: 0,
  };
  if (totalMarks >= 0 && totalMarks <= 39) {
    result = {
      grade: 'F',
      gradePoints: 0.0,
    };
  } else if (totalMarks >= 40 && totalMarks <= 49) {
    result = {
      grade: 'P',
      gradePoints: 1.0,
    };
  } else if (totalMarks >= 50 && totalMarks <= 59) {
    result = {
      grade: 'B',
      gradePoints: 2.0,
    };
  } else if (totalMarks >= 60 && totalMarks <= 69) {
    result = {
      grade: 'B+',
      gradePoints: 2.5,
    };
  } else if (totalMarks >= 70 && totalMarks <= 79) {
    result = {
      grade: 'A',
      gradePoints: 3.0,
    };
  } else if (totalMarks >= 80 && totalMarks <= 89) {
    result = {
      grade: 'A+',
      gradePoints: 4.0,
    };
  } else if (totalMarks >= 90 && totalMarks <= 100) {
    result = {
      grade: 'O',
      gradePoints: 4.0,
    };
  } else {
    result = {
      grade: 'NA',
      gradePoints: 0,
    };
  }
  return result;
};
