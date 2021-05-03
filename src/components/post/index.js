import { useRef } from 'react';
import PropTypes from 'prop-types';

export default function Post({ content }) {
    return <p>I am a post</p>
}

Post.propTypes = {
    content: PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
}