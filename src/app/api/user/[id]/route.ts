import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import UsersModel from "@/database/models/user";


// 🔹 GET individual (por ID)
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnection();
    const user = await UsersModel.findById(params.id);

    if (!user) {
      return NextResponse.json({ ok: false, message: "User no encontrado" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, user });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "Error al buscar el usuario", error }, { status: 500 });
  }
}
