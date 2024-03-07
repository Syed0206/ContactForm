const scriptUrl = 'https://script.google.com/macros/s/AKfycbzOzKIt_TqUOd7iY4UKWE8wzRu6kT_5Ql24IXSeYjsx9vmmQz8txo80wes2XhMADSB1vg/exec';
const handleSubmit = async (e) => {
  e.preventDefault();
  const form = document.forms['main'];
  try {
    const response = await fetch(scriptUrl, { method: 'POST', body: new FormData(form) });
    if (response.ok) {
      alert("Thank You! Your query has been submitted.");
      window.location.reload();
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error!', error.message);
  }
};

export default handleSubmit;
