imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
    img = imgs[i];
    img.setAttribute('style', 'filter: blur(0px);');
}
