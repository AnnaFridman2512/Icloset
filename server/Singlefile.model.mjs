import mongoose from 'mongoose';

const singleFileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  fileSize: {
    type: String,
    required: true
  }
}, {timestamps : true});

export const SingleFile = mongoose.model('SingleFile', singleFileSchema);