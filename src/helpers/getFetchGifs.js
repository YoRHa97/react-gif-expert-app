export const getFetchGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=G30g7LBaAPMlGI4Y7CZPxKSdLk8WPiOs`;

    const response = await fetch(url);

    const {data} = await response.json();

    const gifs = data.map(element => {

        // El signo "?" al final de un atributo garantiza que se retorne undefined en ves de un error  
        // en caso de que no exista y se intente acceder a un sub atributo del mismo 
        // Se lo denomina encadenamiento opcional

        return{
            id: element.id,
            title: element.title,
            url: element.images?.downsized_medium?.url
        };
    });

    return gifs;

};