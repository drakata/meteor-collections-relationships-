// Import our categories collection from links.js where we defined it
// Import meteor from meteor
// Import the createCategory.html otherwise you will get an error

import { Categories } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './createCategory.html';

//Subscribe to our categories collection when we navigate to the template.
Template.categoryCreate.onCreated(function() {
  Meteor.subscribe('categories');
});

// return our categories so that we can access them
Template.categoryCreate.helpers({
  categories() {
    return Categories.find({});
  }
});

// We need the events for our form.

Template.categoryCreate.events({
  'submit .category-add' (event) {
    event.preventDefault();

    const target = event.target;
    const Name = target.Name;

    Meteor.call('category.insert', Name.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        Name.value = '';
      }
    });
  }
});
