

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-white/10 text-center text-slate-500 text-sm">
            <p>Miguelmo - {year}</p>
        </footer>
    );
};

export default Footer;
