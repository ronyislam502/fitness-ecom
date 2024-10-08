const handleImageUpload = async (file: string | Blob) => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await fetch(
      "https://api.imgbb.com/1/upload?expiration=600&key=aea0ff9e18f5bfdfc512cf73e660e2b5",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
export default handleImageUpload;
