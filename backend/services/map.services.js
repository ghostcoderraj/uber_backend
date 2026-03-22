import axios from "axios";
import { message } from "statuses";
import captainModel from "../model/captain.model.js";

// Function to get latitude and longitude from an address using OpenStreetMap (Nominatim)
export const getAddressCoordinate = async (address) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&countrycodes=in`;

    try {
        const response = await axios.get(url, {
            headers: { "User-Agent": "Uber" } // Required by Nominatim
        });

        if (response.data.length > 0) {
            const location = response.data[0];
            return {
                lat: parseFloat(location.lat),
                lng: parseFloat(location.lon)
            };
        } else {
            throw new Error(`Failed to fetch coordinates for: ${address}`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Function to get distance and travel time between two addressed

export const getDistanceTime = async (originName, destinationName) => {
    try {
        //Fetch coordinates for origin and destination
        const origin = await getAddressCoordinate(originName);
        const destination = await getAddressCoordinate(destinationName);

        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.ORS_API_KEY}&start=${origin.lng},${origin.lat}&end=${destination.lng},${destination.lat}`;

        const response = await axios.get(url);

        if (response.data.routes.length > 0) {
            const route = response.data.routes[0];
            return {
                origin: originName,
                destination: destinationName,
                distance_km: route.summary.distance / 1000,   // Convert meters to km
                duration_min: route.summary.duration / 60,    // Convert seconds to minutes
                origin_coords: origin,
                coordinates: route.geometry.coordinates
            };
        } else {
            throw new Error("Failed to fetch distance and time");
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Function to get autocomplete suggestions for an address

export const getAutoCompleteSuggestions = async (input) => {
    try {
        if (!input) {
            throw new Error("Query parameter is required");
        }

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&addressdetails=1&countrycodes=in&limit=5`;

        const response = await axios.get(url, {
            headers: { "User-Agent": "Uber" } // Required by Nomination
        });

        if (response.data.length > 0) {
            const suggestions = response.data.map((place) => ({
                name: place.display_name,
                lat: parseFloat(place.lat),
                lng: parseFloat(place.lng)
            }));

            return suggestions;
        } else {
            throw new Error("Failed to fetch suggestions");
        }
    } catch (error) {
        console.error("Autocomplete error:", error);
        throw error;
    }
}

export const getCaptainInTheRadius = async (lat, lng, radius) => {
    try {
        const captains = await captainModel.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[lng, lat], radius / 6378.1]
                }
            }
        });
        return captains;
    } catch (error) {
        console.error(error);
        throw error;
    }
}