const companyLinks = [
    {
        label: "About Us",
        url: "/about-us",
    },
    {
        label: "Careers",
        url: "/careers",
    },
    {
        label: "Terms",
        url: "/terms-of-use",
    },
    {
        label: "Interest Based Ads",
        url: "/privacy-policy",
    },
    {
        label: "Ad Preferences",
        url: "/adprefs",
    },
    {
        label: "Help",
        url: "/help",
    },
];

const workWithUsLinks = [
    {
        label: "Authors",
        url: "/authors",
    },
    {
        label: "Advertise",
        url: "/advertise",
    },
    {
        label: "Authors & ads blog",
        url: "/blog",
    },
    {
        label: "API",
        url: "/api",
    },
];

export default function Footer() {
    return (
        <footer>
            <div>
                <h3>Company</h3>
                <ul>
                    {companyLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.url}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Work With Us</h3>
                <ul>
                    {workWithUsLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.url}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {/*  <div>
                <h3>Connect</h3>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                    </li>
                </ul>
            </div> */}
            <div className="copyright">@2024 Find-a-book</div>
        </footer>
    );
}
