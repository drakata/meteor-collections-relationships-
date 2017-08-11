
import { Meteor } from 'meteor/meteor';
import { Categories } from '/imports/api/links/links.js';
import { Posts } from '/imports/api/links/links.js';
import './singleCategory.html';

Template.singleCategory.onCreated(function() {
  Meteor.subscribe('posts');
  Meteor.subscribe('categories');
});

Template.singleCategory.helpers({
  posts() {
    return Posts.find({});
  },
});

Template.singleCategory.helpers({
  categories() {
    return Categories.find({});
  },
});

Template.singleCategory.helpers({
  catPost() {
    // find the values in the field we created within categories collection
    const stringCat = Categories.find({}, {
      fields: {
        Posstid: 1
      }
    }).fetch();
    console.log(stringCat);
    //since we cannot itterate through it, we need to use underscore to further access the integers
    const categoryChain = _.chain(stringCat)
      .pluck('Posstid')
      .flatten()
      .uniq()
      .value();
    console.log(categoryChain);
    const id = FlowRouter.getParam('_id');
    // now that we successfully accessed the integers we saved within our categories collection, lets match it to the
    // id in our posts
    const categoryId = Posts.find({
      id: {
        $in: categoryChain
      }
    });
    return categoryId
    console.log(categoryId);
  }
});
