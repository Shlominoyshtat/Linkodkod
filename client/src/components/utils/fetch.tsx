export default async function funFetch(url: string) {
  try {
    const result = await fetch(url);
    return result.json();
  } catch {
    console.log("the fetch is not succeeded");
  }
}
