const User = require("./User");
const EmailCode = require("./emailCode");


EmailCode.belongsTo(User) //userID
User.hasOne(EmailCode)