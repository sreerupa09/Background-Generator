function generateBackground() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const gradientType = document.getElementById("gradientType").value;
    const preview = document.querySelector(".preview");

    let backgroundStyle;

    if (gradientType === "linear") {
        backgroundStyle = `linear-gradient(to right, ${color1}, ${color2})`;
    } else if (gradientType === "radial") {
        backgroundStyle = `radial-gradient(circle, ${color1}, ${color2})`;
    }

    preview.style.background = backgroundStyle;
    document.body.style.background = backgroundStyle;
}
