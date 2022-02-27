const fs = require("fs").promises;
const writeFile = fs.writeFile;

console.log("start")
const write = async (path) => {
  try {
      for (let i = 0; i < 100000; i++) {
          data = `hello world ${i} \n`;
          console.log("data " + data);
          const first = await fs.writeFile(path, data, { encoding: 'utf8', flag: 'a'});
    }
  } catch (err) {
    console.log("error " + err);
  }
};
console.log("between")
write('./content/bigFile.txt');
console.log("end")