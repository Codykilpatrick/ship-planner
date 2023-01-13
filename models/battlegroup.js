import mongoose from 'mongoose'

const Schema = mongoose.Schema

const battlegroupSchema = new Schema({
  name: String,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  location: String,
  ships: [shipSchema],
  aor: String,
}, {
  timestamps: true
})

const Battlegroup = mongoose.model('Battlegroup', battlegroupSchema)

export {
  Battlegroup
}