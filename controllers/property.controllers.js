
const property_index = (req, res) => {
    console.log(req.body)
    res.end("All the properties")
};

const property_details = (req, res) => {
    console.log(req.params)
    res.end(`You are looking for perperty: ${req.params.id}`)
};

const property_create = (req, res) => {
    const {description} = req.body;
    try {
        console.log(req.body)
        res.json(description)
    } catch (error) {
        console.error(error.message)
    }
};

const property_update = (req, res) => {
    try {
        console.log(req.body)
        res.send(`You are trying to change property: ${req.body.id}`)
        res.json(description)
    } catch (error) {
        console.error(error.message)
    }
};

const property_delete = (req, res) => {
    console.log(req.params)
    res.end(`You are trying to delete property: ${req.params.id}`)
};

module.exports = {
    property_index,
    property_details,
    property_create,
    property_update,
    property_delete
};