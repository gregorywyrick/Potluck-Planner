/*document.addEventListener('DOMContentLoaded', async () => {
    const signResponse = await fetch('../../controllers/signuploadform-routes');
    const signData = await signResponse.json();*/

    const url = "https://api.cloudinary.com/v1_1/dlod5jkqc/image/upload";
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const files = document.querySelector("[type=file]").files;
        const formData = new FormData();

        for (let i=0; i<files.length; i++) {
            let file = files[i];
            formData.append("file", file);
            formData.append("upload_preset", "docs_upload_example_us_preset");

            fetch(url, {
                method: "POST",
                body: formData
            })
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                /*console.log(JSON.parse(data))
                var str = JSON.stringify(JSON.parse(data), null, 4);*/
                document.getElementById("data").innerHTML += data;
            });
        }
    });
/*})*/