// import {products} from './data/products';
// import { NextApiRequest, NextApiResponse } from 'next';

// // // export default function handler(
// // //   req:NextApiRequest, 
// // //   res:NextApiResponse
// // //   ) {
// // //   console.log(req.method);
// // //   const id = Number(req.query.id);
// // //   console.log(id);
// // //   // if (req.method === 'GET') {
// // //     res.status(200).json(products);
// // //   // };
// // // }



// // const superagent = require("superagent");

// // export default function handler( req:NextApiRequest,  res:NextApiResponse) {
// //     const id = Number(req.query.id);

// //   if (isNaN(id) || typeof id !== "number") {
// //     res.status(400).send("Invalid request!!");
// //   }
// //   superagent.get(`http://localhost:3000/api/dataProducts/${id}`).then((response) => {
// //     console.log(response)
// //     res.status(200).send(response);
// //   });
// // }