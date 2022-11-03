const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    nombreP : {type: String, required: true, max : 60},
    tipoP : {type: String, required: true, max : 60},
    precioP : {type: String, required: true, max : 60},
});
module.exports = mongoose.model("productos",ProductosSchema);