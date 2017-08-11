// Import our posts collection from links.js where we defined it
// Import meteor from meteor
// Import the createPost.html otherwise you will get an error

import { Posts } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './createPost.html';

//Subscribe to our posts collection when we navigate to the template.
Template.createPost.onCreated(function() {
  Meteor.subscribe('posts');
});

// return our posts so that we can access them
Template.createPost.helpers({
  posts() {
    return Posts.find({});
  }
});

// We need the events for our form.

Template.createPost.events({
  'submit .post-add' (event) {
    event.preventDefault();
    const target = event.target;
    const title = target.title;
    const content = target.content;
    // We need to generate a random id for the post which we will use to create
    // the many to one relationship between our posts and categories
    const id = Math.floor((Math.random() * 100) + 1);
    //meteor call
    Meteor.call('posts.insert', title.value, content.value, id, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        content.value = '';
      }
    });
  }
});
