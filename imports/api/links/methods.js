// Methods related to posts and categories

import { Meteor } from 'meteor/meteor';
// Import your Posts and Categories collection which you defined in links.js
import { Posts } from './links.js';
import { Categories } from './links.js';

// Our methods for posts, notice that id is there, but id is not in the form, its auto generated when a post is created
Meteor.methods({
  'posts.insert' (title, content, id) {
    return Posts.insert({content, title, id, createdAt: new Date()});
  }
});

Meteor.methods({
  'category.insert' (Name, postId) {
    return Categories.insert({Name, createdAt: new Date()});
  }
});

Meteor.methods({
  addingPostId: function(postId, pid) {
    console.log(pid);
    console.log(postId);
    Categories.update({
      _id: pid
    }, {
      $addToSet: {

        Posstid: postId
      }
    });
  }
});
