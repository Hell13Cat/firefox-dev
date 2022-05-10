imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
    img = imgs[i];
    if(img.src.includes("/manganew_thumbs_blur/")) {
        pars_link = img.src;
        print(pars_link)
        ref_res = pars_link.replace("/manganew_thumbs_blur/", "/manganew_thumbs/");
        if(img.hasAttribute('data-src')) {
            img.setAttribute('data-src', ref_res);
        }
        img.setAttribute('src', ref_res);
    };
}
