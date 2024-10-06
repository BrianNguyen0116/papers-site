import { NextResponse } from 'next/server'

export async function POST(req) {
    if (req.method === 'POST') {
        const data = await req.json();
        console.log('Data', data);
        return NextResponse.json({status: "Success"}, { status: 200 });

    } else {
        console.log("Failed")
        return NextResponse.json({error: "Invalid request"}, { status: 500 });
    }
}
