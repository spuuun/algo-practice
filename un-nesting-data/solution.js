const mockData = require('./dummyData/data0.json')

const data = [ 
    {
        name: "Spleff Gorbinson",
        id: 3,
        title: "Janitor",
        directReports: [
            {
                name: "Al Gore",
                id: 1,
                title: "Developer",
                directReports: []
            },
            {
                name: "Amaria Crambles",
                id: 2,
                title: "Architect",
                directReports: []
            }
        ]
    },    
    {
        name: "John Deere",
        id: 4,
        title: "Developer",
        directReports: []
    },    
    {
        name: "John Doe",
        id: 5,
        title: "Developer",
        directReports: []
    },
    {
        name: "Jane Dimploop",
        id: 6,
        title: "Manager",
        directReports: [
            {
                name: "Samanthana Branthis",
                id: 7,
                title: "Developer",
                directReports: []
            }
        ]
    }
]


let flattenedData = [];
const transformData = data => {
    data.forEach(d => {
        flattenedData.push(d)
        if (d.directReports.length > 0) {
            transformData(d.directReports);
        }
    });
}

transformData(mockData);
console.log('FLATTENED DATA: ', flattenedData);
console.log('LENGTH: ', flattenedData.length);