import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStores } from '@/hooks/useStores';

const BookmarkRedirect = () => {
    const navigate = useNavigate();

    const { textbookStore } = useStores();
    const { bookmark } = textbookStore;

    const redirectToUrl = bookmark;

    useEffect(() => {
        navigate(redirectToUrl);
    }, [navigate, redirectToUrl]);

    return null;
};

export default BookmarkRedirect;
