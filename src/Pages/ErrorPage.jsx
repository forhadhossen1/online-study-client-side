const ErrorPage = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/QDk1tdF/404.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="mb-5">We are sorry, but we can not find the page you were looking for.
Go Home or try to search.</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ErrorPage;