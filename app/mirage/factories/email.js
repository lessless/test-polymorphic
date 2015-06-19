import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  address: faker.internet.email,
  address_id: 1
});
