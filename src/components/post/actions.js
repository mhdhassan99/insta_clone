import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FirebaseContext from '../../context/user';
import UserContext from '../../context/user';

export default function Actions({dicId, totalLikes, likedPhoto, handelFocus }) {
    const {
        user: { uid: userId = '' }

    } = useContext(UserContext);

    const [toggleLiked, setToggleLiked] = useState(likedPhoto);
    const [likes, setLikes] = useState(totalLikes);

    const { firebase, FieldValue } = useContext(FirebaseContext);

    const handleToggleLiked = async () => {
        setToggleLiked((toggleLiked) => !toggleLiked);
    };
    
};