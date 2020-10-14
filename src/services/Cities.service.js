import {
    db
} from "@/firebase";

const citiesRef = db.collection("cities");

export const CitiesService = {
    async getCities() {
        const citiesDoc = await citiesRef.get();

        const cities = citiesDoc.docs.map(city =>
            Object.create({
                ...city.data(),
                id: city.id
            })
        );

        return cities;
    },
    async addCity(city) {
        const result = await citiesRef.add(city);
        return result.id;
        
    },
    deleteCity(city) {
        const citiesRefDelete = citiesRef.doc(city.id);
        citiesRefDelete.delete();
    }
};