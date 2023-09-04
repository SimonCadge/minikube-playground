import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const query = `query NumCalls {
        num_calls
    }`;
    try {
        const response = await fetch("http://playground-backend:3000/graphql", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({query})
        })
        const data = await response.json();
        return NextResponse.json(data, {
            status: 200
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json({error: 'failed to load data'}, {
            status: 500
        });
    }
}

export const dynamic = "force-dynamic";