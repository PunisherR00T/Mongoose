const express = require("express")
const { GetPerson, AddPerson, DeletePerson, UpdatePerson, GetOnePerson, DeleteOnePerson, UpdateOnePerson, SortedPerson } = require("../Controllers/Person")
const Person = require("../Model/Person")

const PersonRouter = express.Router()

PersonRouter.post('/AddPerson',AddPerson)
PersonRouter.get('/GetPersons',GetPerson)
PersonRouter.delete('/DeletePerson/:id',DeletePerson)
PersonRouter.put('/UpdatePerson/:id',UpdatePerson)
PersonRouter.get('/GetOnePerson',GetOnePerson)
PersonRouter.delete('/DeleteOnePerson/:id',DeleteOnePerson)
PersonRouter.put('/UpdateOnePerson/:id',UpdateOnePerson)
PersonRouter.get('/SortedPerson',SortedPerson)

module.exports = PersonRouter