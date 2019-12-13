import faker from 'faker';
class cityy {
  static city(req, res) {
    return res.status(200).json({
      randomCity: faker.address.city()
    });
  }
}
export default cityy;
