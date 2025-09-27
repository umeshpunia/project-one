import TestModel from "./model.js";

async function addData(req, res) {
  try {
    const { name, age } = req.body;

    if (!name || !age) {
      return res.json({ status: 400, message: "Please enter name and age" });
    }

    const saveToDb = await new TestModel({ name, age: age }).save();

    if (!saveToDb)
      return res.json({ status: 400, message: "Something wrong!" });

    return res.json({ status: 200, message: "Data saved" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function getData(req, res) {
  try {
    const users = await TestModel.find();
    if (!users.length) return res.json({ status: 404, message: "Not found!" });

    return res.json({ status: 200, message: users });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
async function getSingle(req, res) {
  try {
    const { id } = req.params;
    const user = await TestModel.findById(id);
    if (!user) return res.json({ status: 404, message: "Not found!" });

    return res.json({ status: 200, message: user });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
async function updateSingle(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) return res.json({ status: 400, message: "Please enter name" });
    const user = await TestModel.findByIdAndUpdate(id, { $set: { name } });
    if (!user) return res.json({ status: 404, message: "Not found!" });

    return res.json({ status: 200, message: "Updated success" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function deleteSingle(req, res) {
  try {
    const { id } = req.params;
    const user = await TestModel.findByIdAndDelete(id);
    if (!user) return res.json({ status: 404, message: "Not found!" });

    return res.json({ status: 200, message: "deleted" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
export { addData, getData, getSingle, updateSingle, deleteSingle };
