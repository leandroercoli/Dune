const { response } = require("express");
const planets = require("../mock/planet/planets.json");
const contacts = require("../mock/user/users.json");

const getPlanets = (req, res = response) => {
  res.json(planets);
};

const getContacts = (req, res = response) => {
  const { id } = req.params;
  res.json(contacts.filter((contact) => contact.id !== Number(id)));
};

module.exports = {
  getPlanets,
  getContacts,
};
