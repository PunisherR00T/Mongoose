const Person = require('../Model/Person')

exports.AddPerson = async(req,res)=>{
    try {
        const NewPerson = new Person(req.body)
        await NewPerson.save()
        res.status(200).send({NewPerson,Msg :'Person Added'})
    } catch (error) {
        res.status(500).send('Error while adding Person')
        
    }
}
exports.GetPerson = async (req,res)=>{
    try {
        const Persons = await Person.find()
        res.status(200).send({Persons,Msg:'List of Persons'})
    } catch (error) {
        res.status(500).send('Could not get Persons')
    }
}

exports.DeletePerson = async (req,res)=>{
    try {
        const {id} = req.params
        const RemovePerson = await Person.findByIdAndDelete(id)
        res.status(200).send('Person has been deleted ...')
    } catch (error) {
        res.status(500).send('Could not delete Person')
    }
}

exports.UpdatePerson = async(req,res)=>{
    try {
        const {id} = req.params
        const UpdatePerson = await Person.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send("Person has been updated !")
    } catch (error) {
        res.status(500).send('Could not update Person')
    }
}

exports.GetOnePerson = async(req,res)=>{
    try {
        const {id} = req.params
        const OnePerson = await Person.findById(id)
        res.status(200).send({OnePerson,Msg : 'The Person is founded !'})
    } catch (error) {
        res.status(500).send('Person not found')
    }
}

exports.DeleteOnePerson = async(req,res)=>{
    try {
        const {id} = req.params
        const OnePerson = await Person.findByIdAndDelete(id)
        res.status(200).send({OnePerson,Msg : 'The Person is deleted !'})
    } catch (error) {
        res.status(500).send('Could not delete Person')
    }
}

exports.UpdateOnePerson = async(req,res)=>{
    try {
        const {id} = req.params
        const OnePerson = await Person.findByIdAndUpdate(id)
        res.status(200).send({OnePerson,Msg : 'The Person is updated !'})
    } catch (error) {
        res.status(500).send('Could not update Person')
    }
}

exports.SortedPerson = async(req,res)=>{
    try {
        const SortedPerson = await Person.find({'favoriteFood':'burritos'}).sort({"name":1}).limit(2).select('name','favoriteFood')
        res.status(200).send({SortedPerson,Msg:'Person is found'})
    } catch (error) {
        res.status(500).send('Could not found sorted Person')
    }
}