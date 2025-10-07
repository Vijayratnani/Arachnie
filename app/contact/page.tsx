export default function ContactPage() {
  return (
    <section className="text-center py-16 px-6">
      <h1 className="text-3xl font-bold text-green-400 mb-4">Contact Us</h1>
      <p className="text-gray-400 max-w-xl mx-auto mb-6">
        Have questions or want to collaborate? Reach out to us — we’d love to hear from you.
      </p>
      <a
        href="mailto:team@arachnie.com"
        className="bg-green-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-300"
      >
        Email Us
      </a>
    </section>
  );
}
