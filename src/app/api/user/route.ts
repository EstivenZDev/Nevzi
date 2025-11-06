import UsersModel from "@/database/models/user";
import dbConnection from "@/lib/dbConnection";
import { UserProps } from "@/services/user/user.types";
import { NextResponse } from "next/server";



export async function GET(req: Request) {
  try {

    await dbConnection();


    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (email) {
      const user = await UsersModel.findOne({ email });
      if (!user) {
        return NextResponse.json({ ok: false, message: "Usuario no encontrado" }, { status: 404 });
      }
      return NextResponse.json({ ok: true, user });
    }


    const users = await UsersModel.find();
    return NextResponse.json({ ok: true, users });

  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    return NextResponse.json(
      { ok: false, message: "Error al obtener los usuarios" },
      { status: 500 }
    );
  }
}







