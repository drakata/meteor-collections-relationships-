import {Meteor} from 'meteor/meteor';
import {Categories} from '/imports/api/links/links.js';
import {Posts} from '/imports/api/links/links.js';
import './showCategories.html';

Template.showCategories.onCreated(function() {
  Meteor.subscribe('posts');
  Meteor.subscribe('categories');
});

Template.showCategories.helpers({
  posts() {
    return Posts.find({});
  }
});

Template.showCategories.helpers({
  categories() {
    return Categories.find({});
  }
});

Template.showCategories.onRendered(function() {
  $('.modal').modal();
});
