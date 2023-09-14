// import nodemailer from 'nodemailer';

// export type EmailData = {
//     from: string;
//     subject: string;
//     message: string;
// };
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.AUTH_USER,
//         pass: process.env.AUTH_PASS,
//     },
// });
// export async function POST(req: Request) {
//     const body = await req.json(); // body = ReadableStream

//     return sendMail(body)
//         .then(
//             () =>
//                 new Response(JSON.stringify({ message: '메일을 성공적으로 보냈음' }), {
//                     status: 200,
//                 })
//         )
//         .catch((error) => {
//             console.error(error);

//             return new Response(JSON.stringify({ message: '메일 전송에 실패함' }), {
//                 status: 500,
//             });
//         });
// }
// export async function sendMail({ from, subject, message }: EmailData) {
//     const mailData = {
//         to: process.env.AUTH_USER,
//         subject: `${subject}`,
//         from: from,
//         text: message,
//     };
//     return transporter.sendMail(mailData);
// }
