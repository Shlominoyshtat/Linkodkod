export async function ReadPostById(id: any) {
  try {
    const result = await fetch(`http://localhost:3000/read/${id}`);
    if (!result.ok) {
      const err = await result.json();
      console.error(`err: ${err}`);
    }
    return await result.json();
  } catch (error) {
    console.error("error: ", error);
  }
}
