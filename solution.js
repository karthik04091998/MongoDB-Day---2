
//1. Find all the topics and tasks which are thought in the month of October

db.tasks.find({ date: { $regex: "2020-10" } });
db.topics.find({ date: { $regex: "2020-10" } });

//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.companyDrives.find({ date: { $gte: "2020-10-15", $lte: "2020-10-31" } });

//3. Find all the company drives and students who are appeared for the placement.

const drives = db.companyDrives.find({}).toArray();

const emails = [];
drives.forEach((o) => o.students.forEach((e) => emails.push(e)));

const appeardStudents = db.users.find({ email: { $in: emails } });


//4. Find the number of problems solved by the user in codekata

db.codekata.aggregate({ $match: { name: "karthik" } });

//5. Find all the mentors with who has the mentee's count more than 15

db.mentors.aggregate({ $match: { mentees: { $gt: 15 } } });

//6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

const users = db.attendance.find({}).toArray();

const email = [];
users.forEach((o) => o.students.forEach((e) => email.push(e)));

const appeardStudent = db.users.find({ email: { $in: emails } });

const absentUsers = db.users.find({
  email: { $in: email },
  date: { $gte: "2020-10-15", $lte: "2020-10-31" },
});

const task = db.users.find({
    email: { $in: email },
    dateDate: { $gte: "2020-10-15", $lte: "2020-10-31" },
    tasks: { $Completed: false }
});