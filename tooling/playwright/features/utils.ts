export function checkHttpUrl(candidate: string): boolean {
  let candidateUrl;
  try {
    candidateUrl = new URL(candidate);
  } catch (error) {
    console.debug(`Invalid URL format: ${candidate}`, error);
    return false;
  }
  return (
    candidateUrl.protocol === "http:" || candidateUrl.protocol === "https:"
  );
}
