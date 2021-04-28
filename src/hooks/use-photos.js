import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getPhotos, getUserByUserId } from '../services/firebase';

export default function usePhotos() {

    const [photos, setPhotos] = useState(null);

    const {
        user: { uid: userId = ''}
    } = useContext(UserContext)

    useEffect(() => {
        async function getTimeLinePhotos() {

            const {following} = await getUserByUserId(userId)
            let followedUserPhotos = []

            if (following.length > 0) {
                followedUserPhotos = await getPhotos(userId, following)
            }
        }

        // if (userId) {
        //     getTimeLinePhotos()
        // }
    }, []);

    return { photos };
}