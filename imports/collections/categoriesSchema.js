import SimpleSchema from 'simpl-schema';

//SimpleSchema.extendOptions is important otherwise
//we cannot use features such as autoform: autoform: {type: "hidden"}

SimpleSchema.extendOptions(['autoform']);
Categories = new Mongo.Collection('categories');

//Permissions

Categories.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});

//our schema

CategoriesSchema = new SimpleSchema({

  //we need to give the category a unique id when we create the post.
  //We will not need this but it might come in handy if we extend this file

  id: {
    type: Number,
    autoValue: function() {
      return Math.floor((Math.random() * 100) + 1);
    },

    //Lets hide the id so that the user deosn't see this field since it auto updates

    autoform: {
      type: "hidden"
    }
  },
  name: {
    type: String,
    label: "name"
  },

  //We need to create an array that will host all our post Ids, we also give it a type hidden,
  //aswell as optional:true

  PostId: {
    type: {
      type: Array
    },
    autoform: {
      type: "hidden"
    },
    optional: true
  },
  'PostId.$': {
    type: Number
  },
})

Categories.attachSchema(CategoriesSchema);
