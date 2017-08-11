import './home.html';


import '../../components/posts/showPosts.js';
import '../../components/posts/createPost.js';
import '../../components/categories/createCategory.js';
import '../../components/categories/showCategories.js';
import '../../components/categories/singleCategory.js';

Template.App_home.onRendered(function () {
 	 $('.modal').modal();
});
