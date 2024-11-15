// import { auth } from "@clerk/nextjs/server";

// const {sessionClaims}= auth();
// export const role=(sessionClaims?.metadata as {role?:string})?.role
// import { auth } from "@clerk/nextjs/server";
// export const role=async ()=>{

//     const {sessionClaims}= await auth();
//      const role=await (sessionClaims?.metadata as {role?:string})?.role
//      return role
// }
import { auth } from "@clerk/nextjs/server";

export async function getUserRole() {
    const { sessionClaims } = await auth();

  // Safely extract the role from metadata
  return (sessionClaims?.metadata as { role?: string })?.role ?? "guest"; // Default to "guest"
}
export async function getUserId() {
    const { userId } = await auth();

  // Safely extract the role from metadata
  return userId;
}
