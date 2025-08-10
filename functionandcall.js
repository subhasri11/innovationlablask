const teacher = { name: "Mr. Smith" };
const student = { name: "Anna" };

function introduce(subject, year) {
  console.log(`${this.name} teaches ${subject} in ${year}`);
}

introduce.call(teacher, "Mathematics", 2025);
introduce.call(student, "Science", 2024);

introduce.apply(teacher, ["History", 2023]);
introduce.apply(student, ["English", 2022]);

const boundIntro = introduce.bind(student);
boundIntro("Biology", 2026);
boundIntro("Chemistry", 2027);