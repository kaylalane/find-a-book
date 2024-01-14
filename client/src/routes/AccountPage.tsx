import { useUser } from "@clerk/clerk-react";
import Layout from "../components/Layout";
import "../styles/account.scss";

export default function AccountPage() {
    const { user } = useUser();
    if (!user) return <div>Loading</div>;

    return (
        <Layout>
            <div className="account-page">
                <div className="left-column">
                    <img
                        src={user?.imageUrl}
                        alt="profile"
                        className="account__image"
                    />
                    <table className="account__table">
                        <thead>
                            <tr>
                                <th colSpan="2">
                                    {user?.username}{" "}
                                    <a href="/user/edit" className="edit-button">(edit profile)</a>
                                </th>
                            </tr>
                        </thead>
                        <tr>
                            <td>Interests</td>
                            <td>with two columns</td>
                        </tr>
                        <tr>
                            <td>Favorite Book</td>
                            <td>with two columns</td>
                        </tr>
                        <tr>
                            <td>About Me</td>
                            <td>with two columns</td>
                        </tr>
                    </table>
                </div>
                <div className="right-column"></div>
            </div>
        </Layout>
    );
}
