// import { Meteor } from 'meteor/meteor';
// import SimpleSchema from 'simpl-schema';
// import { Mongo } from 'meteor/mongo';

// SimpleSchema.extendOptions(['autoform']);

// import { Tracker } from 'meteor/tracker';

// Posts.allow({
//   insert: function () { return true; },
//   update: function () { return true; },
//   remove: function () { return true; }
// });

// PostsSchema = new SimpleSchema({
//   id: {
//     type: Number,
//     autoValue: function() {
//        return Math.floor((Math.random() * 100) + 1);
//    },
//    autoform: {
//      type: "hidden"
//    }
//   },
//   title: {
//     type: String,
//     label: "Title"
//   },
//   content: {
//     type: String,
//     label: "Content"
//   },
//   CategoryId: {
//     type: { type: Array
//     },
//     autoform: {
//       type: "hidden"
//     },
//     optional: true
//   },
//    'CategoryId.$': { type: String
//    },

// })

// Posts.attachSchema( PostsSchema );
