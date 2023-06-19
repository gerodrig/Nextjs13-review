import { NextResponse } from "next/server";


export async function GET(req: Request, res: Response) {
  

    return NextResponse.json({
        method: req.method,
        count: 100
    })
}

export async function POST(req: Request, res: Response) {

    return NextResponse.json({
        method: req.method,
        count: 100
    })
}