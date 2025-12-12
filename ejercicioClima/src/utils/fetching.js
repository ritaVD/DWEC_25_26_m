const fetching = async (endpoint) => {
    const PORT = import.meta.env.VITE_PORT || 4001;
    const URL = import.meta.env.VITE_URL || "http://localhost"
    const URL_PORT = `${URL}:${PORT}`;

    try{
        const response = await fetch(`${URL_PORT}/${endpoint}`);
        //console.log(`${URL_PORT}/${endpoint}`)
        if(!response.ok){
            throw new Error ("Error haciendo el fetching");
        }
        const data = await response.json();
        //console.log("data",data)
        return data;    

    }catch (error){
        console.log("Error", error);
        throw error;
    }
}
