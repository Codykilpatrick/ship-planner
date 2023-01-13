import mongoose from 'mongoose'

const Schema = mongoose.Schema

const shipSchema = new Schema({
  name: String,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  battleGroup: { type: Schema.Types.ObjectId, ref: "Battlegroup"},
  aor: {
    type: String,
    default: '2nd Fleet',
    enum: ['3rd Fleet', '2nd Fleet', '4th Fleet', '6th Fleet', '5th Fleet', '7th Fleet']
  },
  location: String,
  class: {
    type: String,
    enum: ['DDG', 'CG', 'CVN', 'SSN', 'SSBN', 'SSGN']
  },
  armament: [String],
  ammo: [String],
  tasking: String,
  fuel:{
    type: Number,
    default: 100,
  },
  food: {
    type: Number,
    default: 100,
  },
  independentSteaming: Boolean,
}, {
  timestamps: true
})

const Ship = mongoose.model('Ship', shipSchema)

export {
  Ship
}