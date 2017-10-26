import Component from 'ember-component';
import get from 'ember-metal/get'
import set from 'ember-metal/set'
import injectService from 'ember-service/inject';

export default Component.extend({
  answers: injectService('answers'),
  magicAnswer: '',

  touchStart() {
    this.getAnswer();
  },

  mouseEnter() {
    this.getAnswer();
  },

  getAnswer() {
    let answer = get(this, 'answers').answerMe();

    set(this, 'magicAnswer', answer);
  }
});
