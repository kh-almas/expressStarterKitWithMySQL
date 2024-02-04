
const Joi = require("joi");

// schema
const ValidationSchema = Joi.object({
    name: Joi.string(),
    // branch_id: Joi.number().required(),
    // date: Joi.date().required(),
    // batch_no: Joi.string().required(),
});


// add test validation
const testValidation = async (req, res, next) => {
    try {
        const {name} = req.body
        const obj = {name};

        await ValidationSchema.validateAsync(obj);

        next();
    } catch (err) {
        console.error(`validation error: ${err}`);

        return res.status(400).json({
            status: "error",
            body: { message: err },
        });
    }
};

// export
module.exports = testValidation;