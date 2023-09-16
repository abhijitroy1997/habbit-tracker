const tasks = require("../models/taskList");
const dayStatus = require("../models/everyDayStatus");

//  redirecting to week list Page
module.exports.weeklist = async function (req, res) {
  let result = await tasks.find({});
  let totalInfo = [];
  for (let habit of result) {
    let everyDayStatus = [];
    let index = habit.taskStatus.length - 7;
    while (index < habit.taskStatus.length) {
      let val = await dayStatus.findById(habit.taskStatus[index].id);
      everyDayStatus.push(val);
      index++;
    }
    totalInfo.push({
      name: habit.TaskName,
      status: everyDayStatus,
    });
  }
  return res.render("weekList.ejs", {
    title: "Week List",
    habits: totalInfo,
  });
};
