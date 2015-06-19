import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.belongsTo('address')
});
