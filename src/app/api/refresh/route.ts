import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET() {

    const cookieStore = cookies();
    const cookieName =  process.env.CAR_TOKEN_NAME || "refreshToken";
    const credential = (await cookieStore).get(cookieName);
    
    if(!credential){
        return NextResponse.json({
            message: "Credentail not found "
        },
        {
            status: 404
        }
    )
    }
    const refreshToken = credential.value;
    console.log("The refresh token: ",refreshToken);

    if(!refreshToken){
        return NextResponse.json({
            message: "The refresh token not found "
        },
    {
        status:404
    })
    }
//    handle refresh Token

    const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}refresh-token`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:refreshToken
        
    })
    if(!res){
        return NextResponse.json({
            message:"Refresh token not found"
        },{
            status:404
        })
    }
    const data = await res.json();
    const refresh = data?.refresh_token || null;
    const access = data?.access_token || null;

    (await cookieStore).set({
        name:cookieName,
        value: refresh,
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        sameSite:"lax"
    })

    return NextResponse.json({
        accessToken:access
    },{
        status: 200
    })
}