import Ember from 'ember';

let aboutList = [
  {
    image: "images/hw/startup-photos.png",
    title: "A Platform for all Ideators.",
    description: "Post your idea and the world know. You can choose on how it will be shared; Make it public for everyone to see and get more exposure, private to earn credits for every view, and protected to have full control on who can view your idea."
  },{
    image: "images/hw/pen-idea-bulb-paper.png",
    title: "The world is waiting for your idea Share it and get discovered.",
    description: "An idea shared is a problem halved. Share your ideas and get audience. More views, more feed backs, a stronger idea..Gain reputation and be known as an idea machine."
  },{
    image: "images/hw/pexels-photo.png",
    title: "Make money from your ideas",
    description: "We said ideas are cheap but we didnt say it's free. For every views on private and protected ideas you can earn credits. Credits can be wired to your account or use it to view others ideas."
  },{
    image: "images/hw/desk-office-hero-workspace.jpg",
    title: "Connect with different people. Work together",
    description: "Meet people that have the same ideas and passion. Looking for a team? You can post job opening with your ideas. If they like your idea and you have the park, it's a match!"
  },{
    image: "images/hw/pexels-photo-9816.png",
    title: "For Eveyone.",
    description:"Either you just want to share, earn extra, or looking for the next big ideas. IdeaMarket is the place for you/ It's a community and it's for everyone. Let's build a bright tomorrow out of brilliant ideas!."
  }
];

export default Ember.Route.extend({
  model() {
    return {
      aboutList : aboutList
    };
  }
});
