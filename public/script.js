const data = document.querySelector('.data');
getData();
async function getData() {
    const response = await fetch('/scores');
    const val = await response.json();
    console.log(val);

    for(item of val) {
        const name = document.createElement('div');
        const score = document.createElement('div');
        name.setAttribute("class", "name");
        score.setAttribute("class", "score");
        name.textContent = `Name: ${item.Name}`;
        score.textContent = `Braincells: ${item.Score}`;

        data.append(name, score);


    }
}