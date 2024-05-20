import html2pdf from "html2pdf.js";

const opt = {
  margin: 0,
  filename: "myResume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

const scaleCv = () => {
  document.body.classList.add("scale-cv");
};

const removeScale = () => {
  document.body.classList.remove("scale-cv");
};

const generateResume = async (areaCv) => {
  scaleCv();
  try {
    await html2pdf(areaCv, opt);
  } catch (err) {
    console.log(err);
  }
  setTimeout(removeScale, 5000);
};

export const handleGenerateResume = (areaCv) => {
  generateResume(areaCv, opt, scaleCv, removeScale);
};
