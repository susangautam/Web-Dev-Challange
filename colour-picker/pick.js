const button = document.querySelector("button")

const pickColor = async()=>{
    const eyeDropper = new EyeDropper();
    const{sRGBHex} = await eyeDropper.open();
    console.log(sRGBHex);
}
button.addEventListener("click",pickColor);
