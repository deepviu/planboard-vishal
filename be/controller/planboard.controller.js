const {getPlan,createPlan} = require("../services/planboard.services");

exports.getPlan = async (req, res) => {
  try {
    const plan = await getPlan();
    res.status(200).send(plan);
  } catch (err) {
    res.status(500).json({error: err.messege});
  }
};

exports.createPlan = async (req, res) => {
  try {
    const plan = await createPlan();
    res.status(200).send(plan);
  } catch (err) {
    res.status(500).json({error: err.messege});
  }
};
