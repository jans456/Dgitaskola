// import fetch from "node-fetch"
// import { expect } from "chai"; //validation


// describe("API Tests Suite", function () {
//     const baseURL="https://reqres.in";

//     it("READ - Get Single user", async function () {
//     //    const response = await fetch(`${baseURL}/api/users?page=2`);

//         const response = await fetch("https://reqres.in/api/users/2", {
//             headers: { "x-api-key": "reqres_bc7d582aeb1e47959840e1bb200dfdd3" },
//             body: JSON.stringify({
//                 name:"morpheus",
//                 job:"leader"
//             }),
//     });

//        expect(response.status, 'the testcase is error').to.equal(200);

//     });

// });

// //gagal validasi karna kurang api keynya 
// // jika butuh body tambahkan harus ada method jika tidak ada, tidak bisa digunakan
// // body dihilangin mlah bisa