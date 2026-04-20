import { use } from "react";
import {auxiosAuth} from "./api";

export const login = async (data) => {
    return await auxiosAuth.post("/auth/login", data);
};

export const register = async (data) => {
    return await auxiosAuth.post("/auth/register", data,{ 
    Headers: {"Content-Type": "multipart/form-data"}
    });
};

export const forgotPassword = async (data) => {
    return await auxiosAuth.post("/auth/forgot-password", {email});
};

export const resetPassword = async (token, newPassword) => {
    return await auxiosAuth.post("/auth/reset-password", { token, newPassword });
};

export const verifyEmail = async (token) => {
    return await auxiosAuth.post("/auth/verify-email", { token });
};

export const updateUserRole = async (userId, roleName) => {
    return await auxiosAuth.post(`/users/${userId}/role`, { roleName });
};

export const getAllUsers = async () => {
    const {data} = await auxiosAuth.get("/auth/users");
    return { users: data };
};