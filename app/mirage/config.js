export default function() {

  this.get('/users', function(db) {
    return {users: db.users};
  });

  this.get('/contacts', function(db) {
    return {contacts: db.contacts};
  });

  this.get('/addresses', function(db) {
    return {addresses: db.addresses, emails: db.emails, phones: db.phones};
  });

  this.get('/addresses/:id', function(db, request) {
    var id = parseInt(request.params.id),
    address = db.addresses.find(id + 1);
    return {address: db.addresses.find(id + 1)};
  });

  this.get('/groups');
  this.put('/addresses/:id');
  this.put('/users/:id');
  this.put('/contacts/:id');
  this.put('/contacts/:id');
}
