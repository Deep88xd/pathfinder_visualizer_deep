export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer id="footer">
			<p>&copy; {year} Deepak</p>
		</footer>
	);
}
