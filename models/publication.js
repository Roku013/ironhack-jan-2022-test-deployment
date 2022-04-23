const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      maxlength: 300,
      // Ensures that any spaces at the beginning or ending of string are removed
      trim: true
    },

    picture: {
      type: String
    },
    creator: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  { timestamps: true }
);

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;
