function submitFormData() {
    const formData = new FormData();
    const imageFile = document.querySelector('#image');
    formData.append("image", imageFile.files[0]);
    console.log(formData);
    axios.post('image', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}