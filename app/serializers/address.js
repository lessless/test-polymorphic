import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    phones: {embedded: 'always'},
    emails: {embedded: 'always'}
  }
});
