const fs = require("fs");

// exists
fs.exists("yash.txt", (status) => {
  console.log(status);
});
const status = fs.existsSync("yash.txt");
console.log(status);

// stat
fs.stat("yash.txt", (err, stat) => {
  if (err) {
    console.log(err);
  }
  console.log(stat);
});

const options = { bigint: true };
const stat = fs.statSync("yash.txt");
console.log(stat);

// openFile
fs.open("yash.txt", "r+", (err, fd) => {
  if (err) {
    console.log(err);
  }
  console.log("File Opened Successyfully. File Descriptor:", fd);
});
console.log("Next Task");

const fd1 = fs.openSync("yash.txt", "r+");
console.log("File opened successfully. File Descriptor:", fd1);
console.log("Next Task");

// readFile
fs.readFile("yash.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("data : ", data);
});
console.log("Next Task");

const data = fs.readFileSync("yash.txt", "utf-8");
console.log("data : ", data);
console.log("Next Task");

// writeFile
fs.writeFile("yash.txt", "himanshu", "utf-8", (err) => {
  if (err) {
    console.log("Error Occured");
  }
  console.log("Written Successfully");
});
console.log("Next Task");

const wconf = fs.writeFileSync("yash.txt", "yash", "utf-8");
console.log("Written Successfully");
console.log("Next Task");

// appendFile
fs.appendFile("yash.txt", "\nhimanshu", "utf-8", (err) => {
  if (err) {
    console.log("Error Occured");
  }
  console.log("Updated Successfully");
});
console.log("Next Task");

const uconf = fs.appendFileSync("yash.txt", "yash", "utf-8");
console.log("Updated Successfully");
console.log("Next Task");

// // close
fs.open("yash.txt", "r", (err, fd) => {
  if (err) {
    console.error(err);
  }

  console.log("File opened successfully. File Descriptor:", fd);

  fs.close(fd, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File closed successfully.");
  });
});
console.log("Next Task");

const fd2 = fs.openSync("yash.txt", "r");
console.log("File Opened Successfully");
fs.closeSync(fd2);
console.log("File Closed Successfully");
