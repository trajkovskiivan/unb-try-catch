const user_index = (req, res) => {
    try {
        console.log(req.body);
        res.json(req.body)
    } catch (error) {
        console.error(error.message)
    }
};

const user_signup = (req, res) => {
    try {
        console.log(req.body);
        res.json(req.body)
    } catch (error) {
        console.error(error.message)
    }
};

const user_signin = (req, res) => {
    try {
        console.log(req.body);
        res.json(req.body)
    } catch (error) {
        console.error(error.message)
    }
};

const user_update = (req, res) => {
    try {
        console.log(req.body);
        res.json(req.body)
    } catch (error) {
        console.error(error.message)
    }
};

const user_delete = (req, res) => {
    try {
        console.log(req.body);
        res.json(req.body)
    } catch (error) {
        console.error(error.message)
    }
};

const user_find = (req, res) => {
    res.end(`Trying to find user : ${req.params.id}`)
}

module.exports = {
    user_index,
    user_signup,
    user_signin,
    user_update,
    user_delete,
    user_find
}