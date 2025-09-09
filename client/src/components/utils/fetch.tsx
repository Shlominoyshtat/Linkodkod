export default async function funFetch(url: string) {
  try {
    const res = await fetch(url);
    return res.json();
  } catch {
    console.log("the fetch is not succeeded");
  }
}
