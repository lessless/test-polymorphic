import { moduleForModel, test } from 'ember-qunit';

moduleForModel('phone', 'Unit | Model | phone', {
  // Specify the other units that are required for this test.
  needs: ['model:address']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
