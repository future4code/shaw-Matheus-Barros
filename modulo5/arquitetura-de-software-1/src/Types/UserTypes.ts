export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type UserId = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export type User = {
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export type UserLogin = {
    email: string,
    password: string
}

export type AuthenticationData = {
    id: string,
    role: USER_ROLES
}
