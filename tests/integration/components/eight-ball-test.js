// import { click } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eight-ball', 'Integration | Component | eight ball', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{eight-ball}}`);

  assert.equal(this.$('.m8b-answer').text().trim(), ``);

});

// test('`shake the magic eight ball - get an answer`', async function(assert) {
  // assert.expect(2);

  // this.render(hbs`{{eight-ball}}`);

  // assert.ok(this.$('.m8b-answer').text().trim().length === 0, 'there is no message... yet');

  // await click('.m8b-answer-button button');

  // assert.ok(this.$('.m8b-answer').text().trim().length > 0, 'a message is displayed');
// });
