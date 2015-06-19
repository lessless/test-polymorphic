import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  number: faker.phone.phoneNumber,
  address_id: 1
});
