const del = require("./../controllers/adminDeletionService")
const enums = require("./../controllers/adminEnumerationService")
module.exports = function(app) {

    app.get('/api/deleteUsers', async (req, res) => {
        let response = await del.dropUsers()
        if(response) {
            res.render('success/adminUserDeletion')
        }
    })

    app.get('/api/admin/enum/users', async  (req, res) => {
        let response = await enums.enumUsers();
        if(response["status"]===200) {
            res.json(response["obj"])
        }
    })
}