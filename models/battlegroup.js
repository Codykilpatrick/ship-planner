import mongoose from 'mongoose'

const Schema = mongoose.Schema

const battlegroupSchema = new Schema({
  name: String,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  location: String,
  ships: [shipSchema],
  aor: {
    type: String,
    default: '2nd Fleet',
    enum: ['3rd Fleet', '2nd Fleet', '4th Fleet', '6th Fleet', '5th Fleet', '7th Fleet']
  },
}, {
  timestamps: true
})

const Battlegroup = mongoose.model('Battlegroup', battlegroupSchema)

export {
  Battlegroup
}