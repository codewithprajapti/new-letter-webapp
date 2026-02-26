"use server";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(email, password);

  // your authentication logic here
}
