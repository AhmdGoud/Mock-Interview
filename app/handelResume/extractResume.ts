export default async function extractedResumeText(
  file: File,
): Promise<string | unknown> {
  const { default: pdfToText } = await import("react-pdftotext");

  try {
    const resumeText = await pdfToText(file);
    return resumeText;
  } catch (error) {
    return error;
  }
}
