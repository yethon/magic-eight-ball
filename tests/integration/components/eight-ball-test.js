import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eight-ball', 'Integration | Component | eight ball', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{eight-ball}}`);

  assert.equal(this.$().text().trim(), `HELLO, I'M AN EIGHT BALL.`);

});
