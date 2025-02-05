const mongoose = require('mongoose');

// Comment Schema (Sub-document)
const CommentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  commentedAt: {
    type: Date,
    default: Date.now
  }
});

// Blog Post Schema
const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Title must be at least 5 characters long']
  },
  content: {
    type: String,
    required: true,
    minlength: [50, 'Content must be at least 50 characters long']
  },
  author: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }],
  category: {
    type: String,
    default: 'General'
  },
  likes: [{
    type: String
  }],
  comments: [CommentSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
});

// Create models
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
  BlogPost,
  Comment
};