import mongoose from 'mongoose'

const Schema = mongoose.Schema

const shipSchema = new Schema({
  name: String,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  battleGroup: { type: Schema.Types.ObjectId, ref: "Battlegroup"},
  aor: String,
  location: String,
  class: String,
  armament: [String],
  ammo: [String],
  tasking: String,
  fuel: Number,
  food: Number,
  independentSteaming: Boolean,
}, {
  timestamps: true
})

const Ship = mongoose.model('Ship', shipSchema)

export {
  Ship
}