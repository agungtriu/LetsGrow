const deleteFile = require("./deleteFile");

const deleteBulkFile = (datas) => {
  datas.forEach((data) => {
    deleteFile(data.image);
  });
};

module.exports = deleteBulkFile;
