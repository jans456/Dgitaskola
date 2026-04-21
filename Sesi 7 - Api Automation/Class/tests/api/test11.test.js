// // json schema validation
// import fetch from "node-fetch"
// import { expect } from "chai"; //validation
// //  kita nyalakan
// import Ajv from "ajv";
// import schema_getuser from "../schema/regresSchema.js"; // nyalakan skema yang saya komen di folder schema


// describe("API Tests Suite", function () {
//     const baseURL="https://reqres.in";

//     it("READ - Get Single user", async function () {
//         const response = await fetch("https://reqres.in/api/users/2", {
//         headers: { "x-api-key": "reqres_bc7d582aeb1e47959840e1bb200dfdd3" },
//         method : "GET",
//          });

//        expect(response.status, 'the testcase is error').to.equal(200);

//        const hasil = await response.json();
//         console.log(hasil); 
//        expect(hasil.data.email, 'emailnya tidak sesuai').to.equal("janet.weaver@reqres.in");

//     //    validasi schema ajv
//         const ajv = new Ajv();
//         const validate = ajv.compile(schema_getuser);
//         const hasilcomparasi = validate(hasil);
//         expect(hasilcomparasi, 'validasi schema ajv ada yang salah').to.be.true;
//     });

// });

// // kita check response -> kemudian ke json schema generator gunakan data dummy ---> validatinya benar