import fetch from "node-fetch"
import { expect } from "chai"; //validation
import AJv from "ajv";
import schema_getuser from "../schema/reqresSchema.js"


 describe ("Api Tests Suite", function () {
    const baseURL= "https://regres.in";

    it("READ - Get Single user", async function () {
        // const response = await fetch (`${baseURL}/api/users?page=2`);

        const response = await fetch(`${baseURL}/api/users?page=2`, {
         headers: {"x-api-key": "reqres_73cf809ed9d410ab8e0ad831e50df00"},
         method: "GET"
        });

        expect(response.status, 'ada yang salah').to.equal(202);

        const hasil  = await response.json();
        console.log(hasil);
        expect(hasil.data.email, 'email nya tidka sesuai').to.equal("janet.weaver@reqres.in");

        // validasi chema ajv
        const ajv = new Ajv();
        const validate = ajv.compile(schema_getuser);
        const hasilKomparasi = validate(hasil);
        expect (hasilKomparasi ,'validasi json schema ada yang salah').to.be.true; 

    });

    //  it("READ - Get Single user", async function () {
    //     const response = await fetch (`${baseURL}/api/users?page=2`);

    //     expect(response.status, 'ada yang salah').to.equal(202);
    // });
});

// ------------------------------------------
// describe ("Api Tests Suite", function () {
//     const baseURL= "https://regres.in";

//     it("READ - Get Single user", async function () {
//         const response = await fetch (`${baseURL}/api/users?page=2`);
//     });
// });


// --------------------------------------
// describe ("Api Tests Suite", function () {
//     const baseURL= "https://regres.in";

//     it("READ - Get Single user", async function () {
//         const newPost = {
//             name : "morpheos",
//             job  : "leader"
//         }

//         //hit
//         const response  = await fetch (`${baseURL}/api/users`, {
//             method: "POST",
//             headers :{ "Content-Type" : "application/json"},
//             body: JSON.stringify(newPost),
//         });
//     });
// });