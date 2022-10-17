export default function Header() {

    const inlineStyle = {
        color: "purple",
        backgroundColor: "#99e"
    }

    return (
        <header style={inlineStyle}>
            <h1>this is the header</h1>
            <h2>this is a subtitle in the header</h2>
        </header>
    );
}
