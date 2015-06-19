import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('string'),
  address: DS.belongsTo('address')
});
