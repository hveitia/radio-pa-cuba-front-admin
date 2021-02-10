export const loadBillboard = async () => {
    
    const url = 'https://radio-pa-cuba.herokuapp.com/api/radio';
    const response = await fetch(url);
    const { data } = await response.json(); 

    let monday = []; 
    let tuesday = [];
    let wednesday = []; 
    let thursday = [];
    let friday = [];
    let saturday = [];
    let sunday = [];

    const radioPaCuba = data.find(item => item['code'] === 'RPC');
    monday = radioPaCuba.billboard.find(item => item['day'] === 1);
    tuesday = radioPaCuba.billboard.find(item => item['day'] === 2);
    wednesday = radioPaCuba.billboard.find(item => item['day'] === 3);
    thursday = radioPaCuba.billboard.find(item => item['day'] === 4);
    friday = radioPaCuba.billboard.find(item => item['day'] === 5);
    saturday = radioPaCuba.billboard.find(item => item['day'] === 6);
    sunday = radioPaCuba.billboard.find(item => item['day'] === 7);

    return {
        monday: monday['programs'],
        tuesday: tuesday['programs'],
        wednesday: wednesday['programs'], 
        thursday: thursday['programs'],
        friday: friday['programs'],
        saturday: saturday['programs'],
        sunday: sunday['programs'],
    };
}