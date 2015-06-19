export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('address', 3);

  server.create('address', {id: 1, city: 'City1', profile: { type: 'Contact', id: 1 } });
  server.create('address', {id: 2, city: 'City2', profile: { type: 'Contact', id: 2 } });
  server.create('address', {id: 3, city: 'City3', profile: { type: 'Contact', id: 3 } });
  server.create('address', {id: 4, city: 'City4', profile: { type: 'User', id: 1 } });

  server.create('user');

  server.create('contact', {group_ids: [1,2]});
  server.create('contact', {group_ids: [1,2]});
  server.create('contact', {group_ids: [3]});

  server.create('group', {name: 'Group1', contact_ids: [1 ,2 ]});
  server.create('group', {name: 'Group2', contact_ids: [1,2 ]});
  server.create('group', {name: 'Group3', contact_ids: [3 ]});
  
  server.create('email');
  server.create('phone');
}
