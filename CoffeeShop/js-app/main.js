const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
   // getAllBeanVarieties()
     //   .then(beanVarieties => {
    //      console.log(beanVarieties);
    showAll();
        //})
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function htmlConverter(bean) {
    const beanHTML =
        `<div>
            <ul>
                <li>
                    ${bean.name}
                </li>
            </ul>
        </div>`
    return beanHTML
};

function showAll() {
    getAllBeanVarieties()
        .then(beans => {
            for (let bean of beans) {
                let html = htmlConverter(bean);
                document.querySelector(".beans").innerHTML += html;
            }
        })
}