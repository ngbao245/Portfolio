const Hero = () => (
  <section className="bg-gradient-to-br from-blue-100 to-blue-300 py-20 text-center rounded-lg shadow-lg mt-8">
    <h1 className="text-5xl font-extrabold mb-4 text-blue-800 drop-shadow">
      Chào mừng đến với <span className="text-blue-500">BookmarkHub!</span>
    </h1>
    <p className="text-xl mb-8 text-blue-700">
      Quản lý và lưu trữ bookmark của bạn một cách dễ dàng, nhanh chóng và an toàn.
    </p>
    <a
      href="#"
      className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-600 transition"
    >
      Bắt đầu ngay
    </a>
  </section>
);

export default Hero;
