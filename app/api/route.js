import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request){
    const {description,gmail} =await request.json();

     const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,      // your Gmail
      pass: process.env.EMAIL_PASS       // your app password (not your regular password)
    }
  });

    const adminMail= {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER ,
        subject: `New review from ${gmail} `,
        text: `Hello, this is an automated message.\n\nThe Review is "${description}"`,
    };
    const userMail = {
        from: process.env.EMAIL_USER,
        to: gmail,
        subject: `New message from Rithu `,
        text: `Hello, this is an automated message.\n\n Thank you for your valuable review.`,
    };

    try {
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);
    return NextResponse.json({msg:"Thank you for your review"})
     } catch (error) {
    return NextResponse.json({msg:"FAILED"})
    }

}