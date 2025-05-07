import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    console.log('check ', searchParams.get("id"));
    
    return NextResponse.json({status: 200, message: "Success", data: "Product"});
}