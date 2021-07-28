module.exports = () => {
  const controller = {};

  controller.statusCode = (req, res) => {
    res.status(204).json("");
    //console.log(res);
  
  }

  return controller;
}