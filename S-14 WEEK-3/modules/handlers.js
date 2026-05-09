import { addItem } from './utils.js';
import { renderTable } from './ui.js';
import { createCounter } from './counter.js';
import { initialData } from './data.js';

let facultyList = [...initialData];

const getId = createCounter();

/* Read Image */
const readImage = file =>
    new Promise(res => {
        const reader = new FileReader();

        reader.onload = () => res(reader.result);

        reader.readAsDataURL(file);
    });

/* Add Faculty */
export const addFaculty = async () => {

    const name = document.getElementById("name").value;
    const empid = document.getElementById("empid").value;
    const dept = document.getElementById("dept").value;
    const desig = document.getElementById("desig").value;
    const file = document.getElementById("photo").files[0];

    if (!name || !empid || !dept || !desig) {
        alert("Please fill all fields");
        return;
    }

    const photo = file ? await readImage(file) : "";

    const newObj = {
        id: getId(),
        name,
        empid,
        dept,
        desig,
        photo
    };

    facultyList = addItem(facultyList, newObj);

    renderTable(facultyList);
};

/* Download ID Card */
window.downloadCard = (i) => {

    const f = facultyList[i];

    const win = window.open("", "", "width=400,height=600");

    win.document.write(`
        <html>
        <body>
            <h2>Faculty ID Card</h2>
            <img src="${f.photo}" width="100">
            <h3>${f.name}</h3>
            <p>${f.empid}</p>
            <p>${f.desig}</p>
            <p>${f.dept}</p>
        </body>
        </html>
    `);

    win.document.close();

    win.print();
};