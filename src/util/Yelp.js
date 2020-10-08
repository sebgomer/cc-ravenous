const apiKey = 'eKi1cNx17hsjAuUa8TERqWSl4HRW7qNwZlSBAmCjb0SnhkxRlaaUd0kMxgut4IhbgdIA7-q2_p_ojx_2mauiUTiFtIMKC2vlZijudBDM0lMm_KdzexAO0uS6YPJ-X3Yx'

let Yelp = {
    search(term, location, sortBy) {
        return (
            fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            })
            .then(response => { 
                console.log(response); 
                return response.json(); 
            })
            .then(jsonResponse => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => { 
                        console.log(business); 
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.address,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                        }
                    })
                }
            })
        )
    }
};

export default Yelp;  