module.exports = {
  getHouse: async (req, res) => {
    const db = req.app.get("db");

    db.get_house()
      .then(dbResponse => res.status(200).send(dbResponse))
      .catch(err =>
        res.status(500).send({ errorMessage: "Something on Get Request" })
      );
  },

  addHouse: async (req, res) => {
    const { name, address, city, state, zipcode } = req.body;
    const db = req.app.get("db");
    console.log(name, address, city, state, zipcode);
    db.add_house(name, address, city, state, zipcode)
      .then(house => {
        res.status(200).send(house);
      })
      .catch(err => res.status(500).send(err));
  },

//   deleteHouse: async (req, res) => {
//       const { id } = req.params;
//       const db = req.app.get('db');
//       console.log(id)
//       db.delete_house(id)
//       res.status(200).send('house deleted')
//   }
};
