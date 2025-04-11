"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const goto = (path: string | FormData) => {
  let target: string = "/"
  if (typeof path === "string") {
    target = path || "/"
  } else {
    target = path.get("goto")?.toString() || "/"
  }
  revalidatePath(target.substring(0, target.lastIndexOf("?")))
  redirect(target)
}
