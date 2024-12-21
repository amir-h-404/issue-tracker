import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "@/app/validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json(),
    validation = createIssueSchema.safeParse(body);
  if (!validation.success)
    // 400 = bad request error
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  // 201 = an object created
  return NextResponse.json(newIssue, { status: 201 });
}
