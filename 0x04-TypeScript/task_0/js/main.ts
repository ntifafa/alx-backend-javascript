interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Nutifafa',
    lastName: 'Foli',
    age: 30,
    location: 'Accra, Greater Accra Region',
}
const student2: Student = {
    firstName: 'Mawuena',
    lastName: 'Dumor',
    age: 25,
    location: 'Dansoman, Greater Accra Region',
}

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student: Student): void => {
	const newRow: HTMLTableRowElement = table.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})
