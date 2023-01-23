function txt_to_html(id, filename) {
    var content = document.getElementById(id);

    var xhr = new XMLHttpRequest();
    var file_path = "assets/text_file/" + filename;
    xhr.open("GET", file_path, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            content.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}