import { NextRequest, NextResponse } from "next/server";

export async function POST (request : NextRequest) {

    const data = await request.json()

    return NextResponse.json({
        status : 202,
        message: "Success",
        data : data
    })
}