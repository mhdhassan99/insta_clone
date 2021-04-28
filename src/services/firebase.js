import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();

        return result.docs.map((user) => user.data().length > 0)
}

// get user from firebase where userId === userId (passed from auth)
export async function getUserByUserId(userId) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('userId', '==', userId)
        .get();

    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));

    return user;
};

export async function getSuggestedProfiles(userId, following) {
    const result = await firebase
        .firestore()
        .collection('users')
        .limit(10)
        .get();

    return result.docs
        .map((user) => ({ ...user.data(), docId: user.id }))
        .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
};

// updateLoggedInUserFollowing, updateFollowedUserFollowers

export async function updateLoggedInUserFollowing(
    loggedInUserDocId, // currently logged in user
    profileId, // the user that current user request to follow
    isFollowingProfile // true/false (is the current user is following the user or not)
    ) {
    return firebase
        .firestore()
        .collection('users')
        .docId(loggedInUserDocId)
        .update({
            following: isFollowingProfile
                ? FieldValue.arrayRemove(profileId)
                : FieldValue.arrayUnion(profileId)
        });
}

export async function updateFollowedUserFollowers(
    profileDocId, // currently logged in user
    loggedInUserDocId, // the user that current user request to follow
    isFollowingProfile // true/false (is the current user is following the user or not)
    ) {
    return firebase
        .firestore()
        .collection('users')
        .docId(profileDocId)
        .update({
            following: isFollowingProfile
                ? FieldValue.arrayRemove(loggedInUserDocId)
                : FieldValue.arrayUnion(loggedInUserDocId)
        });
}