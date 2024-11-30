const AccountDeletion = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                    Account Deletion Process
                </h1>
                
                <p className="text-gray-700 mb-6">
                    To permanently delete your account, please follow these steps:
                </p>

                <ol className="list-decimal pl-6 text-gray-700 mb-6">
                    <li>Open the app and navigate to your profile page.</li>
                    <li>Click the <strong>'Delete Account'</strong> button.</li>
                    <li>
                        You will be prompted with a confirmation message to verify your decision before 
                        proceeding with the deletion.
                    </li>
                    <li>
                        Once confirmed, your account and all associated data will be permanently removed 
                        from our system, including your profile, preferences, and activity history.
                    </li>
                </ol>

                <p className="text-red-600 font-semibold">
                    Please Note: This action is irreversible, and once deleted, your data cannot be recovered.
                </p>
            </div>
        </div>
    );
}

export default AccountDeletion;
