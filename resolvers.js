const user =  {
  _id: "1",
  name: "Oleh",
  email: "test@gmail.com",
  picture: "",
};

module.exports = {
  Query: {
    me: () => user
  }
};