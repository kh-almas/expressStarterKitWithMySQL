// require
const getDatabaseConnection = require("../configs/db.config");

const addTest = async (req, res) => {
    try {
        return res.status(200).json({
            status: "ok",
            body: {
                message: "one test added",
                info: 'data goes here',
            },
        });
    } catch (err) {
        console.error(`add test error: ${err}`);

        return res.status(500).json({
            status: "error",
            body: { message: err || "cannot add test" },
        });
    }
};

const getTest = async (req, res) => {
    try {
        return res.status(200).json({
            status: "ok",
            body: {
                message: "get all test",
                data: 'data goes here',
            },
        });
    } catch (err) {
        console.error(`get test error: ${err}`);

        return res.status(500).json({
            status: "error",
            body: { message: err || "cannot get test" },
        });
    }
};

const updateTest = async (req, res) => {
    try {
        return res.status(200).json({
            status: "ok",
            body: {
                message: "one test update",
                info: 'data goes here',
            },
        });
    } catch (err) {
        console.error(`update test error: ${err}`);

        return res.status(500).json({
            status: "error",
            body: { message: err || "cannot update test" },
        });
    }
};

const deleteTest = async (req, res) => {
    try {
        return res.status(200).json({
            status: "ok",
            body: {
                message: "one discount deleted",
                item: 'data goes here',
            },
        });
    } catch (err) {
        console.error(`delete discount error: ${err}`);

        return res.status(500).json({
            status: "error",
            body: { message: err || "cannot delete discount" },
        });
    }
};

module.exports = {addTest, getTest, updateTest, deleteTest};
