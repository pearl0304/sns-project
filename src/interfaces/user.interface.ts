export interface UserInterface {
    uid: string,
    email: string,
    displayName: string,
    intro?: string,
    photoURL?: string,
    date_created: string,
    date_updated?: string
}

export interface UserInputInterface {
    email: string,
    displayName?: string,
    password: string
}