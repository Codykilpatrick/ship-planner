import mongoose from 'mongoose'

const Schema = mongoose.Schema

const shipSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
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
    enum: ['DDG', 'CG', 'CVN', 'SSN', 'SSBN', 'SSGN'],
  },
  characteristics: [String],
  ammo: [String],
  tasking: String,
  fuel:{
    type: Number,
    default: 100,
    min: 0,
    max: 100,
  },
  food: {
    type: Number,
    default: 100,
    min: 0,
    max: 100,
  },
  independentSteaming: Boolean,
  daysUnderway: Number,
}, {
  timestamps: true
})

const Ship = mongoose.model('Ship', shipSchema)

export {
  Ship
}