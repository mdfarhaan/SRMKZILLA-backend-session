const prompt = require("prompt-sync")();
const fs = require("fs");

console.log("1.Write File\n2.Read File\n3.Append File");
const operation = prompt("Enter the operation to perform: ");

const writeFile = () => {
  const noOfSubjects = prompt("Enter the number of subjects: ");

  let data = "";

  for (let i = 0; i < noOfSubjects; i++) {
    const subject = prompt("Title: ");
    const mark = prompt("Mark: ");
    data += `${subject}: ${mark}\n`;
  }

  fs.writeFile("marks.txt", data, (err) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("File written successfully");
    }
  });
};

const readFile = () => {
  fs.readFile("marks.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log(data);
    }
  });
};

const appendFile = () => {
  const noOfSubjects = prompt("Enter the number of subjects: ");

  let data = "";

  for (let i = 0; i < noOfSubjects; i++) {
    const subject = prompt("Title: ");
    const mark = prompt("Mark: ");
    data += `${subject}: ${mark}\n`;
  }

  fs.appendFile("marks.txt", data, (err) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("File written successfully");
    }
  });
};

if (operation == 1) {
  writeFile();
} else if (operation == 2) {
  readFile();
} else if (operation == 3) {
  appendFile();
}
