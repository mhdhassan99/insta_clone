import { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Image from './image';
import Actions from './actions';

export default function Post({ content }) {
    //components 
    // header, image, action(like and comment icons), footer, comments

    // console.log('content', content)

    return (
        <div className="rounded col-span-4 border bg-white border-gray-primary mb-16">
            <Header username={content.username} />
            <Image src={content.imageSrc} caption={content.caption} />
            <Actions 
                docId={content.docId}
                totalLikes={content.likes.length}
                LikedPhoto={content.userLikedPhoto}
            />
        </div>
    )

}

Post.propTypes = {
    content: PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        userLikedPhoto: PropTypes.bool.isRequired,
        likes: PropTypes.array.isRequired,
        comments: PropTypes.array.isRequired,
        dateCreated: PropTypes.number.isRequired
    })
}