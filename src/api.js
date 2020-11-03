const key = '18969498-6e5b40fdd1887241ff5ebc50a';
export default 
{
  page: 1,

  getData: function (search) {
    let URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${this.page}&per_page=12&key=${key}`;
    return fetch(URL)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.page++;
        return result.hits;
      })
  }
}


