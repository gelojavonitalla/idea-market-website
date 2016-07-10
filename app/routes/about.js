import Ember from 'ember';

let aboutList = [
  {
    image: "images/more-from-1.png",
    title: "Post Your Idea",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget luctus urna. Fusce ultrices nulla arcu, ac gravida quam pretium non. Nam sit amet ex vulputate, tincidunt ligula sit amet, scelerisque ligula. Fusce sit amet turpis condimentum lorem ornare viverra sit amet vitae urna. Nullam vel fermentum nulla. Proin mauris erat, ullamcorper quis eros eu, porttitor dapibus odio. Ut sed risus lacus. Aliquam vitae sem sit amet risus molestie hendrerit in sit amet arcu. Quisque nec mattis elit. Cras viverra nisl quis enim tempus finibus. Phasellus ullamcorper molestie faucibus. Aliquam tempus urna massa, sed porta justo pellentesque et. Nulla ultricies magna id leo vehicula pretium. Quisque finibus consectetur gravida. Nullam aliquet augue at nunc egestas pretium. Quisque feugiat dolor non maximus luctus. Etiam ultricies est ac quam tempus feugiat. Nam pellentesque accumsan arcu, a sagittis nunc euismod tempus. Aliquam quis sodales ante. Nunc non eros hendrerit, feugiat lacus non, volutpat arcu. Praesent gravida tortor nec tortor consectetur eleifend."
  },{
    image: "images/more-from-4.png",
    title: "The World is waiting for your idea. Share it",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget luctus urna. Fusce ultrices nulla arcu, ac gravida quam pretium non. Nam sit amet ex vulputate, tincidunt ligula sit amet, scelerisque ligula. Fusce sit amet turpis condimentum lorem ornare viverra sit amet vitae urna. Nullam vel fermentum nulla. Proin mauris erat, ullamcorper quis eros eu, porttitor dapibus odio. Ut sed risus lacus. Aliquam vitae sem sit amet risus molestie hendrerit in sit amet arcu. Quisque nec mattis elit. Cras viverra nisl quis enim tempus finibus. Phasellus ullamcorper molestie faucibus. Aliquam tempus urna massa, sed porta justo pellentesque et. Nulla ultricies magna id leo vehicula pretium. Quisque finibus consectetur gravida. Nullam aliquet augue at nunc egestas pretium. Quisque feugiat dolor non maximus luctus. Etiam ultricies est ac quam tempus feugiat. Nam pellentesque accumsan arcu, a sagittis nunc euismod tempus. Aliquam quis sodales ante. Nunc non eros hendrerit, feugiat lacus non, volutpat arcu. Praesent gravida tortor nec tortor consectetur eleifend."

  }
];

export default Ember.Route.extend({
  model() {
    return {
      aboutList : aboutList
    };
  }
});
