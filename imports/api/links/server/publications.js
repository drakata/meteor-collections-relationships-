// All posts and cotegory related publications

import { Meteor } from 'meteor/meteor';
import { Posts } from '../links.js';
import { Categories } from '../links.js';

Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('categories', function() {
  return Categories.find();
});
