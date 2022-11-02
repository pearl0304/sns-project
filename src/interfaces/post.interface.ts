export interface PostInterface {
    uid: string,
    text: string,
    photoURL?: string[],
    date_created: string,
    date_updated?: string
}

export interface PostInputInterface {
    uid: string,
    text: string,
    photoURL?: string[],
}