export const addEditBillboard = async (monday, tuesday, wednesday, thursday, friday, saturday, sunday, xtoken) => {
    const token = xtoken; 
    const url = 'https://radio-pa-cuba.herokuapp.com/api/radio';
    const payload = {
        "code": "RPC",
        "billboard": [
            {
                "day": 1,
                "programs": monday
            },
            {
                "day": 2,
                "programs": tuesday
            },
            {
                "day": 3,
                "programs": wednesday
            },
            {
                "day": 4,
                "programs": thursday
            },
            {
                "day": 5,
                "programs": friday
            },
            {
                "day": 6,
                "programs": saturday
            },
            {
                "day": 7,
                "programs": sunday
            }
        ]
    };

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'x-token': token
        },
        method: 'POST',
        body: JSON.stringify(payload)
    });
    return await response.json();
}