module.exports = app => {
  const mongoose = app.mongoose;
  const KingdataSchema = new mongoose.Schema({
    form: { type: String },
    form_name: { type: String },
    entry: { type: Object }
  },{
    timestamps: true,
  });

  return mongoose.model('Kingdata', KingdataSchema);
}