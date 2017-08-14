import { moduleFor, test } from 'ember-qunit';

moduleFor('service:answers', 'Unit | Service | answers', {
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();

  assert.ok(service);
  assert.ok(service.answerMe().length > 0);
});
