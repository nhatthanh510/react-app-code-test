
import React from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from 'react-toastify'
import useAuth from 'hooks/useAuth';
import SignIn from 'components/Auth/SignIn';
import { SignInFormData } from 'types'
import PageLoading from 'components/PageLoading'
import { REDIRECT_URL_QUERY_PARAM } from 'constants/index'


const SignInPage: React.FC = () => {
    const { onSignIn } = useAuth()
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(false)
    const redirectUrl = searchParams.get(REDIRECT_URL_QUERY_PARAM)

    const navigate = useNavigate();
    const onSubmit = async (data: SignInFormData) => {
        try {
            setLoading(true);
            await onSignIn(data);
            navigate(`${redirectUrl || '/'}`)
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const onCancel = async () => {
        navigate(-1)
    }

    return (
        <div className="mb-8">
            <h1 className="text-center text-4xl font-semibold mt-10">Sign In Form</h1>
            <SignIn onSubmit={onSubmit} onCancel={onCancel} />
            <PageLoading isLoading={loading} />
        </div>
    );
};


export default SignInPage
