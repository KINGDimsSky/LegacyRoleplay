import { NextRequest, NextResponse } from "next/server";

export async function POST (request : NextRequest) {
    try {
      const data = await request.json()
      return NextResponse.json({
        status : 200,
        message: "Success",
        data : data
    }, {status : 200})
    }catch{
        return NextResponse.json({
            status: 400,
            message: "Invalid JSON Format!"
        }, {status: 400})
    }
}