
import { Meteor } from 'meteor/meteor';
import { Categories } from '/imports/api/links/links.js';
import { Posts } from '/imports/api/links/links.js';
import './showPosts.html';


Template.shownPosts.onCreated(function() {
  Meteor.subscribe('posts');
  Meteor.subscribe('categories');
});

Template.shownPosts.helpers({
  posts() {
    return Posts.find({});
  }
});

Template.shownPosts.helpers({
  categories() {
    return Categories.find({});
  }
});

Template.shownPosts.events({
  'click .toggle-add-category': function(e, template) {
    const postId = this.id
    console.log(postId);
    const pid = $(e.currentTarget).data('postid');
    Meteor.call('addingPostId', postId, pid, function(error, user) {
      console.log(pid)
    });
  }
});
