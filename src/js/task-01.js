const numberOfCategories = document.querySelectorAll('.item');
const result = `Number of categories: ${numberOfCategories.length}`;
console.log(result)


const list = numberOfCategories.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.children.length}`)
})
    