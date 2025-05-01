//====================Admin Penal Controllers========================
// Admin 
const {registerAdminController } = require("./adminpanelcontrollers/admincontroller");


// About Page Controllers
const { addAboutController, viewAboutController, DeleteController,    readEditAboutController, } = require("./adminpanelcontrollers/aboutcontrollers");

// Author Details Page
const { addAuthorDetailsController, viewAuthoeDetailsController, singleAuthorDeleteController,  } = require("./adminpanelcontrollers/authordetailscontroller");

module.exports = {
// =============Admin Penal Controllers =====================
// ========Admin 
registerAdminController,

// ======== About Page Controllers ===============
     addAboutController,
     viewAboutController,
     DeleteController,
     readEditAboutController,
// ======= Author Details Controllers ==============
     addAuthorDetailsController,
     viewAuthoeDetailsController,
     singleAuthorDeleteController
}