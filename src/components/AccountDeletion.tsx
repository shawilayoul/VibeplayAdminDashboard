const AccountDeletion = () => {
    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                    Suppression de compte pour FJU Christian Vibes
                </h1>

                <p className="text-gray-700 mb-6">
                    Pour supprimer définitivement votre compte de l'application FJU Christian Vibes, suivez les instructions ci-dessous. Une fois supprimé, toutes vos données, y compris vos préférences et votre historique d'activités, seront effacées. Certaines données peuvent être conservées pour des raisons légales, si nécessaire.
                </p>

                <ol className="list-decimal pl-6 text-gray-700 mb-6">
                    <li>Connectez-vous à votre compte (vous devez être connecté pour accéder à votre profil).</li>
                    <li>Ouvrez l'application et accédez à votre page de profil.</li>
                    <li>Cliquez sur le bouton <strong>"Supprimer le compte"</strong>.</li>
                    <li>Une demande de confirmation apparaîtra pour vérifier votre décision avant de procéder à la suppression.</li>
                    <li>Une fois confirmé, votre compte et toutes les données associées seront définitivement supprimés de notre système, y compris votre <strong>profil</strong>, <strong>préférences</strong>, et <strong>historique d'activités</strong>.</li>
                </ol>

                <p className="text-red-600 font-semibold">
                    Veuillez noter : Cette action est irréversible. Une fois supprimé, vos données ne peuvent pas être récupérées.
                </p>

                <p className="text-gray-700 mt-4">
                    **Aucune période de conservation supplémentaire**. Toutes les données seront supprimées immédiatement après la suppression de votre compte.
                </p>
            </div>
        </div>
    );
}

export default AccountDeletion;
