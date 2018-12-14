import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | comics/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:comics/index');
    assert.ok(route);
  });
});
