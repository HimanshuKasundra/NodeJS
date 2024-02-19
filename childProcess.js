const child_process = require("child_process");

child_process.exec("dir", (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  }
  console.log(stdout);
  if (stderr != "") {
    console.log(stderr);
  }
});

/*
`err` is used to capture general errors that occur during 
the execution of the command, 
while `stderr` is used to capture the specific error messages 
that might be printed to the standard error stream 
by the command being executed.
It's common for command-line programs to use `stdout` for 
normal output and `stderr` for error messages.
*/
