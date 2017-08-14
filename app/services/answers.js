import Ember from 'ember';
import config from '../config/environment';

const { answers } = config.APP;

export default Ember.Service.extend({
  answerMe() {
    return answers[this.getRandomInt(0, answers.length - 1)];
  },

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
