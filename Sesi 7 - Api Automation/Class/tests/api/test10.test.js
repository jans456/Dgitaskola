// // json schema validation
// import fetch from "node-fetch"
// import { expect } from "chai"; //validation
// // check response matiksn fetch dan ajv
// // import fetch from "node-fetch";
// // import Ajv from "ajv";


// describe("API Tests Suite", function () {
//     const baseURL="https://reqres.in";

//     it("READ - Get Single user", async function () {
//         const response = await fetch("https://reqres.in/api/users/2", {
//         headers: { "x-api-key": "reqres_bc7d582aeb1e47959840e1bb200dfdd3" },
//         method : "GET",
//          });

//        expect(response.status, 'the testcase is error').to.equal(200);

//        const hasil = await response.json();
//        console.log(hasil); // check response
  

//        expect(hasil.data.email, 'emailnya tidak sesuai').to.equal("janet.weaver@reqres.in");

//     });

// });

// // kita check response -> kemudian ke json schema generator gunakan data dummy