import Ember from 'ember';

let features = [
  {
    image: "images/more-from-1.png",
    title: "Send SMS Anywhere FREE",
    subText: "Send SMS anywhere in the world for FREE. Data is not required and can run on normal SMS credits. Platform can be used for OTP, SMS Notification",
    callToAction: "I am interested, Vyron"
  },
  {
    image: "images/more-from-4.png",
    title: "Create your own Android character",
    subText: "Turn the little green Android mascot into you, your friends, anyone!",
    callToAction: "androidify.com"
  },
  {
    image: "images/more-from-2.png",
    title: "Get a clean customisable home screen",
    subText: "A clean, simple, customisable home screen that comes with the power of Google Now: Traffic alerts, weather and much more, just a swipe away.",
    callToAction: "Download now"
  },
  {
    image: "images/more-from-3.png",
    title: "Millions to choose from",
    subText: "Hail a taxi, find a recipe, run through a temple – Google Play has all the apps and games that let you make your Android device uniquely yours.",
    callToAction: "Find apps"
  }
];

export default Ember.Route.extend({
  model() {
    return {
      features : features
    };
  }
});
