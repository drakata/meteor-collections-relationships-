Template.singlePost.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('posts');
});

Template.singlePost.helpers({
  post: function() {
     const id = FlowRouter.getParam('_id')
    return Posts.findOne({_id: id});

  },

});
