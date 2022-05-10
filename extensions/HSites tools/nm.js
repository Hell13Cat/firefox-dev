imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
    img = imgs[i];
    if(img.src.includes("/thumb/")) {
        pars_link = img.src.split("/").reverse();
        file_name = pars_link[0];
        pars_link[0] = file_name.replace("_b", "");
        ref_res = pars_link.reverse().join("/");
        if(img.hasAttribute('data-src')) {
            img.setAttribute('data-src', ref_res);
        }
        img.setAttribute('src', ref_res);
    };
}
