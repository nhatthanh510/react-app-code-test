import { createContext, useState } from 'react';
import { SignInFormData, SignInResponse, AuthContextType } from 'types';
import { signIn } from 'services'
import { getAuthDataInStorage, setAuthDataInStorage, removeAuthDateInStorage } from 'utils/storage'


export const AuthContext = createContext<AuthContextType>({
    username: '',
    token: null,
    onSignIn: () => Promise.resolve(''),
    onSignOut: () => { },
})

export const AuthProvider: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const { token: tokenInStorage, name: nameInStorage } = getAuthDataInStorage() || {}
    const [token, setToken] = useState<string | null>(tokenInStorage || null);
    const [username, setUsername] = useState<string>(nameInStorage || '');

    const handleLogin = async (data: SignInFormData) => {
        try {
            const response: SignInResponse = await signIn(data);
            const { token } = response;
            setToken(token);
            setAuthDataInStorage({
                name: data.username,
                token
            })
            setUsername(data.username);
            return token
        } catch (error) {
            throw error;
        }
    };

    const handleLogout = () => {
        setToken(null);
        removeAuthDateInStorage()
        setUsername('')
    };

    const value = {
        username,
        token,
        onSignIn: handleLogin,
        onSignOut: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};